/* Teste ponta a ponta de Livros e Contexto: node tests/livros.js [url] [pasta]
   Estante (TXT, MD, PDF, MOBI recusado), leitor, posição lembrada, remoção, e Contexto gerando de verdade (sem API). */
'use strict';
const path = require('path');
const fs = require('fs');
const os = require('os');
const { execSync } = require('child_process');
const { chromium } = require(path.join(execSync('npm root -g').toString().trim(), '@playwright', 'cli', 'node_modules', 'playwright'));

const URL = process.argv[2] || 'http://localhost:5321/';
const OUT = process.argv[3] || fs.mkdtempSync(path.join(os.tmpdir(), 'helma-livros-'));
fs.mkdirSync(OUT, { recursive: true });
let passo = '';
const ok = (c, m) => { if (!c) throw new Error('[' + passo + '] ' + m); };

const MD = '# Capítulo um\nPrimeiro capítulo do livro de teste.\n\n<img src=x onerror="window.__xss=1"> texto perigoso <script>window.__xss=2</script>\n\n# Capítulo dois\nSegundo capítulo.\n\n# Capítulo três\nTerceiro capítulo.\n';
const TXT = `A Revolução Industrial começou na Inglaterra no século XVIII e transformou a produção de mercadorias em larga escala.
A máquina a vapor foi aperfeiçoada por James Watt em 1769 e passou a movimentar fábricas, locomotivas e navios por todo o território.
O capitalismo industrial consolidou-se com a ampliação do trabalho assalariado nas cidades inglesas durante o século XIX.

A urbanização acelerada provocou crescimento desordenado, falta de saneamento e jornadas de trabalho superiores a 14 horas diárias nas fábricas.
Denomina-se sindicato a associação de trabalhadores criada para defender direitos trabalhistas e melhorar as condições de trabalho.
A burguesia industrial controlava os meios de produção e contratava operários em troca de salários muito baixos nas fábricas.
O Parlamento britânico aprovou leis fabris limitando o trabalho infantil e regulamentando a jornada nas fábricas têxteis inglesas.
A Inglaterra liderou a industrialização porque reunia carvão, ferro, capital acumulado e mercado consumidor interno em expansão.

O liberalismo econômico é a doutrina que defende a livre iniciativa e a mínima intervenção do Estado na economia de mercado.
A mais-valia consiste na diferença entre o valor produzido pelo operário e o salário que ele recebe do patrão industrial.
A França também industrializou suas fábricas depois de 1830, com apoio de ferrovias e bancos de investimento nas cidades.
O Brasil iniciou sua industrialização tardiamente, a partir do final do século XIX, com a produção têxtil e cafeeira.
A Alemanha unificada em 1871 desenvolveu indústrias químicas e siderúrgicas de grande porte antes da Primeira Guerra Mundial.`;

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1360, height: 900 } });
  const page = await ctx.newPage();
  const erros = [], externas = [];
  page.on('pageerror', (e) => erros.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) erros.push(m.text()); });
  page.on('request', (r) => { if (!/^(http:\/\/(localhost|127\.0\.0\.1)|blob:|data:)/.test(r.url())) externas.push(r.url()); });

  // arquivos de teste
  const dir = path.join(OUT, 'arquivos'); fs.mkdirSync(dir, { recursive: true });
  const f = (n, c) => { const p = path.join(dir, n); fs.writeFileSync(p, c); return p; };
  const md = f('Livro de teste.md', MD), txt = f('Revolução Industrial.txt', TXT), mobi = f('antigo.mobi', 'BOOKMOBI'), exe = f('programa.exe', 'MZ');
  const pdfPage = await ctx.newPage();
  await pdfPage.setContent('<html><body style="font:18px Arial"><p>Texto da primeira página do PDF de teste.</p><p style="page-break-before:always">Texto da segunda página do PDF de teste.</p><p style="page-break-before:always">Terceira página.</p></body></html>');
  const pdf = path.join(dir, 'Apostila PDF.pdf');
  await pdfPage.pdf({ path: pdf, format: 'A5' });
  await pdfPage.close();

  await page.goto(URL);
  await page.evaluate(() => localStorage.setItem('gabarito.v1', JSON.stringify({ perfil: { nome: 'Ana', objetivo: 'concursos-gerais', materias: ['portugues', 'matematica'], metaDiaria: 10, metaSemanal: 40 } })));
  await page.reload();
  ok(await page.evaluate(() => /connect-src 'none'/.test(document.querySelector('meta[http-equiv="Content-Security-Policy"]').content)), 'CSP continua sem abrir rede (connect-src none)');

  passo = 'estante: adicionar';
  await page.goto(URL + '#/livros');
  await page.waitForSelector('#lv-arquivos', { state: 'attached' });
  ok(await page.locator('nav.nav a[href="#/livros"]').count() === 1 && await page.locator('nav.nav a[href="#/contexto"]').count() === 1, 'itens Livros e Contexto no menu');
  await page.setInputFiles('#lv-arquivos', [md, txt, pdf, mobi, exe]);
  await page.waitForFunction(() => document.querySelectorAll('#lv-lista .list-item').length === 3, null, { timeout: 15000 });
  const avisos = await page.textContent('[role="alert"]');
  ok(/converta para EPUB/.test(avisos) && /programa\.exe/.test(avisos), 'MOBI e formato desconhecido recusados com aviso: ' + avisos);
  ok(/restam .* no aparelho/.test(await page.textContent('#lv-corpo')), 'mostra o espaço restante');
  // O livro guardado é uma cópia dos bytes (não o File, que no Android perde a permissão de leitura) e não fica vazio
  // depois que o pdf.js confere o PDF (ele transfere o ArrayBuffer para o worker).
  const copias = await page.evaluate(() => Armazem.ler('livros').then((l) => Promise.all(l.map((x) =>
    Armazem.ler('livro:' + x.id).then((b) => !(b instanceof File) && b.size === x.tamanho && b.size > 0)))));
  ok(copias.length === 3 && copias.every(Boolean), 'cópias completas dos livros guardadas (PDF inclusive): ' + copias);
  await page.screenshot({ path: path.join(OUT, 'l1-estante.png'), fullPage: true });
  await page.fill('#lv-busca', 'apostila');
  ok(await page.locator('#lv-lista .list-item').count() === 1, 'busca por título');
  await page.fill('#lv-busca', '');

  passo = 'leitor de texto (MD) e posição';
  await page.click('#lv-lista .list-item:has-text("Livro de teste") a.lv-abrir');
  await page.waitForSelector('#lv-texto h2');
  ok((await page.textContent('#lv-texto h2')) === 'Capítulo um', 'primeiro capítulo');
  ok(await page.evaluate(() => !window.__xss && !document.querySelector('#lv-texto img, #lv-texto script')), 'HTML dentro do arquivo não vira marcação');
  ok((await page.textContent('#lv-texto')).includes('<img src=x'), 'o texto perigoso aparece como texto');
  await page.click('[data-act="lv-sec-prox"] >> nth=0');
  await page.click('[data-act="lv-sec-prox"] >> nth=0');
  ok((await page.textContent('#lv-texto h2')) === 'Capítulo três', 'navega entre capítulos');
  await page.screenshot({ path: path.join(OUT, 'l2-leitor-texto.png'), fullPage: true });
  await page.waitForTimeout(300);
  await page.reload();
  await page.waitForSelector('#lv-texto h2');
  ok((await page.textContent('#lv-texto h2')) === 'Capítulo três', 'lembra o capítulo depois de recarregar');

  passo = 'leitor de PDF';
  await page.goto(URL + '#/livros');
  await page.click('#lv-lista .list-item:has-text("Apostila PDF") a.lv-abrir');
  await page.waitForFunction(() => { const c = document.getElementById('lv-canvas'); return c && c.width > 100 && c.hasAttribute('data-pronto'); }, null, { timeout: 20000 });
  const larg1 = await page.evaluate(() => document.getElementById('lv-canvas').style.width);
  ok(await page.evaluate(() => { const c = document.getElementById('lv-canvas'), d = c.getContext('2d').getImageData(0, 0, c.width, c.height).data; for (let i = 0; i < d.length; i += 4) if (d[i] < 100) return true; return false; }), 'a página foi desenhada (há pixels escuros)');
  await page.click('[data-act="lv-prox"]');
  await page.waitForFunction(() => document.getElementById('lv-pg').value === '2');
  await page.fill('#lv-pg', '3'); await page.keyboard.press('Tab');
  await page.waitForFunction(() => document.getElementById('lv-pg').value === '3');
  await page.click('[data-act="lv-zoom"][data-v="+"]');
  await page.waitForFunction((l) => document.getElementById('lv-canvas').style.width !== l, larg1);
  await page.click('[data-act="lv-zoom"][data-v="0"]');
  await page.screenshot({ path: path.join(OUT, 'l3-leitor-pdf.png'), fullPage: true });
  await page.waitForTimeout(300);
  await page.reload();
  await page.waitForFunction(() => document.getElementById('lv-pg') && document.getElementById('lv-pg').value === '3', null, { timeout: 20000 });

  passo = 'renomear';
  await page.goto(URL + '#/livros');
  await page.click('[data-act="lv-renomear"] >> nth=0');
  await page.fill('#dlg-texto', 'Título novo');
  await page.keyboard.press('Enter');
  await page.waitForSelector('#lv-lista .title:has-text("Título novo")');

  passo = 'contexto: usar um livro da estante';
  await page.click('#lv-lista .list-item:has-text("Revolução Industrial") [data-act="lv-contexto"]');
  await page.waitForSelector('[data-doc]', { timeout: 15000 });
  ok(location_(await page.url()) === '#/contexto', 'foi para o Contexto');
  ok(await page.locator('[data-doc]:checked').count() === 1, 'documento já marcado');

  passo = 'contexto: enviar arquivo e gerar questões';
  await page.setInputFiles('#cx-arquivos', [f('Revolução Industrial 2.txt', TXT), mobi]); // nome diferente: o mesmo arquivo duas vezes é recusado
  await page.waitForFunction(() => document.querySelectorAll('[data-doc]').length === 2, null, { timeout: 15000 });
  ok(/MOBI/.test(await page.textContent('[role="alert"]')), 'MOBI recusado no Contexto');
  ok(/PDF ou EPUB/.test(await page.textContent('[role="alert"]')), 'o aviso diz o que fazer em vez de só citar um programa');
  await page.uncheck('[data-doc] >> nth=1');
  await page.waitForSelector('[data-faixa="de"]');
  ok(await page.locator('[data-faixa="de"]').count() === 1, 'escolha de trecho do documento marcado');
  ok(/Criadas automaticamente, então confira antes de salvar/.test(await page.textContent('.callout-pen')), 'avisa que precisa de revisão');
  await page.screenshot({ path: path.join(OUT, 'c1-contexto.png'), fullPage: true });
  await page.selectOption('#cx-tipo', 'lacuna5');
  await page.fill('#cx-qtd', '4');
  await page.selectOption('#cx-materia', '__nova');
  await page.fill('#cx-nova', 'História');
  await page.click('[data-act="cx-gerar"]');
  await page.waitForSelector('.rv-card', { timeout: 15000 });
  const n = await page.locator('.rv-card').count();
  ok(n >= 2 && n <= 4, 'questões geradas na tela de revisão: ' + n);
  ok((await page.inputValue('#rv-nome')) === 'Revolução Industrial', 'nome do banco = título do documento');
  ok((await page.inputValue('[data-rv="0"] [data-campo="enunciado"]')).includes('________'), 'enunciado com lacuna');
  ok(await page.locator('[data-rv="0"] [data-campo="alt"]').count() === 5, '5 alternativas');
  ok(/Criada automaticamente/.test(await page.textContent('[data-rv="0"] .callout')), 'aviso de revisão em cada questão');
  ok(/Trecho original: "/.test(await page.inputValue('[data-rv="0"] [data-campo="comentario"]')), 'comentário traz o trecho original');
  await page.screenshot({ path: path.join(OUT, 'c2-revisao.png'), fullPage: true });
  await page.click('[data-act="rv-salvar"]');
  await page.waitForSelector('dialog[open]');
  await page.click('dialog button[value="nao"]');
  const salvas = await page.evaluate(() => Banco.questoes.filter((q) => q.autoria === 'aluno' && /^meu-/.test(q.id)));
  ok(salvas.length === n && salvas.every((q) => q.explicacao.resumo.includes('Trecho original') && q.explicacao.detalhada && q.materia === 'historia'), 'questões salvas no banco do aluno com explicação e matéria escolhida');
  ok(await page.evaluate(() => App.bancos.some((b) => b.origem === 'contexto' && b.nome === 'Revolução Industrial')), 'banco guardado com origem contexto');

  passo = 'contexto: certo ou errado e cartões';
  await page.goto(URL + '#/contexto');
  await page.waitForSelector('[data-doc]');
  await page.selectOption('#cx-tipo', 'certo-errado');
  await page.fill('#cx-qtd', '4');
  await page.click('[data-act="cx-gerar"]');
  await page.waitForSelector('.rv-card');
  ok(await page.locator('.rv-card [data-campo="alt"]').count() === 0 && await page.locator('.rv-card .tag-ok').count() === await page.locator('.rv-card').count(), 'certo/errado já vem com a resposta marcada');
  await page.click('[data-act="rv-cancelar"] >> nth=0');
  await page.click('dialog button[value="sim"]');
  await page.waitForSelector('#cx-tipo'); ok(page.url().endsWith('#/contexto'), 'descartar volta para a tela de criar questões');
  await page.goto(URL + '#/contexto');
  await page.waitForSelector('[data-doc]');
  await page.selectOption('#cx-tipo', 'cartoes');
  await page.fill('#cx-qtd', '5');
  await page.click('[data-act="cx-gerar"]');
  await page.waitForSelector('#cx-previa');
  const nc = await page.locator('[data-cartao]').count();
  ok(nc >= 2, 'cartões de definição montados: ' + nc);
  await page.screenshot({ path: path.join(OUT, 'c3-cartoes.png'), fullPage: true });
  await page.uncheck('[data-cartao="0"]');
  await page.click('[data-act="cx-cartoes-salvar"]');
  await page.waitForFunction((k) => Object.keys(Store.estado.cartoes).length === k, nc - 1);
  await page.goto(URL + '#/cartoes');
  ok(/Sindicato|Mais-valia|Liberalismo/.test(await page.textContent('#cl')), 'cartões aparecem em Cartões');

  passo = 'remover';
  await page.goto(URL + '#/livros');
  await page.waitForSelector('#lv-lista .list-item');
  const id = await page.getAttribute('[data-act="lv-remover"] >> nth=0', 'data-id');
  await page.click('[data-act="lv-remover"] >> nth=0');
  await page.click('dialog button[value="sim"]');
  await page.waitForFunction(() => document.querySelectorAll('#lv-lista .list-item').length === 2);
  ok(await page.evaluate((i) => Armazem.ler('livro:' + i).then((b) => b === undefined || b === null), id), 'arquivo apagado do IndexedDB');
  await page.reload();
  await page.waitForFunction(() => document.querySelectorAll('#lv-lista .list-item').length === 2);

  passo = 'sem rede e sem erros';
  ok(!externas.length, 'nenhuma requisição fora do app: ' + externas.join(', '));
  ok(!erros.length, 'erros no console: ' + erros.join(' | '));
  ok(await page.evaluate(() => !window.__xss), 'nenhum script do arquivo executou');
  await browser.close();
  console.log('livros e contexto: estante, leitor (texto e PDF), posição, remoção, geração local de questões e cartões ok');
})().catch((e) => { console.error(e); process.exit(1); });

function location_(u) { return '#' + u.split('#')[1]; }
