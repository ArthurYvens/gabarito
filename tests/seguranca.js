/* Regressão de segurança: estados maliciosos ou corrompidos no armazenamento não podem executar código
   nem deixar o app em branco. node tests/seguranca.js [url]  (servidor rodando) */
'use strict';
const path = require('path');
const { execSync } = require('child_process');
const { chromium } = require(path.join(execSync('npm root -g').toString().trim(), '@playwright', 'cli', 'node_modules', 'playwright'));
const URL = process.argv[2] || 'http://localhost:5321/';
const X = '<img src=x onerror="window.__xss=1">';

const casos = {
  'XSS em campos do backup': {
    perfil: { nome: X, objetivo: X, materias: [X, 'portugues'], metaDiaria: X, explicacaoProfunda: true, tema: X, dataProva: X },
    atividade: { '2026-11-16': X, [X]: 3 },
    simulados: [{ id: '"><img src=x onerror=window.__xss=1>', titulo: X, questoes: ['por-001'], respostas: {}, status: 'concluido' }],
    redacoes: [{ id: X, tema: X, texto: X, notas: [X, 1e9], max: X }],
    rascunho: { tema: X, texto: X, notas: [X], avaliando: true },
    plano: { cfg: { dias: [X, 1], horasPorDia: X }, semana: { 1: [X, 'portugues'], [X]: ['portugues'] } }
  },
  'tipos errados': { perfil: { nome: 'A', objetivo: 'enem', materias: [] }, importados: 5, atividade: null, respostas: [], simulados: {}, revisao: 'x', redacoes: [null], plano: 7 },
  'importados com null': { perfil: { nome: 'A', objetivo: 'enem', materias: ['portugues'] }, importados: [null, { nome: 'x', questoes: [{ id: 'constructor' }] }] },
  'id constructor no histórico': { perfil: { nome: 'A', objetivo: 'enem', materias: ['portugues'] }, respostas: { constructor: [{ certo: true }], __proto__: { x: 1 } } }
};

(async () => {
  const browser = await chromium.launch();
  let falhas = 0;
  for (const [nome, estado] of Object.entries(casos)) {
    const page = await (await browser.newContext()).newPage();
    const erros = [];
    page.on('pageerror', (e) => erros.push(e.message));
    await page.goto(URL);
    await page.evaluate((s) => localStorage.setItem('gabarito.v1', s), JSON.stringify(estado));
    for (const rota of ['#/', '#/simulados', '#/redacao/escrever', '#/redacao/historico', '#/plano', '#/ajustes', '#/questao/constructor', '#/aula/%E0%A4%A', '#/revisao']) {
      await page.goto(URL + rota);
      await page.reload();
      await page.waitForTimeout(150);
      const r = await page.evaluate(() => ({ xss: !!window.__xss, vazio: !document.getElementById('app').textContent.trim() }));
      if (r.xss || r.vazio) { falhas++; console.error('FALHOU [' + nome + '] ' + rota + (r.xss ? ' executou script' : ' tela em branco')); }
    }
    // Independente da CSP: nenhum texto do backup pode chegar ao HTML como marcação.
    const html = await page.evaluate(() => { location.hash = '#/'; return new Promise((r) => setTimeout(() => r(document.body.innerHTML), 200)); });
    if (/<img src="?x/i.test(html)) { falhas++; console.error('FALHOU [' + nome + '] marcação do backup chegou ao DOM'); }
    const tipos = await page.evaluate(() => { const e = Store.estado; return typeof e.perfil.metaDiaria === 'number' && e.simulados.every((s) => /^[a-z0-9-]+$/.test(s.id)) && e.redacoes.every((r) => r.notas.every((n) => typeof n === 'number')); });
    if (!tipos) { falhas++; console.error('FALHOU [' + nome + '] estado não foi normalizado'); }
    if (erros.length) { falhas++; console.error('FALHOU [' + nome + '] erros: ' + erros.slice(0, 3).join(' | ')); }
    await page.close();
  }
  await browser.close();
  if (falhas) process.exit(1);
  console.log('segurança: ' + Object.keys(casos).length + ' estados maliciosos testados em 9 telas, nenhum executou código nem travou o app');
})();
