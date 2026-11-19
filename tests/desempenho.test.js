/* node tests/desempenho.test.js */
'use strict';
const assert = require('assert');
const path = require('path');
const D = require(path.join(__dirname, '..', 'www', 'js', 'desempenho.js'));

const qs = {
  p1: { id: 'p1', materia: 'port', assunto: 'Crase' },
  p2: { id: 'p2', materia: 'port', assunto: 'Crase' },
  p3: { id: 'p3', materia: 'port', assunto: 'Regência' },
  m1: { id: 'm1', materia: 'mat', assunto: 'Porcentagem' },
  x1: { id: 'x1', materia: 'sumiu', assunto: 'Sem nome' }
};
const banco = {
  questao: (id) => qs[id] || null,
  materia: (id) => ({ port: { nome: 'Português', sigla: 'POR' }, mat: { nome: 'Matemática', sigla: 'MAT' } })[id] || null
};
const agora = new Date(2026, 10, 18, 15, 0).getTime();
const dias = (n) => new Date(2026, 10, 18 - n, 10, 0).getTime();

const respostas = {
  p1: [{ t: dias(30), certo: false, r: 0 }, { t: dias(1), certo: true, r: 1, ms: 20000, conf: 2 }],             // antiga sem ms/conf + nova
  p2: [{ t: dias(2), certo: false, r: 0, ms: 90000, conf: 2, dicas: 1 }],                                       // erro perigoso
  p3: [{ t: dias(2), certo: true, r: 1 }],                                                                      // sem ms e sem conf
  m1: [{ t: dias(9), certo: false, r: 0, ms: 40000, conf: 0 }, { t: dias(8), certo: true, r: 1, ms: 60000, conf: 1 }],
  fantasma: [{ t: dias(3), certo: true, r: 1, ms: 5000, conf: 2 }],                                             // questão removida do banco
  x1: [{ t: dias(1), certo: true, r: 1, ms: 10000, conf: 2 }],                                                  // matéria removida
  lixo: 'não é lista',
  p9: [null, { t: 1 }]
};

// porAssunto
const a = D.porAssunto(banco, respostas);
assert.strictEqual(a.total.questoes, 5);
const por = a.materias.find((m) => m.id === 'port');
assert.strictEqual(por.nome, 'Português');
assert.strictEqual(por.questoes, 3);
assert.strictEqual(por.certas, 2);
assert.strictEqual(por.taxa, 67);
assert.strictEqual(por.tentativas, 4);
assert.strictEqual(por.ms, 55000, 'mediana de 20s e 90s, ignorando tentativas sem tempo');
assert.strictEqual(por.comDicas, 1);
const crase = por.assuntos.find((s) => s.assunto === 'Crase');
assert.deepStrictEqual([crase.questoes, crase.certas, crase.taxa, crase.fraco], [2, 1, 50, true]);
const reg = por.assuntos.find((s) => s.assunto === 'Regência');
assert.strictEqual(reg.ms, null, 'sem tempo registrado');
assert.strictEqual(reg.fraco, false);
const sumiu = a.materias.find((m) => m.id === 'sumiu');
assert.strictEqual(sumiu.nome, 'sumiu', 'matéria sem cadastro usa o id');
assert.strictEqual(a.materias[0].id, 'port', 'mais respondida primeiro');
assert.strictEqual(D.porAssunto(banco, {}).materias.length, 0);
assert.strictEqual(D.porAssunto(banco, null).total.taxa, null);
assert.strictEqual(D.porAssunto(banco, { p1: [{ t: 1, certo: false }] }).materias[0].assuntos[0].fraco, false, 'uma questão só não basta para rotular fraco');

// confiancaAcerto: usa a última resposta; p3 não tem conf
const c = D.confiancaAcerto(banco, respostas);
assert.deepStrictEqual([c.dominio.n, c.incerto.n, c.perigoso.n, c.lacuna.n], [2, 1, 1, 0]);
assert.strictEqual(c.total, 4);
assert.strictEqual(c.semConf, 1);
assert.strictEqual(c.dominio.pct, 50);
assert.strictEqual(c.perigoso.pct, 25);
const vazio = D.confiancaAcerto(banco, { p3: respostas.p3 });
assert.strictEqual(vazio.total, 0);
assert.strictEqual(vazio.dominio.pct, null);
assert.strictEqual(D.confiancaAcerto(banco, { m1: [{ t: 1, certo: false, conf: 1 }] }).lacuna.n, 1);

// tempoPorQuestao
const t = D.tempoPorQuestao(banco, respostas);
assert.deepStrictEqual(t.top.map((x) => x.id), ['p2', 'm1', 'p1', 'x1']);
assert.strictEqual(t.questoes, 4);
assert.strictEqual(t.mediaMs, Math.round((90000 + 60000 + 20000 + 10000) / 4));
assert.strictEqual(t.acertoMs, Math.round((20000 + 60000 + 10000) / 3));
assert.strictEqual(t.erroMs, Math.round((90000 + 40000) / 2));
assert.strictEqual(D.tempoPorQuestao(banco, { p3: respostas.p3 }).mediaMs, null);
const muitas = {};
for (let i = 0; i < 15; i++) { qs['z' + i] = { id: 'z' + i, materia: 'mat', assunto: 'A' }; muitas['z' + i] = [{ t: 1, certo: true, ms: 1000 + i }]; }
assert.strictEqual(D.tempoPorQuestao(banco, muitas).top.length, 10);
assert.strictEqual(D.tempoPorQuestao(banco, muitas).top[0].id, 'z14');

// evolucao: 8 semanas, a última termina hoje
const e = D.evolucao(respostas, 8, agora);
assert.strictEqual(e.length, 8);
assert.ok(e[7].fim > agora && e[7].inicio <= dias(6));
assert.strictEqual(e[7].total, 5, 'p1, p2, p3, fantasma e x1; p9 é inválida');
assert.strictEqual(e[7].certas, 4);
assert.strictEqual(e[7].taxa, 80);
assert.strictEqual(e[6].total, 2, 'duas tentativas de m1 na semana anterior');
assert.strictEqual(e[6].taxa, 50);
assert.strictEqual(e[0].taxa, null);
assert.strictEqual(e.reduce((s, x) => s + x.total, 0), 8, 'a tentativa de 30 dias atrás ainda cabe nas 8 semanas');
assert.strictEqual(D.evolucao(respostas, 2, agora).reduce((s, x) => s + x.total, 0), 7, 'fora da janela não conta');
assert.strictEqual(D.evolucao(null, 8, agora).length, 8);
assert.strictEqual(D.evolucao({}, 0, agora).length, 8, 'semanas inválido volta ao padrão');
for (let i = 1; i < 8; i++) assert.strictEqual(e[i].inicio, e[i - 1].fim, 'semanas contíguas');

console.log('desempenho.test.js: ok');
