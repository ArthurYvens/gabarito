/* Vetoriza a marca Helma a partir da referência (design/referencia-marca.webp): recorta o retrato e o ícone,
   separa as camadas de cor (índigo e dourado) e traça cada uma com potrace. Gera www/marca/*.svg.
   node tools/logo.js */
'use strict';
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const potrace = require('potrace');

const raiz = path.join(__dirname, '..');
const REF = path.join(raiz, 'design', 'referencia-marca.webp');
const SAIDA = path.join(raiz, 'www', 'marca');
const INDIGO = '#211735', DOURADO = '#C48628', DOURADO_CLARO = '#E3A93B';
const ESCALA = 4; // ampliar antes de traçar deixa as curvas mais suaves

// Classificação de cor por pixel. O fundo da referência é marfim; o retrato usa índigo e dourado.
const ehDourado = (r, g, b) => r > 150 && g > 90 && b < 140 && r - b > 70;
const ehIndigo = (r, g, b) => r + g + b < 330 && b >= g - 10 && !ehDourado(r, g, b);

async function camadas(regiao, testes) {
  const { data, info } = await sharp(REF).extract(regiao).resize(regiao.width * ESCALA, regiao.height * ESCALA, { kernel: 'lanczos3' })
    .removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const mascaras = testes.map(() => Buffer.alloc(info.width * info.height, 255));
  for (let i = 0, p = 0; i < data.length; i += 3, p++) {
    testes.forEach((t, k) => { if (t(data[i], data[i + 1], data[i + 2])) mascaras[k][p] = 0; });
  }
  const pngs = await Promise.all(mascaras.map((m) => sharp(m, { raw: { width: info.width, height: info.height, channels: 1 } }).png().toBuffer()));
  return { pngs, largura: info.width, altura: info.height };
}

function tracar(png, cor) {
  return new Promise((ok, falha) => {
    const t = new potrace.Potrace({ threshold: 128, turdSize: 24, optTolerance: 0.35, color: cor, background: 'transparent' });
    t.loadImage(png, (err) => (err ? falha(err) : ok(t.getPathTag(cor))));
  });
}

(async () => {
  fs.mkdirSync(SAIDA, { recursive: true });

  // Retrato: índigo (traço, cabelo, rosto) e dourado (faixa e chama).
  const ret = await camadas({ left: 96, top: 22, width: 344, height: 410 }, [ehIndigo, ehDourado]);
  const [pIndigo, pDourado] = await Promise.all([tracar(ret.pngs[0], INDIGO), tracar(ret.pngs[1], DOURADO)]);
  const retrato = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${ret.largura} ${ret.altura}" role="img" aria-label="Helma">${pIndigo}${pDourado}</svg>\n`;
  fs.writeFileSync(path.join(SAIDA, 'helma-retrato.svg'), retrato);
  // Variante para fundo escuro: traço em marfim, dourado igual.
  fs.writeFileSync(path.join(SAIDA, 'helma-retrato-claro.svg'), retrato.split(INDIGO).join('#FAF6ED'));

  // Ícone: só o arco e a chama dourados; o quadrado índigo é desenhado limpo.
  const ico = await camadas({ left: 1156, top: 92, width: 304, height: 296 }, [ehDourado]);
  const chama = await tracar(ico.pngs[0], DOURADO_CLARO);
  const s = 1024 / ico.largura;
  const icone = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" role="img" aria-label="Helma"><rect width="1024" height="1024" rx="226" fill="${INDIGO}"/>` +
    `<g transform="translate(0 ${(1024 - ico.altura * s) / 2}) scale(${s})">${chama}</g></svg>\n`;
  fs.writeFileSync(path.join(SAIDA, 'helma-icone.svg'), icone);
  // Só a chama, para usar sobre fundos claros (sequência de dias, conquistas).
  fs.writeFileSync(path.join(SAIDA, 'helma-chama.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${ico.largura} ${ico.altura}">${chama.replace(DOURADO_CLARO, DOURADO)}</svg>\n`);

  for (const f of fs.readdirSync(SAIDA)) console.log(f, Math.round(fs.statSync(path.join(SAIDA, f)).size / 1024) + ' KB');
})().catch((e) => { console.error(e); process.exit(1); });
