# Helma

Plataforma de estudos para ENEM, vestibulares, concursos (administrativos, tribunais, policiais, bancários, estatais) e OAB.
Roda como **site** (instalável no celular e funciona sem internet), **programa para Windows** e **app Android**, todos a
partir do mesmo código em `www/`. Não tem servidor, conta, anúncio nem IA: tudo roda no aparelho do aluno, sem custo.

**Projeto pessoal e gratuito, sem fins comerciais**, feito para estudar com amigos. Site: https://arthuryvens.github.io/gabarito/

## Como usar

- **Windows:** `dist/Helma-Instalador-1.1.0.exe`.
- **Android:** `dist/Helma-Android-1.1.0.apk` (instalar com "fontes desconhecidas" permitidas).
- **Site:** https://arthuryvens.github.io/gabarito/ (no celular, use "Adicionar à tela inicial" para instalar e usar sem internet).
- **Navegador, localmente:** sirva a pasta: `python -m http.server 5321 -d www`.

## O que tem

- **Onboarding por objetivo**: o objetivo define o peso de cada matéria nos simulados e o tipo de redação.
- **Simulados** em modo prova (cronômetro no ritmo da banca, gabarito no final) ou modo estudo (correção a cada questão), com
  filtros por matéria, assunto, dificuldade, banca, tipo e situação; prioriza questões nunca vistas, erradas e assuntos fracos.
- **Explicação de todas as questões** (liga e desliga): resumo, resolução passo a passo, comentário de **cada alternativa**
  (por que a certa está certa e qual erro leva a cada errada), pegadinha, fontes e aula relacionada. Nas questões oficiais
  do INEP o comentário aparece como "Comentário do Helma", separado do texto oficial.
- **Minhas anotações** em qualquer questão e **"Por que você errou?"** (motivo do erro, com painel em Revisão).
- **Minhas questões**: o aluno alimenta o próprio banco com **PDF** (inclusive em duas colunas), **texto colado**,
  **planilha CSV** (Excel ou Google Planilhas) ou **questão escrita à mão**, com gabarito em vários formatos e uma tela de
  revisão antes de salvar. Pode criar matérias próprias (Contabilidade, Atualidades...). Os bancos ficam no IndexedDB.
- **Livros**: estante pessoal no aparelho (IndexedDB, nada é enviado). Adiciona PDF, EPUB, DOCX, TXT, MD e HTML (vários de uma vez),
  lê em modo leitura (PDF em canvas com zoom e página lembrada; os outros em capítulos) e guarda a posição. MOBI/AZW: converta para EPUB.
- **Contexto**: o aluno junta documentos e o app monta, **por regras, no próprio aparelho e sem internet**, questões de lacuna, certo ou errado e
  cartões a partir do texto (`js/gerador.js`). As questões vão para a mesma tela de revisão de Minhas questões antes de salvar.
- **O app aprende com você, no aparelho** (machine learning clássico em JavaScript, sem rede, sem IA de fora e sem custo; cada pessoa tem a sua área, nada de um usuário influencia outro):
  o gerador de Contexto escolhe o termo escondido por TF-IDF, escolhe distratores pelo cosseno de vetores de palavras (modelo inicial gerado das questões do app, mais as contagens dos textos da pessoa)
  e passa a ordenar as perguntas por um classificador (regressão logística) treinado com o que a pessoa aprova, edita ou descarta na revisão (a partir de 20 exemplos);
  o domínio de cada assunto e a dificuldade de cada questão para a pessoa (Elo) orientam simulados e a sugestão do dia, ajustam os intervalos da revisão e mostram, em Desempenho,
  o domínio em palavras e os padrões de erro (pegadinhas repetidas, assunto com muitos erros, tipo de alternativa). Em Ajustes: resumo do que foi aprendido, guardar no backup (desligado por padrão, porque as contagens refletem o conteúdo dos textos) e "Zerar". A criação de perguntas roda em pedaços de ~30 ms (`Gerador.gerarAsync`) e não repete frases já usadas.
- **Revisão espaçada** (1, 3, 7, 15, 30 e 60 dias, com o intervalo ajustado pela confiança, por erros repetidos e pelo domínio do assunto), caderno de erros, **aulas**, **redação** (competências, repertório,
  conectivos, modelo comentado, temas e editor com checagem), **plano de estudos** e **Onde estudar**.
- Backup completo (progresso e bancos) e sincronização entre abas abertas.

## Conteúdo e direitos

- **1.402 questões** no total, todas com explicação, e 28 aulas.
- **Química, com foco em orgânica** (`quimica-*.js`): 7 aulas de química orgânica (funções, nomenclatura, isomeria,
  reações, polímeros, petróleo e combustíveis, bioquímica) e 110 questões inéditas (70 de orgânica e 40 de química
  geral). Cada questão foi resolvida às cegas por um conferente que só via enunciado e alternativas, e as explicações,
  fórmulas, nomes IUPAC e contas foram revisados à parte (PubChem para fórmulas e nomes). Os nomes seguem a IUPAC; nas
  questões só entram compostos em que a regra de 2013 e a tradicional dão o mesmo nome.
- **245 questões de olimpíada** (`quimica-icho-*.js`, 136 de orgânica), adaptadas e traduzidas da Olimpíada
  Internacional de Química, cada uma com o crédito ao lado do enunciado:
  - 60 dos problemas preparatórios da 56ª IChO (Riade, 2024), licença Creative Commons BY-NC-SA 4.0;
  - 30 da prova e dos preparatórios da 40ª IChO (Budapeste, 2008), licença Creative Commons BY-SA 3.0;
  - 155 das provas de 1968 a 2023 (sem 2021) na coletânea *The Competition Problems from the International Chemistry
    Olympiads* (ed. Anton Sirota, IChO International Information Centre, Bratislava), que permite copiar e adaptar
    "for unlimited teaching purposes", com citação (volumes 3 e 4: sem uso comercial).
  As adaptações seguem a licença do original. A resposta vem da solução oficial; cada lote foi resolvido às cegas por
  um conferente e revisado contra o PDF oficial (problemas com erro na solução oficial ficaram de fora). Nenhuma outra
  olimpíada pesquisada (OBQ, estaduais, Ibero-americana, olimpíadas nacionais de vários países) tem licença aberta.
- **Figuras** (`img/q/`, `figuras-oficiais.js`): nas questões oficiais em que a figura ajuda (estrutura química,
  esquema, gráfico, circuito), o app mostra o recorte do caderno impresso, sem alteração, além da descrição do INEP.
  Fotos e imagens com crédito de terceiros não entram.
- **Questões oficiais de Ciências da Natureza** do INEP ficam em Química, Física e Biologia, por assunto
  (`classificacao-oficial.js`), sem mudar o texto oficial: 65 de química, 93 de física e 120 de biologia.
- **120 questões inéditas de informática** (`livros-*.js`): Linux, segurança da informação, redes e IPv6, hardware e
  informática para concursos. Os temas seguem os livros de estudo do usuário, mas nenhum texto deles foi usado: as
  questões são escritas do zero e citam só documentação aberta (man pages, RFCs, NIST, CERT.br, Microsoft).
- **314 questões inéditas** escritas para o app, no estilo das bancas (CEBRASPE, FGV, FCC, Cesgranrio, Vunesp, OAB/FGV e
  ENEM), com explicação, e 21 aulas. Nenhuma copia questão real: as provas dessas bancas não têm licença aberta. As 168
  dos arquivos `bancas-*.js` foram resolvidas por um conferente independente e conferidas com o texto vigente da lei.
- **137 questões oficiais do ENEM 2023–2025** (INEP/MEC), reproduzidas **sem alteração** sob a licença Creative Commons
  BY-ND 3.0 publicada pelo INEP, com crédito visível em cada questão. Só entram itens sem textos, imagens ou citações de
  terceiros (a licença do INEP não cobre esse material); as descrições de imagens são as do próprio INEP. Os cadernos
  em texto e ledor omitem a linha de fonte dos textos, então cada questão é conferida também no caderno impresso
  (`tools/caderno.js`): a que cita fonte de terceiros lá, ou que não é encontrada, fica de fora. Além da checagem
  automática, as suspeitas e as de 2011–2016 foram conferidas à mão no impresso. Geradas por
  `node tools/enem.js <pasta>` a partir dos arquivos oficiais de download.inep.gov.br (versão em texto e gabaritos).
- **476 questões oficiais a mais do INEP**, com as mesmas regras de licença: ENEM 2018 a 2022 e 2026 (aplicação regular),
  Ciências da Natureza do ENEM 2011, 2012, 2013 (reaplicação), 2015 (reaplicação) e 2016,
  ENEM 2025 (aplicação de Belém), ENEM 2020 a 2024 (reaplicação/PPL) e ENCCEJA 2020 e 2022 (Ensino Fundamental e Médio, regular e reaplicação). Geradas por
  `node tools/inep.js <pasta>` a partir dos cadernos em PDF. Cada item foi resolvido de forma independente e comparado
  com o gabarito oficial; os que perderam dado, fórmula ou fração na extração ficaram de fora e estão listados, com o
  motivo, em `tools/inep-revisao.json`. O INEP é a única instituição encontrada com licença aberta (os sites do
  Exército, FAB, Marinha, Pedro II, IFs, ITA, OBMEP e OBA não publicam licença).
- Provas da OAB/FGV, CEBRASPE, FCC, Vunesp, Cesgranrio e vestibulares **não têm licença aberta** e não são distribuídas: o
  aluno baixa nos sites oficiais e importa em Minhas questões para estudo pessoal.
- **Comentários das questões oficiais** (`js/dados/explicacoes-oficiais.js`): escritos para o app, à parte do texto do INEP
  (a licença não permite alterar a questão). Cada questão foi resolvida de forma independente antes de comparar com o
  gabarito oficial, e uma checagem automática confere que o comentário "Correta" é o da letra do gabarito.
- **Livros do aluno** ficam só no aparelho dele e nunca são enviados nem publicados. Não coloque livros protegidos por
  direito autoral neste repositório: ele é público.
- O projeto não é comercializado. Mesmo assim, as licenças acima valem (crédito ao INEP, sem alterar o texto oficial).
  Isto não é parecer jurídico.

## Estrutura

```
www/                 o app (site, Windows e Android usam esta pasta)
  js/banco.js        registro e validação de questões, aulas e matérias
  js/dados/          conteúdo (base.js tem matérias, objetivos e pesos; enem-oficial.js e inep-oficial.js são gerados;
                     explicacoes-oficiais.js tem os comentários das questões oficiais)
  js/motor.js        simulado, correção, desempenho, revisão espaçada, plano
  js/aprendizado.js  machine learning puro: IDF/TF-IDF, vetores (PPMI+SVD), cosseno, regressão logística, Elo, intervalos, padrões de erro (testado no Node)
  js/aprende.js      guarda no IndexedDB o aprendizado da pessoa (contagens de textos, exemplos da revisão, pesos); backup e zerar
  js/dados/modelo-base.js  modelo inicial (IDF e vetores), gerado por tools/modelo.js a partir das questões; igual para todos, ~315 KB
  js/importador.js   PDF/texto/planilha -> questões (sem DOM, testado no Node)
  js/extracao.js     PDF/EPUB/DOCX/HTML/TXT/MD -> seções de texto (ZIP com limites; testado no Node)
  js/gerador.js      texto -> questões de lacuna, certo/errado e cartões, por regras (testado no Node)
  js/armazem.js      bancos do aluno no IndexedDB
  js/store.js        progresso no localStorage, com normalização de entrada não confiável
  js/views-*.js      telas
  sw.js              service worker (gerado por tools/pwa.js)
desktop/main.js      programa para Windows (Electron)
android/             app Android (Capacitor)
tools/               validar.js, enem.js, inep.js, abertura.js (tela de abertura do Android), modelo.js (modelo inicial de palavras), fontes.js (fontes e pdf.js locais), pwa.js, icones.js
tests/               testes (abaixo)
.github/workflows/   testes, publicação do site e geração dos instaladores
```

## Desenvolvimento

```
npm install
npm run build:web        fontes, pdf.js, modelo inicial (tools/modelo.js, determinístico) e service worker em www/
npm test                 conteúdo, motor, importador, extração, gerador e aprendizado
npm run test:navegador   e2e, segurança, Minhas questões, recursos, Livros/Contexto e aprendizado (servidor na 5321 e Playwright)
node tests/desktop.js    programa Windows (Electron do projeto)
node tests/android.js    app Android num emulador ou celular conectado por adb
node tests/android-livros.js [pdf]  Livros e Criar questões no Android (depois do android.js)
npm run dist:win         instalador do Windows em dist/
npm run android:apk      APK de teste do Android
```

## Publicar na nuvem (grátis)

O app é estático, então não precisa de servidor:

- **GitHub Pages** (em uso): o fluxo `.github/workflows/site.yml` testa e publica `www/` a cada envio na branch `main`,
  em https://arthuryvens.github.io/gabarito/.
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
