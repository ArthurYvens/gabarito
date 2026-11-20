/* Aprende: liga o aprendizado (aprendizado.js, puro) ao aparelho. Guarda no IndexedDB, só para esta pessoa:
   - as contagens dos textos que ela adicionou (em quantos pedaços cada palavra aparece e quais palavras aparecem perto de quais),
     que se somam ao modelo inicial (dados/modelo-base.js, igual para todos);
   - os exemplos da tela de revisão (a pergunta foi aprovada, editada ou descartada) e os pesos do classificador treinado com eles.
   Nada sai do aparelho: não há rede, conta nem compartilhamento. Trabalho pesado vai em pedaços, com pausa entre eles. */
(function (root) {
  'use strict';
  var A = root.Aprendizado, K_CONT = 'apr-contagens', K_EX = 'apr-exemplos', K_USADAS = 'apr-usadas';
  var MIN_EXEMPLOS = 20;       // com menos que isso o gerador usa só as regras e o TF-IDF
  var MAX_EXEMPLOS = 5000, MAX_PALAVRAS = 30000, MAX_PARES = 60000, MAX_DOCS = 500;
  // Limites ao ler textos: um "documento" é um pedaço de ~uma página (como as questões do modelo inicial); no máximo 1,5 milhão de
  // caracteres por texto e 15 s por geração, somando todos os textos escolhidos. O que passar disso não entra na contagem.
  var JANELA = 4, PEDACO = 2000, MAX_PEDACOS = 750, ORCAMENTO_MS = 15000, MAX_USADAS = 5000;
  var N_ATR = root.Gerador.ATRIBUTOS.length;
  var base = null, C = null, E = null, atual = null, pronto = null, epoca = 0; // epoca muda ao zerar/importar: contagem em andamento é descartada

  var inteiro = function (v, min, max) { v = Math.round(Number(v)); return isFinite(v) ? Math.min(max, Math.max(min, v)) : min; };
  function mapaNum(o, max, re) {
    var r = Object.create(null), n = 0;
    if (o && typeof o === 'object') Object.keys(o).forEach(function (k) {
      if (n < max && re.test(k) && Number.isInteger(o[k]) && o[k] > 0 && o[k] < 1e7) { r[k] = o[k]; n++; }
    });
    return r;
  }
  // Tudo o que vem do IndexedDB ou de um backup é entrada não confiável: volta ao formato esperado, com limites.
  function contagens(v) {
    v = v && typeof v === 'object' ? v : {};
    var docs = inteiro(v.docs, 0, 1e6), df = mapaNum(v.df, MAX_PALAVRAS, /^[a-z]{3,30}$/);
    Object.keys(df).forEach(function (k) { if (df[k] > docs) df[k] = docs; if (!df[k]) delete df[k]; }); // palavra não está em mais documentos do que existem
    return { docs: docs, df: df, pares: mapaNum(v.pares, MAX_PARES, /^[a-z]{3,30} [a-z]{3,30}$/),
      ids: (Array.isArray(v.ids) ? v.ids : []).filter(function (i) { return typeof i === 'string' && /^[a-z0-9-]{3,40}$/.test(i); }).slice(-MAX_DOCS) };
  }
  // Cada exemplo é [atributos..., nota]: nota 1 = aprovada sem mudança, 0.5 = editada, 0 = desmarcada ou descartada.
  var atributosOk = function (l) { return Array.isArray(l) && l.length >= N_ATR && l.slice(0, N_ATR).every(function (n) { return typeof n === 'number' && n >= 0 && n <= 1; }); };
  function exemplos(v) {
    v = v && typeof v === 'object' ? v : {};
    var ex = (Array.isArray(v.ex) ? v.ex : []).filter(function (l) { return atributosOk(l) && l.length === N_ATR + 1 && [0, 0.5, 1].indexOf(l[N_ATR]) >= 0; }).slice(-MAX_EXEMPLOS);
    var ok = ex.length >= MIN_EXEMPLOS && Array.isArray(v.w) && v.w.length === N_ATR && typeof v.b === 'number' && isFinite(v.b) &&
      v.w.every(function (n) { return typeof n === 'number' && Math.abs(n) < 1e3; });
    return { ex: ex, w: ok ? v.w : null, b: ok ? v.b : 0 };
  }
  function treinar(ex) {
    if (ex.length < MIN_EXEMPLOS) return { w: null, b: 0 };
    return A.treinarLogistica(ex.map(function (l) { return { x: l.slice(0, N_ATR), y: l[N_ATR] }; }), { epocas: 200 });
  }

  function refazer() {
    base = base || A.lerBase(root.ModeloBase);
    atual = A.criarModelo(base, C, E.w ? { w: E.w, b: E.b } : null);
  }
  function carregar() {
    if (C) return Promise.resolve();
    pronto = pronto || Promise.all([Armazem.ler(K_CONT), Armazem.ler(K_EX)]).then(function (r) {
      C = contagens(r[0]); E = exemplos(r[1]); refazer(); pronto = null;
    });
    return pronto;
  }
  // Outra aba mexeu: relê na próxima vez.
  Armazem.aoMudar(function (chave) { if (chave === K_CONT || chave === K_EX || chave === '*') { C = null; epoca++; } });

  function partir(t, tam) {
    var out = [];
    for (var i = 0; i < t.length;) {
      var f = Math.min(t.length, i + tam), s = f < t.length ? t.lastIndexOf(' ', f) : -1;
      if (s > i) f = s;
      out.push(t.slice(i, f)); i = f;
    }
    return out;
  }
  /* Conta as palavras de um texto (secoes: [{ texto }]) como se fossem vários documentos (pedaços de ~uma página), em lotes de ~15 ms
     com pausa entre eles. Cada texto conta uma vez só (id). prazo: instante (ms) em que a contagem para. Se o app for zerado no meio,
     a contagem é descartada. */
  function contarDocumento(id, secoes, prazo) {
    return carregar().then(function () {
      if (C.ids.indexOf(id) >= 0) return false;
      var minha = epoca, pedacos = [], df = Object.create(null), pares = Object.create(null), docs = 0;
      prazo = prazo || Date.now() + ORCAMENTO_MS;
      secoes.forEach(function (s) { if (pedacos.length < MAX_PEDACOS) pedacos = pedacos.concat(partir(s.texto, PEDACO)); });
      pedacos = pedacos.slice(0, MAX_PEDACOS);
      return new Promise(function (ok) {
        (function lote(i) {
          var fim = Date.now() + 15;
          for (; i < pedacos.length && Date.now() < fim; i++) {
            var p = A.palavras(pedacos[i], root.Gerador.PARADA);
            A.somarDF(df, p); A.coocorrencias(p, JANELA, pares); docs++;
            if (i % 100 === 99) A.podar(pares, 2 * MAX_PARES);
          }
          if (i >= pedacos.length || Date.now() > prazo) return ok();
          setTimeout(function () { lote(i); }, 0);
        })(0);
      }).then(function () {
        if (minha !== epoca) return null; // zerou ou restaurou enquanto contava
        return Armazem.atualizar(K_CONT, function (v) {
          var c = contagens(v);
          if (c.ids.indexOf(id) >= 0) return v;
          Object.keys(df).forEach(function (k) { c.df[k] = (c.df[k] || 0) + df[k]; });
          Object.keys(pares).forEach(function (k) { c.pares[k] = (c.pares[k] || 0) + pares[k]; });
          return { docs: c.docs + docs, df: A.podar(c.df, MAX_PALAVRAS), pares: A.podar(c.pares, MAX_PARES), ids: c.ids.concat([id]).slice(-MAX_DOCS) };
        });
      }).then(function (v) { if (v && minha === epoca) { C = contagens(v); refazer(); } return !!v; });
    });
  }
  /* Antes de gerar: conta os textos escolhidos que ainda não foram contados (15 s no total) e devolve o modelo (ou null se algo falhar:
     o gerador então usa só as regras). docs: [{ id, secoes }]. */
  function preparar(docs) {
    var prazo = Date.now() + ORCAMENTO_MS;
    return carregar().then(function () {
      return docs.reduce(function (cadeia, d) { return cadeia.then(function () { return contarDocumento(d.id, d.secoes, prazo); }); }, Promise.resolve());
    }).then(function () { return atual; }, function () { return null; });
  }

  // Frases que já viraram pergunta (só a identificação delas): a próxima criação sobre o mesmo trecho traz frases novas.
  function usadas() {
    return Armazem.ler(K_USADAS).then(function (v) {
      return new Set((v && Array.isArray(v.h) ? v.h : []).filter(function (h) { return typeof h === 'string' && /^[a-z0-9]{1,8}$/.test(h); }));
    }, function () { return new Set(); });
  }
  function marcarUsadas(lista) {
    var novas = lista.filter(function (h) { return typeof h === 'string' && /^[a-z0-9]{1,8}$/.test(h); });
    if (!novas.length) return Promise.resolve();
    return Armazem.atualizar(K_USADAS, function (v) {
      var h = (v && Array.isArray(v.h) ? v.h : []).filter(function (x) { return typeof x === 'string'; });
      return { v: 1, h: h.concat(novas.filter(function (x) { return h.indexOf(x) < 0; })).slice(-MAX_USADAS) };
    }).catch(function () { /* sem IndexedDB: pode repetir */ });
  }

  // Assinatura do que a pessoa vê numa pergunta: se mudou entre a geração e o salvamento, ela foi editada.
  function assinatura(q) { return JSON.stringify([String(q.enunciado || '').trim(), (q.alternativas || []).map(function (a) { return String(a).trim(); }), q.resposta]); }
  /* Rascunhos da revisão -> exemplos { x, y }. Só as perguntas criadas pelo gerador (têm ml) entram. descartou: a revisão inteira foi descartada. */
  function exemplosDe(rascunhos, descartou) {
    return (rascunhos || []).filter(function (q) { return q.ml && atributosOk(q.ml.x) && q.ml.x.length === N_ATR; }).map(function (q) {
      return { x: q.ml.x, y: descartou || !q.incluir ? 0 : assinatura(q) === q.ml.ori ? 1 : 0.5 };
    });
  }
  function registrar(lista) {
    var novos = lista.filter(function (e) { return atributosOk(e.x) && e.x.length === N_ATR && [0, 0.5, 1].indexOf(e.y) >= 0; }).map(function (e) { return e.x.concat([e.y]); });
    if (!novos.length) return Promise.resolve();
    return carregar().then(function () {
      return Armazem.atualizar(K_EX, function (v) {
        var ex = exemplos(v).ex.concat(novos).slice(-MAX_EXEMPLOS), t = treinar(ex);
        return { v: 1, ex: ex, w: t.w, b: t.b };
      });
    }).then(function (v) { E = exemplos(v); refazer(); }).catch(function () { /* sem IndexedDB: o app segue só com as regras */ });
  }

  function resumo() {
    return carregar().then(function () {
      return { exemplos: E.ex.length, documentos: C.ids.length, assuntos: Object.keys(Store.estado.dominio).length, classificador: !!E.w, minimo: MIN_EXEMPLOS };
    });
  }
  // Esquece tudo o que o app aprendeu com a pessoa. As respostas, o histórico e os bancos ficam.
  function zerar() {
    var st = Store.estado;
    epoca++;
    st.dominio = Object.create(null); st.dificuldades = Object.create(null);
    Object.keys(st.revisao).forEach(function (id) { delete st.revisao[id].falhas; });
    if (st.perfil) st.perfil.aprendizadoOk = true; // zerado de propósito: não refazer o domínio a partir do histórico
    Store.salvar();
    return Promise.all([Armazem.remover(K_CONT), Armazem.remover(K_EX), Armazem.remover(K_USADAS)]).then(function () { C = null; });
  }
  function exportar() { return carregar().then(function () { return { v: 1, contagens: C, exemplos: { ex: E.ex, w: E.w, b: E.b } }; }); }
  /* Backup -> aparelho. Sem aprendizado no backup (o) o que havia no aparelho é apagado: o aparelho passa a ter só o que o backup tem.
     Com ele, tudo é validado de novo e os pesos do classificador são retreinados a partir dos exemplos (não se confia nos pesos do arquivo). */
  function importar(o) {
    epoca++;
    var apagar = function () { return Promise.all([Armazem.remover(K_CONT), Armazem.remover(K_EX), Armazem.remover(K_USADAS)]).then(function () { C = null; }); };
    if (!o || typeof o !== 'object') return apagar();
    var c = contagens(o.contagens), e = exemplos(o.exemplos), t = treinar(e.ex);
    return Promise.all([Armazem.gravar(K_CONT, c, true), Armazem.gravar(K_EX, { v: 1, ex: e.ex, w: t.w, b: t.b }, true), Armazem.remover(K_USADAS)]).then(function () { C = null; });
  }

  root.Aprende = { carregar: carregar, modelo: function () { return carregar().then(function () { return atual; }); }, preparar: preparar, contarDocumento: contarDocumento, usadas: usadas, marcarUsadas: marcarUsadas,
    assinatura: assinatura, exemplosDe: exemplosDe, registrar: registrar, resumo: resumo, zerar: zerar, exportar: exportar, importar: importar };
})(this);
