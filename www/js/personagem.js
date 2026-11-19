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
        '<span class="hp-reflexo"></span><svg class="hp-estrela" viewBox="-12 -12 24 24" aria-hidden="true" focusable="false">' + ESTRELA + '</svg>';
    } else {
      palco = '<img class="hp-pose hp-logo" data-p="frente" src="marca/helma-retrato.svg" alt="" draggable="false">';
    }
    return '<div class="helma-p" data-pose="' + (o.pose || 'frente') + '" data-humor="' + (o.humor || 'neutro') + '" style="--hp:' + t + 'px' + (temPoses && root.HELMA_POSES.proporcao ? ';--hr:' + root.HELMA_POSES.proporcao : '') + '"' + (o.fala ? ' role="img" aria-label="Helma: ' + UI.esc(o.fala) + '"' : ' aria-hidden="true"') + '>' +
      '<div class="hp-palco"' + vars + '>' + palco + '<span class="hp-brilhos" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span></div>' +
      (o.fala ? '<p class="hp-fala">' + UI.esc(o.fala) + '</p>' : '') + '</div>';
  }

  function pose(el, p) { if (el && el.isConnected) el.setAttribute('data-pose', p); }
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
  var ORGULHO_MS = 3200; // igual à duração das animações .orgulho em animacoes.css
  function orgulho(el) {
    // Primeiro olha o trabalho (três-quartos), depois vira para o aluno: os dois quadros desenhados abrem a cena.
    pose(el, 'tres-quartos-dir');
    setTimeout(function () { pose(el, 'frente'); }, 120);
    clearTimeout(el._orgulho);
    el.classList.remove('sorrindo', 'orgulho'); void el.offsetWidth; el.classList.add('orgulho');
    // Ao fim, o sorriso aberto já virou o suave: segura o suave e volta ao ocioso.
    el._orgulho = setTimeout(function () { el.classList.remove('orgulho'); sorrir(el, 1500); }, ORGULHO_MS);
  }

  var Personagem = {
    html: html,
    piscar: piscar,
    sorrir: sorrir,
    /* acao: 'ola' (vira de perfil para a frente, pisca e sorri), 'feliz' (pulo, brilho dourado e sorriso),
       'orgulho' (ergue o queixo, sorriso aberto, piscadela com estrela e brilhos), 'apoio' (inclina e volta),
       'pensando' (olha de um lado para o outro até ser parada), 'ocioso' (pisca e sorri de vez em quando). */
    animar: function (el, acao) {
      if (!el || !el.isConnected) return;
      if (calmo() || !temPoses) {
        // Sem movimento: só a pose final; sem poses, só o efeito sobre o retrato da logo.
        pose(el, 'frente');
        if (!calmo() && (acao === 'feliz' || acao === 'apoio' || acao === 'ola' || acao === 'orgulho')) classeTemporaria(el, 'hp-' + (acao === 'orgulho' ? 'feliz' : acao), 900);
        // Expressão não é movimento: o rosto orgulhoso e o sorriso ficam mesmo com movimento reduzido.
        if (temPoses && acao === 'orgulho') classeTemporaria(el, 'orgulho-calmo', 1800);
        else if (acao === 'feliz') sorrir(el, 1600);
        return;
      }
      if (acao === 'ola') sequencia(el, ['perfil-dir', 'tres-quartos-dir', 'frente'], 110).then(function () { setTimeout(function () { piscar(el); setTimeout(function () { sorrir(el, 1700); }, 350); }, 250); Personagem.animar(el, 'ocioso'); });
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
