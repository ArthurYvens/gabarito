/* Gera a tela de abertura do Android a partir da Helma (design/helma-inicio.png): fundo marfim com o desenho no centro.
   - splash.png (Android 11 e anteriores, retrato e paisagem em cada densidade);
   - splash_helma.png (Android 12+: ícone da tela de abertura do sistema, que o Android recorta em círculo).
   node tools/abertura.js */
'use strict';
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const raiz = path.join(__dirname, '..');
const res = path.join(raiz, 'android', 'app', 'src', 'main', 'res');
const ORIGEM = path.join(raiz, 'design', 'helma-inicio.png');
const MARFIM = { r: 250, g: 246, b: 237, alpha: 1 };

async function tela(larg, alt, destino) {
  const h = Math.round(Math.min(larg, alt) * 0.42); // altura do desenho: ~42% do lado menor
  const desenho = await sharp(ORIGEM).resize({ height: h }).toBuffer();
  await sharp({ create: { width: larg, height: alt, channels: 4, background: MARFIM } })
    .composite([{ input: desenho, gravity: 'center' }]).png({ compressionLevel: 9 }).toFile(destino);
}

(async () => {
  // Tamanhos que o Capacitor já usa em cada pasta (retrato x paisagem).
  for (const pasta of fs.readdirSync(res).filter((p) => /^drawable(-(port|land)-\w+)?$/.test(p))) {
    const arq = path.join(res, pasta, 'splash.png');
    if (!fs.existsSync(arq)) continue;
    const { width, height } = await sharp(arq).metadata();
    await tela(width, height, arq);
  }
  // Android 12+: 288 dp com o conteúdo dentro do círculo de 192 dp (2/3), aqui em 1152 px (xxxhdpi).
  const lado = 1152, alvo = Math.round(lado * 0.58);
  const desenho = await sharp(ORIGEM).resize({ height: alvo }).toBuffer();
  fs.mkdirSync(path.join(res, 'drawable-nodpi'), { recursive: true });
  await sharp({ create: { width: lado, height: lado, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: desenho, gravity: 'center' }]).png({ compressionLevel: 9 }).toFile(path.join(res, 'drawable-nodpi', 'splash_helma.png'));
  console.log('abertura do Android gerada');
})();
