/* Testa o programa para Windows de verdade (Electron): node tests/desktop.js [executavel]
   Sem argumento usa o Electron do projeto; com o caminho do Gabarito.exe testa o build empacotado. */
'use strict';
const path = require('path');
const os = require('os');
const fs = require('fs');
const { execSync } = require('child_process');
const { _electron } = require(path.join(execSync('npm root -g').toString().trim(), '@playwright', 'cli', 'node_modules', 'playwright'));

const raiz = path.join(__dirname, '..');
const exe = process.argv[2];
const dados = fs.mkdtempSync(path.join(os.tmpdir(), 'gabarito-desktop-'));
const ok = (c, m) => { if (!c) throw new Error(m); };

async function abrir() {
  const opts = exe ? { executablePath: exe, args: ['--user-data-dir=' + dados] } : { executablePath: require(path.join(raiz, 'node_modules', 'electron')), args: [raiz, '--user-data-dir=' + dados] };
  const app = await _electron.launch(opts);
  const win = await app.firstWindow();
  const erros = [];
  win.on('pageerror', (e) => erros.push(e.message));
  win.on('console', (m) => { if (m.type() === 'error') erros.push(m.text()); });
  await win.waitForLoadState('domcontentloaded');
  return { app, win, erros };
}

(async () => {
  let { app, win, erros } = await abrir();
  ok((await win.title()).includes('Gabarito'), 'título da janela');
  const seguro = await win.evaluate(() => typeof require === 'undefined' && typeof process === 'undefined');
  ok(seguro, 'a página não pode ter acesso ao Node');
  await win.fill('#onb-nome', 'Desktop');
  await win.click('text=Começar');
  await win.click('button.opt >> nth=1');
  await win.click('text=Continuar');
  await win.click('text=Montar meu painel');
  await win.waitForSelector('.hero');
  const fonte = await win.evaluate(() => document.fonts.check('700 20px "Bricolage Grotesque"'));
  ok(fonte, 'fonte embutida carregada sem internet');
  await win.click('[data-act="sim-rapido"]');
  await win.waitForSelector('#r-area .q');
  await win.keyboard.press((await win.locator('#r-area .ce').count()) ? 'c' : 'a');
  await win.keyboard.press('Enter');
  await win.waitForSelector('#r-area .verdict');
  // Link externo não pode abrir dentro da janela do app.
  // shell.openExternal é interceptado no teste para não abrir o navegador de verdade.
  await app.evaluate(({ shell }) => { global.__links = []; shell.openExternal = async (u) => { global.__links.push(u); }; });
  const antes = app.windows().length;
  await win.evaluate(() => { const a = document.querySelector('.source'); if (a) a.click(); });
  await win.waitForTimeout(500);
  ok(app.windows().length === antes && win.url().startsWith('file://'), 'link externo não navega a janela do app');
  const links = await app.evaluate(() => global.__links);
  ok(links.length === 1 && links[0].startsWith('https://'), 'link externo vai para o navegador do sistema');
  await win.screenshot({ path: path.join(os.tmpdir(), 'gabarito-desktop.png') });
  ok(!erros.length, 'erros na página: ' + erros.join(' | '));
  await app.close();

  // Reabre: o progresso tem de continuar lá.
  ({ app, win, erros } = await abrir());
  await win.waitForSelector('.hero');
  const nome = await win.textContent('.hero h1');
  ok(nome.includes('Desktop'), 'progresso persiste ao fechar e abrir o programa');
  await app.close();
  console.log('desktop: janela, segurança, fontes offline, simulado, links externos e persistência ok' + (exe ? ' (build empacotado)' : ''));
})().catch((e) => { console.error('FALHOU ' + e.message); process.exit(1); });
