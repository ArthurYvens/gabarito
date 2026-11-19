/* Telas de conteúdo: aulas e redação. */
(function () {
  'use strict';
  var esc = UI.esc, ico = UI.ico;
  var S = function () { return Store.estado; };

  // ---------- Aulas ----------
  var filtroAula = '';
  App.rota('/aulas', function () {
    var st = S(), p = st.perfil;
    var mats = Banco.materias.filter(function (m) { return Banco.aulas.some(function (a) { return a.materia === m.id; }); });
    var card = function (href, sigla, materia, a, feita) {
      return '<a class="card lesson-card" href="' + href + '"><div class="row-between"><span class="sigla sigla-sm">' + sigla + '</span>' + (feita ? '<span class="tag tag-ok">' + ico('check') + ' Concluída</span>' : '<span class="muted small">' + a.duracaoMin + ' min</span>') + '</div>' +
        '<span class="muted small">' + esc(materia) + '</span><h3>' + esc(a.titulo) + '</h3><p>' + esc(a.resumo) + '</p></a>';
    };
    var lista = Banco.aulas.filter(function (a) { return !filtroAula || filtroAula === a.materia; })
      .sort(function (a, b) { return (p.materias.indexOf(a.materia) < 0) - (p.materias.indexOf(b.materia) < 0); });
    var cards = lista.map(function (a) { var m = Banco.materia(a.materia); return card('#/aula/' + a.id, m.sigla, m.nome, a, st.aulas[a.id]); });
    if (!filtroAula || filtroAula === 'redacao') cards = cards.concat(Redacao.aulas.map(function (a) { return card('#/redacao/aula/' + a.id, 'RED', 'Redação', a, st.aulas[a.id]); }));
    var feitas = Object.keys(st.aulas).length, total = Banco.aulas.length + Redacao.aulas.length;
    return {
      titulo: 'Aulas', manterScroll: true,
      html: '<div class="page-head"><div><h1>Aulas</h1><p>Teoria direta ao ponto, com exemplos, pegadinhas de banca e um botão para praticar o assunto logo depois.</p></div><span class="tag tag-pen">' + feitas + ' de ' + total + ' concluídas</span></div>' +
        '<div class="chips" style="margin-bottom:22px" role="group" aria-label="Filtrar por matéria"><button class="chip" data-act="aula-filtro" data-m="" aria-pressed="' + !filtroAula + '">Todas</button>' +
        mats.map(function (m) { return '<button class="chip" data-act="aula-filtro" data-m="' + m.id + '" aria-pressed="' + (filtroAula === m.id) + '">' + esc(m.nome) + '</button>'; }).join('') +
        '<button class="chip" data-act="aula-filtro" data-m="redacao" aria-pressed="' + (filtroAula === 'redacao') + '">Redação</button></div>' +
        '<div class="grid g3">' + cards.join('') + '</div>'
    };
  }, 'aulas');
  App.acao('aula-filtro', function (el) { filtroAula = el.getAttribute('data-m'); App.render(); });

  function aulaHtml(a, o) {
    var feita = S().aulas[a.id];
    var slug = function (i) { return 'sec-' + i; };
    return '<div class="page-head"><a class="btn btn-ghost" href="' + o.voltar + '">' + ico('voltar') + ' ' + o.voltarNome + '</a></div>' +
      '<div class="lesson"><nav class="toc" aria-label="Nesta aula"><span class="eyebrow">Nesta aula</span>' + a.secoes.map(function (s, i) { return '<a href="#' + slug(i) + '" data-act="ancora" data-alvo="' + slug(i) + '">' + esc(s.titulo) + '</a>'; }).join('') + '<a href="#sec-pontos" data-act="ancora" data-alvo="sec-pontos">Pontos-chave</a></nav>' +
      '<article class="lesson-body"><h1>' + esc(a.titulo) + '</h1><p class="meta-linha">' + esc(o.materia) + ' · ' + a.duracaoMin + ' min de leitura</p><p class="muted mt" style="font-size:17px">' + esc(a.resumo) + '</p>' +
      a.secoes.map(function (s, i) { return '<h2 id="' + slug(i) + '">' + esc(s.titulo) + '</h2><div class="prose">' + UI.md(s.texto) + '</div>'; }).join('') +
      '<section class="keypoints mt-lg" id="sec-pontos"><h3>Pontos-chave para a prova</h3><ol>' + a.pontosChave.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ol></section>' +
      (a.fontes ? '<h2>Onde pesquisar mais</h2>' + UI.fontes(a.fontes) : '') +
      '<div class="card card-flat mt-lg"><div class="row-between"><div><h3>' + (feita ? 'Aula concluída em ' + UI.dataCurta(feita) : 'Terminou a leitura?') + '</h3><p class="small muted" style="margin:4px 0 0">' + (o.praticar ? 'Fixe agora com questões do mesmo assunto.' : 'Coloque em prática no editor de redação.') + '</p></div>' +
      '<div class="row">' + (feita ? '' : '<button class="btn btn-secondary" data-act="aula-concluir" data-id="' + a.id + '">' + ico('check') + ' Marcar como concluída</button>') + (o.praticar || '') + '</div></div></div></article></div>';
  }
  App.acao('ancora', function (el) { var a = document.getElementById(el.getAttribute('data-alvo')); if (a) a.scrollIntoView({ behavior: 'smooth' }); });
  App.acao('aula-concluir', function (el) { S().aulas[el.getAttribute('data-id')] = Date.now(); Store.salvar(); UI.toast('Aula concluída.'); App.render(); });

  App.rota('/aula/([^/]+)', function (m) {
    var a = Banco.aulas.filter(function (x) { return x.id === m[0]; })[0];
    if (!a) { App.ir('#/aulas'); return null; }
    var n = Banco.questoes.filter(function (q) { return q.materia === a.materia && q.assunto === a.assunto; }).length;
    var mat = Banco.materia(a.materia);
    return {
      titulo: a.titulo,
      html: aulaHtml(a, { voltar: '#/aulas', voltarNome: 'Aulas', materia: mat.nome,
        praticar: n ? '<button class="btn btn-primary" data-act="treinar" data-mat="' + esc(a.materia) + '" data-assunto="' + esc(a.assunto) + '">' + ico('play') + ' Praticar (' + UI.plural(n, 'questão', 'questões') + ')</button>' : '' })
    };
  }, 'aulas');

  // ---------- Redação ----------
  var ABAS = [['', 'Visão geral'], ['escrever', 'Escrever'], ['repertorio', 'Repertório'], ['conectivos', 'Conectivos'], ['modelo', 'Modelo comentado'], ['temas', 'Temas'], ['historico', 'Minhas redações']];
  function cabecalho(aba, titulo, desc) {
    return '<div class="page-head"><div><h1>' + titulo + '</h1><p>' + desc + '</p></div></div>' +
      '<nav class="seg" style="margin-bottom:24px" aria-label="Seções de redação">' + ABAS.map(function (a) {
        return '<a href="#/redacao' + (a[0] ? '/' + a[0] : '') + '" class="seg-link"' + (aba === a[0] ? ' aria-current="page"' : '') + '>' + a[1] + '</a>';
      }).join('') + '</nav>';
  }

  App.rota('/redacao', function () {
    var st = S();
    return {
      titulo: 'Redação',
      html: cabecalho('', 'Redação nota mil se treina', 'Entenda como a banca corrige, monte repertório, escreva com tempo e confira a estrutura antes de entregar.') +
        '<div class="grid g-main"><section class="card"><h2>As 5 competências do ENEM</h2><p>Cada uma vale de 0 a 200 pontos, em seis níveis (0, 40, 80, 120, 160 e 200). A nota final é a soma, até 1000.</p>' +
        Redacao.competencias.map(function (c) {
          return '<div class="comp"><span class="comp-n">' + c.n + '</span><div><h3>' + esc(c.titulo) + '</h3><dl><dt>O que avalia</dt><dd>' + esc(c.oQue) + '</dd><dt>Como pontuar</dt><dd>' + esc(c.como) + '</dd><dt>Atenção</dt><dd>' + esc(c.zera) + '</dd></dl></div></div>';
        }).join('') + '</section>' +
        '<div class="stack"><section class="card"><h3>Escreva uma redação agora</h3><p class="small muted" style="margin-top:6px">Folha pautada de 30 linhas, cronômetro e checagem automática de estrutura.</p><a class="btn btn-primary" href="#/redacao/escrever">' + ico('redacao') + ' Abrir editor</a>' +
        (st.redacoes.length ? '<p class="small muted mt">' + UI.plural(st.redacoes.length, 'redação escrita', 'redações escritas') + '. <a href="#/redacao/historico">Ver histórico</a></p>' : '') + '</section>' +
        '<section class="card"><h3 style="margin-bottom:10px">O que zera a redação</h3><ul class="prose small" style="font-family:var(--f-ui);font-size:14px;padding-left:1.1em;margin:0">' + Redacao.zeram.map(function (z) { return '<li>' + esc(z) + '</li>'; }).join('') + '</ul></section>' +
        '<section class="card"><h3 style="margin-bottom:6px">Aulas de redação</h3><div class="list">' + Redacao.aulas.map(function (a) {
          return '<a class="list-item" href="#/redacao/aula/' + a.id + '"><div class="grow"><div class="title">' + esc(a.titulo) + '</div><div class="sub">' + a.duracaoMin + ' min' + (st.aulas[a.id] ? ' · concluída' : '') + '</div></div>' + ico('dir') + '</a>';
        }).join('') + '</div></section>' +
        '<section class="card card-flat"><h3 style="margin-bottom:10px">Fontes oficiais</h3>' + UI.fontes(Redacao.fontes) + '</section></div></div>'
    };
  }, 'redacao');

  App.rota('/redacao/aula/([^/]+)', function (m) {
    var a = Redacao.aulas.filter(function (x) { return x.id === m[0]; })[0];
    if (!a) { App.ir('#/redacao'); return null; }
    return { titulo: a.titulo, html: aulaHtml(a, { voltar: '#/redacao', voltarNome: 'Redação', materia: 'Redação', praticar: '<a class="btn btn-primary" href="#/redacao/escrever">' + ico('redacao') + ' Escrever redação</a>' }) };
  }, 'redacao');

  App.rota('/redacao/repertorio', function () {
    var areas = {};
    Redacao.repertorios.forEach(function (r) { (areas[r.area] = areas[r.area] || []).push(r); });
    return {
      titulo: 'Repertório',
      html: cabecalho('repertorio', 'Repertório sociocultural', 'Referências legítimas com a ideia central e como transformá-las em argumento. Use para explicar o problema, não para enfeitar.') +
        '<div class="grid g2">' + Redacao.repertorios.map(function (r) {
          return '<section class="card"><div class="row-between"><span class="tag tag-pen">' + esc(r.area) + '</span><span class="muted small">' + esc(r.temas) + '</span></div><h3 class="mt" style="margin-top:12px">' + esc(r.ref) + '</h3>' +
            '<p class="prose" style="font-size:15px;margin-top:8px">' + esc(r.ideia) + '</p><div class="tip">' + ico('ideia') + '<div><b>Como usar:</b> ' + esc(r.uso) + '</div></div></section>';
        }).join('') + '</div>'
    };
  }, 'redacao');

  App.rota('/redacao/conectivos', function () {
    return {
      titulo: 'Conectivos',
      html: cabecalho('conectivos', 'Banco de conectivos', 'Organizados pela função que cumprem. Varie: a Competência 4 premia repertório coesivo diversificado e sem repetição.') +
        '<div class="grid g3">' + Object.keys(Analise.CONECTIVOS).map(function (cat) {
          return '<section class="card"><h3 style="margin-bottom:12px">' + esc(cat) + '</h3><div class="chips">' + Analise.CONECTIVOS[cat].map(function (c) { return '<span class="tag">' + esc(c) + '</span>'; }).join('') + '</div></section>';
        }).join('') + '</div>' +
        '<div class="callout callout-pen mt">' + ico('ideia') + '<div><b>Regra prática:</b> um conectivo de abertura diferente em cada parágrafo (Inicialmente / Além disso / Portanto) e ao menos um conectivo interno por período longo. Evite "Portanto" e "Logo" no mesmo parágrafo: os dois concluem.</div></div>'
    };
  }, 'redacao');

  App.rota('/redacao/modelo', function () {
    var md = Redacao.modelo;
    return {
      titulo: 'Modelo comentado',
      html: cabecalho('modelo', 'Modelo comentado', 'Uma redação completa, parágrafo por parágrafo, com o que cada trecho faz para pontuar.') +
        '<section class="card"><h2>Tema: ' + esc(md.tema) + '</h2>' + md.paragrafos.map(function (p, i) {
          return '<div class="model-p"><p class="prose" style="margin:0">' + esc(p.texto) + '</p><div class="note"><b>' + ['Introdução', 'Desenvolvimento 1', 'Desenvolvimento 2', 'Conclusão'][i] + '.</b> ' + esc(p.nota) + '</div></div>';
        }).join('') + '</section>' +
        '<div class="row mt"><button class="btn btn-primary" data-act="red-tema" data-i="0">' + ico('redacao') + ' Escrever sobre este tema</button></div>'
    };
  }, 'redacao');

  App.rota('/redacao/temas', function () {
    return {
      titulo: 'Temas',
      html: cabecalho('temas', 'Temas para praticar', 'Propostas no formato do ENEM e de provas discursivas de concurso, com textos de apoio.') +
        '<div class="grid g2">' + Redacao.temas.map(function (t, i) {
          return '<section class="card lesson-card" style="cursor:default"><span class="tag ' + (t.tipo === 'enem' ? 'tag-pen' : 'tag-warn') + '" style="align-self:flex-start">' + (t.tipo === 'enem' ? 'ENEM' : 'Concurso · discursiva') + '</span><h3>' + esc(t.titulo) + '</h3>' +
            '<p>' + esc(t.textos[0]) + '</p><div><button class="btn btn-secondary btn-sm" data-act="red-tema" data-i="' + i + '">Escrever sobre este tema</button></div></section>';
        }).join('') + '</div>'
    };
  }, 'redacao');
  App.acao('red-tema', function (el) {
    var r = rascunho();
    var novo = Number(el.getAttribute('data-i'));
    var trocar = function () { S().rascunho = { tema: novo, texto: '', segundos: 0 }; Store.salvar(); App.ir('#/redacao/escrever'); };
    if (r.texto.trim() && r.tema !== novo) UI.confirmar('Trocar de tema?', 'Seu rascunho atual será descartado.', 'Trocar').then(function (ok) { if (ok) trocar(); });
    else { r.tema = novo; Store.salvar(); App.ir('#/redacao/escrever'); }
  });

  function rascunho() {
    if (!S().rascunho) S().rascunho = { tema: 0, texto: '', segundos: 0 };
    return S().rascunho;
  }

  function painel(a) {
    var pr = a.proposta;
    var el = function (rot, v) { return '<span class="tag ' + (v ? 'tag-ok' : '') + '">' + ico(v ? 'check' : 'x') + rot + '</span>'; };
    return '<section class="card"><div class="grid g3" style="gap:10px"><div class="stat"><b class="mono">' + a.linhasEstimadas + '</b><span>linhas (estim.)</span></div><div class="stat"><b class="mono">' + a.palavras + '</b><span>palavras</span></div><div class="stat"><b class="mono">' + a.paragrafos + '</b><span>parágrafos</span></div></div></section>' +
      '<section class="card"><h3 style="margin-bottom:6px">Checagem de estrutura</h3>' + a.checklist.map(function (c) {
        return '<div class="check ' + (c.ok ? 'ok' : 'no') + '">' + ico(c.ok ? 'check' : 'alerta') + '<div><b>' + esc(c.titulo) + '</b><span>' + esc(c.detalhe) + '</span></div></div>';
      }).join('') + '</section>' +
      '<section class="card"><h3 style="margin-bottom:10px">Proposta de intervenção</h3><div class="chips">' + el('Agente', pr.agente) + el('Ação', pr.acao) + el('Meio/modo', pr.meio) + el('Finalidade', pr.finalidade) + el('Detalhamento', pr.detalhamento) + '</div>' +
      '<p class="small muted mt" style="margin-bottom:0">Procurado no último parágrafo.</p></section>' +
      (a.alertas.length ? '<section class="card"><h3 style="margin-bottom:6px">Pontos de atenção</h3>' + a.alertas.map(function (x) { return '<div class="check no">' + ico('alerta') + '<div><b>' + esc(x.tipo) + '</b><span>' + esc(x.texto) + '</span></div></div>'; }).join('') + '</section>' : '') +
      '<section class="card"><h3 style="margin-bottom:10px">Conectivos usados (' + a.conectivos.length + ')</h3>' + (a.conectivos.length ? '<div class="chips">' + a.conectivos.map(function (c) { return '<span class="tag" title="' + esc(c.categoria) + '">' + esc(c.termo) + '</span>'; }).join('') + '</div>' : '<p class="small muted" style="margin:0">Nenhum ainda. Veja o <a href="#/redacao/conectivos">banco de conectivos</a>.</p>') + '</section>';
  }

  var NOTAS_ENEM = [0, 40, 80, 120, 160, 200];
  var cronLigado = false;
  var CRITERIOS_CONCURSO = ['Conteúdo: respondeu a todos os quesitos', 'Estrutura: introdução, desenvolvimento e conclusão', 'Expressão: norma-padrão, clareza e coesão'];

  App.rota('/redacao/escrever', function () {
    var r = rascunho(), t = Redacao.temas[r.tema] || Redacao.temas[0];
    var enem = t.tipo === 'enem';
    var aval = r.avaliando;
    var criterios = enem ? Redacao.competencias.map(function (c) { return 'C' + c.n + ' · ' + c.titulo; }) : CRITERIOS_CONCURSO;
    var escala = enem ? NOTAS_ENEM : [0, 2, 4, 6, 8, 10];
    r.notas = r.notas || [];
    return {
      titulo: 'Escrever redação',
      html: cabecalho('escrever', 'Escrever', 'Escreva como no dia da prova. A checagem ao lado aponta o que um corretor procuraria; a nota final é a sua autoavaliação pelos critérios oficiais.') +
        '<section class="card" style="margin-bottom:18px"><div class="row-between"><label class="field" style="flex:1;min-width:240px"><span>Tema</span><select class="input" id="red-tema">' + Redacao.temas.map(function (x, i) {
          return '<option value="' + i + '"' + (i === r.tema ? ' selected' : '') + '>' + (x.tipo === 'enem' ? '[ENEM] ' : '[Concurso] ') + esc(x.titulo) + '</option>';
        }).join('') + '</select></label>' +
        '<div class="row" style="align-self:flex-end"><span class="timer" role="timer">' + ico('relogio') + '<span id="red-tempo">' + UI.tempo(r.segundos) + '</span></span><button class="btn btn-secondary" data-act="red-cron" id="red-cron">' + ico('play') + ' Iniciar cronômetro</button></div></div>' +
        '<details class="mt"' + (r.texto ? '' : ' open') + '><summary class="label" style="cursor:pointer">Textos de apoio</summary><div class="stack mt">' + t.textos.map(function (x, i) {
          return '<div class="q-base" style="margin:0"><b>Texto ' + (i + 1) + '.</b> ' + esc(x) + '</div>';
        }).join('') + '</div></details></section>' +
        '<div class="editor"><div><label class="sr-only" for="red-texto">Texto da redação</label><textarea class="sheet" id="red-texto" spellcheck="true" lang="pt-BR" placeholder="Comece pela introdução: contextualize o tema com um repertório, apresente sua tese e anuncie os dois argumentos.">' + esc(r.texto) + '</textarea>' +
        '<div class="row-between mt"><span class="muted small">Rascunho salvo automaticamente neste navegador.</span><div class="row"><button class="btn btn-ghost" data-act="red-limpar">Limpar</button><button class="btn btn-primary" data-act="red-avaliar">' + ico('check') + ' Concluir e autoavaliar</button></div></div>' +
        (aval ? '<section class="card mt" id="red-aval"><h2>Autoavaliação</h2><p>Releia o texto com a checagem ao lado e dê a nota que um corretor daria em cada critério. Seja rigoroso: a nota honesta mostra onde treinar.</p>' +
          criterios.map(function (c, i) {
            return '<div class="field mt"><span class="label">' + esc(c) + '</span><div class="score-pick" role="group" aria-label="' + esc(c) + '">' + escala.map(function (n) {
              return '<button data-act="red-nota" data-c="' + i + '" data-n="' + n + '" aria-pressed="' + (r.notas[i] === n) + '">' + n + '</button>';
            }).join('') + '</div></div>';
          }).join('') +
          '<div class="row-between mt-lg"><span class="mono" style="font-size:20px">Total: <b>' + r.notas.reduce(function (s, n) { return s + (n || 0); }, 0) + '</b>/' + (escala[escala.length - 1] * criterios.length) + '</span><button class="btn btn-primary" data-act="red-salvar">Salvar redação</button></div></section>' : '') +
        '</div><aside class="stack" id="red-painel"></aside></div>',
      montar: function () {
        var ta = document.getElementById('red-texto'), pn = document.getElementById('red-painel');
        var analisar = function () { pn.innerHTML = painel(Analise.analisar(ta.value)); };
        var t1;
        ta.addEventListener('input', function () {
          r.texto = ta.value;
          clearTimeout(t1); t1 = setTimeout(function () { analisar(); Store.salvar(); }, 350);
        });
        document.getElementById('red-tema').addEventListener('change', function (e) {
          var novo = Number(e.target.value);
          var trocar = function () { S().rascunho = { tema: novo, texto: '', segundos: 0 }; Store.salvar(); App.render(); };
          if (r.texto.trim()) UI.confirmar('Trocar de tema?', 'Seu rascunho atual será descartado.', 'Trocar').then(function (ok) { if (ok) trocar(); else e.target.value = r.tema; });
          else trocar();
        });
        analisar();
        if (aval) document.getElementById('red-aval').scrollIntoView({ block: 'start' });
        var tick = function () { var el = document.getElementById('red-tempo'); if (el) el.textContent = UI.tempo(r.segundos); };
        var botao = function () { var bt = document.getElementById('red-cron'); if (bt) bt.innerHTML = cronLigado ? ico('pausa') + ' Pausar' : ico('play') + (r.segundos ? ' Continuar' : ' Iniciar cronômetro'); };
        var cron = cronLigado ? setInterval(function () { r.segundos++; tick(); }, 1000) : null;
        botao();
        App.acao('red-cron', function () {
          cronLigado = !cronLigado;
          if (cronLigado) cron = setInterval(function () { r.segundos++; tick(); }, 1000);
          else { clearInterval(cron); Store.salvar(); }
          botao();
        });
        // O cronômetro sobrevive aos redesenhos da própria tela (dar notas), mas para ao sair dela.
        return function () { clearInterval(cron); clearTimeout(t1); r.texto = ta.value; Store.salvar(); if (location.hash.indexOf('#/redacao/escrever') !== 0) cronLigado = false; };
      }
    };
  }, 'redacao');

  App.acao('red-limpar', function () {
    UI.confirmar('Limpar o texto?', 'O rascunho atual será apagado.', 'Limpar', { perigo: true }).then(function (ok) {
      if (!ok) return;
      var r = rascunho(); r.texto = ''; r.segundos = 0; r.avaliando = false; r.notas = []; Store.salvar(); App.render();
    });
  });
  App.acao('red-avaliar', function () {
    var r = rascunho();
    r.texto = document.getElementById('red-texto').value;
    if (r.texto.trim().split(/\s+/).length < 30) { UI.toast('Escreva um pouco mais antes de avaliar.'); return; }
    r.avaliando = true; Store.salvar(); App.render();
  });
  App.acao('red-nota', function (el) {
    var r = rascunho(); r.notas[Number(el.getAttribute('data-c'))] = Number(el.getAttribute('data-n'));
    r.texto = document.getElementById('red-texto').value;
    Store.salvar(); App.render();
  });
  App.acao('red-salvar', function () {
    var r = rascunho(), t = Redacao.temas[r.tema] || Redacao.temas[0];
    var n = t.tipo === 'enem' ? 5 : 3;
    r.texto = document.getElementById('red-texto').value;
    for (var i = 0; i < n; i++) if (typeof r.notas[i] !== 'number') { UI.toast('Dê nota a todos os critérios.'); return; }
    var id = Date.now().toString(36);
    S().redacoes.push({ id: id, tema: t.titulo, tipo: t.tipo, texto: r.texto, notas: r.notas.slice(0, n), max: t.tipo === 'enem' ? 1000 : 30, segundos: r.segundos, criadoEm: Date.now() });
    S().rascunho = null;
    Store.salvar(); UI.toast('Redação salva.');
    App.ir('#/redacao/historico/' + id);
  });

  App.rota('/redacao/historico', function () {
    var lista = S().redacoes.slice().reverse();
    return {
      titulo: 'Minhas redações',
      html: cabecalho('historico', 'Minhas redações', 'Seu histórico com a nota de cada critério, para ver a evolução.') +
        '<section class="card">' + (lista.length ? '<div class="list">' + lista.map(function (x) {
          var tot = x.notas.reduce(function (s, n) { return s + n; }, 0);
          return '<a class="list-item" href="#/redacao/historico/' + x.id + '"><span class="sigla sigla-sm">' + (x.tipo === 'enem' ? 'EN' : 'CO') + '</span><div class="grow"><div class="title">' + esc(x.tema) + '</div><div class="sub">' + UI.dataCurta(x.criadoEm) + ' · ' + UI.tempo(x.segundos) + '</div></div><b class="mono">' + tot + '/' + x.max + '</b></a>';
        }).join('') + '</div>' : '<div class="empty">' + UI.helma('frente') + '<h3>Nenhuma redação salva</h3><p><a href="#/redacao/escrever">Escreva a primeira</a>.</p></div>') + '</section>'
    };
  }, 'redacao');

  App.rota('/redacao/historico/([a-z0-9]+)', function (m) {
    var x = S().redacoes.filter(function (r) { return r.id === m[0]; })[0];
    if (!x) { App.ir('#/redacao/historico'); return null; }
    var crit = x.tipo === 'enem' ? Redacao.competencias.map(function (c) { return 'C' + c.n + ' · ' + c.titulo; }) : CRITERIOS_CONCURSO;
    var esc2 = x.tipo === 'enem' ? 200 : 10;
    var tot = x.notas.reduce(function (s, n) { return s + n; }, 0);
    return {
      titulo: 'Redação',
      html: '<div class="page-head"><div><a class="btn btn-ghost" href="#/redacao/historico">' + ico('voltar') + ' Minhas redações</a><h1 class="mt">' + esc(x.tema) + '</h1><p>' + UI.dataCurta(x.criadoEm) + ' · escrita em ' + UI.tempo(x.segundos) + '</p></div>' +
        '<button class="btn btn-danger btn-sm" data-act="red-excluir" data-id="' + x.id + '">' + ico('lixo') + ' Excluir</button></div>' +
        '<div class="editor"><section class="card"><div class="prose">' + UI.md(x.texto) + '</div></section><aside class="stack"><section class="card"><div class="stat"><b class="mono">' + tot + '<span class="muted" style="font-size:16px">/' + x.max + '</span></b><span>autoavaliação</span></div>' +
        crit.map(function (c, i) { return '<div class="mat-row" style="grid-template-columns:1fr 50px"><div><div class="nm"><span class="small">' + esc(c) + '</span></div><div class="bar"><i style="width:' + (x.notas[i] / esc2 * 100) + '%"></i></div></div><b class="mono" style="text-align:right">' + x.notas[i] + '</b></div>'; }).join('') +
        '</section>' + painel(Analise.analisar(x.texto)) + '</aside></div>'
    };
  }, 'redacao');
  App.acao('red-excluir', function (el) {
    UI.confirmar('Excluir esta redação?', 'Ela sai do seu histórico e não dá para recuperar.', 'Excluir', { perigo: true }).then(function (ok) {
      if (!ok) return;
      var l = S().redacoes, i = l.findIndex(function (r) { return r.id === el.getAttribute('data-id'); });
      if (i >= 0) l.splice(i, 1);
      Store.salvar(); App.ir('#/redacao/historico');
    });
  });
})();
