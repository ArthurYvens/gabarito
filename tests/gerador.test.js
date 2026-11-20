/* node tests/gerador.test.js */
'use strict';
const assert = require('assert');
const path = require('path');
const G = require(path.join(__dirname, '..', 'www', 'js', 'gerador.js'));

const TEXTO = `A Revolução Industrial começou na Inglaterra no século XVIII e transformou a produção de mercadorias em larga escala.
A máquina a vapor foi aperfeiçoada por James Watt em 1769 e passou a movimentar fábricas, locomotivas e navios por todo o território.
O capitalismo industrial consolidou-se com a ampliação do trabalho assalariado nas cidades inglesas durante o século XIX.

A urbanização acelerada provocou crescimento desordenado, falta de saneamento e jornadas de trabalho superiores a 14 horas diárias nas fábricas.
Denomina-se sindicato a associação de trabalhadores criada para defender direitos trabalhistas e melhorar as condições de trabalho.
A burguesia industrial controlava os meios de produção e contratava operários em troca de salários muito baixos nas fábricas.
O Parlamento britânico aprovou leis fabris limitando o trabalho infantil e regulamentando a jornada nas fábricas têxteis inglesas.
A Inglaterra liderou a industrialização porque reunia carvão, ferro, capital acumulado e mercado consumidor interno em expansão.

O liberalismo econômico é a doutrina que defende a livre iniciativa e a mínima intervenção do Estado na economia de mercado.
A mais-valia consiste na diferença entre o valor produzido pelo operário e o salário que ele recebe do patrão industrial.
Qual foi a principal consequência da industrialização inglesa para a sociedade europeia daquele período?
1. Lista solta de itens que não deve virar questão alguma porque começa com numeração
SUMÁRIO DO CAPÍTULO PRIMEIRO COM TUDO EM MAIÚSCULAS PARA PARECER TÍTULO DE PÁGINA INTEIRA AQUI.
Veja mais em https://exemplo.com/industrial sobre a revolução industrial inglesa e seus efeitos na Europa.
Ver art. 5 do texto legal citado pelo autor na página anterior do livro de história geral do mundo.
A França também industrializou suas fábricas depois de 1830, com apoio de ferrovias e bancos de investimento nas cidades.
O Brasil iniciou sua industrialização tardiamente, a partir do final do século XIX, com a produção têxtil e cafeeira.
A Alemanha unificada em 1871 desenvolveu indústrias químicas e siderúrgicas de grande porte antes da Primeira Guerra Mundial.`;

const trechos = [{ titulo: 'História', local: 'Capítulo 1', texto: TEXTO }];
const gera = (tipo, quantidade, semente = 7) => G.gerar(trechos, { tipo, quantidade, semente });

// Frases: abreviação não parte a frase; lixo, perguntas, listas, títulos em caixa alta e links ficam fora.
assert.deepStrictEqual(G.dividirFrases('Ver o art. 5 da lei. Depois, o p. 10 do livro. Fim de texto aqui.'), ['Ver o art. 5 da lei.', 'Depois, o p. 10 do livro.', 'Fim de texto aqui.']);
const boas = G.frases(trechos).filter((f) => G.boaFrase(f.texto)).map((f) => f.texto);
assert.ok(boas.length >= 10);
assert.ok(!boas.some((s) => /\?|https|SUMÁRIO|^1\./.test(s)));
assert.ok(!G.boaFrase('Frase curta demais.') && !G.boaFrase('Texto com caractere estranho ■ de extração que passa do tamanho mínimo exigido pelo filtro de frases.'));
assert.ok(!G.boaFrase('Em 1769, 1770, 1771, 1772 e 1773 houve 10 mudanças e 20 invenções no mundo inteiro da indústria inglesa.'));

// Lacuna: 5 alternativas distintas, resposta = termo original, termo não repete na frase, distratores vêm do documento.
const l5 = gera('lacuna5', 5);
assert.ok(l5.itens.length >= 3, 'gerou lacunas: ' + l5.itens.length);
const todosTermos = new Set(TEXTO.match(/\d+(?:[.,]\d+)*%?|[A-Za-zÀ-ÿ]+(?:-[A-Za-zÀ-ÿ]+)*/g).map((t) => t.toLowerCase()));
for (const q of l5.itens) {
  assert.strictEqual(q.tipo, 'multipla');
  assert.strictEqual(q.alternativas.length, 5);
  assert.strictEqual(new Set(q.alternativas.map((a) => a.toLowerCase())).size, 5, 'sem alternativas repetidas');
  const certo = q.alternativas[q.resposta];
  const frase = q.explicacao.resumo.match(/Trecho original: "(.+)" \(/)[1];
  assert.ok(TEXTO.includes(frase), 'resumo traz a frase original completa');
  assert.ok(frase.includes(certo) && q.explicacao.resumo.includes('História, Capítulo 1'));
  assert.strictEqual(q.enunciado.split('________').length, 2, 'uma lacuna');
  assert.strictEqual(q.enunciado.split('\n\n')[1], frase.replace(certo, '________'));
  q.alternativas.forEach((a) => assert.ok(todosTermos.has(a.toLowerCase()), 'distrator do documento: ' + a));
  q.alternativas.filter((_, i) => i !== q.resposta).forEach((a) => assert.ok(!frase.toLowerCase().includes(a.toLowerCase()), 'distrator não está na frase'));
  assert.ok(!/^(isso|forma|parte|caso)$/i.test(certo));
  assert.ok(!/CAPÍTULO|MAIÚSCULAS|PARECER|SUMÁRIO/.test(q.alternativas.join()), 'lixo de extração fora dos distratores');
}
assert.strictEqual(gera('lacuna4', 4).itens[0].alternativas.length, 4);
// Reproduzível pela semente, e a posição da resposta varia.
assert.deepStrictEqual(gera('lacuna5', 5, 1), gera('lacuna5', 5, 1));
assert.ok(new Set(gera('lacuna4', 8, 3).itens.map((q) => q.resposta)).size > 1, 'resposta não fica sempre na mesma letra');

// Certo ou errado: metade errados; os errados trocam um termo por outro do documento; os certos são a frase original.
const ce = gera('certo-errado', 6);
assert.strictEqual(ce.itens.length, 6);
assert.strictEqual(ce.itens.filter((q) => q.resposta === false).length, 3);
for (const q of ce.itens) {
  assert.strictEqual(q.tipo, 'certo-errado');
  assert.strictEqual(q.alternativas, undefined);
  const orig = q.explicacao.resumo.match(/Trecho original: "(.+)" \(/)[1];
  assert.ok(TEXTO.includes(orig));
  assert.strictEqual(q.enunciado === orig, q.resposta === true);
}
assert.strictEqual(new Set(ce.itens.map((q) => q.explicacao.resumo)).size, 6, 'cada frase só uma vez');

// Cartões: definições viram frente/verso.
const ca = gera('cartoes', 10);
const frentes = ca.itens.map((c) => c.frente);
assert.ok(frentes.includes('Sindicato') && frentes.includes('Mais-valia') && frentes.some((f) => /liberalismo/i.test(f)), 'achou as definições: ' + frentes);
const sind = ca.itens.find((c) => c.frente === 'Sindicato');
assert.ok(/^Associação de trabalhadores/.test(sind.verso) && /Fonte: História, Capítulo 1/.test(sind.verso));
assert.ok(!frentes.some((f) => /\?/.test(f)));

// Menos do que o pedido: gera o que dá e avisa.
const pouco = G.gerar([{ titulo: 'T', local: 'p. 1', texto: 'Texto curto sem nada que sirva para montar questões automáticas.' }], { tipo: 'lacuna5', quantidade: 5, semente: 1 });
assert.strictEqual(pouco.itens.length, 0);
assert.ok(pouco.avisos.length === 1);
const mais = gera('lacuna5', 20);
assert.ok(mais.itens.length < 20 && /Você pediu 20/.test(mais.avisos[0]));
assert.throws(() => gera('inventado', 1), /tipo desconhecido/);

// Distratores insuficientes no documento: não completa com lixo.
const pobre = G.gerar([{ titulo: 'T', local: '', texto: 'A fotossíntese transforma energia luminosa em energia química nas folhas das plantas verdes.' }], { tipo: 'lacuna5', quantidade: 1, semente: 1 });
assert.strictEqual(pobre.itens.length, 0);

// Sumário, remissão, dedicatória e ficha do livro não viram questão.
for (const lixo of ['Transformação de variáveis aleatórias contínuas em distribuições conhecidas na seção 8.2.2 do livro.', 'Veja o capítulo 3 para entender melhor a estrutura completa da economia industrial moderna.',
  'Dedico este livro à minha esposa e aos meus filhos pelo apoio incondicional durante todos os anos de trabalho.', 'Agradeço aos professores e colegas que contribuíram com sugestões valiosas para a elaboração deste material.',
  'Todos os direitos reservados pela editora, vedada a reprodução parcial ou total desta obra sem autorização.', '1.10 Notação para o valor lógico de uma proposição composta em linguagem formal.']) assert.ok(!G.boaFrase(lixo), 'deveria rejeitar: ' + lixo);
assert.ok(G.boaFrase('A fotossíntese converte energia luminosa em energia química armazenada nas moléculas de glicose das plantas.'));
const so = G.gerar([{ titulo: 'Livro', local: 'p. 1', texto: 'Dedico este livro à minha esposa e aos meus filhos pelo apoio incondicional durante todos os anos de trabalho.\n\nAgradeço aos professores e colegas que contribuíram com sugestões valiosas para a elaboração deste material.\n\nTransformação de variáveis aleatórias contínuas em distribuições conhecidas na seção 8.2.2 do livro.' }], { tipo: 'lacuna5', quantidade: 3, semente: 1 });
assert.strictEqual(so.itens.length, 0);
assert.ok(/achei só 0 frase/.test(so.avisos[0]) && /página/.test(so.avisos[0]), 'explica o que falta: ' + so.avisos[0]);

// Distratores são da mesma classe do termo escondido: nada de número, sigla, verbo com pronome ou singular no lugar de plural.
const MIS = `A indústria moderna depende de máquinas automáticas que produzem mercadorias em grande quantidade todos os dias.
O sindicato representa trabalhadores organizados que defendem melhores salários e condições seguras nas fábricas.
Os economistas estudam fenômenos complexos como inflação, desemprego e crescimento dos mercados nacionais.
A STF e o TCU fiscalizam contratos públicos desde 1988 com apoio de auditorias especializadas independentes.
É preciso aproximá-lo da realidade dos trabalhadores para compreendê-lo melhor durante os estudos de caso.
As empresas multinacionais investiram 2500 milhões em tecnologias avançadas durante a última década estudada.
Os governos regionais aprovaram programas educacionais voltados para estudantes de comunidades rurais isoladas.
Os pesquisadores analisaram resultados experimentais obtidos em laboratórios universitários bem equipados.
Os trabalhadores especializados receberam treinamentos técnicos oferecidos pelas associações profissionais locais.`;
let verificadas = 0;
for (let semente = 1; semente <= 15; semente++) {
  for (const q of G.gerar([{ titulo: 'Eco', local: 'cap. 1', texto: MIS.split('\n').join('\n\n') }], { tipo: 'lacuna4', quantidade: 9, semente }).itens) {
    verificadas++;
    const certo = q.alternativas[q.resposta], tipoDe = (w) => /^\d/.test(w) ? 'numero' : /^[A-ZÀ-Ý]{2,6}$/.test(w) ? 'sigla' : /^[A-ZÀ-Ý]/.test(w) ? 'proprio' : 'termo';
    for (const a of q.alternativas) {
      assert.strictEqual(tipoDe(a), tipoDe(certo), 'mesma classe: ' + q.alternativas + ' / certo ' + certo);
      assert.ok(!/-(?:lo|la|se|o|a)$/.test(a), 'verbo com pronome como alternativa: ' + a);
      if (tipoDe(certo) === 'termo') assert.strictEqual(/s$/.test(a), /s$/.test(certo), 'singular/plural misturados: ' + q.alternativas);
    }
  }
}

assert.ok(verificadas >= 15, 'o teste de classe verificou questões de verdade: ' + verificadas);
// ---------- Com modelo (TF-IDF, cosseno, classificador): tests/aprendizado.test.js cobre as contas; aqui, o efeito no gerador ----------
const fs = require('fs');
const A = require(path.join(__dirname, '..', 'www', 'js', 'aprendizado.js'));
const ctxModelo = {}; new Function(fs.readFileSync(path.join(__dirname, '..', 'www', 'js', 'dados', 'modelo-base.js'), 'utf8')).call(ctxModelo);
const real = A.criarModelo(A.lerBase(ctxModelo.ModeloBase), null, null);
const gm = (modelo, tipo, quantidade, semente = 7) => G.gerar(trechos, { tipo, quantidade, semente, modelo });
const falso = (extra) => Object.assign({ tfidf: () => 1, similaridade: () => null, probabilidade: () => null, classificador: null }, extra);

// Com o modelo real as perguntas continuam válidas e cada uma leva seus atributos (todos de 0 a 1) para a revisão.
for (const tipo of ['lacuna5', 'certo-errado']) {
  const r = gm(real, tipo, 6);
  assert.ok(r.itens.length >= 3 && !r.ordenadoPorClassificador, tipo + ': gerou com o modelo real');
  for (const q of r.itens) {
    if (q.alternativas) {
      assert.strictEqual(new Set(q.alternativas.map((a) => a.toLowerCase())).size, 5);
      assert.ok(q.alternativas.every((a) => todosTermos.has(a.toLowerCase())));
      assert.strictEqual(q.ml.x.length, G.ATRIBUTOS.length);
      assert.ok(q.ml.x.every((n) => n >= 0 && n <= 1), 'atributos entre 0 e 1: ' + q.ml.x);
    }
  }
}
assert.deepStrictEqual(gm(real, 'lacuna5', 5, 3), gm(real, 'lacuna5', 5, 3), 'com modelo, a mesma semente dá o mesmo resultado');

// O termo escondido vem da nota TF-IDF, não de palpite: o modelo que acha "locomotivas" o mais característico faz a frase esconder essa palavra.
const alvo = gm(falso({ tfidf: (w) => (w === 'locomotivas' ? 100 : 1) }), 'lacuna5', 8).itens.find((q) => q.enunciado.includes('máquina a vapor'));
assert.ok(alvo && alvo.alternativas[alvo.resposta] === 'locomotivas', 'esconde o termo de maior TF-IDF');
const outro = gm(falso({ tfidf: (w) => (w === 'fábricas' ? 100 : 1) }), 'lacuna5', 8).itens.find((q) => q.enunciado.includes('máquina a vapor'));
assert.ok(outro && outro.alternativas[outro.resposta] === 'fábricas', 'e muda quando o TF-IDF muda');

// Distratores: os de maior cosseno com o certo (aqui, simulado pelo tamanho da palavra), e nunca um quase-sinônimo (cosseno >= 0,9).
const media = (r) => { const t = []; r.itens.forEach((q) => q.alternativas.forEach((a, i) => i !== q.resposta && t.push(a.length))); return t.reduce((x, y) => x + y, 0) / t.length; };
let sem = 0, com = 0;
for (let sm = 1; sm <= 8; sm++) { sem += media(gera('lacuna5', 5, sm)); com += media(gm(falso({ similaridade: (a, b) => Math.min(0.89, b.length / 20) }), 'lacuna5', 5, sm)); }
assert.ok(com > sem, 'com o cosseno, os distratores são os mais parecidos com o certo: ' + com.toFixed(1) + ' > ' + sem.toFixed(1));
const freqD = {}; // o distrator mais usado sem modelo vira o "sinônimo" que o modelo deve recusar
for (let sm = 1; sm <= 12; sm++) gera('lacuna5', 8, sm).itens.forEach((q) => q.alternativas.forEach((a, i) => { if (i !== q.resposta) freqD[a] = (freqD[a] || 0) + 1; }));
const [sinonimo, vezesSem] = Object.entries(freqD).sort((x, y) => y[1] - x[1])[0];
let vezesCom = 0;
for (let sm = 1; sm <= 12; sm++) {
  gm(falso({ similaridade: (a, b) => (b === sinonimo.toLowerCase() ? 0.95 : 0.3) }), 'lacuna5', 8, sm).itens.forEach((q) => q.alternativas.forEach((a, i) => { if (i !== q.resposta && a === sinonimo) vezesCom++; }));
}
assert.ok(vezesSem > 0 && vezesCom === 0, 'quase-sinônimo do certo (cosseno >= 0,9) não entra como distrator: "' + sinonimo + '" ' + vezesSem + ' vezes sem modelo, ' + vezesCom + ' com');

// Classificador: gera mais candidatas do que o pedido e entrega as de maior probabilidade, de modo que a ordem muda.
const prefereCurta = A.criarModelo(A.lerBase(ctxModelo.ModeloBase), null, { w: [-5, 0, 0, 0, 0, 0, 0, 0, 0], b: 1 });
const sempre = gm(real, 'lacuna5', 4), aprendido = gm(prefereCurta, 'lacuna5', 4);
assert.ok(aprendido.ordenadoPorClassificador && aprendido.itens.length === 4);
const tam = aprendido.itens.map((q) => q.ml.x[0]);
assert.deepStrictEqual(tam, tam.slice().sort((a, b) => a - b), 'as de maior probabilidade (frases curtas) primeiro: ' + tam);
assert.ok(aprendido.itens.every((q) => q.ml.p > 0 && q.ml.p < 1));
assert.notDeepStrictEqual(aprendido.itens.map((q) => q.enunciado), sempre.itens.map((q) => q.enunciado), 'o classificador muda o que sai e a ordem');
assert.ok(Math.max(...tam) <= Math.max(...sempre.itens.map((q) => q.ml.x[0])), 'e tende às frases curtas');
assert.ok(!gm(prefereCurta, 'certo-errado', 4).ordenadoPorClassificador && !gm(prefereCurta, 'cartoes', 4).ordenadoPorClassificador, 'só as perguntas de lacuna passam pelo classificador');

console.log('gerador.test.js: ok (' + l5.itens.length + ' lacunas, ' + ce.itens.length + ' certo/errado, ' + ca.itens.length + ' cartões)');

// ---------- Termo escondido útil, sem repetição entre gerações, sem travar ----------
// Rótulo de banca, nome de pessoa de exemplo, algarismo romano e palavra de enunciado nunca viram resposta nem alternativa.
const RUIM = /^(?:cespe|unb|cesgranrio|fgv|fcc|vunesp|lucas|pedro|márcia|marcia|gustavo|certa|certo|errada|errado|causa|ii|iii|iv|vi|x)$/i;
const SUJO = `A inflação corrói o poder de compra dos salários quando os preços sobem mais depressa que a renda (Cespe/UnB).
Lucas calculou a depreciação acumulada dos equipamentos industriais usando o método das quotas constantes (Cesgranrio).
Márcia concluiu que a amortização reduz gradualmente o valor contábil dos ativos intangíveis da empresa (Cespe).
A hipótese II afirma que a elasticidade da demanda determina a variação da receita total das empresas.
A alternativa CERTA indica que a liquidez corrente compara ativos circulantes e passivos circulantes do balanço patrimonial.
Gustavo observou que a sazonalidade interfere diretamente na previsão orçamentária dos departamentos regionais.
A governança corporativa estabelece mecanismos de controle e transparência para proteger investidores minoritários.
O fluxo de caixa operacional mede a capacidade de geração de recursos das atividades principais da organização.
A auditoria independente examina demonstrações financeiras para atestar a conformidade com normas contábeis vigentes.
A alavancagem financeira amplia o retorno do acionista quando o custo da dívida é menor que o retorno dos ativos.
O planejamento tributário reduz legalmente a carga de impostos por meio da escolha de regimes de apuração adequados.
A conciliação bancária compara os registros contábeis com os extratos para identificar diferenças pendentes de ajuste.`.split('\n').join('\n\n');
let vistos = 0;
for (let sm = 1; sm <= 25; sm++) {
  for (const tipo of ['lacuna5', 'lacuna4']) {
    for (const q of G.gerar([{ titulo: 'Contabilidade', local: 'cap. 1', texto: SUJO }], { tipo, quantidade: 8, semente: sm, modelo: real }).itens) {
      vistos++;
      q.alternativas.forEach((a) => assert.ok(!RUIM.test(a), 'rótulo/nome/romano como alternativa: ' + a + ' em ' + q.enunciado));
      assert.strictEqual(q.explicacao.resumo.includes('(' + q.alternativas[q.resposta] ), false, 'termo entre parênteses não vira resposta');
    }
  }
}
assert.ok(vistos >= 40, 'o teste de termos úteis viu perguntas de verdade: ' + vistos);

// Gerações seguidas sobre o mesmo trecho: frases novas (evitar), sem resposta nem conjunto de alternativas repetidos dentro de cada uma.
const hashes = new Set(), enunciadosVistos = new Set();
for (let rodada = 0; rodada < 3; rodada++) {
  const r = G.gerar([{ titulo: 'Contabilidade', local: 'cap. 1', texto: SUJO }], { tipo: 'lacuna5', quantidade: 3, semente: 100 + rodada, modelo: real, evitar: hashes });
  assert.ok(r.itens.length >= 1, 'rodada ' + rodada + ' trouxe perguntas');
  const resp = r.itens.map((q) => q.alternativas[q.resposta].toLowerCase());
  assert.strictEqual(new Set(resp).size, resp.length, 'mesma resposta em duas perguntas: ' + resp);
  assert.strictEqual(new Set(r.itens.map((q) => q.alternativas.map((a) => a.toLowerCase()).sort().join('|'))).size, r.itens.length, 'mesmo conjunto de alternativas em duas perguntas');
  r.itens.forEach((q) => { assert.ok(!enunciadosVistos.has(q.enunciado), 'pergunta repetida entre gerações: ' + q.enunciado); enunciadosVistos.add(q.enunciado); });
  r.usadas.forEach((h) => hashes.add(h));
}
const esgotado = G.gerar([{ titulo: 'C', local: '', texto: SUJO }], { tipo: 'lacuna5', quantidade: 30, semente: 5, modelo: real, evitar: hashes });
assert.ok(esgotado.evitadas >= 3 && /já viraram pergunta/.test(esgotado.avisos.join(' ')), 'avisa quando o trecho já foi usado: ' + esgotado.avisos);

// Texto grande (~300 mil caracteres): nenhum pedaço do trabalho passa de 100 ms (gerarAsync cede a vez a cada ~30 ms).
const dir = path.join(__dirname, '..', 'www', 'js', 'dados');
let grande = '';
for (let i = 0; grande.length < 300000; i++) grande += SUJO.replace(/inflação|auditoria|governança/g, (m) => m + ' ' + 'tipo' + (i % 40)) + '\n\n' + TEXTO.replace(/Inglaterra/g, 'Inglaterra' + i % 7) + '\n\n';
(async () => {
  for (const trechos2 of [[{ titulo: 'Livro', local: 'x', texto: grande }], Array.from({ length: 150 }, (_, i) => ({ titulo: 'Livro', local: 'p. ' + i, texto: grande.slice(i * 2000, i * 2000 + 2000) }))]) {
    for (const tipo of ['lacuna5', 'certo-errado']) {
      const pedacos = [], r = await G.gerarAsync(trechos2, { tipo, quantidade: 20, semente: 3, modelo: prefereCurta }, (ms) => pedacos.push(ms));
      assert.ok(r.itens.length >= 10, 'gerou do texto grande: ' + r.itens.length);
      assert.ok(Math.max(...pedacos) <= 100, 'nenhuma tarefa passa de 100 ms em ' + trechos2.length + ' trecho(s), ' + tipo + ': ' + Math.max(...pedacos) + ' ms em ' + pedacos.length + ' pedaços');
      assert.ok(pedacos.length > 1, 'o trabalho foi dividido em pedaços');
    }
  }
  assert.deepStrictEqual((await G.gerarAsync(trechos, { tipo: 'lacuna5', quantidade: 5, semente: 9 })).itens, G.gerar(trechos, { tipo: 'lacuna5', quantidade: 5, semente: 9 }).itens, 'gerarAsync dá o mesmo resultado de gerar');
  console.log('gerador.test.js (texto grande, termos úteis, sem repetição): ok');
})().catch((e) => { console.error(e); process.exit(1); });
