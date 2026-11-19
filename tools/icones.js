/* Gera os ícones do Windows e do Android a partir da marca (bolhas de cartão-resposta).
   node tools/icones.js  (usa o Playwright global para desenhar o SVG em PNG) */
'use strict';
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { chromium } = require(path.join(execSync('npm root -g').toString().trim(), '@playwright', 'cli', 'node_modules', 'playwright'));

const raiz = path.join(__dirname, '..');
const TINTA = '#121722', MARCA = '#ffe45c';
const bolhas = '<circle cx="236" cy="512" r="96" fill="none" stroke="#ffffff" stroke-opacity=".55" stroke-width="36"/>' +
  `<circle cx="512" cy="512" r="126" fill="${MARCA}"/>` +
  '<circle cx="788" cy="512" r="96" fill="none" stroke="#ffffff" stroke-opacity=".55" stroke-width="36"/>';
const svg = {
  completo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><rect width="1024" height="1024" rx="230" fill="${TINTA}"/>${bolhas}</svg>`,
  redondo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="${TINTA}"/><g transform="translate(512 512) scale(.86) translate(-512 -512)">${bolhas}</g></svg>`,
  // Ícone adaptativo do Android: só o desenho, dentro da zona segura (66 de 108 dp).
  maskable: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><rect width="1024" height="1024" fill="${TINTA}"/><g transform="translate(512 512) scale(.72) translate(-512 -512)">${bolhas}</g></svg>`,
  frente: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><g transform="translate(512 512) scale(.6) translate(-512 -512)">${bolhas}</g></svg>`
};

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const desenhar = async (tipo, px, destino) => {
    await page.setViewportSize({ width: px, height: px });
    await page.setContent(`<html><body style="margin:0;background:transparent">${svg[tipo].replace('<svg ', `<svg width="${px}" height="${px}" `)}</body></html>`);
    fs.mkdirSync(path.dirname(destino), { recursive: true });
    await page.screenshot({ path: destino, omitBackground: true, clip: { x: 0, y: 0, width: px, height: px } });
  };
  await desenhar('completo', 512, path.join(raiz, 'desktop', 'recursos', 'icone.png'));
  await desenhar('completo', 192, path.join(raiz, 'www', 'icone-192.png'));
  await desenhar('completo', 512, path.join(raiz, 'www', 'icone-512.png'));
  await desenhar('maskable', 512, path.join(raiz, 'www', 'icone-maskable-512.png'));

  const res = path.join(raiz, 'android', 'app', 'src', 'main', 'res');
  if (fs.existsSync(res)) {
    const dens = { mdpi: 1, hdpi: 1.5, xhdpi: 2, xxhdpi: 3, xxxhdpi: 4 };
    for (const [d, f] of Object.entries(dens)) {
      await desenhar('completo', Math.round(48 * f), path.join(res, 'mipmap-' + d, 'ic_launcher.png'));
      await desenhar('redondo', Math.round(48 * f), path.join(res, 'mipmap-' + d, 'ic_launcher_round.png'));
      await desenhar('frente', Math.round(108 * f), path.join(res, 'mipmap-' + d, 'ic_launcher_foreground.png'));
    }
    const cor = path.join(res, 'values', 'ic_launcher_background.xml');
    fs.writeFileSync(cor, `<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="ic_launcher_background">${TINTA}</color>\n</resources>\n`);
  }
  await browser.close();
  console.log('ícones gerados' + (fs.existsSync(res) ? ' (Windows e Android)' : ' (Windows)'));
})();
