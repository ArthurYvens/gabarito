/* Extração: texto de arquivos de estudo (TXT, MD, HTML, DOCX, EPUB e, com o leitor do navegador, PDF), dividido em
   seções navegáveis. O conteúdo do arquivo é entrada não confiável: só sai texto puro, nunca HTML.
   ZIP lido com DecompressionStream, com limites contra zip bomb. Sem dependências; testado no Node. */
(function (root) {
  'use strict';

  var LIM = {
    entradas: 5000,             // itens dentro do ZIP
    porEntrada: 30 * 1048576,   // bytes descomprimidos de um item
    totalZip: 80 * 1048576,     // bytes descomprimidos em toda a leitura
    fatia: 20000,               // caracteres por seção na tela de leitura
    caracteres: 3000000,        // texto guardado por documento (acima disso, corta e avisa)
    xml: 5 * 1048576,           // caracteres de HTML/XML processados por arquivo interno
    paragrafos: 500000          // parágrafos lidos de um DOCX
  };
  var EXT = { pdf: 'pdf', epub: 'epub', txt: 'txt', text: 'txt', md: 'md', markdown: 'md', html: 'html', htm: 'html', xhtml: 'html', docx: 'docx', mobi: 'mobi', azw: 'mobi', azw3: 'mobi', prc: 'mobi' };

  function erro(msg) { var e = new Error(msg); e.extracao = true; return e; }
  function tipo(nome) {
    var m = /\.([a-z0-9]{1,8})$/i.exec(String(nome || '').slice(-12)), k = m && m[1].toLowerCase();
    return k && Object.prototype.hasOwnProperty.call(EXT, k) ? EXT[k] : null;
  }
  function bytes(d) { return d instanceof Uint8Array ? d : new Uint8Array(d); }
  // UTF-8; se houver bytes inválidos, o arquivo é de um editor antigo (Windows-1252).
  function decodificar(d) {
    try { return new TextDecoder('utf-8', { fatal: true }).decode(d); } catch (e) { return new TextDecoder('windows-1252').decode(d); }
  }

  // ---------- ZIP ----------
  function u16(d, o) { return d[o] | d[o + 1] << 8; }
  function u32(d, o) { return (d[o] | d[o + 1] << 8 | d[o + 2] << 16 | d[o + 3] << 24) >>> 0; }

  function descomprimir(dados, max) {
    if (typeof DecompressionStream === 'undefined') return Promise.reject(erro('Este navegador não abre arquivos ZIP (EPUB e DOCX).'));
    var leitor = new Blob([dados]).stream().pipeThrough(new DecompressionStream('deflate-raw')).getReader();
    var partes = [], total = 0;
    return (function passo() {
      return leitor.read().then(function (r) {
        if (r.done) return partes;
        total += r.value.length;
        if (total > max) { leitor.cancel().catch(function () { /* já falhou */ }); throw erro('O arquivo descomprime para um tamanho grande demais e foi recusado.'); }
        partes.push(r.value);
        return passo();
      });
    })().then(function (ps) {
      var out = new Uint8Array(total), o = 0;
      ps.forEach(function (p) { out.set(p, o); o += p.length; });
      return out;
    }, function (e) { throw e && e.extracao ? e : erro('Arquivo ZIP corrompido.'); });
  }

  /* Lê o diretório central do ZIP. Devolve { tem(nome), ler(nome) -> Promise<Uint8Array> }. */
  function lerZip(dados, opcoes) {
    var lim = Object.assign({}, LIM, opcoes), d = bytes(dados), fim = -1, i;
    for (i = d.length - 22; i >= Math.max(0, d.length - 22 - 65535); i--) if (u32(d, i) === 0x06054b50) { fim = i; break; }
    if (fim < 0) return Promise.reject(erro('Arquivo ZIP inválido ou danificado.'));
    var n = u16(d, fim + 10), tam = u32(d, fim + 12), ini = u32(d, fim + 16);
    if (n === 0xFFFF || ini === 0xFFFFFFFF) return Promise.reject(erro('ZIP64 não é suportado.'));
    if (n > lim.entradas) return Promise.reject(erro('O arquivo tem itens demais e foi recusado.'));
    if (ini + tam > fim) return Promise.reject(erro('Arquivo ZIP inválido ou danificado.'));
    var itens = Object.create(null), p = ini;
    for (i = 0; i < n; i++) {
      if (p + 46 > d.length || u32(d, p) !== 0x02014b50) return Promise.reject(erro('Arquivo ZIP inválido ou danificado.'));
      var nl = u16(d, p + 28);
      if (p + 46 + nl > d.length) return Promise.reject(erro('Arquivo ZIP inválido ou danificado.'));
      itens[new TextDecoder().decode(d.subarray(p + 46, p + 46 + nl))] = { flags: u16(d, p + 8), metodo: u16(d, p + 10), comp: u32(d, p + 20), tam: u32(d, p + 24), pos: u32(d, p + 42) };
      p += 46 + nl + u16(d, p + 30) + u16(d, p + 32);
    }
    var usado = 0;
    return Promise.resolve({
      tem: function (nome) { return !!itens[nome]; },
      ler: function (nome) {
        var e = itens[nome];
        if (!e) return Promise.reject(erro('Falta "' + nome + '" dentro do arquivo.'));
        if (e.flags & 1) return Promise.reject(erro('Arquivo protegido por senha.'));
        var max = Math.min(lim.porEntrada, lim.totalZip - usado);
        if (e.tam > max) return Promise.reject(erro('O arquivo descomprime para um tamanho grande demais e foi recusado.'));
        if (e.pos + 30 > d.length || u32(d, e.pos) !== 0x04034b50) return Promise.reject(erro('Arquivo ZIP inválido ou danificado.'));
        var a = e.pos + 30 + u16(d, e.pos + 26) + u16(d, e.pos + 28);
        if (a + e.comp > d.length) return Promise.reject(erro('Arquivo ZIP cortado ou incompleto.'));
        var cru = d.subarray(a, a + e.comp);
        if (e.metodo === 0) { usado += cru.length; return Promise.resolve(cru); }
        if (e.metodo !== 8) return Promise.reject(erro('Compressão de ZIP não suportada.'));
        return descomprimir(cru, max).then(function (out) { usado += out.length; return out; });
      }
    });
  }

  // ---------- Texto, XML e HTML ----------
  // Tudo aqui é varredura linear com indexOf: regex com [\s\S]*? sobre arquivo não confiável vira O(n²) (travava a tela).
  var ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', shy: '' };
  ('agrave=à Agrave=À aacute=á Aacute=Á acirc=â Acirc=Â atilde=ã Atilde=Ã auml=ä Auml=Ä aring=å ccedil=ç Ccedil=Ç egrave=è Egrave=È eacute=é Eacute=É ecirc=ê Ecirc=Ê euml=ë ' +
    'igrave=ì Igrave=Ì iacute=í Iacute=Í icirc=î Icirc=Î iuml=ï ntilde=ñ ograve=ò Ograve=Ò oacute=ó Oacute=Ó ocirc=ô Ocirc=Ô otilde=õ Otilde=Õ ouml=ö Ouml=Ö ' +
    'ugrave=ù Ugrave=Ù uacute=ú Uacute=Ú ucirc=û Ucirc=Û uuml=ü Uuml=Ü yacute=ý ordm=º ordf=ª laquo=« raquo=» ldquo=“ rdquo=” lsquo=‘ rsquo=’ hellip=… ndash=– mdash=— ' +
    'bull=• copy=© reg=® deg=° middot=· sect=§ para=¶ euro=€ trade=™ times=× divide=÷ frac12=½ sup2=² sup3=³').split(' ').forEach(function (p) { ENT[p.slice(0, p.indexOf('='))] = p.slice(p.indexOf('=') + 1); });
  function entidades(s) {
    return s.indexOf('&') < 0 ? s : s.replace(/&(#x[0-9a-f]+|#\d+|[a-z][a-z0-9]*);/gi, function (m, e) {
      if (e.charAt(0) === '#') {
        var c = e.charAt(1).toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
        return c > 0 && c <= 0x10FFFF ? String.fromCodePoint(c) : '';
      }
      return Object.prototype.hasOwnProperty.call(ENT, e) ? ENT[e] : m; // entidade que não está na tabela fica como veio
    });
  }
  function atributos(tag) { // tag curta (já cortada em 300 caracteres)
    var a = Object.create(null);
    tag.replace(/([\w:.-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g, function (m, k, v1, v2) { a[k.toLowerCase()] = entidades(v1 != null ? v1 : v2); return m; });
    return a;
  }
  /* Abre-tags "<nome ...>" em ordem, cortadas em 300 caracteres. Para na primeira sem ">". */
  function etiquetas(xml, nome, max) {
    var out = [], i = 0, k = nome.length + 1;
    while (out.length < max && (i = xml.indexOf('<' + nome, i)) >= 0) {
      var c = xml.charAt(i + k);
      if (c !== ' ' && c !== '>' && c !== '/' && c !== '\n' && c !== '\t' && c !== '\r') { i += k; continue; }
      var gt = xml.indexOf('>', i);
      if (gt < 0) break;
      out.push(xml.slice(i, Math.min(gt + 1, i + 300)));
      i = gt + 1;
    }
    return out;
  }
  /* Conteúdo de cada "<nome ...>...</nome>" em ordem. Para no primeiro sem fechamento. */
  function blocosXml(xml, nome, fn, max) {
    var i = 0, ab = '<' + nome, fe = '</' + nome + '>', cont = 0;
    while (cont < max && (i = xml.indexOf(ab, i)) >= 0) {
      var c = xml.charAt(i + ab.length);
      if (c !== ' ' && c !== '>') { i += ab.length; continue; }
      var f = xml.indexOf(fe, i);
      if (f < 0) break;
      fn(xml.slice(i, f)); cont++; i = f + fe.length;
    }
  }

  var BLOCO = /^(p|div|li|br|tr|td|th|blockquote|pre|section|article|header|footer|aside|ul|ol|table|figure|figcaption|dd|dt|dl|hr|body|title|nav)$/;
  function acharFecha(html, nome, de, semFecho) {
    if (semFecho[nome]) return -1;
    var p = de;
    while ((p = html.indexOf('</', p)) >= 0) {
      if (html.substr(p + 2, nome.length).toLowerCase() === nome) return p;
      p += 2;
    }
    semFecho[nome] = true;
    return -1;
  }
  /* HTML/XHTML -> [{ nivel (1 a 6 nos títulos, 0 no resto), texto }]. Tags viram separadores; nada é interpretado.
     Passa de LIM.xml caracteres: o resto é ignorado e o resultado traz .cortado. */
  function blocosHtml(html) {
    html = String(html);
    var cortado = html.length > LIM.xml;
    if (cortado) html = html.slice(0, LIM.xml);
    var out = [], nivel = 0, buf = '', i = 0, n = html.length, semFecho = Object.create(null), gt = -1;
    function fecha() {
      var t = entidades(buf).replace(/[\s ]+/g, ' ').trim();
      if (t) out.push({ nivel: nivel, texto: t });
      buf = ''; nivel = 0;
    }
    while (i < n) {
      var lt = html.indexOf('<', i);
      if (lt < 0) { buf += html.slice(i); break; }
      if (lt > i) buf += html.slice(i, lt);
      if (html.startsWith('<!--', lt)) { var f = html.indexOf('-->', lt + 4); if (f < 0) break; i = f + 3; continue; }
      if (gt < lt) gt = html.indexOf('>', lt);
      var m = gt < 0 || gt - lt > 4000 ? null : /^<(\/?)([a-zA-Z][a-zA-Z0-9]*)/.exec(html.slice(lt, lt + 40));
      if (!m) { buf += '<'; i = lt + 1; if (gt < 0) { buf += html.slice(i); break; } continue; } // "<" solto é texto
      var t = m[2].toLowerCase(), fechando = !!m[1];
      i = gt + 1;
      if (!fechando && /^(script|style|noscript|template|svg|head)$/.test(t)) {
        var fe = acharFecha(html, t, i, semFecho);
        if (fe < 0) { if (t === 'script' || t === 'style') break; continue; } // script sem fim: o resto é código
        var g2 = html.indexOf('>', fe);
        i = g2 < 0 ? n : g2 + 1;
      } else if (/^h[1-6]$/.test(t)) { fecha(); if (!fechando) nivel = Number(t.charAt(1)); }
      else if (BLOCO.test(t)) fecha();
    }
    fecha();
    if (cortado) out.cortado = true;
    return out;
  }

  /* "# Título" (até 6 #) -> { nivel, texto } ou null. Sem regex: linha longa com espaços não pode travar. */
  function tituloMd(l) {
    if (l.length > 2000) return null;
    var i = 0, h;
    while (i < 3 && l.charCodeAt(i) === 32) i++;
    h = i;
    while (l.charCodeAt(h) === 35 && h - i < 7) h++;
    var nivel = h - i, c = l.charAt(h);
    if (nivel < 1 || nivel > 6 || (c !== ' ' && c !== '\t')) return null;
    var e = l.length;
    while (e > h && l.charCodeAt(e - 1) === 35) e--;
    var t = l.slice(h, e).trim();
    return t ? { nivel: nivel, texto: t } : null;
  }
  /* TXT e MD: parágrafos separados por linha em branco (quebras simples dentro do parágrafo ficam). */
  function blocosTexto(texto, md) {
    var out = [], par = [];
    function fecha() { var t = par.join('\n').trim(); if (t) out.push({ nivel: 0, texto: t }); par = []; }
    texto.replace(/\r\n?/g, '\n').split('\n').forEach(function (l) {
      var h = md && tituloMd(l);
      if (h) { fecha(); out.push(h); }
      else if (!l.trim()) fecha();
      else par.push(l.trimEnd());
    });
    fecha();
    return out;
  }

  /* Blocos -> seções. Capítulo novo a cada título de nível 1 ou 2 (ou até 3, se for o que o arquivo tem). */
  function secoes(blocos) {
    var corte = 0, n;
    for (n = 1; n <= 3 && !corte; n++) {
      if (blocos.filter(function (b) { return b.nivel && b.nivel <= n; }).length >= 2) corte = n;
    }
    var res = [], atual = null;
    blocos.forEach(function (b) {
      if (corte && b.nivel && b.nivel <= corte) { atual = { titulo: b.texto.slice(0, 120), partes: [] }; res.push(atual); return; }
      if (!atual) { atual = { titulo: corte ? 'Início' : 'Texto', partes: [] }; res.push(atual); }
      atual.partes.push(b.texto);
    });
    return res.map(function (s) { return { titulo: s.titulo, texto: s.partes.join('\n\n') }; }).filter(function (s) { return s.texto.trim(); });
  }
  /* Seção maior que LIM.fatia é partida em parágrafos, para a tela de leitura não montar milhares de linhas de uma vez. */
  function fatiar(lista) {
    var out = [];
    lista.forEach(function (s) {
      if (s.texto.length <= LIM.fatia) { out.push(s); return; }
      var partes = [], cur = '';
      s.texto.split('\n\n').forEach(function (p) {
        for (var k = 0; k < p.length || k === 0; k += LIM.fatia) {
          var q = p.length > LIM.fatia ? p.slice(k, k + LIM.fatia) : p;
          if (cur && cur.length + q.length + 2 > LIM.fatia) { partes.push(cur); cur = ''; }
          cur = cur ? cur + '\n\n' + q : q;
        }
      });
      if (cur) partes.push(cur);
      partes.forEach(function (t, i) { out.push({ titulo: s.titulo + ' (' + (i + 1) + '/' + partes.length + ')', texto: t }); });
    });
    return out;
  }

  // ---------- Formatos ----------
  function caminho(base, href) {
    var out = [];
    (base + href.split('#')[0]).split('/').forEach(function (s) { if (s === '..') out.pop(); else if (s && s !== '.') out.push(s); });
    return out.join('/');
  }
  /* Um arquivo da espinha do EPUB é, em geral, um capítulo: vira ao menos uma seção, mesmo sem título interno ou com um só. */
  function secoesArquivo(b, k) {
    var cabs = b.filter(function (x) { return x.nivel && x.nivel <= 2; });
    if (cabs.length >= 2) return secoes(b);
    var corpo = b.filter(function (x) { return x !== cabs[0]; }).map(function (x) { return x.texto; }).join('\n\n');
    return corpo.trim() ? [{ titulo: cabs.length ? cabs[0].texto.slice(0, 120) : 'Capítulo ' + k, texto: corpo }] : [];
  }
  function epub(dados) {
    return lerZip(dados).then(function (zip) {
      return zip.ler('META-INF/container.xml').then(function (c) {
        var m = /full-path\s*=\s*["']([^"']+)["']/i.exec(decodificar(c).slice(0, 100000));
        if (!m) throw erro('EPUB sem índice (container.xml).');
        return zip.ler(m[1]).then(function (o) {
          var opf = decodificar(o), base = m[1].replace(/[^/]*$/, ''), itens = Object.create(null), visto = Object.create(null);
          etiquetas(opf, 'item', LIM.entradas).forEach(function (t) { var a = atributos(t); if (a.id && a.href) itens[a.id] = a; });
          var ordem = etiquetas(opf, 'itemref', LIM.entradas).map(function (t) { return itens[atributos(t).idref]; })
            .filter(function (a) { return a && /html|xml/i.test(a['media-type'] || ''); })
            .map(function (a) { var h = a.href; try { h = decodeURIComponent(h); } catch (e) { /* mantém */ } return caminho(base, h); })
            .filter(function (nome) { if (visto[nome] || !zip.tem(nome)) return false; return (visto[nome] = true); }); // capítulo repetido na espinha: uma vez só
          if (!ordem.length) throw erro('EPUB sem capítulos legíveis.');
          var lista = [], total = 0, cortado = false;
          return ordem.reduce(function (cadeia, nome) {
            return cadeia.then(function () {
              if (total > LIM.caracteres) { cortado = true; return; }
              return zip.ler(nome).then(function (x) {
                var b = blocosHtml(decodificar(x));
                if (b.cortado) cortado = true;
                secoesArquivo(b, lista.length + 1).forEach(function (s) { total += s.texto.length; lista.push(s); });
              });
            });
          }, Promise.resolve()).then(function () { return { secoes: lista, cortado: cortado }; });
        });
      });
    });
  }
  function textoParagrafo(p) { // um passe só por <w:...>
    var t = '', estilo = '', i = 0, semFimPPr = false;
    while ((i = p.indexOf('<w:', i)) >= 0) {
      var gt = p.indexOf('>', i);
      if (gt < 0) break;
      var nome = /^[a-zA-Z]+/.exec(p.slice(i + 3, i + 15));
      nome = nome ? nome[0] : '';
      if (nome === 'pPr') {
        var fim = semFimPPr ? -1 : p.indexOf('</w:pPr>', gt), regiao = fim < 0 ? '' : p.slice(gt + 1, fim), ps = regiao.indexOf('<w:pStyle');
        if (ps >= 0) { var e = regiao.indexOf('>', ps); if (e >= 0) estilo = atributos(regiao.slice(ps, Math.min(e + 1, ps + 300)))['w:val'] || ''; }
        if (fim < 0) semFimPPr = true; // sem fechamento aqui, não há mais adiante: não procura de novo
        i = fim < 0 ? gt + 1 : fim + 8;
      } else if (nome === 't' && p.charAt(gt - 1) !== '/') {
        var f = p.indexOf('<', gt + 1);
        if (f < 0) break;
        t += entidades(p.slice(gt + 1, f)); i = f;
      } else { if (nome === 'tab' || nome === 'br' || nome === 'cr') t += ' '; i = gt + 1; }
    }
    return { texto: t.replace(/\s+/g, ' ').trim(), estilo: estilo };
  }
  function docx(dados) {
    return lerZip(dados).then(function (zip) {
      if (!zip.tem('word/document.xml')) throw erro('DOCX sem document.xml.');
      return Promise.all([zip.ler('word/document.xml'), zip.tem('word/styles.xml') ? zip.ler('word/styles.xml') : Promise.resolve(null)]).then(function (r) {
        // Título = estilo cujo nome é "heading N" (ou "Título N"); o id do estilo muda conforme o idioma do Word.
        var niveis = Object.create(null);
        if (r[1]) blocosXml(decodificar(r[1]).slice(0, LIM.xml), 'w:style', function (s) {
          var id = /w:styleId="([^"]*)"/.exec(s.slice(0, 600)), nome = /<w:name\s+w:val="([^"]*)"/.exec(s.slice(0, 2000)), h = nome && /^(?:heading|t[ií]tulo)\s*(\d)$/i.exec(nome[1]);
          if (id && h) niveis[id[1]] = Number(h[1]);
          else if (id && nome && /^title$/i.test(nome[1])) niveis[id[1]] = 1;
        }, 5000);
        var blocos = [], xml = decodificar(r[0]), cortado = false;
        if (xml.length > LIM.xml) { xml = xml.slice(0, LIM.xml); cortado = true; }
        blocosXml(xml, 'w:p', function (p) {
          var x = textoParagrafo(p), nivel = x.estilo ? niveis[x.estilo] || (/^(?:heading|ttulo|titulo)(\d)$/i.exec(x.estilo) || [0, 0])[1] * 1 : 0;
          if (x.texto) blocos.push({ nivel: nivel, texto: x.texto });
        }, LIM.paragrafos);
        return { secoes: secoes(blocos), cortado: cortado };
      });
    });
  }

  /* Devolve { secoes: [{ titulo, texto }], cortado }. Para PDF, opcoes.pdf(bytes, progresso) é o leitor do navegador
     (pdf.js) e devolve { paginas: [texto], cortado }; cada página vira uma seção, para escolher intervalo de páginas. */
  function extrair(formato, dados, opcoes) {
    opcoes = opcoes || {};
    var d = bytes(dados), blocos;
    if (formato === 'mobi') return Promise.reject(erro('MOBI e AZW não abrem aqui. Baixe o livro em PDF ou EPUB, ou converta para EPUB num programa gratuito como o Calibre.'));
    if (formato === 'pdf') {
      if (!opcoes.pdf) return Promise.reject(erro('Leitor de PDF indisponível.'));
      return opcoes.pdf(d, opcoes.progresso || function () {}).then(function (r) {
        var lista = r.paginas.map(function (t, i) { return { titulo: 'Página ' + (i + 1), texto: String(t || '').trim() }; });
        return fim(lista, !!r.cortado, 'Este PDF não tem texto (é imagem escaneada). Use uma versão com texto selecionável.');
      });
    }
    if (formato === 'txt') blocos = Promise.resolve({ secoes: secoes(blocosTexto(decodificar(d), false)) });
    else if (formato === 'md') blocos = Promise.resolve({ secoes: secoes(blocosTexto(decodificar(d), true)) });
    else if (formato === 'html') blocos = Promise.resolve(blocosHtml(decodificar(d))).then(function (b) { return { secoes: secoes(b), cortado: !!b.cortado }; });
    else if (formato === 'epub') blocos = epub(d);
    else if (formato === 'docx') blocos = docx(d);
    else return Promise.reject(erro('Formato não suportado.'));
    return blocos.then(function (r) { return fim(fatiar(r.secoes), !!r.cortado, 'Não encontrei texto neste arquivo.'); });
  }
  function fim(lista, cortado, vazio) {
    var total = 0, out = [];
    for (var i = 0; i < lista.length; i++) {
      if (total + lista[i].texto.length > LIM.caracteres) { cortado = true; break; }
      total += lista[i].texto.length; out.push(lista[i]);
    }
    if (!total) throw erro(vazio);
    return { secoes: out, cortado: cortado, caracteres: total };
  }

  /* Texto das seções de..ate (índices, inclusivos), com o título de cada uma. */
  function trecho(lista, de, ate) {
    return lista.slice(de, ate + 1).map(function (s) { return s.titulo + '\n' + s.texto; }).join('\n\n');
  }
  function contar(lista, de, ate) {
    return lista.slice(de, ate + 1).reduce(function (t, s) { return t + s.texto.length; }, 0);
  }

  var Extracao = { LIM: LIM, tipo: tipo, decodificar: decodificar, lerZip: lerZip, blocosHtml: blocosHtml, extrair: extrair, trecho: trecho, contar: contar };
  if (typeof module !== 'undefined' && module.exports) module.exports = Extracao;
  else root.Extracao = Extracao;
})(this);
