/* Telas de estudo: montar simulado, resolver, resultado, banco de questões e revisão. */
(function () {
  'use strict';
  var esc = UI.esc, ico = UI.ico;
  var S = function () { return Store.estado; };
  var LETRAS = 'ABCDE';

  function novoId() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
  function profunda() { return !!(S().perfil || {}).explicacaoProfunda; }
  function nomeResposta(q, r) {
    if (r === undefined || r === null) return 'em branco';
    return q.tipo === 'certo-errado' ? (r ? 'Certo' : 'Errado') : LETRAS[r];
  }

  // ---------- Componente de questão ----------
  /* o: { numero, resposta, confirmada, riscadas[], profunda, expandida, travada } */
  function questao(q, o) {
    var m = Banco.materia(q.materia);
    var origem = q.prova ? esc(q.prova.banca + ' ' + q.prova.ano + (q.prova.orgao ? ' · ' + q.prova.orgao : '')) + (q.autoria === 'aluno' ? ' · sua questão' : '')
      : q.autoria === 'aluno' ? 'Sua questão' : 'Inédita · estilo ' + esc(q.estilo);
    var meta = '<div class="q-meta">' + (o.numero ? '<span class="q-num">' + o.numero + '</span>' : '') +
      '<span class="tag">' + esc(m ? m.nome : q.materia) + '</span><span>' + esc(q.assunto) + '</span><span aria-hidden="true">·</span><span>' + origem + '</span>' + UI.dots(q.dificuldade) + '</div>';
    var corpo = (q.textoBase ? '<div class="q-base">' + esc(q.textoBase) + '</div>' : '') + '<div class="q-text">' + esc(q.enunciado) + '</div>' +
      // Crédito exigido pela licença do INEP: visível desde antes de responder.
      (q.prova && q.prova.banca === 'INEP' ? '<p class="credito">Questão oficial do ENEM ' + esc(q.prova.ano) + ', do INEP/MEC, reproduzida sem alterações sob licença <a href="https://creativecommons.org/licenses/by-nd/3.0/deed.pt_BR" target="_blank" rel="noopener noreferrer">Creative Commons BY-ND 3.0</a>.</p>' : '');
    var mostrar = o.confirmada;
    var notas = mostrar && (o.profunda || o.expandida) && q.explicacao && q.explicacao.alternativas;
    var alts;
    if (q.tipo === 'certo-errado') {
      alts = '<div class="ce" role="group" aria-label="Julgue o item">' + [true, false].map(function (v) {
        var cls = mostrar ? (v === q.resposta ? ' is-right' : (o.resposta === v ? ' is-wrong' : '')) : '';
        return '<button class="alt' + cls + '" data-act="alt" data-v="' + v + '" aria-pressed="' + (o.resposta === v) + '"' + (o.travada ? ' disabled' : '') + '>' +
          '<span class="bubble">' + (v ? 'C' : 'E') + '</span>' + (v ? 'Certo' : 'Errado') + '</button>';
      }).join('') + '</div>';
    } else {
      alts = '<ol class="alts" aria-label="Alternativas">' + q.alternativas.map(function (a, i) {
        var risc = (o.riscadas || []).indexOf(i) >= 0;
        var cls = (risc ? ' struck' : '') + (mostrar ? (i === q.resposta ? ' is-right' : (o.resposta === i ? ' is-wrong' : '')) : '');
        return '<li><div class="alt-wrap"><button class="alt' + cls + '" data-act="alt" data-i="' + i + '" aria-pressed="' + (o.resposta === i) + '"' + (o.travada ? ' disabled' : '') + '>' +
          '<span class="bubble">' + LETRAS[i] + '</span><span class="alt-txt">' + esc(a) + '</span></button>' +
          (o.travada ? '' : '<button class="strike-btn" data-act="riscar" data-i="' + i + '" title="Riscar: elimine a alternativa que você descartou" aria-label="Riscar alternativa ' + LETRAS[i] + '" aria-pressed="' + risc + '">' + ico('riscar') + '</button>') + '</div>' +
          (notas ? '<p class="alt-note"><b>' + LETRAS[i] + ':</b> ' + esc(q.explicacao.alternativas[i]) + '</p>' : '') + '</li>';
      }).join('') + '</ol>';
    }
    var fim = '';
    if (mostrar) {
      var ok = o.resposta === q.resposta, branco = o.resposta === undefined || o.resposta === null;
      fim = '<div class="verdict ' + (ok ? 'ok' : 'err') + '" role="status">' + ico(ok ? 'check' : 'x') + '<div>' + (ok ? 'Resposta certa' : branco ? 'Não respondida' : 'Resposta errada') +
        ' <span>· Gabarito: ' + nomeResposta(q, q.resposta) + (ok || branco ? '' : ' · Você marcou ' + nomeResposta(q, o.resposta)) + '</span></div></div>' +
        (ok ? '' : motivoHtml(q)) + explicacao(q, o);
    }
    return '<article class="q" aria-label="Questão">' + meta + corpo + alts + fim + '</article>';
  }

  function explicacao(q, o) {
    var x = q.explicacao, completa = o.profunda || o.expandida, h = '<section class="exp" aria-label="Explicação">';
    if (!x) {
      h += '<h4>Comentário</h4><p class="muted">' + (q.autoria === 'aluno' ? 'Questão sua, sem comentário. Escreva a resolução em Minhas anotações, logo abaixo.' : 'Questão oficial: o app ainda não tem a resolução comentada dela. Escreva a sua em Minhas anotações, logo abaixo, para revisar depois.') + '</p>';
      // Questão oficial: crédito e licença sempre visíveis (exigência da licença do INEP).
      if (q.fontes && q.fontes.length) h += '<h4>Fonte e licença</h4>' + UI.fontes(q.fontes);
    } else {
      h += '<h4>Resposta comentada</h4><p class="exp-resumo">' + esc(x.resumo) + '</p>';
      if (completa) {
        if (x.detalhada) h += '<h4>Explicação profunda</h4><div class="prose">' + UI.md(x.detalhada) + '</div>';
        if (x.dica) h += '<div class="tip">' + ico('ideia') + '<div><b>Fique de olho:</b> ' + esc(x.dica) + '</div></div>';
        if (q.fontes && q.fontes.length) h += '<h4>Onde pesquisar mais</h4>' + UI.fontes(q.fontes);
        var aula = Banco.aulas.filter(function (a) { return a.materia === q.materia && a.assunto === q.assunto; })[0];
        if (aula) h += '<a class="btn btn-secondary btn-sm mt" href="#/aula/' + aula.id + '">' + ico('aulas') + ' Aula: ' + esc(aula.titulo) + '</a>';
      } else if (x.detalhada || (q.fontes && q.fontes.length)) {
        h += '<button class="btn btn-secondary btn-sm" data-act="expandir">' + ico('livro') + ' Ver explicação completa e fontes</button>';
      }
    }
    // Anotação do aluno: vale para qualquer questão e aparece sempre que ele voltar a ela.
    var nota = (S().notas || {})[q.id] || '';
    h += '<details class="nota" open><summary>' + ico('redacao') + ' Minhas anotações <span class="muted small">(só você vê; ficam salvas nesta questão)</span></summary>' +
      '<label class="sr-only" for="nota-' + esc(q.id) + '">Minhas anotações sobre esta questão</label>' +
      '<textarea class="input" id="nota-' + esc(q.id) + '" data-nota="' + esc(q.id) + '" rows="3" maxlength="5000" placeholder="Seu resumo, o macete que funcionou, onde você errou...">' + esc(nota) + '</textarea></details>';
    return h + '</section>';
  }

  // "Por que errei?": classificar o erro mostra ao aluno o tipo de falha em que ele mais cai.
  function motivoHtml(q) {
    var atual = (S().motivos || {})[q.id];
    return '<div class="motivo"><span class="small"><b>Por que você errou?</b></span><div class="chips" role="group" aria-label="Motivo do erro">' +
      Store.MOTIVOS.map(function (m) { return '<button class="chip chip-sm" data-act="motivo" data-q="' + esc(q.id) + '" data-m="' + esc(m) + '" aria-pressed="' + (atual === m) + '">' + esc(m) + '</button>'; }).join('') + '</div></div>';
  }
  App.acao('motivo', function (el) {
    var id = el.getAttribute('data-q'), m = el.getAttribute('data-m');
    if (S().motivos[id] === m) delete S().motivos[id]; else S().motivos[id] = m;
    Store.salvar();
    el.parentElement.querySelectorAll('[data-act="motivo"]').forEach(function (b) { b.setAttribute('aria-pressed', S().motivos[id] === b.getAttribute('data-m')); });
  });

  // Salva as anotações enquanto o aluno digita, sem redesenhar a tela.
  var tNota, notaPendente = null;
  function gravarNota() {
    if (!notaPendente) return;
    var v = notaPendente.el.value.slice(0, 5000), id = notaPendente.id;
    notaPendente = null;
    if (v.trim()) S().notas[id] = v; else delete S().notas[id];
    Store.salvar();
  }
  document.addEventListener('input', function (e) {
    var id = e.target.getAttribute && e.target.getAttribute('data-nota');
    if (!id) return;
    notaPendente = { id: id, el: e.target };
    clearTimeout(tNota);
    tNota = setTimeout(gravarNota, 400);
  });
  // Fechar a aba ou trocar de app no celular logo depois de digitar não pode perder a anotação.
  window.addEventListener('pagehide', gravarNota);
  document.addEventListener('visibilitychange', function () { if (document.hidden) gravarNota(); });

  // ---------- Criar simulado ----------
  App.criarSimulado = function (cfg, titulo) {
    var p = S().perfil;
    var ids = cfg.ids ? cfg.ids.filter(function (id) { return Banco.questao(id); })
      : Motor.montarSimulado(Banco, Object.assign({ objetivo: p.objetivo, seed: Date.now() }, cfg), S().respostas);
    if (!ids.length) { UI.toast('Nenhuma questão encontrada com esses filtros.'); return null; }
    var sim = {
      id: novoId(), titulo: titulo || 'Simulado', criadoEm: Date.now(), modo: cfg.modo || 'estudo', origem: cfg.origem || 'simulado',
      questoes: ids, respostas: {}, confirmadas: {}, marcadas: {}, riscadas: {}, atual: 0,
      tempoLimiteSeg: cfg.tempoMin ? Math.round(cfg.tempoMin * 60) : 0, decorridoSeg: 0, status: 'andamento'
    };
    var lista = S().simulados;
    lista.push(sim);
    // Mantém o histórico enxuto: descarta os concluídos mais antigos além de 150.
    while (lista.length > 150) { var i = lista.findIndex(function (s) { return s.status === 'concluido'; }); if (i < 0) break; lista.splice(i, 1); }
    Store.salvar();
    App.ir('#/simulado/' + sim.id);
    return sim;
  };
  App.acao('sim-rapido', function () {
    var p = S().perfil;
    App.criarSimulado({ materias: p.materias, quantidade: 10, modo: 'estudo' }, 'Simulado recomendado');
  });

  // ---------- Página de simulados (montador) ----------
  var B = null; // estado do montador
  function montadorPadrao() {
    var p = S().perfil, o = App.objetivo();
    return { materias: p.materias.slice(), assuntos: [], quantidade: 20, dificuldades: [], estilos: [], tipo: '', status: '', modo: 'estudo', tempo: 'auto' };
  }
  function cfgDoMontador() {
    var o = App.objetivo(), n = B.quantidade;
    var tempoMin = B.tempo === 'auto' ? Math.ceil(n * o.minutosPorQuestao) : B.tempo === 'livre' ? 0 : Number(B.tempo);
    return { materias: B.materias, assuntos: B.assuntos, quantidade: n, dificuldades: B.dificuldades.map(Number), estilos: B.estilos, tipo: B.tipo, status: B.status, modo: B.modo, tempoMin: B.modo === 'prova' ? tempoMin : 0 };
  }
  function disponiveis() { return Motor.filtrar(Banco.questoes, cfgDoMontador(), S().respostas).length; }

  App.rota('/simulados', function () {
    if (!B) B = montadorPadrao();
    var st = S(), o = App.objetivo();
    var assuntosDisp = {};
    Banco.questoes.forEach(function (q) { if (B.materias.indexOf(q.materia) >= 0) assuntosDisp[q.assunto] = q.materia; });
    var chip = function (attr, v, rot, on) { return '<button class="chip" data-toggle="multi" ' + attr + '="' + esc(v) + '" aria-pressed="' + on + '">' + ico('check', 'ck') + esc(rot) + '</button>'; };
    var seg = function (id, pares, atual) {
      return '<div class="seg" id="' + id + '" role="group">' + pares.map(function (p) { return '<button data-toggle="one" data-v="' + esc(p[0]) + '" aria-pressed="' + (String(atual) === String(p[0])) + '">' + esc(p[1]) + '</button>'; }).join('') + '</div>';
    };
    var presets = '<div class="grid g4">' + [
      ['p-rapido', 'Rápido', '10 questões das suas matérias, com correção na hora.', 'play'],
      ['p-completo', 'Completo cronometrado', '30 questões no ritmo da sua prova, gabarito no final.', 'relogio'],
      ['p-erradas', 'Só o que errei', 'Refaça as questões em que sua última resposta foi errada.', 'revisao'],
      ['p-fracos', 'Pontos fracos', 'Questões dos assuntos com menor taxa de acerto.', 'alvo']
    ].map(function (p) {
      return '<button class="card lesson-card" style="text-align:left" data-act="' + p[0] + '"><span class="sigla sigla-sm">' + ico(p[3]) + '</span><h3>' + p[1] + '</h3><p>' + p[2] + '</p></button>';
    }).join('') + '</div>';

    var form = '<section class="card mt-lg" id="montador"><div class="card-head"><div><h2>Monte o seu simulado</h2><p class="small">Pesos de <b>' + esc(o.nome) + '</b> aplicados. Questões nunca vistas e erradas têm prioridade.</p></div>' +
      '<button class="btn btn-ghost btn-sm" data-act="m-limpar">Restaurar padrão</button></div>' +
      '<div class="stack" style="gap:22px">' +
      '<div class="field"><span class="label">Matérias</span><div class="chips" id="m-mats">' + Banco.materias.filter(function (m) { return Banco.questoes.some(function (q) { return q.materia === m.id; }); }).map(function (m) { return chip('data-mat', m.id, m.nome, B.materias.indexOf(m.id) >= 0); }).join('') + '</div></div>' +
      (Object.keys(assuntosDisp).length ? '<details' + (B.assuntos.length ? ' open' : '') + '><summary class="label" style="cursor:pointer">Assuntos específicos <span class="muted small">(opcional' + (B.assuntos.length ? ', ' + B.assuntos.length + ' escolhidos' : '') + ')</span></summary><div class="chips mt" id="m-assuntos">' +
        Object.keys(assuntosDisp).sort().map(function (a) { return chip('data-ass', a, a, B.assuntos.indexOf(a) >= 0); }).join('') + '</div></details>' : '') +
      '<div class="grid g2"><div class="field"><span class="label">Quantidade</span>' + seg('m-qtd', [[10, '10'], [20, '20'], [30, '30'], [50, '50'], [90, '90']], B.quantidade) + '</div>' +
      '<div class="field"><span class="label">Modo</span>' + seg('m-modo', [['estudo', 'Estudo: correção na hora'], ['prova', 'Prova: gabarito no final']], B.modo) + '<small>' + (B.modo === 'prova' ? 'Como no dia da prova: cronômetro correndo e resposta só depois de entregar.' : 'Você vê se acertou e a explicação logo depois de cada questão, sem cronômetro.') + '</small></div></div>' +
      '<div class="grid g2"><div class="field"><span class="label">Dificuldade</span><div class="chips" id="m-dif">' + [[1, 'Fácil'], [2, 'Média'], [3, 'Difícil']].map(function (d) { return chip('data-dif', d[0], d[1], B.dificuldades.indexOf(String(d[0])) >= 0); }).join('') + '</div><small>Nenhuma marcada = todas.</small></div>' +
      '<div class="field"><span class="label">Tipo de questão</span>' + seg('m-tipo', [['', 'Todas'], ['multipla', 'Múltipla escolha'], ['certo-errado', 'Certo ou errado']], B.tipo) + '</div></div>' +
      '<div class="field"><span class="label">Estilo de banca</span><small>As questões do app são inéditas no estilo de cada banca, mais questões oficiais do ENEM. Provas de outras bancas você traz em Minhas questões.</small><div class="chips" id="m-estilos">' + Banco.ESTILOS.filter(function (e) { return Banco.questoes.some(function (q) { return q.estilo === e; }); }).map(function (e) { return chip('data-est', e, e, B.estilos.indexOf(e) >= 0); }).join('') + '</div></div>' +
      '<div class="grid g2"><div class="field"><span class="label">Questões</span>' + seg('m-status', [['', 'Todas'], ['nao-resolvidas', 'Inéditas para mim'], ['erradas', 'Que errei']], B.status) + '</div>' +
      (B.modo === 'prova' ? '<div class="field"><span class="label">Tempo</span>' + seg('m-tempo', [['auto', 'Tempo da banca (' + Math.ceil(B.quantidade * o.minutosPorQuestao) + ' min)'], ['livre', 'Sem limite'], [String(B.quantidade * 2), B.quantidade * 2 + ' min']], B.tempo) + '</div>' : '<div></div>') + '</div>' +
      '</div><div class="row-between mt-lg"><span class="muted" id="m-disp" aria-live="polite"></span><button class="btn btn-primary btn-lg" data-act="m-criar">' + ico('play') + ' Começar simulado</button></div></section>';

    var hist = st.simulados.slice().reverse().slice(0, 30);
    var histHtml = '<section class="card mt-lg"><div class="card-head"><h2>Histórico</h2><span class="muted small">' + UI.plural(st.simulados.length, 'simulado', 'simulados') + '</span></div>' + (hist.length ? '<div class="list">' + hist.map(function (s) {
      var andamento = s.status === 'andamento';
      var r = andamento ? null : Motor.corrigir(Banco, s);
      return '<a class="list-item" href="#/' + (andamento ? 'simulado/' : 'resultado/') + s.id + '"><span class="mark ' + (andamento ? 'blank' : r.percentual >= 70 ? 'ok' : 'err') + '">' + ico(andamento ? 'play' : r.percentual >= 70 ? 'check' : 'alvo') + '</span>' +
        '<div class="grow"><div class="title">' + esc(s.titulo) + '</div><div class="sub">' + UI.dataCurta(s.criadoEm) + ' · ' + UI.plural(s.questoes.length, 'questão', 'questões') + ' · ' + (s.modo === 'prova' ? 'modo prova' : 'modo estudo') + '</div></div>' +
        (andamento ? '<span class="tag tag-warn">Em andamento</span>' : '<b class="mono">' + r.percentual + '%</b>') + '</a>';
    }).join('') + '</div>' : '<div class="empty" style="padding:28px">' + ico('simulado') + '<h3>Nenhum simulado ainda</h3><p>Escolha um dos formatos acima para começar.</p></div>') + '</section>';

    return {
      titulo: 'Simulados', manterScroll: true,
      html: '<div class="page-head"><div><span class="eyebrow">Praticar</span><h1>Simulados</h1><p>Monte provas sob medida para o seu objetivo, no tempo real da banca ou com correção a cada questão.</p></div></div>' + presets + form + histHtml,
      montar: function () {
        var atualizar = function () { var n = disponiveis(); document.getElementById('m-disp').textContent = n ? UI.plural(n, 'questão disponível', 'questões disponíveis') + ' com esses filtros' + (n < B.quantidade ? ' (o simulado terá ' + n + ')' : '') : 'Nenhuma questão com esses filtros'; };
        var ler = function (e) {
          var root = document.getElementById('montador');
          var antes = B.materias.join() + B.modo + B.quantidade;
          B.materias = App.valores(root.querySelector('#m-mats'), 'data-mat');
          var ass = root.querySelector('#m-assuntos'); B.assuntos = ass ? App.valores(ass, 'data-ass') : [];
          B.quantidade = Number(App.valores(root.querySelector('#m-qtd'), 'data-v')[0] || 20);
          B.modo = App.valores(root.querySelector('#m-modo'), 'data-v')[0] || 'prova';
          B.dificuldades = App.valores(root.querySelector('#m-dif'), 'data-dif');
          B.tipo = App.valores(root.querySelector('#m-tipo'), 'data-v')[0] || '';
          B.estilos = App.valores(root.querySelector('#m-estilos'), 'data-est');
          B.status = App.valores(root.querySelector('#m-status'), 'data-v')[0] || '';
          var t = root.querySelector('#m-tempo'); if (t) B.tempo = App.valores(t, 'data-v')[0] || 'auto';
          // Matérias, modo e quantidade mudam outras opções da tela (assuntos, tempo): redesenha.
          if (antes !== B.materias.join() + B.modo + B.quantidade) {
            B.assuntos = B.assuntos.filter(function (a) { return Banco.questoes.some(function (q) { return q.assunto === a && B.materias.indexOf(q.materia) >= 0; }); });
            if (B.tempo !== 'auto' && B.tempo !== 'livre') B.tempo = 'auto';
            App.render();
          } else atualizar();
        };
        var mont = document.getElementById('montador');
        mont.addEventListener('alternou', ler);
        atualizar();
      }
    };
  }, 'simulados');

  App.acao('m-limpar', function () { B = montadorPadrao(); App.render(); });
  App.acao('m-criar', function () {
    if (!B.materias.length) { UI.toast('Escolha ao menos uma matéria.'); return; }
    var c = cfgDoMontador();
    App.criarSimulado(c, (c.modo === 'prova' ? 'Simulado' : 'Treino') + ' · ' + (B.materias.length === 1 ? Banco.materia(B.materias[0]).nome : App.objetivo().nome));
  });
  App.acao('p-rapido', function () { App.acoes['sim-rapido'](); });
  App.acao('p-completo', function () {
    var o = App.objetivo(), p = S().perfil;
    App.criarSimulado({ materias: p.materias, quantidade: 30, modo: 'prova', tempoMin: Math.ceil(30 * o.minutosPorQuestao) }, 'Simulado completo · ' + o.nome);
  });
  App.acao('p-erradas', function () {
    var ids = Motor.filtrar(Banco.questoes, { status: 'erradas' }, S().respostas).map(function (q) { return q.id; });
    if (!ids.length) { UI.toast('Você ainda não tem questões erradas. Bom sinal!'); return; }
    App.criarSimulado({ ids: Motor.embaralhar(ids, Motor.rng(Date.now())).slice(0, 30), modo: 'estudo' }, 'Refazendo as erradas');
  });
  App.acao('p-fracos', function () {
    var fr = Motor.pontosFracos(Banco, S().respostas, 5);
    if (!fr.length) { UI.toast('Responda mais questões para identificarmos seus pontos fracos.'); return; }
    var ids = Banco.questoes.filter(function (q) { return fr.some(function (f) { return f.materia === q.materia && f.assunto === q.assunto; }); }).map(function (q) { return q.id; });
    App.criarSimulado({ ids: Motor.embaralhar(ids, Motor.rng(Date.now())).slice(0, 20), modo: 'estudo' }, 'Pontos fracos');
  });

  // ---------- Resolver simulado ----------
  var R = null; // { sim, expandidas{} }
  function simAtual(id) { return S().simulados.filter(function (s) { return s.id === id; })[0]; }

  App.rota('/simulado/([a-z0-9]+)', function (m) {
    var sim = simAtual(m[0]);
    if (!sim) { App.ir('#/simulados', true); return null; }
    if (sim.status === 'concluido') { App.ir('#/resultado/' + sim.id, true); return null; }
    var existentes = sim.questoes.filter(function (id) { return Banco.questao(id); });
    if (!existentes.length) { App.ir('#/simulados', true); UI.toast('As questões deste simulado não existem mais (banco removido).'); return null; }
    if (existentes.length < sim.questoes.length) {
      sim.questoes = existentes; sim.atual = Math.min(sim.atual, existentes.length - 1); Store.salvar();
      UI.toast('Questões de um banco removido saíram deste simulado.');
    }
    R = { sim: sim, expandidas: {} };
    return {
      titulo: sim.titulo, cheia: true,
      html: '<main class="main" style="margin:0 auto" id="main"><h1 class="sr-only">' + esc(sim.titulo) + '</h1>' +
        '<div class="run-top"><button class="btn btn-ghost btn-sm" data-act="r-sair" aria-label="Sair e salvar o simulado">' + ico('voltar') + ' Sair</button>' +
        '<div class="bar" aria-hidden="true"><i id="r-prog"></i></div><span class="mono small" id="r-cont"></span>' +
        '<span class="timer" id="r-timer" role="timer" aria-live="off">' + ico('relogio') + '<span></span></span>' +
        (sim.modo !== 'prova' ? '<button class="btn btn-ghost btn-sm prof-btn" data-act="r-prof" id="r-prof" aria-label="Mostrar a explicação completa depois de responder" title="Mostrar a explicação completa depois de responder">' + ico('livro') + '<span class="hide-sm">Explicação completa</span></button>' : '') +
        '<button class="btn btn-primary btn-sm" data-act="r-finalizar">Finalizar</button></div>' +
        '<div class="run"><div id="r-area"></div><aside class="map"><div class="card"><div class="row-between" style="margin-bottom:12px"><h3>' + esc(sim.titulo) + '</h3></div>' +
        '<div class="map-grid" id="r-map"></div><div class="legend"><span><i style="background:var(--pen-soft)"></i>Respondida</span>' +
        (sim.modo === 'prova' ? '' : '<span><i style="background:var(--ok-soft)"></i>Certa</span><span><i style="background:var(--err-soft)"></i>Errada</span>') +
        '<span><i style="background:var(--warn)"></i>Revisar depois</span></div>' +
        '<div class="shortcuts"><span class="kbd">A–E</span>escolher<span class="kbd">C / E</span>certo ou errado<span class="kbd">←→</span>navegar<span class="kbd">Enter</span>' + (sim.modo === 'prova' ? 'próxima' : 'responder / próxima') + '<span class="kbd">M</span>marcar para revisar</div></div></aside></div></main>',
      montar: montarRunner
    };
  }, 'simulados');

  function desenhar(rolar) {
    var sim = R.sim, id = sim.questoes[sim.atual], q = Banco.questao(id);
    var conf = !!sim.confirmadas[id];
    var area = document.getElementById('r-area');
    if (!q) { area.innerHTML = '<div class="card">Questão indisponível (banco removido). <button class="btn btn-secondary btn-sm" data-act="r-prox">Pular</button></div>'; return; }
    var ultima = sim.atual === sim.questoes.length - 1;
    var principal;
    if (sim.modo === 'prova') principal = ultima ? '<button class="btn btn-primary" data-act="r-finalizar">Finalizar simulado</button>' : '<button class="btn btn-primary" data-act="r-prox">Próxima ' + ico('dir') + '</button>';
    else if (!conf) principal = '<button class="btn btn-primary" data-act="r-responder">Responder</button>';
    else principal = ultima ? '<button class="btn btn-primary" data-act="r-finalizar">Ver resultado</button>' : '<button class="btn btn-primary" data-act="r-prox">Próxima ' + ico('dir') + '</button>';
    area.innerHTML = questao(q, {
      numero: (sim.atual + 1) + '/' + sim.questoes.length, resposta: sim.respostas[id], confirmada: conf, riscadas: sim.riscadas[id],
      profunda: profunda(), expandida: R.expandidas[id], travada: conf
    }) + '<div class="run-nav"><button class="btn btn-ghost" data-act="r-ant"' + (sim.atual ? '' : ' disabled') + '>' + ico('esq') + ' Anterior</button>' +
      '<button class="btn btn-ghost btn-sm flag-btn" data-act="r-marcar" aria-pressed="' + !!sim.marcadas[id] + '" title="Marque para voltar a ela antes de entregar">' + ico('flag') + ' Revisar depois</button>' + principal + '</div>';
    var respondidas = Object.keys(sim.respostas).length;
    document.getElementById('r-prog').style.width = (respondidas / sim.questoes.length * 100) + '%';
    document.getElementById('r-cont').textContent = respondidas + '/' + sim.questoes.length;
    var pf = document.getElementById('r-prof'); if (pf) pf.setAttribute('aria-pressed', profunda());
    document.getElementById('r-map').innerHTML = sim.questoes.map(function (qid, i) {
      var cls = [], qq = Banco.questao(qid);
      if (sim.confirmadas[qid] && qq) cls.push(sim.respostas[qid] === qq.resposta ? 'ok' : 'err');
      else if (sim.respostas[qid] !== undefined) cls.push('ans');
      if (sim.marcadas[qid]) cls.push('flag');
      if (i === sim.atual) cls.push('cur');
      return '<button class="' + cls.join(' ') + '" data-act="r-ir" data-i="' + i + '" aria-label="Questão ' + (i + 1) + '"' + (i === sim.atual ? ' aria-current="step"' : '') + '>' + (i + 1) + '</button>';
    }).join('');
    if (rolar) window.scrollTo({ top: 0 });
  }

  function relogio() {
    var sim = R.sim, el = document.querySelector('#r-timer span');
    if (!el) return;
    var t = sim.tempoLimiteSeg ? sim.tempoLimiteSeg - sim.decorridoSeg : sim.decorridoSeg;
    el.textContent = UI.tempo(t);
    document.getElementById('r-timer').classList.toggle('low', !!sim.tempoLimiteSeg && t <= 300);
  }

  function montarRunner() {
    desenhar(true); relogio();
    var sim = R.sim, tick = 0;
    var ultimo = Date.now(), resto = 0;
    var timer = setInterval(function () {
      var agora = Date.now(), passou = agora - ultimo;
      ultimo = agora;
      // No modo prova o tempo é o do relógio (aba oculta continua contando, como numa prova real);
      // no modo estudo, aba oculta pausa.
      if (document.hidden && sim.modo !== 'prova') return;
      resto += passou;
      var seg = Math.floor(resto / 1000);
      if (!seg) return;
      resto -= seg * 1000;
      sim.decorridoSeg += seg; relogio();
      if (++tick % 10 === 0) Store.salvar();
      if (sim.tempoLimiteSeg && sim.decorridoSeg >= sim.tempoLimiteSeg) { clearInterval(timer); UI.toast('Tempo esgotado. Simulado entregue.'); finalizar(); }
    }, 1000);
    var tecla = function (e) {
      if (e.ctrlKey || e.metaKey || e.altKey || /INPUT|TEXTAREA|SELECT/.test(e.target.tagName) || document.querySelector('dialog[open]')) return;
      var id = sim.questoes[sim.atual], q = Banco.questao(id), k = e.key.toLowerCase();
      if (!q) return;
      if (k === 'arrowright') { e.preventDefault(); App.acoes['r-prox'](); }
      else if (k === 'arrowleft') { e.preventDefault(); App.acoes['r-ant'](); }
      else if (k === 'm') App.acoes['r-marcar']();
      else if (k === 'enter' && !e.target.closest('button,a')) { e.preventDefault(); if (sim.modo !== 'prova' && !sim.confirmadas[id]) App.acoes['r-responder'](); else App.acoes['r-prox'](); }
      else if (q.tipo === 'certo-errado' && (k === 'c' || k === 'e')) escolher(k === 'c');
      else if (q.tipo === 'multipla') {
        var i = 'abcde'.indexOf(k); if (i < 0) i = '12345'.indexOf(k);
        if (i >= 0 && i < q.alternativas.length) escolher(i);
      }
    };
    document.addEventListener('keydown', tecla);
    return function () { clearInterval(timer); document.removeEventListener('keydown', tecla); Store.salvar(); };
  }

  function escolher(v) {
    var sim = R.sim, id = sim.questoes[sim.atual];
    if (sim.confirmadas[id]) return;
    if (sim.respostas[id] === v && sim.modo === 'prova') delete sim.respostas[id]; // clicar de novo desmarca
    else sim.respostas[id] = v;
    if (sim.riscadas[id] && typeof v === 'number') sim.riscadas[id] = sim.riscadas[id].filter(function (x) { return x !== v; });
    Store.salvar(); desenhar();
  }
  App.acao('alt', function (el) {
    if (!R || !document.getElementById('r-area')) return QV && QV.escolher(el);
    escolher(el.hasAttribute('data-v') ? el.getAttribute('data-v') === 'true' : Number(el.getAttribute('data-i')));
  });
  App.acao('riscar', function (el) {
    var i = Number(el.getAttribute('data-i'));
    var alvo = R && document.getElementById('r-area') ? R.sim.riscadas : QV.riscadas;
    var id = R && document.getElementById('r-area') ? R.sim.questoes[R.sim.atual] : QV.id;
    var l = alvo[id] = alvo[id] || [];
    var pos = l.indexOf(i);
    if (pos >= 0) l.splice(pos, 1); else l.push(i);
    if (R && document.getElementById('r-area')) { Store.salvar(); desenhar(); } else App.render();
  });
  App.acao('expandir', function () {
    if (R && document.getElementById('r-area')) { R.expandidas[R.sim.questoes[R.sim.atual]] = true; desenhar(); }
    else if (QV) { QV.expandida = true; App.render(); }
  });
  App.acao('r-responder', function () {
    var sim = R.sim, id = sim.questoes[sim.atual], q = Banco.questao(id);
    if (sim.respostas[id] === undefined) { UI.toast('Escolha uma alternativa antes de responder.'); return; }
    sim.confirmadas[id] = true;
    Store.registrarResposta(q, sim.respostas[id], sim.origem);
    desenhar();
    var v = document.querySelector('.verdict'); if (v) v.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  });
  App.acao('r-prox', function () { var s = R.sim; if (s.atual < s.questoes.length - 1) { s.atual++; Store.salvar(); desenhar(true); } });
  App.acao('r-ant', function () { var s = R.sim; if (s.atual > 0) { s.atual--; Store.salvar(); desenhar(true); } });
  App.acao('r-ir', function (el) { R.sim.atual = Number(el.getAttribute('data-i')); Store.salvar(); desenhar(true); });
  App.acao('r-marcar', function () { var s = R.sim, id = s.questoes[s.atual]; if (s.marcadas[id]) delete s.marcadas[id]; else s.marcadas[id] = true; Store.salvar(); desenhar(); });
  App.acao('r-prof', function () { S().perfil.explicacaoProfunda = !profunda(); Store.salvar(); desenhar(); UI.toast(profunda() ? 'Explicação profunda ligada.' : 'Explicação profunda desligada.'); });
  App.acao('r-sair', function () { Store.salvar(); App.ir('#/simulados'); UI.toast('Simulado salvo. Continue quando quiser.'); });
  App.acao('r-finalizar', function () {
    var sim = R.sim, brancos = sim.questoes.length - Object.keys(sim.respostas).length;
    var marcadas = Object.keys(sim.marcadas).length;
    if (!brancos && !marcadas) { finalizar(); return; }
    UI.confirmar(sim.modo === 'prova' ? 'Entregar a prova?' : 'Encerrar o treino?', (brancos ? UI.plural(brancos, 'questão está', 'questões estão') + ' em branco. ' : '') + (marcadas ? UI.plural(marcadas, 'questão marcada', 'questões marcadas') + ' para revisar.' : ''), 'Entregar', { cancelar: 'Continuar resolvendo' })
      .then(function (ok) { if (ok) finalizar(); });
  });
  function finalizar() {
    var sim = R.sim;
    sim.questoes.forEach(function (id) {
      var q = Banco.questao(id);
      if (q && sim.respostas[id] !== undefined && !sim.confirmadas[id]) { sim.confirmadas[id] = true; Store.registrarResposta(q, sim.respostas[id], sim.origem); }
    });
    sim.status = 'concluido'; sim.concluidoEm = Date.now();
    Store.salvar();
    App.ir('#/resultado/' + sim.id, true);
  }

  // ---------- Resultado ----------
  App.rota('/resultado/([a-z0-9]+)', function (m) {
    var sim = simAtual(m[0]);
    if (!sim) { App.ir('#/simulados', true); return null; }
    var r = Motor.corrigir(Banco, sim), p = S().perfil;
    var cor = r.percentual >= 70 ? 'var(--ok)' : r.percentual >= 50 ? 'var(--warn)' : 'var(--err)';
    var frase = r.percentual >= 85 ? 'Desempenho de aprovação. Mantenha o ritmo com revisões.' : r.percentual >= 70 ? 'Bom resultado. Revise as erradas para fixar.' : r.percentual >= 50 ? 'No caminho. As explicações das erradas vão te dar os próximos pontos.' : 'Bom ponto de partida: as aulas abaixo cobrem o que você errou.';
    var mats = Object.keys(r.porMateria).map(function (id) {
      var x = r.porMateria[id], mm = Banco.materia(id), pc = Math.round(x.certas / x.total * 100);
      return '<div class="mat-row"><span class="sigla sigla-sm">' + mm.sigla + '</span><div><div class="nm"><span>' + esc(mm.nome) + '</span><span class="muted small">' + x.certas + '/' + x.total + '</span></div><div class="bar ' + (pc >= 70 ? 'ok' : pc >= 50 ? 'warn' : 'err') + '"><i style="width:' + pc + '%"></i></div></div><b class="mono" style="text-align:right">' + pc + '%</b></div>';
    }).join('');
    var erradas = r.itens.filter(function (i) { return i.certo !== true; }).map(function (i) { return i.id; });
    var aulas = {};
    erradas.forEach(function (id) { var q = Banco.questao(id); Banco.aulas.forEach(function (a) { if (a.materia === q.materia && a.assunto === q.assunto) aulas[a.id] = a; }); });
    var lista = sim.questoes.map(function (id, i) {
      var q = Banco.questao(id); if (!q) return '';
      var ok = Motor.acertou(q, sim.respostas[id]);
      return '<details class="rev"><summary><span class="mark ' + (ok === null ? 'blank' : ok ? 'ok' : 'err') + '">' + ico(ok === null ? 'mais' : ok ? 'check' : 'x') + '</span>' +
        '<span class="mono small muted">' + (i + 1) + '</span><span class="grow clamp2" style="flex:1">' + esc(q.enunciado) + '</span><span class="tag">' + esc(Banco.materia(q.materia).sigla) + '</span>' + ico('baixo', 'chev') + '</summary>' +
        '<div class="rev-body" data-q="' + esc(id) + '"></div></details>';
    }).join('');
    var tempoMedio = sim.questoes.length ? Math.round(sim.decorridoSeg / sim.questoes.length) : 0;
    return {
      titulo: 'Resultado',
      html: '<div class="page-head"><div><span class="eyebrow">Resultado · ' + esc(sim.titulo) + '</span><h1>' + esc(frase) + '</h1></div><a class="btn btn-ghost" href="#/simulados">' + ico('voltar') + ' Simulados</a></div>' +
        '<section class="card"><div class="score"><div class="ring" style="--p:' + r.percentual + ';--c:' + cor + '"><div><b class="mono">' + r.percentual + '%</b><span>de acerto</span></div></div>' +
        '<div class="score-stats"><div class="stat"><b style="color:var(--ok)">' + r.certas + '</b><span>certas</span></div><div class="stat"><b style="color:var(--err)">' + r.erradas + '</b><span>erradas</span></div><div class="stat"><b>' + r.brancos + '</b><span>em branco</span></div>' +
        '<div class="stat"><b class="mono" style="font-size:22px">' + UI.tempo(sim.decorridoSeg) + '</b><span>tempo total</span></div><div class="stat"><b class="mono" style="font-size:22px">' + UI.tempo(tempoMedio) + '</b><span>por questão</span></div>' +
        (r.liquida !== null && p.penalidadeCE ? '<div class="stat"><b class="mono" style="font-size:22px">' + r.liquida + '/' + r.ceTotal + '</b><span title="Nas provas de certo ou errado, cada item errado anula um certo; em branco não conta.">nota líquida (certo ou errado: cada erro anula um acerto)</span></div>' : '') + '</div></div>' +
        '<div class="row mt-lg">' + (erradas.length ? '<button class="btn btn-primary" data-act="refazer" data-sim="' + sim.id + '">' + ico('revisao') + ' Refazer as ' + erradas.length + ' que errei ou pulei</button>' : '') +
        '<a class="btn btn-secondary" href="#/simulados">Novo simulado</a>' + (erradas.length ? '<a class="btn btn-ghost" href="#/revisao">Erradas foram para a revisão</a>' : '') + '</div></section>' +
        '<div class="grid g-main mt"><section class="card"><div class="card-head"><h2>Correção comentada</h2><span class="muted small">Toque para ver a explicação</span></div>' + lista + '</section>' +
        '<div class="stack"><section class="card"><h2 style="margin-bottom:10px">Por matéria</h2>' + mats + '</section>' +
        (Object.keys(aulas).length ? '<section class="card"><h2 style="margin-bottom:6px">Aulas para revisar</h2><div class="list">' + Object.keys(aulas).map(function (k) {
          var a = aulas[k]; return '<a class="list-item" href="#/aula/' + a.id + '"><span class="sigla sigla-sm">' + Banco.materia(a.materia).sigla + '</span><div class="grow"><div class="title">' + esc(a.titulo) + '</div><div class="sub">' + a.duracaoMin + ' min</div></div>' + ico('dir') + '</a>';
        }).join('') + '</div></section>' : '') + '</div></div>',
      montar: function () {
        // Renderiza a explicação só ao abrir, para a página de resultado não ficar pesada.
        document.querySelectorAll('details.rev').forEach(function (d) {
          d.addEventListener('toggle', function () {
            var b = d.querySelector('.rev-body');
            if (!d.open || b.childElementCount) return;
            var id = b.getAttribute('data-q');
            b.innerHTML = questao(Banco.questao(id), { resposta: sim.respostas[id], confirmada: true, travada: true, profunda: true });
          });
        });
      }
    };
  }, 'simulados');
  App.acao('refazer', function (el) {
    var sim = simAtual(el.getAttribute('data-sim')), r = Motor.corrigir(Banco, sim);
    App.criarSimulado({ ids: r.itens.filter(function (i) { return i.certo !== true; }).map(function (i) { return i.id; }), modo: 'estudo' }, 'Refazendo: ' + sim.titulo);
  });

  // ---------- Banco de questões ----------
  var QF = { busca: '', materias: [], estilos: [], dificuldades: [], tipo: '', status: '', limite: 20 };
  var QV = null; // estado da questão aberta individualmente
  var listaAtual = [];

  App.rota('/questoes', function () {
    QV = null;
    var res = Motor.filtrar(Banco.questoes, { busca: QF.busca, materias: QF.materias, estilos: QF.estilos, dificuldades: QF.dificuldades.map(Number), tipo: QF.tipo, status: QF.status }, S().respostas);
    listaAtual = res.map(function (q) { return q.id; });
    var sel = function (id, opcoes, atual, rot) {
      return '<label class="field"><span class="sr-only">' + rot + '</span><select class="input" id="' + id + '">' + opcoes.map(function (o) { return '<option value="' + esc(o[0]) + '"' + (String(atual) === String(o[0]) ? ' selected' : '') + '>' + esc(o[1]) + '</option>'; }).join('') + '</select></label>';
    };
    var itens = res.slice(0, QF.limite).map(function (q) {
      var u = Motor.ultima(S().respostas, q.id);
      return '<a class="list-item" href="#/questao/' + encodeURIComponent(q.id) + '"><span class="sigla sigla-sm">' + Banco.materia(q.materia).sigla + '</span><div class="grow"><div class="title clamp2" style="font-weight:500">' + esc(q.enunciado) + '</div>' +
        '<div class="sub">' + esc(q.assunto) + ' · ' + (q.prova ? esc(q.prova.banca + ' ' + q.prova.ano) : 'Inédita, estilo ' + esc(q.estilo)) + ' · ' + (q.tipo === 'certo-errado' ? 'Certo ou errado' : 'Múltipla escolha') + '</div></div>' +
        (u ? '<span class="tag ' + (u.certo ? 'tag-ok' : 'tag-err') + '">' + (u.certo ? 'Acertou' : 'Errou') + '</span>' : '') + '</a>';
    }).join('');
    return {
      titulo: 'Banco de questões', manterScroll: true,
      html: '<div class="page-head"><div><span class="eyebrow">Praticar</span><h1>Banco de questões</h1><p>' + UI.plural(Banco.questoes.length, 'questão comentada', 'questões comentadas') + ' para resolver uma a uma. São inéditas no estilo de cada banca, mais questões oficiais do ENEM; provas de outras bancas você traz em <a href="#/minhas-questoes">Minhas questões</a>.</p></div>' +
        '<button class="btn btn-secondary" data-act="q-simulado"' + (res.length ? '' : ' disabled') + '>' + ico('simulado') + ' Simulado com estes filtros</button></div>' +
        '<section class="card"><div class="search"><label class="sr-only" for="q-busca">Buscar</label>' + ico('busca') + '<input class="input" id="q-busca" type="search" placeholder="Buscar por palavra, assunto ou trecho do enunciado" value="' + esc(QF.busca) + '"></div>' +
        '<div class="chips mt" id="q-mats">' + Banco.materias.filter(function (m) { return Banco.questoes.some(function (q) { return q.materia === m.id; }); }).map(function (m) {
          return '<button class="chip" data-toggle="multi" data-mat="' + m.id + '" aria-pressed="' + (QF.materias.indexOf(m.id) >= 0) + '">' + ico('check', 'ck') + esc(m.nome) + '</button>';
        }).join('') + '</div>' +
        '<div class="grid g4 mt">' + sel('q-estilo', [['', 'Todas as bancas']].concat(Banco.ESTILOS.map(function (e) { return [e, e]; })), QF.estilos[0] || '', 'Banca') +
        sel('q-dif', [['', 'Qualquer dificuldade'], ['1', 'Fácil'], ['2', 'Média'], ['3', 'Difícil']], QF.dificuldades[0] || '', 'Dificuldade') +
        sel('q-tipo', [['', 'Todos os tipos'], ['multipla', 'Múltipla escolha'], ['certo-errado', 'Certo ou errado']], QF.tipo, 'Tipo') +
        sel('q-status', [['', 'Todas'], ['nao-resolvidas', 'Não resolvidas'], ['erradas', 'Errei'], ['certas', 'Acertei']], QF.status, 'Situação') + '</div></section>' +
        '<section class="card mt"><div class="card-head"><h2>' + UI.plural(res.length, 'resultado', 'resultados') + '</h2></div>' +
        (res.length ? '<div class="list">' + itens + '</div>' + (res.length > QF.limite ? '<div class="row mt" style="justify-content:center"><button class="btn btn-secondary" data-act="q-mais">Carregar mais (' + (res.length - QF.limite) + ')</button></div>' : '')
          : '<div class="empty">' + ico('busca') + '<h3>Nada encontrado</h3><p>Tente remover algum filtro.</p></div>') + '</section>',
      montar: function () {
        var ler = function () {
          QF.busca = document.getElementById('q-busca').value;
          QF.materias = App.valores(document.getElementById('q-mats'), 'data-mat');
          var e = document.getElementById('q-estilo').value; QF.estilos = e ? [e] : [];
          var d = document.getElementById('q-dif').value; QF.dificuldades = d ? [d] : [];
          QF.tipo = document.getElementById('q-tipo').value;
          QF.status = document.getElementById('q-status').value;
          QF.limite = 20;
          var foco = document.activeElement && document.activeElement.id;
          App.render();
          if (foco === 'q-busca') { var b = document.getElementById('q-busca'); b.focus(); b.setSelectionRange(b.value.length, b.value.length); }
        };
        var t;
        document.getElementById('q-busca').addEventListener('input', function () { clearTimeout(t); t = setTimeout(ler, 250); });
        ['q-estilo', 'q-dif', 'q-tipo', 'q-status'].forEach(function (id) { document.getElementById(id).addEventListener('change', ler); });
        document.getElementById('q-mats').addEventListener('alternou', ler);
      }
    };
  }, 'questoes');
  App.acao('q-mais', function () { QF.limite += 20; App.render(); });
  App.acao('q-simulado', function () {
    App.criarSimulado({ ids: Motor.embaralhar(listaAtual, Motor.rng(Date.now())).slice(0, 30), modo: 'estudo' }, 'Treino do banco de questões');
  });

  App.rota('/questao/([^/]+)', function (m) {
    var q = Banco.questao(m[0]);
    if (!q) { App.ir('#/questoes', true); return null; }
    if (!QV || QV.id !== q.id) QV = { id: q.id, resposta: undefined, confirmada: false, expandida: false, riscadas: {} };
    QV.escolher = function (el) {
      if (QV.confirmada) return;
      QV.resposta = el.hasAttribute('data-v') ? el.getAttribute('data-v') === 'true' : Number(el.getAttribute('data-i'));
      App.render();
    };
    var lista = listaAtual.length ? listaAtual : Banco.questoes.map(function (x) { return x.id; });
    var pos = lista.indexOf(q.id);
    var hist = S().respostas[q.id] || [];
    return {
      titulo: 'Questão', manterScroll: true,
      html: '<div class="page-head"><a class="btn btn-ghost" href="#/questoes">' + ico('voltar') + ' Banco de questões</a>' +
        (hist.length ? '<span class="muted small">Você já respondeu ' + UI.plural(hist.length, 'vez', 'vezes') + ': ' + hist.slice(-5).map(function (h) { return h.certo ? '✓' : '✗'; }).join(' ') + '</span>' : '') + '</div>' +
        '<div style="max-width:860px">' + questao(q, { resposta: QV.resposta, confirmada: QV.confirmada, riscadas: QV.riscadas[q.id], profunda: profunda(), expandida: QV.expandida, travada: QV.confirmada }) +
        '<div class="run-nav">' + (pos > 0 ? '<a class="btn btn-ghost" href="#/questao/' + encodeURIComponent(lista[pos - 1]) + '">' + ico('esq') + ' Anterior</a>' : '<span></span>') +
        (QV.confirmada ? '' : '<button class="btn btn-primary" data-act="qv-responder">Responder</button>') +
        (pos >= 0 && pos < lista.length - 1 ? '<a class="btn ' + (QV.confirmada ? 'btn-primary' : 'btn-ghost') + '" href="#/questao/' + encodeURIComponent(lista[pos + 1]) + '">Próxima ' + ico('dir') + '</a>' : '<span></span>') + '</div></div>',
      montar: function () {
        var tecla = function (e) {
          if (e.ctrlKey || e.metaKey || e.altKey || /INPUT|TEXTAREA|SELECT/.test(e.target.tagName) || QV.confirmada) return;
          var k = e.key.toLowerCase(), v;
          if (q.tipo === 'certo-errado' && (k === 'c' || k === 'e')) v = k === 'c';
          else if (q.tipo === 'multipla') { var i = 'abcde'.indexOf(k); if (i >= 0 && i < q.alternativas.length) v = i; }
          if (v !== undefined) { QV.resposta = v; App.render(); }
          else if (k === 'enter' && QV.resposta !== undefined && !e.target.closest('button,a')) App.acoes['qv-responder']();
        };
        document.addEventListener('keydown', tecla);
        return function () { document.removeEventListener('keydown', tecla); };
      }
    };
  }, 'questoes');
  App.acao('qv-responder', function () {
    var q = Banco.questao(QV.id);
    if (QV.resposta === undefined) { UI.toast('Escolha uma alternativa antes de responder.'); return; }
    QV.confirmada = true;
    Store.registrarResposta(q, QV.resposta, 'avulsa');
    App.render();
  });

  // ---------- Revisão ----------
  App.rota('/revisao', function () {
    var st = S(), hoje = Motor.hoje();
    var cartoes = Object.keys(st.revisao).filter(function (id) { return Banco.questao(id); });
    var pend = Motor.pendentes(st.revisao, hoje).filter(function (id) { return Banco.questao(id); });
    var prox = [];
    for (var i = 1; i <= 7; i++) {
      var d = Motor.somarDias(hoje, i);
      prox.push({ d: d, n: cartoes.filter(function (id) { return st.revisao[id].proxima === d; }).length });
    }
    var maxN = Math.max.apply(null, prox.map(function (p) { return p.n; }).concat([1]));
    var caixas = Motor.INTERVALOS.map(function (dias, c) { return { dias: dias, n: cartoes.filter(function (id) { return st.revisao[id].caixa === c; }).length }; });
    var erradas = Motor.filtrar(Banco.questoes, { status: 'erradas' }, st.respostas);
    var porMat = {};
    erradas.forEach(function (q) { (porMat[q.materia] = porMat[q.materia] || []).push(q); });
    return {
      titulo: 'Revisão',
      html: '<div class="page-head"><div><span class="eyebrow">Memória de longo prazo</span><h1>Revisão espaçada</h1><p>Cada questão que você erra volta no dia seguinte. Acertou, ela some por 3 dias, depois 7, 15, 30 e 60. Assim você revisa no momento em que estava para esquecer.</p></div></div>' +
        '<div class="grid g-main"><section class="card"><div class="row-between"><div class="stat"><b class="mono">' + pend.length + '</b><span>' + (pend.length === 1 ? 'questão para hoje' : 'questões para hoje') + '</span></div>' +
        (pend.length ? '<button class="btn btn-primary btn-lg" data-act="rev-iniciar">' + ico('play') + ' Revisar agora</button>' : '<span class="tag tag-ok">' + ico('check') + ' Tudo em dia</span>') + '</div>' +
        '<h3 class="mt-lg" style="margin-bottom:12px">Próximos 7 dias</h3><div class="week">' + prox.map(function (p) {
          var pp = p.d.split('-').map(Number);
          return '<div><i style="height:' + (14 + p.n / maxN * 40) + 'px;background:' + (p.n ? 'color-mix(in srgb, var(--pen) ' + (30 + p.n / maxN * 70) + '%, var(--surface-3))' : '') + '" title="' + p.n + '"></i>' + ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'][new Date(pp[0], pp[1] - 1, pp[2]).getDay()] + '<br><span class="mono">' + p.n + '</span></div>';
        }).join('') + '</div></section>' +
        '<section class="card"><h3 style="margin-bottom:12px">Caixas de memória</h3>' + caixas.map(function (c, i) {
          return '<div class="mat-row" style="grid-template-columns:90px 1fr 40px"><span class="small muted">' + (i === 0 ? 'Amanhã' : 'A cada ' + c.dias + 'd') + '</span><div class="bar"><i style="width:' + (cartoes.length ? c.n / cartoes.length * 100 : 0) + '%"></i></div><b class="mono" style="text-align:right">' + c.n + '</b></div>';
        }).join('') + '</section></div>' +
        (function () {
          var cont = {}, total = 0;
          // Só conta questões que o aluno ainda erra: acertou depois, o motivo deixa de pesar.
          Object.keys(st.motivos || {}).forEach(function (id) { var u = Motor.ultima(st.respostas, id); if (Banco.questao(id) && u && !u.certo) { cont[st.motivos[id]] = (cont[st.motivos[id]] || 0) + 1; total++; } });
          if (!total) return '';
          return '<section class="card mt"><h2 style="margin-bottom:6px">Por que você erra</h2><p class="small">Pelos motivos que você marcou depois de errar. O maior é onde vale mudar a forma de estudar.</p>' +
            Store.MOTIVOS.filter(function (m) { return cont[m]; }).sort(function (a, b) { return cont[b] - cont[a]; }).map(function (m) {
              return '<div class="mat-row" style="grid-template-columns:170px 1fr 40px"><span class="small">' + esc(m) + '</span><div class="bar warn"><i style="width:' + (cont[m] / total * 100) + '%"></i></div><b class="mono" style="text-align:right">' + cont[m] + '</b></div>';
            }).join('') + '</section>';
        })() +
        '<section class="card mt"><div class="card-head"><div><h2>Caderno de erros</h2><p class="small">Questões cuja última resposta foi errada.</p></div>' +
        (erradas.length ? '<button class="btn btn-secondary" data-act="p-erradas">' + ico('revisao') + ' Refazer (' + Math.min(30, erradas.length) + ')</button>' : '') + '</div>' +
        (erradas.length ? Object.keys(porMat).map(function (mid) {
          var mm = Banco.materia(mid);
          return '<h3 class="mt" style="margin-bottom:4px">' + esc(mm.nome) + ' <span class="muted small">' + porMat[mid].length + '</span></h3><div class="list">' + porMat[mid].map(function (q) {
            return '<a class="list-item" href="#/questao/' + encodeURIComponent(q.id) + '"><span class="mark err">' + ico('x') + '</span><div class="grow"><div class="clamp2">' + esc(q.enunciado) + '</div><div class="sub">' + esc(q.assunto) + '</div></div>' + ico('dir') + '</a>';
          }).join('') + '</div>';
        }).join('') : '<div class="empty">' + ico('check') + '<h3>Caderno vazio</h3><p>As questões que você errar aparecem aqui, agrupadas por matéria.</p></div>') + '</section>'
    };
  }, 'revisao');
  App.acao('rev-iniciar', function () {
    var pend = Motor.pendentes(S().revisao, Motor.hoje()).filter(function (id) { return Banco.questao(id); });
    if (!pend.length) { UI.toast('Nada para revisar hoje.'); return; }
    App.criarSimulado({ ids: Motor.embaralhar(pend, Motor.rng(Date.now())), modo: 'estudo', origem: 'revisao' }, 'Revisão do dia');
  });

  App.questaoHtml = questao;
})();
