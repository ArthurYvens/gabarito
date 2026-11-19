/* Personagem: a Helma animada. As cinco poses (perfil esquerdo ao perfil direito) ficam empilhadas e a animação
   troca a pose visível; o piscar é uma pálpebra desenhada por cima dos olhos da pose de frente.
   As poses são geradas por tools/personagem.js em www/marca/personagem/; sem elas, usa o retrato da logo. */
(function (root) {
  'use strict';
  var POSES = ['perfil-esq', 'tres-quartos-esq', 'frente', 'tres-quartos-dir', 'perfil-dir'];
  var temPoses = !!root.HELMA_POSES; // definido por www/marca/personagem/poses.js quando as poses existem
  var calmo = function () { try { return root.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } };

  // Sorriso desenhado por cima da boca da pose de frente (o marfim cobre a boca neutra).
  var SORRISO = '<rect width="100" height="46" rx="20" fill="#faf6ed"/><path d="M4 12Q50 37 96 12Q50 21 4 12Z" fill="#2a1d45"/>' +
    '<path d="M1.5 8.5Q3.5 11.5 7 13M98.5 8.5Q96.5 11.5 93 13M38 35Q50 40 62 35" fill="none" stroke="#2a1d45" stroke-width="3.2" stroke-linecap="round"/>';

  /* opcoes: { tamanho: px, humor: 'ola' | 'feliz' | 'piscadinha' | 'apoio' | 'pensando' | 'neutro', fala: texto, pose: inicial } */
  function html(o) {
    o = o || {};
    var t = o.tamanho || 120;
    var palco;
    if (temPoses) {
      var olhos = root.HELMA_POSES.olhos || {}, boca = root.HELMA_POSES.boca;
      palco = POSES.map(function (p) { return '<img class="hp-pose" data-p="' + p + '" src="marca/personagem/' + p + '.svg" alt="" draggable="false">'; }).join('') +
        '<span class="hp-palpebras" style="--ox1:' + (olhos.x1 || 38) + '%;--ox2:' + (olhos.x2 || 62) + '%;--oy:' + (olhos.y || 44) + '%;--ow:' + (olhos.w || 9) + '%"><i></i><i></i></span>' +
        (boca ? '<svg class="hp-sorriso" viewBox="0 0 100 46" style="left:' + boca.x + '%;top:' + boca.y + '%;width:' + boca.w + '%" aria-hidden="true" focusable="false">' + SORRISO + '</svg>' : '');
    } else {
      palco = '<img class="hp-pose hp-logo" data-p="frente" src="marca/helma-retrato.svg" alt="" draggable="false">';
    }
    return '<div class="helma-p" data-pose="' + (o.pose || 'frente') + '" data-humor="' + (o.humor || 'neutro') + '" style="--hp:' + t + 'px' + (temPoses && root.HELMA_POSES.proporcao ? ';--hr:' + root.HELMA_POSES.proporcao : '') + '"' + (o.fala ? ' role="img" aria-label="Helma: ' + UI.esc(o.fala) + '"' : ' aria-hidden="true"') + '>' +
      '<div class="hp-palco">' + palco + '<span class="hp-brilhos" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span></div>' +
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
  function sorrir(el, ms) { if (el && el.isConnected && el.getAttribute('data-pose') === 'frente') classeTemporaria(el, 'sorrindo', ms || 1600); }
  function piscadinha(el) {
    if (!el || !el.isConnected || el.getAttribute('data-pose') !== 'frente') return;
    sorrir(el, 1900);
    setTimeout(function () { if (el.isConnected) classeTemporaria(el, 'piscadinha', 450); }, 300);
  }
  function classeTemporaria(el, c, ms) {
    el.classList.remove(c); void el.offsetWidth; el.classList.add(c);
    setTimeout(function () { el.classList.remove(c); }, ms);
  }

  var Personagem = {
    html: html,
    piscar: piscar,
    sorrir: sorrir,
    piscadinha: piscadinha,
    /* acao: 'ola' (vira de perfil para a frente, pisca e sorri), 'feliz' (pulo, brilho dourado e sorriso),
       'piscadinha' (piscadinha com sorriso), 'apoio' (inclina e volta),
       'pensando' (olha de um lado para o outro até ser parada), 'ocioso' (pisca de vez em quando). */
    animar: function (el, acao) {
      if (!el || !el.isConnected) return;
      if (calmo() || !temPoses) {
        // Sem movimento: só a pose final; sem poses, só o efeito sobre o retrato da logo.
        pose(el, 'frente');
        if (!calmo() && (acao === 'feliz' || acao === 'apoio' || acao === 'ola')) classeTemporaria(el, 'hp-' + acao, 900);
        if (acao === 'feliz' || acao === 'piscadinha') sorrir(el, 1600); // sorriso não é movimento: fica mesmo com movimento reduzido
        return;
      }
      if (acao === 'ola') sequencia(el, ['perfil-dir', 'tres-quartos-dir', 'frente'], 110).then(function () { setTimeout(function () { piscar(el); setTimeout(function () { sorrir(el, 1700); }, 350); }, 250); Personagem.animar(el, 'ocioso'); });
      else if (acao === 'feliz') { pose(el, 'frente'); classeTemporaria(el, 'hp-feliz', 900); sorrir(el, 1700); }
      else if (acao === 'piscadinha') { pose(el, 'frente'); classeTemporaria(el, 'hp-feliz', 900); setTimeout(function () { piscadinha(el); }, 350); }
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
            if (el.classList.contains('sorrindo')) piscar(el);
            else if (sorte < 0.05) piscadinha(el);
            else if (sorte < 0.17) sorrir(el, 1500);
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
        Personagem.animar(el, ['ola', 'feliz', 'piscadinha', 'apoio', 'pensando'].indexOf(h) >= 0 ? h : 'ocioso');
        if (h === 'feliz' || h === 'apoio' || h === 'piscadinha') setTimeout(function () { Personagem.animar(el, 'ocioso'); }, 1200);
      });
    }
  };
  root.Personagem = Personagem;
})(this);
