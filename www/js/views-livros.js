/* Livros: estante pessoal no aparelho (IndexedDB). Guarda o arquivo original e lê PDF (canvas do pdf.js), EPUB, DOCX,
   HTML, TXT e MD em modo leitura. Nada sai do aparelho; o texto do arquivo só entra na tela como texto escapado.
   A lista de livros é lida e gravada numa transação só (Armazem.atualizar): duas abas abertas não se sobrescrevem. */
(function () {
  'use strict';
  var esc = UI.esc, ico = UI.ico, App = window.App;
  var MAX_LIVRO = 200 * 1048576;
  var MAX_CONFERIR = 50 * 1048576; // acima disso o texto não é lido por inteiro no envio
  var MAX_PIXELS = 16000000;       // área máxima do canvas de uma página de PDF
  var ACEITA = '.pdf,.epub,.txt,.md,.markdown,.html,.htm,.docx,.mobi,.azw,.azw3';
  var NOMES = { pdf: 'PDF', epub: 'EPUB', txt: 'TXT', md: 'MD', html: 'HTML', docx: 'DOCX' };
  var tem = function (o, k) { return Object.prototype.hasOwnProperty.call(o, k); };

  var L = { indice: [], busca: '', avisos: [] };   // último índice lido e mensagens da última adição
  var R = null;                                     // livro aberto no leitor

  function mb(n) {
    if (n < 1048576) return Math.max(1, Math.round(n / 1024)).toLocaleString('pt-BR') + ' KB';
    return n >= 1073741824 ? (n / 1073741824).toLocaleString('pt-BR', { maximumFractionDigits: 1 }) + ' GB' : (n / 1048576).toLocaleString('pt-BR', { maximumFractionDigits: 1 }) + ' MB';
  }
  function limpar(lista) {
    return (Array.isArray(lista) ? lista : []).filter(function (l) {
      return l && typeof l === 'object' && typeof l.id === 'string' && /^[a-z0-9-]{3,40}$/.test(l.id) && typeof l.formato === 'string' && tem(NOMES, l.formato) && typeof l.titulo === 'string' && Number.isFinite(l.tamanho);
    }).map(function (l) {
      var p = l.pos && typeof l.pos === 'object' ? l.pos : {};
      return { id: l.id, titulo: l.titulo.slice(0, 200), formato: l.formato, tamanho: Math.max(0, l.tamanho), criadoEm: Number(l.criadoEm) || 0, abertoEm: Number(l.abertoEm) || 0,
        pos: { pagina: Math.max(1, Math.floor(Number(p.pagina)) || 1), secao: Math.max(0, Math.floor(Number(p.secao)) || 0), y: Math.min(1, Math.max(0, Number(p.y) || 0)) } };
    });
  }
  // Sempre relê do IndexedDB: o que outra aba gravou conta.
  function carregar() { return Armazem.ler('livros').then(function (l) { return (L.indice = limpar(l)); }); }
  // Muda a lista de forma atômica: fn recebe a lista atual (limpa) e devolve a nova.
  function mudar(fn) { return Armazem.atualizar('livros', function (l) { return fn(limpar(l)); }).then(function (l) { return (L.indice = l); }); }
  function guardarMsg(e) {
    if (e && e.name === 'QuotaExceededError') return 'não há espaço neste aparelho';
    if (e && e.message === 'sem IndexedDB') return 'este navegador não permite guardar arquivos agora (talvez seja uma janela anônima)';
    return e && e.extracao ? String(e.message).replace(/\.$/, '') : 'não foi possível guardar o arquivo neste aparelho';
  }

  // ---------- API usada por Contexto ----------
  /* Texto de qualquer arquivo (PDF pelo pdf.js do app). Devolve { secoes, cortado, caracteres }. Erros saem em português. */
  App.extrairArquivo = function (nome, buffer, progresso) {
    return Extracao.extrair(Extracao.tipo(nome), buffer, {
      progresso: progresso,
      pdf: function (bytes, prog) {
        return App.pdf.texto(bytes.slice().buffer, prog, 2000).then(function (r) { return { paginas: r.porPagina, cortado: r.cortado }; });
      }
    }).catch(function (e) {
      if (e && e.extracao) throw e;
      var senha = /password/i.test(String(e && e.name));
      throw Object.assign(new Error(senha ? 'O PDF tem senha e não pode ser aberto aqui.' : 'Não foi possível ler este arquivo. Ele pode estar danificado.'), { extracao: true });
    });
  };
  App.estante = { lista: carregar, blob: function (id) { return Armazem.ler('livro:' + id); }, ACEITA: ACEITA, mb: mb, erro: guardarMsg };

  // ---------- Adicionar ----------
  /* Confere o arquivo no envio, para a estante não guardar livro que depois não abre. */
  function conferir(t, f, buf) {
    if (t === 'pdf') {
      return App.pdf.abrir(buf).then(function (pdf) { pdf.destroy(); }, function (e) {
        throw Object.assign(new Error(/password/i.test(String(e && e.name)) ? 'o PDF tem senha e não pode ser aberto aqui' : 'não parece ser um PDF válido'), { extracao: true });
      });
    }
    if (f.size > MAX_CONFERIR) return t === 'epub' || t === 'docx' ? Extracao.lerZip(buf).then(function () {}) : Promise.resolve();
    return Extracao.extrair(t, buf).then(function () {});
  }
  function adicionar(arquivos) {
    var fila = Array.prototype.slice.call(arquivos || []), feitos = 0, status = function (t) { var s = document.getElementById('lv-status'); if (s) s.textContent = t; };
    L.avisos = [];
    if (!fila.length) return Promise.resolve();
    return carregar().then(function () {
      return fila.reduce(function (cadeia, f) {
        return cadeia.then(function () {
          var t = Extracao.tipo(f.name);
          if (t === 'mobi') { L.avisos.push(f.name + ': MOBI e AZW não abrem aqui. Baixe o livro em PDF ou EPUB, ou converta para EPUB num programa gratuito como o Calibre.'); return; }
          if (!t) { L.avisos.push(f.name + ': formato não suportado. Use PDF, EPUB, TXT, MD, HTML ou DOCX.'); return; }
          if (f.size > MAX_LIVRO) { L.avisos.push(f.name + ': maior que ' + mb(MAX_LIVRO) + '.'); return; }
          var titulo = f.name.replace(/\.[^.]+$/, '').slice(0, 200);
          if (L.indice.some(function (l) { return l.titulo === titulo && l.tamanho === f.size && l.formato === t; })) { L.avisos.push(f.name + ': este livro já está na sua estante, então não foi adicionado de novo.'); return; }
          status('Conferindo ' + f.name + '...');
          var id = 'l-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
          return f.arrayBuffer().then(function (buf) { return conferir(t, f, buf); }).then(function () {
            if (!L.indice.length) Armazem.persistir(); // pede ao navegador para não apagar a estante quando faltar espaço
            return Armazem.gravar('livro:' + id, f.slice(0, f.size, f.type), true);
          }).then(function () {
            return mudar(function (l) { return l.concat([{ id: id, titulo: titulo, formato: t, tamanho: f.size, criadoEm: Date.now(), abertoEm: 0, pos: { pagina: 1, secao: 0, y: 0 } }]); })
              .catch(function (e) { return Armazem.remover('livro:' + id).then(function () { throw e; }); });
          }).then(function () { feitos++; }, function (e) {
            L.avisos.push(f.name + ': ' + (e && e.extracao ? 'não foi possível usar este arquivo (' + guardarMsg(e) + ').' : guardarMsg(e) + '.'));
          });
        });
      }, Promise.resolve());
    }).then(function () { if (feitos) UI.toast(UI.plural(feitos, 'livro guardado', 'livros guardados') + '.'); }, function (e) { L.avisos.push(guardarMsg(e) + '.'); });
  }

  // ---------- Estante ----------
  function listaHtml() {
    var t = Importador.semAcento(L.busca), lista = L.indice.filter(function (l) { return !t || Importador.semAcento(l.titulo).indexOf(t) >= 0; })
      .sort(function (a, b) { return (b.abertoEm || b.criadoEm) - (a.abertoEm || a.criadoEm); });
    if (!lista.length) return '<div class="empty" style="padding:28px">' + UI.helma('frente') + '<h3>' + (L.indice.length ? 'Nenhum livro com esse título' : 'Sua estante está vazia') + '</h3><p>' +
      (L.indice.length ? 'Tente outra palavra.' : 'Adicione PDF, EPUB, DOCX, TXT, MD ou HTML. Os arquivos ficam só neste aparelho.') + '</p></div>';
    return '<div class="list">' + lista.map(function (l) {
      return '<div class="list-item lv-item"><span class="sigla sigla-sm">' + ico('livro') + '</span><a class="grow lv-abrir" href="#/livros/' + esc(l.id) + '"><div class="title">' + esc(l.titulo) + '</div>' +
        '<div class="sub">' + NOMES[l.formato] + ' · ' + mb(l.tamanho) + ' · ' + (l.abertoEm ? 'aberto em ' + UI.dataCurta(l.abertoEm) : 'ainda não aberto') + '</div></a>' +
        '<div class="row lv-acoes"><a class="btn btn-secondary btn-sm" href="#/livros/' + esc(l.id) + '">' + ico('livro') + ' Ler</a>' +
        '<button class="btn btn-ghost btn-sm" data-act="lv-contexto" data-id="' + esc(l.id) + '" aria-label="Criar questões a partir de ' + esc(l.titulo) + '">' + ico('arquivo') + ' Criar questões</button>' +
        '<button class="btn btn-ghost btn-sm" data-act="lv-renomear" data-id="' + esc(l.id) + '" aria-label="Renomear ' + esc(l.titulo) + '">' + ico('redacao') + ' Renomear</button>' +
        '<button class="btn btn-ghost btn-sm" data-act="lv-remover" data-id="' + esc(l.id) + '" aria-label="Remover ' + esc(l.titulo) + '">' + ico('lixo') + ' Remover</button></div></div>';
    }).join('') + '</div>';
  }
  function corpoHtml(espaco) {
    var total = L.indice.reduce(function (s, l) { return s + l.tamanho; }, 0), aviso = '', info = '';
    if (L.indice.length) info = UI.plural(L.indice.length, 'livro', 'livros') + ' · ' + mb(total);
    if (espaco && espaco.quota) {
      var resta = espaco.quota - espaco.usage;
      if (resta < espaco.quota * 0.1 || resta < 200 * 1048576) aviso = '<div class="callout callout-marker mt" role="status">' + ico('alerta') + '<div><b>O espaço do aparelho está acabando</b> (restam ' + mb(Math.max(0, resta)) + '). Remova livros que você já leu antes de adicionar outros.</div></div>';
      else if (L.indice.length) info += ' · restam ' + mb(resta) + ' no aparelho';
    }
    return (L.avisos.length ? '<div class="callout callout-marker" role="alert" style="margin-bottom:14px">' + ico('alerta') + '<div class="grow">' + L.avisos.map(esc).join('<br>') + '</div><button class="btn btn-ghost btn-sm" data-act="lv-fechar">Fechar</button></div>' : '') +
      '<section class="card"><div class="card-head"><h2>Seus livros</h2><span class="muted small">' + esc(info) + '</span></div>' + aviso +
      (L.indice.length ? '<div class="search mt"><span class="sr-only" id="lv-busca-rot">Buscar livro pelo título</span>' + ico('busca') + '<input class="input" id="lv-busca" type="search" aria-labelledby="lv-busca-rot" placeholder="Buscar pelo título" value="' + esc(L.busca) + '"></div>' : '') +
      '<div class="mt" id="lv-lista">' + listaHtml() + '</div></section>';
  }
  function desenharCorpo() {
    return Promise.all([carregar(), Armazem.espaco()]).then(function (r) {
      var c = document.getElementById('lv-corpo');
      if (!c) return;
      c.innerHTML = corpoHtml(r[1]);
      var b = document.getElementById('lv-busca');
      if (b) b.addEventListener('input', function () { L.busca = b.value; document.getElementById('lv-lista').innerHTML = listaHtml(); });
    });
  }
  // Outra aba mexeu na estante: esta aba mostra a lista atual.
  Armazem.aoMudar(function (chave) { if (chave === 'livros' && /^#\/livros\/?$/.test(location.hash)) desenharCorpo(); });

  App.rota('/livros', function () {
    return {
      titulo: 'Livros',
      html: '<div class="page-head"><div><h1>Livros</h1><p>Guarde seus livros e apostilas para ler depois. Os arquivos ficam só neste aparelho e nunca são enviados para lugar nenhum.</p></div></div>' +
        '<div id="lv-sem-banco"></div>' +
        '<label class="lv-solta" id="lv-solta">' + ico('upload') + '<b>Arraste os arquivos para cá ou clique para escolher</b>' +
        '<span class="small muted">PDF, EPUB, DOCX, TXT, MD e HTML, vários de uma vez, até ' + mb(MAX_LIVRO) + ' cada. Livros em MOBI ou AZW não abrem aqui: baixe em PDF ou EPUB.</span>' +
        '<input type="file" id="lv-arquivos" class="sr-only" multiple accept="' + ACEITA + '" aria-label="Escolher arquivos para a estante"></label>' +
        '<p class="small muted" id="lv-status" role="status" aria-live="polite" style="min-height:1.4em"></p>' +
        '<div id="lv-corpo"><p class="muted">Abrindo a estante...</p></div>',
      montar: function () {
        var solta = document.getElementById('lv-solta'), entrada = document.getElementById('lv-arquivos');
        var enviar = function (arquivos) {
          adicionar(arquivos).then(desenharCorpo).then(function () { var s = document.getElementById('lv-status'); if (s) s.textContent = ''; });
        };
        entrada.addEventListener('change', function () { var f = Array.prototype.slice.call(entrada.files); entrada.value = ''; enviar(f); });
        solta.addEventListener('dragover', function (e) { e.preventDefault(); solta.classList.add('sobre'); });
        solta.addEventListener('dragleave', function () { solta.classList.remove('sobre'); });
        solta.addEventListener('drop', function (e) { e.preventDefault(); solta.classList.remove('sobre'); if (e.dataTransfer && e.dataTransfer.files.length) enviar(e.dataTransfer.files); });
        // Arquivo solto fora da área não pode fazer a janela abri-lo no lugar do app.
        var bloquear = function (e) { if (!solta.contains(e.target)) e.preventDefault(); };
        window.addEventListener('dragover', bloquear); window.addEventListener('drop', bloquear);
        Armazem.disponivel().then(function (ok) {
          var a = document.getElementById('lv-sem-banco');
          if (a && !ok) a.innerHTML = '<div class="callout callout-marker" role="alert" style="margin-bottom:14px">' + ico('alerta') + '<div><b>Este navegador não deixa o Helma guardar arquivos agora.</b> Isso acontece em janelas anônimas e em alguns modos de privacidade. Abra o Helma numa janela normal para usar a estante.</div></div>';
        });
        desenharCorpo();
        return function () { window.removeEventListener('dragover', bloquear); window.removeEventListener('drop', bloquear); };
      }
    };
  }, 'livros');

  function achar(id) { return L.indice.filter(function (l) { return l.id === id; })[0]; }
  /* Pede um texto não vazio. O diálogo só fecha com texto ou com Cancelar. */
  function pedirTexto(titulo, valor) {
    return new Promise(function (resolve) {
      var d = document.getElementById('dlg');
      d.innerHTML = '<form method="dialog" class="dlg"><h2>' + esc(titulo) + '</h2><label class="field mt"><span class="sr-only">Título</span><input class="input" id="dlg-texto" maxlength="200" value="' + esc(valor) + '"></label>' +
        '<p class="small" id="dlg-erro" role="alert" style="color:var(--err);min-height:1.4em;margin:6px 0 0"></p>' +
        '<div class="dlg-actions"><button class="btn btn-ghost" value="nao">Cancelar</button><button class="btn btn-primary" type="button" id="dlg-ok">Salvar</button></div></form>';
      var campo = d.querySelector('#dlg-texto');
      var tentar = function () {
        if (!campo.value.trim()) { d.querySelector('#dlg-erro').textContent = 'O título não pode ficar vazio.'; campo.focus(); return; }
        d.close('sim');
      };
      campo.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); tentar(); } });
      d.querySelector('#dlg-ok').addEventListener('click', tentar);
      d.onclose = function () { resolve(d.returnValue === 'sim' ? campo.value.trim() : null); };
      d.returnValue = '';
      d.showModal(); campo.select();
    });
  }
  App.acao('lv-fechar', function () { L.avisos = []; desenharCorpo(); });
  App.acao('lv-renomear', function (el) {
    var id = el.getAttribute('data-id');
    carregar().then(function () {
      var l = achar(id);
      if (!l) return;
      return pedirTexto('Título do livro', l.titulo).then(function (t) {
        if (!t) return;
        return mudar(function (lista) { return lista.map(function (x) { if (x.id === id) x.titulo = t.slice(0, 200); return x; }); })
          .then(function () { App.render(); }, function () { UI.toast('Não foi possível salvar o título.'); });
      });
    });
  });
  App.acao('lv-remover', function (el) {
    var id = el.getAttribute('data-id');
    carregar().then(function () {
      var l = achar(id);
      if (!l) return;
      return UI.confirmar('Remover "' + l.titulo + '"?', 'O arquivo é apagado deste aparelho. Não dá para desfazer.', 'Remover', { perigo: true }).then(function (ok) {
        if (!ok) return;
        return mudar(function (lista) { return lista.filter(function (x) { return x.id !== id; }); }).then(function () { return Armazem.remover('livro:' + id); }).then(function () {
          UI.toast('Livro removido.');
          if (/^#\/livros\//.test(location.hash)) App.ir('#/livros'); else App.render();
        }, function () { UI.toast('Não foi possível remover o livro.'); });
      });
    });
  });
  App.acao('lv-contexto', function (el) { if (App.contextoDoLivro) App.contextoDoLivro(el.getAttribute('data-id')); });

  // ---------- Leitor ----------
  function salvarPos(p) {
    var r = R;
    if (!r) return;
    Object.keys(p).forEach(function (k) { r.meta.pos[k] = p[k]; });
    // só os campos de posição: o resto da lista (feito por outra aba) não é tocado
    mudar(function (lista) { return lista.map(function (x) { if (x.id === r.id) Object.keys(p).forEach(function (k) { x.pos[k] = p[k]; }); return x; }); })
      .catch(function () { /* sem espaço: a leitura continua, só não lembra a posição */ });
  }
  function fimLeitor() {
    if (!R) return;
    var r = R; R = null;
    clearTimeout(r.timer);
    if (r.tarefa) { try { r.tarefa.cancel(); } catch (e) { /* já terminou */ } }
    if (r.pdf && r.pdf.destroy) r.pdf.destroy();
    window.removeEventListener('resize', r.aoRedimensionar); window.removeEventListener('scroll', r.aoRolar); document.removeEventListener('keydown', r.aoTecla);
  }
  App.rota('/livros/([a-z0-9-]+)', function (m) {
    var id = m[0];
    return {
      titulo: 'Leitor',
      html: '<div class="page-head"><div><h1 id="lv-titulo">Livro</h1><p class="small muted" id="lv-sub"></p></div>' +
        '<div class="row"><a class="btn btn-ghost" href="#/livros">' + ico('voltar') + ' Estante</a><button class="btn btn-secondary" data-act="lv-renomear" data-id="' + esc(id) + '">' + ico('redacao') + ' Renomear</button>' +
        '<button class="btn btn-secondary" data-act="lv-contexto" data-id="' + esc(id) + '">' + ico('arquivo') + ' Criar questões</button></div></div>' +
        '<section class="card lv-leitor" id="lv-leitor" aria-live="polite"><p class="muted">Abrindo o livro...</p></section>',
      montar: function () { abrir(id); return fimLeitor; }
    };
  }, 'livros');

  function abrir(id) {
    fimLeitor();
    var meu = R = { id: id, token: 0 }, sai = function (msg) { var s = document.getElementById('lv-leitor'); if (s && R === meu) s.innerHTML = '<div class="empty">' + ico('alerta') + '<h3>' + esc(msg) + '</h3><p><a href="#/livros">Voltar à estante</a></p></div>'; };
    carregar().then(function () {
      var meta = achar(id);
      if (!meta) return sai('Livro não encontrado.');
      meu.meta = meta;
      document.getElementById('lv-titulo').textContent = meta.titulo;
      document.getElementById('lv-sub').textContent = NOMES[meta.formato] + ' · ' + mb(meta.tamanho);
      return Armazem.ler('livro:' + id).then(function (blob) {
        if (!(blob instanceof Blob)) return sai('O arquivo deste livro não está mais no aparelho.');
        meta.abertoEm = Date.now();
        mudar(function (lista) { return lista.map(function (x) { if (x.id === id) x.abertoEm = meta.abertoEm; return x; }); }).catch(function () { /* só a ordem da lista */ });
        return blob.arrayBuffer().then(function (buf) {
          if (R !== meu) return;
          return meta.formato === 'pdf' ? lerPdf(meu, buf) : lerTexto(meu, buf);
        });
      });
    }).catch(function (e) { sai(e && e.extracao ? e.message : 'Não foi possível abrir este arquivo.'); });
  }

  function lerPdf(r, buf) {
    return App.pdf.abrir(buf).then(function (pdf) {
      if (R !== r) { pdf.destroy(); return; }
      r.pdf = pdf; r.pagina = Math.min(pdf.numPages, r.meta.pos.pagina); r.zoom = 1;
      document.getElementById('lv-leitor').innerHTML =
        '<div class="lv-barra"><button class="icon-btn" data-act="lv-ant" aria-label="Página anterior">' + ico('esq') + '</button>' +
        '<label class="row" style="gap:6px"><span>Página</span><input class="input lv-pg" id="lv-pg" type="number" inputmode="numeric" min="1" max="' + pdf.numPages + '" value="' + r.pagina + '"><span class="muted">de ' + pdf.numPages + '</span></label>' +
        '<button class="icon-btn" data-act="lv-prox" aria-label="Próxima página">' + ico('dir') + '</button><span class="grow"></span>' +
        '<button class="btn btn-ghost btn-sm" data-act="lv-zoom" data-v="-" aria-label="Diminuir zoom">−</button><button class="btn btn-ghost btn-sm" data-act="lv-zoom" data-v="0">Ajustar à largura</button><button class="btn btn-ghost btn-sm" data-act="lv-zoom" data-v="+" aria-label="Aumentar zoom">+</button></div>' +
        '<div class="lv-palco" id="lv-palco" tabindex="0"><canvas id="lv-canvas" role="img" aria-label="Página ' + r.pagina + '"></canvas></div>';
      document.getElementById('lv-pg').addEventListener('change', function (e) {
        // campo vazio ou fora do livro: volta para uma página que existe e avisa
        var v = e.target.value.trim(), n = Number(v);
        if (!v || !Number.isFinite(n)) { e.target.value = R.pagina; return; }
        if (n < 1 || n > r.pdf.numPages) UI.toast('Este livro tem ' + UI.plural(r.pdf.numPages, 'página', 'páginas') + '.');
        irPagina(n);
      });
      r.aoRedimensionar = function () { clearTimeout(r.timer); r.timer = setTimeout(desenharPdf, 200); };
      r.aoTecla = function (e) {
        if (/^(INPUT|TEXTAREA|SELECT)$/.test((e.target || {}).tagName) || e.altKey || e.ctrlKey || e.metaKey) return;
        if (e.key === 'ArrowLeft' || e.key === 'PageUp') irPagina(R.pagina - 1); else if (e.key === 'ArrowRight' || e.key === 'PageDown') irPagina(R.pagina + 1);
      };
      window.addEventListener('resize', r.aoRedimensionar); document.addEventListener('keydown', r.aoTecla);
      desenharPdf();
    }, function (e) { throw /password/i.test(String(e && e.name)) ? Object.assign(new Error('Este PDF tem senha e não pode ser aberto aqui.'), { extracao: true }) : e; });
  }
  function desenharPdf() {
    var r = R;
    if (!r || !r.pdf) return;
    var token = ++r.token;
    if (r.tarefa) { try { r.tarefa.cancel(); } catch (e) { /* já terminou */ } }
    r.pdf.getPage(r.pagina).then(function (pg) {
      if (R !== r || token !== r.token) return;
      var palco = document.getElementById('lv-palco'), canvas = document.getElementById('lv-canvas');
      if (!palco || !canvas) return;
      var v1 = pg.getViewport({ scale: 1 });
      if (v1.height / v1.width > 20 || v1.width / v1.height > 20) { palco.innerHTML = '<p class="muted" style="padding:20px">Esta página tem um formato fora do comum e não pode ser mostrada.</p>'; return; }
      var largura = Math.max(240, palco.clientWidth - 2), dpr = Math.min(window.devicePixelRatio || 1, 2);
      var escala = largura / v1.width * r.zoom;
      // teto de área do canvas: zoom alto em tela grande derrubava o navegador (centenas de MB por página)
      var px = v1.width * escala * dpr * v1.height * escala * dpr;
      if (px > MAX_PIXELS) dpr *= Math.sqrt(MAX_PIXELS / px);
      var vp = pg.getViewport({ scale: escala * dpr });
      canvas.width = Math.max(1, Math.floor(vp.width)); canvas.height = Math.max(1, Math.floor(vp.height));
      canvas.style.width = Math.floor(v1.width * escala) + 'px'; canvas.style.height = Math.floor(v1.height * escala) + 'px';
      canvas.setAttribute('aria-label', 'Página ' + r.pagina + ' de ' + r.pdf.numPages);
      canvas.removeAttribute('data-pronto');
      r.tarefa = pg.render({ canvasContext: canvas.getContext('2d'), viewport: vp });
      return r.tarefa.promise.then(function () { canvas.setAttribute('data-pronto', '1'); });
    }).catch(function (e) {
      if (e && e.name === 'RenderingCancelledException') return;
      var s = document.getElementById('lv-palco'); if (s && R === r) s.innerHTML = '<p class="muted" style="padding:20px">Não foi possível desenhar esta página.</p>';
    });
  }
  function irPagina(n) {
    var r = R;
    if (!r || !r.pdf || !Number.isFinite(n)) return;
    n = Math.min(r.pdf.numPages, Math.max(1, Math.round(n)));
    document.getElementById('lv-pg').value = n;
    if (n === r.pagina) return;
    r.pagina = n; salvarPos({ pagina: n });
    var palco = document.getElementById('lv-palco'); if (palco) palco.scrollTop = 0;
    desenharPdf();
  }
  App.acao('lv-ant', function () { if (R) irPagina(R.pagina - 1); });
  App.acao('lv-prox', function () { if (R) irPagina(R.pagina + 1); });
  App.acao('lv-zoom', function (el) {
    if (!R || !R.pdf) return;
    var v = el.getAttribute('data-v');
    R.zoom = v === '0' ? 1 : Math.min(3, Math.max(0.5, Math.round((R.zoom + (v === '+' ? 0.25 : -0.25)) * 100) / 100));
    desenharPdf();
  });

  function lerTexto(r, buf) {
    document.getElementById('lv-leitor').innerHTML = '<p class="muted">Preparando a leitura...</p>';
    return Extracao.extrair(r.meta.formato, buf).then(function (ext) {
      if (R !== r) return;
      r.secoes = ext.secoes; r.secao = Math.min(ext.secoes.length - 1, r.meta.pos.secao);
      var n = ext.secoes.length;
      var barra = function (cls) {
        return '<div class="lv-barra ' + cls + '"><button class="icon-btn" data-act="lv-sec-ant" aria-label="Seção anterior">' + ico('esq') + '</button>' +
          (cls === 'topo' ? '<label class="grow" style="min-width:0"><span class="sr-only">Ir para a seção</span><select class="input" id="lv-sec">' + ext.secoes.map(function (s, i) { return '<option value="' + i + '">' + esc(s.titulo) + '</option>'; }).join('') + '</select></label>' : '<span class="grow"></span>') +
          '<span class="muted small lv-contagem">' + (r.secao + 1) + ' de ' + n + '</span><button class="icon-btn" data-act="lv-sec-prox" aria-label="Próxima seção">' + ico('dir') + '</button></div>';
      };
      document.getElementById('lv-leitor').innerHTML = (ext.cortado ? '<div class="callout callout-marker" style="margin-bottom:12px">' + ico('alerta') + '<div>O livro é muito grande: só o começo foi aberto.</div></div>' : '') +
        barra('topo') + '<article class="lv-texto" id="lv-texto" tabindex="-1"></article>' + barra('base');
      document.getElementById('lv-sec').addEventListener('change', function (e) { irSecao(Number(e.target.value), 0); });
      r.aoRolar = function () {
        clearTimeout(r.timer);
        r.timer = setTimeout(function () {
          var a = document.getElementById('lv-texto'); if (!a || R !== r) return;
          var topo = a.getBoundingClientRect().top + window.scrollY;
          salvarPos({ y: Math.min(1, Math.max(0, Math.round((window.scrollY - topo) / Math.max(1, a.offsetHeight) * 1000) / 1000)) });
        }, 500);
      };
      window.addEventListener('scroll', r.aoRolar);
      irSecao(r.secao, r.meta.pos.y, true);
    });
  }
  function irSecao(i, y, inicio) {
    var r = R;
    if (!r || !r.secoes) return;
    i = Math.min(r.secoes.length - 1, Math.max(0, i));
    r.secao = i;
    var s = r.secoes[i], a = document.getElementById('lv-texto');
    a.innerHTML = '<h2>' + esc(s.titulo) + '</h2>' + s.texto.split(/\n{2,}/).map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');
    document.getElementById('lv-sec').value = i;
    document.querySelectorAll('.lv-contagem').forEach(function (c) { c.textContent = (i + 1) + ' de ' + r.secoes.length; });
    if (!inicio) salvarPos({ secao: i, y: 0 });
    var topo = a.getBoundingClientRect().top + window.scrollY;
    window.scrollTo(0, inicio ? topo + (y || 0) * a.offsetHeight : Math.max(0, topo - 20));
  }
  App.acao('lv-sec-ant', function () { if (R && R.secoes) irSecao(R.secao - 1, 0); });
  App.acao('lv-sec-prox', function () { if (R && R.secoes) irSecao(R.secao + 1, 0); });
})();
