/* Livros e Contexto sob estresse: node tests/livros-abas.js [url] [pasta]
   Duas abas (adicionar e remover em abas diferentes), IndexedDB ausente, arquivo inválido recusado no envio, livro repetido,
   título vazio, página fora do livro, faixa invertida, teto do canvas do PDF e "Apagar tudo" limpando o IndexedDB. */
'use strict';
const path = require('path');
const fs = require('fs');
const os = require('os');
const zlib = require('zlib');
const { execSync } = require('child_process');
const { chromium } = require(path.join(execSync('npm root -g').toString().trim(), '@playwright', 'cli', 'node_modules', 'playwright'));

const URL = process.argv[2] || 'http://localhost:5321/';
const OUT = process.argv[3] || fs.mkdtempSync(path.join(os.tmpdir(), 'helma-abas-'));
fs.mkdirSync(OUT, { recursive: true });
let passo = '';
const ok = (c, m) => { if (!c) throw new Error('[' + passo + '] ' + m); };
const PERFIL = { perfil: { nome: 'Ana', objetivo: 'concursos-gerais', materias: ['portugues'], metaDiaria: 10, metaSemanal: 40 } };

const dir = path.join(OUT, 'arquivos'); fs.mkdirSync(dir, { recursive: true });
const f = (n, c) => { const p = path.join(dir, n); fs.writeFileSync(p, c); return p; };
const TEXTO = 'A Revolução Industrial começou na Inglaterra no século XVIII e transformou a produção de mercadorias em larga escala.\n\nA máquina a vapor foi aperfeiçoada por James Watt em 1769 e passou a movimentar fábricas por todo o território.';
const LONGO = fs.readFileSync(path.join(__dirname, 'gerador.test.js'), 'utf8').match(/const TEXTO = `([\s\S]*?)`;/)[1];
// ZIP mínimo (só para montar EPUB/DOCX inválidos de propósito)
function zip(arquivos) {
  const locais = [], centrais = []; let pos = 0;
  for (const [nome, conteudo] of Object.entries(arquivos)) {
    const cru = Buffer.from(conteudo), comp = zlib.deflateRawSync(cru), n = Buffer.from(nome);
    const l = Buffer.alloc(30); l.writeUInt32LE(0x04034b50, 0); l.writeUInt16LE(20, 4); l.writeUInt16LE(8, 8); l.writeUInt32LE(comp.length, 18); l.writeUInt32LE(cru.length, 22); l.writeUInt16LE(n.length, 26);
    const c = Buffer.alloc(46); c.writeUInt32LE(0x02014b50, 0); c.writeUInt16LE(20, 4); c.writeUInt16LE(20, 6); c.writeUInt16LE(8, 10); c.writeUInt32LE(comp.length, 20); c.writeUInt32LE(cru.length, 24); c.writeUInt16LE(n.length, 28); c.writeUInt32LE(pos, 42);
    locais.push(l, n, comp); centrais.push(c, n); pos += 30 + n.length + comp.length;
  }
  const cd = Buffer.concat(centrais), fim = Buffer.alloc(22);
  fim.writeUInt32LE(0x06054b50, 0); fim.writeUInt16LE(Object.keys(arquivos).length, 8); fim.writeUInt16LE(Object.keys(arquivos).length, 10); fim.writeUInt32LE(cd.length, 12); fim.writeUInt32LE(pos, 16);
  return Buffer.concat([...locais, cd, fim]);
}

async function nova(browser, opcoes = {}, antes) {
  const ctx = await browser.newContext(Object.assign({ viewport: { width: 1360, height: 900 } }, opcoes));
  if (antes) await ctx.addInitScript(antes);
  const page = await ctx.newPage();
  await page.goto(URL);
  await page.evaluate((p) => localStorage.setItem('gabarito.v1', JSON.stringify(p)), PERFIL);
  await page.reload();
  return { ctx, page };
}
const itens = (page) => page.evaluate(() => Armazem.ler('livros').then((l) => (l || []).map((x) => x.titulo).sort()));
const docs = (page) => page.evaluate(() => Armazem.ler('ctx-indice').then((l) => (l || []).map((x) => x.titulo).sort()));

(async () => {
  const browser = await chromium.launch();
  const erros = [];

  passo = 'duas abas: estante';
  {
    const { ctx, page: A } = await nova(browser);
    const B = await ctx.newPage();
    B.on('pageerror', (e) => erros.push(e.message));
    await A.goto(URL + '#/livros'); await B.goto(URL + '#/livros');
    await A.waitForSelector('#lv-arquivos', { state: 'attached' }); await B.waitForSelector('#lv-arquivos', { state: 'attached' });
    await A.setInputFiles('#lv-arquivos', f('livro-a.txt', TEXTO));
    await A.waitForFunction(() => document.querySelectorAll('#lv-lista .list-item').length === 1);
    // B ainda não recarregou, mas recebe o aviso da outra aba
    await B.waitForFunction(() => document.querySelectorAll('#lv-lista .list-item').length === 1, null, { timeout: 5000 });
    await B.setInputFiles('#lv-arquivos', f('livro-b.txt', TEXTO + ' B'));
    await B.waitForFunction(() => document.querySelectorAll('#lv-lista .list-item').length === 2);
    ok(JSON.stringify(await itens(A)) === JSON.stringify(['livro-a', 'livro-b']), 'os dois livros ficaram: ' + JSON.stringify(await itens(A)));
    await A.reload(); await A.waitForSelector('#lv-lista .list-item');
    await A.click('#lv-lista .list-item:has-text("livro-a") [data-act="lv-remover"]'); await A.click('dialog button[value="sim"]');
    await A.waitForFunction(() => document.querySelectorAll('#lv-lista .list-item').length === 1);
    await B.setInputFiles('#lv-arquivos', f('livro-c.txt', TEXTO + ' C'));
    await B.waitForFunction(() => document.querySelectorAll('#lv-lista .list-item').length === 2);
    await B.reload(); await B.waitForSelector('#lv-lista .list-item');
    ok(JSON.stringify(await itens(B)) === JSON.stringify(['livro-b', 'livro-c']), 'livro removido na outra aba não volta: ' + JSON.stringify(await itens(B)));
    await ctx.close();
  }

  passo = 'duas abas: textos do Contexto';
  {
    const { ctx, page: A } = await nova(browser);
    const B = await ctx.newPage();
    await A.goto(URL + '#/contexto'); await B.goto(URL + '#/contexto');
    await A.waitForSelector('#cx-arquivos', { state: 'attached' }); await B.waitForSelector('#cx-arquivos', { state: 'attached' });
    await A.setInputFiles('#cx-arquivos', f('texto-a.txt', TEXTO));
    await A.waitForSelector('[data-doc]');
    await B.setInputFiles('#cx-arquivos', f('texto-b.txt', TEXTO + ' B'));
    await B.waitForFunction(() => document.querySelectorAll('[data-doc]').length === 2);
    ok(JSON.stringify(await docs(A)) === JSON.stringify(['texto-a', 'texto-b']), 'os dois textos ficaram: ' + JSON.stringify(await docs(A)));
    await A.waitForFunction(() => document.querySelectorAll('[data-doc]').length === 2, null, { timeout: 5000 });
    await A.click('[data-act="cx-remover"] >> nth=0'); await A.click('dialog button[value="sim"]');
    await A.waitForFunction(() => document.querySelectorAll('[data-doc]').length === 1);
    await B.setInputFiles('#cx-arquivos', f('texto-c.txt', TEXTO + ' C'));
    await B.waitForFunction(() => document.querySelectorAll('[data-doc]').length === 2);
    ok((await docs(B)).length === 2, 'texto removido não volta: ' + JSON.stringify(await docs(B)));
    await ctx.close();
  }

  passo = 'arquivo inválido recusado no envio';
  {
    const { ctx, page } = await nova(browser);
    page.on('pageerror', (e) => erros.push(e.message));
    await page.goto(URL + '#/livros'); await page.waitForSelector('#lv-arquivos', { state: 'attached' });
    const ruins = [f('vazio.txt', ''), f('so-espacos.md', '   \n\n  '), f('nao-e-epub.epub', 'isto não é um zip'), f('docx-ruim.docx', zip({ 'outro.xml': '<a/>' })), f('epub-sem-indice.epub', zip({ 'mimetype': 'x' })), f('falso.pdf', 'nem de longe um pdf')];
    await page.setInputFiles('#lv-arquivos', ruins);
    await page.waitForFunction(() => document.querySelectorAll('[role="alert"] br').length >= 5 || !document.getElementById('lv-status').textContent, null, { timeout: 20000 });
    await page.waitForTimeout(500);
    ok((await itens(page)).length === 0, 'nada entrou na estante: ' + JSON.stringify(await itens(page)));
    const aviso = await page.textContent('[role="alert"]');
    ok(ruins.every((r) => aviso.includes(path.basename(r))), 'cada arquivo ruim tem seu aviso: ' + aviso);
    ok(/não foi possível usar este arquivo|não parece ser um PDF/.test(aviso), 'aviso explica: ' + aviso);
    ok(await page.evaluate(() => new Promise((r) => { const q = indexedDB.open('gabarito'); q.onsuccess = () => { const t = q.result.transaction('kv'), k = t.objectStore('kv').getAllKeys(); k.onsuccess = () => r(k.result.filter((x) => String(x).startsWith('livro:')).length === 0); }; })), 'nenhum arquivo órfão no IndexedDB');
    // mesmo livro duas vezes: avisa e não duplica
    const ok1 = f('Repetido.txt', TEXTO);
    await page.setInputFiles('#lv-arquivos', ok1); await page.waitForFunction(() => document.querySelectorAll('#lv-lista .list-item').length === 1);
    await page.setInputFiles('#lv-arquivos', ok1);
    await page.waitForFunction(() => /já está na sua estante/.test((document.querySelector('[role="alert"]') || {}).textContent || ''));
    ok((await itens(page)).length === 1, 'livro repetido não duplica');
    // o aviso fica até ser fechado
    await page.click('[data-act="lv-fechar"]');
    await page.waitForFunction(() => !document.querySelector('#lv-corpo [role="alert"]'), null, { timeout: 5000 });
    // renomear para vazio: o diálogo fica aberto e explica
    await page.click('[data-act="lv-renomear"]');
    await page.fill('#dlg-texto', '   '); await page.keyboard.press('Enter');
    ok(await page.locator('dialog[open]').count() === 1 && /não pode ficar vazio/.test(await page.textContent('#dlg-erro')), 'título vazio não fecha o diálogo');
    await page.fill('#dlg-texto', 'Nome novo'); await page.keyboard.press('Enter');
    await page.waitForSelector('#lv-lista .title:has-text("Nome novo")');
    await ctx.close();
  }

  passo = 'IndexedDB ausente';
  {
    const { ctx, page } = await nova(browser, {}, () => { Object.defineProperty(window, 'indexedDB', { value: undefined, configurable: true }); });
    page.on('pageerror', (e) => erros.push(e.message));
    await page.goto(URL + '#/livros'); await page.waitForSelector('#lv-arquivos', { state: 'attached' });
    await page.waitForSelector('#lv-sem-banco .callout');
    ok(/não deixa o Helma guardar/.test(await page.textContent('#lv-sem-banco')), 'estante explica que não dá para guardar');
    await page.setInputFiles('#lv-arquivos', f('sem-idb.txt', TEXTO));
    await page.waitForSelector('#lv-corpo [role="alert"]');
    ok(/não permite guardar arquivos/.test(await page.textContent('#lv-corpo [role="alert"]')), 'mensagem de armazenamento: ' + await page.textContent('#lv-corpo [role="alert"]'));
    await page.goto(URL + '#/contexto'); await page.waitForSelector('#cx-arquivos', { state: 'attached' });
    await page.waitForSelector('#cx-sem-banco .callout');
    await page.setInputFiles('#cx-arquivos', f('sem-idb2.txt', TEXTO));
    await page.waitForSelector('[role="alert"]:has-text("sem-idb2")');
    const m = await page.textContent('[role="alert"]:has-text("sem-idb2")');
    ok(/não permite guardar arquivos/.test(m) && !/não foi possível ler/.test(m), 'Contexto não culpa a leitura do arquivo: ' + m);
    await ctx.close();
  }

  passo = 'leitor de PDF: página, zoom e teto do canvas';
  {
    const { ctx, page } = await nova(browser, { viewport: { width: 2560, height: 1440 }, deviceScaleFactor: 2 });
    page.on('pageerror', (e) => erros.push(e.message));
    const pp = await ctx.newPage();
    await pp.setContent('<html><body style="font:18px Arial"><p>Primeira página.</p><p style="page-break-before:always">Segunda.</p></body></html>');
    const pdf = path.join(dir, 'duas.pdf'); await pp.pdf({ path: pdf, format: 'A5' }); await pp.close();
    await page.goto(URL + '#/livros'); await page.waitForSelector('#lv-arquivos', { state: 'attached' });
    await page.setInputFiles('#lv-arquivos', pdf); await page.waitForFunction(() => document.querySelectorAll('#lv-lista .list-item').length === 1);
    await page.click('#lv-lista a.lv-abrir');
    await page.waitForFunction(() => document.getElementById('lv-canvas') && document.getElementById('lv-canvas').hasAttribute('data-pronto'), null, { timeout: 20000 });
    for (let i = 0; i < 8; i++) await page.click('[data-act="lv-zoom"][data-v="+"]');
    await page.waitForTimeout(1500);
    const area = await page.evaluate(() => { const c = document.getElementById('lv-canvas'); return c.width * c.height; });
    ok(area <= 16000000 * 1.05, 'área do canvas limitada (' + area + ' px)');
    await page.fill('#lv-pg', ''); await page.keyboard.press('Tab');
    ok((await page.inputValue('#lv-pg')) === '1', 'campo vazio mantém a página atual');
    await page.fill('#lv-pg', '99'); await page.keyboard.press('Tab');
    await page.waitForFunction(() => document.getElementById('lv-pg').value === '2');
    ok(/Este livro tem 2 páginas/.test(await page.textContent('#toast')), 'avisa que a página não existe');
    await ctx.close();
  }

  passo = 'criar questões: faixa invertida e matéria obrigatória';
  {
    const { ctx, page } = await nova(browser);
    page.on('pageerror', (e) => erros.push(e.message));
    const md = Array.from({ length: 5 }, (_, i) => '# Capítulo ' + (i + 1) + '\n\n' + LONGO.split('\n').join('\n\n')).join('\n\n');
    await page.goto(URL + '#/contexto'); await page.waitForSelector('#cx-arquivos', { state: 'attached' });
    await page.setInputFiles('#cx-arquivos', f('cinco.md', md));
    await page.waitForSelector('[data-faixa="de"]');
    await page.selectOption('[data-faixa="de"]', '3');
    ok((await page.inputValue('[data-faixa="ate"]')) === '4', 'ao subir o início, o fim continua');
    await page.selectOption('[data-faixa="ate"]', '1');
    ok(/não pode vir antes/.test(await page.textContent('#toast')), 'avisa da faixa invertida');
    ok((await page.inputValue('[data-faixa="de"]')) === '3' && (await page.inputValue('[data-faixa="ate"]')) === '4', 'nada foi trocado em silêncio');
    ok(/Do capítulo/.test(await page.textContent('.cx-faixa')), 'rótulos em português claro');
    await page.reload(); await page.waitForSelector('[data-faixa="de"]');
    ok((await page.inputValue('[data-faixa="de"]')) === '3', 'a escolha de trecho sobrevive a recarregar');
    ok((await page.inputValue('#cx-materia')) === '', 'matéria não vem preenchida por engano');
    await page.click('[data-act="cx-gerar"]');
    ok(/Escolha a matéria/.test(await page.textContent('#toast')), 'pede a matéria');
    await page.fill('#cx-qtd', '0'); await page.click('[data-act="cx-gerar"]');
    ok(/entre 1 e 20/.test(await page.textContent('#toast')), 'quantidade fora do limite explica');
    await page.fill('#cx-qtd', '5'); await page.selectOption('#cx-materia', 'portugues'); await page.click('[data-act="cx-gerar"]');
    await page.waitForFunction(() => document.querySelector('.rv-card') || document.querySelector('.callout-marker[role="alert"]'), null, { timeout: 15000 });
    ok(/#\/minhas-questoes\/revisao$/.test(page.url()) && await page.locator('nav.nav a[aria-current="page"]:has-text("Criar questões de um texto")').count() === 1, 'a revisão mantém o menu em "Criar questões de um texto": ' + page.url() + ' ' + (await page.textContent('[role="alert"]').catch(() => 'sem alerta')));
    ok(await page.locator('a.btn:has-text("Voltar")').count() === 1, 'há um jeito de voltar');
    await ctx.close();
  }

  passo = 'Apagar tudo limpa o IndexedDB';
  {
    const { ctx, page } = await nova(browser);
    page.on('pageerror', (e) => erros.push(e.message));
    await page.goto(URL + '#/livros'); await page.waitForSelector('#lv-arquivos', { state: 'attached' });
    await page.setInputFiles('#lv-arquivos', [f('apagar-1.txt', TEXTO), f('apagar-2.txt', TEXTO + ' 2')]);
    await page.waitForFunction(() => document.querySelectorAll('#lv-lista .list-item').length === 2);
    await page.click('[data-act="lv-contexto"] >> nth=0'); await page.waitForSelector('[data-doc]', { timeout: 15000 });
    await page.evaluate(() => App.adicionarBanco({ nome: 'Banco X', origem: 'json', questoes: [{ id: 'apagar-001', materia: 'portugues', assunto: 'X', tipo: 'certo-errado', estilo: 'Outra', dificuldade: 1, objetivos: ['livre'], enunciado: 'Questão de teste para apagar.', resposta: true, autoria: 'aluno' }] }));
    const chaves = () => page.evaluate(() => new Promise((r) => { const q = indexedDB.open('gabarito'); q.onsuccess = () => { const k = q.result.transaction('kv').objectStore('kv').getAllKeys(); k.onsuccess = () => { q.result.close(); r(k.result); }; }; }));
    ok((await chaves()).length >= 6, 'há dados no IndexedDB antes: ' + JSON.stringify(await chaves()));
    ok(await page.evaluate(() => Object.keys(localStorage).some((k) => k === 'gabarito.ctx-sel')), 'seleção guardada no localStorage');
    await page.goto(URL + '#/ajustes'); await page.waitForSelector('[data-act="aj-apagar"]');
    ok(/livros/.test(await page.textContent('main')), 'Ajustes avisa que livros não entram no backup');
    await page.click('[data-act="aj-apagar"]'); await page.click('dialog button[value="sim"]');
    await page.waitForFunction(() => /Boas-vindas|Seu estudo/.test(document.body.textContent), null, { timeout: 15000 });
    ok((await chaves()).length === 0, 'IndexedDB vazio depois de apagar tudo: ' + JSON.stringify(await chaves()));
    ok(await page.evaluate(() => Object.keys(localStorage).filter((k) => k.startsWith('gabarito.')).length === 0), 'localStorage do app limpo');
    await ctx.close();
  }

  passo = 'sem erros de JavaScript';
  ok(!erros.length, 'erros: ' + erros.join(' | '));
  await browser.close();
  console.log('livros-abas: duas abas, IndexedDB ausente, arquivo inválido, repetido, título vazio, página, faixa, canvas e apagar tudo ok');
})().catch((e) => { console.error(e); process.exit(1); });
