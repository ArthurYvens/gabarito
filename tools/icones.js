/* Gera os ícones (Windows, Android e site instalável) a partir do símbolo da Helma: o arco dourado com a chama
   sobre o índigo (www/marca/helma-icone.svg, criado por tools/logo.js).  node tools/icones.js */
'use strict';
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const raiz = path.join(__dirname, '..');
const INDIGO = '#211735';
const icone = fs.readFileSync(path.join(raiz, 'www', 'marca', 'helma-icone.svg'), 'utf8');
const chama = icone.slice(icone.indexOf('<g '), icone.lastIndexOf('</g>') + 4); // o arco com a chama, já posicionado em 1024x1024
const centro = (escala) => `<g transform="translate(512 512) scale(${escala}) translate(-512 -512)">${chama}</g>`;
const svg = {
  completo: icone,
  redondo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="${INDIGO}"/>${centro(0.9)}</svg>`,
  maskable: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><rect width="1024" height="1024" fill="${INDIGO}"/>${centro(0.78)}</svg>`,
  // Ícone adaptativo do Android: só o símbolo, dentro da zona segura (66 de 108 dp).
  frente: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">${centro(0.62)}</svg>`
};

async function desenhar(tipo, px, destino) {
  fs.mkdirSync(path.dirname(destino), { recursive: true });
  await sharp(Buffer.from(svg[tipo]), { density: 300 }).resize(px, px).png().toFile(destino);
}

(async () => {
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
    fs.writeFileSync(path.join(res, 'values', 'ic_launcher_background.xml'), `<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="ic_launcher_background">${INDIGO}</color>\n</resources>\n`);
  }
  console.log('ícones da Helma gerados (Windows, site e Android)');
})().catch((e) => { console.error(e); process.exit(1); });
