/* Exatas: Matemática, Raciocínio Lógico, Física e Química.
   Questões inéditas, escritas no estilo de cada banca. */
Banco.registrar({
  questoes: [
    /* ============================== MATEMÁTICA ============================== */
    {
      id: 'mat-001',
      materia: 'matematica',
      assunto: 'Porcentagem',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 1,
      objetivos: ['enem'],
      textoBase: 'Uma loja vendia um tênis por R$ 240,00. No início de novembro, o preço foi reajustado em 25%. Na semana da Black Friday, a loja anunciou “20% de desconto” sobre o preço reajustado.',
      enunciado: 'Na semana da Black Friday, o cliente que comprou esse tênis pagou',
      alternativas: ['R$ 192,00.', 'R$ 225,00.', 'R$ 240,00.', 'R$ 252,00.', 'R$ 300,00.'],
      resposta: 2,
      explicacao: {
        resumo: 'Aumentar 25% é multiplicar por 1,25 e descontar 20% é multiplicar por 0,80. Como 1,25 × 0,80 = 1, o preço volta a R$ 240,00.',
        detalhada: 'Em porcentagem, cada variação vira um **fator multiplicativo**: aumento de i% → multiplicar por (1 + i/100); desconto de i% → multiplicar por (1 − i/100).\n\n**Passo 1 (reajuste):** 240 × 1,25 = 300. O tênis passou a custar R$ 300,00.\n\n**Passo 2 (desconto):** os 20% incidem sobre os R$ 300,00, não sobre os R$ 240,00 originais. 300 × 0,80 = 240.\n\nRepare no fator acumulado: 1,25 × 0,80 = 1,00. Ou seja, o “desconto” apenas desfez o aumento. Isso acontece porque 1,25 e 0,80 são inversos (1,25 = 5/4 e 0,80 = 4/5).\n\n**Atalho de prova:** nunca some ou subtraia porcentagens sucessivas. Multiplique os fatores. Se o produto der 1, o valor final é igual ao inicial.',
        alternativas: [
          'Aplicou só o desconto de 20% sobre o preço original (240 × 0,8 = 192) e ignorou o reajuste.',
          'Trocou as taxas: descontou 25% sobre o novo preço (300 × 0,75 = 225).',
          'Correta. 240 × 1,25 × 0,80 = 240.',
          'Somou as porcentagens (+25% − 20% = +5%) e fez 240 × 1,05 = 252. Porcentagens sucessivas não se somam.',
          'Aplicou só o reajuste (240 × 1,25 = 300) e esqueceu o desconto.'
        ],
        dica: 'Um aumento de 25% seguido de um desconto de 20% sempre resulta no valor inicial, porque 5/4 × 4/5 = 1. O mesmo vale para +50% e −1/3 (3/2 × 2/3 = 1).'
      },
      fontes: [
        { titulo: 'Wikipédia: Percentagem', url: 'https://pt.wikipedia.org/wiki/Percentagem' },
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org/' }
      ]
    },
    {
      id: 'mat-002',
      materia: 'matematica',
      assunto: 'Porcentagem',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'estatais'],
      enunciado: 'O preço de um serviço sofreu um aumento de 20% em março e, sobre o novo valor, outro aumento de 30% em agosto. Nessa situação, o aumento acumulado no período foi superior a 55% do preço inicial.',
      resposta: true,
      explicacao: {
        resumo: 'Certo. O fator acumulado é 1,20 × 1,30 = 1,56, ou seja, aumento de 56%, que é maior que 55%.',
        detalhada: 'Aumentos sucessivos se **multiplicam**. Um aumento de 20% equivale a multiplicar por 1,20; um de 30%, por 1,30.\n\n**Fator acumulado:** 1,20 × 1,30 = 1,56. Subtraindo 1, temos 0,56 = **56%** de aumento acumulado.\n\nQuem soma as taxas (20% + 30% = 50%) conclui, de forma errada, que o item está errado. A diferença de 6 pontos vem do “juro sobre juro”: o segundo aumento de 30% incide também sobre os 20% já acrescidos (0,30 × 0,20 = 0,06).\n\n**Atalho:** para duas taxas a e b, o acumulado é a + b + a·b. Aqui: 20% + 30% + (0,2 × 0,3 = 6%) = 56%. Como 56% > 55%, o item está **certo**.',
        dica: 'Fórmula rápida para dois aumentos: a + b + ab. Para aumento a seguido de desconto b: a − b − ab.'
      },
      fontes: [
        { titulo: 'Wikipédia: Percentagem', url: 'https://pt.wikipedia.org/wiki/Percentagem' }
      ]
    },
    {
      id: 'mat-003',
      materia: 'matematica',
      assunto: 'Porcentagem',
      tipo: 'multipla',
      estilo: 'FGV',
      dificuldade: 3,
      objetivos: ['concursos-gerais', 'estatais'],
      enunciado: 'Em uma empresa, 40% dos funcionários são mulheres. Sabe-se que 25% das mulheres e 10% dos homens ocupam cargos de gerência. Entre os gerentes dessa empresa, a porcentagem de mulheres é',
      alternativas: ['16%.', '25%.', '40%.', '62,5%.', 'aproximadamente 71,4%.'],
      resposta: 3,
      explicacao: {
        resumo: 'Mulheres gerentes: 0,40 × 0,25 = 10% do total; homens gerentes: 0,60 × 0,10 = 6%. Logo, as mulheres são 10/16 = 62,5% dos gerentes.',
        detalhada: 'Quando a questão dá “porcentagem de uma porcentagem”, o melhor é supor um total de **100 funcionários** e trabalhar com quantidades.\n\n**Passo 1:** 40 mulheres e 60 homens.\n\n**Passo 2:** gerentes mulheres = 25% de 40 = 10; gerentes homens = 10% de 60 = 6. Total de gerentes = 16.\n\n**Passo 3:** a pergunta muda a base: agora o “todo” são os gerentes. Porcentagem de mulheres entre os gerentes = 10/16 = 5/8 = **62,5%**.\n\nO ponto central é perceber a **troca de referência**: 25% é a taxa de gerentes entre as mulheres; a pergunta quer a taxa de mulheres entre os gerentes. São coisas diferentes. Esse raciocínio é o mesmo da probabilidade condicional.',
        alternativas: [
          '16% é a fração de gerentes na empresa inteira (16 em 100), não a fração de mulheres entre os gerentes.',
          '25% é a porcentagem de gerentes entre as mulheres. A pergunta inverte a referência.',
          '40% é a participação das mulheres na empresa toda, e não entre os gerentes.',
          'Correta. 10 mulheres gerentes em 16 gerentes = 62,5%.',
          'Fez 25/(25 + 10) ≈ 71,4%, comparando as taxas sem ponderar pelo tamanho de cada grupo (há mais homens que mulheres).'
        ],
        dica: 'Em porcentagens encadeadas, suponha 100 pessoas (ou R$ 100). As contas viram quantidades inteiras e a troca de base fica visível.'
      },
      fontes: [
        { titulo: 'Wikipédia: Percentagem', url: 'https://pt.wikipedia.org/wiki/Percentagem' },
        { titulo: 'Wikipédia: Probabilidade condicional', url: 'https://pt.wikipedia.org/wiki/Probabilidade_condicional' }
      ]
    },
    {
      id: 'mat-004',
      materia: 'matematica',
      assunto: 'Razão e proporção',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 1,
      objetivos: ['enem'],
      textoBase: 'Um estudante usa um mapa na escala 1 : 50 000 para planejar uma trilha. No mapa, a distância em linha reta entre o ponto de partida e um mirante é de 6 cm.',
      enunciado: 'A distância real, em linha reta, entre o ponto de partida e o mirante é de',
      alternativas: ['3 km.', '30 km.', '300 km.', '300 m.', '83 m.'],
      resposta: 0,
      explicacao: {
        resumo: 'Escala 1 : 50 000 significa que 1 cm no mapa vale 50 000 cm reais. Então 6 cm valem 300 000 cm = 3 km.',
        detalhada: 'A escala é uma **razão** entre a medida no desenho e a medida real, sempre na mesma unidade: 1 : 50 000 quer dizer que 1 cm no mapa corresponde a 50 000 cm no terreno.\n\n**Passo 1 (proporção):** 6 cm × 50 000 = 300 000 cm.\n\n**Passo 2 (conversão):** 1 m = 100 cm e 1 km = 100 000 cm. Logo, 300 000 cm = 3 000 m = **3 km**.\n\n**Atalho de prova:** para converter centímetros em quilômetros, corte cinco zeros (divida por 100 000). 300 000 cm → 3 km. Na escala 1 : 50 000, cada centímetro do mapa equivale a 0,5 km, então 6 cm = 3 km.',
        alternativas: [
          'Correta. 6 × 50 000 = 300 000 cm = 3 km.',
          'Errou a conversão em uma casa decimal: dividiu 300 000 por 10 000 em vez de 100 000.',
          'Dividiu 300 000 por 1 000 (conversão de metros para quilômetros) sem antes converter centímetros em metros.',
          'Dividiu 300 000 cm por 1 000 em vez de 100: 300 000 cm são 3 000 m, não 300 m.',
          'Dividiu 50 000 por 6 em vez de multiplicar (≈ 8 333 cm ≈ 83 m). A escala multiplica a medida do mapa.'
        ],
        dica: 'Denominador grande = escala pequena = mapa que mostra área grande com menos detalhe. Sempre multiplique a medida do mapa pelo denominador e só depois converta a unidade.'
      },
      fontes: [
        { titulo: 'Wikipédia: Escala cartográfica', url: 'https://pt.wikipedia.org/wiki/Escala_cartogr%C3%A1fica' },
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org/' }
      ]
    },
    {
      id: 'mat-005',
      materia: 'matematica',
      assunto: 'Razão e proporção',
      tipo: 'multipla',
      estilo: 'FCC',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'tribunais'],
      enunciado: 'Um prêmio de R$ 5.700,00 será dividido entre três técnicos em partes inversamente proporcionais ao número de faltas de cada um no semestre: 2, 4 e 5 faltas. O técnico que teve 4 faltas receberá',
      alternativas: ['R$ 1.200,00.', 'R$ 1.500,00.', 'R$ 1.900,00.', 'R$ 2.072,73.', 'R$ 3.000,00.'],
      resposta: 1,
      explicacao: {
        resumo: 'Inversamente proporcional a 2, 4 e 5 equivale a diretamente proporcional a 1/2, 1/4 e 1/5, ou seja, a 10, 5 e 4. Cada parte vale 5 700 ÷ 19 = 300; quem teve 4 faltas recebe 5 × 300 = R$ 1.500,00.',
        detalhada: 'Dividir em partes **inversamente proporcionais** a 2, 4 e 5 é o mesmo que dividir em partes **diretamente proporcionais** aos inversos: 1/2, 1/4 e 1/5.\n\n**Passo 1 (tirar as frações):** multiplique os inversos pelo MMC dos denominadores, 20: 1/2 × 20 = 10; 1/4 × 20 = 5; 1/5 × 20 = 4. Os pesos ficam 10, 5 e 4.\n\n**Passo 2 (valor de cada parte):** 10 + 5 + 4 = 19 partes. 5 700 ÷ 19 = 300 reais por parte.\n\n**Passo 3:** 2 faltas → 10 × 300 = 3 000; 4 faltas → 5 × 300 = **1 500**; 5 faltas → 4 × 300 = 1 200. Conferência: 3 000 + 1 500 + 1 200 = 5 700.\n\n**Atalho:** quem tem menos faltas ganha mais. Se a sua resposta deu o maior valor para quem mais faltou, você fez divisão direta.',
        alternativas: [
          'É a parte de quem teve 5 faltas (4 × 300).',
          'Correta. Pesos 10, 5 e 4; 5 × 300 = 1 500.',
          'Dividiu igualmente: 5 700 ÷ 3 = 1 900. Ignorou a proporcionalidade.',
          'Fez divisão diretamente proporcional: 5 700 × 4/11 ≈ 2 072,73. O enunciado pede inversa.',
          'É a parte de quem teve 2 faltas (10 × 300).'
        ],
        dica: 'Inversamente proporcional: inverta os números, tire o MMC para ficar com inteiros e só então divida diretamente.'
      },
      fontes: [
        { titulo: 'Wikipédia: Proporcionalidade', url: 'https://pt.wikipedia.org/wiki/Proporcionalidade' },
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org/' }
      ]
    },
    {
      id: 'mat-006',
      materia: 'matematica',
      assunto: 'Matemática financeira',
      tipo: 'multipla',
      estilo: 'Cesgranrio',
      dificuldade: 1,
      objetivos: ['bancarios', 'estatais'],
      enunciado: 'Um cliente aplicou R$ 4.000,00 a juros simples, à taxa de 1,5% ao mês, durante 8 meses. Ao final do período, o montante resgatado foi de',
      alternativas: ['R$ 480,00', 'R$ 4.048,00', 'R$ 4.060,00', 'R$ 4.480,00', 'R$ 4.505,97'],
      resposta: 3,
      explicacao: {
        resumo: 'J = C · i · t = 4 000 × 0,015 × 8 = 480. Montante M = C + J = R$ 4.480,00.',
        detalhada: 'No regime de **juros simples**, os juros de cada mês são calculados sempre sobre o capital inicial. Por isso eles crescem em linha reta.\n\n**Fórmulas:** J = C · i · t e M = C + J = C · (1 + i · t), com a taxa na forma decimal e taxa e tempo na mesma unidade.\n\n**Conta:** i = 1,5% = 0,015 ao mês; t = 8 meses. J = 4 000 × 0,015 × 8 = 60 × 8 = 480. M = 4 000 + 480 = **R$ 4.480,00**.\n\n**Atalho:** 1,5% de 4 000 é 60 por mês (1% = 40, 0,5% = 20). Em 8 meses, 8 × 60 = 480. Atenção ao que a banca pede: juros ou montante.',
        alternativas: [
          'R$ 480,00 são só os juros. A questão pede o montante (capital + juros).',
          'Usou 0,15% (0,0015) em vez de 1,5% (0,015): 4 000 × 0,0015 × 8 = 48.',
          'Calculou os juros de um único mês (60) e esqueceu de multiplicar pelo prazo.',
          'Correta. M = 4 000 × (1 + 0,015 × 8) = 4 480.',
          'Usou juros compostos: 4 000 × 1,015⁸ ≈ 4 505,97. A aplicação é a juros simples.'
        ],
        dica: 'Simples = cresce somando sempre o mesmo valor (progressão aritmética). Composto = cresce multiplicando pelo mesmo fator (progressão geométrica).'
      },
      fontes: [
        { titulo: 'Wikipédia: Juro', url: 'https://pt.wikipedia.org/wiki/Juro' },
        { titulo: 'Banco Central do Brasil', url: 'https://www.bcb.gov.br/' }
      ]
    },
    {
      id: 'mat-007',
      materia: 'matematica',
      assunto: 'Matemática financeira',
      tipo: 'multipla',
      estilo: 'Cesgranrio',
      dificuldade: 2,
      objetivos: ['bancarios', 'estatais'],
      enunciado: 'Uma pessoa aplicou R$ 5.000,00 em um investimento que rende juros compostos de 2% ao mês. Após 3 meses, sem fazer saques nem novos depósitos, o valor dos juros obtidos nesse período foi de',
      alternativas: ['R$ 100,00', 'R$ 300,00', 'R$ 306,04', 'R$ 5.300,00', 'R$ 5.306,04'],
      resposta: 2,
      explicacao: {
        resumo: 'M = 5 000 × 1,02³ = 5 000 × 1,061208 = 5 306,04. Juros = M − C = R$ 306,04.',
        detalhada: 'Nos **juros compostos**, os juros de cada mês são incorporados ao saldo e passam a render no mês seguinte (“juros sobre juros”).\n\n**Fórmula:** M = C · (1 + i)ⁿ e J = M − C.\n\n**Conta mês a mês (boa para conferir):**\n- Mês 1: 5 000 × 1,02 = 5 100,00\n- Mês 2: 5 100 × 1,02 = 5 202,00\n- Mês 3: 5 202 × 1,02 = 5 306,04\n\nOu direto: 1,02³ = 1,061208 e 5 000 × 1,061208 = 5 306,04. Os juros são 5 306,04 − 5 000 = **R$ 306,04**.\n\n**Atalho de prova:** o composto rende sempre um pouco mais que o simples (que daria 300). Se as alternativas trazem 300 e um valor ligeiramente maior, o composto é o maior. A diferença de R$ 6,04 são os juros que os juros renderam.',
        alternativas: [
          'R$ 100,00 são os juros de apenas um mês (2% de 5 000).',
          'Calculou juros simples: 5 000 × 0,02 × 3 = 300. Ignorou a capitalização.',
          'Correta. 5 000 × (1,02³ − 1) = 306,04.',
          'É o montante a juros simples, e a pergunta pede os juros compostos.',
          'É o montante a juros compostos. A pergunta pede só os juros (M − C).'
        ],
        dica: 'Em prova sem calculadora, potências pequenas como 1,02³ saem mais fácil multiplicando mês a mês.'
      },
      fontes: [
        { titulo: 'Wikipédia: Juro', url: 'https://pt.wikipedia.org/wiki/Juro' },
        { titulo: 'Banco Central do Brasil', url: 'https://www.bcb.gov.br/' }
      ]
    },
    {
      id: 'mat-008',
      materia: 'matematica',
      assunto: 'Matemática financeira',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 3,
      objetivos: ['bancarios', 'concursos-gerais'],
      enunciado: 'Um banco anuncia um financiamento à taxa nominal de 24% ao ano, com capitalização mensal. Nesse caso, a taxa efetiva anual cobrada pelo banco é superior a 26%. (Considere 1,02¹² ≈ 1,268.)',
      resposta: true,
      explicacao: {
        resumo: 'Certo. Taxa nominal de 24% a.a. com capitalização mensal significa 2% ao mês. A taxa efetiva anual é 1,02¹² − 1 ≈ 26,8%, maior que 26%.',
        detalhada: 'A **taxa nominal** é só uma forma de anunciar: o período da taxa (ano) é diferente do período de capitalização (mês). Ela nunca é usada diretamente na conta.\n\n**Passo 1 (taxa proporcional do período):** 24% ao ano ÷ 12 meses = **2% ao mês**. Essa é a taxa efetiva mensal.\n\n**Passo 2 (taxa efetiva anual, por equivalência composta):** (1 + i_anual) = (1 + i_mensal)¹² → 1 + i_anual = 1,02¹² ≈ 1,268 → i_anual ≈ 26,8%.\n\nComo 26,8% > 26%, o item está **certo**. A taxa efetiva é sempre maior que a nominal quando há mais de uma capitalização no período, porque os juros de cada mês passam a render juros.\n\n**Atalho:** nominal → divida pelo número de capitalizações; efetiva → eleve (1 + taxa) à potência. Nunca multiplique uma taxa composta por 12.',
        dica: 'Nominal se divide (24% ÷ 12 = 2%); efetiva se potencializa (1,02¹²). A efetiva anual fica sempre acima da nominal.'
      },
      fontes: [
        { titulo: 'Wikipédia: Juro', url: 'https://pt.wikipedia.org/wiki/Juro' },
        { titulo: 'Banco Central do Brasil', url: 'https://www.bcb.gov.br/' }
      ]
    },
    {
      id: 'mat-009',
      materia: 'matematica',
      assunto: 'Funções',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem'],
      textoBase: 'Em uma cidade, o preço de uma corrida de táxi é composto por uma parcela fixa, a bandeirada, de R$ 5,50, mais R$ 2,50 por quilômetro rodado. Uma passageira pagou R$ 38,00 por uma corrida, sem gorjeta nem taxas extras.',
      enunciado: 'A distância percorrida nessa corrida foi de',
      alternativas: ['6,9 km.', '13 km.', '15,2 km.', '17,4 km.', '32,5 km.'],
      resposta: 1,
      explicacao: {
        resumo: 'P(x) = 5,50 + 2,50x. Fazendo 5,50 + 2,50x = 38: 2,50x = 32,50, então x = 13 km.',
        detalhada: 'Situações com “valor fixo + valor por unidade” são modeladas por uma **função afim**: f(x) = a·x + b, em que b é o valor fixo (coeficiente linear) e a é a taxa de variação (coeficiente angular).\n\n**Modelo:** P(x) = 2,50x + 5,50, com x em km e P em reais.\n\n**Resolução:** 2,50x + 5,50 = 38 → 2,50x = 38 − 5,50 = 32,50 → x = 32,50 ÷ 2,50 = **13 km**.\n\n**Conferência:** 13 × 2,50 = 32,50; 32,50 + 5,50 = 38,00. Confere.\n\n**Atalho de prova:** primeiro tire o valor fixo, depois divida pelo valor por unidade. Fazer na ordem inversa é o erro mais comum.',
        alternativas: [
          'Dividiu 38 pela bandeirada (38 ÷ 5,50 ≈ 6,9). A bandeirada é fixa, não é preço por quilômetro.',
          'Correta. (38 − 5,50) ÷ 2,50 = 13.',
          'Dividiu 38 por 2,50 sem descontar a bandeirada.',
          'Somou a bandeirada em vez de subtrair: (38 + 5,50) ÷ 2,50 = 17,4.',
          'Parou em 38 − 5,50 = 32,50, que é o valor em reais pago pelos quilômetros, e não a distância.'
        ],
        dica: 'Em f(x) = ax + b, o b é o que você paga mesmo com x = 0. Tire ele antes de dividir.'
      },
      fontes: [
        { titulo: 'Wikipédia: Função afim', url: 'https://pt.wikipedia.org/wiki/Fun%C3%A7%C3%A3o_afim' },
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org/' }
      ]
    },
    {
      id: 'mat-010',
      materia: 'matematica',
      assunto: 'Funções',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 3,
      objetivos: ['enem'],
      textoBase: 'Uma confeiteira estimou que, ao produzir x bolos por dia, seu lucro diário, em reais, é dado por L(x) = −2x² + 120x − 1 000, em que o termo −1 000 representa os custos fixos diários.',
      enunciado: 'O maior lucro diário que a confeiteira pode obter, segundo esse modelo, é de',
      alternativas: ['R$ 800,00.', 'R$ 1.000,00.', 'R$ 1.600,00.', 'R$ 1.800,00.', 'R$ 6.400,00.'],
      resposta: 0,
      explicacao: {
        resumo: 'O lucro é máximo no vértice: x = −b/(2a) = −120/(−4) = 30 bolos. L(30) = −1 800 + 3 600 − 1 000 = R$ 800,00.',
        detalhada: 'L(x) é uma **função quadrática** com a = −2 < 0, então o gráfico é uma parábola com concavidade para baixo e o ponto mais alto é o **vértice**.\n\n**Passo 1 (x do vértice):** xv = −b/(2a) = −120/(2 × (−2)) = −120/(−4) = 30 bolos.\n\n**Passo 2 (lucro máximo):** L(30) = −2 × 900 + 120 × 30 − 1 000 = −1 800 + 3 600 − 1 000 = **800**.\n\n**Conferência pela fórmula do y do vértice:** Δ = b² − 4ac = 14 400 − 4 × (−2) × (−1 000) = 14 400 − 8 000 = 6 400. yv = −Δ/(4a) = −6 400/(−8) = 800.\n\n**Atalho de prova:** depois de achar xv, substituir na função costuma ser mais rápido e menos sujeito a erro de sinal do que usar −Δ/(4a). E repare que a pergunta é o lucro (y), não a quantidade (x).',
        alternativas: [
          'Correta. L(30) = 800.',
          'R$ 1.000,00 é o custo fixo, o valor de |c|, e não o lucro máximo.',
          'Fez Δ/4 = 6 400/4 = 1 600, esquecendo o “a” no denominador da fórmula yv = −Δ/(4a).',
          'Calculou −2 × 900 + 3 600 = 1 800 e esqueceu de subtrair os custos fixos de R$ 1.000,00.',
          'Parou no discriminante Δ = 6 400, que não é o lucro.'
        ],
        dica: 'Máximo ou mínimo de função quadrática = vértice. Encontre xv = −b/(2a) e substitua na função.'
      },
      fontes: [
        { titulo: 'Wikipédia: Função quadrática', url: 'https://pt.wikipedia.org/wiki/Fun%C3%A7%C3%A3o_quadr%C3%A1tica' },
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org/' }
      ]
    },
    {
      id: 'mat-011',
      materia: 'matematica',
      assunto: 'Geometria plana',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem'],
      textoBase: 'Uma família vai trocar o piso de uma sala retangular de 6 m por 4,5 m. O piso escolhido é vendido em caixas fechadas, cada uma com 2,5 m². O vendedor recomenda comprar 10% a mais de piso do que a área da sala, para compensar cortes e quebras.',
      enunciado: 'Seguindo a recomendação, o número mínimo de caixas que a família deve comprar é',
      alternativas: ['8.', '9.', '10.', '11.', '12.'],
      resposta: 4,
      explicacao: {
        resumo: 'Área = 6 × 4,5 = 27 m². Com 10% a mais: 27 × 1,1 = 29,7 m². 29,7 ÷ 2,5 = 11,88, então são necessárias 12 caixas.',
        detalhada: '**Passo 1 (área do retângulo):** A = base × altura = 6 × 4,5 = 27 m².\n\n**Passo 2 (margem de perda):** 10% a mais é multiplicar por 1,10: 27 × 1,1 = 29,7 m².\n\n**Passo 3 (número de caixas):** 29,7 ÷ 2,5 = 11,88 caixas.\n\n**Passo 4 (arredondamento):** caixas são vendidas inteiras e 11 caixas cobririam só 27,5 m², menos que os 29,7 m² necessários. Por isso arredondamos **para cima**: **12 caixas**.\n\n**Atalho de prova:** em problemas de compra (caixas, latas, ônibus), o arredondamento é sempre para cima, mesmo que a parte decimal seja pequena.',
        alternativas: [
          'Usou o perímetro (2 × 6 + 2 × 4,5 = 21 m) como se fosse área: 21 ÷ 2,5 = 8,4 → 8. Piso cobre área, não contorno.',
          'Descontou 10% em vez de acrescentar (27 × 0,9 = 24,3 m²) e ainda arredondou para baixo (9,72 → 9).',
          'Ignorou a margem (27 ÷ 2,5 = 10,8) e arredondou para baixo, ficando com piso insuficiente.',
          'Ignorou a margem e arredondou 10,8 para cima, ou calculou 11,88 com a margem e arredondou para baixo. Nos dois casos falta piso.',
          'Correta. 27 × 1,1 ÷ 2,5 = 11,88 → 12 caixas.'
        ],
        dica: 'Quantidade de embalagens: sempre arredonde para cima. Quantidade que “cabe” (quantos objetos cabem num espaço): arredonde para baixo.'
      },
      fontes: [
        { titulo: 'Wikipédia: Área', url: 'https://pt.wikipedia.org/wiki/%C3%81rea' },
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org/' }
      ]
    },
    {
      id: 'mat-012',
      materia: 'matematica',
      assunto: 'Geometria plana',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'estatais'],
      enunciado: 'Um triângulo retângulo cujos catetos medem 9 cm e 12 cm tem hipotenusa medindo 15 cm e área igual a 108 cm².',
      resposta: false,
      explicacao: {
        resumo: 'Errado. A hipotenusa de fato mede 15 cm, mas a área é 9 × 12 ÷ 2 = 54 cm², não 108 cm².',
        detalhada: 'O item tem duas afirmações, e basta uma estar errada para o item todo estar errado.\n\n**Hipotenusa (Teorema de Pitágoras):** a² = b² + c² = 9² + 12² = 81 + 144 = 225 → a = √225 = 15 cm. Esta parte está correta. Repare que 9, 12, 15 é o triângulo 3, 4, 5 multiplicado por 3.\n\n**Área:** num triângulo retângulo, um cateto é a base e o outro é a altura. A = (base × altura) ÷ 2 = (9 × 12) ÷ 2 = 108 ÷ 2 = **54 cm²**.\n\nO valor 108 é o produto dos catetos sem a divisão por 2, que seria a área do retângulo de lados 9 e 12. Por isso o item está **errado**.\n\n**Atalho:** reconheça os ternos pitagóricos mais comuns (3-4-5, 5-12-13, 8-15-17 e seus múltiplos) para ganhar tempo.',
        dica: 'O CEBRASPE adora itens com duas afirmações: a primeira certa e a segunda errada. Confira cada parte separadamente.'
      },
      fontes: [
        { titulo: 'Wikipédia: Teorema de Pitágoras', url: 'https://pt.wikipedia.org/wiki/Teorema_de_Pit%C3%A1goras' },
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org/' }
      ]
    },
    {
      id: 'mat-013',
      materia: 'matematica',
      assunto: 'Estatística básica',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 1,
      objetivos: ['concursos-gerais', 'estatais'],
      enunciado: 'O número de processos analisados por um servidor em seis dias de trabalho foi: 2, 3, 3, 5, 7 e 10. Nesse conjunto de dados, a mediana é maior que a média aritmética.',
      resposta: false,
      explicacao: {
        resumo: 'Errado. A média é 30 ÷ 6 = 5 e a mediana é (3 + 5) ÷ 2 = 4. A mediana é menor que a média.',
        detalhada: '**Média aritmética:** soma dos valores dividida pela quantidade. 2 + 3 + 3 + 5 + 7 + 10 = 30; 30 ÷ 6 = **5**.\n\n**Mediana:** valor central dos dados **em ordem crescente**. Com 6 valores (quantidade par), a mediana é a média dos dois centrais, o 3º e o 4º: (3 + 5) ÷ 2 = **4**.\n\nComo 4 < 5, a mediana é menor que a média e o item está **errado**.\n\n**Interpretação:** o valor 10 é bem maior que os demais e “puxa” a média para cima, mas quase não afeta a mediana. Em distribuições com cauda à direita (valores extremos altos), em geral a média fica acima da mediana.',
        dica: 'Valores extremos afetam muito a média e pouco a mediana. Se houver um valor muito alto, desconfie de que média > mediana.'
      },
      fontes: [
        { titulo: 'Wikipédia: Mediana (estatística)', url: 'https://pt.wikipedia.org/wiki/Mediana_(estat%C3%ADstica)' },
        { titulo: 'Wikipédia: Média aritmética', url: 'https://pt.wikipedia.org/wiki/M%C3%A9dia_aritm%C3%A9tica' }
      ]
    },
    {
      id: 'mat-014',
      materia: 'matematica',
      assunto: 'Probabilidade',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 3,
      objetivos: ['enem'],
      textoBase: 'Em uma gincana escolar, uma urna contém 5 bolas vermelhas e 3 bolas azuis, idênticas exceto pela cor. Um aluno retira, ao acaso, duas bolas, uma após a outra, sem devolver a primeira à urna. Ele ganha um prêmio se as duas bolas retiradas forem da mesma cor.',
      enunciado: 'A probabilidade de esse aluno ganhar o prêmio é',
      alternativas: ['3/28', '5/14', '15/28', '17/32', '13/28'],
      resposta: 4,
      explicacao: {
        resumo: 'P(duas vermelhas) = 5/8 × 4/7 = 20/56; P(duas azuis) = 3/8 × 2/7 = 6/56. Somando: 26/56 = 13/28.',
        detalhada: '“Mesma cor” significa **duas vermelhas OU duas azuis**. São casos excludentes, então as probabilidades se somam. Dentro de cada caso, as retiradas são sucessivas (1ª **E** 2ª), então as probabilidades se multiplicam.\n\n**Duas vermelhas:** na 1ª retirada, 5 vermelhas em 8 bolas (5/8). Sem reposição, sobram 4 vermelhas em 7 bolas (4/7). P = 5/8 × 4/7 = 20/56.\n\n**Duas azuis:** 3/8 × 2/7 = 6/56.\n\n**Total:** 20/56 + 6/56 = 26/56 = **13/28** (cerca de 46%).\n\n**Conferência pela contagem:** há C(8,2) = 28 pares possíveis; pares vermelhos C(5,2) = 10; pares azuis C(3,2) = 3. P = 13/28. Mesmo resultado.',
        alternativas: [
          '3/28 é só a chance de duas azuis (6/56). Faltou somar o caso das duas vermelhas.',
          '5/14 é só a chance de duas vermelhas (20/56). Faltou somar o caso das duas azuis.',
          '15/28 é a probabilidade do evento contrário: cores diferentes (1 − 13/28).',
          'Calculou com reposição: (5/8)² + (3/8)² = 25/64 + 9/64 = 34/64 = 17/32. Sem reposição, o denominador cai para 7 na 2ª retirada.',
          'Correta. 20/56 + 6/56 = 26/56 = 13/28.'
        ],
        dica: 'Palavra “E” → multiplica; palavra “OU” (casos que não acontecem juntos) → soma. Sem reposição, o total diminui a cada retirada.'
      },
      fontes: [
        { titulo: 'Wikipédia: Probabilidade', url: 'https://pt.wikipedia.org/wiki/Probabilidade' },
        { titulo: 'Inep: Enem', url: 'https://www.gov.br/inep/pt-br' }
      ]
    },

    /* =========================== RACIOCÍNIO LÓGICO =========================== */
    {
      id: 'rlm-001',
      materia: 'raciocinio-logico',
      assunto: 'Proposições e conectivos',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 1,
      objetivos: ['concursos-gerais', 'tribunais', 'policial'],
      enunciado: 'A frase “Revise todos os autos antes de sexta-feira.” é uma proposição simples, à qual se pode atribuir o valor lógico verdadeiro ou falso.',
      resposta: false,
      explicacao: {
        resumo: 'Errado. A frase é imperativa (uma ordem). Ordens não podem ser julgadas como verdadeiras ou falsas, então não são proposições.',
        detalhada: '**Proposição** é toda sentença declarativa que pode ser classificada como verdadeira (V) ou falsa (F), mas não as duas coisas ao mesmo tempo.\n\nA frase “Revise todos os autos antes de sexta-feira.” é uma **ordem**, com o verbo no imperativo. Não faz sentido perguntar se uma ordem é verdadeira ou falsa: ela pode ser cumprida ou não, mas não tem valor lógico.\n\n**Não são proposições:**\n- frases imperativas (“Feche a porta.”);\n- frases interrogativas (“Que horas são?”);\n- frases exclamativas (“Que dia lindo!”);\n- sentenças abertas, com variável (“x + 2 = 7”, “Ele é auditor.”);\n- paradoxos (“Esta frase é falsa.”).\n\nPor isso o item está **errado**.',
        dica: 'Teste rápido: dá para responder “é verdade” ou “é mentira” à frase? Se não der, não é proposição.'
      },
      fontes: [
        { titulo: 'Wikipédia: Lógica proposicional', url: 'https://pt.wikipedia.org/wiki/L%C3%B3gica_proposicional' }
      ]
    },
    {
      id: 'rlm-002',
      materia: 'raciocinio-logico',
      assunto: 'Proposições e conectivos',
      tipo: 'multipla',
      estilo: 'FCC',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'tribunais'],
      enunciado: 'Considere as proposições p: “2 + 3 = 5”; q: “7 é um número par”; r: “O Brasil fica na América do Sul”. Sendo ¬ o símbolo da negação, a proposição composta verdadeira é',
      alternativas: ['q → ¬p', 'p ∧ q', 'p → q', 'q ∨ ¬r', 'p ↔ q'],
      resposta: 0,
      explicacao: {
        resumo: 'p é V, q é F e r é V. Em q → ¬p temos F → F, e um condicional com antecedente falso é sempre verdadeiro.',
        detalhada: '**Passo 1 (valores das simples):** p = V (2 + 3 = 5); q = F (7 é ímpar); r = V. Logo ¬p = F e ¬r = F.\n\n**Passo 2 (regras dos conectivos):**\n- **∧ (e):** só é V se as duas forem V.\n- **∨ (ou):** só é F se as duas forem F.\n- **→ (se... então):** só é F no caso V → F.\n- **↔ (se e somente se):** é V quando as duas têm o mesmo valor.\n\n**Passo 3 (testar cada alternativa):** q → ¬p = F → F = **V**. As demais dão F, como mostram os comentários.\n\n**Atalho de prova:** num condicional, se o antecedente é falso, o condicional é verdadeiro, não importa o consequente. Como q é falsa, qualquer “q → ...” é verdadeira.',
        alternativas: [
          'Correta. F → F é verdadeiro: o condicional só é falso no caso V → F.',
          'V ∧ F = F. A conjunção exige as duas verdadeiras.',
          'V → F = F. É exatamente o único caso em que o condicional é falso.',
          'F ∨ F = F. A disjunção só é falsa quando ambas são falsas, que é o caso.',
          'V ↔ F = F. O bicondicional exige valores iguais.'
        ],
        dica: 'Condicional: só é falso quando “a verdade leva à falsidade” (V → F). Todos os outros casos são verdadeiros.'
      },
      fontes: [
        { titulo: 'Wikipédia: Tabela-verdade', url: 'https://pt.wikipedia.org/wiki/Tabela-verdade' }
      ]
    },
    {
      id: 'rlm-003',
      materia: 'raciocinio-logico',
      assunto: 'Proposições e conectivos',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'tribunais', 'policial'],
      enunciado: 'Sendo P e Q proposições simples, a proposição composta (P ∧ Q) → (P ∨ Q) é uma tautologia.',
      resposta: true,
      explicacao: {
        resumo: 'Certo. O condicional só seria falso se P ∧ Q fosse V e P ∨ Q fosse F, o que é impossível: se as duas são V, a disjunção também é V.',
        detalhada: '**Tautologia** é a proposição composta que é verdadeira em todas as linhas da tabela-verdade, quaisquer que sejam os valores das simples.\n\n**Método rápido (procurar o caso falso):** um condicional A → B só é falso quando A = V e B = F. Aqui, A = P ∧ Q e B = P ∨ Q. Para A ser V, P e Q precisam ser V. Mas então B = V ∨ V = V. Não existe linha com A = V e B = F, logo o condicional nunca é falso.\n\n**Conferência pela tabela (4 linhas):**\n- P = V, Q = V: V → V = V\n- P = V, Q = F: F → V = V\n- P = F, Q = V: F → V = V\n- P = F, Q = F: F → F = V\n\nTodas as linhas dão V, então é tautologia. Item **certo**.',
        dica: 'Para provar que um condicional é tautologia, tente torná-lo falso (antecedente V e consequente F). Se não conseguir, é tautologia.'
      },
      fontes: [
        { titulo: 'Wikipédia: Tabela-verdade', url: 'https://pt.wikipedia.org/wiki/Tabela-verdade' },
        { titulo: 'Wikipédia: Tautologia (lógica)', url: 'https://pt.wikipedia.org/wiki/Tautologia_(l%C3%B3gica)' }
      ]
    },
    {
      id: 'rlm-004',
      materia: 'raciocinio-logico',
      assunto: 'Equivalências e negações',
      tipo: 'multipla',
      estilo: 'FGV',
      dificuldade: 1,
      objetivos: ['concursos-gerais', 'tribunais'],
      enunciado: 'A negação lógica da sentença “Se Ana estuda todos os dias, então ela passa no concurso” é',
      alternativas: [
        'Se Ana não estuda todos os dias, então ela não passa no concurso.',
        'Ana não estuda todos os dias e não passa no concurso.',
        'Ana estuda todos os dias e não passa no concurso.',
        'Ana não estuda todos os dias ou passa no concurso.',
        'Se Ana passa no concurso, então ela estuda todos os dias.'
      ],
      resposta: 2,
      explicacao: {
        resumo: 'A negação de “Se p, então q” é “p e não q”: Ana estuda todos os dias e não passa no concurso.',
        detalhada: 'O condicional p → q só é falso quando p é V e q é F. Negar o condicional é, portanto, afirmar exatamente essa situação: **p ∧ ¬q**.\n\n**Aplicando:** p = “Ana estuda todos os dias”; q = “ela passa no concurso”. Negação: “Ana estuda todos os dias **e** não passa no concurso”.\n\n**Regra de bolso (MANÉ):** **MA**ntém a primeira, **NE**ga a segunda e troca o “se... então” por “e”.\n\nRepare que a negação de um condicional **não é** outro condicional. Toda alternativa que começa com “Se...” pode ser descartada de cara.',
        alternativas: [
          'Negou as duas partes e manteve o condicional (¬p → ¬q). Isso é a inversa, que não é nem equivalente nem negação.',
          'Negou as duas partes e usou “e”. O correto é manter a primeira parte.',
          'Correta. p ∧ ¬q.',
          '¬p ∨ q é equivalente ao condicional original, e não a sua negação.',
          'É a recíproca (q → p), que não é equivalente nem negação do condicional.'
        ],
        dica: 'Negação do “se... então”: MANÉ (MAntém a 1ª, Nega a 2ª, troca por “E”).'
      },
      fontes: [
        { titulo: 'Wikipédia: Tabela-verdade', url: 'https://pt.wikipedia.org/wiki/Tabela-verdade' }
      ]
    },
    {
      id: 'rlm-005',
      materia: 'raciocinio-logico',
      assunto: 'Equivalências e negações',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'tribunais', 'policial'],
      enunciado: 'A proposição “Se o servidor é aprovado no estágio probatório, então ele é efetivado no cargo” é logicamente equivalente à proposição “Se o servidor é efetivado no cargo, então ele foi aprovado no estágio probatório”.',
      resposta: false,
      explicacao: {
        resumo: 'Errado. A segunda proposição é a recíproca (q → p) da primeira (p → q), e a recíproca não é equivalente ao condicional.',
        detalhada: 'Sejam p = “o servidor é aprovado no estágio” e q = “ele é efetivado”. A primeira frase é **p → q**; a segunda é **q → p**, a chamada **recíproca**.\n\n**Por que não são equivalentes?** Basta achar uma linha da tabela em que tenham valores diferentes. Com p = F e q = V: p → q = F → V = V, mas q → p = V → F = F. Valores diferentes, logo não são equivalentes.\n\n**As equivalências corretas do condicional são:**\n- **Contrapositiva:** ¬q → ¬p (“Se não é efetivado, então não foi aprovado no estágio”).\n- **Disjunção:** ¬p ∨ q (“Não é aprovado no estágio ou é efetivado”).\n\nO item troca a contrapositiva pela recíproca, que é a pegadinha mais comum do tema. Item **errado**.',
        dica: 'Contrapositiva: inverte E nega as duas (¬q → ¬p) = equivalente. Só inverter (q → p) ou só negar (¬p → ¬q) = não equivalente.'
      },
      fontes: [
        { titulo: 'Wikipédia: Contraposição', url: 'https://pt.wikipedia.org/wiki/Contraposi%C3%A7%C3%A3o' },
        { titulo: 'Wikipédia: Tabela-verdade', url: 'https://pt.wikipedia.org/wiki/Tabela-verdade' }
      ]
    },
    {
      id: 'rlm-006',
      materia: 'raciocinio-logico',
      assunto: 'Equivalências e negações',
      tipo: 'multipla',
      estilo: 'Vunesp',
      dificuldade: 3,
      objetivos: ['concursos-gerais', 'policial'],
      enunciado: 'Assinale a alternativa que apresenta a negação lógica da afirmação “Todo candidato estudou lógica ou fez simulados”.',
      alternativas: [
        'Nenhum candidato estudou lógica nem fez simulados.',
        'Algum candidato não estudou lógica e não fez simulados.',
        'Algum candidato não estudou lógica ou não fez simulados.',
        'Todo candidato não estudou lógica e não fez simulados.',
        'Algum candidato estudou lógica e fez simulados.'
      ],
      resposta: 1,
      explicacao: {
        resumo: 'Nega-se o quantificador (“todo” vira “algum... não”) e a disjunção (De Morgan: “A ou B” vira “não A e não B”).',
        detalhada: 'A frase tem duas camadas que precisam ser negadas: o **quantificador universal** (“todo”) e a **disjunção** (“ou”).\n\n**Camada 1 (quantificador):** a negação de “Todo X tem a propriedade P” é “**Algum** X **não** tem a propriedade P”. Para desmentir “todo candidato...”, basta exibir um candidato que não cumpre a condição.\n\n**Camada 2 (De Morgan):** a propriedade é “estudou lógica **ou** fez simulados”. Sua negação é “**não** estudou lógica **e não** fez simulados”, porque ¬(A ∨ B) ≡ ¬A ∧ ¬B.\n\n**Juntando:** “Algum candidato não estudou lógica **e** não fez simulados”.\n\n**Atalho:** em negações, “todo” vira “algum... não”, e o conectivo troca (ou ↔ e). Alternativas com “nenhum” ou “todo... não” são exageros: afirmam muito mais do que o necessário para desmentir a frase original.',
        alternativas: [
          '“Nenhum” é forte demais: para negar “todo”, basta um contraexemplo, e não que todos falhem.',
          'Correta. Algum... não + De Morgan (ou → e).',
          'Negou o quantificador, mas manteve o “ou”. Por De Morgan, a negação de “ou” é “e”.',
          '“Todo... não” equivale a “nenhum”, que, de novo, é mais do que a negação exige.',
          'Não negou nada: apenas trocou “todo” por “algum” e “ou” por “e”, mantendo as afirmações positivas.'
        ],
        dica: 'Negação de “todo” = “pelo menos um não”. Negação de “ou” = “e” com as duas partes negadas (De Morgan).'
      },
      fontes: [
        { titulo: 'Wikipédia: Leis de De Morgan', url: 'https://pt.wikipedia.org/wiki/Leis_de_De_Morgan' }
      ]
    },
    {
      id: 'rlm-007',
      materia: 'raciocinio-logico',
      assunto: 'Argumentação',
      tipo: 'multipla',
      estilo: 'FCC',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'tribunais'],
      enunciado: 'Considere verdadeiras as seguintes afirmações: I. Se Carlos viaja, então Beatriz fica no escritório. II. Se Beatriz fica no escritório, então Diego não tira férias. III. Diego tirou férias. A partir dessas afirmações, conclui-se corretamente que',
      alternativas: [
        'Carlos viajou e Beatriz não ficou no escritório.',
        'Carlos não viajou e Beatriz ficou no escritório.',
        'Carlos viajou.',
        'Beatriz ficou no escritório.',
        'Carlos não viajou e Beatriz não ficou no escritório.'
      ],
      resposta: 4,
      explicacao: {
        resumo: 'Partindo do fato “Diego tirou férias”, a afirmação II obriga “Beatriz não ficou”; com isso, a afirmação I obriga “Carlos não viajou”.',
        detalhada: 'A técnica é começar pela **proposição simples** (o fato isolado), que é o ponto de apoio, e ir “subindo” pelos condicionais.\n\n**Passo 1:** III diz que Diego **tirou** férias. Então “Diego não tira férias” é **F**.\n\n**Passo 2 (afirmação II):** “Beatriz fica → Diego não tira férias”. O consequente é F; para o condicional ser V, o antecedente também precisa ser F (senão teríamos V → F). Logo, **Beatriz não ficou** no escritório.\n\n**Passo 3 (afirmação I):** “Carlos viaja → Beatriz fica”. O consequente é F, então o antecedente é F: **Carlos não viajou**.\n\nEsse raciocínio é o **modus tollens**: de “p → q” e “¬q” conclui-se “¬p”. Aplicado duas vezes em cadeia, chega-se à conclusão da alternativa E.',
        alternativas: [
          'Carlos viajar tornaria Beatriz obrigada a ficar (afirmação I), o que contradiz a conclusão de que ela não ficou.',
          'Beatriz ficar obrigaria Diego a não tirar férias (afirmação II), contradizendo a afirmação III.',
          'Se Carlos tivesse viajado, a cadeia I e II levaria a “Diego não tira férias”, contrariando III.',
          'Contradiz diretamente a afirmação II combinada com a III.',
          'Correta. Modus tollens aplicado em II e depois em I.'
        ],
        dica: 'Em questões com vários condicionais, comece pela frase que não tem “se”. Ela é o fato que destrava todo o resto.'
      },
      fontes: [
        { titulo: 'Wikipédia: Modus tollens', url: 'https://pt.wikipedia.org/wiki/Modus_tollens' }
      ]
    },
    {
      id: 'rlm-008',
      materia: 'raciocinio-logico',
      assunto: 'Argumentação',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'tribunais', 'policial'],
      textoBase: 'Considere o seguinte argumento. Premissa 1: Se o relatório foi entregue no prazo, então o gestor ficou satisfeito. Premissa 2: O gestor ficou satisfeito. Conclusão: Logo, o relatório foi entregue no prazo.',
      enunciado: 'O argumento apresentado é válido.',
      resposta: false,
      explicacao: {
        resumo: 'Errado. O argumento comete a falácia da afirmação do consequente: de “p → q” e “q” não se pode concluir “p”.',
        detalhada: 'Um argumento é **válido** quando é impossível ter todas as premissas verdadeiras e a conclusão falsa.\n\nSejam p = “o relatório foi entregue no prazo” e q = “o gestor ficou satisfeito”. A estrutura é: p → q; q; logo, p.\n\n**Teste do contraexemplo:** suponha p = F e q = V. Premissa 1: F → V = **V**. Premissa 2: q = **V**. Conclusão: p = **F**. Achamos um cenário com premissas verdadeiras e conclusão falsa, então o argumento é **inválido**. Na prática: o gestor pode ter ficado satisfeito por outro motivo, mesmo com o relatório atrasado.\n\n**Formas válidas para comparar:**\n- **Modus ponens:** p → q; p; logo q.\n- **Modus tollens:** p → q; ¬q; logo ¬p.\n\nAs formas inválidas são “afirmar o consequente” (q, logo p) e “negar o antecedente” (¬p, logo ¬q).',
        dica: 'Do condicional só se tiram duas conclusões seguras: afirmando a 1ª parte, conclui-se a 2ª; negando a 2ª, conclui-se a negação da 1ª.'
      },
      fontes: [
        { titulo: 'Wikipédia: Modus ponens', url: 'https://pt.wikipedia.org/wiki/Modus_ponens' },
        { titulo: 'Wikipédia: Modus tollens', url: 'https://pt.wikipedia.org/wiki/Modus_tollens' }
      ]
    },
    {
      id: 'rlm-009',
      materia: 'raciocinio-logico',
      assunto: 'Análise combinatória',
      tipo: 'multipla',
      estilo: 'Cesgranrio',
      dificuldade: 2,
      objetivos: ['bancarios', 'estatais', 'concursos-gerais'],
      enunciado: 'Quantos anagramas da palavra BANCO começam por vogal?',
      alternativas: ['24', '48', '72', '96', '120'],
      resposta: 1,
      explicacao: {
        resumo: 'Há 2 vogais (A e O) para a 1ª posição e 4! = 24 maneiras de arrumar as outras 4 letras: 2 × 24 = 48.',
        detalhada: 'Anagrama é qualquer reordenação das letras. BANCO tem 5 letras **distintas**, então o total de anagramas é 5! = 120.\n\n**Com restrição (começar por vogal):** resolva primeiro a posição restrita.\n- 1ª posição: 2 opções (A ou O).\n- As 4 letras restantes ocupam as 4 posições seguintes em qualquer ordem: 4! = 4 × 3 × 2 × 1 = 24.\n\n**Princípio multiplicativo:** 2 × 24 = **48**.\n\n**Conferência:** começando por consoante (B, N ou C) são 3 × 24 = 72. Somando: 48 + 72 = 120 = 5!. Confere.\n\n**Atalho:** como cada uma das 5 letras aparece na primeira posição no mesmo número de anagramas (120 ÷ 5 = 24), basta multiplicar 24 pelo número de vogais.',
        alternativas: [
          'Calculou 4! = 24 e esqueceu que há duas vogais possíveis para a primeira posição.',
          'Correta. 2 × 4! = 48.',
          'São os anagramas que começam por consoante (3 × 24).',
          'Considerou 4 opções para a primeira letra: 4 × 4! = 96.',
          'É o total de anagramas (5!), sem a restrição.'
        ],
        dica: 'Em contagem com restrição, preencha primeiro a posição restrita e só depois as livres.'
      },
      fontes: [
        { titulo: 'Wikipédia: Análise combinatória', url: 'https://pt.wikipedia.org/wiki/An%C3%A1lise_combinat%C3%B3ria' },
        { titulo: 'Wikipédia: Permutação', url: 'https://pt.wikipedia.org/wiki/Permuta%C3%A7%C3%A3o' }
      ]
    },
    {
      id: 'rlm-010',
      materia: 'raciocinio-logico',
      assunto: 'Análise combinatória',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 3,
      objetivos: ['concursos-gerais', 'tribunais', 'policial'],
      enunciado: 'Em um setor com 8 servidores, o número de maneiras de escolher um presidente, um vice-presidente e um secretário (cargos distintos, uma pessoa por cargo) é igual a 6 vezes o número de maneiras de formar uma comissão de 3 membros sem cargos definidos.',
      resposta: true,
      explicacao: {
        resumo: 'Certo. Com cargos (ordem importa): A(8,3) = 8 × 7 × 6 = 336. Comissão (ordem não importa): C(8,3) = 336 ÷ 3! = 56. E 336 = 6 × 56.',
        detalhada: 'A pergunta-chave em combinatória é: **a ordem (ou a função) dos escolhidos importa?**\n\n**Com cargos distintos (arranjo):** trocar quem é presidente e quem é vice gera uma escolha diferente. Pelo princípio multiplicativo: 8 opções para presidente × 7 para vice × 6 para secretário = **336**.\n\n**Comissão sem cargos (combinação):** o grupo {Ana, Bia, Caio} é o mesmo, em qualquer ordem. Cada trio foi contado 3! = 6 vezes no arranjo, então: C(8,3) = 336 ÷ 6 = **56**. Pela fórmula: C(8,3) = 8! ÷ (3! × 5!) = 56.\n\n**Relação:** A(n,p) = C(n,p) × p!. Com p = 3, o arranjo é sempre 3! = 6 vezes a combinação. Por isso o item está **certo**.',
        dica: 'Cargos, posições, senhas, pódio → arranjo. Grupos, comissões, equipes sem função → combinação (divida pelo fatorial do tamanho do grupo).'
      },
      fontes: [
        { titulo: 'Wikipédia: Combinação (matemática)', url: 'https://pt.wikipedia.org/wiki/Combina%C3%A7%C3%A3o_(matem%C3%A1tica)' },
        { titulo: 'Wikipédia: Arranjo (matemática)', url: 'https://pt.wikipedia.org/wiki/Arranjo_(matem%C3%A1tica)' }
      ]
    },
    {
      id: 'rlm-011',
      materia: 'raciocinio-logico',
      assunto: 'Sequências lógicas',
      tipo: 'multipla',
      estilo: 'FGV',
      dificuldade: 1,
      objetivos: ['concursos-gerais', 'estatais'],
      enunciado: 'Observe a sequência numérica: 2, 5, 11, 23, 47, ... Mantido o mesmo padrão, o próximo termo é',
      alternativas: ['71', '83', '94', '95', '96'],
      resposta: 3,
      explicacao: {
        resumo: 'Cada termo é o dobro do anterior mais 1: 47 × 2 + 1 = 95.',
        detalhada: 'Quando os termos crescem rápido, desconfie de um padrão **multiplicativo**.\n\n**Teste:** 2 × 2 + 1 = 5; 5 × 2 + 1 = 11; 11 × 2 + 1 = 23; 23 × 2 + 1 = 47. O padrão é “dobrar e somar 1”. Próximo: 47 × 2 + 1 = **95**.\n\n**Outro caminho (diferenças):** 5 − 2 = 3; 11 − 5 = 6; 23 − 11 = 12; 47 − 23 = 24. As diferenças dobram a cada passo; a próxima é 48, e 47 + 48 = 95. Mesmo resultado.\n\n**Atalho:** quando as diferenças formam uma progressão geométrica, a sequência original segue uma regra do tipo “multiplicar e somar”.',
        alternativas: [
          'Repetiu a última diferença (47 + 24). As diferenças dobram, então a próxima é 48.',
          'Supôs que as diferenças aumentam somando (24 + 12 = 36; 47 + 36 = 83). Elas dobram.',
          'Só dobrou o termo (47 × 2), esquecendo o “+1”.',
          'Correta. 47 × 2 + 1 = 95.',
          'Dobrou e somou 2. O padrão soma 1 em todos os passos.'
        ],
        dica: 'Sequência que cresce rápido: teste “× 2”, “× 3” e depois ajuste com “+ 1” ou “− 1”.'
      },
      fontes: [
        { titulo: 'Wikipédia: Sequência (matemática)', url: 'https://pt.wikipedia.org/wiki/Sequ%C3%AAncia_(matem%C3%A1tica)' }
      ]
    },
    {
      id: 'rlm-012',
      materia: 'raciocinio-logico',
      assunto: 'Sequências lógicas',
      tipo: 'multipla',
      estilo: 'Vunesp',
      dificuldade: 3,
      objetivos: ['concursos-gerais', 'policial'],
      enunciado: 'Na sequência 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, ..., cada número natural n aparece exatamente n vezes seguidas. O termo que ocupa a 100ª posição dessa sequência é',
      alternativas: ['10', '12', '13', '14', '15'],
      resposta: 3,
      explicacao: {
        resumo: 'O bloco do número n termina na posição 1 + 2 + ... + n = n(n + 1)/2. O bloco do 13 termina na posição 91 e o do 14 na 105; a posição 100 está no bloco do 14.',
        detalhada: '**Ideia:** a sequência é formada por blocos. O bloco do 1 tem 1 termo, o do 2 tem 2 termos, e assim por diante. A última posição do bloco do número n é a soma 1 + 2 + ... + n = **n(n + 1)/2** (os números triangulares).\n\n**Cálculo:**\n- n = 12: 12 × 13 / 2 = 78 → o bloco do 12 termina na posição 78.\n- n = 13: 13 × 14 / 2 = 91 → o bloco do 13 termina na posição 91.\n- n = 14: 14 × 15 / 2 = 105 → o bloco do 14 ocupa das posições 92 a 105.\n\nComo 92 ≤ 100 ≤ 105, o 100º termo é **14**.\n\n**Atalho:** procure o primeiro n com n(n + 1)/2 ≥ posição pedida. Uma estimativa rápida é n² ≈ 2 × 100 = 200, ou seja, n ≈ 14.',
        alternativas: [
          'Supôs que a posição 100 corresponde a √100 = 10. A soma é n(n + 1)/2, e não n².',
          'O bloco do 12 termina na posição 78; ainda faltam 22 posições.',
          'O bloco do 13 termina na posição 91, antes de 100.',
          'Correta. O bloco do 14 vai da posição 92 à 105.',
          'O bloco do 15 só começa na posição 106.'
        ],
        dica: 'Soma de 1 até n = n(n + 1)/2. Ela aparece em sequências de blocos, apertos de mão e contagem de pares.'
      },
      fontes: [
        { titulo: 'Wikipédia: Número triangular', url: 'https://pt.wikipedia.org/wiki/N%C3%BAmero_triangular' }
      ]
    },

    /* ================================ FÍSICA ================================ */
    {
      id: 'fis-001',
      materia: 'fisica',
      assunto: 'Cinemática',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem'],
      textoBase: 'Uma família viajou 240 km de carro até a casa dos avós. Na primeira metade do percurso, em estrada com obras, manteve velocidade média de 60 km/h. Na segunda metade, em rodovia duplicada, manteve 120 km/h.',
      enunciado: 'A velocidade média da viagem completa foi de',
      alternativas: ['60 km/h.', '80 km/h.', '90 km/h.', '120 km/h.', '160 km/h.'],
      resposta: 1,
      explicacao: {
        resumo: 'Vm = distância total ÷ tempo total. Tempos: 120/60 = 2 h e 120/120 = 1 h. Vm = 240 ÷ 3 = 80 km/h.',
        detalhada: 'A velocidade média **não** é a média das velocidades. A definição é: **Vm = Δs ÷ Δt** (distância total dividida pelo tempo total).\n\n**Passo 1 (tempo de cada trecho):** cada metade tem 120 km. Trecho 1: t₁ = 120 ÷ 60 = 2 h. Trecho 2: t₂ = 120 ÷ 120 = 1 h.\n\n**Passo 2 (tempo total):** 2 + 1 = 3 h.\n\n**Passo 3:** Vm = 240 ÷ 3 = **80 km/h**.\n\n**Por que não dá 90?** A família passou o dobro do tempo no trecho lento (2 h contra 1 h). A média fica mais perto da velocidade em que se passou mais tempo. **Atalho de prova:** para duas metades de **percurso** com velocidades v₁ e v₂, Vm = 2·v₁·v₂ ÷ (v₁ + v₂) = 2 × 60 × 120 ÷ 180 = 80.',
        alternativas: [
          'É só a velocidade do primeiro trecho.',
          'Correta. 240 km em 3 h.',
          'Média aritmética (60 + 120) ÷ 2. Só valeria se os dois trechos durassem o mesmo tempo.',
          'É só a velocidade do segundo trecho.',
          'Dividiu 240 pela média dos tempos (1,5 h) em vez de pelo tempo total (3 h).'
        ],
        dica: 'Metades do percurso: média harmônica (2v₁v₂ ÷ (v₁ + v₂)). Metades do tempo: média aritmética.'
      },
      fontes: [
        { titulo: 'Wikipédia: Velocidade', url: 'https://pt.wikipedia.org/wiki/Velocidade' },
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org/' }
      ]
    },
    {
      id: 'fis-002',
      materia: 'fisica',
      assunto: 'Cinemática',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem'],
      textoBase: 'Um motorista trafega a 72 km/h quando vê um semáforo fechar e aciona os freios. A partir desse instante, o carro passa a ter desaceleração constante de 5 m/s² até parar.',
      enunciado: 'Desconsiderando o tempo de reação do motorista, a distância percorrida pelo carro durante a frenagem é de',
      alternativas: ['2 m.', '4 m.', '40 m.', '80 m.', '518,4 m.'],
      resposta: 2,
      explicacao: {
        resumo: '72 km/h = 20 m/s. Pela equação de Torricelli: 0 = 20² − 2 × 5 × d, logo d = 400 ÷ 10 = 40 m.',
        detalhada: '**Passo 1 (unidades):** a aceleração está em m/s², então a velocidade precisa estar em m/s. Para converter km/h em m/s, divida por 3,6: 72 ÷ 3,6 = **20 m/s**.\n\n**Passo 2 (escolha da equação):** não há tempo no enunciado nem na pergunta, então a equação ideal é a de **Torricelli**: v² = v₀² + 2·a·Δs.\n\n**Passo 3 (conta):** velocidade final v = 0; a = −5 m/s² (freando). 0 = 20² + 2 × (−5) × Δs → 0 = 400 − 10·Δs → Δs = **40 m**.\n\n**Conferência pelo tempo:** t = v₀ ÷ a = 20 ÷ 5 = 4 s. Δs = v₀·t − a·t²/2 = 80 − 40 = 40 m. Confere.\n\n**Atalho:** distância de frenagem = v₀² ÷ (2a). Ela cresce com o **quadrado** da velocidade, por isso pequenos excessos de velocidade aumentam muito a distância para parar.',
        alternativas: [
          'Esqueceu de elevar a velocidade ao quadrado: 20 ÷ (2 × 5) = 2.',
          'Calculou o tempo de frenagem (20 ÷ 5 = 4 s) e o tratou como distância.',
          'Correta. 20² ÷ (2 × 5) = 40 m.',
          'Esqueceu o fator 2 da equação de Torricelli: 400 ÷ 5 = 80.',
          'Não converteu 72 km/h para m/s: 72² ÷ 10 = 518,4. Unidades misturadas.'
        ],
        dica: 'km/h → m/s: divida por 3,6. Sem tempo na questão, use Torricelli (v² = v₀² + 2aΔs).'
      },
      fontes: [
        { titulo: 'Wikipédia: Equação de Torricelli', url: 'https://pt.wikipedia.org/wiki/Equa%C3%A7%C3%A3o_de_Torricelli' },
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org/' }
      ]
    },
    {
      id: 'fis-003',
      materia: 'fisica',
      assunto: 'Dinâmica',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 3,
      objetivos: ['enem'],
      textoBase: 'Uma pessoa de 60 kg está sobre uma balança de banheiro dentro de um elevador. A balança mede a força que a pessoa exerce sobre ela e mostra o resultado em “quilogramas”, dividindo essa força por g = 10 m/s². Em certo instante, o elevador sobe com aceleração constante de 2 m/s², dirigida para cima.',
      enunciado: 'Nesse instante, o valor indicado pela balança é',
      alternativas: ['12 kg.', '48 kg.', '60 kg.', '72 kg.', '720 kg.'],
      resposta: 3,
      explicacao: {
        resumo: 'Pela 2ª Lei de Newton, N − P = m·a → N = 60 × (10 + 2) = 720 N. A balança mostra 720 ÷ 10 = 72 kg.',
        detalhada: 'A balança não mede massa: ela mede a força que a pessoa exerce sobre ela, que, pela 3ª Lei de Newton, tem o mesmo módulo da **força normal** N que a balança exerce sobre a pessoa. Depois converte esse valor para “kg” dividindo por g.\n\n**Forças na pessoa:** peso P = m·g = 60 × 10 = 600 N (para baixo) e normal N (para cima).\n\n**2ª Lei de Newton (Fr = m·a), com a aceleração para cima:** N − P = m·a → N = m·(g + a) = 60 × (10 + 2) = **720 N**.\n\n**Leitura da balança:** 720 ÷ 10 = **72 kg**. A pessoa se sente “mais pesada” porque o piso precisa empurrá-la com mais força para acelerá-la para cima.\n\n**Resumo dos casos:** aceleração para cima → N = m(g + a), balança marca mais. Aceleração para baixo → N = m(g − a), balança marca menos. Velocidade constante (subindo ou descendo) → N = m·g, balança marca o valor real.',
        alternativas: [
          'Calculou só m·a = 120 N e converteu para 12 kg. A normal precisa vencer também o peso.',
          'Usou N = m(g − a). Isso vale quando a aceleração aponta para baixo.',
          'Achou que a balança sempre mostra a massa. Só acontece com aceleração nula.',
          'Correta. N = 60 × 12 = 720 N → 72 kg.',
          'Respondeu a força normal em newtons como se fosse a leitura em kg; faltou dividir por g.'
        ],
        dica: 'Elevador: o que importa é o sentido da aceleração, e não o da velocidade. Aceleração para cima = balança marca mais.'
      },
      fontes: [
        { titulo: 'Wikipédia: Leis de Newton', url: 'https://pt.wikipedia.org/wiki/Leis_de_Newton' },
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org/' }
      ]
    },
    {
      id: 'fis-004',
      materia: 'fisica',
      assunto: 'Eletricidade',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 1,
      objetivos: ['enem'],
      textoBase: 'Em uma casa moram 4 pessoas. Cada uma toma um banho diário de 10 minutos em um chuveiro elétrico de potência 5 500 W. A tarifa de energia elétrica, já com impostos, é de R$ 0,80 por kWh.',
      enunciado: 'Em um mês de 30 dias, o gasto da família somente com o chuveiro é de',
      alternativas: ['R$ 88,00.', 'R$ 110,00.', 'R$ 137,50.', 'R$ 352,00.', 'R$ 88.000,00.'],
      resposta: 0,
      explicacao: {
        resumo: 'Energia = potência × tempo = 5,5 kW × (40 min/dia = 2/3 h) × 30 dias = 110 kWh. Custo = 110 × 0,80 = R$ 88,00.',
        detalhada: 'A conta de luz cobra **energia**, medida em quilowatt-hora (kWh). A relação é **E = P × Δt**, com P em kW e Δt em horas.\n\n**Passo 1 (potência em kW):** 5 500 W = 5,5 kW.\n\n**Passo 2 (tempo de uso em horas):** 4 pessoas × 10 min = 40 min por dia. Em 30 dias: 40 × 30 = 1 200 min = 1 200 ÷ 60 = **20 h**.\n\n**Passo 3 (energia):** E = 5,5 kW × 20 h = **110 kWh**.\n\n**Passo 4 (custo):** 110 × 0,80 = **R$ 88,00**.\n\n**Atalho:** junte todo o tempo do mês primeiro (20 h) e só depois multiplique pela potência. Isso evita frações como 10 min = 1/6 h.',
        alternativas: [
          'Correta. 5,5 kW × 20 h × R$ 0,80 = R$ 88,00.',
          '110 é o consumo em kWh. Faltou multiplicar pela tarifa.',
          'Dividiu o consumo pela tarifa (110 ÷ 0,80) em vez de multiplicar.',
          'Multiplicou pelas 4 pessoas duas vezes (já estavam nos 40 min diários).',
          'Usou a potência em watts sem converter para kW: o resultado ficou mil vezes maior.'
        ],
        dica: 'Consumo (kWh) = potência (kW) × horas de uso. Watts ÷ 1 000 = kW; minutos ÷ 60 = horas.'
      },
      fontes: [
        { titulo: 'Wikipédia: Quilowatt-hora', url: 'https://pt.wikipedia.org/wiki/Quilowatt-hora' },
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org/' }
      ]
    },
    {
      id: 'fis-005',
      materia: 'fisica',
      assunto: 'Energia',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem'],
      textoBase: 'Em um teste, um carro a 40 km/h, com os freios acionados ao máximo, para após percorrer 10 m. Considere que a força de frenagem é a mesma em qualquer velocidade e que o asfalto está seco.',
      enunciado: 'Se o mesmo carro estivesse a 80 km/h, nas mesmas condições, a distância percorrida até parar seria de',
      alternativas: ['10 m.', '20 m.', '40 m.', '80 m.', '160 m.'],
      resposta: 2,
      explicacao: {
        resumo: 'O trabalho dos freios (F·d) precisa anular a energia cinética (m·v²/2). Como Ec ∝ v², dobrar a velocidade quadruplica a distância: 4 × 10 = 40 m.',
        detalhada: 'Para parar, a força de atrito dos freios precisa “retirar” toda a **energia cinética** do carro. Pelo **teorema trabalho-energia cinética**: F · d = m · v² / 2.\n\n**Consequência:** com F e m constantes, d = m·v² ÷ (2F), ou seja, **d é proporcional a v²**.\n\n**Aplicando:** a velocidade passa de 40 para 80 km/h, ou seja, é multiplicada por 2. A distância é multiplicada por 2² = 4: d = 4 × 10 = **40 m**.\n\nRepare que nem foi preciso converter unidades: a questão é de **proporção**. Esse é o motivo físico pelo qual excesso de velocidade é tão perigoso: a 80 km/h o carro tem quatro vezes mais energia para dissipar do que a 40 km/h.',
        alternativas: [
          'Achou que a distância não depende da velocidade.',
          'Supôs proporção direta (dobra a velocidade, dobra a distância). A energia cinética depende de v².',
          'Correta. (80/40)² = 4; 4 × 10 = 40 m.',
          'Multiplicou por 2³ = 8, como se a dependência fosse cúbica.',
          'Multiplicou por 16, elevando o fator 4 ao quadrado mais uma vez.'
        ],
        dica: 'Energia cinética e distância de frenagem crescem com o quadrado da velocidade: ×2 na velocidade → ×4; ×3 → ×9.'
      },
      fontes: [
        { titulo: 'Wikipédia: Energia cinética', url: 'https://pt.wikipedia.org/wiki/Energia_cin%C3%A9tica' },
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org/' }
      ]
    },
    {
      id: 'fis-006',
      materia: 'fisica',
      assunto: 'Eletricidade',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 3,
      objetivos: ['enem'],
      textoBase: 'Um chuveiro elétrico traz na embalagem a especificação “110 V – 2 200 W”. Por engano, ele foi instalado em uma rede de 220 V. Considere que a resistência elétrica do chuveiro não varia com a temperatura.',
      enunciado: 'No instante em que é ligado nessa rede, antes de queimar, o chuveiro passa a dissipar uma potência de',
      alternativas: ['550 W.', '1 100 W.', '2 200 W.', '4 400 W.', '8 800 W.'],
      resposta: 4,
      explicacao: {
        resumo: 'R = U²/P = 110² ÷ 2 200 = 5,5 Ω. Em 220 V: P = 220² ÷ 5,5 = 8 800 W, quatro vezes a potência nominal.',
        detalhada: 'O que não muda quando o aparelho troca de tomada é a **resistência** R. Tensão, corrente e potência mudam.\n\n**Passo 1 (resistência a partir dos dados nominais):** P = U²/R → R = U²/P = 110² ÷ 2 200 = 12 100 ÷ 2 200 = **5,5 Ω**.\n\n**Passo 2 (nova potência):** P = U²/R = 220² ÷ 5,5 = 48 400 ÷ 5,5 = **8 800 W**.\n\n**Atalho:** com R constante, P é proporcional a U². A tensão dobrou (×2), então a potência quadruplica (×4): 4 × 2 200 = 8 800 W. A corrente também dobra (I = U/R: de 20 A para 40 A), o que aquece demais a resistência e a fiação. Por isso o chuveiro queima.',
        alternativas: [
          'Aplicou o fator ao contrário e ao quadrado (÷4). Aumentar a tensão aumenta a potência.',
          'Dividiu por 2, como se a potência caísse ao dobrar a tensão.',
          'Supôs que a potência não muda. A potência nominal só vale na tensão nominal.',
          'Usou proporção linear (×2). Com R fixo, P depende de U².',
          'Correta. P = 220² ÷ 5,5 = 8 800 W.'
        ],
        dica: 'Trocou a tensão? A resistência é o que se mantém. Use P = U²/R: dobrar U quadruplica P.'
      },
      fontes: [
        { titulo: 'Wikipédia: Lei de Ohm', url: 'https://pt.wikipedia.org/wiki/Lei_de_Ohm' },
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org/' }
      ]
    },

    /* ================================ QUÍMICA ================================ */
    {
      id: 'qui-001',
      materia: 'quimica',
      assunto: 'Estequiometria',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem'],
      textoBase: 'O etanol (C₂H₆O) usado como combustível em carros flex sofre combustão completa segundo a equação balanceada: C₂H₆O + 3 O₂ → 2 CO₂ + 3 H₂O. Massas molares: C = 12 g/mol; H = 1 g/mol; O = 16 g/mol.',
      enunciado: 'Na combustão completa de 460 g de etanol, a massa de gás carbônico (CO₂) liberada para a atmosfera é de',
      alternativas: ['440 g.', '540 g.', '880 g.', '1 320 g.', '1 760 g.'],
      resposta: 2,
      explicacao: {
        resumo: 'Etanol: 46 g/mol, então 460 g = 10 mol. A proporção é 1 etanol : 2 CO₂, logo 20 mol de CO₂ × 44 g/mol = 880 g.',
        detalhada: 'Toda questão de estequiometria segue o mesmo roteiro: **massa → mol → proporção da equação → mol → massa**.\n\n**Passo 1 (massas molares):** C₂H₆O = 2 × 12 + 6 × 1 + 16 = 46 g/mol. CO₂ = 12 + 2 × 16 = 44 g/mol.\n\n**Passo 2 (massa → mol):** 460 g ÷ 46 g/mol = **10 mol** de etanol.\n\n**Passo 3 (proporção):** a equação diz 1 C₂H₆O → 2 CO₂. Então 10 mol de etanol → **20 mol** de CO₂.\n\n**Passo 4 (mol → massa):** 20 × 44 = **880 g** de CO₂.\n\n**Atalho por regra de três direta:** 46 g de etanol → 2 × 44 = 88 g de CO₂. Como 460 g é 10 vezes 46 g, a resposta é 10 × 88 = 880 g.',
        alternativas: [
          'Usou proporção 1 : 1 entre etanol e CO₂ (10 mol × 44). O coeficiente do CO₂ é 2.',
          'Calculou a massa de água formada (30 mol × 18 g/mol), e não a de CO₂.',
          'Correta. 10 mol × 2 × 44 g/mol = 880 g.',
          'Usou o coeficiente 3 (do O₂ ou da H₂O) no lugar do 2 do CO₂.',
          'Contou os 2 carbonos e ainda multiplicou pelo coeficiente 2, contando o carbono duas vezes (40 mol).'
        ],
        dica: 'Os coeficientes da equação balanceada falam em mol, não em gramas. Converta tudo para mol antes de usar a proporção.'
      },
      fontes: [
        { titulo: 'Wikipédia: Estequiometria', url: 'https://pt.wikipedia.org/wiki/Estequiometria' },
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org/' }
      ]
    },
    {
      id: 'qui-002',
      materia: 'quimica',
      assunto: 'Estequiometria',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 3,
      objetivos: ['enem'],
      textoBase: 'A cal virgem (CaO), usada na construção civil, é obtida pelo aquecimento do calcário, que contém carbonato de cálcio: CaCO₃ → CaO + CO₂. Uma indústria aqueceu 200 kg de um calcário com 80% de pureza em CaCO₃ (as impurezas não reagem). O processo teve rendimento de 90%. Massas molares: CaCO₃ = 100 g/mol; CaO = 56 g/mol.',
      enunciado: 'A massa de cal virgem obtida nesse processo foi de',
      alternativas: ['80,64 kg.', '89,6 kg.', '100,8 kg.', '112 kg.', '144 kg.'],
      resposta: 0,
      explicacao: {
        resumo: 'CaCO₃ puro: 80% de 200 kg = 160 kg. Pela proporção 100 : 56, teoricamente se formam 89,6 kg de CaO; com rendimento de 90%: 0,9 × 89,6 = 80,64 kg.',
        detalhada: 'Pureza e rendimento são dois “descontos” diferentes. A **pureza** age no reagente (só a parte pura reage); o **rendimento** age no produto (nem tudo o que poderia se formar se forma).\n\n**Passo 1 (pureza):** massa de CaCO₃ = 0,80 × 200 kg = **160 kg**.\n\n**Passo 2 (proporção em massa):** 1 mol de CaCO₃ (100 g) forma 1 mol de CaO (56 g). Então 160 kg × 56/100 = **89,6 kg** de CaO (quantidade teórica).\n\n**Passo 3 (rendimento):** 0,90 × 89,6 = **80,64 kg**.\n\n**Atalho:** como tudo é multiplicação, dá para fazer em uma linha: 200 × 0,8 × 0,56 × 0,9 = 80,64 kg.',
        alternativas: [
          'Correta. 200 × 0,8 × 0,56 × 0,9 = 80,64 kg.',
          'Aplicou a pureza, mas esqueceu o rendimento de 90%.',
          'Aplicou o rendimento, mas esqueceu a pureza: 200 × 0,56 × 0,9 = 100,8.',
          'Não aplicou nem pureza nem rendimento: 200 × 0,56 = 112.',
          'Aplicou pureza e rendimento direto na massa de calcário (200 × 0,8 × 0,9) e esqueceu a proporção estequiométrica 100 : 56.'
        ],
        dica: 'Pureza: corte no início (reagente). Rendimento: corte no fim (produto). Os dois são multiplicações e podem ser feitos em qualquer ordem.'
      },
      fontes: [
        { titulo: 'Wikipédia: Estequiometria', url: 'https://pt.wikipedia.org/wiki/Estequiometria' },
        { titulo: 'Wikipédia: Carbonato de cálcio', url: 'https://pt.wikipedia.org/wiki/Carbonato_de_c%C3%A1lcio' }
      ]
    },
    {
      id: 'qui-003',
      materia: 'quimica',
      assunto: 'Soluções',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 1,
      objetivos: ['enem'],
      textoBase: 'O soro fisiológico usado em hospitais é uma solução aquosa de cloreto de sódio (NaCl) a 0,9% em massa por volume, ou seja, há 0,9 g de NaCl em cada 100 mL de solução.',
      enunciado: 'O volume de soro fisiológico que contém 1,8 g de NaCl é',
      alternativas: ['2 mL.', '16,2 mL.', '20 mL.', '200 mL.', '2 000 mL.'],
      resposta: 3,
      explicacao: {
        resumo: '0,9 g está em 100 mL. Como 1,8 g é o dobro de 0,9 g, o volume é o dobro: 200 mL.',
        detalhada: 'A porcentagem **massa por volume (m/v)** diz quantos gramas de soluto há em **100 mL** de solução. 0,9% m/v → 0,9 g em 100 mL.\n\n**Regra de três:**\n- 0,9 g → 100 mL\n- 1,8 g → x\n\nx = 1,8 × 100 ÷ 0,9 = 180 ÷ 0,9 = **200 mL**.\n\n**Atalho:** 1,8 é exatamente o dobro de 0,9, então o volume também dobra: 2 × 100 mL = 200 mL. A concentração de uma solução é a mesma em qualquer porção dela; o que muda é a quantidade de soluto.',
        alternativas: [
          'Fez 1,8 ÷ 0,9 = 2 e esqueceu que a referência é 100 mL.',
          'Multiplicou 1,8 por 9, sem lógica de proporção.',
          'Errou a referência em uma casa decimal: tratou 0,9 g como se estivesse em 10 mL.',
          'Correta. 1,8 × 100 ÷ 0,9 = 200 mL.',
          'Tratou 0,9% como 0,9 g por litro (1 000 mL). O “por cento” se refere a 100 mL.'
        ],
        dica: 'Porcentagem m/v = gramas em 100 mL. Porcentagem m/m = gramas em 100 g.'
      },
      fontes: [
        { titulo: 'Wikipédia: Solução', url: 'https://pt.wikipedia.org/wiki/Solu%C3%A7%C3%A3o' },
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org/' }
      ]
    },
    {
      id: 'qui-004',
      materia: 'quimica',
      assunto: 'Soluções',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem'],
      textoBase: 'Um produto de limpeza concentrado tem 120 g/L de princípio ativo. O rótulo orienta: “Coloque 50 mL do produto em um balde e complete com água até 2 L de solução”.',
      enunciado: 'A concentração do princípio ativo na solução preparada no balde é de',
      alternativas: ['3 g/L.', '6 g/L.', '60 g/L.', '120 g/L.', '4 800 g/L.'],
      resposta: 0,
      explicacao: {
        resumo: 'Massa de soluto: 0,050 L × 120 g/L = 6 g. Essa massa fica em 2 L, então C = 6 ÷ 2 = 3 g/L. Ou C₁V₁ = C₂V₂: 120 × 50 = C₂ × 2 000 → C₂ = 3 g/L.',
        detalhada: 'Numa **diluição**, só se acrescenta solvente. A massa de soluto não muda, apenas se espalha em um volume maior.\n\n**Caminho 1 (pela massa):** 50 mL = 0,050 L. Massa de soluto = C × V = 120 g/L × 0,050 L = **6 g**. Depois da diluição, esses 6 g estão em 2 L: C = 6 ÷ 2 = **3 g/L**.\n\n**Caminho 2 (fórmula da diluição):** C₁ · V₁ = C₂ · V₂ → 120 × 50 mL = C₂ × 2 000 mL → C₂ = 6 000 ÷ 2 000 = **3 g/L**. Nesta fórmula, os dois volumes só precisam estar na mesma unidade.\n\n**Atalho:** o volume aumentou 2 000 ÷ 50 = 40 vezes, então a concentração caiu 40 vezes: 120 ÷ 40 = 3 g/L. Na diluição, volume e concentração são inversamente proporcionais.',
        alternativas: [
          'Correta. 6 g em 2 L = 3 g/L.',
          '6 é a massa de soluto em gramas, não a concentração. Faltou dividir pelo volume final.',
          'Dividiu 120 por 2 (o volume final em litros), como se o volume inicial fosse 1 L.',
          'Achou que diluir não altera a concentração. Acrescentar água diminui a concentração.',
          'Inverteu a fórmula da diluição (C₂ = C₁ · V₂ ÷ V₁). Diluir nunca aumenta a concentração.'
        ],
        dica: 'Diluição: C₁V₁ = C₂V₂. Se o volume aumenta N vezes, a concentração cai N vezes.'
      },
      fontes: [
        { titulo: 'Wikipédia: Solução', url: 'https://pt.wikipedia.org/wiki/Solu%C3%A7%C3%A3o' },
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org/' }
      ]
    },
    {
      id: 'qui-005',
      materia: 'quimica',
      assunto: 'Química orgânica',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem'],
      textoBase: 'O etanol, presente no álcool combustível, e o metoximetano (éter dimetílico), estudado como substituto do diesel, têm a mesma fórmula molecular, C₂H₆O. Suas fórmulas estruturais, porém, são diferentes: CH₃–CH₂–OH e CH₃–O–CH₃, respectivamente. O etanol é líquido à temperatura ambiente, e o metoximetano é gasoso.',
      enunciado: 'A relação entre essas duas substâncias é classificada como',
      alternativas: ['alotropia.', 'isotopia.', 'isomeria de cadeia.', 'isomeria de posição.', 'isomeria de função.'],
      resposta: 4,
      explicacao: {
        resumo: 'Mesma fórmula molecular e funções orgânicas diferentes (álcool e éter) caracterizam isomeria de função.',
        detalhada: '**Isômeros** são compostos diferentes com a **mesma fórmula molecular**. Na isomeria plana, eles diferem na estrutura.\n\n**Identificando as funções:**\n- CH₃–CH₂–OH: o grupo –OH ligado a carbono saturado caracteriza um **álcool**.\n- CH₃–O–CH₃: o oxigênio entre dois carbonos caracteriza um **éter**.\n\nComo as funções orgânicas são diferentes, trata-se de **isomeria de função**. Os pares clássicos são álcool × éter, aldeído × cetona e ácido carboxílico × éster.\n\n**Por que as propriedades mudam tanto?** O etanol faz ligações de hidrogênio entre suas moléculas, graças ao –OH, o que eleva seu ponto de ebulição. O éter não tem H ligado ao O, interage mais fracamente e é gás à temperatura ambiente.',
        alternativas: [
          'Alotropia ocorre entre substâncias simples formadas pelo mesmo elemento (como O₂ e O₃), e não entre compostos.',
          'Isotopia é a relação entre átomos do mesmo elemento com números de massa diferentes.',
          'Na isomeria de cadeia, a função é a mesma e muda o tipo de cadeia (normal × ramificada, por exemplo).',
          'Na isomeria de posição, a função é a mesma e muda a posição de um grupo ou insaturação.',
          'Correta. Álcool e éter de mesma fórmula molecular: isômeros de função.'
        ],
        dica: 'Primeiro veja se a função é a mesma. Funções diferentes → isomeria de função. Mesma função → procure cadeia, posição ou compensação.'
      },
      fontes: [
        { titulo: 'Wikipédia: Isomeria', url: 'https://pt.wikipedia.org/wiki/Isomeria' },
        { titulo: 'Wikipédia: Etanol', url: 'https://pt.wikipedia.org/wiki/Etanol' }
      ]
    },
    {
      id: 'qui-006',
      materia: 'quimica',
      assunto: 'Atomística',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 1,
      objetivos: ['enem'],
      textoBase: 'Em 1987, em Goiânia, uma cápsula de um aparelho de radioterapia abandonado foi aberta, liberando cloreto de césio com o isótopo radioativo césio-137. O césio tem número atômico 55.',
      enunciado: 'O número de nêutrons no núcleo de um átomo de césio-137 é',
      alternativas: ['55.', '82.', '110.', '137.', '192.'],
      resposta: 1,
      explicacao: {
        resumo: 'Número de massa A = prótons + nêutrons. Com A = 137 e Z = 55: n = 137 − 55 = 82.',
        detalhada: '**Conceitos:**\n- **Número atômico (Z):** número de prótons. Identifica o elemento: todo átomo de césio tem Z = 55.\n- **Número de massa (A):** soma de prótons e nêutrons. É o número que aparece no nome “césio-137”.\n\n**Relação:** A = Z + n → n = A − Z.\n\n**Conta:** n = 137 − 55 = **82 nêutrons**.\n\n**Isótopos** são átomos do mesmo elemento (mesmo Z) com números de massa diferentes, ou seja, com quantidades diferentes de nêutrons. O césio-133 (estável) e o césio-137 (radioativo) têm os mesmos 55 prótons, mas 78 e 82 nêutrons, respectivamente.',
        alternativas: [
          '55 é o número de prótons (Z), não de nêutrons.',
          'Correta. n = A − Z = 137 − 55 = 82.',
          'Supôs que o átomo tem tantos nêutrons quanto prótons e somou os dois (55 + 55). O número de nêutrons não é igual ao de prótons e não é dado por essa soma.',
          '137 é o número de massa (prótons + nêutrons).',
          'Somou A e Z (137 + 55) em vez de subtrair.'
        ],
        dica: 'O número no nome do isótopo (césio-137, carbono-14) é sempre o número de massa A. Nêutrons = A − Z.'
      },
      fontes: [
        { titulo: 'Wikipédia: Acidente radiológico de Goiânia', url: 'https://pt.wikipedia.org/wiki/Acidente_radiol%C3%B3gico_de_Goi%C3%A2nia' },
        { titulo: 'Wikipédia: Número de massa', url: 'https://pt.wikipedia.org/wiki/N%C3%BAmero_de_massa' }
      ]
    }
  ],

  aulas: [
    {
      id: 'aula-mat-porcentagem',
      materia: 'matematica',
      assunto: 'Porcentagem',
      titulo: 'Porcentagem sem decorar: fatores multiplicativos',
      duracaoMin: 18,
      resumo: 'Aprenda a transformar qualquer aumento ou desconto em um fator de multiplicação e resolva variações sucessivas, trocas de base e problemas de “porcentagem de porcentagem”.',
      secoes: [
        {
          titulo: 'O que é porcentagem',
          texto: 'Porcentagem é uma razão com denominador 100. Dizer “30%” é o mesmo que dizer 30/100 = 0,30. Por isso, calcular 30% de um valor é multiplicar esse valor por 0,30.\n\nExemplos rápidos:\n- 10% = 0,10 → basta dividir por 10 (10% de 350 = 35).\n- 1% = 0,01 → divida por 100 (1% de 350 = 3,5).\n- 25% = 1/4; 50% = 1/2; 75% = 3/4; 20% = 1/5.\n\n**Truque de montagem:** qualquer porcentagem pode ser montada a partir de 10%, 5% e 1%. Por exemplo, 15% de 240 = 10% (24) + 5% (12) = 36.'
        },
        {
          titulo: 'Fator multiplicativo: a ferramenta principal',
          texto: 'Em vez de calcular a porcentagem e depois somar ou subtrair, use o **fator**:\n\n- Aumento de i% → multiplique por **(1 + i/100)**. Ex.: +12% → × 1,12.\n- Desconto de i% → multiplique por **(1 − i/100)**. Ex.: −35% → × 0,65.\n\n**Exemplo resolvido:** uma conta de R$ 180,00 teve aumento de 15%. Novo valor = 180 × 1,15 = R$ 207,00. Em um passo só, sem calcular os R$ 27,00 separadamente.\n\nO fator também serve para descobrir a taxa: se um preço foi de R$ 80 para R$ 92, o fator é 92 ÷ 80 = 1,15, ou seja, aumento de 15%.'
        },
        {
          titulo: 'Variações sucessivas',
          texto: 'Quando há várias variações em sequência, cada uma incide sobre o valor já alterado. Por isso **os fatores se multiplicam** e as taxas não se somam.\n\n**Exemplo resolvido 1:** aumento de 10% seguido de desconto de 10%. Fator: 1,10 × 0,90 = 0,99. O valor final é 99% do inicial, uma **queda de 1%**, e não “zero a zero”.\n\n**Exemplo resolvido 2:** dois aumentos de 20% e 30%. Fator: 1,2 × 1,3 = 1,56 → aumento acumulado de 56%.\n\n**Fórmula de bolso para duas taxas:** acumulado = a + b + a·b (use sinal negativo para desconto). Para +20% e +30%: 0,2 + 0,3 + 0,06 = 0,56.'
        },
        {
          titulo: 'Valor original e troca de base',
          texto: '**Descobrir o valor antes do aumento:** se um produto custa R$ 138,00 depois de um aumento de 15%, o preço antigo é 138 ÷ 1,15 = R$ 120,00. O erro clássico é tirar 15% de 138 (o que dá 117,30), porque os 15% foram calculados sobre o valor antigo, e não sobre o novo.\n\n**Porcentagem de porcentagem:** quando a questão encadeia grupos (“40% são mulheres; 25% delas são gerentes”), suponha um total de 100 pessoas e trabalhe com quantidades. Assim fica claro qual é a base de cada porcentagem.\n\n**Pontos percentuais × porcentagem:** se a taxa de desemprego passou de 10% para 12%, ela subiu 2 **pontos percentuais**, mas cresceu 20% em termos relativos (2 ÷ 10).'
        },
        {
          titulo: 'Erros comuns em prova',
          texto: '- Somar taxas sucessivas (+25% e −20% não dão +5%; dão 0%).\n- Calcular o desconto sobre o valor errado (a base é sempre o valor imediatamente anterior).\n- Para achar o valor original, subtrair a porcentagem do valor final em vez de dividir pelo fator.\n- Confundir pontos percentuais com variação percentual.\n- Esquecer que “x% de desconto” deixa (100 − x)% do valor, e não x%.'
        }
      ],
      pontosChave: [
        'Porcentagem é razão de denominador 100: 30% = 0,30.',
        'Aumento de i% = multiplicar por (1 + i/100); desconto de i% = multiplicar por (1 − i/100).',
        'Variações sucessivas: multiplique os fatores; nunca some as taxas.',
        'Para voltar ao valor original, divida pelo fator (não subtraia a porcentagem).',
        'Em porcentagens encadeadas, suponha um total de 100 e trabalhe com quantidades.',
        'Ponto percentual mede diferença entre taxas; variação percentual mede crescimento relativo.'
      ],
      fontes: [
        { titulo: 'Wikipédia: Percentagem', url: 'https://pt.wikipedia.org/wiki/Percentagem' },
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org/' }
      ]
    },
    {
      id: 'aula-mat-financeira',
      materia: 'matematica',
      assunto: 'Matemática financeira',
      titulo: 'Juros simples, juros compostos e taxas equivalentes',
      duracaoMin: 22,
      resumo: 'Entenda a diferença entre os regimes de juros, aprenda as fórmulas de montante e domine taxa nominal, efetiva e equivalente, o trio mais cobrado em provas de bancos.',
      secoes: [
        {
          titulo: 'Vocabulário básico',
          texto: '- **Capital (C):** valor aplicado ou emprestado no início.\n- **Juros (J):** remuneração pelo uso do dinheiro no tempo.\n- **Montante (M):** capital + juros, o valor no final.\n- **Taxa (i):** porcentagem de juros por período (ao mês, ao ano). Nas fórmulas, use sempre na forma decimal: 2% = 0,02.\n- **Prazo (t ou n):** número de períodos.\n\n**Regra de ouro:** taxa e prazo precisam estar na **mesma unidade de tempo**. Taxa mensal com prazo em meses; taxa anual com prazo em anos.'
        },
        {
          titulo: 'Juros simples',
          texto: 'No regime simples, os juros de cada período são calculados **sempre sobre o capital inicial**. O montante cresce em progressão aritmética (linha reta).\n\n**Fórmulas:** J = C · i · t e M = C · (1 + i · t).\n\n**Exemplo resolvido:** R$ 2.000,00 a 3% ao mês por 5 meses. J = 2 000 × 0,03 × 5 = 300. M = R$ 2.300,00.\n\nNo regime simples, taxas proporcionais são equivalentes: 3% ao mês equivale a 36% ao ano (3 × 12).'
        },
        {
          titulo: 'Juros compostos',
          texto: 'No regime composto, os juros de cada período são somados ao saldo e passam a render no período seguinte: são os **juros sobre juros**. O montante cresce em progressão geométrica.\n\n**Fórmula:** M = C · (1 + i)ⁿ e J = M − C.\n\n**Exemplo resolvido:** R$ 2.000,00 a 3% ao mês por 2 meses. M = 2 000 × 1,03² = 2 000 × 1,0609 = R$ 2.121,80. Juros = R$ 121,80. No regime simples seriam R$ 120,00: a diferença de R$ 1,80 são os juros do primeiro mês rendendo no segundo.\n\n**Comparação útil:** para prazo maior que 1 período, o composto rende mais que o simples; para prazo menor que 1 período, o simples rende mais; em exatamente 1 período, os dois são iguais.'
        },
        {
          titulo: 'Taxa nominal, efetiva e equivalente',
          texto: '**Taxa efetiva:** o período da taxa coincide com o da capitalização (2% ao mês, capitalizada mensalmente). É a taxa que realmente se aplica.\n\n**Taxa nominal:** o período da taxa é diferente do da capitalização (24% ao ano, capitalizada mensalmente). Ela é só uma forma de anunciar e precisa ser convertida: divida pelo número de capitalizações. 24% a.a. com capitalização mensal → 2% a.m. efetiva.\n\n**Taxas equivalentes (juros compostos):** duas taxas são equivalentes se levam ao mesmo montante no mesmo prazo. Relação: (1 + i_anual) = (1 + i_mensal)¹².\n\n**Exemplo resolvido:** 10% ao semestre equivalem a (1,1)² − 1 = 0,21 = **21% ao ano**, e não 20%.'
        },
        {
          titulo: 'Erros comuns em prova',
          texto: '- Usar taxa anual com prazo em meses (ou o contrário).\n- Responder o montante quando a questão pede os juros, ou o contrário.\n- Multiplicar uma taxa composta por 12 para achar a anual (isso só vale no regime simples).\n- Usar a taxa nominal diretamente na fórmula, sem convertê-la em efetiva.\n- Esquecer de transformar a porcentagem em decimal (2% → 0,02, não 2).'
        }
      ],
      pontosChave: [
        'Juros simples: J = C · i · t; os juros incidem sempre sobre o capital inicial.',
        'Juros compostos: M = C · (1 + i)ⁿ; os juros incidem sobre o saldo acumulado.',
        'Taxa e prazo sempre na mesma unidade de tempo.',
        'Taxa nominal se converte dividindo pelo número de capitalizações; só então se aplica a fórmula.',
        'Taxas equivalentes no regime composto: (1 + i_anual) = (1 + i_mensal)¹².',
        'Para prazos maiores que um período, o composto rende mais que o simples.'
      ],
      fontes: [
        { titulo: 'Wikipédia: Juro', url: 'https://pt.wikipedia.org/wiki/Juro' },
        { titulo: 'Banco Central do Brasil', url: 'https://www.bcb.gov.br/' },
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org/' }
      ]
    },
    {
      id: 'aula-rlm-proposicoes',
      materia: 'raciocinio-logico',
      assunto: 'Proposições e conectivos',
      titulo: 'Proposições, conectivos e tabela-verdade',
      duracaoMin: 20,
      resumo: 'Saiba reconhecer o que é proposição, domine os cinco conectivos e monte tabelas-verdade rapidamente, inclusive para identificar tautologias e contradições.',
      secoes: [
        {
          titulo: 'O que é (e o que não é) proposição',
          texto: '**Proposição** é uma sentença declarativa que pode ser julgada como verdadeira (V) ou falsa (F), nunca as duas ao mesmo tempo (princípio da não contradição) e sempre uma delas (princípio do terceiro excluído).\n\n**São proposições:** “Brasília é a capital do Brasil.” (V); “5 é número par.” (F).\n\n**Não são proposições:**\n- ordens: “Estude lógica.”\n- perguntas: “Você passou?”\n- exclamações: “Que prova difícil!”\n- sentenças abertas: “x + 1 = 4”, “Ele é analista.” (não se sabe quem é x ou “ele”)\n- paradoxos: “Esta frase é falsa.”'
        },
        {
          titulo: 'Os cinco conectivos',
          texto: '- **Negação (¬p, ~p):** inverte o valor. “Não é verdade que...”\n- **Conjunção (p ∧ q):** “p e q”. Só é V se **ambas** forem V.\n- **Disjunção inclusiva (p ∨ q):** “p ou q”. Só é F se **ambas** forem F.\n- **Condicional (p → q):** “se p, então q”. Só é F quando **p é V e q é F**.\n- **Bicondicional (p ↔ q):** “p se e somente se q”. É V quando p e q têm o **mesmo valor**.\n\nHá ainda a **disjunção exclusiva** (“ou p ou q”, p ⊻ q), que é V quando os valores são **diferentes**: exatamente uma das duas acontece.'
        },
        {
          titulo: 'Montando a tabela-verdade',
          texto: 'Uma proposição com **n** proposições simples tem **2ⁿ linhas** na tabela-verdade: 2 simples → 4 linhas; 3 → 8; 4 → 16.\n\n**Exemplo resolvido:** valor de (p ∧ q) → ¬r com p = V, q = V, r = V.\n- p ∧ q = V ∧ V = V\n- ¬r = F\n- V → F = **F**\n\n**Ordem de resolução:** primeiro o que está entre parênteses, depois negações, depois os conectivos mais externos. Em prova, quase nunca é preciso montar a tabela inteira: procure a linha que interessa.'
        },
        {
          titulo: 'Tautologia, contradição e contingência',
          texto: '- **Tautologia:** V em todas as linhas. Ex.: p ∨ ¬p.\n- **Contradição:** F em todas as linhas. Ex.: p ∧ ¬p.\n- **Contingência:** tem linhas V e linhas F.\n\n**Método rápido para condicionais:** para testar se A → B é tautologia, tente torná-lo falso (A = V e B = F). Se for impossível, é tautologia.\n\n**Exemplo resolvido:** (p ∧ q) → p. Para ser F, precisaríamos de p ∧ q = V (logo p = V) e p = F, o que é impossível. Portanto é tautologia.'
        },
        {
          titulo: 'Erros comuns em prova',
          texto: '- Achar que “F → V” ou “F → F” é falso. O condicional com antecedente falso é sempre verdadeiro.\n- Confundir “ou... ou...” (exclusivo) com “ou” (inclusivo).\n- Considerar sentenças abertas (“Ele é juiz.”) como proposições.\n- Esquecer de contar as proposições simples **distintas** ao calcular 2ⁿ linhas (p aparecendo duas vezes conta uma vez só).'
        }
      ],
      pontosChave: [
        'Proposição é sentença declarativa com valor V ou F; ordens, perguntas e sentenças abertas não são.',
        'Conjunção (∧) só é V com tudo V; disjunção (∨) só é F com tudo F.',
        'Condicional (→) só é F no caso V → F.',
        'Bicondicional (↔) é V quando os valores são iguais; disjunção exclusiva, quando são diferentes.',
        'A tabela-verdade tem 2ⁿ linhas, com n proposições simples distintas.',
        'Tautologia é sempre V; contradição é sempre F; contingência varia.'
      ],
      fontes: [
        { titulo: 'Wikipédia: Lógica proposicional', url: 'https://pt.wikipedia.org/wiki/L%C3%B3gica_proposicional' },
        { titulo: 'Wikipédia: Tabela-verdade', url: 'https://pt.wikipedia.org/wiki/Tabela-verdade' }
      ]
    },
    {
      id: 'aula-rlm-equivalencias',
      materia: 'raciocinio-logico',
      assunto: 'Equivalências e negações',
      titulo: 'Equivalências lógicas e negações sem pegadinha',
      duracaoMin: 20,
      resumo: 'Domine as equivalências do condicional, as Leis de De Morgan e a negação de quantificadores, os temas que mais derrubam candidatos em RLM.',
      secoes: [
        {
          titulo: 'O que é equivalência lógica',
          texto: 'Duas proposições são **logicamente equivalentes** (≡) quando têm a mesma tabela-verdade, ou seja, o mesmo valor em todas as linhas. Elas dizem a mesma coisa com outras palavras.\n\nPara provar que **não** são equivalentes, basta achar **uma** linha em que os valores diferem. Essa é a forma mais rápida de eliminar alternativas.'
        },
        {
          titulo: 'Equivalências do condicional',
          texto: 'O condicional p → q tem duas equivalências que caem em quase toda prova:\n\n- **Contrapositiva:** p → q ≡ ¬q → ¬p (inverte a ordem **e** nega as duas).\n- **Disjunção:** p → q ≡ ¬p ∨ q (nega a primeira, troca “se... então” por “ou”, mantém a segunda).\n\n**Exemplo resolvido:** “Se chove, a rua fica molhada.”\n- Contrapositiva: “Se a rua não fica molhada, então não chove.”\n- Disjunção: “Não chove ou a rua fica molhada.”\n\n**Não são equivalentes:** a recíproca (q → p) e a inversa (¬p → ¬q). Elas são as pegadinhas preferidas das bancas.'
        },
        {
          titulo: 'Leis de De Morgan e negação do condicional',
          texto: '**De Morgan** (negar “e” e “ou”): nega as partes e troca o conectivo.\n- ¬(p ∧ q) ≡ ¬p ∨ ¬q\n- ¬(p ∨ q) ≡ ¬p ∧ ¬q\n\n**Exemplo:** a negação de “Estudo e trabalho” é “Não estudo **ou** não trabalho”.\n\n**Negação do condicional:** ¬(p → q) ≡ p ∧ ¬q. Macete **MANÉ**: MAntém a primeira, Nega a segunda, troca por “E”.\n\n**Exemplo:** a negação de “Se treino, então venço” é “Treino e não venço”.\n\n**Negação do bicondicional:** ¬(p ↔ q) ≡ p ⊻ q (“ou p ou q”, exclusivo).'
        },
        {
          titulo: 'Negação de quantificadores',
          texto: '- Negação de “**Todo** A é B” → “**Algum** A **não** é B” (basta um contraexemplo).\n- Negação de “**Algum** A é B” → “**Nenhum** A é B”.\n- Negação de “**Nenhum** A é B” → “**Algum** A é B”.\n\n**Exemplo resolvido:** negar “Todos os servidores chegaram no horário” → “Algum servidor não chegou no horário”. Atenção: “Nenhum servidor chegou no horário” é forte demais e **não** é a negação.\n\nQuando o quantificador vem com conectivo, negue as duas camadas: “Todo aluno estuda ou trabalha” → “Algum aluno não estuda **e** não trabalha”.'
        },
        {
          titulo: 'Erros comuns em prova',
          texto: '- Trocar contrapositiva (equivalente) por recíproca ou inversa (não equivalentes).\n- Negar o condicional com outro condicional. A negação de “se... então” nunca começa com “se”.\n- Negar “todo” com “nenhum”.\n- Esquecer de trocar o conectivo em De Morgan (“e” vira “ou” e vice-versa).\n- Confundir “equivalente” com “negação”: ¬p ∨ q é equivalente a p → q, e não a sua negação.'
        }
      ],
      pontosChave: [
        'p → q ≡ ¬q → ¬p (contrapositiva) ≡ ¬p ∨ q.',
        'Recíproca (q → p) e inversa (¬p → ¬q) não são equivalentes ao condicional.',
        'Negação do condicional: p ∧ ¬q (MANÉ).',
        'De Morgan: ¬(p ∧ q) ≡ ¬p ∨ ¬q e ¬(p ∨ q) ≡ ¬p ∧ ¬q.',
        'Negação de “todo” é “algum... não”; negação de “algum” é “nenhum”.',
        'Para mostrar que duas proposições não são equivalentes, basta uma linha com valores diferentes.'
      ],
      fontes: [
        { titulo: 'Wikipédia: Leis de De Morgan', url: 'https://pt.wikipedia.org/wiki/Leis_de_De_Morgan' },
        { titulo: 'Wikipédia: Contraposição', url: 'https://pt.wikipedia.org/wiki/Contraposi%C3%A7%C3%A3o' },
        { titulo: 'Wikipédia: Tabela-verdade', url: 'https://pt.wikipedia.org/wiki/Tabela-verdade' }
      ]
    },
    {
      id: 'aula-fis-cinematica',
      materia: 'fisica',
      assunto: 'Cinemática',
      titulo: 'Cinemática: velocidade média, MU e MUV',
      duracaoMin: 20,
      resumo: 'Revise velocidade média, movimento uniforme e uniformemente variado, as equações horárias e a de Torricelli, com foco nas situações do cotidiano que o ENEM cobra.',
      secoes: [
        {
          titulo: 'Grandezas básicas e unidades',
          texto: '- **Posição (s)** e **deslocamento (Δs = s − s₀)**, em metros (m) ou quilômetros (km).\n- **Tempo (t)**, em segundos (s) ou horas (h).\n- **Velocidade (v)**: quanto a posição muda por unidade de tempo, em m/s ou km/h.\n- **Aceleração (a)**: quanto a velocidade muda por unidade de tempo, em m/s².\n\n**Conversão essencial:** km/h ÷ 3,6 = m/s; m/s × 3,6 = km/h. Ex.: 72 km/h = 20 m/s; 108 km/h = 30 m/s. Antes de qualquer conta, deixe todas as grandezas no mesmo sistema de unidades.'
        },
        {
          titulo: 'Velocidade média',
          texto: '**Vm = Δs ÷ Δt** (deslocamento total dividido pelo tempo total).\n\nA velocidade média **não é** a média das velocidades. **Exemplo resolvido:** um ciclista percorre 30 km a 15 km/h e mais 30 km a 30 km/h. Tempos: 2 h e 1 h. Vm = 60 ÷ 3 = **20 km/h**, e não 22,5 km/h.\n\n**Atalhos:**\n- Duas metades do **percurso** com v₁ e v₂: Vm = 2·v₁·v₂ ÷ (v₁ + v₂).\n- Duas metades do **tempo** com v₁ e v₂: Vm = (v₁ + v₂) ÷ 2.'
        },
        {
          titulo: 'Movimento uniforme (MU)',
          texto: 'No MU a velocidade é constante e a aceleração é nula. A posição varia igualmente em tempos iguais.\n\n**Equação horária:** s = s₀ + v·t.\n\n**Exemplo resolvido (encontro):** um carro A sai do km 0 a 80 km/h e um carro B sai do km 300, no mesmo instante, em sentido contrário, a 70 km/h. sA = 80t e sB = 300 − 70t. No encontro, sA = sB: 80t = 300 − 70t → 150t = 300 → t = 2 h, no km 160.\n\n**Atalho:** em sentidos opostos, as velocidades se somam (velocidade relativa 150 km/h); 300 km ÷ 150 km/h = 2 h.'
        },
        {
          titulo: 'Movimento uniformemente variado (MUV)',
          texto: 'No MUV a aceleração é constante. As três equações principais são:\n\n- **Velocidade:** v = v₀ + a·t\n- **Posição:** s = s₀ + v₀·t + a·t²/2\n- **Torricelli (sem tempo):** v² = v₀² + 2·a·Δs\n\n**Como escolher:** veja qual grandeza o problema não dá nem pede. Se o tempo não aparece, use Torricelli.\n\n**Exemplo resolvido:** um carro parte do repouso com a = 2 m/s². Depois de 5 s: v = 0 + 2 × 5 = 10 m/s e Δs = 2 × 25 ÷ 2 = 25 m. Conferindo por Torricelli: 10² = 0 + 2 × 2 × 25 → 100 = 100.\n\n**Distância de frenagem:** d = v₀² ÷ (2a). Dobrar a velocidade quadruplica a distância para parar.'
        },
        {
          titulo: 'Erros comuns no ENEM',
          texto: '- Misturar km/h com m/s na mesma conta.\n- Calcular velocidade média como média aritmética das velocidades.\n- Usar a = −g ou a = +g sem definir um sentido positivo para o movimento.\n- Esquecer o fator ½ em a·t²/2 ou o fator 2 em Torricelli.\n- Achar que velocidade zero implica aceleração zero (no ponto mais alto de um lançamento vertical, v = 0, mas a = g).'
        }
      ],
      pontosChave: [
        'Converta: km/h ÷ 3,6 = m/s.',
        'Velocidade média = deslocamento total ÷ tempo total, e não a média das velocidades.',
        'MU: s = s₀ + v·t; aceleração nula.',
        'MUV: v = v₀ + a·t e s = s₀ + v₀·t + a·t²/2.',
        'Sem tempo no problema, use Torricelli: v² = v₀² + 2·a·Δs.',
        'A distância de frenagem cresce com o quadrado da velocidade.'
      ],
      fontes: [
        { titulo: 'Wikipédia: Velocidade', url: 'https://pt.wikipedia.org/wiki/Velocidade' },
        { titulo: 'Wikipédia: Equação de Torricelli', url: 'https://pt.wikipedia.org/wiki/Equa%C3%A7%C3%A3o_de_Torricelli' },
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org/' }
      ]
    },
    {
      id: 'aula-qui-estequiometria',
      materia: 'quimica',
      assunto: 'Estequiometria',
      titulo: 'Estequiometria passo a passo: do grama ao mol e de volta',
      duracaoMin: 22,
      resumo: 'Aprenda o roteiro único que resolve qualquer cálculo estequiométrico e os ajustes de pureza, rendimento e reagente limitante que o ENEM adora cobrar.',
      secoes: [
        {
          titulo: 'Mol, massa molar e a equação balanceada',
          texto: '**Mol** é uma quantidade: 1 mol tem cerca de 6,0 × 10²³ entidades (constante de Avogadro). A **massa molar** (g/mol) é a massa de 1 mol da substância e se obtém somando as massas atômicas.\n\n**Exemplo:** H₂O = 2 × 1 + 16 = 18 g/mol; CO₂ = 12 + 2 × 16 = 44 g/mol.\n\nNa equação **balanceada**, os coeficientes indicam a proporção **em mol** entre reagentes e produtos. Em 2 H₂ + O₂ → 2 H₂O, 2 mol de H₂ reagem com 1 mol de O₂ e formam 2 mol de água. Antes de qualquer cálculo, confira se a equação está balanceada (mesmo número de átomos de cada elemento dos dois lados).'
        },
        {
          titulo: 'O roteiro em quatro passos',
          texto: '1. Converta o dado em **mol** (massa ÷ massa molar).\n2. Use a **proporção dos coeficientes** para achar os mols da substância pedida.\n3. Converta os mols na unidade pedida (massa, volume, número de moléculas).\n4. Confira a ordem de grandeza.\n\n**Exemplo resolvido:** quantos gramas de água se formam a partir de 8 g de H₂? (2 H₂ + O₂ → 2 H₂O)\n- 8 g ÷ 2 g/mol = 4 mol de H₂.\n- Proporção 2 : 2 → 4 mol de H₂O.\n- 4 × 18 = **72 g** de água.\n\nCom prática, dá para montar uma única regra de três em massa: 2 × 2 g de H₂ → 2 × 18 g de H₂O; 8 g → x; x = 72 g.'
        },
        {
          titulo: 'Pureza e rendimento',
          texto: '**Pureza** age no **reagente**: só a parte pura reage. Se 500 g de minério têm 60% de pureza, só 300 g participam da reação.\n\n**Rendimento** age no **produto**: é a fração do produto teórico que realmente se obtém. Se a conta teórica dá 100 g e o rendimento é 80%, obtêm-se 80 g.\n\n**Exemplo resolvido:** 200 kg de calcário com 80% de CaCO₃, rendimento de 90% (CaCO₃ → CaO + CO₂; 100 g/mol → 56 g/mol). Massa pura = 160 kg; CaO teórico = 160 × 56/100 = 89,6 kg; CaO real = 0,9 × 89,6 = **80,64 kg**.\n\nComo tudo é multiplicação, pureza e rendimento podem ser aplicados em qualquer ordem.'
        },
        {
          titulo: 'Reagente limitante e em excesso',
          texto: 'Quando o problema dá a quantidade de **dois reagentes**, verifique se estão na proporção certa. O reagente que acaba primeiro é o **limitante** e é ele que define quanto produto se forma. O outro sobra (está **em excesso**).\n\n**Exemplo resolvido:** 4 mol de H₂ e 3 mol de O₂ (2 H₂ + O₂ → 2 H₂O). Para 4 mol de H₂ são necessários só 2 mol de O₂. Há 3 mol, então o O₂ está em excesso (sobra 1 mol) e o H₂ é o limitante. Formam-se 4 mol de água.\n\n**Teste rápido:** divida a quantidade em mol de cada reagente pelo seu coeficiente. O menor resultado indica o limitante (H₂: 4/2 = 2; O₂: 3/1 = 3 → H₂ limita).'
        },
        {
          titulo: 'Erros comuns',
          texto: '- Usar a proporção dos coeficientes diretamente em gramas (eles valem para mol).\n- Calcular a massa de outro produto que não o pedido (CO₂ em vez de H₂O, por exemplo).\n- Esquecer de aplicar a pureza, o rendimento ou os dois.\n- Usar a equação sem balancear.\n- Calcular o produto a partir do reagente em excesso, e não do limitante.'
        }
      ],
      pontosChave: [
        'Coeficientes da equação balanceada indicam proporção em mol.',
        'Roteiro: massa → mol → proporção → mol → massa.',
        'Massa molar = soma das massas atômicas (g/mol).',
        'Pureza reduz o reagente; rendimento reduz o produto.',
        'Com dois reagentes, o produto é calculado pelo reagente limitante.',
        'Sempre confira se a equação está balanceada antes de calcular.'
      ],
      fontes: [
        { titulo: 'Wikipédia: Estequiometria', url: 'https://pt.wikipedia.org/wiki/Estequiometria' },
        { titulo: 'Wikipédia: Mol', url: 'https://pt.wikipedia.org/wiki/Mol' },
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org/' }
      ]
    }
  ]
});
