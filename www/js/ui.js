/* UI: escape, ícones, texto formatado, avisos e diálogos. */
(function (root) {
  'use strict';

  function esc(v) {
    return String(v == null ? '' : v).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  // Texto do conteúdo vira HTML: escapa tudo primeiro e só então aplica **negrito**, listas "- " e parágrafos.
  function md(texto) {
    var inline = function (s) { return esc(s).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>'); };
    return String(texto || '').split(/\n\s*\n/).map(function (bloco) {
      var linhas = bloco.split('\n');
      var html = '', lista = [];
      var fecha = function () { if (lista.length) { html += '<ul>' + lista.map(function (l) { return '<li>' + inline(l) + '</li>'; }).join('') + '</ul>'; lista = []; } };
      var par = [];
      var fechaPar = function () { if (par.length) { html += '<p>' + par.map(inline).join('<br>') + '</p>'; par = []; } };
      linhas.forEach(function (l) {
        var m = /^\s*[-•]\s+(.*)$/.exec(l);
        if (m) { fechaPar(); lista.push(m[1]); } else if (l.trim()) { fecha(); par.push(l.trim()); }
      });
      fechaPar(); fecha();
      return html;
    }).join('');
  }

  var P = {
    home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
    simulado: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
    questoes: '<path d="M9 6h12M9 12h12M9 18h12"/><circle cx="4.5" cy="6" r="1.3"/><circle cx="4.5" cy="12" r="1.3"/><circle cx="4.5" cy="18" r="1.3"/>',
    revisao: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 8v4l3 2"/>',
    aulas: '<path d="M4 19.5V5a2 2 0 0 1 2-2h14v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M9 7h7M9 11h5"/>',
    redacao: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    plano: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M8 14h3M8 18h6"/>',
    biblioteca: '<path d="M5 3v18M10 3v18"/><path d="m14.5 3.6 5 17"/>',
    ajustes: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
    busca: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    flag: '<path d="M5 22V4"/><path d="M5 4h13l-2.5 4.5L18 13H5"/>',
    relogio: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    esq: '<path d="m15 18-6-6 6-6"/>',
    dir: '<path d="m9 18 6-6-6-6"/>',
    voltar: '<path d="M19 12H5M12 19l-7-7 7-7"/>',
    externo: '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    ideia: '<path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z"/>',
    baixo: '<path d="m6 9 6 6 6-6"/>',
    riscar: '<path d="M4 12h16"/><path d="M16 6.5C15 5 13.6 4.5 12 4.5c-2.5 0-4 1.3-4 3 0 1 .5 1.8 1.4 2.4M8 17.5c1 1.4 2.4 2 4 2 2.6 0 4.2-1.3 4.2-3.2 0-.6-.1-1.1-.4-1.6"/>',
    play: '<path d="M7 4v16l13-8z"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    alvo: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    chama: '<path d="M12 22c4 0 7-2.7 7-6.5 0-3.2-2-5.7-3.5-7.2-.4 1.6-1.3 2.7-2.5 3.2.3-3.5-1.3-6.6-4-8.5.2 3-1.5 5.2-3 7A7.3 7.3 0 0 0 5 15.5C5 19.3 8 22 12 22z"/>',
    mais: '<circle cx="5" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="19" cy="12" r="1.2"/>',
    alerta: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
    lixo: '<path d="M3 6h18M8 6V4h8v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>',
    livro: '<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>',
    pausa: '<path d="M8 5v14M16 5v14"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>'
  };
  function ico(nome, cls) {
    return '<svg class="ico ' + (cls || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (P[nome] || '') + '</svg>';
  }

  var marca = '<svg class="brand-mark" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="9" fill="var(--ink)"/>' +
    '<circle cx="9.5" cy="16" r="4" fill="none" stroke="var(--surface)" stroke-width="1.6" opacity=".55"/>' +
    '<circle cx="16" cy="16" r="4.6" fill="var(--marker)"/>' +
    '<circle cx="22.5" cy="16" r="4" fill="none" stroke="var(--surface)" stroke-width="1.6" opacity=".55"/></svg>';

  var toastTimer;
  function toast(msg) {
    var t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2800);
  }

  // Diálogo de confirmação acessível (usa <dialog>, que prende o foco e fecha com Esc).
  function confirmar(titulo, texto, ok, opts) {
    opts = opts || {};
    return new Promise(function (resolve) {
      var d = document.getElementById('dlg');
      d.innerHTML = '<form method="dialog" class="dlg"><h2>' + esc(titulo) + '</h2><p>' + esc(texto) + '</p>' +
        '<div class="dlg-actions"><button class="btn btn-ghost" value="nao">' + esc(opts.cancelar || 'Cancelar') + '</button>' +
        '<button class="btn ' + (opts.perigo ? 'btn-danger' : 'btn-primary') + '" value="sim" autofocus>' + esc(ok || 'Confirmar') + '</button></div></form>';
      d.onclose = function () { resolve(d.returnValue === 'sim'); };
      d.returnValue = '';
      d.showModal();
    });
  }

  function tempo(seg) {
    seg = Math.max(0, Math.round(seg));
    var h = Math.floor(seg / 3600), m = Math.floor(seg % 3600 / 60), s = seg % 60;
    return (h ? h + ':' + String(m).padStart(2, '0') : String(m).padStart(2, '0')) + ':' + String(s).padStart(2, '0');
  }
  function dataCurta(t) {
    return new Date(t).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' }).replace('.', '');
  }
  function plural(n, um, varios) { return n + ' ' + (n === 1 ? um : varios); }
  function dots(n) { return '<span class="dots" title="Dificuldade ' + ['', 'fácil', 'média', 'difícil'][n] + '"><i class="on"></i><i class="' + (n >= 2 ? 'on' : '') + '"></i><i class="' + (n >= 3 ? 'on' : '') + '"></i></span>'; }
  function dominio(url) { try { return new URL(url).hostname.replace(/^www\./, ''); } catch (e) { return ''; } }
  function fontes(lista) {
    return '<div class="sources">' + (lista || []).map(function (f) {
      return '<a class="source" href="' + esc(f.url) + '" target="_blank" rel="noopener noreferrer">' + ico('externo') + '<span>' + esc(f.titulo) + '</span><small>' + esc(dominio(f.url)) + '</small></a>';
    }).join('') + '</div>';
  }
  function baixar(nome, conteudo, tipo) {
    var cap = root.Capacitor;
    if (cap && cap.isNativePlatform && cap.isNativePlatform() && cap.Plugins && cap.Plugins.Filesystem && cap.Plugins.Share) {
      // No celular a WebView não baixa arquivos: grava no cache do app e abre o compartilhar do sistema.
      return cap.Plugins.Filesystem.writeFile({ path: 'exportados/' + nome, data: conteudo, directory: 'CACHE', encoding: 'utf8', recursive: true })
        .then(function (r) { return cap.Plugins.Share.share({ title: nome, url: r.uri, dialogTitle: 'Salvar ou enviar ' + nome }); })
        .catch(function (e) { if (!/cancel/i.test(String(e && e.message))) toast('Não foi possível exportar o arquivo.'); });
    }
    var a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([conteudo], { type: tipo || 'application/json' }));
    a.download = nome;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  }

  root.UI = { esc: esc, md: md, ico: ico, marca: marca, toast: toast, confirmar: confirmar, tempo: tempo, dataCurta: dataCurta, plural: plural, dots: dots, fontes: fontes, dominio: dominio, baixar: baixar };
})(this);
