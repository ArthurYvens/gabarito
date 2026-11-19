/* Minhas questões: o aluno alimenta o próprio banco com PDF, texto colado, planilha ou questões escritas
   à mão. Tudo passa por uma revisão antes de salvar e é validado como entrada não confiável. */
(function () {
  'use strict';
  var esc = UI.esc, ico = UI.ico;
  var S = function () { return Store.estado; };
  var LETRAS = 'ABCDE';

  // Estado da tela (só em memória): modo do painel de entrada e rascunhos em revisão.
  var M = { modo: '', texto: '', gabarito: '', nome: '', origem: '', rascunhos: null, lendoPdf: '' };
  var CHAVE = 'gabarito.importacao';
  try {
    var salvo = JSON.parse(localStorage.getItem(CHAVE) || 'null');
    if (salvo && typeof salvo === 'object') ['modo', 'texto', 'gabarito', 'nome', 'origem'].forEach(function (k) { if (typeof salvo[k] === 'string') M[k] = salvo[k].slice(0, 400000); });
    if (salvo && Array.isArray(salvo.rascunhos) && salvo.meta && typeof salvo.meta === 'object') { M.rascunhos = salvo.rascunhos.slice(0, 500); M.meta = salvo.meta; }
  } catch (e) { /* sem rascunho */ }
  // O rascunho é entrada do próprio aluno; ao salvar, tudo passa pela validação de questão.
  function guardar() {
    try { localStorage.setItem(CHAVE, JSON.stringify({ modo: M.modo, texto: M.texto, gabarito: M.gabarito, nome: M.nome, origem: M.origem, rascunhos: M.rascunhos, meta: M.meta })); } catch (e) { /* sem espaço: o rascunho fica só nesta aba */ }
  }
  function esquecer() {
    M.rascunhos = null; M.texto = ''; M.gabarito = ''; M.nome = ''; M.origem = ''; M.modo = ''; M.lendoPdf = '';
    try { localStorage.removeItem(CHAVE); } catch (e) { /* nada */ }
  }

  function hojeCurto() { return new Date().toLocaleDateString('pt-BR'); }

  // ---------- PDF ----------
  function carregarScript(src) {
    return new Promise(function (ok, falha) {
      if (document.querySelector('script[src="' + src + '"]')) return ok();
      var s = document.createElement('script');
      s.src = src; s.onload = ok; s.onerror = function () { falha(new Error('não carregou ' + src)); };
      document.head.appendChild(s);
    });
  }
  /* Extrai o texto do PDF reconstruindo as linhas. Provas costumam ter duas colunas: quando muitas linhas
     começam na metade da página, lê a coluna da esquerda inteira e depois a da direita. */
  function textoDoPdf(buffer, progresso) {
    return carregarScript('vendor/pdfjs/pdf.min.js').then(function () {
      var lib = window.pdfjsLib;
      lib.GlobalWorkerOptions.workerSrc = 'vendor/pdfjs/pdf.worker.min.js';
      // isEvalSupported:false fecha a execução de código por fonte maliciosa (CVE-2024-4367).
      return lib.getDocument({ data: buffer, isEvalSupported: false, disableFontFace: true, useSystemFonts: false }).promise;
    }).then(function (pdf) {
      var paginas = Math.min(pdf.numPages, 300), feitas = 0, textos = [];
      var cadeia = Promise.resolve();
      for (var n = 1; n <= paginas; n++) (function (n) {
        cadeia = cadeia.then(function () { return pdf.getPage(n); }).then(function (pg) {
          var largura = pg.view[2] - pg.view[0];
          return pg.getTextContent().then(function (c) {
            var itens = c.items.filter(function (i) { return i.str && i.str.trim(); }).map(function (i) { return { x: i.transform[4], y: i.transform[5], w: i.width || 0, s: i.str }; });
            // Duas colunas: muitos trechos começam na metade direita e quase nenhum atravessa o meio (a calha).
            var meio = largura / 2;
            var direita = itens.filter(function (i) { return i.x >= meio * 0.96; }).length;
            var cruzam = itens.filter(function (i) { return i.x < meio * 0.9 && i.x + i.w > meio * 1.05; }).length;
            var linhas;
            if (itens.length > 6 && direita / itens.length > 0.2 && cruzam / itens.length < 0.12) {
              var corte = meio * 0.96;
              // Trechos que atravessam o meio (título, rodapé) ficam na coluna da esquerda, que é lida primeiro.
              linhas = agrupar(itens.filter(function (i) { return i.x < corte; })).concat(agrupar(itens.filter(function (i) { return i.x >= corte; })));
            } else linhas = agrupar(itens);
            textos.push(linhas.map(function (l) { return l.t; }).join('\n'));
            progresso(++feitas, paginas);
          });
        });
      })(n);
      return cadeia.then(function () { return { texto: textos.join('\n\n'), paginas: pdf.numPages, lidas: paginas, cortado: pdf.numPages > paginas }; });
    });
  }
  function agrupar(itens) {
    var ord = itens.slice().sort(function (a, b) { return b.y - a.y || a.x - b.x; }), linhas = [];
    ord.forEach(function (i) {
      var l = linhas[linhas.length - 1];
      if (l && Math.abs(l.y - i.y) < 3) { l.t += (/\s$/.test(l.t) || /^\s/.test(i.s) ? '' : ' ') + i.s; }
      else linhas.push({ y: i.y, x: i.x, t: i.s });
    });
    return linhas.map(function (l) { return { x: l.x, t: l.t.replace(/\s+/g, ' ').trim() }; });
  }

  // ---------- Página ----------
  App.rota('/minhas-questoes/revisao', function () {
    if (!M.rascunhos) { App.ir('#/minhas-questoes', true); return null; }
    return revisao();
  }, 'minhas');
  App.rota('/minhas-questoes', function () {
    var bancos = App.bancos;
    var total = bancos.reduce(function (s, b) { return s + b.questoes.length; }, 0);
    var fonte = function (modo, icone, titulo, texto) {
      return '<button class="card lesson-card fonte-card" data-act="mq-modo" data-modo="' + modo + '" aria-pressed="' + (M.modo === modo) + '"><span class="sigla sigla-sm">' + ico(icone) + '</span><h3>' + titulo + '</h3><p>' + texto + '</p></button>';
    };
    var painel = '';
    if (M.modo === 'texto' || M.modo === 'pdf') {
      painel = '<section class="card mt" id="mq-painel"><div class="card-head"><div><h2>' + (M.modo === 'pdf' ? 'Prova em PDF' : 'Colar texto da prova') + '</h2>' +
        '<p class="small">' + (M.modo === 'pdf' ? 'Escolha o PDF. O texto aparece abaixo para você conferir; depois o app separa as questões e as alternativas.' : 'Cole o texto copiado do PDF, do site ou da apostila. As questões precisam estar numeradas (1., 2) ou "Questão 3") e as alternativas marcadas com A) a E).') + '</p></div></div>' +
        (M.modo === 'pdf' ? '<div class="row" style="margin-bottom:14px"><label class="btn btn-primary">' + ico('upload') + ' Escolher PDF<input type="file" accept=".pdf,application/pdf" id="mq-pdf" class="sr-only"></label><span id="mq-helma"></span><span class="muted small" id="mq-pdf-status" aria-live="polite">' + esc(M.lendoPdf) + '</span></div>' : '') +
        '<label class="field"><span>Texto da prova</span><textarea class="input mono-text" id="mq-texto" rows="12" placeholder="1. Enunciado da primeira questão...&#10;A) primeira alternativa&#10;B) segunda alternativa&#10;...">' + esc(M.texto) + '</textarea></label>' +
        '<label class="field mt"><span>Gabarito <span class="muted small">(opcional; se não tiver, você marca as respostas na revisão)</span></span><textarea class="input" id="mq-gabarito" rows="2" placeholder="1-A 2-C 3-E ...  ou  01 B 02 D  ou  ACDBE  ou, em certo e errado, 1 C 2 E">' + esc(M.gabarito) + '</textarea></label>' +
        '<div class="row-between mt"><span class="muted small">Se o PDF for escaneado (foto da página), não há texto para ler: copie o texto de outra versão da prova.</span><button class="btn btn-primary" data-act="mq-reconhecer">' + ico('check') + ' Reconhecer questões</button></div></section>';
    } else if (M.modo === 'planilha') {
      painel = '<section class="card mt"><h2>Planilha (CSV)</h2><p class="small">Monte a planilha no Excel ou no Google Planilhas com as colunas do modelo: <b>enunciado, a, b, c, d, e, resposta, materia, assunto, banca, ano, explicacao</b>. Para certo ou errado, deixe as colunas a–e vazias e escreva C ou E em resposta. Depois salve no formato CSV: no Excel, Arquivo, Salvar como, tipo "CSV UTF-8"; no Google Planilhas, Arquivo, Fazer download, "Valores separados por vírgula".</p>' +
        '<div class="row mt"><label class="btn btn-primary">' + ico('upload') + ' Escolher planilha .csv<input type="file" accept=".csv,text/csv" id="mq-csv" class="sr-only"></label><button class="btn btn-ghost" data-act="mq-modelo-csv">' + ico('download') + ' Baixar modelo de planilha</button></div></section>';
    } else if (M.modo === 'json') {
      painel = '<section class="card mt"><h2>Banco exportado da Helma</h2><p class="small">Para bancos já no formato do app: exportados de outro aparelho, compartilhados por um colega ou gerados por um professor.</p>' +
        '<div class="row mt"><label class="btn btn-primary">' + ico('upload') + ' Escolher arquivo .json<input type="file" accept=".json,application/json" id="mq-json" class="sr-only"></label><button class="btn btn-ghost" data-act="aj-modelo">' + ico('download') + ' Baixar modelo</button></div></section>';
    }
    var lista = bancos.length ? '<div class="list">' + bancos.map(function (b) {
      var mats = {};
      b.questoes.forEach(function (q) { var m = Banco.materia(q.materia); if (m) mats[m.nome] = 1; });
      return '<div class="list-item"><span class="sigla sigla-sm">' + ico(b.origem === 'pdf' ? 'livro' : b.origem === 'manual' ? 'redacao' : 'questoes') + '</span><div class="grow"><div class="title">' + esc(b.nome) + '</div>' +
        '<div class="sub">' + UI.plural(b.questoes.length, 'questão', 'questões') + ' · ' + esc(Object.keys(mats).slice(0, 3).join(', ')) + ' · ' + UI.dataCurta(b.criadoEm) + '</div></div>' +
        '<div class="row"><button class="btn btn-secondary btn-sm" data-act="mq-praticar" data-id="' + esc(b.id) + '">' + ico('play') + ' Praticar</button>' +
        '<button class="icon-btn" data-act="mq-exportar" data-id="' + esc(b.id) + '" title="Exportar este banco" aria-label="Exportar ' + esc(b.nome) + '">' + ico('download') + '</button>' +
        '<button class="icon-btn" data-act="mq-excluir" data-id="' + esc(b.id) + '" title="Excluir este banco" aria-label="Excluir ' + esc(b.nome) + '">' + ico('lixo') + '</button></div></div>';
    }).join('') + '</div>' : '<div class="empty" style="padding:28px">' + ico('questoes') + '<h3>Nenhuma questão sua ainda</h3><p>Escolha uma das formas acima para começar. Suas questões entram nos simulados, no banco de questões e na revisão como as do app.</p></div>';

    return {
      titulo: 'Minhas questões', manterScroll: true,
      html: '<div class="page-head"><div><span class="eyebrow">Seu banco</span><h1>Minhas questões</h1><p>Transforme provas anteriores, apostilas e anotações em questões para treinar aqui, com correção, estatística e revisão. Tudo fica guardado só neste aparelho.</p></div>' +
        (total ? '<span class="tag tag-pen">' + UI.plural(total, 'questão sua', 'questões suas') + '</span>' : '') + '</div>' +
        (M.rascunhos ? '<div class="callout callout-pen" style="margin-bottom:18px;align-items:center;flex-wrap:wrap">' + ico('alerta') + '<div class="grow"><b>' + UI.plural(M.rascunhos.length, 'questão aguardando', 'questões aguardando') + ' sua revisão.</b> Elas ainda não foram salvas.</div><a class="btn btn-primary btn-sm" href="#/minhas-questoes/revisao">Continuar revisão</a><button class="btn btn-ghost btn-sm" data-act="rv-cancelar">Descartar</button></div>' : '') +
        '<div class="grid g4">' + fonte('pdf', 'livro', 'Enviar PDF', 'Prova ou apostila com texto selecionável. O app separa as questões sozinho.') +
        fonte('texto', 'questoes', 'Colar texto', 'Copiou a prova de um site ou PDF? Cole aqui com o gabarito.') +
        fonte('planilha', 'plano', 'Planilha', 'Muitas questões de uma vez, do Excel ou do Google Planilhas.') +
        '<button class="card lesson-card fonte-card" data-act="mq-escrever"><span class="sigla sigla-sm">' + ico('redacao') + '</span><h3>Escrever questão</h3><p>Digite uma questão do seu caderno ou da aula, com seu comentário.</p></button></div>' +
        '<p class="small mt"><button class="link-btn" data-act="mq-modo" data-modo="json">Já tenho um banco exportado da Helma (de outro aparelho ou de um colega)</button></p>' +
        painel +
        '<section class="card mt-lg"><div class="card-head"><h2>Seus bancos</h2><a class="small" href="#/biblioteca">Onde baixar provas oficiais</a></div>' + lista + '</section>',
      montar: function () {
        var t = document.getElementById('mq-texto'), g = document.getElementById('mq-gabarito');
        var tg;
        if (t) t.addEventListener('input', function () { M.texto = t.value; clearTimeout(tg); tg = setTimeout(guardar, 500); });
        if (g) g.addEventListener('input', function () { M.gabarito = g.value; clearTimeout(tg); tg = setTimeout(guardar, 500); });
        var pdf = document.getElementById('mq-pdf');
        if (pdf) pdf.addEventListener('change', lerPdf);
        var csv = document.getElementById('mq-csv');
        if (csv) csv.addEventListener('change', lerCsv);
        var js = document.getElementById('mq-json');
        if (js) js.addEventListener('change', lerJson);
        var p = document.getElementById('mq-painel');
        if (p && M.modo) p.scrollIntoView({ block: 'nearest' });
      }
    };
  }, 'minhas');

  App.acao('mq-modo', function (el) { var m = el.getAttribute('data-modo'); M.modo = M.modo === m ? '' : m; guardar(); App.render(); });
  App.acao('mq-modelo-csv', function () { UI.baixar('modelo-planilha-helma.csv', Importador.MODELO_CSV, 'text/csv'); });

  function lerPdf(e) {
    var f = e.target.files && e.target.files[0];
    e.target.value = '';
    if (!f) return;
    if (f.size > 60 * 1024 * 1024) { UI.toast('PDF maior que 60 MB. Divida o arquivo.'); return; }
    var aviso = function (t) { M.lendoPdf = t; var s = document.getElementById('mq-pdf-status'); if (s) s.textContent = t; };
    aviso('Lendo ' + f.name + '...');
    var lugar = document.getElementById('mq-helma');
    if (lugar) { lugar.innerHTML = Personagem.html({ tamanho: 46, humor: 'pensando' }); Personagem.acordar(lugar); }
    f.arrayBuffer().then(function (buf) {
      return textoDoPdf(buf, function (n, total) { aviso('Lendo página ' + n + ' de ' + total + '...'); });
    }).then(function (r) {
      M.nome = f.name.replace(/\.pdf$/i, '').slice(0, 80);
      M.origem = 'pdf';
      M.texto = r.texto;
      if (!r.texto.trim()) { aviso('Este PDF não tem texto (é imagem escaneada). Copie o texto de outra versão.'); App.render(); return; }
      aviso((r.cortado ? 'Lidas as 300 primeiras de ' + r.paginas + ' páginas (divida o PDF para ler o resto)' : UI.plural(r.lidas, 'página lida', 'páginas lidas')) + '. Confira o texto e clique em Reconhecer questões.');
      App.render();
    }).catch(function (err) {
      aviso('Não foi possível ler este PDF' + (/password/i.test(String(err && err.name)) ? ': ele tem senha.' : '.'));
    });
  }

  function lerCsv(e) {
    var f = e.target.files && e.target.files[0];
    e.target.value = '';
    if (!f) return;
    if (f.size > 20 * 1024 * 1024) { UI.toast('Planilha maior que 20 MB.'); return; }
    // O Excel em português salva "CSV" em Windows-1252; só o "CSV UTF-8" vem em UTF-8. Tenta os dois.
    f.arrayBuffer().then(function (buf) {
      var t;
      try { t = new TextDecoder('utf-8', { fatal: true }).decode(buf); } catch (e) { t = new TextDecoder('windows-1252').decode(buf); }
      var qs;
      try { qs = Importador.questoesDoCSV(t); } catch (err) { UI.toast(err.message); return; }
      if (!qs.length) { UI.toast('Nenhuma linha com enunciado na planilha.'); return; }
      M.nome = f.name.replace(/\.csv$/i, '').slice(0, 80); M.origem = 'csv';
      abrirRevisao(qs);
    });
  }

  function lerJson(e) {
    App.lerArquivo(e.target, function (dados, nomeArq) {
      var lista = Array.isArray(dados) ? dados : dados && dados.questoes;
      if (!Array.isArray(lista) || !lista.length) { UI.toast('Não encontrei uma lista "questoes" no arquivo.'); return; }
      App.adicionarBanco({ nome: (dados.nome || nomeArq.replace(/\.json$/i, '')), origem: 'json', materias: dados.materias, questoes: lista }).then(function (r) {
        if (!r.banco) { UI.confirmar('Nenhuma questão válida', r.recusadas.slice(0, 4).join(' · '), 'Entendi', { cancelar: 'Fechar' }); return; }
        M.modo = '';
        UI.toast(UI.plural(r.banco.questoes.length, 'questão importada', 'questões importadas') + (r.recusadas.length ? '; ' + r.recusadas.length + ' recusada(s).' : '.'));
        App.render();
      }, function () { UI.toast('Não houve espaço para salvar neste aparelho.'); });
    });
  }

  App.acao('mq-reconhecer', function () {
    var t = document.getElementById('mq-texto');
    M.texto = t ? t.value : M.texto;
    M.gabarito = (document.getElementById('mq-gabarito') || {}).value || M.gabarito;
    if (M.texto.length > Importador.LIMITE) UI.toast('Texto muito longo: só os primeiros 2 milhões de caracteres foram lidos. Divida o material em partes.');
    var qs = Importador.extrairQuestoes(M.texto);
    if (!qs.length) { UI.toast('Não encontrei questões numeradas. Confira se começam com "1.", "1)" ou "Questão 1".'); return; }
    if (M.gabarito.trim()) {
      var aplicadas = Importador.aplicarGabarito(qs, Importador.lerGabarito(M.gabarito));
      if (!aplicadas) { UI.toast('Não entendi o gabarito. Escreva assim: 1-A 2-C 3-E (ou só as letras em sequência: ACE).'); return; }
      if (aplicadas < qs.length) UI.toast('Gabarito aplicado em ' + aplicadas + ' de ' + qs.length + ' questões. Marque as outras na revisão.');
    }
    if (!M.origem) M.origem = 'texto';
    if (!M.nome) M.nome = 'Prova colada em ' + hojeCurto();
    abrirRevisao(qs);
  });
  App.acao('mq-escrever', function () {
    M.origem = 'manual'; M.nome = M.nome || 'Minhas questões';
    abrirRevisao([{ numero: 1, enunciado: '', alternativas: ['', '', '', '', ''], tipo: 'multipla', resposta: null, avisos: [] }]);
  });

  // ---------- Revisão ----------
  function abrirRevisao(qs) {
    var p = S().perfil;
    M.rascunhos = qs.map(function (q) { return Object.assign({ incluir: true, comentario: '' }, q); });
    M.meta = M.meta || { materia: (p.materias || [])[0] || 'portugues', novaMateria: '', assunto: '', banca: '', ano: '', estilo: 'Outra', dificuldade: 2 };
    guardar();
    App.ir('#/minhas-questoes/revisao');
    window.scrollTo(0, 0);
  }

  function lerEditor() {
    // O salvamento automático (com atraso) pode disparar depois que a revisão já foi salva ou descartada.
    if (!M.rascunhos || !document.getElementById('rv-nome')) return;
    var g = function (id) { var el = document.getElementById(id); return el ? el.value : ''; };
    M.nome = g('rv-nome').trim() || M.nome;
    M.meta.materia = g('rv-materia');
    M.meta.novaMateria = g('rv-nova').trim();
    M.meta.assunto = g('rv-assunto').trim();
    M.meta.banca = g('rv-banca').trim();
    M.meta.ano = g('rv-ano').trim();
    M.meta.estilo = g('rv-estilo') || 'Outra';
    M.meta.dificuldade = Number(g('rv-dif')) || 2;
    M.rascunhos.forEach(function (q, i) {
      var c = document.querySelector('[data-rv="' + i + '"]');
      if (!c) return;
      q.incluir = c.querySelector('[data-campo="incluir"]').checked;
      q.enunciado = c.querySelector('[data-campo="enunciado"]').value.trim();
      q.comentario = c.querySelector('[data-campo="comentario"]').value.trim();
      if (q.tipo === 'multipla') q.alternativas = Array.prototype.map.call(c.querySelectorAll('[data-campo="alt"]'), function (el) { return el.value.trim(); });
      var marcada = c.querySelector('input[type="radio"]:checked');
      q.resposta = marcada ? (q.tipo === 'multipla' ? Number(marcada.value) : marcada.value === 'true') : null;
    });
  }

  function revisao() {
    var r = M.rascunhos, meta = M.meta;
    var semResp = r.filter(function (q) { return q.incluir && q.resposta === null; }).length;
    var porLinha = M.origem === 'csv' && r.some(function (q) { return q.materiaNome; });
    var cartao = function (q, i) {
      var nome = 'rv-r-' + i;
      var alts = q.tipo === 'multipla'
        ? '<div class="rv-alts">' + q.alternativas.map(function (a, j) {
          return '<div class="rv-alt"><label class="rv-radio" title="Marcar ' + LETRAS[j] + ' como resposta certa"><input type="radio" name="' + nome + '" value="' + j + '"' + (q.resposta === j ? ' checked' : '') + '><span class="bubble">' + LETRAS[j] + '</span></label>' +
            '<label class="sr-only" for="' + nome + '-' + j + '">Alternativa ' + LETRAS[j] + '</label><input class="input" id="' + nome + '-' + j + '" data-campo="alt" value="' + esc(a) + '"></div>';
        }).join('') + '</div><p class="small muted">Clique na letra da alternativa certa.</p>'
        : '<div class="row"><label class="chip"><input type="radio" name="' + nome + '" value="true"' + (q.resposta === true ? ' checked' : '') + '> Certo</label><label class="chip"><input type="radio" name="' + nome + '" value="false"' + (q.resposta === false ? ' checked' : '') + '> Errado</label></div>';
      return '<section class="card rv-card' + (q.incluir ? '' : ' rv-off') + '" data-rv="' + i + '"><div class="row-between"><label class="row" style="gap:8px"><input type="checkbox" data-campo="incluir"' + (q.incluir ? ' checked' : '') + '> <b>Questão ' + q.numero + '</b></label>' +
        '<div class="row">' + (q.resposta === null ? '<span class="tag tag-warn">Sem resposta</span>' : '<span class="tag tag-ok">' + ico('check') + (q.tipo === 'multipla' ? LETRAS[q.resposta] : q.resposta ? 'Certo' : 'Errado') + '</span>') +
        '<button class="btn btn-ghost btn-sm" data-act="rv-tipo" data-i="' + i + '">' + (q.tipo === 'multipla' ? 'Mudar para certo ou errado' : 'Mudar para múltipla escolha') + '</button></div></div>' +
        (q.avisos && q.avisos.length ? '<div class="callout callout-marker small mt">' + ico('alerta') + '<div>' + q.avisos.map(esc).join('<br>') + '</div></div>' : '') +
        (q.materiaNome ? '<p class="small muted mt">Matéria na planilha: <b>' + esc(q.materiaNome) + '</b>' + (q.assunto ? ' · assunto: ' + esc(q.assunto) : '') + '</p>' : '') +
        '<label class="field mt"><span>Enunciado</span><textarea class="input" rows="4" data-campo="enunciado">' + esc(q.enunciado) + '</textarea></label>' +
        '<div class="field mt"><span class="label">' + (q.tipo === 'multipla' ? 'Alternativas' : 'Gabarito do item') + '</span>' + alts + '</div>' +
        '<label class="field mt"><span>Comentário <span class="muted small">(opcional: resolução, macete, fonte)</span></span><textarea class="input" rows="2" data-campo="comentario">' + esc(q.comentario || '') + '</textarea></label></section>';
    };
    var mats = Banco.materias.map(function (m) { return '<option value="' + esc(m.id) + '"' + (meta.materia === m.id ? ' selected' : '') + '>' + esc(m.nome) + '</option>'; }).join('');
    return {
      titulo: 'Revisar questões', manterScroll: true,
      html: '<div class="page-head"><div><span class="eyebrow">Minhas questões · revisão</span><h1>Confira antes de salvar</h1><p>' + UI.plural(r.length, 'questão reconhecida', 'questões reconhecidas') + '. Corrija o que o app separou errado, marque a resposta certa e desmarque o que não quiser guardar.</p></div>' +
        '<button class="btn btn-ghost" data-act="rv-cancelar">' + ico('x') + ' Descartar</button></div>' +
        '<section class="card"><h2>Sobre este material</h2><div class="grid g2 mt">' +
        '<label class="field"><span>Nome do banco</span><input class="input" id="rv-nome" maxlength="80" value="' + esc(M.nome) + '"></label>' +
        (porLinha ? '<div class="field"><span class="label">Matéria</span><small>Cada questão usa a matéria da sua linha na planilha. Matérias que não existem no app são criadas como suas.</small><input type="hidden" id="rv-materia" value="' + esc(meta.materia) + '"></div>'
          : '<label class="field"><span>Matéria</span><select class="input" id="rv-materia">' + mats + '<option value="__nova"' + (meta.materia === '__nova' ? ' selected' : '') + '>+ Outra matéria (criar)</option></select></label>') +
        '<label class="field"><span>Nova matéria <span class="muted small">(só se escolheu "Outra")</span></span><input class="input" id="rv-nova" maxlength="60" placeholder="Ex.: Contabilidade, Atualidades, Legislação do órgão" value="' + esc(meta.novaMateria) + '"></label>' +
        '<label class="field"><span>Assunto</span><input class="input" id="rv-assunto" maxlength="80" placeholder="Ex.: Crase (vazio = Geral)" value="' + esc(meta.assunto) + '"></label>' +
        '<label class="field"><span>Banca <span class="muted small">(opcional)</span></span><input class="input" id="rv-banca" maxlength="40" placeholder="Ex.: FGV" value="' + esc(meta.banca) + '"></label>' +
        '<label class="field"><span>Ano da prova <span class="muted small">(opcional)</span></span><input class="input" id="rv-ano" type="number" min="1950" max="2100" value="' + esc(meta.ano) + '"></label>' +
        '<label class="field"><span>Estilo de banca</span><select class="input" id="rv-estilo">' + Banco.ESTILOS.map(function (e) { return '<option' + (meta.estilo === e ? ' selected' : '') + '>' + esc(e) + '</option>'; }).join('') + '</select></label>' +
        '<label class="field"><span>Dificuldade</span><select class="input" id="rv-dif">' + [[1, 'Fácil'], [2, 'Média'], [3, 'Difícil']].map(function (d) { return '<option value="' + d[0] + '"' + (meta.dificuldade === d[0] ? ' selected' : '') + '>' + d[1] + '</option>'; }).join('') + '</select></label>' +
        '</div></section>' +
        '<div class="stack mt">' + r.map(cartao).join('') + '</div>' +
        '<div class="rv-barra"><span>' + UI.plural(r.filter(function (q) { return q.incluir; }).length, 'questão marcada', 'questões marcadas') + (semResp ? ' · <b style="color:var(--warn)">' + semResp + ' sem resposta</b>' : '') + '</span>' +
        '<div class="row">' + (M.origem === 'manual' ? '<button class="btn btn-secondary" data-act="rv-mais">+ Outra questão</button>' : '') + '<button class="btn btn-primary" data-act="rv-salvar">' + ico('check') + ' Salvar no meu banco</button></div></div>',
      montar: function () {
        // Cada digitação vai para o rascunho guardado (recarregar a página não perde a revisão).
        var td;
        document.querySelector('.main').addEventListener('input', function () { clearTimeout(td); td = setTimeout(function () { lerEditor(); guardar(); }, 600); });
        // Marcar a resposta só atualiza a etiqueta; o resto é lido do formulário ao salvar.
        document.querySelectorAll('.rv-card input[type="radio"], .rv-card [data-campo="incluir"]').forEach(function (el) {
          el.addEventListener('change', function () { lerEditor(); App.render(); });
        });
      }
    };
  }

  App.acao('rv-tipo', function (el) {
    lerEditor();
    var q = M.rascunhos[Number(el.getAttribute('data-i'))];
    q.tipo = q.tipo === 'multipla' ? 'certo-errado' : 'multipla';
    if (q.tipo === 'multipla' && q.alternativas.length < 4) q.alternativas = q.alternativas.concat(['', '', '', '', '']).slice(0, 5);
    q.resposta = null;
    guardar();
    App.render();
  });
  App.acao('rv-mais', function () {
    lerEditor();
    M.rascunhos.push({ numero: M.rascunhos.length + 1, enunciado: '', alternativas: ['', '', '', '', ''], tipo: 'multipla', resposta: null, avisos: [], incluir: true, comentario: '' });
    App.render();
    var ult = document.querySelector('[data-rv="' + (M.rascunhos.length - 1) + '"] textarea');
    if (ult) { ult.scrollIntoView({ block: 'center' }); ult.focus(); }
  });
  App.acao('rv-cancelar', function () {
    UI.confirmar('Descartar a revisão?', 'As questões reconhecidas não serão salvas.', 'Descartar', { perigo: true }).then(function (ok) {
      if (!ok) return;
      esquecer(); App.ir('#/minhas-questoes', true); App.render();
    });
  });

  function materiaPorNome(nome, criadas) {
    var alvo = Importador.semAcento(nome);
    var achou = Banco.materias.filter(function (m) { return Importador.semAcento(m.nome) === alvo || m.id === alvo; })[0] ||
      criadas.filter(function (m) { return Importador.semAcento(m.nome) === alvo; })[0];
    if (achou) return achou.id;
    var slug = Importador.slug(nome).slice(0, 38);
    if (slug.length < 2) return null;
    var nova = { id: 'x-' + slug, nome: nome.trim().slice(0, 60), sigla: (Importador.semAcento(nome).replace(/[^a-z0-9]/g, '').slice(0, 3) || 'MAT').toUpperCase().padEnd(2, 'X') };
    criadas.push(nova);
    return nova.id;
  }

  var salvando = false; // trava contra duplo clique enquanto o IndexedDB grava
  App.acao('rv-salvar', function () {
    if (salvando) return;
    lerEditor();
    var meta = M.meta, criadas = [], p = S().perfil;
    var incluidas = M.rascunhos.filter(function (q) { return q.incluir; });
    if (!incluidas.length) { UI.toast('Marque ao menos uma questão para salvar.'); return; }
    var problema = function (q) {
      if (!q.enunciado) return 'falta o enunciado';
      if (q.tipo === 'multipla' && q.alternativas.filter(Boolean).length < 4) return 'faltam alternativas (mínimo 4)';
      if (q.resposta === null) return 'falta marcar a resposta certa';
      if (q.tipo === 'multipla' && !q.alternativas[q.resposta]) return 'a resposta marcada está numa alternativa vazia';
      return '';
    };
    var falta = incluidas.filter(problema);
    if (falta.length) {
      UI.toast('Questão ' + falta[0].numero + ': ' + problema(falta[0]) + '.' + (falta.length > 1 ? ' Mais ' + (falta.length - 1) + ' com pendência.' : ''));
      var c = document.querySelector('[data-rv="' + M.rascunhos.indexOf(falta[0]) + '"]');
      if (c) { c.scrollIntoView({ block: 'center' }); var campo = c.querySelector(!falta[0].enunciado ? '[data-campo="enunciado"]' : 'input[type="radio"], [data-campo="alt"]'); if (campo) campo.focus({ preventScroll: true }); }
      return;
    }
    var materiaPadrao = meta.materia;
    if (materiaPadrao === '__nova') {
      if (!meta.novaMateria) { UI.toast('Escreva o nome da nova matéria.'); document.getElementById('rv-nova').focus(); return; }
      materiaPadrao = materiaPorNome(meta.novaMateria, criadas);
    }
    var ano = Number(meta.ano), prova = meta.banca && ano >= 1950 && ano <= 2100 ? { banca: meta.banca.slice(0, 40), ano: ano } : undefined;
    var base = 'meu-' + Date.now().toString(36);
    var questoes = incluidas.map(function (q, i) {
      var alts = q.alternativas.filter(Boolean);
      var r = q.tipo === 'multipla' ? q.alternativas.slice(0, q.resposta + 1).filter(Boolean).length - 1 : q.resposta; // índice depois de tirar alternativas vazias
      var materia = q.materiaNome ? materiaPorNome(q.materiaNome, criadas) : materiaPadrao;
      var out = {
        id: base + '-' + (i + 1), materia: materia || 'portugues', assunto: (q.assunto || meta.assunto || 'Geral').slice(0, 80),
        tipo: q.tipo, estilo: meta.estilo, dificuldade: meta.dificuldade, objetivos: [p.objetivo || 'livre'],
        enunciado: q.enunciado.slice(0, 20000), resposta: r, autoria: 'aluno'
      };
      if (q.tipo === 'multipla') out.alternativas = alts.slice(0, 5);
      var linhaProva = prova || (q.banca && Number(q.ano) >= 1950 && Number(q.ano) <= 2100 ? { banca: String(q.banca).slice(0, 40), ano: Number(q.ano) } : undefined);
      if (linhaProva) out.prova = linhaProva;
      if (q.comentario) out.explicacao = { resumo: q.comentario.slice(0, 5000) };
      return out;
    });
    salvando = true;
    App.adicionarBanco({ nome: M.nome, origem: M.origem || 'manual', materias: criadas, questoes: questoes }).then(function (res) {
      salvando = false;
      if (!res.banco) { UI.confirmar('Não foi possível salvar', res.recusadas.slice(0, 4).join(' · '), 'Entendi', { cancelar: 'Fechar' }); return; }
      esquecer();
      App.ir('#/minhas-questoes', true);
      UI.confirmar('Questões salvas', UI.plural(res.banco.questoes.length, 'questão foi guardada', 'questões foram guardadas') + ' no seu banco.' + (res.recusadas.length ? ' ' + res.recusadas.length + ' recusada(s).' : '') + ' Quer treinar com elas agora?', 'Praticar agora', { cancelar: 'Depois' })
        .then(function (ok) { if (ok) praticar(res.banco); else App.render(); });
    }, function () { salvando = false; UI.toast('Não houve espaço para salvar neste aparelho.'); });
  });

  function praticar(b) {
    App.criarSimulado({ ids: Motor.embaralhar(b.questoes.map(function (q) { return q.id; }), Motor.rng(Date.now())).slice(0, 50), modo: 'estudo' }, 'Treino: ' + b.nome);
  }
  function bancoPorId(id) { return App.bancos.filter(function (b) { return b.id === id; })[0]; }
  App.acao('mq-praticar', function (el) { var b = bancoPorId(el.getAttribute('data-id')); if (b) praticar(b); });
  App.acao('mq-exportar', function (el) {
    var b = bancoPorId(el.getAttribute('data-id'));
    if (b) UI.baixar(Importador.slug(b.nome || 'banco') + '.json', JSON.stringify({ nome: b.nome, materias: b.materias, questoes: b.questoes }, null, 1));
  });
  App.acao('mq-excluir', function (el) {
    var b = bancoPorId(el.getAttribute('data-id'));
    if (!b) return;
    UI.confirmar('Excluir "' + b.nome + '"?', UI.plural(b.questoes.length, 'questão sai', 'questões saem') + ' do app. Exporte antes se quiser guardar uma cópia.', 'Excluir', { perigo: true }).then(function (ok) {
      if (!ok) return;
      App.removerBanco(b.id).then(function () { location.reload(); });
    });
  });
})();
