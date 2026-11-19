/* Gabarito para Windows: janela própria que carrega o app de www/. A página roda isolada (sem Node). */
'use strict';
const { app, BrowserWindow, Menu, shell, nativeTheme } = require('electron');
const path = require('path');

if (!app.requestSingleInstanceLock()) app.quit();

let janela = null;
const ehHttps = (url) => /^https:\/\//i.test(url);

function menu() {
  Menu.setApplicationMenu(Menu.buildFromTemplate([
    { label: 'Arquivo', submenu: [{ role: 'quit', label: 'Sair' }] },
    {
      label: 'Editar', submenu: [
        { role: 'undo', label: 'Desfazer' }, { role: 'redo', label: 'Refazer' }, { type: 'separator' },
        { role: 'cut', label: 'Recortar' }, { role: 'copy', label: 'Copiar' }, { role: 'paste', label: 'Colar' },
        { role: 'selectAll', label: 'Selecionar tudo' }
      ]
    },
    {
      label: 'Exibir', submenu: [
        { role: 'zoomIn', label: 'Aumentar texto' }, { role: 'zoomOut', label: 'Diminuir texto' },
        { role: 'resetZoom', label: 'Tamanho normal' }, { type: 'separator' }, { role: 'togglefullscreen', label: 'Tela cheia' }
      ]
    }
  ]));
}

function criarJanela() {
  janela = new BrowserWindow({
    width: 1360, height: 880, minWidth: 380, minHeight: 560,
    title: 'Gabarito', show: false, autoHideMenuBar: true,
    backgroundColor: nativeTheme.shouldUseDarkColors ? '#0d1016' : '#f2f4f7',
    icon: path.join(__dirname, 'recursos', 'icone.png'),
    webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true, spellcheck: true }
  });
  janela.loadFile(path.join(__dirname, '..', 'www', 'index.html'));
  janela.once('ready-to-show', () => janela.show());

  // Links externos (fontes, sites das bancas) abrem no navegador do sistema; a janela nunca sai dos arquivos do app.
  janela.webContents.setWindowOpenHandler(({ url }) => {
    if (ehHttps(url)) shell.openExternal(url);
    return { action: 'deny' };
  });
  // Só navega dentro da pasta do app (www/); qualquer outro file:// do disco é bloqueado.
  const pastaApp = require('url').pathToFileURL(path.join(__dirname, '..', 'www')).href + '/';
  janela.webContents.on('will-navigate', (e, url) => {
    if (url.startsWith(pastaApp)) return;
    e.preventDefault();
    if (ehHttps(url)) shell.openExternal(url);
  });

  // Menu do botão direito: sugestões de ortografia (útil no editor de redação) e copiar/colar.
  janela.webContents.on('context-menu', (e, p) => {
    const itens = p.dictionarySuggestions.slice(0, 5).map((s) => ({ label: s, click: () => janela.webContents.replaceMisspelling(s) }));
    if (p.misspelledWord) itens.push({ label: 'Adicionar ao dicionário', click: () => janela.webContents.session.addWordToSpellCheckerDictionary(p.misspelledWord) }, { type: 'separator' });
    if (p.isEditable) itens.push({ role: 'cut', label: 'Recortar' }, { role: 'copy', label: 'Copiar' }, { role: 'paste', label: 'Colar' }, { role: 'selectAll', label: 'Selecionar tudo' });
    else if (p.selectionText) itens.push({ role: 'copy', label: 'Copiar' });
    if (itens.length) Menu.buildFromTemplate(itens).popup({ window: janela });
  });
}

app.on('second-instance', () => {
  if (!janela) return;
  if (janela.isMinimized()) janela.restore();
  janela.focus();
});

// O app não usa câmera, microfone, localização, notificações etc.: nega tudo que a página pedir.
app.on('web-contents-created', (_e, wc) => {
  wc.on('will-attach-webview', (ev) => ev.preventDefault());
});

app.whenReady().then(() => {
  const { session } = require('electron');
  session.defaultSession.setPermissionRequestHandler((_wc, _perm, responder) => responder(false));
  session.defaultSession.setPermissionCheckHandler(() => false);
  menu();
  criarJanela();
});
app.on('window-all-closed', () => app.quit());
