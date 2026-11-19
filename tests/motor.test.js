/* node tests/motor.test.js */
'use strict';
const assert = require('assert');
const path = require('path');
const Motor = require(path.join(__dirname, '..', 'www', 'js', 'motor.js'));
const Analise = require(path.join(__dirname, '..', 'www', 'js', 'redacao-analise.js'));

// Banco mínimo de teste, independente do conteúdo real.
const questoes = [];
['portugues', 'matematica', 'informatica'].forEach((m) => {
  for (let i = 0; i < 10; i++) {
    questoes.push({ id: m + '-' + i, materia: m, assunto: 'A' + (i % 2), tipo: i % 3 ? 'multipla' : 'certo-errado',
      dificuldade: (i % 3) + 1, estilo: 'FGV', objetivos: ['enem'], enunciado: 'q', alternativas: ['a', 'b', 'c', 'd'],
      resposta: i % 3 ? 1 : true });
  }
});
const banco = {
  questoes,
  objetivo: (id) => (id === 'enem' ? { pesos: { portugues: 3, matematica: 1 } } : null),
  questao: (id) => questoes.find((q) => q.id === id),
  materias: [{ id: 'portugues' }, { id: 'matematica' }, { id: 'informatica' }]
};

// distribuir: soma bate e respeita o disponível
let d = Motor.distribuir(10, [{ id: 'a', peso: 3, disponivel: 100 }, { id: 'b', peso: 1, disponivel: 100 }]);
assert.deepStrictEqual(d, { a: 8, b: 2 });
d = Motor.distribuir(10, [{ id: 'a', peso: 3, disponivel: 2 }, { id: 'b', peso: 1, disponivel: 100 }]);
assert.deepStrictEqual(d, { a: 2, b: 8 });
d = Motor.distribuir(5, [{ id: 'a', peso: 1, disponivel: 1 }, { id: 'b', peso: 1, disponivel: 1 }]);
assert.strictEqual(d.a + d.b, 2);

// montarSimulado: quantidade, sem repetição, peso do objetivo, semente reproduzível
const s1 = Motor.montarSimulado(banco, { objetivo: 'enem', quantidade: 12, seed: 7 }, {});
assert.strictEqual(s1.length, 12);
assert.strictEqual(new Set(s1).size, 12);
assert.ok(s1.filter((id) => id.startsWith('portugues')).length > s1.filter((id) => id.startsWith('matematica')).length);
assert.ok(!s1.some((id) => id.startsWith('informatica')), 'matéria com peso 0 no objetivo fica fora');
assert.deepStrictEqual(Motor.montarSimulado(banco, { objetivo: 'enem', quantidade: 12, seed: 7 }, {}), s1);
// Prioriza nunca vistas
const hist = {};
questoes.filter((q) => q.materia === 'informatica').slice(0, 8).forEach((q) => (hist[q.id] = [{ certo: true }]));
const s2 = Motor.montarSimulado(banco, { materias: ['informatica'], quantidade: 2, seed: 1 }, hist);
assert.deepStrictEqual(s2.sort(), ['informatica-8', 'informatica-9']);
// Pedir mais que o disponível devolve o que existe
assert.strictEqual(Motor.montarSimulado(banco, { materias: ['matematica'], quantidade: 50 }, {}).length, 10);

// filtrar por status
assert.strictEqual(Motor.filtrar(questoes, { status: 'nao-resolvidas', materias: ['informatica'] }, hist).length, 2);
assert.strictEqual(Motor.filtrar(questoes, { busca: 'inexistente' }, {}).length, 0);

// corrigir: brancos, nota líquida CEBRASPE
const r = Motor.corrigir(banco, { questoes: ['portugues-0', 'portugues-3', 'portugues-1', 'portugues-2'],
  respostas: { 'portugues-0': true, 'portugues-3': false, 'portugues-1': 1 } });
assert.strictEqual(r.certas, 2); assert.strictEqual(r.erradas, 1); assert.strictEqual(r.brancos, 1);
assert.strictEqual(r.liquida, 0); assert.strictEqual(r.percentual, 50);

// revisão espaçada
const rev = {};
assert.strictEqual(Motor.agendar(rev, 'x', true, '2026-11-16'), null, 'acerto fora da revisão não cria cartão');
Motor.agendar(rev, 'x', false, '2026-11-16');
assert.deepStrictEqual(rev.x, { caixa: 0, proxima: '2026-11-17' });
Motor.agendar(rev, 'x', true, '2026-11-17');
assert.deepStrictEqual(rev.x, { caixa: 1, proxima: '2026-11-20' });
assert.deepStrictEqual(Motor.pendentes(rev, '2026-11-19'), []);
assert.deepStrictEqual(Motor.pendentes(rev, '2026-11-20'), ['x']);
assert.strictEqual(Motor.somarDias('2026-12-31', 1), '2027-01-01');
assert.strictEqual(Motor.somarDias('2026-03-01', -1), '2026-02-28');

// sequência
assert.strictEqual(Motor.sequencia({ '2026-11-14': 1, '2026-11-15': 3 }, '2026-11-16'), 2);
assert.strictEqual(Motor.sequencia({ '2026-11-13': 1 }, '2026-11-16'), 0);

// plano: todos os blocos preenchidos; matéria só repete no dia se tiver mais blocos que dias
const plano = Motor.planoSemanal({ ...banco, objetivo: () => ({ pesos: { a: 3, b: 2, c: 1, d: 1, e: 1 } }), materias: [] },
  { objetivo: 'x', dias: [1, 2, 3, 4, 5], horasPorDia: 2.5 }, {});
assert.strictEqual(plano.blocosDia, 3);
assert.strictEqual(Object.values(plano.cota).reduce((s, n) => s + n, 0), 15);
Object.values(plano.semana).forEach((blocos) => {
  assert.strictEqual(blocos.length, 3);
  blocos.forEach((m) => assert.ok(blocos.filter((x) => x === m).length <= Math.ceil(plano.cota[m] / 5), 'repetição evitável: ' + blocos));
});

// análise de redação
const red = Analise.analisar(
  'Na obra Utopia, Thomas More descreve uma sociedade ideal. Entretanto, no Brasil, a evasão escolar persiste.\n\n' +
  'Em primeiro lugar, a pobreza obriga jovens a trabalhar. Assim, a escola perde espaço.\n\n' +
  'Além disso, o currículo distante da realidade desmotiva os alunos.\n\n' +
  'Portanto, o Ministério da Educação deve ampliar bolsas de permanência, por meio de parcerias com estados, a fim de que os jovens concluam os estudos.');
assert.strictEqual(red.paragrafos, 4);
assert.ok(red.conectivos.length >= 4);
const prop = red.proposta;
assert.ok(prop.agente && prop.acao && prop.meio && prop.finalidade);
assert.ok(Analise.analisar('eu acho que tipo isso é ruim').alertas.length >= 2);


// diagnóstico, sugestão e semana
const diag = Motor.diagnostico(banco, ['portugues', 'matematica'], 3);
assert.ok(diag.length === 4 && new Set(diag).size === 4, 'diagnóstico: 2 assuntos por matéria');
assert.ok(diag.every((id) => /^(portugues|matematica)/.test(id)));
const bancoSug = { ...banco, questao: (id) => questoes.find((q) => q.id === id) };
assert.strictEqual(Motor.sugestao(bancoSug, { respostas: {}, revisao: {}, perfil: { materias: ['portugues'] } }, '2026-11-19').tipo, 'diagnostico');
const revs = {}; questoes.slice(0, 6).forEach((q) => (revs[q.id] = { caixa: 0, proxima: '2026-11-18' }));
assert.strictEqual(Motor.sugestao(bancoSug, { respostas: { 'portugues-1': [{ certo: false }] }, revisao: revs, perfil: {} }, '2026-11-19').tipo, 'revisao');
const certeza = {}; ['portugues-1', 'portugues-2', 'portugues-4'].forEach((id) => (certeza[id] = [{ certo: false, conf: 2 }]));
assert.strictEqual(Motor.sugestao(bancoSug, { respostas: certeza, revisao: {}, perfil: {} }, '2026-11-19').tipo, 'ids');
const fraco = { 'matematica-1': [{ certo: false }], 'matematica-3': [{ certo: false }] };
const sf = Motor.sugestao(bancoSug, { respostas: fraco, revisao: {}, perfil: {} }, '2026-11-19');
assert.strictEqual(sf.tipo, 'treino'); assert.deepStrictEqual(sf.cfg.materias, ['matematica']);
assert.deepStrictEqual(Motor.semana({ '2026-11-17': 3, '2026-11-19': 2, '2026-11-16': 9 }, '2026-11-19'), { inicio: '2026-11-16', total: 14 }, 'semana começa na segunda (16/11/2026)');

console.log('motor e análise: todos os testes passaram');
