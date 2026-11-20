/* Aprendizado: machine learning clássico, no aparelho, em JavaScript puro (sem rede, sem biblioteca, sem serviço de fora).
   Peças pequenas e puras, testadas no Node (tests/aprendizado.test.js):
   - palavras, IDF e TF-IDF: quais termos de um texto o caracterizam;
   - vetores de palavras por coocorrência (PPMI reduzido por iteração de subespaço, uma SVD truncada) e cosseno;
   - regressão logística por gradiente descendente: aprende com o que a pessoa aprova ou descarta;
   - Elo com fator K decrescente: domínio da pessoa em cada assunto e dificuldade de cada questão, só pelas respostas dela;
   - intervalo da revisão espaçada e padrões de erro.
   Nada aqui lê ou grava: quem guarda os números é o app (store.js e aprende.js), separadamente para cada pessoa. */
(function (root) {
  'use strict';

  var limitar = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
  var sigmoide = function (z) { return 1 / (1 + Math.exp(-z)); };

  // ---------- Palavras, IDF e TF-IDF ----------
  var RE_PALAVRA = /[A-Za-zÀ-ÖØ-öø-ÿ]+/g;
  function semAcento(s) { return s.normalize('NFD').replace(/[̀-ͯ]/g, ''); }

  /* Palavras de conteúdo, em ordem: minúsculas, sem acento, sem as de 1 a 2 letras e sem as de ligação
     (parada: mapa de palavras minúsculas, com ou sem acento). */
  function palavras(texto, parada) {
    var out = [];
    (String(texto).match(RE_PALAVRA) || []).forEach(function (w) {
      w = w.toLowerCase();
      var k = semAcento(w);
      if (k.length < 3 || k.length > 30 || (parada && (parada[w] || parada[k]))) return;
      out.push(k);
    });
    return out;
  }
  // IDF suavizado: palavra em todo documento vale ~1; palavra rara vale mais.
  function idfDe(n, df) { return Math.log((n + 1) / (df + 1)) + 1; }
  function tfidf(freq, idf) { return freq > 0 ? (1 + Math.log(freq)) * idf : 0; }
  // Soma 1 ao df de cada palavra que aparece no documento (lista de palavras de UM documento), sem contar repetição.
  function somarDF(df, lista) {
    var vistas = Object.create(null);
    lista.forEach(function (w) { if (!vistas[w]) { vistas[w] = 1; df[w] = (df[w] || 0) + 1; } });
  }

  // ---------- Vetores de palavras ----------
  function cosseno(a, b) {
    if (!a || !b || a.length !== b.length) return 0;
    var p = 0, na = 0, nb = 0;
    for (var i = 0; i < a.length; i++) { p += a[i] * b[i]; na += a[i] * a[i]; nb += b[i] * b[i]; }
    return na && nb ? p / Math.sqrt(na * nb) : 0;
  }
  function normalizar(v) {
    var s = 0;
    v.forEach(function (x) { s += x * x; });
    s = Math.sqrt(s);
    return s ? v.map(function (x) { return x / s; }) : v;
  }
  // Soma ao mapa as coocorrências de cada palavra com as `janela` seguintes: chave "a b" com a < b.
  function coocorrencias(lista, janela, mapa) {
    for (var i = 0; i < lista.length; i++) {
      for (var j = i + 1; j < lista.length && j <= i + janela; j++) {
        var a = lista[i], b = lista[j];
        if (a === b) continue;
        var k = a < b ? a + ' ' + b : b + ' ' + a;
        mapa[k] = (mapa[k] || 0) + 1;
      }
    }
  }
  // Fica só com as `limite` maiores contagens (empate: ordem alfabética, para o resultado ser sempre o mesmo).
  function podar(mapa, limite) {
    var ks = Object.keys(mapa);
    if (ks.length <= limite) return mapa;
    ks.sort(function (a, b) { return mapa[b] - mapa[a] || (a < b ? -1 : 1); });
    ks.slice(limite).forEach(function (k) { delete mapa[k]; });
    return mapa;
  }
  /* PPMI (informação mútua pontual positiva): quanto duas palavras aparecem juntas além do esperado ao acaso.
     pares: "a b" -> contagem. Devolve palavra -> [[vizinha, ppmi]]. `permitida` limita as palavras consideradas. */
  function vizinhosPPMI(pares, permitida) {
    var marg = Object.create(null), total = 0, arestas = [], adj = Object.create(null);
    Object.keys(pares).forEach(function (k) {
      var s = k.indexOf(' '), a = k.slice(0, s), b = k.slice(s + 1), c = pares[k];
      if (permitida && (!permitida(a) || !permitida(b))) return;
      marg[a] = (marg[a] || 0) + c; marg[b] = (marg[b] || 0) + c; total += c;
      arestas.push([a, b, c]);
    });
    arestas.forEach(function (e) {
      var v = Math.log(e[2] * 2 * total / (marg[e[0]] * marg[e[1]]));
      if (v <= 0) return;
      (adj[e[0]] = adj[e[0]] || []).push([e[1], v]);
      (adj[e[1]] = adj[e[1]] || []).push([e[0], v]);
    });
    return adj;
  }
  // Gram-Schmidt nas colunas de Y (matriz em linhas).
  function ortonormalizar(Y, dim) {
    var n = Y.length, Q = Y.map(function (r) { return r.slice(); }), i, j, k, p, s;
    for (j = 0; j < dim; j++) {
      for (k = 0; k < j; k++) {
        p = 0; for (i = 0; i < n; i++) p += Q[i][k] * Q[i][j];
        for (i = 0; i < n; i++) Q[i][j] -= p * Q[i][k];
      }
      s = 0; for (i = 0; i < n; i++) s += Q[i][j] * Q[i][j];
      s = Math.sqrt(s) || 1;
      for (i = 0; i < n; i++) Q[i][j] /= s;
    }
    return Q;
  }
  /* Vetores de `dim` dimensões para as palavras de `vocab`: a matriz PPMI é projetada no seu subespaço dominante
     por iteração de subespaço (SVD truncada). Os vetores saem centrados (sem o componente comum a todas as palavras)
     e com tamanho 1. `rand` é um gerador de números em [0,1) com semente, para o resultado ser sempre o mesmo. */
  function vetoresPalavras(pares, vocab, dim, iteracoes, rand) {
    var idx = Object.create(null);
    vocab.forEach(function (w, i) { idx[w] = i; });
    var adj = vizinhosPPMI(pares, function (w) { return idx[w] !== undefined; });
    var linhas = vocab.map(function (w) { return (adj[w] || []).map(function (e) { return [idx[e[0]], e[1]]; }); });
    var multiplicar = function (Q) {
      return linhas.map(function (l) {
        var r = new Array(dim).fill(0);
        l.forEach(function (e) { var q = Q[e[0]]; for (var d = 0; d < dim; d++) r[d] += e[1] * q[d]; });
        return r;
      });
    };
    var Q = vocab.map(function () { var r = []; for (var d = 0; d < dim; d++) r.push(rand() - 0.5); return r; }), Y = Q;
    for (var it = 0; it < iteracoes; it++) { Y = multiplicar(Q); Q = ortonormalizar(Y, dim); }
    var media = new Array(dim).fill(0);
    Y.forEach(function (r) { for (var d = 0; d < dim; d++) media[d] += r[d] / Y.length; });
    return Y.map(function (r) { return normalizar(r.map(function (x, d) { return x - media[d]; })); });
  }
  /* Vetor de uma palavra que o modelo inicial não tem: soma dos vetores das palavras que aparecem perto dela
     nos textos da pessoa, pesada pelo PPMI. vizinhos: [[palavra, ppmi]]. */
  function vetorPorVizinhos(vizinhos, vetorDe) {
    var soma = null;
    (vizinhos || []).forEach(function (e) {
      var v = vetorDe(e[0]);
      if (!v) return;
      soma = soma || new Array(v.length).fill(0);
      for (var d = 0; d < v.length; d++) soma[d] += e[1] * v[d];
    });
    return soma && normalizar(soma);
  }

  /* Modelo inicial gravado por tools/modelo.js (igual para todos): { N, df: "palavra:n ...", vp: "palavras com vetor",
     dim, vet: base64 de bytes com sinal (cada número x127) }. */
  function lerBase(raw) {
    var df = Object.create(null), linha = Object.create(null), bin = atob(raw.vet), vet = new Int8Array(bin.length);
    String(raw.df).split(' ').forEach(function (p) { var s = p.lastIndexOf(':'); if (s > 0) df[p.slice(0, s)] = Number(p.slice(s + 1)); });
    String(raw.vp).split(' ').forEach(function (w, i) { if (w) linha[w] = i; });
    for (var i = 0; i < bin.length; i++) vet[i] = bin.charCodeAt(i) << 24 >> 24;
    return { N: raw.N, df: df, dim: raw.dim, linha: linha, vet: vet };
  }
  /* Junta o modelo inicial com o que a pessoa já leu (usuario: { docs, df, pares }) e o classificador dela, se houver.
     Todas as perguntas por palavra aceitam a palavra como está no texto (com acento e maiúscula). */
  function criarModelo(base, usuario, classificador) {
    usuario = usuario || { docs: 0, df: Object.create(null), pares: Object.create(null) };
    var N = base.N + usuario.docs, cache = Object.create(null), adj = null;
    var chave = function (w) { return semAcento(String(w).toLowerCase()); };
    var vetorBase = function (k) {
      var i = base.linha[k];
      if (i === undefined) return null;
      var v = new Array(base.dim);
      for (var d = 0; d < base.dim; d++) v[d] = base.vet[i * base.dim + d] / 127;
      return v;
    };
    var vetor = function (w) {
      var k = chave(w);
      if (k in cache) return cache[k];
      var v = vetorBase(k);
      if (!v) { adj = adj || vizinhosPPMI(usuario.pares); v = vetorPorVizinhos(adj[k], vetorBase); }
      return (cache[k] = v || null);
    };
    var idf = function (w) { var k = chave(w); return idfDe(N, Math.min(N, Math.max(1, (base.df[k] || 0) + (usuario.df[k] || 0)))); }; // df nunca passa do total de documentos
    return {
      idf: idf,
      tfidf: function (w, freq) { return tfidf(freq, idf(w)); },
      vetor: vetor,
      similaridade: function (a, b) { var va = vetor(a), vb = vetor(b); return va && vb ? cosseno(va, vb) : null; },
      probabilidade: function (x) { return classificador ? prever(classificador, x) : null; },
      classificador: classificador || null
    };
  }

  // ---------- Regressão logística ----------
  function produto(w, x) { var s = 0; for (var i = 0; i < w.length; i++) s += w[i] * x[i]; return s; }
  /* Gradiente descendente no lote inteiro, com regularização L2. exemplos: [{ x: [atributos 0..1], y: 0..1 }];
     y pode ser 0.5 (meio-termo). Os atributos são padronizados (média 0, desvio 1) para o treino, senão um atributo que varia
     pouco (como o tamanho da frase) quase não aprende; os pesos voltam à escala original. Devolve { w, b }. */
  function treinarLogistica(exemplos, opc) {
    opc = opc || {};
    var n = exemplos.length, d = n ? exemplos[0].x.length : 0, w = new Array(d).fill(0), b = 0, i, j;
    var epocas = opc.epocas || 300, taxa = opc.taxa || 2, l2 = opc.l2 == null ? 0.01 : opc.l2;
    var mu = new Array(d).fill(0), sd = new Array(d).fill(0);
    exemplos.forEach(function (e) { for (j = 0; j < d; j++) mu[j] += e.x[j] / n; });
    exemplos.forEach(function (e) { for (j = 0; j < d; j++) sd[j] += Math.pow(e.x[j] - mu[j], 2) / n; });
    sd = sd.map(function (v) { return Math.sqrt(v) > 1e-6 ? Math.sqrt(v) : 0; }); // atributo constante não ensina nada
    var X = exemplos.map(function (e) { return e.x.map(function (v, k) { return sd[k] ? (v - mu[k]) / sd[k] : 0; }); });
    for (var e = 0; e < epocas; e++) {
      var gw = new Array(d).fill(0), gb = 0;
      for (i = 0; i < n; i++) {
        var erro = sigmoide(b + produto(w, X[i])) - exemplos[i].y;
        for (j = 0; j < d; j++) gw[j] += erro * X[i][j];
        gb += erro;
      }
      for (j = 0; j < d; j++) w[j] -= taxa * (gw[j] / n + l2 * w[j]);
      b -= taxa * gb / n;
    }
    for (j = 0; j < d; j++) { if (sd[j]) { w[j] /= sd[j]; b -= w[j] * mu[j]; } else w[j] = 0; }
    return { w: w, b: b };
  }
  function prever(clf, x) { return sigmoide(clf.b + produto(clf.w, x)); }

  // ---------- Domínio por assunto (Elo) ----------
  /* A pessoa tem uma habilidade t em cada assunto e cada questão uma dificuldade b (ambas na mesma escala).
     Probabilidade de acertar = chute + (1 - chute) * sigmoide(t - b): o chute é 1/5 nas de múltipla escolha e 1/2 em certo/errado.
     A cada resposta, t sobe se acertou mais do que o esperado e desce se errou; b faz o contrário.
     O passo (fator K) começa grande e encolhe com o número de respostas, para a estimativa se firmar. */
  var CHUTE = Object.assign(Object.create(null), { multipla: 0.2, 'certo-errado': 0.5 });
  function pAcerto(t, b, tipo) { var g = CHUTE[tipo] || 0.2; return g + (1 - g) * sigmoide(t - b); }
  function dificuldadeInicial(q) { return ((q.dificuldade || 2) - 2) * 0.8; } // campo 1 a 3 da questão
  /* dom: { t, n, ac } do assunto; dif: { b, n } da questão (ambos podem faltar). extra: { conf 0|1|2, dicas }.
     Chutar (conf 0) e acertar com dica valem menos; errar com certeza (conf 2) pesa mais. */
  function elo(dom, dif, q, certo, extra) {
    dom = dom || { t: 0, n: 0, ac: 0 };
    dif = dif || { b: dificuldadeInicial(q), n: 0 };
    extra = extra || {};
    var erro = (certo ? 1 : 0) - pAcerto(dom.t, dif.b, q.tipo);
    var peso = extra.conf === 0 ? 0.5 : extra.conf === 2 ? 1.3 : 1;
    if (certo && extra.dicas > 0) peso *= 0.5;
    var kt = 0.12 + 0.88 / (1 + 0.3 * dom.n), kb = 0.05 + 0.35 / (1 + 0.5 * dif.n);
    return {
      dom: { t: limitar(dom.t + kt * peso * erro, -5, 5), n: dom.n + 1, ac: dom.ac + (certo ? 1 : 0) },
      dif: { b: limitar(dif.b - kb * erro, -4, 4), n: dif.n + 1 }
    };
  }
  /* Domínio em palavras. A estimativa é prudente: desconta a incerteza, que é grande com poucas respostas. */
  function nivelDominio(d) {
    var p = sigmoide((d ? d.t : 0) - 1.2 / Math.sqrt((d ? d.n : 0) + 1));
    // "domina" pede também uma amostra razoável: dez acertos seguidos mostram "bom", não domínio.
    return { p: p, pct: Math.round(p * 100), n: d ? d.n : 0, rotulo: p < 0.35 ? 'começando' : p < 0.55 ? 'aprendendo' : p < 0.75 || (d ? d.n : 0) < 12 ? 'bom' : 'domina' };
  }
  // 0 a 1: quanto a dificuldade b está perto do que a pessoa dá conta (um pouco abaixo do nível dela: nem fácil demais, nem impossível).
  function proximidade(b, t) { return Math.exp(-Math.pow(b - (t - 0.4), 2) / 1.28); }

  /* Refaz o Elo a partir do histórico (para quem já tinha respostas antes do app aprender): respostas em ordem de data.
     Devolve { dominio, dificuldades } no formato do Store. */
  function reconstruir(banco, respostas) {
    var todas = [], dominio = Object.create(null), dificuldades = Object.create(null);
    Object.keys(respostas || {}).forEach(function (id) {
      var q = banco.questao(id);
      if (q && Array.isArray(respostas[id])) respostas[id].forEach(function (x) { todas.push({ q: q, x: x }); });
    });
    todas.sort(function (a, b) { return a.x.t - b.x.t; }).forEach(function (e) {
      var k = e.q.materia + '|' + e.q.assunto, r = elo(dominio[k], dificuldades[e.q.id], e.q, e.x.certo === true, e.x);
      dominio[k] = r.dom; dificuldades[e.q.id] = r.dif;
    });
    return { dominio: dominio, dificuldades: dificuldades };
  }

  // ---------- Revisão espaçada ----------
  /* Intervalo, em dias, da próxima revisão. base: dias da caixa. o: { conf, falhas (erros repetidos nesta questão), dominio (0 a 1 do assunto) }.
     Alonga ao acertar com certeza; encurta ao acertar no chute, quando a questão já foi errada de novo e quando o assunto está fraco
     (acertar com certeza num assunto fraco não é encurtado: os efeitos não se anulam). Nunca abaixo de 40% do intervalo da caixa. */
  function intervaloRevisao(base, o) {
    o = o || {};
    var f = 1;
    if (o.conf === 2) f *= 1.5; else if (o.conf === 0) f *= 0.7;
    if (o.falhas > 0) f /= 1 + 0.5 * Math.min(o.falhas, 3);
    if (o.dominio !== undefined && o.dominio < 0.45 && o.conf !== 2) f *= 0.7;
    return Math.max(1, Math.round(base * Math.max(f, 0.4)));
  }

  // ---------- Padrões de erro ----------
  var ABSOLUTA = /\b(?:sempre|nunca|jamais|apenas|somente|exclusivamente|unicamente|todos|todas|nenhum|nenhuma)\b/i;
  var TIPOS_ALT = { absoluta: 'alternativas com palavras absolutas (sempre, nunca, apenas, somente)', longa: 'a alternativa mais longa' };
  function tipoAlternativa(q, i) {
    var alts = q.alternativas, a = alts && alts[i];
    if (typeof a !== 'string') return '';
    if (ABSOLUTA.test(a)) return 'absoluta';
    var outras = alts.filter(function (_, j) { return j !== i; }).map(function (x) { return String(x).length; });
    return a.length > 1.3 * Math.max.apply(null, outras) ? 'longa' : '';
  }
  // Quantas vezes a pessoa marcou esta mesma alternativa errada nesta questão (historico: respostas da questão).
  function vezesPegadinha(historico, r) {
    return (historico || []).filter(function (x) { return x && x.certo === false && x.r === r; }).length;
  }
  /* Procura repetição nos erros. respostas: id -> histórico; banco: { questao(id) }.
     pegadinhas: a mesma alternativa errada marcada 2 vezes ou mais na mesma questão;
     assuntos: 3 ou mais questões com a última resposta errada e metade ou mais do assunto errado;
     tipos: o mesmo tipo de alternativa errada em 3 ou mais erros, e em 40% ou mais deles. */
  function padroesDeErro(banco, respostas) {
    var pegadinhas = [], porAssunto = Object.create(null), tipos = Object.create(null), erradas = 0;
    Object.keys(respostas || {}).forEach(function (id) {
      var h = respostas[id], q = Array.isArray(h) && h.length && banco.questao(id);
      if (!q) return;
      var ult = h[h.length - 1], k = q.materia + '|' + q.assunto;
      var a = (porAssunto[k] = porAssunto[k] || { materia: q.materia, assunto: q.assunto, erros: 0, total: 0 });
      a.total++;
      if (!ult.certo) {
        a.erros++; erradas++;
        var t = q.tipo === 'multipla' && Number.isInteger(ult.r) ? tipoAlternativa(q, ult.r) : '';
        if (t) tipos[t] = (tipos[t] || 0) + 1;
      }
      var cont = Object.create(null);
      h.forEach(function (x) { if (x && x.certo === false && Number.isInteger(x.r)) cont[x.r] = (cont[x.r] || 0) + 1; });
      Object.keys(cont).forEach(function (r) { if (cont[r] >= 2) pegadinhas.push({ id: id, r: Number(r), vezes: cont[r] }); });
    });
    return {
      pegadinhas: pegadinhas.sort(function (x, y) { return y.vezes - x.vezes || (x.id < y.id ? -1 : 1); }),
      assuntos: Object.keys(porAssunto).map(function (k) { return porAssunto[k]; })
        .filter(function (a) { return a.erros >= 3 && a.erros / a.total >= 0.5; })
        .sort(function (x, y) { return y.erros - x.erros || (x.assunto < y.assunto ? -1 : 1); }),
      tipos: Object.keys(tipos).filter(function (t) { return tipos[t] >= 3 && tipos[t] / erradas >= 0.4; })
        .map(function (t) { return { tipo: t, vezes: tipos[t], texto: TIPOS_ALT[t] }; })
    };
  }

  var Aprendizado = {
    semAcento: semAcento, palavras: palavras, idfDe: idfDe, tfidf: tfidf, somarDF: somarDF,
    cosseno: cosseno, coocorrencias: coocorrencias, podar: podar, vizinhosPPMI: vizinhosPPMI,
    vetoresPalavras: vetoresPalavras, vetorPorVizinhos: vetorPorVizinhos, lerBase: lerBase, criarModelo: criarModelo,
    treinarLogistica: treinarLogistica, prever: prever,
    reconstruir: reconstruir, pAcerto: pAcerto, dificuldadeInicial: dificuldadeInicial, elo: elo, nivelDominio: nivelDominio, proximidade: proximidade,
    intervaloRevisao: intervaloRevisao, tipoAlternativa: tipoAlternativa, vezesPegadinha: vezesPegadinha, padroesDeErro: padroesDeErro
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = Aprendizado;
  else root.Aprendizado = Aprendizado;
})(this);
