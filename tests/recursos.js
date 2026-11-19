/* Teste ponta a ponta dos recursos de estudo: node tests/recursos.js [url] [pasta]
   Diagnóstico, dicas graduais, confiança, tempo por questão, cartões, sugestão, meta semanal, sessões e desempenho. */
'use strict';
const path = require('path');
const fs = require('fs');
const os = require('os');
const { execSync } = require('child_process');
const { chromium } = require(path.join(execSync('npm root -g').toString().trim(), '@playwright', 'cli', 'node_modules', 'playwright'));

const URL = process.argv[2] || 'http://localhost:5321/';
const OUT = process.argv[3] || fs.mkdtempSync(path.join(os.tmpdir(), 'helma-recursos-'));
fs.mkdirSync(OUT, { recursive: true });
let passo = '';
const ok = (c, m) => { if (!c) throw new Error('[' + passo + '] ' + m); };

(async () => {
  const browser = await chromium.launch();
  const page = await (await browser.newContext({ viewport: { width: 1360, height: 900 } })).newPage();
  const erros = [];
  page.on('pageerror', (e) => erros.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) erros.push(m.text()); });
  const foto = async (n) => { await page.waitForTimeout(400); await page.screenshot({ path: path.join(OUT, n + '.png'), fullPage: true }); };

  passo = 'diagnóstico';
  await page.goto(URL);
  await page.evaluate(() => localStorage.setItem('gabarito.v1', JSON.stringify({ perfil: { nome: 'Ana', objetivo: 'enem', materias: ['portugues', 'matematica', 'enem-natureza'], metaDiaria: 10, metaSemanal: 40 } })));
  await page.reload();
  await page.waitForSelector('[data-act="diagnostico-iniciar"]');
  await foto('r1-inicio-novato');
  await page.click('[data-act="diagnostico-iniciar"]');
  await page.waitForSelector('#r-area .q');
  const total = await page.locator('#r-map button').count();
  ok(total === 6, 'diagnóstico com 2 assuntos por matéria (6), veio ' + total);
  for (let i = 0; i < total; i++) { await page.keyboard.press((await page.locator('#r-area .ce').count()) ? 'c' : 'a'); await page.keyboard.press('ArrowRight'); }
  await page.click('[data-act="r-finalizar"] >> nth=0');
  if (await page.locator('dialog[open]').count()) await page.click('dialog button[value="sim"]');
  await page.waitForSelector('a[href="#/plano"].btn');
  await foto('r2-resultado-diagnostico');

  passo = 'dicas, confiança e tempo';
  const qid = await page.evaluate(() => Banco.questoes.find((q) => q.tipo === 'multipla' && q.materia === 'portugues' && !Store.estado.respostas[q.id]).id);
  await page.goto(URL + '#/questao/' + encodeURIComponent(qid));
  await page.waitForSelector('.q-ferramentas');
  await page.click('[data-act="dica"]');
  await page.click('[data-act="dica"]');
  await page.click('[data-act="dica"]');
  ok(await page.locator('.dicas li').count() === 3, 'três dicas graduais');
  ok(await page.locator('.alt.struck').count() === 2, 'duas alternativas eliminadas pelas dicas');
  ok((await page.textContent('.q-ferramentas')).includes('Todas as dicas usadas'), 'limite de dicas');
  await page.click('[data-act="confianca"][data-v="2"]');
  await page.waitForTimeout(1200);
  const certa = await page.evaluate((id) => Banco.questao(id).resposta, qid);
  await page.click('.alt[data-i="' + certa + '"]');
  await foto('r3-questao-com-dicas');
  await page.click('[data-act="qv-responder"]');
  await page.waitForSelector('.verdict');
  const h = await page.evaluate((id) => Store.estado.respostas[id].slice(-1)[0], qid);
  ok(h.conf === 2 && h.dicas === 3 && h.ms >= 1000, 'resposta guarda confiança, dicas e tempo: ' + JSON.stringify(h));
  ok((await page.textContent('.q')).includes('Certeza confirmada'), 'retorno de confiança');
  await foto('r4-questao-respondida');

  passo = 'cartão a partir da questão';
  await page.click('[data-act="cartao-da-questao"]');
  await page.waitForSelector('.toast.show');
  ok(await page.evaluate(() => Object.keys(Store.estado.cartoes).length) === 1, 'cartão criado');
  await page.goto(URL + '#/cartoes');
  await page.waitForSelector('.page-head');
  await foto('r5-cartoes');

  passo = 'questão já respondida';
  await page.goto(URL + '#/questoes');
  await page.waitForSelector('.page-head');
  await page.goto(URL + '#/questao/' + encodeURIComponent(qid));
  await page.waitForSelector('[data-act="qv-de-novo"]');
  ok(await page.locator('.verdict').count() === 1, 'reabre mostrando a correção');
  ok(await page.evaluate((id) => Store.estado.respostas[id].length, qid) === 1, 'reabrir não registra tentativa nova');
  await page.click('[data-act="qv-de-novo"]');
  await page.waitForSelector('[data-act="qv-responder"]');

  passo = 'sugestão, meta da semana e sessões';
  await page.goto(URL + '#/');
  await page.waitForSelector('.hero');
  ok(await page.locator('.sugestao').count() <= 1, 'no máximo um cartão de próximo treino');
  ok((await page.textContent('.meta-semana')).includes('de 40'), 'meta da semana com o valor do perfil');
  await foto('r6-inicio');
  await page.goto(URL + '#/plano');
  await page.click('[data-act="plano-gerar"]');
  await page.waitForSelector('.plan');
  const temHoje = await page.locator('[data-act="sessao-feita"]').count();
  if (temHoje) {
    await page.click('[data-act="sessao-feita"]');
    ok(await page.evaluate(() => Object.values(Store.estado.sessoes)[0]) === 1, 'sessão do dia registrada');
    ok(await page.evaluate(() => { for (let i = 0; i < 20; i++) App.acoes['sessao-feita'](); return Object.values(Store.estado.sessoes)[0] === Store.estado.plano.semana[new Date().getDay()].length; }), 'cliques repetidos não passam do total do dia');
  }
  await foto('r7-plano');

  passo = 'desempenho';
  await page.goto(URL + '#/desempenho');
  await page.waitForSelector('.page-head');
  await foto('r8-desempenho');

  passo = 'modo prova';
  await page.evaluate((id) => App.criarSimulado({ ids: [id], modo: 'prova' }, 'Prova curta'), qid);
  await page.waitForSelector('#r-area .q');
  ok(await page.locator('[data-act="dica"]').count() === 0, 'sem dica no modo prova');
  const sid = await page.evaluate(() => location.hash.split('/').pop());
  await page.goto(URL + '#/');
  await page.waitForSelector('.hero');
  ok(await page.evaluate((s) => !!Store.estado.simulados.find((y) => y.id === s).pausadoEm, sid), 'sair da prova marca a pausa');
  await page.evaluate((s) => { const x = Store.estado.simulados.find((y) => y.id === s); x.pausadoEm = Date.now() - 60000; x.decorridoSeg = 0; }, sid);
  await page.goto(URL + '#/simulado/' + sid);
  await page.waitForSelector('#r-area .q');
  ok(await page.evaluate((s) => { const x = Store.estado.simulados.find((y) => y.id === s); return x.decorridoSeg >= 60 && !x.pausadoEm; }, sid), 'tempo fora da tela conta na prova');

  passo = 'persistência';
  await page.goto(URL + '#/desempenho');
  await page.reload();
  await page.waitForSelector('.page-head');
  ok(await page.evaluate(() => Object.keys(Store.estado.cartoes).length === 1 && Store.estado.perfil.metaSemanal === 40), 'cartões e meta semanal persistem');

  ok(!erros.length, 'erros na página: ' + erros.join(' | '));
  await browser.close();
  console.log('recursos: diagnóstico, dicas, confiança, tempo, cartões, sugestão, meta da semana, sessões e desempenho ok');
})().catch((e) => { console.error('FALHOU [' + passo + '] ' + e.message); process.exit(1); });
