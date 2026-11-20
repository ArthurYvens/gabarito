/* Banco: registro central de matérias, objetivos, questões e aulas.
   Funciona no navegador (global Banco) e no Node (module.exports) para os testes. */
(function (root) {
  'use strict';

  var TIPOS = ['multipla', 'certo-errado'];
  var ESTILOS = ['CEBRASPE', 'FGV', 'FCC', 'Cesgranrio', 'Vunesp', 'ENEM', 'OAB/FGV', 'Outra'];

  var Banco = {
    materias: [],
    objetivos: [],
    questoes: [],
    aulas: [],
    ESTILOS: ESTILOS,

    registrar: function (pacote) {
      if (pacote.materias) Banco.materias.push.apply(Banco.materias, pacote.materias);
      if (pacote.objetivos) Banco.objetivos.push.apply(Banco.objetivos, pacote.objetivos);
      if (pacote.questoes) Banco.questoes.push.apply(Banco.questoes, pacote.questoes);
      if (pacote.aulas) Banco.aulas.push.apply(Banco.aulas, pacote.aulas);
      // Comentário do app para questões oficiais (o texto do INEP não pode ser alterado): fica à parte, por id,
      // e vale para questões registradas antes ou depois.
      if (pacote.explicacoes) Object.keys(pacote.explicacoes).forEach(function (id) { Banco.explicacoes[id] = pacote.explicacoes[id]; });
      Banco.questoes.forEach(function (q) {
        var x = Banco.explicacoes[q.id];
        if (x && !q.explicacao) { q.explicacao = x; q.comentarioApp = true; }
      });
    },
    explicacoes: {},

    /* Matéria criada pelo aluno (ex.: Contabilidade). Id sempre com prefixo "x-" para não colidir com as do app. */
    validarMateria: function (m) {
      if (!m || typeof m !== 'object') return ['matéria inválida'];
      var e = [];
      if (typeof m.id !== 'string' || !/^x-[a-z0-9-]{2,40}$/.test(m.id)) e.push('id de matéria deve começar com x-');
      if (typeof m.nome !== 'string' || !m.nome.trim() || m.nome.length > 60) e.push('nome de matéria inválido');
      if (typeof m.sigla !== 'string' || !/^[A-Z0-9]{2,4}$/.test(m.sigla)) e.push('sigla deve ter 2 a 4 letras maiúsculas');
      return e;
    },
    registrarMateria: function (m) {
      if (Banco.materia(m.id) || Banco.validarMateria(m).length) return false;
      Banco.materias.push({ id: m.id, nome: m.nome.trim(), sigla: m.sigla, area: 'Minhas matérias', propria: true });
      return true;
    },

    materia: function (id) {
      for (var i = 0; i < Banco.materias.length; i++) if (Banco.materias[i].id === id) return Banco.materias[i];
      return null;
    },
    objetivo: function (id) {
      for (var i = 0; i < Banco.objetivos.length; i++) if (Banco.objetivos[i].id === id) return Banco.objetivos[i];
      return null;
    },
    questao: function (id) {
      for (var i = 0; i < Banco.questoes.length; i++) if (Banco.questoes[i].id === id) return Banco.questoes[i];
      return null;
    },

    /* Valida uma questão. Usado pelo validador do Node e pela importação de bancos no app
       (conteúdo importado é entrada não confiável). Devolve a lista de erros; vazia = válida. */
    validarQuestao: function (q) {
      var e = [];
      var txt = function (v) { return typeof v === 'string' && v.trim().length > 0; };
      if (!q || typeof q !== 'object') return ['não é um objeto'];
      if (!txt(q.id) || !/^[a-z0-9-]{3,60}$/.test(q.id)) e.push('id inválido (use a-z, 0-9 e hífen)');
      if (!Banco.materia(q.materia)) e.push('matéria desconhecida: ' + q.materia);
      if (!txt(q.assunto)) e.push('assunto vazio');
      if (TIPOS.indexOf(q.tipo) < 0) e.push('tipo deve ser multipla ou certo-errado');
      if (ESTILOS.indexOf(q.estilo) < 0) e.push('estilo inválido: ' + q.estilo);
      if ([1, 2, 3].indexOf(q.dificuldade) < 0) e.push('dificuldade deve ser 1, 2 ou 3');
      if (!Array.isArray(q.objetivos) || !q.objetivos.length) e.push('objetivos vazio');
      else q.objetivos.forEach(function (o) { if (!Banco.objetivo(o)) e.push('objetivo desconhecido: ' + o); });
      if (q.textoBase !== undefined && !txt(q.textoBase)) e.push('textoBase vazio');
      if (!txt(q.enunciado)) e.push('enunciado vazio');
      if (q.tipo === 'multipla') {
        if (!Array.isArray(q.alternativas) || q.alternativas.length < 4 || q.alternativas.length > 5) e.push('multipla precisa de 4 ou 5 alternativas');
        else {
          if (!q.alternativas.every(txt)) e.push('alternativa vazia');
          if (!(Number.isInteger(q.resposta) && q.resposta >= 0 && q.resposta < q.alternativas.length)) e.push('resposta fora das alternativas');
        }
      }
      if (q.tipo === 'certo-errado') {
        if (typeof q.resposta !== 'boolean') e.push('certo-errado precisa de resposta true/false');
        if (q.alternativas !== undefined) e.push('certo-errado não tem alternativas');
      }
      var x = q.explicacao;
      // Questão do aluno ou de prova real pode vir sem comentário nem fontes; as do app, nunca.
      var livre = q.autoria === 'aluno' || q.prova !== undefined;
      if (q.autoria !== undefined && q.autoria !== 'aluno') e.push('autoria inválida');
      if (livre && x === undefined) { /* sem comentário */ }
      else if (!x || !txt(x.resumo) || (!livre && !txt(x.detalhada))) e.push('explicacao.resumo e explicacao.detalhada são obrigatórios');
      else if (x.detalhada !== undefined && typeof x.detalhada !== 'string') e.push('explicacao.detalhada deve ser texto');
      else if (x.alternativas !== undefined) {
        if (q.tipo !== 'multipla' || !Array.isArray(x.alternativas) || x.alternativas.length !== (q.alternativas || []).length || !x.alternativas.every(txt))
          e.push('explicacao.alternativas deve comentar cada alternativa');
      }
      if (livre && (q.fontes === undefined || (Array.isArray(q.fontes) && !q.fontes.length))) { /* sem fontes */ }
      else if (!Array.isArray(q.fontes) || !q.fontes.length) e.push('fontes vazio');
      else q.fontes.forEach(function (f) {
        if (!f || !txt(f.titulo) || !/^https:\/\/[^\s"'<>]+$/.test(f.url || '')) e.push('fonte inválida (precisa de titulo e url https)');
      });
      if (q.prova !== undefined && (typeof q.prova !== 'object' || !txt(q.prova.banca) || !Number.isInteger(q.prova.ano)))
        e.push('prova deve ter banca e ano');
      return e;
    },

    validarAula: function (a) {
      var e = [];
      var txt = function (v) { return typeof v === 'string' && v.trim().length > 0; };
      if (!a || !txt(a.id)) return ['aula sem id'];
      if (!Banco.materia(a.materia)) e.push('matéria desconhecida: ' + a.materia);
      ['titulo', 'assunto', 'resumo'].forEach(function (k) { if (!txt(a[k])) e.push(k + ' vazio'); });
      if (!Number.isInteger(a.duracaoMin) || a.duracaoMin < 3) e.push('duracaoMin inválida');
      if (!Array.isArray(a.secoes) || a.secoes.length < 2) e.push('aula precisa de 2+ seções');
      else a.secoes.forEach(function (s) { if (!s || !txt(s.titulo) || !txt(s.texto)) e.push('seção sem titulo/texto'); });
      if (!Array.isArray(a.pontosChave) || a.pontosChave.length < 3) e.push('pontosChave precisa de 3+ itens');
      if (!Array.isArray(a.fontes) || !a.fontes.length) e.push('fontes vazio');
      else a.fontes.forEach(function (f) { if (!f || !txt(f.titulo) || !/^https:\/\/[^\s"'<>]+$/.test(f.url || '')) e.push('fonte inválida'); });
      return e;
    }
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = Banco;
  else root.Banco = Banco;
})(this);
