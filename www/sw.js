/* Gerado por tools/pwa.js. Não edite à mão. */
'use strict';
var CACHE = 'gabarito-0f677d70789a';
var ARQUIVOS = ["./","css/app.css","css/fontes.css","fonts/bricolage-grotesque-latin-600-normal.woff2","fonts/bricolage-grotesque-latin-700-normal.woff2","fonts/bricolage-grotesque-latin-800-normal.woff2","fonts/ibm-plex-mono-latin-500-normal.woff2","fonts/ibm-plex-mono-latin-600-normal.woff2","fonts/ibm-plex-mono-latin-700-normal.woff2","fonts/ibm-plex-sans-latin-400-normal.woff2","fonts/ibm-plex-sans-latin-500-normal.woff2","fonts/ibm-plex-sans-latin-600-normal.woff2","fonts/ibm-plex-sans-latin-700-normal.woff2","fonts/literata-latin-400-normal.woff2","fonts/literata-latin-700-normal.woff2","icone-192.png","icone-512.png","icone-maskable-512.png","index.html","js/app.js","js/armazem.js","js/banco.js","js/dados/base.js","js/dados/direito.js","js/dados/enem-oficial.js","js/dados/exatas.js","js/dados/gerais.js","js/dados/linguagens.js","js/dados/redacao.js","js/importador.js","js/motor.js","js/redacao-analise.js","js/store.js","js/ui.js","js/views-conteudo.js","js/views-estudo.js","js/views-minhas.js","manifest.webmanifest","vendor/pdfjs/pdf.min.js","vendor/pdfjs/pdf.worker.min.js"];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ARQUIVOS); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (nomes) {
    return Promise.all(nomes.filter(function (n) { return n.indexOf('gabarito-') === 0 && n !== CACHE; }).map(function (n) { return caches.delete(n); }));
  }).then(function () { return self.clients.claim(); }));
});
// Primeiro o cache (funciona sem internet); a versão nova chega pela troca do CACHE acima.
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(function (r) { return r || fetch(req); }));
});
