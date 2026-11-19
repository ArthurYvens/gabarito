/* Testa o APK num emulador ou celular conectado por adb: node tests/android.js [apk] [pasta-capturas]
   Precisa de um aparelho em "adb devices" e do Playwright global. */
'use strict';
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');
const { _android } = require(path.join(execSync('npm root -g').toString().trim(), '@playwright', 'cli', 'node_modules', 'playwright'));

const raiz = path.join(__dirname, '..');
const APK = process.argv[2] || path.join(raiz, 'android', 'app', 'build', 'outputs', 'apk', 'debug', 'app-debug.apk');
const OUT = process.argv[3] || os.tmpdir();
const PKG = 'br.com.gabarito.app';
const ok = (c, m) => { if (!c) throw new Error(m); };

(async () => {
  const [device] = await _android.devices();
  ok(device, 'nenhum aparelho Android conectado');
  await device.shell('pm uninstall ' + PKG).catch(() => {});
  await device.installApk(require('fs').readFileSync(APK));
  const abrir = async () => {
    await device.shell('am force-stop ' + PKG);
    await device.shell('am start -n ' + PKG + '/.MainActivity');
    const wv = await device.webView({ pkg: PKG });
    const page = await wv.page();
    await page.waitForLoadState('domcontentloaded');
    return page;
  };
  let page = await abrir();
  const erros = [];
  page.on('pageerror', (e) => erros.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error' && !/Share canceled/.test(m.text())) erros.push(m.text()); }); // fechar o compartilhar é cancelar, não erro

  ok(await page.evaluate(() => !!(window.Capacitor && Capacitor.isNativePlatform() && Capacitor.Plugins.Filesystem && Capacitor.Plugins.Share)),
    'ponte nativa do Capacitor carregada (CSP não bloqueou)');
  await page.fill('#onb-nome', 'Celular');
  await page.click('text=Começar');
  await page.click('button.opt >> nth=0');
  await page.click('text=Continuar');
  await page.click('text=Montar meu painel');
  await page.waitForSelector('.hero');
  ok(await page.evaluate(() => document.fonts.check('700 20px "Bricolage Grotesque"')), 'fontes embutidas no APK');
  ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), 'sem rolagem horizontal no início');
  await device.screenshot({ path: path.join(OUT, 'android-inicio.png') });

  await page.click('[data-act="sim-rapido"]');
  await page.waitForSelector('#r-area .q');
  await page.click('#r-area .alt >> nth=0');
  await page.click('[data-act="r-responder"]');
  await page.waitForSelector('#r-area .verdict');
  await device.screenshot({ path: path.join(OUT, 'android-questao.png') });

  // Botão Voltar do Android volta uma tela no app, não fecha o programa.
  const urlSimulado = page.url();
  await page.click('[data-act="r-sair"]');
  await page.waitForSelector('#montador');
  await device.shell('input keyevent 4');
  await page.waitForTimeout(1000);
  ok(page.url() === urlSimulado, 'Voltar do Android volta para a tela anterior do app, foi para ' + page.url());
  ok((await device.shell('dumpsys window | grep mCurrentFocus')).toString().includes(PKG), 'o app continua aberto depois do Voltar');

  // Exportar backup: grava o arquivo e abre o compartilhar do sistema.
  await page.evaluate(() => { location.hash = '#/ajustes'; });
  await page.waitForSelector('[data-act="aj-exportar"]');
  await page.evaluate(() => { window.__exp = UI.baixar('teste.json', '{"ok":1}'); });
  let tela = '';
  for (let i = 0; i < 12 && !/chooser|ResolverActivity|intentresolver/i.test(tela); i++) {
    await page.waitForTimeout(500).catch(() => {});
    tela = (await device.shell('dumpsys window | grep -E "mCurrentFocus|mFocusedApp"')).toString();
  }
  ok(/chooser|ResolverActivity|intentresolver/i.test(tela.toString()), 'compartilhar do sistema abriu: ' + tela.toString().trim());
  await device.screenshot({ path: path.join(OUT, 'android-compartilhar.png') });
  await device.shell('input keyevent 4');

  // Minhas questões: colar uma prova, salvar no IndexedDB do aparelho.
  await page.evaluate(() => { location.hash = '#/minhas-questoes'; });
  await page.click('[data-act="mq-modo"][data-modo="texto"]');
  await page.fill('#mq-texto', '1. Quanto é 2 + 2?\nA) 1\nB) 2\nC) 3\nD) 4\nE) 5\n2. Quanto é 3 x 3?\nA) 6\nB) 9\nC) 12\nD) 3\nE) 0');
  await page.fill('#mq-gabarito', '1-D 2-B');
  await page.click('[data-act="mq-reconhecer"]');
  await page.waitForSelector('.rv-card');
  await page.click('[data-act="rv-salvar"]');
  await page.waitForSelector('dialog[open]');
  await page.click('dialog button[value="nao"]');
  await device.screenshot({ path: path.join(OUT, 'android-minhas.png') });

  // Persistência: fecha à força e abre de novo.
  page = await abrir();
  await page.waitForSelector('.hero');
  ok((await page.textContent('.hero h1')).includes('Celular'), 'progresso persiste depois de fechar o app');
  ok(await page.evaluate(() => App.bancos.length === 1 && App.bancos[0].questoes.length === 2), 'banco do aluno persiste no IndexedDB do celular');
  ok(!erros.length, 'erros na página: ' + erros.join(' | '));
  await device.close();
  console.log('android: ponte nativa, fontes, simulado, Voltar, exportar e persistência ok. Capturas em ' + OUT);
})().catch((e) => { console.error('FALHOU ' + e.message); process.exit(1); });
