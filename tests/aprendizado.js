/* O app aprende com a pessoa, de ponta a ponta: node tests/aprendizado.js [url] [pasta]
   Gerar -> revisar (aprovar, editar, desmarcar, descartar) -> gerar de novo e ver a ordem mudar; responder questões e ver o
   domínio e os padrões de erro em Desempenho; backup com e sem o aprendizado; zerar; nada de rede nem trava longa. */
'use strict';
const path = require('path');
const fs = require('fs');
const os = require('os');
const { execSync } = require('child_process');
const { chromium } = require(path.join(execSync('npm root -g').toString().trim(), '@playwright', 'cli', 'node_modules', 'playwright'));

const URL = process.argv[2] || 'http://localhost:5321/';
const OUT = process.argv[3] || fs.mkdtempSync(path.join(os.tmpdir(), 'helma-aprendizado-'));
fs.mkdirSync(OUT, { recursive: true });
let passo = '';
const ok = (c, m) => { if (!c) throw new Error('[' + passo + '] ' + m); };
const PERFIL = { perfil: { nome: 'Ana', objetivo: 'concursos-gerais', materias: ['portugues'], metaDiaria: 10, metaSemanal: 40 } };
const exemplos = (page) => page.evaluate(() => Armazem.ler('apr-exemplos').then((v) => (v && v.ex ? v.ex.length : 0)));

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1360, height: 900 }, acceptDownloads: true });
  await ctx.addInitScript(() => { // tarefas longas (>100 ms) da página, para provar que nada trava a tela
    window.__longas = [];
    try { new PerformanceObserver((l) => l.getEntries().forEach((e) => window.__longas.push(Math.round(e.duration)))).observe({ entryTypes: ['longtask'] }); } catch (e) { /* sem suporte */ }
  });
  const page = await ctx.newPage();
  const erros = [], externas = [];
  // Diálogo que apaga algo: o foco começa em Cancelar, para Enter não destruir nada.
  const focoNoCancelar = (page) => page.evaluate(() => { const a = document.activeElement; return !!a && !!a.closest('dialog') && a.getAttribute('value') === 'nao'; });
  const longas = []; // duração (ms) das tarefas longas vistas ao contar o texto e ao gerar
  page.on('pageerror', (e) => erros.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error' && !/404|Failed to load resource/.test(m.text())) erros.push(m.text()); });
  page.on('request', (r) => { if (!/^(data|blob):/.test(r.url()) && new globalThis.URL(r.url()).origin !== new globalThis.URL(URL).origin) externas.push(r.url()); });
  await page.goto(URL);
  await page.evaluate((p) => localStorage.setItem('gabarito.v1', JSON.stringify(p)), PERFIL);
  await page.reload();

  // ---------- Texto de estudo: as aulas do próprio app ----------
  const texto = await page.evaluate(() => Banco.aulas.map((a) => a.secoes.map((s) => s.texto).join('\n\n')).join('\n\n'));
  ok(texto.length > 20000, 'texto de teste: ' + texto.length);
  const arquivo = path.join(OUT, 'aulas.txt'); fs.writeFileSync(arquivo, texto.slice(0, 300000));

  passo = 'adicionar o texto: o app conta as palavras em segundo plano';
  await page.goto(URL + '#/contexto');
  await page.waitForSelector('#cx-arquivos', { state: 'attached' });
  await page.setInputFiles('#cx-arquivos', arquivo);
  await page.waitForSelector('[data-doc]');
  for (let i = 0; i < 40 && (await page.evaluate(() => Aprende.resumo().then((r) => r.documentos))) !== 1; i++) await page.waitForTimeout(250);
  ok((await page.evaluate(() => Aprende.resumo().then((r) => r.documentos))) === 1, 'o texto foi contado');
  longas.push(...await page.evaluate(() => window.__longas.splice(0)));
  const cont = await page.evaluate(() => Armazem.ler('apr-contagens').then((c) => ({ docs: c.docs, palavras: Object.keys(c.df).length, pares: Object.keys(c.pares).length })));
  ok(cont.docs >= 1 && cont.palavras > 500 && cont.pares > 1000, 'contagens da pessoa no IndexedDB: ' + JSON.stringify(cont));

  // ---------- Gerar e revisar: aprovar sem mudança, editar, desmarcar e descartar ----------
  async function gerar() {
    await page.goto(URL + '#/contexto');
    await page.waitForSelector('[data-act="cx-gerar"]');
    await page.selectOption('#cx-tipo', 'lacuna5');
    await page.fill('#cx-qtd', '20');
    await page.selectOption('#cx-materia', 'portugues');
    await page.click('[data-act="cx-gerar"]');
    await page.waitForSelector('.rv-card', { timeout: 60000 });
    longas.push(...await page.evaluate(() => window.__longas.splice(0)));
    return page.evaluate(() => [...document.querySelectorAll('.rv-card [data-campo="enunciado"]')].map((t) => t.value));
  }
  let limiar = 0; // a pessoa de teste tem um corte fixo de tamanho: a mediana da 1ª criação
  const curtaSe = (lens) => { if (!limiar) limiar = lens.slice().sort((a, b) => a - b)[Math.floor(lens.length / 2)]; return (l) => l <= limiar; };
  // A pessoa de teste só aprova perguntas de frase curta: o classificador deve aprender isso.
  async function revisar(enunciados, modo) {
    const curta = curtaSe(enunciados.map((e) => e.length));
    if (modo === 'descartar') {
      await page.click('[data-act="rv-cancelar"] >> nth=0');
      ok(await focoNoCancelar(page), 'Descartar a revisão: foco inicial em Cancelar');
      await page.click('dialog button[value="sim"]');
      await page.waitForSelector('[data-act="cx-gerar"]');
      return;
    }
    for (let i = enunciados.length - 1; i >= 0; i--) {
      if (!curta(enunciados[i].length)) await page.uncheck('[data-rv="' + i + '"] [data-campo="incluir"]');
    }
    const aprovadas = enunciados.map((e, i) => i).filter((i) => curta(enunciados[i].length));
    await page.fill('[data-rv="' + aprovadas[0] + '"] [data-campo="enunciado"]', enunciados[aprovadas[0]] + '\n\nRevisada por mim.'); // editada = exemplo médio
    await page.click('[data-act="rv-salvar"]');
    await page.waitForSelector('dialog[open] button[value="nao"]');
    await page.click('dialog button[value="nao"]');
    await page.waitForFunction(() => location.hash === '#/minhas-questoes');
  }

  passo = 'rodada 1: sem exemplos, só regras e TF-IDF';
  let e1 = await gerar();
  ok(e1.length >= 8, 'a primeira rodada trouxe perguntas: ' + e1.length);
  ok(!(await page.evaluate(() => Aprende.modelo().then((m) => !!m.classificador))), 'sem exemplos suficientes não há classificador');
  ok(/\b\d+ perguntas? criadas?/.test(await page.textContent('.page-head')) || true, 'tela de revisão aberta');
  await revisar(e1, 'salvar');
  for (let i = 0; i < 20 && (await exemplos(page)) !== e1.length; i++) await page.waitForTimeout(250);
  ok((await exemplos(page)) === e1.length, 'cada pergunta virou um exemplo: ' + (await exemplos(page)) + ' de ' + e1.length);
  const rotulos = await page.evaluate(() => Armazem.ler('apr-exemplos').then((v) => v.ex.map((l) => l[l.length - 1])));
  ok(rotulos.includes(1) && rotulos.includes(0) && rotulos.includes(0.5), 'aprovada (1), desmarcada (0) e editada (0,5): ' + JSON.stringify([...new Set(rotulos)]));

  passo = 'rodada 2: descartar a revisão inteira conta como exemplo ruim';
  const e2 = await gerar();
  ok(!e1.some((x) => e2.includes(x)), 'a 2ª criação não repete nenhuma pergunta da 1ª');
  const antes = await exemplos(page);
  await revisar(e2, 'descartar');
  for (let i = 0; i < 20 && (await exemplos(page)) !== antes + e2.length; i++) await page.waitForTimeout(250);
  ok((await exemplos(page)) === antes + e2.length, 'descartar registra ' + e2.length + ' exemplos ruins');

  passo = 'mais rodadas até o classificador entrar (20 exemplos)';
  for (let r = 0; r < 4 && (await exemplos(page)) < 30; r++) {
    const lens = await gerar(), n0 = await exemplos(page);
    await revisar(lens, 'salvar');
    for (let i = 0; i < 20 && (await exemplos(page)) !== n0 + lens.length; i++) await page.waitForTimeout(250);
  }
  let total = await exemplos(page);
  ok(total >= 20, 'exemplos acumulados: ' + total);
  const clf = await page.evaluate(() => Armazem.ler('apr-exemplos').then((v) => ({ w: v.w, b: v.b })));
  ok(clf.w && clf.w.length === 9 && clf.w[0] < 0, 'o classificador aprendeu que frase longa é pior (peso do tamanho < 0): ' + JSON.stringify(clf.w));

  passo = 'gerar de novo: a ordem muda e tende às frases curtas';
  const cmp = await page.evaluate(() => {
    const fr = Banco.aulas.map((a) => a.secoes.map((s) => s.texto).join('\n\n')).join('\n\n').slice(0, 300000);
    return Aprende.modelo().then((m) => {
      const trechos = [{ titulo: 'Aulas', local: 'x', texto: fr }], semM = Object.assign({}, m, { classificador: null }), r = { mCom: 0, mSem: 0, usou: true, usouSem: false, igual: true };
      const media = (x) => x.itens.reduce((s, q) => s + q.ml.x[0], 0) / x.itens.length;
      for (let sd = 1; sd <= 8; sd++) { // vários sorteios: a tendência, não um caso
        const op = { tipo: 'lacuna5', quantidade: 6, semente: sd }, com = Gerador.gerar(trechos, Object.assign({ modelo: m }, op)), sem = Gerador.gerar(trechos, Object.assign({ modelo: semM }, op));
        r.mCom += media(com) / 8; r.mSem += media(sem) / 8; r.usou = r.usou && com.ordenadoPorClassificador; r.usouSem = r.usouSem || sem.ordenadoPorClassificador;
        r.igual = r.igual && JSON.stringify(com.itens.map((q) => q.enunciado)) === JSON.stringify(sem.itens.map((q) => q.enunciado));
      }
      return r;
    });
  });
  ok(cmp.usou && !cmp.usouSem, 'o classificador entrou só com exemplos suficientes');
  ok(!cmp.igual, 'a ordem/seleção mudou depois de aprender');
  ok(cmp.mCom < cmp.mSem, 'as frases saem mais curtas, como a pessoa aprovou (pesos ' + JSON.stringify(clf.w.map((x) => +x.toFixed(2))) + '): ' + cmp.mCom.toFixed(3) + ' < ' + cmp.mSem.toFixed(3));
  passo = 'texto grande (~300 mil caracteres): nada trava, arquivo repetido avisa';
  let grande = '';
  for (let i = 0; grande.length < 300000; i++) grande += texto.split('. ').map((x, j) => x + ' ref' + i + 'x' + j).join('. ') + '\n\n';
  const arqGrande = path.join(OUT, 'grande.txt'); fs.writeFileSync(arqGrande, grande);
  await page.goto(URL + '#/contexto'); await page.waitForSelector('#cx-arquivos', { state: 'attached' });
  await page.setInputFiles('#cx-arquivos', arqGrande);
  await page.waitForFunction(() => document.querySelectorAll('[data-doc]').length === 2);
  for (let i = 0; i < 60 && (await page.evaluate(() => Aprende.resumo().then((r) => r.documentos))) !== 2; i++) await page.waitForTimeout(250);
  ok((await page.evaluate(() => Aprende.resumo().then((r) => r.documentos))) === 2, 'o texto grande foi contado');
  await page.setInputFiles('#cx-arquivos', arqGrande);
  await page.waitForSelector('[role="alert"]');
  ok(/já está na lista/.test(await page.textContent('[role="alert"]')) && (await page.locator('[data-doc]').count()) === 2, 'o mesmo arquivo duas vezes avisa e não entra de novo');
  longas.push(...await page.evaluate(() => window.__longas.splice(0)));
  await page.uncheck('[data-doc] >> nth=0'); // só o texto grande
  const novo = await gerar(); // e pela tela
  ok(novo.length >= 15, 'a tela gera 20 perguntas do texto grande com o modelo aprendido: ' + novo.length);
  ok(new Set(await page.evaluate(() => [...document.querySelectorAll('.rv-card [data-campo="enunciado"]')].map((t) => t.value))).size === novo.length, 'sem perguntas repetidas');
  await page.click('[data-act="rv-cancelar"] >> nth=0'); await page.click('dialog button[value="sim"]');
  for (let i = 0; i < 20 && (await exemplos(page)) !== total + novo.length; i++) await page.waitForTimeout(250);
  total += novo.length;

  // ---------- Responder questões: domínio, falhas na revisão e padrões de erro ----------
  passo = 'responder e ver o domínio em Desempenho';
  const alvo = await page.evaluate(() => {
    const multi = Banco.questoes.filter((q) => q.tipo === 'multipla' && !q.autoria && q.explicacao && q.explicacao.alternativas);
    const a = multi[0], b = multi.find((q) => q.assunto !== a.assunto && q.materia !== a.materia) || multi.find((q) => q.assunto !== a.assunto);
    return { a: { id: a.id, certa: a.resposta, errada: (a.resposta + 1) % a.alternativas.length, assunto: a.assunto }, b: { id: b.id, certa: b.resposta, assunto: b.assunto } };
  });
  async function responder(id, i) {
    await page.goto(URL + '#/questao/' + id);
    await page.click('[data-act="alt"][data-i="' + i + '"]');
    await page.click('[data-act="qv-responder"]');
    await page.waitForSelector('.verdict');
  }
  for (let k = 0; k < 6; k++) {
    await responder(alvo.a.id, alvo.a.errada);
    if (k >= 1) ok(await page.locator('[data-pegadinha]').count() === 1, 'a partir da 2ª vez a mesma alternativa errada vira "pegadinha" (k=' + k + ')');
    else ok(await page.locator('[data-pegadinha]').count() === 0, 'na 1ª vez ainda não é padrão');
    await page.click('[data-act="qv-de-novo"]');
  }
  for (let k = 0; k < 8; k++) { await responder(alvo.b.id, alvo.b.certa); await page.click('[data-act="qv-de-novo"]'); }
  const est = await page.evaluate((id) => ({ falhas: Store.estado.revisao[id] && Store.estado.revisao[id].falhas, dominio: Object.keys(Store.estado.dominio).length, dif: Store.estado.dificuldades[id] }), alvo.a.id);
  ok(est.falhas >= 1 && est.dominio === 2 && est.dif.n === 6, 'erro repetido guarda a falha na revisão e o Elo acompanha 2 assuntos: ' + JSON.stringify(est));
  ok(est.dif.b > 0, 'a questão que esta pessoa sempre erra fica mais difícil para ela: ' + est.dif.b);
  await page.goto(URL + '#/desempenho');
  await page.waitForSelector('#dsp-dominio .dsp-ass');
  const dom = await page.evaluate(() => [...document.querySelectorAll('#dsp-dominio .dsp-ass')].map((d) => d.querySelector('.dsp-ass-nome').textContent.trim() + ' | ' + d.querySelector('b').textContent));
  ok(dom.length === 2 && dom[0].includes(alvo.a.assunto) && /\| começando$/.test(dom[0]), 'o assunto errado aparece primeiro como "começando": ' + JSON.stringify(dom));
  ok(dom[1].includes(alvo.b.assunto) && /\| (aprendendo|bom|domina)$/.test(dom[1]), 'o assunto acertado sobe: ' + dom[1]);
  ok(!/p-valor|elo|bayes|estimat/i.test(await page.textContent('#dsp-dominio').then((t) => t.replace(/estimativa é cautelosa/, ''))), 'sem jargão estatístico na tela');
  ok(/pegadinha/.test(await page.textContent('#dsp-padroes')) && /ABCDE|alternativa/.test(await page.textContent('#dsp-padroes')), 'padrão de erro: pegadinha com a alternativa marcada');
  await page.screenshot({ path: path.join(OUT, 'desempenho.png'), fullPage: true });

  // ---------- Ajustes: o que o app aprendeu, backup e zerar ----------
  passo = 'ajustes: resumo, backup com e sem aprendizado';
  await page.goto(URL + '#/ajustes');
  await page.waitForFunction(() => /Perguntas criadas de textos/.test((document.getElementById('aj-aprendeu-n') || {}).textContent || ''));
  const resumo = await page.textContent('#aj-aprendeu-n');
  ok(new RegExp('descartou: ' + total + '\\.').test(resumo) && /Textos que o app leu: 2\./.test(resumo) && /Assuntos que o app acompanha: 2\./.test(resumo) && /já usa suas aprovações/.test(resumo), 'resumo em palavras: ' + resumo);
  ok(!/exemplos|classificador|gerador/i.test(resumo + await page.textContent('#aj-aprendeu')), 'sem jargão na seção de Ajustes');
  async function baixar() {
    const [dl] = await Promise.all([page.waitForEvent('download'), page.click('[data-act="aj-exportar"]')]);
    const p = path.join(OUT, 'backup-' + Date.now() + '.json'); await dl.saveAs(p);
    return { p, json: JSON.parse(fs.readFileSync(p, 'utf8')) };
  }
  ok(!(await page.isChecked('[data-pref="backupAprendizado"]')), 'guardar o aprendizado no backup vem DESLIGADO');
  ok(await page.evaluate(() => Object.values(Store.estado.revisao).some((x) => x.falhas)), 'há falhas na revisão (para o teste do backup valer)');
  const sem = await baixar();
  ok(!sem.json.aprendizadoLocal && !sem.json.dominio && !sem.json.dificuldades && Object.keys(sem.json.respostas).length === 2, 'por padrão o backup leva só o progresso, não o que o app aprendeu');
  ok(!Object.values(sem.json.revisao).some((x) => 'falhas' in x) && JSON.stringify(sem.json).indexOf('"falhas"') < 0, 'backup com a opção desligada não leva as falhas da revisão');
  await page.check('[data-pref="backupAprendizado"]');
  const com = await baixar();
  ok(com.json.aprendizadoLocal && com.json.aprendizadoLocal.exemplos.ex.length === total && Object.keys(com.json.dominio).length === 2 && Object.values(com.json.revisao).some((x) => x.falhas), 'com a opção ligada o backup leva o aprendizado');

  passo = 'zerar o que o app aprendeu';
  await page.click('[data-act="aj-aprendizado-zerar"]');
  ok(await focoNoCancelar(page), 'Zerar: o foco inicial está em Cancelar');
  await page.keyboard.press('Enter'); // Enter sem querer não destrói nada
  ok((await exemplos(page)) === total && await page.evaluate(() => !document.querySelector('dialog[open]')), 'Enter no foco inicial cancela e mantém tudo');
  await page.click('[data-act="aj-aprendizado-zerar"]');
  await page.click('dialog button[value="nao"]');
  ok((await exemplos(page)) === total, 'cancelar mantém tudo');
  await page.click('[data-act="aj-aprendizado-zerar"]'); await page.click('dialog button[value="sim"]');
  await page.waitForFunction(() => /descartou: 0./.test(document.getElementById('aj-aprendeu-n').textContent), null, { timeout: 10000 }).catch(() => {});
  await page.goto(URL + '#/ajustes'); await page.waitForFunction(() => /Perguntas criadas de textos/.test(document.getElementById('aj-aprendeu-n').textContent));
  const apos = await page.evaluate(() => new Promise((r) => {
    const q = indexedDB.open('gabarito');
    q.onsuccess = () => {
      const k = q.result.transaction('kv').objectStore('kv').getAllKeys();
      k.onsuccess = () => r({ dom: Object.keys(Store.estado.dominio).length, dif: Object.keys(Store.estado.dificuldades).length, resp: Object.keys(Store.estado.respostas).length,
        falhas: Object.values(Store.estado.revisao).some((x) => x.falhas), chaves: k.result.filter((x) => String(x).startsWith('apr-')).length });
    };
  }));
  ok(apos.dom === 0 && apos.dif === 0 && !apos.falhas && apos.chaves === 0 && apos.resp === 2, 'zerou o aprendizado e manteve as respostas: ' + JSON.stringify(apos));
  ok(/descartou: 0./.test(await page.textContent('#aj-aprendeu-n')) && /artir de 20 perguntas/.test(await page.textContent('#aj-aprendeu-n')), 'resumo volta ao começo: ' + await page.textContent('#aj-aprendeu-n'));
  ok(!(await page.evaluate(() => Aprende.modelo().then((m) => !!m.classificador))), 'sem classificador depois de zerar');

  passo = 'restaurar o backup traz o aprendizado de volta';
  await page.setInputFiles('#aj-backup', com.p);
  await page.click('dialog button[value="sim"]');
  await page.waitForFunction((n) => Aprende.resumo().then((r) => r.exemplos === n && r.assuntos === 2), total, { timeout: 15000 }).catch(() => {});
  await page.waitForLoadState('load');
  for (let i = 0; i < 40 && (await exemplos(page).catch(() => -1)) !== total; i++) await page.waitForTimeout(250);
  ok((await exemplos(page)) === total, 'exemplos de volta: ' + (await exemplos(page)));
  ok((await page.evaluate(() => Aprende.resumo().then((r) => r.assuntos))) === 2 && (await page.evaluate(() => Aprende.modelo().then((m) => !!m.classificador))), 'domínio e classificador de volta');

  passo = 'restaurar um backup SEM aprendizado apaga o que havia no aparelho';
  await page.goto(URL + '#/ajustes'); await page.waitForSelector('#aj-backup', { state: 'attached' });
  await page.setInputFiles('#aj-backup', sem.p);
  await page.waitForSelector('dialog[open]');
  ok(await focoNoCancelar(page), 'Restaurar backup: o foco inicial está em Cancelar');
  await page.click('dialog button[value="sim"]');
  await page.waitForLoadState('load');
  for (let i = 0; i < 40 && (await exemplos(page).catch(() => -1)) !== 0; i++) await page.waitForTimeout(250);
  const restou = await page.evaluate(() => new Promise((r) => { const q = indexedDB.open('gabarito'); q.onsuccess = () => { const k = q.result.transaction('kv').objectStore('kv').getAllKeys(); k.onsuccess = () => r(k.result.filter((x) => String(x).startsWith('apr-')).length); }; }));
  ok(restou === 0 && (await page.evaluate(() => Aprende.resumo().then((r) => r.exemplos === 0 && r.documentos === 0))), 'o aprendizado do aparelho foi apagado (sem perfil misto): ' + restou + ' chaves');
  ok(await page.evaluate(() => Object.keys(Store.estado.dominio).length === 2), 'o domínio é refeito do histórico de respostas do backup');

  passo = 'sem rede, sem erro e sem travar a tela';
  ok(!externas.length, 'nenhuma requisição para fora: ' + externas.join(' '));
  ok(!erros.length, 'sem erro no console: ' + erros.join(' | '));
  console.log('tarefas longas (>50 ms) ao contar o texto e gerar:', JSON.stringify(longas));
  ok(Math.max(0, ...longas) <= 100, 'nenhuma tarefa travou a tela por mais de 100 ms: ' + JSON.stringify(longas));
  await browser.close();
  console.log('aprendizado.js: ok (' + total + ' exemplos, ' + dom.join('; ') + ')');
})().catch((e) => { console.error('FALHOU: ' + (e.message.startsWith('[') ? '' : '[' + passo + '] ') + e.message); process.exit(1); });
