# Direção de animação: "Orgulho de você"

A Helma reconhece um bom trabalho do aluno. Ela não comemora por si mesma: ela olha para o aluno, ergue o queixo, abre um sorriso de verdade e dá uma piscadela cúmplice, como uma professora que viu o esforço dar certo.

**Tom:** calorosa, confiante, contida. Orgulho, não euforia. Nada de pulos grandes nem confete na tela inteira: o efeito acontece em volta dela.

**Quando aparece:**
- meta do dia cumprida (início);
- resultado de simulado ou diagnóstico a partir de 70%.

Não aparece no veredito de cada questão (52 px é pequeno demais para ler a piscadela); lá continua o pulo com sorriso.

**Duração:** 2,4 s. Depois, sorriso suave por 1,5 s e volta ao ocioso (piscar de vez em quando).

## Princípios

1. **Um foco por vez.** O olho do aluno vai do sorriso para a piscadela e depois para os brilhos. Os efeitos nunca disputam o mesmo instante.
2. **Antecipação antes do gesto.** Ela "toma fôlego" (afunda um pouco) antes de erguer o queixo.
3. **Exagero contido.** Inclinação de 5°, subida de 5% da altura. O orgulho vem da postura, não do tamanho do movimento.
4. **Hold legível.** A piscadela fica fechada tempo suficiente para ser lida (0,45 s), não é um piscar comum.
5. **Assentamento.** Ela volta devagar, sem cortar: o sorriso aberto fecha no sorriso suave.

## Linha do tempo

| Tempo | % | Corpo | Rosto | Efeitos | Curva |
|---|---|---|---|---|---|
| 0 – 0,17 s | 0 – 7 | **Antecipação:** afunda 2% e achata 3% | olhos abertos, boca neutra | nenhum | entrada lenta (ease-in) |
| 0,17 – 0,5 s | 7 – 21 | **Ergue o queixo:** sobe 5%, inclina −5° pela base do pescoço, cresce 3% | sorriso aberto cresce de 60% para 100%; olhos de alegria (pálpebra de cima desce, de baixo sobe) | rubor surge nas bochechas | ultrapassa e volta (overshoot) |
| 0,5 – 0,82 s | 21 – 34 | segura a pose | sorriso pleno | rubor completo | parado |
| 0,82 – 0,96 s | 34 – 40 | leve aceno (1° a mais) | **piscadela:** olho direito fecha rápido | estrela dourada nasce no canto do olho, gira e cresce até 120% | rápida (ease-out) |
| 0,96 – 1,4 s | 40 – 58 | segura | olho fechado, sorriso pleno | **reflexo** varre a lente esquerda; **brilhos** dourados sobem em volta da cabeça | linear no reflexo |
| 1,4 – 1,6 s | 58 – 67 | segura | olho reabre ainda apertado | estrela some | ease-in-out |
| 1,6 – 2,0 s | 67 – 83 | respira (oscila 1%) | olhos de alegria, sorriso pleno | rubor mantém | suave |
| 2,0 – 2,4 s | 83 – 100 | **assenta:** volta à posição | sorriso aberto vira sorriso suave; olhos relaxam | rubor some | saída lenta (ease-out) |

## Rosto

- **Sorriso de verdade:** boca aberta em "D" com os dentes de cima à mostra e a língua sugerida, cantos puxados para cima com vincos. Mesmo índigo e mesma espessura do traço do desenho.
- **Olhos de alegria (sorriso de Duchenne):** a pálpebra de cima desce um terço e a de baixo sobe em arco. Sem isso, o sorriso parece educado, não verdadeiro.
- **Piscadela:** fecha só o olho direito da personagem (à direita de quem olha), em curva sorridente. O outro olho continua apertado de alegria.
- **Rubor:** duas manchas coral suaves nas bochechas, abaixo da armação, com bordas difusas.

## Efeitos

- **Estrela da piscadela:** estrela dourada de 4 pontas (#C48628) com miolo branco, no canto de fora do olho que pisca. Nasce girando de −45° a 0°, passa de 120% e assenta em 100%.
- **Reflexo nos óculos:** faixa de luz diagonal que atravessa a lente esquerda uma vez.
- **Brilhos:** cinco pontos dourados sobem e se abrem em leque em volta da cabeça.

## Movimento reduzido

Com "reduzir movimento" ligado no sistema: sem deslocamento, inclinação, piscadela, reflexo nem brilhos. Ela mostra o rosto orgulhoso parado (sorriso aberto, olhos de alegria e rubor) por 1,8 s e volta ao normal.

## Implementação

- Camadas por cima da pose de frente, todas dentro do palco (acompanham o movimento da cabeça): `.hp-sorriso-grande` (boca), `.hp-alegria` (pálpebras de baixo), `.hp-rubor`, `.hp-reflexo` e `.hp-estrela`.
- Linha do tempo única em CSS: a classe `.orgulho` dispara todas as animações com a mesma duração (2,4 s). As porcentagens dos keyframes são as da tabela acima.
- Posições em % da pose, derivadas dos olhos e da boca medidos em `poses.js` (gerado por `tools/personagem.js`).
- Motor: `Personagem.animar(el, 'orgulho')`; o humor `'orgulho'` em `Personagem.html` dispara ao aparecer.
