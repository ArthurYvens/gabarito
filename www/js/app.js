/* App: roteador, layout, ações e as telas gerais (onboarding, início, plano, biblioteca, ajustes). */
(function (root) {
  'use strict';
  var esc = UI.esc, ico = UI.ico;
  var S = function () { return Store.estado; };

  var App = {
    rotas: [],      // [{ re, view, nav }]
    acoes: {},      // data-act -> função(el, evento)
    saida: null,    // limpeza da tela atual (timers, teclado)
    rota: function (padrao, view, nav) { App.rotas.push({ re: new RegExp('^' + padrao + '$'), view: view, nav: nav }); },
    acao: function (nome, fn) { App.acoes[nome] = fn; },
    // trocar=true substitui a entrada do histórico (redirecionamentos), para o Voltar do navegador não ficar preso.
    ir: function (hash, trocar) { if (location.hash === hash) App.render(); else if (trocar) location.replace(hash); else location.hash = hash; },
    perfil: function () { return S().perfil; },
    objetivo: function () { return Banco.objetivo((S().perfil || {}).objetivo) || Banco.objetivo('livre'); }
  };

  var NAV = [
    { href: '#/', id: 'inicio', nome: 'Início', ico: 'home' },
    { href: '#/simulados', id: 'simulados', nome: 'Simulados', ico: 'simulado' },
    { href: '#/questoes', id: 'questoes', nome: 'Banco de questões', ico: 'questoes' },
    { href: '#/revisao', id: 'revisao', nome: 'Revisão', ico: 'revisao' },
    { href: '#/cartoes', id: 'cartoes', nome: 'Cartões', ico: 'cartao' },
    { href: '#/desempenho', id: 'desempenho', nome: 'Desempenho', ico: 'grafico' },
    { href: '#/minhas-questoes', id: 'minhas', nome: 'Minhas questões', ico: 'upload' },
    { href: '#/aulas', id: 'aulas', nome: 'Aulas', ico: 'aulas' },
    { href: '#/redacao', id: 'redacao', nome: 'Redação', ico: 'redacao' },
    { href: '#/plano', id: 'plano', nome: 'Plano de estudos', ico: 'plano' },
    { href: '#/biblioteca', id: 'biblioteca', nome: 'Onde estudar', ico: 'biblioteca' }
  ];

  function pendentesHoje() { return Motor.pendentes(S().revisao, Motor.hoje()).filter(function (id) { return Banco.questao(id); }).length; }

  // A animação de entrada só toca quando a tela muda (outra página ou outro passo), nunca ao redesenhar a mesma tela.
  var telaAnterior = null;
  function entrada(tela) { var nova = tela !== telaAnterior; telaAnterior = tela; return nova ? ' fade-in' : ''; }
  function layout(navAtivo, conteudo, classeEntrada) {
    var p = App.perfil(), n = pendentesHoje();
    var link = function (it) {
      return '<a href="' + it.href + '"' + (navAtivo === it.id ? ' aria-current="page"' : '') + '>' + ico(it.ico) + '<span>' + it.nome + '</span>' +
        (it.id === 'revisao' && n ? '<span class="badge" aria-label="' + n + ' pendentes">' + n + '</span>' : '') + '</a>';
    };
    var hoje = S().atividade[Motor.hoje()] || 0;
    return '<div class="app">' +
      '<aside class="side" id="side" aria-label="Navegação principal">' +
        '<a class="brand" href="#/">' + UI.marca + '<span class="brand-name">Helma</span></a>' +
        '<nav class="nav">' + NAV.map(link).join('') + '<div class="nav-sep"></div>' + link({ href: '#/ajustes', id: 'ajustes', nome: 'Ajustes', ico: 'ajustes' }) + '</nav>' +
        '<div class="side-foot"><strong>' + esc(App.objetivo().nome) + '</strong><br>Hoje: <span class="mono">' + hoje + '/' + (p ? p.metaDiaria : 20) + '</span> questões</div>' +
      '</aside>' +
      '<header class="mobile-bar"><a class="brand" href="#/" style="padding:0">' + UI.marca + '<span class="brand-name">Helma</span></a>' +
        '<button class="icon-btn" data-act="menu" aria-label="Abrir menu" aria-controls="side" aria-expanded="false">' + ico('menu') + '</button></header>' +
      '<main class="main' + (classeEntrada || '') + '" id="main" tabindex="-1">' + conteudo + '</main>' +
      '<nav class="tabbar" aria-label="Atalhos">' +
        [NAV[0], NAV[1], NAV[3], NAV[4]].map(function (it) {
          return '<a href="' + it.href + '"' + (navAtivo === it.id ? ' aria-current="page"' : '') + '>' + ico(it.ico) + it.nome.split(' ')[0] + '</a>';
        }).join('') + '<button data-act="menu" aria-label="Mais seções">' + ico('mais') + 'Mais</button></nav>' +
    '</div>';
  }

  App.render = function () {
    try { desenhar(); } catch (e) {
      // Uma tela com defeito não pode deixar o app em branco: mostra o erro e uma saída.
      document.getElementById('app').innerHTML = '<div class="onb"><div class="card onb-card"><h1>Algo deu errado nesta tela</h1><p class="muted mt">' + esc(e && e.message) + '</p><div class="row mt-lg"><a class="btn btn-primary" href="#/">Voltar ao início</a><a class="btn btn-ghost" href="#/ajustes">Ajustes</a></div></div></div>';
      if (window.console) console.error(e);
    }
  };
  // Só em tela nova (que entrou com .fade-in) e só se nada dentro dela já recebeu o foco (ex.: o campo de nome).
  function focarTela(raiz) {
    var ativo = document.activeElement;
    if (ativo && ativo !== document.body && raiz.contains(ativo)) return;
    var h = raiz.querySelector('.fade-in h1');
    if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
  }
  function desenhar() {
    if (App.saida) { App.saida(); App.saida = null; }
    var hash = location.hash.replace(/^#/, '') || '/';
    var raiz = document.getElementById('app');
    if (!App.perfil()) { raiz.innerHTML = onboarding(); montarOnboarding(); focarTela(raiz); return; }
    var caminho = hash.split('?')[0], params = new URLSearchParams(hash.split('?')[1] || '');
    for (var i = 0; i < App.rotas.length; i++) {
      var m = App.rotas[i].re.exec(caminho);
      if (m) {
        var r = App.rotas[i].view(m.slice(1).map(function (x) { try { return decodeURIComponent(x); } catch (e) { return x; } }), params);
        if (r === null) return; // a view redirecionou
        if (r.cheia) raiz.innerHTML = r.html;
        else raiz.innerHTML = layout(App.rotas[i].nav, r.html, entrada(caminho));
        if (r.titulo) document.title = r.titulo + ' · Helma';
        if (r.montar) App.saida = r.montar() || null;
        var main = document.getElementById('main');
        if (main && !r.manterScroll) { window.scrollTo(0, 0); }
        focarTela(raiz);
        return;
      }
    }
    raiz.innerHTML = layout('', '<div class="empty">' + ico('alerta') + '<h3>Página não encontrada</h3><p><a href="#/">Voltar ao início</a></p></div>', entrada(caminho));
  }

  // ---------- Ações delegadas ----------
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-act]');
    if (!el) return;
    var fn = App.acoes[el.getAttribute('data-act')];
    if (fn) { e.preventDefault(); fn(el, e); }
  });
  var abriuMenu = null;
  function fundoInerte(sim) {
    document.querySelectorAll('.app > :not(#side)').forEach(function (el) { if (sim) el.setAttribute('inert', ''); else el.removeAttribute('inert'); });
  }
  App.acao('menu', function (el) {
    var side = document.getElementById('side');
    var aberto = side.classList.toggle('open');
    document.querySelectorAll('[data-act="menu"]').forEach(function (b) { b.setAttribute('aria-expanded', aberto); });
    var scrim = document.querySelector('.scrim');
    fundoInerte(aberto);
    if (aberto && !scrim) {
      abriuMenu = el && el.closest && el.closest('button') ? el.closest('button') : null;
      scrim = document.createElement('div'); scrim.className = 'scrim'; scrim.setAttribute('data-act', 'menu');
      document.body.appendChild(scrim);
      side.querySelector('a').focus();
    } else if (!aberto) {
      if (scrim) scrim.remove();
      if (abriuMenu && abriuMenu.isConnected) abriuMenu.focus();
      abriuMenu = null;
    }
  });
  document.addEventListener('keydown', function (e) {
    var side = document.getElementById('side');
    if (e.key === 'Escape' && side && side.classList.contains('open')) { e.preventDefault(); App.acoes.menu(); }
  });
  window.addEventListener('hashchange', function () {
    var s = document.querySelector('.scrim'); if (s) s.remove();
    fundoInerte(false); abriuMenu = null;
    App.render();
    var aba = document.querySelector('nav.seg [aria-current="page"]');
    if (aba && aba.scrollIntoView) aba.scrollIntoView({ block: 'nearest', inline: 'center' });
  });
  // Botões de alternância (chips e segmentos) com data-toggle: sem lógica própria, só aria-pressed.
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-toggle]');
    if (!b) return;
    var grupo = b.getAttribute('data-toggle');
    if (grupo === 'multi') b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') !== 'true');
    else b.parentElement.querySelectorAll('[data-toggle="one"]').forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
    b.dispatchEvent(new CustomEvent('alternou', { bubbles: true }));
  });
  App.valores = function (container, attr) {
    return Array.prototype.map.call(container.querySelectorAll('[aria-pressed="true"][' + attr + ']'), function (b) { return b.getAttribute(attr); });
  };

  // ---------- Tema ----------
  App.aplicarTema = function () {
    var t = (App.perfil() || {}).tema || 'auto';
    if (t === 'auto') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', t);
  };

  // ---------- Onboarding ----------
  var onb = { passo: 0, nome: '', objetivo: null, materias: [], meta: 20, profunda: true };
  function onboarding() {
    var passos = '<div class="onb-steps" aria-hidden="true">' + [0, 1, 2].map(function (i) { return '<i class="' + (i <= onb.passo ? 'on' : '') + '"></i>'; }).join('') + '</div>';
    var corpo;
    if (onb.passo === 0) {
      corpo = '<div class="onb-marca"><img class="logo-claro" src="marca/helma-retrato.svg" alt=""><img class="logo-escuro" src="marca/helma-retrato-claro.svg" alt=""><div><span class="onb-nome">Helma</span><span class="onb-tag">Plataforma de simulados</span></div></div>' +
        '<h1>Seu estudo, montado para a sua prova.</h1>' +
        '<p class="muted mt" style="font-size:16.5px;max-width:56ch">Simulados que se ajustam ao seu objetivo, explicações que ensinam de verdade, aulas, redação corrigida por critérios e revisão no momento certo.</p>' +
        '<label class="field mt-lg"><span>Como podemos te chamar? <span class="muted">(opcional)</span></span><input class="input" id="onb-nome" maxlength="40" autocomplete="given-name" placeholder="Seu nome ou apelido" value="' + esc(onb.nome) + '"></label>' +
        '<div class="row mt-lg"><button class="btn btn-primary btn-lg" data-act="onb-prox">Começar ' + ico('dir') + '</button></div>';
    } else if (onb.passo === 1) {
      corpo = '<h1><span class="sr-only">Passo 2 de 3: </span>Qual é o seu objetivo?</h1><p class="muted mt">Isso define o peso de cada matéria nos simulados e o tipo de redação. Dá para mudar depois.</p>' +
        '<div class="opt-grid mt" role="group" aria-label="Objetivos">' + Banco.objetivos.map(function (o) {
          return '<button class="opt" data-act="onb-obj" data-id="' + o.id + '" aria-pressed="' + (onb.objetivo === o.id) + '"><b>' + esc(o.nome) + '</b><span>' + esc(o.descricao) + '</span></button>';
        }).join('') + '</div>' +
        '<div class="row-between mt-lg"><button class="btn btn-ghost" data-act="onb-ant">' + ico('esq') + ' Voltar</button><div class="row">' + (onb.objetivo ? '' : '<span class="small muted">Escolha um objetivo para continuar</span>') + '<button class="btn btn-primary btn-lg" data-act="onb-prox"' + (onb.objetivo ? '' : ' disabled') + '>Continuar ' + ico('dir') + '</button></div></div>';
    } else {
      corpo = '<h1><span class="sr-only">Passo 3 de 3: </span>Ajuste o seu foco</h1><p class="muted mt">Marcamos as matérias que caem na sua prova. Tire ou inclua o que quiser.</p>' +
        '<div class="chips mt" id="onb-mats" role="group" aria-label="Matérias">' + Banco.materias.map(function (m) {
          return '<button class="chip" data-toggle="multi" data-mat="' + m.id + '" aria-pressed="' + (onb.materias.indexOf(m.id) >= 0) + '">' + ico('check', 'ck') + esc(m.nome) + '</button>';
        }).join('') + '</div>' +
        '<div class="field mt-lg"><span class="label">Quantas questões por dia?</span><div class="seg" id="onb-meta" role="group" aria-label="Meta de questões por dia">' + [10, 20, 40, 60].map(function (n) {
          return '<button data-toggle="one" data-v="' + n + '" aria-pressed="' + (onb.meta === n) + '">' + n + ' por dia</button>';
        }).join('') + '</div></div>' +
        '<label class="switch mt"><span><b>Explicação profunda</b><span>Depois de responder, mostra a resolução completa, o comentário de cada alternativa e onde estudar mais.</span></span><input type="checkbox" id="onb-prof"' + (onb.profunda ? ' checked' : '') + '></label>' +
        '<div class="row-between mt-lg"><button class="btn btn-ghost" data-act="onb-ant">' + ico('esq') + ' Voltar</button><button class="btn btn-primary btn-lg" data-act="onb-fim">Montar meu painel ' + ico('dir') + '</button></div>';
    }
    return '<main class="onb"><div class="onb-arte">' + UI.helma(onb.passo ? 'tres-quartos-dir' : 'frente', 'onb-helma') +
      '<p class="onb-arte-txt">' + ['Eu sou a Helma. Vou montar seus simulados e acompanhar sua evolução.', 'Com o seu objetivo, sei o peso de cada matéria na sua prova.', 'Pronto: agora é só escolher o que entra no seu foco.'][onb.passo] + '</p></div>' +
      '<div class="card onb-card' + entrada('onboarding-' + onb.passo) + '"><a class="brand" style="padding:0 0 24px">' + UI.marca + '<span class="brand-name">Helma</span></a>' + passos + corpo + '</div></main>';
  }
  function montarOnboarding() {
    document.title = 'Boas-vindas · Helma';
    var n = document.getElementById('onb-nome');
    if (n) { n.focus(); n.addEventListener('keydown', function (e) { if (e.key === 'Enter') App.acoes['onb-prox'](); }); }
  }
  function lerOnb() {
    var n = document.getElementById('onb-nome'); if (n) onb.nome = n.value.trim();
    var mats = document.getElementById('onb-mats'); if (mats) onb.materias = App.valores(mats, 'data-mat');
    var meta = document.getElementById('onb-meta'); if (meta) onb.meta = Number(App.valores(meta, 'data-v')[0] || 20);
    var prof = document.getElementById('onb-prof'); if (prof) onb.profunda = prof.checked;
  }
  // Cada passo vira uma entrada do histórico: o Voltar do navegador (e do celular) recua um passo em vez de sair do app.
  App.acao('onb-prox', function () { lerOnb(); onb.passo++; try { history.pushState({ onbPasso: onb.passo }, ''); } catch (e) { /* file:// sem histórico */ } App.render(); });
  App.acao('onb-ant', function () { lerOnb(); if (history.state && history.state.onbPasso) history.back(); else { onb.passo = Math.max(0, onb.passo - 1); App.render(); } });
  window.addEventListener('popstate', function (e) {
    if (App.perfil()) return;
    lerOnb(); onb.passo = (e.state && e.state.onbPasso) || 0; App.render();
  });
  App.acao('onb-obj', function (el) {
    onb.objetivo = el.getAttribute('data-id');
    var o = Banco.objetivo(onb.objetivo);
    onb.materias = Object.keys(o.pesos).length ? Object.keys(o.pesos) : Banco.materias.map(function (m) { return m.id; });
    App.render();
    // O foco continua no objetivo escolhido (quem navega pelo teclado não volta ao início da página).
    var b = document.querySelector('[data-act="onb-obj"][data-id="' + onb.objetivo + '"]'); if (b) b.focus();
  });
  App.acao('onb-fim', function () {
    lerOnb();
    if (!onb.materias.length) { UI.toast('Escolha ao menos uma matéria.'); return; }
    S().perfil = { nome: onb.nome, objetivo: onb.objetivo, materias: onb.materias, metaDiaria: onb.meta, explicacaoProfunda: onb.profunda, tema: 'auto', penalidadeCE: true, dataProva: '' };
    Store.salvar();
    location.hash = '#/';
    App.render();
  });

  // ---------- Início ----------
  function saudacao() {
    var h = new Date().getHours();
    return h < 12 ? 'Bom dia' : h < 18 ? 'Boa tarde' : 'Boa noite';
  }
  function diasAte(iso) {
    if (!iso) return null;
    var p = iso.split('-').map(Number), alvo = new Date(p[0], p[1] - 1, p[2]), h = new Date(); h.setHours(0, 0, 0, 0);
    return Math.round((alvo - h) / Motor.DIA);
  }
  App.diasAte = diasAte;

  App.rota('/', function () {
    var st = S(), p = st.perfil, obj = App.objetivo();
    var hoje = Motor.hoje(), feitas = st.atividade[hoje] || 0;
    var pct = Math.min(100, Math.round(feitas / p.metaDiaria * 100));
    var seq = Motor.sequencia(st.atividade, hoje);
    var andamento = st.simulados.filter(function (s) { return s.status === 'andamento'; }).slice(-1)[0];
    var pend = pendentesHoje();
    var d = Motor.desempenho(Banco, st.respostas);
    var fracos = Motor.pontosFracos(Banco, st.respostas, 4);
    var falta = diasAte(p.dataProva);

    var novato = !Object.keys(st.respostas).length;
    var cta = andamento
      ? '<a class="btn btn-primary btn-lg" href="#/simulado/' + andamento.id + '">' + ico('play') + ' Continuar simulado (' + Object.keys(andamento.respostas).length + '/' + andamento.questoes.length + ')</a>'
      : novato ? '<button class="btn btn-primary btn-lg" data-act="diagnostico-iniciar">' + ico('alvo') + ' Fazer o diagnóstico inicial</button>'
      : '<button class="btn btn-primary btn-lg" data-act="sim-rapido">' + ico('play') + ' Simulado recomendado</button>';
    var sheet = UI.helma('tres-quartos-esq', 'hero-helma');
    var hero = '<section class="hero"><div class="hero-texto">' +
      '<h1>' + saudacao() + (p.nome ? ', ' + esc(p.nome.trim().split(/\s+/)[0]) : '') + '.</h1>' +
      '<p class="hero-meta">' + esc(obj.nome) + (falta !== null && falta >= 0 ? ' · faltam ' + UI.plural(falta, 'dia', 'dias') : '') + '</p>' +
      '<p>' + (andamento ? 'Você parou no meio de <b>' + esc(andamento.titulo) + '</b>: ' + UI.plural(andamento.questoes.length - Object.keys(andamento.respostas).length, 'questão falta', 'questões faltam') + '. Continue de onde parou.' : pend ? 'Você tem <b>' + UI.plural(pend, 'questão', 'questões') + '</b> para revisar hoje, no ponto em que a memória começa a falhar.' : feitas >= p.metaDiaria ? 'Meta de hoje cumprida. Que tal uma aula ou uma redação?' : novato ? 'Comece pelo diagnóstico: ' + Motor.diagnostico(Banco, p.materias, 1, p.objetivo).length + ' questões das suas matérias, sem pressa, para o app saber de onde você parte em cada assunto.' : 'Seu simulado recomendado mistura as matérias da sua prova e prioriza o que você ainda não viu ou errou.') + '</p>' +
      '<div class="row">' + cta + (pend ? '<button class="btn btn-ghost" data-act="rev-iniciar">' + ico('revisao') + ' Revisar ' + pend + '</button>' : '<a class="btn btn-ghost" href="#/simulados">Montar simulado</a>') + '</div></div>' + sheet + '</section>';

    // Semana de atividade
    var semana = '';
    for (var i = 6; i >= 0; i--) {
      var dia = Motor.somarDias(hoje, -i), n = st.atividade[dia] || 0;
      var nivel = n === 0 ? '' : n < p.metaDiaria / 2 ? 'l1' : n < p.metaDiaria ? 'l2' : 'l3';
      var p2 = dia.split('-').map(Number);
      semana += '<div><i class="' + nivel + (i === 0 ? ' today' : '') + '" title="' + n + ' questões"></i>' + ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'][new Date(p2[0], p2[1] - 1, p2[2]).getDay()] + '</div>';
    }
    var meta = '<section class="card"><div class="goal"><div class="ring" style="--p:' + pct + '"><div><b class="mono">' + feitas + '</b><span>de ' + p.metaDiaria + ' hoje</span></div></div>' +
      '<div class="stack" style="flex:1;gap:10px"><div class="row" style="gap:8px">' + ico('chama') + '<b>' + UI.plural(seq, 'dia seguido', 'dias seguidos') + '</b></div>' +
      '<div class="week" aria-label="Atividade dos últimos 7 dias">' + semana + '</div></div></div>' +
      (function () {
        var sem = Motor.semana(st.atividade, hoje), alvo = p.metaSemanal || p.metaDiaria * 5, pc = Math.min(100, Math.round(sem.total / alvo * 100));
        return '<div class="meta-semana"><div class="nm"><span>Meta da semana</span><b class="mono">' + sem.total + ' de ' + alvo + '</b></div><div class="bar"><i style="width:' + pc + '%"></i></div></div>';
      })() + '</section>';

    var mats = (p.materias || []).map(Banco.materia).filter(Boolean);
    var linhasMat = mats.map(function (m) {
      var x = d.porMateria[m.id], taxa = x ? Math.round(x.acertos / x.total * 100) : null;
      var cls = taxa === null ? '' : taxa >= 70 ? 'ok' : taxa >= 50 ? 'warn' : 'err';
      return '<div class="mat-row"><span class="sigla sigla-sm">' + m.sigla + '</span><div><div class="nm"><span>' + esc(m.nome) + '</span><span class="muted small">' + (x ? x.total + ' resp.' : 'sem dados') + '</span></div><div class="bar ' + cls + '"><i style="width:' + (taxa || 0) + '%"></i></div></div><b class="mono" style="text-align:right">' + (taxa === null ? '—' : taxa + '%') + '</b></div>';
    }).join('');
    var desempenhoCard = '<section class="card"><div class="card-head"><h2>Desempenho por matéria</h2><span class="muted small">' + d.resolvidas + ' resolvidas · ' + (d.resolvidas ? Math.round(d.certas / d.resolvidas * 100) : 0) + '% de acerto</span></div>' +
      (linhasMat || '<p class="muted">Escolha matérias em Ajustes.</p>') + '</section>';

    var fracosCard = '<section class="card"><div class="card-head"><h2>Pontos fracos</h2></div>' + (fracos.length ? '<div class="list">' + fracos.map(function (a) {
      var m = Banco.materia(a.materia);
      return '<div class="list-item"><span class="sigla sigla-sm">' + m.sigla + '</span><div class="grow"><div class="title">' + esc(a.assunto) + '</div><div class="sub">' + a.acertos + ' de ' + a.total + ' certas</div></div>' +
        '<button class="btn btn-secondary btn-sm" data-act="treinar" data-mat="' + esc(a.materia) + '" data-assunto="' + esc(a.assunto) + '">Treinar</button></div>';
    }).join('') + '</div>' : '<p class="muted">Responda algumas questões e mostramos aqui os assuntos em que você mais erra, com um botão para treinar só eles.</p>') + '</section>';

    // Plano de hoje e aula sugerida
    var planoHoje = '';
    if (st.plano) {
      var blocos = st.plano.semana[new Date().getDay()] || [];
      planoHoje = '<section class="card"><div class="card-head"><h2>Plano de hoje</h2><a href="#/plano" class="small">Ver semana</a></div>' + (blocos.length ? blocos.map(function (id) {
        var m = Banco.materia(id);
        return m ? '<div class="list-item"><span class="sigla sigla-sm">' + m.sigla + '</span><div class="grow"><div class="title">' + esc(m.nome) + '</div><div class="sub">50 min · aula + 10 questões</div></div><button class="btn btn-ghost btn-sm" data-act="treinar" data-mat="' + m.id + '">Praticar</button></div>' : '';
      }).join('') : '<p class="muted">Hoje é dia de descanso no seu plano.</p>') + '</section>';
    }
    var aula = Banco.aulas.filter(function (a) { return !st.aulas[a.id] && (p.materias || []).indexOf(a.materia) >= 0; })
      .sort(function (a, b) {
        var fa = fracos.some(function (f) { return f.materia === a.materia; }) ? 0 : 1, fb = fracos.some(function (f) { return f.materia === b.materia; }) ? 0 : 1;
        return fa - fb;
      })[0];
    var aulaCard = aula ? '<section class="card"><h3>' + esc(aula.titulo) + '</h3><p class="muted small mt" style="margin-top:6px">Aula sugerida · ' + esc(Banco.materia(aula.materia).nome) + ' · ' + aula.duracaoMin + ' min</p><p class="small">' + esc(aula.resumo) + '</p><a class="btn btn-secondary btn-sm" href="#/aula/' + aula.id + '">Abrir aula</a></section>' : '';

    var sug = Motor.sugestao(Banco, st, hoje);
    var sugCard = novato || andamento || sug.tipo === 'simulado' ? '' : '<section class="card sugestao"><h2>Próximo treino: ' + esc(sug.titulo) + '</h2><p class="small" style="margin-top:6px">' + esc(sug.porque) + '</p><button class="btn btn-primary btn-sm" data-act="sugestao-iniciar">' + ico('play') + ' Começar</button></section>';
    return {
      titulo: 'Início',
      html: hero + '<div class="grid g-main mt"><div class="stack">' + sugCard + desempenhoCard + fracosCard + '</div><div class="stack">' + meta + planoHoje + aulaCard +
        '<section class="card card-flat"><h3>Treine a escrita desta semana</h3><p class="small muted" style="margin-top:6px">Editor com folha pautada, contagem de linhas e checagem da proposta de intervenção.</p><a class="btn btn-secondary btn-sm" href="#/redacao/escrever">Escrever redação</a></section></div></div>'
    };
  }, 'inicio');

  App.acao('diagnostico-iniciar', function () {
    var p = S().perfil, ids = Motor.diagnostico(Banco, p.materias, Date.now(), p.objetivo);
    if (!ids.length) { UI.toast('Escolha matérias com questões em Ajustes.'); return; }
    App.criarSimulado({ ids: ids, modo: 'prova', origem: 'diagnostico' }, 'Diagnóstico inicial');
  });
  App.acao('sugestao-iniciar', function () {
    var s = Motor.sugestao(Banco, S(), Motor.hoje());
    if (s.tipo === 'diagnostico') return App.acoes['diagnostico-iniciar']();
    if (s.tipo === 'revisao') return App.acoes['rev-iniciar']();
    App.criarSimulado(s.cfg, s.titulo);
  });
  App.acao('treinar', function (el) {
    var cfg = { materias: [el.getAttribute('data-mat')], quantidade: 10, modo: 'estudo' };
    if (el.getAttribute('data-assunto')) cfg.assuntos = [el.getAttribute('data-assunto')];
    App.criarSimulado(cfg, 'Treino: ' + (el.getAttribute('data-assunto') || Banco.materia(cfg.materias[0]).nome));
  });

  // ---------- Plano de estudos ----------
  var DIAS = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  App.rota('/plano', function () {
    var st = S(), p = st.perfil, pl = st.plano;
    var cfg = pl ? pl.cfg : { dias: [1, 2, 3, 4, 5], horasPorDia: 2 };
    var falta = diasAte(p.dataProva);
    var form = '<section class="card"><h2>Disponibilidade</h2><p>Diga quando você pode estudar. O plano reparte as matérias pelo peso que têm na sua prova e dá mais tempo às que você erra mais.</p>' +
      '<div class="field mt"><span class="label">Dias da semana</span><div class="chips" id="pl-dias">' + DIAS.map(function (d, i) {
        return '<button class="chip" data-toggle="multi" data-d="' + i + '" aria-pressed="' + (cfg.dias.indexOf(i) >= 0) + '">' + ico('check', 'ck') + d.slice(0, 3) + '</button>';
      }).join('') + '</div></div>' +
      '<div class="field mt"><span class="label">Horas por dia</span><div class="seg" id="pl-horas">' + [1, 2, 3, 4, 6].map(function (h) {
        return '<button data-toggle="one" data-h="' + h + '" aria-pressed="' + (cfg.horasPorDia === h) + '">' + h + 'h</button>';
      }).join('') + '</div></div>' +
      '<label class="field mt" style="max-width:260px"><span>Data da prova (opcional)</span><input class="input" type="date" id="pl-data" value="' + esc(p.dataProva || '') + '"></label>' +
      '<div class="row mt-lg"><button class="btn btn-primary" data-act="plano-gerar">' + (pl ? 'Refazer plano' : 'Gerar meu plano') + '</button>' + (falta !== null && falta >= 0 ? '<span class="tag tag-pen">' + UI.plural(falta, 'dia', 'dias') + ' até a prova</span>' : '') + '</div></section>';
    var grade = '';
    if (pl) {
      var hojeDia = new Date().getDay();
      var blocosHoje = (pl.semana[hojeDia] || []).length, feitasHoje = S().sessoes[Motor.hoje()] || 0;
      // Sessões do dia: o aluno marca cada bloco cumprido; o plano mostra o andamento real, não só o previsto.
      var sessoesHtml = blocosHoje ? '<section class="card mt sessoes"><div class="row-between"><div><h3>Hoje: ' + Math.min(feitasHoje, blocosHoje) + ' de ' + UI.plural(blocosHoje, 'sessão', 'sessões') + ' cumprida' + (feitasHoje === 1 ? '' : 's') + '</h3></div>' +
        (feitasHoje < blocosHoje ? '<button class="btn btn-primary btn-sm" data-act="sessao-feita">' + ico('check') + ' Concluí uma sessão</button>' : '<span class="tag tag-ok">' + ico('check') + ' Dia cumprido</span>') + '</div><div class="bar mt"><i style="width:' + Math.min(100, Math.round(feitasHoje / blocosHoje * 100)) + '%"></i></div></section>' : '';
      grade = sessoesHtml + '<section class="mt-lg"><div class="row-between" style="margin-bottom:14px"><h2>Sua semana</h2><span class="muted small">Blocos de 50 min + 10 de pausa · ' + UI.plural(Object.values(pl.semana).reduce(function (s, b) { return s + b.length; }, 0), 'bloco', 'blocos') + '</span></div><div class="plan">' +
        [1, 2, 3, 4, 5, 6, 0].map(function (i) {
          var blocos = pl.semana[i];
          return '<div class="plan-day' + (blocos ? '' : ' off') + (i === hojeDia ? ' today' : '') + '"><h4>' + DIAS[i].slice(0, 3) + (i === hojeDia ? ' · hoje' : '') + '</h4>' +
            (blocos ? blocos.map(function (id) { var m = Banco.materia(id); return m ? '<div class="plan-block">' + esc(m.nome) + '</div>' : ''; }).join('') : '<span class="muted small">Descanso</span>') + '</div>';
        }).join('') + '</div>' +
        '<div class="callout callout-pen mt">' + ico('ideia') + '<div><b>Como usar cada bloco:</b> 15 min de aula ou leitura do assunto, 25 min de questões no modo estudo e 10 min lendo as explicações do que errou. A revisão espaçada entra antes do primeiro bloco do dia.</div></div></section>';
    }
    return { titulo: 'Plano de estudos', html: '<div class="page-head"><div><h1>Plano de estudos</h1><p>Um cronograma semanal feito a partir do seu objetivo, do seu tempo e do seu desempenho.</p></div></div>' + form + grade };
  }, 'plano');
  App.acao('sessao-feita', function () {
    var d = Motor.hoje(), pl = S().plano, total = pl ? (pl.semana[new Date().getDay()] || []).length : 0;
    if (total && (S().sessoes[d] || 0) >= total) return;
    S().sessoes[d] = Math.min(12, (S().sessoes[d] || 0) + 1);
    Store.salvar(); App.render();
    UI.toast('Sessão marcada como feita: ' + Math.min(S().sessoes[d], total || S().sessoes[d]) + ' de ' + (total || S().sessoes[d]) + ' hoje.');
  });
  App.acao('plano-gerar', function () {
    var dias = App.valores(document.getElementById('pl-dias'), 'data-d').map(Number);
    var horas = Number(App.valores(document.getElementById('pl-horas'), 'data-h')[0] || 2);
    if (!dias.length) { UI.toast('Escolha ao menos um dia.'); return; }
    var p = S().perfil;
    p.dataProva = document.getElementById('pl-data').value || '';
    if (p.dataProva && App.diasAte(p.dataProva) < 0) UI.toast('A data da prova já passou. Confira o ano.');
    var cfg = { objetivo: p.objetivo, materias: p.materias, dias: dias, horasPorDia: horas };
    var r = Motor.planoSemanal(Banco, cfg, S().respostas);
    S().plano = { cfg: { dias: dias, horasPorDia: horas }, semana: r.semana, criadoEm: Date.now() };
    Store.salvar();
    UI.toast('Plano atualizado.');
    App.render();
  });

  // ---------- Onde estudar ----------
  var PROVAS = [
    { titulo: 'INEP — provas e gabaritos do Enem', url: 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos', desc: 'Todas as edições do Enem, cadernos de prova e gabaritos oficiais.' },
    { titulo: 'CEBRASPE — concursos', url: 'https://www.cebraspe.org.br/concursos', desc: 'Provas, gabaritos e editais de concursos federais (PF, PRF, tribunais, BB...).' },
    { titulo: 'FGV Conhecimento — concursos', url: 'https://conhecimento.fgv.br/concursos', desc: 'Concursos e Exame da OAB organizados pela FGV.' },
    { titulo: 'Exame de Ordem (OAB)', url: 'https://examedeordem.oab.org.br', desc: 'Provas anteriores e gabaritos do Exame Unificado.' },
    { titulo: 'Fundação Carlos Chagas (FCC)', url: 'https://www.concursosfcc.com.br', desc: 'Tribunais, secretarias e órgãos estaduais.' },
    { titulo: 'Fundação Cesgranrio', url: 'https://www.cesgranrio.org.br', desc: 'Petrobras, Banco do Brasil, Caixa e outras estatais.' },
    { titulo: 'Vunesp', url: 'https://www.vunesp.com.br', desc: 'Concursos estaduais e municipais de São Paulo e vestibulares.' }
  ];
  App.rota('/biblioteca', function () {
    var porMat = {};
    var juntar = function (m, lista) {
      var alvo = (porMat[m] = porMat[m] || {});
      (lista || []).forEach(function (f) { if (!alvo[f.url]) alvo[f.url] = f; });
    };
    Banco.questoes.forEach(function (q) { juntar(q.materia, q.fontes); });
    Banco.aulas.forEach(function (a) { juntar(a.materia, a.fontes); });
    var blocos = Banco.materias.filter(function (m) { return porMat[m.id]; }).map(function (m) {
      var lista = Object.keys(porMat[m.id]).map(function (u) { return porMat[m.id][u]; }).slice(0, 8);
      return '<section class="card card-flat"><div class="row" style="margin-bottom:12px"><span class="sigla sigla-sm">' + m.sigla + '</span><h3>' + esc(m.nome) + '</h3></div>' + UI.fontes(lista) + '</section>';
    }).join('');
    return {
      titulo: 'Onde estudar',
      html: '<div class="page-head"><div><h1>Onde estudar mais</h1><p>Fontes oficiais e confiáveis para aprofundar cada matéria, e os sites onde as bancas publicam as provas anteriores.</p></div></div>' +
        '<section class="card"><div class="card-head"><div><h2>Provas anteriores oficiais</h2><p class="small">As bancas publicam provas e gabaritos nos próprios sites. Baixe a prova em PDF e envie em Minhas questões: o app separa as questões para você treinar aqui, com estatística e revisão, para seu estudo pessoal.</p></div><a class="btn btn-secondary btn-sm" href="#/minhas-questoes">' + ico('upload') + ' Trazer uma prova</a></div>' +
        '<div class="list">' + PROVAS.map(function (p) {
          return '<a class="list-item" href="' + esc(p.url) + '" target="_blank" rel="noopener noreferrer"><span class="sigla sigla-sm">' + ico('link') + '</span><div class="grow"><div class="title">' + esc(p.titulo) + '</div><div class="sub">' + esc(p.desc) + '</div></div>' + ico('externo') + '</a>';
        }).join('') + '</div></section>' +
        '<h2 class="mt-lg" style="margin-bottom:14px">Por matéria</h2><div class="grid g2">' + blocos + '</div>' +
        '<section class="card card-flat mt"><div class="row" style="margin-bottom:12px"><span class="sigla sigla-sm">RED</span><h3>Redação</h3></div>' + UI.fontes(Redacao.fontes) + '</section>' +
        '<section class="card mt"><h2>Créditos e licenças</h2><p class="small">As questões oficiais do ENEM 2023 a 2025 são do <b>INEP/MEC</b>, reproduzidas sem alteração sob a licença <a href="https://creativecommons.org/licenses/by-nd/3.0/deed.pt_BR" target="_blank" rel="noopener noreferrer">Creative Commons Atribuição-SemDerivações 3.0</a>, a partir da versão em texto (ledor) publicada em download.inep.gov.br. Só entram itens sem textos ou imagens de terceiros; as descrições de imagens são as do próprio INEP. As demais questões do app são inéditas. Provas de outras bancas não são distribuídas pelo app: baixe-as nos sites oficiais e importe em <a href="#/minhas-questoes">Minhas questões</a> para seu estudo pessoal.</p>' +
        '<p class="small muted">Componentes: pdf.js (Apache 2.0); fontes Bricolage Grotesque, IBM Plex Sans, IBM Plex Mono e Literata (SIL Open Font License).</p></section>'
    };
  }, 'biblioteca');

  // ---------- Ajustes ----------
  App.rota('/ajustes', function () {
    var p = S().perfil;
    var imp = App.bancos;
    return {
      titulo: 'Ajustes',
      html: '<div class="page-head"><div><h1>Ajustes</h1><p>Seu progresso fica salvo neste navegador. Exporte um backup para levar a outro aparelho.</p></div></div>' +
        '<div class="grid g2">' +
        '<section class="card"><h2>Perfil e objetivo</h2>' +
          '<label class="field mt"><span>Nome</span><input class="input" id="aj-nome" maxlength="40" value="' + esc(p.nome) + '"></label>' +
          '<label class="field mt"><span>Objetivo</span><select class="input" id="aj-obj">' + Banco.objetivos.map(function (o) { return '<option value="' + o.id + '"' + (o.id === p.objetivo ? ' selected' : '') + '>' + esc(o.nome) + '</option>'; }).join('') + '</select></label>' +
          '<div class="field mt"><span class="label">Matérias de foco</span><div class="chips" id="aj-mats">' + Banco.materias.map(function (m) {
            return '<button class="chip" data-toggle="multi" data-mat="' + m.id + '" aria-pressed="' + (p.materias.indexOf(m.id) >= 0) + '">' + ico('check', 'ck') + esc(m.nome) + '</button>';
          }).join('') + '</div></div>' +
          '<div class="row mt" style="align-items:flex-end"><label class="field" style="max-width:200px"><span>Meta diária de questões</span><input class="input" type="number" id="aj-meta" min="5" max="300" step="5" value="' + p.metaDiaria + '"></label>' +
          '<label class="field" style="max-width:200px"><span>Meta da semana</span><input class="input" type="number" id="aj-meta-semana" min="10" max="2000" step="10" value="' + (p.metaSemanal || p.metaDiaria * 5) + '"></label></div>' +
          '<p class="small muted mt" style="margin-bottom:0">As alterações são salvas automaticamente.</p></section>' +
        '<section class="card"><h2>Estudo e aparência</h2>' +
          '<label class="switch mt"><span><b>Explicação profunda</b><span>Resolução completa, comentário por alternativa e fontes logo após responder.</span></span><input type="checkbox" data-pref="explicacaoProfunda"' + (p.explicacaoProfunda ? ' checked' : '') + '></label>' +
          '<label class="switch"><span><b>Nota líquida (certo ou errado)</b><span>Em itens certo/errado, mostra a nota no padrão em que um erro anula um acerto.</span></span><input type="checkbox" data-pref="penalidadeCE"' + (p.penalidadeCE ? ' checked' : '') + '></label>' +
          '<div class="field mt"><span class="label">Tema</span><div class="seg" role="group" aria-label="Tema">' + [['auto', 'Automático'], ['light', 'Claro'], ['dark', 'Escuro']].map(function (t) {
            return '<button data-act="aj-tema" data-v="' + t[0] + '" aria-pressed="' + ((p.tema || 'auto') === t[0]) + '">' + t[1] + '</button>';
          }).join('') + '</div></div></section>' +
        '<section class="card"><h2>Minhas questões</h2><p>Provas em PDF, texto colado, planilhas e questões que você escreve ficam em <a href="#/minhas-questoes">Minhas questões</a>.</p>' +
          '<p class="small muted" id="aj-espaco">' + UI.plural(imp.length, 'banco seu', 'bancos seus') + ' neste aparelho.</p>' +
          '<a class="btn btn-secondary mt" href="#/minhas-questoes">' + ico('upload') + ' Abrir Minhas questões</a></section>' +
        '<section class="card"><h2>Seus dados</h2><p>Backup com respostas, simulados, redações, revisão e plano.</p>' +
          '<div class="row mt"><button class="btn btn-secondary" data-act="aj-exportar">' + ico('download') + ' Exportar backup</button>' +
          '<label class="btn btn-secondary">' + ico('upload') + ' Restaurar backup<input type="file" accept=".json,application/json" id="aj-backup" class="sr-only"></label></div>' +
          '<div class="row mt-lg"><button class="btn btn-danger" data-act="aj-apagar">' + ico('lixo') + ' Apagar todo o progresso</button></div></section>' +
        '</div>',
      montar: function () {
        document.querySelectorAll('[data-pref]').forEach(function (inp) {
          inp.addEventListener('change', function () { S().perfil[inp.getAttribute('data-pref')] = inp.checked; Store.salvar(); UI.toast('Preferência salva.'); });
        });
        ['aj-nome', 'aj-obj', 'aj-meta', 'aj-meta-semana'].forEach(function (id) { document.getElementById(id).addEventListener('change', salvarPerfil); });
        document.getElementById('aj-mats').addEventListener('alternou', salvarPerfil);
        document.getElementById('aj-backup').addEventListener('change', restaurarBackup);
        Armazem.espaco().then(function (e) {
          var el = document.getElementById('aj-espaco');
          if (el && e && e.quota) el.textContent += ' Espaço usado pelo app: ' + (e.usage / 1048576).toFixed(1) + ' MB de ' + Math.round(e.quota / 1048576) + ' MB disponíveis.';
        });
      }
    };
  }, 'ajustes');

  function salvarPerfil() {
    var p = S().perfil;
    var mats = App.valores(document.getElementById('aj-mats'), 'data-mat');
    if (!mats.length) { UI.toast('Escolha ao menos uma matéria. A última não foi desmarcada.'); App.render(); return; }
    var meta = document.getElementById('aj-meta'), n = Math.round(Number(meta.value));
    if (!meta.value || !(n >= 5 && n <= 300)) { meta.value = p.metaDiaria; UI.toast('A meta diária precisa ficar entre 5 e 300 questões.'); return; }
    var msEl = document.getElementById('aj-meta-semana'), ms = Math.round(Number(msEl.value));
    if (!msEl.value || !(ms >= 10 && ms <= 2000)) { msEl.value = p.metaSemanal || p.metaDiaria * 5; UI.toast('A meta da semana precisa ficar entre 10 e 2000 questões.'); return; }
    p.nome = document.getElementById('aj-nome').value.trim().slice(0, 40);
    p.objetivo = document.getElementById('aj-obj').value;
    p.materias = mats;
    p.metaDiaria = n;
    p.metaSemanal = ms;
    Store.salvar(); UI.toast('Perfil salvo.');
  }
  App.acao('aj-tema', function (el) { S().perfil.tema = el.getAttribute('data-v'); Store.salvar(); App.aplicarTema(); App.render(); });
  App.acao('aj-exportar', function () {
    UI.baixar('helma-backup-' + Motor.hoje() + '.json', JSON.stringify(Object.assign({}, S(), { importados: App.bancos }), null, 1));
  });
  App.acao('aj-apagar', function () {
    UI.confirmar('Apagar todo o progresso?', 'Respostas, simulados, redações, plano e bancos importados serão removidos deste navegador. Não dá para desfazer; exporte um backup antes se quiser guardar.', 'Apagar tudo', { perigo: true })
      .then(function (ok) { if (ok) { Store.apagarTudo(); location.hash = '#/'; location.reload(); } });
  });
  App.acao('aj-modelo', function () {
    UI.baixar('modelo-banco-helma.json', JSON.stringify({
      nome: 'Minha prova — Banca, ano',
      questoes: [{
        id: 'minha-prova-001', materia: 'portugues', assunto: 'Crase', tipo: 'multipla', estilo: 'FGV', dificuldade: 2, objetivos: ['concursos-gerais'],
        prova: { banca: 'FGV', ano: 2024, orgao: 'Órgão', cargo: 'Cargo' },
        enunciado: 'Enunciado da questão.', alternativas: ['Alternativa A', 'Alternativa B', 'Alternativa C', 'Alternativa D', 'Alternativa E'], resposta: 0,
        explicacao: { resumo: 'Resposta curta.', detalhada: 'Explicação completa.\n\nPode ter vários parágrafos e **negrito**.' },
        fontes: [{ titulo: 'Fonte', url: 'https://www.academia.org.br' }]
      }],
      _ajuda: { materias: Banco.materias.map(function (m) { return m.id; }), objetivos: Banco.objetivos.map(function (o) { return o.id; }), estilos: Banco.ESTILOS, tipos: ['multipla', 'certo-errado (resposta true/false, sem alternativas)'] }
    }, null, 2));
  });

  // ---------- Bancos do aluno (IndexedDB) ----------
  /* Entrada não confiável (arquivo do aluno, backup, IndexedDB adulterado): valida matérias e questões
     antes de registrar; o que não passa fica de fora e é contado. */
  App.bancos = [];
  function prepararBanco(b) {
    if (!b || typeof b !== 'object' || !Array.isArray(b.questoes)) return null;
    var materias = (Array.isArray(b.materias) ? b.materias : []).filter(function (m) { return !Banco.validarMateria(m).length; });
    materias.forEach(Banco.registrarMateria);
    var ids = {}, recusadas = [];
    var questoes = b.questoes.filter(function (q, i) {
      var erros = Banco.validarQuestao(q);
      if (!erros.length && (Banco.questao(q.id) || ids[q.id])) erros = ['id já existe: ' + q.id];
      if (erros.length) { recusadas.push('#' + (i + 1) + ' (' + (q && q.id || 'sem id') + '): ' + erros[0]); return false; }
      ids[q.id] = true;
      return true;
    });
    return {
      id: typeof b.id === 'string' && /^[a-z0-9-]{3,60}$/.test(b.id) ? b.id : 'banco-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      nome: String(b.nome || 'Banco importado').slice(0, 80), origem: String(b.origem || 'json').slice(0, 20),
      criadoEm: Number(b.criadoEm) || Date.now(), materias: materias, questoes: questoes, recusadas: recusadas
    };
  }
  var removidos = {}; // bancos excluídos nesta aba: não podem voltar pela mesclagem com outra aba
  /* Grava a lista mesclando com o que outra aba já gravou: sem isso, a aba aberta antes sobrescreveria o banco
     que o aluno acabou de criar na outra. */
  App.salvarBancos = function () {
    return Armazem.ler('bancos').then(function (gravados) {
      var meus = {};
      App.bancos.forEach(function (b) { meus[b.id] = true; });
      (Array.isArray(gravados) ? gravados : []).forEach(function (g) {
        if (!g || meus[g.id] || removidos[g.id]) return;
        var b = prepararBanco(g);
        if (b && b.questoes.length) { Banco.registrar({ questoes: b.questoes }); App.bancos.push(b); }
      });
      return gravarBancos();
    }, gravarBancos);
  };
  function gravarBancos() {
    var limpo = App.bancos.map(function (b) { return { id: b.id, nome: b.nome, origem: b.origem, criadoEm: b.criadoEm, materias: b.materias, questoes: b.questoes }; });
    return Armazem.gravar('bancos', limpo).then(function () { Armazem.persistir(); return true; });
  }
  /* Adiciona um banco novo. Devolve uma promessa com { banco, recusadas } ou rejeita se não couber. */
  App.adicionarBanco = function (bruto) {
    var b = prepararBanco(bruto);
    if (!b || !b.questoes.length) return Promise.resolve({ banco: null, recusadas: b ? b.recusadas : ['arquivo sem questões'] });
    Banco.registrar({ questoes: b.questoes });
    App.bancos.push(b);
    return App.salvarBancos().then(function () { return { banco: b, recusadas: b.recusadas }; }, function (e) {
      App.bancos.pop();
      Banco.questoes = Banco.questoes.filter(function (q) { return b.questoes.indexOf(q) < 0; });
      throw e;
    });
  };
  function desregistrar(bancos) {
    var fora = {};
    bancos.forEach(function (b) { b.questoes.forEach(function (q) { fora[q.id] = true; }); });
    Banco.questoes = Banco.questoes.filter(function (q) { return !fora[q.id]; });
  }
  App.removerBanco = function (id) {
    removidos[id] = true;
    desregistrar(App.bancos.filter(function (b) { return b.id === id; }));
    App.bancos = App.bancos.filter(function (b) { return b.id !== id; });
    return App.salvarBancos();
  };
  App.carregarBancos = function () {
    return Armazem.ler('bancos').then(function (salvos) {
      var lista = Array.isArray(salvos) ? salvos : [];
      // Migração: versões antigas guardavam os bancos no localStorage, dentro do progresso.
      var antigos = S().importados || [];
      if (antigos.length) lista = lista.concat(antigos.map(function (b) { return { nome: b.nome, origem: 'json', questoes: b.questoes }; }));
      App.bancos = lista.map(prepararBanco).filter(function (b) { return b && b.questoes.length; });
      App.bancos.forEach(function (b) { Banco.registrar({ questoes: b.questoes }); });
      if (antigos.length) return App.salvarBancos().then(function () { S().importados = []; Store.salvar(); });
    });
  };

  function lerArquivo(input, fn) {
    var f = input.files && input.files[0];
    input.value = '';
    if (!f) return;
    if (f.size > 50 * 1024 * 1024) { UI.toast('Arquivo maior que 50 MB.'); return; }
    var r = new FileReader();
    r.onload = function () {
      var dados;
      try { dados = JSON.parse(r.result); } catch (e) { UI.toast(/\.json$/i.test(f.name) ? 'Este .json tem um erro de formatação.' : 'Escolha o arquivo .json de backup exportado pela Helma.'); return; }
      fn(dados, f.name);
    };
    r.readAsText(f);
  }
  App.lerArquivo = lerArquivo;

  function restaurarBackup(e) {
    lerArquivo(e.target, function (dados) {
      var ok = dados && typeof dados === 'object' && dados.perfil && typeof dados.respostas === 'object' && Array.isArray(dados.simulados);
      if (!ok) { UI.toast('Este arquivo não parece um backup da Helma.'); return; }
      UI.confirmar('Restaurar backup?', 'O progresso e os bancos de questões deste aparelho serão substituídos pelos do arquivo.', 'Restaurar').then(function (sim) {
        if (!sim) return;
        desregistrar(App.bancos); // os ids do backup coincidem com os atuais; a página recarrega em seguida
        var bancos = (Array.isArray(dados.importados) ? dados.importados : []).map(prepararBanco).filter(function (b) { return b && b.questoes.length; });
        var estado = Object.assign({}, dados, { importados: [] });
        var anteriores = App.bancos;
        App.bancos = bancos;
        App.salvarBancos().then(function () {
          if (!Store.substituir(estado)) throw new Error('cheio');
          location.hash = '#/'; location.reload();
        }).catch(function () {
          App.bancos = anteriores; App.salvarBancos().catch(function () {});
          anteriores.forEach(function (b) { Banco.registrar({ questoes: b.questoes }); });
          UI.confirmar('Backup não restaurado', 'Não houve espaço para gravar os dados neste aparelho. Seu progresso atual foi mantido.', 'Entendi', { cancelar: 'Fechar' });
        });
      });
    });
  }

  // ---------- Inicialização ----------
  document.addEventListener('DOMContentLoaded', function () {
    // Site publicado (https ou localhost): instala o service worker para abrir sem internet e virar app no celular.
    // Não se aplica ao arquivo local nem aos apps de Windows e Android, que já têm tudo no aparelho.
    var web = /^https:$/.test(location.protocol) || /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
    if ('serviceWorker' in navigator && web && !window.Capacitor && !/Electron/.test(navigator.userAgent)) navigator.serviceWorker.register('sw.js').catch(function () { /* sem cache offline */ });
    // Falha ao salvar fica visível até o próximo salvamento dar certo (um aviso que some em 3 s esconderia a perda).
    var faixa = document.getElementById('aviso-salvar');
    Store.onFalha(function () { faixa.hidden = false; });
    var salvarOriginal = Store.salvar;
    Store.salvar = function () { var ok = salvarOriginal(); if (ok) faixa.hidden = true; return ok; };
    // Outra aba gravou: recarrega o estado aqui antes que esta aba sobrescreva com dados velhos.
    window.addEventListener('storage', function (ev) {
      if (ev.key !== Store.CHAVE || ev.newValue === null) return;
      var y = window.scrollY, ativo = document.activeElement, id = ativo && ativo.id;
      var sel = ativo && 'selectionStart' in ativo ? [ativo.selectionStart, ativo.selectionEnd] : null;
      Store.carregar();
      if (ativo && (ativo.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(ativo.tagName)) && !document.getElementById('r-area')) return;
      App.render();
      window.scrollTo(0, y);
      var novo = id && document.getElementById(id);
      if (novo) { novo.focus({ preventScroll: true }); if (sel && novo.setSelectionRange) novo.setSelectionRange(sel[0], sel[1]); }
    });
    try {
      Store.carregar();
      App.aplicarTema();
    } catch (e) {
      if (window.console) console.error(e);
      UI.confirmar('Não foi possível carregar seu progresso', 'Os dados salvos neste navegador estão corrompidos. Você pode apagá-los e recomeçar.', 'Apagar e recomeçar', { perigo: true, cancelar: 'Manter' })
        .then(function (ok) { if (ok) { Store.apagarTudo(); location.reload(); } });
      return;
    }
    App.carregarBancos().catch(function (e) { if (window.console) console.error(e); }).then(function () {
      Store.carregar(); // de novo: matérias próprias do aluno só existem depois dos bancos
      App.render();
      if (Store.corrompido) UI.confirmar('Seu progresso salvo estava danificado', 'Não foi possível ler os dados guardados neste navegador, então o app recomeçou do zero. Uma cópia do conteúdo danificado foi guardada; se você tem um backup exportado, restaure em Ajustes.', 'Entendi', { cancelar: 'Fechar' });
    });
  });

  root.App = App;
})(this);
