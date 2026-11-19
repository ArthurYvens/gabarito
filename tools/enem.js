/* Converte as provas oficiais do ENEM (texto DOSVOX, caderno laranja/ledor, e gabaritos em PDF publicados pelo
   INEP) em www/js/dados/enem-oficial.js.  node tools/enem.js <pasta-com-os-arquivos-do-inep>

   Licença: o INEP publica o conteúdo sob Creative Commons Atribuição-SemDerivações 3.0 (CC BY-ND 3.0), que
   permite reproduzir com crédito e sem alterar. Ela NÃO cobre textos e imagens de terceiros dentro das provas,
   então só entram itens inteiramente do INEP: sem texto-base de terceiros, sem título/autor citado, sem aspas,
   sem links. O texto entra como está (só a quebra de linha é normalizada). Não é parecer jurídico. */
'use strict';
const fs = require('fs');
const path = require('path');
const raiz = path.join(__dirname, '..');
const pdfjs = require(path.join(raiz, 'node_modules', 'pdfjs-dist', 'legacy', 'build', 'pdf.js'));

const PROVAS = [
  { ano: 2025, dia: 1, caderno: 9, txt: ['2025_Dia_1_P1_LC_CH_Caderno_09_Laranja_DOSVOX.txt'], gb: '2025_GB_impresso_D1_CD9.pdf' },
  { ano: 2025, dia: 2, caderno: 11, txt: ['2025_Dia_2_P1_CN_MT_Caderno_11_Laranja_DOSVOX.txt'], gb: '2025_GB_impresso_D2_CD11.pdf' },
  { ano: 2024, dia: 1, caderno: 9, txt: ['2024_Dia_1_P1_LC_CH_Caderno_09_Laranja_DOSVOX.txt'], gb: '2024_GB_impresso_D1_CD9.pdf' },
  { ano: 2024, dia: 2, caderno: 11, txt: ['2024_Dia_2_P1_CN_MT_Caderno_11_Laranja_DOSVOX.txt'], gb: '2024_GB_impresso_D2_CD11.pdf' },
  { ano: 2023, dia: 1, caderno: 9, txt: ['2023_Dia_1_P1_LC_Caderno_09_Laranja_DOSVOX.txt', '2023_Dia_1_P1_CH_Caderno_09_Laranja_DOSVOX.txt'], gb: '2023_GB_impresso_D1_CD9.pdf' },
  { ano: 2023, dia: 2, caderno: 11, txt: ['2023_Dia_2_P1_CN_Caderno_11_Laranja_DOSVOX.txt', '2023_Dia_2_P1_MT_Caderno_11_Laranja_DOSVOX.txt'], gb: '2023_GB_impresso_D2_CD11.pdf' }
];
const BASE_URL = 'https://download.inep.gov.br/enem/provas_e_gabaritos/';
const LICENCA = { titulo: 'Licença Creative Commons Atribuição-SemDerivações 3.0 (CC BY-ND 3.0)', url: 'https://creativecommons.org/licenses/by-nd/3.0/deed.pt_BR' };

function materiaDe(n) {
  if (n <= 45) return 'enem-linguagens';
  if (n <= 90) return null; // Ciências Humanas: sem matéria no app (nenhum item passa no filtro de terceiros hoje)
  if (n <= 135) return 'enem-natureza';
  return 'matematica';
}

/* Gabarito do PDF: reconstrói as linhas pela posição (o PDF às vezes parte "121" em "12" e "1"). */
async function lerGabarito(arquivo) {
  const doc = await pdfjs.getDocument({ data: new Uint8Array(fs.readFileSync(arquivo)), isEvalSupported: false, disableFontFace: true, verbosity: 0 }).promise;
  const mapa = {};
  for (let p = 1; p <= doc.numPages; p++) {
    const itens = (await (await doc.getPage(p)).getTextContent()).items.filter((i) => i.str.trim())
      .map((i) => ({ x: i.transform[4], y: i.transform[5], w: i.width, s: i.str.trim() }))
      .sort((a, b) => b.y - a.y || a.x - b.x);
    const linhas = [];
    for (const i of itens) {
      const l = linhas[linhas.length - 1];
      if (l && Math.abs(l.y - i.y) < 3) { l.t += (i.x - l.fim < 1.5 ? '' : ' ') + i.s; l.fim = i.x + i.w; }
      else linhas.push({ y: i.y, t: i.s, fim: i.x + i.w });
    }
    for (const l of linhas) {
      const re = /(\d{1,3})\s+(Anulad[oa]|[A-E])(?:\s+(Anulad[oa]|[A-E]))?(?=\s|$)/g;
      let m;
      while ((m = re.exec(l.t))) {
        const n = Number(m[1]);
        if (n >= 1 && n <= 180 && !(n in mapa)) mapa[n] = /Anulad/.test(m[2]) ? null : m[2]; // 1 a 5: a 1ª letra é a de inglês
      }
    }
  }
  return mapa;
}

const TERCEIROS = /dispon[íi]vel em|acesso em|acessado em|adaptad[oa]|fonte:|https?:|www\.|©|\bin:|\b(textos?|excerto|fragmento|trecho|poema|poesia|can[çc][ãa]o|letra d[ae]|versos?|charge|tirinha|cartum|quadrinhos?|cr[ôo]nica|reportagem|not[íi]cia|an[úu]ncio|propaganda|obra|pintura|fotografia|foto|romance|conto|livro|artigo|entrevista|depoimento|carta|di[áa]logo|m[úu]sica|filme|autor[a]?)\b/i;
const ASPAS = /["“”«»]/;
// Linha só com letras, curta, sem pontuação final: título ou nome de autor (ex.: "O futuro do capitalismo", "Paul Collier").
const TITULO = /^[A-ZÀ-Ú][\p{L}'’.\- ]{1,60}$/u;

function itens(texto) {
  const linhas = texto.replace(/\r\n?/g, '\n').split('\n').map((l) => l.replace(/\s+$/, ''));
  const qs = [], grupos = [];
  let atual = null;
  for (const l of linhas) {
    const h = /^\s*Quest[ãa]o\s+(\d{1,3})\s*$/i.exec(l);
    const g = /quest[õo]es\s+(?:de\s+)?(\d{1,3})\s+(?:a|e)\s+(\d{1,3})/i.exec(l);
    // Só linha que anuncia texto compartilhado; as instruções do caderno também citam "questões de 1 a 45".
    if (g && !h && /^\s*(textos?|leia|considere|com base)\b/i.test(l)) grupos.push([Number(g[1]), Number(g[2])]);
    if (h) { atual = { n: Number(h[1]), linhas: [] }; qs.push(atual); continue; }
    if (atual) atual.linhas.push(l);
  }
  return qs.map((q) => {
    const corpo = [], alts = [];
    let esperado = 0, fechada = false;
    for (const l of q.linhas) {
      const m = /^\s*([a-e])[).]\s+(.*)$/.exec(l); // 2025 usa "a)"; 2023 e 2024, "a."
      if (m && m[1] === 'abcde'[esperado]) { alts.push(m[2].trim()); esperado++; }
      // A alternativa E pode continuar nas linhas seguintes (descrição de gráfico); acaba na primeira linha vazia.
      else if (alts.length === 5 && (fechada || !l.trim())) fechada = true;
      else if (alts.length) alts[alts.length - 1] += (alts.length === 5 ? '\n' : ' ') + l.trim();
      else corpo.push(l);
    }
    const enunciado = corpo.join('\n').replace(/\n{3,}/g, '\n\n').trim();
    const emGrupo = grupos.some(([a, b]) => q.n >= a && q.n <= b);
    return { n: q.n, enunciado, alts, emGrupo };
  });
}

function motivoExclusao(q) {
  if (q.n <= 5) return 'língua estrangeira';
  if (q.alts.length !== 5) return 'alternativas incompletas';
  if (q.emGrupo) return 'texto compartilhado';
  const tudo = q.enunciado + '\n' + q.alts.join('\n');
  if (ASPAS.test(tudo)) return 'aspas (citação)';
  if (TERCEIROS.test(tudo)) return 'referência a obra de terceiros';
  if (q.enunciado.split('\n').some((l) => TITULO.test(l.trim()) && l.trim().split(/\s+/).length <= 8)) return 'título ou autor citado';
  if (q.enunciado.length < 40) return 'enunciado curto demais';
  return null;
}

(async () => {
  const dir = process.argv[2];
  if (!dir) { console.error('uso: node tools/enem.js <pasta-com-os-arquivos-do-inep>'); process.exit(1); }
  const saida = [], motivos = {};
  for (const p of PROVAS) {
    const gab = await lerGabarito(path.join(dir, p.gb));
    const vistos = new Set();
    for (const arq of p.txt) {
      const texto = fs.readFileSync(path.join(dir, arq)).toString('latin1'); // os .txt do INEP vêm em Windows-1252
      for (const q of itens(texto)) {
        if (vistos.has(q.n)) continue; // 1 a 5 aparecem em inglês e espanhol; vale a 1ª
        vistos.add(q.n);
        let motivo = materiaDe(q.n) ? motivoExclusao(q) : 'área sem matéria no app';
        if (!motivo && !(q.n in gab)) motivo = 'sem gabarito';
        if (!motivo && gab[q.n] === null) motivo = 'anulada';
        if (motivo) { motivos[motivo] = (motivos[motivo] || 0) + 1; continue; }
        saida.push({
          id: `enem-${p.ano}-${q.n}`, materia: materiaDe(q.n), assunto: `ENEM ${p.ano}`, tipo: 'multipla', estilo: 'ENEM', dificuldade: 2,
          objetivos: ['enem', 'livre'],
          prova: { banca: 'INEP', ano: p.ano, orgao: `ENEM, ${p.dia}º dia, questão ${q.n}` },
          enunciado: q.enunciado, alternativas: q.alts, resposta: 'ABCDE'.indexOf(gab[q.n]),
          fontes: [{ titulo: `INEP/MEC: ENEM ${p.ano}, ${p.dia}º dia, caderno ${p.caderno} (texto oficial em versão acessível)`, url: BASE_URL + arq }, LICENCA]
        });
      }
    }
  }
  const cab = '/* Questões oficiais do ENEM 2023 a 2025. Fonte: INEP/MEC (download.inep.gov.br), texto oficial da versão ledor.\n' +
    '   Licença: Creative Commons Atribuição-SemDerivações 3.0 (CC BY-ND 3.0). Reproduzidas sem alteração e com crédito.\n' +
    '   Só itens sem material de terceiros. Gerado por tools/enem.js; não edite à mão. */\n';
  fs.writeFileSync(path.join(raiz, 'www', 'js', 'dados', 'enem-oficial.js'), cab + 'Banco.registrar({ questoes: ' + JSON.stringify(saida, null, 1) + ' });\n');
  const porMat = {};
  saida.forEach((q) => { porMat[q.materia] = (porMat[q.materia] || 0) + 1; });
  console.log(saida.length + ' questões oficiais incluídas', porMat);
  console.log('excluídas por motivo:', motivos);
})();
