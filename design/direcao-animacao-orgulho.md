# Direção de animação: "Orgulho de você"

A Helma reconhece um bom trabalho do aluno. Ela não comemora por si mesma: olha primeiro para o trabalho, depois para o aluno, ergue o queixo, abre um sorriso de verdade e dá uma piscadela cúmplice, como uma professora que viu o esforço dar certo.

**Tom:** calorosa, confiante, contida. Orgulho, não euforia. Nada de pulos grandes nem confete na tela inteira: o efeito acontece em volta dela.

**Quando aparece:**
- meta do dia cumprida (início);
- resultado de simulado ou diagnóstico a partir de 70%.

Não aparece no veredito de cada questão (52 px é pequeno demais para ler a piscadela); lá continua o pulo com sorriso.

**Duração:** 3,4 s de cena. Depois ela segura o sorriso suave até 5,1 s e volta ao ocioso (piscar de vez em quando).

**Lados:** sempre do ponto de vista dela. A piscadela é no **olho esquerdo dela** (à direita de quem olha a tela). A estrela e o reflexo brilham no **olho direito dela** (à esquerda da tela), que fica aberto: ela pisca um olho enquanto o outro brilha.

## Princípios

1. **Um foco por vez.** O olho do aluno vai do sorriso para a piscadela e depois para os brilhos. Os efeitos nunca disputam o mesmo instante.
2. **Antecipação antes do gesto.** Ela "toma fôlego" (afunda um pouco) antes de erguer o queixo.
3. **Exagero contido.** Inclinação de 5°, subida de 5% da altura. O orgulho vem da postura, não do tamanho do movimento.
4. **Hold legível.** A piscadela fica fechada tempo suficiente para ser lida (0,5 s), não é um piscar comum.
5. **Assentamento.** Ela volta como uma mola, passando um pouco da posição antes de parar; o sorriso aberto fecha no sorriso suave.
6. **Vida no hold.** Parada não é estátua: no meio da cena ela ri (dois balanços curtos), as bochechas pulsam e os dois olhos piscam uma vez.
7. **Fluidez.** O movimento nunca para entre duas batidas: cada canal é uma curva suave que passa por todas as batidas, desenhada quadro a quadro a 60 quadros por segundo.

## Linha do tempo

| Tempo | Corpo | Rosto | Efeitos |
|---|---|---|---|
| 0 – 0,14 s | **Olha o trabalho:** pose três-quartos (quadro desenhado), cabeça baixa 1,5° | boca neutra | nenhum |
| 0,14 s | **Vira para o aluno:** pose de frente (quadro desenhado, com 70 ms de fusão) | olhos abertos | nenhum |
| 0,16 – 0,34 s | **Antecipação:** afunda 2% e achata 3% | olhos abertos | nenhum |
| 0,34 – 0,6 s | **Ergue o queixo:** sobe 5,6%, inclina −5,6° pela base do pescoço, cresce 3,5% | sorriso aberto cresce de 60% para 107%; olhos de alegria | rubor surge |
| 0,6 – 1,0 s | assenta em 5% e −5°, quase parada | sorriso assenta (98%, 100%) | rubor completo |
| 1,0 – 1,12 s | **aceno:** a cabeça baixa 1,6° com a piscadela | **piscadela:** o olho esquerdo dela fecha acelerando; o direito aperta junto | estrela nasce girando no olho direito dela |
| 1,12 – 1,62 s | volta do aceno e segura | olho fechado, sorriso pleno | estrela passa de 125% e assenta; **reflexo** atravessa a lente do olho direito; 1ª onda de **brilhos** |
| 1,62 – 1,84 s | segura | o olho reabre ainda apertado | estrela **cintila** de novo (118%) e some em 1,94 s |
| 1,85 – 2,22 s | **risada:** dois balanços curtos (sobe 1,3%, desce, sobe 0,9%) | boca pulsa junto (105%, 104%) | bochechas pulsam (114%); 2ª onda de brilhos |
| 2,42 – 2,6 s | segura | **os dois olhos piscam** uma vez | rubor mantém |
| 2,6 – 2,85 s | respira (0,4%) | olhos de alegria, sorriso pleno | nenhum |
| 2,85 – 3,15 s | **assenta:** volta passando 0,9% da posição | sorriso suave aparece por baixo; a boca aberta fecha sólida e some num corte (2,97 s) | rubor some |
| 3,15 – 3,4 s | volta da mola e para | olhos relaxam no sorriso suave | nenhum |
| 3,4 – 5,1 s | parada | segura o sorriso suave; no fim relaxa | nenhum |

## Rosto

- **Sorriso de verdade:** boca aberta em "D" com os dentes de cima à mostra e a língua sugerida, cantos puxados para cima com vincos. Mesmo índigo e mesma espessura do traço do desenho.
- **Olhos de alegria (sorriso de Duchenne):** a pálpebra de cima desce um terço e a de baixo sobe em arco. Sem isso, o sorriso parece educado, não verdadeiro.
- **Piscadela:** fecha só o olho esquerdo dela, em curva sorridente. O olho direito aperta um pouco mais durante a piscadela (os dois olhos se mexem juntos num rosto de verdade).
- **Rubor:** duas manchas coral suaves nas bochechas, abaixo da armação, com bordas difusas.

## Efeitos

- **Estrela:** estrela dourada de 4 pontas (#C48628) com contorno índigo e miolo branco, no canto de fora do olho direito dela. Nasce girando de −45° a 0°, passa de 125%, assenta, cintila uma segunda vez e some girando.
- **Reflexo nos óculos:** faixa dupla de luz dourada que atravessa uma vez a lente do olho direito dela.
- **Brilhos:** cinco pontos dourados sobem e se abrem em leque em volta da cabeça, em duas ondas (na piscadela e na risada).

## Movimento reduzido

Com "reduzir movimento" ligado no sistema: sem deslocamento, inclinação, piscadela, reflexo nem brilhos. Ela mostra o rosto orgulhoso parado (sorriso aberto, olhos de alegria e rubor) por 1,8 s e volta ao normal.

## Implementação

- **Batidas, não keyframes:** em `www/js/personagem.js`, `BATIDAS` lista para cada canal (corpo, boca, pálpebras, rubor, estrela, reflexo) os pares [segundo, valor] desta tabela. Uma curva de Hermite monotônica passa por todas elas sem exagerar entre duas (todo exagero é uma batida explícita), e o motor gera um quadro a cada 1/60 s, tocado pela Web Animations API (só transform e opacidade, que o navegador anima fora da thread principal).
- **Fim sem salto:** o último quadro é o estado de repouso; `tests/personagem.test.js` garante isso, além de que a curva passa pelas batidas e não exagera.
- **Poses:** as trocas de desenho (três-quartos para frente) usam 70 ms de fusão: a pose nova aparece por cima da antiga, que fica inteira por baixo. Fusões mais longas viram "dupla exposição", porque as poses têm silhuetas diferentes; para trocas mais suaves que isso, é preciso desenhar quadros intermediários.
- **Camadas:** `.hp-sorriso-grande`, `.hp-sorriso`, `.hp-palpebras`, `.hp-alegria`, `.hp-rubor`, `.hp-reflexo` e `.hp-estrela`, por cima da pose de frente e dentro do palco (acompanham a cabeça). Posições em % da pose, a partir dos olhos e da boca medidos em `poses.js`.
- **Para mudar o tempo:** edite as batidas em `BATIDAS` e rode `node tests/personagem.test.js`. Os brilhos (CSS) começam em 1,15 s e 1,95 s.
