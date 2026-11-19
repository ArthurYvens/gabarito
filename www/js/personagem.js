/* Personagem: a Helma animada. As cinco poses (perfil esquerdo ao perfil direito) ficam empilhadas e a animação
   troca a pose visível; piscar, sorrir e o "orgulho" são camadas desenhadas por cima da pose de frente.
   As poses são geradas por tools/personagem.js em www/marca/personagem/; sem elas, usa o retrato da logo.
   Direção da animação de orgulho: design/direcao-animacao-orgulho.md */
(function (root) {
  'use strict';
  var POSES = ['perfil-esq', 'tres-quartos-esq', 'frente', 'tres-quartos-dir', 'perfil-dir'];
  var temPoses = !!root.HELMA_POSES; // definido por www/marca/personagem/poses.js quando as poses existem
  var calmo = function () { try { return root.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } };
  var INDIGO = '#2a1d45', MARFIM = '#faf6ed';

  // Bocas desenhadas sobre a boca da pose de frente (o retângulo marfim cobre a boca neutra).
  var CAPA = '<rect width="100" height="46" rx="20" fill="' + MARFIM + '"/>';
  var SORRISO = CAPA + '<path d="M4 12Q50 37 96 12Q50 21 4 12Z" fill="' + INDIGO + '"/>' +
    '<path d="M1.5 8.5Q3.5 11.5 7 13M98.5 8.5Q96.5 11.5 93 13M38 35Q50 40 62 35" fill="none" stroke="' + INDIGO + '" stroke-width="3.2" stroke-linecap="round"/>';
  // Sorriso aberto: "D" com os dentes de cima, língua sugerida e vincos nos cantos.
  var SORRISO_GRANDE = CAPA + '<path d="M3 9Q50 4 97 9Q90 42 50 43Q10 42 3 9Z" fill="' + INDIGO + '"/>' +
    '<path d="M9 11.5Q50 7.5 91 11.5Q87 20 50 21Q13 20 9 11.5Z" fill="#fff"/>' +
    '<path d="M30 37Q50 27 70 37Q61 41.5 50 41.5Q39 41.5 30 37Z" fill="#c9636f"/>' +
    '<path d="M.8 4.5Q2 8.5 5.5 11M99.2 4.5Q98 8.5 94.5 11" fill="none" stroke="' + INDIGO + '" stroke-width="3" stroke-linecap="round"/>';
  var ESTRELA = '<path d="M0-11L2.6-2.6 11 0 2.6 2.6 0 11-2.6 2.6-11 0-2.6-2.6Z" fill="#C48628" stroke="' + INDIGO + '" stroke-width="1.4" stroke-linejoin="round"/><circle r="2.2" fill="#fff"/>';

  function boca(classe, b, desenho) {
    return '<svg class="' + classe + '" viewBox="0 0 100 46" style="left:' + b.x + '%;top:' + b.y + '%;width:' + b.w + '%" aria-hidden="true" focusable="false">' + desenho + '</svg>';
  }

  /* opcoes: { tamanho: px, humor: 'ola' | 'feliz' | 'orgulho' | 'apoio' | 'pensando' | 'neutro', fala: texto, pose: inicial } */
  function html(o) {
    o = o || {};
    var t = o.tamanho || 120;
    var palco, vars = '';
    if (temPoses) {
      var olhos = root.HELMA_POSES.olhos || {}, b = root.HELMA_POSES.boca;
      // Posição dos olhos no palco: pálpebras, olhos de alegria, rubor, reflexo e estrela partem daqui.
      vars = ' style="--ox1:' + (olhos.x1 || 38) + '%;--ox2:' + (olhos.x2 || 62) + '%;--oy:' + (olhos.y || 44) + '%;--ow:' + (olhos.w || 9) + '%"';
      palco = POSES.map(function (p) { return '<img class="hp-pose" data-p="' + p + '" src="marca/personagem/' + p + '.svg" alt="" draggable="false">'; }).join('') +
        '<span class="hp-rubor"><i></i><i></i></span><span class="hp-palpebras"><i></i><i></i></span><span class="hp-alegria"><i></i><i></i></span>' +
        (b ? boca('hp-sorriso', b, SORRISO) + boca('hp-sorriso-grande', b, SORRISO_GRANDE) : '') +
        '<span class="hp-reflexo"><i></i></span><svg class="hp-estrela" viewBox="-12 -12 24 24" aria-hidden="true" focusable="false">' + ESTRELA + '</svg>';
    } else {
      palco = '<img class="hp-pose hp-logo" data-p="frente" src="marca/helma-retrato.svg" alt="" draggable="false">';
    }
    return '<div class="helma-p" data-pose="' + (o.pose || 'frente') + '" data-humor="' + (o.humor || 'neutro') + '" style="--hp:' + t + 'px' + (temPoses && root.HELMA_POSES.proporcao ? ';--hr:' + root.HELMA_POSES.proporcao : '') + '"' + (o.fala ? ' role="img" aria-label="Helma: ' + UI.esc(o.fala) + '"' : ' aria-hidden="true"') + '>' +
      '<div class="hp-palco"' + vars + '>' + palco + '<span class="hp-brilhos" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span></div>' +
      (o.fala ? '<p class="hp-fala">' + UI.esc(o.fala) + '</p>' : '') + '</div>';
  }

  function pose(el, p) {
    if (!el || !el.isConnected) return;
    var antes = el.getAttribute('data-pose');
    if (antes === p) return;
    // A pose que sai fica inteira por baixo enquanto a nova aparece: troca suave, sem o fundo vazar.
    var velha = el.querySelector('.hp-pose[data-p="' + antes + '"]');
    if (velha) { velha.classList.add('saindo'); clearTimeout(velha._saida); velha._saida = setTimeout(function () { velha.classList.remove('saindo'); }, 110); }
    el.setAttribute('data-pose', p);
  }
  function sequencia(el, poses, intervalo) {
    return new Promise(function (ok) {
      var i = 0;
      (function passo() {
        if (!el.isConnected || i >= poses.length) return ok();
        pose(el, poses[i++]);
        setTimeout(passo, intervalo);
      })();
    });
  }
  function piscar(el) {
    if (!el || !el.isConnected || el.getAttribute('data-pose') !== 'frente') return;
    el.classList.add('piscando');
    setTimeout(function () { el.classList.remove('piscando'); }, 150);
  }
  function classeTemporaria(el, c, ms) {
    el.classList.remove(c); void el.offsetWidth; el.classList.add(c);
    setTimeout(function () { el.classList.remove(c); }, ms);
  }
  function sorrir(el, ms) { if (el && el.isConnected && el.getAttribute('data-pose') === 'frente') classeTemporaria(el, 'sorrindo', ms || 1600); }

  /* ---------- Orgulho: animação gerada quadro a quadro (60 por segundo) ----------
     Cada canal é uma lista de batidas [segundo, valor] da direção; entre elas, uma curva suave
     (Hermite monotônica: não passa do valor entre duas batidas; todo exagero é uma batida explícita). */
  function curva(pts) {
    var n = pts.length, m = [], d = [], i;
    for (i = 0; i < n - 1; i++) d.push((pts[i + 1][1] - pts[i][1]) / (pts[i + 1][0] - pts[i][0]));
    m[0] = 0; m[n - 1] = 0; // começa e termina parado
    for (i = 1; i < n - 1; i++) m[i] = d[i - 1] * d[i] <= 0 ? 0 : (d[i - 1] + d[i]) / 2;
    for (i = 0; i < n - 1; i++) {
      if (d[i] === 0) { m[i] = 0; m[i + 1] = 0; continue; }
      var a = m[i] / d[i], b = m[i + 1] / d[i], h = a * a + b * b;
      if (h > 9) { var k = 3 / Math.sqrt(h); m[i] = k * a * d[i]; m[i + 1] = k * b * d[i]; }
    }
    return function (t) {
      if (t <= pts[0][0]) return pts[0][1];
      if (t >= pts[n - 1][0]) return pts[n - 1][1];
      var j = 0; while (t > pts[j + 1][0]) j++;
      var x = pts[j + 1][0] - pts[j][0], s = (t - pts[j][0]) / x, s2 = s * s, s3 = s2 * s;
      return (2 * s3 - 3 * s2 + 1) * pts[j][1] + (s3 - 2 * s2 + s) * x * m[j] + (3 * s2 - 2 * s3) * pts[j + 1][1] + (s3 - s2) * x * m[j + 1];
    };
  }
  var CENA_S = 5.1, FPS = 60; // 3,4 s de cena + sorriso suave até 5,1 s (termina no estado de repouso)
  var BATIDAS = {
    // corpo (palco): olha o trabalho, vira, antecipa, ergue o queixo, aceno na piscadela, risada, respira, assenta como mola
    ty: [[0, 0], [0.1, 0.6], [0.16, 0.4], [0.34, 2], [0.6, -5.6], [0.75, -5], [1, -5.1], [1.1, -4.5], [1.24, -5.2], [1.34, -5], [1.62, -5], [1.85, -6.3], [1.98, -4.8], [2.1, -5.9], [2.22, -5], [2.6, -5.4], [2.85, -5], [3.15, 0.9], [3.3, -0.2], [3.4, 0]],
    rot: [[0, 0], [0.1, 1.5], [0.16, 1.2], [0.34, 0.5], [0.6, -5.6], [0.75, -5], [1, -5], [1.1, -6.6], [1.24, -5], [1.34, -5.3], [1.45, -5], [1.85, -4.4], [1.98, -5.1], [2.1, -4.6], [2.22, -5], [2.85, -5], [3.15, 0.6], [3.3, -0.15], [3.4, 0]],
    sx: [[0.16, 1], [0.34, 1.01], [0.6, 1.035], [0.75, 1.03], [1.85, 1.036], [1.98, 1.03], [2.1, 1.034], [2.22, 1.03], [2.6, 1.033], [2.85, 1.03], [3.15, 0.995], [3.4, 1]],
    sy: [[0.16, 1], [0.34, 0.97], [0.6, 1.035], [0.75, 1.03], [1.85, 1.036], [1.98, 1.03], [2.1, 1.034], [2.22, 1.03], [2.6, 1.033], [2.85, 1.03], [3.15, 0.995], [3.4, 1]],
    // sorriso aberto: cresce passando do ponto, assenta, pulsa na risada, fecha sólido e some num corte
    bocaOp: [[0.3, 0], [0.38, 1], [2.95, 1], [2.97, 0]],
    bocaX: [[0.3, 0.6], [0.38, 0.75], [0.62, 1.07], [0.78, 0.98], [0.9, 1], [1.85, 1], [1.92, 1.05], [1.98, 1], [2.1, 1.04], [2.17, 1], [2.8, 1], [2.95, 0.82]],
    bocaY: [[0.3, 0.6], [0.38, 0.75], [0.62, 1.07], [0.78, 0.98], [0.9, 1], [1.85, 1], [1.92, 1.05], [1.98, 1], [2.1, 1.04], [2.17, 1], [2.8, 1], [2.95, 0.6]],
    suave: [[2.85, 0], [2.92, 1], [4.9, 1], [5.1, 0]],
    // pálpebras de cima (0 = aberto, 1 = fechado): o olho esquerdo dela pisca; o direito aperta junto e brilha
    pisca: [[0.34, 0], [0.66, 0.36], [1, 0.36], [1.06, 0.62], [1.12, 1], [1.62, 1], [1.72, 0.6], [1.84, 0.36], [2.42, 0.36], [2.47, 1], [2.53, 1], [2.6, 0.36], [2.92, 0.36], [3.4, 0.22], [4.9, 0.22], [5.1, 0]],
    aberto: [[0.34, 0], [0.66, 0.36], [1, 0.36], [1.12, 0.45], [1.62, 0.45], [1.84, 0.36], [2.42, 0.36], [2.47, 1], [2.53, 1], [2.6, 0.36], [2.92, 0.36], [3.4, 0.22], [4.9, 0.22], [5.1, 0]],
    // pálpebras de baixo (olhos de alegria); a do olho que pisca sai enquanto ele está fechado
    alegriaPisca: [[0.34, 0], [0.66, 1], [1, 1], [1.08, 0], [1.66, 0], [1.84, 1], [2.92, 1], [3.4, 0]],
    alegria: [[0.34, 0], [0.66, 1], [2.92, 1], [3.4, 0]],
    ruborOp: [[0.34, 0], [0.8, 1], [2.92, 1], [3.4, 0]],
    ruborS: [[0.34, 0.9], [0.8, 1], [1.85, 1], [1.95, 1.14], [2.1, 1], [3.4, 1]],
    // estrela no olho direito dela: nasce girando, passa do tamanho, assenta, cintila de novo e some
    estOp: [[1.04, 0], [1.08, 1], [1.86, 1], [1.94, 0]],
    estS: [[1.04, 0], [1.2, 1.25], [1.33, 0.95], [1.47, 1], [1.64, 1], [1.72, 1.18], [1.8, 0.9], [1.94, 0]],
    estR: [[1.04, -45], [1.2, 0], [1.33, 6], [1.47, 9], [1.64, 10], [1.72, 20], [1.8, 26], [1.94, 40]],
    reflexo: [[1.15, -130], [1.5, 430]]
  };
  var CENA = null;
  function cena() {
    if (!CENA) { CENA = {}; Object.keys(BATIDAS).forEach(function (k) { CENA[k] = curva(BATIDAS[k]); }); }
    return CENA;
  }
  function tocar(alvo, props) {
    if (!alvo || !alvo.animate) return null;
    var n = Math.ceil(CENA_S * FPS), quadros = [];
    for (var i = 0; i <= n; i++) {
      var t = i / n * CENA_S, q = { offset: i / n };
      for (var k in props) q[k] = props[k](t);
      quadros.push(q);
    }
    return alvo.animate(quadros, { duration: CENA_S * 1000, easing: 'linear', fill: 'forwards' });
  }
  function orgulho(el) {
    var c = cena(), f = function (v, d) { return v.toFixed(d || 3); };
    var um = function (s) { return el.querySelector(s); }, todos = function (s) { return el.querySelectorAll(s); };
    (el._cena || []).forEach(function (a) { a.cancel(); });
    clearTimeout(el._orgulho); clearTimeout(el._vira);
    el.classList.remove('sorrindo', 'orgulho'); void el.offsetWidth; el.classList.add('orgulho');
    // Primeiro olha o trabalho (três-quartos), depois vira para o aluno: os dois quadros desenhados abrem a cena.
    pose(el, 'tres-quartos-dir');
    el._vira = setTimeout(function () { pose(el, 'frente'); }, 140);
    var tampa = function (curv) { return { transform: function (t) { return 'translate(-50%,-50%) scaleY(' + f(curv(t)) + ')'; } }; };
    var baixo = function (curv) { return { transform: function (t) { return 'translateX(-50%) scaleY(' + f(curv(t)) + ')'; } }; };
    var bochecha = { opacity: function (t) { return f(c.ruborOp(t)); }, transform: function (t) { return 'translate(-50%,-50%) scale(' + f(c.ruborS(t)) + ')'; } };
    var p = todos('.hp-palpebras i'), a = todos('.hp-alegria i'), r = todos('.hp-rubor i');
    el._cena = [
      tocar(um('.hp-palco'), { transform: function (t) { return 'translateY(' + f(c.ty(t)) + '%) rotate(' + f(c.rot(t)) + 'deg) scale(' + f(c.sx(t), 4) + ',' + f(c.sy(t), 4) + ')'; } }),
      tocar(um('.hp-sorriso-grande'), { opacity: function (t) { return f(c.bocaOp(t)); }, transform: function (t) { return 'scale(' + f(c.bocaX(t)) + ',' + f(c.bocaY(t)) + ')'; } }),
      tocar(um('.hp-sorriso'), { opacity: function (t) { return f(c.suave(t)); } }),
      tocar(p[0], tampa(c.aberto)), // olho direito dela (à esquerda da tela): aberto, com estrela e reflexo
      tocar(p[1], tampa(c.pisca)),  // olho esquerdo dela (à direita da tela): a piscadela
      tocar(a[0], baixo(c.alegria)),
      tocar(a[1], baixo(c.alegriaPisca)),
      tocar(r[0], bochecha), tocar(r[1], bochecha),
      tocar(um('.hp-estrela'), { opacity: function (t) { return f(c.estOp(t)); }, transform: function (t) { return 'translate(-50%,-50%) scale(' + f(c.estS(t)) + ') rotate(' + f(c.estR(t), 1) + 'deg)'; } }),
      tocar(um('.hp-reflexo i'), { transform: function (t) { return 'translateX(' + f(c.reflexo(t), 1) + '%) rotate(28deg)'; } })
    ].filter(Boolean);
    // O último quadro é o estado de repouso: cancelar no fim não dá salto.
    el._orgulho = setTimeout(function () { el.classList.remove('orgulho'); (el._cena || []).forEach(function (x) { x.cancel(); }); el._cena = null; }, CENA_S * 1000);
  }

  var Personagem = {
    html: html,
    piscar: piscar,
    sorrir: sorrir,
    _curva: curva, _cena: cena, _duracao: CENA_S, // para os testes
    /* acao: 'ola' (vira de perfil para a frente, pisca e sorri), 'feliz' (pulo, brilho dourado e sorriso),
       'orgulho' (olha o trabalho, vira, sorriso aberto, piscadela com estrela, reflexo e brilhos, risada),
       'apoio' (inclina e volta), 'pensando' (olha de um lado para o outro até ser parada), 'ocioso' (pisca e sorri de vez em quando). */
    animar: function (el, acao) {
      if (!el || !el.isConnected) return;
      if (calmo() || !temPoses) {
        // Sem movimento: só a pose final; sem poses, só o efeito sobre o retrato da logo.
        el.setAttribute('data-pose', 'frente');
        if (!calmo() && (acao === 'feliz' || acao === 'apoio' || acao === 'ola' || acao === 'orgulho')) classeTemporaria(el, 'hp-' + (acao === 'orgulho' ? 'feliz' : acao), 900);
        // Expressão não é movimento: o rosto orgulhoso e o sorriso ficam mesmo com movimento reduzido.
        if (temPoses && acao === 'orgulho') classeTemporaria(el, 'orgulho-calmo', 1800);
        else if (acao === 'feliz') sorrir(el, 1600);
        return;
      }
      if (acao === 'ola') sequencia(el, ['perfil-dir', 'tres-quartos-dir', 'frente'], 130).then(function () { setTimeout(function () { piscar(el); setTimeout(function () { sorrir(el, 1700); }, 350); }, 250); Personagem.animar(el, 'ocioso'); });
      else if (acao === 'feliz') { pose(el, 'frente'); classeTemporaria(el, 'hp-feliz', 900); sorrir(el, 1700); }
      else if (acao === 'orgulho') orgulho(el);
      else if (acao === 'apoio') sequencia(el, ['tres-quartos-esq', 'tres-quartos-esq', 'frente'], 260).then(function () { classeTemporaria(el, 'hp-apoio', 700); piscar(el); });
      else if (acao === 'pensando') {
        var lados = ['tres-quartos-esq', 'frente', 'tres-quartos-dir', 'frente'], k = 0;
        clearInterval(el._pensando);
        el._pensando = setInterval(function () { if (!el.isConnected) return clearInterval(el._pensando); pose(el, lados[k++ % lados.length]); }, 700);
      } else if (acao === 'parar') { clearInterval(el._pensando); pose(el, 'frente'); }
      else if (acao === 'ocioso') {
        clearTimeout(el._ocioso);
        (function agenda() {
          el._ocioso = setTimeout(function () {
            if (!el.isConnected) return;
            var sorte = Math.random();
            if (el.classList.contains('orgulho')) { /* não interrompe a cena */ }
            else if (el.classList.contains('sorrindo')) piscar(el);
            else if (sorte < 0.12) sorrir(el, 1500);
            else { piscar(el); if (sorte > 0.75) setTimeout(function () { piscar(el); }, 260); }
            agenda();
          }, 2600 + Math.random() * 3200);
        })();
      }
    },
    /* Anima todas as personagens da tela conforme o data-humor de cada uma. */
    acordar: function (raiz) {
      Array.prototype.forEach.call((raiz || document).querySelectorAll('.helma-p:not([data-acordada])'), function (el) {
        el.setAttribute('data-acordada', '1');
        var h = el.getAttribute('data-humor');
        Personagem.animar(el, ['ola', 'feliz', 'orgulho', 'apoio', 'pensando'].indexOf(h) >= 0 ? h : 'ocioso');
        if (h === 'feliz' || h === 'apoio' || h === 'orgulho') setTimeout(function () { Personagem.animar(el, 'ocioso'); }, 1200);
      });
    }
  };
  root.Personagem = Personagem;
})(this);
