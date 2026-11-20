/* Questões inéditas de Química orgânica (reações, polímeros, petróleo e bioquímica), escritas para o app. */
Banco.registrar({ questoes: [
  {
    "id": "qui-836",
    "materia": "quimica",
    "assunto": "Reações orgânicas",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 1,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "O acetato de etila, de cheiro frutado, é usado em aromatizantes e removedores de esmalte. Ele é produzido em laboratório aquecendo ácido acético (CH3–COOH) com etanol (CH3–CH2–OH) na presença de poucas gotas de ácido sulfúrico concentrado. Qual equação representa a reação principal que ocorre nesse processo?",
    "alternativas": [
      "CH3–COOH + CH3–CH2–OH → CH3–CO–CH2–CH3 + H2O",
      "2 CH3–CH2–OH → CH3–CH2–O–CH2–CH3 + H2O",
      "CH3–COOH + CH3–CH2–OH ⇌ CH3–COO–CH2–CH3 + H2O",
      "CH3–COOH + NaOH → CH3–COONa + H2O",
      "CH3–COOH + NH3 → CH3–CO–NH2 + H2O"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "A reação entre ácido carboxílico e álcool com catalisador ácido é a esterificação e forma éster mais água.",
      "detalhada": "Esterificação de Fischer: **ácido carboxílico + álcool ⇌ éster + água**. No acetato de etila, o grupo acila CH3–CO– vem do ácido acético e o grupo etila vem do etanol, ligados por um oxigênio: CH3–CO–O–CH2–CH3.\n\nA reação é reversível. Por isso se usa H2SO4 concentrado (catalisador e desidratante) ou excesso de um reagente para deslocar o equilíbrio para o éster.\n\nPara identificar a função, procure o grupo –COO– entre dois carbonos: éster. Cetona tem C=O entre carbonos; éter tem apenas –O–; amida tem –CO–N.",
      "alternativas": [
        "Errada. O produto é uma cetona (butanona), não um éster. Faltou o oxigênio ligando o grupo acila ao grupo etila.",
        "Errada. É a desidratação intermolecular do etanol, que forma éter dietílico (a cerca de 140 °C). O ácido acético nem participa.",
        "Correta. É uma esterificação de Fischer: o –OH do ácido e o H do álcool saem como água e as duas partes se unem formando o éster, em equilíbrio. O H2SO4 é catalisador e também retira água.",
        "Errada. É uma neutralização, que forma sal (acetato de sódio). Não há álcool nem éster.",
        "Errada. Forma uma amida, o que exigiria amônia no lugar do etanol."
      ],
      "dica": "Em esterificação sempre sai água, formada com o –OH do ácido e o H do álcool. Confira se o produto traz –COO–."
    },
    "fontes": [
      {
        "titulo": "PubChem: Ethyl acetate",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Ethyl-acetate"
      },
      {
        "titulo": "OpenStax, Chemistry 2e: Organic Chemistry",
        "url": "https://openstax.org/books/chemistry-2e/pages/20-introduction"
      }
    ]
  },
  {
    "id": "qui-837",
    "materia": "quimica",
    "assunto": "Reações orgânicas",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "Uma cooperativa transforma óleo de cozinha usado em sabão em barra. O óleo, que é um triglicerídeo, é aquecido com solução aquosa de hidróxido de sódio (soda cáustica). Ao fim do processo, o material é resfriado e cortado. Quais são os produtos formados na reação química principal?",
    "alternativas": [
      "Glicerol (propano-1,2,3-triol) e sais de sódio de ácidos graxos, que formam o sabão.",
      "Glicerol e ácidos graxos livres (R–COOH).",
      "Glicerol e ésteres metílicos de ácidos graxos.",
      "Etanol e acetato de sódio.",
      "Dióxido de carbono e água."
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "Triglicerídeo + NaOH forma glicerol e sal de ácido graxo (sabão): é a saponificação.",
      "detalhada": "**Saponificação** é a hidrólise básica de um éster. O triglicerídeo tem três ligações éster ligando três ácidos graxos ao glicerol. Com NaOH, cada uma é rompida:\n\n- triglicerídeo + 3 NaOH → glicerol + 3 R–COO⁻ Na⁺\n\nO sal de ácido graxo tem uma cauda apolar (se liga à gordura) e uma cabeça iônica (se liga à água), o que explica a ação de limpeza do sabão. O glicerol é subproduto valioso, usado em cosméticos.",
      "alternativas": [
        "Correta. É a saponificação, uma hidrólise básica de éster: cada ligação éster do triglicerídeo é quebrada pelo NaOH, gerando 3 R–COO⁻Na⁺ e 1 glicerol.",
        "Errada. Ácidos graxos livres aparecem em hidrólise ácida ou enzimática. Em meio básico com NaOH, o ácido é neutralizado e fica como sal.",
        "Errada. Isso é a transesterificação do biodiesel, que usa metanol e catalisador, não soda em água para fazer sabão.",
        "Errada. Seriam produtos da hidrólise básica do acetato de etila, um éster pequeno. O óleo é um triéster do glicerol.",
        "Errada. São produtos da combustão. Não há queima nesse processo."
      ],
      "dica": "Hidrólise em meio básico dá sal; em meio ácido dá ácido carboxílico. A banca testa essa diferença."
    },
    "fontes": [
      {
        "titulo": "PubChem: Glycerol",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Glycerol"
      },
      {
        "titulo": "OpenStax, Chemistry 2e: Organic Chemistry",
        "url": "https://openstax.org/books/chemistry-2e/pages/20-introduction"
      }
    ]
  },
  {
    "id": "qui-838",
    "materia": "quimica",
    "assunto": "Reações orgânicas",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "Um laboratório testa cinco álcoois com solução alaranjada de dicromato de potássio (K2Cr2O7) em meio ácido, a quente. Quando o álcool é oxidado, o Cr(VI) alaranjado é reduzido a Cr(III) verde. Em um dos tubos a cor permaneceu laranja. Qual álcool estava nesse tubo?",
    "alternativas": [
      "Etanol, CH3–CH2–OH",
      "Propan-2-ol, CH3–CH(OH)–CH3",
      "Butan-1-ol, CH3–CH2–CH2–CH2–OH",
      "Ciclo-hexanol",
      "2-metilbutan-2-ol, CH3–CH2–C(CH3)2–OH"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "Só o álcool terciário, sem H no carbono do –OH, resiste à oxidação branda: 2-metilbutan-2-ol.",
      "detalhada": "Na oxidação branda de álcoois, o oxidante retira o H do –OH e o H do carbono carbinólico (o que tem o –OH):\n\n- **primário** → aldeído → ácido carboxílico;\n- **secundário** → cetona;\n- **terciário** → não reage, pois o carbono carbinólico não tem H.\n\nNo 2-metilbutan-2-ol, o carbono do –OH está ligado a três carbonos (dois CH3 e um CH2CH3), logo não há H para sair. A mudança de laranja para verde é o indicador clássico (também usado em bafômetros antigos).",
      "alternativas": [
        "Errada. É primário e oxida a etanal e depois a ácido etanoico. A cor muda para verde.",
        "Errada. É secundário e oxida a propanona. A cor muda.",
        "Errada. É primário e oxida a butanal e depois a ácido butanoico. A cor muda.",
        "Errada. É secundário e oxida a ciclo-hexanona. A cor muda.",
        "Correta. É álcool terciário: o carbono do –OH não tem hidrogênio, e sem esse H a oxidação branda não ocorre. Cor mantida."
      ],
      "dica": "Conte os hidrogênios do carbono que carrega o –OH: zero H = terciário = não oxida."
    },
    "fontes": [
      {
        "titulo": "OpenStax, Chemistry 2e: Organic Chemistry",
        "url": "https://openstax.org/books/chemistry-2e/pages/20-introduction"
      },
      {
        "titulo": "PubChem: 2 Methyl 2 butanol",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/2-Methyl-2-butanol"
      }
    ]
  },
  {
    "id": "qui-839",
    "materia": "quimica",
    "assunto": "Reações orgânicas",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "Na indústria de fármacos, o propeno (CH2=CH–CH3) reage com brometo de hidrogênio (HBr) para formar um haleto orgânico usado como intermediário. Seguindo a regra de Markovnikov, qual é o produto majoritário dessa adição?",
    "alternativas": [
      "1-bromopropano, CH2Br–CH2–CH3",
      "2-bromopropano, CH3–CHBr–CH3",
      "1,2-dibromopropano, CH2Br–CHBr–CH3",
      "Propan-2-ol, CH3–CH(OH)–CH3",
      "3-bromoprop-1-eno, CH2=CH–CH2Br"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Na adição de HBr ao propeno, o Br entra no carbono menos hidrogenado: 2-bromopropano.",
      "detalhada": "A **regra de Markovnikov** diz que, na adição de HX a um alceno assimétrico, o H vai para o carbono mais hidrogenado e o X vai para o menos hidrogenado. A explicação moderna: o H⁺ ataca a dupla e forma o carbocátion mais estável (secundário > primário), e o Br⁻ ataca esse carbocátion.\n\nNo propeno, CH2=CH–CH3, o H vai para o CH2 e o Br fica no CH central: CH3–CHBr–CH3 (2-bromopropano).\n\nAdição significa que a dupla vira ligação simples: o produto é saturado.",
      "alternativas": [
        "Errada. Seria o produto anti-Markovnikov, favorecido só por peróxidos (mecanismo radicalar). Sem peróxidos é o minoritário.",
        "Correta. O H se liga ao carbono da dupla que já tinha mais H (CH2) e o Br vai para o carbono menos hidrogenado (CH), formando o carbocátion secundário, mais estável.",
        "Errada. O 1,2-dibromopropano vem da adição de Br2 (um Br em cada carbono), não de HBr, que põe um único Br.",
        "Errada. É o produto da hidratação do propeno (H2O, H⁺), não da adição de HBr.",
        "Errada. É substituição alílica, que ocorre com Br2 a alta temperatura ou NBS. A dupla é mantida, o que não acontece na adição de HBr."
      ],
      "dica": "Peróxidos invertem a regra, só para HBr. Sem peróxidos, vale Markovnikov."
    },
    "fontes": [
      {
        "titulo": "PubChem: Propene",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Propene"
      },
      {
        "titulo": "OpenStax, Chemistry 2e: Organic Chemistry",
        "url": "https://openstax.org/books/chemistry-2e/pages/20-introduction"
      }
    ]
  },
  {
    "id": "qui-840",
    "materia": "quimica",
    "assunto": "Reações orgânicas",
    "tipo": "certo-errado",
    "estilo": "CEBRASPE",
    "dificuldade": 2,
    "objetivos": [
      "concursos-gerais",
      "livre"
    ],
    "enunciado": "Julgue o item. O etanol (C2H5OH, M = 46 g/mol) queima completamente segundo a equação C2H5OH + 3 O2 → 2 CO2 + 3 H2O. Nessa combustão, 4,6 g de etanol consomem 9,6 g de O2 (M = 32 g/mol).",
    "resposta": true,
    "explicacao": {
      "resumo": "Certo. 4,6 g são 0,1 mol de etanol, que consomem 0,3 mol de O2, ou seja, 9,6 g.",
      "detalhada": "Quantidade de etanol: n = 4,6 / 46 = 0,1 mol. A proporção da equação é 1 mol de etanol para 3 mol de O2, então n(O2) = 0,3 mol. Massa: 0,3 × 32 = 9,6 g.\n\nA equação está balanceada: carbono 2 = 2; hidrogênio 6 = 6 (3 H2O); oxigênio 1 + 6 = 7 = 4 + 3.",
      "dica": "Confira sempre o balanceamento antes de usar a proporção em mols."
    },
    "fontes": [
      {
        "titulo": "PubChem: Ethanol",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Ethanol"
      },
      {
        "titulo": "OpenStax, Chemistry 2e: Organic Chemistry",
        "url": "https://openstax.org/books/chemistry-2e/pages/20-introduction"
      }
    ]
  },
  {
    "id": "qui-841",
    "materia": "quimica",
    "assunto": "Reações orgânicas",
    "tipo": "multipla",
    "estilo": "Cesgranrio",
    "dificuldade": 2,
    "objetivos": [
      "estatais",
      "livre"
    ],
    "enunciado": "Em uma planta petroquímica, o etanol pode ser obtido pela hidratação catalítica do eteno: C2H4 + H2O → C2H5OH (catalisador: ácido fosfórico). Considere as massas molares C2H4 = 28 g/mol e C2H5OH = 46 g/mol. Se 28 toneladas de eteno reagirem com excesso de água e o rendimento for de 80%, qual será a massa de etanol obtida?",
    "alternativas": [
      "22,4 t",
      "29,4 t",
      "46,0 t",
      "36,8 t",
      "57,5 t"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "Rendimento teórico de 46 t de etanol; a 80%, obtêm-se 36,8 t.",
      "detalhada": "Passo 1: mols de eteno = 28 × 10^6 g / 28 g/mol = 1,0 × 10^6 mol.\n\nPasso 2: proporção 1:1, então o rendimento teórico é 1,0 × 10^6 mol de etanol, o que dá 46 × 10^6 g = 46 t.\n\nPasso 3: rendimento real = 46 t × 0,80 = **36,8 t**.\n\nÉ uma reação de **adição** à dupla C=C (hidratação), com a água entrando como H– e –OH.",
      "alternativas": [
        "Errada. É 28 × 0,8: aplicou o rendimento à massa do eteno, esquecendo que a massa molar do produto é maior (46) e não 28.",
        "Errada. É 36,8 × 0,8: aplicou o rendimento duas vezes.",
        "Errada. É o rendimento teórico (100%). O enunciado fala em 80%.",
        "Correta. 28 t de eteno são 10^6 mol, que dariam 10^6 mol de etanol = 46 t (100%). Com 80%: 46 × 0,8 = 36,8 t.",
        "Errada. É 46 / 0,8: dividiu pelo rendimento em vez de multiplicar. O rendimento real nunca passa do teórico."
      ],
      "dica": "Rendimento é sempre aplicado ao valor teórico do produto, uma única vez."
    },
    "fontes": [
      {
        "titulo": "PubChem: Ethylene",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Ethylene"
      },
      {
        "titulo": "OpenStax, Chemistry 2e: Organic Chemistry",
        "url": "https://openstax.org/books/chemistry-2e/pages/20-introduction"
      }
    ]
  },
  {
    "id": "qui-842",
    "materia": "quimica",
    "assunto": "Reações orgânicas",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "Em uma aula prática, estudantes misturam 12 g de ácido acético (CH3–COOH, M = 60 g/mol) com excesso de etanol e catalisador ácido, para obter acetato de etila (CH3–COO–CH2–CH3, M = 88 g/mol). A reação tem rendimento de 75%. Que massa de acetato de etila se espera obter?",
    "alternativas": [
      "13,2 g",
      "17,6 g",
      "9,9 g",
      "8,8 g",
      "6,6 g"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "São 0,2 mol de ácido, 17,6 g teóricos de éster e, a 75%, 13,2 g.",
      "detalhada": "O ácido é o reagente limitante (o etanol está em excesso).\n\n- n(ácido) = 12 g / 60 g/mol = 0,20 mol\n- proporção da equação ácido : éster = 1 : 1, logo 0,20 mol de éster\n- massa teórica = 0,20 × 88 = 17,6 g\n- massa real = 17,6 × 0,75 = **13,2 g**\n\nEm esterificação o equilíbrio impede rendimento de 100%, a menos que a água seja retirada.",
      "alternativas": [
        "Correta. n = 12 / 60 = 0,2 mol de ácido; proporção 1:1 dá 0,2 mol de éster = 17,6 g teóricos; 75% disso = 13,2 g.",
        "Errada. É o rendimento teórico (100%). O enunciado diz 75%.",
        "Errada. É 13,2 × 0,75: o rendimento foi aplicado duas vezes.",
        "Errada. Usou 0,1 mol de éster, como se a proporção fosse de 2 ácidos para 1 éster. É 1:1.",
        "Errada. É a metade do valor certo: mesmo erro de proporção 2:1 e depois o rendimento de 75%."
      ],
      "dica": "Identifique o limitante, converta para o produto e só no fim aplique o rendimento."
    },
    "fontes": [
      {
        "titulo": "PubChem: Acetic acid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Acetic-acid"
      },
      {
        "titulo": "OpenStax, Chemistry 2e: Organic Chemistry",
        "url": "https://openstax.org/books/chemistry-2e/pages/20-introduction"
      }
    ]
  },
  {
    "id": "qui-843",
    "materia": "quimica",
    "assunto": "Reações orgânicas",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "Um vinho esquecido aberto passa a ter gosto e cheiro de vinagre, porque bactérias do gênero Acetobacter convertem o etanol (CH3–CH2–OH) em ácido acético (CH3–COOH) usando o oxigênio do ar. Do ponto de vista químico, que tipo de transformação ocorre e o que acontece com o número de oxidação (Nox) do carbono ligado ao oxigênio do –OH?",
    "alternativas": [
      "Redução; o Nox desse carbono vai de −1 a −3.",
      "Oxidação; o Nox desse carbono vai de −1 a +1, pois o produto final é o etanal.",
      "Oxidação; o Nox desse carbono vai de −1 a +3, com perda de 4 elétrons.",
      "Esterificação; o Nox do carbono não se altera.",
      "Desidratação intermolecular; o Nox do carbono não se altera."
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "É uma oxidação: o carbono carbinólico vai de Nox −1 (álcool) a +3 (ácido), perdendo 4 elétrons.",
      "detalhada": "Cálculo do Nox do carbono carbinólico, em CH3–CH2–OH: duas ligações com H (−1 cada) = −2; uma com O (+1); uma com outro C (0). Soma: −2 + 1 + 0 = **−1**.\n\nNo ácido acético, o carbono do –COOH tem uma ligação dupla com O (+2), uma simples com O (+1) e uma com C (0): **+3**.\n\nA oxidação ocorre em duas etapas: álcool → aldeído (+1) → ácido carboxílico (+3). Aumento de Nox = oxidação. O oxigênio do ar é o oxidante, e a enzima das bactérias acelera o processo.",
      "alternativas": [
        "Errada. O Nox aumenta, não diminui. Redução seria ganho de elétrons.",
        "Errada. O etanal (C com Nox +1) é só intermediário. O produto final do enunciado é o ácido acético, em que o carbono chega a +3.",
        "Correta. No etanol, o C do –CH2OH tem Nox −1 (2 H = −2, 1 O = +1, 1 C = 0). No –COOH vale +3 (O duplo = +2, O do –OH = +1). A variação de +4 é perda de elétrons, ou seja, oxidação.",
        "Errada. Esterificação exige ácido e álcool e forma éster. Aqui o álcool é convertido em ácido, com mudança de Nox.",
        "Errada. Desidratação intermolecular forma éter (CH3–CH2–O–CH2–CH3), mantém a ligação C–O e o Nox do carbono não muda. Aqui o álcool ganha oxigênio e perde hidrogênio: isso é oxidação, com Nox subindo."
      ],
      "dica": "Não pare no aldeído: se o enunciado fala em vinagre, o produto final é o ácido."
    },
    "fontes": [
      {
        "titulo": "PubChem: Acetic acid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Acetic-acid"
      },
      {
        "titulo": "OpenStax, Chemistry 2e: Organic Chemistry",
        "url": "https://openstax.org/books/chemistry-2e/pages/20-introduction"
      }
    ]
  },
  {
    "id": "qui-844",
    "materia": "quimica",
    "assunto": "Polímeros",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 1,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "As sacolas plásticas de supermercado são feitas de polietileno, um polímero formado por milhares de unidades que se repetem. Qual é o monômero do polietileno e que tipo de polimerização o produz?",
    "alternativas": [
      "Etano, CH3–CH3; polimerização por adição.",
      "Eteno, CH2=CH2; polimerização por condensação, com liberação de água.",
      "Propeno, CH2=CH–CH3; polimerização por adição.",
      "Etanol, CH3–CH2–OH; polimerização por condensação.",
      "Eteno, CH2=CH2; polimerização por adição."
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "O polietileno vem do eteno (CH2=CH2) por polimerização por adição.",
      "detalhada": "Na **polimerização por adição**, monômeros com dupla ligação C=C abrem a dupla e se unem sem produzir subproduto: n CH2=CH2 → –(CH2–CH2)n–.\n\nA massa do polímero é a soma exata das massas dos monômeros. Já na polimerização por **condensação**, os monômeros têm dois grupos reativos e a cada ligação sai uma molécula pequena (geralmente água).",
      "alternativas": [
        "Errada. O etano é saturado, não tem dupla ligação para se abrir e polimerizar.",
        "Errada. O monômero está certo, mas não há grupo funcional que elimine água. A polimerização é por adição.",
        "Errada. O propeno forma o polipropileno, não o polietileno.",
        "Errada. O etanol tem só um grupo –OH e não forma cadeia por condensação. (O etanol pode ser matéria-prima do eteno, mas não é o monômero.)",
        "Correta. A dupla C=C do eteno se abre e as moléculas se ligam em cadeia, sem perder nenhum átomo: –(CH2–CH2)n–."
      ],
      "dica": "Nome do polímero = poli + nome do monômero (polietileno vem do etileno, o eteno)."
    },
    "fontes": [
      {
        "titulo": "PubChem: Ethylene",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Ethylene"
      },
      {
        "titulo": "OpenStax, Chemistry 2e: Organic Chemistry",
        "url": "https://openstax.org/books/chemistry-2e/pages/20-introduction"
      }
    ]
  },
  {
    "id": "qui-845",
    "materia": "quimica",
    "assunto": "Polímeros",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "Garrafas de refrigerante são feitas de PET (politereftalato de etileno). Esse polímero é produzido a partir do ácido tereftálico (HOOC–C6H4–COOH) e do etilenoglicol (HO–CH2–CH2–OH), com liberação de água. Qual é o grupo funcional que une as unidades da cadeia e o tipo de polimerização?",
    "alternativas": [
      "Amida; polimerização por condensação.",
      "Éster; polimerização por condensação, com liberação de H2O.",
      "Éster; polimerização por adição, sem subproduto.",
      "Éter; polimerização por adição.",
      "Ácido carboxílico livre; polimerização por adição."
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "O PET é um poliéster formado por condensação entre um diácido e um diol, com perda de água.",
      "detalhada": "Reação de uma ligação: R–COOH + HO–R2 → R–COO–R2 + H2O. Como o ácido tereftálico tem dois –COOH e o etilenoglicol tem dois –OH, a reação continua nas duas pontas e forma uma cadeia longa de ésteres.\n\nPolímeros de condensação têm sempre um subproduto de baixa massa molar. Pelo mesmo motivo, o PET pode ser despolimerizado por hidrólise (reação com água), o que é usado em reciclagem química.",
      "alternativas": [
        "Errada. Amida (–CO–NH–) vem da reação de ácido com amina, como no náilon. O PET usa um diol, não uma diamina.",
        "Correta. Cada grupo –COOH reage com um –OH, formando –COO– e liberando água. Por ter vários ésteres na cadeia, o PET é um poliéster.",
        "Errada. Houve liberação de água, o que descarta adição.",
        "Errada. Não há éter na cadeia do PET e não houve adição.",
        "Errada. Os grupos –COOH reagem com os –OH e são consumidos. A cadeia é unida por ésteres."
      ],
      "dica": "Se o enunciado diz que sai água, é condensação. Diácido + diol = poliéster; diácido + diamina = poliamida."
    },
    "fontes": [
      {
        "titulo": "PubChem: Terephthalic acid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Terephthalic-acid"
      },
      {
        "titulo": "OpenStax, Chemistry 2e: Organic Chemistry",
        "url": "https://openstax.org/books/chemistry-2e/pages/20-introduction"
      }
    ]
  },
  {
    "id": "qui-846",
    "materia": "quimica",
    "assunto": "Polímeros",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "O náilon 6,6 é uma poliamida obtida pela reação da hexano-1,6-diamina (H2N–(CH2)6–NH2, M = 116 g/mol) com o ácido hexanodioico (HOOC–(CH2)4–COOH, M = 146 g/mol). Para cada unidade que se repete (uma diamina combinada com um diácido), formam-se duas ligações amida e são eliminadas duas moléculas de água (M = 18 g/mol). Qual é a massa molar da unidade que se repete?",
    "alternativas": [
      "262 g/mol",
      "244 g/mol",
      "208 g/mol",
      "226 g/mol",
      "116 g/mol"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "Unidade repetitiva = 116 + 146 − 36 = 226 g/mol.",
      "detalhada": "Cada ligação amida (–CO–NH–) forma-se com perda de uma H2O. Uma unidade completa tem os dois grupos –NH2 e os dois –COOH reagidos, ou seja, duas amidas e duas H2O perdidas.\n\nCálculo: 116 + 146 = 262; 262 − 36 = **226 g/mol**.\n\nConferência pela fórmula C12H22N2O2: 12 × 12 + 22 × 1 + 2 × 14 + 2 × 16 = 144 + 22 + 28 + 32 = 226.",
      "alternativas": [
        "Errada. É a soma 116 + 146, sem descontar a água liberada.",
        "Errada. Descontou só uma molécula de água (262 − 18). Foram duas.",
        "Errada. Descontou três moléculas de água. São duas por unidade repetitiva.",
        "Correta. 116 + 146 − 2 × 18 = 226 g/mol (fórmula C12H22N2O2).",
        "Errada. É só a massa da diamina, ignorando o diácido."
      ],
      "dica": "Em polímero de condensação, a massa final é menor que a soma dos monômeros, pelo tanto de água perdida."
    },
    "fontes": [
      {
        "titulo": "PubChem: Adipic acid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Adipic-acid"
      },
      {
        "titulo": "PubChem: Hexamethylenediamine",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Hexamethylenediamine"
      },
      {
        "titulo": "OpenStax, Chemistry 2e: Organic Chemistry",
        "url": "https://openstax.org/books/chemistry-2e/pages/20-introduction"
      }
    ]
  },
  {
    "id": "qui-847",
    "materia": "quimica",
    "assunto": "Polímeros",
    "tipo": "certo-errado",
    "estilo": "CEBRASPE",
    "dificuldade": 2,
    "objetivos": [
      "concursos-gerais",
      "livre"
    ],
    "enunciado": "Julgue o item. O PVC é um polímero de adição obtido do cloreto de vinila (CH2=CHCl). Sabendo que a massa molar do monômero é 62,5 g/mol, uma cadeia de PVC com 800 unidades monoméricas tem massa molar de 50 000 g/mol.",
    "resposta": true,
    "explicacao": {
      "resumo": "Certo. Em polímero de adição a massa é a soma das massas dos monômeros: 800 × 62,5 = 50 000 g/mol.",
      "detalhada": "O cloreto de vinila é C2H3Cl: 2 × 12 + 3 × 1 + 35,5 = 62,5 g/mol. Na polimerização por adição nenhum átomo é perdido, então a massa molar do polímero é n × M do monômero: 800 × 62,5 = **50 000 g/mol**.\n\nO PVC é usado em tubulações, e a reação é n CH2=CHCl → –(CH2–CHCl)n–.",
      "dica": "Em adição não se desconta nada; descontar água só vale em condensação."
    },
    "fontes": [
      {
        "titulo": "PubChem: Vinyl chloride",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Vinyl-chloride"
      },
      {
        "titulo": "OpenStax, Chemistry 2e: Organic Chemistry",
        "url": "https://openstax.org/books/chemistry-2e/pages/20-introduction"
      }
    ]
  },
  {
    "id": "qui-848",
    "materia": "quimica",
    "assunto": "Polímeros",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "Uma usina de reciclagem tritura, derrete e remoldura embalagens de polietileno (PE), mas não consegue fazer o mesmo com pedaços de baquelite, usada em cabos de panelas e tomadas. Qual propriedade estrutural explica essa diferença?",
    "alternativas": [
      "O polietileno tem cadeias lineares unidas por forças intermoleculares fracas, que cedem ao calor. A baquelite tem ligações covalentes cruzadas entre cadeias, que impedem a fusão.",
      "O polietileno tem ligações covalentes cruzadas entre as cadeias e a baquelite só tem forças intermoleculares.",
      "A baquelite é uma substância inorgânica, sem carbono, e por isso não derrete.",
      "O polietileno é de condensação e a baquelite de adição, e só os de condensação são recicláveis.",
      "A baquelite tem massa molar menor, logo não pode ser fundida."
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "Termoplásticos (cadeias lineares) refundem; termofixos (reticulados covalentes) não.",
      "detalhada": "**Termoplásticos** (polietileno, polipropileno, PET) têm cadeias independentes. Aquecidos, as forças entre as cadeias enfraquecem, o material amolece e pode ser remoldado várias vezes, o que viabiliza a reciclagem mecânica.\n\n**Termofixos** (baquelite, resinas epóxi) formam uma rede tridimensional com ligações covalentes entre as cadeias. Rompê-las exige tanta energia que o material se decompõe antes de fundir. Depois de moldados, não se remoldam.",
      "alternativas": [
        "Correta. É a diferença entre termoplástico (amolece e pode ser remoldado) e termofixo (rede tridimensional que, aquecida, se decompõe sem fundir).",
        "Errada. Está invertido: quem tem ligações cruzadas é a baquelite.",
        "Errada. A baquelite é orgânica, feita de fenol e formaldeído (metanal).",
        "Errada. O polietileno é de adição, e a reciclabilidade não depende do tipo de polimerização, mas da estrutura (linear ou reticulada).",
        "Errada. O ponto não é o tamanho da cadeia, e sim a rede covalente. Uma massa menor facilitaria a fusão."
      ],
      "dica": "Reciclar por fusão = termoplástico. Reticulado = termofixo."
    },
    "fontes": [
      {
        "titulo": "OpenStax, Chemistry 2e: Organic Chemistry",
        "url": "https://openstax.org/books/chemistry-2e/pages/20-introduction"
      },
      {
        "titulo": "Química Nova na Escola (SBQ)",
        "url": "https://qnesc.sbq.org.br/"
      }
    ]
  },
  {
    "id": "qui-849",
    "materia": "quimica",
    "assunto": "Polímeros",
    "tipo": "multipla",
    "estilo": "Cesgranrio",
    "dificuldade": 2,
    "objetivos": [
      "estatais",
      "livre"
    ],
    "enunciado": "O polipropileno, usado em peças automotivas e embalagens, é obtido por polimerização do propeno (C3H6, M = 42 g/mol). Uma amostra desse polímero tem massa molar média de 84 000 g/mol. Qual é o grau médio de polimerização (número de unidades de propeno por cadeia)?",
    "alternativas": [
      "200",
      "1 000",
      "2 000",
      "4 000",
      "3 528 000"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "n = 84 000 / 42 = 2 000.",
      "detalhada": "No polipropileno, –(CH2–CH(CH3))n–, a unidade repetitiva é igual ao monômero C3H6, com M = 3 × 12 + 6 × 1 = 42 g/mol.\n\nGrau de polimerização: **n = M(polímero) / M(monômero) = 84 000 / 42 = 2 000**.\n\nAmostras reais têm cadeias de tamanhos diferentes, por isso se fala em massa molar média.",
      "alternativas": [
        "Errada. Dividiu por 420 em vez de 42.",
        "Errada. Usaria M do monômero igual a 84, o dobro do correto (42).",
        "Correta. 84 000 / 42 = 2 000. Em polímero de adição, M do polímero = n × M do monômero.",
        "Errada. Usaria M do monômero igual a 21, a metade do correto.",
        "Errada. Multiplicou 84 000 por 42 em vez de dividir."
      ],
      "dica": "Grau de polimerização é divisão da massa do polímero pela do monômero."
    },
    "fontes": [
      {
        "titulo": "PubChem: Propene",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Propene"
      },
      {
        "titulo": "OpenStax, Chemistry 2e: Organic Chemistry",
        "url": "https://openstax.org/books/chemistry-2e/pages/20-introduction"
      }
    ]
  },
  {
    "id": "qui-850",
    "materia": "quimica",
    "assunto": "Polímeros",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "O PLA (ácido polilático) é um plástico de fonte renovável, feito a partir do ácido lático (CH3–CH(OH)–COOH). Em compostagem industrial, com calor e umidade, ele se degrada bem mais rápido que o polietileno. Que característica da estrutura química do PLA explica essa degradação?",
    "alternativas": [
      "É um hidrocarboneto de cadeia longa, que a água quebra facilmente.",
      "É uma poliamida, com ligações amida facilmente hidrolisadas por bactérias.",
      "É formado por adição de monômeros com dupla ligação, o que torna a cadeia instável.",
      "Possui pontes de enxofre entre as cadeias, que se quebram ao calor.",
      "É um poliéster: suas ligações éster são rompidas por hidrólise, formando de volta o ácido lático."
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "O PLA é um poliéster, e a ligação éster é hidrolisável, o que o torna biodegradável.",
      "detalhada": "O ácido lático é bifuncional: tem um grupo –OH e um grupo –COOH. A condensação entre eles forma a ligação éster e libera água: n HO–CH(CH3)–COOH → –(O–CH(CH3)–CO)n– + n H2O.\n\nA reação é reversível. Na presença de água, calor e catálise (ácida, básica ou enzimática), a cadeia sofre **hidrólise** e volta a pequenos fragmentos, que micro-organismos metabolizam. Já os polímeros só de C–C (polietileno, PP) não têm ponto fraco para a água atacar.\n\nA biodegradação do PLA depende de condições industriais. Em lixão ou mar, ele é bem mais lento.",
      "alternativas": [
        "Errada. Hidrocarbonetos só têm C–C e C–H, apolares e muito estáveis diante da água. Isso descreve o polietileno, não o PLA.",
        "Errada. O ácido lático não tem nitrogênio. Não há ligação amida.",
        "Errada. O ácido lático não tem dupla C=C. O PLA é de condensação, e a adição não torna cadeias instáveis.",
        "Errada. Pontes de enxofre aparecem na borracha vulcanizada. O PLA não tem enxofre.",
        "Correta. O ácido lático tem –OH e –COOH, e reage consigo mesmo formando ésteres. A água, em calor e meio adequado, quebra a ligação éster (hidrólise), e os micro-organismos consomem os fragmentos."
      ],
      "dica": "Polímero biodegradável costuma ter ligação hidrolisável: éster ou amida."
    },
    "fontes": [
      {
        "titulo": "PubChem: Lactic acid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Lactic-acid"
      },
      {
        "titulo": "OpenStax, Chemistry 2e: Organic Chemistry",
        "url": "https://openstax.org/books/chemistry-2e/pages/20-introduction"
      }
    ]
  },
  {
    "id": "qui-851",
    "materia": "quimica",
    "assunto": "Polímeros",
    "tipo": "certo-errado",
    "estilo": "CEBRASPE",
    "dificuldade": 2,
    "objetivos": [
      "concursos-gerais",
      "livre"
    ],
    "enunciado": "Julgue o item. A vulcanização da borracha natural consiste na quebra das cadeias do polímero em moléculas menores, o que torna o material mais macio e menos resistente.",
    "resposta": false,
    "explicacao": {
      "resumo": "Errado. A vulcanização usa enxofre para criar pontes entre cadeias, aumentando a resistência e a elasticidade.",
      "detalhada": "Na vulcanização (Goodyear, 1839), o aquecimento com enxofre forma **pontes de enxofre (–S–S–)** entre cadeias vizinhas do poli-isopreno. A rede reticulada resultante é mais resistente, elástica e menos pegajosa que a borracha natural.\n\nO item inverte o processo: não há quebra das cadeias, há ligação cruzada entre elas, e o material fica mais resistente, não menos.",
      "dica": "Vulcanização liga cadeias (reticula). Quebrar cadeias é degradação ou craqueamento."
    },
    "fontes": [
      {
        "titulo": "OpenStax, Chemistry 2e: Organic Chemistry",
        "url": "https://openstax.org/books/chemistry-2e/pages/20-introduction"
      },
      {
        "titulo": "Química Nova na Escola (SBQ)",
        "url": "https://qnesc.sbq.org.br/"
      }
    ]
  },
  {
    "id": "qui-852",
    "materia": "quimica",
    "assunto": "Polímeros",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "O politetrafluoretileno (PTFE, conhecido como Teflon) reveste frigideiras antiaderentes por ser quimicamente muito inerte. Que monômero origina esse polímero?",
    "alternativas": [
      "Cloreto de vinila, CH2=CHCl",
      "Tetrafluoroeteno, CF2=CF2",
      "Etileno, CH2=CH2",
      "Estireno, C6H5–CH=CH2",
      "Acrilonitrila, CH2=CH–CN"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "O Teflon vem do tetrafluoroeteno, CF2=CF2, por polimerização de adição.",
      "detalhada": "O nome já dá a pista: poli + tetra (4) + fluor + eteno. O monômero é o eteno com os quatro hidrogênios trocados por flúor, CF2=CF2.\n\nA cadeia –(CF2–CF2)n– tem ligações C–F muito fortes (cerca de 485 kJ/mol) e uma \"capa\" de flúor em volta do esqueleto de carbono. O resultado é um material resistente a ácidos e solventes e com baixo atrito.",
      "alternativas": [
        "Errada. É o monômero do PVC, que tem cloro e não flúor.",
        "Correta. A adição do CF2=CF2 dá –(CF2–CF2)n–. As ligações C–F são muito fortes, o que explica a inércia do material.",
        "Errada. É o monômero do polietileno, sem flúor.",
        "Errada. É o monômero do poliestireno (isopor), com anel aromático.",
        "Errada. É o monômero da poliacrilonitrila, usada em fibras acrílicas, com grupo nitrila."
      ],
      "dica": "Decodifique o nome: poli + (prefixos) + nome do alceno."
    },
    "fontes": [
      {
        "titulo": "PubChem: Tetrafluoroethylene",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Tetrafluoroethylene"
      },
      {
        "titulo": "OpenStax, Chemistry 2e: Organic Chemistry",
        "url": "https://openstax.org/books/chemistry-2e/pages/20-introduction"
      }
    ]
  },
  {
    "id": "qui-853",
    "materia": "quimica",
    "assunto": "Petróleo e combustíveis",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 1,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "Nas refinarias, o petróleo bruto é aquecido e levado a uma torre onde é separado em gasolina, querosene, diesel e outras frações. Qual é o princípio físico que permite essa separação?",
    "alternativas": [
      "A diferença de densidade, com separação por centrifugação em alta rotação.",
      "A diferença de solubilidade em água, que dissolve as frações leves.",
      "Uma reação química que quebra o petróleo em substâncias diferentes.",
      "A diferença entre os pontos de ebulição dos componentes: as frações mais voláteis sobem e saem pelo topo, e as mais pesadas saem mais abaixo.",
      "A filtração, que retém os componentes mais pesados em membranas."
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "A destilação fracionada separa o petróleo pela diferença dos pontos de ebulição.",
      "detalhada": "O petróleo é uma mistura de hidrocarbonetos. Quanto maior a cadeia, mais forte a interação de London entre as moléculas e **maior o ponto de ebulição**.\n\nNa torre de fracionamento há um gradiente de temperatura: quente na base, frio no topo. Cada fração (GLP, gasolina, querosene, diesel, lubrificantes) condensa e é recolhida na altura correspondente. É uma separação física, sem reação química.",
      "alternativas": [
        "Errada. A centrifugação não é a operação usada na torre. O processo se baseia em volatilidade.",
        "Errada. Hidrocarbonetos são apolares e quase insolúveis em água, e não se usa água para separá-los.",
        "Errada. Na destilação não há reação, só separação física. Quebrar moléculas é o craqueamento, outra etapa.",
        "Correta. É a destilação fracionada. Cada fração condensa em uma altura da torre, conforme a temperatura de condensação.",
        "Errada. O petróleo é uma mistura líquida de moléculas dissolvidas umas nas outras. Filtros não as separam."
      ],
      "dica": "Destilação = separação física por ponto de ebulição, não reação."
    },
    "fontes": [
      {
        "titulo": "ANP: Agência Nacional do Petróleo, Gás Natural e Biocombustíveis",
        "url": "https://www.gov.br/anp/pt-br"
      },
      {
        "titulo": "OpenStax, Chemistry 2e: Organic Chemistry",
        "url": "https://openstax.org/books/chemistry-2e/pages/20-introduction"
      }
    ]
  },
  {
    "id": "qui-854",
    "materia": "quimica",
    "assunto": "Petróleo e combustíveis",
    "tipo": "multipla",
    "estilo": "Cesgranrio",
    "dificuldade": 2,
    "objetivos": [
      "estatais",
      "livre"
    ],
    "enunciado": "Em uma torre de destilação fracionada de petróleo, as frações são retiradas em alturas diferentes. Considerando a saída do topo para a base da torre, qual é a ordem correta das frações?",
    "alternativas": [
      "GLP, gasolina, querosene, óleo diesel, óleos lubrificantes",
      "Gasolina, GLP, querosene, óleo diesel, óleos lubrificantes",
      "Óleo diesel, querosene, gasolina, GLP, óleos lubrificantes",
      "Querosene, gasolina, GLP, óleo diesel, óleos lubrificantes",
      "Óleos lubrificantes, óleo diesel, querosene, gasolina, GLP"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "Do topo para a base: GLP, gasolina, querosene, diesel, lubrificantes.",
      "detalhada": "Quanto menor a cadeia carbônica, menor o ponto de ebulição e mais alto na torre a fração sai:\n\n- GLP: C3 a C4;\n- gasolina: C5 a C10;\n- querosene: C10 a C16;\n- diesel: C13 a C20;\n- lubrificantes e resíduos: acima de C20.\n\nAs faixas de carbono são aproximadas e se sobrepõem (o querosene e o diesel dividem moléculas de C13 a C16), pois o corte é por temperatura de ebulição, não por número exato de carbonos.\n\nO resíduo da base (asfalto, óleo combustível) ainda pode ser destilado a pressão reduzida.",
      "alternativas": [
        "Correta. Do topo (frio) para a base (quente): saem primeiro as moléculas menores e mais voláteis e depois as de cadeias cada vez maiores.",
        "Errada. O GLP (C3 e C4) é mais leve e mais volátil que a gasolina (C5 a C10), então sai acima dela.",
        "Errada. A ordem sai invertida: diesel e querosene ficam acima da gasolina e do GLP, que são mais leves e mais voláteis.",
        "Errada. A gasolina tem pontos de ebulição mais baixos que o querosene e sai acima dele.",
        "Errada. É a ordem da base para o topo, exatamente o contrário do pedido."
      ],
      "dica": "Leia o enunciado: topo para base ou base para topo? A banca troca."
    },
    "fontes": [
      {
        "titulo": "ANP: Agência Nacional do Petróleo, Gás Natural e Biocombustíveis",
        "url": "https://www.gov.br/anp/pt-br"
      },
      {
        "titulo": "OpenStax, Chemistry 2e: Organic Chemistry",
        "url": "https://openstax.org/books/chemistry-2e/pages/20-introduction"
      }
    ]
  },
  {
    "id": "qui-855",
    "materia": "quimica",
    "assunto": "Petróleo e combustíveis",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "A octanagem mede a resistência de um combustível à detonação precoce no motor. Por definição, o isoctano (2,2,4-trimetilpentano) tem índice 100 e o n-heptano tem índice 0, e o índice de uma gasolina é a porcentagem, em volume, de isoctano na mistura isoctano / n-heptano que se comporta como ela. Um laboratório prepara 500 mL dessa mistura para equivaler a uma gasolina de índice 87. Qual volume de n-heptano é necessário?",
    "alternativas": [
      "13 mL",
      "87 mL",
      "65 mL",
      "130 mL",
      "435 mL"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "A 87% de isoctano, o n-heptano é 13% de 500 mL = 65 mL.",
      "detalhada": "Índice de octanagem 87 = mistura com 87% de isoctano. O restante é n-heptano: 100 − 87 = 13%.\n\nVolume de n-heptano = 0,13 × 500 = **65 mL**; de isoctano, 435 mL.\n\nQuímica por trás: o isoctano, ramificado, resiste melhor à compressão e queima de forma mais controlada. O n-heptano, de cadeia reta, detona facilmente. Por isso o refino aumenta ramificados e aromáticos (reforma catalítica) para subir a octanagem.",
      "alternativas": [
        "Errada. Usou 13 mL, tratando 13% como se fosse 13 mL em vez de 13% de 500 mL.",
        "Errada. Confundiu a porcentagem de isoctano (87%) com volume de n-heptano.",
        "Correta. Índice 87 significa 87% de isoctano e 13% de n-heptano. 13% de 500 mL = 65 mL.",
        "Errada. Dobrou o valor correto.",
        "Errada. É o volume de isoctano (87% de 500 mL), não o de n-heptano."
      ],
      "dica": "Octanagem = % de isoctano. O n-heptano é o complemento."
    },
    "fontes": [
      {
        "titulo": "PubChem: Isooctane",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Isooctane"
      },
      {
        "titulo": "ANP: Agência Nacional do Petróleo, Gás Natural e Biocombustíveis",
        "url": "https://www.gov.br/anp/pt-br"
      }
    ]
  },
  {
    "id": "qui-856",
    "materia": "quimica",
    "assunto": "Petróleo e combustíveis",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "O biodiesel é produzido pela transesterificação de óleos vegetais com metanol ou etanol, usando um catalisador básico (como NaOH). Em cada reação, um mol de triglicerídeo reage com álcool e forma três mols de ésteres de ácidos graxos (o biodiesel). Qual é o coproduto formado e quantos mols de álcool são necessários, no mínimo, para cada mol de triglicerídeo?",
    "alternativas": [
      "Água; 3 mol de álcool.",
      "Glicerol; 3 mol de álcool.",
      "Glicerol; 1 mol de álcool.",
      "Ácidos graxos livres; 3 mol de álcool.",
      "Glicerol; 6 mol de álcool."
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "A transesterificação gera 3 ésteres (biodiesel) e 1 glicerol, consumindo 3 mol de álcool por mol de óleo.",
      "detalhada": "Equação: triglicerídeo + 3 R2–OH ⇌ 3 R–COO–R2 + glicerol (propano-1,2,3-triol).\n\nO nome \"trans-esterificação\" vem da troca de um álcool por outro no éster: o glicerol sai e o metanol ou o etanol entra. Com metanol, o biodiesel é composto por ésteres metílicos.\n\nNa indústria usa-se excesso de álcool (cerca de 6 : 1) para deslocar o equilíbrio, mas o mínimo estequiométrico é 3 : 1.\n\nO glicerol é subproduto (cerca de 10% da massa do biodiesel produzido) e deve ser separado e aproveitado, para não virar resíduo.",
      "alternativas": [
        "Errada. A água sai em esterificação direta de ácido + álcool. Na transesterificação, sai glicerol.",
        "Correta. Cada uma das três ligações éster do triglicerídeo troca o glicerol pelo grupo alquila do álcool. Libera 1 glicerol e consome 3 álcoois, por isso na prática se usa excesso de álcool.",
        "Errada. O coproduto está certo, mas há três ligações éster para trocar, logo são 3 mols.",
        "Errada. Ácidos livres vêm de hidrólise. Aqui os ácidos terminam como ésteres do álcool.",
        "Errada. Em equação, bastam 3 mol. Usa-se excesso na indústria, mas o mínimo estequiométrico é 3."
      ],
      "dica": "Biodiesel não é óleo vegetal puro. É éster de metila ou etila, bem menos viscoso."
    },
    "fontes": [
      {
        "titulo": "ANP: Biodiesel",
        "url": "https://www.gov.br/anp/pt-br/assuntos/producao-e-fornecimento-de-biocombustiveis/biodiesel"
      },
      {
        "titulo": "OpenStax, Chemistry 2e: Organic Chemistry",
        "url": "https://openstax.org/books/chemistry-2e/pages/20-introduction"
      }
    ]
  },
  {
    "id": "qui-857",
    "materia": "quimica",
    "assunto": "Petróleo e combustíveis",
    "tipo": "multipla",
    "estilo": "Cesgranrio",
    "dificuldade": 2,
    "objetivos": [
      "estatais",
      "livre"
    ],
    "enunciado": "Em uma unidade de pesquisa de biocombustíveis, mede-se a entalpia de combustão do etanol (C2H5OH, M = 46 g/mol): ΔH = −1 368 kJ/mol. Que quantidade aproximada de calor é liberada na combustão completa de 230 g de etanol?",
    "alternativas": [
      "684 kJ",
      "1 368 kJ",
      "3 420 kJ",
      "314 640 kJ",
      "6 840 kJ"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "230 g são 5 mol de etanol; 5 × 1 368 = 6 840 kJ liberados.",
      "detalhada": "ΔH = −1 368 kJ/mol significa que cada mol queimado libera 1 368 kJ (reação exotérmica).\n\n- n = 230 g / 46 g/mol = 5,0 mol\n- Q = 5,0 × 1 368 = **6 840 kJ**\n\nPor massa, o etanol libera cerca de 1 368 / 46 ≈ 29,7 kJ/g. Esse é o poder calorífico, base para comparar combustíveis.",
      "alternativas": [
        "Errada. Equivale a 0,5 mol (23 g) de etanol, não 230 g.",
        "Errada. É o calor de 1 mol (46 g). A massa dada tem 5 mol.",
        "Errada. Corresponde a 2,5 mol (115 g). Houve erro na conversão de massa em mol.",
        "Errada. Multiplicou 1 368 por 230, usando a massa em gramas como se fosse número de mols.",
        "Correta. 230 / 46 = 5 mol; 5 × 1 368 = 6 840 kJ liberados."
      ],
      "dica": "Converta sempre a massa em mols antes de multiplicar pela entalpia molar."
    },
    "fontes": [
      {
        "titulo": "PubChem: Ethanol",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Ethanol"
      },
      {
        "titulo": "OpenStax, Chemistry 2e: Organic Chemistry",
        "url": "https://openstax.org/books/chemistry-2e/pages/20-introduction"
      }
    ]
  },
  {
    "id": "qui-858",
    "materia": "quimica",
    "assunto": "Petróleo e combustíveis",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "Para decidir qual combustível abastecer, considera-se quanto custa cada unidade de energia liberada. Use valores hipotéticos simplificados: a gasolina custa R$ 6,40 por litro e libera 32 MJ por litro; o etanol libera 21 MJ por litro. Qual é o maior preço do litro de etanol para que ele custe, por MJ, o mesmo que a gasolina?",
    "alternativas": [
      "R$ 3,20",
      "R$ 4,48",
      "R$ 5,12",
      "R$ 4,20",
      "R$ 9,75"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "A gasolina custa R$ 0,20 por MJ; o etanol equivale a ela a 0,20 × 21 = R$ 4,20 por litro.",
      "detalhada": "Custo por energia da gasolina: 6,40 / 32 = R$ 0,20 por MJ.\n\nPara o etanol ter o mesmo custo: preço = 0,20 × 21 = **R$ 4,20 por litro**. Equivale a 21/32 ≈ 0,656 do preço da gasolina.\n\nA relação vem de o etanol liberar menos energia por litro (a molécula já tem oxigênio, está parcialmente oxidada). Abaixo de R$ 4,20 o etanol compensa; acima, a gasolina compensa. Esse cálculo ignora o consumo real do motor, que também varia.",
      "alternativas": [
        "Errada. Usou metade do preço da gasolina, sem considerar os poderes caloríficos.",
        "Errada. Aplicou a \"regra dos 70%\" (0,7 × 6,40). Aqui a razão energética é 21/32 ≈ 65,6%, não 70%.",
        "Errada. Aplicou 80% (0,8 × 6,40), valor sem apoio nos dados.",
        "Correta. Gasolina: 6,40 / 32 = R$ 0,20 por MJ. Etanol: preço = 0,20 × 21 = R$ 4,20 por litro.",
        "Errada. Inverteu a razão: 6,40 × 32 / 21. Como o etanol rende menos energia por litro, seu preço limite deve ser menor."
      ],
      "dica": "Compare custo por unidade de energia, não por litro."
    },
    "fontes": [
      {
        "titulo": "ANP: Agência Nacional do Petróleo, Gás Natural e Biocombustíveis",
        "url": "https://www.gov.br/anp/pt-br"
      },
      {
        "titulo": "Química Nova na Escola (SBQ)",
        "url": "https://qnesc.sbq.org.br/"
      }
    ]
  },
  {
    "id": "qui-859",
    "materia": "quimica",
    "assunto": "Petróleo e combustíveis",
    "tipo": "multipla",
    "estilo": "Cesgranrio",
    "dificuldade": 2,
    "objetivos": [
      "estatais",
      "livre"
    ],
    "enunciado": "Em uma refinaria, o gasóleo pesado, fração de cadeias longas, é enviado a uma unidade de craqueamento catalítico em leito fluidizado. Qual é a finalidade química desse processo?",
    "alternativas": [
      "Quebrar moléculas grandes em menores, aumentando a produção de gasolina e GLP.",
      "Unir moléculas pequenas em cadeias maiores, para produzir óleos lubrificantes.",
      "Retirar o enxofre dos combustíveis por reação com hidrogênio.",
      "Separar as frações pela diferença de temperatura de ebulição.",
      "Converter hidrocarbonetos lineares em aromáticos para aumentar a octanagem."
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "O craqueamento catalítico quebra hidrocarbonetos grandes em menores, ampliando a oferta de gasolina.",
      "detalhada": "A demanda por gasolina e GLP é maior que a fração leve que sai do petróleo cru. O **craqueamento** converte frações pesadas (gasóleo) em leves: C16H34 → C8H18 + C8H16, por exemplo, um alcano mais um alceno.\n\nCom catalisadores sólidos ácidos (zeólitas), o processo é conduzido a cerca de 500 °C. Os alcenos formados são matérias-primas petroquímicas (eteno, propeno).",
      "alternativas": [
        "Correta. O craqueamento rompe ligações C–C de hidrocarbonetos de cadeia longa na presença de catalisador (zeólitas) e alta temperatura, convertendo frações pesadas em leves, mais valiosas.",
        "Errada. É o inverso: craqueamento quebra, não une. A união de moléculas pequenas é polimerização ou alquilação.",
        "Errada. É a hidrodessulfurização (HDS), outro processo.",
        "Errada. É a destilação fracionada, uma separação física anterior ao craqueamento.",
        "Errada. Descreve a reforma catalítica. No craqueamento o objetivo é reduzir o tamanho das moléculas."
      ],
      "dica": "Craqueamento = quebrar. Não confunda com destilação (separar) nem com reforma (rearranjar)."
    },
    "fontes": [
      {
        "titulo": "ANP: Agência Nacional do Petróleo, Gás Natural e Biocombustíveis",
        "url": "https://www.gov.br/anp/pt-br"
      },
      {
        "titulo": "OpenStax, Chemistry 2e: Organic Chemistry",
        "url": "https://openstax.org/books/chemistry-2e/pages/20-introduction"
      }
    ]
  },
  {
    "id": "qui-860",
    "materia": "quimica",
    "assunto": "Petróleo e combustíveis",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "Um caminhão consome 11,4 kg de combustível por viagem. Considere o combustível como octano puro, C8H18 (M = 114 g/mol), queimado completamente: C8H18 + 25/2 O2 → 8 CO2 + 9 H2O. Dado M(CO2) = 44 g/mol, qual é a massa de CO2 lançada na atmosfera?",
    "alternativas": [
      "4,4 kg",
      "11,4 kg",
      "35,2 kg",
      "17,6 kg",
      "70,4 kg"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "100 mol de octano produzem 800 mol de CO2 = 35,2 kg.",
      "detalhada": "- n(C8H18) = 11 400 g / 114 g/mol = 100 mol\n- proporção 1 : 8, logo n(CO2) = 800 mol\n- m(CO2) = 800 × 44 = 35 200 g = **35,2 kg**\n\nA massa de CO2 é bem maior que a do combustível, porque cada carbono do octano se junta a dois oxigênios do ar. É por isso que queimar 1 kg de combustível fóssil emite mais de 3 kg de CO2.",
      "alternativas": [
        "Errada. Esqueceu o coeficiente 8: considerou 100 mol de CO2, em vez de 800.",
        "Errada. Supôs que a massa de CO2 é igual à do combustível. A massa dos produtos inclui o oxigênio do ar consumido.",
        "Correta. 11,4 kg são 100 mol de octano, que geram 800 mol de CO2, o equivalente a 35,2 kg.",
        "Errada. Usou 4 mol de CO2 por mol de octano, em vez de 8.",
        "Errada. Usou 16 mol de CO2 por mol de octano, o dobro do coeficiente da equação."
      ],
      "dica": "O CO2 emitido pesa mais que o combustível queimado: se der menos, desconfie da conta."
    },
    "fontes": [
      {
        "titulo": "PubChem: Octane",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Octane"
      },
      {
        "titulo": "OpenStax, Chemistry 2e: Organic Chemistry",
        "url": "https://openstax.org/books/chemistry-2e/pages/20-introduction"
      }
    ]
  },
  {
    "id": "qui-861",
    "materia": "quimica",
    "assunto": "Petróleo e combustíveis",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "O óleo diesel com alto teor de enxofre, quando queimado, gera um poluente que prejudica o ambiente mesmo longe do local da queima. Por isso, a legislação foi reduzindo o enxofre permitido no diesel (S500, S10). Qual é a consequência ambiental associada ao enxofre do combustível e por quê?",
    "alternativas": [
      "Destruição da camada de ozônio, pois o enxofre forma compostos do tipo CFC.",
      "Formação de monóxido de carbono, pois o enxofre retira oxigênio do carbono.",
      "Formação de óxidos de nitrogênio pela reação do enxofre com o N2 do ar.",
      "Maior efeito estufa, pois o SO2 é o principal gás estufa.",
      "Formação de SO2, que na atmosfera se oxida a SO3 e produz ácido sulfúrico com a água da chuva, causando chuva ácida."
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "O enxofre vira SO2, depois SO3, e forma H2SO4 na chuva: chuva ácida.",
      "detalhada": "O petróleo traz compostos de enxofre (tióis, sulfetos, tiofenos). Ao queimar o diesel: **S + O2 → SO2**.\n\nNa atmosfera, o SO2 é oxidado a SO3, que reage com a água das nuvens: **SO3 + H2O → H2SO4**. A chuva fica ácida, o que corrói mármore e metais, danifica plantas e acidifica lagos.\n\nPor isso as refinarias retiram o enxofre por hidrodessulfurização, e o diesel S10 tem no máximo 10 mg de enxofre por kg.",
      "alternativas": [
        "Errada. A camada de ozônio é atacada por CFCs (cloro e flúor), não por enxofre.",
        "Errada. O CO surge da combustão incompleta do carbono. O enxofre não é responsável por isso.",
        "Errada. Os NOx se formam do N2 e O2 em altas temperaturas, sem participação do enxofre.",
        "Errada. O principal gás estufa de origem fóssil é o CO2. O SO2 é, no conjunto, mais associado à chuva ácida e a aerossóis.",
        "Correta. S + O2 → SO2; 2 SO2 + O2 → 2 SO3; SO3 + H2O → H2SO4. O ácido sulfúrico acidifica a chuva, corroendo construções e acidificando solos e rios."
      ],
      "dica": "Chuva ácida: enxofre (H2SO4) e nitrogênio (HNO3). Camada de ozônio: CFC."
    },
    "fontes": [
      {
        "titulo": "ANP: Agência Nacional do Petróleo, Gás Natural e Biocombustíveis",
        "url": "https://www.gov.br/anp/pt-br"
      },
      {
        "titulo": "OpenStax, Chemistry 2e: Organic Chemistry",
        "url": "https://openstax.org/books/chemistry-2e/pages/20-introduction"
      }
    ]
  },
  {
    "id": "qui-862",
    "materia": "quimica",
    "assunto": "Bioquímica",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 1,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "O açúcar de mesa (sacarose) é um dissacarídeo formado pela união de uma molécula de glicose com uma de frutose, ambas de fórmula C6H12O6, com perda de uma molécula de água. Qual é a fórmula molecular da sacarose?",
    "alternativas": [
      "C12H24O12",
      "C12H22O11",
      "C12H20O10",
      "C6H12O6",
      "C11H22O11"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Sacarose = glicose + frutose − H2O = C12H22O11.",
      "detalhada": "Os dois monossacarídeos são isômeros (C6H12O6). A união forma uma **ligação glicosídica** (um acetal, grupo com dois oxigênios no mesmo carbono, entre dois açúcares) e libera uma molécula de água, uma reação de condensação.\n\nC6H12O6 + C6H12O6 → C12H22O11 + H2O.\n\nA reação inversa, a hidrólise (ácida ou pela enzima invertase), separa glicose e frutose.",
      "alternativas": [
        "Errada. É a soma das duas moléculas, sem descontar a água perdida.",
        "Correta. 2 C6H12O6 = C12H24O12; retirando H2O sobra C12H22O11.",
        "Errada. Descontou duas moléculas de água. Foi só uma.",
        "Errada. É a fórmula dos monossacarídeos, não do dissacarídeo.",
        "Errada. Número errado de carbonos: nenhum carbono se perde na reação, só H2O."
      ],
      "dica": "Dissacarídeo = dois monossacarídeos − 1 H2O. Trissacarídeo = três − 2 H2O."
    },
    "fontes": [
      {
        "titulo": "PubChem: Sucrose",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Sucrose"
      },
      {
        "titulo": "OpenStax, Biology 2e: Biological Macromolecules",
        "url": "https://openstax.org/books/biology-2e/pages/3-introduction"
      }
    ]
  },
  {
    "id": "qui-863",
    "materia": "quimica",
    "assunto": "Bioquímica",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "O amido do arroz e a celulose do papel são formados apenas por unidades de glicose, mas o ser humano digere o amido e não digere a celulose. Qual é a explicação química para isso?",
    "alternativas": [
      "A celulose é formada por frutose, e o organismo não metaboliza a frutose.",
      "O amido é uma proteína e a celulose é um carboidrato.",
      "A celulose é um lipídio e é insolúvel em água, por isso não é digerida.",
      "Os dois são polímeros da glicose, mas a celulose tem ligações glicosídicas do tipo β, que as enzimas digestivas humanas não hidrolisam; no amido as ligações são α.",
      "O ser humano digere celulose, mas não amido, que é muito ramificado."
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "A diferença está na ligação glicosídica: α no amido (digerível) e β na celulose (não digerível pelo ser humano).",
      "detalhada": "Amido e celulose são **polissacarídeos de glicose**, mas diferem na geometria da ligação entre as unidades. No amido, a ligação é **α-1,4** (com ramificações α-1,6 na amilopectina), formando cadeias helicoidais. Na celulose, é **β-1,4**, e as cadeias ficam lineares e se empacotam por ligações de hidrogênio, formando fibras rígidas.\n\nEnzimas são específicas: a amilase quebra α-1,4, mas não β-1,4. Ruminantes e cupins abrigam micro-organismos que produzem celulase. Para nós, a celulose funciona como fibra alimentar.",
      "alternativas": [
        "Errada. A celulose é polímero de glicose, e a frutose é metabolizada normalmente.",
        "Errada. Ambos são polissacarídeos. Proteínas são polímeros de aminoácidos.",
        "Errada. A celulose é carboidrato. Sua insolubilidade vem da rede de ligações de hidrogênio, não de ser lipídio.",
        "Correta. A amilase humana reconhece ligações α-1,4 do amido. A celulose tem ligações β-1,4, e faltam ao ser humano as celulases.",
        "Errada. É o contrário do que ocorre na prática: o amido é digerido pela amilase."
      ],
      "dica": "Mesma glicose, geometria de ligação diferente: é a especificidade enzimática em ação."
    },
    "fontes": [
      {
        "titulo": "OpenStax, Biology 2e: Biological Macromolecules",
        "url": "https://openstax.org/books/biology-2e/pages/3-introduction"
      },
      {
        "titulo": "Wikipédia: Amido",
        "url": "https://pt.wikipedia.org/wiki/Amido"
      }
    ]
  },
  {
    "id": "qui-864",
    "materia": "quimica",
    "assunto": "Bioquímica",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "A manteiga (gordura animal) é sólida em temperatura ambiente, enquanto o azeite de oliva é líquido. Ambos são constituídos principalmente por triglicerídeos. Que diferença química explica o estado físico de cada um?",
    "alternativas": [
      "A manteiga tem só ligações duplas e o azeite só ligações simples.",
      "O azeite tem cadeias muito maiores, com massa molar muito alta, o que o deixa líquido.",
      "O azeite é um carboidrato e a manteiga um lipídio.",
      "A manteiga contém glicerol e o azeite não, por isso solidifica.",
      "O azeite é rico em ácidos graxos insaturados, com duplas cis que dobram as cadeias e dificultam o empacotamento, o que reduz o ponto de fusão."
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "Duplas cis nos ácidos graxos insaturados do azeite dobram as cadeias e baixam o ponto de fusão.",
      "detalhada": "Triglicerídeos são ésteres do glicerol com três ácidos graxos. O que muda o ponto de fusão é o tipo de ácido graxo:\n\n- **saturados** (só C–C simples): cadeias lineares, bem empacotadas, forte atração de London, sólidos (gordura animal, manteiga);\n- **insaturados cis** (C=C): a dupla cria uma dobra, impede o empacotamento, ponto de fusão baixo, líquidos (óleos vegetais).\n\nA hidrogenação catalítica de óleos (margarina) transforma duplas em simples e eleva o ponto de fusão, tornando o produto pastoso.",
      "alternativas": [
        "Errada. Está invertido: as duplas predominam no azeite.",
        "Errada. Cadeias maiores tendem a elevar o ponto de fusão. O estado líquido vem das duplas cis.",
        "Errada. Os dois são lipídios (triglicerídeos). Nenhum é carboidrato.",
        "Errada. Os dois são ésteres do glicerol com ácidos graxos.",
        "Correta. Cadeias dobradas interagem menos entre si (forças de London mais fracas), e o triglicerídeo permanece líquido. Na manteiga predominam ácidos graxos saturados, de cadeia reta e bem empacotada."
      ],
      "dica": "Mais insaturação = mais líquido. Hidrogenar = solidificar."
    },
    "fontes": [
      {
        "titulo": "OpenStax, Biology 2e: Biological Macromolecules",
        "url": "https://openstax.org/books/biology-2e/pages/3-introduction"
      },
      {
        "titulo": "PubChem: Glycerol",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Glycerol"
      }
    ]
  },
  {
    "id": "qui-865",
    "materia": "quimica",
    "assunto": "Bioquímica",
    "tipo": "certo-errado",
    "estilo": "CEBRASPE",
    "dificuldade": 2,
    "objetivos": [
      "concursos-gerais",
      "livre"
    ],
    "enunciado": "Julgue o item. A ligação peptídica forma-se entre o grupo carboxila de um aminoácido e o grupo amino de outro, com liberação de água. Assim, a massa molar de um tripeptídeo formado por três moléculas de glicina (H2N–CH2–COOH, M = 75 g/mol) é 189 g/mol.",
    "resposta": true,
    "explicacao": {
      "resumo": "Certo. Três glicinas somam 225 g/mol e a formação de 2 ligações peptídicas libera 2 H2O (36 g/mol): 225 − 36 = 189 g/mol.",
      "detalhada": "Cada ligação peptídica (amida, –CO–NH–) é formada por condensação com perda de uma molécula de água. Um tripeptídeo tem 3 resíduos e 2 ligações peptídicas, logo perde 2 H2O.\n\nM = 3 × 75 − 2 × 18 = 225 − 36 = **189 g/mol**.\n\nRegra geral para um peptídeo com n aminoácidos: M = soma das massas dos aminoácidos − (n − 1) × 18.",
      "dica": "n aminoácidos formam n − 1 ligações peptídicas e liberam n − 1 águas."
    },
    "fontes": [
      {
        "titulo": "PubChem: Glycine",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Glycine"
      },
      {
        "titulo": "OpenStax, Biology 2e: Biological Macromolecules",
        "url": "https://openstax.org/books/biology-2e/pages/3-introduction"
      }
    ]
  },
  {
    "id": "qui-866",
    "materia": "quimica",
    "assunto": "Bioquímica",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "Para pessoas com intolerância à lactose, vende-se leite adicionado da enzima lactase, que converte a lactose em glicose e galactose antes do consumo. Qual é o papel químico da lactase nessa transformação?",
    "alternativas": [
      "Reduzir a energia de ativação da hidrólise da lactose, acelerando a reação sem ser consumida.",
      "Fornecer a energia necessária para quebrar a lactose.",
      "Ser consumida na reação, transformando-se em glicose e galactose.",
      "Deslocar o equilíbrio e aumentar o rendimento final em glicose e galactose.",
      "Funcionar com a mesma eficiência em qualquer temperatura ou pH."
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "A lactase é catalisador biológico: baixa a energia de ativação da hidrólise da lactose e não é consumida.",
      "detalhada": "A lactose é um dissacarídeo (galactose + glicose). A reação catalisada é uma **hidrólise**: lactose + H2O → glicose + galactose.\n\nCaracterísticas das enzimas:\n\n- **diminuem a energia de ativação**, aumentando a velocidade;\n- **não são consumidas** e não mudam o equilíbrio nem o ΔH da reação;\n- são **específicas**: o sítio ativo encaixa no substrato;\n- têm temperatura e pH ótimos, e a desnaturação (ferver, ácido forte) destrói o sítio ativo.",
      "alternativas": [
        "Correta. Enzimas são catalisadores biológicos: oferecem um caminho de menor energia de ativação e se regeneram ao final. A lactase catalisa a hidrólise da ligação glicosídica da lactose.",
        "Errada. Enzimas não fornecem energia. Elas baixam a barreira de ativação.",
        "Errada. Enzimas não são consumidas. Os produtos vêm da lactose e da água.",
        "Errada. Catalisadores aceleram a reação direta e a inversa igualmente, sem alterar a posição do equilíbrio.",
        "Errada. Enzimas têm temperatura e pH ótimos, e acima deles se desnaturam e perdem a atividade."
      ],
      "dica": "Catalisador não altera rendimento de equilíbrio nem ΔH, só a velocidade."
    },
    "fontes": [
      {
        "titulo": "PubChem: Lactose",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Lactose"
      },
      {
        "titulo": "OpenStax, Biology 2e: Biological Macromolecules",
        "url": "https://openstax.org/books/biology-2e/pages/3-introduction"
      }
    ]
  },
  {
    "id": "qui-867",
    "materia": "quimica",
    "assunto": "Bioquímica",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "Em uma amostra de DNA de dupla-fita de um animal, a análise química mostrou que 30% das bases nitrogenadas são adenina (A). Pelas regras de pareamento, A liga-se à timina (T) e a citosina (C) liga-se à guanina (G). Qual é a porcentagem de guanina?",
    "alternativas": [
      "10%",
      "30%",
      "20%",
      "40%",
      "60%"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "A = T = 30%, então C + G = 40% e G = 20%.",
      "detalhada": "No DNA de fita dupla, as bases se pareiam por ligações de hidrogênio: **A com T** (2 ligações) e **C com G** (3 ligações). Logo %A = %T e %C = %G (regras de Chargaff).\n\n- A = 30% → T = 30%\n- A + T = 60%, sobrando C + G = 40%\n- C = G = **20%**\n\nEssas regras valem para DNA dupla-fita. No RNA, a timina é trocada por uracila, e a molécula costuma ser de fita simples.",
      "alternativas": [
        "Errada. Fez 40% − 30% = 10%: subtraiu a adenina do total de C + G, misturando os dois pares. Os 40% de C + G se dividem igualmente entre C e G.",
        "Errada. Tratou G como igual à A. Quem tem a mesma porcentagem da adenina é a timina.",
        "Correta. A = T = 30%, soma 60%. Restam 40% para C + G, que são iguais: 20% cada.",
        "Errada. É o total de C + G, sem dividir entre as duas bases.",
        "Errada. É o total A + T, não a porcentagem de guanina."
      ],
      "dica": "A = T e C = G. Some e divida o que sobra por dois."
    },
    "fontes": [
      {
        "titulo": "OpenStax, Biology 2e: Biological Macromolecules",
        "url": "https://openstax.org/books/biology-2e/pages/3-introduction"
      },
      {
        "titulo": "Wikipédia: Regras de Chargaff",
        "url": "https://pt.wikipedia.org/wiki/Regras_de_Chargaff"
      }
    ]
  },
  {
    "id": "qui-868",
    "materia": "quimica",
    "assunto": "Bioquímica",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "A glicina (H2N–CH2–COOH) é o aminoácido mais simples. Em água, seus grupos ionizáveis têm pKa de aproximadamente 2,3 (grupo carboxila) e 9,6 (grupo amônio). Em uma solução fortemente ácida, de pH próximo de 1, qual é a espécie predominante?",
    "alternativas": [
      "H2N–CH2–COO⁻ (ânion)",
      "⁺H3N–CH2–COOH (cátion)",
      "⁺H3N–CH2–COO⁻ (íon dipolar ou zwitteríon)",
      "H2N–CH2–COOH (molécula neutra)"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Em pH 1, abaixo de 2,3, a glicina está como cátion ⁺H3N–CH2–COOH.",
      "detalhada": "Aminoácidos são anfotéricos. Em água, passam por três formas conforme o pH:\n\n- **pH < pKa1 (≈ 2,3):** ⁺H3N–CH2–COOH, carga +1;\n- **entre pKa1 e pKa2:** ⁺H3N–CH2–COO⁻, zwitteríon, carga líquida zero;\n- **pH > pKa2 (≈ 9,6):** H2N–CH2–COO⁻, carga −1.\n\nO pH em que a carga líquida é zero é o **ponto isoelétrico**, pI = (2,3 + 9,6) / 2 ≈ 6,0. Esse comportamento explica a migração de aminoácidos e proteínas em eletroforese.",
      "alternativas": [
        "Errada. É a espécie de meio fortemente básico (pH acima de 9,6), com a carboxila desprotonada e o amino neutro.",
        "Correta. Com pH abaixo do pKa da carboxila (2,3), ela está protonada (–COOH), e o grupo amino também (–NH3⁺). A carga líquida é +1.",
        "Errada. Predomina em pH entre cerca de 2,3 e 9,6, próximo do ponto isoelétrico (≈ 6,0). Em pH 1 a carboxila ainda está protonada.",
        "Errada. Em água, essa forma praticamente não existe em quantidade significativa em nenhum pH, pois a transferência do H da carboxila para o amino é muito favorável."
      ],
      "dica": "Regra: pH abaixo do pKa = grupo protonado. Meio muito ácido = tudo protonado."
    },
    "fontes": [
      {
        "titulo": "PubChem: Glycine",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Glycine"
      },
      {
        "titulo": "OpenStax, Biology 2e: Biological Macromolecules",
        "url": "https://openstax.org/books/biology-2e/pages/3-introduction"
      }
    ]
  },
  {
    "id": "qui-869",
    "materia": "quimica",
    "assunto": "Bioquímica",
    "tipo": "certo-errado",
    "estilo": "CEBRASPE",
    "dificuldade": 1,
    "objetivos": [
      "concursos-gerais",
      "livre"
    ],
    "enunciado": "Julgue o item. Quimicamente, a única diferença entre o DNA e o RNA é o açúcar: a desoxirribose no DNA e a ribose no RNA, sendo as quatro bases nitrogenadas as mesmas nas duas moléculas.",
    "resposta": false,
    "explicacao": {
      "resumo": "Errado. Além do açúcar, o DNA tem timina e o RNA tem uracila no lugar dela.",
      "detalhada": "DNA e RNA diferem em pelo menos dois pontos:\n\n- **açúcar:** desoxirribose (sem o –OH do carbono 2) no DNA; ribose no RNA;\n- **base nitrogenada:** o DNA tem adenina, guanina, citosina e **timina**; o RNA tem adenina, guanina, citosina e **uracila**.\n\nA estrutura também costuma diferir: DNA em dupla hélice e RNA em fita simples, na maioria dos casos. O item é falso por afirmar que as bases são as mesmas.",
      "dica": "A palavra \"única\" em item da banca costuma indicar erro."
    },
    "fontes": [
      {
        "titulo": "OpenStax, Biology 2e: Biological Macromolecules",
        "url": "https://openstax.org/books/biology-2e/pages/3-introduction"
      },
      {
        "titulo": "Wikipédia: RNA",
        "url": "https://pt.wikipedia.org/wiki/RNA"
      }
    ]
  },
  {
    "id": "qui-870",
    "materia": "quimica",
    "assunto": "Bioquímica",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "No teste de Benedict, uma solução azul de íons Cu²⁺ em meio básico é aquecida com a amostra. Se houver açúcar redutor, o Cu²⁺ é reduzido a Cu2O, um precipitado vermelho-tijolo. A glicose dá resultado positivo; a sacarose, resultado negativo, mas positivo depois de aquecida com ácido diluído. Qual é a explicação?",
    "alternativas": [
      "A sacarose não tem oxigênio na molécula, por isso não reage com Cu²⁺.",
      "A glicose é uma cetona e, por isso, reduz o Cu²⁺; a sacarose é um álcool simples.",
      "O ácido diluído oxida a sacarose a CO2, e é o CO2 que reduz o Cu²⁺.",
      "Na sacarose, os carbonos anoméricos da glicose e da frutose participam da ligação glicosídica, não deixando grupo carbonila livre para reduzir o Cu²⁺. A hidrólise ácida libera os monossacarídeos redutores.",
      "O teste de Benedict identifica proteínas, e a glicose reage por conter nitrogênio."
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "Sacarose não é redutora, pois seus carbonos anoméricos estão na ligação glicosídica. A hidrólise libera glicose e frutose, que reduzem o Cu²⁺.",
      "detalhada": "**Açúcares redutores** possuem um carbono anomérico livre (hemiacetal), em equilíbrio com a forma aberta que tem grupo aldeído (aldoses) ou cetona alfa-hidroxilada (cetoses, como a frutose, que reagem em meio básico). O grupo carbonila reduz Cu²⁺ a Cu⁺: o aldeído é oxidado a ácido carboxílico e forma-se Cu2O vermelho.\n\nNa sacarose, a ligação glicosídica envolve o carbono anomérico da glicose e o da frutose. Sem hemiacetal livre, não há redução, e o teste dá negativo.\n\nSe a sacarose é aquecida com ácido diluído, a ligação glicosídica é hidrolisada, glicose e frutose livres aparecem e o teste fica positivo.",
      "alternativas": [
        "Errada. A sacarose (C12H22O11) tem 11 oxigênios, em hidroxilas e ligação glicosídica.",
        "Errada. A glicose é uma aldose (grupo aldeído na forma aberta). Já a sacarose é um dissacarídeo com muitos grupos –OH.",
        "Errada. O ácido diluído faz só a hidrólise da ligação glicosídica. O CO2 não é o agente redutor do teste.",
        "Correta. Açúcar redutor precisa de hemiacetal livre, que se abre e expõe o aldeído (ou o grupo cetona, que se isomeriza). Na sacarose, os dois anoméricos estão amarrados, mas a hidrólise os libera.",
        "Errada. O teste de Benedict detecta açúcares redutores. A glicose não tem nitrogênio."
      ],
      "dica": "Redutor = carbono anomérico livre. Sacarose é a exceção clássica."
    },
    "fontes": [
      {
        "titulo": "PubChem: Sucrose",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Sucrose"
      },
      {
        "titulo": "OpenStax, Biology 2e: Biological Macromolecules",
        "url": "https://openstax.org/books/biology-2e/pages/3-introduction"
      }
    ]
  }
] });
