/* Personagem: a Helma animada. As cinco poses (perfil esquerdo ao perfil direito) ficam empilhadas e a animação
   troca a pose visível; o piscar é uma pálpebra desenhada por cima dos olhos da pose de frente.
   As poses são geradas por tools/personagem.js em www/marca/personagem/; sem elas, usa o retrato da logo. */
(function (root) {
  'use strict';
  var POSES = ['perfil-esq', 'tres-quartos-esq', 'frente', 'tres-quartos-dir', 'perfil-dir'];
  var temPoses = !!root.HELMA_POSES; // definido por www/marca/personagem/poses.js quando as poses existem
  var calmo = function () { try { return root.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } };

  /* opcoes: { tamanho: px, humor: 'ola' | 'feliz' | 'apoio' | 'pensando' | 'neutro', fala: texto, pose: inicial } */
  function html(o) {
    o = o || {};
    var t = o.tamanho || 120;
    var palco;
    if (temPoses) {
      var olhos = root.HELMA_POSES.olhos || {};
      palco = POSES.map(function (p) { return '<img class="hp-pose" data-p="' + p + '" src="marca/personagem/' + p + '.svg" alt="" draggable="false">'; }).join('') +
        '<span class="hp-palpebras" style="--ox1:' + (olhos.x1 || 38) + '%;--ox2:' + (olhos.x2 || 62) + '%;--oy:' + (olhos.y || 44) + '%;--ow:' + (olhos.w || 9) + '%"><i></i><i></i></span>';
    } else {
      palco = '<img class="hp-pose hp-logo" data-p="frente" src="marca/helma-retrato.svg" alt="" draggable="false">';
    }
    return '<div class="helma-p" data-pose="' + (o.pose || 'frente') + '" data-humor="' + (o.humor || 'neutro') + '" style="--hp:' + t + 'px" role="img" aria-label="Helma' + (o.fala ? ': ' + UI.esc(o.fala) : '') + '">' +
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
  function classeTemporaria(el, c, ms) {
    el.classList.remove(c); void el.offsetWidth; el.classList.add(c);
    setTimeout(function () { el.classList.remove(c); }, ms);
  }

  var Personagem = {
    html: html,
    piscar: piscar,
    /* acao: 'ola' (vira de perfil para a frente e pisca), 'feliz' (pulo e brilho dourado), 'apoio' (inclina e volta),
       'pensando' (olha de um lado para o outro até ser parada), 'ocioso' (pisca de vez em quando). */
    animar: function (el, acao) {
      if (!el || !el.isConnected) return;
      if (calmo() || !temPoses) {
        // Sem movimento: só a pose final; sem poses, só o efeito sobre o retrato da logo.
        pose(el, 'frente');
        if (!calmo() && (acao === 'feliz' || acao === 'apoio' || acao === 'ola')) classeTemporaria(el, 'hp-' + acao, 900);
        return;
      }
      if (acao === 'ola') sequencia(el, ['perfil-dir', 'tres-quartos-dir', 'frente'], 110).then(function () { setTimeout(function () { piscar(el); }, 250); Personagem.animar(el, 'ocioso'); });
      else if (acao === 'feliz') { pose(el, 'frente'); classeTemporaria(el, 'hp-feliz', 900); setTimeout(function () { piscar(el); }, 500); }
      else if (acao === 'apoio') sequencia(el, ['tres-quartos-esq', 'tres-quartos-esq', 'frente'], 260).then(function () { classeTemporaria(el, 'hp-apoio', 700); piscar(el); });
      else if (acao === 'pensando') {
        var lados = ['tres-quartos-esq', 'frente', 'tres-quartos-dir', 'frente'], k = 0;
        clearInterval(el._pensando);
        el._pensando = setInterval(function () { if (!el.isConnected) return clearInterval(el._pensando); pose(el, lados[k++ % lados.length]); }, 700);
      } else if (acao === 'parar') { clearInterval(el._pensando); pose(el, 'frente'); }
      else if (acao === 'ocioso') {
        clearTimeout(el._ocioso);
        (function agenda() {
          el._ocioso = setTimeout(function () { if (!el.isConnected) return; piscar(el); if (Math.random() < 0.3) setTimeout(function () { piscar(el); }, 260); agenda(); }, 2600 + Math.random() * 3200);
        })();
      }
    },
    /* Anima todas as personagens da tela conforme o data-humor de cada uma. */
    acordar: function (raiz) {
      Array.prototype.forEach.call((raiz || document).querySelectorAll('.helma-p:not([data-acordada])'), function (el) {
        el.setAttribute('data-acordada', '1');
        var h = el.getAttribute('data-humor');
        Personagem.animar(el, h === 'ola' ? 'ola' : h === 'feliz' ? 'feliz' : h === 'apoio' ? 'apoio' : h === 'pensando' ? 'pensando' : 'ocioso');
        if (h === 'feliz' || h === 'apoio') setTimeout(function () { Personagem.animar(el, 'ocioso'); }, 1200);
      });
    }
  };
  root.Personagem = Personagem;
})(this);
