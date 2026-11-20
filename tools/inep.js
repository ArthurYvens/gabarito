/* Converte mais provas oficiais do INEP em www/js/dados/inep-oficial.js:
   - ENEM 2025, aplicação de Belém (2º dia, texto DOSVOX);
   - ENEM 2020 a 2024, reaplicação/PPL, e ENEM 2018 a 2022 e 2026, aplicação regular (cadernos ledor em PDF ou texto);
   - ENEM 2011, 2012, 2013, 2015 (reaplicação/PPL) e 2016: só Ciências da Natureza, do caderno ledor do 1º dia;
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
// Anos antigos (até 2016): Ciências Humanas e da Natureza no 1º dia (CN = questões 46 a 90). Só o caderno ledor
// (com descrição das imagens) e só Ciências da Natureza. O ledor desses anos omite a linha de fonte dos textos, então
// a checagem de terceiros é feita também no caderno comum (regular), com a mesma numeração.
const OLD = 'https://download.inep.gov.br/educacao_basica/enem/';
for (const [ano, pdf, gb, rotulo, regular] of [
  [2011, 'provas/2011/dia1_caderno3_branco_ledor.pdf', 'gabaritos/2011/03_BRANCO_GABARITO.pdf', 'aplicação regular', 'provas/2011/dia1_caderno3_branco.pdf'],
  [2012, 'provas/2012/dia1_caderno3_branco_ledor.pdf', 'gabaritos/2012/dia1_branco.pdf', 'aplicação regular', 'provas/2012/dia1_caderno3_branco.pdf'],
  // O "ledor" de 2013 publicado junto da aplicação regular é o da reaplicação: só o gabarito da PPL bate (28 de 28).
  [2013, 'provas/2013/dia1_caderno3_branco_ledor.pdf', 'ppl/2013/gabarito_enem_ppl_2013_dia1_branca.pdf', 'reaplicação/PPL', 'provas/2013/2013_PV_reaplicacao_PPL_D1_CD3.pdf'],
  [2015, 'provas/2015/2015_PV_reaplicacao_PPL_D1_CD11_ledor.pdf', 'ppl/2015/GAB_ENEM2015_2aAPLICACAO_DIA1_CADERNO_11.pdf', 'reaplicação/PPL', 'provas/2015/2015_PV_reaplicacao_PPL_D1_CD11.pdf'],
  [2016, 'provas/2016/2016_PV_impresso_D1_CD3_ledor.pdf', 'gabaritos/2016/GAB_ENEM_2016_DIA_1_03_BRANCO.pdf', 'aplicação regular', 'provas/2016/2016_PV_impresso_D1_CD3.pdf']
]) {
  const ppl = /PPL/.test(rotulo);
  PROVAS.push({ id: 'enem-' + ano + (ppl ? '-ppl' : ''), exame: 'ENEM', ano, dia: 1, rotulo, assunto: 'ENEM ' + ano + (ppl ? ' (reaplicação)' : ''),
    ledor: true, antigo: true, pdf, gb, regular, base: OLD, local: 'antigo_' });
}
// Caderno impresso (azul) de cada aplicação do ENEM tirada do ledor/DOSVOX, para a checagem de fontes.
for (const p of PROVAS) if (!p.regular) {
  const cd = p.dia === 1 ? 1 : 7;
  p.regular = 'reg_' + (/belem/.test(p.id) ? '2025_PV_impresso_D4_CD7.pdf'
    : p.ano + (/ppl/.test(p.id) ? '_PV_reaplicacao_PPL_D' : '_PV_impresso_D') + p.dia + '_CD' + cd + '.pdf');
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

function materiaEnem(n, antigo) {
  if (antigo) return n > 45 && n <= 90 ? 'enem-natureza' : null;
  if (n <= 45) return 'enem-linguagens';
  if (n <= 90) return 'enem-humanas';
  if (n <= 135) return 'enem-natureza';
  return 'matematica';
}

const { lerGabarito, textoPdf, questoesPdf, terceirosNoImpresso } = require('./caderno.js');

const FIGURA = /\b(figura|gr[áa]fico|imagem|ilustra[çc][ãa]o|mapa|esquema|quadro|tabela|desenho|cartaz|placa|r[óo]tulo|embalagem|infogr[áa]fico)s?\b/i;
const ESTRANGEIRA = /\b(the|and|of|is|are|you|with|el|los|las|que es|una|para el)\b.*\b(the|and|of|is|are|you|el|los|las|una)\b/;

function motivo(q, prova, nAlts) {
  if (prova.exame === 'ENEM' && !prova.antigo && q.n <= 5) return 'língua estrangeira';
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
  const saida = [], motivos = {}, porProva = {}, excluidas = {};
  for (const p of PROVAS) {
    const local = (p.local || '');
    const gab = await lerGabarito(path.join(dir, local + p.gb));
    const nAlts = p.exame === 'ENEM' ? 5 : 4;
    let qs;
    if (p.txt) qs = itensDosvox(fs.readFileSync(path.join(dir, p.txt)).toString('latin1')).map((q) => ({ ...q, peq: false, mistura: false }));
    else qs = questoesPdf(await textoPdf(path.join(dir, local + p.pdf)), nAlts);
    // Ledor e DOSVOX omitem a linha de fonte: a checagem de terceiros é refeita no caderno impresso (tools/caderno.js).
    const noImpresso = p.regular ? await terceirosNoImpresso(path.join(dir, local + p.regular), nAlts) : null;
    const vistos = new Set();
    for (const q of qs) {
      if (vistos.has(q.n)) continue; // ENEM 1 a 5 aparecem em inglês e espanhol; vale a 1ª
      vistos.add(q.n);
      if (p.antigo && !materiaEnem(q.n, true)) continue;
      const id = p.id + '-' + q.n;
      let m = motivo(q, p, nAlts);
      if (!m && noImpresso) m = noImpresso(q);
      if (!m && !(q.n in gab)) m = 'sem gabarito';
      if (!m && gab[q.n] === null) m = 'anulada';
      if (!m && revisao[id]) m = 'reprovada na conferência (inep-revisao.json)';
      if (m) { motivos[m] = (motivos[m] || 0) + 1; excluidas[id] = m; continue; }
      const enem = p.exame === 'ENEM';
      const arqFonte = p.txt || p.pdf;
      saida.push({
        id, materia: enem ? materiaEnem(q.n, p.antigo) : p.area.materia, assunto: p.assunto, tipo: 'multipla', estilo: 'ENEM',
        dificuldade: enem ? 2 : 1,
        objetivos: enem || p.area.nivel === 'EM' ? ['enem', 'livre'] : ['livre'],
        prova: { banca: 'INEP', ano: p.ano, orgao: enem ? 'ENEM, ' + p.rotulo + ', ' + p.dia + 'º dia, questão ' + q.n : 'ENCCEJA ' + p.rotulo + ', ' + p.area.nome + ', questão ' + q.n },
        // Ledor antigo (2011) espaça tanto as linhas que cada uma vira parágrafo: junta a que continua em minúscula.
        enunciado: p.antigo ? q.enunciado.replace(/\n\n(?=[a-zà-ú])/g, ' ') : q.enunciado, alternativas: q.alts, resposta: 'ABCDE'.indexOf(gab[q.n]),
        fontes: [{ titulo: 'INEP/MEC: ' + p.exame + ' ' + p.ano + ', ' + p.rotulo + (enem ? ', ' + p.dia + 'º dia' : ', ' + p.area.nome) + ' (caderno oficial)', url: p.base + arqFonte }, LICENCA]
      });
      porProva[p.id] = (porProva[p.id] || 0) + 1;
    }
  }
  // --excluidas <arquivo>: id e motivo de cada questão que ficou de fora (para a conferência).
  if (process.argv.includes('--excluidas')) fs.writeFileSync(process.argv[process.argv.indexOf('--excluidas') + 1], JSON.stringify(excluidas, null, 1));
  if (process.argv.includes('--candidatas')) { fs.writeFileSync(process.argv[process.argv.indexOf('--candidatas') + 1], JSON.stringify(saida, null, 1)); }
  const cab = '/* Mais questões oficiais do INEP: ENEM 2018 a 2026 (regular, reaplicação/PPL e Belém), Ciências da Natureza do\n' +
    '   ENEM 2011 a 2016 e ENCCEJA 2020 e 2022.\n' +
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
