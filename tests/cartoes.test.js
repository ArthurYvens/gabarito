/* node tests/cartoes.test.js */
'use strict';
const assert = require('assert');
const path = require('path');
const C = require(path.join(__dirname, '..', 'www', 'js', 'views-cartoes.js'));

const H = '2026-11-16';
const ag = (caixa, nota, hoje) => C.agendar({ caixa, proxima: H }, nota, hoje || H);

// errei: volta à caixa 0 e revisa amanhã, de qualquer caixa
assert.deepStrictEqual(ag(4, 'errei'), { caixa: 0, proxima: '2026-11-17' });
assert.deepStrictEqual(ag(0, 'errei'), { caixa: 0, proxima: '2026-11-17' });

// difícil: mantém a caixa e usa INTERVALOS[caixa] (1, 3, 7, 15, 30, 60)
assert.deepStrictEqual(ag(0, 'dificil'), { caixa: 0, proxima: '2026-11-17' });
assert.deepStrictEqual(ag(2, 'dificil'), { caixa: 2, proxima: '2026-11-23' });
assert.deepStrictEqual(ag(5, 'dificil'), { caixa: 5, proxima: '2027-01-15' });

// fácil: sobe uma caixa e usa o intervalo da nova
assert.deepStrictEqual(ag(0, 'facil'), { caixa: 1, proxima: '2026-11-19' });
assert.deepStrictEqual(ag(3, 'facil'), { caixa: 4, proxima: '2026-12-16' });

// teto da caixa
assert.deepStrictEqual(ag(5, 'facil'), { caixa: 5, proxima: '2027-01-15' });
assert.strictEqual(ag(9, 'facil').caixa, 5);

// virada de mês e de ano
assert.deepStrictEqual(ag(0, 'errei', '2026-11-30'), { caixa: 0, proxima: '2026-12-01' });
assert.deepStrictEqual(ag(1, 'dificil', '2026-12-30'), { caixa: 1, proxima: '2027-01-02' });
assert.deepStrictEqual(ag(0, 'errei', '2028-02-28'), { caixa: 0, proxima: '2028-02-29' }); // bissexto

// não altera o cartão e recusa nota desconhecida
const c = { caixa: 2, proxima: H, frente: 'f' };
C.agendar(c, 'facil', H);
assert.deepStrictEqual(c, { caixa: 2, proxima: H, frente: 'f' });
assert.throws(() => C.agendar(c, 'otimo', H));
assert.strictEqual(C.agendar({}, 'facil', H).caixa, 1); // cartão sem caixa conta como 0

assert.strictEqual(C.diasEntre('2026-11-30', '2026-12-02'), 2);

// id do cartão: só [a-z0-9-], no máximo 60 caracteres, estável
assert.strictEqual(C.idDaQuestao('enem-2023-001'), 'q-enem-2023-001');
for (const q of ['A_b/c', 'x'.repeat(200), 'x'.repeat(58), 'Português ç']) {
  const id = C.idDaQuestao(q);
  assert.ok(/^[a-z0-9-]{1,60}$/.test(id), id);
  assert.strictEqual(id, C.idDaQuestao(q));
}
assert.notStrictEqual(C.idDaQuestao('x'.repeat(200) + 'a'), C.idDaQuestao('x'.repeat(200) + 'b'));

// cartão a partir da questão
const mult = { id: 'm1', tipo: 'multipla', enunciado: 'e'.repeat(700), alternativas: ['um', 'dois', 'três', 'quatro'], resposta: 2, explicacao: { resumo: 'Porque sim.' } };
const m = C.montarDaQuestao(mult, '  lembrar disto ');
assert.ok(m.frente.startsWith('e'.repeat(500) + '…\n\nA) um\nB) dois\nC) três\nD) quatro'));
assert.strictEqual(m.verso, 'Resposta: C) três\n\nPorque sim.\n\nMinha anotação: lembrar disto');
const ce = C.montarDaQuestao({ id: 'c1', tipo: 'certo-errado', enunciado: 'Item.', resposta: false }, '');
assert.deepStrictEqual(ce, { frente: 'Item.', verso: 'Resposta: Errado' });

console.log('cartoes.test.js ok');
