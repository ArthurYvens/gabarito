# Helma

Plataforma de estudos para ENEM, vestibulares, concursos (administrativos, tribunais, policiais, bancários, estatais) e OAB.
Roda como **site** (instalável no celular e funciona sem internet), **programa para Windows** e **app Android**, todos a
partir do mesmo código em `www/`. Não tem servidor nem conta: o progresso fica no aparelho do aluno.

## Como usar

- **Windows:** `dist/Helma-Instalador-1.0.0.exe`.
- **Android:** `dist/Helma-Android-1.0.0.apk` (instalar com "fontes desconhecidas" permitidas).
- **Navegador:** abra `www/index.html`, ou sirva a pasta: `python -m http.server 5321 -d www`.

## O que tem

- **Onboarding por objetivo**: o objetivo define o peso de cada matéria nos simulados e o tipo de redação.
- **Simulados** em modo prova (cronômetro no ritmo da banca, gabarito no final) ou modo estudo (correção a cada questão), com
  filtros por matéria, assunto, dificuldade, banca, tipo e situação; prioriza questões nunca vistas, erradas e assuntos fracos.
- **Explicação profunda** (liga e desliga): resolução, comentário por alternativa, pegadinha, fontes e aula relacionada.
- **Minhas anotações** em qualquer questão e **"Por que você errou?"** (motivo do erro, com painel em Revisão).
- **Minhas questões**: o aluno alimenta o próprio banco com **PDF** (inclusive em duas colunas), **texto colado**,
  **planilha CSV** (Excel ou Google Planilhas) ou **questão escrita à mão**, com gabarito em vários formatos e uma tela de
  revisão antes de salvar. Pode criar matérias próprias (Contabilidade, Atualidades...). Os bancos ficam no IndexedDB.
- **Revisão espaçada** (1, 3, 7, 15, 30 e 60 dias), caderno de erros, **aulas**, **redação** (competências, repertório,
  conectivos, modelo comentado, temas e editor com checagem), **plano de estudos** e **Onde estudar**.
- Backup completo (progresso e bancos) e sincronização entre abas abertas.

## Conteúdo e direitos

- **146 questões inéditas** escritas para o app, no estilo das bancas, com explicação, e 21 aulas.
- **204 questões oficiais do ENEM 2023–2025** (INEP/MEC), reproduzidas **sem alteração** sob a licença Creative Commons
  BY-ND 3.0 publicada pelo INEP, com crédito visível em cada questão. Só entram itens sem textos, imagens ou citações de
  terceiros (a licença do INEP não cobre esse material); as descrições de imagens são as do próprio INEP. Geradas por
  `node tools/enem.js <pasta>` a partir dos arquivos oficiais de download.inep.gov.br (versão em texto e gabaritos).
- Provas da OAB/FGV, CEBRASPE, FCC, Vunesp, Cesgranrio e vestibulares **não têm licença aberta** e não são distribuídas: o
  aluno baixa nos sites oficiais e importa em Minhas questões para estudo pessoal.
- Antes de vender o app, confirme esta análise com um advogado de propriedade intelectual (não é parecer jurídico).

## Estrutura

```
www/                 o app (site, Windows e Android usam esta pasta)
  js/banco.js        registro e validação de questões, aulas e matérias
  js/dados/          conteúdo (base.js tem matérias, objetivos e pesos; enem-oficial.js é gerado)
  js/motor.js        simulado, correção, desempenho, revisão espaçada, plano
  js/importador.js   PDF/texto/planilha -> questões (sem DOM, testado no Node)
  js/armazem.js      bancos do aluno no IndexedDB
  js/store.js        progresso no localStorage, com normalização de entrada não confiável
  js/views-*.js      telas
  sw.js              service worker (gerado por tools/pwa.js)
desktop/main.js      programa para Windows (Electron)
android/             app Android (Capacitor)
tools/               validar.js, enem.js, fontes.js (fontes e pdf.js locais), pwa.js, icones.js
tests/               testes (abaixo)
.github/workflows/   testes, publicação do site e geração dos instaladores
```

## Desenvolvimento

```
npm install
npm run build:web        fontes, pdf.js e service worker em www/
npm test                 conteúdo, motor e importador
npm run test:navegador   e2e, segurança e Minhas questões (servidor na 5321 e Playwright)
node tests/desktop.js    programa Windows (Electron do projeto)
node tests/android.js    app Android num emulador ou celular conectado por adb
npm run dist:win         instalador do Windows em dist/
npm run android:apk      APK de teste do Android
```

## Publicar na nuvem (grátis)

O app é estático, então qualquer hospedagem de site estático serve, sem custo:

- **GitHub Pages**: crie um repositório no GitHub, envie este projeto e ative Pages com "GitHub Actions" como origem.
  O fluxo `.github/workflows/site.yml` testa e publica `www/` a cada envio na branch `main`.
- **Cloudflare Pages** ou **Netlify**: aponte para o repositório com diretório de publicação `www` e comando
  `npm ci && npm run build:web`.
- Criar uma tag `v1.0.1` gera o instalador do Windows e o APK pelo `.github/workflows/versao.yml` e anexa à página de versões.

## Segurança

- Entrada não confiável (PDF, texto, planilha, JSON, backup, IndexedDB, URL) é validada e normalizada; o HTML é sempre
  escapado; a página tem Content-Security-Policy sem `eval`.
- pdf.js 3.11.174 roda com `isEvalSupported:false` e sem fontes embutidas (mitiga o CVE-2024-4367).
- Windows: janela isolada (sem Node, sandbox), navegação restrita à pasta do app, permissões negadas e fuses do Electron
  (sem modo Node, sem depurador, integridade do pacote). Por causa dos fuses, `tests/desktop.js` roda com o Electron do
  projeto, não com o instalado.
- Android: compartilhamento de arquivos restrito à pasta de exportação.
