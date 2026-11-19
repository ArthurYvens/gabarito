/* Copia as fontes (licença OFL, pacotes @fontsource) para www/fonts e gera www/css/fontes.css,
   para o app funcionar sem internet no Windows e no celular. node tools/fontes.js */
'use strict';
const fs = require('fs');
const path = require('path');

const raiz = path.join(__dirname, '..');
const FONTES = {
  'Bricolage Grotesque': ['bricolage-grotesque', [600, 700, 800]],
  'IBM Plex Sans': ['ibm-plex-sans', [400, 500, 600, 700]],
  'IBM Plex Mono': ['ibm-plex-mono', [500, 600, 700]],
  'Literata': ['literata', [400, 700]]
};
const destino = path.join(raiz, 'www', 'fonts');
fs.mkdirSync(destino, { recursive: true });

let css = '/* Gerado por tools/fontes.js. Fontes sob a SIL Open Font License. */\n';
for (const [familia, [pacote, pesos]] of Object.entries(FONTES)) {
  for (const peso of pesos) {
    const nome = `${pacote}-latin-${peso}-normal.woff2`;
    fs.copyFileSync(path.join(raiz, 'node_modules', '@fontsource', pacote, 'files', nome), path.join(destino, nome));
    css += `@font-face { font-family: '${familia}'; font-style: normal; font-weight: ${peso}; font-display: swap; src: url('../fonts/${nome}') format('woff2'); }\n`;
  }
}
fs.writeFileSync(path.join(raiz, 'www', 'css', 'fontes.css'), css);

// pdf.js (Apache-2.0) para ler provas em PDF no próprio aparelho.
const pdfDestino = path.join(raiz, 'www', 'vendor', 'pdfjs');
fs.mkdirSync(pdfDestino, { recursive: true });
for (const f of ['pdf.min.js', 'pdf.worker.min.js']) fs.copyFileSync(path.join(raiz, 'node_modules', 'pdfjs-dist', 'build', f), path.join(pdfDestino, f));
fs.copyFileSync(path.join(raiz, 'node_modules', 'pdfjs-dist', 'LICENSE'), path.join(pdfDestino, 'LICENSE'));
console.log('fontes copiadas para www/fonts e pdf.js para www/vendor/pdfjs');
