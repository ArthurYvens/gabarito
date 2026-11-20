/* node tests/extracao.test.js */
'use strict';
const assert = require('assert');
const path = require('path');
const zlib = require('zlib');
const E = require(path.join(__dirname, '..', 'www', 'js', 'extracao.js'));

// ZIP montado em memória (método 8 = deflate, 0 = sem compressão).
function crc32(b) {
  let c, crc = 0xFFFFFFFF;
  for (let i = 0; i < b.length; i++) { c = (crc ^ b[i]) & 0xFF; for (let k = 0; k < 8; k++) c = c & 1 ? (c >>> 1) ^ 0xEDB88320 : c >>> 1; crc = (crc >>> 8) ^ c; }
  return (crc ^ 0xFFFFFFFF) >>> 0;
}
function zip(arquivos, metodo = 8) {
  const locais = [], centrais = [];
  let pos = 0;
  for (const [nome, conteudo] of Object.entries(arquivos)) {
    const cru = Buffer.from(conteudo), comp = metodo === 8 ? zlib.deflateRawSync(cru) : cru, n = Buffer.from(nome);
    const l = Buffer.alloc(30); l.writeUInt32LE(0x04034b50, 0); l.writeUInt16LE(20, 4); l.writeUInt16LE(metodo, 8);
    l.writeUInt32LE(crc32(cru), 14); l.writeUInt32LE(comp.length, 18); l.writeUInt32LE(cru.length, 22); l.writeUInt16LE(n.length, 26);
    const c = Buffer.alloc(46); c.writeUInt32LE(0x02014b50, 0); c.writeUInt16LE(20, 4); c.writeUInt16LE(20, 6); c.writeUInt16LE(metodo, 10);
    c.writeUInt32LE(crc32(cru), 16); c.writeUInt32LE(comp.length, 20); c.writeUInt32LE(cru.length, 24); c.writeUInt16LE(n.length, 28); c.writeUInt32LE(pos, 42);
    locais.push(l, n, comp); centrais.push(c, n);
    pos += 30 + n.length + comp.length;
  }
  const cd = Buffer.concat(centrais), fim = Buffer.alloc(22);
  fim.writeUInt32LE(0x06054b50, 0); fim.writeUInt16LE(Object.keys(arquivos).length, 8); fim.writeUInt16LE(Object.keys(arquivos).length, 10);
  fim.writeUInt32LE(cd.length, 12); fim.writeUInt32LE(pos, 16);
  return new Uint8Array(Buffer.concat([...locais, cd, fim]));
}
const rejeita = async (p, re) => assert.rejects(p, (e) => re.test(e.message));

(async () => {
  // TXT: UTF-8 e Windows-1252 (byte 0xE9 sozinho é inválido em UTF-8).
  let r = await E.extrair('txt', Buffer.from('Primeiro parágrafo.\nContinua.\n\nSegundo parágrafo.'));
  assert.deepStrictEqual(r.secoes.map((s) => s.texto), ['Primeiro parágrafo.\nContinua.\n\nSegundo parágrafo.']);
  r = await E.extrair('txt', Buffer.from('caf\xe9 com a\xe7\xfacar', 'latin1'));
  assert.strictEqual(r.secoes[0].texto, 'café com açúcar');

  // TXT grande vira várias seções, sem cortar texto em silêncio.
  const grande = Array.from({ length: 400 }, (_, i) => 'Parágrafo número ' + i + ' ' + 'x'.repeat(200)).join('\n\n');
  r = await E.extrair('txt', Buffer.from(grande));
  assert.ok(r.secoes.length > 3 && r.secoes.every((s) => s.texto.length <= E.LIM.fatia) && !r.cortado);
  assert.strictEqual(r.secoes.map((s) => s.texto).join('\n\n'), grande);

  // MD: títulos viram seções.
  r = await E.extrair('md', Buffer.from('# Um\ntexto a\n\n## Dois\ntexto b\n'));
  assert.deepStrictEqual(r.secoes.map((s) => [s.titulo, s.texto]), [['Um', 'texto a'], ['Dois', 'texto b']]);

  // HTML: sem script/style/comentário, entidades decodificadas, nenhuma marcação sobra.
  r = await E.extrair('html', Buffer.from('<html><head><title>x</title><style>p{}</style></head><body><h1>Capítulo A</h1><p>Olá &amp; <b>mundo</b> &#233;&#x41;</p><script>alert(1)</script><!-- c --><h1>Capítulo B</h1><p>fim<img src=x onerror=alert(1)></p><script>sem fim</body>'));
  assert.deepStrictEqual(r.secoes.map((s) => [s.titulo, s.texto]), [['Capítulo A', 'Olá & mundo éA'], ['Capítulo B', 'fim']]);
  assert.ok(!/[<>]|alert/.test(JSON.stringify(r.secoes)));

  // DOCX: títulos por estilo (inclusive o id localizado), tabulação não vira texto de definição, entidades XML.
  const estilos = '<w:styles><w:style w:type="paragraph" w:styleId="Ttulo1"><w:name w:val="heading 1"/></w:style></w:styles>';
  const doc = '<w:document><w:body>' +
    '<w:p><w:pPr><w:pStyle w:val="Ttulo1"/></w:pPr><w:r><w:t>Introdu&#231;&#227;o</w:t></w:r></w:p>' +
    '<w:p><w:pPr><w:tabs><w:tab w:val="left" w:pos="720"/></w:tabs></w:pPr><w:r><w:t xml:space="preserve">Texto </w:t></w:r><w:r><w:t>A &amp; B</w:t></w:r></w:p>' +
    '<w:p><w:pPr><w:pStyle w:val="Heading1"/></w:pPr><w:r><w:t>Segunda</w:t></w:r></w:p>' +
    '<w:p><w:r><w:t>Corpo dois</w:t></w:r></w:p></w:body></w:document>';
  r = await E.extrair('docx', zip({ 'word/document.xml': doc, 'word/styles.xml': estilos }));
  assert.deepStrictEqual(r.secoes.map((s) => [s.titulo, s.texto]), [['Introdução', 'Texto A & B'], ['Segunda', 'Corpo dois']]);
  r = await E.extrair('docx', zip({ 'word/document.xml': doc }, 0)); // sem compressão
  assert.strictEqual(r.secoes.length, 2);
  await rejeita(E.extrair('docx', zip({ 'outro.xml': '<a/>' })), /document\.xml/);

  // EPUB: container -> OPF -> spine em ordem (não a ordem do manifesto), caminho relativo com "..".
  const cap = (t, corpo) => '<html xmlns="http://www.w3.org/1999/xhtml"><body><h1>' + t + '</h1><p>' + corpo + '</p></body></html>';
  const epub = zip({
    'mimetype': 'application/epub+zip',
    'META-INF/container.xml': '<container><rootfiles><rootfile full-path="OEBPS/livro.opf" media-type="application/oebps-package+xml"/></rootfiles></container>',
    'OEBPS/livro.opf': '<package><manifest><item id="b" href="texto/b.xhtml" media-type="application/xhtml+xml"/><item href="texto/a%20um.xhtml" id="a" media-type="application/xhtml+xml"/><item id="i" href="img.png" media-type="image/png"/></manifest>' +
      '<spine><itemref idref="a"/><itemref idref="b"/><itemref idref="i"/><itemref idref="nao-existe"/></spine></package>',
    'OEBPS/texto/a um.xhtml': cap('Um', 'primeiro'),
    'OEBPS/texto/b.xhtml': cap('Dois', 'segundo &quot;citado&quot;')
  });
  r = await E.extrair('epub', epub);
  assert.deepStrictEqual(r.secoes.map((s) => [s.titulo, s.texto]), [['Um', 'primeiro'], ['Dois', 'segundo "citado"']]);
  assert.strictEqual(E.trecho(r.secoes, 1, 1), 'Dois\nsegundo "citado"');
  await rejeita(E.extrair('epub', zip({ 'META-INF/container.xml': '<container/>' })), /índice/);

  // MOBI/AZW: aviso claro. PDF sem leitor injetado não quebra.
  assert.strictEqual(E.tipo('Livro.AZW3'), 'mobi');
  assert.strictEqual(E.tipo('a.docx'), 'docx');
  assert.strictEqual(E.tipo('a.exe'), null);
  await rejeita(E.extrair('mobi', Buffer.from('x')), /converta para EPUB/);
  r = await E.extrair('pdf', Buffer.from('%PDF'), { pdf: async () => ({ paginas: ['pág um', '', 'pág três'], cortado: true }) });
  assert.deepStrictEqual(r.secoes.map((s) => s.titulo), ['Página 1', 'Página 2', 'Página 3']);
  assert.ok(r.cortado);
  await rejeita(E.extrair('pdf', Buffer.from('%PDF'), { pdf: async () => ({ paginas: ['', ' '] }) }), /imagem escaneada/);

  // ZIP malformado ou malicioso.
  await rejeita(E.lerZip(Buffer.from('isto não é um zip')), /inválido/);
  await rejeita(E.lerZip(new Uint8Array(0)), /inválido/);
  const bom = zip({ 'a.txt': 'conteudo conteudo conteudo' });
  await rejeita(E.lerZip(bom.subarray(0, bom.length - 10)), /inválido/); // cortado: sem o fim do diretório
  const lixo = Buffer.from(bom); lixo.writeUInt32LE(0xFFFFFFF0, lixo.length - 22 + 16); // diretório fora do arquivo
  await rejeita(E.lerZip(lixo), /inválido/);
  const lixo2 = Buffer.from(bom); lixo2.fill(0x41, 30, 40); // dados deflate corrompidos
  const z2 = await E.lerZip(lixo2);
  await rejeita(z2.ler('a.txt'), /corrompido|inválido/);
  const muitas = Buffer.from(bom); muitas.writeUInt16LE(60000, muitas.length - 22 + 10);
  await rejeita(E.lerZip(muitas), /itens demais/);
  const zip64 = Buffer.from(bom); zip64.writeUInt16LE(0xFFFF, zip64.length - 22 + 10);
  await rejeita(E.lerZip(zip64), /ZIP64/);
  const z3 = await E.lerZip(bom);
  await rejeita(z3.ler('nao-tem.txt'), /Falta/);
  // Entrada que mente no tamanho (declara pouco, descomprime muito): cortada no limite, sem estourar memória.
  const bomba = zip({ 'bomba.txt': Buffer.alloc(8 * 1048576, 0x61) });
  new DataView(bomba.buffer, bomba.byteOffset).setUint32(bomba.length - 22 - (46 + 9) + 24, 100, true); // tamanho declarado: 100 bytes
  const z4 = await E.lerZip(bomba, { porEntrada: 1048576 });
  await rejeita(z4.ler('bomba.txt'), /grande demais/);
  // E, declarando o tamanho verdadeiro, é recusada antes de descomprimir.
  const z5 = await E.lerZip(zip({ 'b.txt': Buffer.alloc(2 * 1048576, 0x61) }), { porEntrada: 1048576 });
  await rejeita(z5.ler('b.txt'), /grande demais/);
  // Orçamento total da leitura.
  const z6 = await E.lerZip(zip({ 'a.txt': Buffer.alloc(600000, 1), 'b.txt': Buffer.alloc(600000, 2) }), { totalZip: 1000000 });
  assert.strictEqual((await z6.ler('a.txt')).length, 600000);
  await rejeita(z6.ler('b.txt'), /grande demais/);

  // EPUB: capítulo com título h2 em outro arquivo da espinha não some dentro do anterior; capítulo sem título vira "Capítulo N";
  // espinha com o mesmo arquivo repetido lê uma vez só.
  const cont = (corpo) => '<html><body>' + corpo + '</body></html>';
  const opf = '<package><manifest>' + [1, 2, 3].map((n) => '<item id="c' + n + '" href="c' + n + '.xhtml" media-type="application/xhtml+xml"/>').join('') + '</manifest><spine>' +
    '<itemref idref="c1"/><itemref idref="c2"/><itemref idref="c2"/><itemref idref="c3"/></spine></package>';
  r = await E.extrair('epub', zip({
    'META-INF/container.xml': '<container><rootfile full-path="livro.opf"/></container>', 'livro.opf': opf,
    'c1.xhtml': cont('<h1>Capítulo A</h1><p>texto a</p>'), 'c2.xhtml': cont('<h2>Capítulo B</h2><p>texto b</p>'), 'c3.xhtml': cont('<p>sem título</p>')
  }));
  assert.deepStrictEqual(r.secoes.map((s) => [s.titulo, s.texto]), [['Capítulo A', 'texto a'], ['Capítulo B', 'texto b'], ['Capítulo 3', 'sem título']]);

  // Entradas maliciosas (hacker): nenhuma pode passar de 2 s. Antes eram regex quadráticas (segundos a horas).
  const rapido = async (nome, fn) => { const t = Date.now(); try { await fn(); } catch (e) { /* recusar é aceitável */ } assert.ok(Date.now() - t < 2000, nome + ' demorou ' + (Date.now() - t) + ' ms'); };
  const html = (txt) => E.extrair('html', Buffer.from(txt));
  await rapido('<script sem fim', () => html('<script '.repeat(80000)));
  await rapido('< sem >', () => html('<a '.repeat(80000)));
  await rapido('<!-- sem fim', () => html('<!--'.repeat(80000)));
  await rapido('<svg sem fim', () => html('<svg>texto '.repeat(80000)));
  await rapido('< e > só no fim', () => html('<a '.repeat(80000) + '>'));
  await rapido('entidades', () => html('<p>' + '&eacute;&zz;&#233;'.repeat(300000)));
  await rapido('md: espaços', () => E.extrair('md', Buffer.from('# a' + ' '.repeat(100000) + 'x')));
  await rapido('md: #', () => E.extrair('md', Buffer.from('# a ' + '#'.repeat(100000) + 'x')));
  await rapido('txt: espaços', () => E.extrair('txt', Buffer.from('a' + ' '.repeat(2000000) + 'x')));
  await rapido('docx <w:p> sem fim', () => E.extrair('docx', zip({ 'word/document.xml': '<w:p>'.repeat(200000) })));
  await rapido('docx <w:t sem >', () => E.extrair('docx', zip({ 'word/document.xml': '<w:p>' + '<w:t '.repeat(200000) + '</w:p>' })));
  await rapido('docx <w:pPr> sem fim', () => E.extrair('docx', zip({ 'word/document.xml': '<w:p>' + '<w:pPr>'.repeat(200000) + '<w:t>x</w:t></w:p>' })));
  await rapido('docx estilos', () => E.extrair('docx', zip({ 'word/document.xml': '<w:p><w:t>x</w:t></w:p>', 'word/styles.xml': '<w:style '.repeat(200000) })));
  await rapido('epub <item sem >', () => E.extrair('epub', zip({ 'META-INF/container.xml': '<c full-path="a.opf"/>', 'a.opf': '<item '.repeat(200000) })));
  await rapido('epub spine repetida', () => E.extrair('epub', zip({
    'META-INF/container.xml': '<c full-path="a.opf"/>', 'c.xhtml': '<p>' + 'x'.repeat(4 * 1048576) + '</p>',
    'a.opf': '<manifest><item id="c" href="c.xhtml" media-type="text/html"/></manifest><spine>' + '<itemref idref="c"/>'.repeat(4000) + '</spine>'
  })));
  // HTML maior que o limite por arquivo: corta e avisa, não trava.
  r = await E.extrair('html', Buffer.from('<p>' + 'palavra '.repeat(900000)));
  assert.ok(r.cortado && r.caracteres > 0);
  // Entidades nomeadas comuns do português, sem DOM.
  r = await E.extrair('html', Buffer.from('<p>a&ccedil;&atilde;o &aacute;gua &nbsp;&hellip; &inexistente;</p>'));
  assert.strictEqual(r.secoes[0].texto, 'ação água … &inexistente;');

  // Higiene: o único ponto que abre PDF mantém isEvalSupported:false (CVE-2024-4367 no pdf.js 3.x).
  const fonte = require('fs').readFileSync(path.join(__dirname, '..', 'www', 'js', 'views-minhas.js'), 'utf8');
  assert.strictEqual((require('fs').readdirSync(path.join(__dirname, '..', 'www', 'js')).filter((f) => f.endsWith('.js')).map((f) => require('fs').readFileSync(path.join(__dirname, '..', 'www', 'js', f), 'utf8')).join('\n').match(/getDocument\(/g) || []).length, 1, 'só um getDocument');
  assert.ok(/getDocument\(\{[^}]*isEvalSupported:\s*false/.test(fonte), 'pdf.js sem isEvalSupported:false');

  console.log('extracao.test.js: ok');
})().catch((e) => { console.error(e); process.exit(1); });
