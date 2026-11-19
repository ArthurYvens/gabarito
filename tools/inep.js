/* Converte mais provas oficiais do INEP em www/js/dados/inep-oficial.js:
   - ENEM 2025, aplicação de Belém (2º dia, texto DOSVOX);
   - ENEM 2020 a 2024, reaplicação/PPL, e ENEM 2018 a 2022 e 2026, aplicação regular (cadernos ledor em PDF ou texto);
   - ENCCEJA 2020 e 2022, Ensino Fundamental e Médio, aplicação regular e reaplicação/PPL (cadernos em PDF).
   node tools/inep.js <pasta-com-os-arquivos-do-inep> [--revisao <arquivo.json>]

   Licença: o INEP publica sob Creative Commons BY-ND 3.0 (reproduzir com crédito e sem alterar). Valem as mesmas
   regras de tools/enem.js: só itens inteiramente do INEP, texto como está (só a quebra de linha é normalizada).
   O arquivo de revisão (tools/inep-revisao.json) lista os itens que a conferência humana tirou, com o motivo.
   Não é parecer jurídico. */
'use strict';
const fs = require('fs');
const path = require('path');
const raiz = path.join(__dirname, '..');
const pdfjs = require(path.join(raiz, 'node_modules', 'pdfjs-dist', 'legacy', 'build', 'pdf.js'));
const { itens: itensDosvox, TERCEIROS, ASPAS, TITULO, LICENCA } = require('./enem.js');

const ENEM_URL = 'https://download.inep.gov.br/enem/provas_e_gabaritos/';
const ENCCEJA_URL = 'https://download.inep.gov.br/encceja/provas_e_gabaritos/';

const PROVAS = [
  { id: 'enem-2025-belem', exame: 'ENEM', ano: 2025, dia: 2, rotulo: 'aplicação de Belém', assunto: 'ENEM 2025 (Belém)', txt: '2025_Dia_2_P2_CN_MT_Caderno_11_Laranja_DOSVOX.txt', gb: '2025_GB_impresso_D4_CD11.pdf', base: ENEM_URL }
];
for (const ano of [2024, 2023, 2022]) for (const dia of [1, 2]) {
  PROVAS.push({
    id: 'enem-' + ano + '-ppl', exame: 'ENEM', ano, dia, rotulo: 'reaplicação/PPL', assunto: 'ENEM ' + ano + ' (reaplicação)', ledor: true,
    pdf: ano + '_PV_reaplicacao_PPL_D' + dia + '_CD' + (dia === 1 ? 9 : 11) + '_braile_e_ledor.pdf',
    gb: ano + '_GB_reaplicacao_PPL_D' + dia + '_CD' + (dia === 1 ? 9 : 11) + '_braile_e_ledor.pdf', base: ENEM_URL
  });
}
// Aplicação regular (caderno laranja, com descrição das imagens) de 2018 a 2022 e 2026; reaplicação/PPL de 2020 e 2021.
const ANTIGO_URL = (ano) => 'https://download.inep.gov.br/educacao_basica/enem/provas/' + ano + '/';
for (const dia of [1, 2]) {
  const cd = dia === 1 ? 9 : 11;
  PROVAS.push({ id: 'enem-2026', exame: 'ENEM', ano: 2026, dia, rotulo: 'aplicação regular', assunto: 'ENEM 2026',
    txt: dia === 1 ? '2026_Dia_1_P1_LC_CH_Caderno_09_Marrom_DOSVOX.txt' : '2026_Dia_2_P1_CN_MT_Caderno_11_Marrom_DOSVOX.txt', gb: '2026_GB_impresso_D' + dia + '_CD' + cd + '.pdf', base: ENEM_URL });
  for (const ano of [2022, 2021, 2020]) PROVAS.push({ id: 'enem-' + ano, exame: 'ENEM', ano, dia, rotulo: 'aplicação regular', assunto: 'ENEM ' + ano, ledor: true,
    pdf: ano + '_PV_impresso_D' + dia + '_CD' + cd + '.pdf', gb: ano + '_GB_impresso_D' + dia + '_CD' + cd + '.pdf', base: ENEM_URL });
  for (const ano of [2019, 2018]) PROVAS.push({ id: 'enem-' + ano, exame: 'ENEM', ano, dia, rotulo: 'aplicação regular', assunto: 'ENEM ' + ano, ledor: true,
    pdf: ano + '_PV_impresso_D' + dia + '_CD' + cd + '.pdf', gb: ano + '_GB_D' + dia + '_CD' + cd + '.pdf', base: ANTIGO_URL(ano) });
  PROVAS.push({ id: 'enem-2021-ppl', exame: 'ENEM', ano: 2021, dia, rotulo: 'reaplicação/PPL', assunto: 'ENEM 2021 (reaplicação)', ledor: true,
    pdf: '2021_PV_reaplicacao_PPL_D' + dia + '_CD' + cd + '_braile_e_ledor.pdf', gb: '2021_GB_reaplicacao_PPL_D' + dia + '_CD' + cd + '_braile_e_ledor.pdf', base: ENEM_URL });
  PROVAS.push({ id: 'enem-2020-ppl', exame: 'ENEM', ano: 2020, dia, rotulo: 'reaplicação/PPL', assunto: 'ENEM 2020 (reaplicação)', ledor: true,
    pdf: '2020_PV_reaplicacao_PPL_D' + dia + '_CD' + cd + '.pdf', gb: '2020_GB_reaplicacao_PPL_D' + dia + '_CD' + cd + '.pdf', base: ENEM_URL });
}
const AREAS_ENCCEJA = [
  { nivel: 'EM', arq: 'ciencias_natureza', nome: 'Ciências da Natureza', materia: 'enem-natureza', sigla: 'cn' },
  { nivel: 'EM', arq: 'matematica', nome: 'Matemática', materia: 'matematica', sigla: 'mt' },
  { nivel: 'EM', arq: 'linguagens', nome: 'Linguagens', materia: 'enem-linguagens', sigla: 'lc' },
  { nivel: 'EM', arq: 'ciencias_humanas', nome: 'Ciências Humanas', materia: 'enem-humanas', sigla: 'ch' },
  { nivel: 'EF', arq: 'ciencias_naturais', nome: 'Ciências Naturais', materia: 'enem-natureza', sigla: 'cn' },
  { nivel: 'EF', arq: 'matematica', nome: 'Matemática', materia: 'matematica', sigla: 'mt' },
  { nivel: 'EF', arq: 'lingua_portuguesa', nome: 'Língua Portuguesa', materia: 'enem-linguagens', sigla: 'lp' },
  { nivel: 'EF', arq: 'historia_geografia', nome: 'História e Geografia', materia: 'enem-humanas', sigla: 'hg' }
];
for (const ano of [2022, 2020]) for (const ppl of [false, true]) for (const a of AREAS_ENCCEJA) {
  const meio = ppl ? 'reaplicacao_PPL_' : '';
  PROVAS.push({
    id: 'encceja-' + ano + (ppl ? '-ppl' : '') + '-' + a.nivel.toLowerCase() + '-' + a.sigla, exame: 'ENCCEJA', ano, area: a,
    rotulo: (a.nivel === 'EM' ? 'Ensino Médio' : 'Ensino Fundamental') + (ppl ? ', reaplicação/PPL' : ''),
    assunto: 'ENCCEJA ' + ano + ' (' + (a.nivel === 'EM' ? 'Ensino Médio' : 'Ensino Fundamental') + ')',
    pdf: ano + '_PV_' + meio + a.nivel + '_' + a.arq + '.pdf', gb: ano + '_GB_' + meio + a.nivel + '_' + a.arq + '.pdf', base: ENCCEJA_URL, local: 'enc_'
  });
}

function materiaEnem(n) {
  if (n <= 45) return 'enem-linguagens';
  if (n <= 90) return 'enem-humanas';
  if (n <= 135) return 'enem-natureza';
  return 'matematica';
}

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

const FIGURA = /\b(figura|gr[áa]fico|imagem|ilustra[çc][ãa]o|mapa|esquema|quadro|tabela|desenho|cartaz|placa|r[óo]tulo|embalagem|infogr[áa]fico)s?\b/i;
const ESTRANGEIRA = /\b(the|and|of|is|are|you|with|el|los|las|que es|una|para el)\b.*\b(the|and|of|is|are|you|el|los|las|una)\b/;

function motivo(q, prova, nAlts) {
  if (prova.exame === 'ENEM' && q.n <= 5) return 'língua estrangeira';
  if (q.mistura) return 'colunas misturadas';
  if (q.alts.length !== nAlts || q.alts.some((a) => a.length < 1)) return 'alternativas incompletas';
  if (q.alts.some((a) => a.length > 350)) return 'alternativa longa demais (texto vazado)';
  if (!prova.ledor && FIGURA.test(q.enunciado + ' ' + q.alts.join(' '))) return 'figura, gráfico ou tabela (só em imagem)';
  if (ESTRANGEIRA.test(q.enunciado)) return 'língua estrangeira';
  // Mesmas regras de terceiros de tools/enem.js.
  if (q.emGrupo) return 'texto compartilhado';
  const tudo = q.enunciado + '\n' + q.alts.join('\n');
  if (ASPAS.test(tudo)) return 'aspas (citação)';
  if (TERCEIROS.test(tudo)) return 'referência a obra de terceiros';
  if (q.enunciado.split('\n').some((l) => TITULO.test(l.trim()) && l.trim().split(/\s+/).length <= 8)) return 'título ou autor citado';
  if (q.enunciado.length < 40) return 'enunciado curto demais';
  if (/[\u0000-\u0008\u000b\u000c\u000e-\u001f�]/.test(tudo)) return 'caractere ilegível (símbolo matemático)';
  // Fonte do PDF sem mapa de caracteres: sai "%  #  X" no lugar do texto.
  if (/[@#]|(?:^|\s)[%$'*>]\s+[%$'#*>A-Z](?:\s|$)|\s{3,}\S\s{2,}/m.test(tudo)) return 'texto corrompido (fonte do PDF)';
  if (/Cll|C ll|\bCI\b|TiCI/.test(tudo)) return 'símbolo químico corrompido';
  // Letra capitular solta ("N o Brasil"); A, E, O e É são palavras e ficam para a conferência humana.
  if (/(^|\n)[B-DF-NP-ZÇ] [a-zà-ú]{2,}/.test(q.enunciado)) return 'letra capitular separada da palavra';
  // Fração ou raiz em imagem deixa operador solto: "Q = × T", "y = 0,2⋅x +".
  if (!prova.txt && q.alts.concat(q.enunciado.split('\n')).some((a) => /[=+×÷⋅·]\s*$|^\s*[=×÷⋅·]|[=+×÷⋅·]\s+[=+×÷⋅·]|\(\s*\)/.test(a))) return 'fórmula incompleta (parte em imagem)';
  if (q.peq) return 'índice, expoente ou nota em fonte pequena';
  return null;
}

(async () => {
  const dir = process.argv[2];
  if (!dir) { console.error('uso: node tools/inep.js <pasta-com-os-arquivos-do-inep>'); process.exit(1); }
  const revisao = fs.existsSync(path.join(__dirname, 'inep-revisao.json')) ? JSON.parse(fs.readFileSync(path.join(__dirname, 'inep-revisao.json'), 'utf8')) : {};
  const saida = [], motivos = {}, porProva = {};
  for (const p of PROVAS) {
    const local = (p.local || '');
    const gab = await lerGabarito(path.join(dir, local + p.gb));
    const nAlts = p.exame === 'ENEM' ? 5 : 4;
    let qs;
    if (p.txt) qs = itensDosvox(fs.readFileSync(path.join(dir, p.txt)).toString('latin1')).map((q) => ({ ...q, peq: false, mistura: false }));
    else qs = questoesPdf(await textoPdf(path.join(dir, local + p.pdf)), nAlts);
    const vistos = new Set();
    for (const q of qs) {
      if (vistos.has(q.n)) continue; // ENEM 1 a 5 aparecem em inglês e espanhol; vale a 1ª
      vistos.add(q.n);
      const id = p.id + '-' + q.n;
      let m = motivo(q, p, nAlts);
      if (!m && !(q.n in gab)) m = 'sem gabarito';
      if (!m && gab[q.n] === null) m = 'anulada';
      if (!m && revisao[id]) m = 'reprovada na conferência (inep-revisao.json)';
      if (m) { motivos[m] = (motivos[m] || 0) + 1; continue; }
      const enem = p.exame === 'ENEM';
      const arqFonte = p.txt || p.pdf;
      saida.push({
        id, materia: enem ? materiaEnem(q.n) : p.area.materia, assunto: p.assunto, tipo: 'multipla', estilo: 'ENEM',
        dificuldade: enem ? 2 : 1,
        objetivos: enem || p.area.nivel === 'EM' ? ['enem', 'livre'] : ['livre'],
        prova: { banca: 'INEP', ano: p.ano, orgao: enem ? 'ENEM, ' + p.rotulo + ', ' + p.dia + 'º dia, questão ' + q.n : 'ENCCEJA ' + p.rotulo + ', ' + p.area.nome + ', questão ' + q.n },
        enunciado: q.enunciado, alternativas: q.alts, resposta: 'ABCDE'.indexOf(gab[q.n]),
        fontes: [{ titulo: 'INEP/MEC: ' + p.exame + ' ' + p.ano + ', ' + p.rotulo + (enem ? ', ' + p.dia + 'º dia' : ', ' + p.area.nome) + ' (caderno oficial)', url: p.base + arqFonte }, LICENCA]
      });
      porProva[p.id] = (porProva[p.id] || 0) + 1;
    }
  }
  if (process.argv.includes('--candidatas')) { fs.writeFileSync(process.argv[process.argv.indexOf('--candidatas') + 1], JSON.stringify(saida, null, 1)); }
  const cab = '/* Mais questões oficiais do INEP: ENEM 2018 a 2026 (regular, reaplicação/PPL e Belém) e ENCCEJA 2020 e 2022.\n' +
    '   Fonte: INEP/MEC (download.inep.gov.br). Licença: Creative Commons Atribuição-SemDerivações 3.0 (CC BY-ND 3.0).\n' +
    '   Reproduzidas sem alteração e com crédito; só itens sem material de terceiros, conferidos um a um.\n' +
    '   Gerado por tools/inep.js; não edite à mão. */\n';
  fs.writeFileSync(path.join(raiz, 'www', 'js', 'dados', 'inep-oficial.js'), cab + 'Banco.registrar({ questoes: ' + JSON.stringify(saida, null, 1) + ' });\n');
  const porMat = {};
  saida.forEach((q) => { porMat[q.materia] = (porMat[q.materia] || 0) + 1; });
  console.log(saida.length + ' questões incluídas', porMat);
  console.log('por prova:', porProva);
  console.log('excluídas por motivo:', motivos);
})();
