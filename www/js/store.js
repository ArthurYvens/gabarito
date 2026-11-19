/* Store: todo o progresso do aluno, salvo no navegador (localStorage). */
(function (root) {
  'use strict';
  var CHAVE = 'gabarito.v1';
  var MAX_HIST = 12; // respostas guardadas por questão

  function vazio() {
    return {
      versao: 1,
      perfil: null, // { nome, objetivo, materias[], metaDiaria, explicacaoProfunda, tema, penalidadeCE, dataProva }
      respostas: Object.create(null), // id -> [{ t, certo, r }]
      simulados: [],
      revisao: Object.create(null), // id -> { caixa, proxima }
      aulas: Object.create(null), // aulaId -> data de conclusão
      redacoes: [],
      atividade: Object.create(null), // 'AAAA-MM-DD' -> questões respondidas
      plano: null,
      notas: Object.create(null), // id da questão -> anotação do aluno
      motivos: Object.create(null), // id da questão -> por que o aluno errou (Store.MOTIVOS)
      cartoes: Object.create(null), // id -> cartão de memorização { frente, verso, qid, caixa, proxima, criadoEm }
      sessoes: Object.create(null), // 'AAAA-MM-DD' -> quantos blocos do plano o aluno marcou como feitos
      importados: [] // só para migrar: os bancos agora ficam no IndexedDB (armazem.js)
    };
  }

  /* Normaliza o estado vindo do localStorage ou de um backup (entrada não confiável): cada campo volta
     ao tipo esperado e os ids ficam restritos a [a-z0-9-], porque vários deles vão para HTML e URLs.
     Mapas usam protótipo nulo para que ids como "constructor" não colidam com Object.prototype. */
  function normalizar(e) {
    e = e && typeof e === 'object' ? e : {};
    var mapa = function (o, fn) {
      var r = Object.create(null);
      if (o && typeof o === 'object' && !Array.isArray(o)) Object.keys(o).forEach(function (k) { var v = fn(o[k]); if (v !== undefined) r[k] = v; });
      return r;
    };
    var num = function (v, min, max, pad) { v = Number(v); return isFinite(v) ? Math.min(max, Math.max(min, v)) : pad; };
    var txt = function (v, max) { return typeof v === 'string' ? v.slice(0, max) : ''; };
    var id = function (v) { return typeof v === 'string' && /^[a-z0-9-]{1,60}$/.test(v) ? v : null; };
    var lista = function (v) { return Array.isArray(v) ? v : []; };
    var iso = function (v) { return typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v) ? v : ''; };
    var resp = function (v) { return typeof v === 'boolean' || (Number.isInteger(v) && v >= 0 && v < 5) ? v : undefined; };

    var p = e.perfil && typeof e.perfil === 'object' ? e.perfil : null;
    var out = vazio();
    out.perfil = p ? {
      nome: txt(p.nome, 40),
      objetivo: root.Banco && Banco.objetivo(p.objetivo) ? p.objetivo : 'livre',
      materias: lista(p.materias).filter(function (m) { return !root.Banco || Banco.materia(m); }),
      metaDiaria: Math.round(num(p.metaDiaria, 5, 300, 20)),
      metaSemanal: Math.round(num(p.metaSemanal, 10, 2000, Math.round(num(p.metaDiaria, 5, 300, 20) * 5))),
      explicacaoProfunda: p.explicacaoProfunda !== false,
      tema: ['auto', 'light', 'dark'].indexOf(p.tema) >= 0 ? p.tema : 'auto',
      penalidadeCE: p.penalidadeCE !== false,
      dataProva: iso(p.dataProva)
    } : null;
    if (out.perfil && !out.perfil.materias.length && root.Banco) out.perfil.materias = Banco.materias.map(function (m) { return m.id; });
    out.respostas = mapa(e.respostas, function (h) {
      var l = lista(h).filter(function (x) { return x && typeof x === 'object'; }).slice(-MAX_HIST)
        .map(function (x) {
          var o = { t: num(x.t, 0, 9e15, 0), certo: x.certo === true, r: resp(x.r) };
          if (isFinite(Number(x.ms)) && Number(x.ms) > 0) o.ms = Math.round(num(x.ms, 0, 3600000, 0));
          if ([0, 1, 2].indexOf(x.conf) >= 0) o.conf = x.conf;
          if (Number.isInteger(x.dicas) && x.dicas > 0) o.dicas = Math.min(3, x.dicas);
          return o;
        });
      return l.length ? l : undefined;
    });
    out.simulados = lista(e.simulados).filter(function (s) { return s && id(s.id); }).slice(-150).map(function (s) {
      var qs = lista(s.questoes).filter(function (q) { return typeof q === 'string'; }).slice(0, 500);
      return {
        id: s.id, titulo: txt(s.titulo, 120) || 'Simulado', criadoEm: num(s.criadoEm, 0, 9e15, Date.now()), concluidoEm: num(s.concluidoEm, 0, 9e15, 0),
        modo: s.modo === 'prova' ? 'prova' : 'estudo', origem: ['simulado', 'revisao', 'diagnostico'].indexOf(s.origem) >= 0 ? s.origem : 'simulado',
        questoes: qs, respostas: mapa(s.respostas, resp), confirmadas: mapa(s.confirmadas, function (v) { return v === true || undefined; }),
        marcadas: mapa(s.marcadas, function (v) { return v === true || undefined; }),
        riscadas: mapa(s.riscadas, function (v) { return lista(v).filter(function (i) { return Number.isInteger(i) && i >= 0 && i < 5; }); }),
        atual: Math.round(num(s.atual, 0, Math.max(0, qs.length - 1), 0)),
        tempos: mapa(s.tempos, function (v) { return isFinite(Number(v)) && Number(v) >= 0 ? Math.min(Math.round(Number(v)), 86400) : undefined; }),
        confianca: mapa(s.confianca, function (v) { return [0, 1, 2].indexOf(v) >= 0 ? v : undefined; }),
        dicas: mapa(s.dicas, function (v) { return Number.isInteger(v) && v > 0 ? Math.min(3, v) : undefined; }),
        tempoLimiteSeg: Math.round(num(s.tempoLimiteSeg, 0, 86400, 0)), decorridoSeg: Math.round(num(s.decorridoSeg, 0, 864000, 0)),
        status: s.status === 'concluido' ? 'concluido' : 'andamento'
      };
    }).filter(function (s) { return s.questoes.length; });
    out.revisao = mapa(e.revisao, function (c) {
      return c && iso(c.proxima) ? { caixa: Math.round(num(c.caixa, 0, 5, 0)), proxima: c.proxima } : undefined;
    });
    out.aulas = mapa(e.aulas, function (v) { return isFinite(Number(v)) ? Number(v) : undefined; });
    out.atividade = mapa(e.atividade, function (v) { return isFinite(Number(v)) && Number(v) > 0 ? Math.round(Number(v)) : undefined; });
    Object.keys(out.atividade).forEach(function (k) { if (!iso(k)) delete out.atividade[k]; });
    out.redacoes = lista(e.redacoes).filter(function (r) { return r && id(r.id); }).map(function (r) {
      var enem = r.tipo !== 'concurso';
      return { id: r.id, tema: txt(r.tema, 200), tipo: enem ? 'enem' : 'concurso', texto: txt(r.texto, 20000),
        notas: lista(r.notas).slice(0, enem ? 5 : 3).map(function (n) { return Math.round(num(n, 0, enem ? 200 : 10, 0)); }),
        max: enem ? 1000 : 30, segundos: Math.round(num(r.segundos, 0, 864000, 0)), criadoEm: num(r.criadoEm, 0, 9e15, Date.now()) };
    });
    var pl = e.plano;
    out.plano = pl && pl.cfg && pl.semana && typeof pl.semana === 'object' ? {
      cfg: { dias: lista(pl.cfg.dias).filter(function (d) { return Number.isInteger(d) && d >= 0 && d <= 6; }), horasPorDia: num(pl.cfg.horasPorDia, 1, 12, 2) },
      semana: mapa(pl.semana, function (b) { var l = lista(b).filter(function (m) { return !root.Banco || Banco.materia(m); }); return l; }),
      criadoEm: num(pl.criadoEm, 0, 9e15, 0)
    } : null;
    if (out.plano) Object.keys(out.plano.semana).forEach(function (k) { if (!/^[0-6]$/.test(k)) delete out.plano.semana[k]; });
    var r = e.rascunho;
    out.rascunho = r && typeof r === 'object' ? { tema: Math.round(num(r.tema, 0, 99, 0)), texto: txt(r.texto, 20000), segundos: Math.round(num(r.segundos, 0, 864000, 0)),
      avaliando: r.avaliando === true, notas: lista(r.notas).slice(0, 5).map(function (n) { return Math.round(num(n, 0, 200, 0)); }) } : null;
    out.cartoes = mapa(e.cartoes, function (c) {
      if (!c || typeof c !== 'object' || typeof c.frente !== 'string' || typeof c.verso !== 'string' || !c.frente.trim()) return undefined;
      return { frente: c.frente.slice(0, 4000), verso: c.verso.slice(0, 4000), qid: typeof c.qid === 'string' ? c.qid.slice(0, 80) : '',
        caixa: Math.round(num(c.caixa, 0, 5, 0)), proxima: iso(c.proxima) || Motor.hoje(), criadoEm: num(c.criadoEm, 0, 9e15, Date.now()) };
    });
    Object.keys(out.cartoes).forEach(function (k) { if (!/^[a-z0-9-]{1,60}$/.test(k)) delete out.cartoes[k]; });
    out.sessoes = mapa(e.sessoes, function (v) { return Number.isInteger(v) && v > 0 ? Math.min(v, 12) : undefined; });
    Object.keys(out.sessoes).forEach(function (k) { if (!iso(k)) delete out.sessoes[k]; });
    out.motivos = mapa(e.motivos, function (v) { return Store.MOTIVOS.indexOf(v) >= 0 ? v : undefined; });
    out.notas = mapa(e.notas, function (v) { return typeof v === 'string' && v.trim() ? v.slice(0, 5000) : undefined; });
    out.importados = lista(e.importados).filter(function (b) { return b && Array.isArray(b.questoes); })
      .map(function (b) { return { nome: txt(b.nome, 80) || 'Banco importado', questoes: b.questoes }; });
    return out;
  }

  var estado = vazio();
  var avisoFalha = null;

  var Store = {
    get estado() { return estado; },
    MOTIVOS: ['Não sabia o conteúdo', 'Confundi conceitos', 'Falta de atenção', 'Caí na pegadinha', 'Faltou tempo'],
    normalizar: normalizar,
    onFalha: function (fn) { avisoFalha = fn; },

    CHAVE: CHAVE,
    corrompido: false,
    carregar: function () {
      var bruto = null;
      try { bruto = root.localStorage.getItem(CHAVE); } catch (e) { /* armazenamento bloqueado: segue em memória */ }
      try {
        estado = bruto ? normalizar(JSON.parse(bruto)) : vazio();
      } catch (e) {
        // JSON ilegível: guarda uma cópia antes que o próximo salvamento sobrescreva, e recomeça.
        try { root.localStorage.setItem(CHAVE + '.corrompido', bruto); } catch (e2) { /* sem espaço */ }
        Store.corrompido = true;
        estado = vazio();
      }
      return estado;
    },

    salvar: function () {
      try { root.localStorage.setItem(CHAVE, JSON.stringify(estado)); return true; }
      catch (e) { if (avisoFalha) avisoFalha(e); return false; }
    },

    // Devolve false se não coube no armazenamento; o estado anterior continua gravado.
    substituir: function (novo) {
      var antes = estado;
      estado = normalizar(novo);
      if (Store.salvar()) return true;
      estado = antes;
      return false;
    },
    apagarTudo: function () { estado = vazio(); try { root.localStorage.removeItem(CHAVE); } catch (e) { /* sem armazenamento */ } },

    /* extra (opcional): { ms: tempo gasto, conf: 0|1|2, dicas: quantas dicas usou } */
    registrarResposta: function (q, resposta, origem, extra) {
      var certo = resposta === q.resposta;
      var h = (estado.respostas[q.id] = estado.respostas[q.id] || []);
      var entrada = { t: Date.now(), certo: certo, r: resposta };
      if (extra && extra.ms > 0) entrada.ms = Math.min(Math.round(extra.ms), 3600000);
      if (extra && [0, 1, 2].indexOf(extra.conf) >= 0) entrada.conf = extra.conf;
      if (extra && extra.dicas > 0) entrada.dicas = Math.min(3, extra.dicas);
      h.push(entrada);
      if (h.length > MAX_HIST) h.splice(0, h.length - MAX_HIST);
      var dia = Motor.hoje();
      estado.atividade[dia] = (estado.atividade[dia] || 0) + 1;
      // Erro sempre agenda. Acerto promove o cartão na revisão ou quando ele já vence hoje
      // (acertar uma questão pendente em qualquer lugar conta como revisão feita).
      var cartao = estado.revisao[q.id];
      if (!certo || origem === 'revisao' || (cartao && cartao.proxima <= dia)) Motor.agendar(estado.revisao, q.id, certo, dia);
      Store.salvar();
      return certo;
    }
  };
  root.Store = Store;
})(this);
