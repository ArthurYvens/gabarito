/* Questões inéditas de Química Orgânica (funções, nomenclatura, isomeria e reações), escritas para o app. */
Banco.registrar({ questoes: [
  {
    "id": "qui-801",
    "materia": "quimica",
    "assunto": "Funções orgânicas",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 1,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "A vanilina é o composto responsável pelo aroma característico da baunilha e é muito usada em alimentos e perfumes. Sua molécula é formada por um anel benzênico que traz três substituintes: –OH, –OCH3 e –CHO (fórmula molecular C8H8O3). Os grupos funcionais presentes na vanilina correspondem às funções",
    "alternativas": [
      "aldeído, éter e fenol.",
      "cetona, éter e álcool.",
      "aldeído, éster e fenol.",
      "ácido carboxílico, éter e fenol.",
      "aldeído, álcool e éter."
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "A vanilina tem aldeído (–CHO), éter (–OCH3) e fenol (–OH no anel aromático).",
      "detalhada": "Para identificar funções, olhe cada grupo separadamente e pergunte: **a que átomo está ligado?**\n\n- **–CHO**: carbonila com um hidrogênio, sempre na ponta da cadeia: **aldeído**.\n- **–O–CH3**: oxigênio entre dois carbonos: **éter**.\n- **–OH ligado diretamente ao anel benzênico**: **fenol**. Se o –OH estivesse em um carbono saturado (sp3), seria álcool.\n\nA fórmula C8H8O3 confere: anel (C6) + CH3 + CHO = 8 carbonos, e há três oxigênios, um em cada grupo.",
      "alternativas": [
        "Certa. O –CHO (carbonila em carbono terminal, ligada a hidrogênio) é aldeído; o –OCH3 ligado ao anel é éter (oxigênio entre dois carbonos); e o –OH ligado diretamente ao anel aromático é fenol.",
        "Errada. A carbonila do –CHO está na ponta da cadeia (aldeído), não entre dois carbonos (cetona); e o –OH no anel é fenol, não álcool.",
        "Errada. Éster exige o grupo –COO–. O –OCH3 tem um só oxigênio entre dois carbonos: é éter.",
        "Errada. Ácido carboxílico seria –COOH; aqui o grupo é –CHO, sem hidroxila ligada à carbonila.",
        "Errada. Álcool tem –OH em carbono saturado; na vanilina o –OH está ligado ao anel aromático, o que caracteriza o fenol."
      ],
      "dica": "OH no anel aromático = fenol; OH em carbono saturado = álcool. A banca adora trocar um pelo outro."
    },
    "fontes": [
      {
        "titulo": "PubChem: vanilina",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Vanillin"
      },
      {
        "titulo": "OpenStax: Organic Chemistry (livro aberto, CC BY)",
        "url": "https://openstax.org/details/books/organic-chemistry"
      }
    ]
  },
  {
    "id": "qui-802",
    "materia": "quimica",
    "assunto": "Funções orgânicas",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "O ácido acetilsalicílico, princípio ativo de vários analgésicos, é obtido pela reação do ácido salicílico com anidrido acético. Sua fórmula condensada pode ser escrita como HOOC–C6H4–O–CO–CH3, com os dois substituintes em posições vizinhas no anel benzênico. Nessa molécula, os grupos funcionais oxigenados correspondem às funções",
    "alternativas": [
      "ácido carboxílico e éter.",
      "fenol e éster.",
      "ácido carboxílico e cetona.",
      "ácido carboxílico e éster.",
      "aldeído e éster."
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "O AAS tem ácido carboxílico (–COOH) e éster (–O–CO–CH3).",
      "detalhada": "A síntese mostra o caminho: o ácido salicílico tem **–OH fenólico** e **–COOH**. Ao reagir com o anidrido acético, o –OH vira **–O–CO–CH3**, um **éster** (acetato). O –COOH permanece.\n\nRegra prática: se há C=O e, no mesmo carbono, um oxigênio ligado a outro carbono (–COO–), é éster. Se o oxigênio está entre dois carbonos sem C=O, é éter.",
      "alternativas": [
        "Errada. Há carbonila (C=O) ao lado do oxigênio do segundo grupo; por isso não é éter, e sim éster.",
        "Errada. O –OH fenólico do ácido salicílico foi justamente consumido na reação com o anidrido acético; sobra o éster.",
        "Errada. Cetona tem C=O entre dois carbonos; no –O–CO–CH3 a carbonila está ligada a um oxigênio.",
        "Certa. O –COOH é ácido carboxílico. O trecho –O–CO–CH3, em que o oxigênio liga o anel a uma carbonila, é éster.",
        "Errada. Não existe –CHO na molécula; o outro grupo oxigenado é o –COOH."
      ],
      "dica": "Procure o C=O. Com um oxigênio ligado a carbono ao lado dele, é éster; sem C=O, é éter."
    },
    "fontes": [
      {
        "titulo": "PubChem: ácido acetilsalicílico",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Aspirin"
      },
      {
        "titulo": "OpenStax: Organic Chemistry (livro aberto, CC BY)",
        "url": "https://openstax.org/details/books/organic-chemistry"
      }
    ]
  },
  {
    "id": "qui-803",
    "materia": "quimica",
    "assunto": "Funções orgânicas",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "O paracetamol é um analgésico e antitérmico de uso muito difundido. Sua fórmula condensada pode ser representada por HO–C6H4–NH–CO–CH3, com os dois substituintes em posições opostas no anel benzênico. Quais funções orgânicas estão presentes nessa molécula?",
    "alternativas": [
      "Amina e cetona.",
      "Fenol e amida.",
      "Álcool e amina.",
      "Fenol e éster.",
      "Ácido carboxílico e amina."
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "O paracetamol tem fenol (–OH no anel) e amida (–NH–CO–).",
      "detalhada": "A dupla **amina × amida** é uma das mais cobradas. Na **amina**, o nitrogênio liga-se só a carbonos e hidrogênios (R–NH2). Na **amida**, o nitrogênio está ligado a uma **carbonila** (R–CO–NH–).\n\nNo paracetamol, o –NH– está ligado ao C=O do grupo acetila (–CO–CH3): é **amida**. E o –OH preso ao anel aromático é **fenol**.",
      "alternativas": [
        "Errada. O nitrogênio está ligado a uma carbonila, o que forma amida; em amina o N liga-se apenas a carbonos e hidrogênios.",
        "Certa. O –OH ligado ao anel é fenol; o grupo –NH–CO–, em que o nitrogênio está ligado diretamente a uma carbonila, é amida.",
        "Errada. O –OH está no anel aromático (fenol) e o grupo nitrogenado tem carbonila vizinha (amida).",
        "Errada. Éster é –COO–; aqui o átomo ao lado da carbonila é nitrogênio, não oxigênio.",
        "Errada. Não há –COOH, pois a carbonila não está ligada a –OH."
      ],
      "dica": "Nitrogênio encostado em C=O = amida. Fora disso, amina."
    },
    "fontes": [
      {
        "titulo": "PubChem: paracetamol",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Acetaminophen"
      },
      {
        "titulo": "OpenStax: Organic Chemistry (livro aberto, CC BY)",
        "url": "https://openstax.org/details/books/organic-chemistry"
      }
    ]
  },
  {
    "id": "qui-804",
    "materia": "quimica",
    "assunto": "Funções orgânicas",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "Em uma aula prática sobre produtos de limpeza e higiene, o professor apresentou quatro compostos oxigenados e pediu que os alunos identificassem os álcoois:\nI. CH3–CH2–OH\nII. C6H5–OH (hidroxila ligada diretamente ao anel benzênico)\nIII. C6H5–CH2–OH (hidroxila em um carbono fora do anel)\nIV. CH3–O–CH3\nSão álcoois apenas os compostos",
    "alternativas": [
      "I e II.",
      "II e III.",
      "II e IV.",
      "III e IV.",
      "I e III."
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "Álcool tem –OH em carbono saturado: I (etanol) e III (álcool benzílico). II é fenol e IV é éter.",
      "detalhada": "O critério que separa **álcool** de **fenol** é o carbono que segura a hidroxila:\n\n- **Álcool**: –OH ligado a carbono saturado (sp3), mesmo que a molécula tenha um anel em outro ponto.\n- **Fenol**: –OH ligado diretamente a carbono do anel aromático.\n\nPor isso o composto III (álcool benzílico) é álcool: entre o anel e o –OH há um CH2. O IV, CH3–O–CH3, é um **éter** (sem hidroxila).",
      "alternativas": [
        "Errada. O II tem –OH ligado diretamente ao anel aromático: é fenol.",
        "Errada. O II é fenol, e o I (etanol) também é álcool e ficou de fora.",
        "Errada. O II é fenol e o IV (metoxi-metano) é éter, sem hidroxila.",
        "Errada. O IV é éter: oxigênio entre dois carbonos, sem –OH. O etanol (I) também é álcool.",
        "Certa. Em I e III a hidroxila está presa a um carbono saturado (sp3): álcool. No III o anel é só substituinte do carbono que carrega o –OH."
      ],
      "dica": "Olhe o carbono do OH: dentro do anel aromático, fenol; fora dele e saturado, álcool."
    },
    "fontes": [
      {
        "titulo": "PubChem: etanol",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Ethanol"
      },
      {
        "titulo": "OpenStax: Organic Chemistry (livro aberto, CC BY)",
        "url": "https://openstax.org/details/books/organic-chemistry"
      }
    ]
  },
  {
    "id": "qui-805",
    "materia": "quimica",
    "assunto": "Funções orgânicas",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 1,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "Os compostos abaixo são usados em solventes, aromas e na indústria química:\n1. CH3–CH2–CHO\n2. CH3–CO–CH2–CH3\n3. CH3–COO–CH2–CH3\n4. CH3–CH2–O–CH2–CH3\nA sequência que classifica corretamente as funções orgânicas de 1, 2, 3 e 4 é:",
    "alternativas": [
      "cetona, aldeído, éster, éter.",
      "aldeído, cetona, éter, éster.",
      "aldeído, cetona, éster, éter.",
      "aldeído, cetona, ácido carboxílico, éter.",
      "aldeído, álcool, éster, éter."
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "1 é aldeído, 2 é cetona, 3 é éster (acetato de etila) e 4 é éter (etoxietano).",
      "detalhada": "Classifique pela presença de carbonila e pelo que está ao redor dela:\n\n- **Aldeído**: C=O em carbono terminal, ligado a H (–CHO).\n- **Cetona**: C=O entre dois carbonos (–CO–).\n- **Éster**: C=O ligado a oxigênio que se liga a outro carbono (–COO–).\n- **Éter**: oxigênio entre dois carbonos, sem carbonila (–O–).",
      "alternativas": [
        "Errada. Inverte 1 e 2: o –CHO está na ponta da cadeia (aldeído), e a carbonila central é de cetona.",
        "Errada. Inverte 3 e 4: o composto 3 tem carbonila ligada a oxigênio (éster), e o 4 não tem carbonila (éter).",
        "Certa. 1 tem –CHO (aldeído); 2 tem C=O entre dois carbonos (cetona); 3 tem –COO– (éster); 4 tem oxigênio entre dois carbonos, sem C=O (éter).",
        "Errada. O composto 3 não tem –OH na carbonila; o oxigênio liga-se a um grupo etila, formando éster.",
        "Errada. O composto 2 não tem hidroxila; tem carbonila entre dois carbonos, ou seja, cetona."
      ],
      "dica": "Questão de reconhecimento: ache primeiro o C=O e só depois decida entre aldeído, cetona e éster."
    },
    "fontes": [
      {
        "titulo": "OpenStax: Organic Chemistry (livro aberto, CC BY)",
        "url": "https://openstax.org/details/books/organic-chemistry"
      },
      {
        "titulo": "Química Nova na Escola (SBQ)",
        "url": "https://qnesc.sbq.org.br/"
      }
    ]
  },
  {
    "id": "qui-806",
    "materia": "quimica",
    "assunto": "Funções orgânicas",
    "tipo": "multipla",
    "estilo": "Cesgranrio",
    "dificuldade": 2,
    "objetivos": [
      "estatais",
      "livre"
    ],
    "enunciado": "O gás liquefeito de petróleo (GLP) é naturalmente inodoro. Por segurança, adiciona-se a ele uma pequena quantidade de etanotiol, CH3–CH2–SH, de odor muito forte, para que vazamentos sejam percebidos. Considerando as massas atômicas C = 12, H = 1 e S = 32, a função orgânica desse aditivo e sua massa molar são, respectivamente,",
    "alternativas": [
      "álcool; 46 g/mol.",
      "tioéter; 62 g/mol.",
      "tiol; 62 g/mol.",
      "tiol; 30 g/mol.",
      "ácido sulfônico; 110 g/mol."
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "CH3–CH2–SH é um tiol e sua massa molar, C2H6S, é 62 g/mol.",
      "detalhada": "Tióis são os análogos sulfurados dos álcoois: o oxigênio do –OH é trocado por enxofre, formando –SH. Também são chamados de **mercaptanas**.\n\nCálculo da massa molar de C2H6S: 2 × 12 = 24; 6 × 1 = 6; 1 × 32 = 32. Soma: **62 g/mol**.\n\nCuidado com o isômero CH3–S–CH3 (tioéter): mesma fórmula, mesma massa, função diferente.",
      "alternativas": [
        "Errada. O álcool correspondente (etanol) tem oxigênio no lugar do enxofre e massa 46 g/mol. Aqui o grupo é –SH.",
        "Errada. A massa está certa, mas tioéter é R–S–R'. O –SH com hidrogênio é tiol; o CH3–S–CH3 seria apenas um isômero de função.",
        "Certa. O grupo –SH ligado a carbono saturado é tiol (mercaptana). C2H6S: 2 × 12 + 6 × 1 + 32 = 62 g/mol.",
        "Errada. 30 g/mol é a massa do etano (C2H6); esqueceu-se de somar o enxofre.",
        "Errada. Ácido sulfônico é –SO3H, com três oxigênios; a fórmula do etanotiol não tem oxigênio."
      ],
      "dica": "Mesma massa molar não implica mesma função: confira sempre se o enxofre tem hidrogênio (tiol) ou dois carbonos (tioéter)."
    },
    "fontes": [
      {
        "titulo": "PubChem: etanotiol",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Ethanethiol"
      },
      {
        "titulo": "OpenStax: Organic Chemistry (livro aberto, CC BY)",
        "url": "https://openstax.org/details/books/organic-chemistry"
      }
    ]
  },
  {
    "id": "qui-807",
    "materia": "quimica",
    "assunto": "Funções orgânicas",
    "tipo": "certo-errado",
    "estilo": "CEBRASPE",
    "dificuldade": 2,
    "objetivos": [
      "concursos-gerais",
      "livre"
    ],
    "enunciado": "Julgue o item a seguir, que trata de funções orgânicas e massa molar.\nO ácido acético, CH3–COOH, pertence à função ácido carboxílico, pois apresenta o grupo carboxila, formado por uma carbonila e uma hidroxila ligadas ao mesmo carbono; sua massa molar é igual a 60 g/mol (C = 12; H = 1; O = 16).",
    "resposta": true,
    "explicacao": {
      "resumo": "Certo. A carboxila (–COOH) caracteriza o ácido carboxílico e C2H4O2 tem 60 g/mol.",
      "detalhada": "O nome **carboxila** vem da junção de **carbonila** (C=O) com **hidroxila** (–OH) no mesmo carbono. Todo composto com esse grupo ligado a um radical orgânico é ácido carboxílico.\n\nMassa molar de C2H4O2: 2 × 12 = 24; 4 × 1 = 4; 2 × 16 = 32. Total: **60 g/mol**. Os dois trechos do item estão corretos.",
      "dica": "Em item certo-errado composto, basta um erro para a afirmação toda ser falsa. Confira cada parte, inclusive o número da massa molar."
    },
    "fontes": [
      {
        "titulo": "PubChem: ácido acético",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Acetic-acid"
      },
      {
        "titulo": "OpenStax: Organic Chemistry (livro aberto, CC BY)",
        "url": "https://openstax.org/details/books/organic-chemistry"
      }
    ]
  },
  {
    "id": "qui-808",
    "materia": "quimica",
    "assunto": "Funções orgânicas",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "Os sabões tradicionais são fabricados pela reação de gorduras ou óleos com hidróxido de sódio. Um deles tem como componente ativo o estearato de sódio, CH3(CH2)16–COO⁻ Na⁺, cuja parte apolar (cadeia longa) interage com a gordura e cuja parte polar interage com a água. Em relação às funções orgânicas, o estearato de sódio é classificado como",
    "alternativas": [
      "éster.",
      "ácido carboxílico.",
      "álcool.",
      "éter.",
      "sal de ácido carboxílico."
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "O estearato de sódio é o sal do ácido esteárico: um carboxilato de sódio.",
      "detalhada": "O sabão é um **sal de ácido graxo**. Na saponificação, o éster (gordura) reage com NaOH e produz **glicerol** e o **sal sódico do ácido carboxílico**.\n\nA parte **–COO⁻** é polar e iônica e interage com a água; a **cadeia CH3(CH2)16–** é apolar e se liga à gordura. Por isso o sabão remove sujeira oleosa.",
      "alternativas": [
        "Errada. Éster tem o grupo –COO– ligado a outro carbono (R–COO–R'); no sabão o oxigênio está ligado ao íon Na⁺.",
        "Errada. O ácido carboxílico seria CH3(CH2)16–COOH, com H no lugar do Na⁺.",
        "Errada. Não há –OH ligado a carbono saturado na estrutura.",
        "Errada. Éter é R–O–R', sem carbonila e sem íons.",
        "Certa. O grupo –COO⁻ ligado a Na⁺ é o carboxilato: o sal formado quando o ácido carboxílico (ácido esteárico) perde o H⁺."
      ],
      "dica": "Sal orgânico tem íon (Na⁺, K⁺) no lugar do H do ácido ou do radical do éster. Cuidado para não marcar éster só por ver –COO."
    },
    "fontes": [
      {
        "titulo": "Química Nova na Escola (SBQ)",
        "url": "https://qnesc.sbq.org.br/"
      },
      {
        "titulo": "OpenStax: Organic Chemistry (livro aberto, CC BY)",
        "url": "https://openstax.org/details/books/organic-chemistry"
      }
    ]
  },
  {
    "id": "qui-809",
    "materia": "quimica",
    "assunto": "Funções orgânicas",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "A glicose e a frutose são açúcares de fórmula molecular C6H12O6. Em suas formas de cadeia aberta, a glicose é representada por HOCH2–(CHOH)4–CHO e a frutose por HOCH2–CO–(CHOH)3–CH2OH. Considerando C = 12, H = 1 e O = 16, é correto afirmar que",
    "alternativas": [
      "ambas têm massa molar de 180 g/mol e cinco hidroxilas; a glicose tem função aldeído e a frutose, função cetona.",
      "a glicose tem função cetona e a frutose, função aldeído.",
      "as duas são aldeídos e diferem apenas no número de hidroxilas.",
      "a glicose tem 180 g/mol e a frutose, 162 g/mol, pois é cetona.",
      "ambas são ácidos carboxílicos, pois possuem vários grupos –OH."
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "Glicose e frutose têm 180 g/mol e cinco –OH; a glicose é aldose (aldeído) e a frutose é cetose (cetona).",
      "detalhada": "Massa molar de C6H12O6: 72 + 12 + 96 = **180 g/mol** para ambas, porque têm a mesma fórmula molecular: são **isômeros de função** (aldeído × cetona).\n\n- **Glicose**: carbonila na ponta da cadeia (–CHO) e quatro –CHOH mais um –CH2OH: cinco hidroxilas.\n- **Frutose**: carbonila no segundo carbono (–CO–), também com cinco hidroxilas.\n\nEm solução, ambas existem principalmente em formas cíclicas (a glicose como hemiacetal e a frutose como hemicetal), mas a classificação como aldose e cetose vem da forma de cadeia aberta.",
      "alternativas": [
        "Certa. 6 × 12 + 12 + 6 × 16 = 180 g/mol; cada uma tem cinco –OH; o –CHO terminal da glicose é aldeído e o –CO– interno da frutose é cetona.",
        "Errada. Está invertido: o –CHO na ponta da glicose é aldeído; o –CO– no meio da frutose é cetona.",
        "Errada. A frutose tem carbonila interna (cetona), e as duas têm o mesmo número de hidroxilas (cinco).",
        "Errada. São isômeros de função, com a mesma fórmula C6H12O6 e a mesma massa molar de 180 g/mol.",
        "Errada. Ácido carboxílico exige –COOH; vários –OH caracterizam poliálcoois, não ácidos."
      ],
      "dica": "Mesma fórmula molecular implica mesma massa molar. Se a banca der massas diferentes para isômeros, está errada."
    },
    "fontes": [
      {
        "titulo": "PubChem: glicose",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Glucose"
      },
      {
        "titulo": "OpenStax: Organic Chemistry (livro aberto, CC BY)",
        "url": "https://openstax.org/details/books/organic-chemistry"
      }
    ]
  },
  {
    "id": "qui-810",
    "materia": "quimica",
    "assunto": "Nomenclatura orgânica",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 1,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "O gás de cozinha vendido em botijões é uma mistura de hidrocarbonetos, principalmente propano e butano. Um dos componentes tem fórmula estrutural condensada CH3–CH2–CH2–CH3. Considerando C = 12 e H = 1, o nome oficial (IUPAC) desse hidrocarboneto e sua massa molar são, respectivamente,",
    "alternativas": [
      "propano; 44 g/mol.",
      "butano; 58 g/mol.",
      "butano; 56 g/mol.",
      "pentano; 72 g/mol.",
      "metilpropano; 58 g/mol."
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Cadeia linear de quatro carbonos saturados: butano, C4H10, 58 g/mol.",
      "detalhada": "O prefixo indica o número de carbonos da cadeia principal (met-, et-, prop-, but-, pent-...) e o sufixo **-ano** indica só ligações simples. Há 4 carbonos: **butano**.\n\nFórmula dos alcanos acíclicos: CnH2n+2. Com n = 4: C4H10. Massa molar: 48 + 10 = **58 g/mol**.\n\nO metilpropano tem a mesma fórmula e a mesma massa, mas cadeia ramificada: é isômero, não o mesmo composto.",
      "alternativas": [
        "Errada. Propano tem três carbonos (C3H8 = 44 g/mol).",
        "Certa. Quatro carbonos em cadeia linear e ligações simples: butano, C4H10 = 4 × 12 + 10 = 58 g/mol.",
        "Errada. 56 g/mol é a massa do C4H8 (butenos); o butano tem 10 hidrogênios.",
        "Errada. Pentano tem cinco carbonos (C5H12 = 72 g/mol).",
        "Errada. Mesma massa, mas metilpropano é o isômero ramificado, CH3–CH(CH3)–CH3. A cadeia dada é linear."
      ],
      "dica": "Prefixos para decorar: met, et, prop, but, pent, hex, hept, oct, non, dec."
    },
    "fontes": [
      {
        "titulo": "PubChem: butano",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Butane"
      },
      {
        "titulo": "IUPAC: Nomenclature of Organic Chemistry (Blue Book, 2013)",
        "url": "https://iupac.qmul.ac.uk/BlueBook/"
      }
    ]
  },
  {
    "id": "qui-811",
    "materia": "quimica",
    "assunto": "Nomenclatura orgânica",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "O índice de octanagem da gasolina toma como referência o isoctano, hidrocarboneto de fórmula estrutural condensada CH3–C(CH3)2–CH2–CH(CH3)–CH3 (C8H18). Seguindo as regras da IUPAC, o nome desse composto é",
    "alternativas": [
      "2,4,4-trimetilpentano.",
      "2,2-dimetil-4-metilpentano.",
      "2,2,4-trimetil-hexano.",
      "2,2,4-trimetilpentano.",
      "octano."
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "A cadeia principal é o pentano com metilas nos carbonos 2, 2 e 4: 2,2,4-trimetilpentano.",
      "detalhada": "Passos da nomenclatura de alcanos ramificados:\n\n- **Cadeia principal**: a maior sequência de carbonos: 5 carbonos, **pentano**.\n- **Numeração**: pelo lado que dá os **menores números** às ramificações. Pela esquerda: 2, 2, 4. Pela direita: 2, 4, 4. Vale **2,2,4**.\n- **Nome**: números separados por vírgula, prefixo multiplicador (**tri**) e nome do substituinte (**metil**): 2,2,4-trimetilpentano.\n\nConferência: 5 carbonos da cadeia + 3 metilas = 8 carbonos (C8H18, M = 114 g/mol).",
      "alternativas": [
        "Errada. Numerando pelo outro lado, as ramificações ficam em 2, 4, 4; vale o conjunto de menores números: 2,2,4.",
        "Errada. Substituintes iguais devem ser agrupados com prefixo multiplicador: são três metilas, logo trimetil.",
        "Errada. A cadeia principal tem cinco carbonos, não seis; além disso, C9H20 não é a fórmula dada.",
        "Certa. A cadeia principal tem 5 carbonos (pentano) e três grupos metila; numerando pela extremidade mais próxima da primeira ramificação, os locais são 2, 2 e 4.",
        "Errada. Octano seria a cadeia linear de oito carbonos; o composto é ramificado."
      ],
      "dica": "Compare os conjuntos de números, não a soma: 2,2,4 vence 2,4,4 porque o primeiro ponto de diferença (segundo número) é menor."
    },
    "fontes": [
      {
        "titulo": "PubChem: 2,2,4-trimetilpentano",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Isooctane"
      },
      {
        "titulo": "IUPAC: Nomenclature of Organic Chemistry (Blue Book, 2013)",
        "url": "https://iupac.qmul.ac.uk/BlueBook/"
      }
    ]
  },
  {
    "id": "qui-812",
    "materia": "quimica",
    "assunto": "Nomenclatura orgânica",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "O vinagre de mesa contém cerca de 4% em massa por volume de ácido acético, CH3–COOH, ou seja, 4 g do ácido em cada 100 mL de produto. Considerando C = 12, H = 1 e O = 16, o nome oficial (IUPAC) desse ácido e a concentração aproximada dele no vinagre são, respectivamente,",
    "alternativas": [
      "etanol; 0,67 mol/L.",
      "ácido etanoico; 0,40 mol/L.",
      "ácido metanoico; 0,87 mol/L.",
      "etanal; 0,91 mol/L.",
      "ácido etanoico; 0,67 mol/L."
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "CH3–COOH é o ácido etanoico (acético); 40 g/L ÷ 60 g/mol ≈ 0,67 mol/L.",
      "detalhada": "**Nome**: ácido carboxílico usa o prefixo do número de carbonos (inclui o carbono da carboxila), o sufixo **-oico** e a palavra \"ácido\": 2 carbonos, **ácido etanoico**. O nome usual, ácido acético, também é aceito.\n\n**Cálculo**: 4 g em 100 mL equivalem a 40 g em 1 L. Massa molar de C2H4O2 = 24 + 4 + 32 = 60 g/mol. Concentração: 40 ÷ 60 ≈ **0,67 mol/L**.",
      "alternativas": [
        "Errada. Etanol é o álcool CH3–CH2–OH; o composto tem o grupo –COOH.",
        "Errada. O nome está certo, mas 0,40 resulta de dividir 40 por 100 sem usar a massa molar.",
        "Errada. Metanoico tem um carbono (HCOOH, M = 46); o composto tem dois carbonos.",
        "Errada. Etanal é o aldeído CH3–CHO (M = 44); a função do vinagre é ácido carboxílico.",
        "Certa. Dois carbonos e função ácido carboxílico: ácido etanoico (M = 60 g/mol). 40 g/L ÷ 60 g/mol ≈ 0,67 mol/L."
      ],
      "dica": "Converta o volume para litros antes de dividir pela massa molar, e lembre que o carbono da carboxila conta na cadeia."
    },
    "fontes": [
      {
        "titulo": "PubChem: ácido acético",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Acetic-acid"
      },
      {
        "titulo": "IUPAC: Nomenclature of Organic Chemistry (Blue Book, 2013)",
        "url": "https://iupac.qmul.ac.uk/BlueBook/"
      }
    ]
  },
  {
    "id": "qui-813",
    "materia": "quimica",
    "assunto": "Nomenclatura orgânica",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "O hidrocarboneto de fórmula estrutural condensada CH3–CH2–CH(CH2–CH3)–CH2–CH2–CH3 é um alcano de fórmula C8H18. Seu nome oficial é",
    "alternativas": [
      "3-propilpentano.",
      "3-etil-hexano.",
      "4-etil-hexano.",
      "3-etil-heptano.",
      "2-etil-hexano."
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "A maior cadeia tem 6 carbonos e a etila está no carbono 3: 3-etil-hexano.",
      "detalhada": "O carbono central liga-se a três grupos: etila, etila e propila. A **maior cadeia contínua** passa por uma etila e pela propila: 2 + 1 + 3 = **6 carbonos (hexano)**. A outra etila é a ramificação.\n\nNumerando do lado que dá menor número à ramificação, ela fica no carbono **3**: 3-etil-hexano. Conferência: 6 + 2 = 8 carbonos (C8H18).",
      "alternativas": [
        "Errada. Escolheu-se uma cadeia de cinco carbonos; existe cadeia maior, de seis, passando pelo propil.",
        "Certa. A maior cadeia contínua tem seis carbonos (hexano) e o carbono 3 carrega um grupo etila.",
        "Errada. A numeração começa pela extremidade que dá o menor número à ramificação: 3, e não 4.",
        "Errada. A cadeia principal tem seis carbonos, não sete; C9H20 também não confere com a fórmula.",
        "Errada. Uma etila no carbono 2 aumentaria a cadeia principal; a ramificação está no carbono central, o 3."
      ],
      "dica": "Nunca pare na primeira cadeia que enxergar: procure a maior sequência contínua, mesmo que ela dobre a esquina do desenho."
    },
    "fontes": [
      {
        "titulo": "IUPAC: Nomenclature of Organic Chemistry (Blue Book, 2013)",
        "url": "https://iupac.qmul.ac.uk/BlueBook/"
      },
      {
        "titulo": "OpenStax: Organic Chemistry (livro aberto, CC BY)",
        "url": "https://openstax.org/details/books/organic-chemistry"
      }
    ]
  },
  {
    "id": "qui-814",
    "materia": "quimica",
    "assunto": "Nomenclatura orgânica",
    "tipo": "multipla",
    "estilo": "Cesgranrio",
    "dificuldade": 2,
    "objetivos": [
      "estatais",
      "livre"
    ],
    "enunciado": "O gás acetileno, HC≡CH, é usado em maçaricos de solda e corte de metais. Sua combustão completa é representada por 2 C2H2 + 5 O2 → 4 CO2 + 2 H2O. Considerando as massas atômicas C = 12 e H = 1, o nome oficial desse gás e a quantidade de oxigênio necessária para queimar completamente 52 g dele são, respectivamente,",
    "alternativas": [
      "eteno; 5 mol de O2.",
      "etino; 2,5 mol de O2.",
      "etino; 10 mol de O2.",
      "etino; 5 mol de O2.",
      "etano; 7 mol de O2."
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "HC≡CH é o etino. 52 g correspondem a 2 mol de C2H2, que consomem 5 mol de O2.",
      "detalhada": "**Nome**: o sufixo **-ino** indica ligação tripla; dois carbonos: **etino** (nome usual: acetileno).\n\n**Cálculo**:\n- M(C2H2) = 24 + 2 = 26 g/mol.\n- n = 52 ÷ 26 = **2 mol**.\n- Equação: 2 mol de C2H2 : 5 mol de O2. Logo, 2 mol de C2H2 consomem **5 mol de O2**.",
      "alternativas": [
        "Errada. Eteno é CH2=CH2 (ligação dupla). A tripla ligação dá o sufixo -ino: etino.",
        "Errada. Seriam 2,5 mol de O2 para 1 mol (26 g) de C2H2, e não para 52 g.",
        "Errada. Multiplicou-se 5 mol por 2 sem necessidade: a equação já mostra 5 mol de O2 para 2 mol de C2H2.",
        "Certa. HC≡CH é o etino (alquino de dois carbonos). 52 g ÷ 26 g/mol = 2 mol de C2H2; pela equação, 2 mol de C2H2 consomem 5 mol de O2.",
        "Errada. Etano é CH3–CH3. O número 7 viria da combustão de 2 mol de etano (3,5 mol de O2 por mol)."
      ],
      "dica": "Eteno tem dupla, etino tem tripla: -eno, -ino. Depois, relacione os mols pela proporção da equação balanceada."
    },
    "fontes": [
      {
        "titulo": "PubChem: acetileno",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Acetylene"
      },
      {
        "titulo": "IUPAC: Nomenclature of Organic Chemistry (Blue Book, 2013)",
        "url": "https://iupac.qmul.ac.uk/BlueBook/"
      }
    ]
  },
  {
    "id": "qui-815",
    "materia": "quimica",
    "assunto": "Nomenclatura orgânica",
    "tipo": "certo-errado",
    "estilo": "CEBRASPE",
    "dificuldade": 2,
    "objetivos": [
      "concursos-gerais",
      "livre"
    ],
    "enunciado": "Julgue o item a seguir, sobre nomenclatura de hidrocarbonetos.\nSegundo as regras da IUPAC, o composto de fórmula CH3–CH(CH3)–CH2–CH3 deve ser denominado 3-metilbutano.",
    "resposta": false,
    "explicacao": {
      "resumo": "Errado. A numeração deve dar o menor número à ramificação: o nome correto é 2-metilbutano.",
      "detalhada": "A cadeia principal tem quatro carbonos (butano) e há uma metila no carbono vizinho a uma das extremidades. Numerando da esquerda, a metila fica no carbono **2**; numerando da direita, ficaria no 3. A regra é dar o **menor número** possível à ramificação, então o nome correto é **2-metilbutano** (nome usual: isopentano).\n\nO nome \"3-metilbutano\" nunca é aceito para esse composto, pois revela numeração pelo lado errado.",
      "dica": "Se o nome tem localizador alto numa cadeia curta, desconfie: a numeração pode ter começado do lado errado."
    },
    "fontes": [
      {
        "titulo": "IUPAC: Nomenclature of Organic Chemistry (Blue Book, 2013)",
        "url": "https://iupac.qmul.ac.uk/BlueBook/"
      },
      {
        "titulo": "OpenStax: Organic Chemistry (livro aberto, CC BY)",
        "url": "https://openstax.org/details/books/organic-chemistry"
      }
    ]
  },
  {
    "id": "qui-816",
    "materia": "quimica",
    "assunto": "Nomenclatura orgânica",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "O eteno é a matéria-prima do polietileno, plástico muito usado em sacolas e embalagens. Alquenos maiores são obtidos no refino do petróleo. Um deles tem fórmula estrutural condensada CH3–CH=CH–CH2–CH3. Segundo a IUPAC, seu nome é",
    "alternativas": [
      "pent-3-eno.",
      "pent-1-eno.",
      "pent-2-eno.",
      "pent-2-ino.",
      "2-metilbut-2-eno."
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "Cadeia linear de cinco carbonos com dupla entre C2 e C3: pent-2-eno.",
      "detalhada": "Em alquenos, a numeração começa pela extremidade **mais próxima da dupla ligação**, que recebe o menor localizador possível.\n\nPela esquerda: CH3 (1), CH= (2), =CH (3): dupla no 2. Pela direita, seria no 3. Vale o menor: **pent-2-eno**.\n\nObserve que na nomenclatura atual o localizador vem antes do sufixo (pent-2-eno), e não no começo do nome.",
      "alternativas": [
        "Errada. Numerando da direita, a dupla ficaria no 3; mas a numeração deve começar pelo extremo mais próximo da insaturação.",
        "Errada. Pent-1-eno é CH2=CH–CH2–CH2–CH3, com a dupla na ponta da cadeia.",
        "Certa. A cadeia principal tem cinco carbonos e deve incluir a dupla; numerando pelo lado em que a dupla recebe o menor número, ela fica entre C2 e C3.",
        "Errada. O sufixo -ino indica ligação tripla; o composto tem dupla.",
        "Errada. Esse composto é ramificado, com quatro carbonos na cadeia principal; o dado tem cadeia linear de cinco."
      ],
      "dica": "Localizador da insaturação sempre o menor possível, mesmo que isso ponha ramificações em números maiores."
    },
    "fontes": [
      {
        "titulo": "PubChem: pent-2-eno",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/2-Pentene"
      },
      {
        "titulo": "IUPAC: Nomenclature of Organic Chemistry (Blue Book, 2013)",
        "url": "https://iupac.qmul.ac.uk/BlueBook/"
      }
    ]
  },
  {
    "id": "qui-817",
    "materia": "quimica",
    "assunto": "Nomenclatura orgânica",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "O tolueno, C6H5–CH3, é um solvente usado em tintas, colas e na indústria química. Esse composto aromático é nomeado, pela IUPAC, como metilbenzeno. Sabendo que sua densidade é 0,87 g/mL e que as massas atômicas são C = 12 e H = 1, qual é o nome e a quantidade de matéria aproximada contida em 100 mL desse solvente?",
    "alternativas": [
      "metilbenzeno; 0,95 mol.",
      "metilbenzeno; 1,06 mol.",
      "dimetilbenzeno; 0,82 mol.",
      "benzeno; 1,12 mol.",
      "fenilmetanol; 0,81 mol."
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "C6H5–CH3 é o metilbenzeno; 100 mL pesam 87 g, que correspondem a 87 ÷ 92 ≈ 0,95 mol.",
      "detalhada": "**Nome**: anel benzênico com um grupo metila: **metilbenzeno** (tolueno é nome usual aceito).\n\n**Cálculo**:\n- Massa de 100 mL: 0,87 g/mL × 100 mL = 87 g.\n- M(C7H8) = 7 × 12 + 8 = 92 g/mol.\n- n = m ÷ M = 87 ÷ 92 ≈ **0,95 mol**.",
      "alternativas": [
        "Certa. m = 0,87 × 100 = 87 g; M(C7H8) = 92 g/mol; n = 87 ÷ 92 ≈ 0,95 mol.",
        "Errada. Dividiu-se a massa molar pela massa (92 ÷ 87); o correto é massa ÷ massa molar.",
        "Errada. Dimetilbenzeno (xileno), C8H10, tem 106 g/mol; o composto do enunciado tem só uma metila.",
        "Errada. Benzeno (C6H6, 78 g/mol) não tem o grupo metila.",
        "Errada. Fenilmetanol (álcool benzílico) tem –OH, o que não existe no tolueno."
      ],
      "dica": "Densidade converte volume em massa; só depois a massa molar converte massa em mol."
    },
    "fontes": [
      {
        "titulo": "PubChem: tolueno",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Toluene"
      },
      {
        "titulo": "IUPAC: Nomenclature of Organic Chemistry (Blue Book, 2013)",
        "url": "https://iupac.qmul.ac.uk/BlueBook/"
      }
    ]
  },
  {
    "id": "qui-818",
    "materia": "quimica",
    "assunto": "Nomenclatura orgânica",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "O composto de fórmula estrutural condensada CH3–CH(CH3)–CH2–CH(OH)–CH3 é um álcool usado como solvente em tintas. Segundo as regras da IUPAC, seu nome é",
    "alternativas": [
      "2-metilpentan-4-ol.",
      "4-metilpentan-2-ol.",
      "4-metilpentan-1-ol.",
      "2-metilpentan-2-ol.",
      "2,4-dimetilbutan-2-ol."
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "O –OH tem prioridade na numeração: fica no carbono 2 e a metila no 4: 4-metilpentan-2-ol.",
      "detalhada": "Em álcoois, a ordem de prioridade para numerar é: **grupo funcional (–OH)** primeiro, depois insaturações e, por fim, ramificações.\n\nCadeia principal: os 5 carbonos que incluem o carbono do –OH. Pela direita: CH3 (1), CH(OH) (2), CH2 (3), CH(CH3) (4), CH3 (5). O OH fica em **2** e a metila em **4**. Pela esquerda o OH ficaria em 4, número maior: descartado.\n\nNome: **4-metilpentan-2-ol**.",
      "alternativas": [
        "Errada. A numeração deve favorecer o grupo funcional (OH), e não a ramificação: o OH precisa receber o menor número.",
        "Certa. A cadeia principal (cinco carbonos) deve conter o carbono do –OH; a numeração começa pelo extremo mais próximo da hidroxila, que fica no 2, e a metila no 4.",
        "Errada. O –OH está em um carbono secundário, vizinho a um CH3 e não na ponta da cadeia; o localizador não é 1.",
        "Errada. Esse composto teria o –OH e a metila no mesmo carbono (álcool terciário), o que não ocorre.",
        "Errada. Há só uma ramificação metila e a cadeia principal tem cinco carbonos, não quatro."
      ],
      "dica": "Álcool: o OH manda na numeração. Só depois pensamos nas ramificações."
    },
    "fontes": [
      {
        "titulo": "IUPAC: Nomenclature of Organic Chemistry (Blue Book, 2013)",
        "url": "https://iupac.qmul.ac.uk/BlueBook/"
      },
      {
        "titulo": "OpenStax: Organic Chemistry (livro aberto, CC BY)",
        "url": "https://openstax.org/details/books/organic-chemistry"
      }
    ]
  },
  {
    "id": "qui-819",
    "materia": "quimica",
    "assunto": "Isomeria",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 1,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "O butano e o metilpropano são componentes do gás de cozinha e têm a mesma fórmula molecular, C4H10. O primeiro tem cadeia linear (CH3–CH2–CH2–CH3) e o segundo, cadeia ramificada (CH3–CH(CH3)–CH3). Esses dois compostos são exemplos de isomeria.",
    "alternativas": [
      "de cadeia.",
      "de posição.",
      "de função.",
      "de compensação (metameria).",
      "geométrica."
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "Mesma fórmula (C4H10), esqueletos diferentes: são isômeros de cadeia.",
      "detalhada": "Isômeros de **constituição (planos)** têm a mesma fórmula molecular e diferem na ordem em que os átomos se ligam. Os principais tipos são:\n\n- **Cadeia**: esqueletos de carbono diferentes (linear × ramificado, aberto × fechado).\n- **Posição**: mesmo esqueleto, mas grupo funcional, insaturação ou ramificação em local diferente.\n- **Função**: funções diferentes (álcool × éter).\n- **Compensação**: heteroátomo em posição diferente na cadeia.\n\nButano e metilpropano diferem apenas na forma da cadeia carbônica: isomeria de **cadeia**.",
      "alternativas": [
        "Certa. Mesma fórmula molecular e mesma função (alcano), mas com esqueletos de carbono diferentes: um linear e outro ramificado.",
        "Errada. Na isomeria de posição muda o local de um grupo funcional, uma insaturação ou uma ramificação na mesma cadeia; aqui muda o esqueleto.",
        "Errada. Os dois são alcanos; não há mudança de função orgânica.",
        "Errada. Metameria depende da posição de um heteroátomo entre carbonos (como em éteres); alcanos não têm heteroátomo.",
        "Errada. Isomeria geométrica exige dupla ligação ou ciclo com ligantes diferentes e é um tipo de estereoisomeria; aqui os átomos se ligam em ordem diferente."
      ],
      "dica": "Primeiro compare as fórmulas moleculares. Se forem iguais, procure o que mudou: esqueleto (cadeia), local (posição) ou função."
    },
    "fontes": [
      {
        "titulo": "PubChem: butano",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Butane"
      },
      {
        "titulo": "OpenStax: Organic Chemistry (livro aberto, CC BY)",
        "url": "https://openstax.org/details/books/organic-chemistry"
      }
    ]
  },
  {
    "id": "qui-820",
    "materia": "quimica",
    "assunto": "Isomeria",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "O etanol (CH3–CH2–OH) e o éter dimetílico (CH3–O–CH3) têm a mesma fórmula molecular, C2H6O, e a mesma massa molar, 46 g/mol. Contudo, a 1 atm, o etanol ferve a cerca de 78 °C, enquanto o éter dimetílico, a cerca de −24 °C, e por isso é gasoso à temperatura ambiente. Esses compostos são isômeros de",
    "alternativas": [
      "cadeia, e a diferença ocorre porque o éter tem massa molar menor.",
      "posição, e a diferença se deve à maior polaridade das ligações C–H do éter.",
      "função, e a diferença ocorre porque o éter tem ligação iônica entre as moléculas.",
      "compensação, e a diferença se deve à maior massa molar do etanol.",
      "função, e a diferença de temperatura de ebulição se deve às ligações de hidrogênio que ocorrem entre as moléculas de etanol."
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "Etanol e éter dimetílico são isômeros de função; o etanol ferve mais alto porque forma ligações de hidrogênio.",
      "detalhada": "Os dois compostos têm C2H6O, mas funções diferentes: **álcool** (–OH) e **éter** (–O–). É **isomeria de função**.\n\nComo têm a mesma massa molar, a diferença de ponto de ebulição vem das **forças intermoleculares**. No etanol, o hidrogênio ligado ao oxigênio permite **ligações de hidrogênio** entre as moléculas. No éter dimetílico não há H ligado a O, e as interações são só dipolo-dipolo e dispersão, bem mais fracas.",
      "alternativas": [
        "Errada. As massas molares são iguais (46 g/mol) e o tipo de isomeria é de função, não de cadeia.",
        "Errada. Não é isomeria de posição, e as ligações C–H são pouco polares; não explicam a diferença.",
        "Errada. O éter dimetílico é molecular; suas forças são dipolo-dipolo e dispersão, mais fracas que as ligações de hidrogênio.",
        "Errada. Compensação (metameria) envolve éteres ou aminas, com o heteroátomo entre carbonos diferentes da cadeia; e as massas são iguais.",
        "Certa. São álcool e éter (isomeria de função). Só o etanol tem O–H e forma ligações de hidrogênio, forças intermoleculares fortes que elevam o ponto de ebulição."
      ],
      "dica": "Em questão que compara ebulição de isômeros, procure O–H, N–H ou F–H: quem faz ligação de hidrogênio ferve mais alto."
    },
    "fontes": [
      {
        "titulo": "PubChem: etanol",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Ethanol"
      },
      {
        "titulo": "OpenStax: Organic Chemistry (livro aberto, CC BY)",
        "url": "https://openstax.org/details/books/organic-chemistry"
      }
    ]
  },
  {
    "id": "qui-821",
    "materia": "quimica",
    "assunto": "Isomeria",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "Nos rótulos de alimentos industrializados, a gordura trans é apontada como prejudicial à saúde. Ela se forma quando ácidos graxos insaturados passam da configuração cis para a trans na ligação dupla C=C. Para que um alqueno apresente esse tipo de isomeria (cis-trans), é necessário que cada carbono da dupla tenha dois grupos diferentes ligados a ele. Entre os hidrocarbonetos abaixo, o que pode existir nas formas cis e trans é o",
    "alternativas": [
      "propeno, CH2=CH–CH3.",
      "2-metilpropeno, CH2=C(CH3)–CH3.",
      "2-metilbut-2-eno, CH3–C(CH3)=CH–CH3.",
      "but-2-eno, CH3–CH=CH–CH3.",
      "eteno, CH2=CH2."
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "Só o but-2-eno tem, em cada carbono da dupla, dois ligantes diferentes: apresenta cis-trans.",
      "detalhada": "A **isomeria geométrica (cis-trans)** exige duas condições: uma **restrição à rotação** (dupla ligação ou ciclo) e **ligantes diferentes em cada carbono** da dupla.\n\nAnalise cada carbono da dupla: se um deles tem dois grupos iguais, não há isomeria. No but-2-eno, cada carbono tem H e CH3: as formas **cis** (grupos iguais do mesmo lado) e **trans** (lados opostos) existem e têm propriedades físicas diferentes.\n\nNos ácidos graxos, a forma trans tem cadeia mais reta e empacota melhor, o que explica por que gorduras trans são sólidas e se comportam diferente no organismo.",
      "alternativas": [
        "Errada. Um dos carbonos da dupla tem dois hidrogênios iguais.",
        "Errada. O carbono terminal tem dois H, e o outro tem duas metilas.",
        "Errada. Um carbono da dupla tem dois grupos iguais (duas metilas).",
        "Certa. Cada carbono da dupla liga-se a H e a CH3, grupos diferentes: existem as formas cis e trans.",
        "Errada. Os dois carbonos têm dois hidrogênios cada."
      ],
      "dica": "Teste rápido: se qualquer carbono da dupla tiver dois ligantes iguais, esqueça cis-trans."
    },
    "fontes": [
      {
        "titulo": "PubChem: but-2-eno",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/2-Butene"
      },
      {
        "titulo": "OpenStax: Organic Chemistry (livro aberto, CC BY)",
        "url": "https://openstax.org/details/books/organic-chemistry"
      }
    ]
  },
  {
    "id": "qui-822",
    "materia": "quimica",
    "assunto": "Isomeria",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "A glicose na forma de cadeia aberta, HOCH2–CHOH–CHOH–CHOH–CHOH–CHO, possui quatro átomos de carbono assimétricos (quirais) diferentes entre si. O número total de estereoisômeros ópticos possíveis para essa estrutura, calculado por 2ⁿ (n = número de carbonos quirais diferentes), é",
    "alternativas": [
      "4.",
      "8.",
      "16.",
      "32.",
      "2."
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "Com 4 carbonos quirais diferentes: 2⁴ = 16 estereoisômeros ópticos.",
      "detalhada": "Cada **carbono assimétrico** (quatro ligantes diferentes) multiplica por 2 o número de possibilidades. Com n carbonos quirais **diferentes entre si**, o número de isômeros ópticos ativos é **2ⁿ**, e o de misturas racêmicas é 2ⁿ⁻¹.\n\nPara n = 4: 2⁴ = **16 estereoisômeros**, reunidos em 8 pares de enantiômeros. A D-glicose é apenas um deles; sua imagem especular é a L-glicose.",
      "alternativas": [
        "Errada. Esse é o número de carbonos quirais, não o de isômeros.",
        "Errada. 8 é o número de pares de enantiômeros (16 ÷ 2), ou 2³.",
        "Certa. 2⁴ = 16 estereoisômeros ópticos, formando 8 pares de enantiômeros.",
        "Errada. 32 seria 2⁵, valor obtido ao contar um carbono quiral a mais.",
        "Errada. Dois isômeros ópticos só ocorreriam com um único carbono quiral (um par de enantiômeros)."
      ],
      "dica": "A fórmula 2ⁿ só vale quando os carbonos quirais são diferentes. Se a molécula tiver simetria (carbonos iguais), há formas meso e o número diminui."
    },
    "fontes": [
      {
        "titulo": "PubChem: glicose",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Glucose"
      },
      {
        "titulo": "OpenStax: Organic Chemistry (livro aberto, CC BY)",
        "url": "https://openstax.org/details/books/organic-chemistry"
      }
    ]
  },
  {
    "id": "qui-823",
    "materia": "quimica",
    "assunto": "Isomeria",
    "tipo": "multipla",
    "estilo": "Cesgranrio",
    "dificuldade": 3,
    "objetivos": [
      "estatais",
      "livre"
    ],
    "enunciado": "Solventes oxigenados de fórmula molecular C4H10O são usados em diversas etapas da indústria petroquímica. Considerando apenas os isômeros de constituição (planos) dessa fórmula, entre álcoois e éteres, sem contar os estereoisômeros, o número total de compostos distintos é",
    "alternativas": [
      "4.",
      "5.",
      "6.",
      "7.",
      "8."
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "C4H10O tem 4 álcoois e 3 éteres isômeros de constituição: 7 no total.",
      "detalhada": "Organize a contagem por função.\n\n**Álcoois** (C4H9–OH, a partir de dois esqueletos):\n- butano: butan-1-ol e butan-2-ol;\n- metilpropano: 2-metilpropan-1-ol e 2-metilpropan-2-ol.\n\nTotal: **4**.\n\n**Éteres** (R–O–R' com 4 carbonos no total): CH3–O–CH2CH2CH3 (metoxipropano), CH3–O–CH(CH3)2 (2-metoxipropano) e CH3CH2–O–CH2CH3 (etoxietano). Total: **3**.\n\nSoma: 4 + 3 = **7**.",
      "alternativas": [
        "Errada. São só os álcoois; faltam os 3 éteres.",
        "Errada. Contagem incompleta: há quatro álcoois e três éteres.",
        "Errada. Falta algum dos isômeros, como o 2-metilpropan-2-ol (álcool terciário) ou o 2-metoxipropano.",
        "Certa. Há 4 álcoois (butan-1-ol, butan-2-ol, 2-metilpropan-1-ol e 2-metilpropan-2-ol) e 3 éteres (metoxipropano, 2-metoxipropano e etoxietano).",
        "Errada. Esse total só se obtém contando um composto repetido ou os dois enantiômeros do butan-2-ol, o que o enunciado exclui."
      ],
      "dica": "Conte por categorias (função e esqueleto) para não repetir nem esquecer isômeros. Se o enunciado excluir estereoisômeros, não conte enantiômeros."
    },
    "fontes": [
      {
        "titulo": "PubChem: butan-2-ol",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/2-Butanol"
      },
      {
        "titulo": "OpenStax: Organic Chemistry (livro aberto, CC BY)",
        "url": "https://openstax.org/details/books/organic-chemistry"
      }
    ]
  },
  {
    "id": "qui-824",
    "materia": "quimica",
    "assunto": "Isomeria",
    "tipo": "certo-errado",
    "estilo": "CEBRASPE",
    "dificuldade": 2,
    "objetivos": [
      "concursos-gerais",
      "livre"
    ],
    "enunciado": "Julgue o item a seguir, sobre isomeria óptica.\nA molécula de butan-2-ol, CH3–CH(OH)–CH2–CH3, possui um carbono assimétrico, de modo que existem dois enantiômeros desse álcool, os quais desviam o plano da luz polarizada em sentidos opostos e com a mesma intensidade.",
    "resposta": true,
    "explicacao": {
      "resumo": "Certo. O carbono 2 tem quatro ligantes diferentes (H, OH, CH3 e CH2–CH3): há um par de enantiômeros.",
      "detalhada": "No carbono 2 do butan-2-ol ligam-se **H**, **OH**, **CH3** (metila) e **CH2–CH3** (etila): quatro grupos diferentes, portanto é um **carbono quiral**. Com um centro quiral, a molécula tem uma imagem especular não sobreponível: existem **dois enantiômeros**.\n\nEnantiômeros têm as mesmas propriedades físicas (ponto de ebulição, densidade), mas desviam o plano da luz polarizada em **sentidos opostos e com o mesmo módulo**. Uma mistura 50% de cada, a mistura racêmica, não desvia a luz.\n\nJá o butan-1-ol, CH3–CH2–CH2–CH2–OH, não tem carbono quiral.",
      "dica": "Quiral = quatro ligantes diferentes. Escreva os quatro grupos do carbono suspeito e compare."
    },
    "fontes": [
      {
        "titulo": "PubChem: butan-2-ol",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/2-Butanol"
      },
      {
        "titulo": "OpenStax: Organic Chemistry (livro aberto, CC BY)",
        "url": "https://openstax.org/details/books/organic-chemistry"
      }
    ]
  },
  {
    "id": "qui-825",
    "materia": "quimica",
    "assunto": "Isomeria",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "Na década de 1960, a talidomida foi vendida como sedativo para gestantes. Anos depois, segundo o relato histórico, descobriu-se que um de seus enantiômeros tem ação sedativa, enquanto o outro causa malformações no feto. Enantiômeros têm as mesmas propriedades físicas, como ponto de fusão e solubilidade em solventes comuns. A diferença de efeito biológico entre eles ocorre porque",
    "alternativas": [
      "os enantiômeros têm fórmulas moleculares diferentes.",
      "um dos enantiômeros tem massa molar maior que o outro.",
      "os receptores do organismo são quirais e interagem de modo diferente com cada enantiômero.",
      "só um dos enantiômeros apresenta ligações covalentes.",
      "a solubilidade em água de um é muito maior que a do outro."
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "Os receptores biológicos são quirais e distinguem os enantiômeros, que por isso têm efeitos diferentes.",
      "detalhada": "**Enantiômeros** são imagens especulares não sobreponíveis. Em ambientes **aquirais** (água, solventes comuns), têm propriedades físicas e químicas idênticas, exceto o desvio da luz polarizada.\n\nNos seres vivos, o ambiente é **quiral**: enzimas e receptores são formados por aminoácidos L. Por isso cada enantiômero se encaixa de modo diferente, como uma mão que só entra numa luva da mão certa. Na história da talidomida a separação foi uma simplificação: no organismo os dois enantiômeros se interconvertem (racemização), de modo que dar apenas um deles não evitaria o dano. É por isso que a indústria farmacêutica busca fabricar medicamentos como um único enantiômero.",
      "alternativas": [
        "Errada. Enantiômeros têm a mesma fórmula molecular e a mesma ordem de ligação dos átomos; diferem na disposição espacial.",
        "Errada. Têm exatamente a mesma massa molar.",
        "Certa. Proteínas e enzimas são formadas por aminoácidos quirais; por isso reconhecem de forma distinta cada imagem especular.",
        "Errada. Ambos têm as mesmas ligações covalentes.",
        "Errada. Em meio aquiral, como a água, as propriedades físicas dos enantiômeros são idênticas."
      ],
      "dica": "Enantiômeros diferem só na interação com algo quiral (receptor, luz polarizada). Para todo o resto, são iguais."
    },
    "fontes": [
      {
        "titulo": "PubChem: talidomida",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Thalidomide"
      },
      {
        "titulo": "OpenStax: Organic Chemistry (livro aberto, CC BY)",
        "url": "https://openstax.org/details/books/organic-chemistry"
      }
    ]
  },
  {
    "id": "qui-826",
    "materia": "quimica",
    "assunto": "Isomeria",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "Uma amostra de um fármaco quiral é uma mistura de dois enantiômeros: 80% do enantiômero (+) e 20% do enantiômero (−). Nas condições do experimento, o enantiômero (+) puro desvia o plano da luz polarizada em +30° e o (−) puro, em −30°. O desvio observado para a mistura, supondo que ele seja proporcional à diferença entre as quantidades dos enantiômeros, é de",
    "alternativas": [
      "+30°.",
      "+18°.",
      "+24°.",
      "0°.",
      "+6°."
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "O excesso do enantiômero (+) é 80% − 20% = 60%; o desvio observado é 0,60 × 30° = +18°.",
      "detalhada": "Dentro da mistura, 20% de (+) anulam 20% de (−): essa parte se comporta como **mistura racêmica** e não desvia a luz. O que desvia é o **excesso enantiomérico**: 80% − 20% = **60%**.\n\nDesvio observado = 0,60 × (+30°) = **+18°**.\n\nCom 50% de cada enantiômero, o excesso seria zero e o desvio nulo. Com 100% do (+), o excesso seria 100% e o desvio, +30°.",
      "alternativas": [
        "Errada. Seria o desvio da amostra pura do enantiômero (+).",
        "Certa. A parte racêmica (20% de cada) se anula; sobram 80% − 20% = 60% do (+). Desvio: 0,60 × 30° = +18°.",
        "Errada. 0,80 × 30° = 24° ignora o efeito do enantiômero (−), que cancela parte do desvio.",
        "Errada. O desvio nulo é típico da mistura racêmica (50% de cada), o que não é o caso.",
        "Errada. Corresponde a 0,20 × 30°, ou seja, à fração do (−) tomada isoladamente, sem considerar o cancelamento."
      ],
      "dica": "Cancele pares de enantiômeros: só o excesso de um deles desvia a luz."
    },
    "fontes": [
      {
        "titulo": "OpenStax: Organic Chemistry (livro aberto, CC BY)",
        "url": "https://openstax.org/details/books/organic-chemistry"
      },
      {
        "titulo": "IUPAC: Nomenclature of Organic Chemistry (Blue Book, 2013)",
        "url": "https://iupac.qmul.ac.uk/BlueBook/"
      }
    ]
  },
  {
    "id": "qui-827",
    "materia": "quimica",
    "assunto": "Isomeria",
    "tipo": "multipla",
    "estilo": "Cesgranrio",
    "dificuldade": 3,
    "objetivos": [
      "estatais",
      "livre"
    ],
    "enunciado": "O composto CH3–CH(OH)–CH=CH–CH3 (pent-3-en-2-ol) apresenta um carbono assimétrico no carbono 2 e uma dupla ligação C3=C4 com ligantes diferentes em cada carbono, o que permite isomeria geométrica. O número total de estereoisômeros distintos que podem existir para essa estrutura é",
    "alternativas": [
      "4.",
      "1.",
      "2.",
      "3.",
      "6."
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "Um carbono quiral (2) e uma dupla com cis-trans (2) resultam em 2 × 2 = 4 estereoisômeros.",
      "detalhada": "Cada **elemento estereogênico independente** dobra o número de estereoisômeros:\n\n- **Carbono 2** (H, OH, CH3 e CH=CH–CH3): quiral, 2 possibilidades (R e S).\n- **Dupla C3=C4**: o C3 tem H e o restante da cadeia; o C4 tem H e CH3: 2 possibilidades (cis e trans, ou Z e E).\n\nTotal: 2 × 2 = **4 estereoisômeros** (R,E; S,E; R,Z; S,Z), em dois pares de enantiômeros que são diastereoisômeros entre si.",
      "alternativas": [
        "Certa. Um centro quiral dá 2 isômeros ópticos; a dupla C=C dá 2 formas (cis e trans). Total: 2 × 2 = 4.",
        "Errada. Existem pelo menos as formas cis e trans, além dos enantiômeros.",
        "Errada. Só um dos fenômenos foi contado; há quiralidade e isomeria geométrica ao mesmo tempo.",
        "Errada. Três não é potência de 2 nem produto de dois elementos estereogênicos independentes: 2 × 2 = 4, nunca 3.",
        "Errada. Ultrapassa o máximo possível: 2 elementos estereogênicos geram no máximo 2² = 4 isômeros."
      ],
      "dica": "Conte os elementos estereogênicos (carbonos quirais + duplas com cis-trans) e eleve 2 ao número deles, se forem independentes."
    },
    "fontes": [
      {
        "titulo": "OpenStax: Organic Chemistry (livro aberto, CC BY)",
        "url": "https://openstax.org/details/books/organic-chemistry"
      },
      {
        "titulo": "IUPAC: Nomenclature of Organic Chemistry (Blue Book, 2013)",
        "url": "https://iupac.qmul.ac.uk/BlueBook/"
      }
    ]
  },
  {
    "id": "qui-828",
    "materia": "quimica",
    "assunto": "Reações orgânicas",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "O etanol, C2H5OH, é usado como combustível renovável em veículos flex. Sua combustão completa é representada por C2H5OH + 3 O2 → 2 CO2 + 3 H2O. Considerando C = 12, H = 1 e O = 16, a massa de dióxido de carbono liberada na queima completa de 46 kg de etanol é de",
    "alternativas": [
      "44 kg.",
      "46 kg.",
      "132 kg.",
      "176 kg.",
      "88 kg."
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "46 kg de etanol são 1000 mol e geram 2000 mol de CO2, ou seja, 88 kg.",
      "detalhada": "**Massas molares**: C2H6O = 24 + 6 + 16 = 46 g/mol; CO2 = 12 + 32 = 44 g/mol.\n\n- n(etanol) = 46 000 g ÷ 46 g/mol = **1000 mol**.\n- Proporção 1 : 2 → n(CO2) = **2000 mol**.\n- m(CO2) = 2000 × 44 g = 88 000 g = **88 kg**.\n\nO CO2 do etanol vem de cana-de-açúcar que o absorveu da atmosfera ao crescer, razão pela qual o balanço de carbono do biocombustível é mais favorável que o dos combustíveis fósseis.",
      "alternativas": [
        "Errada. Considera 1 mol de CO2 por mol de etanol; a equação mostra 2 mol.",
        "Errada. Iguala a massa de CO2 à de etanol, sem aplicar a estequiometria.",
        "Errada. Corresponde a 3 mol de CO2 por mol de etanol (o coeficiente da água).",
        "Errada. Dobra o resultado correto, o que equivale a considerar 4 mol de CO2 por mol de etanol.",
        "Certa. 46 kg ÷ 46 g/mol = 1000 mol de etanol; cada mol gera 2 mol de CO2, ou seja, 2000 mol × 44 g/mol = 88 kg."
      ],
      "dica": "Converta tudo para mol, aplique a proporção da equação e só no fim volte para massa. Cuidado com a unidade (kg × g)."
    },
    "fontes": [
      {
        "titulo": "PubChem: etanol",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Ethanol"
      },
      {
        "titulo": "Wikipédia: Etanol combustível",
        "url": "https://pt.wikipedia.org/wiki/Etanol_combust%C3%ADvel"
      }
    ]
  },
  {
    "id": "qui-829",
    "materia": "quimica",
    "assunto": "Reações orgânicas",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "O biodiesel é produzido pela reação de transesterificação entre óleos vegetais ou gorduras (triglicerídeos) e um álcool de cadeia curta, geralmente o metanol ou o etanol, na presença de catalisador. Para 1 mol de triglicerídeo que reage completamente com metanol, CH3OH, são consumidos e formados, respectivamente,",
    "alternativas": [
      "3 mol de metanol, com formação de 3 mol de ésteres metílicos e 1 mol de glicerol.",
      "1 mol de metanol, com formação de 3 mol de glicerol.",
      "3 mol de metanol, com formação de 3 mol de glicerol.",
      "1 mol de metanol, com formação de 1 mol de éster e 1 mol de glicerol.",
      "6 mol de metanol, com formação de 2 mol de glicerol."
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "1 mol de triglicerídeo + 3 mol de metanol → 3 mol de ésteres metílicos (biodiesel) + 1 mol de glicerol.",
      "detalhada": "A **transesterificação** troca o radical alcóxi de um éster. O triglicerídeo é um **triéster** do glicerol com três ácidos graxos:\n\ntriglicerídeo + 3 CH3OH → 3 R–COO–CH3 + glicerol\n\nO biodiesel é a mistura dos **ésteres metílicos** (ou etílicos) e o glicerol é o coproduto. Na indústria usa-se excesso de álcool para deslocar o equilíbrio, mas a proporção estequiométrica é **1 : 3 : 3 : 1**.",
      "alternativas": [
        "Certa. O triglicerídeo tem três grupos éster; cada um troca seu radical do glicerol pelo do metanol, formando 3 mol de éster e liberando 1 mol de glicerol.",
        "Errada. Cada triglicerídeo contém uma única unidade de glicerol e três cadeias de ácido graxo.",
        "Errada. Forma-se 1 mol de glicerol por mol de triglicerídeo.",
        "Errada. Só ocorreria uma troca; a conversão completa exige 3 mol de metanol.",
        "Errada. A proporção estequiométrica é 1 : 3 : 3 : 1, sem excessos na conta."
      ],
      "dica": "Triglicerídeo tem 3 éster: três álcoois entram e um glicerol sai."
    },
    "fontes": [
      {
        "titulo": "ANP: Biodiesel",
        "url": "https://www.gov.br/anp/pt-br/assuntos/producao-e-fornecimento-de-biocombustiveis/biodiesel"
      },
      {
        "titulo": "OpenStax: Organic Chemistry (livro aberto, CC BY)",
        "url": "https://openstax.org/details/books/organic-chemistry"
      }
    ]
  },
  {
    "id": "qui-830",
    "materia": "quimica",
    "assunto": "Reações orgânicas",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "Em uma pequena fábrica de sabão, a gordura usada é composta principalmente por triestearina, C57H110O6, que reage com hidróxido de sódio (saponificação): C57H110O6 + 3 NaOH → glicerol + 3 estearato de sódio. Considerando C = 12, H = 1, O = 16 e Na = 23, a massa mínima de NaOH necessária para saponificar completamente 8,9 kg dessa gordura é de",
    "alternativas": [
      "0,4 kg.",
      "2,4 kg.",
      "1,2 kg.",
      "3,6 kg.",
      "12 kg."
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "8,9 kg de triestearina são 10 mol; a proporção 1 : 3 pede 30 mol de NaOH, ou 1,2 kg.",
      "detalhada": "**Massas molares**: C57H110O6 = 57 × 12 + 110 + 6 × 16 = 684 + 110 + 96 = **890 g/mol**; NaOH = 23 + 16 + 1 = **40 g/mol**.\n\n- n(gordura) = 8900 ÷ 890 = **10 mol**.\n- Proporção 1 : 3 → n(NaOH) = **30 mol**.\n- m(NaOH) = 30 × 40 = 1200 g = **1,2 kg**.\n\nNa prática usa-se um pequeno excesso de base, mas a massa **mínima** é a estequiométrica.",
      "alternativas": [
        "Errada. Considera 1 mol de NaOH por mol de gordura (10 × 40 g), ignorando o coeficiente 3.",
        "Errada. Equivale a 6 mol de NaOH por mol de gordura.",
        "Certa. M(triestearina) = 890 g/mol; 8900 g ÷ 890 = 10 mol; são necessários 3 × 10 = 30 mol de NaOH; 30 × 40 g/mol = 1200 g = 1,2 kg.",
        "Errada. Equivale a 9 mol de NaOH por mol de gordura.",
        "Errada. Corresponde a 300 mol de NaOH (12 kg), ou seja, 3 × 100 mol: contou 100 mol de gordura em vez de 10 mol."
      ],
      "dica": "Na saponificação, 3 mol de base por mol de triglicerídeo: não esqueça o coeficiente 3."
    },
    "fontes": [
      {
        "titulo": "PubChem: triestearina",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Tristearin"
      },
      {
        "titulo": "Química Nova na Escola (SBQ)",
        "url": "https://qnesc.sbq.org.br/"
      }
    ]
  },
  {
    "id": "qui-831",
    "materia": "quimica",
    "assunto": "Reações orgânicas",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "O propeno, CH2=CH–CH3, reage com cloreto de hidrogênio, HCl, em uma reação de adição. Seguindo a regra de Markovnikov, o produto principal formado é o",
    "alternativas": [
      "1-cloropropano.",
      "2-cloropropano.",
      "1,2-dicloropropano.",
      "2,2-dicloropropano.",
      "propan-2-ol."
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Pela regra de Markovnikov, o H vai para o carbono com mais H: forma-se o 2-cloropropano.",
      "detalhada": "Na adição de **HX** a alquenos assimétricos, vale a **regra de Markovnikov**: o **hidrogênio** se liga ao carbono da dupla **mais hidrogenado** e o **halogênio** ao **menos hidrogenado** (mais substituído).\n\nNo propeno, CH2= tem 2 H e =CH– tem 1 H. O H do HCl vai para o CH2 e o Cl para o carbono 2:\n\nCH2=CH–CH3 + HCl → CH3–CHCl–CH3 (**2-cloropropano**)\n\nA explicação moderna usa a estabilidade do carbocátion intermediário: o secundário é mais estável que o primário.",
      "alternativas": [
        "Errada. É o produto anti-Markovnikov, que não se forma em quantidade apreciável com HCl (a adição é iônica). A inversão por radicais, com HBr e peróxido, dá 1-bromopropano.",
        "Certa. O hidrogênio do HCl liga-se ao carbono da dupla que já tem mais hidrogênios (CH2=), e o cloro vai para o carbono mais substituído, formando CH3–CHCl–CH3.",
        "Errada. Ele resultaria da adição de Cl2, e não de HCl.",
        "Errada. Exigiria dois átomos de cloro no mesmo carbono, o que não ocorre numa adição simples de HCl a uma dupla.",
        "Errada. Esse álcool seria obtido pela adição de água (hidratação) em meio ácido, e não de HCl."
      ],
      "dica": "\"Quem tem mais, ganha mais\": o H entra no carbono da dupla que já tem mais hidrogênios."
    },
    "fontes": [
      {
        "titulo": "OpenStax: Organic Chemistry (livro aberto, CC BY)",
        "url": "https://openstax.org/details/books/organic-chemistry"
      },
      {
        "titulo": "IUPAC: Nomenclature of Organic Chemistry (Blue Book, 2013)",
        "url": "https://iupac.qmul.ac.uk/BlueBook/"
      }
    ]
  },
  {
    "id": "qui-832",
    "materia": "quimica",
    "assunto": "Reações orgânicas",
    "tipo": "multipla",
    "estilo": "Cesgranrio",
    "dificuldade": 3,
    "objetivos": [
      "estatais",
      "livre"
    ],
    "enunciado": "No craqueamento catalítico de frações pesadas do petróleo, hidrocarbonetos de cadeia longa são quebrados em moléculas menores, com maior valor comercial. Uma das reações possíveis é C12H26 → C8H18 + C4H8, em que se forma um alceno. Considerando C = 12 e H = 1, ao se processar 340 g de dodecano (C12H26) com rendimento de 80% para a formação do alceno, a massa de C4H8 obtida é de",
    "alternativas": [
      "112 g.",
      "71,7 g.",
      "56 g.",
      "89,6 g.",
      "140 g."
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "340 g de C12H26 são 2 mol; teoricamente geram 112 g de C4H8, e com 80% de rendimento, 89,6 g.",
      "detalhada": "**Massas molares**: C12H26 = 144 + 26 = **170 g/mol**; C4H8 = 48 + 8 = **56 g/mol**.\n\n- n(C12H26) = 340 ÷ 170 = **2 mol**.\n- Proporção 1 : 1 → rendimento teórico = 2 mol de C4H8 = 2 × 56 = **112 g**.\n- Rendimento real = 80% de 112 = **89,6 g**.\n\nO craqueamento é uma reação de **decomposição** (quebra de ligações C–C) feita em presença de catalisador e alta temperatura; o alceno formado é matéria-prima da indústria petroquímica.",
      "alternativas": [
        "Errada. É a massa para rendimento de 100%; faltou aplicar os 80%.",
        "Errada. Aplicou-se 80% duas vezes (0,8 × 0,8 × 112).",
        "Errada. Corresponde a 1 mol de C4H8, o que ignora que há 2 mol de dodecano.",
        "Certa. n(C12H26) = 340 ÷ 170 = 2 mol; rendimento teórico: 2 mol de C4H8 = 112 g; com 80%: 0,80 × 112 = 89,6 g.",
        "Errada. Resulta de dividir 112 por 0,80, em vez de multiplicar."
      ],
      "dica": "Rendimento multiplica: massa obtida = teórica × rendimento. Se o resultado passou do teórico, algo está errado."
    },
    "fontes": [
      {
        "titulo": "PubChem: dodecano",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Dodecane"
      },
      {
        "titulo": "OpenStax: Organic Chemistry (livro aberto, CC BY)",
        "url": "https://openstax.org/details/books/organic-chemistry"
      }
    ]
  },
  {
    "id": "qui-833",
    "materia": "quimica",
    "assunto": "Reações orgânicas",
    "tipo": "certo-errado",
    "estilo": "CEBRASPE",
    "dificuldade": 2,
    "objetivos": [
      "concursos-gerais",
      "livre"
    ],
    "enunciado": "Julgue o item a seguir, sobre reações orgânicas.\nQuando se adiciona uma solução de bromo (Br2) em tetracloreto de carbono ao but-1-eno, a solução perde a cor castanha por meio de uma reação de substituição, formando bromobutano e HBr.",
    "resposta": false,
    "explicacao": {
      "resumo": "Errado. Trata-se de uma reação de adição à dupla ligação, que forma 1,2-dibromobutano, sem liberar HBr.",
      "detalhada": "Alquenos reagem com Br2 por **adição** à dupla ligação: um átomo de bromo vai para cada carbono da dupla, e a dupla vira ligação simples:\n\nCH2=CH–CH2–CH3 + Br2 → CH2Br–CHBr–CH2–CH3 (**1,2-dibromobutano**)\n\nO produto não é bromobutano e **não se forma HBr**. Como o produto é incolor, a perda da cor do bromo é usada como **teste de insaturação**. A substituição com formação de HBr ocorre em alcanos, sob luz ou calor, e é típica das reações radicalares.",
      "dica": "Descoloriu o bromo? É adição à insaturação. HBr como coproduto indica substituição."
    },
    "fontes": [
      {
        "titulo": "OpenStax: Organic Chemistry (livro aberto, CC BY)",
        "url": "https://openstax.org/details/books/organic-chemistry"
      },
      {
        "titulo": "Química Nova na Escola (SBQ)",
        "url": "https://qnesc.sbq.org.br/"
      }
    ]
  },
  {
    "id": "qui-834",
    "materia": "quimica",
    "assunto": "Reações orgânicas",
    "tipo": "multipla",
    "estilo": "ENEM",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "enunciado": "O acetato de etila é um éster de aroma frutado, usado como solvente em esmaltes e aromatizante. Ele pode ser obtido pela reação de esterificação CH3COOH + CH3CH2OH ⇌ CH3COOCH2CH3 + H2O. Em um processo, 60 g de ácido acético reagem com excesso de etanol, com rendimento de 70%. Considerando C = 12, H = 1 e O = 16, a massa de acetato de etila obtida é de",
    "alternativas": [
      "88,0 g.",
      "125,7 g.",
      "42,0 g.",
      "26,4 g.",
      "61,6 g."
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "60 g de CH3COOH são 1 mol e rendem 88 g de éster; com 70% de rendimento, 61,6 g.",
      "detalhada": "**Massas molares**: CH3COOH (C2H4O2) = 60 g/mol; acetato de etila (C4H8O2) = 48 + 8 + 32 = **88 g/mol**.\n\n- n(ácido) = 60 ÷ 60 = **1 mol** (limitante, pois o etanol está em excesso).\n- Proporção 1 : 1 → teórico: 1 mol de éster = **88 g**.\n- Real: 0,70 × 88 = **61,6 g**.\n\nA esterificação é um **equilíbrio**; por isso o rendimento fica abaixo de 100%, a não ser que a água seja retirada ou um reagente seja usado em excesso.",
      "alternativas": [
        "Errada. É a massa para rendimento de 100%.",
        "Errada. Resulta da divisão de 88 por 0,70, e o rendimento deve multiplicar.",
        "Errada. Aplicou 70% à massa do ácido (60 g) em vez da massa do éster.",
        "Errada. Equivale a 30% de 88 g, que é a parte que não se converteu.",
        "Certa. 60 g de ácido = 1 mol; o rendimento teórico é 1 mol de éster = 88 g; com 70%: 0,70 × 88 = 61,6 g."
      ],
      "dica": "O rendimento incide sobre o produto, não sobre o reagente. Identifique o limitante antes de calcular."
    },
    "fontes": [
      {
        "titulo": "PubChem: acetato de etila",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Ethyl-acetate"
      },
      {
        "titulo": "OpenStax: Organic Chemistry (livro aberto, CC BY)",
        "url": "https://openstax.org/details/books/organic-chemistry"
      }
    ]
  },
  {
    "id": "qui-835",
    "materia": "quimica",
    "assunto": "Reações orgânicas",
    "tipo": "certo-errado",
    "estilo": "CEBRASPE",
    "dificuldade": 2,
    "objetivos": [
      "concursos-gerais",
      "livre"
    ],
    "enunciado": "Julgue o item a seguir, sobre oxidação de álcoois.\nNa oxidação branda do propan-2-ol, CH3–CH(OH)–CH3, em presença de um oxidante adequado, forma-se a propanona (acetona), pois álcoois secundários são oxidados a cetonas.",
    "resposta": true,
    "explicacao": {
      "resumo": "Certo. Álcool secundário é oxidado a cetona: o propan-2-ol origina a propanona.",
      "detalhada": "O destino da oxidação depende do tipo de álcool:\n\n- **Primário** → aldeído → ácido carboxílico (ex.: etanol → etanal → ácido etanoico).\n- **Secundário** → **cetona** (ex.: propan-2-ol → propanona).\n- **Terciário** → não sofre oxidação branda, pois o carbono do –OH não tem hidrogênio.\n\nO propan-2-ol tem o –OH em carbono ligado a dois outros carbonos (secundário). A oxidação remove o H desse carbono e o H da hidroxila, gerando C=O: **CH3–CO–CH3**.",
      "dica": "Conte os hidrogênios do carbono do OH: dois ou mais (primário) vão até ácido; um (secundário) para na cetona; nenhum (terciário) não oxida."
    },
    "fontes": [
      {
        "titulo": "PubChem: propan-2-ol",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Isopropanol"
      },
      {
        "titulo": "OpenStax: Organic Chemistry (livro aberto, CC BY)",
        "url": "https://openstax.org/details/books/organic-chemistry"
      }
    ]
  }
] });
