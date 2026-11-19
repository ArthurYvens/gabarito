/* Motor: regras puras de estudo (montagem de simulado, correção, desempenho, revisão espaçada, plano).
   Sem DOM e sem armazenamento, para poder ser testado no Node (tests/motor.test.js). */
(function (root) {
  'use strict';

  var DIA = 86400000;
  // Intervalos da revisão espaçada (caixas de Leitner), em dias.
  var INTERVALOS = [1, 3, 7, 15, 30, 60];

  function rng(seed) { // mulberry32: embaralhamento reproduzível por semente
    var a = seed >>> 0;
    return function () {
      a = (a + 0x6d2b79f5) >>> 0;
      var t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function embaralhar(lista, rand) {
    var a = lista.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rand() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function hoje(agora) {
    var d = agora ? new Date(agora) : new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function somarDias(iso, n) {
    var p = iso.split('-').map(Number);
    return hoje(new Date(p[0], p[1] - 1, p[2] + n).getTime());
  }

  function acertou(q, resposta) {
    if (resposta === undefined || resposta === null) return null;
    return resposta === q.resposta;
  }

  function ultima(historico, id) {
    var h = historico && historico[id];
    return h && h.length ? h[h.length - 1] : null;
  }

  /* Filtra o banco pelos critérios do usuário. */
  function filtrar(questoes, f, historico) {
    f = f || {};
    var termo = (f.busca || '').trim().toLowerCase();
    return questoes.filter(function (q) {
      if (f.materias && f.materias.length && f.materias.indexOf(q.materia) < 0) return false;
      if (f.assuntos && f.assuntos.length && f.assuntos.indexOf(q.assunto) < 0) return false;
      if (f.dificuldades && f.dificuldades.length && f.dificuldades.indexOf(q.dificuldade) < 0) return false;
      if (f.estilos && f.estilos.length && f.estilos.indexOf(q.estilo) < 0) return false;
      if (f.tipo && q.tipo !== f.tipo) return false;
      if (f.objetivoFiltro && q.objetivos.indexOf(f.objetivoFiltro) < 0) return false;
      if (f.ids && f.ids.indexOf(q.id) < 0) return false;
      var u = ultima(historico, q.id);
      if (f.status === 'nao-resolvidas' && u) return false;
      if (f.status === 'erradas' && !(u && !u.certo)) return false;
      if (f.status === 'certas' && !(u && u.certo)) return false;
      if (termo) {
        var alvo = (q.enunciado + ' ' + (q.textoBase || '') + ' ' + q.assunto + ' ' + (q.alternativas || []).join(' ')).toLowerCase();
        if (alvo.indexOf(termo) < 0) return false;
      }
      return true;
    });
  }

  /* Divide n vagas proporcionalmente aos pesos (maior resto), sem passar do disponível de cada grupo. */
  function distribuir(n, grupos) {
    var res = {}, restante = n, ativos = grupos.filter(function (g) { return g.disponivel > 0 && g.peso > 0; });
    ativos.forEach(function (g) { res[g.id] = 0; });
    while (restante > 0 && ativos.length) {
      var soma = ativos.reduce(function (s, g) { return s + g.peso; }, 0);
      var cotas = ativos.map(function (g) {
        var exato = restante * g.peso / soma;
        return { g: g, base: Math.floor(exato), resto: exato - Math.floor(exato) };
      });
      var usado = 0;
      cotas.forEach(function (c) {
        var cabe = Math.min(c.base, c.g.disponivel - res[c.g.id]);
        res[c.g.id] += cabe; usado += cabe;
      });
      cotas.sort(function (a, b) { return b.resto - a.resto; });
      for (var i = 0; i < cotas.length && usado < restante; i++) {
        if (res[cotas[i].g.id] < cotas[i].g.disponivel) { res[cotas[i].g.id]++; usado++; }
      }
      if (usado === 0) break;
      restante -= usado;
      ativos = ativos.filter(function (g) { return res[g.id] < g.disponivel; });
    }
    return res;
  }

  /* Monta um simulado: reparte as vagas entre matérias pelo peso do objetivo e, dentro de cada matéria,
     prioriza questões nunca vistas, depois as erradas, depois as dos assuntos em que o aluno vai pior. */
  function montarSimulado(banco, cfg, historico) {
    var rand = rng(cfg.seed || Date.now());
    var candidatas = filtrar(banco.questoes, cfg, historico);
    var objetivo = cfg.objetivo ? banco.objetivo(cfg.objetivo) : null;
    var porMateria = {};
    candidatas.forEach(function (q) { (porMateria[q.materia] = porMateria[q.materia] || []).push(q); });

    var pesosAssunto = desempenho(banco, historico).porAssunto;
    var grupos = Object.keys(porMateria).map(function (m) {
      var temPesos = objetivo && Object.keys(objetivo.pesos).length;
      var peso = temPesos ? (objetivo.pesos[m] || 0) : 1;
      if (cfg.materias && cfg.materias.length) peso = Math.max(peso, 1); // escolha explícita do aluno sempre entra
      return { id: m, peso: peso, disponivel: porMateria[m].length };
    });
    var vagas = distribuir(Math.min(cfg.quantidade || 10, candidatas.length), grupos);

    var ordem = grupos.slice().sort(function (a, b) { return b.peso - a.peso || a.id.localeCompare(b.id); });
    var escolhidas = [];
    ordem.forEach(function (g) {
      var n = vagas[g.id] || 0;
      if (!n) return;
      var pontuadas = porMateria[g.id].map(function (q) {
        var u = ultima(historico, q.id);
        var s = rand();
        if (!u) s += 2;
        else if (!u.certo) s += 1.2;
        if (cfg.objetivo && q.objetivos.indexOf(cfg.objetivo) >= 0) s += 0.5;
        var pa = pesosAssunto[q.materia + '|' + q.assunto];
        if (pa && pa.total >= 2) s += (1 - pa.acertos / pa.total) * 0.8;
        return { q: q, s: s };
      });
      pontuadas.sort(function (a, b) { return b.s - a.s; });
      // Dentro da matéria, ordem aleatória para não agrupar por prioridade.
      escolhidas = escolhidas.concat(embaralhar(pontuadas.slice(0, n).map(function (p) { return p.q.id; }), rand));
    });
    return escolhidas;
  }

  /* Corrige um simulado. Nota líquida no padrão CEBRASPE: cada item errado anula um certo. */
  function corrigir(banco, sim) {
    var r = { total: sim.questoes.length, certas: 0, erradas: 0, brancos: 0, ceCertas: 0, ceErradas: 0, ceTotal: 0, porMateria: {}, itens: [] };
    sim.questoes.forEach(function (id) {
      var q = banco.questao(id);
      if (!q) { r.total--; return; }
      var resp = sim.respostas[id];
      var ok = acertou(q, resp);
      var m = (r.porMateria[q.materia] = r.porMateria[q.materia] || { total: 0, certas: 0 });
      m.total++;
      if (ok === null) r.brancos++;
      else if (ok) { r.certas++; m.certas++; } else r.erradas++;
      if (q.tipo === 'certo-errado') {
        r.ceTotal++;
        if (ok === true) r.ceCertas++;
        if (ok === false) r.ceErradas++;
      }
      r.itens.push({ id: id, certo: ok });
    });
    r.percentual = r.total ? Math.round(r.certas / r.total * 100) : 0;
    r.liquida = r.ceTotal ? r.ceCertas - r.ceErradas : null;
    return r;
  }

  /* Desempenho por matéria e por assunto, usando a última resposta de cada questão. */
  function desempenho(banco, historico) {
    var porMateria = {}, porAssunto = {}, resolvidas = 0, certas = 0;
    Object.keys(historico || {}).forEach(function (id) {
      var q = banco.questao(id), u = ultima(historico, id);
      if (!q || !u) return;
      resolvidas++; if (u.certo) certas++;
      var m = (porMateria[q.materia] = porMateria[q.materia] || { total: 0, acertos: 0 });
      m.total++; if (u.certo) m.acertos++;
      var k = q.materia + '|' + q.assunto;
      var a = (porAssunto[k] = porAssunto[k] || { materia: q.materia, assunto: q.assunto, total: 0, acertos: 0 });
      a.total++; if (u.certo) a.acertos++;
    });
    return { resolvidas: resolvidas, certas: certas, porMateria: porMateria, porAssunto: porAssunto };
  }

  /* Assuntos mais fracos (mínimo de 2 respostas para não julgar por um chute). */
  function pontosFracos(banco, historico, limite) {
    var d = desempenho(banco, historico);
    return Object.keys(d.porAssunto).map(function (k) { return d.porAssunto[k]; })
      .filter(function (a) { return a.total >= 2 && a.acertos / a.total < 0.7; })
      .sort(function (a, b) { return a.acertos / a.total - b.acertos / b.total || b.total - a.total; })
      .slice(0, limite || 5);
  }

  /* Revisão espaçada: erro volta para a caixa 0 (amanhã); acerto sobe uma caixa. Acerto fora da revisão
     não cria cartão: só entra na revisão o que o aluno já errou. */
  function agendar(revisao, id, certo, dataIso) {
    var c = revisao[id];
    if (!certo) { revisao[id] = { caixa: 0, proxima: somarDias(dataIso, INTERVALOS[0]) }; return revisao[id]; }
    if (!c) return null;
    var caixa = Math.min(c.caixa + 1, INTERVALOS.length - 1);
    revisao[id] = { caixa: caixa, proxima: somarDias(dataIso, INTERVALOS[caixa]) };
    return revisao[id];
  }
  function pendentes(revisao, dataIso) {
    return Object.keys(revisao).filter(function (id) { return revisao[id].proxima <= dataIso; });
  }

  /* Sequência de dias seguidos com atividade, terminando hoje ou ontem. */
  function sequencia(atividade, dataIso) {
    var d = atividade[dataIso] ? dataIso : somarDias(dataIso, -1), n = 0;
    while (atividade[d]) { n++; d = somarDias(d, -1); }
    return n;
  }

  /* Plano semanal: blocos de 1 hora (50 min + 10 de pausa) distribuídos pelo peso do objetivo, reforçando matérias fracas
     e evitando repetir a mesma matéria no mesmo dia. dias = índices 0 (dom) a 6 (sáb). */
  function planoSemanal(banco, cfg, historico) {
    var objetivo = banco.objetivo(cfg.objetivo);
    var materias = (cfg.materias && cfg.materias.length) ? cfg.materias : Object.keys(objetivo && objetivo.pesos || {});
    if (!materias.length) materias = banco.materias.map(function (m) { return m.id; });
    var d = desempenho(banco, historico).porMateria;
    var pesos = materias.map(function (m) {
      var p = objetivo && objetivo.pesos[m] !== undefined ? objetivo.pesos[m] : 1; // matéria escolhida fora dos pesos entra com 1
      var x = d[m];
      if (x && x.total >= 3) p *= 1 + (1 - x.acertos / x.total) * 0.6;
      return { id: m, peso: p, disponivel: 999 };
    });
    var blocosDia = Math.max(1, Math.round(cfg.horasPorDia || 2)); // 1 bloco = 50 min de estudo + 10 de pausa
    var total = blocosDia * cfg.dias.length;
    var cota = distribuir(total, pesos);
    // Blocos de cada matéria em sequência, preenchendo dia a dia em rodadas: uma matéria só repete
    // no mesmo dia se tiver mais blocos que dias na semana.
    var fila = [];
    pesos.slice().sort(function (a, b) { return cota[b.id] - cota[a.id] || a.id.localeCompare(b.id); })
      .forEach(function (p) { for (var k = 0; k < (cota[p.id] || 0); k++) fila.push(p.id); });
    var semana = {};
    cfg.dias.forEach(function (dia) { semana[dia] = []; });
    fila.forEach(function (m, i) { semana[cfg.dias[i % cfg.dias.length]].push(m); });
    return { blocosDia: blocosDia, semana: semana, cota: cota };
  }

  /* Diagnóstico inicial: até 2 questões de assuntos diferentes por matéria do aluno (preferindo dificuldade
     média), no máximo 20, para medir o ponto de partida de cada assunto. */
  function diagnostico(banco, materias, seed, objetivo) {
    var rand = rng(seed || 1), porMateria = [];
    (materias || []).forEach(function (m) {
      var porAssunto = {};
      var daMateria = banco.questoes.filter(function (q) { return q.materia === m; });
      var doObjetivo = objetivo ? daMateria.filter(function (q) { return q.objetivos.indexOf(objetivo) >= 0; }) : [];
      (doObjetivo.length ? doObjetivo : daMateria).forEach(function (q) { (porAssunto[q.assunto] = porAssunto[q.assunto] || []).push(q); });
      porMateria.push(embaralhar(Object.keys(porAssunto), rand).slice(0, 2).map(function (a) {
        return porAssunto[a].slice().sort(function (x, y) { return Math.abs(x.dificuldade - 2) - Math.abs(y.dificuldade - 2) || rand() - 0.5; })[0].id;
      }));
    });
    var ids = [];
    [0, 1].forEach(function (r) { porMateria.forEach(function (l) { if (l[r] && ids.length < 20) ids.push(l[r]); }); });
    return ids;
  }

  /* Sugestão do próximo treino, em ordem de prioridade. Devolve { tipo, titulo, porque, cfg }. */
  function sugestao(banco, estado, hojeIso) {
    var respostas = estado.respostas || {}, perfil = estado.perfil || {};
    var pend = pendentes(estado.revisao || {}, hojeIso).filter(function (id) { return banco.questao(id); });
    if (!Object.keys(respostas).length) return { tipo: 'diagnostico', titulo: 'Diagnóstico inicial', porque: 'Ainda não há respostas suas. Comece medindo seu ponto de partida em cada assunto.' };
    if (pend.length >= 5) return { tipo: 'revisao', titulo: 'Revisão do dia (' + pend.length + ')', porque: 'São questões que você errou e que estão no ponto de serem esquecidas.' };
    var perigosos = Object.keys(respostas).filter(function (id) { var u = ultima(respostas, id); return u && !u.certo && u.conf === 2 && banco.questao(id); });
    if (perigosos.length >= 3) return { tipo: 'ids', titulo: 'Erros com certeza (' + perigosos.length + ')', porque: 'Você errou estas questões tendo certeza: é sinal de um conceito aprendido errado.', cfg: { ids: perigosos.slice(0, 20), modo: 'estudo' } };
    var fracos = pontosFracos(banco, respostas, 1);
    if (fracos.length) {
      var f = fracos[0];
      return { tipo: 'treino', titulo: 'Treinar ' + f.assunto, porque: 'Seu acerto neste assunto está em ' + Math.round(f.acertos / f.total * 100) + '% (' + f.acertos + ' de ' + f.total + ').', cfg: { materias: [f.materia], assuntos: [f.assunto], quantidade: 10, modo: 'estudo' } };
    }
    var d = desempenho(banco, respostas).porMateria;
    var menos = (perfil.materias || []).filter(function (m) { return banco.questoes.some(function (q) { return q.materia === m; }); })
      .sort(function (a, b) { return ((d[a] || {}).total || 0) - ((d[b] || {}).total || 0); })[0];
    if (menos && !((d[menos] || {}).total)) return { tipo: 'treino', titulo: 'Começar uma matéria nova', porque: 'Você ainda não praticou esta matéria da sua prova.', cfg: { materias: [menos], quantidade: 10, modo: 'estudo' }, materia: menos };
    return { tipo: 'simulado', titulo: 'Simulado recomendado', porque: 'Mistura as matérias da sua prova, priorizando o que você ainda não viu ou errou.', cfg: { materias: perfil.materias, quantidade: 10, modo: 'estudo' } };
  }

  /* Questões feitas na semana (de segunda a domingo) que contém hojeIso. */
  function semana(atividade, hojeIso) {
    var p = hojeIso.split('-').map(Number), dow = new Date(p[0], p[1] - 1, p[2]).getDay();
    var seg = somarDias(hojeIso, -((dow + 6) % 7)), total = 0;
    for (var i = 0; i < 7; i++) total += (atividade || {})[somarDias(seg, i)] || 0;
    return { inicio: seg, total: total };
  }

  var Motor = {
    diagnostico: diagnostico, sugestao: sugestao, semana: semana,
    INTERVALOS: INTERVALOS, rng: rng, embaralhar: embaralhar, hoje: hoje, somarDias: somarDias,
    acertou: acertou, ultima: ultima, filtrar: filtrar, distribuir: distribuir, montarSimulado: montarSimulado,
    corrigir: corrigir, desempenho: desempenho, pontosFracos: pontosFracos, agendar: agendar,
    pendentes: pendentes, sequencia: sequencia, planoSemanal: planoSemanal, DIA: DIA
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = Motor;
  else root.Motor = Motor;
})(this);
