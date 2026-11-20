/* Cartões de memorização: agendamento (função pura, testada no Node), criação a partir de questões e telas. */
(function (root) {
  'use strict';
  var Motor = typeof module !== 'undefined' && module.exports ? require('./motor.js') : root.Motor;
  var INT = Motor.INTERVALOS, TETO = INT.length - 1;
  var NOTAS = { errei: 1, dificil: 1, facil: 1 };

  /* Devolve { caixa, proxima } depois da avaliação. Errei volta à caixa 0 e revisa amanhã; difícil mantém a caixa
     e revisa em INTERVALOS[caixa]; fácil sobe uma caixa (até a última). Não altera o cartão recebido. */
  function agendar(cartao, nota, hojeIso) {
    if (!NOTAS[nota]) throw new Error('nota inválida: ' + nota);
    var c = Math.max(0, Math.min(TETO, Math.round(Number(cartao && cartao.caixa)) || 0));
    var caixa = nota === 'errei' ? 0 : nota === 'facil' ? Math.min(TETO, c + 1) : c;
    var dias = nota === 'errei' ? 1 : INT[caixa];
    return { caixa: caixa, proxima: Motor.somarDias(hojeIso, dias) };
  }

  function diasEntre(a, b) {
    var f = function (s) { var p = s.split('-').map(Number); return Date.UTC(p[0], p[1] - 1, p[2]); };
    return Math.round((f(b) - f(a)) / 86400000);
  }

  function hash(s) { // FNV-1a de 32 bits em base 36: sufixo estável para ids longos
    var h = 0x811c9dc5;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
    return h.toString(36);
  }
  function idDaQuestao(qid) {
    var plano = 'q-' + qid;
    if (/^[a-z0-9-]{1,60}$/.test(plano)) return plano;
    return plano.toLowerCase().replace(/[^a-z0-9-]/g, '-').slice(0, 51) + '-' + hash(String(qid));
  }

  function cortar(s, n) { s = String(s == null ? '' : s).trim(); return s.length > n ? s.slice(0, n).trimEnd() + '…' : s; }

  /* Frente e verso de um cartão a partir de uma questão e da anotação do aluno. */
  function montarDaQuestao(q, nota) {
    var L = 'ABCDE', frente = (q.textoBase ? cortar(q.textoBase, 1200) + '\n\n' : '') + cortar(q.enunciado, 500), verso;
    if (q.tipo === 'multipla' && Array.isArray(q.alternativas)) {
      frente += '\n\n' + q.alternativas.map(function (a, i) { return L[i] + ') ' + a; }).join('\n');
      verso = 'Resposta: ' + L[q.resposta] + ') ' + q.alternativas[q.resposta];
    } else verso = 'Resposta: ' + (q.resposta ? 'Certo' : 'Errado');
    var resumo = q.explicacao && q.explicacao.resumo;
    if (resumo) verso += '\n\n' + resumo;
    if (nota && String(nota).trim()) verso += '\n\nMinha anotação: ' + String(nota).trim();
    return { frente: frente.slice(0, 4000), verso: verso.slice(0, 4000) };
  }

  var Cartoes = { agendar: agendar, diasEntre: diasEntre, idDaQuestao: idDaQuestao, montarDaQuestao: montarDaQuestao };
  if (typeof module !== 'undefined' && module.exports) { module.exports = Cartoes; return; }
  root.Cartoes = Cartoes;
  if (!root.App) return;

  var esc = UI.esc, ico = UI.ico, App = root.App;
  var S = function () { return Store.estado; };
  var form = null;   // null | { id } (id vazio = cartão novo)
  var busca = '';
  var sessao = null; // { fila, i, mostrou, cont: {errei, dificil, facil} }

  function vencem(hoje) {
    var m = S().cartoes;
    return Object.keys(m).filter(function (id) { return m[id].proxima <= hoje; })
      .sort(function (a, b) { return m[a].proxima < m[b].proxima ? -1 : m[a].proxima > m[b].proxima ? 1 : 0; });
  }
  function quando(iso, hoje) {
    var d = diasEntre(hoje, iso);
    return d <= 0 ? 'hoje' : d === 1 ? 'amanhã' : 'em ' + d + ' dias';
  }
  function novoId() { return 'c-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
  function temCartao(qid) {
    var m = S().cartoes, k = String(qid).slice(0, 80);
    return Object.keys(m).some(function (id) { return m[id].qid === k; });
  }
  // Cria o cartão da questão se ainda não existir. Devolve true quando criou.
  function criarDaQuestao(q) {
    if (!q || temCartao(q.id)) return false;
    var id = idDaQuestao(q.id), t = montarDaQuestao(q, (S().notas || {})[q.id]);
    if (S().cartoes[id]) return false;
    S().cartoes[id] = { frente: t.frente, verso: t.verso, qid: String(q.id).slice(0, 80), caixa: 0, proxima: Motor.hoje(), criadoEm: Date.now() };
    return true;
  }

  App.acao('cartao-da-questao', function (el) {
    var q = Banco.questao(el.getAttribute('data-q'));
    if (!q) { UI.toast('Questão não encontrada.'); return; }
    if (!criarDaQuestao(q)) { UI.toast('Esta questão já tem um cartão.'); return; }
    Store.salvar();
    UI.toast('Cartão criado. Ele aparece em Cartões.');
  });

  // ---------- Lista ----------
  function itens() {
    var m = S().cartoes, hoje = Motor.hoje(), t = busca.trim().toLowerCase();
    var ids = Object.keys(m).filter(function (id) { return !t || (m[id].frente + ' ' + m[id].verso).toLowerCase().indexOf(t) >= 0; })
      .sort(function (a, b) { return m[b].criadoEm - m[a].criadoEm; });
    if (!ids.length) return '<div class="empty">' + (t ? ico('cartao') : UI.helma('frente')) + '<h3>' + (t ? 'Nenhum cartão encontrado' : 'Nenhum cartão ainda') + '</h3><p>' +
      (t ? 'Tente outra palavra.' : 'Crie um cartão ou gere cartões a partir das questões que você errou.') + '</p></div>';
    return '<div class="list">' + ids.slice(0, 150).map(function (id) {
      var c = m[id], vence = c.proxima <= hoje;
      return '<div class="list-item cl-item"><div class="grow"><div class="title cl-txt">' + esc(cortar(c.frente, 140)) + '</div>' +
        '<div class="sub cl-txt">' + esc(cortar(c.verso, 100)) + '</div>' +
        '<div class="cl-meta"><span class="tag ' + (vence ? 'tag-warn' : '') + '">' + (vence ? 'Vence hoje' : 'Volta ' + quando(c.proxima, hoje)) + '</span>' +
        '<span class="tag">Caixa ' + (c.caixa + 1) + ' de ' + INT.length + '</span>' + (c.qid ? '<span class="tag tag-pen">Da questão</span>' : '') + '</div></div>' +
        '<div class="row" style="gap:2px;flex:none"><button class="icon-btn" data-act="cart-editar" data-id="' + esc(id) + '" aria-label="Editar cartão" title="Editar">' + ico('redacao') + '</button>' +
        '<button class="icon-btn" data-act="cart-excluir" data-id="' + esc(id) + '" aria-label="Excluir cartão" title="Excluir">' + ico('lixo') + '</button></div></div>';
    }).join('') + '</div>' + (ids.length > 150 ? '<p class="small muted mt">Mostrando 150 de ' + ids.length + '. Use a busca para achar os outros.</p>' : '');
  }

  function formulario() {
    if (!form) return '';
    var c = form.id ? S().cartoes[form.id] : null;
    return '<section class="card mt" id="cf-card"><h2>' + (c ? 'Editar cartão' : 'Novo cartão') + '</h2>' +
      '<label class="field mt"><span>Frente (pergunta)</span><textarea class="input" id="cf-frente" rows="3" maxlength="4000">' + esc(c ? c.frente : '') + '</textarea></label>' +
      '<label class="field mt"><span>Verso (resposta)</span><textarea class="input" id="cf-verso" rows="4" maxlength="4000">' + esc(c ? c.verso : '') + '</textarea></label>' +
      '<div class="row mt"><button class="btn btn-primary" data-act="cart-salvar">Salvar cartão</button><button class="btn btn-ghost" data-act="cart-cancelar">Cancelar</button></div></section>';
  }

  App.rota('/cartoes', function () {
    var hoje = Motor.hoje(), m = S().cartoes, ids = Object.keys(m), n = vencem(hoje).length;
    var prox = ids.map(function (id) { return m[id].proxima; }).sort()[0];
    var resumo = n ? '<b class="cr-num mono">' + n + '</b> <span>' + (n === 1 ? 'cartão vence hoje' : 'cartões vencem hoje') + '</span>'
      : ids.length ? '<span class="tag tag-ok">' + ico('check') + ' Tudo em dia</span> <span class="muted">Próximo cartão ' + quando(prox, hoje) + '.</span>'
      : '<span class="muted">Você ainda não tem cartões.</span>';
    return {
      titulo: 'Cartões',
      html: '<div class="page-head"><div><h1>Cartões de memorização</h1><p>Leia a pergunta, tente lembrar e só então vire o cartão. Quanto mais fácil, mais tempo ele demora a voltar.</p></div></div>' +
        '<section class="card"><div class="cr-resumo">' + resumo + '</div><div class="row mt">' +
        (n ? '<button class="btn btn-primary btn-lg" data-act="cart-estudar">' + ico('play') + ' Estudar agora</button>' : '') +
        '<button class="btn btn-secondary" data-act="cart-novo">' + ico('cartao') + ' Novo cartão</button>' +
        '<button class="btn btn-secondary" data-act="cart-erros">' + ico('revisao') + ' Gerar cartões dos meus erros</button></div></section>' +
        formulario() +
        '<section class="card mt"><div class="card-head"><h2>Seus cartões</h2><span class="muted small">' + UI.plural(ids.length, 'cartão', 'cartões') + '</span></div>' +
        '<div class="search"><span class="sr-only" id="cb-rot">Buscar nos cartões</span>' + ico('busca') + '<input class="input" id="cb" type="search" aria-labelledby="cb-rot" placeholder="Buscar nos cartões" value="' + esc(busca) + '"></div>' +
        '<div class="mt" id="cl">' + itens() + '</div></section>',
      montar: function () {
        document.getElementById('cb').addEventListener('input', function (e) { busca = e.target.value; document.getElementById('cl').innerHTML = itens(); });
        var f = document.getElementById('cf-frente');
        if (f) f.focus({ preventScroll: false });
      }
    };
  }, 'cartoes');

  App.acao('cart-novo', function () { form = { id: '' }; App.render(); });
  App.acao('cart-editar', function (el) { var id = el.getAttribute('data-id'); if (S().cartoes[id]) { form = { id: id }; App.render(); } });
  App.acao('cart-cancelar', function () { form = null; App.render(); });
  // Cartão livre (sem questão), usado também por Contexto. Quem chama salva com Store.salvar().
  Cartoes.criar = function (frente, verso) {
    S().cartoes[novoId()] = { frente: String(frente).slice(0, 4000), verso: String(verso).slice(0, 4000), qid: '', caixa: 0, proxima: Motor.hoje(), criadoEm: Date.now() };
  };
  App.acao('cart-salvar', function () {
    var f = document.getElementById('cf-frente'), v = document.getElementById('cf-verso');
    var frente = f.value.trim().slice(0, 4000), verso = v.value.trim().slice(0, 4000);
    if (!frente || !verso) { UI.toast('Preencha a frente e o verso.'); (frente ? v : f).focus(); return; }
    var c = form.id && S().cartoes[form.id];
    if (c) { c.frente = frente; c.verso = verso; }
    else Cartoes.criar(frente, verso);
    form = null; Store.salvar(); UI.toast('Cartão salvo.'); App.render();
  });
  App.acao('cart-excluir', function (el) {
    var id = el.getAttribute('data-id'), c = S().cartoes[id];
    if (!c) return;
    UI.confirmar('Excluir este cartão?', cortar(c.frente, 120), 'Excluir', { perigo: true }).then(function (ok) {
      if (!ok) return;
      delete S().cartoes[id]; Store.salvar(); UI.toast('Cartão excluído.'); App.render();
    });
  });
  App.acao('cart-erros', function () {
    var h = S().respostas, n = 0;
    Object.keys(h).forEach(function (id) {
      var u = Motor.ultima(h, id), q = Banco.questao(id);
      if (q && u && !u.certo && criarDaQuestao(q)) n++;
    });
    if (n) { Store.salvar(); UI.toast(n === 1 ? '1 cartão criado.' : n + ' cartões criados.'); App.render(); }
    else UI.toast('Nenhum erro novo: todas as questões que você errou já têm cartão.');
  });

  // ---------- Sessão de estudo ----------
  App.acao('cart-estudar', function () {
    var fila = vencem(Motor.hoje());
    if (!fila.length) { UI.toast('Nenhum cartão vence hoje.'); return; }
    sessao = { fila: Motor.embaralhar(fila, Motor.rng(Date.now())), i: 0, mostrou: false, cont: { errei: 0, dificil: 0, facil: 0 } };
    App.ir('#/cartoes/estudar');
  });

  function atual() {
    while (sessao.i < sessao.fila.length && !S().cartoes[sessao.fila[sessao.i]]) sessao.i++; // apagado em outra aba
    return sessao.i < sessao.fila.length ? S().cartoes[sessao.fila[sessao.i]] : null;
  }
  function texto(s) { return '<div class="fc-txt">' + esc(s) + '</div>'; }

  function acoes(c) {
    if (!sessao.mostrou) return '<button class="btn btn-primary btn-lg btn-block" data-act="cart-virar" id="cs-virar">Mostrar resposta <kbd>Espaço</kbd></button>';
    var hoje = Motor.hoje();
    return '<div class="cs-notas" role="group" aria-label="Como foi lembrar?">' + [['errei', 'Errei'], ['dificil', 'Difícil'], ['facil', 'Fácil']].map(function (x, i) {
      var d = diasEntre(hoje, agendar(c, x[0], hoje).proxima);
      return '<button class="btn cs-' + x[0] + '" data-act="cart-nota" data-n="' + x[0] + '"><b>' + x[1] + ' <kbd>' + (i + 1) + '</kbd></b><small>' + (d === 1 ? 'amanhã' : 'em ' + d + ' dias') + '</small></button>';
    }).join('') + '</div>';
  }

  function pintar() {
    var area = document.getElementById('cs-area'), c = atual(), tot = sessao.fila.length;
    if (!c) { // fim
      var k = sessao.cont, feitos = k.errei + k.dificil + k.facil, m = S().cartoes;
      var prox = Object.keys(m).map(function (id) { return m[id].proxima; }).sort()[0];
      area.innerHTML = '<div class="card cs-fim"><h2>' + (feitos ? UI.plural(feitos, 'cartão revisado', 'cartões revisados') : 'Nada para revisar') + '</h2>' +
        '<div class="cs-resumo"><div><b class="mono">' + k.facil + '</b><span>Fáceis</span></div><div><b class="mono">' + k.dificil + '</b><span>Difíceis</span></div><div><b class="mono">' + k.errei + '</b><span>Errei</span></div></div>' +
        (prox ? '<p class="muted">Próximo cartão ' + quando(prox, Motor.hoje()) + '.</p>' : '') +
        '<div class="row mt"><a class="btn btn-primary" href="#/cartoes" id="cs-fim-voltar">Voltar aos cartões</a></div></div>';
      var v = document.getElementById('cs-fim-voltar'); if (v) v.focus();
      return;
    }
    var pct = Math.round(sessao.i / tot * 100);
    area.innerHTML = '<div class="cs-top"><a class="btn btn-ghost btn-sm" href="#/cartoes">' + ico('esq') + ' Sair</a>' +
      '<div class="bar" role="progressbar" aria-label="Progresso da sessão" aria-valuemin="0" aria-valuemax="' + tot + '" aria-valuenow="' + sessao.i + '"><i style="width:' + pct + '%"></i></div>' +
      '<span class="mono small">' + (sessao.i + 1) + ' de ' + tot + '</span></div>' +
      '<div class="fc' + (sessao.mostrou ? ' virado' : '') + '" id="fc"><div class="fc-in">' +
      '<div class="fc-face fc-front" id="fc-f"' + (sessao.mostrou ? ' aria-hidden="true"' : '') + '><span class="fc-tag">Pergunta</span>' + texto(c.frente) + '</div>' +
      '<div class="fc-face fc-back" id="fc-b" tabindex="-1" role="group" aria-label="Resposta"' + (sessao.mostrou ? '' : ' aria-hidden="true"') + '><span class="fc-tag">Resposta</span>' + texto(c.verso) + '</div>' +
      '</div></div><div class="cs-acoes" id="cs-acoes">' + acoes(c) + '</div>';
    var b = document.getElementById('cs-virar'); if (b) b.focus({ preventScroll: true });
  }

  function virar() {
    var c = atual();
    if (!c || sessao.mostrou) return;
    sessao.mostrou = true;
    document.getElementById('fc').classList.add('virado');
    document.getElementById('fc-f').setAttribute('aria-hidden', 'true');
    var b = document.getElementById('fc-b'); b.removeAttribute('aria-hidden');
    document.getElementById('cs-acoes').innerHTML = acoes(c);
    b.focus({ preventScroll: true });
  }
  function avaliar(nota) {
    var c = atual();
    if (!c || !sessao.mostrou) return;
    var r = agendar(c, nota, Motor.hoje());
    c.caixa = r.caixa; c.proxima = r.proxima;
    sessao.cont[nota]++; sessao.i++; sessao.mostrou = false;
    Store.salvar();
    pintar();
  }
  App.acao('cart-virar', virar);
  App.acao('cart-nota', function (el) { avaliar(el.getAttribute('data-n')); });

  App.rota('/cartoes/estudar', function () {
    if (!sessao) { // link direto ou recarga: monta a fila dos que vencem hoje
      var fila = vencem(Motor.hoje());
      if (!fila.length) { App.ir('#/cartoes', true); return null; }
      sessao = { fila: Motor.embaralhar(fila, Motor.rng(Date.now())), i: 0, mostrou: false, cont: { errei: 0, dificil: 0, facil: 0 } };
    }
    return {
      titulo: 'Estudar cartões',
      html: '<div class="cs" id="cs-area" aria-live="off"></div>',
      montar: function () {
        pintar();
        var tecla = function (e) {
          if (e.ctrlKey || e.metaKey || e.altKey || document.querySelector('dialog[open]') || !sessao) return;
          var t = e.target, tag = t && t.tagName;
          if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
          if (e.key === ' ' || e.key === 'Spacebar') {
            if (tag === 'BUTTON' || tag === 'A') return; // o próprio botão focado trata o Espaço
            if (!sessao.mostrou && atual()) { e.preventDefault(); virar(); }
          } else if (e.key >= '1' && e.key <= '3' && sessao.mostrou) { e.preventDefault(); avaliar(['errei', 'dificil', 'facil'][e.key - 1]); }
        };
        document.addEventListener('keydown', tecla);
        return function () { document.removeEventListener('keydown', tecla); sessao = null; };
      }
    };
  }, 'cartoes');
})(this);
