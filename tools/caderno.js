/* Leitura dos cadernos do INEP em PDF (texto em colunas, questões, gabarito), usada por tools/inep.js e tools/enem.js.
   terceirosNoImpresso: os cadernos ledor e DOSVOX omitem a linha de fonte ("Disponível em", "(adaptado)", autor),
   então a checagem de material de terceiros é refeita no caderno impresso da mesma aplicação. Lá a numeração muda
   conforme a cor, por isso a questão é achada pelas alternativas. */
'use strict';
const fs = require('fs');
const path = require('path');
const pdfjs = require(path.join(__dirname, '..', 'node_modules', 'pdfjs-dist', 'legacy', 'build', 'pdf.js'));
const { TERCEIROS, ASPAS } = require('./enem.js');

/* ---------- PDF ---------- */
async function abrir(arquivo) {
  return pdfjs.getDocument({ data: new Uint8Array(fs.readFileSync(arquivo)), isEvalSupported: false, disableFontFace: true, verbosity: 0 }).promise;
}
async function itensDaPagina(pg) {
  return (await pg.getTextContent()).items
    .map((i) => ({ x: i.transform[4], y: i.transform[5], w: i.width, h: Math.abs(i.transform[3]) || Math.abs(i.transform[0]), s: i.str.replace(/\s+/g, ' ').trim() }))
    .filter((i) => i.s);
}
/* Agrupa itens na mesma linha (tolerância pela altura da fonte) e ordena cada linha pela posição horizontal. */
function agrupar(itens) {
  itens.sort((a, b) => b.y - a.y);
  const grupos = [];
  for (const i of itens) {
    const g = grupos[grupos.length - 1];
    if (g && Math.abs(g.y - i.y) <= Math.max(2, Math.min(i.h, g.h) * 0.45)) g.itens.push(i);
    else grupos.push({ y: i.y, h: i.h, itens: [i] });
  }
  for (const g of grupos) g.itens.sort((a, b) => a.x - b.x);
  return grupos;
}

async function lerGabarito(arquivo) {
  const doc = await abrir(arquivo);
  const mapa = {};
  for (let p = 1; p <= doc.numPages; p++) {
    for (const g of agrupar(await itensDaPagina(await doc.getPage(p)))) {
      const t = g.itens.map((i) => i.s).join(' ');
      const re = /(\d{1,3})\s+(Anulad[oa]|[A-E])(?:\s+(Anulad[oa]|[A-E]))?(?=\s|$)/g;
      let m;
      while ((m = re.exec(t))) {
        const n = Number(m[1]);
        if (n >= 1 && n <= 180 && !(n in mapa)) mapa[n] = /Anulad/.test(m[2]) ? null : m[2]; // ENEM 1 a 5: a 1ª letra é a de inglês
      }
    }
  }
  return mapa;
}

const RUIDO = [
  /^(E ?N ?E ?M ?2 ?0 ?\d ?\d ?)+\d*$/, /^ENEM\d{4}ENEM/, /^\*[0-9A-Z]+\*$/, /CADERNO \d+ ?[•▪]/, /[•▪] ?\d?º? ?DIA/, /- ENCCEJA \d{4}$/,
  /^Questões de \d+ a \d+$/i, /^(LINGUAGENS|CIÊNCIAS|MATEMÁTICA)[A-ZÇÃÕÉÍÁÚÊÔ ,]*$/, /^Página \d+/i,
  /Caderno \d+ - L ?ARANJA/i
];
const ehRuido = (s) => RUIDO.some((r) => r.test(s));
// Número de página: linha só com número, em fonte normal. (Número solto dentro do texto não é ruído: "20 mil".)
const ehNumeroDePagina = (t, peq) => !peq && /^\d{1,3}$/.test(t);

/* Texto do caderno em linhas { t, peq } (peq: a linha tem trecho em fonte pequena, como índice ou expoente).
   Página em duas colunas: coluna da esquerda inteira, depois a da direita. */
async function textoPdf(arquivo) {
  const doc = await abrir(arquivo);
  const paginas = [];
  const alturas = [];
  for (let p = 1; p <= doc.numPages; p++) {
    const pg = await doc.getPage(p);
    const its = (await itensDaPagina(pg)).filter((i) => i.h >= 3 && !ehRuido(i.s));
    its.forEach((i) => { if (/[a-zà-ú]{3}/.test(i.s)) alturas.push(Math.round(i.h * 10) / 10); });
    paginas.push({ meio: pg.view[2] / 2, its });
  }
  alturas.sort((a, b) => a - b);
  const corpo = alturas[Math.floor(alturas.length / 2)] || 10;
  const linhas = [];
  for (const { meio, its } of paginas) {
    const cruzam = its.filter((i) => i.x < meio - 20 && i.x + i.w > meio + 20).length;
    const direita = its.filter((i) => i.x > meio - 2).length;
    const colunas = cruzam >= 3 || direita < 3 ? [its] : [its.filter((i) => i.x < meio - 2), its.filter((i) => i.x >= meio - 2)];
    for (const col of colunas) {
      let ant = null;
      for (const g of agrupar(col)) {
        let t = '', fim = -1e9, peq = false;
        g.itens.forEach((i, k) => {
          const letra = k === 1 && /^[A-E]$/.test(g.itens[0].s); // marcador de alternativa colado no texto
          t += (t && (i.x - fim > 1.2 || letra) ? ' ' : '') + i.s;
          fim = i.x + i.w;
          if (i.h < corpo * 0.8 && !/^[A-E]$/.test(i.s)) peq = true;
        });
        if (ehRuido(t) || ehNumeroDePagina(t, peq)) continue;
        if (ant && ant.y - g.y > (g.h || corpo) * 1.9) linhas.push({ t: '' });
        linhas.push({ t, peq });
        ant = g;
      }
      linhas.push({ t: '' });
    }
  }
  return linhas;
}

/* Junta as linhas quebradas pelo PDF em parágrafos; listas e descrições ficam em linha própria. */
function paragrafos(ls) {
  const out = [];
  for (const l of ls) {
    const t = l.trim();
    if (!t) { if (out.length && out[out.length - 1] !== '') out.push(''); continue; }
    const novaLinha = /^([•\-–]|\d+[.)]\s|[IVX]+[.)\-–]\s|Descrição)/.test(t);
    if (!out.length || out[out.length - 1] === '' || novaLinha) out.push(t);
    else out[out.length - 1] += (/-$/.test(out[out.length - 1]) ? '' : ' ') + t;
  }
  while (out.length && out[out.length - 1] === '') out.pop();
  return out.join('\n').replace(/\n(?=\n)/g, '\n');
}

function questoesPdf(linhas, nAlts) {
  const qs = [], grupos = [];
  let atual = null;
  for (const l of linhas) {
    const h = /^QUEST[ÃA]O\s+(\d{1,3})\s*$/i.exec(l.t);
    const g = /quest[õo]es\s+(?:de\s+)?(\d{1,3})\s+(?:a|e)\s+(\d{1,3})/i.exec(l.t);
    if (g && !h && /^\s*(textos?|leia|considere|com base|utilize)\b/i.test(l.t)) grupos.push([Number(g[1]), Number(g[2])]);
    if (h) { atual = { n: Number(h[1]), linhas: [], peq: false, mistura: false }; qs.push(atual); continue; }
    if (/QUEST[ÃA]O\s+\d/i.test(l.t) && atual) atual.mistura = true; // cabeçalho no meio de uma linha: colunas misturadas
    if (atual) { atual.linhas.push(l.t); if (l.peq) atual.peq = true; }
  }
  const letras = 'ABCDE'.slice(0, nAlts);
  return qs.map((q) => {
    const ls = q.linhas;
    // Alternativas: de trás para frente, a última linha que começa com cada letra (o enunciado pode começar com "A ").
    const idx = [];
    let lim = ls.length;
    for (let k = nAlts - 1; k >= 0; k--) {
      let achou = -1;
      for (let i = lim - 1; i >= 0; i--) if (new RegExp('^' + letras[k] + '(\\s|$)').test(ls[i].trim())) { achou = i; break; }
      if (achou < 0) break;
      idx[k] = achou; lim = achou;
    }
    const ok = idx.length === nAlts && idx[0] !== undefined;
    const alts = [];
    let enunciado = '';
    if (ok) {
      enunciado = paragrafos(ls.slice(0, idx[0]));
      for (let k = 0; k < nAlts; k++) {
        let trecho = ls.slice(idx[k], k + 1 < nAlts ? idx[k + 1] : ls.length);
        if (k === nAlts - 1) { const vazio = trecho.findIndex((t, i) => i > 0 && !t.trim()); if (vazio > 0) trecho = trecho.slice(0, vazio); }
        trecho[0] = trecho[0].trim().replace(/^[A-E]\s*/, '');
        alts.push(paragrafos(trecho).replace(/\n/g, ' ').trim());
      }
      // Alguns cadernos repetem a letra ("B B texto"): se todas de B em diante repetem, tira a repetição.
      if (alts.slice(1).every((a, k) => a.startsWith(letras[k + 1] + ' '))) {
        for (let k = 0; k < nAlts; k++) if (alts[k].startsWith(letras[k] + ' ')) alts[k] = alts[k].slice(2);
      }
    }
    const emGrupo = grupos.some(([a, b]) => q.n >= a && q.n <= b);
    return { n: q.n, enunciado, alts, emGrupo, peq: q.peq, mistura: q.mistura };
  });
}


async function terceirosNoImpresso(arquivo, nAlts) {
  const comum = questoesPdf(await textoPdf(arquivo), nAlts);
  const so = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '');
  return (q) => {
    const a = q.alts.map(so);
    let r = null, nota = 0;
    for (const c of comum) {
      const b = c.alts.map(so);
      // Igual, ou uma contém a outra quando a menor é longa (senão "2" casaria com qualquer alternativa que tenha um 2).
      const casa = (x, y) => x === y || (Math.min(x.length, y.length) >= 12 && (x.includes(y) || y.includes(x)));
      const n = a.filter((x, k) => x && b[k] && casa(x, b[k])).length;
      if (n > nota) { nota = n; r = c; }
    }
    // Alternativa com fórmula sai diferente nos dois cadernos: tenta pelo enunciado (trechos de 40 letras).
    if (nota < 4) {
      const e = so(q.enunciado), trechos = [];
      for (let i = 0; i + 40 <= Math.min(e.length, 400); i += 60) trechos.push(e.slice(i, i + 40));
      const achadas = comum.filter((c) => { const t = so(c.enunciado); return trechos.filter((x) => t.includes(x)).length >= Math.min(2, trechos.length); });
      if (achadas.length !== 1) return 'não achada no caderno impresso';
      r = achadas[0];
    }
    const tudo = r.enunciado + '\n' + r.alts.join('\n');
    if (r.emGrupo) return 'texto compartilhado (caderno impresso)';
    if (ASPAS.test(tudo)) return 'aspas (citação) no caderno impresso';
    if (TERCEIROS.test(tudo)) return 'fonte de terceiros no caderno impresso';
    // Sem a regra de título: no impresso, rótulo de figura ("Bateria", "Poste") parece título. A fonte vem escrita.
    return null;
  };
}

module.exports = { abrir, lerGabarito, textoPdf, questoesPdf, terceirosNoImpresso };
