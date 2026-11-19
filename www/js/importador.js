/* Importador: transforma texto de prova (colado ou extraído de PDF), gabaritos e planilhas CSV
   em rascunhos de questão para o aluno revisar antes de salvar. Sem DOM, testável no Node. */
(function (root) {
  'use strict';

  var LETRAS = 'ABCDE';

  function limpar(texto) {
    return String(texto || '')
      .replace(/\r\n?/g, '\n')
      .replace(/[ \t]+/g, ' ')
      .replace(/[ ]{2,}/g, ' ')
      .replace(/-\n(?=[a-zà-ú])/g, '') // palavra quebrada no fim da linha do PDF
      .slice(0, LIMITE);
  }
  // ~2 milhões de caracteres (mais de 1.500 páginas de prova). A tela avisa quando o texto passa disso.
  var LIMITE = 2000000;

  // Cabeçalho de questão: "Questão 12", "QUESTÃO 12", "12.", "12)", "12 -", "12 –".
  var RE_QUESTAO = /^\s*(?:quest[ãa]o\s*(\d{1,3})\b[\s.:\-–)]*|(\d{1,3})\s*[.)\-–]\s+)(.*)$/i;
  // Alternativa: "(A) texto", "A) texto", "a. texto", "A - texto".
  var RE_ALT = /^\s*\(?([A-Ea-e])\s*[).\-–]\s+(.*)$/;
  var RE_CE = /julgue|certo\s+ou\s+errado|\(\s*\)\s*certo|item a seguir|itens a seguir|itens subsequentes/i;

  /* Divide o texto em blocos de questão. Aceita a numeração seguinte (n+1) para não confundir com listas
     numeradas dentro de um enunciado; um salto (questão anulada ou página perdida) só é aceito quando a
     questão anterior já está completa, com 4 ou mais alternativas, e vira aviso para o aluno conferir. */
  function blocos(texto) {
    var linhas = limpar(texto).split('\n'), res = [], atual = null, ultimo = 0, altsAtual = 0;
    linhas.forEach(function (l) {
      var m = RE_QUESTAO.exec(l);
      var n = m ? Number(m[1] || m[2]) : NaN;
      var salto = atual !== null && n > ultimo + 1 && n <= ultimo + 5 && altsAtual >= 4;
      if (m && (atual === null ? n >= 1 && n <= 200 : n === ultimo + 1 || salto)) {
        atual = { numero: n, linhas: [], salto: salto ? ultimo : 0 };
        if (m[3] && m[3].trim()) atual.linhas.push(m[3].trim());
        res.push(atual);
        ultimo = n; altsAtual = 0;
      } else if (atual) {
        atual.linhas.push(l);
        if (RE_ALT.test(l)) altsAtual++;
      }
    });
    return res;
  }

  function juntar(linhas) {
    // Junta linhas de um mesmo parágrafo; linha vazia separa parágrafos.
    return linhas.join('\n').replace(/\n{2,}/g, '\u0000').replace(/\n/g, ' ').replace(/\u0000/g, '\n\n').replace(/ {2,}/g, ' ').trim();
  }

  function analisarBloco(b) {
    var corpo = [], alts = [], avisos = [], usadas = {}, foraDeOrdem = false;
    b.linhas.forEach(function (l) {
      var m = RE_ALT.exec(l), letra = m && m[1].toUpperCase();
      // A primeira alternativa tem de ser A (evita confundir com "a) item" de uma lista no enunciado);
      // depois disso, letras de A a E ainda não usadas são aceitas mesmo fora de ordem e reordenadas.
      var aceita = m && (alts.length ? !usadas[letra] : letra === 'A');
      if (aceita) {
        if (alts.length && LETRAS.indexOf(letra) !== LETRAS.indexOf(alts[alts.length - 1].letra) + 1) foraDeOrdem = true;
        var nova = [m[2]]; nova.letra = letra; alts.push(nova); usadas[letra] = true;
      } else if (alts.length) alts[alts.length - 1].push(l);
      else corpo.push(l);
    });
    alts.sort(function (x, y) { return LETRAS.indexOf(x.letra) - LETRAS.indexOf(y.letra); });
    var completas = alts.every(function (a, i) { return a.letra === LETRAS[i]; });
    var enunciado = juntar(corpo);
    var q = { numero: b.numero, enunciado: enunciado, alternativas: [], tipo: 'multipla', resposta: null, avisos: avisos };
    if (b.salto) avisos.push('A numeração pulou da questão ' + b.salto + ' para a ' + b.numero + '. Confira se faltou alguma.');
    if (alts.length >= 4) {
      q.alternativas = alts.map(juntar);
      if (foraDeOrdem) avisos.push('As alternativas estavam fora de ordem e foram colocadas de A a E. Confira.');
      if (!completas) avisos.push('Faltou alguma letra entre as alternativas (' + alts.map(function (a) { return a.letra; }).join(', ') + '). Confira as letras e a resposta.');
    } else {
      q.tipo = 'certo-errado';
      if (alts.length) avisos.push('Só ' + alts.length + ' alternativa(s) reconhecida(s); tratada como certo ou errado. Confira.');
      else if (!RE_CE.test(enunciado)) avisos.push('Nenhuma alternativa (A) a (E) encontrada; tratada como certo ou errado. Confira.');
    }
    if (!enunciado) avisos.push('Enunciado vazio.');
    return q;
  }

  function extrairQuestoes(texto) {
    // Linhas de gabarito ("GABARITO 1-A 2-C ..." e as que continuam a lista) saem do texto onde estiverem:
    // em PDF de duas colunas o gabarito do rodapé pode cair no meio do texto extraído.
    var RESPOSTAS = /^\s*(?:\d{1,3}\s*[-–.:)=]?\s*(?:certo|errado|anulada|[a-e]|x)(?![a-z])[\s,;|]*)+$/i;
    var linhas = limpar(texto).split('\n'), resto = [], gab = [];
    for (var i = 0; i < linhas.length; i++) {
      if (/^\s*gabarito\b/i.test(linhas[i])) {
        gab.push(linhas[i]);
        while (i + 1 < linhas.length && (RESPOSTAS.test(linhas[i + 1]) || (!linhas[i + 1].trim() && RESPOSTAS.test(linhas[i + 2] || '')))) gab.push(linhas[++i]);
      } else resto.push(linhas[i]);
    }
    // Lista de respostas no fim do texto, sem a palavra "gabarito" ("1-A 2-B 3-C"): também é gabarito.
    var pares = function (l) { return (l.match(/\d{1,3}\s*[-–.:)=]?\s*(?:certo|errado|[a-e])(?![a-z])/gi) || []).length; };
    while (resto.length && !resto[resto.length - 1].trim()) resto.pop();
    while (resto.length && RESPOSTAS.test(resto[resto.length - 1]) && pares(resto[resto.length - 1]) >= 2) gab.unshift(resto.pop());
    var qs = blocos(resto.join('\n')).map(analisarBloco);
    if (gab.length) aplicarGabarito(qs, lerGabarito(gab.join('\n')));
    return qs;
  }

  /* Gabarito em qualquer formato comum: "1-A 2-C", "01 B", "1) E", "1.C", "Questão 3: D",
     "1 C 2 E" (certo/errado), ou só a sequência "ACDBE". Devolve { numero: 'A'..'E' | true | false }. */
  function lerGabarito(texto) {
    var t = String(texto || '').toUpperCase().replace(/QUEST[ÃA]O/g, ' ');
    var mapa = {}, achou = false, re = /(\d{1,3})\s*[-–.:)=]?\s*(CERTO|ERRADO|ANULADA|[A-E]|X)(?![A-Z])/g, m;
    while ((m = re.exec(t))) {
      achou = true;
      var v = m[2];
      mapa[Number(m[1])] = v === 'CERTO' ? true : v === 'ERRADO' ? false : v === 'ANULADA' || v === 'X' ? null : v;
    }
    if (achou) return mapa;
    // Sequência pura de letras ("ACDBE" ou "A C D B E"). Frase solta ("letra D na primeira") não vira gabarito.
    var resto = t.replace(/GABARITO(?:\s+OFICIAL)?\s*[:\-–]?/g, ' ');
    if (!/^[\sA-E,;.|-]+$/.test(resto)) return {};
    var seq = resto.replace(/[^A-E]/g, '');
    for (var i = 0; i < seq.length; i++) mapa[i + 1] = seq[i];
    return mapa;
  }

  function aplicarGabarito(qs, mapa) {
    var aplicadas = 0;
    qs.forEach(function (q) {
      if (!(q.numero in mapa)) return;
      var v = mapa[q.numero];
      if (v === null) { q.resposta = null; q.avisos.push('Questão anulada no gabarito.'); return; }
      var r = null;
      if (q.tipo === 'certo-errado') {
        // Em prova de certo/errado o gabarito costuma vir como C/E.
        if (v === true || v === 'C') r = true;
        else if (v === false || v === 'E') r = false;
      } else if (typeof v === 'string' && LETRAS.indexOf(v) < q.alternativas.length) r = LETRAS.indexOf(v);
      if (r !== null) { q.resposta = r; aplicadas++; }
    });
    return aplicadas;
  }

  /* CSV de planilha (Excel em português usa ";"). Aspas duplas e quebras de linha dentro de campos. */
  function lerCSV(texto) {
    var t = String(texto || '').replace(/^﻿/, '');
    var primeira = t.split('\n')[0] || '';
    var sep = (primeira.match(/;/g) || []).length >= (primeira.match(/,/g) || []).length ? ';' : ',';
    var linhas = [], campo = '', linha = [], aspas = false;
    for (var i = 0; i < t.length; i++) {
      var c = t[i];
      if (aspas) {
        if (c === '"' && t[i + 1] === '"') { campo += '"'; i++; }
        else if (c === '"') aspas = false;
        else campo += c;
      } else if (c === '"') aspas = true;
      else if (c === sep) { linha.push(campo); campo = ''; }
      else if (c === '\n' || c === '\r') {
        if (c === '\r' && t[i + 1] === '\n') i++;
        linha.push(campo); campo = '';
        if (linha.some(function (x) { return x.trim(); })) linhas.push(linha);
        linha = [];
      } else campo += c;
    }
    linha.push(campo);
    if (linha.some(function (x) { return x.trim(); })) linhas.push(linha);
    return linhas;
  }

  var COLUNAS = ['enunciado', 'a', 'b', 'c', 'd', 'e', 'resposta', 'materia', 'assunto', 'banca', 'ano', 'explicacao'];
  function semAcento(s) { return String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim(); }

  function questoesDoCSV(texto) {
    var linhas = lerCSV(texto);
    if (!linhas.length) return [];
    var cab = linhas[0].map(semAcento);
    var idx = {};
    COLUNAS.forEach(function (c) { idx[c] = cab.indexOf(c === 'a' ? 'a' : c); });
    if (idx.enunciado < 0) throw new Error('A planilha precisa de uma coluna "enunciado". Baixe o modelo.');
    return linhas.slice(1).map(function (l, i) {
      var v = function (c) { return idx[c] >= 0 ? String(l[idx[c]] || '').trim() : ''; };
      var colunas = ['a', 'b', 'c', 'd', 'e'].map(v);
      var alts = colunas.filter(Boolean);
      var r = semAcento(v('resposta')).toUpperCase();
      var q = { numero: i + 1, enunciado: v('enunciado'), alternativas: alts, tipo: alts.length >= 4 ? 'multipla' : 'certo-errado', resposta: null, avisos: [],
        materiaNome: v('materia'), assunto: v('assunto'), banca: v('banca'), ano: v('ano'), comentario: v('explicacao') };
      if (q.tipo === 'multipla' && /^[A-E]$/.test(r)) {
        // A letra se refere à coluna da planilha: com uma coluna vazia antes dela, a posição muda.
        var col = LETRAS.indexOf(r);
        if (colunas[col]) q.resposta = colunas.slice(0, col).filter(Boolean).length;
        else q.avisos.push('A resposta ' + r + ' aponta para uma coluna vazia.');
        if (colunas.slice(0, alts.length).some(function (c) { return !c; })) q.avisos.push('Há coluna de alternativa vazia: as letras foram reorganizadas. Confira.');
      }
      if (q.tipo === 'certo-errado' && /^(C|CERTO|V|VERDADEIRO)$/.test(r)) q.resposta = true;
      if (q.tipo === 'certo-errado' && /^(E|ERRADO|F|FALSO)$/.test(r)) q.resposta = false;
      if (alts.length && alts.length < 4) q.avisos.push('Menos de 4 alternativas: tratada como certo ou errado.');
      if (q.resposta === null) q.avisos.push('Resposta não reconhecida na coluna "resposta".');
      return q;
    }).filter(function (q) { return q.enunciado; });
  }

  var MODELO_CSV = '﻿enunciado;a;b;c;d;e;resposta;materia;assunto;banca;ano;explicacao\n' +
    '"Assinale a alternativa em que o uso da crase está correto.";"Fui à pé.";"Chegou à uma hora.";"Refiro-me à professora.";"Vou à Brasília.";"Entreguei à ela.";C;Língua Portuguesa;Crase;FGV;2024;"Refiro-me a + a professora."\n' +
    '"A Constituição de 1988 adotou a forma federativa de Estado.";;;;;;C;Direito Constitucional;Princípios fundamentais;CEBRASPE;2023;"Art. 1º da CF."\n';

  function slug(s) { return semAcento(s).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40); }

  var Importador = { LIMITE: LIMITE, limpar: limpar, blocos: blocos, extrairQuestoes: extrairQuestoes, lerGabarito: lerGabarito, aplicarGabarito: aplicarGabarito,
    lerCSV: lerCSV, questoesDoCSV: questoesDoCSV, MODELO_CSV: MODELO_CSV, slug: slug, semAcento: semAcento };
  if (typeof module !== 'undefined' && module.exports) module.exports = Importador;
  else root.Importador = Importador;
})(this);
