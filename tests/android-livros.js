/* Livros e "Criar questões de um texto" no app Android (emulador ou celular por adb), com o APK já instalado
   por tests/android.js: node tests/android-livros.js [pdf-de-teste] [pasta-capturas] */
'use strict';
const path = require('path');
const fs = require('fs');
const os = require('os');
const { execSync } = require('child_process');
const { _android } = require(path.join(execSync('npm root -g').toString().trim(), '@playwright', 'cli', 'node_modules', 'playwright'));

const PDF = process.argv[2] || '';
const OUT = process.argv[3] || os.tmpdir();
const PKG = 'br.com.gabarito.app';
let passo = '';
const ok = (c, m) => { if (!c) throw new Error('[' + passo + '] ' + m); };
const TXT = fs.readFileSync(path.join(__dirname, 'livros.js'), 'utf8').match(/const TXT = `([\s\S]*?)`;/)[1];

(async () => {
  const [device] = await _android.devices();
  ok(device, 'nenhum aparelho Android conectado');
  const abrir = async () => {
    await device.shell('am force-stop ' + PKG);
    await device.shell('am start -n ' + PKG + '/.MainActivity');
    const page = await (await device.webView({ pkg: PKG })).page();
    await page.waitForLoadState('domcontentloaded');
    return page;
  };
  let page = await abrir();
  const erros = [];
  const ouvir = (p) => { p.on('pageerror', (e) => erros.push(e.message)); p.on('console', (m) => { if (m.type() === 'error' && !/Share canceled/.test(m.text())) erros.push(m.text()); }); };
  ouvir(page);
  if (await page.locator('#onb-nome').count()) {
    await page.evaluate(() => { localStorage.setItem('gabarito.v1', JSON.stringify({ perfil: { nome: 'Celular', objetivo: 'enem', materias: ['historia'], metaDiaria: 10, metaSemanal: 40 } })); location.reload(); });
    await page.waitForLoadState('domcontentloaded');
  }
  const semRolagem = () => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1);

  passo = 'estante';
  await page.evaluate(() => { location.hash = '#/livros'; });
  await page.waitForSelector('#lv-arquivos', { state: 'attached' });
  const arquivos = [{ name: 'Revolução Industrial.txt', mimeType: 'text/plain', buffer: Buffer.from(TXT) }];
  if (PDF) arquivos.push({ name: path.basename(PDF), mimeType: 'application/pdf', buffer: fs.readFileSync(PDF) });
  await page.setInputFiles('#lv-arquivos', arquivos);
  await page.waitForFunction((n) => document.querySelectorAll('#lv-lista .list-item').length === n, arquivos.length, { timeout: 60000 });
  ok(await semRolagem(), 'estante sem rolagem horizontal');
  await device.screenshot({ path: path.join(OUT, 'android-estante.png') });

  passo = 'leitor de texto';
  await page.click('#lv-lista .list-item:has-text("Revolução Industrial") a.lv-abrir');
  await page.waitForSelector('#lv-texto');
  ok((await page.textContent('#lv-texto')).includes('máquina a vapor'), 'texto do livro aparece com acentos');
  ok(await semRolagem(), 'leitor sem rolagem horizontal');
  await device.screenshot({ path: path.join(OUT, 'android-leitor-texto.png') });

  if (PDF) {
    passo = 'leitor de PDF';
    await page.evaluate(() => { location.hash = '#/livros'; });
    await page.waitForSelector('#lv-lista .list-item');
    await page.locator('#lv-lista .list-item', { hasNotText: 'Revolução' }).locator('a.lv-abrir').click();
    await page.waitForFunction(() => { const c = document.getElementById('lv-canvas'); return c && c.width > 100 && c.hasAttribute('data-pronto'); }, null, { timeout: 60000 });
    await page.fill('#lv-pg', '20'); await page.keyboard.press('Tab');
    await page.waitForFunction(() => document.getElementById('lv-pg').value === '20' && document.getElementById('lv-canvas').hasAttribute('data-pronto'), null, { timeout: 30000 });
    ok(await semRolagem(), 'leitor de PDF sem rolagem horizontal');
    await device.screenshot({ path: path.join(OUT, 'android-leitor-pdf.png') });

    passo = 'posição depois de fechar o app';
    await page.waitForTimeout(500);
    page = await abrir(); ouvir(page);
    await page.evaluate(() => { location.hash = '#/livros'; });
    await page.waitForSelector('#lv-lista .list-item');
    ok(await page.locator('#lv-lista .list-item').count() === arquivos.length, 'livros continuam na estante depois de fechar o app');
    await page.locator('#lv-lista .list-item', { hasNotText: 'Revolução' }).locator('a.lv-abrir').click();
    await page.waitForFunction(() => document.getElementById('lv-pg') && document.getElementById('lv-pg').value === '20', null, { timeout: 60000 });
  }

  passo = 'criar questões de um texto';
  await page.evaluate(() => { location.hash = '#/livros'; });
  await page.click('#lv-lista .list-item:has-text("Revolução Industrial") [data-act="lv-contexto"]');
  await page.waitForSelector('[data-doc]:checked', { timeout: 30000 });
  await page.selectOption('#cx-tipo', 'lacuna5');
  await page.fill('#cx-qtd', '4');
  await page.selectOption('#cx-materia', 'historia');
  await device.screenshot({ path: path.join(OUT, 'android-criar.png') });
  await page.click('[data-act="cx-gerar"]');
  await page.waitForSelector('.rv-card', { timeout: 30000 });
  const n = await page.locator('.rv-card').count();
  ok(n >= 2, 'questões geradas no aparelho: ' + n);
  ok(await semRolagem(), 'revisão sem rolagem horizontal');
  await device.screenshot({ path: path.join(OUT, 'android-revisao.png') });
  await page.click('[data-act="rv-salvar"]');
  await page.waitForSelector('dialog[open]');
  await page.click('dialog button[value="nao"]');
  await page.waitForFunction(() => App.bancos.some((b) => b.origem === 'contexto'), null, { timeout: 15000 });

  passo = 'botão Voltar do Android';
  await page.evaluate(() => { location.hash = '#/livros'; });
  await page.waitForSelector('#lv-lista');
  await page.evaluate(() => { location.hash = '#/livros/' + encodeURIComponent(document.querySelector('#lv-lista a.lv-abrir').getAttribute('href').split('/').pop()); });
  await page.waitForTimeout(800);
  await device.shell('input keyevent 4');
  await page.waitForTimeout(1000);
  ok(/#\/livros$/.test(page.url()), 'Voltar sai do leitor para a estante: ' + page.url());

  ok(!erros.length, 'erros de JavaScript no aparelho: ' + erros.join(' | '));
  console.log('android livros: estante, leitor de texto' + (PDF ? ' e de PDF real (posição depois de fechar o app)' : '') + ', criar questões no aparelho, salvar e Voltar ok. Capturas em ' + OUT);
  process.exit(0);
})().catch((e) => { console.error('FALHOU', e.message); process.exit(1); });
