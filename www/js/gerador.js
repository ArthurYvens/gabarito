/* Gerador: monta questões e cartões a partir de texto, por regras (sem rede). Escolhe frases informativas,
   esconde um termo-chave e tira os distratores do próprio documento. Nada é inventado: toda explicação cita a
   frase original e o lugar de onde veio. Sem DOM, testado no Node. */
(function (root) {
  'use strict';

  var PARADA = ('a ao aos as à às o os um uma uns umas de do da dos das dum duma em no na nos nas num numa por pelo pela pelos pelas para pra com sem sob sobre ' +
    'entre até ante após perante contra desde durante mediante conforme segundo através e ou mas porém contudo todavia portanto porque pois que se como quando onde ' +
    'qual quais quem cujo cuja cujos cujas isso isto aquilo esse essa esses essas este esta estes estas aquele aquela aqueles aquelas ele ela eles elas seu sua seus suas ' +
    'nosso nossa dele dela deles delas desse dessa desses dessas deste desta destes destas nesse nessa neste nesta naquele naquela ser estar ter haver fazer foi foram ' +
    'será serão está estão tem têm pode podem deve devem sendo havendo mais menos muito muita muitos muitas pouco pouca bem mal ainda também apenas somente sempre nunca ' +
    'assim então além cada todo toda todos todas outro outra outros outras mesmo mesma mesmos mesmas algum alguma alguns algumas nenhum nenhuma forma formas parte partes ' +
    'caso casos vez vezes fato fatos tipo tipos modo modos meio coisa coisas algo maneira maneiras exemplo exemplos situação situações questão questões primeiro primeira ' +
    'segunda terceiro terceira principal principais importante importantes diferente diferentes existente existentes necessário necessária necessários necessárias ' +
    'possível possíveis podendo quanto quanta quantos quantas tanto tanta tantos tantas pelo-menos aqui ali lá hoje ontem já ' +
    'seguinte seguintes anterior anteriores posterior posteriores geral gerais próprio própria próprios próprias determinado determinada determinados determinadas').split(' ');
  var STOP = Object.create(null);
  PARADA.forEach(function (w) { STOP[w] = 1; });

  var LETRA = 'A-Za-zÀ-ÖØ-öø-ÿ';
  var RE_TOKEN = new RegExp('\\d+(?:[.,]\\d+)*%?|[' + LETRA + ']+(?:-[' + LETRA + ']+)*', 'g');
  var ABREV = /(?:^|\s)(?:art|arts|dr|dra|sr|sra|prof|profa|cf|ex|etc|fig|vol|inc|par|obs|av|p|pp|nº|n|v|min|máx|aprox|séc|ed|org|op|cit|ibid|apud|us|rs|a\.c|d\.c)\.$/i;

  function rng(semente) { // mulberry32: mesma semente, mesmo resultado
    var a = semente >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      var t = a;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function embaralhar(lista, rand) {
    var l = lista.slice();
    for (var i = l.length - 1; i > 0; i--) { var j = Math.floor(rand() * (i + 1)), t = l[i]; l[i] = l[j]; l[j] = t; }
    return l;
  }
  function minus(s) { return s.toLocaleLowerCase('pt-BR'); }
  function maiuscula(s) { return s.charAt(0).toLocaleUpperCase('pt-BR') + s.slice(1); }

  // ---------- Frases ----------
  function limparTexto(t) {
    return String(t || '').replace(/\r\n?/g, '\n').replace(/[­​]/g, '').replace(/-\n(?=[a-zà-ú])/g, '').replace(/[ \t ]+/g, ' ');
  }
  /* Divide em frases pelo ponto final, sem quebrar em abreviações ("art. 5º", "p. 10") nem em números ("3.5"). */
  function dividirFrases(paragrafo) {
    var partes = paragrafo.split(/(?<=[.!?;])\s+(?=[A-ZÀ-ÖØ-Þ0-9“"(])/), out = [];
    partes.forEach(function (p) {
      var ult = out[out.length - 1];
      if (ult && ABREV.test(ult)) out[out.length - 1] = ult + ' ' + p; else out.push(p);
    });
    return out.map(function (s) { return s.replace(/\s+/g, ' ').trim(); }).filter(Boolean);
  }
  /* Frase informativa: tamanho razoável, afirmativa, sem lixo de extração, sem lista solta, sem excesso de números. */
  function boaFrase(s) {
    if (s.length < 50 || s.length > 260) return false;
    var palavras = s.split(' ').length;
    if (palavras < 8 || palavras > 40) return false;
    if (/[?:]|\.{3,}|…|https?:|www\.|@/.test(s)) return false;
    if (/[\u0000-\u001f�■□▪•●◦|{}\[\]<>_~^\\*#=]/.test(s)) return false;
    if (/^(?:[-–—•*]|\(?[a-zA-Z0-9]{1,3}[).]\s|[IVXLC]+\s*[-–.)]\s)/.test(s)) return false;
    if (!/[.!;]["”)]?$/.test(s) || !/^["“(]?[A-ZÀ-ÖØ-Þ0-9]/.test(s)) return false;
    var letras = (s.match(new RegExp('[' + LETRA + ']', 'g')) || []).length, digitos = (s.match(/\d/g) || []).length;
    if (letras < s.length * 0.7 || digitos > s.length * 0.15 || (s.match(/\d+(?:[.,]\d+)*/g) || []).length > 4) return false;
    var maiusc = (s.match(/[A-ZÀ-ÖØ-Þ]/g) || []).length;
    if (maiusc > letras * 0.3) return false;
    // número de sumário ou de seção ("8.2.2", "1.10") e remissão ("veja o capítulo 3") não fazem sentido sem a página
    if (/\b\d{1,2}(?:\.\d{1,2}){1,3}\b/.test(s) || /\b(?:cap[ií]tulo|se[cç][aã]o|tabela|figura|quadro|p[aá]gina|p[aá]g|anexo|item|exerc[ií]cio)\s+\d/i.test(s)) return false;
    // dedicatória, agradecimento, ficha do livro: não é conteúdo de estudo
    if (/dedic|agradec|agrade[cç]|copyright|direitos reservados|isbn|editora|ficha catalogr|sum[aá]rio|pref[aá]cio|apresenta[cç][aã]o d[oa] (?:livro|obra)/i.test(s)) return false;
    if (/\b(?:meu|minha|meus|minhas|eu|comigo)\b/i.test(s)) return false;
    return true;
  }

  /* trechos: [{ titulo (documento), local (página/capítulo), texto }] -> [{ texto, local, titulo, paragrafo }] */
  function frases(trechos) {
    var out = [];
    trechos.forEach(function (t) {
      limparTexto(t.texto).split(/\n{2,}/).forEach(function (par) {
        var p = par.replace(/\s*\n\s*/g, ' ').trim();
        if (!p) return;
        dividirFrases(p).forEach(function (s) { out.push({ texto: s, local: t.local || '', titulo: t.titulo || '', paragrafo: p }); });
      });
    });
    return out;
  }

  // ---------- Termos-chave ----------
  function classe(tok, indice) {
    if (/^\d/.test(tok)) return /^\d{2,}|[.,%]/.test(tok) ? 'numero' : '';
    var min = minus(tok);
    if (STOP[min]) return '';
    if (/^[A-ZÀ-ÖØ-Þ]{2,6}$/.test(tok)) return 'sigla';
    if (/^[A-ZÀ-ÖØ-Þ]/.test(tok)) return indice > 0 && tok.length >= 4 ? 'proprio' : '';
    if (tok.length < 7 || /mente$/.test(min)) return '';
    if (/-(?:o|a|os|as|lo|la|los|las|se|me|te|nos|lhe|lhes)$/.test(min)) return ''; // verbo com pronome ("aproximá-lo")
    if (/(?:ar|er|ir|ndo|ado|ido|ados|idos|ada|ida|adas|idas|ou|aram|eram|iram|avam|ará|erá|irá|asse|ssem)$/.test(min) && !/(?:ção|são|dade|ismo|ista|ência|ância|mento|logia|tura|eiro|ório)$/.test(min)) return '';
    return 'termo';
  }
  function tokens(texto) {
    var out = [], m, i = 0;
    RE_TOKEN.lastIndex = 0;
    while ((m = RE_TOKEN.exec(texto))) { out.push({ tok: m[0], ini: m.index, fim: m.index + m[0].length, cls: classe(m[0], i), i: i }); i++; }
    return out;
  }
  function contar(texto, tok) {
    var re = new RegExp('(?:^|[^' + LETRA + '0-9])' + tok.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?![' + LETRA + '0-9])', 'gi');
    return (texto.match(re) || []).length;
  }
  function forma(tok) { return /%$/.test(tok) ? 'p' : /[.,]/.test(tok) ? 'd' : 'i'; }
  var BONUS = /(?:ção|são|dade|ismo|ista|ência|ância|mento|logia|tura|eiro|ório)$/;

  /* Pools de distratores (do documento inteiro) e frequência de cada termo. */
  function mapa(lista, boas) {
    var freq = Object.create(null), pool = { numero: Object.create(null), sigla: Object.create(null), proprio: Object.create(null), termo: Object.create(null) };
    lista.forEach(function (f) {
      tokens(f.texto).forEach(function (t) {
        var k = minus(t.tok);
        freq[k] = (freq[k] || 0) + 1;
      });
    });
    // distratores só de frases boas: o lixo da extração (títulos em caixa alta, números de página) não entra
    boas.forEach(function (f) {
      tokens(f.texto).forEach(function (t) { var k = minus(t.tok); if (t.cls && !pool[t.cls][k]) pool[t.cls][k] = t.tok; });
    });
    return { freq: freq, pool: pool };
  }

  /* Candidatos de uma frase: termos que aparecem uma única vez nela, com nota (repetição no documento pesa). */
  function candidatos(f, mp) {
    var peso = { sigla: 4, proprio: 3, numero: 2.5, termo: 2 };
    return tokens(f.texto).filter(function (t) { return t.cls && contar(f.texto, t.tok) === 1; }).map(function (t) {
      var k = minus(t.tok), rep = Math.min(mp.freq[k] || 1, 6);
      return { tok: t.tok, ini: t.ini, fim: t.fim, cls: t.cls, nota: peso[t.cls] + rep * 1.5 + (t.cls === 'termo' && BONUS.test(k) ? 2 : 0) };
    }).sort(function (a, b) { return b.nota - a.nota; });
  }

  /* n distratores do mesmo tipo e tamanho, que não aparecem na frase. Devolve null se o documento não tiver o bastante. */
  function distratores(c, f, mp, n, rand) {
    var certo = minus(c.tok), fl = minus(f.paragrafo || f.texto), prefixo = function (k) { return k.slice(0, 5); };
    var cand = Object.keys(mp.pool[c.cls]).filter(function (k) {
      if (k === certo || fl.indexOf(k) >= 0) return false;
      if (c.cls === 'numero') return forma(mp.pool.numero[k]) === forma(c.tok);
      // mesma classe: sigla com sigla, nome próprio com nome próprio, e termo no mesmo número (singular/plural) do certo
      return prefixo(k) !== prefixo(certo) && (c.cls !== 'termo' || /s$/.test(k) === /s$/.test(certo));
    }).map(function (k) { return { k: k, v: mp.pool[c.cls][k], d: Math.abs(k.length - certo.length) + rand() * 3 }; })
      .sort(function (a, b) { return a.d - b.d; });
    var esc = [];
    cand.forEach(function (x) {
      if (esc.length < n && !esc.some(function (e) { return c.cls !== 'numero' && prefixo(minus(e)) === prefixo(x.k); })) esc.push(x.v);
    });
    return esc.length === n ? esc : null;
  }

  function origem(f) { return (f.titulo ? f.titulo : 'Documento') + (f.local ? ', ' + f.local : ''); }
  function explicacao(f, extra) {
    return {
      resumo: (extra ? extra + ' ' : '') + 'Trecho original: "' + f.texto + '" (' + origem(f) + ').',
      detalhada: (extra ? extra + '\n\n' : '') + 'Trecho original (' + origem(f) + '):\n\n' + f.paragrafo.slice(0, 1500)
    };
  }

  /* Intercala as listas (uma por seção) para o material sair espalhado pelo trecho escolhido. */
  function intercalar(grupos) {
    var out = [], i = 0, mais = true;
    while (mais) { mais = false; grupos.forEach(function (g) { if (g[i]) { out.push(g[i]); mais = true; } }); i++; }
    return out;
  }
  function porSecao(lista) {
    var g = Object.create(null), ordem = [];
    lista.forEach(function (f) { var k = f.titulo + '\u0000' + f.local; if (!g[k]) { g[k] = []; ordem.push(g[k]); } g[k].push(f); });
    return ordem;
  }

  // ---------- Tipos ----------
  function lacunas(fs, mp, n, alternativas, rand) {
    // frases com melhor termo primeiro, espalhadas pelas seções
    var ordenadas = fs.map(function (f) { var c = candidatos(f, mp)[0]; return { f: f, nota: c ? c.nota : 0 }; })
      .filter(function (x) { return x.nota; }).sort(function (a, b) { return b.nota - a.nota; }).map(function (x) { return x.f; });
    var out = [];
    intercalar(porSecao(ordenadas)).forEach(function (f) {
      if (out.length >= n) return;
      // tenta os candidatos da frase em ordem, até achar um com distratores suficientes
      var cs = candidatos(f, mp), c = null, d = null;
      for (var i = 0; i < cs.length && !d; i++) { d = distratores(cs[i], f, mp, alternativas - 1, rand); if (d) c = cs[i]; }
      if (!d) return;
      var alts = embaralhar([c.tok].concat(d), rand), enunciado = f.texto.slice(0, c.ini) + '________' + f.texto.slice(c.fim);
      out.push({
        tipo: 'multipla', enunciado: 'De acordo com o texto, assinale a alternativa que completa corretamente a lacuna:\n\n' + enunciado,
        alternativas: alts, resposta: alts.indexOf(c.tok), explicacao: explicacao(f, 'Resposta: ' + c.tok + '.'), local: f.local
      });
    });
    return out;
  }

  function certoErrado(fs, mp, n, rand) {
    var falsos = Math.floor(n / 2), out = [], usadas = new Set();
    var ordem = intercalar(porSecao(embaralhar(fs, rand)));
    // errados: troca um termo por outro do mesmo tipo tirado do documento
    ordem.forEach(function (f) {
      if (out.length >= falsos) return;
      var cs = candidatos(f, mp);
      for (var i = 0; i < cs.length; i++) {
        var d = distratores(cs[i], f, mp, 1, rand);
        if (!d) continue;
        var errada = f.texto.slice(0, cs[i].ini) + d[0] + f.texto.slice(cs[i].fim);
        out.push({ tipo: 'certo-errado', enunciado: errada, resposta: false, local: f.local,
          explicacao: explicacao(f, 'Item errado: o termo "' + d[0] + '" substituiu "' + cs[i].tok + '".') });
        usadas.add(f);
        return;
      }
    });
    ordem.forEach(function (f) {
      if (out.length >= n || usadas.has(f)) return;
      out.push({ tipo: 'certo-errado', enunciado: f.texto, resposta: true, local: f.local, explicacao: explicacao(f, 'Item certo.') });
      usadas.add(f);
    });
    return embaralhar(out, rand);
  }

  // Frases de definição -> { frente: termo, verso: definição }.
  var DEF = [
    [/^(?:denomina|chama)-se\s+(.{2,60}?)\s+(?:o|a|os|as|aquele|aquela|todo|toda|quando|quem)\s+(.+)$/i, 1, 2],
    [/^(.{12,}?),?\s+(?:denomina|chama|designa)(?:m)?-se\s+(.{2,60}?)[.;]?$/i, 2, 1],
    [/^entende-se\s+por\s+(.{2,60}?)\s+(?:o|a|os|as|aquele|aquela|todo|toda|quando|que|como|um|uma)\s+(.+)$/i, 1, 2],
    [/^define-se\s+(.{2,60}?)\s+como\s+(.+)$/i, 1, 2],
    [/^(.{2,60}?)\s+(?:define-se|é definid[oa]|são definid[oa]s)\s+como\s+(.+)$/i, 1, 2],
    [/^(.{2,60}?)\s+consiste\s+(?:em|na|no|nos|nas)\s+(.+)$/i, 1, 2],
    [/^((?:[AO]s?|Um|Uma)\s+[^,]{2,50}?|[A-ZÀ-ÖØ-Þ][^,]{1,40}?)\s+(?:é|são)\s+(?:um|uma|o|a|os|as|uns|umas)\s+(.+)$/, 1, 2]
  ];
  var PRONOME = /^(?:isso|isto|ele|ela|eles|elas|este|esta|esse|essa|aquele|aquela|quando|se|como|que|quem|onde|porque|pois|mas|e|ou|então|assim)\b/i;
  function cartoes(fs, n, rand) {
    var out = [], vistos = Object.create(null);
    intercalar(porSecao(fs)).forEach(function (f) {
      if (out.length >= n || f.texto.length > 400) return;
      var s = f.texto.replace(/[.;]$/, '');
      for (var i = 0; i < DEF.length; i++) {
        var m = DEF[i][0].exec(s);
        if (!m) continue;
        var x = m[DEF[i][1]].replace(/^[,\s]+|[,\s]+$/g, ''), y = m[DEF[i][2]].replace(/^[,\s]+|[,\s]+$/g, '');
        if (x.split(' ').length > 7 || y.split(' ').length < 4 || PRONOME.test(x) || /[?]/.test(x + y) || vistos[minus(x)]) continue;
        vistos[minus(x)] = 1;
        out.push({ frente: maiuscula(x.replace(/^(?:os?|as?|uns?|umas?)\s+(?=\S)/i, '')), verso: maiuscula(y) + '.\n\nFonte: ' + origem(f) + '.', local: f.local });
        return;
      }
    });
    return embaralhar(out, rand);
  }

  /* Ponto de entrada. opcoes: { tipo: 'lacuna5' | 'lacuna4' | 'certo-errado' | 'cartoes', quantidade, semente }.
     Devolve { itens, avisos, pedidas }; itens são questões ({ tipo, enunciado, alternativas?, resposta, explicacao, local })
     ou cartões ({ frente, verso, local }). Gera menos que o pedido, e avisa, quando o texto não sustenta. */
  function gerar(trechos, opcoes) {
    var tipo = opcoes.tipo, n = Math.max(1, Math.min(50, Math.floor(opcoes.quantidade) || 1)), rand = rng(opcoes.semente == null ? Date.now() : opcoes.semente);
    var todas = frases(trechos), boas = todas.filter(function (f) { return boaFrase(f.texto); }), vistas = Object.create(null);
    boas = boas.filter(function (f) { var k = minus(f.texto); if (vistas[k]) return false; vistas[k] = 1; return true; });
    var mp = mapa(todas, boas), itens, avisos = [];
    if (tipo === 'lacuna5') itens = lacunas(boas, mp, n, 5, rand);
    else if (tipo === 'lacuna4') itens = lacunas(boas, mp, n, 4, rand);
    else if (tipo === 'certo-errado') itens = certoErrado(boas, mp, n, rand);
    else if (tipo === 'cartoes') itens = cartoes(todas.filter(function (f) { return f.texto.length >= 30 && !/\?/.test(f.texto); }), n, rand);
    else throw new Error('tipo desconhecido: ' + tipo);
    if (tipo === 'certo-errado' && itens.length) {
      var errados = itens.filter(function (q) { return !q.resposta; }).length;
      if (errados < Math.floor(itens.length / 2)) avisos.push('Só foi possível montar ' + errados + ' item(ns) errado(s): faltaram termos parecidos no texto para trocar.');
    }
    if (itens.length < n) {
      var base = tipo === 'cartoes' ? 'O app procura frases de definição, como "X é Y", "consiste em" e "denomina-se".' : 'O app usa frases completas, de tamanho normal, com palavras que aparecem em outras partes do texto (sem listas, sumário, perguntas ou números soltos).';
      avisos.push(itens.length ? 'Você pediu ' + n + ', mas o texto escolhido só deu para montar ' + itens.length + '. Escolha uma parte maior ou diminua a quantidade.'
        : 'Não consegui montar nada com esse texto: ' + (tipo === 'cartoes' ? 'não achei definições. ' : 'achei só ' + boas.length + ' frase(s) que servem. ') + base + ' Um texto de pelo menos uma página costuma funcionar; escolha outra parte ou envie um texto maior.');
    }
    return { itens: itens, avisos: avisos, pedidas: n, frasesBoas: boas.length };
  }

  var Gerador = { gerar: gerar, frases: frases, boaFrase: boaFrase, dividirFrases: dividirFrases, TIPOS: ['lacuna5', 'lacuna4', 'certo-errado', 'cartoes'] };
  if (typeof module !== 'undefined' && module.exports) module.exports = Gerador;
  else root.Gerador = Gerador;
})(this);
