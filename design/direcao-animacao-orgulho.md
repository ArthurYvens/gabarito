# Direção de animação: "Orgulho de você"

A Helma reconhece um bom trabalho do aluno. Ela não comemora por si mesma: olha primeiro para o trabalho, depois para o aluno, ergue o queixo, abre um sorriso de verdade e dá uma piscadela cúmplice, como uma professora que viu o esforço dar certo.

**Tom:** calorosa, confiante, contida. Orgulho, não euforia. Nada de pulos grandes nem confete na tela inteira: o efeito acontece em volta dela.

**Quando aparece:**
- meta do dia cumprida (início);
- resultado de simulado ou diagnóstico a partir de 70%.

Não aparece no veredito de cada questão (52 px é pequeno demais para ler a piscadela); lá continua o pulo com sorriso.

**Duração:** 3,2 s. Depois, sorriso suave por 1,5 s e volta ao ocioso (piscar de vez em quando).

## Princípios

1. **Um foco por vez.** O olho do aluno vai do sorriso para a piscadela e depois para os brilhos. Os efeitos nunca disputam o mesmo instante.
2. **Antecipação antes do gesto.** Ela "toma fôlego" (afunda um pouco) antes de erguer o queixo.
3. **Exagero contido.** Inclinação de 5°, subida de 5% da altura. O orgulho vem da postura, não do tamanho do movimento.
4. **Hold legível.** A piscadela fica fechada tempo suficiente para ser lida (0,45 s), não é um piscar comum.
5. **Assentamento.** Ela volta como uma mola, passando um pouco da posição antes de parar; o sorriso aberto fecha no sorriso suave.
6. **Vida no hold.** Parada não é estátua: no meio da cena ela ri (dois balanços curtos), as bochechas pulsam e os dois olhos piscam uma vez.

## Linha do tempo

| Tempo | % | Corpo | Rosto | Efeitos | Curva |
|---|---|---|---|---|---|
| 0 – 0,12 s | 0 – 3,75 | **Olha o trabalho:** pose três-quartos (quadro desenhado) | boca neutra | nenhum | parado |
| 0,12 s | 3,75 | **Vira para o aluno:** pose de frente (quadro desenhado) | olhos abertos | nenhum | corte |
| 0,12 – 0,3 s | 3,75 – 9,4 | **Antecipação:** afunda 2% e achata 3% | olhos abertos | nenhum | entrada lenta (ease-in) |
| 0,3 – 0,62 s | 9,4 – 19,4 | **Ergue o queixo:** sobe 5%, inclina −5° pela base do pescoço, cresce 3% | sorriso aberto cresce de 60% para 107%; olhos de alegria | rubor surge | ultrapassa e volta (overshoot) |
| 0,62 – 0,95 s | 19,4 – 29,7 | segura | sorriso assenta: 98% e depois 100% | rubor completo | ease-in-out |
| 0,95 – 1,07 s | 29,7 – 33,5 | **aceno:** a cabeça baixa 1,5° com a piscadela | **piscadela:** o olho direito dela fecha | estrela nasce girando e passa de 125% | rápida (ease-out) |
| 1,07 – 1,55 s | 33,5 – 48,4 | segura | olho fechado, sorriso pleno | estrela assenta (95%, 100%); **reflexo** atravessa a lente; 1ª onda de **brilhos** | linear no reflexo |
| 1,55 – 1,75 s | 48,4 – 54,7 | segura | olho reabre ainda apertado | estrela **cintila** de novo (118%) e some | ease-in-out |
| 1,75 – 2,2 s | 54,7 – 69 | **risada:** dois balanços curtos (sobe 1,2%, desce, sobe 0,9%) | boca pulsa junto (105%, 104%) | bochechas pulsam (114%); 2ª onda de brilhos | suave |
| 2,3 – 2,45 s | 72 – 76,6 | segura | **os dois olhos piscam** uma vez | rubor mantém | rápida |
| 2,45 – 2,75 s | 76,6 – 86 | respira (oscila 0,4%) | olhos de alegria, sorriso pleno | nenhum | suave |
| 2,75 – 3,0 s | 86 – 93,5 | **assenta:** começa a voltar | sorriso suave aparece por baixo; a boca aberta fecha sólida e some num corte | rubor some | ease-in-out |
| 3,0 – 3,2 s | 93,5 – 100 | passa 1% da posição e volta (mola) | olhos relaxam no sorriso suave | nenhum | saída lenta |

## Rosto

- **Sorriso de verdade:** boca aberta em "D" com os dentes de cima à mostra e a língua sugerida, cantos puxados para cima com vincos. Mesmo índigo e mesma espessura do traço do desenho.
- **Olhos de alegria (sorriso de Duchenne):** a pálpebra de cima desce um terço e a de baixo sobe em arco. Sem isso, o sorriso parece educado, não verdadeiro.
- **Piscadela:** fecha só o olho direito da personagem (o que fica à **esquerda** de quem olha a tela), em curva sorridente. O outro olho continua apertado de alegria.
- **Rubor:** duas manchas coral suaves nas bochechas, abaixo da armação, com bordas difusas.

## Efeitos

- **Estrela da piscadela:** estrela dourada de 4 pontas (#C48628) com miolo branco, no canto de fora do olho que pisca (o direito dela). Nasce girando de −45° a 0°, passa de 120% e assenta em 100%.
- **Reflexo nos óculos:** faixa de luz diagonal que atravessa uma vez a lente do olho que pisca. Os três efeitos da piscadela (olho fechado, estrela e reflexo) ficam no mesmo olho.
- **Brilhos:** cinco pontos dourados sobem e se abrem em leque em volta da cabeça.

## Movimento reduzido

Com "reduzir movimento" ligado no sistema: sem deslocamento, inclinação, piscadela, reflexo nem brilhos. Ela mostra o rosto orgulhoso parado (sorriso aberto, olhos de alegria e rubor) por 1,8 s e volta ao normal.

## Implementação

- Camadas por cima da pose de frente, todas dentro do palco (acompanham o movimento da cabeça): `.hp-sorriso-grande` (boca), `.hp-alegria` (pálpebras de baixo), `.hp-rubor`, `.hp-reflexo` e `.hp-estrela`.
- Linha do tempo única em CSS: a classe `.orgulho` dispara todas as animações com a mesma duração (3,2 s); as duas poses do começo são trocadas pelo motor (0 e 0,12 s). As porcentagens dos keyframes são as da tabela acima.
- Posições em % da pose, derivadas dos olhos e da boca medidos em `poses.js` (gerado por `tools/personagem.js`).
- Motor: `Personagem.animar(el, 'orgulho')`; o humor `'orgulho'` em `Personagem.html` dispara ao aparecer.
