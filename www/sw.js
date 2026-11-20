/* Gerado por tools/pwa.js. Não edite à mão. */
'use strict';
var CACHE = 'gabarito-b4e7b9726a9b';
var ARQUIVOS = ["./","css/app.css","css/cartoes.css","css/desempenho.css","css/fontes.css","fonts/inter-latin-400-normal.woff2","fonts/inter-latin-500-normal.woff2","fonts/inter-latin-600-normal.woff2","fonts/inter-latin-700-normal.woff2","fonts/source-serif-4-latin-400-normal.woff2","fonts/source-serif-4-latin-600-normal.woff2","fonts/source-serif-4-latin-700-normal.woff2","icone-192.png","icone-512.png","icone-maskable-512.png","index.html","js/app.js","js/aprende.js","js/aprendizado.js","js/armazem.js","js/banco.js","js/dados/bancas-cebraspe.js","js/dados/bancas-cesgranrio.js","js/dados/bancas-enem.js","js/dados/bancas-fcc.js","js/dados/bancas-fgv.js","js/dados/bancas-oab.js","js/dados/bancas-vunesp.js","js/dados/base.js","js/dados/direito.js","js/dados/enem-oficial.js","js/dados/exatas.js","js/dados/explicacoes-oficiais.js","js/dados/gerais.js","js/dados/inep-oficial.js","js/dados/linguagens.js","js/dados/livros-hardware.js","js/dados/livros-linux.js","js/dados/livros-redes.js","js/dados/livros-seguranca.js","js/dados/modelo-base.js","js/dados/redacao.js","js/desempenho.js","js/extracao.js","js/gerador.js","js/importador.js","js/motor.js","js/redacao-analise.js","js/store.js","js/ui.js","js/views-cartoes.js","js/views-conteudo.js","js/views-contexto.js","js/views-desempenho.js","js/views-estudo.js","js/views-livros.js","js/views-minhas.js","manifest.webmanifest","marca/helma-chama.svg","marca/helma-icone.svg","marca/helma-inicio.webp","marca/helma-retrato-claro.svg","marca/helma-retrato.svg","marca/personagem/frente.svg","marca/personagem/tres-quartos-dir.svg","marca/personagem/tres-quartos-esq.svg","vendor/pdfjs/pdf.min.js","vendor/pdfjs/pdf.worker.min.js"];

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
