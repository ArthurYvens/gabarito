/* Análise automática da estrutura de uma redação. Não dá nota: aponta o que um corretor procuraria
   (tamanho, parágrafos, conectivos, proposta de intervenção, marcas de oralidade). */
(function (root) {
  'use strict';

  var CONECTIVOS = {
    'Adição': ['além disso', 'ademais', 'outrossim', 'também', 'não só', 'mas também', 'bem como', 'somado a isso', 'acrescenta-se', 'soma-se a isso'],
    'Oposição': ['entretanto', 'contudo', 'todavia', 'no entanto', 'porém', 'embora', 'apesar de', 'não obstante', 'em contrapartida', 'ainda que', 'mesmo que', 'por outro lado'],
    'Causa': ['porque', 'visto que', 'já que', 'uma vez que', 'dado que', 'haja vista', 'em virtude de', 'devido a', 'em razão de', 'tendo em vista'],
    'Consequência': ['assim', 'dessa forma', 'desse modo', 'consequentemente', 'por conseguinte', 'de modo que', 'logo', 'por isso', 'em decorrência disso', 'como resultado'],
    'Conclusão': ['portanto', 'em suma', 'diante do exposto', 'em síntese', 'conclui-se', 'dessarte', 'dessa maneira', 'por fim', 'em vista disso', 'logo, é fundamental'],
    'Exemplificação': ['por exemplo', 'a exemplo de', 'como ocorre', 'é o caso de', 'tal como', 'como se observa', 'a saber'],
    'Explicação': ['ou seja', 'isto é', 'em outras palavras', 'vale dizer', 'quer dizer'],
    'Ordenação': ['em primeiro lugar', 'em segundo lugar', 'primeiramente', 'inicialmente', 'em seguida', 'posteriormente', 'em última análise', 'sob esse viés', 'nesse sentido', 'nesse contexto'],
    'Comparação': ['assim como', 'da mesma forma', 'analogamente', 'de maneira análoga', 'igualmente', 'à semelhança de']
  };

  var AGENTES = ['governo federal', 'governo', 'estado', 'ministério', 'secretaria', 'secretarias', 'escola', 'escolas', 'mídia', 'imprensa', 'ong', 'ongs',
    'organizações não governamentais', 'sociedade civil', 'família', 'famílias', 'congresso nacional', 'congresso', 'poder legislativo', 'poder executivo',
    'poder judiciário', 'prefeitura', 'prefeituras', 'municípios', 'empresas', 'universidades', 'instituições de ensino', 'iniciativa privada',
    'ministério público', 'poder público', 'união', 'governos estaduais', 'órgãos públicos', 'defensoria pública', 'sociedade'];
  var ACAO = ['deve', 'devem', 'deverá', 'deverão', 'cabe', 'caberá', 'compete', 'é necessário que', 'é preciso que', 'é fundamental que', 'é imprescindível que', 'urge que'];
  var MEIO = ['por meio de', 'por meio da', 'por meio do', 'mediante', 'através de', 'através da', 'através do', 'por intermédio de', 'com o auxílio de', 'via'];
  var FINALIDADE = ['a fim de', 'para que', 'com o objetivo de', 'com a finalidade de', 'de modo a', 'de forma a', 'visando', 'com o intuito de', 'objetivando', 'com vistas a'];
  var DETALHE = ['ou seja', 'isto é', 'a exemplo de', 'como ocorre', 'tal como', 'como, por exemplo', ', que ', ', os quais', ', as quais', ', o qual', ', a qual'];

  var CLICHES = ['nos dias de hoje', 'desde os primórdios', 'hoje em dia', 'nos tempos atuais', 'é de suma importância', 'vivemos em um mundo',
    'nos dias atuais', 'cada vez mais', 'nos últimos tempos', 'é notório que', 'mal do século'];

  var PARADAS = ('a o e é de da do das dos em no na nos nas um uma uns umas para por com sem que se não mais como mas ao aos à às ou ser são foi era ' +
    'isso isto esse essa este esta esses essas estes estas sua seu suas seus ele ela eles elas pelo pela pelos pelas entre sobre também quando muito ' +
    'muitos muitas onde quem qual quais porque assim ainda já pode podem deve devem forma modo maneira parte sociedade brasil brasileira brasileiro').split(' ');

  function norm(t) { return String(t || '').toLowerCase().replace(/[“”]/g, '"').replace(/\s+/g, ' '); }
  function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function achar(texto, termo) {
    if (/^[,\s]/.test(termo)) return texto.indexOf(termo) >= 0; // termos que começam com vírgula: busca literal
    return new RegExp('(?<![\\p{L}\\p{N}])' + escRe(termo) + '(?![\\p{L}\\p{N}])', 'iu').test(texto);
  }
  function primeiro(texto, lista) {
    for (var i = 0; i < lista.length; i++) if (achar(texto, lista[i])) return lista[i].trim().replace(/^,\s*/, '');
    return null;
  }

  function analisar(texto) {
    var bruto = String(texto || '').slice(0, 20000).trim(); // uma redação tem ~3 mil caracteres; o limite protege as regex
    var paragrafos = bruto ? bruto.split(/\n\s*\n|\n/).map(function (p) { return p.trim(); }).filter(Boolean) : [];
    var t = norm(bruto);
    var palavras = (t.match(/[\p{L}\p{N}][\p{L}\p{N}'-]*/gu) || []);
    var frases = bruto.split(/(?<=[.!?])\s+/).map(function (f) { return f.trim(); }).filter(Boolean);

    var conectivos = [];
    Object.keys(CONECTIVOS).forEach(function (cat) {
      CONECTIVOS[cat].forEach(function (c) { if (achar(t, c)) conectivos.push({ termo: c, categoria: cat }); });
    });
    var categorias = {};
    conectivos.forEach(function (c) { categorias[c.categoria] = true; });

    var cont = {};
    palavras.forEach(function (p) { if (p.length >= 5 && PARADAS.indexOf(p) < 0) cont[p] = (cont[p] || 0) + 1; });
    var repeticoes = Object.keys(cont).filter(function (p) { return cont[p] >= 4; })
      .map(function (p) { return { palavra: p, n: cont[p] }; }).sort(function (a, b) { return b.n - a.n; }).slice(0, 6);

    var ultimo = norm(paragrafos[paragrafos.length - 1] || '');
    var proposta = paragrafos.length >= 2 ? {
      agente: primeiro(ultimo, AGENTES), acao: primeiro(ultimo, ACAO), meio: primeiro(ultimo, MEIO),
      finalidade: primeiro(ultimo, FINALIDADE), detalhamento: primeiro(ultimo, DETALHE)
    } : { agente: null, acao: null, meio: null, finalidade: null, detalhamento: null };

    var alertas = [];
    var add = function (tipo, msg) { alertas.push({ tipo: tipo, texto: msg }); };
    var primeiraPessoa = ['eu', 'meu', 'minha', 'meus', 'minhas', 'acho que', 'na minha opinião', 'creio que'].filter(function (x) { return achar(t, x); });
    if (primeiraPessoa.length) add('Impessoalidade', 'Marcas de 1ª pessoa do singular ("' + primeiraPessoa.slice(0, 3).join('", "') + '"). Prefira construções impessoais: "percebe-se", "é evidente que".');
    var informal = ['né', 'vc', 'pra', 'pro', 'tá', 'aí', 'a gente', 'coisa', 'coisas', 'tipo assim'].filter(function (x) { return achar(t, x); });
    if (/(?<![\p{L}])tipo(?!\s+de)(?![\p{L}])/iu.test(t) && informal.indexOf('tipo assim') < 0) informal.push('tipo');
    if (informal.length) add('Registro formal', 'Marcas de oralidade: "' + informal.slice(0, 4).join('", "') + '". Troque por equivalentes formais.');
    var cliches = CLICHES.filter(function (c) { return achar(t, c); });
    if (cliches.length) add('Clichê', 'Expressões desgastadas: "' + cliches.join('", "') + '". Elas ocupam linha sem acrescentar argumento.');
    if (bruto.indexOf('?') >= 0) add('Pergunta retórica', 'Perguntas no texto dissertativo enfraquecem a tese; transforme-as em afirmações.');
    var longas = frases.filter(function (f) { return f.split(/\s+/).length > 45; }).length;
    if (longas) add('Períodos longos', longas + ' período(s) com mais de 45 palavras. Divida para ganhar clareza.');
    repeticoes.slice(0, 3).forEach(function (r) { add('Repetição', '"' + r.palavra + '" aparece ' + r.n + ' vezes. Use sinônimos ou pronomes para retomar.'); });

    var linhas = Math.round(palavras.length / 10); // folha do ENEM: ~10 palavras por linha manuscrita
    var nCat = Object.keys(categorias).length;
    var checklist = [
      { ok: linhas >= 20 && linhas <= 30, titulo: 'Extensão', detalhe: '≈ ' + linhas + ' linhas (' + palavras.length + ' palavras). O ideal no ENEM é entre 20 e 30; menos de 8 linhas zera a redação.' },
      { ok: paragrafos.length >= 4 && paragrafos.length <= 5, titulo: 'Paragrafação', detalhe: paragrafos.length + ' parágrafo(s). Estrutura clássica: introdução, 2 desenvolvimentos e conclusão.' },
      { ok: conectivos.length >= 6 && nCat >= 4, titulo: 'Coesão (Competência 4)', detalhe: conectivos.length + ' conectivo(s) de ' + nCat + ' tipo(s). Busque 6+ conectivos variados, inclusive entre parágrafos.' },
      { ok: !!(proposta.agente && proposta.acao && proposta.meio && proposta.finalidade), titulo: 'Proposta de intervenção (Competência 5)', detalhe: 'Agente, ação, meio/modo, finalidade e detalhamento no último parágrafo.' },
      { ok: alertas.filter(function (a) { return a.tipo === 'Impessoalidade' || a.tipo === 'Registro formal'; }).length === 0, titulo: 'Norma formal (Competência 1)', detalhe: 'Sem 1ª pessoa do singular nem marcas de oralidade.' }
    ];

    return {
      palavras: palavras.length, linhasEstimadas: linhas, paragrafos: paragrafos.length, frases: frases.length,
      mediaPalavrasFrase: frases.length ? Math.round(palavras.length / frases.length) : 0,
      conectivos: conectivos, categoriasConectivos: nCat, repeticoes: repeticoes, proposta: proposta, alertas: alertas, checklist: checklist
    };
  }

  var Analise = { analisar: analisar, CONECTIVOS: CONECTIVOS, CLICHES: CLICHES };
  if (typeof module !== 'undefined' && module.exports) module.exports = Analise;
  else root.Analise = Analise;
})(this);
