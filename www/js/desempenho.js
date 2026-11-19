/* Desempenho: estatísticas puras sobre o histórico de respostas (por assunto, confiança x acerto, tempo, evolução).
   Sem DOM e sem armazenamento, para testar no Node (tests/desempenho.test.js).
   `banco` precisa de questao(id) e, opcionalmente, materia(id). Questões que saíram do banco são ignoradas. */
(function (root) {
  'use strict';

  var LIMITE_FRACO = 70; // % de acerto abaixo do qual o assunto é "fraco" (mesmo corte do restante do app)
  var MIN_FRACO = 2;     // com menos questões que isso não dá para dizer que o assunto é fraco

  function validas(h) {
    return (Array.isArray(h) ? h : []).filter(function (x) { return x && typeof x === 'object' && typeof x.certo === 'boolean'; });
  }
  function msDe(x) { return typeof x.ms === 'number' && isFinite(x.ms) && x.ms > 0 ? x.ms : null; }
  function mediana(v) {
    if (!v.length) return null;
    var a = v.slice().sort(function (x, y) { return x - y; }), m = a.length >> 1;
    return a.length % 2 ? a[m] : Math.round((a[m - 1] + a[m]) / 2);
  }
  function media(v) {
    return v.length ? Math.round(v.reduce(function (s, x) { return s + x; }, 0) / v.length) : null;
  }
  function pct(n, total) { return total ? Math.round(n / total * 100) : null; }

  /* Questões respondidas que ainda existem no banco: [{ id, q, h (histórico válido), u (última resposta) }] */
  function respondidas(banco, respostas) {
    var out = [];
    Object.keys(respostas || {}).forEach(function (id) {
      var h = validas(respostas[id]), q = h.length && banco.questao(id);
      if (q) out.push({ id: id, q: q, h: h, u: h[h.length - 1] });
    });
    return out;
  }

  function resumir(itens) {
    var ms = [], dicas = 0, certas = 0, tentativas = 0;
    itens.forEach(function (it) {
      if (it.u.certo) certas++;
      tentativas += it.h.length;
      it.h.forEach(function (x) { var m = msDe(x); if (m) ms.push(m); });
      if (it.h.some(function (x) { return x.dicas > 0; })) dicas++;
    });
    return { questoes: itens.length, certas: certas, taxa: pct(certas, itens.length), tentativas: tentativas, ms: mediana(ms), comDicas: dicas };
  }

  /* Por matéria e assunto, pela última resposta de cada questão. ms = mediana dos tempos registrados (null se nenhum).
     comDicas = questões em que alguma tentativa usou dica. Matérias e assuntos saem dos mais respondidos aos menos. */
  function porAssunto(banco, respostas) {
    var mats = {};
    respondidas(banco, respostas).forEach(function (it) {
      var m = (mats[it.q.materia] = mats[it.q.materia] || { itens: [], assuntos: {} });
      m.itens.push(it);
      (m.assuntos[it.q.assunto] = m.assuntos[it.q.assunto] || []).push(it);
    });
    var lista = Object.keys(mats).map(function (id) {
      var info = banco.materia ? banco.materia(id) : null, m = mats[id];
      var r = resumir(m.itens);
      r.id = id; r.nome = info ? info.nome : id; r.sigla = info ? info.sigla : id.slice(0, 3).toUpperCase();
      r.assuntos = Object.keys(m.assuntos).map(function (a) {
        var s = resumir(m.assuntos[a]);
        s.assunto = a; s.materia = id;
        s.fraco = s.questoes >= MIN_FRACO && s.taxa < LIMITE_FRACO;
        return s;
      }).sort(function (x, y) { return y.questoes - x.questoes || x.assunto.localeCompare(y.assunto); });
      return r;
    }).sort(function (x, y) { return y.questoes - x.questoes || x.nome.localeCompare(y.nome); });
    var todos = [];
    Object.keys(mats).forEach(function (id) { todos = todos.concat(mats[id].itens); });
    return { total: resumir(todos), materias: lista };
  }

  /* Matriz da última resposta que tem confiança (conf 0 chutei, 1 acho que sei, 2 tenho certeza).
     Respostas antigas, sem conf, só entram em semConf. */
  function confiancaAcerto(banco, respostas) {
    var c = { dominio: 0, incerto: 0, perigoso: 0, lacuna: 0 }, semConf = 0;
    respondidas(banco, respostas).forEach(function (it) {
      var cf = it.u.conf;
      if (cf !== 0 && cf !== 1 && cf !== 2) { semConf++; return; }
      var seguro = cf === 2;
      c[it.u.certo ? (seguro ? 'dominio' : 'incerto') : (seguro ? 'perigoso' : 'lacuna')]++;
    });
    var total = c.dominio + c.incerto + c.perigoso + c.lacuna;
    var q = {};
    Object.keys(c).forEach(function (k) { q[k] = { n: c[k], pct: pct(c[k], total) }; });
    q.total = total; q.semConf = semConf;
    return q;
  }

  /* Tempo por questão: o da última tentativa que tem tempo. top = as 10 mais demoradas.
     acertoMs/erroMs comparam todas as tentativas com tempo (média). */
  function tempoPorQuestao(banco, respostas) {
    var lista = [], certos = [], errados = [];
    respondidas(banco, respostas).forEach(function (it) {
      var comMs = it.h.filter(function (x) { return msDe(x); });
      comMs.forEach(function (x) { (x.certo ? certos : errados).push(x.ms); });
      if (comMs.length) {
        var ult = comMs[comMs.length - 1];
        lista.push({ id: it.id, ms: ult.ms, certo: ult.certo, materia: it.q.materia, assunto: it.q.assunto });
      }
    });
    lista.sort(function (a, b) { return b.ms - a.ms || a.id.localeCompare(b.id); });
    return { top: lista.slice(0, 10), mediaMs: media(lista.map(function (x) { return x.ms; })), questoes: lista.length,
      acertoMs: media(certos), erroMs: media(errados), amostrasAcerto: certos.length, amostrasErro: errados.length };
  }

  /* Acerto por semana (todas as tentativas), da mais antiga à atual. A última semana termina hoje.
     taxa é null nas semanas sem respostas. */
  function evolucao(respostas, semanas, agora) {
    var n = semanas > 0 ? Math.min(Math.floor(semanas), 104) : 8;
    var fim = new Date(agora == null ? Date.now() : agora);
    fim.setHours(0, 0, 0, 0); fim.setDate(fim.getDate() + 1); // início de amanhã: limite exclusivo da semana atual
    var limite = function (k) { var d = new Date(fim); d.setDate(d.getDate() - 7 * k); return d.getTime(); };
    var out = [];
    for (var k = n - 1; k >= 0; k--) out.push({ inicio: limite(k + 1), fim: limite(k), total: 0, certas: 0, taxa: null });
    var ini = out[0].inicio;
    Object.keys(respostas || {}).forEach(function (id) {
      validas(respostas[id]).forEach(function (x) {
        if (typeof x.t !== 'number' || x.t < ini || x.t >= out[n - 1].fim) return;
        for (var i = 0; i < n; i++) {
          if (x.t >= out[i].inicio && x.t < out[i].fim) { out[i].total++; if (x.certo) out[i].certas++; break; }
        }
      });
    });
    out.forEach(function (s) { s.taxa = pct(s.certas, s.total); });
    return out;
  }

  var Desempenho = { LIMITE_FRACO: LIMITE_FRACO, porAssunto: porAssunto, confiancaAcerto: confiancaAcerto, tempoPorQuestao: tempoPorQuestao, evolucao: evolucao };
  if (typeof module !== 'undefined' && module.exports) module.exports = Desempenho;
  else root.Desempenho = Desempenho;
})(this);
