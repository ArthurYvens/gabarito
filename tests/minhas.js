/* Teste ponta a ponta de "Minhas questões": node tests/minhas.js [url] [pasta]
   Gera um PDF real de prova em duas colunas, importa texto, PDF, planilha e questão escrita à mão. */
'use strict';
const path = require('path');
const fs = require('fs');
const os = require('os');
const { execSync } = require('child_process');
const { chromium } = require(path.join(execSync('npm root -g').toString().trim(), '@playwright', 'cli', 'node_modules', 'playwright'));
const I = require(path.join(__dirname, '..', 'www', 'js', 'importador.js'));

const URL = process.argv[2] || 'http://localhost:5322/';
const OUT = process.argv[3] || fs.mkdtempSync(path.join(os.tmpdir(), 'gabarito-minhas-'));
fs.mkdirSync(OUT, { recursive: true });
let passo = '';
const ok = (c, m) => { if (!c) throw new Error('[' + passo + '] ' + m); };

const PROVA = `1. Assinale a alternativa em que a regência está correta.
A) Assisti o filme ontem.
B) Prefiro mais café do que chá.
C) Obedeça aos sinais de trânsito.
D) Esqueci do compromisso.
E) Chegou no aeroporto cedo.
2. Em contabilidade, o ativo representa
A) as obrigações da empresa.
B) os bens e direitos da empresa.
C) o capital social apenas.
D) as receitas do período.
E) as despesas pagas.
3. Julgue o item a seguir. O balanço patrimonial é uma demonstração contábil.`;

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1360, height: 900 }, acceptDownloads: true });
  const page = await ctx.newPage();
  const erros = [];
  page.on('pageerror', (e) => erros.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error') erros.push(m.text()); });

  passo = 'migração de bancos antigos do localStorage';
  await page.goto(URL);
  const antigo = { id: 'velho-001', materia: 'portugues', assunto: 'Crase', tipo: 'certo-errado', estilo: 'Outra', dificuldade: 1, objetivos: ['enem'], enunciado: 'Questão antiga', resposta: true, explicacao: { resumo: 'ok', detalhada: 'ok' }, fontes: [{ titulo: 'x', url: 'https://www.academia.org.br' }] };
  await page.evaluate((q) => localStorage.setItem('gabarito.v1', JSON.stringify({ perfil: { nome: 'Teste', objetivo: 'concursos-gerais', materias: ['portugues'] }, respostas: {}, simulados: [], importados: [{ nome: 'Banco antigo', questoes: [q] }] })), antigo);
  await page.reload();
  await page.waitForSelector('.hero');
  ok(await page.evaluate(() => App.bancos.length === 1 && !!Banco.questao('velho-001') && Store.estado.importados.length === 0), 'banco antigo migrou para o IndexedDB');

  passo = 'colar texto';
  await page.goto(URL + '#/minhas-questoes');
  await page.click('[data-act="mq-modo"][data-modo="texto"]');
  await page.fill('#mq-texto', PROVA);
  await page.fill('#mq-gabarito', '1-C 2-B 3-C');
  await page.click('[data-act="mq-reconhecer"]');
  await page.waitForSelector('.rv-card');
  ok(await page.locator('.rv-card').count() === 3, 'três questões na revisão');
  ok(await page.locator('.rv-card .tag-ok').count() === 3, 'gabarito aplicado nas três');
  await page.fill('[data-rv="0"] [data-campo="comentario"]', 'Comentário que não pode sumir');
  await page.waitForTimeout(900);
  await page.reload();
  await page.waitForSelector('.rv-card');
  ok(await page.locator('.rv-card').count() === 3 && (await page.inputValue('[data-rv="0"] [data-campo="comentario"]')) === 'Comentário que não pode sumir', 'revisão e edição sobrevivem a recarregar a página');
  await page.selectOption('#rv-materia', '__nova');
  await page.fill('#rv-nova', 'Contabilidade');
  await page.fill('#rv-banca', 'FGV');
  await page.fill('#rv-ano', '2024');
  await page.screenshot({ path: path.join(OUT, 'm1-revisao.png'), fullPage: true });
  await page.click('[data-act="rv-salvar"]');
  await page.waitForSelector('dialog[open]');
  await page.click('dialog button[value="sim"]');
  await page.waitForSelector('#r-area .q');
  ok((await page.textContent('#r-area .q-meta')).includes('sua questão'), 'questão do aluno identificada');
  ok(await page.evaluate(() => !!Banco.materia('x-contabilidade')), 'matéria nova criada');

  passo = 'anotação pessoal';
  await page.keyboard.press((await page.locator('#r-area .ce').count()) ? 'c' : 'c');
  await page.click('[data-act="r-responder"]');
  await page.waitForSelector('#r-area details.nota');
  const qid = await page.getAttribute('#r-area [data-nota]', 'data-nota');
  await page.fill('#r-area [data-nota]', 'Regência: obedecer pede preposição a.');
  await page.waitForTimeout(700);
  await page.click('[data-act="r-sair"]');

  passo = 'PDF real em duas colunas';
  const pdfPage = await ctx.newPage();
  const col = (txt) => '<div style="white-space:pre-wrap">' + txt.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</div>';
  const partes = PROVA.split('\n2. ');
  await pdfPage.setContent('<html><body style="font:12px Arial;margin:30px"><h3>CONCURSO PÚBLICO — PROVA OBJETIVA</h3><div style="display:grid;grid-template-columns:1fr 1fr;gap:40px">' +
    col(partes[0]) + col('2. ' + partes[1]) + '</div><p>GABARITO 1-C 2-B 3-C</p></body></html>');
  const pdf = path.join(OUT, 'prova-duas-colunas.pdf');
  await pdfPage.pdf({ path: pdf, format: 'A4' });
  await pdfPage.close();
  await page.goto(URL + '#/minhas-questoes');
  await page.click('[data-act="mq-modo"][data-modo="pdf"]');
  await page.setInputFiles('#mq-pdf', pdf);
  await page.waitForFunction(() => /página lida|páginas lidas/.test((document.getElementById('mq-pdf-status') || {}).textContent || ''), null, { timeout: 30000 });
  const texto = await page.inputValue('#mq-texto');
  ok(I.extrairQuestoes(texto).length === 3, 'PDF em duas colunas vira 3 questões; texto extraído:\n' + texto.slice(0, 400));
  await page.click('[data-act="mq-reconhecer"]');
  await page.waitForSelector('.rv-card');
  ok(await page.locator('.rv-card .tag-ok').count() === 3, 'gabarito do próprio PDF aplicado');
  await page.click('[data-act="rv-salvar"]');
  await page.waitForSelector('dialog[open]');
  await page.click('dialog button[value="nao"]');

  passo = 'planilha CSV';
  const csv = path.join(OUT, 'planilha.csv');
  fs.writeFileSync(csv, I.MODELO_CSV);
  await page.click('[data-act="mq-modo"][data-modo="planilha"]');
  await page.setInputFiles('#mq-csv', csv);
  await page.waitForSelector('.rv-card');
  ok(await page.locator('.rv-card').count() === 2, 'duas linhas da planilha');
  await page.click('[data-act="rv-salvar"]');
  await page.waitForSelector('dialog[open]');
  await page.click('dialog button[value="nao"]');

  passo = 'escrever à mão (com validação)';
  await page.click('[data-act="mq-escrever"]');
  await page.waitForSelector('.rv-card');
  await page.click('[data-act="rv-salvar"]');
  await page.waitForSelector('.toast.show');
  ok((await page.textContent('#toast')).includes('Questão 1: falta o enunciado'), 'não salva questão incompleta e diz o que falta');
  await page.fill('[data-rv="0"] [data-campo="enunciado"]', 'Quanto é 2 + 2?');
  const alts = ['1', '2', '3', '4', '5'];
  for (let i = 0; i < 5; i++) await page.fill('[data-rv="0"] [data-campo="alt"] >> nth=' + i, alts[i]);
  await page.check('[data-rv="0"] input[type="radio"][value="3"]', { force: true });
  await page.click('[data-act="rv-salvar"]');
  await page.waitForSelector('dialog[open]');
  await page.click('dialog button[value="nao"]');

  passo = 'persistência e backup';
  await page.reload();
  await page.waitForSelector('[data-act="mq-praticar"]');
  await page.waitForSelector('[data-act="mq-praticar"]');
  ok(await page.locator('[data-act="mq-praticar"]').count() === 5, '5 bancos guardados (antigo, texto, PDF, planilha, à mão)');
  ok(await page.evaluate((id) => Store.estado.notas[id], qid) === 'Regência: obedecer pede preposição a.', 'anotação persistiu');
  await page.screenshot({ path: path.join(OUT, 'm2-bancos.png'), fullPage: true });
  await page.goto(URL + '#/ajustes');
  const [dl] = await Promise.all([page.waitForEvent('download'), page.click('[data-act="aj-exportar"]')]);
  const backup = path.join(OUT, 'backup.json');
  await dl.saveAs(backup);
  ok(JSON.parse(fs.readFileSync(backup, 'utf8')).importados.length === 5, 'backup inclui os bancos');
  await page.evaluate(() => App.removerBanco(App.bancos[0].id));
  await page.setInputFiles('#aj-backup', backup);
  await page.click('dialog button[value="sim"]');
  await page.waitForSelector('.hero');
  ok(await page.evaluate(() => App.bancos.length) === 5, 'restaurar backup traz os bancos de volta');

  passo = 'duas abas e duplo clique';
  const aba2 = await ctx.newPage();
  await aba2.goto(URL);
  await aba2.waitForSelector('.hero');
  const qx = (id) => ({ id, materia: 'portugues', assunto: 'Geral', tipo: 'certo-errado', estilo: 'Outra', dificuldade: 1, objetivos: ['livre'], enunciado: 'Item ' + id, resposta: true, autoria: 'aluno' });
  await page.evaluate((q) => App.adicionarBanco({ nome: 'Banco A (aba 1)', questoes: [q] }), qx('aba-um-001'));
  await aba2.evaluate((q) => App.adicionarBanco({ nome: 'Banco B (aba 2)', questoes: [q] }), qx('aba-dois-001'));
  await page.reload();
  await page.waitForSelector('.hero');
  const nomes = await page.evaluate(() => App.bancos.map((b) => b.nome));
  ok(nomes.includes('Banco A (aba 1)') && nomes.includes('Banco B (aba 2)'), 'banco criado em outra aba não some: ' + nomes.join(', '));
  await aba2.close();
  const antesDuplo = nomes.length;
  await page.goto(URL + '#/minhas-questoes');
  await page.click('[data-act="mq-modo"][data-modo="texto"]');
  await page.fill('#mq-texto', '1. Duplo?\nA) a\nB) b\nC) c\nD) d\nE) e');
  await page.fill('#mq-gabarito', '1-A');
  await page.click('[data-act="mq-reconhecer"]');
  await page.waitForSelector('.rv-card');
  await page.dblclick('[data-act="rv-salvar"]');
  await page.waitForSelector('dialog[open]');
  await page.click('dialog button[value="nao"]');
  ok(await page.evaluate(() => App.bancos.length) === antesDuplo + 1, 'duplo clique em salvar cria um banco só');

  ok(!erros.length, 'erros na página: ' + erros.join(' | '));
  await browser.close();
  console.log('minhas questões: texto, PDF em duas colunas, planilha, escrita à mão, anotações, migração e backup ok');
})().catch((e) => { console.error('FALHOU [' + passo + '] ' + e.message); process.exit(1); });
