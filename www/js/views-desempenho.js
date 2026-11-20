/* Tela de desempenho: números gerais, matérias e assuntos, confiança x acerto, tempo e evolução semanal. */
(function () {
  'use strict';
  var esc = UI.esc, ico = UI.ico;

  function fmtMs(ms) {
    if (ms == null) return '—';
    var s = Math.round(ms / 1000);
    if (s < 60) return s + ' s';
    var m = Math.floor(s / 60);
    return m + ' min' + (s % 60 ? ' ' + String(s % 60).padStart(2, '0') + ' s' : '');
  }
  var fmtPct = function (p) { return p == null ? '—' : p + '%'; };
  var faixa = function (p) { return p == null ? '' : p >= 70 ? 'ok' : p >= 50 ? 'warn' : 'err'; };
  var resumo = function (t, s) { return t + ' ' + (t === 1 ? s[0] : s[1]); };

  function barra(p) {
    return '<div class="bar ' + faixa(p) + '" aria-hidden="true"><i style="width:' + (p || 0) + '%"></i></div>';
  }

  // ---------- Matérias e assuntos ----------
  function assuntoLinha(a) {
    var detalhes = [resumo(a.questoes, ['questão', 'questões']) + ' · ' + a.certas + ' certas'];
    if (a.tentativas > a.questoes) detalhes.push(a.tentativas + ' tentativas');
    if (a.ms != null) detalhes.push('tempo ' + fmtMs(a.ms));
    if (a.comDicas) detalhes.push('dica em ' + a.comDicas);
    return '<div class="dsp-ass"><div class="dsp-ass-top"><span class="dsp-ass-nome">' + esc(a.assunto) + '</span><b class="mono">' + fmtPct(a.taxa) + '</b></div>' +
      barra(a.taxa) + '<div class="dsp-ass-sub"><span class="small muted">' + esc(detalhes.join(' · ')) + '</span>' +
      (a.fraco ? '<span class="dsp-fraco">Assunto fraco</span><button class="btn btn-secondary btn-sm" data-act="treinar" data-mat="' + esc(a.materia) + '" data-assunto="' + esc(a.assunto) + '">Treinar este assunto</button>' : '') + '</div></div>';
  }

  function materiasCard(a) {
    var linhas = a.materias.map(function (m) {
      return '<details class="dsp-mat"><summary><span class="sigla sigla-sm">' + esc(m.sigla) + '</span>' +
        '<span class="dsp-mat-corpo"><span class="nm"><span>' + esc(m.nome) + '</span><span class="muted small">' + resumo(m.questoes, ['questão', 'questões']) + (m.ms != null ? ' · ' + fmtMs(m.ms) : '') + '</span></span>' + barra(m.taxa) + '</span>' +
        '<b class="mono dsp-mat-pct">' + fmtPct(m.taxa) + '</b>' + ico('baixo', 'dsp-seta') + '</summary>' +
        '<div class="dsp-assuntos">' + m.assuntos.map(assuntoLinha).join('') + '</div></details>';
    }).join('');
    return '<section class="card"><div class="card-head"><div><h2>Por matéria e assunto</h2><p class="small">Conta a última resposta de cada questão. Toque numa matéria para ver os assuntos.</p></div></div>' + linhas + '</section>';
  }

  // ---------- Domínio por assunto (o app aprende com cada resposta; ver Aprendizado.elo) ----------
  var COR_NIVEL = { 'começando': 'err', aprendendo: 'warn', bom: 'ok', domina: 'ok' };
  function dominioCard(dom) {
    var cabeca = '<div class="card-head"><div><h2>Seu domínio por assunto</h2><p class="small">O app acompanha cada resposta sua e estima o quanto você domina cada assunto. Com poucas respostas a estimativa é cautelosa e costuma ficar em "começando".</p></div></div>';
    var lista = Object.keys(dom).map(function (k) {
      var i = k.indexOf('|'), m = Banco.materia(k.slice(0, i));
      return m && { materia: m.nome, assunto: k.slice(i + 1), n: dom[k].n, nivel: Aprendizado.nivelDominio(dom[k]) };
    }).filter(Boolean).sort(function (a, b) { return a.nivel.p - b.nivel.p || a.assunto.localeCompare(b.assunto); });
    if (!lista.length) return '<section class="card" id="dsp-dominio">' + cabeca + '<p class="muted">Responda algumas questões e o domínio de cada assunto aparece aqui.</p></section>';
    return '<section class="card" id="dsp-dominio">' + cabeca + '<div class="stack">' + lista.slice(0, 12).map(function (a) {
      return '<div class="dsp-ass"><div class="dsp-ass-top"><span class="dsp-ass-nome">' + esc(a.assunto) + ' <span class="small muted">' + esc(a.materia) + '</span></span><b>' + a.nivel.rotulo + '</b></div>' +
        '<div class="bar ' + COR_NIVEL[a.nivel.rotulo] + '" aria-hidden="true"><i style="width:' + a.nivel.pct + '%"></i></div>' +
        '<div class="dsp-ass-sub"><span class="small muted">' + resumo(a.n, ['resposta', 'respostas']) + (a.n < 5 ? ' · faltam ' + (5 - a.n) + ' para o app estimar com mais segurança' : '') + '</span></div></div>';
    }).join('') + '</div>' + (lista.length > 12 ? '<p class="small muted mt">Mostrando os 12 mais fracos, de ' + lista.length + ' assuntos acompanhados.</p>' : '') + '</section>';
  }

  // ---------- Padrões nos erros ----------
  function padroesCard(p) {
    var itens = [];
    p.assuntos.slice(0, 3).forEach(function (a) {
      var aula = Banco.aulas.filter(function (x) { return x.materia === a.materia && x.assunto === a.assunto; })[0];
      itens.push('<div class="callout callout-marker">' + ico('alerta') + '<div class="grow">Você errou <b>' + a.erros + ' de ' + resumo(a.total, ['questão', 'questões']) + '</b> de ' + esc(a.assunto) + '. ' +
        (aula ? 'A aula explica a base do assunto.' : 'Treine este assunto em questões de dificuldade menor.') + '<div class="mt">' +
        (aula ? '<a class="btn btn-secondary btn-sm" href="#/aula/' + esc(aula.id) + '">Estudar a aula</a>'
          : '<button class="btn btn-secondary btn-sm" data-act="treinar" data-mat="' + esc(a.materia) + '" data-assunto="' + esc(a.assunto) + '">Treinar este assunto</button>') + '</div></div></div>');
    });
    p.pegadinhas.slice(0, 3).forEach(function (g) {
      var q = Banco.questao(g.id), nota = q && q.explicacao && q.explicacao.alternativas && q.explicacao.alternativas[g.r];
      if (!q) return;
      itens.push('<div class="callout callout-marker">' + ico('alerta') + '<div class="grow">Você costuma cair nesta pegadinha: marcou a alternativa <b>' + 'ABCDE'[g.r] + '</b> ' + g.vezes + ' vezes em "' + esc(String(q.enunciado).slice(0, 80)) + '…".' +
        (nota ? '<br><span class="small">' + 'ABCDE'[g.r] + ': ' + esc(nota) + '</span>' : '') + '<div class="mt"><a class="btn btn-secondary btn-sm" href="#/questao/' + encodeURIComponent(q.id) + '">Ver a questão</a></div></div></div>');
    });
    p.tipos.forEach(function (t) {
      itens.push('<div class="callout callout-marker">' + ico('ideia') + '<div class="grow">Em ' + t.vezes + ' erros, você marcou ' + esc(t.texto) + '. Releia as alternativas sem esse atalho.</div></div>');
    });
    if (!itens.length) return '';
    return '<section class="card" id="dsp-padroes"><div class="card-head"><div><h2>Padrões nos seus erros</h2><p class="small">Erro que se repete pede outra estratégia, não só mais questões.</p></div></div><div class="stack">' + itens.join('') + '</div></section>';
  }

  // ---------- Confiança x acerto ----------
  var QUADRANTES = [
    { k: 'dominio', ico: 'check', cls: 'ok', nome: 'Acertou com certeza', quando: 'Resposta certa, e você tinha certeza', dica: 'Você sabe. Deixe a revisão espaçada cuidar de manter.' },
    { k: 'incerto', ico: 'ideia', cls: 'warn', nome: 'Acertou na dúvida', quando: 'Resposta certa, mas sem certeza', dica: 'Acertou, mas na dúvida. Releia a explicação para virar domínio.' },
    { k: 'perigoso', ico: 'alerta', cls: 'err', nome: 'Errou com certeza', quando: 'Resposta errada, e você tinha certeza', dica: 'Você tinha certeza e errou. Revise a teoria: há uma ideia errada fixada.' },
    { k: 'lacuna', ico: 'x', cls: 'warn', nome: 'Errou sem certeza', quando: 'Resposta errada, e você sabia que não sabia', dica: 'Você sabia que não sabia. Estude o assunto e treine de novo.' }
  ];

  function confiancaCard(c) {
    var cabeca = '<div class="card-head"><div><h2>Confiança × acerto</h2><p class="small">Ao responder, você diz o quanto tem certeza. Cruzar isso com o resultado mostra onde está o risco.</p></div></div>';
    if (!c.total) {
      return '<section class="card">' + cabeca + '<p class="muted">' + (c.semConf
        ? 'Suas respostas até agora não guardaram a confiança. Nas próximas, diga se chutou, acha que sabe ou tem certeza, e este quadro se completa.'
        : 'Responda algumas questões e marque o quanto você tem certeza de cada resposta.') + '</p></section>';
    }
    var cels = QUADRANTES.map(function (d) {
      var x = c[d.k];
      return '<div class="dsp-q dsp-q-' + d.cls + '" role="group" aria-label="' + d.nome + ': ' + resumo(x.n, ['questão', 'questões']) + (x.pct == null ? '' : ', ' + x.pct + '%') + '"><div class="dsp-q-top">' + ico(d.ico) + '<span class="dsp-q-nome">' + d.nome + '</span></div>' +
        '<div class="dsp-q-num"><b>' + x.n + '</b><span>' + fmtPct(x.pct) + '</span></div>' +
        '<div class="small muted">' + d.quando + '</div><p class="small">' + d.dica + '</p></div>';
    }).join('');
    var nota = c.semConf ? '<p class="small muted mt">' + resumo(c.semConf, ['resposta antiga ficou', 'respostas antigas ficaram']) + ' de fora por não ter confiança registrada.</p>' : '';
    var alerta = c.perigoso.n ? '<div class="callout mt">' + ico('alerta') + '<div>Atenção aos <b>erros com certeza</b>: ' + resumo(c.perigoso.n, ['questão em que', 'questões em que']) + ' você tinha certeza e errou. Esses erros se repetem na prova se ninguém os corrige.</div></div>' : '';
    return '<section class="card">' + cabeca + '<div class="dsp-quad">' + cels + '</div>' + alerta + nota + '</section>';
  }

  // ---------- Tempo ----------
  function tempoCard(t) {
    var cabeca = '<div class="card-head"><div><h2>Onde você demora</h2><p class="small">As questões em que seu último tempo foi o mais longo.</p></div></div>';
    if (!t.top.length) {
      return '<section class="card">' + cabeca + '<p class="muted">Ainda não há tempos guardados. As próximas questões que você responder passam a registrar quanto tempo levaram.</p></section>';
    }
    var comp = '';
    if (t.acertoMs != null && t.erroMs != null) {
      var dif = t.erroMs - t.acertoMs;
      comp = '<div class="dsp-comp"><div class="stat"><b>' + fmtMs(t.acertoMs) + '</b><span>nas que você acertou</span></div><div class="stat"><b>' + fmtMs(t.erroMs) + '</b><span>nas que você errou</span></div>' +
        '<p class="small muted">' + (Math.abs(dif) < 5000 ? 'O tempo é parecido nos acertos e nos erros: errar não é falta de tempo.' : dif > 0 ? 'Você gasta mais tempo nas que erra: a dúvida custa tempo. Marque e volte depois.' : 'Você erra mais quando responde rápido: leia com calma antes de marcar.') + '</p></div>';
    }
    var lista = t.top.map(function (x) {
      var q = Banco.questao(x.id), m = Banco.materia(x.materia);
      var txt = q ? String(q.enunciado || '') : '';
      if (txt.length > 90) txt = txt.slice(0, 90).replace(/\s+\S*$/, '') + '…';
      return '<a class="list-item" href="#/questao/' + encodeURIComponent(x.id) + '"><span class="sigla sigla-sm">' + esc(m ? m.sigla : '?') + '</span>' +
        '<div class="grow"><div class="title dsp-trunc">' + esc(txt || x.assunto) + '</div><div class="sub">' + esc(x.assunto) + ' · ' + (x.certo ? 'acertou' : 'errou') + '</div></div>' +
        '<b class="mono dsp-tempo">' + fmtMs(x.ms) + '</b></a>';
    }).join('');
    return '<section class="card">' + cabeca + comp + '<div class="list">' + lista + '</div></section>';
  }

  // ---------- Evolução semanal (SVG feito à mão) ----------
  function dia(t) { return new Date(t).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }); }

  function evolucaoCard(sem) {
    var cabeca = '<div class="card-head"><div><h2>Evolução semanal</h2><p class="small">Percentual de acerto por semana, desde a sua primeira semana de respostas (até 8 semanas).</p></div></div>';
    var com = sem.filter(function (s) { return s.taxa != null; });
    // Começa na primeira semana com respostas: semanas antes disso não são "0%", só não existiam.
    if (com.length) sem = sem.slice(sem.indexOf(com[0]));
    if (!com.length) return '<section class="card">' + cabeca + '<p class="muted">O gráfico aparece quando houver respostas nas últimas 8 semanas.</p></section>';

    var W = 320, H = 170, L = 34, R = 12, T = 18, B = 30, w = W - L - R, h = H - T - B;
    var x = function (i) { return L + (sem.length === 1 ? w / 2 : i * w / (sem.length - 1)); };
    var y = function (p) { return T + h - p / 100 * h; };
    var g = [0, 50, 100].map(function (p) {
      return '<line class="dsp-grade" x1="' + L + '" x2="' + (W - R) + '" y1="' + y(p) + '" y2="' + y(p) + '"/><text class="dsp-eixo" x="' + (L - 6) + '" y="' + (y(p) + 4) + '" text-anchor="end">' + p + '%</text>';
    }).join('');
    // Semana sem respostas quebra a linha em vez de fingir um valor.
    var trechos = [], atual = [];
    sem.forEach(function (s, i) {
      if (s.taxa == null) { if (atual.length) trechos.push(atual); atual = []; } else atual.push(x(i).toFixed(1) + ',' + y(s.taxa).toFixed(1));
    });
    if (atual.length) trechos.push(atual);
    var linhas = trechos.filter(function (t) { return t.length > 1; }).map(function (t) { return '<polyline class="dsp-linha" points="' + t.join(' ') + '"/>'; }).join('');
    var pontos = sem.map(function (s, i) {
      var rot = '<text class="dsp-eixo" x="' + x(i).toFixed(1) + '" y="' + (H - 10) + '" text-anchor="middle">' + dia(s.inicio) + '</text>';
      if (s.taxa == null) return rot;
      return '<circle class="dsp-ponto" cx="' + x(i).toFixed(1) + '" cy="' + y(s.taxa).toFixed(1) + '" r="4"/><text class="dsp-valor" x="' + x(i).toFixed(1) + '" y="' + (y(s.taxa) - 9).toFixed(1) + '" text-anchor="middle">' + s.taxa + '%</text>' + rot;
    }).join('');
    var descr = 'Acerto por semana: ' + sem.map(function (s) { return 'semana de ' + dia(s.inicio) + ', ' + (s.taxa == null ? 'sem respostas' : s.taxa + '% em ' + resumo(s.total, ['resposta', 'respostas'])); }).join('; ') + '.';
    var tabela = '<table class="sr-only"><caption>Acerto por semana</caption><thead><tr><th scope="col">Semana a partir de</th><th scope="col">Respostas</th><th scope="col">Acerto</th></tr></thead><tbody>' +
      sem.map(function (s) { return '<tr><td>' + dia(s.inicio) + '</td><td>' + s.total + '</td><td>' + fmtPct(s.taxa) + '</td></tr>'; }).join('') + '</tbody></table>';
    var svg = '<svg class="dsp-svg" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(descr) + '"><title>Evolução do acerto por semana</title>' + g + linhas + pontos + '</svg>';
    return '<section class="card">' + cabeca + svg + tabela + '<p class="small muted">Os dias abaixo do gráfico marcam o início de cada semana.</p></section>';
  }

  // ---------- Tela ----------
  App.rota('/desempenho', function () {
    var respostas = Store.estado.respostas;
    var a = Desempenho.porAssunto(Banco, respostas);
    var cab = '<header class="page-head"><div><h1>Como você está indo</h1><p>Onde você acerta, onde erra e onde perde tempo, para decidir o que estudar a seguir.</p></div></header>';
    if (!a.total.questoes) {
      return { titulo: 'Desempenho', html: cab + '<div class="card"><div class="empty">' + UI.helma('frente') + '<h2>Ainda não há respostas para analisar</h2><p>Resolva algumas questões e este painel mostra seu acerto por assunto, o tempo que cada uma levou e a evolução semana a semana.</p>' +
        '<div class="row" style="justify-content:center"><a class="btn btn-primary" href="#/simulados">' + ico('play') + ' Montar um simulado</a><a class="btn btn-ghost" href="#/questoes">Ver o banco de questões</a></div></div></div>' };
    }
    var c = Desempenho.confiancaAcerto(Banco, respostas), t = Desempenho.tempoPorQuestao(Banco, respostas);
    var gerais = '<section class="card dsp-gerais" aria-label="Resumo"><div class="stat"><b>' + a.total.questoes + '</b><span>' + (a.total.questoes === 1 ? 'questão respondida' : 'questões respondidas') + '</span></div>' +
      '<div class="stat"><b>' + fmtPct(a.total.taxa) + '</b><span>de acerto</span></div>' +
      '<div class="stat"><b>' + fmtMs(t.mediaMs) + '</b><span>' + (t.mediaMs == null ? 'tempo por questão: sem registro' : 'por questão') + '</span></div></section>';
    var aviso = (t.questoes < a.total.questoes) || c.semConf
      ? '<div class="callout mt">' + ico('info') + '<div>Parte das suas respostas é de antes de o app guardar tempo e confiança. Elas entram na conta de acerto, mas não nos quadros de tempo e confiança.</div></div>' : '';
    return {
      titulo: 'Desempenho',
      html: cab + gerais + aviso + '<div class="grid g-main mt"><div class="stack">' + dominioCard(Store.estado.dominio) + materiasCard(a) + evolucaoCard(Desempenho.evolucao(respostas, 8)) + '</div><div class="stack">' + padroesCard(Aprendizado.padroesDeErro(Banco, respostas)) + confiancaCard(c) + tempoCard(t) + '</div></div>'
    };
  }, 'desempenho');
})();
