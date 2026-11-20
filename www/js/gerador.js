/* Gerador: monta questões e cartões a partir de texto, por regras (sem rede). Escolhe frases informativas,
   esconde um termo-chave e tira os distratores do próprio documento. Nada é inventado: toda explicação cita a
   frase original e o lugar de onde veio. Sem DOM, testado no Node.
   Com um modelo (opcoes.modelo, de Aprendizado.criarModelo) o termo escondido vem da nota TF-IDF, os distratores são os mais
   parecidos pelo cosseno dos vetores de palavras, e as perguntas saem ordenadas pelo classificador que aprendeu com a revisão. */
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

  /* Execução em pedaços: com T ({ ate }), os laços cedem a vez a cada ~30 ms (gerarAsync), para a tela não travar em texto grande;
     sem T (gerar, testes no Node) rodam direto. fn devolve false para parar. */
  function vencido(T) { return !!T && Date.now() > T.ate; }
  function correr(g) { var r = g.next(); while (!r.done) r = g.next(); return r.value; }
  function* cada(lista, T, fn) {
    for (var i = 0; i < lista.length; i++) { if (fn(lista[i], i) === false) return; if (vencido(T)) yield; }
  }

  /* trechos: [{ titulo (documento), local (página/capítulo), texto }] -> [{ texto, local, titulo, paragrafo }] */
  function* frasesG(trechos, T) {
    var pars = [], out = [];
    trechos.forEach(function (t) {
      limparTexto(t.texto).split(/\n{2,}/).forEach(function (par) { var p = par.replace(/\s*\n\s*/g, ' ').trim(); if (p) pars.push({ t: t, p: p }); });
    });
    yield* cada(pars, T, function (x) {
      dividirFrases(x.p).forEach(function (s) { out.push({ texto: s, local: x.t.local || '', titulo: x.t.titulo || '', paragrafo: x.p }); });
    });
    return out;
  }
  function frases(trechos) { return correr(frasesG(trechos, null)); }

  // ---------- Termos-chave ----------
  /* Palavras que nunca são o conceito da frase: rótulos de banca ("(Cespe/UnB)"), palavras de enunciado ("CERTA", "CAUSA") e
     nomes de pessoas dos exemplos ("Lucas", "Márcia"). Algarismo romano solto ("II") também não. */
  var RUIDO = Object.create(null);
  ('cespe unb cebraspe cesgranrio fgv fcc vunesp enem oab inep idecan ibfc quadrix consulplan funcab fumarc esaf aocp ' +
    'certa certo errada errado causa julgue assinale falso verdadeiro correta incorreta resposta gabarito questao exercicio exemplo solucao ' +
    'lucas pedro marcia joao maria jose ana paulo carlos marcos gustavo fernanda juliana rafael bruno camila patricia roberto ricardo luciana ' +
    'fabio andre rodrigo felipe tiago thiago mariana beatriz daniel eduardo renata sandra vanessa antonio francisco luiz luis sergio claudia ' +
    'adriana leandro diego vitor victor gabriel larissa amanda bianca helena laura julia sabrina marcelo alexandre alberto henrique').split(' ')
    .forEach(function (w) { RUIDO[w] = 1; });
  var ROMANO = /^(?=[IVXLCDM]+$)M{0,3}(?:CM|CD|D?C{0,3})(?:XC|XL|L?X{0,3})(?:IX|IV|V?I{0,3})$/;
  function classe(tok, indice) {
    if (/^\d/.test(tok)) return /^\d{2,}|[.,%]/.test(tok) ? 'numero' : '';
    var min = minus(tok);
    if (STOP[min] || RUIDO[min.normalize('NFD').replace(/[̀-ͯ]/g, '')] || ROMANO.test(tok)) return '';
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
  function forma(tok) { return /%$/.test(tok) ? 'p' : /[.,]/.test(tok) ? 'd' : 'i'; }
  var BONUS = /(?:ção|são|dade|ismo|ista|ência|ância|mento|logia|tura|eiro|ório)$/;

  /* Pools de distratores (do documento inteiro) e frequência de cada termo. */
  function* mapaG(lista, boas, modelo, T) {
    var freq = Object.create(null), pool = { numero: Object.create(null), sigla: Object.create(null), proprio: Object.create(null), termo: Object.create(null) };
    yield* cada(lista, T, function (f) {
      tokens(f.texto).forEach(function (t) { var k = minus(t.tok); freq[k] = (freq[k] || 0) + 1; });
    });
    // distratores só de frases boas: o lixo da extração (títulos em caixa alta, números de página) não entra
    yield* cada(boas, T, function (f) {
      tokens(f.texto).forEach(function (t) { var k = minus(t.tok); if (t.cls && !pool[t.cls][k]) pool[t.cls][k] = t.tok; });
    });
    return { freq: freq, pool: pool, modelo: modelo || null };
  }

  /* Candidatos de uma frase: termos que aparecem uma única vez nela, com nota. Com modelo, a nota é o TF-IDF (quanto o termo se repete
     no texto escolhido x quão raro ele é na base e nos textos da pessoa); número vale menos, porque é raro em qualquer texto.
     Nome entre parênteses ("(Cespe/UnB)", "(Gustavo)") é rótulo, não conceito: só termos comuns valem ali. */
  var PESO_TFIDF = { sigla: 1, proprio: 1, numero: 0.6, termo: 1 };
  function candidatos(f, mp) {
    var peso = { sigla: 4, proprio: 3, numero: 2.5, termo: 2 }, toks = tokens(f.texto), vezes = Object.create(null);
    toks.forEach(function (t) { var k = minus(t.tok); vezes[k] = (vezes[k] || 0) + 1; });
    return toks.filter(function (t) {
      return t.cls && vezes[minus(t.tok)] === 1 && !(t.cls !== 'termo' && /\([^()]*$/.test(f.texto.slice(Math.max(0, t.ini - 40), t.ini)));
    }).map(function (t) {
      var k = minus(t.tok), rep = Math.min(mp.freq[k] || 1, 6);
      var nota = mp.modelo ? mp.modelo.tfidf(k, mp.freq[k] || 1) * PESO_TFIDF[t.cls] : peso[t.cls] + rep * 1.5 + (t.cls === 'termo' && BONUS.test(k) ? 2 : 0);
      return { tok: t.tok, ini: t.ini, fim: t.fim, cls: t.cls, nota: nota };
    }).sort(function (a, b) { return b.nota - a.nota; });
  }

  /* n distratores do mesmo tipo, que não aparecem na frase. Devolve null se o documento não tiver o bastante.
     Sem modelo: os de tamanho mais parecido. Com modelo: os de maior cosseno com o termo certo (os mais plausíveis), com um sorteio
     pequeno para as perguntas não repetirem sempre as mesmas alternativas; palavra sem vetor só entra se faltar com vetor.
     Cosseno a partir de LIM_SINONIMO é quase a mesma palavra no mesmo contexto (cabe na frase, a pergunta ficaria com duas certas).
     O resultado traz .sim, a semelhança média dos escolhidos com o certo (0 se o modelo não conhece as palavras). */
  var LIM_SINONIMO = 0.85;
  function distratores(c, f, mp, n, rand) {
    var certo = minus(c.tok), fl = minus(f.paragrafo || f.texto), prefixo = function (k) { return k.slice(0, 5); }, m = mp.modelo;
    var cand = Object.keys(mp.pool[c.cls]).filter(function (k) {
      if (k === certo || fl.indexOf(k) >= 0) return false;
      if (c.cls === 'numero') return forma(mp.pool.numero[k]) === forma(c.tok);
      // mesma classe: sigla com sigla, nome próprio com nome próprio, e termo no mesmo número (singular/plural) do certo
      return prefixo(k) !== prefixo(certo) && (c.cls !== 'termo' || /s$/.test(k) === /s$/.test(certo));
    }).map(function (k) {
      var sim = m && c.cls !== 'numero' ? m.similaridade(certo, k) : null, dl = Math.abs(k.length - certo.length);
      // d menor = melhor
      return { k: k, v: mp.pool[c.cls][k], sim: sim, d: !m ? dl + rand() * 3 : sim == null ? 2 + dl * 0.05 + rand() : -(sim - dl * 0.01 + rand() * 0.15) };
    }).filter(function (x) { return x.sim == null || x.sim < LIM_SINONIMO; })
      .sort(function (a, b) { return a.d - b.d; });
    var esc = [], sims = [];
    cand.forEach(function (x) {
      if (esc.length < n && !esc.some(function (e) { return c.cls !== 'numero' && prefixo(minus(e)) === prefixo(x.k); })) { esc.push(x.v); if (x.sim != null) sims.push(x.sim); }
    });
    esc.sim = sims.length ? sims.reduce(function (s, x) { return s + x; }, 0) / sims.length : 0;
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
  /* Atributos de uma pergunta de lacuna, todos de 0 a 1 e fáceis de explicar: é o que o classificador enxerga. */
  var ATRIBUTOS = ['tamanho da frase', 'termo é sigla', 'termo é nome próprio', 'termo é número', 'nota TF-IDF do termo',
    'semelhança dos distratores', 'posição no texto', 'frase isolada (título ou item de lista)', 'tem número na frase'];
  function atributos(f, c, d) {
    return [Math.min(1, f.texto.length / 260), c.cls === 'sigla' ? 1 : 0, c.cls === 'proprio' ? 1 : 0, c.cls === 'numero' ? 1 : 0,
      Math.min(1, c.nota / 20), d.sim, f.pos || 0, f.paragrafo === f.texto ? 1 : 0, /\d/.test(f.texto) ? 1 : 0]
      .map(function (v) { return Math.round(v * 1000) / 1000; });
  }
  // Identifica uma frase sem guardá-la (32 bits bastam para lembrar quais frases já viraram pergunta).
  function hash(t) { var h = 5381; for (var i = 0; i < t.length; i++) h = ((h * 33) ^ t.charCodeAt(i)) >>> 0; return h.toString(36); }
  /* Gera até 3 vezes o pedido e, havendo classificador (mp.modelo.classificador), fica com as de maior probabilidade de a
     pessoa aprovar. Sem classificador, são as primeiras n, espalhadas pelas seções. Numa mesma geração a resposta certa e o
     conjunto de alternativas não se repetem. */
  function* lacunasG(fs, mp, n, alternativas, rand, T) {
    var ordenar = !!(mp.modelo && mp.modelo.classificador), limite = ordenar ? Math.min(3 * n, 60) : n;
    // frases com melhor termo primeiro, espalhadas pelas seções
    var cache = new Map(), cands = function (f) { if (!cache.has(f)) cache.set(f, candidatos(f, mp)); return cache.get(f); }; // cada frase é analisada uma vez só
    var pont = [];
    yield* cada(fs, T, function (f) { var c = cands(f)[0]; if (c && c.nota) pont.push({ f: f, nota: c.nota }); });
    var ordenadas = pont.sort(function (a, b) { return b.nota - a.nota; }).map(function (x) { return x.f; });
    var out = [], respostas = Object.create(null), conjuntos = Object.create(null);
    yield* cada(intercalar(porSecao(ordenadas)), T, function (f) {
      if (out.length >= limite) return false;
      // tenta os candidatos da frase em ordem, até achar um com distratores suficientes
      var cs = cands(f), c = null, d = null, chave;
      for (var i = 0; i < cs.length && !d; i++) {
        if (respostas[minus(cs[i].tok)]) continue;
        d = distratores(cs[i], f, mp, alternativas - 1, rand);
        chave = d && [cs[i].tok].concat(d).map(minus).sort().join('|');
        if (d && conjuntos[chave]) d = null;
        if (d) c = cs[i];
      }
      if (!d) return;
      respostas[minus(c.tok)] = 1; conjuntos[chave] = 1;
      var alts = embaralhar([c.tok].concat(d), rand), enunciado = f.texto.slice(0, c.ini) + '________' + f.texto.slice(c.fim);
      out.push({
        tipo: 'multipla', enunciado: 'De acordo com o texto, assinale a alternativa que completa corretamente a lacuna:\n\n' + enunciado,
        alternativas: alts, resposta: alts.indexOf(c.tok), explicacao: explicacao(f, 'Resposta: ' + c.tok + '.'), local: f.local,
        h: hash(minus(f.texto)), ml: { x: atributos(f, c, d) }
      });
    });
    if (!ordenar) return out;
    out.forEach(function (q) { q.ml.p = mp.modelo.probabilidade(q.ml.x); });
    return out.sort(function (a, b) { return b.ml.p - a.ml.p; }).slice(0, n);
  }

  function* certoErradoG(fs, mp, n, rand, T) {
    var falsos = Math.floor(n / 2), out = [], usadas = new Set();
    var ordem = intercalar(porSecao(embaralhar(fs, rand)));
    // errados: troca um termo por outro do mesmo tipo tirado do documento
    yield* cada(ordem, T, function (f) {
      if (out.length >= falsos) return false;
      var cs = candidatos(f, mp);
      for (var i = 0; i < cs.length; i++) {
        var d = distratores(cs[i], f, mp, 1, rand);
        if (!d) continue;
        var errada = f.texto.slice(0, cs[i].ini) + d[0] + f.texto.slice(cs[i].fim);
        out.push({ tipo: 'certo-errado', enunciado: errada, resposta: false, local: f.local, h: hash(minus(f.texto)),
          explicacao: explicacao(f, 'Item errado: o termo "' + d[0] + '" substituiu "' + cs[i].tok + '".') });
        usadas.add(f);
        return;
      }
    });
    ordem.forEach(function (f) {
      if (out.length >= n || usadas.has(f)) return;
      out.push({ tipo: 'certo-errado', enunciado: f.texto, resposta: true, local: f.local, h: hash(minus(f.texto)), explicacao: explicacao(f, 'Item certo.') });
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

  /* Ponto de entrada. opcoes: { tipo: 'lacuna5' | 'lacuna4' | 'certo-errado' | 'cartoes', quantidade, semente, modelo (opcional) }.
     Devolve { itens, avisos, pedidas }; itens são questões ({ tipo, enunciado, alternativas?, resposta, explicacao, local })
     ou cartões ({ frente, verso, local }). Gera menos que o pedido, e avisa, quando o texto não sustenta. */
  function* passos(trechos, opcoes, T) {
    var tipo = opcoes.tipo, n = Math.max(1, Math.min(50, Math.floor(opcoes.quantidade) || 1)), rand = rng(opcoes.semente == null ? Date.now() : opcoes.semente);
    if (Gerador.TIPOS.indexOf(tipo) < 0) throw new Error('tipo desconhecido: ' + tipo);
    var todas = yield* frasesG(trechos, T), boas = [], vistas = Object.create(null), evitar = opcoes.evitar, evitadas = 0;
    yield* cada(todas, T, function (f) { if (boaFrase(f.texto)) boas.push(f); });
    // frase repetida no texto, ou que já virou pergunta numa geração anterior (opcoes.evitar: conjunto de hash), fica de fora
    boas = boas.filter(function (f) {
      var k = minus(f.texto);
      if (vistas[k]) return false;
      vistas[k] = 1;
      if (evitar && evitar.has(hash(k))) { evitadas++; return false; }
      return true;
    });
    boas.forEach(function (f, i) { f.pos = boas.length > 1 ? i / (boas.length - 1) : 0; });
    var mp = yield* mapaG(todas, boas, opcoes.modelo, T), itens, avisos = [];
    if (tipo === 'lacuna5') itens = yield* lacunasG(boas, mp, n, 5, rand, T);
    else if (tipo === 'lacuna4') itens = yield* lacunasG(boas, mp, n, 4, rand, T);
    else if (tipo === 'certo-errado') itens = yield* certoErradoG(boas, mp, n, rand, T);
    else itens = cartoes(todas.filter(function (f) { return f.texto.length >= 30 && !/\?/.test(f.texto); }), n, rand);
    if (tipo === 'certo-errado' && itens.length) {
      var errados = itens.filter(function (q) { return !q.resposta; }).length;
      if (errados < Math.floor(itens.length / 2)) avisos.push('Só foi possível montar ' + errados + ' item(ns) errado(s): faltaram termos parecidos no texto para trocar.');
    }
    if (itens.length < n) {
      var base = tipo === 'cartoes' ? 'O app procura frases de definição, como "X é Y", "consiste em" e "denomina-se".' : 'O app usa frases completas, de tamanho normal, com palavras que aparecem em outras partes do texto (sem listas, sumário, perguntas ou números soltos).';
      avisos.push(itens.length ? 'Você pediu ' + n + ', mas o texto escolhido só deu para montar ' + itens.length + '. Escolha uma parte maior ou diminua a quantidade.'
        : 'Não consegui montar nada com esse texto: ' + (tipo === 'cartoes' ? 'não achei definições. ' : 'achei só ' + boas.length + ' frase(s) que servem. ') + base + ' Um texto de pelo menos uma página costuma funcionar; escolha outra parte ou envie um texto maior.');
      if (evitadas) avisos.push(evitadas + ' frase(s) deste trecho já viraram pergunta em criações anteriores e ficaram de fora, para não repetir. Escolha outra parte do texto para ter mais.');
    }
    return { itens: itens, avisos: avisos, pedidas: n, frasesBoas: boas.length, evitadas: evitadas,
      usadas: itens.filter(function (q) { return q.h; }).map(function (q) { return q.h; }),
      ordenadoPorClassificador: !!(mp.modelo && mp.modelo.classificador && /^lacuna/.test(tipo)) };
  }
  function gerar(trechos, opcoes) { return correr(passos(trechos, opcoes, null)); }
  /* Igual a gerar, mas devolve uma promessa e cede a vez ao navegador a cada ~30 ms: texto grande não trava a tela. */
  function gerarAsync(trechos, opcoes, medida) {
    return new Promise(function (ok, falha) {
      var T = { ate: 0 }, it = passos(trechos, opcoes, T);
      (function rodar() {
        var t0 = Date.now(), r;
        T.ate = t0 + 30;
        try { r = it.next(); } catch (e) { falha(e); return; }
        if (medida) medida(Date.now() - t0);
        if (r.done) ok(r.value); else setTimeout(rodar, 0);
      })();
    });
  }

  var Gerador = { gerar: gerar, gerarAsync: gerarAsync, hash: hash, frases: frases, boaFrase: boaFrase, dividirFrases: dividirFrases, TIPOS: ['lacuna5', 'lacuna4', 'certo-errado', 'cartoes'],
    PARADA: STOP, ATRIBUTOS: ATRIBUTOS };
  if (typeof module !== 'undefined' && module.exports) module.exports = Gerador;
  else root.Gerador = Gerador;
})(this);
