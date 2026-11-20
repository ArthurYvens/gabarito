/* Criar questões de um texto (rota #/contexto): o aluno junta documentos de estudo e o app monta, por regras e no próprio
   aparelho, questões (complete a frase e certo ou errado) e cartões a partir do texto. Sem internet. As questões vão
   para a mesma tela de revisão de Minhas questões antes de salvar. A lista de documentos é gravada numa transação só
   (Armazem.atualizar): duas abas abertas não se sobrescrevem. */
(function () {
  'use strict';
  var esc = UI.esc, ico = UI.ico, App = window.App;
  var S = function () { return Store.estado; };
  var MAX_ARQUIVO = 50 * 1048576;
  var MAX_GERACAO = 500000;   // caracteres do trecho escolhido, para a tela não travar
  var CHAVE_SEL = 'gabarito.ctx-sel';
  var TIPOS = [['lacuna5', 'Complete a frase (5 alternativas)'], ['lacuna4', 'Complete a frase (4 alternativas)'], ['certo-errado', 'Certo ou errado'], ['cartoes', 'Cartões para memorizar (definições do texto)']];

  var C = { indice: null, cache: Object.create(null), sel: Object.create(null), status: '', avisos: [], previa: null,
    tipo: 'lacuna5', qtd: 10, materia: '', nova: '', assunto: '', estilo: 'Outra', dif: 2 };

  function limpar(l) {
    return (Array.isArray(l) ? l : []).filter(function (d) { return d && typeof d.id === 'string' && /^[a-z0-9-]{3,40}$/.test(d.id) && typeof d.titulo === 'string' && Number.isFinite(d.caracteres); })
      .map(function (d) { return { id: d.id, titulo: d.titulo.slice(0, 200), formato: String(d.formato || '').slice(0, 8), caracteres: d.caracteres, secoes: Number(d.secoes) || 0, criadoEm: Number(d.criadoEm) || 0 }; });
  }
  function paginas(c) { return Math.max(1, Math.round(c / 2000)); } // ~2000 caracteres por página de livro
  function lerSel() {
    try {
      var s = JSON.parse(localStorage.getItem(CHAVE_SEL) || 'null');
      if (s && typeof s === 'object') Object.keys(s).forEach(function (id) {
        if (/^[a-z0-9-]{3,40}$/.test(id) && s[id] && Number.isInteger(s[id].de) && Number.isInteger(s[id].ate) && s[id].de >= 0 && s[id].ate >= s[id].de) C.sel[id] = { de: s[id].de, ate: s[id].ate };
      });
    } catch (e) { /* sem seleção guardada */ }
  }
  function guardarSel() { try { localStorage.setItem(CHAVE_SEL, JSON.stringify(C.sel)); } catch (e) { /* sem espaço: a seleção só vale nesta tela */ } }
  /* Relê a lista do IndexedDB e carrega o texto dos documentos escolhidos (descarta escolha de documento que não existe mais). */
  function carregar() {
    return Armazem.ler('ctx-indice').then(function (l) {
      C.indice = limpar(l);
      var ids = {};
      C.indice.forEach(function (d) { ids[d.id] = d; });
      Object.keys(C.sel).forEach(function (id) { if (!ids[id]) delete C.sel[id]; });
      return Promise.all(Object.keys(C.sel).map(function (id) {
        return doc(id).then(function (s) {
          var f = C.sel[id];
          if (!s.length) delete C.sel[id]; else if (f.ate > s.length - 1) { f.ate = s.length - 1; if (f.de > f.ate) f.de = 0; }
        });
      }));
    }).then(function () { guardarSel(); return C.indice; });
  }
  function mudar(fn) { return Armazem.atualizar('ctx-indice', function (l) { return fn(limpar(l)); }).then(function (l) { C.indice = l; return l; }); }
  function doc(id) {
    if (C.cache[id]) return Promise.resolve(C.cache[id]);
    return Armazem.ler('ctx:' + id).then(function (d) {
      var s = d && Array.isArray(d.secoes) ? d.secoes.filter(function (x) { return x && typeof x.titulo === 'string' && typeof x.texto === 'string'; }) : [];
      return (C.cache[id] = s);
    });
  }
  // Outra aba mudou a lista de documentos.
  Armazem.aoMudar(function (chave) { if (chave === 'ctx-indice' && location.hash === '#/contexto') carregar().then(function () { App.render(); }); });

  /* Guarda o texto extraído como documento e já o deixa escolhido (parte = documento inteiro). */
  function guardarDoc(titulo, formato, ext) {
    var id = 'd-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    return Armazem.gravar('ctx:' + id, { secoes: ext.secoes }, true).then(function () {
      return mudar(function (l) { return l.concat([{ id: id, titulo: titulo.slice(0, 200), formato: formato, caracteres: ext.caracteres, secoes: ext.secoes.length, criadoEm: Date.now() }]); })
        .catch(function (e) { return Armazem.remover('ctx:' + id).then(function () { throw e; }); });
    }).then(function () {
      C.cache[id] = ext.secoes; C.sel[id] = { de: 0, ate: ext.secoes.length - 1 }; guardarSel();
      // O app aprende com o texto em segundo plano (contagens de palavras só desta pessoa); se falhar, o texto continua guardado.
      Aprende.contarDocumento(id, ext.secoes).catch(function () { /* sem aprendizado deste texto */ });
      return id;
    });
  }
  function aviso() { var s = document.getElementById('cx-status'); if (s) s.textContent = C.status; }
  function adicionar(arquivos) {
    var fila = Array.prototype.slice.call(arquivos || []), feitos = 0;
    C.avisos = [];
    return carregar().then(function () {
      return fila.reduce(function (cadeia, f) {
        return cadeia.then(function () {
          var t = Extracao.tipo(f.name);
          if (t === 'mobi') { C.avisos.push(f.name + ': MOBI e AZW não abrem aqui. Baixe o livro em PDF ou EPUB, ou converta para EPUB num programa gratuito como o Calibre.'); return; }
          if (!t) { C.avisos.push(f.name + ': formato não suportado. Use PDF, EPUB, TXT, MD, HTML ou DOCX.'); return; }
          if (f.size > MAX_ARQUIVO) { C.avisos.push(f.name + ': maior que 50 MB. Divida o arquivo.'); return; }
          C.status = 'Lendo ' + f.name + '...'; aviso();
          return f.arrayBuffer().then(function (buf) {
            return App.extrairArquivo(f.name, buf, function (n, total) { C.status = 'Lendo ' + f.name + ': página ' + n + ' de ' + total + '...'; aviso(); });
          }).then(function (ext) {
            var nome = f.name.replace(/\.[^.]+$/, '');
            if (C.indice.some(function (d) { return d.titulo === nome.slice(0, 200) && d.caracteres === ext.caracteres; })) { C.avisos.push(f.name + ': este arquivo já está na lista. Não foi adicionado de novo.'); return; }
            return guardarDoc(f.name.replace(/\.[^.]+$/, ''), t, ext).then(function () {
              feitos++;
              if (ext.cortado) C.avisos.push(f.name + ': o texto era grande demais e foi guardado só até onde coube (o final ficou de fora).');
            });
          }).catch(function (e) { C.avisos.push(f.name + ': ' + App.estante.erro(e) + '.'); });
        });
      }, Promise.resolve());
    }).then(function () { C.status = ''; C.toast = feitos; });
  }

  // Botão "Criar questões" da estante.
  App.contextoDoLivro = function (id) {
    var l;
    UI.toast('Lendo o livro...');
    carregar().then(function () { return App.estante.lista(); }).then(function (lista) {
      l = lista.filter(function (x) { return x.id === id; })[0];
      if (!l) throw new Error('sem livro');
      return App.estante.blob(id);
    }).then(function (blob) {
      if (!(blob instanceof Blob)) throw new Error('sem arquivo');
      if (blob.size > MAX_ARQUIVO) { C.avisos = [l.titulo + ': maior que 50 MB para criar questões. Divida o arquivo.']; return; }
      return blob.arrayBuffer().then(function (buf) { return App.extrairArquivo(l.titulo + '.' + l.formato, buf, function () {}); }).then(function (ext) {
        return guardarDoc(l.titulo, l.formato, ext).then(function () { C.avisos = ext.cortado ? [l.titulo + ': o texto era grande demais e foi guardado só até onde coube.'] : []; });
      });
    }).then(function () { App.ir('#/contexto'); }, function (e) { UI.toast('Não foi possível usar este livro: ' + App.estante.erro(e) + '.'); });
  };

  // ---------- Tela ----------
  function opcoesFaixa(secoes, atual) {
    return secoes.map(function (s, i) { return '<option value="' + i + '"' + (i === atual ? ' selected' : '') + '>' + esc(s.titulo.slice(0, 70)) + '</option>'; }).join('');
  }
  function totalSelecionado() {
    return C.indice.reduce(function (t, d) {
      var s = C.sel[d.id], secoes = C.cache[d.id];
      return t + (s && secoes ? Extracao.contar(secoes, s.de, s.ate) : 0);
    }, 0);
  }
  function resumoHtml() {
    var n = Object.keys(C.sel).filter(function (id) { return C.cache[id]; }).length, t = totalSelecionado();
    if (!n) return 'Marque ao menos um documento.';
    return UI.plural(n, 'documento escolhido', 'documentos escolhidos') + ' · cerca de ' + UI.plural(paginas(t), 'página', 'páginas') + ' de texto' + (t > MAX_GERACAO ? ' (é demais de uma vez: escolha uma parte menor)' : '');
  }
  function docHtml(d) {
    var s = C.sel[d.id], secoes = C.cache[d.id], faixa = '';
    if (s && secoes) {
      var pdf = d.formato === 'pdf';
      faixa = '<div class="row cx-faixa"><label class="row" style="gap:6px"><span class="small">' + (pdf ? 'Da página' : 'Do capítulo') + '</span><select class="input" data-faixa="de" data-id="' + esc(d.id) + '">' + opcoesFaixa(secoes, s.de) + '</select></label>' +
        '<label class="row" style="gap:6px"><span class="small">' + (pdf ? 'até a página' : 'até o capítulo') + '</span><select class="input" data-faixa="ate" data-id="' + esc(d.id) + '">' + opcoesFaixa(secoes, s.ate) + '</select></label></div>';
    }
    return '<div class="cx-doc"><div class="list-item"><label class="row grow" style="gap:12px;flex-wrap:nowrap;min-width:0"><input type="checkbox" data-doc="' + esc(d.id) + '"' + (s ? ' checked' : '') + '>' +
      '<span style="min-width:0"><span class="title">' + esc(d.titulo) + '</span><span class="sub" style="display:block">' + esc(d.formato.toUpperCase()) + ' · cerca de ' + UI.plural(paginas(d.caracteres), 'página', 'páginas') + '</span></span></label>' +
      '<button class="btn btn-ghost btn-sm" data-act="cx-remover" data-id="' + esc(d.id) + '" aria-label="Remover ' + esc(d.titulo) + '">' + ico('lixo') + ' Remover</button></div>' + faixa + '</div>';
  }
  function previaHtml() {
    var p = C.previa;
    if (!p) return '';
    return '<section class="card mt" id="cx-previa"><div class="card-head"><div><h2>' + UI.plural(p.itens.length, 'cartão montado', 'cartões montados') + '</h2><p class="small muted">Confira antes de guardar. Desmarque os que não servem; depois dá para editar em Cartões.</p></div></div>' +
      '<div class="stack">' + p.itens.map(function (c, i) {
        return '<label class="card card-flat cx-cartao"><span class="row" style="flex-wrap:nowrap;align-items:flex-start;gap:10px"><input type="checkbox" data-cartao="' + i + '"' + (c.incluir ? ' checked' : '') + '><span><b>' + esc(c.frente) + '</b><br><span class="small" style="white-space:pre-line">' + esc(c.verso) + '</span></span></span></label>';
      }).join('') + '</div>' +
      '<div class="row mt"><button class="btn btn-primary" data-act="cx-cartoes-salvar">' + ico('check') + ' Guardar cartões marcados</button><button class="btn btn-ghost" data-act="cx-cartoes-descartar">Descartar</button></div></section>';
  }

  App.rota('/contexto', function () {
    if (!C.indice) {
      // A lista vem do IndexedDB (assíncrono): desenha a tela assim que chegar.
      lerSel();
      carregar().catch(function () { C.indice = []; }).then(function () { if (location.hash === '#/contexto') App.render(); });
      return { titulo: 'Criar questões de um texto', html: '<div class="page-head"><div><h1>Criar questões de um texto</h1></div></div><p class="muted">Abrindo seus documentos...</p>' };
    }
    var cartoes = C.tipo === 'cartoes';
    var mats = Banco.materias.map(function (m) { return '<option value="' + esc(m.id) + '"' + (C.materia === m.id ? ' selected' : '') + '>' + esc(m.nome) + '</option>'; }).join('');
    return {
      titulo: 'Criar questões de um texto', manterScroll: true,
      html: '<div class="page-head"><div><h1>Criar questões de um texto</h1><p>Envie um livro, apostila ou resumo e o app cria perguntas e cartões a partir dele. Tudo acontece neste aparelho, sem precisar de internet.</p></div></div>' +
        '<div id="cx-sem-banco"></div>' +
        '<div class="callout callout-pen" style="margin-bottom:18px">' + ico('info') + '<div><b>Criadas automaticamente, então confira antes de salvar.</b> O app escolhe frases do seu texto, apaga uma palavra importante e oferece alternativas tiradas do mesmo texto. Você revisa, corrige ou descarta cada pergunta antes de guardar.</div></div>' +
        (C.avisos.length ? '<div class="callout callout-marker" role="alert" style="margin-bottom:18px">' + ico('alerta') + '<div class="grow">' + C.avisos.map(esc).join('<br>') + '</div><button class="btn btn-ghost btn-sm" data-act="cx-fechar">Fechar</button></div>' : '') +
        '<section class="card"><div class="card-head"><div><h2>1. Seus textos</h2><p class="small muted">PDF, EPUB, DOCX, TXT, MD ou HTML, até 50 MB cada. O texto fica guardado só neste aparelho. Também dá para usar um livro da <a href="#/livros">estante</a>.</p></div></div>' +
        '<div class="row"><label class="btn btn-primary">' + ico('upload') + ' Escolher arquivos<input type="file" id="cx-arquivos" class="sr-only" multiple accept="' + App.estante.ACEITA + '"></label>' +
        '<span class="muted small" id="cx-status" role="status" aria-live="polite">' + esc(C.status) + '</span></div>' +
        '<div class="mt" id="cx-docs">' + (C.indice.length ? '<p class="small muted" style="margin-bottom:6px">Marque o que quer usar e, se quiser, escolha só uma parte.</p><div class="list">' + C.indice.map(docHtml).join('') + '</div>' : '<p class="muted">Nenhum texto ainda. Escolha arquivos acima ou use o botão "Criar questões" de um livro da <a href="#/livros">estante</a>.</p>') + '</div>' +
        '<p class="small mt" id="cx-resumo" aria-live="polite">' + esc(resumoHtml()) + '</p></section>' +
        '<section class="card mt"><div class="card-head"><h2>2. O que criar</h2></div><div class="grid g2">' +
        '<label class="field"><span>Tipo</span><select class="input" id="cx-tipo">' + TIPOS.map(function (t) { return '<option value="' + t[0] + '"' + (C.tipo === t[0] ? ' selected' : '') + '>' + t[1] + '</option>'; }).join('') + '</select></label>' +
        '<label class="field"><span>Quantas <span class="muted small">(de 1 a 20)</span></span><input class="input" id="cx-qtd" type="number" min="1" max="20" value="' + esc(C.qtd) + '"></label>' +
        (cartoes ? '<p class="small muted" style="grid-column:1/-1;margin:0">Os cartões saem de frases do texto que explicam o que algo é: "X é Y", "consiste em", "denomina-se", "entende-se por", "define-se como".</p>' :
          '<label class="field"><span>Matéria</span><select class="input" id="cx-materia"><option value=""' + (C.materia === '' ? ' selected' : '') + '>Escolha a matéria</option>' + mats + '<option value="__nova"' + (C.materia === '__nova' ? ' selected' : '') + '>+ Outra matéria (criar)</option></select></label>' +
          '<label class="field"><span>Nome da nova matéria <span class="muted small">(só se escolheu "Outra")</span></span><input class="input" id="cx-nova" maxlength="60" placeholder="Ex.: Contabilidade" value="' + esc(C.nova) + '"></label>' +
          '<label class="field"><span>Assunto <span class="muted small">(opcional)</span></span><input class="input" id="cx-assunto" maxlength="80" placeholder="Ex.: Revolução Industrial" value="' + esc(C.assunto) + '"></label>' +
          '<label class="field"><span>Estilo da prova <span class="muted small">(banca)</span></span><select class="input" id="cx-estilo">' + Banco.ESTILOS.map(function (e) { return '<option' + (C.estilo === e ? ' selected' : '') + '>' + esc(e) + '</option>'; }).join('') + '</select></label>' +
          '<label class="field"><span>Dificuldade</span><select class="input" id="cx-dif">' + [[1, 'Fácil'], [2, 'Média'], [3, 'Difícil']].map(function (d) { return '<option value="' + d[0] + '"' + (C.dif === d[0] ? ' selected' : '') + '>' + d[1] + '</option>'; }).join('') + '</select></label>') +
        '</div><p class="small muted mt" id="cx-aprende" role="status"></p><div class="row mt"><button class="btn btn-primary btn-lg" data-act="cx-gerar">' + ico('play') + ' ' + (cartoes ? 'Criar cartões' : 'Criar questões') + '</button></div></section>' +
        previaHtml(),
      montar: function () {
        if (C.toast) { UI.toast(UI.plural(C.toast, 'texto adicionado', 'textos adicionados') + '.'); C.toast = 0; }
        Aprende.resumo().then(function (r) {
          var el = document.getElementById('cx-aprende');
          if (el && C.tipo !== 'cartoes') el.textContent = r.classificador ? 'O app já aprendeu com as ' + r.exemplos + ' perguntas que você aprovou ou descartou e usa isso para escolher as melhores. Cada criação traz frases novas do texto.'
            : 'O app ainda está aprendendo o que você aprova: foram ' + r.exemplos + ' perguntas aprovadas ou descartadas. A partir de ' + r.minimo + ', ele passa a escolher melhor; até lá, as perguntas podem não agradar tanto. Cada criação traz frases novas do texto.';
        });
        Armazem.disponivel().then(function (ok) {
          var a = document.getElementById('cx-sem-banco');
          if (a && !ok) a.innerHTML = '<div class="callout callout-marker" role="alert" style="margin-bottom:18px">' + ico('alerta') + '<div><b>Este navegador não deixa o Helma guardar textos agora.</b> Isso acontece em janelas anônimas e em alguns modos de privacidade. Abra o Helma numa janela normal.</div></div>';
        });
        var arq = document.getElementById('cx-arquivos');
        arq.addEventListener('change', function () {
          var f = Array.prototype.slice.call(arq.files); arq.value = ''; lerForm();
          adicionar(f).then(function () { App.render(); });
        });
        document.getElementById('cx-docs').addEventListener('change', function (e) {
          lerForm();
          var t = e.target, id = t.getAttribute('data-doc') || t.getAttribute('data-id');
          if (t.hasAttribute('data-doc')) {
            if (!t.checked) { delete C.sel[id]; guardarSel(); App.render(); return; }
            doc(id).then(function (s) { C.sel[id] = { de: 0, ate: Math.max(0, s.length - 1) }; guardarSel(); App.render(); });
          } else if (t.hasAttribute('data-faixa') && C.sel[id]) {
            var f = Object.assign({}, C.sel[id]), campo = t.getAttribute('data-faixa');
            f[campo] = Number(t.value);
            if (f.de > f.ate) { UI.toast('A parte final não pode vir antes da inicial. Escolha de novo.'); App.render(); return; } // nada é trocado em silêncio
            C.sel[id] = f; guardarSel(); App.render();
          }
        });
        document.getElementById('cx-tipo').addEventListener('change', function () { lerForm(); C.previa = null; App.render(); });
        var pv = document.getElementById('cx-previa');
        if (pv) pv.addEventListener('change', function (e) { var i = e.target.getAttribute('data-cartao'); if (i !== null && C.previa) C.previa.itens[Number(i)].incluir = e.target.checked; });
      }
    };
  }, 'contexto');

  function lerForm() {
    var g = function (id) { var el = document.getElementById(id); return el ? el.value : null; };
    var v;
    if ((v = g('cx-tipo')) !== null) C.tipo = v;
    if ((v = g('cx-qtd')) !== null) C.qtd = v;
    if ((v = g('cx-materia')) !== null) C.materia = v;
    if ((v = g('cx-nova')) !== null) C.nova = v.trim();
    if ((v = g('cx-assunto')) !== null) C.assunto = v.trim();
    if ((v = g('cx-estilo')) !== null) C.estilo = v;
    if ((v = g('cx-dif')) !== null) C.dif = Number(v) || 2;
  }

  App.acao('cx-fechar', function () { C.avisos = []; lerForm(); App.render(); });
  App.acao('cx-remover', function (el) {
    var id = el.getAttribute('data-id'), d = C.indice.filter(function (x) { return x.id === id; })[0];
    if (!d) return;
    UI.confirmar('Remover "' + d.titulo + '"?', 'O texto guardado é apagado do aparelho. O livro original da estante não é afetado.', 'Remover', { perigo: true }).then(function (ok) {
      if (!ok) return;
      mudar(function (l) { return l.filter(function (x) { return x.id !== id; }); }).then(function () { return Armazem.remover('ctx:' + id); }).then(function () {
        delete C.sel[id]; delete C.cache[id]; guardarSel(); App.render();
      }, function () { UI.toast('Não foi possível remover o texto.'); });
    });
  });

  App.acao('cx-gerar', function () {
    lerForm();
    document.getElementById('toast').classList.remove('show'); // avisos antigos não podem aparecer sobre o resultado
    var qtd = Number(C.qtd);
    if (!(Number.isInteger(qtd) && qtd >= 1 && qtd <= 20)) { UI.toast('A quantidade precisa ficar entre 1 e 20.'); document.getElementById('cx-qtd').focus(); return; }
    var escolhidos = C.indice.filter(function (d) { return C.sel[d.id] && C.cache[d.id]; });
    if (!escolhidos.length) { UI.toast('Marque ao menos um texto.'); return; }
    if (totalSelecionado() > MAX_GERACAO) { UI.toast('É texto demais de uma vez. Escolha uma parte menor (De ... até ...).'); return; }
    var cartoes = C.tipo === 'cartoes';
    if (!cartoes && !C.materia) { UI.toast('Escolha a matéria das questões.'); document.getElementById('cx-materia').focus(); return; }
    if (!cartoes && C.materia === '__nova' && !C.nova) { UI.toast('Escreva o nome da nova matéria.'); document.getElementById('cx-nova').focus(); return; }
    var trechos = [];
    escolhidos.forEach(function (d) {
      C.cache[d.id].slice(C.sel[d.id].de, C.sel[d.id].ate + 1).forEach(function (s) { trechos.push({ titulo: d.titulo, local: /^texto$/i.test(s.titulo) ? '' : s.titulo, texto: s.texto }); });
    });
    if (C.gerando) return; // clique repetido enquanto cria
    C.gerando = true; C.status = 'Criando...'; aviso();
    // O modelo reúne o que o app já sabia com o que aprendeu dos textos desta pessoa e das revisões dela.
    // Deixa o aviso aparecer antes do trabalho (textos grandes levam alguns segundos).
    // Frases que já viraram pergunta ficam de fora, e a geração cede a vez à tela a cada ~30 ms (texto grande não trava).
    (cartoes ? Promise.resolve([null, null]) : Promise.all([Aprende.preparar(escolhidos.map(function (d) { return { id: d.id, secoes: C.cache[d.id] }; })), Aprende.usadas()])).then(function (pre) {
      return Gerador.gerarAsync(trechos, { tipo: C.tipo, quantidade: qtd, semente: Date.now(), modelo: pre[0], evitar: pre[1] });
    }).then(function (res) {
      C.gerando = false;
      if (res.usadas && res.usadas.length) Aprende.marcarUsadas(res.usadas);
      C.status = '';
      if (!res.itens.length) { C.avisos = res.avisos; C.previa = null; App.render(); window.scrollTo(0, 0); return; }
      C.avisos = [];
      if (cartoes) {
        var ja = {};
        Object.keys(S().cartoes).forEach(function (k) { ja[S().cartoes[k].frente.trim().toLowerCase()] = 1; });
        var novos = res.itens.filter(function (c) { return !ja[c.frente.trim().toLowerCase()]; });
        if (novos.length < res.itens.length) res.avisos.push((res.itens.length - novos.length) + ' cartão(ões) já existiam em Cartões e foram deixados de fora.');
        C.avisos = res.avisos;
        C.previa = novos.length ? { itens: novos.map(function (c) { return { frente: c.frente, verso: c.verso, incluir: true }; }) } : null;
        App.render();
        var pv = document.getElementById('cx-previa'); if (pv) pv.scrollIntoView({ block: 'start' });
        return;
      }
      var perfil = S().perfil, base = Banco.materias[0].id, descartadas = 0, rascunhos = [];
      res.itens.forEach(function (q) {
        var cand = { id: 'meu-gerada-' + (rascunhos.length + 1), materia: C.materia === '__nova' ? base : C.materia, assunto: C.assunto || 'Geral', tipo: q.tipo, estilo: C.estilo, dificuldade: C.dif,
          objetivos: [Banco.objetivo(perfil.objetivo) ? perfil.objetivo : 'livre'], enunciado: q.enunciado, resposta: q.resposta, explicacao: q.explicacao, autoria: 'aluno' };
        if (q.alternativas) cand.alternativas = q.alternativas;
        if (Banco.validarQuestao(cand).length) { descartadas++; return; }
        rascunhos.push({ numero: rascunhos.length + 1, enunciado: q.enunciado, alternativas: q.alternativas || [], tipo: q.tipo, resposta: q.resposta, incluir: true, comentario: q.explicacao.resumo, explicacao: q.explicacao,
          avisos: ['Criada automaticamente a partir de "' + q.local + '". Confira o enunciado, as alternativas e a resposta.'],
          ml: q.ml ? { x: q.ml.x, ori: Aprende.assinatura(q) } : undefined }); // o que a revisão ensina ao app (Aprende.exemplosDe)
      });
      if (descartadas) res.avisos.push(descartadas + ' pergunta(s) não passaram na validação e foram descartadas.');
      if (!rascunhos.length) { C.avisos = res.avisos; App.render(); return; }
      // Avisos gerais (ex.: saíram menos perguntas que o pedido) ficam na primeira pergunta, onde não somem sozinhos.
      res.avisos.forEach(function (a) { rascunhos[0].avisos.push(a); });
      App.revisar(rascunhos, escolhidos.map(function (d) { return d.titulo; }).join(' + '), 'contexto',
        { materia: C.materia, novaMateria: C.nova, assunto: C.assunto, estilo: C.estilo, dificuldade: C.dif }, '#/contexto');
    }).catch(function () { C.gerando = false; C.status = ''; aviso(); UI.toast('Não foi possível criar as perguntas deste texto. Tente uma parte menor.'); });
  });

  App.acao('cx-cartoes-salvar', function () {
    var marcados = C.previa ? C.previa.itens.filter(function (c) { return c.incluir; }) : [];
    if (!marcados.length) { UI.toast('Marque ao menos um cartão.'); return; }
    marcados.forEach(function (c) { Cartoes.criar(c.frente, c.verso); });
    if (!Store.salvar()) { UI.toast('Não foi possível salvar os cartões neste aparelho.'); return; }
    C.previa = null; C.avisos = [];
    UI.toast(UI.plural(marcados.length, 'cartão guardado', 'cartões guardados') + '. Veja em Cartões.');
    App.render();
  });
  App.acao('cx-cartoes-descartar', function () { C.previa = null; App.render(); });
})();
