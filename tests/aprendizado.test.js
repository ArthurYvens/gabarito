/* node tests/aprendizado.test.js */
'use strict';
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const A = require(path.join(__dirname, '..', 'www', 'js', 'aprendizado.js'));
const G = require(path.join(__dirname, '..', 'www', 'js', 'gerador.js'));
const Motor = require(path.join(__dirname, '..', 'www', 'js', 'motor.js'));
const perto = (a, b, e = 1e-9) => assert.ok(Math.abs(a - b) < e, a + ' != ' + b);

// ---------- Palavras, IDF, TF-IDF ----------
assert.deepStrictEqual(A.palavras('O Servidor de e-mail, a CRASE! Já é só um às', G.PARADA), ['servidor', 'mail', 'crase']);
assert.deepStrictEqual(A.palavras('Constituição e constituicao', {}), ['constituicao', 'constituicao'], 'sem acento, minúsculas');
const df = Object.create(null);
A.somarDF(df, ['gato', 'gato', 'cao']);
A.somarDF(df, ['gato']);
assert.deepStrictEqual({ ...df }, { gato: 2, cao: 1 }, 'df conta documentos, não repetições');
assert.ok(A.idfDe(100, 1) > A.idfDe(100, 50) && A.idfDe(100, 100) >= 1 - 1e-9, 'palavra rara vale mais');
assert.ok(A.tfidf(4, 2) > A.tfidf(1, 2) && A.tfidf(1, 5) > A.tfidf(1, 2) && A.tfidf(0, 9) === 0);

// ---------- Cosseno ----------
perto(A.cosseno([1, 2, 3], [2, 4, 6]), 1);
perto(A.cosseno([1, 0], [0, 1]), 0);
perto(A.cosseno([1, 0], [-1, 0]), -1);
assert.strictEqual(A.cosseno(null, [1]), 0);
assert.strictEqual(A.cosseno([0, 0], [1, 1]), 0);

// ---------- Vetores de palavras: palavras do mesmo assunto ficam perto ----------
const rand = Motor.rng(1);
const animais = ['gato', 'cao', 'cavalo', 'vaca', 'ovelha'], maquinas = ['cpu', 'ram', 'disco', 'placa', 'kernel'];
const frase = (grupo, k) => Array.from({ length: 6 }, (_, i) => grupo[(k + i * 2) % grupo.length]);
const docs = [];
for (let k = 0; k < 30; k++) { docs.push(frase(animais, k)); docs.push(frase(maquinas, k)); }
const pares = Object.create(null);
docs.forEach((d) => A.coocorrencias(d, 4, pares));
const vocab = animais.concat(maquinas);
const vet = A.vetoresPalavras(pares, vocab, 4, 8, Motor.rng(3));
const v = (w) => vet[vocab.indexOf(w)];
assert.ok(A.cosseno(v('gato'), v('cao')) > A.cosseno(v('gato'), v('cpu')) + 0.3, 'gato é mais parecido com cão do que com cpu');
assert.ok(A.cosseno(v('ram'), v('disco')) > A.cosseno(v('ram'), v('vaca')) + 0.3);
assert.deepStrictEqual(A.vetoresPalavras(pares, vocab, 4, 8, Motor.rng(3)), vet, 'mesma semente, mesmo resultado');
assert.ok(rand() !== undefined);
// poda e palavra nova por vizinhança
const mapa = Object.create(null); Object.assign(mapa, { 'a b': 5, 'a c': 5, 'a d': 1, 'b c': 3 });
assert.deepStrictEqual(Object.keys(A.podar(mapa, 2)).sort(), ['a b', 'a c']);
const adj = A.vizinhosPPMI(pares);
const novo = A.vetorPorVizinhos(adj.gato, v);
assert.ok(A.cosseno(novo, v('cao')) > A.cosseno(novo, v('cpu')), 'palavra nova herda o contexto dos vizinhos');

// ---------- Modelo: base + textos da pessoa ----------
const base = (() => {
  const dfs = 'servidor:40 rede:30 crase:2', vp = 'servidor rede', dim = 2, bytes = Buffer.from([127, 0, 100, 76]);
  return A.lerBase({ N: 100, df: dfs, vp, dim, vet: bytes.toString('base64') });
})();
const modelo = A.criarModelo(base, { docs: 0, df: Object.assign(Object.create(null), { crase: 8 }), pares: Object.assign(Object.create(null), { 'crase servidor': 4, 'crase rede': 4, 'rede servidor': 6, 'crase zzz': 9 }) }, null);
assert.ok(modelo.idf('Crase') < A.idfDe(100, 2) && modelo.idf('crase') > modelo.idf('servidor'), 'o df da pessoa soma ao da base; acento e maiúscula não importam');
assert.ok(modelo.idf('palavranova') > modelo.idf('servidor'));
assert.ok(modelo.similaridade('servidor', 'rede') > 0.7 && modelo.similaridade('servidor', 'nada') === null);
assert.ok(modelo.vetor('crase'), 'palavra só dos textos da pessoa ganha vetor pelos vizinhos');
assert.strictEqual(modelo.probabilidade([0]), null);
assert.strictEqual(A.criarModelo(base, null, { w: [0], b: 0 }).probabilidade([0]), 0.5);

// ---------- Regressão logística aprende um padrão sintético ----------
// Atributos 0..1; a pessoa aprova frases curtas (x0 baixo) que escondem sigla (x1 = 1) e descarta o resto.
const r2 = Motor.rng(11), exemplos = [];
for (let i = 0; i < 300; i++) {
  const x = [r2(), r2() < 0.5 ? 1 : 0, r2()];
  exemplos.push({ x, y: x[0] < 0.4 && x[1] === 1 ? 1 : 0 });
}
const clf = A.treinarLogistica(exemplos);
assert.ok(clf.w[0] < -1 && clf.w[1] > 1 && Math.abs(clf.w[2]) < Math.abs(clf.w[1]), 'pesos: curta e sigla ajudam, o atributo sem relação quase não pesa: ' + clf.w);
const certos = exemplos.filter((e) => (A.prever(clf, e.x) > 0.5) === (e.y === 1)).length;
assert.ok(certos / exemplos.length > 0.9, 'acerto no treino: ' + certos);
assert.ok(A.prever(clf, [0.1, 1, 0.5]) > 0.5 && A.prever(clf, [0.9, 0, 0.5]) < 0.1, "curta com sigla pontua bem acima de longa sem sigla");
// nota 0.5 (editada) fica no meio
const meio = A.treinarLogistica([{ x: [1], y: 1 }, { x: [0], y: 0 }, { x: [0.5], y: 0.5 }]);
assert.ok(Math.abs(A.prever(meio, [0.5]) - 0.5) < 0.1);
assert.deepStrictEqual(A.treinarLogistica(exemplos), clf, 'treino é determinístico');

// ---------- Elo: domínio por assunto converge ----------
const q = (dif, tipo) => ({ id: 'q' + dif, dificuldade: dif, tipo: tipo || 'multipla' });
function simular(pCerto, n, sem) {
  const r = Motor.rng(sem); let dom, dif = {};
  for (let i = 0; i < n; i++) {
    const d = 1 + (i % 3), qq = q(d), p = pCerto(d), passo = A.elo(dom, dif[qq.id], qq, r() < p);
    dom = passo.dom; dif[qq.id] = passo.dif;
  }
  return { dom, dif };
}
const forte = simular(() => 0.95, 40, 5), fraco = simular(() => 0.1, 40, 6), medio = simular((d) => [0.9, 0.6, 0.35][d - 1], 60, 7);
assert.strictEqual(A.nivelDominio(forte.dom).rotulo, 'domina');
assert.strictEqual(A.nivelDominio(fraco.dom).rotulo, 'começando');
assert.ok(forte.dom.t > medio.dom.t && medio.dom.t > fraco.dom.t, 'habilidade ordena as três pessoas: ' + [forte.dom.t, medio.dom.t, fraco.dom.t]);
assert.ok(['aprendendo', 'bom'].includes(A.nivelDominio(medio.dom).rotulo));
assert.strictEqual(A.nivelDominio(undefined).rotulo, 'começando');
assert.ok(['começando', 'aprendendo'].includes(A.nivelDominio(A.elo(undefined, undefined, q(2), true).dom).rotulo), 'uma resposta só não basta para dizer que domina');
// o passo encolhe: a mesma surpresa mexe menos depois de muitas respostas
const jovem = A.elo({ t: 0, n: 2, ac: 1 }, { b: 0, n: 10 }, q(2), true).dom.t, velho = A.elo({ t: 0, n: 50, ac: 25 }, { b: 0, n: 10 }, q(2), true).dom.t;
assert.ok(jovem > velho && velho > 0, 'fator K decrescente');
// chute vale menos que certeza; errar com certeza pesa mais; dica reduz o ganho
const t0 = (certo, extra) => A.elo(undefined, undefined, q(2), certo, extra).dom.t;
assert.ok(t0(true, { conf: 2 }) > t0(true, { conf: 0 }) && t0(false, { conf: 2 }) < t0(false, { conf: 0 }) && t0(true, { dicas: 1 }) < t0(true));
// a questão que esta pessoa sempre erra fica mais difícil para ela; a que sempre acerta, mais fácil
const q1 = q(2), q2 = q(2);
let d1, d2, dm; for (let i = 0; i < 15; i++) { const a = A.elo(dm, d1, q1, false); d1 = a.dif; const b = A.elo(a.dom, d2, q2, true); d2 = b.dif; dm = b.dom; }
assert.ok(d1.b > A.dificuldadeInicial(q1) + 0.3 && d2.b < A.dificuldadeInicial(q2) - 0.3);
assert.ok(A.dificuldadeInicial({ dificuldade: 3 }) > 0 && A.dificuldadeInicial({ dificuldade: 1 }) < 0);
assert.ok(A.proximidade(0, 0.4) > A.proximidade(3, 0.4) && A.proximidade(-3, 0.4) < 0.01, 'nem fácil demais, nem impossível');
assert.ok(A.pAcerto(-5, 5, 'certo-errado') >= 0.5 && A.pAcerto(-5, 5, 'multipla') >= 0.2, 'o chute é o piso');

// ---------- Intervalos da revisão espaçada ----------
assert.strictEqual(A.intervaloRevisao(7, {}), 7);
assert.ok(A.intervaloRevisao(7, { conf: 2 }) > 7, 'acertou com certeza: alonga');
assert.ok(A.intervaloRevisao(7, { conf: 0 }) < 7, 'acertou no chute: encurta');
assert.ok(A.intervaloRevisao(15, { falhas: 2 }) < A.intervaloRevisao(15, { falhas: 1 }) && A.intervaloRevisao(15, { falhas: 1 }) < 15, 'errou de novo a mesma questão');
assert.ok(A.intervaloRevisao(15, { dominio: 0.2 }) < 15 && A.intervaloRevisao(15, { dominio: 0.9 }) === 15, 'assunto fraco encurta');
assert.strictEqual(A.intervaloRevisao(1, { falhas: 3, dominio: 0.1, conf: 0 }), 1, 'nunca menos de 1 dia');
// dentro do motor: caixas, falhas que se perdoam e dados do aluno
const rev = {};
Motor.agendar(rev, 'x', false, '2026-11-16');
Motor.agendar(rev, 'x', false, '2026-11-16');
assert.deepStrictEqual(rev.x, { caixa: 0, proxima: '2026-11-17', falhas: 1 }, 'errar de novo a mesma questão guarda a falha');
Motor.agendar(rev, 'x', true, '2026-11-17');
assert.deepStrictEqual(rev.x, { caixa: 1, proxima: '2026-11-19' }, '3 dias encurtados pela falha (3/1,5 = 2); a falha é perdoada');
Motor.agendar(rev, 'x', true, '2026-11-19', { conf: 2 });
assert.deepStrictEqual(rev.x, { caixa: 2, proxima: '2026-11-30' }, '7 dias alongados pela certeza: 10,5 -> 11');

// ---------- Padrões de erro ----------
const alt = ['Sempre existe uma exceção', 'A resposta', 'Outra coisa', 'Mais uma coisa'];
const qs = {};
for (let i = 1; i <= 4; i++) qs['a' + i] = { id: 'a' + i, materia: 'm', assunto: 'Crase', tipo: 'multipla', alternativas: alt, resposta: 1 };
qs.b1 = { id: 'b1', materia: 'm', assunto: 'Outro', tipo: 'multipla', alternativas: alt, resposta: 1 };
const bancoP = { questao: (id) => qs[id] || null };
const errou = (r) => ({ certo: false, r });
const p = A.padroesDeErro(bancoP, { a1: [errou(0), errou(0)], a2: [errou(0)], a3: [errou(0)], a4: [{ certo: true, r: 1 }], b1: [{ certo: true, r: 1 }], fora: [errou(0)] });
assert.deepStrictEqual(p.pegadinhas, [{ id: 'a1', r: 0, vezes: 2 }], 'mesma alternativa errada duas vezes');
assert.deepStrictEqual(p.assuntos.map((a) => [a.assunto, a.erros, a.total]), [['Crase', 3, 4]], 'assunto com 3 erros e metade errada');
assert.deepStrictEqual(p.tipos.map((t) => t.tipo), ['absoluta'], 'sempre escolhe a alternativa com palavra absoluta');
assert.strictEqual(A.tipoAlternativa({ alternativas: ['curta', 'outra curta', 'uma alternativa bem mais comprida que as demais alternativas da questão'] }, 2), 'longa');
assert.strictEqual(A.vezesPegadinha([errou(0), { certo: true, r: 1 }, errou(0), errou(2)], 0), 2);
assert.deepStrictEqual(A.padroesDeErro(bancoP, {}).assuntos, []);

// ---------- Motor com domínio: assunto fraco e dificuldade certa sobem na fila ----------
const banco = { questoes: [], objetivo: () => null, materias: [] };
['F', 'B'].forEach((a) => [1, 2, 3].forEach((d) => banco.questoes.push({ id: a + d, materia: 'm', assunto: a, dificuldade: d, tipo: 'multipla', objetivos: [], enunciado: 'e', alternativas: ['1', '2', '3', '4'], resposta: 0 })));
banco.questao = (id) => banco.questoes.find((x) => x.id === id);
const hist = {}; banco.questoes.forEach((x) => (hist[x.id] = [{ certo: true, t: 1 }]));
const ap = { dominio: { 'm|F': { t: -1.5, n: 12, ac: 3 }, 'm|B': { t: 3, n: 12, ac: 11 } }, dificuldades: {} };
let ganhou = 0;
for (let seed = 1; seed <= 20; seed++) if (Motor.montarSimulado(banco, { materias: ['m'], quantidade: 2, seed }, hist, ap).every((id) => id[0] === 'F')) ganhou++;
assert.ok(ganhou >= 17, 'o assunto de domínio baixo vence quase sempre: ' + ganhou + '/20');
let facil = 0;
for (let seed = 1; seed <= 20; seed++) if (Motor.montarSimulado(banco, { materias: ['m'], quantidade: 1, seed }, hist, { dominio: { 'm|F': { t: -1.5, n: 12, ac: 3 }, 'm|B': { t: -1.5, n: 12, ac: 3 } }, dificuldades: {} })[0].endsWith('1')) facil++;
assert.ok(facil >= 14, 'quem vai mal recebe sobretudo as fáceis: ' + facil + '/20');
// sugestão: o assunto de menor domínio vem primeiro e erros repetidos mandam para a aula
const bancoS = { ...banco, aulas: [{ id: 'aula-f', materia: 'm', assunto: 'F', titulo: 'Aula de F' }] };
const resp = {}; ['F1', 'F2', 'F3'].forEach((id) => (resp[id] = [{ certo: false, r: 1 }])); ['B1', 'B2'].forEach((id) => (resp[id] = [{ certo: false, r: 1 }]));
const sug = Motor.sugestao(bancoS, { respostas: resp, revisao: {}, perfil: {}, dominio: {}, aulas: {} }, '2026-11-19');
assert.strictEqual(sug.tipo, 'aula'); assert.strictEqual(sug.aula, 'aula-f');
const sug2 = Motor.sugestao(bancoS, { respostas: resp, revisao: {}, perfil: {}, aulas: { 'aula-f': 1 }, dominio: { 'm|F': { t: 2, n: 30, ac: 25 }, 'm|B': { t: -2, n: 30, ac: 5 } } }, '2026-11-19');
assert.strictEqual(sug2.tipo, 'treino'); assert.deepStrictEqual(sug2.cfg.assuntos, ['B'], 'treina o de menor domínio, não o de menor percentual');


// ---------- Ajustes da banca: efeitos que não se anulam, "domina" com amostra, df <= docs, histórico antigo ----------
assert.ok(A.intervaloRevisao(15, { conf: 2, dominio: 0.2 }) >= 15, 'acertar com certeza num assunto fraco não encurta');
assert.ok(A.intervaloRevisao(15, { conf: 0, dominio: 0.2 }) >= 6 && A.intervaloRevisao(15, { conf: 0, dominio: 0.2 }) < 15, 'chute em assunto fraco encurta, mas não vai para 1 dia');
let dez; for (let i = 0; i < 10; i++) dez = A.elo(dez && dez.dom, undefined, q(2), true, { conf: 2 });
assert.strictEqual(A.nivelDominio(dez.dom).rotulo, 'bom', 'dez acertos seguidos mostram "bom", ainda não "domina"');
const clamp = A.criarModelo(base, { docs: 3, df: Object.assign(Object.create(null), { servidor: 999 }), pares: Object.create(null) }, null);
assert.ok(Number.isFinite(clamp.idf('servidor')) && clamp.idf('servidor') >= 1 - 1e-9, 'df adulterado não inverte o ranking (idf >= 1)');
const rec = A.reconstruir({ questao: (id) => qs[id] || null }, { a1: [{ certo: false, t: 2, r: 0 }, { certo: true, t: 5 }], a2: [{ certo: false, t: 1, r: 0 }], fora: [{ certo: true, t: 1 }] });
assert.deepStrictEqual([Object.keys(rec.dominio), rec.dominio['m|Crase'].n, rec.dominio['m|Crase'].ac, Object.keys(rec.dificuldades).sort()], [['m|Crase'], 3, 1, ['a1', 'a2']], 'histórico antigo vira domínio por assunto');

// ---------- Modelo inicial gravado (igual para todos) ----------
const arq = path.join(__dirname, '..', 'www', 'js', 'dados', 'modelo-base.js'), ctx = {};
assert.ok(fs.statSync(arq).size <= 600 * 1024, 'modelo-base.js cabe em 600 KB');
new Function(fs.readFileSync(arq, 'utf8')).call(ctx);
const mb = A.criarModelo(A.lerBase(ctx.ModeloBase), null, null);
assert.ok(ctx.ModeloBase.N > 1000 && Object.keys(A.lerBase(ctx.ModeloBase).linha).length <= 4000 && Object.keys(A.lerBase(ctx.ModeloBase).df).length <= 15000);
assert.ok(mb.idf('kernel') > mb.idf('resposta'), 'palavra específica vale mais que palavra comum');
assert.ok(mb.similaridade('constituicao', 'constitucional') > mb.similaridade('constituicao', 'kernel'), 'vetores do modelo inicial: constituição está perto de constitucional');

console.log('aprendizado.test.js: ok');
