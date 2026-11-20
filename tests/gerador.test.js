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
console.log('gerador.test.js: ok (' + l5.itens.length + ' lacunas, ' + ce.itens.length + ' certo/errado, ' + ca.itens.length + ' cartões)');
