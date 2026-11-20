/* Gera www/js/dados/modelo-base.js: o modelo inicial de palavras, igual para todos, feito das questões e explicações do app.
   node tools/modelo.js
   Tem, para cada palavra (minúscula, sem acento, sem palavras de ligação e sem as de 1 a 2 letras):
   - df: em quantas questões (com suas explicações) ela aparece, para o IDF (as ~15 mil mais úteis);
   - vetores de 32 dimensões das ~4 mil mais frequentes: coocorrência numa janela de ±4 palavras, PPMI e SVD truncada
     por iteração de subespaço (ver www/js/aprendizado.js). Cada número vai em 1 byte.
   O resultado é sempre o mesmo para as mesmas questões e cabe em 600 KB. */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const raiz = path.join(__dirname, '..');
const Banco = require(path.join(raiz, 'www', 'js', 'banco.js'));
const A = require(path.join(raiz, 'www', 'js', 'aprendizado.js'));
const G = require(path.join(raiz, 'www', 'js', 'gerador.js'));
const Motor = require(path.join(raiz, 'www', 'js', 'motor.js'));

const MAX_PALAVRAS = 15000, MAX_VETORES = 4000, DIM = 32, JANELA = 4, ITERACOES = 8, LIMITE_BYTES = 600 * 1024;
const destino = path.join(raiz, 'www', 'js', 'dados', 'modelo-base.js');

const ctx = vm.createContext({ Banco });
const dir = path.join(raiz, 'www', 'js', 'dados');
for (const f of ['base.js'].concat(fs.readdirSync(dir).filter((x) => x.endsWith('.js') && x !== 'base.js' && x !== 'modelo-base.js').sort())) {
  vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), ctx, { filename: f });
}

// Um documento por questão: enunciado, alternativas e tudo o que a explicação diz.
const docs = Banco.questoes.map((q) => {
  const x = q.explicacao || {};
  return [q.textoBase, q.enunciado, (q.alternativas || []).join(' '), x.resumo, x.detalhada, (x.alternativas || []).join(' '), x.dica].filter(Boolean).join('\n');
}).map((t) => A.palavras(t, G.PARADA));

const df = Object.create(null);
docs.forEach((p) => A.somarDF(df, p));
const ordem = (a, b) => df[b] - df[a] || (a < b ? -1 : 1);
const uteis = Object.keys(df).filter((w) => df[w] >= 2).sort(ordem); // palavra que aparece uma vez só não ajuda
const vocab = uteis.slice(0, MAX_VETORES);

const permitida = new Set(vocab), pares = Object.create(null);
docs.forEach((p) => A.coocorrencias(p.filter((w) => permitida.has(w)), JANELA, pares));
Object.keys(pares).forEach((k) => { if (pares[k] < 2) delete pares[k]; }); // par visto uma vez só é acaso
const vetores = A.vetoresPalavras(pares, vocab, DIM, ITERACOES, Motor.rng(1));

const bytes = Buffer.alloc(vocab.length * DIM);
vetores.forEach((v, i) => v.forEach((x, d) => bytes.writeInt8(Math.round(Math.max(-1, Math.min(1, x)) * 127), i * DIM + d)));

let usadas = uteis.slice(0, MAX_PALAVRAS), texto;
for (;;) { // se passar do limite, tira as palavras menos frequentes
  texto = '/* Gerado por tools/modelo.js a partir das questões do app. Não edite à mão. */\nthis.ModeloBase = ' + JSON.stringify({
    v: 1, N: docs.length, dim: DIM, df: usadas.map((w) => w + ':' + df[w]).join(' '), vp: vocab.join(' '), vet: bytes.toString('base64')
  }) + ';\n';
  if (Buffer.byteLength(texto) <= LIMITE_BYTES || usadas.length <= vocab.length) break;
  usadas = usadas.slice(0, Math.floor(usadas.length * 0.9));
}
if (Buffer.byteLength(texto) > LIMITE_BYTES) throw new Error('modelo-base.js passou de 600 KB');
fs.writeFileSync(destino, texto);
console.log('modelo-base.js: ' + docs.length + ' documentos, ' + usadas.length + ' palavras com IDF, ' + vocab.length + ' com vetor, ' + Math.round(Buffer.byteLength(texto) / 1024) + ' KB');
