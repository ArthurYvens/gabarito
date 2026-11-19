/* Teste ponta a ponta no navegador: node tests/e2e.js [url] [pasta-de-capturas]
   Precisa do servidor rodando (python -m http.server 5321) e do Playwright instalado globalmente. */
'use strict';
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');
const { chromium } = require(path.join(execSync('npm root -g').toString().trim(), '@playwright', 'cli', 'node_modules', 'playwright'));

const URL = process.argv[2] || 'http://localhost:5321/';
const OUT = process.argv[3] || path.join(require('os').tmpdir(), 'gabarito-capturas');
fs.mkdirSync(OUT, { recursive: true });

const erros = [];
let passo = '';
const ok = (cond, msg) => { if (!cond) throw new Error('[' + passo + '] ' + msg); };

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, colorScheme: 'light', locale: 'pt-BR' });
  const page = await ctx.newPage();
  page.on('pageerror', (e) => erros.push('pageerror: ' + e.message));
  page.on('console', (m) => { if (m.type() === 'error' && !/404|Failed to load resource|fonts\.g/.test(m.text())) erros.push('console: ' + m.text()); });
  const foto = async (nome) => { await page.waitForTimeout(400); return page.screenshot({ path: path.join(OUT, nome + '.png'), fullPage: true }); };

  passo = 'onboarding';
  await page.goto(URL);
  await page.fill('#onb-nome', 'Arthur');
  await foto('01-onboarding');
  await page.click('text=Começar');
  await page.click('button.opt:has-text("Carreiras policiais")');
  await page.click('text=Continuar');
  ok(await page.locator('#onb-mats [aria-pressed="true"]').count() >= 5, 'matérias do objetivo deveriam vir marcadas');
  await page.click('text=Montar meu painel');
  await page.waitForSelector('.hero');
  ok((await page.textContent('.hero h1')).includes('Arthur'), 'saudação com nome');
  await foto('02-inicio-vazio');

  passo = 'simulado rápido (modo estudo)';
  await page.click('[data-act="sim-rapido"]');
  await page.waitForSelector('#r-area .q');
  const total = await page.locator('#r-map button').count();
  ok(total > 0 && total <= 10, 'simulado rápido com até 10 questões, veio ' + total);
  for (let i = 0; i < total; i++) {
    const ce = await page.locator('#r-area .ce').count();
    // Ora acerta, ora erra: escolhe a primeira opção.
    await page.keyboard.press(ce ? 'c' : 'a');
    await page.keyboard.press('Enter');
    await page.waitForSelector('#r-area .verdict');
    if (i === 0) {
      ok(await page.locator('#r-area .exp .prose').count() === 1, 'explicação profunda aparece');
      ok(await page.locator('#r-area .source').count() >= 1, 'fontes "onde pesquisar" aparecem');
      await foto('03-questao-explicada');
    }
    if (i < total - 1) await page.keyboard.press('Enter');
  }
  await page.click('[data-act="r-finalizar"] >> nth=0');
  if (await page.locator('dialog[open]').count()) await page.click('dialog button[value="sim"]');
  await page.waitForSelector('.score');
  await foto('04-resultado');
  await page.click('details.rev >> nth=0');
  await page.waitForSelector('details.rev[open] .q', { timeout: 3000 });
  await page.goBack();
  await page.waitForTimeout(300);
  ok(!/resultado|simulado\//.test(page.url()), 'Voltar do navegador sai do resultado, foi para ' + page.url());

  passo = 'simulado modo prova com tempo';
  await page.goto(URL + '#/simulados');
  await page.waitForSelector('#montador');
  await foto('05-montador');
  await page.click('#m-modo button[data-v="prova"]');
  await page.waitForSelector('#m-tempo');
  await page.click('#m-qtd button:has-text("10")');
  await page.waitForSelector('#m-tempo');
  await page.click('[data-act="m-criar"]');
  await page.waitForSelector('#r-area .q');
  ok(/\d\d:\d\d/.test(await page.textContent('#r-timer')), 'cronômetro visível');
  await page.keyboard.press(await page.locator('#r-area .ce').count() ? 'e' : 'b');
  ok(await page.locator('#r-area .verdict').count() === 0, 'modo prova não mostra gabarito antes do fim');
  if (await page.locator('#r-area .strike-btn').count()) {
    await page.click('#r-area .strike-btn >> nth=2');
    ok(await page.locator('#r-area .alt.struck').count() === 1, 'riscar alternativa');
  }
  await page.keyboard.press('m');
  ok(await page.locator('#r-map button.flag').count() === 1, 'marcar para revisar');
  await page.keyboard.press('ArrowRight');
  await foto('06-prova');
  await page.click('[data-act="r-sair"]');
  await page.waitForSelector('text=Em andamento');
  await page.click('a.list-item:has-text("Em andamento")');
  await page.waitForSelector('#r-area .q');
  ok((await page.textContent('#r-cont')).startsWith('1/'), 'progresso salvo ao sair e voltar');
  await page.click('[data-act="r-finalizar"] >> nth=0');
  await page.click('dialog button[value="sim"]');
  await page.waitForSelector('.score');

  passo = 'banco de questões';
  await page.goto(URL + '#/questoes');
  await page.waitForSelector('#q-busca');
  const antes = await page.locator('.list-item').count();
  await page.selectOption('#q-tipo', 'certo-errado');
  await page.waitForTimeout(150);
  ok(await page.locator('.list-item').count() <= antes, 'filtro reduz lista');
  await page.fill('#q-busca', 'zzzznada');
  await page.waitForSelector('text=Nada encontrado');
  await page.fill('#q-busca', '');
  await page.selectOption('#q-tipo', '');
  await page.waitForTimeout(400);
  await page.click('.list-item >> nth=0');
  await page.waitForSelector('.q');
  await page.keyboard.press((await page.locator('.ce').count()) ? 'c' : 'a');
  await page.click('[data-act="qv-responder"]');
  await page.waitForSelector('.verdict');
  await foto('07-questao-avulsa');

  passo = 'revisão';
  await page.goto(URL + '#/revisao');
  await page.waitForSelector('text=Caderno de erros');
  await foto('08-revisao');

  passo = 'aulas';
  await page.goto(URL + '#/aulas');
  await page.waitForSelector('.lesson-card');
  await foto('09-aulas');
  await page.click('.lesson-card >> nth=0');
  await page.waitForSelector('.keypoints');
  await foto('10-aula');
  await page.click('[data-act="aula-concluir"]');
  await page.waitForSelector('text=Aula concluída em');
  if (await page.locator('[data-act="treinar"]').count()) {
    await page.click('[data-act="treinar"]');
    await page.waitForSelector('#r-area .q');
    await page.click('[data-act="r-sair"]');
  }

  passo = 'redação';
  await page.goto(URL + '#/redacao');
  await page.waitForSelector('.comp');
  await foto('11-redacao');
  await page.goto(URL + '#/redacao/escrever');
  await page.waitForSelector('#red-texto');
  const texto = 'Em "Quarto de Despejo", Carolina Maria de Jesus retrata a fome como presença diária. Entretanto, no Brasil, a insegurança alimentar persiste, seja pela desigualdade de renda, seja pela ineficiência na distribuição.\n\n' +
    'Em primeiro lugar, a concentração de renda impede o acesso regular a alimentos. Segundo Josué de Castro, a fome é um fenômeno social. Assim, a renda baixa reduz a qualidade das refeições das famílias.\n\n' +
    'Além disso, a ineficiência logística agrava o problema, visto que alimentos se perdem entre a colheita e o consumo. Desse modo, convivem o desperdício e a fome.\n\n' +
    'Portanto, o Ministério do Desenvolvimento Social deve ampliar a compra pública de alimentos, por meio de convênios com municípios, a fim de garantir refeições regulares, ou seja, ao menos três por dia.';
  await page.fill('#red-texto', texto);
  await page.waitForTimeout(500);
  ok((await page.locator('#red-painel .tag-ok').count()) >= 4, 'proposta de intervenção detectada');
  await page.click('[data-act="red-cron"]');
  await page.waitForTimeout(1200);
  await foto('12-editor');
  await page.click('[data-act="red-avaliar"]');
  await page.waitForSelector('#red-aval');
  for (let c = 0; c < 5; c++) await page.click(`[data-act="red-nota"][data-c="${c}"][data-n="160"]`);
  ok((await page.textContent('#red-tempo')) !== '00:00', 'cronômetro continua após dar notas');
  await page.click('[data-act="red-salvar"]');
  await page.waitForSelector('text=escrita em');
  const somaTxt = await page.textContent('.stat b'); ok(somaTxt.includes('800'), 'soma das notas = 800, veio ' + somaTxt + ' notas=' + JSON.stringify(await page.evaluate(() => Store.estado.redacoes.map(r => r.notas))));
  for (const aba of ['repertorio', 'conectivos', 'modelo', 'temas', 'historico']) {
    await page.goto(URL + '#/redacao/' + aba);
    await page.waitForSelector('.page-head h1');
  }

  passo = 'plano';
  await page.goto(URL + '#/plano');
  await page.click('[data-act="plano-gerar"]');
  await page.waitForSelector('.plan');
  ok(await page.locator('.plan-block').count() === 10, 'plano 5 dias x 2h = 10 blocos, veio ' + await page.locator('.plan-block').count());
  await foto('13-plano');

  passo = 'biblioteca e ajustes';
  await page.goto(URL + '#/biblioteca');
  await page.waitForSelector('text=Provas anteriores oficiais');
  await page.goto(URL + '#/minhas-questoes');
  await page.click('[data-act="mq-modo"][data-modo="json"]');
  const banco = path.join(OUT, 'banco-teste.json');
  fs.writeFileSync(banco, JSON.stringify({ nome: 'Banco de teste', questoes: [
    { id: 'imp-001', materia: 'portugues', assunto: 'Crase', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 1, objetivos: ['policial'], prova: { banca: 'CEBRASPE', ano: 2024 },
      enunciado: 'Item importado <img src=x onerror=alert(1)>', resposta: true, explicacao: { resumo: 'ok', detalhada: 'ok' }, fontes: [{ titulo: 'x', url: 'https://www.academia.org.br' }] },
    { id: 'imp-002', materia: 'portugues', assunto: 'Crase', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 1, objetivos: ['policial'],
      enunciado: 'Fonte maliciosa', resposta: true, explicacao: { resumo: 'ok', detalhada: 'ok' }, fontes: [{ titulo: 'x', url: 'javascript:alert(1)' }] }
  ] }));
  await page.setInputFiles('#mq-json', banco);
  await page.waitForSelector('.toast.show');
  ok((await page.textContent('#toast')).includes('1 questão importada'), 'importa a válida e recusa a com url javascript:');
  await page.goto(URL + '#/questoes');
  await page.fill('#q-busca', 'Item importado');
  await page.waitForTimeout(400);
  await page.click('.list-item >> nth=0');
  await page.waitForSelector('.q');
  ok(await page.locator('.q img').count() === 0, 'HTML do conteúdo importado é escapado');
  ok((await page.textContent('.q-meta')).includes('CEBRASPE 2024'), 'questão de prova real mostra banca e ano');
  await page.goto(URL + '#/ajustes');
  await page.click('[data-act="aj-tema"][data-v="dark"]');
  await page.goto(URL + '#/');
  await page.waitForSelector('.hero');
  await foto('14-inicio-escuro');

  passo = 'persistência';
  await page.reload();
  await page.waitForSelector('.hero');
  ok(await page.evaluate(() => Store.estado.redacoes.length === 1 && Store.estado.simulados.length >= 3), 'dados persistem após recarregar');

  passo = 'celular';
  const mob = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, colorScheme: 'light' });
  const mp = await mob.newPage();
  mp.on('pageerror', (e) => erros.push('mobile pageerror: ' + e.message));
  await mp.goto(URL);
  await mp.evaluate((s) => localStorage.setItem('gabarito.v1', s), await page.evaluate(() => localStorage.getItem('gabarito.v1')));
  await mp.evaluate(() => { const e = JSON.parse(localStorage.getItem('gabarito.v1')); e.perfil.tema = 'light'; localStorage.setItem('gabarito.v1', JSON.stringify(e)); });
  for (const [rota, nome] of [['#/', 'm1-inicio'], ['#/simulados', 'm2-simulados'], ['#/redacao/escrever', 'm4-redacao'], ['#/plano', 'm5-plano']]) {
    await mp.goto(URL + rota); await mp.reload(); await mp.waitForTimeout(300);
    const largura = await mp.evaluate(() => document.documentElement.scrollWidth);
    ok(largura <= 390, nome + ': rolagem horizontal (' + largura + 'px)');
    await mp.screenshot({ path: path.join(OUT, nome + '.png'), fullPage: true });
  }
  await mp.goto(URL + '#/simulados'); await mp.waitForSelector('#montador');
  await mp.click('[data-act="p-rapido"]');
  await mp.waitForSelector('#r-area .q');
  await mp.screenshot({ path: path.join(OUT, 'm3-questao.png'), fullPage: false });
  ok(await mp.evaluate(() => document.documentElement.scrollWidth) <= 390, 'questão no celular sem rolagem horizontal');
  await mp.click('.tabbar [data-act="menu"]').catch(() => {});

  await browser.close();
  if (erros.length) { console.error('Erros no navegador:\n' + erros.join('\n')); process.exit(1); }
  console.log('e2e: todos os passos passaram. Capturas em ' + OUT);
})().catch((e) => { console.error('FALHOU [' + passo + '] ' + e.message + (erros.length ? '\n' + erros.join('\n') : '')); process.exit(1); });
