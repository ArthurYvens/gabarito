/* Questões de Química adaptadas dos problemas teóricos das 20 primeiras Olimpíadas Internacionais de Química (IChO 1968–1988).
   Fonte: "The Competition Problems from the International Chemistry Olympiads, Volume 1" (1ª a 20ª IChO, 1968–1988), editor Anton Sirota, © 2008 IUVENTA e IChO International Information Centre, Bratislava, Eslováquia.
   Original: https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf (coleção e condições de uso: https://icho.sk/competition-problems/)
   Permissão da página de créditos do volume: "You are free to copy, distribute, transmit or adapt this publication or its parts for unlimited teaching purposes, however, you are obliged to attribute your copies, transmissions or adaptations with a reference to 'The Competition Problems from the International Chemistry Olympiads, Volume 1' as it is required in the chemical literature."
   Este arquivo é uma adaptação (tradução para o português do Brasil, conversão para múltipla escolha, nomenclatura e unidades atualizadas e comentários novos), com as respostas conferidas na solução oficial de cada problema; onde o texto da coletânea tem erro evidente, o enunciado foi corrigido e a explicação avisa.
   O conteúdo adaptado deste arquivo é distribuído gratuitamente, sem fins comerciais, para estudo, com a mesma citação. */
Banco.registrar({ questoes: [
  {
    "id": "qui-1201",
    "materia": "quimica",
    "assunto": "Estequiometria",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1968,
      "orgao": "prova teórica (Praga), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 1ª IChO, Praga, 1968, problema 1. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Uma mistura de hidrogênio e cloro, mantida em frasco fechado a temperatura constante, foi irradiada com luz difusa (H2 + Cl2 → 2 HCl). Depois de certo tempo, o teor de cloro tinha diminuído 20% em relação ao da mistura inicial, e a mistura resultante tinha, em volume, 60% de cloro, 10% de hidrogênio e 30% de cloreto de hidrogênio. Qual era a composição, em volume, da mistura inicial?",
    "alternativas": [
      "60% de Cl2 e 40% de H2",
      "75% de Cl2 e 25% de H2",
      "80% de Cl2 e 20% de H2",
      "90% de Cl2 e 10% de H2",
      "50% de Cl2 e 50% de H2"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Os 30% de HCl vieram de 15 partes de H2 e 15 de Cl2; somando de volta o que reagiu, Cl2 = 60 + 15 = 75% e H2 = 10 + 15 = 25%.",
      "detalhada": "A resolução segue a solução oficial do problema 1 (1ª IChO). Em volume constante, a temperatura constante, volumes de gases são proporcionais aos números de mols (lei de Avogadro).\n\n**1) Equação:** H2 + Cl2 → 2 HCl. Para formar 2 volumes de HCl gastam-se 1 volume de H2 e 1 volume de Cl2. O número total de mols não muda (2 mol de gás → 2 mol de gás), então o volume total continua 100 partes.\n\n**2) Consumo:** 30 partes de HCl foram formadas, logo reagiram 15 partes de H2 e 15 de Cl2.\n\n**3) Composição inicial:** Cl2 = 60 + 15 = 75 partes; H2 = 10 + 15 = 25 partes.\n\n**4) Conferência:** o cloro caiu de 75 para 60 partes, isto é, 15/75 = 20% do teor inicial, exatamente o dado do enunciado.",
      "alternativas": [
        "Errada. Soma os 30% de HCl ao hidrogênio, como se o HCl viesse só do H2. Cada molécula de HCl contém um átomo de cada elemento: 2 volumes de HCl vêm de 1 volume de H2 e 1 volume de Cl2.",
        "Correta. Os 30 volumes de HCl vieram de 15 de H2 e 15 de Cl2; devolvendo-os, Cl2 = 60 + 15 = 75% e H2 = 10 + 15 = 25%. O cloro caiu de 75 para 60, isto é, 15/75 = 20%, como diz o enunciado.",
        "Errada. Trata o \"20%\" do enunciado como 20 volumes de cloro consumidos (60 + 20). Mas 20% é a queda relativa ao teor inicial de cloro, não um volume absoluto.",
        "Errada. Soma todo o HCl ao cloro (60 + 30) e esquece que o HCl também contém hidrogênio, que veio do H2 inicial.",
        "Errada. Supõe mistura equimolar só porque a equação tem proporção 1:1. A mistura final tem sobra de cloro (60%) e pouquíssimo hidrogênio (10%), o que não combina com partida 50:50."
      ],
      "dica": "Em reação gasosa sem variação do número de mols, some de volta a cada gás o que reagiu; HCl contém os dois elementos, metade de cada."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 1ª IChO (1968), problema 1",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1202",
    "materia": "quimica",
    "assunto": "Funções orgânicas",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1968,
      "orgao": "prova teórica (Praga), problema 4, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 1ª IChO, Praga, 1968, problema 4. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Para neutralizar 0,19 g de um ácido orgânico comum gastam-se 31,7 cm³ de solução de NaOH 0,1 mol/dm³. O vapor desse ácido é 30 vezes mais denso que o hidrogênio gasoso (nas mesmas condições de temperatura e pressão). Qual é o ácido?",
    "alternativas": [
      "Ácido fórmico (metanoico), HCOOH",
      "Ácido propanoico, CH3–CH2–COOH",
      "Ácido oxálico (etanodioico), HOOC–COOH",
      "Ácido acético (etanoico), CH3–COOH",
      "Ácido butanoico, CH3–CH2–CH2–COOH"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "A densidade relativa dá M = 30 × 2 = 60 g/mol; a titulação dá M = ν × 59,9 g/mol com ν = 1. Ácido monoprótico de 60 g/mol: ácido acético.",
      "detalhada": "A resolução segue a solução oficial do problema 4 (1ª IChO).\n\n**1) Titulação:** n(NaOH) = 0,1 mol/dm³ × 0,0317 dm³ = 3,17×10⁻³ mol. Se o ácido tem ν hidrogênios ácidos, n(ácido) = 3,17×10⁻³/ν mol e, portanto, M = 0,19 g ÷ (3,17×10⁻³/ν mol) = ν × 59,9 g/mol.\n\n**2) Densidade do vapor:** a densidade relativa ao H2 é M/M(H2); então M = 30 × 2 g/mol = 60 g/mol.\n\n**3) Comparação:** 60 = ν × 59,9 dá ν = 1. É um ácido monoprótico de massa molar 60 g/mol: o ácido acético, CH3–COOH (C2H4O2: 2 × 12 + 4 × 1 + 2 × 16 = 60).",
      "alternativas": [
        "Errada. M = 46 g/mol; a densidade relativa ao H2 seria 23, não 30.",
        "Errada. M = 74 g/mol; a densidade relativa ao H2 seria 37.",
        "Errada. M = 90 g/mol (densidade relativa 45) e, sendo diprótico, 0,19 g exigiriam cerca de 42 cm³ de NaOH 0,1 mol/dm³, não 31,7 cm³.",
        "Correta. M = 60 g/mol (densidade relativa 30 → 30 × 2) e, na titulação, M = ν × 59,9 g/mol com ν = 1 (ácido monoprótico).",
        "Errada. M = 88 g/mol; a densidade relativa ao H2 seria 44."
      ],
      "dica": "Duas informações independentes fecham o problema: a densidade do vapor dá M, e a titulação diz quantos H⁺ cada molécula libera."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 1ª IChO (1968), problema 4",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1203",
    "materia": "quimica",
    "assunto": "Eletroquímica",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1969,
      "orgao": "prova teórica (Katowice), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 2ª IChO, Katowice, 1969, problema 1. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Dissolveram-se 20 g de sulfato de potássio em 150 cm³ de água (densidade da água: 1 g/cm³) e a solução foi eletrolisada. Ao final da eletrólise, o teor de K2SO4 na solução era 15% em massa. Que volumes de hidrogênio e de oxigênio foram obtidos a 20 °C e 101 325 Pa? (R = 8,314 J/(mol·K))",
    "alternativas": [
      "H2: 49 dm³; O2: 24,5 dm³",
      "H2: 24,5 dm³; O2: 49 dm³",
      "H2: 49 dm³; O2: 49 dm³",
      "H2: 46 dm³; O2: 23 dm³",
      "H2: 200 dm³; O2: 100 dm³"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "Só a água é eletrolisada; ela diminuiu de 150 g para 113,3 g (36,7 g = 2,04 mol), o que dá 2,04 mol de H2 (49 dm³) e 1,02 mol de O2 (24,5 dm³).",
      "detalhada": "A resolução segue a solução oficial do problema 1 (2ª IChO).\n\n**1) Quem é eletrolisado:** o K2SO4 não se consome; só a água se decompõe, então a massa de K2SO4 (20 g) permanece constante.\n\n**2) Água restante:** massa da solução final = 20 g ÷ 0,15 = 133,3 g; água final = 133,3 − 20 = 113,3 g. Água decomposta = 150 − 113,3 = 36,7 g = 36,7/18,0 = 2,04 mol.\n\n**3) Estequiometria:** 2 H2O → 2 H2 + O2. Então n(H2) = 2,04 mol e n(O2) = 1,02 mol.\n\n**4) Volumes:** V(H2) = nRT/p = 2,04 × 8,314 × 293,15 ÷ 101 325 = 0,0490 m³ = 49,0 dm³. V(O2) = 24,5 dm³.",
      "alternativas": [
        "Correta. Desapareceram 36,7 g de água (2,04 mol): 2 H2O → 2 H2 + O2 dá 2,04 mol de H2 (49,0 dm³ a 20 °C) e 1,02 mol de O2 (24,5 dm³).",
        "Errada. Troca os gases. Na eletrólise da água o H2 aparece em quantidade dupla da de O2 (2 H2O → 2 H2 + O2).",
        "Errada. Supõe volumes iguais e ignora a proporção 2:1 da equação 2 H2O → 2 H2 + O2.",
        "Errada. Usa 22,4 dm³/mol (CNTP, 0 °C) em vez de calcular o volume a 20 °C com V = nRT/p, que dá 24,0 dm³/mol.",
        "Errada. Decompõe toda a água inicial (150 g = 8,3 mol) em vez de só a que desapareceu (36,7 g)."
      ],
      "dica": "Em eletrólise de solução de sal inerte, o sal não muda: o que se consome é a água. A massa do sal é a \"âncora\" para achar a água que sobrou."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 2ª IChO (1969), problema 1",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1204",
    "materia": "quimica",
    "assunto": "Funções orgânicas",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1969,
      "orgao": "prova teórica (Katowice), problema 3, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 2ª IChO, Katowice, 1969, problema 3. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Misturaram-se 10 cm³ de um hidrocarboneto gasoso desconhecido com 70 cm³ de oxigênio e a mistura foi inflamada por uma faísca. Terminada a reação e liquefeito o vapor de água, o volume final dos gases era 65 cm³. Tratando esses gases com solução de hidróxido de potássio, o volume caiu para 45 cm³. Todos os volumes foram medidos nas CNTP. Qual é o hidrocarboneto?",
    "alternativas": [
      "C2H4 (eteno)",
      "C2H6 (etano)",
      "C3H4 (propino)",
      "C3H6 (propeno)",
      "C2H2 (etino ou acetileno)"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "O KOH retirou 65 − 45 = 20 cm³ de CO2 (x = 2 carbonos); o O2 consumido foi 70 − 45 = 25 cm³ (x + y/4 = 2,5, logo y = 2). É o C2H2.",
      "detalhada": "A resolução segue a solução oficial do problema 3 (2ª IChO), que chega ao mesmo hidrocarboneto.\n\n**1) Reação geral:** CxHy + (x + y/4) O2 → x CO2 + y/2 H2O (a água, líquida, não conta no volume final). Em volumes iguais de gases, razão de volumes = razão de mols.\n\n**2) CO2:** o KOH absorve CO2, então V(CO2) = 65 − 45 = 20 cm³ vindos de 10 cm³ de hidrocarboneto: x = 2.\n\n**3) O2:** o gás que sobra após o KOH é O2: 45 cm³. Foram consumidos 70 − 45 = 25 cm³ por 10 cm³ de hidrocarboneto, ou seja, x + y/4 = 2,5. Com x = 2, y/4 = 0,5 e y = 2.\n\n**4) Resultado:** C2H2, o acetileno (etino).",
      "alternativas": [
        "Errada. 10 cm³ gastariam 30 cm³ de O2 e dariam 20 cm³ de CO2; sobrariam 40 cm³ de O2 + 20 cm³ de CO2 = 60 cm³ (e 40 cm³ após o KOH), não 65 e 45.",
        "Errada. Gastaria 35 cm³ de O2 e daria 20 cm³ de CO2: restariam 35 + 20 = 55 cm³ (35 cm³ após o KOH).",
        "Errada. Gastaria 40 cm³ de O2 e daria 30 cm³ de CO2: restariam 30 + 30 = 60 cm³ (30 cm³ após o KOH).",
        "Errada. Gastaria 45 cm³ de O2 e daria 30 cm³ de CO2: restariam 25 + 30 = 55 cm³ (25 cm³ após o KOH).",
        "Correta. Gasta 25 cm³ de O2 e dá 20 cm³ de CO2: restam 45 cm³ de O2 + 20 cm³ de CO2 = 65 cm³; o KOH retira o CO2 e ficam 45 cm³ de O2."
      ],
      "dica": "Gases e KOH: o que o KOH absorve é CO2 (e vapor de água, já liquefeito); o que sobra é o O2 em excesso. Dois números, duas incógnitas (x e y)."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 2ª IChO (1969), problema 3",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1205",
    "materia": "quimica",
    "assunto": "Isomeria",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1970,
      "orgao": "prova teórica (Budapeste), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 3ª IChO, Budapeste, 1970, problema 1. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "A combustão de 23 g de um gás (densidade 2,05 g/dm³ nas CNTP) produz 44 g de dióxido de carbono e 27 g de água. Qual é o composto?",
    "alternativas": [
      "Etano, CH3–CH3",
      "Etanol, CH3–CH2–OH",
      "Metoximetano (éter dimetílico), CH3–O–CH3",
      "Etanal, CH3–CHO",
      "Propano, CH3–CH2–CH3"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "M ≈ 46 g/mol e a análise dá C2H6O; dos isômeros, etanol (líquido) e metoximetano (gás), só o éter dimetílico é gás nas CNTP.",
      "detalhada": "A resolução segue a solução oficial do problema 1 (3ª IChO).\n\n**1) Massa molar:** M = ρ × Vm = 2,05 g/dm³ × 22,4 dm³/mol ≈ 46 g/mol; então 23 g = 0,5 mol.\n\n**2) Carbono e hidrogênio:** n(CO2) = 44/44 = 1 mol → 1 mol de C (12 g), ou 2 C por molécula. n(H2O) = 27/18 = 1,5 mol → 3 mol de H (3 g), ou 6 H por molécula.\n\n**3) Oxigênio:** 23 − 12 − 3 = 8 g = 0,5 mol de O, ou 1 O por molécula. Fórmula molecular: C2H6O (M = 46).\n\n**4) Isômeros:** C2H6O pode ser etanol (CH3–CH2–OH, líquido nas CNTP) ou metoximetano (CH3–O–CH3, gás). Como a substância é um gás, é o éter dimetílico.",
      "alternativas": [
        "Errada. Não tem oxigênio (a massa de C e H na amostra, 15 g, é menor que os 23 g) e M = 30 g/mol daria densidade de 1,34 g/dm³ nas CNTP.",
        "Errada. Tem a fórmula certa (C2H6O), mas é líquido nas CNTP (ponto de ebulição 78 °C), e o enunciado diz que a substância é um gás.",
        "Correta. É o isômero de C2H6O que é gás nas CNTP (ponto de ebulição −24 °C).",
        "Errada. C2H4O, M = 44 g/mol: não explica os 27 g de água (H demais) nem a densidade de 2,05 g/dm³ (daria 1,96).",
        "Errada. Não tem oxigênio e M = 44 g/mol (densidade de 1,96 g/dm³); queimar 23 g daria cerca de 69 g de CO2."
      ],
      "dica": "Fórmula molecular não basta: isômeros de função têm propriedades físicas diferentes. Aqui, o estado físico (gás) desempata álcool e éter."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 3ª IChO (1970), problema 1",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1206",
    "materia": "quimica",
    "assunto": "Equilíbrio químico",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1970,
      "orgao": "prova teórica (Budapeste), problema 3, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 3ª IChO, Budapeste, 1970, problema 3. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Monóxido de carbono foi misturado com vapor de água em volume 1,5 vez maior que o de CO. Estabelecido o equilíbrio CO + H2O ⇌ CO2 + H2, 80% do CO inicial estava convertido em CO2. Qual é a composição da mistura gasosa em equilíbrio, em porcentagem em volume?",
    "alternativas": [
      "CO 10%, H2O 10%, CO2 40%, H2 40%",
      "CO 8%, H2O 28%, CO2 32%, H2 32%",
      "CO 10,2%, H2O 22,9%, CO2 64,0%, H2 2,9%",
      "CO 0%, H2O 20%, CO2 40%, H2 40%",
      "CO 28%, H2O 8%, CO2 32%, H2 32%"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Com 1 mol de CO e 1,5 mol de H2O, a conversão de 80% dá no equilíbrio 0,2 CO, 0,7 H2O, 0,8 CO2 e 0,8 H2 (total 2,5 mol): 8%, 28%, 32% e 32% em volume.",
      "detalhada": "A resolução segue a solução oficial do problema 3 (3ª IChO).\n\n**1) Base de cálculo:** 1 mol de CO e 1,5 mol de H2O (1,5 vez o volume de CO).\n\n**2) Reação:** CO + H2O ⇌ CO2 + H2. Convertendo 80% do CO: reagem 0,8 mol de CO e 0,8 mol de H2O, formando 0,8 mol de CO2 e 0,8 mol de H2.\n\n**3) Equilíbrio:** CO 0,2 mol; H2O 1,5 − 0,8 = 0,7 mol; CO2 0,8 mol; H2 0,8 mol. Total: 2,5 mol (não muda: 2 mol de gás → 2 mol de gás).\n\n**4) Porcentagem em volume** (= em mols, para gases ideais): CO 0,2/2,5 = 8%; H2O 0,7/2,5 = 28%; CO2 e H2 0,8/2,5 = 32% cada.\n\nNa solução oficial a resposta também é dada em porcentagem em massa (CO 10,2%; H2O 22,9%; CO2 64,0%; H2 2,9%); aqui a pergunta é por volume.",
      "alternativas": [
        "Errada. Supõe 1 mol de vapor para 1 mol de CO (proporção 1:1) e esquece o excesso de água do enunciado (1,5 mol).",
        "Correta. Base de 1 mol de CO e 1,5 mol de H2O: no equilíbrio, 0,2 mol de CO, 0,7 mol de H2O, 0,8 mol de CO2 e 0,8 mol de H2, total 2,5 mol → 8%, 28%, 32% e 32%.",
        "Errada. São as porcentagens em massa (a pergunta é por volume). Em gases, o percentual em volume é igual ao percentual em mols.",
        "Errada. Supõe conversão total do CO em vez de 80%.",
        "Errada. Troca CO e H2O. Sobra mais água (0,7 mol, o reagente em excesso) do que CO (0,2 mol)."
      ],
      "dica": "Leia o que a pergunta pede: porcentagem em volume (mols) não é porcentagem em massa. E lembre que o reagente em excesso permanece na mistura."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 3ª IChO (1970), problema 3",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1207",
    "materia": "quimica",
    "assunto": "Reações orgânicas",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1972,
      "orgao": "prova teórica (Moscou), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 4ª IChO, Moscou, 1972, problema 5. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Um hidrocarboneto desconhecido reage com bromo e forma um único produto (monobromado). O vapor desse produto é 5,207 vezes mais denso que o ar (massa molar média do ar: 29 g/mol). Qual é o hidrocarboneto?",
    "alternativas": [
      "Pentano",
      "2-Metilbutano",
      "Ciclopentano, C5H10",
      "2,2-Dimetilbutano",
      "2,2-Dimetilpropano (neopentano)"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "M(RBr) = 29 × 5,207 = 151, então RH é C5H12 (72 g/mol); dos três isômeros, só o 2,2-dimetilpropano tem todos os H equivalentes e dá um único produto.",
      "detalhada": "A resolução segue a solução oficial do problema 5 (4ª IChO).\n\n**1) Massa molar:** M(RBr) = 29 × 5,207 ≈ 151 g/mol. O derivado é monobromado (um dibromo-derivado pesaria mais de 160 g/mol). Logo M(RH) = 151 − 80 + 1 = 72 g/mol, que corresponde a C5H12.\n\n**2) Isômeros de C5H12:** pentano (3 monobromo-derivados), 2-metilbutano (4) e 2,2-dimetilpropano (1).\n\n**3) \"Só um produto\":** exige que todos os átomos de H sejam equivalentes. No 2,2-dimetilpropano, C(CH3)4, os 12 H são equivalentes: o único produto é o 1-bromo-2,2-dimetilpropano.",
      "alternativas": [
        "Errada. Tem a massa certa (C5H12 → C5H11Br, 151 g/mol), mas forma três monobromo-derivados (1-, 2- e 3-bromopentano), não um só.",
        "Errada. Também é C5H12, mas tem quatro tipos de hidrogênio diferentes e dá quatro monobromo-derivados.",
        "Errada. Dá um único produto (bromociclopentano), mas M(C5H9Br) = 149 g/mol, densidade relativa ao ar de 5,14, e não 5,207.",
        "Errada. É C6H14: o monobromo-derivado teria 165 g/mol (densidade relativa 5,69) e vários isômeros.",
        "Correta. C5H12 com os 12 hidrogênios equivalentes (4 grupos CH3 ligados ao C central): só um monobromo-derivado é possível."
      ],
      "dica": "Um só produto monossubstituído significa um só tipo de hidrogênio na molécula. Procure a estrutura mais simétrica."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 4ª IChO (1972), problema 5",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1208",
    "materia": "quimica",
    "assunto": "Funções orgânicas",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1972,
      "orgao": "prova teórica (Moscou), problema 6, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 4ª IChO, Moscou, 1972, problema 6. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Um ácido orgânico D contém 35,82% de carbono, 4,48% de hidrogênio e o restante de oxigênio (em massa). Para neutralizar 2,68 g de D gastam-se 20 cm³ de solução de KOH 2 mol/dm³. D é obtido por hidrólise (fervura com água) do ácido bromossuccínico, formado pela adição de HBr ao ácido maleico. Qual é D?",
    "alternativas": [
      "Ácido málico (2-hidroxibutanodioico)",
      "Ácido tartárico (2,3-di-hidroxibutanodioico)",
      "Ácido succínico (butanodioico)",
      "Ácido cítrico",
      "Ácido fumárico (trans-butenodioico)"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "A razão C:H:O é 4:6:5 (C4H6O5, 134 g/mol); a titulação dá 67 g por mol de OH⁻, então M = 134 e o composto é diácido. É o ácido málico.",
      "detalhada": "A resolução segue a solução oficial do problema 6 (4ª IChO), que identifica D como o ácido málico.\n\n**1) Fórmula mínima:** C : H : O = 35,82/12 : 4,48/1 : 59,70/16 = 2,985 : 4,48 : 3,73 ≈ 4 : 6 : 5. A fórmula mínima é C4H6O5 (134 g/mol).\n\n**2) Titulação:** 20 cm³ × 2 mol/dm³ = 40 mmol de OH⁻ para 2,68 g, ou seja, 67 g de D por mol de OH⁻. Para ν grupos ácidos, M = 67 ν g/mol. A única opção que é múltiplo da fórmula mínima é ν = 2 (M = 134 g/mol): D é um diácido com fórmula molecular C4H6O5.\n\n**3) Estrutura:** HBr adiciona-se à dupla do ácido maleico formando o ácido bromossuccínico, HOOC–CH2–CHBr–COOH; a fervura com água troca Br por OH: HOOC–CH2–CH(OH)–COOH, o ácido málico (ácido 2-hidroxibutanodioico).",
      "alternativas": [
        "Correta. C4H6O5 (134 g/mol), diácido com um grupo –OH: HOOC–CH2–CH(OH)–COOH. É o produto da troca do Br por OH.",
        "Errada. C4H6O6, M = 150 g/mol e 32,0% de C; não bate com 35,82% de C.",
        "Errada. C4H6O4, M = 118 g/mol e 40,7% de C. Além disso, a troca do Br por H não é hidrólise.",
        "Errada. C6H8O7, M = 192 g/mol e 37,5% de C; é um triácido e não se forma a partir do ácido maleico.",
        "Errada. C4H4O4, M = 116 g/mol e 41,4% de C; mantém a ligação dupla e não tem oxigênio extra."
      ],
      "dica": "Fórmula mínima + titulação: a titulação diz quantos H⁺ ácidos por molécula (e, portanto, a massa molar real)."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 4ª IChO (1972), problema 6",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1209",
    "materia": "quimica",
    "assunto": "Reações orgânicas",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1973,
      "orgao": "prova teórica (Sófia), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 5ª IChO, Sófia, 1973, problema 1. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Na nitração de um derivado hidroxilado do benzeno forma-se um composto com 49,0% de oxigênio em massa. Para reduzir eletroquimicamente 0,458 g desse composto, com eficiência de corrente de 80%, são necessários 4350 C. O produto da redução é um derivado amino-hidroxilado aromático (cada grupo –NO2 vira –NH2: R–NO2 + 6 H⁺ + 6 e⁻ → R–NH2 + 2 H2O). Constante de Faraday: 96 500 C/mol. Qual é o composto?",
    "alternativas": [
      "4-Nitrofenol",
      "2,4,6-Trinitrofenol (ácido pícrico)",
      "2,4-Dinitrofenol",
      "2-Metil-4,6-dinitrofenol (4,6-dinitro-o-cresol)",
      "2,4,6-Trinitrorresorcinol (ácido estífnico)"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "A carga efetiva (4350 × 0,80 = 3480 C) dá M = 76,2 z g/mol (z = nº de –NO2); com 49,0% de O só z = 3 serve (M = 229, 7 O): 2,4,6-trinitrofenol.",
      "detalhada": "A resolução segue a solução oficial do problema 1 (5ª IChO).\n\n**1) Elétrons usados:** carga efetiva = 4350 C × 0,80 = 3480 C; n(e⁻) = 3480/96 500 = 0,03606 mol. Massa equivalente: 0,458 g / 0,03606 mol = 12,7 g por mol de e⁻.\n\n**2) Massa molar em função de z:** cada grupo –NO2 gasta 6 e⁻, então M = 12,7 × 6 z = 76,2 z g/mol (z = número de grupos nitro).\n\n**3) Oxigênio:** se há y átomos de O, 16 y / M = 0,49, ou seja, M = 32,7 y.\n\n**4) Teste de z:** z = 1 → M = 76 (y = 2,3, impossível); z = 2 → M = 152 (y = 4,7, impossível); z = 3 → M = 229 (y = 7,0, inteiro); z = 4 → M = 305 (y = 9,3, impossível). Com z = 3 e y = 7, o composto é C6H2(OH)(NO2)3, o 2,4,6-trinitrofenol (ácido pícrico): 7 × 16 / 229 = 48,9% de O.",
      "alternativas": [
        "Errada. C6H5NO3, 139 g/mol: apenas 34,5% de oxigênio.",
        "Correta. C6H3N3O7, 229 g/mol, 48,9% de O (7 × 16 / 229), e três grupos –NO2 consomem 18 mol de elétrons por mol: 0,458 g (0,0020 mol) → 3,47×10³ C efetivos, o que exige 4,34×10³ C fornecidos com eficiência de 80% (≈ 4350 C).",
        "Errada. C6H4N2O5, 184 g/mol: 43,5% de oxigênio.",
        "Errada. C7H6N2O5, 198 g/mol: 40,4% de oxigênio.",
        "Errada. C6H3N3O8, 245 g/mol: 52,2% de oxigênio."
      ],
      "dica": "Quando a fórmula não é dada, teste valores inteiros possíveis para o número de grupos (aqui z de 1 a 4) e veja qual deixa todos os índices inteiros."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 5ª IChO (1973), problema 1",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1210",
    "materia": "quimica",
    "assunto": "Equilíbrio químico",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1973,
      "orgao": "prova teórica (Sófia), problema 3, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 5ª IChO, Sófia, 1973, problema 3. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Misturaram-se volumes iguais (10 cm³) de soluções 0,01 mol/dm³ de CH3COOH e de HClO, e a mistura foi diluída a 100 cm³. As constantes de ionização valem Ka(CH3COOH) = 1,8×10⁻⁵ e Ka(HClO) = 3,7×10⁻⁸. Qual é o pH da solução final?",
    "alternativas": [
      "2,0",
      "3,0",
      "3,9",
      "4,7",
      "6,1"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "Diluídos, cada ácido fica 1×10⁻³ mol/dm³. O acético (muito mais forte) fornece quase todo o H3O⁺: α = 0,125, [H3O⁺] = 1,25×10⁻⁴ mol/dm³, pH ≈ 3,9.",
      "detalhada": "A resolução segue a solução oficial do problema 3 (5ª IChO).\n\n**1) Concentrações após a diluição:** 10 cm³ × 0,01 mol/dm³ em 100 cm³ → c = 1×10⁻³ mol/dm³ para cada ácido.\n\n**2) Qual ácido manda:** Ka1 = 1,8×10⁻⁵ é cerca de 500 vezes maior que Ka2 = 3,7×10⁻⁸; logo o H3O⁺ vem quase todo do acético e [H3O⁺] ≈ [CH3COO⁻].\n\n**3) Grau de ionização do acético:** Ka = c α²/(1 − α) → c α² + Ka α − Ka = 0 → 10⁻³ α² + 1,8×10⁻⁵ α − 1,8×10⁻⁵ = 0 → α = 0,125 (12,5%). Como α é grande, a aproximação [H⁺] = √(Ka c) só dá resultado aproximado (e aqui a diferença é pequena).\n\n**4) HClO:** α₂ = 2,9×10⁻⁴; contribui com ≈ 3×10⁻⁷ mol/dm³ de H3O⁺, desprezível.\n\n**5) pH:** [H3O⁺] = (0,125 + 0,0003) × 10⁻³ ≈ 1,25×10⁻⁴ mol/dm³; pH = −log(1,25×10⁻⁴) = 3,9.",
      "alternativas": [
        "Errada. Trata a solução como 0,01 mol/dm³ de ácido forte e esquece a diluição (cada ácido está em 1×10⁻³ mol/dm³) e a ionização parcial.",
        "Errada. Trata o ácido acético como forte (ionização total) em 1×10⁻³ mol/dm³. Na verdade, só cerca de 12,5% está ionizado.",
        "Correta. O ácido acético domina (Ka 500 vezes maior): α ≈ 0,125, [H3O⁺] ≈ 1,25×10⁻⁴ mol/dm³; o HClO contribui só com α ≈ 3×10⁻⁴.",
        "Errada. É o pKa do ácido acético (pH de uma solução com [CH3COOH] = [CH3COO⁻]), situação que não existe aqui: não há acetato adicionado.",
        "Errada. É a média dos dois pKa ((4,74 + 7,43)/2); essa média não tem significado para uma mistura de dois ácidos fracos."
      ],
      "dica": "Em mistura de ácidos fracos de Ka muito diferentes, o mais forte decide o pH; o outro só entra como correção."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 5ª IChO (1973), problema 3",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1211",
    "materia": "quimica",
    "assunto": "Reações orgânicas",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1974,
      "orgao": "prova teórica (Bucareste), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 6ª IChO, Bucareste, 1974, problema 1. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Na eletrólise da água, com eletrodos de platina, o circuito tem uma resistência externa de 0,5 Ω em série com a célula e uma bateria de 10 pilhas ligadas em série, cada uma de 1,5 V e resistência interna de 0,4 Ω; a tensão de polarização da célula é 1,5 V (a resistência da célula é desprezível). A corrente passa por 8 h 56 min 7 s. O hidrogênio obtido reage com nitrogênio (N2 + 3 H2 → 2 NH3, síntese de Haber), formando o gás A (NH3), que por oxidação com O2, via NO, dá o ácido B (HNO3). Com B nitra-se o benzeno (produto C, nitrobenzeno), e a redução de C com hidrogênio nascente (6 H⁺ + 6 e⁻) dá D, que a 180 °C com H2SO4 concentrado forma o ácido sulfanílico. Qual é a massa de D obtida? (F = 96 500 C/mol; M(D) = 93 g/mol)",
    "alternativas": [
      "31 g",
      "34 g",
      "47 g",
      "62 g",
      "93 g"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "I = 3 A; 96 500 C = 1 mol de e⁻ = 0,5 mol de H2. N2 + 3 H2 → 2 NH3 dá 1/3 mol de NH3; cada etapa seguinte é 1:1 (HNO3, nitrobenzeno, anilina): 1/3 mol × 93 g/mol = 31 g.",
      "detalhada": "A resolução segue a solução oficial do problema 1 (6ª IChO), que dá m(D) = 31 g de anilina.\n\n**1) Corrente:** I = (10 × 1,5 V − 1,5 V) / (0,5 Ω + 10 × 0,4 Ω) = 13,5/4,5 = 3,0 A.\n\n**2) Carga e H2:** t = 8 h 56 min 7 s = 32 167 s; Q = 3,0 × 32 167 = 96 500 C = 1 mol de e⁻. Como 2 H⁺ + 2 e⁻ → H2, n(H2) = 0,5 mol (1 g).\n\n**3) Cadeia:** N2 + 3 H2 → 2 NH3 (A): 0,5 mol de H2 → 1/3 mol de NH3. 4 NH3 + 5 O2 → 4 NO + 6 H2O; 2 NO + O2 → 2 NO2; 3 NO2 + H2O → 2 HNO3 + NO (ou 4 NO2 + O2 + 2 H2O → 4 HNO3): 1/3 mol de HNO3 (B). C6H6 + HNO3 → C6H5NO2 (C) + H2O: 1/3 mol. C6H5NO2 + 6 [H] → C6H5NH2 (D, anilina) + 2 H2O: 1/3 mol.\n\n**4) Massa:** 1/3 mol × 93 g/mol = 31 g de anilina. D é a anilina porque, aquecida com H2SO4 concentrado a 180 °C, dá o ácido sulfanílico (4-aminobenzenossulfônico).",
      "alternativas": [
        "Correta. 3 A × 32 167 s = 96 500 C = 1 mol de e⁻ → 0,5 mol de H2 → 1/3 mol de NH3 → 1/3 mol de HNO3 → 1/3 mol de nitrobenzeno → 1/3 mol de anilina = 31 g.",
        "Errada. Esquece a tensão de polarização de 1,5 V: com I = 15/4,5 = 3,33 A a carga seria 107 000 C e a massa, 34 g.",
        "Errada. Supõe 1 mol de NH3 para cada mol de H2 (0,5 mol de anilina). Mas N2 + 3 H2 → 2 NH3: cada mol de H2 rende só 2/3 mol de NH3.",
        "Errada. Trata 1 g de H2 como 1 mol (em vez de 0,5 mol).",
        "Errada. Supõe 1 mol de anilina por mol de elétrons transferidos na eletrólise."
      ],
      "dica": "Em cadeias longas de reações, acompanhe só os coeficientes que mudam o número de mols (aqui, os 3 H2 : 2 NH3 do começo); as demais etapas são 1:1."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 6ª IChO (1974), problema 1",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1212",
    "materia": "quimica",
    "assunto": "Nomenclatura orgânica",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1974,
      "orgao": "prova teórica (Bucareste), problema 2, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 6ª IChO, Bucareste, 1974, problema 2. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Um ácido carboxílico A contém 48,6% de carbono, 8,10% de hidrogênio e 43,3% de oxigênio (em massa). Ele reage com óxido de prata recém-preparado formando um sal de prata insolúvel; 0,74 g de A dão 1,81 g do sal (RCOOAg). (Massas atômicas: H = 1; C = 12; O = 16; Ag = 108.) Qual é o ácido A?",
    "alternativas": [
      "Ácido fórmico (metanoico)",
      "Ácido acético (etanoico)",
      "Ácido butanoico",
      "Ácido propanoico",
      "Ácido pentanoico"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "C : H : O = 1 : 2 : 0,67 → (C3H6O2)n; no sal de prata a massa aumenta 107 g por mol de ácido, então n(A) = 0,0100 mol e M = 74 g/mol: C3H6O2, o ácido propanoico.",
      "detalhada": "A resolução segue a solução oficial do problema 2 (6ª IChO).\n\n**1) Fórmula mínima:** C : H : O = 48,6/12 : 8,10/1 : 43,3/16 = 4,05 : 8,10 : 2,71 = 1,5 : 3 : 1 = 3 : 6 : 2. Fórmula mínima C3H6O2 (74 g/mol).\n\n**2) Massa molar pelo sal de prata:** RCOOH + AgOH → RCOOAg + H2O. A cada mol de ácido, a massa aumenta de M(Ag) − M(H) = 107 g. Aumento observado: 1,81 − 0,74 = 1,07 g → n(A) = 1,07/107 = 0,0100 mol → M = 0,74/0,0100 = 74 g/mol.\n\n**3) Conclusão:** M = 74 g/mol = fórmula mínima, logo a fórmula molecular é C3H6O2. Sendo ácido carboxílico: CH3–CH2–COOH, o ácido propanoico (propiônico).",
      "alternativas": [
        "Errada. CH2O2, M = 46 g/mol, com 26,1% de C.",
        "Errada. C2H4O2, M = 60 g/mol, com 40,0% de C; 0,74 g formariam 2,06 g de sal de prata, não 1,81 g.",
        "Errada. C4H8O2, M = 88 g/mol, com 54,5% de C; 0,74 g formariam 1,64 g de sal.",
        "Correta. C3H6O2 (M = 74 g/mol, 48,6% de C): RCOOH → RCOOAg aumenta 107 g por mol; 1,81 − 0,74 = 1,07 g → 0,0100 mol; 0,74 g/0,0100 mol = 74 g/mol.",
        "Errada. C5H10O2, M = 102 g/mol, com 58,8% de C."
      ],
      "dica": "Troca de H por Ag em ácido carboxílico: a massa sobe 107 g por mol. É um jeito rápido de achar a massa molar."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 6ª IChO (1974), problema 2",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1213",
    "materia": "quimica",
    "assunto": "Polímeros",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1975,
      "orgao": "prova teórica (Veszprém), problema 7, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 7ª IChO, Veszprém, 1975, problema 7. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Um hidrocarboneto saturado A é oxidado cataliticamente e forma, em parte, um álcool secundário B e, em parte, uma cetona C. A cetona C, oxidada com ácido nítrico na presença de catalisador, dá um composto D de fórmula C6H10O4, uma das matérias-primas da fibra sintética de policondensação náilon. D, aquecido com anidrido acético, forma uma cetona E, com liberação de CO2 e H2O; E tem um grupo metileno (–CH2–) a menos que C. Qual é o hidrocarboneto A?",
    "alternativas": [
      "Cicloexano",
      "Ciclopentano",
      "Hexano",
      "Metilciclopentano",
      "Benzeno"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "D, C6H10O4, é o ácido adípico (HOOC–(CH2)4–COOH, monômero do náilon-6,6); vem da oxidação da cicloexanona (C), que vem do cicloexano (A).",
      "detalhada": "A resolução segue a solução oficial do problema 7 (7ª IChO).\n\n**1) D:** C6H10O4 = C4H8(COOH)2 = HOOC–(CH2)4–COOH, ácido hexanodioico (adípico), um dos monômeros do náilon-6,6 (o outro é a hexano-1,6-diamina).\n\n**2) C:** a oxidação nítrica de uma cetona cíclica abre o anel e forma um diácido de mesmo número de carbonos. Para dar um diácido de 6 C, C é a cicloexanona.\n\n**3) B e A:** B, álcool secundário do mesmo esqueleto, é o cicloexanol; o hidrocarboneto saturado de que partem é o cicloexano (A).\n\n**4) E:** o ácido adípico, aquecido com anidrido acético, forma uma cetona cíclica com perda de CO2 e H2O: a ciclopentanona (um CH2 a menos que a cicloexanona), pois em HOOC–(CH2)n–COOH com n = 2 ou 3 forma-se anidrido cíclico, e com n ≥ 4 forma-se cetona cíclica (regra de Blanc).",
      "alternativas": [
        "Correta. Cicloexano → cicloexanol (B) e cicloexanona (C); a oxidação abre o anel e forma o ácido hexanodioico (adípico, D); este, com anidrido acético, perde CO2 e H2O e forma a ciclopentanona (E, um CH2 a menos).",
        "Errada. Daria ciclopentanona e depois ácido pentanodioico (glutárico, C5H8O4), não C6H10O4.",
        "Errada. Hexano é de cadeia aberta e não tem o anel que a sequência exige: a cetona C tem de ser a cicloexanona (cíclica), para que a oxidação nítrica dê um diácido linear de 6 C (adípico) e a descarboxilação com anidrido acético dê uma cetona cíclica com um CH2 a menos.",
        "Errada. A cetona seria um anel de 5 membros com grupo metila; sua oxidação daria diácido ramificado (não o ácido adípico do náilon).",
        "Errada. Não é hidrocarboneto saturado e sua oxidação catalítica não leva a cetona C."
      ],
      "dica": "Reconheça o monômero: C6H10O4 em fibra de poliamida é o ácido adípico. A partir dele, volte pelas oxidações: cetona cíclica, álcool, hidrocarboneto."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 7ª IChO (1975), problema 7",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1214",
    "materia": "quimica",
    "assunto": "Equilíbrio químico",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1975,
      "orgao": "prova teórica (Veszprém), problema 6, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 7ª IChO, Veszprém, 1975, problema 6. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "A constante de equilíbrio da reação H2 + I2 ⇌ 2 HI é 70,0 a 600 °C. Hidrogênio e iodo são misturados em proporção molar 1:1 a 600 °C. Que porcentagem do iodo é convertida em HI quando se atinge o equilíbrio?",
    "alternativas": [
      "50%",
      "81%",
      "89%",
      "95%",
      "99%"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Para α de conversão: [H2] = [I2] = c(1 − α) e [HI] = 2αc, K = 4α²/(1 − α)² = 70, então 2α/(1 − α) = 8,37 e α = 0,807 ≈ 81%.",
      "detalhada": "A resolução segue a solução oficial do problema 6 (7ª IChO).\n\n**1) Tabela de equilíbrio** (c = concentração inicial de cada gás, α = fração de iodo convertida): [H2] = [I2] = c(1 − α); [HI] = 2αc.\n\n**2) Constante:** K = [HI]²/([H2][I2]) = (2αc)²/(c(1 − α))² = 4α²/(1 − α)² = 70.\n\n**3) Resolução:** tirando a raiz, 2α/(1 − α) = √70 = 8,367 → 2α = 8,367 − 8,367α → α = 8,367/10,367 = 0,807.\n\n**4) Resultado:** cerca de 81% do iodo se converte. (Como Δn = 0, K não depende do volume nem da pressão.)",
      "alternativas": [
        "Errada. Metade, sem usar K. Com K = 70 o equilíbrio favorece fortemente os produtos; 50% corresponderia a K = 4.",
        "Correta. K = 4α²/(1 − α)² = 70 → 2α/(1 − α) = √70 = 8,37 → α = 8,37/10,37 = 0,807.",
        "Errada. Esquece que se formam 2 mol de HI: usa K = α²/(1 − α)² → α/(1 − α) = 8,37 → 0,893.",
        "Errada. É o resultado para a mistura com H2 em excesso (2 mol de H2 : 1 mol de I2), caso em que a conversão do iodo é 95,1%.",
        "Errada. Trata a reação como A ⇌ B (K/(1 + K) = 70/71). A estequiometria 1 : 1 : 2 muda a relação entre K e a conversão."
      ],
      "dica": "Em H2 + I2 ⇌ 2 HI o número de mols não muda e o volume cancela; a raiz quadrada de K simplifica a conta."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 7ª IChO (1975), problema 6",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1215",
    "materia": "quimica",
    "assunto": "Bioquímica",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1976,
      "orgao": "prova teórica (Halle), problema 4, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 8ª IChO, Halle, 1976, problema 4. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Quatro substâncias naturais têm as estruturas A: H2N–CH2–COOH; B: CH3–CH(NH2)–COOH; C: H2N–CH2–CH2–COOH; D: C6H5–CH2–CH(NH2)–COOH. Quais delas são opticamente ativas?",
    "alternativas": [
      "Apenas A",
      "A e C",
      "A, B e D",
      "B e D",
      "A, B, C e D"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "Só B (alanina) e D (fenilalanina) têm carbono ligado a quatro grupos diferentes (H, NH2, COOH e outra cadeia). A (glicina) e C (β-alanina) são inativas.",
      "detalhada": "A resolução segue a solução oficial do problema 4 (8ª IChO), cuja resposta é \"A e C inativos; B e D ativos\".\n\n**Critério:** uma molécula orgânica com um único centro estereogênico é opticamente ativa; esse centro é um carbono ligado a quatro grupos diferentes.\n\n- **A (glicina, ácido aminoetanoico):** o C-2 tem dois H: não é quiral.\n- **B (alanina, ácido 2-aminopropanoico):** o C-2 liga H, NH2, COOH e CH3: quiral.\n- **C (β-alanina, ácido 3-aminopropanoico):** os dois carbonos são CH2: não há centro quiral.\n- **D (fenilalanina, ácido 2-amino-3-fenilpropanoico):** o C-2 liga H, NH2, COOH e CH2C6H5: quiral.\n\nPor isso B e D são opticamente ativas e A e C são inativas.",
      "alternativas": [
        "Errada. A (glicina) é a que não é quiral: o C central tem dois átomos de H.",
        "Errada. Nenhuma dessas duas tem carbono assimétrico (A: dois H no C-2; C: os dois carbonos da cadeia são CH2).",
        "Errada. A glicina (A) é inativa; seu C-2 tem dois hidrogênios iguais.",
        "Correta. Em B e D o C-2 liga quatro grupos diferentes (H, NH2, COOH e CH3 ou CH2C6H5): carbono assimétrico, logo enantiômeros e atividade óptica.",
        "Errada. Esquece que A e C não têm carbono assimétrico."
      ],
      "dica": "Procure o carbono com quatro grupos diferentes. Se há CH2 ou dois grupos iguais no carbono, ele não é estereogênico."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 8ª IChO (1976), problema 4",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1216",
    "materia": "quimica",
    "assunto": "Eletroquímica",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1976,
      "orgao": "prova teórica (Halle), problema 7, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 8ª IChO, Halle, 1976, problema 7. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Na bateria de chumbo, a reação global na descarga é PbO2 + Pb + 2 H2SO4 → 2 PbSO4 + 2 H2O. Uma bateria tem capacidade de 120 Ah. Use F = 26,8 Ah/mol e M(H2SO4) = 98 g/mol. Que massa de H2SO4 é consumida na descarga completa dessa bateria?",
    "alternativas": [
      "81 g",
      "98 g",
      "196 g",
      "219 g",
      "439 g"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "n(e⁻) = 120/26,8 = 4,48 mol; na reação, 2 mol de H2SO4 são consumidos por 2 mol de e⁻ (1:1), logo 4,48 mol × 98 g/mol = 439 g.",
      "detalhada": "A resolução segue a solução oficial do problema 7 (8ª IChO), que dá 438,8 g de H2SO4 (e 80,6 g de H2O formada).\n\n**1) Carga:** 120 Ah ÷ 26,8 Ah/mol = 4,478 mol de elétrons.\n\n**2) Semirreações** (descarga): Pb + SO4²⁻ → PbSO4 + 2 e⁻ e PbO2 + SO4²⁻ + 4 H⁺ + 2 e⁻ → PbSO4 + 2 H2O. Somando, 2 mol de e⁻ transferidos consomem 2 mol de H2SO4: proporção 1 mol de H2SO4 por mol de e⁻.\n\n**3) Massa:** 4,478 mol × 98 g/mol = 438,8 g ≈ 439 g de H2SO4 consumidos (e 4,478 × 18 = 80,6 g de água formados).\n\nPor isso a densidade do eletrólito cai na descarga: o ácido sai da solução (vira PbSO4) e entra água.",
      "alternativas": [
        "Errada. É a massa de água formada (4,48 mol × 18 g/mol), não a de ácido consumida.",
        "Errada. É a massa de 1 mol de H2SO4: esquece de usar a capacidade de 120 Ah (4,48 mol de elétrons).",
        "Errada. É a massa de 2 mol de H2SO4 da equação, sem relacionar com a carga da bateria.",
        "Errada. Metade do valor correto: divide o consumo por 2, como se a equação consumisse 1 mol de H2SO4 para cada 2 mol de elétrons.",
        "Correta. 120 Ah ÷ 26,8 Ah/mol = 4,48 mol de e⁻; a equação consome 2 mol de H2SO4 para cada 2 mol de e⁻ (1:1): 4,48 mol × 98 g/mol = 439 g."
      ],
      "dica": "Em acumulador de chumbo, cada mol de elétrons consome 1 mol de H2SO4 (2 mol de ácido na equação balanceada para 2 mol de e⁻)."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 8ª IChO (1976), problema 7",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1217",
    "materia": "quimica",
    "assunto": "Isomeria",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1977,
      "orgao": "prova teórica (Bratislava), problema 4b, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 9ª IChO, Bratislava, 1977, problema 4b. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Um éster opticamente ativo, de fórmula C6H12O2 (11,6 g), foi hidrolisado por aquecimento com excesso de NaOH aquoso. Terminada a hidrólise, a mistura alcalina foi extraída várias vezes com éter; a solução aquosa não era opticamente ativa. Do extrato etéreo (seco e destilado) obtiveram-se 7,4 g (rendimento de 100%) de um líquido que ferve a 100 °C. Qual é o éster?",
    "alternativas": [
      "CH3–COO–CH2–CH2–CH2–CH3 (acetato de butila)",
      "CH3–CH2–COO–CH(CH3)–CH3 (propanoato de propan-2-ila)",
      "CH3–COO–CH(CH3)–CH2–CH3 (acetato de butan-2-ila)",
      "CH3–CH2–CH(CH3)–COO–CH3 (2-metilbutanoato de metila)",
      "CH3–COO–CH2–CH(CH3)–CH3 (acetato de 2-metilpropila)"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "11,6 g = 0,10 mol de éster; 7,4 g = 0,10 mol de álcool C4H10O (74 g/mol), de ebulição 100 °C: butan-2-ol. A fase aquosa inativa indica que o acetato é o ânion: acetato de butan-2-ila.",
      "detalhada": "A resolução segue a solução oficial do problema 4b (9ª IChO).\n\n**1) Mols:** M(C6H12O2) = 116 g/mol → 11,6 g = 0,10 mol. O líquido destilado (7,4 g, 100%) tem, portanto, M = 74 g/mol: um álcool C4H10O (ponto de ebulição 100 °C → butan-2-ol, 99,5 °C; butan-1-ol ferve a 117 °C e o 2-metilpropan-1-ol a 108 °C).\n\n**2) Parte do ácido:** C6H12O2 − C4H10O + H2O = C2H4O2, ácido acético (etanoico). Fica na água como acetato de sódio, que é inativo.\n\n**3) Atividade óptica:** o éster é ativo e a fase aquosa (acetato) não, então o carbono quiral está no álcool: CH3–CH(OH)–CH2–CH3 (butan-2-ol, centro quiral no C-2). O éster é CH3–COO–CH(CH3)–CH2–CH3.\n\nNo problema original há ainda o caso complementar (fase aquosa ativa): seria o 2-metilbutanoato de metila, CH3CH2CH(CH3)COOCH3.",
      "alternativas": [
        "Errada. Não tem carbono quiral (inativo); o álcool formado seria o butan-1-ol, de ponto de ebulição 117 °C.",
        "Errada. Também não tem carbono quiral; o álcool seria propan-2-ol (M = 60, ebulição 82 °C), e 0,10 mol dariam 6,0 g, não 7,4 g.",
        "Correta. O carbono quiral está na parte do álcool: dá acetato (sal inativo na fase aquosa) e butan-2-ol (74 g/mol, 0,10 mol = 7,4 g, ponto de ebulição ≈ 99,5 °C).",
        "Errada. É quiral, mas o centro quiral fica na parte do ácido: o 2-metilbutanoato de sódio ficaria na água e a solução aquosa seria opticamente ativa; além disso, o destilado seria metanol (3,2 g; ebulição 65 °C).",
        "Errada. Dá 0,10 mol de 2-metilpropan-1-ol (7,4 g), mas esse álcool ferve a 108 °C e o éster não tem carbono quiral."
      ],
      "dica": "Hidrólise de éster alcalina: o ácido fica como sal na fase aquosa e o álcool sai na fase orgânica. Onde está a atividade óptica indica de qual lado está o carbono quiral."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 9ª IChO (1977), problema 4b",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1218",
    "materia": "quimica",
    "assunto": "Eletroquímica",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1977,
      "orgao": "prova teórica (Bratislava), problema 7, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 9ª IChO, Bratislava, 1977, problema 7. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "A fotossíntese pode ser resumida por 6 CO2(g) + 6 H2O(l) → C6H12O6(s) + 6 O2(g), com ΔH = 2,816×10⁶ J/mol e ΔS = −182 J/(K·mol) a 25 °C. Imagine uma pilha em que ocorra, em eletrodos seletivos, a reação inversa: redução de O2 a água (O2 + 4 H⁺ + 4 e⁻ → 2 H2O) e oxidação da glicose a CO2. Qual seria a força eletromotriz (fem) dessa pilha? (F = 96 487 C/mol; T = 298 K)",
    "alternativas": [
      "1,22 V",
      "1,24 V",
      "2,48 V",
      "7,4 V",
      "29,7 V"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "ΔG = ΔH − TΔS = 2,87×10⁶ J/mol (fotossíntese); a pilha é a reação inversa (ΔG = −2,87×10⁶ J). Com n = 24 e⁻, E = −ΔG/(nF) = 1,24 V.",
      "detalhada": "A resolução segue a solução oficial do problema 7 (9ª IChO). Nota: o texto da coletânea escreve o produto como \"C6H12\"; a equação correta, usada na solução, é a da glicose, C6H12O6.\n\n**1) ΔG da fotossíntese:** ΔG = ΔH − TΔS = 2,816×10⁶ − 298 × (−182) = 2,816×10⁶ + 5,4×10⁴ = 2,870×10⁶ J/mol. A reação inversa (a pilha) tem ΔG = −2,87×10⁶ J/mol.\n\n**2) Elétrons:** para 6 O2 reduzidos (4 e⁻ cada) e 1 glicose oxidada, n = 6 × 4 = 24 e⁻.\n\n**3) fem:** −ΔG = nFE → E = 2,87×10⁶ / (24 × 96 487) = 1,24 V.\n\nNo mesmo problema pede-se ainda quantos mols de fótons de 500 nm (≈ 12 mol) a fotossíntese absorve por mol de reação, mas esta questão trata só da fem.",
      "alternativas": [
        "Errada. Usa ΔH no lugar de ΔG (ΔG = ΔH − TΔS inclui o termo de entropia, 54 kJ/mol a mais).",
        "Correta. ΔG da pilha = −(2,816×10⁶ + 298 × 182) = −2,87×10⁶ J/mol; n = 24 e⁻; E = 2,87×10⁶ / (24 × 96 487) = 1,24 V.",
        "Errada. Usa n = 12 em vez de 24 elétrons (6 O2 × 4 e⁻ por O2).",
        "Errada. Usa n = 4 (um só O2 reduzido) para a reação completa com 6 O2.",
        "Errada. Usa n = 1."
      ],
      "dica": "Para fem, use ΔG (não ΔH) e conte os elétrons trocados na equação inteira (aqui 24), não só os de uma semirreação."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 9ª IChO (1977), problema 7",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1219",
    "materia": "quimica",
    "assunto": "Reações orgânicas",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1978,
      "orgao": "prova teórica (Toruń), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 10ª IChO, Toruń, 1978, problema 5. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Um líquido orgânico X, presente no alcatrão de hulha, ao ser queimado (1,06 g) forma 0,90 g de água e 3,52 g de CO2; seu vapor é 3,79 vezes mais denso que o nitrogênio. X é oxidado por CrO3 + H2SO4 a um ácido cristalino incolor A, solúvel em NaOH e em NaHCO3. Aquecido, A perde água e forma B. B, condensado com fenol em presença de H2SO4 ou ZnCl2, dá Y, muito usado como indicador ácido-base. Qual é a fórmula molecular de X e qual é o indicador Y?",
    "alternativas": [
      "C8H10 (etilbenzeno); Y = fenolftaleína",
      "C8H10 (o-xileno); Y = fenolftaleína",
      "C8H10 (p-xileno); Y = fenolftaleína",
      "C8H10 (o-xileno); Y = alaranjado de metila",
      "C4H5 (fórmula mínima); Y = fenolftaleína"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "n(C) = 0,08 mol e n(H) = 0,10 mol dão C4H5; M = 3,79 × 28 = 106 g/mol → C8H10. O ácido que perde água (anidrido) vem do o-xileno; o anidrido ftálico + fenol dá fenolftaleína.",
      "detalhada": "A resolução segue a solução oficial do problema 5 (10ª IChO).\n\n**1) Fórmula mínima:** n(C) = 3,52/44 = 0,080 mol (0,96 g); n(H) = 2 × 0,90/18 = 0,10 mol (0,10 g). A soma das massas é 1,06 g, então só há C e H. C : H = 8 : 10 = 4 : 5 → C4H5.\n\n**2) Fórmula molecular:** M = 3,79 × 28 ≈ 106 g/mol → (C4H5)₂ = C8H10 (aromático).\n\n**3) Qual isômero:** A é ácido; ao ser aquecido perde água e forma B. Isso só ocorre com um diácido carboxílico de grupos vizinhos (anidrido cíclico): ácido ftálico → anidrido ftálico. Então X é o o-xileno (1,2-dimetilbenzeno): CH3 → COOH em cada posição.\n\n**4) Y:** anidrido ftálico + 2 fenol (H2SO4 ou ZnCl2) → fenolftaleína, indicador ácido-base incolor em meio ácido e rosa-avermelhado em meio básico.",
      "alternativas": [
        "Errada. A fórmula está certa, mas o etilbenzeno é oxidado a ácido benzoico, que não perde água por aquecimento (não forma anidrido cíclico).",
        "Correta. O o-xileno é oxidado a ácido ftálico (A), que perde água e forma anidrido ftálico (B); com 2 fenol dá fenolftaleína (incolor em meio ácido, rosa-avermelhada em meio básico).",
        "Errada. O p-xileno é oxidado a ácido tereftálico, cujos grupos –COOH estão longe demais para formar anidrido cíclico por aquecimento.",
        "Errada. O alaranjado de metila é um corante azo (ácido sulfanílico diazotado + N,N-dimetilanilina), não vem do anidrido ftálico com fenol.",
        "Errada. C4H5 é a fórmula mínima (53 g/mol); com M = 3,79 × 28 ≈ 106 g/mol a fórmula molecular é o dobro, C8H10."
      ],
      "dica": "Fórmula mínima, depois massa molar da densidade relativa, depois decida o isômero pelas propriedades dos produtos (aqui, perda de água = anidrido = grupos vizinhos)."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 10ª IChO (1978), problema 5",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1220",
    "materia": "quimica",
    "assunto": "Equilíbrio químico",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1978,
      "orgao": "prova teórica (Toruń), problema 4, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 10ª IChO, Toruń, 1978, problema 4. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Um recipiente de 5,0 dm³ foi cheio com etano e aquecido. A 1000 K a pressão total medida é 500,7 kPa, enquanto a pressão calculada pela lei dos gases ideais, supondo que não ocorra reação, seria 337,4 kPa. A diferença se deve à decomposição térmica C2H6(g) ⇌ C2H4(g) + H2(g). Considerando que, com grau de decomposição α, a quantidade de matéria passa a n(1 + α), qual é o valor de Kp dessa reação a 1000 K?",
    "alternativas": [
      "0,484 (sem unidade)",
      "103 kPa",
      "117 kPa",
      "153 kPa",
      "163 kPa"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "α = (p − p′)/p′ = 0,484; p(C2H4) = p(H2) = αp/(1 + α) = 163,3 kPa e p(C2H6) = 174,1 kPa, então Kp = 163,3²/174,1 ≈ 153 kPa.",
      "detalhada": "A resolução segue a solução oficial do problema 4 (10ª IChO), que chega a Kp = 153 kPa a 1000 K. Os dados 337,4 kPa e 500,7 kPa são os da solução oficial (a solução oficial usa 337,412 e 500,748 kPa).\n\n**1) Grau de decomposição:** de n mols de etano formam-se nα mols de C2H4 e nα mols de H2, restando n(1 − α). Total: n(1 + α). Como p′ = nRT/V (sem reação) e p = n(1 + α)RT/V, p/p′ = 1 + α → α = (500,7 − 337,4)/337,4 = 0,484.\n\n**2) Pressões parciais** (fração em mols × p): p(C2H4) = p(H2) = α/(1 + α) × 500,7 = 163,3 kPa; p(C2H6) = (1 − α)/(1 + α) × 500,7 = 174,1 kPa.\n\n**3) Constante:** Kp = p(C2H4) p(H2)/p(C2H6) = 163,3²/174,1 ≈ 153 kPa. Forma geral: Kp = α²p/(1 − α²).\n\nA reação é endotérmica e aumenta o número de mols: a conversão aumenta com a temperatura e diminui com a pressão (princípio de Le Chatelier).",
      "alternativas": [
        "Errada. É o grau de decomposição α = (p − p′)/p′ = 163,3/337,4, não a constante de equilíbrio.",
        "Errada. Usa a pressão de 337,4 kPa (sem reação) em Kp = α²p/(1 − α²); a pressão total do equilíbrio é 500,7 kPa.",
        "Errada. Esquece o denominador: α² × p = 0,234 × 500,7; falta dividir por (1 − α²).",
        "Correta. p(C2H4) = p(H2) = α p/(1 + α) = 163,3 kPa e p(C2H6) = (1 − α)p/(1 + α) = 174,1 kPa; Kp = 163,3²/174,1 = 153 kPa.",
        "Errada. É a pressão parcial de cada produto (C2H4 ou H2), não a constante."
      ],
      "dica": "Quando o número de mols muda na reação, a pressão total muda e dá o grau de reação direto: p/p′ = 1 + α. Depois é só montar Kp com pressões parciais."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 10ª IChO (1978), problema 4",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1221",
    "materia": "quimica",
    "assunto": "Isomeria",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1979,
      "orgao": "prova teórica (Leningrado), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 11ª IChO, Leningrado, 1979, problema 5. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Um derivado do benzeno, X, tem fórmula mínima C9H12. Sua bromação na presença de luz forma dois monobromo-derivados em rendimentos aproximadamente iguais. Sua bromação no escuro, na presença de ferro, também dá dois monobromo-derivados, e, se a reação prossegue, podem se formar quatro dibromo-derivados. Qual é X?",
    "alternativas": [
      "Propilbenzeno",
      "1-Etil-2-metilbenzeno",
      "1-Etil-4-metilbenzeno",
      "1,3,5-Trimetilbenzeno",
      "1-Etil-3-metilbenzeno"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "Luz → substituição na cadeia lateral (carbono benzílico): 2 produtos exigem CH3 e CH2; Fe → substituição no anel: 2 produtos exigem 2 posições diferentes. Só o 1-etil-4-metilbenzeno (p-etiltolueno) satisfaz ambos.",
      "detalhada": "A resolução segue a solução oficial do problema 5 (11ª IChO).\n\n**1) Candidatos com C9H12:** propilbenzeno, etilmetilbenzenos (orto, meta, para) e trimetilbenzenos.\n\n**2) Regra:** com luz, o Br2 faz substituição radicalar na cadeia lateral, de preferência no carbono ligado ao anel (benzílico). Com ferro (FeBr3 como catalisador), faz substituição eletrofílica no anel.\n\n**3) Luz → dois produtos:** é preciso ter dois carbonos benzílicos diferentes. Isso exclui o propilbenzeno (um benzílico principal) e o 1,3,5-trimetilbenzeno (três CH3 iguais, um produto só).\n\n**4) Ferro → dois produtos:** o anel deve ter só dois tipos de H. Isso exclui os isômeros orto e meta (quatro tipos de H no anel) e deixa o para: no 1-etil-4-metilbenzeno há duas posições (as vizinhas ao CH3 e as vizinhas ao etil).\n\n**5) Dibromo-derivados:** no p-etiltolueno há quatro possibilidades no anel, de acordo com o enunciado. X = 1-etil-4-metilbenzeno (p-etiltolueno).",
      "alternativas": [
        "Errada. No escuro, com Fe, o anel monossubstituído daria três monobromo-derivados (orto, meta e para), não dois.",
        "Errada. O anel tem quatro posições livres diferentes: no escuro formaria quatro monobromo-derivados.",
        "Correta. Na luz, a bromação ocorre nos carbonos benzílicos (CH3 e CH2 do etil): dois produtos. No escuro, o anel tem duas posições distintas (ao lado do CH3 e ao lado do etil): dois produtos, e quatro dibromo-derivados.",
        "Errada. Os três CH3 são equivalentes e os três H do anel também: só um monobromo-derivado em cada condição.",
        "Errada. O anel tem quatro posições livres diferentes: no escuro formaria quatro monobromo-derivados."
      ],
      "dica": "Contar produtos de substituição é contar tipos de hidrogênio: simetria da molécula dita o número de monossubstituídos."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 11ª IChO (1979), problema 5",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1222",
    "materia": "quimica",
    "assunto": "Funções orgânicas",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1979,
      "orgao": "prova teórica (Leningrado), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 11ª IChO, Leningrado, 1979, problema 1. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Qual destes ácidos orgânicos é o mais forte (maior constante de ionização em água)?",
    "alternativas": [
      "Ácido benzoico",
      "Ácido 4-metilbenzoico",
      "Ácido 4-bromobenzoico",
      "Ácido 4-nitrobenzoico",
      "Ácido 2-clorobenzoico"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "Substituinte retirador de elétrons (Cl) perto do grupo –COOH estabiliza o ânion benzoato e aumenta a acidez; doadores (CH3, NH2) a diminuem. O orto-cloro é o que mais acidifica.",
      "detalhada": "A resolução segue a solução oficial do problema 1 (11ª IChO), item 12, cuja resposta é o ácido 2-clorobenzoico.\n\n**Raciocínio:** a força de um ácido carboxílico depende da estabilidade do ânion carboxilato formado. Substituintes que retiram elétrons (efeito indutivo, como Cl e Br; e por ressonância, como NO2 em para) estabilizam o ânion e aumentam Ka; quanto mais perto do grupo –COOH, mais forte o efeito. Substituintes doadores (CH3) desestabilizam o ânion e diminuem Ka.\n\n**Comparação (pKa aproximados em água, 25 °C):** 2-clorobenzoico ≈ 2,9 < 4-nitrobenzoico ≈ 3,4 < 4-bromobenzoico ≈ 4,0 < benzoico ≈ 4,2 < 4-metilbenzoico ≈ 4,4. O menor pKa é o do ácido mais forte: o 2-clorobenzoico.",
      "alternativas": [
        "Errada. É a referência (pKa ≈ 4,2); outros dos listados têm substituintes que podem aumentar ou diminuir a acidez em relação a ele.",
        "Errada. O grupo CH3 é doador de elétrons e desestabiliza o ânion benzoato: ácido mais fraco que o benzoico (pKa ≈ 4,4).",
        "Errada. O Br em para retira elétrons e aumenta um pouco a acidez (pKa ≈ 4,0), mas bem menos que um Cl na posição orto.",
        "Errada. O –NO2 em para é retirador de elétrons (indutivo e por ressonância) e torna o ácido mais forte que o benzoico (pKa ≈ 3,4), mas menos que o Cl em orto (pKa ≈ 2,9): a proximidade do Cl ao –COOH potencializa o efeito.",
        "Correta. O Cl retira elétrons por efeito indutivo e, na posição orto, estabiliza o ânion benzoato mais que qualquer outro substituinte da lista (pKa ≈ 2,9)."
      ],
      "dica": "Retirador de elétrons perto do –COOH = ácido mais forte; doador de elétrons = ácido mais fraco. A proximidade (orto) potencializa o efeito."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 11ª IChO (1979), problema 1",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1223",
    "materia": "quimica",
    "assunto": "Reações orgânicas",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1980,
      "orgao": "prova teórica (Linz), problema 6, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 12ª IChO, Linz, 1980, problema 6. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Benzaldeído e ácido malônico (HOOC–CH2–COOH) reagem em piridina a 80 °C produzindo, entre outros, CO2 e um composto A, com rendimento de cerca de 80%. A hidrogenação catalítica de 1,48 g de A sobre Pt, à temperatura ambiente (25 °C) e pressão normal, consome 0,25 dm³ de H2 e forma B. Qual é A?",
    "alternativas": [
      "Ácido benzoico",
      "Ácido fenilacético (ácido 2-feniletanoico)",
      "Ácido 3-fenilpropanoico",
      "Ácido mandélico",
      "Ácido cinâmico (ácido 3-fenilprop-2-enoico)"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "A condensação de Knoevenagel–Doebner dá o ácido cinâmico, C6H5–CH=CH–COOH (148 g/mol): 1,48 g = 0,0100 mol absorve 1 H2 (0,0100 mol ≈ 0,245 dm³), concordando com os 0,25 dm³.",
      "detalhada": "A resolução segue a solução oficial do problema 6 (12ª IChO), que identifica A como o ácido cinâmico.\n\n**1) Reação:** benzaldeído + ácido malônico, em piridina (com base fraca), sofre condensação aldólica seguida de desidratação e descarboxilação (perde CO2): C6H5–CHO + CH2(COOH)2 → C6H5–CH=CH–COOH + CO2 + H2O.\n\n**2) Conferência com o dado de H2:** M(A) = 148 g/mol; 1,48 g = 0,0100 mol. Uma ligação dupla C=C consome 1 mol de H2 por mol de A: 0,0100 mol de H2, que a 25 °C e 1 atm ocupam 0,0100 × 24,5 = 0,245 dm³ (≈ 0,25 dm³ do enunciado).\n\n**3) B:** a hidrogenação da dupla forma C6H5–CH2–CH2–COOH (ácido 3-fenilpropanoico), que, em ácido polifosfórico, cicliza por acilação de Friedel–Crafts em 1-indanona (C).",
      "alternativas": [
        "Errada. Não tem ligação dupla C=C e não consome H2; além disso, M = 122 g/mol e não se forma na condensação com ácido malônico.",
        "Errada. M = 136 g/mol e não há ligação dupla para hidrogenar.",
        "Errada. É o produto B (saturado, 150 g/mol): não consome H2.",
        "Errada. C8H8O3, 152 g/mol, sem ligação dupla C=C; não se forma por condensação do benzaldeído com ácido malônico.",
        "Correta. A condensação de Knoevenagel–Doebner (com perda de CO2) forma C6H5–CH=CH–COOH, 148 g/mol; 1,48 g = 0,0100 mol absorve 0,0100 mol de H2 (≈ 0,245 dm³ a 25 °C), formando o ácido 3-fenilpropanoico (B)."
      ],
      "dica": "Se o produto absorve 1 mol de H2 por mol, há uma ligação dupla (C=C) a hidrogenar; use a massa para conferir a massa molar."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 12ª IChO (1980), problema 6",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1224",
    "materia": "quimica",
    "assunto": "Funções inorgânicas",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1980,
      "orgao": "prova teórica (Linz), problema 3, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 12ª IChO, Linz, 1980, problema 3. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Um sólido cristalino branco A tem as seguintes propriedades: (1) dá chama amarela intensa; (2) sua solução aquosa é neutra; (3) com KI e H2SO4 diluído forma solução marrom-escura (I2), descorada por tiossulfato; (4) a solução, descorada com excesso de H2SO3 e acidificada com HNO3, dá com AgNO3 um precipitado amarelo insolúvel em NH3 e solúvel em CN⁻ ou S2O3²⁻; (5) 0,1000 g de A, dissolvidos com 0,5 g de KI e H2SO4 diluído, formam I2 que consome 37,40 cm³ de Na2S2O3 0,1000 mol/dm³ (I2 + 2 S2O3²⁻ → 2 I⁻ + S4O6²⁻). Qual é A? (M: NaI = 149,9; NaIO = 165,9; NaIO3 = 197,9; NaIO4 = 213,9; KIO4 = 230,0 g/mol)",
    "alternativas": [
      "NaIO4",
      "NaIO3",
      "NaIO",
      "NaI",
      "KIO4"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "Na (chama amarela) + iodo (AgI amarelo) + solução neutra oxidante: iodato ou periodato de sódio. A titulação distingue: NaIO4 consome 8 S2O3²⁻ por mol (3,740 mmol em 0,1000 g), NaIO3 só 6 (3,03 mmol).",
      "detalhada": "A resolução segue a solução oficial do problema 3 (12ª IChO).\n\n**1) Elementos:** chama amarela → Na; precipitado amarelo, insolúvel em NH3 mas solúvel em CN⁻ ou S2O3²⁻ → AgI. A contém Na e I.\n\n**2) Tipo de sal:** a solução é neutra e A oxida I⁻ a I2 em meio ácido (cor marrom): é um sal de ácido oxigenado do iodo com iodo em estado de oxidação alto, NaIO3 ou NaIO4 (o NaIO daria solução alcalina).\n\n**3) Titulação (5):** n(S2O3²⁻) = 0,1000 mol/dm³ × 0,03740 dm³ = 3,740×10⁻³ mol.\n- NaIO3: IO3⁻ + 5 I⁻ + 6 H⁺ → 3 I2 + 3 H2O; 1 mol de IO3⁻ → 3 mol de I2 → 6 mol de S2O3²⁻: 0,1000/197,9 × 6 = 3,03×10⁻³ mol (não confere).\n- NaIO4: IO4⁻ + 7 I⁻ + 8 H⁺ → 4 I2 + 4 H2O; 1 mol → 8 mol de S2O3²⁻: 0,1000/213,9 × 8 = 3,74×10⁻³ mol (confere).\n\nA é o periodato de sódio, NaIO4.",
      "alternativas": [
        "Correta. IO4⁻ + 7 I⁻ + 8 H⁺ → 4 I2 + 4 H2O: 1 mol de NaIO4 consome 8 mol de S2O3²⁻; 0,1000 g/213,9 g/mol × 8 = 3,740 mmol, exatamente os 37,40 cm³ × 0,1000 mol/dm³.",
        "Errada. IO3⁻ + 5 I⁻ + 6 H⁺ → 3 I2 + 3 H2O: 1 mol de NaIO3 consome 6 mol de S2O3²⁻; 0,1000 g daria 3,03 mmol, não 3,74 mmol.",
        "Errada. O hipoiodito é fortemente básico em água (a solução não seria neutra) e 0,1000 g consumiriam apenas 1,21 mmol de S2O3²⁻.",
        "Errada. O iodeto não oxida I⁻ a I2 em meio ácido (é redutor): não haveria solução marrom com KI e H2SO4.",
        "Errada. Dá chama violeta (K), não amarela, e 0,1000 g consumiriam só 3,48 mmol de S2O3²⁻."
      ],
      "dica": "Conte quantos mols de tiossulfato cada mol de oxidante consome (6 para iodato, 8 para periodato): a razão massa/consumo decide."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 12ª IChO (1980), problema 3",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1225",
    "materia": "quimica",
    "assunto": "Bioquímica",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1981,
      "orgao": "prova teórica (Burgas), problema 3, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 13ª IChO, Burgas, 1981, problema 3. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Um composto X foi isolado de um produto neutro e estudado com os seguintes dados: (I) 1,98 g de X produzem 1478,4 cm³ de CO2 (CNTP) e 1,188 g de H2O; (II) X forma fenilidrazona; (III) 0,189 g de X reagem com 21,0 cm³ de NaIO 0,05 mol/dm³ (o hipoiodito oxida um grupo –CHO por mol de NaIO); (IV) X + KCN, depois hidrólise (H2O/OH⁻) e redução com HI formam o ácido heptanoico (n-heptanoico); (V) tratado com anidrido acético, X forma E, cuja massa molar é 116,67% maior que a de X (cada –OH vira –O–CO–CH3, o que acrescenta 42 g/mol). Qual é X?",
    "alternativas": [
      "Sacarose",
      "D-Ribose",
      "D-Frutose",
      "D-Glicose",
      "mio-Inositol"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "A combustão dá fórmula mínima CH2O; 0,189 g consomem 1,05 mmol de NaIO (1 por –CHO), então M = 180 g/mol (C6H12O6). Acetilação +116,67% → 5 –OH; HI → heptanoico linear → cadeia de 6 C. É uma aldo-hexose: D-glicose.",
      "detalhada": "A resolução segue a solução oficial do problema 3 (13ª IChO), que identifica X como a D-(+)-glicose.\n\n**I) Fórmula mínima:** n(CO2) = 1,4784/22,414 = 0,0660 mol (0,792 g de C); n(H2O) = 1,188/18 = 0,0660 mol (0,133 g de H); O = 1,98 − 0,792 − 0,133 = 1,055 g = 0,0660 mol. C : H : O = 1 : 2 : 1 → CH2O.\n\n**II) Carbonila:** a fenilidrazona mostra um grupo C=O.\n\n**III) –CHO:** 21,0 cm³ × 0,05 mol/dm³ = 1,05 mmol de NaIO consomem 0,189 g: M = 0,189/1,05×10⁻³ = 180 g/mol por grupo –CHO. Com a fórmula mínima, M = 180 → C6H12O6, com um –CHO.\n\n**IV) Cadeia:** adição de HCN (cianoidrina), hidrólise e redução com HI dão o ácido heptanoico, de cadeia linear: a cadeia de X tem 6 C contínuos.\n\n**V) –OH:** E tem 180 × 2,1667 = 390 g/mol, ou seja, 210 g/mol a mais = 5 × 42. Há 5 grupos –OH.\n\n**Conclusão:** aldo-hexose linear com 5 –OH: HOCH2–(CHOH)4–CHO, a D-glicose.",
      "alternativas": [
        "Errada. C12H22O11 (342 g/mol) não tem fórmula mínima CH2O, e não é um aldeído livre (é um dissacarídeo não redutor).",
        "Errada. C5H10O5 tem fórmula mínima CH2O, mas M = 150 g/mol: 0,189 g consumiriam 1,26 mmol de NaIO (não 1,05 mmol), e o ciclo com KCN/HI daria ácido hexanoico, não heptanoico.",
        "Errada. É uma cetose (C6H12O6, 180 g/mol): não tem –CHO para o NaIO oxidar; e a adição de HCN ao C=O de cetona, seguida de hidrólise e redução com HI, daria um ácido heptanoico ramificado (2-metil-hexanoico), não o n-heptanoico.",
        "Correta. É a aldo-hexose C6H12O6 (180 g/mol) com um –CHO e 5 –OH, cadeia linear de 6 carbonos: acetilada dá a pentaacetil-glicose (390 g/mol, +116,67%).",
        "Errada. Tem a mesma fórmula, C6H12O6, mas é cíclico, sem grupo carbonila (não forma fenilidrazona nem consome NaIO) e tem 6 –OH."
      ],
      "dica": "Cada dado diz uma coisa: CH2O (fórmula mínima), –CHO (NaIO, fenilidrazona), M = 180, 5 –OH (acetilação), 6 C em cadeia (HI)."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 13ª IChO (1981), problema 3",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1226",
    "materia": "quimica",
    "assunto": "Cinética química",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1981,
      "orgao": "prova teórica (Burgas), problema 6, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 13ª IChO, Burgas, 1981, problema 6. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "A decomposição catalítica do propan-2-ol (C3H7OH) sobre V2O5, a 590 K, segue cinética de primeira ordem e forma acetona (C3H6O), propeno (C3H6) e propano (C3H8). Cinco segundos após o início da reação, as concentrações são: C3H7OH, 28,2 mmol/dm³; C3H6O, 7,8 mmol/dm³; C3H6, 8,3 mmol/dm³; C3H8, 1,8 mmol/dm³. Qual é o tempo de meia-vida do propan-2-ol (tempo para sua concentração cair a c0/2)?",
    "alternativas": [
      "3,5 s",
      "5,0 s",
      "7,05 s",
      "14,1 s",
      "16,2 s"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "c0 é a soma das concentrações (cada molécula de álcool origina uma de produto): 46,1 mmol/dm³. k = ln(46,1/28,2)/5 s = 0,0983 s⁻¹ e t1/2 = ln 2/k = 7,05 s.",
      "detalhada": "A resolução segue a solução oficial do problema 6 (13ª IChO), que dá t1/2 = 7,05 s.\n\n**1) Concentração inicial:** cada molécula de propan-2-ol decomposta origina uma de produto (acetona, propeno ou propano). Logo c0 = 28,2 + 7,8 + 8,3 + 1,8 = 46,1 mmol/dm³.\n\n**2) Constante de velocidade global (1ª ordem):** ln(c0/c) = k t → k = ln(46,1/28,2)/5 s = 0,4916/5 = 0,0983 s⁻¹.\n\n**3) Meia-vida:** t1/2 = ln 2/k = 0,693/0,0983 = 7,05 s.\n\nA solução oficial calcula ainda as constantes de cada via: k(acetona) = 0,0428 s⁻¹; k(propeno) = 0,0456 s⁻¹; k(propano) = 0,0099 s⁻¹ (somam 0,0983 s⁻¹, proporcionais às quantidades formadas).",
      "alternativas": [
        "Errada. É a metade do valor correto (divide o tempo por 2 uma vez a mais).",
        "Errada. É o tempo decorrido até a medida, não o tempo para cair à metade (em 5 s o álcool só caiu de 46,1 para 28,2 mmol/dm³).",
        "Correta. c0 = 28,2 + 7,8 + 8,3 + 1,8 = 46,1 mmol/dm³; k = ln(46,1/28,2)/5 = 0,0983 s⁻¹; t1/2 = ln 2/k = 7,05 s.",
        "Errada. É o dobro do valor correto (duas meias-vidas).",
        "Errada. Usa log10 no lugar do logaritmo natural para calcular k (0,0427 s⁻¹) e depois t1/2 = ln 2/k."
      ],
      "dica": "Em reação de 1ª ordem com várias vias paralelas, o consumo do reagente segue uma única constante (soma das constantes); a concentração inicial é a soma de reagente + produtos."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 13ª IChO (1981), problema 6",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1227",
    "materia": "quimica",
    "assunto": "Funções orgânicas",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1982,
      "orgao": "prova teórica (Estocolmo), problema 2, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 14ª IChO, Estocolmo, 1982, problema 2. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Um líquido orgânico C, contendo só carbono, hidrogênio e oxigênio, foi analisado. A combustão de 0,04079 g do líquido forma 0,03357 g de água e 0,08155 g de CO2. Para estimar a massa molar, gaseificou-se 1,0045 g da substância, que ocupou 0,95 dm³ a 350 K e 35,0 kPa. Aquecendo C com solução de NaOH formam-se duas substâncias: uma é obtida por destilação fracionada; a outra, após acidificação e destilação, é um ácido. Dissolveram-se 0,1005 g desse ácido em água e a titulação com NaOH 0,1000 mol/dm³ gastou 16,75 cm³. Qual é C?",
    "alternativas": [
      "Propanoato de metila",
      "Metanoato de propila",
      "Metanoato de propan-2-ila",
      "Ácido butanoico",
      "Etanoato de etila (acetato de etila)"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "A análise dá C2H4O (54,56% C, 9,21% H, 36,23% O); a massa molar do gás dá 88 g/mol → C4H8O2. O ácido titulado tem M = 60 g/mol (ácido acético), então C é o etanoato de etila.",
      "detalhada": "A resolução segue a solução oficial do problema 2 (14ª IChO).\n\n**1) Composição:** massa da amostra = 0,61227 − 0,57148 = 0,04079 g; m(H2O) = 0,03357 g (0,003756 g de H); m(CO2) = 0,08155 g (0,02225 g de C). Percentuais: C 54,56%; H 9,21%; O 36,23%. Fórmula mínima: C2H4O.\n\n**2) Massa molar:** n = pV/RT = 35,0×10³ Pa × 0,95×10⁻³ m³ / (8,314 × 350) = 0,01143 mol; M = 1,0045/0,01143 = 87,9 g/mol ≈ 88. Fórmula molecular: C4H8O2.\n\n**3) Hidrólise alcalina:** C produz dois compostos, um ácido (após acidificar) e outro destilável: é um éster de C4H8O2.\n\n**4) Ácido:** n(NaOH) = 0,1000 × 0,01675 = 1,675×10⁻³ mol; ácido monoprótico: M = 0,1005/1,675×10⁻³ = 60,0 g/mol → ácido acético. O éster é, pois, o acetato de etila: CH3–COO–CH2–CH3 (o álcool formado é o etanol).",
      "alternativas": [
        "Errada. C4H8O2 (88 g/mol), mas daria ácido propanoico (74 g/mol): 0,1005 g gastariam 13,6 cm³ de NaOH, não 16,75 cm³.",
        "Errada. C4H8O2, mas daria ácido fórmico (46 g/mol): 0,1005 g gastariam 21,8 cm³ de NaOH.",
        "Errada. Dá ácido fórmico (46 g/mol), não um de 60 g/mol (gastaria 21,8 cm³ na titulação).",
        "Errada. É isômero (C4H8O2), mas não é éster: com NaOH daria um só produto (o butanoato) e não \"duas substâncias\", uma delas destilável.",
        "Correta. C4H8O2 (88 g/mol) que se hidrolisa a etanol (destilado) e ácido acético: M(ácido) = 0,1005 g/(0,1000 × 0,01675 mol) = 60,0 g/mol."
      ],
      "dica": "Hidrólise de éster: ácido + álcool. A titulação do ácido isolado dá a massa molar dele, o que restringe o éster entre os isômeros C4H8O2."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 14ª IChO (1982), problema 2",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1228",
    "materia": "quimica",
    "assunto": "Equilíbrio químico",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1982,
      "orgao": "prova teórica (Estocolmo), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 14ª IChO, Estocolmo, 1982, problema 1. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Uma solução de 1,00 dm³ está saturada de iodeto de chumbo(II), PbI2. A concentração de íons iodeto é 2,7×10⁻³ mol/dm³. Qual é o produto de solubilidade do PbI2?",
    "alternativas": [
      "3,6×10⁻⁶",
      "2,0×10⁻⁸",
      "9,8×10⁻⁹",
      "2,5×10⁻⁹",
      "4,9×10⁻⁹"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "PbI2 ⇌ Pb²⁺ + 2 I⁻: [Pb²⁺] = [I⁻]/2 = 1,35×10⁻³ mol/dm³ e Ks = [Pb²⁺][I⁻]² = 1,35×10⁻³ × (2,7×10⁻³)² = 9,8×10⁻⁹.",
      "detalhada": "A resolução segue a solução oficial do problema 1 (14ª IChO), item G, cuja resposta é 9,8×10⁻⁹. Nota: no texto da coletânea o valor aparece como \"2,7 mol dm⁻³\"; a resposta oficial só resulta com 2,7×10⁻³ mol/dm³ (2,7 mol/dm³ seria impossível para um sal tão pouco solúvel), valor usado aqui.\n\n**1) Equilíbrio:** PbI2(s) ⇌ Pb²⁺(aq) + 2 I⁻(aq); Ks = [Pb²⁺][I⁻]².\n\n**2) Concentração do chumbo:** a estequiometria 1 : 2 dá [Pb²⁺] = [I⁻]/2 = 2,7×10⁻³/2 = 1,35×10⁻³ mol/dm³.\n\n**3) Ks:** 1,35×10⁻³ × (2,7×10⁻³)² = 1,35×10⁻³ × 7,29×10⁻⁶ = 9,8×10⁻⁹.",
      "alternativas": [
        "Errada. Usa Ks = [Pb²⁺][I⁻] (sem elevar o iodeto ao quadrado): 1,35×10⁻³ × 2,7×10⁻³.",
        "Errada. Supõe [Pb²⁺] = [I⁻] = 2,7×10⁻³ e eleva ao cubo.",
        "Correta. [Pb²⁺] = [I⁻]/2 = 1,35×10⁻³ mol/dm³; Ks = [Pb²⁺][I⁻]² = 1,35×10⁻³ × (2,7×10⁻³)² = 9,8×10⁻⁹.",
        "Errada. Usa [Pb²⁺] = [I⁻] = 1,35×10⁻³ (esquece que o iodeto é o dobro do chumbo) e eleva ao cubo.",
        "Errada. Calcula [Pb²⁺] = [I⁻]/4, aplicando duas vezes a divisão por 2."
      ],
      "dica": "Em Ks, o coeficiente vira expoente: [I⁻]² para PbI2. E a concentração de cada íon segue a proporção da fórmula."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 14ª IChO (1982), problema 1",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1229",
    "materia": "quimica",
    "assunto": "Reações orgânicas",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1983,
      "orgao": "prova teórica (Timișoara), problema 6, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 15ª IChO, Timișoara, 1983, problema 6. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Um mol de etanal (A) reage, em meio aquoso e na presença de catalisador básico (Ca(OH)2), com três mols de metanal (B) por condensações aldólicas sucessivas: em cada etapa, o metanal se adiciona ao carbono α do composto formado na etapa anterior (A + B → C; C + B → D; D + B → E). A hidrogenação de E forma F, de composição 44,12% C, 8,82% H e 47,06% O, com massa molar de 136 g/mol. Além disso, 13,6 g de F reagem com 40,8 g de anidrido acético formando G e ácido acético. Qual é F?",
    "alternativas": [
      "C(CH2OH)4 (pentaeritritol; 2,2-bis(hidroximetil)propano-1,3-diol)",
      "HOCH2–CH(OH)–CH(OH)–CH(OH)–CH3 (pentano-1,2,3,4-tetrol)",
      "CH3–C(CH2OH)3 (2-(hidroximetil)-2-metilpropano-1,3-diol)",
      "HO–(CH2)5–OH (pentano-1,5-diol)",
      "HOCH2–(CHOH)3–CH2OH (pentano-1,2,3,4,5-pentol)"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "F = C5H12O4 (136 g/mol), tetraol (0,1 mol reage com 0,4 mol de anidrido acético). O etanal tem 3 H α, que fazem 3 adições aldólicas ao metanal e formam E = (HOCH2)3C–CHO; a hidrogenação dá C(CH2OH)4.",
      "detalhada": "A resolução segue a solução oficial do problema 6 (15ª IChO).\n\n**1) Fórmula de F:** C : H : O = 44,12/12 : 8,82/1 : 47,06/16 = 3,68 : 8,82 : 2,94 = 5 : 12 : 4 → C5H12O4 (136 g/mol = massa molar dada).\n\n**2) Número de –OH:** 13,6 g = 0,100 mol de F reagem com 40,8 g/102 g·mol⁻¹ = 0,400 mol de anidrido acético. São 4 mol de anidrido por mol de F: 4 grupos –OH (tetraol). G é o tetraacetato.\n\n**3) Via de síntese:** condensação aldólica do etanal (A), que tem 3 H α, com metanal (B), sem H α. Em cada etapa, o metanal se adiciona ao carbono α do composto formado antes:\n- A + B → HOCH2–CH2–CHO (C)\n- C + B → (HOCH2)2CH–CHO (D)\n- D + B → (HOCH2)3C–CHO (E; não tem mais H α)\n\n**4) F:** E + H2 → C(CH2OH)4 (pentaeritritol); com anidrido acético, forma C(CH2OCOCH3)4 (G) + 4 CH3COOH.",
      "alternativas": [
        "Correta. A condensação aldólica de 3 HCHO nos 3 H α do etanal leva a E = (HOCH2)3C–CHO; a hidrogenação do –CHO dá C(CH2OH)4 (C5H12O4, 136 g/mol, 4 –OH).",
        "Errada. Tem a mesma fórmula (C5H12O4), mas não pode vir de aldóis sucessivos de etanal com metanal: o carbono quaternário de E (sem H α) é resultado das três condensações no mesmo carbono.",
        "Errada. C5H12O3: M = 120 g/mol e apenas 3 grupos –OH; não bate com 136 g/mol nem com 4 acetilações.",
        "Errada. C5H12O2: M = 104 g/mol e 2 grupos –OH; 13,6 g reagiriam com apenas 26,7 g de anidrido acético.",
        "Errada. C5H12O5: M = 152 g/mol e 5 grupos –OH (52,6% de O, não 47,0%)."
      ],
      "dica": "Aldeído com 3 H α + metanal (sem H α) em meio básico: reação em cadeia de adições aldólicas no mesmo carbono α; depois reduza o –CHO."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 15ª IChO (1983), problema 6",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1230",
    "materia": "quimica",
    "assunto": "Equilíbrio químico",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1983,
      "orgao": "prova teórica (Timișoara), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 15ª IChO, Timișoara, 1983, problema 5. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Passando etanol sobre um catalisador a 400 K ocorre a desidratação C2H5OH(g) ⇌ C2H4(g) + H2O(g). Sob pressão total de 101,325 kPa (p°), a conversão do etanol no equilíbrio é 90,6% em mols. Qual será a conversão a 400 K sob pressão total de 10 p°?",
    "alternativas": [
      "31%",
      "40%",
      "56%",
      "69%",
      "91%"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "Kp = x²/(1 − x²) · p/p° = 0,906²/(1 − 0,906²) = 4,58. A 10 p°, x²/(1 − x²) = 4,58/10 = 0,458 → x = 0,56 (56%).",
      "detalhada": "A resolução segue a solução oficial do problema 5 (15ª IChO), que dá x = 0,56 a 10 p°.\n\n**1) Quantidade de matéria:** começando com 1 mol de etanol e conversão x: no equilíbrio há 1 − x de C2H5OH, x de C2H4 e x de H2O; total 1 + x.\n\n**2) Constante:** Kp = [p(C2H4) p(H2O)]/p(C2H5OH) · (1/p°) = [x/(1+x) · x/(1+x)]/[(1−x)/(1+x)] · (p/p°) = x²/(1 − x²) · (p/p°).\n\n**3) Kp a 400 K:** com p = p° e x = 0,906: Kp = 0,821/0,179 = 4,58 (a solução oficial arredonda para 4,56).\n\n**4) Conversão a 10 p°:** x²/(1 − x²) = 4,58/10 = 0,458 → x² = 0,458/1,458 = 0,314 → x = 0,56.\n\nA solução oficial também dá 0,69 (5 p°), 0,29 (50 p°), 0,21 (100 p°) e 0,15 (200 p°): a conversão cai com a pressão, pois a reação aumenta o número de mols de gás (princípio de Le Chatelier).",
      "alternativas": [
        "Errada. É o valor de x², não de x: resolve x²/(1 − x²) = 0,458 e esquece de tirar a raiz quadrada.",
        "Errada. Usa K = x²/(1 − x)² (esquece que o total de mols é 1 + x e que o denominador é 1 − x²).",
        "Correta. Kp = x²/(1 − x²) · (p/p°) = 4,58 a 1 p°; a 10 p°, x²/(1 − x²) = 0,458 → x² = 0,314 → x = 0,56.",
        "Errada. É a conversão a 5 p° (x²/(1 − x²) = 0,916).",
        "Errada. É a conversão a 1 p°. Como o número de mols aumenta (1 → 2), a pressão desfavorece a conversão."
      ],
      "dica": "Se a reação aumenta o número de mols de gás, mais pressão = menos conversão. A fórmula é x²/(1 − x²) = Kp/p."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 15ª IChO (1983), problema 5",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1231",
    "materia": "quimica",
    "assunto": "Bioquímica",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1984,
      "orgao": "prova teórica (Frankfurt am Main), problema 8, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 16ª IChO, Frankfurt am Main, 1984, problema 8. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "A sequência de aminoácidos de um peptídeo que atua no corpo humano como analgésico foi determinada por esta combinação de métodos: (a) hidrólise total em HCl 6 mol/dm³ a 110 °C deu Gly, Leu e os aminoácidos aromáticos Phe e Tyr na razão molar 2 : 1 : 1 : 1; (b) a reação do peptídeo com 2,4-dinitrofluorbenzeno (DNFB), seguida de hidrólise, deu o derivado da tirosina (o DNFB marca o aminoácido N-terminal); (c) a hidrólise parcial com quimotripsina (protease que corta a ligação peptídica depois de um aminoácido aromático) deu Leu, Tyr e um peptídeo menor, que por hidrólise deu Gly e Phe na razão 2 : 1. Qual é a sequência do peptídeo, do N-terminal para o C-terminal?",
    "alternativas": [
      "Tyr–Gly–Phe–Gly–Leu",
      "Leu–Phe–Gly–Gly–Tyr",
      "Tyr–Leu–Gly–Gly–Phe",
      "Tyr–Gly–Gly–Phe–Leu",
      "Gly–Gly–Tyr–Phe–Leu"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "DNFB marca o N-terminal: Tyr. A quimotripsina libera Tyr (1º resíduo), o tripeptídeo Gly–Gly–Phe e Leu (último). Logo: Tyr–Gly–Gly–Phe–Leu (leucina-encefalina).",
      "detalhada": "A resolução segue a solução oficial do problema 8 (16ª IChO).\n\n**a) Composição:** 2 Gly, 1 Leu, 1 Phe e 1 Tyr (pentapeptídeo).\n\n**b) N-terminal:** o DNFB reage com o grupo amino livre do N-terminal e esse marcador sobrevive à hidrólise; como se obteve o derivado da tirosina, Tyr é o primeiro resíduo.\n\n**c) Fragmentos:** a quimotripsina corta depois de resíduos aromáticos (Tyr, Phe). Os fragmentos Tyr, Leu e um peptídeo com Gly e Phe (2 : 1) mostram que: Tyr está só (corte depois do 1º resíduo), Leu está só (fim da cadeia, depois da Phe) e o fragmento do meio é Gly–Gly–Phe (termina em Phe, onde ocorre o 2º corte).\n\n**Resultado:** Tyr–Gly–Gly–Phe–Leu. É a encefalina (com Leu); outra encefalina natural tem Met no lugar da Leu, e as duas cadeias laterais são apolares e de tamanho parecido.",
      "alternativas": [
        "Errada. A quimotripsina cortaria depois da Tyr e da Phe e daria Tyr, Gly–Phe e Gly–Leu, não \"Tyr, Leu e um peptídeo com Gly e Phe em 2 : 1\".",
        "Errada. Tem Leu como N-terminal; o DNFB marcaria a leucina, não a tirosina.",
        "Errada. A quimotripsina cortaria depois da Tyr e depois da Phe e daria Tyr, Leu–Gly–Gly–Phe; o peptídeo menor teria Leu, o que contraria o item (c).",
        "Correta. Tyr no N-terminal (DNFB); a quimotripsina corta depois de Tyr e de Phe, liberando Tyr, o tripeptídeo Gly–Gly–Phe (Gly : Phe = 2 : 1) e Leu. É a leucina-encefalina.",
        "Errada. O N-terminal seria Gly, não Tyr (DNFB marcaria a glicina)."
      ],
      "dica": "Reagente de N-terminal (DNFB) dá o primeiro resíduo; enzima específica (quimotripsina) mostra onde estão os resíduos aromáticos. Monte a cadeia que reproduz todos os fragmentos."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 16ª IChO (1984), problema 8",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1232",
    "materia": "quimica",
    "assunto": "Radioatividade",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1984,
      "orgao": "prova teórica (Frankfurt am Main), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 16ª IChO, Frankfurt am Main, 1984, problema 1. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O carbono que participa do ciclo natural do CO2 tem atividade de 13,6 desintegrações por minuto por grama de carbono, devido ao radioisótopo ¹⁴C (meia-vida de 5730 anos). Quando uma planta morre, deixa de participar do ciclo, e a atividade do carbono diminui. Em 1983 mediu-se uma atividade de 12,0 desintegrações por minuto por grama de carbono num pedaço de madeira de um navio dos vikings. Há quantos anos antes de 1983, aproximadamente, a árvore da qual a madeira provém foi cortada?",
    "alternativas": [
      "449 anos",
      "674 anos",
      "717 anos",
      "1035 anos",
      "8267 anos"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "λ = ln 2/t1/2 e A = A0 e^(−λt): t = (t1/2/ln 2) ln(A0/A) = (5730/0,693) × ln(13,6/12,0) = 8267 × 0,125 ≈ 1035 anos.",
      "detalhada": "A resolução segue a solução oficial do problema 1 (16ª IChO), que dá 1035 anos.\n\n**1) Lei do decaimento:** N = N0 e^(−λt), e λ = ln 2 / t1/2. A atividade (desintegrações por minuto) é proporcional a N, então A = A0 e^(−λt).\n\n**2) Tempo:** t = (1/λ) ln(A0/A) = (t1/2/ln 2) × ln(A0/A).\n\n**3) Valores:** t = (5730 anos / 0,6931) × ln(13,6/12,0) = 8267 × 0,1252 = 1035 anos.\n\nA árvore foi cortada há cerca de 1035 anos antes de 1983, ou seja, por volta do ano 948. A solução oficial dá ainda a incerteza: com o erro de ±0,2 desintegrações/min na medida, a idade fica entre 898 e 1174 anos.",
      "alternativas": [
        "Errada. Usa log10(13,6/12,0) no lugar do logaritmo natural: o decaimento radioativo é N = N0 e^(−λt), com ln.",
        "Errada. Supõe decaimento linear (5730 × (1 − 12,0/13,6)); a atividade cai exponencialmente.",
        "Errada. Usa t = t1/2 × ln(A0/A), esquecendo de dividir por ln 2 (a conversão entre meia-vida e constante de decaimento).",
        "Correta. t = (t1/2/ln 2) × ln(A0/A) = (5730/0,693) × ln(13,6/12,0) = 8267 × 0,1252 = 1035 anos.",
        "Errada. É a vida média (t1/2/ln 2); falta multiplicar por ln(A0/A)."
      ],
      "dica": "Datação radioativa: a razão entre atividade inicial e atual entra em ln, e t1/2 se converte em λ dividindo ln 2 por ele."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 16ª IChO (1984), problema 1",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1233",
    "materia": "quimica",
    "assunto": "Reações orgânicas",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1985,
      "orgao": "prova teórica (Bratislava), problema 7, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 17ª IChO, Bratislava, 1985, problema 7. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O propanal (A), em solução hidroalcoólica de hidróxido de sódio, reage formando um composto B, que se desidrata facilmente em C (C6H10O). Qual é a estrutura de C?",
    "alternativas": [
      "CH3–CH2–CH=C(CH3)–CHO (2-metilpent-2-enal)",
      "CH3–CH2–CH(OH)–CH(CH3)–CHO (3-hidroxi-2-metilpentanal)",
      "CH3–(CH2)4–CHO (hexanal)",
      "CH3–CH2–CH=CH–CH2–CHO (hex-3-enal)",
      "CH3–CH2–CO–CH2–CH2–CH3 (hexan-3-ona)"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "Condensação aldólica: o enolato (C-α do propanal) ataca o C=O de outra molécula e dá 3-hidroxi-2-metilpentanal (B); a desidratação dá o aldeído conjugado C6H10O: CH3CH2CH=C(CH3)CHO, 2-metilpent-2-enal.",
      "detalhada": "A resolução segue a solução oficial do problema 7 (17ª IChO).\n\n**1) Formação do nucleófilo (M):** OH⁻ retira um H do carbono α do propanal: CH3–CH2–CHO + OH⁻ ⇌ [CH3–CH⁻–CHO ↔ CH3–CH=CH–O⁻] + H2O (enolato, estabilizado por ressonância).\n\n**2) Adição aldólica (B):** o C-α do enolato ataca o carbono da carbonila de outra molécula de propanal: CH3CH2CH(OH)–CH(CH3)–CHO, o 3-hidroxi-2-metilpentanal (C6H12O2).\n\n**3) Desidratação (C):** a perda de H2O (o H do C-2, ácido, e o –OH do C-3) dá a ligação dupla conjugada com a carbonila: CH3CH2–CH=C(CH3)–CHO, o 2-metilpent-2-enal, C6H10O.\n\nCinética (do mesmo problema): se a 2ª etapa limita a velocidade, v = (k1k2/k₋1)[propanal]²[OH⁻]: reação de 3ª ordem global.",
      "alternativas": [
        "Correta. O íon enolato do propanal ataca a carbonila de outra molécula (adição aldólica) e dá B = 3-hidroxi-2-metilpentanal; a desidratação forma o aldeído α,β-insaturado conjugado C6H10O.",
        "Errada. É o composto B (aldol), C6H12O2, antes da desidratação; C é C6H10O.",
        "Errada. C6H12O e não se forma em condensação aldólica (a cadeia seria ramificada no C-2).",
        "Errada. A cadeia seria linear e a dupla não estaria conjugada com a carbonila; o aldol de propanal é ramificado no C-2.",
        "Errada. É uma cetona saturada (C6H12O); a condensação aldólica de aldeídos dá aldeído β-hidroxilado e depois α,β-insaturado."
      ],
      "dica": "Aldol: nucleófilo (enolato) + eletrófilo (C=O de outra molécula) → β-hidroxialdeído; aquecendo ou com base, perde água e vira aldeído α,β-insaturado."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 17ª IChO (1985), problema 7",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1234",
    "materia": "quimica",
    "assunto": "Bioquímica",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1985,
      "orgao": "prova teórica (Bratislava), problema 8, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 17ª IChO, Bratislava, 1985, problema 8. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Na glicólise anaeróbia de carboidratos ocorrem os equilíbrios glicose-1-fosfato ⇌ glicose-6-fosfato (K1 = 19) e glicose-6-fosfato ⇌ frutose-6-fosfato (K2 = 0,50). No início, a mistura reacional continha 1 mmol de glicose-6-fosfato (o volume é constante, de modo que a razão entre quantidades de matéria é a razão entre concentrações). Quantos mmol de frutose-6-fosfato há na mistura no equilíbrio?",
    "alternativas": [
      "0,034 mmol",
      "0,050 mmol",
      "0,32 mmol",
      "0,50 mmol",
      "0,64 mmol"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "Com y de glicose-1-fosfato: glicose-6-fosfato = 19y e frutose-6-fosfato = 9,5y; y + 19y + 9,5y = 1 mmol → y = 0,034, e F6P = 9,5 × 0,034 = 0,32 mmol.",
      "detalhada": "A resolução segue a solução oficial do problema 8 (17ª IChO), que dá 0,034 mmol de G1P, 0,644 mmol de G6P e 0,322 mmol de F6P no equilíbrio.\n\n**1) Relações de equilíbrio:** K1 = [G6P]/[G1P] = 19 → [G6P] = 19[G1P]. K2 = [F6P]/[G6P] = 0,50 → [F6P] = 0,50[G6P] = 9,5[G1P].\n\n**2) Conservação:** a quantidade total de fosfatos de hexose é 1 mmol: [G1P] + [G6P] + [F6P] = 1.\n\n**3) Resolução:** y + 19y + 9,5y = 29,5y = 1 → y = 0,0339 mmol (G1P). Então G6P = 19 × 0,0339 = 0,644 mmol e F6P = 9,5 × 0,0339 = 0,322 mmol.\n\nTotal: 0,034 + 0,644 + 0,322 = 1,000 mmol.",
      "alternativas": [
        "Errada. É a quantidade de glicose-1-fosfato no equilíbrio, não a de frutose-6-fosfato.",
        "Errada. É a glicose-1-fosfato (1/(1 + 19)) que se obteria ignorando o 2º equilíbrio; mesmo assim, não é a frutose-6-fosfato.",
        "Correta. Seja y a glicose-1-fosfato: glicose-6-fosfato = 19y, frutose-6-fosfato = 0,5 × 19y = 9,5y; y + 19y + 9,5y = 1 → y = 0,0339; frutose-6-fosfato = 9,5 × 0,0339 = 0,322 mmol.",
        "Errada. Usa K2 = 0,50 como se fosse a fração de glicose-6-fosfato convertida em frutose-6-fosfato; K2 é razão de quantidades no equilíbrio (F6P/G6P), e a G6P também se converte em G1P.",
        "Errada. É a glicose-6-fosfato que sobra no equilíbrio, não a frutose-6-fosfato."
      ],
      "dica": "Em equilíbrios encadeados, escolha uma espécie como referência (aqui G1P), escreva as outras em função dela e use a conservação de matéria."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 17ª IChO (1985), problema 8",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1235",
    "materia": "quimica",
    "assunto": "Isomeria",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1986,
      "orgao": "prova teórica (Leiden), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 18ª IChO, Leiden, 1986, problema 5. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O ácido lático (ácido 2-hidroxipropanoico) forma um diéster cíclico entre duas moléculas, o dilactídeo (3,6-dimetil-1,4-dioxano-2,5-diona). Partindo de ácido lático racêmico (mistura de enantiômeros R e S em partes iguais), quais dilactídeos estereoisômeros se formam?",
    "alternativas": [
      "Um só: (R,R)",
      "Dois: (R,R) e (S,S), enantiômeros",
      "Dois: (R,R) e (R,S)",
      "Quatro: (R,R), (S,S), (R,S) e (S,R)",
      "Três: (R,R), (S,S) e (R,S), sendo este último meso"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "Duas moléculas de ácido lático (R ou S) combinam-se de três formas: R+R, S+S e R+S. (R,R) e (S,S) são enantiômeros; (R,S) é meso, com centro de inversão. São 3 estereoisômeros.",
      "detalhada": "A resolução segue a solução oficial do problema 5 (18ª IChO), que mostra os dilactídeos (R,R), (S,S) e (R,S) (meso).\n\n**Análise:** o dilactídeo tem dois centros estereogênicos (os carbonos que levam o CH3), um de cada molécula de ácido lático. O racemato oferece R e S, então são possíveis:\n- **(R,R):** formado por duas moléculas R.\n- **(S,S):** formado por duas moléculas S; é o enantiômero do (R,R).\n- **(R,S):** uma R e uma S. Com os dois centros de configurações opostas, a molécula tem centro de inversão (no centro do anel): composto meso, opticamente inativo. (S,R) é o mesmo composto.\n\nTotal: três estereoisômeros distintos (um par de enantiômeros e um meso). No mesmo problema, o ácido L-(+)-lático puro dá só o dilactídeo (S,S), que polimeriza a um poliéster isotático (poli-L-lactídeo) usado em cirurgia.",
      "alternativas": [
        "Errada. Esse é só um deles; o enantiômero (S,S) e o composto meso (R,S) também se formam.",
        "Errada. Faltam as combinações de um R com um S, que dão o dilactídeo meso.",
        "Errada. Esquece o (S,S), enantiômero do (R,R), que se forma em igual quantidade.",
        "Errada. (R,S) e (S,R) são o mesmo composto: o dilactídeo tem centro de inversão e é meso (inativo).",
        "Correta. (R,R) e (S,S) são um par de enantiômeros; (R,S) tem centro de inversão e é um composto meso, diastereoisômero dos outros dois."
      ],
      "dica": "Dois centros quirais iguais (mesma estrutura em cada metade) → em geral 3 estereoisômeros (par de enantiômeros + meso), e não 4."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 18ª IChO (1986), problema 5",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1236",
    "materia": "quimica",
    "assunto": "Equilíbrio químico",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1986,
      "orgao": "prova teórica (Leiden), problema 7, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 18ª IChO, Leiden, 1986, problema 7. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "A reação A(g) + 2 B(g) ⇌ 2 C(g) tem Kp = 10,0 MPa⁻¹ a 100 °C, em que Kp = p(C)²/[p(A) p(B)²]. Alimenta-se um reator com A e B em proporção estequiométrica (1 : 2), e o equilíbrio se estabelece a 100 °C e pressão total de 0,100 MPa. Qual é o grau de conversão de A?",
    "alternativas": [
      "5%",
      "33%",
      "43%",
      "57%",
      "67%"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Com 1 mol de A e 2 mol de B, x convertidos: Kp·P = x²(3 − x)/(1 − x)³. Com Kp = 10 MPa⁻¹ e P = 0,100 MPa, Kp·P = 1 e x = 1/3.",
      "detalhada": "A resolução segue a solução oficial do problema 7 (18ª IChO): para alimentação estequiométrica (a : b = 1 : 2) a 0,100 MPa, o equilíbrio fornece x = 1/3 do mol de A convertido (a solução oficial chega à relação ab − 4ax − bx = 0, entre as quantidades alimentadas a e b e a quantidade x convertida; para a : b = 1 : 2 ela dá x = a/3, isto é, conversão de 1/3).\n\n**1) Quadro de mols** (base: 1 mol de A e 2 mol de B; x = mols de A convertidos): A: 1 − x; B: 2 − 2x; C: 2x; total: 3 − x.\n\n**2) Pressões parciais:** p(A) = (1 − x)/(3 − x) · P; p(B) = 2(1 − x)/(3 − x) · P; p(C) = 2x/(3 − x) · P.\n\n**3) Constante:** Kp = p(C)²/[p(A) p(B)²] = 4x²(3 − x)/[4(1 − x)³ P] = x²(3 − x)/[(1 − x)³ P].\n\n**4) Valor:** Kp · P = 10,0 MPa⁻¹ × 0,100 MPa = 1,00 = x²(3 − x)/(1 − x)³. Testando x = 1/3: (1/9)(8/3)/(8/27) = (8/27)/(8/27) = 1. Conversão de A: 1/3 ≈ 33%.\n\nComo o número de mols diminui (3 → 2), aumentar a pressão aumenta a conversão.",
      "alternativas": [
        "Errada. Usa o inverso de Kp (0,1 MPa⁻¹ em vez de 10,0 MPa⁻¹), isto é, a reação no sentido contrário.",
        "Correta. Com 1 mol de A e 2 mol de B: Kp·P = x²(3 − x)/(1 − x)³ = 1,00 para x = 1/3 (8/27 = 8/27).",
        "Errada. Omite o total de mols (3 − x) e usa frações só com os mols dos reagentes (x²/(1 − x)³ = 1).",
        "Errada. Esquece o fator da pressão (P = 0,100 MPa), usando x²(3 − x)/(1 − x)³ = Kp = 10.",
        "Errada. É 2x, a quantidade de C formada por mol de A alimentado, não a conversão de A (x)."
      ],
      "dica": "Reação com variação de mols: Kp depende de P. Monte a tabela, escreva as frações molares e só então substitua os valores."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 18ª IChO (1986), problema 7",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1237",
    "materia": "quimica",
    "assunto": "Reações orgânicas",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1987,
      "orgao": "prova teórica (Veszprém e Budapeste), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 19ª IChO, Veszprém e Budapeste, 1987, problema 5. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Qual é a razão estatística entre produtos primários, secundários e terciários que se pode esperar na cloração a alta temperatura do 2-metilbutano, CH3–CH(CH3)–CH2–CH3? Suponha que a velocidade da substituição seja igual para todas as ligações C–H.",
    "alternativas": [
      "3 : 1 : 1",
      "3 : 2 : 1",
      "6 : 2 : 1",
      "9 : 3 : 1",
      "9 : 2 : 1"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "Com velocidade igual para todas as ligações C–H, a razão dos produtos é a razão do número de H de cada tipo: 9 (nos três CH3) : 2 (no CH2) : 1 (no CH).",
      "detalhada": "A resolução segue a solução oficial do problema 5 (19ª IChO), item 5.1, que dá 9 : 2 : 1.\n\n**Contagem dos hidrogênios** em CH3–CH(CH3)–CH2–CH3 (2-metilbutano, C5H12):\n- **Primários** (em carbono ligado a um só outro carbono): três grupos CH3 (dois ligados ao C-2 e o C-4) → 3 × 3 = 9 H.\n- **Secundários** (carbono ligado a dois outros): o CH2 (C-3) → 2 H.\n- **Terciário** (carbono ligado a três outros): o CH (C-2) → 1 H.\n\nSe cada ligação C–H tem a mesma probabilidade de ser substituída, a proporção dos três tipos de monoclorados é 9 : 2 : 1 (total de 12 H). Na prática, a reatividade real é terciário > secundário > primário (é por isso que a hipótese do enunciado é uma \"razão estatística\").",
      "alternativas": [
        "Errada. Conta carbonos (três CH3, um CH2, um CH) e não hidrogênios; a substituição ocorre em ligações C–H.",
        "Errada. Mistura critérios: conta 3 grupos CH3 em vez de 9 H, mas 2 H do CH2.",
        "Errada. Esquece um dos três grupos CH3: só considera dois (6 H primários).",
        "Errada. Conta 3 H no carbono secundário; o CH2 tem apenas 2 H.",
        "Correta. Há 9 H primários (três grupos CH3), 2 H secundários (o CH2) e 1 H terciário (o CH)."
      ],
      "dica": "Razão estatística = razão do número de hidrogênios equivalentes de cada tipo. Conte H, não carbonos."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 19ª IChO (1987), problema 5",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1238",
    "materia": "quimica",
    "assunto": "Química ambiental",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1987,
      "orgao": "prova teórica (Veszprém e Budapeste), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 19ª IChO, Veszprém e Budapeste, 1987, problema 1. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Numa estação de tratamento de esgoto, 45% do carboidrato (CH2O)n da água residual é oxidado completamente (a CO2 e H2O), 10% sofre decomposição anaeróbia por fermentação (dois produtos: (CH2O)n → n/2 CH4 + n/2 CO2) e o restante fica no lodo. Considere todo o gás formado nas duas vias (CO2 da oxidação e CH4 + CO2 da fermentação): essa formação total de gás é 16 m³ por dia (25 °C, 100 kPa). Que massa de carboidrato, em kg por dia, permanece no lodo? (M(CH2O) = 30 g/mol; R = 8,314 J/(mol·K))",
    "alternativas": [
      "8,7 kg",
      "15,8 kg",
      "17,5 kg",
      "19,4 kg",
      "87 kg"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Oxidação e fermentação geram, juntas, 1 mol de gás por mol de CH2O: n(gás) = 646 mol são 55% do total; o total é 1174 mol e o lodo (45%) é 528 mol × 30 g/mol = 15,8 kg.",
      "detalhada": "A resolução segue a solução oficial do problema 1 (19ª IChO), que dá 15,85 kg por dia.\n\n**1) Quantidade de gás:** n = pV/RT = 100×10³ Pa × 16 m³ / (8,314 × 298,15) = 646 mol por dia.\n\n**2) Mols de gás por mol de CH2O:**\n- Oxidação: (CH2O)n + n O2 → n CO2 + n H2O: 1 mol de gás (CO2) por mol de CH2O.\n- Fermentação: (CH2O)n → n/2 CH4 + n/2 CO2: também 1 mol de gás por mol de CH2O.\nLogo os 55% (45% + 10%) do carboidrato que geram gás produzem 1 mol de gás por mol de CH2O.\n\n**3) Total e lodo:** n(CH2O total) = 646/0,55 = 1174 mol por dia; lodo = 45% = 528 mol × 30 g/mol = 15,8 kg por dia (cálculo oficial: 15,85 kg com M = 30,03 g/mol).\n\nAinda neste problema: o CH4 (5/55 do gás, 58,7 mol) com entalpia de combustão de −882 kJ/mol rende 5,2×10⁴ kJ por dia.",
      "alternativas": [
        "Errada. Usa 45% do número de mols de gás (0,45 × 646 ≈ 291 mol). Mas os 646 mol correspondem a 55% do carboidrato; o lodo (45%) deve ser calculado sobre o total, 646 ÷ 0,55.",
        "Correta. n(gás) = pV/RT = 646 mol corresponde a 55% do carboidrato (1 mol de gás por mol de CH2O nas duas vias); total = 1174 mol; lodo = 45% = 528 mol × 30 g/mol = 15,8 kg.",
        "Errada. Usa 22,4 dm³/mol (CNTP) em vez de 25 °C e 100 kPa (24,8 dm³/mol): n(gás) = 714 mol e lodo = 17,5 kg.",
        "Errada. Toma todo o gás (646 mol) como se fosse o carboidrato do lodo.",
        "Errada. Supõe que todo o gás vem só da fermentação (10% do total): total = 6460 mol e 45% = 87 kg."
      ],
      "dica": "Escolha a base de cálculo: 1 mol de CH2O que \"gera gás\" libera 1 mol de gás nas duas vias. O gás mede só 55% do carboidrato; o lodo é os 45% restantes."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 19ª IChO (1987), problema 1",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1239",
    "materia": "quimica",
    "assunto": "Funções inorgânicas",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1988,
      "orgao": "prova teórica (Espoo), problema 2, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 20ª IChO, Espoo, 1988, problema 2. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Aquecendo-se uma mistura de um elemento gasoso A e flúor (razão molar 1 : 9, pressão de cerca de 1 MPa) a 900 °C, formam-se três compostos cristalinos B, C e D. O composto C contém 36,7% de flúor em massa. Quando 450,0 mg de C são tratados com excesso de mercúrio (AFn + n/2 Hg → A + n/2 HgF2), liberam-se 53,25 cm³ do gás A a 101,0 kPa e 25 °C. Qual é a fórmula de C?",
    "alternativas": [
      "KrF4",
      "XeF2",
      "XeF6",
      "XeF4",
      "RnF2"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "n(A) = pV/RT = 2,17×10⁻³ mol = n(C) → M(C) = 207,4 g/mol; n(F) = 207,4 × 0,367/19,0 = 4; M(A) = 207,4 − 4 × 19 = 131,3 g/mol (xenônio). C é o XeF4.",
      "detalhada": "A resolução segue a solução oficial do problema 2 (20ª IChO), que identifica A = Xe, B = XeF2, C = XeF4 e D = XeF6.\n\n**1) Quantidade de A:** AFn + n/2 Hg → A + n/2 HgF2, então 1 mol de AFn libera 1 mol de A. n(A) = pV/RT = 101 000 Pa × 53,25×10⁻⁶ m³/(8,314 × 298) = 2,17×10⁻³ mol.\n\n**2) Massa molar de C:** M(C) = 0,4500 g / 2,17×10⁻³ mol = 207,4 g/mol.\n\n**3) Número de F:** n = (0,367 × 207,4)/19,0 = 4,0, então C = AF4.\n\n**4) Massa atômica de A:** 207,4 − 4 × 19,0 = 131,3 g/mol → xenônio (Z = 54). C = XeF4.\n\n**Checagem:** 4 × 19,0/207,3 = 36,7% de F ✓. XeF4 tem geometria quadrada plana (6 pares de elétrons em volta do Xe: 4 ligantes e 2 pares isolados em posição trans).",
      "alternativas": [
        "Errada. M = 159,8 g/mol, 47,6% de F: não bate com 36,7% e a quantidade de gás liberada indicaria M(C) = 207 g/mol.",
        "Errada. M = 169,3 g/mol, 22,4% de F; a quantidade de A liberada (2,17×10⁻³ mol) corresponde a M = 207 g/mol.",
        "Errada. M = 245,3 g/mol, 46,5% de F (é o composto D da questão original).",
        "Correta. n(A) = pV/RT = 2,17×10⁻³ mol → M(C) = 0,4500/2,17×10⁻³ = 207,4 g/mol; n = 207,4 × 0,367/19,0 = 4,0; M(A) = 207,4 − 76 = 131,3 g/mol: xenônio.",
        "Errada. M = 260 g/mol e 14,6% de F."
      ],
      "dica": "Gás liberado por mol de composto = 1: a massa molar do composto sai direto de m/n; a porcentagem de F dá o número de átomos de F."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 20ª IChO (1988), problema 2",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1240",
    "materia": "quimica",
    "assunto": "Reações orgânicas",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1988,
      "orgao": "prova teórica (Espoo), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 1 (ed. Anton Sirota, IUVENTA, Bratislava): 20ª IChO, Espoo, 1988, problema 5. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O bromo-derivado D, obtido do cicloexanol com PBr3, mostra no espectro de massas picos moleculares em m/e = 162 e 164, de intensidades quase iguais, e pico-base em m/e = 83 (C6H11⁺); D é o bromocicloexano. D é convertido em um composto organomagnésio E, que reage em éter seco com um composto carbonílico F e, após hidrólise, dá G, um álcool secundário de fórmula C8H16O. Qual é F?",
    "alternativas": [
      "Etanal (acetaldeído), CH3–CHO",
      "Metanal (formaldeído), HCHO",
      "Propanona (acetona), CH3–CO–CH3",
      "Propanal, CH3–CH2–CHO",
      "Cicloexanona"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "E = cicloexilmagnésio (C6H11MgBr). Para formar um álcool secundário C8H16O é preciso um aldeído com 2 C: C6H11 + CH(OH)–CH3 → F = etanal.",
      "detalhada": "A resolução segue a solução oficial do problema 5 (20ª IChO). A coletânea dá o esquema sintético como figura (cicloexanol → bromocicloexano → reagente de Grignard); aqui a sequência foi descrita em texto.\n\n**1) D:** os picos em m/e 162 e 164, de intensidades quase iguais (razão 1,02), mostram um átomo de Br (isótopos ⁷⁹Br e ⁸¹Br, quase 1 : 1); o pico-base em 83 é o cátion cicloexila, C6H11⁺. D = bromocicloexano, C6H11Br (162 e 164).\n\n**2) E:** Mg em éter seco forma o reagente de Grignard C6H11–MgBr.\n\n**3) F:** o Grignard adiciona-se ao carbono da carbonila (R–MgBr + R′CHO → R–CH(OH)–R′ após hidrólise). Para G = C8H16O, álcool secundário com R = C6H11, R′ deve ser CH3: F = etanal (CH3CHO). G = 1-cicloexiletanol, C6H11–CH(OH)–CH3 (tem um carbono quiral).\n\nOutros aldeídos ou cetonas dão álcool com número de carbonos ou classe diferentes: metanal → álcool primário; cetonas → álcool terciário.",
      "alternativas": [
        "Correta. C6H11–MgBr + CH3–CHO → C6H11–CH(OH)–CH3 (1-cicloexiletanol, C8H16O): álcool secundário.",
        "Errada. Daria álcool primário, C6H11–CH2OH (C7H14O).",
        "Errada. Daria álcool terciário, C6H11–C(OH)(CH3)2 (C9H18O).",
        "Errada. Daria álcool secundário, mas de fórmula C9H18O, e não C8H16O.",
        "Errada. Daria álcool terciário (bicicloexil-1-ol, C12H22O)."
      ],
      "dica": "Grignard + aldeído (exceto metanal) = álcool secundário; + cetona = terciário; + metanal = primário. O número de carbonos de G dá o tamanho do aldeído."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 1: 20ª IChO (1988), problema 5",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%201%20-%20icho%2001-20.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  }
] });
