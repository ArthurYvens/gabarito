/* Gera as cinco poses da personagem Helma a partir da folha de referência (cinco vistas lado a lado:
   perfil esquerdo, três-quartos esquerdo, frente, três-quartos direito, perfil direito).
   Detecta as figuras sozinho, recorta todas no mesmo enquadramento (para a troca de pose não "pular")
   e vetoriza as camadas índigo e amarela com potrace.
   node tools/personagem.js design/personagem-poses.webp [olhoX1 olhoX2 olhoY larguraOlho] */
'use strict';
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const potrace = require('potrace');

const raiz = path.join(__dirname, '..');
const ARQ = path.resolve(process.argv[2] || path.join(raiz, 'design', 'personagem-poses.webp'));
const SAIDA = path.join(raiz, 'www', 'marca', 'personagem');
const POSES = ['perfil-esq', 'tres-quartos-esq', 'frente', 'tres-quartos-dir', 'perfil-dir'];
const INDIGO = '#2a1d45', AMARELO = '#F2C21B', MARFIM = '#FAF6ED';
const ESCALA = 3;

const ehAmarelo = (r, g, b) => r > 190 && g > 140 && b < 120;
const ehTinta = (r, g, b) => r + g + b < 330 && !ehAmarelo(r, g, b);
const ehDesenho = (r, g, b) => ehTinta(r, g, b) || ehAmarelo(r, g, b);

// Máximo (dilatação) de uma máscara 0/1 numa janela quadrada de raio r, separável.
function dilatar(m, w, h, r) {
  const t = new Uint8Array(m.length), o = new Uint8Array(m.length);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    let v = 0; for (let k = Math.max(0, x - r); k <= Math.min(w - 1, x + r) && !v; k++) v = m[y * w + k]; t[y * w + x] = v;
  }
  for (let x = 0; x < w; x++) for (let y = 0; y < h; y++) {
    let v = 0; for (let k = Math.max(0, y - r); k <= Math.min(h - 1, y + r) && !v; k++) v = t[k * w + x]; o[y * w + x] = v;
  }
  return o;
}
/* Silhueta: tudo que o fundo não alcança vindo do topo e das laterais (rosto, pescoço, bolinhas do lenço).
   O traço é engrossado em r para fechar pontas soltas e a silhueta é afinada em r de volta. */
function silhueta(desenho, w, h, r) {
  const parede = dilatar(desenho, w, h, r);
  let base = h - 1; while (base > 0 && !desenho.subarray(base * w, base * w + w).some(Boolean)) base--;
  const fora = new Uint8Array(w * h), fila = new Int32Array(w * h);
  let a = 0, z = 0;
  const semear = (p) => { if (!parede[p] && !fora[p]) { fora[p] = 1; fila[z++] = p; } };
  for (let x = 0; x < w; x++) semear(x);
  for (let y = 0; y < base; y++) { semear(y * w); semear(y * w + w - 1); }
  while (a < z) {
    const p = fila[a++], x = p % w, y = (p - x) / w;
    if (x > 0) semear(p - 1); if (x < w - 1) semear(p + 1); if (y > 0) semear(p - w); if (y < base - 1) semear(p + w);
  }
  const dentro = new Uint8Array(w * h);
  for (let p = 0; p < w * base; p++) dentro[p] = fora[p] ? 0 : 1;
  const afinada = dilatar(dentro.map((v) => 1 - v), w, h, r); // erosão = dilatação do complemento
  const m = Buffer.alloc(w * h, 255);
  for (let p = 0; p < w * h; p++) if (dentro[p] && !afinada[p]) m[p] = 0;
  return m;
}

function tracar(png, cor) {
  return new Promise((ok, falha) => {
    const t = new potrace.Potrace({ threshold: 128, turdSize: 18, optTolerance: 0.35, color: cor, background: 'transparent' });
    t.loadImage(png, (e) => (e ? falha(e) : ok(t.getPathTag(cor))));
  });
}

(async () => {
  const { data, info } = await sharp(ARQ).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const W = info.width, H = info.height;
  // Perfil das colunas: quantos pixels de desenho há em cada coluna.
  const col = new Array(W).fill(0), lin = new Array(H).fill(0);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const i = (y * W + x) * 3;
    if (ehDesenho(data[i], data[i + 1], data[i + 2])) { col[x]++; lin[y]++; }
  }
  // Grupos de colunas com desenho, separados por faixas vazias: cada grupo é uma figura.
  const grupos = [];
  let ini = -1, vazio = 0;
  for (let x = 0; x < W; x++) {
    if (col[x] > 2) { if (ini < 0) ini = x; vazio = 0; }
    else if (ini >= 0 && ++vazio > W * 0.012) { grupos.push([ini, x - vazio]); ini = -1; vazio = 0; }
  }
  if (ini >= 0) grupos.push([ini, W - 1]);
  const figuras = grupos.filter((g) => g[1] - g[0] > W * 0.05);
  if (figuras.length !== 5) throw new Error('esperava 5 figuras na folha, achei ' + figuras.length);
  const topo = lin.findIndex((v) => v > 2), base = H - 1 - lin.slice().reverse().findIndex((v) => v > 2);
  const largura = Math.max(...figuras.map((g) => g[1] - g[0])) + 24, altura = base - topo + 24;

  fs.mkdirSync(SAIDA, { recursive: true });
  for (let k = 0; k < 5; k++) {
    const centro = Math.round((figuras[k][0] + figuras[k][1]) / 2);
    const left = Math.max(0, Math.min(W - largura, centro - Math.round(largura / 2)));
    const regiao = { left, top: Math.max(0, topo - 12), width: largura, height: Math.min(altura, H - Math.max(0, topo - 12)) };
    const amp = await sharp(ARQ).extract(regiao).resize(regiao.width * ESCALA, regiao.height * ESCALA, { kernel: 'lanczos3' }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
    const mTinta = Buffer.alloc(amp.info.width * amp.info.height, 255), mAm = Buffer.alloc(amp.info.width * amp.info.height, 255);
    const desenho = new Uint8Array(amp.info.width * amp.info.height);
    for (let i = 0, p = 0; i < amp.data.length; i += 3, p++) {
      const r = amp.data[i], g = amp.data[i + 1], b = amp.data[i + 2];
      if (ehTinta(r, g, b)) mTinta[p] = 0; else if (ehAmarelo(r, g, b)) mAm[p] = 0;
      if (ehDesenho(r, g, b)) desenho[p] = 1;
    }
    const png = (m) => sharp(m, { raw: { width: amp.info.width, height: amp.info.height, channels: 1 } }).png().toBuffer();
    const mPele = silhueta(desenho, amp.info.width, amp.info.height, 4 * ESCALA);
    const [pTinta, pAm, pPele] = await Promise.all([tracar(await png(mTinta), INDIGO), tracar(await png(mAm), AMARELO), tracar(await png(mPele), MARFIM)]);
    // Marfim por baixo (a personagem não fica transparente no tema escuro), amarelo e traço índigo por cima.
    if (k === 2) console.log('recorte da frente na folha:', regiao, 'escala', ESCALA);
    fs.writeFileSync(path.join(SAIDA, POSES[k] + '.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${amp.info.width} ${amp.info.height}">${pPele}${pAm}${pTinta}</svg>\n`);
  }
  // Posição dos olhos na pose de frente (em % da imagem), para a pálpebra do piscar.
  const [x1, x2, y, w] = process.argv.slice(3).map(Number);
  const olhos = { x1: x1 || 40, x2: x2 || 66.5, y: y || 38, w: w || 12 }; // medidos na folha design/personagem-poses.webp
  fs.writeFileSync(path.join(SAIDA, 'poses.js'), '/* Gerado por tools/personagem.js. */\nwindow.HELMA_POSES = ' + JSON.stringify({ poses: POSES, olhos, proporcao: +(altura / largura).toFixed(4) }) + ';\n');
  console.log('5 poses geradas em www/marca/personagem (' + largura + 'x' + altura + ' px por pose); olhos', olhos);
})().catch((e) => { console.error('FALHOU', e.message); process.exit(1); });
