/* node tests/importador.test.js */
'use strict';
const assert = require('assert');
const path = require('path');
const I = require(path.join(__dirname, '..', 'www', 'js', 'importador.js'));

// Prova no formato comum de PDF: cabeçalho de página, alternativas em várias linhas, palavra hifenizada.
const prova = `CONCURSO PÚBLICO 2024 - CADERNO 1
Leia o texto a seguir.
QUESTÃO 1
Assinale a alternativa correta quanto à crase.
(A) Fui à pé.
(B) Refiro-me à profes-
sora de português.
(C) Vou à Brasília.
(D) Entreguei à ela.
(E) Chegou à uma hora
da manhã.
2. Considere as afirmativas:
I. a primeira;
II. a segunda.
Está correto o que se afirma em
A) I, apenas.
B) II, apenas.
C) I e II.
D) nenhuma.
3 - Julgue o item a seguir. A República Federativa do Brasil é formada pela união indissolúvel dos Estados, Municípios e Distrito Federal.
GABARITO
1-B 2-C 3-C`;

const qs = I.extrairQuestoes(prova);
assert.strictEqual(qs.length, 3, 'três questões');
assert.deepStrictEqual(qs.map((q) => q.numero), [1, 2, 3]);
assert.strictEqual(qs[0].alternativas.length, 5);
assert.strictEqual(qs[0].alternativas[1], 'Refiro-me à professora de português.', 'junta linhas e desfaz hifenização');
assert.strictEqual(qs[0].alternativas[4], 'Chegou à uma hora da manhã.');
assert.strictEqual(qs[0].resposta, 1, 'gabarito B aplicado');
assert.ok(qs[1].enunciado.includes('I. a primeira'), 'lista dentro do enunciado não vira questão');
assert.strictEqual(qs[1].alternativas.length, 4);
assert.strictEqual(qs[1].resposta, 2);
assert.strictEqual(qs[2].tipo, 'certo-errado');
assert.strictEqual(qs[2].resposta, true, 'C no gabarito de item = Certo');
assert.strictEqual(qs[2].avisos.length, 0, 'item com "Julgue" não gera aviso');

// Numeração fora de ordem dentro do texto não abre questão nova.
assert.strictEqual(I.extrairQuestoes('1. Texto citando o ano\n2010. Isso não é questão\nA) a\nB) b\nC) c\nD) d').length, 1);

// Gabaritos em vários formatos.
assert.deepStrictEqual(I.lerGabarito('01 B 02 C 03 ANULADA'), { 1: 'B', 2: 'C', 3: null });
assert.deepStrictEqual(I.lerGabarito('Questão 1: D  Questão 2: E'), { 1: 'D', 2: 'E' });
assert.deepStrictEqual(I.lerGabarito('1 CERTO 2 ERRADO'), { 1: true, 2: false });
assert.deepStrictEqual(I.lerGabarito('ACDBE'), { 1: 'A', 2: 'C', 3: 'D', 4: 'B', 5: 'E' });
assert.deepStrictEqual(I.lerGabarito('A C, D'), { 1: 'A', 2: 'C', 3: 'D' });
assert.deepStrictEqual(I.lerGabarito('Letra D na primeira'), {}, 'frase solta não vira gabarito');
assert.deepStrictEqual(I.lerGabarito('resposta D'), {});
const semGab = I.extrairQuestoes('1) Pergunta?\na) um\nb) dois\nc) três\nd) quatro');
assert.strictEqual(I.aplicarGabarito(semGab, I.lerGabarito('1-d')), 1);
assert.strictEqual(semGab[0].resposta, 3);
assert.strictEqual(I.aplicarGabarito(semGab, { 1: 'E' }), 0, 'letra além das alternativas é ignorada');

// CSV do Excel brasileiro: ";" , aspas, aspas escapadas e quebra de linha no campo.
const csv = '﻿Enunciado;A;B;C;D;E;Resposta;Matéria;Assunto\n"Texto com ""aspas""\ne quebra";um;dois;três;quatro;cinco;c;Contabilidade;Balanço\nItem certo ou errado;;;;;;Errado;Direito;Geral\n';
const cq = I.questoesDoCSV(csv);
assert.strictEqual(cq.length, 2);
assert.strictEqual(cq[0].enunciado, 'Texto com "aspas"\ne quebra');
assert.strictEqual(cq[0].resposta, 2);
assert.strictEqual(cq[0].materiaNome, 'Contabilidade');
assert.strictEqual(cq[1].tipo, 'certo-errado');
assert.strictEqual(cq[1].resposta, false);
assert.strictEqual(I.questoesDoCSV(I.MODELO_CSV).length, 2, 'o modelo de planilha é lido de volta');
assert.throws(() => I.questoesDoCSV('a;b\n1;2'), /enunciado/);
assert.strictEqual(I.slug('Direito Tributário (ICMS)'), 'direito-tributario-icms');

// Desempenho: texto enorme não trava.
const t0 = Date.now();
I.extrairQuestoes(('1. x\n' + 'A) a\n'.repeat(5)).repeat(1) + 'linha qualquer\n'.repeat(30000));
assert.ok(Date.now() - t0 < 1500, 'texto grande processado rápido');

// Rodada 2 da banca: casos que falhavam.
const alt5 = (n) => n + '. Questão ' + n + '\nA) a' + n + '\nB) b' + n + '\nC) c' + n + '\nD) d' + n + '\nE) e' + n + '\n';
const salto = I.extrairQuestoes(alt5(1) + alt5(2) + alt5(3) + alt5(5) + alt5(6));
assert.deepStrictEqual(salto.map((q) => q.numero), [1, 2, 3, 5, 6], 'salto de numeração não mescla questões');
assert.strictEqual(salto[2].alternativas[4], 'e3');
assert.ok(salto[3].avisos.some((a) => /pulou/.test(a)), 'salto gera aviso');
const fora = I.extrairQuestoes('1. Pergunta\nA) um\nB) dois\nD) quatro\nC) três\nE) cinco');
assert.deepStrictEqual(fora[0].alternativas, ['um', 'dois', 'três', 'quatro', 'cinco'], 'alternativas fora de ordem são reordenadas');
assert.ok(fora[0].avisos.some((a) => /fora de ordem/.test(a)));
const semPalavra = I.extrairQuestoes(alt5(1) + alt5(2) + '\n1-A 2-B');
assert.deepStrictEqual(semPalavra.map((q) => q.resposta), [0, 1], 'lista de respostas no fim, sem a palavra gabarito');
assert.strictEqual(semPalavra[1].alternativas[4], 'e2', 'a lista de respostas não entra na alternativa E');
assert.deepStrictEqual(I.lerGabarito('Gabarito: AB'), { 1: 'A', 2: 'B' }, 'Gabarito: com dois-pontos');
const vazia = I.questoesDoCSV('enunciado;a;b;c;d;e;resposta\nP1;;vb;vc;vd;ve;B\nP2;va;vb;;vd;ve;D\n');
assert.strictEqual(vazia[0].alternativas[vazia[0].resposta], 'vb', 'coluna a vazia: resposta B continua sendo o texto de b');
assert.strictEqual(vazia[1].alternativas[vazia[1].resposta], 'vd', 'coluna c vazia: resposta D continua sendo o texto de d');
assert.strictEqual(I.limpar('x'.repeat(900000)).length, 900000, 'texto de 900 mil caracteres não é cortado');

console.log('importador: todos os testes passaram');

