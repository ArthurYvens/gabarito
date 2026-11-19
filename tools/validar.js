/* Valida todos os arquivos de dados: node tools/validar.js
   Sai com código 1 se houver erro. */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const raiz = path.join(__dirname, '..');
const Banco = require(path.join(raiz, 'www', 'js', 'banco.js'));
const ctx = vm.createContext({ Banco });
const dir = path.join(raiz, 'www', 'js', 'dados');
const arquivos = ['base.js'].concat(fs.readdirSync(dir).filter((f) => f.endsWith('.js') && f !== 'base.js').sort());

let erros = 0;
const falha = (msg) => { erros++; console.error('ERRO ' + msg); };

for (const f of arquivos) {
  try { vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), ctx, { filename: f }); }
  catch (err) { falha(f + ': não carrega: ' + err.message); }
}

const ids = new Set();
for (const q of Banco.questoes) {
  if (ids.has(q.id)) falha(q.id + ': id repetido');
  ids.add(q.id);
  for (const e of Banco.validarQuestao(q)) falha((q.id || '?') + ': ' + e);
}
const aulaIds = new Set();
for (const a of Banco.aulas) {
  if (aulaIds.has(a.id)) falha(a.id + ': id de aula repetido');
  aulaIds.add(a.id);
  for (const e of Banco.validarAula(a)) falha((a.id || '?') + ': ' + e);
}

// Gabarito equilibrado: evita que a letra certa seja sempre a mesma.
const porMateria = {};
for (const q of Banco.questoes) {
  const m = (porMateria[q.materia] = porMateria[q.materia] || { total: 0, ce: 0, letras: {}, assuntos: new Set(), aulas: 0 });
  m.total++;
  m.assuntos.add(q.assunto);
  if (q.tipo === 'certo-errado') m.ce++;
  else m.letras['ABCDE'[q.resposta]] = (m.letras['ABCDE'[q.resposta]] || 0) + 1;
}
for (const a of Banco.aulas) if (porMateria[a.materia]) porMateria[a.materia].aulas++;

console.log('\nMatéria                     Questões  C/E  Aulas  Letras certas');
for (const m of Banco.materias) {
  const s = porMateria[m.id] || { total: 0, ce: 0, letras: {}, aulas: Banco.aulas.filter((a) => a.materia === m.id).length };
  console.log(m.nome.padEnd(28) + String(s.total).padStart(8) + String(s.ce).padStart(5) + String(s.aulas).padStart(7) + '  ' + JSON.stringify(s.letras));
}
// Aula cujo assunto não tem questão: o botão "Praticar este assunto" ficaria vazio.
for (const a of Banco.aulas) {
  if (!Banco.questoes.some((q) => q.materia === a.materia && q.assunto === a.assunto))
    console.warn('AVISO aula ' + a.id + ': nenhuma questão com assunto "' + a.assunto + '"');
}
console.log('\n' + Banco.questoes.length + ' questões, ' + Banco.aulas.length + ' aulas, ' + erros + ' erro(s).');
process.exit(erros ? 1 : 0);
