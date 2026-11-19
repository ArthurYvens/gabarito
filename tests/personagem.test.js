/* Curva da animação de orgulho: node tests/personagem.test.js */
'use strict';
const assert = require('assert');
const { Personagem: P } = require('../www/js/personagem.js');

// passa pelas batidas, não passa do ponto entre elas e fica parada antes/depois
const pts = [[0, 0], [1, 10], [2, 4], [3, 4], [4, 9]];
const c = P._curva(pts);
pts.forEach(([t, v]) => assert.ok(Math.abs(c(t) - v) < 1e-9, 'passa pela batida ' + t));
for (let t = 0; t <= 4; t += 0.01) {
  const k = Math.min(3, Math.floor(t)), lo = Math.min(pts[k][1], pts[k + 1][1]), hi = Math.max(pts[k][1], pts[k + 1][1]);
  assert.ok(c(t) >= lo - 1e-9 && c(t) <= hi + 1e-9, 'sem exagero escondido em t=' + t.toFixed(2));
}
assert.ok(Math.abs(c(2.5) - 4) < 1e-9, 'trecho parado continua parado');
assert.strictEqual(c(-1), 0); assert.strictEqual(c(9), 9);

// a cena termina no repouso: cancelar a animação no fim não dá salto
const cena = P._cena(), fim = P._duracao;
const repouso = { ty: 0, rot: 0, sx: 1, sy: 1, bocaOp: 0, suave: 0, pisca: 0, aberto: 0, alegria: 0, alegriaPisca: 0, ruborOp: 0, estOp: 0 };
Object.entries(repouso).forEach(([k, v]) => assert.ok(Math.abs(cena[k](fim) - v) < 1e-9, 'repouso em ' + k));
// e nenhum canal produz valor inválido em nenhum quadro
Object.entries(cena).forEach(([k, f]) => { for (let t = 0; t <= fim; t += 1 / 60) assert.ok(Number.isFinite(f(t)), k + ' finito'); });
// a piscadela é no olho esquerdo dela: fechado no meio da cena, enquanto o outro só aperta
assert.ok(cena.pisca(1.4) === 1 && cena.aberto(1.4) < 0.5, 'piscadela num olho só');
console.log('personagem.test.js ok');
