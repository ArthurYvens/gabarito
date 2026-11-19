/* Gera www/sw.js (service worker) com a lista de arquivos do app e uma versão tirada do conteúdo deles:
   qualquer mudança em www/ troca a versão e o navegador baixa a atualização. node tools/pwa.js */
'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const www = path.join(__dirname, '..', 'www');
const arquivos = [];
(function varrer(dir) {
  for (const nome of fs.readdirSync(dir)) {
    const p = path.join(dir, nome);
    if (fs.statSync(p).isDirectory()) varrer(p);
    else if (nome !== 'sw.js' && !/LICENSE$/.test(nome)) arquivos.push(path.relative(www, p).split(path.sep).join('/'));
  }
})(www);
arquivos.sort();
const hash = crypto.createHash('sha256');
arquivos.forEach((f) => hash.update(f).update(fs.readFileSync(path.join(www, f))));
const versao = hash.digest('hex').slice(0, 12);

const sw = `/* Gerado por tools/pwa.js. Não edite à mão. */
'use strict';
var CACHE = 'gabarito-${versao}';
var ARQUIVOS = ${JSON.stringify(['./'].concat(arquivos))};

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
`;
fs.writeFileSync(path.join(www, 'sw.js'), sw);
console.log('sw.js: ' + arquivos.length + ' arquivos, versão ' + versao);
