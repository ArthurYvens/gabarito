/* Questões de Química adaptadas dos problemas teóricos das Olimpíadas Internacionais de Química (IChO) de 1989 a 2007 (21ª a 39ª).
   Fonte: "The Competition Problems from the International Chemistry Olympiads, Volume 2" (21ª a 40ª IChO, 1989-2008), editor Anton Sirota, IUVENTA, Bratislava,
   IChO International Information Centre. Original: https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf
   Página da coleção: https://icho.sk/competition-problems/
   Permissão de uso (página de créditos do volume): "You are free to copy, distribute, transmit or adapt this publication or its parts for unlimited teaching purposes."
   Citação exigida: "The Competition Problems from the International Chemistry Olympiads, Volume 2".
   Este arquivo é uma adaptação (tradução para o português do Brasil, conversão para múltipla escolha e comentários novos), com as respostas conferidas na solução oficial
   de cada problema. O conteúdo adaptado é distribuído gratuitamente, sem fins comerciais, para estudo, com a mesma citação da fonte. */
Banco.registrar({ questoes: [
  {
    "id": "qui-1241",
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
      "ano": 1989,
      "orgao": "prova teórica (Halle), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 21ª IChO, Halle, 1989, problema 1. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Para determinar o produto de solubilidade do iodato de cobre(II), Cu(IO3)2, a 25 °C, uma solução aquosa saturada do sal foi tratada em meio ácido com excesso de I⁻ (2 Cu²⁺ + 4 IO3⁻ + 24 I⁻ + 24 H⁺ → 2 CuI + 13 I2 + 12 H2O) e o I2 formado foi titulado com tiossulfato (I2 + 2 S2O3²⁻ → 2 I⁻ + S4O6²⁻). Foram gastos 30,00 cm³ de Na2S2O3 0,100 mol/dm³ para titular 20,00 cm³ da solução saturada. Desprezando os coeficientes de atividade, qual é o produto de solubilidade Ks = [Cu²⁺][IO3⁻]² do Cu(IO3)2?",
    "alternativas": [
      "4,6×10⁻¹",
      "1,5×10⁻⁶",
      "6,1×10⁻⁶",
      "4,9×10⁻⁵",
      "3,8×10⁻⁷"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "O tiossulfato dá n(I2) = 1,50×10⁻³ mol; pela 1ª equação n(Cu²⁺) = 2/13 × n(I2) = 2,31×10⁻⁴ mol em 20,00 cm³, ou seja [Cu²⁺] = 1,15×10⁻² mol/dm³ e Ks = 4[Cu²⁺]³ ≈ 6,1×10⁻⁶.",
      "detalhada": "A resolução segue a solução oficial do problema 1.\n\n**1) Mols de tiossulfato:** 0,100 mol/dm³ × 0,03000 dm³ = 3,00×10⁻³ mol.\n\n**2) Mols de I2:** I2 + 2 S2O3²⁻ → ..., logo n(I2) = 3,00×10⁻³ / 2 = 1,50×10⁻³ mol.\n\n**3) Mols de Cu²⁺ na alíquota:** 13 mol de I2 correspondem a 2 mol de Cu²⁺, então n(Cu²⁺) = 1,50×10⁻³ × 2/13 = 2,31×10⁻⁴ mol.\n\n**4) Concentração:** [Cu²⁺] = 2,31×10⁻⁴ mol / 0,02000 dm³ = 1,15×10⁻² mol/dm³. Como o sal é Cu(IO3)2, [IO3⁻] = 2[Cu²⁺].\n\n**5) Ks:** Ks = [Cu²⁺][IO3⁻]² = 4[Cu²⁺]³ = 4 × (1,15×10⁻²)³ ≈ 6,1×10⁻⁶ (a solução oficial arredonda para 6,08×10⁻⁶).",
      "alternativas": [
        "Errada. Inverte a proporção da primeira equação (usa n(Cu²⁺) = n(I2) × 13/2). Cada 13 mol de I2 vêm de apenas 2 mol de Cu²⁺, e não o contrário; o resultado é absurdo: [Cu²⁺] ≈ 0,49 mol/dm³ e Ks ≈ 0,46, muitas ordens de grandeza acima do Ks de um sal pouco solúvel como o Cu(IO3)2 (da ordem de 10⁻⁶).",
        "Errada. Calcula a concentração de Cu²⁺ corretamente (1,15×10⁻² mol/dm³), mas usa Ks = [Cu²⁺]³, esquecendo que [IO3⁻] = 2[Cu²⁺]. O fator correto é 4[Cu²⁺]³.",
        "Correta. n(I2) = 1,50×10⁻³ mol, n(Cu²⁺) = 2,31×10⁻⁴ mol, [Cu²⁺] = 1,15×10⁻² mol/dm³ e Ks = 4[Cu²⁺]³ ≈ 6,1×10⁻⁶.",
        "Errada. Esquece que cada mol de I2 consome 2 mol de S2O3²⁻: usa n(I2) = n(S2O3²⁻) = 3,00×10⁻³ mol, o que dobra [Cu²⁺] e multiplica Ks por oito.",
        "Errada. Faz [IO3⁻] = [Cu²⁺]/2 (inverte a proporção do sal), obtendo Ks = [Cu²⁺]³/4. Em Cu(IO3)2 há dois íons iodato para cada Cu²⁺."
      ],
      "dica": "Em titulação indireta, escreva a cadeia de proporções (S2O3²⁻ → I2 → Cu²⁺) e só depois relacione as concentrações pelo produto de solubilidade do sal."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 21ª IChO (1989), problema 1",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1242",
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
      "ano": 1989,
      "orgao": "prova teórica (Halle), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 21ª IChO, Halle, 1989, problema 5. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O ácido ciclobutano-1,2-dicarboxílico (anel de quatro carbonos com um grupo –COOH em cada um de dois carbonos vizinhos) existe como três estereoisômeros. Quais são as configurações absolutas (R/S) dos dois centros quirais C1 e C2 em cada um deles e qual isômero é opticamente inativo?",
    "alternativas": [
      "Isômero trans: (1R,2R) e (1S,2S), enantiômeros entre si e opticamente ativos; isômero cis: (1R,2S), forma meso, opticamente inativa.",
      "Isômero cis: (1R,2R) e (1S,2S), enantiômeros entre si; isômero trans: (1R,2S), forma meso.",
      "Os três isômeros são opticamente ativos: cis (1R,2S) e trans (1R,2R) e (1S,2S).",
      "Existem só dois estereoisômeros, o cis (1R,2R) e o trans (1S,2S), ambos ativos.",
      "Os três são meso (inativos), porque o anel é simétrico."
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "No cis há plano de simetria: (1R,2S), meso, inativo. No trans não há: (1R,2R) e (1S,2S) são enantiômeros ativos. Total: três estereoisômeros.",
      "detalhada": "A resolução segue a solução oficial do problema 5 (itens 5.2, 5.3 e 5.6).\n\n**1) Centros quirais:** C1 e C2 têm quatro substituintes diferentes (H, COOH, e dois caminhos distintos no anel), logo cada um é um centro quiral.\n\n**2) Isômero cis:** os dois –COOH do mesmo lado; existe um plano que passa pelo meio da ligação C1–C2 e reflete uma metade na outra. A molécula é meso, com configuração (1R,2S), e é opticamente inativa. Por perder água facilmente forma um anidrido cíclico, o que serve para reconhecer o cis.\n\n**3) Isômero trans:** os –COOH em lados opostos; não há plano nem centro de simetria, portanto é quiral. Existe como par de enantiômeros (1R,2R) e (1S,2S), opticamente ativos.\n\n**4) Relações:** (1R,2R) e (1S,2S) são enantiômeros; cada um deles é diastereoisômero do cis (meso).",
      "alternativas": [
        "Correta. Cis = (1R,2S) meso (plano de simetria, inativo); trans = (1R,2R) e (1S,2S), enantiômeros ativos.",
        "Errada. Troca cis por trans. No cis, os dois –COOH ficam do mesmo lado e a molécula tem um plano de simetria (meso); é o trans que não tem plano nem centro de simetria e forma um par de enantiômeros.",
        "Errada. A designação (1R,2S) com substituintes idênticos nos dois centros indica composto meso: o cis é superponível à sua imagem especular e não gira o plano da luz polarizada.",
        "Errada. O enunciado fala em três estereoisômeros, e a análise confirma: cis (meso) e o par trans (R,R)/(S,S). Se o cis fosse (R,R), existiria o enantiômero (S,S), e o cis teria dois estereoisômeros ativos; mas o cis tem plano de simetria.",
        "Errada. O anel por si só não garante simetria; no trans os grupos –COOH ficam em lados opostos e a molécula não tem plano de simetria. Ela é quiral e existe como par (1R,2R)/(1S,2S)."
      ],
      "dica": "Dois centros quirais com os mesmos substituintes: se a molécula tem plano de simetria, o par (R,S) é meso; o par (R,R)/(S,S) é de enantiômeros."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 21ª IChO (1989), problema 5",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1243",
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
      "ano": 1990,
      "orgao": "prova teórica (Paris), problema 2, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 22ª IChO, Paris, 1990, problema 2. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Os íons cobre(I) desproporcionam em água: 2 Cu⁺ → Cu²⁺ + Cu. Dados, a 25 °C: Cu⁺ + e⁻ → Cu, E° = +0,52 V; Cu²⁺ + e⁻ → Cu⁺, E° = +0,16 V. Qual é a ordem de grandeza da constante de equilíbrio K = [Cu²⁺]/[Cu⁺]² dessa desproporcionação?",
    "alternativas": [
      "10³",
      "10¹²",
      "10⁻⁶",
      "10⁶",
      "10¹⁴"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "ΔE° = 0,52 − 0,16 = 0,36 V e n = 1: log K = 0,36/0,0591 ≈ 6, ou seja K ≈ 10⁶.",
      "detalhada": "A resolução segue a solução oficial do problema 2 (item 2.4), que obtém K = 1×10⁶.\n\n**1) Semirreações:** o Cu⁺ é reduzido a Cu (E° = 0,52 V, cátodo) e oxidado a Cu²⁺ (par Cu²⁺/Cu⁺, E° = 0,16 V, ânodo).\n\n**2) Potencial da reação global:** ΔE° = 0,52 − 0,16 = 0,36 V (positivo: desproporcionação espontânea).\n\n**3) Constante:** a 25 °C, log K = nΔE°/0,0591 = 1 × 0,36/0,0591 ≈ 6,1, logo K é da ordem de 10⁶ (a solução oficial usa K = 1×10⁶).\n\n**4) Consequência:** K tão alto significa que, em água, quase todo o Cu⁺ vira Cu²⁺ e Cu; por isso os sais de Cu(I) só existem como sólidos pouco solúveis ou em complexos.",
      "alternativas": [
        "Errada. Usa metade da diferença de potencial (0,18 V) em log K = ΔE/0,0591, o que dá log K ≈ 3. A diferença correta entre os dois potenciais é 0,52 − 0,16 = 0,36 V.",
        "Errada. Multiplica por dois o número de elétrons (n = 2), obtendo log K = 2 × 0,36/0,0591 ≈ 12. A equação 2 Cu⁺ → Cu²⁺ + Cu transfere apenas 1 elétron (n = 1) entre as duas semirreações escritas por mol de Cu⁺.",
        "Errada. Inverte o sinal: seria a constante da reação oposta (comproporcionação). Como o potencial de redução do par Cu⁺/Cu (0,52 V) é maior que o do par Cu²⁺/Cu⁺ (0,16 V), o Cu⁺ desproporciona espontaneamente e K > 1.",
        "Correta. log K = 1 × 0,36/0,0591 ≈ 6,1, então K ≈ 10⁶.",
        "Errada. Confunde ln K com log K: nFΔE°/RT = 0,36/0,0257 = 14 é o logaritmo natural, e não o decimal (e^14 = 10^6,1). Com 0,0591 V (= 2,303RT/F), log K = 6,1."
      ],
      "dica": "Para K a partir de potenciais padrão, use log K = nΔE°/0,0591 a 25 °C, com n = número de elétrons da reação global balanceada."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 22ª IChO (1990), problema 2",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1244",
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
      "ano": 1990,
      "orgao": "prova teórica (Paris), problema 3, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 22ª IChO, Paris, 1990, problema 3. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Em uma síntese do haloperidol, o 4-clorobenzoato de metila é tratado com excesso de brometo de vinilmagnésio (CH2=CH–MgBr) em éter anidro e depois hidrolisado, dando M. O composto M reage com excesso de HBr anidro, na presença de peróxido de benzoíla, e forma N. Por fim, N reage com amônia e forma a 4-(4-clorofenil)piperidin-4-ol (O). Qual é a estrutura de N?",
    "alternativas": [
      "4-Cl–C6H4–C(OH)(CHBr–CH3)2",
      "4-Cl–C6H4–CO–CH=CH2",
      "4-Cl–C6H4–C(OH)(CH=CH2)2",
      "4-Cl–C6H4–C(Br)(CH2–CH2Br)2",
      "4-Cl–C6H4–C(OH)(CH2–CH2Br)2 (1,5-dibromo-3-(4-clorofenil)pentan-3-ol)"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "O éster reage duas vezes com o Grignard (M = álcool terciário com dois vinilas); HBr com peróxido adiciona anti-Markovnikov às duas C=C, dando N = Ar–C(OH)(CH2CH2Br)2, que com NH3 fecha o anel de O.",
      "detalhada": "A resolução segue a solução oficial do problema 3 (item 3.4).\n\n**1) Formação de M:** o éster reage com um 1º equivalente de CH2=CH–MgBr, perde CH3O⁻ e forma a vinil-cetona; esta reage com um 2º equivalente e, após hidrólise, dá o álcool terciário M = 4-Cl–C6H4–C(OH)(CH=CH2)2.\n\n**2) Formação de N:** HBr com peróxido adiciona-se por mecanismo radicalar (anti-Markovnikov): o átomo de Br vai para o carbono terminal de cada vinila. N = 4-Cl–C6H4–C(OH)(CH2–CH2Br)2.\n\n**3) Conferência com O:** NH3 desloca os dois Br em reações de substituição nucleofílica, fechando o anel de seis membros (N, os dois CH2CH2 e o carbono carbinólico): 4-(4-clorofenil)piperidin-4-ol. Isso só funciona se os Br estiverem nas extremidades.",
      "alternativas": [
        "Errada. É o produto da adição de HBr segundo Markovnikov. Com peróxido o mecanismo é radicalar e a adição é anti-Markovnikov: o Br fica no carbono terminal. Além disso, o produto Markovnikov não daria o anel piperidínico de O.",
        "Errada. É a vinil-cetona, que resultaria de uma única adição do Grignard e a parada na cetona. Com excesso de reagente, o éster reage duas vezes e forma o álcool terciário M.",
        "Errada. É o próprio M (álcool terciário divinílico), ainda sem o HBr. N é o produto da adição de HBr às duas ligações C=C de M.",
        "Errada. Troca também o OH benzílico por Br. Mas O (o piperidin-4-ol) mantém o grupo OH em C-4, então N precisa conservar o OH tercário e ter bromo só nos dois carbonos terminais.",
        "Correta. Duas adições anti-Markovnikov de HBr (peróxido) a M dão Ar–C(OH)(CH2CH2Br)2, o precursor do anel piperidínico."
      ],
      "dica": "HBr + peróxido = radical livre = Br no carbono menos substituído (anti-Markovnikov). Confira a estrutura pelo produto final do enunciado."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 22ª IChO (1990), problema 3",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1245",
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
      "ano": 1991,
      "orgao": "prova teórica (Lodz), problema 2, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 23ª IChO, Lodz, 1991, problema 2. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Um polímero X tem 88,25% de C e 11,75% de H e reage com bromo e com ozônio. Sua degradação térmica produz, com 58% de rendimento, um líquido volátil Y (ebulição a 34 °C) com 88,25% de C e 11,72% de H, cujo vapor é 34 vezes mais denso que o hidrogênio (H2) nas mesmas condições. Y também sofre ciclização do tipo Diels-Alder. A ozonólise de Y seguida de redução branda dá dois compostos, A e B, na proporção molar 2 : 1, e só B dá teste positivo no iodofórmio. Qual é Y (o monômero de X)?",
    "alternativas": [
      "penta-1,3-dieno",
      "2-metilbuta-1,3-dieno (isopreno)",
      "penta-1,4-dieno",
      "ciclopenteno",
      "3-metilbut-1-ino"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "C : H = 1 : 1,6 e M = 34 × 2 = 68 g/mol dão C5H8. A ozonólise do isopreno rende 2 CH2O (A) para 1 CH3–CO–CHO (B, que dá iodofórmio), e o isopreno é conjugado (Diels-Alder): X é a borracha natural (poli-isopreno).",
      "detalhada": "A resolução segue a solução oficial do problema 2 (itens 2.1 e 2.2).\n\n**1) Fórmula:** n(C) : n(H) = 88,25/12,01 : 11,72/1,008 = 7,35 : 11,6 ≈ 1 : 1,6, o que corresponde a C5H8. A massa molar de Y é 34 × 2,0 ≈ 68 g/mol, igual à de C5H8: é a fórmula molecular.\n\n**2) Ozonólise e iodofórmio:** o isopreno CH2=C(CH3)–CH=CH2 é quebrado nas duas ligações duplas. As duas pontas CH2= viram 2 CH2O (A); o miolo vira CH3–CO–CHO (B). Proporção A : B = 2 : 1, e só B tem o grupo CH3–CO– (iodofórmio positivo).\n\n**3) Outros dados:** o isopreno é um dieno conjugado (reação de Diels-Alder entre moléculas de Y) e, por pirólise, a borracha natural (cis-1,4-poli-isopreno, o polímero X) despolimeriza em isopreno.",
      "alternativas": [
        "Errada. Tem a mesma fórmula, C5H8, e é um dieno conjugado, mas a ozonólise dá três produtos (metanal, etanodial e etanal) na proporção 1 : 1 : 1, e não dois produtos na proporção 2 : 1.",
        "Correta. C5H8 (M = 68); ozonólise dá 2 CH2O + 1 CH3–CO–CHO, só o último dá iodofórmio; dieno conjugado; X = poli-isopreno.",
        "Errada. A ozonólise dá 2 metanal : 1 propanodial (2 : 1), mas o propanodial (OHC–CH2–CHO) não tem grupo CH3–CO– e não dá o teste do iodofórmio; além disso, o dieno não é conjugado e não faria Diels-Alder.",
        "Errada. É C5H8, mas a ozonólise de um alceno cíclico dá um único produto, o pentanodial (glutaraldeído), e não dois compostos A e B.",
        "Errada. É C5H8 também, mas a ozonólise de um alcino dá ácidos carboxílicos (e CO2), e não os compostos carbonílicos A e B na proporção 2 : 1; também não faz Diels-Alder como dieno."
      ],
      "dica": "Reconstrua o alceno juntando os fragmentos da ozonólise e use os testes (iodofórmio) para decidir entre isômeros de mesma fórmula."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 23ª IChO (1991), problema 2",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1246",
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
      "ano": 1991,
      "orgao": "prova teórica (Lodz), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 23ª IChO, Lodz, 1991, problema 5. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Passam-se 0,25 mol de um hidrocarboneto A sobre pedra-pomes aquecida (950 K) em um tubo de ferro. Obtêm-se o composto B, com rendimento de 80% (15,4 g), e 2,4 dm³ de hidrogênio (295 K, 102 kPa). B e H2 são os únicos produtos. Qual par A → B é compatível com esses dados?",
    "alternativas": [
      "A = tolueno (C7H8); B = bibenzila (C14H14)",
      "A = ciclo-hexano (C6H12); B = bi(ciclo-hexila) (C12H22)",
      "A = benzeno (C6H6); B = bifenila (C12H10)",
      "A = naftaleno (C10H8); B = binaftila (C20H14)",
      "A = eteno (C2H4); B = buta-1,3-dieno (C4H6)"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "n(H2) = pV/RT ≈ 0,100 mol; a reação 2 A → B + H2 dá n(B) = 0,100 mol e M(B) = 15,4/0,100 = 154 g/mol (bifenila); M(A) = (154 + 2)/2 = 78 g/mol (benzeno), e 0,20 mol consumido de 0,25 mol é 80%.",
      "detalhada": "A resolução segue a solução oficial do problema 5 (item 5.1, em que B é a bifenila a partir da qual se obtêm os clorobifenilos).\n\n**1) Mols de H2:** n = pV/(RT) = 102 000 Pa × 2,4×10⁻³ m³ / (8,314 × 295) ≈ 0,0998 mol ≈ 0,100 mol.\n\n**2) Estequiometria:** como B e H2 são os únicos produtos e A é hidrocarboneto, a reação é um acoplamento desidrogenativo: 2 A → B + H2. Logo n(B) = n(H2) ≈ 0,100 mol.\n\n**3) Massa molar de B:** M(B) = 15,4 g / 0,100 mol = 154 g/mol, que é C12H10.\n\n**4) Massa molar de A:** M(A) = (154 + 2)/2 = 78 g/mol, benzeno. Conferência do rendimento: foram consumidos 2 × 0,100 = 0,20 mol de benzeno de 0,25 mol, isto é, 80%.",
      "alternativas": [
        "Errada. 2 C7H8 → C14H14 + H2 também libera 1 mol de H2 por mol de B, mas B teria M = 182 g/mol: com 0,100 mol de B (a quantidade de H2 medida) a massa seria 18,2 g, e não 15,4 g.",
        "Errada. A estequiometria 2 A → B + H2 é a mesma, mas M(B) = 166 g/mol daria 16,6 g para 0,100 mol, diferente dos 15,4 g do enunciado.",
        "Correta. n(H2) ≈ 0,100 mol = n(B); M(B) = 154 g/mol (bifenila) e M(A) = 78 g/mol (benzeno); 0,20/0,25 = 80%.",
        "Errada. M(B) = 254 g/mol: 0,100 mol dariam 25,4 g, muito acima de 15,4 g. Além disso, 80% de 0,25 mol de naftaleno só permitem 0,10 mol de B se a massa fosse a correta.",
        "Errada. 2 C2H4 → C4H6 + H2 respeita a estequiometria, mas M(B) = 54 g/mol: 0,100 mol dariam apenas 5,4 g, e não 15,4 g."
      ],
      "dica": "Use o gás liberado (pV = nRT) para achar quantos mols de B se formaram; depois a massa de B dá a massa molar."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 23ª IChO (1991), problema 5",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1247",
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
      "ano": 1991,
      "orgao": "prova teórica (Lodz), problema 3, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 23ª IChO, Lodz, 1991, problema 3. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O potencial padrão do eletrodo Ag/Ag⁺ (Ag⁺ + e⁻ → Ag) é E° = 0,799 V a 25 °C e o produto de solubilidade do AgCl é Ks = 1,73×10⁻¹⁰. Qual é o potencial padrão do eletrodo prata/cloreto de prata (AgCl + e⁻ → Ag + Cl⁻), nas mesmas condições? (use 0,0591 V como valor de 2,303RT/F)",
    "alternativas": [
      "+0,222 V",
      "+1,376 V",
      "−0,222 V",
      "+0,577 V",
      "+0,799 V"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "Com [Cl⁻] = 1, [Ag⁺] = Ks, então E°(AgCl/Ag) = E°(Ag⁺/Ag) + 0,0591·log Ks = 0,799 − 0,577 = 0,222 V.",
      "detalhada": "A resolução segue a solução oficial do problema 3 (item 3.4).\n\n**1) Nernst para Ag⁺/Ag:** E = 0,799 + 0,0591·log[Ag⁺].\n\n**2) Condição padrão do eletrodo de AgCl:** [Cl⁻] = 1 mol/dm³. O equilíbrio AgCl ⇌ Ag⁺ + Cl⁻ fixa [Ag⁺] = Ks/[Cl⁻] = 1,73×10⁻¹⁰ mol/dm³.\n\n**3) Substituição:** E° = 0,799 + 0,0591 × log(1,73×10⁻¹⁰) = 0,799 + 0,0591 × (−9,762) = 0,799 − 0,577 = 0,222 V.\n\n**4) Expressão geral:** E°(Ag, AgCl/Cl⁻) = E°(Ag/Ag⁺) + 0,0591·log Ks.",
      "alternativas": [
        "Correta. E° = 0,799 + 0,0591·log(1,73×10⁻¹⁰) = 0,799 − 0,577 = +0,222 V.",
        "Errada. Soma 0,0591·log Ks em vez de usá-lo com o sinal correto. Como Ks é muito menor que 1, log Ks é negativo (−9,76) e o termo 0,0591·log Ks (−0,577 V) diminui o potencial.",
        "Errada. Acerta o módulo, mas inverte o sinal. O eletrodo Ag/AgCl tem potencial padrão positivo, 0,222 V, bem conhecido como eletrodo de referência.",
        "Errada. Usa só o termo 0,0591·|log Ks| e esquece de partir do potencial 0,799 V do par Ag⁺/Ag.",
        "Errada. Ignora a precipitação do AgCl. Ao fixar [Ag⁺] pelo Ks, a concentração de Ag⁺ com Cl⁻ = 1 mol/dm³ cai a 1,73×10⁻¹⁰ mol/dm³ e o potencial cai junto."
      ],
      "dica": "Eletrodo de segunda espécie: o sal pouco solúvel fixa [M⁺] = Ks/[X⁻]; substitua isso na equação de Nernst do metal."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 23ª IChO (1991), problema 3",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1248",
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
      "ano": 1992,
      "orgao": "prova teórica (Pittsburgh), problema 3, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 24ª IChO, Pittsburgh, 1992, problema 3. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O álcool coniferílico (C10H12O3), extraído do pinheiro, não é solúvel em água nem em NaHCO3 aquoso e descora uma solução de Br2 em CCl4, formando A (C10H12O3Br2). A ozonólise redutiva do álcool coniferílico dá vanilina (4-hidróxi-3-metoxibenzaldeído) e um composto B (C2H4O2), o glicolaldeído. A partir desses dados, deduza a estrutura do álcool coniferílico e a de A. Quantos estereoisômeros tem A?",
    "alternativas": [
      "2 (um par de enantiômeros)",
      "3 (um par de enantiômeros e uma forma meso)",
      "1 (nenhum carbono quiral)",
      "4 (dois pares de enantiômeros)",
      "8 (três centros quirais)"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "A = Ar–CHBr–CHBr–CH2OH tem dois centros quirais diferentes, logo 2² = 4 estereoisômeros: dois pares de enantiômeros (pares entre si diastereoisômeros).",
      "detalhada": "A resolução segue a solução oficial do problema 3 (item 3.2): \"4 diastereoisômeros (2 pares de enantiômeros)\".\n\n**1) Estrutura de A:** o Br2 adiciona-se à dupla C=C da cadeia lateral do álcool coniferílico: Ar–CH=CH–CH2OH vira Ar–CHBr–CHBr–CH2OH.\n\n**2) Centros quirais:** C-α (liga H, Br, Ar e CHBr–CH2OH) e C-β (liga H, Br, CH2OH e CHBr–Ar) têm quatro substituintes distintos: 2 centros.\n\n**3) Contagem:** 2² = 4 estereoisômeros: (R,R), (S,S), (R,S) e (S,R). Como os dois centros não são equivalentes, não há forma meso: (R,R) e (S,S) são enantiômeros, assim como (R,S) e (S,R); os dois pares são diastereoisômeros entre si.",
      "alternativas": [
        "Errada. A tem dois carbonos quirais (os dois que receberam Br) e, como são diferentes (um é benzílico, o outro liga CH2OH), a regra 2ⁿ vale: 2² = 4, e não 2.",
        "Errada. A forma meso exigiria dois centros quirais idênticos (mesmos substituintes). Aqui um centro tem o anel aromático e o outro tem o grupo CH2OH, então não há meso.",
        "Errada. A dupla ligação vira dois carbonos sp³ ligados a quatro substituintes diferentes (H, Br, e dois grupos distintos): ambos são quirais.",
        "Correta. Dois centros quirais não equivalentes dão 4 estereoisômeros (2 pares de enantiômeros), sem forma meso.",
        "Errada. A só tem dois centros quirais: o carbono benzílico e o seguinte (CHBr). O carbono do CH2OH tem dois H e o anel aromático não é centro quiral."
      ],
      "dica": "Conte os carbonos com quatro substituintes diferentes; com n centros distintos há 2ⁿ estereoisômeros, e meso só aparece com centros equivalentes."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 24ª IChO (1992), problema 3",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1249",
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
      "ano": 1992,
      "orgao": "prova teórica (Pittsburgh), problema 6, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 24ª IChO, Pittsburgh, 1992, problema 6. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "A concentração de CO2 na atmosfera deve chegar a cerca de 440 ppm (pressão parcial de 440×10⁻⁶ atm) em 2020. A água destilada em equilíbrio com essa atmosfera dissolve o CO2 segundo a lei de Henry (KH = 0,0343 mol dm⁻³ atm⁻¹ a 298 K), e o CO2 dissolvido reage: CO2(aq) + H2O(l) → H⁺(aq) + HCO3⁻(aq). Dados de ΔfG° a 298 K (kJ/mol): CO2(aq) = −386,2; H2O(l) = −237,2; HCO3⁻(aq) = −587,1; H⁺(aq) = 0. Desprezando a 2ª dissociação e a autoionização da água, qual é o pH da solução?",
    "alternativas": [
      "4,82",
      "5,59",
      "6,36",
      "7,00",
      "11,18"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "[CO2] = 0,0343 × 440×10⁻⁶ = 1,51×10⁻⁵ mol/dm³; ΔG° = +36,3 kJ/mol dá K = 4,37×10⁻⁷; x = √(K·[CO2]) = 2,57×10⁻⁶ mol/dm³ e pH = 5,59.",
      "detalhada": "A resolução segue a solução oficial do problema 6 (itens 6.1 e 6.2).\n\n**1) CO2 dissolvido:** [CO2(aq)] = KH·p(CO2) = 0,0343 × 440×10⁻⁶ = 1,51×10⁻⁵ mol/dm³. (O enunciado original escreve a unidade de KH como dm³ mol⁻¹ atm⁻¹, mas, para dar concentração, ela é mol dm⁻³ atm⁻¹.)\n\n**2) ΔG° da reação:** ΔG° = (−587,1 + 0) − (−386,2 − 237,2) = +36,3 kJ/mol.\n\n**3) Constante:** K = exp(−ΔG°/RT) = exp(−36 300/(8,314 × 298,15)) = 4,37×10⁻⁷.\n\n**4) Equilíbrio:** com [H⁺] = [HCO3⁻] = x, K = x²/[CO2], logo x = √(4,37×10⁻⁷ × 1,51×10⁻⁵) = 2,57×10⁻⁶ mol/dm³.\n\n**5) pH:** −log(2,57×10⁻⁶) = 5,59.",
      "alternativas": [
        "Errada. É o pH de quem supõe dissociação completa do CO2 dissolvido ([H⁺] = 1,51×10⁻⁵ mol/dm³). Como ΔG° = +36,3 kJ/mol, K = 4,4×10⁻⁷ e a dissociação é muito pequena.",
        "Correta. K = 4,37×10⁻⁷, [CO2] = 1,51×10⁻⁵ mol/dm³, [H⁺] = √(K·[CO2]) = 2,57×10⁻⁶ e pH = 5,59.",
        "Errada. É o pKa aparente do equilíbrio (−log 4,37×10⁻⁷). O pH não é igual ao pKa: depende também da concentração [CO2(aq)] = 1,51×10⁻⁵ mol/dm³, e vale ½(pKa + p[CO2]).",
        "Errada. É o pH da água pura; ignora que o CO2 dissolvido forma H⁺ e HCO3⁻ e torna a água ligeiramente ácida.",
        "Errada. Calcula [H⁺] = K·[CO2] sem extrair a raiz quadrada; mas [H⁺] = [HCO3⁻] = x e K = x²/[CO2], então x = √(K·[CO2])."
      ],
      "dica": "Chuva \"limpa\" não é neutra: a água em equilíbrio com o CO2 do ar tem pH em torno de 5,6. Para ácido fraco, [H⁺] = √(K·c)."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 24ª IChO (1992), problema 6",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1250",
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
      "ano": 1993,
      "orgao": "prova teórica (Perugia), problema 4, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 25ª IChO, Perugia, 1993, problema 4. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "A síntese da frontalina (feromônio do besouro-do-pinheiro-ocidental, C8H14O2) parte do malonato de dietila sódico e do 3-cloro-2-metilpropeno, CH2=C(CH3)–CH2Cl. A alquilação dá A; A é hidrolisado com KOH concentrado e descarboxilado em ácido acético quente, dando B, que libera gás com NaHCO3 aquoso e descora KMnO4 aquoso frio. B é reduzido por LiAlH4 a C (C6H12O). C, tratado com cloreto de p-toluenossulfonila em piridina e depois com NaCN em DMSO, dá D (C7H11N). D reage com CH3MgI e, após hidrólise, dá E (C8H14O), que absorve no IV perto de 1700 cm⁻¹. Qual é E?",
    "alternativas": [
      "5-metil-hex-5-en-2-ona, CH3–CO–CH2–CH2–C(CH3)=CH2",
      "7-metil-oct-7-en-2-ona, CH3–CO–(CH2)4–C(CH3)=CH2",
      "6-metil-hept-6-en-2-ol, CH3–CH(OH)–(CH2)3–C(CH3)=CH2",
      "ácido 5-metil-hex-5-enoico, HOOC–CH2–CH2–CH2–C(CH3)=CH2",
      "6-metil-hept-6-en-2-ona, CH3–CO–CH2–CH2–CH2–C(CH3)=CH2"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "A = malonato de dietila alquilado; B = ácido 4-metilpent-4-enoico; C = 4-metilpent-4-en-1-ol; D = 5-metil-hex-5-enonitrila; CH3MgI converte a nitrila em metil-cetona: E = 6-metil-hept-6-en-2-ona (C8H14O).",
      "detalhada": "A resolução segue a solução oficial do problema 4.\n\n**1) A:** o carbânion do malonato desloca Cl⁻ do 3-cloro-2-metilpropeno: (EtOOC)2CH–CH2–C(CH3)=CH2.\n\n**2) B:** KOH hidrolisa os ésteres e o diácido perde CO2 com aquecimento: HOOC–CH2–CH2–C(CH3)=CH2 (ácido 4-metilpent-4-enoico, C6H10O2), que dá CO2 com NaHCO3 e descora KMnO4 (C=C).\n\n**3) C:** LiAlH4 reduz o ácido a álcool: HOCH2–CH2–CH2–C(CH3)=CH2 (C6H12O).\n\n**4) D:** o tosilato é deslocado por CN⁻: NC–CH2–CH2–CH2–C(CH3)=CH2 (C7H11N).\n\n**5) E:** CH3MgI ataca o carbono da nitrila e, após hidrólise da imina, fica a cetona: CH3–CO–CH2–CH2–CH2–C(CH3)=CH2 (C8H14O, C=O em 1700 cm⁻¹).\n\n**6) Fecho:** a epoxidação da C=C terminal dá F (C8H14O2) e o ácido diluído fecha o acetal bicíclico, a frontalina.",
      "alternativas": [
        "Errada. Tem 7 carbonos (C7H12O): falta o carbono do CH3MgI, que entra na cetona. E deve ser C8H14O: 6 carbonos de C + 1 da nitrila + 1 do CH3 do Grignard.",
        "Errada. Tem um carbono a mais (C9H16O). Os carbonos de E são 6 (de C) + 1 (CN) + 1 (CH3 do Grignard) = 8.",
        "Errada. A reação de um nitrila com RMgX leva, após hidrólise, a uma cetona, e não a um álcool. O IV em 1700 cm⁻¹ (C=O) também descarta o álcool.",
        "Errada. É o que resultaria de hidrolisar a nitrila D, e não de tratá-la com CH3MgI. O enunciado dá E = C8H14O, sem segundo oxigênio, e com C=O de cetona (1700 cm⁻¹), e não de ácido.",
        "Correta. A nitrila D + CH3MgI → metil-cetona; E = CH3–CO–(CH2)3–C(CH3)=CH2 (C8H14O, C=O em 1700 cm⁻¹)."
      ],
      "dica": "Nitrila + reagente de Grignard, seguido de hidrólise, dá cetona. Conte os carbonos a cada etapa e confira com as fórmulas moleculares do enunciado."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 25ª IChO (1993), problema 4",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1251",
    "materia": "quimica",
    "assunto": "Radioatividade",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1993,
      "orgao": "prova teórica (Perugia), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 25ª IChO, Perugia, 1993, problema 1. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O iodo-131 é um isótopo radioativo (emissor β⁻) usado em medicina nuclear para diagnosticar distúrbios da tireoide por cintilografia. Sua constante de decaimento é k = 9,93×10⁻⁷ s⁻¹. Quantos dias são necessários para que a atividade de uma amostra de ¹³¹I caia a 30% do valor inicial?",
    "alternativas": [
      "4,2 dias",
      "6,1 dias",
      "8,1 dias",
      "14,0 dias",
      "16,2 dias"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "ln(100/30) = k·t ⇒ t = 1,204/(9,93×10⁻⁷ s⁻¹) = 1,21×10⁶ s ≈ 14,0 dias.",
      "detalhada": "A resolução segue a solução oficial do problema 1 (item 1.3).\n\n**1) Lei do decaimento (1ª ordem):** ln(A0/A) = k·t.\n\n**2) Substituição:** A0/A = 100/30, então ln(100/30) = 1,204. Logo t = 1,204 / (9,93×10⁻⁷ s⁻¹) = 1,21×10⁶ s.\n\n**3) Conversão:** 1,21×10⁶ s ÷ 86 400 s/dia ≈ 14,0 dias.\n\n**4) Conferência:** a meia-vida é ln 2/k = 8,08 dias; 30% fica entre 1 meia-vida (50%) e 2 meias-vidas (25%), o que combina com 14 dias.",
      "alternativas": [
        "Errada. Interpreta \"30% da atividade\" como se 30% restassem apenas depois de decair 70% e calcula ln(1/0,70)/k. A atividade restante é 30% (A/A0 = 0,30), e o tempo é ln(1/0,30)/k.",
        "Errada. Usa o logaritmo decimal no lugar do natural: t = log10(100/30)/k. A lei exponencial A = A0·e^(−kt) pede o logaritmo natural.",
        "Errada. É a meia-vida (ln 2/k = 8,08 d), tempo para cair a 50%, e não a 30%.",
        "Correta. t = ln(100/30)/k = 1,21×10⁶ s ≈ 14,0 dias.",
        "Errada. Duas meias-vidas levam a 25%, e não a 30%. Como 30% é maior que 25%, o tempo é um pouco menor que 16,2 d."
      ],
      "dica": "Decaimento radioativo é de 1ª ordem: use ln(A0/A) = k·t e converta segundos em dias no final."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 25ª IChO (1993), problema 1",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1252",
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
      "ano": 1994,
      "orgao": "prova teórica (Oslo), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 26ª IChO, Oslo, 1994, problema 1. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O ácido láctico (HL) é monoprótico, com constante de dissociação ácida KHL = 1,4×10⁻⁴. Resolvendo a equação do segundo grau, sem aproximações, qual é o pH de uma solução aquosa de ácido láctico 3,00×10⁻³ mol/dm³?",
    "alternativas": [
      "3,24",
      "2,52",
      "3,19",
      "3,85",
      "7,00"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "x²/(3,00×10⁻³ − x) = 1,4×10⁻⁴ dá x = [H₃O⁺] = 5,8×10⁻⁴ mol/dm³ e pH = 3,24.",
      "detalhada": "A resolução segue a solução oficial do problema 1 (item 1.1), que resolve a equação do segundo grau.\n\n**1) Equilíbrio:** HL + H2O ⇌ H3O⁺ + L⁻, com KHL = x²/(c0 − x) e c0 = 3,00×10⁻³ mol/dm³.\n\n**2) Teste da aproximação:** com x ≈ √(KHL·c0) = 6,5×10⁻⁴ mol/dm³ obtém-se x/c0 ≈ 22%, bem acima dos 5% aceitáveis; a aproximação não vale.\n\n**3) Equação do 2º grau:** x² + 1,4×10⁻⁴·x − 4,2×10⁻⁷ = 0 ⇒ x = [−1,4×10⁻⁴ + √(1,96×10⁻⁸ + 1,68×10⁻⁶)]/2 = 5,8×10⁻⁴ mol/dm³.\n\n**4) pH:** −log(5,8×10⁻⁴) = 3,24.",
      "alternativas": [
        "Correta. A equação do 2º grau dá [H₃O⁺] = 5,8×10⁻⁴ mol/dm³ e pH = 3,24.",
        "Errada. Trata o ácido láctico como ácido forte (pH = −log 3,00×10⁻³). Mas KHL = 1,4×10⁻⁴ é pequena: só cerca de 19% das moléculas se ionizam.",
        "Errada. Usa a aproximação [HL] ≈ c0, de que x = √(KHL·c0) = 6,5×10⁻⁴ mol/dm³. Como x chega a 20% de c0, a aproximação não vale e é preciso resolver x²/(c0 − x) = KHL.",
        "Errada. É o pKa do ácido láctico (−log 1,4×10⁻⁴). O pH só seria igual ao pKa se [HL] = [L⁻], o que não ocorre em solução do ácido puro.",
        "Errada. É o pH da água pura; ignora a ionização do ácido."
      ],
      "dica": "Antes de usar √(K·c), verifique se x é menor que 5% de c; se não for, resolva o 2º grau."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 26ª IChO (1994), problema 1",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1253",
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
      "ano": 1994,
      "orgao": "prova teórica (Oslo), problema 2, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 26ª IChO, Oslo, 1994, problema 2. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O método de Kjeldahl determina o nitrogênio de uma amostra orgânica: o N é convertido em NH4⁺ com H2SO4 a quente, o NH3 liberado por NaOH é destilado sobre HCl de concentração conhecida e o excesso de HCl é titulado com NaOH. Para determinar a massa molar de um aminoácido natural puro, 0,2345 g dele foram digeridos e o NH3 foi recolhido em 50,00 cm³ de HCl 0,1010 mol/dm³; o excesso de ácido gastou 17,50 cm³ de NaOH 0,1050 mol/dm³ na titulação. Supondo que a molécula tem 2 átomos de nitrogênio (como a lisina), qual é a massa molar do aminoácido?",
    "alternativas": [
      "73 g/mol",
      "219 g/mol",
      "146 g/mol",
      "292 g/mol",
      "93 g/mol"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "n(NH3) = 50,00 × 0,1010 − 17,50 × 0,1050 = 3,21 mmol de N; com 2 N por molécula, n(aminoácido) = 1,61 mmol e M = 0,2345/1,61×10⁻³ ≈ 146 g/mol.",
      "detalhada": "A resolução segue a solução oficial do problema 2 (item 2.5), que obtém 73,01 g/mol (1 N) e 146,02 g/mol (2 N).\n\n**1) HCl consumido pelo NH3:** n = 50,00 cm³ × 0,1010 mol/dm³ − 17,50 cm³ × 0,1050 mol/dm³ = 5,050 − 1,8375 = 3,2125 mmol. Cada NH3 neutraliza 1 H⁺, então n(N) = 3,2125 mmol.\n\n**2) Teor de N:** 3,2125 mmol × 14,01 mg/mmol = 45,0 mg em 234,5 mg, isto é, 19,2% de N.\n\n**3) Massa molar com 2 N por molécula:** n(aminoácido) = 3,2125/2 = 1,606 mmol, logo M = 0,2345 g / 1,606×10⁻³ mol ≈ 146 g/mol (a lisina, C6H14N2O2, tem 146,2 g/mol).",
      "alternativas": [
        "Errada. Corresponde à hipótese de um só nitrogênio por molécula (M = 0,2345 g / 3,21×10⁻³ mol = 73 g/mol). Com 2 átomos de N por molécula, há metade dos mols de molécula.",
        "Errada. Seria o valor com 3 átomos de N por molécula; o enunciado pede a hipótese de 2.",
        "Correta. 3,21 mmol de N, 2 N por molécula: n = 1,61 mmol e M = 0,2345 g / 1,61×10⁻³ mol ≈ 146 g/mol.",
        "Errada. Multiplica por 4 a massa molar de 1 N, o que corresponderia a 4 átomos de N por molécula.",
        "Errada. Esquece de descontar o excesso de HCl titulado: usa os 5,05 mmol de HCl totais como se fossem todo o NH3 (2 × 0,2345 g / 5,05×10⁻³ mol)."
      ],
      "dica": "Titulação por retorno: n(analito) = n(ácido adicionado) − n(ácido em excesso, titulado). Depois divida pelo número de N por molécula."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 26ª IChO (1994), problema 2",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1254",
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
      "ano": 1994,
      "orgao": "prova teórica (Oslo), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 26ª IChO, Oslo, 1994, problema 5. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Qual é o nome sistemático (IUPAC) do composto (CH3)2CH–CH(CH2CH3)(CH2CH2CH3)?",
    "alternativas": [
      "3-isopropil-hexano",
      "2-metil-3-propilpentano",
      "etil isopropil propil metano",
      "3-hexilpropano",
      "3-etil-2-metil-hexano"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "Cadeia principal de 6 carbonos (hexano) com mais substituintes: CH3–CH(CH3)–CH(CH2CH3)–CH2–CH2–CH3; numerando pelo lado da metila, ficam metila em C2 e etila em C3: 3-etil-2-metil-hexano.",
      "detalhada": "A resolução segue a solução oficial do problema 5 (item 5.1), que escolhe 3-etil-2-metil-hexano.\n\n**1) Fórmula:** o composto é C9H20 (isopropila 3 C + CH 1 C + etila 2 C + propila 3 C).\n\n**2) Cadeia principal:** há duas cadeias de seis carbonos (uma passando por um CH3 do isopropil, outra passando pelo etil). A com mais substituintes é a que tem metila e etila (duas ramificações), em vez de uma única isopropila.\n\n**3) Numeração:** CH3(1)–CH(CH3)(2)–CH(CH2CH3)(3)–CH2(4)–CH2(5)–CH3(6): metila em C2 e etila em C3, em ordem alfabética: 3-etil-2-metil-hexano.",
      "alternativas": [
        "Errada. A cadeia de seis carbonos desse nome tem só um substituinte (isopropila). Há outra cadeia de seis carbonos, a que passa pelo CH do isopropil, com dois substituintes (metila e etila). Entre cadeias de mesmo comprimento, escolhe-se a que tem mais substituintes: 3-etil-2-metil-hexano.",
        "Errada. Descreve o mesmo composto, mas com uma cadeia principal de cinco carbonos; a regra exige a cadeia mais longa (seis carbonos).",
        "Errada. É um nome do tipo \"radicais ligados a um carbono central\", não o nome sistemático (substitutivo) da IUPAC, que usa cadeia principal mais prefixos.",
        "Errada. Não é nome válido: o propano só tem três carbonos (C1 a C3), e a cadeia principal deve ser a mais longa, nunca a menor com um substituinte maior.",
        "Correta. Cadeia principal de hexano com mais substituintes (metila em C2, etila em C3): 3-etil-2-metil-hexano."
      ],
      "dica": "Primeiro ache a cadeia contínua mais longa; se houver empate, escolha a com mais substituintes; depois numere pelo lado que dá o menor localizador."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 26ª IChO (1994), problema 5",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1255",
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
      "ano": 1995,
      "orgao": "prova teórica (Pequim), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 27ª IChO, Pequim, 1995, problema 1. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Em um experimento de simulação, a constante de velocidade da reação 2 CuCl(s) + ½ O2(g) + 2 H2O(l) → Cu2(OH)3Cl(s) + H⁺(aq) + Cl⁻(aq) (formação de produto de corrosão do bronze) foi medida em duas temperaturas: kc = 1,29×10⁻⁴ mol dm⁻³ s⁻¹ a 25 °C e kc = 2,50×10⁻⁴ mol dm⁻³ s⁻¹ a 40 °C. Qual é a energia de ativação, supondo a equação de Arrhenius? (R = 8,314 J K⁻¹ mol⁻¹)",
    "alternativas": [
      "0,37 kJ/mol",
      "34,2 kJ/mol",
      "14,9 kJ/mol",
      "100 kJ/mol",
      "−34,2 kJ/mol"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Ea = R·ln(k2/k1)/(1/T1 − 1/T2) = 8,314 × ln(1,938)/(1,607×10⁻⁴ K⁻¹) ≈ 34,2 kJ/mol.",
      "detalhada": "A resolução segue a solução oficial do problema 1 (item 1.2), que obtém Ea = 34,2 kJ/mol.\n\n**1) Equação:** ln(k2/k1) = (Ea/R)·(1/T1 − 1/T2), com T1 = 298,15 K e T2 = 313,15 K.\n\n**2) Termos:** ln(2,50×10⁻⁴/1,29×10⁻⁴) = ln 1,938 = 0,6615; 1/T1 − 1/T2 = 3,3540×10⁻³ − 3,1933×10⁻³ = 1,607×10⁻⁴ K⁻¹.\n\n**3) Resultado:** Ea = 8,314 × 0,6615 / 1,607×10⁻⁴ = 3,42×10⁴ J/mol ≈ 34,2 kJ/mol.",
      "alternativas": [
        "Errada. Usa as temperaturas em °C no lugar de kelvin na diferença 1/T1 − 1/T2. A equação de Arrhenius exige temperatura absoluta.",
        "Correta. Ea = R·ln(k2/k1)/(1/T1 − 1/T2) = 8,314 × 0,6615 / 1,607×10⁻⁴ ≈ 34,2 kJ/mol.",
        "Errada. Usa log10(k2/k1) no lugar de ln(k2/k1). A forma ln k2/k1 = (Ea/R)(1/T1 − 1/T2) pede o logaritmo natural.",
        "Errada. Usa a razão k2/k1 = 1,94 diretamente, sem tirar o logaritmo.",
        "Errada. Inverte a ordem das temperaturas (1/T2 − 1/T1) e obtém Ea negativa. Como k aumenta com a temperatura, Ea é positiva."
      ],
      "dica": "Arrhenius entre duas temperaturas: ln(k2/k1) = (Ea/R)(1/T1 − 1/T2), sempre com T em kelvin e ln (não log10)."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 27ª IChO (1995), problema 1",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1256",
    "materia": "quimica",
    "assunto": "Polímeros",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1995,
      "orgao": "prova teórica (Pequim), problema 4, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 27ª IChO, Pequim, 1995, problema 4. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Os poli[(R)-3-hidroxialcanoatos] (PHA) são poliésteres biodegradáveis sintetizados por bactérias. No poli(3-hidroxibutanoato), PHB, cada unidade repetida tem um carbono quiral. O PHB produzido pelas bactérias contém apenas unidades (R)-3-hidroxibutanoato (cadeia RRRRR...), enquanto um químico pode sintetizar também cadeias com unidades R e S alternadas (RSRSR...). Como são classificadas, respectivamente, a cadeia só com unidades R e a cadeia com R e S alternadas?",
    "alternativas": [
      "Sindiotática e isotática",
      "Isotática e atática",
      "Atática e sindiotática",
      "Isotática e sindiotática",
      "Ambas atáticas, porque são poliésteres"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "Todas as unidades com a mesma configuração (RRRRR) = isotática; alternância regular R/S (RSRSR) = sindiotática; distribuição ao acaso = atática.",
      "detalhada": "A resolução segue a solução oficial do problema 4 (item 4.1), que define: atático, R e S ao acaso; sindiotático, alternando RSRSR; isotático, todos iguais (RRRRR ou SSSSS).\n\n**1) Bactérias:** a polimerase da bactéria monta cadeias com estereoespecificidade, só com (R)-3-hidroxibutanoato: cadeia RRRRR, isotática.\n\n**2) Alternância:** a cadeia RSRSR tem sucessão regular de configurações opostas, por isso sindiotática.\n\n**3) Aleatório:** cadeias como RSRRS, SRSSR são atáticas, comuns quando o químico polimeriza uma mistura racêmica sem catalisador estereoespecífico.",
      "alternativas": [
        "Errada. Inverte as classificações. Na isotática todos os centros quirais têm a mesma configuração (RRRRR ou SSSSS); na sindiotática eles se alternam (RSRSR).",
        "Errada. A cadeia RSRSR tem alternância regular, característica de sindiotática. Atática é a cadeia com R e S distribuídos ao acaso.",
        "Errada. A cadeia RRRRR é perfeitamente regular, com todas as unidades iguais: isotática. Atática é a que não tem ordem estereoquímica.",
        "Correta. RRRRR: todos os centros iguais, isotática; RSRSR: alternância regular, sindiotática.",
        "Errada. A taticidade depende da configuração dos centros quirais ao longo da cadeia, e não do tipo de polímero. As duas cadeias são regulares (uma isotática, outra sindiotática)."
      ],
      "dica": "Taticidade = ordem relativa dos centros quirais ao longo da cadeia: iguais (iso), alternados (sindio), ao acaso (a)."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 27ª IChO (1995), problema 4",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1257",
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
      "ano": 1996,
      "orgao": "prova teórica (Moscou), problema 6, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 28ª IChO, Moscou, 1996, problema 6. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Dois hidrocarbonetos isômeros A e B, de fórmula geral CnH2n (85,7% de C em massa), dão com ozônio e depois Zn/H⁺ um único produto orgânico C, de cinco carbonos. A oxidação de C dá um único ácido carboxílico D, cujos hidrogênios, exceto o do grupo –COOH, estão todos em grupos metila. Com KMnO4 frio e neutro (adição sin de dois grupos OH à C=C), A forma um único composto F, enquanto B forma uma mistura 1 : 1 de dois compostos, G1 e G2 (enantiômeros). Quais são as estruturas e a estereoquímica de A e B?",
    "alternativas": [
      "A = (E)-2,2,5,5-tetrametil-hex-3-eno (trans); B = (Z)-2,2,5,5-tetrametil-hex-3-eno (cis)",
      "A = (Z)-2,2,5,5-tetrametil-hex-3-eno; B = 1,1-di-terc-butileteno",
      "A = (Z)-2,2,5,5-tetrametil-hex-3-eno (cis); B = (E)-2,2,5,5-tetrametil-hex-3-eno (trans)",
      "A = 1,1-di-terc-butileteno; B = (E)-2,2,5,5-tetrametil-hex-3-eno",
      "A e B são o mesmo composto, o (E)-2,2,5,5-tetrametil-hex-3-eno, em conformações diferentes"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "A hidroxilação sin do (Z)-alceno dá o diol meso (um só composto, F); a do (E)-alceno dá o par racêmico (G1 + G2). Logo A = cis e B = trans.",
      "detalhada": "A resolução segue a solução oficial do problema 6 (item 6.4 e 6.5).\n\n**1) Esqueleto:** CnH2n com 85,7% de C; a ozonólise dá só (CH3)3C–CHO, de modo que o alceno é (CH3)3C–CH=CH–C(CH3)3 (C10H20), em duas formas estereoisoméricas.\n\n**2) Adição sin:** KMnO4 frio e neutro adiciona os dois OH ao mesmo lado da dupla. No isômero cis (Z) os grupos t-Bu estão do mesmo lado, e a adição sin dá o diol (R,S), um composto meso: única substância (F).\n\n**3) Isômero trans:** a adição sin ao trans dá (R,R) e (S,S) em partes iguais (racêmico): G1 e G2.\n\n**4) Reatividade:** o cis é muito tensionado (os dois grupos t-Bu ficam juntos) e mais reativo, de acordo com o enunciado original em que A reage mais que B.",
      "alternativas": [
        "Errada. Inverte as atribuições. A adição sin de OH ao trans dá o par de enantiômeros (R,R)/(S,S), e ao cis dá o composto meso (R,S), único.",
        "Errada. O 1,1-di-terc-butileteno, (CH3)3C–C(=CH2)–C(CH3)3, é C10H20, mas a ozonólise dá di-terc-butil-cetona e metanal, e não um único produto C (o enunciado diz que A e B dão o mesmo produto C).",
        "Correta. A = cis → hidroxilação sin dá diol meso (F, único); B = trans → mistura racêmica de enantiômeros (G1 + G2).",
        "Errada. A ozonólise do 1,1-di-terc-butileteno não dá só pivalaldeído (dá di-terc-butil-cetona e metanal), e a hidroxilação dele não dá o diol meso único atribuído a A.",
        "Errada. Conformações interconvertem-se por rotação; já (E) e (Z) só se interconvertem rompendo a ligação π. Eles são isômeros distintos, com produtos de hidroxilação diferentes."
      ],
      "dica": "Adição sin a um alceno cis dá meso (se os dois carbonos têm os mesmos substituintes); a um trans dá o par racêmico."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 28ª IChO (1996), problema 6",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1258",
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
      "ano": 1996,
      "orgao": "prova teórica (Moscou), problema 6, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 28ª IChO, Moscou, 1996, problema 6. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O ácido D, (CH3)3C–COOH (ácido 2,2-dimetilpropanoico), tem massa molar 102 g/mol e funde a cerca de 35 °C. Mede-se a densidade do vapor de D a uma temperatura elevada e corrige-se o resultado para as condições normais (0 °C, 1 atm): obtém-se 9,1 g/dm³. Que conclusão sobre D em fase vapor essa densidade permite? (volume molar do gás ideal nas condições normais: 22,4 dm³/mol)",
    "alternativas": [
      "A massa molar aparente é cerca de 204 g/mol, o dobro da de D: o ácido existe como dímero, unido por duas ligações de hidrogênio.",
      "A massa molar aparente é cerca de 102 g/mol: o vapor é formado por moléculas isoladas de D.",
      "A massa molar aparente é cerca de 306 g/mol: o ácido forma trímeros.",
      "O ácido se decompõe em fase vapor, formando fragmentos mais leves.",
      "O vapor contém também moléculas de água adsorvidas, que aumentam a densidade."
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "M(aparente) = 9,1 × 22,4 = 204 g/mol ≈ 2 × 102: em fase vapor os ácidos carboxílicos associam-se em dímeros cíclicos por duas ligações de hidrogênio O–H···O.",
      "detalhada": "A resolução segue a solução oficial do problema 6 (item 6.2).\n\n**1) Massa molar aparente:** M = ρ × Vm = 9,1 g/dm³ × 22,4 dm³/mol = 204 g/mol.\n\n**2) Comparação:** a massa molar de (CH3)3C–COOH (C5H10O2) é 102 g/mol, e 204 = 2 × 102.\n\n**3) Interpretação:** em fase vapor (e em solventes apolares) os ácidos carboxílicos formam dímeros cíclicos, com duas ligações de hidrogênio entre o C=O de uma molécula e o O–H da outra. Em água, ao contrário, o ácido forma ligações de hidrogênio com a água e aparece como monômero (CH3)3C–COOH.",
      "alternativas": [
        "Correta. 9,1 × 22,4 = 204 g/mol = 2 × 102: dímero cíclico por pontes de hidrogênio.",
        "Errada. 9,1 g/dm³ × 22,4 dm³/mol = 204 g/mol, e não 102 g/mol. Para moléculas isoladas, a densidade seria 102/22,4 = 4,6 g/dm³.",
        "Errada. A massa aparente, 204 g/mol, é duas vezes (e não três) a massa molar de D.",
        "Errada. A decomposição reduziria a massa molar média (densidade menor que 4,6 g/dm³). O valor observado é maior, indicando associação, e não fragmentação.",
        "Errada. A água (18 g/mol) reduziria a massa molar média, em vez de aumentá-la ao dobro, e não há água na amostra de D puro."
      ],
      "dica": "Calcule a massa molar aparente com M = ρ·Vm. Se for um múltiplo inteiro da fórmula, há associação molecular."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 28ª IChO (1996), problema 6",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1259",
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
      "ano": 1996,
      "orgao": "prova teórica (Moscou), problema 3, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 28ª IChO, Moscou, 1996, problema 3. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Em 1908 Rutherford e Geiger mediram que 1,00 g de rádio-226 emite x = 3,42×10¹⁰ partículas α por segundo. Em 1911 Rutherford e Boltwood deixaram 192 mg de Ra purificado por 83,0 dias e coletaram 6,58 mm³ de He (corrigido para 0 °C e 1 atm). Como primeira aproximação, suponha que todos os descendentes de meia-vida curta do rádio decaiam imediatamente até o RaD (meia-vida de 27,1 anos), que não decai no período: cada átomo de Ra que decai produz então 4 átomos de He (4 emissões α). Use o volume molar de 22,4 dm³/mol para o gás nessas condições. Que valor se obtém para o número de Avogadro?",
    "alternativas": [
      "1,6×10²³ mol⁻¹",
      "3,2×10²³ mol⁻¹",
      "8,0×10²³ mol⁻¹",
      "6,4×10²⁰ mol⁻¹",
      "6,4×10²³ mol⁻¹"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "N(He) = 4·x·m·t = 4 × 3,42×10¹⁰ × 0,192 × (83 × 86 400) = 1,88×10¹⁷; n(He) = 6,58×10⁻⁶ dm³/22,4 dm³/mol = 2,94×10⁻⁷ mol; NA = 1,88×10¹⁷/2,94×10⁻⁷ ≈ 6,4×10²³ mol⁻¹.",
      "detalhada": "A resolução segue a solução oficial do problema 3 (item 3.3), que obtém 6,4×10²³ mol⁻¹ como primeira estimativa.\n\n**1) Átomos de He formados:** cada Ra decaído leva a 4 He (decaimentos α: Ra → Rn → RaA → RaB, depois β⁻, β⁻ e, por fim, α em RaC′ → RaD). N(He) = 4·x·m·t com m em gramas: 4 × 3,42×10¹⁰ s⁻¹ g⁻¹ × 0,192 g × 7,17×10⁶ s = 1,88×10¹⁷.\n\n**2) Mols de He:** 6,58 mm³ = 6,58×10⁻⁶ dm³; n = 6,58×10⁻⁶/22,4 = 2,94×10⁻⁷ mol.\n\n**3) Avogadro:** NA = N(He)/n(He) = 1,88×10¹⁷/2,94×10⁻⁷ = 6,4×10²³ mol⁻¹. A solução oficial refina o resultado considerando a meia-vida do radônio (3,83 d) e chega a 6,09×10²³.",
      "alternativas": [
        "Errada. Considera 1 átomo de He por átomo de Ra decaído (só a emissão α do próprio Ra), esquecendo as três emissões α dos descendentes. O resultado sai quatro vezes menor.",
        "Errada. Supõe 2 átomos de He por átomo de Ra. A cadeia até o RaD tem 4 decaimentos α (Ra, Rn, RaA e RaC′).",
        "Errada. Conta 5 átomos de He por átomo de Ra decaído. Até o RaD são apenas 4 emissões α (as demais etapas, RaB → RaC e RaC → RaC′, são β⁻).",
        "Errada. Converte 6,58 mm³ como se fossem 6,58×10⁻³ dm³ (em vez de 6,58×10⁻⁶ dm³), o que subestima os mols de He mil vezes.",
        "Correta. N(He) = 4·x·m·t = 1,88×10¹⁷, n(He) = 2,94×10⁻⁷ mol e NA ≈ 6,4×10²³ mol⁻¹."
      ],
      "dica": "Conte quantas partículas α a cadeia emite até o ponto em que o decaimento para; depois NA = N(átomos)/n(mols)."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 28ª IChO (1996), problema 3",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1260",
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
      "ano": 1997,
      "orgao": "prova teórica (Montreal), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 29ª IChO, Montreal, 1997, problema 1. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O composto X é um trissacarídeo encontrado no farelo de semente de algodão; ele não reage com os reagentes de Benedict e Fehling nem sofre mutarrotação. Sua hidrólise ácida dá três D-hexoses diferentes, A, B e C. O composto C reage com ácido nítrico e dá um ácido dicarboxílico (ácido aldárico) opticamente inativo. Na síntese de Kiliani-Fischer a partir do D-gliceraldeído, a aldotetrose que leva a C não forma composto meso quando oxidada por ácido nítrico. Qual é C?",
    "alternativas": [
      "D-glicose",
      "D-galactose",
      "D-manose",
      "D-alose",
      "D-frutose"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Entre as D-aldo-hexoses, só D-alose e D-galactose dão ácido aldárico meso (inativo); a pista da aldotetrose (D-treose, que não dá meso) descarta a alose, logo C = D-galactose (o ácido múcico).",
      "detalhada": "A resolução segue a solução oficial do problema 1 (o trissacarídeo é a rafinose: galactose, glicose e frutose).\n\n**1) Ácido aldárico inativo:** a oxidação com HNO3 transforma CHO e CH2OH em dois COOH. Só duas D-aldo-hexoses dão ácido aldárico meso (inativo): D-alose (ácido alárico) e D-galactose (ácido múcico/galactárico).\n\n**2) Pista de Kiliani-Fischer:** a D-alose provém da D-eritrose (tetrose que dá ácido meso-tartárico com HNO3). O enunciado afirma que a tetrose precursora de C não dá meso, ou seja, é a D-treose, que leva a D-galactose (e D-talose).\n\n**3) Conclusão:** C = D-galactose. As outras hexoses: A = D-glicose (aldárico ativo, 5 HCOOH + 1 HCHO com HIO4) e B = D-frutose (cetose, 3 HCOOH + 2 HCHO + CO2 com HIO4).",
      "alternativas": [
        "Errada. O ácido aldárico da D-glicose (ácido D-glucárico) é opticamente ativo. A glicose também é a hexose A do problema, que dá aldárico ativo.",
        "Correta. D-galactose dá ácido múcico (meso, inativo) e deriva da D-treose na síntese de Kiliani-Fischer.",
        "Errada. O ácido D-manárico é opticamente ativo, e não meso. Portanto D-manose não satisfaz a pista da inatividade óptica.",
        "Errada. A D-alose também dá aldárico meso (ácido alárico), mas vem da D-eritrose na síntese de Kiliani-Fischer, e a eritrose dá composto meso com HNO3. A pista do enunciado (aldotetrose que não dá meso) exclui a alose.",
        "Errada. É uma cetose (não aldose): a oxidação com HNO3 quebra a molécula e não dá ácido aldárico de seis carbonos. A frutose é, na verdade, a hexose B do problema."
      ],
      "dica": "Ácido aldárico meso exige simetria da cadeia carbônica; lembre as hexoses que a têm (alose e galactose) e use a pista da tetrose para decidir."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 29ª IChO (1997), problema 1",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1261",
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
      "ano": 1997,
      "orgao": "prova teórica (Montreal), problema 8, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 29ª IChO, Montreal, 1997, problema 8. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Em uma eletrólise com eletrodos de platina, o eletrólito (100,0 cm³) contém H2SO4 e CuSO4, com c(H⁺) = 1,000 mol/dm³ e c(Cu²⁺) = 1,000×10⁻² mol/dm³. A carga total que passou foi 2,0000 C. No cátodo, ocorrem simultaneamente a deposição de cobre (Cu²⁺ + 2 e⁻ → Cu) e a produção de H2 (2 H⁺ + 2 e⁻ → H2); no ânodo forma-se O2. O H2 foi coletado a 273,15 K e 1,01325×10⁴ Pa, com volume de 2,0000 cm³ (gás ideal). Qual é a quantidade de cobre depositada? (F = 96 485 C/mol; R = 8,3145 J K⁻¹ mol⁻¹)",
    "alternativas": [
      "1,441×10⁻⁶ mol",
      "1,036×10⁻⁵ mol",
      "2,883×10⁻⁶ mol",
      "8,923×10⁻⁶ mol",
      "7,207×10⁻⁷ mol"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "n(H2) = pV/RT = 8,923×10⁻⁶ mol gasta Q(H2) = 2F·n = 1,7219 C; sobram 0,2781 C para o cobre: n(Cu) = 0,2781/(2 × 96 485) = 1,441×10⁻⁶ mol.",
      "detalhada": "A resolução segue a solução oficial do problema 8 (item 8.2).\n\n**1) Mols de H2:** n = pV/RT = 10 132,5 Pa × 2,0000×10⁻⁶ m³ / (8,3145 × 273,15) = 8,923×10⁻⁶ mol.\n\n**2) Carga gasta no H2:** cada H2 exige 2 elétrons: Q(H2) = 2 × 8,923×10⁻⁶ × 96 485 = 1,722 C.\n\n**3) Carga restante, do cobre:** Q(Cu) = 2,0000 − 1,7219 = 0,2781 C.\n\n**4) Mols de Cu:** n(Cu) = Q(Cu)/(2F) = 0,2781/(2 × 96 485) = 1,441×10⁻⁶ mol.",
      "alternativas": [
        "Correta. Q(H2) = 1,7219 C, Q(Cu) = 0,2781 C e n(Cu) = 0,2781/(2F) = 1,441×10⁻⁶ mol.",
        "Errada. Atribui toda a carga (2,0000 C) ao cobre: n = Q/(2F). Parte da carga foi usada na produção de H2 (1,72 C), e só 0,278 C depositou cobre.",
        "Errada. Divide a carga do cobre por F em vez de 2F. Cada Cu²⁺ recebe 2 elétrons, então n(Cu) = Q/(2F).",
        "Errada. É a quantidade de H2 (pV/RT), e não a de cobre.",
        "Errada. Divide por 4F (como se fossem 4 elétrons por Cu, a estequiometria do O2 no ânodo). No cátodo, Cu²⁺ + 2 e⁻ → Cu usa 2 elétrons."
      ],
      "dica": "Em eletrólise com dois processos no mesmo eletrodo, a carga total se divide: ache a de um pelos mols do gás e subtraia."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 29ª IChO (1997), problema 8",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1262",
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
      "ano": 1998,
      "orgao": "prova teórica (Melbourne), problema 2, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 30ª IChO, Melbourne, 1998, problema 2. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Em 1995, um testemunho de sedimentos do fundo de um lago foi cortado em fatias de 1 cm. O pólen de carvalho e de olmo europeus aparece pela primeira vez a 50 cm de profundidade, onde a atividade de ²¹⁰Pb (meia-vida de 22,0 anos) é de 1,40 Bq/kg, contra 356 Bq/kg no topo do testemunho. Considerando que o chumbo-210 depositado simultaneamente com o pólen decai com o tempo, em que ano, aproximadamente, foram plantadas as árvores? (Considere a precisão dos dados: a resposta vem com incerteza de ±2 anos.)",
    "alternativas": [
      "1797",
      "1841",
      "1819",
      "1873",
      "1945"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "A/A0 = 1,40/356 = 1/254 ≈ 2⁻⁸: 8 meias-vidas × 22,0 anos = 176 anos antes de 1995, isto é, 1819.",
      "detalhada": "A resolução segue a solução oficial do problema 2 (item 2.1), que obtém 1819 (±2).\n\n**1) Razão de atividades:** 356 / 1,40 = 254, quase 2⁸ = 256.\n\n**2) Número de meias-vidas:** n = log₂(254) ≈ 7,99 ≈ 8.\n\n**3) Tempo:** t = 8 × 22,0 anos = 176 anos.\n\n**4) Ano:** 1995 − 176 = 1819 (o sedimento a 50 cm foi depositado há 176 anos, quando as árvores florescem pela primeira vez).",
      "alternativas": [
        "Errada. Conta 9 meias-vidas (198 anos). A razão 356/1,40 ≈ 254 está muito próxima de 2⁸ = 256, ou seja, 8 meias-vidas.",
        "Errada. Conta 7 meias-vidas (154 anos), correspondendo a razão 2⁷ = 128. A razão observada é 254, perto de 256 = 2⁸.",
        "Correta. 356/1,40 ≈ 2⁸: 8 meias-vidas = 176 anos, e 1995 − 176 = 1819.",
        "Errada. Usa ln(356/1,40) = 5,54 como se fosse o número de meias-vidas, o que dá 122 anos. O número de meias-vidas é log₂ da razão, e não o logaritmo natural.",
        "Errada. Ignora o decaimento e subtrai 50 anos da data de 1995, confundindo a profundidade de 50 cm com 50 anos (1995 − 50 = 1945). A razão de atividades dá o tempo, e não a profundidade."
      ],
      "dica": "Número de meias-vidas = log₂(A0/A). Subtraia o tempo da data da amostragem para obter a data do evento."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 30ª IChO (1998), problema 2",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1263",
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
      "ano": 1998,
      "orgao": "prova teórica (Melbourne), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 30ª IChO, Melbourne, 1998, problema 5. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O ouro é extraído de rochas com solução aerada de cianeto de sódio, formando o complexo [Au(CN)2]⁻ (Au⁺ + 2 CN⁻ ⇌ [Au(CN)2]⁻, Kf = 4×10²⁸). Qual deve ser a concentração de CN⁻ livre para manter 99 mol% do ouro em solução na forma do complexo?",
    "alternativas": [
      "2,5×10⁻²⁷ mol/dm³",
      "5×10⁻¹⁶ mol/dm³",
      "5×10⁻¹⁵ mol/dm³",
      "5×10⁻¹⁴ mol/dm³",
      "1,6×10⁻¹³ mol/dm³"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "Com 99% como complexo, [Au⁺] = [complexo]/99; Kf = [complexo]/([Au⁺][CN⁻]²) = 99/[CN⁻]² = 4×10²⁸ dá [CN⁻] = √(99/4×10²⁸) ≈ 5×10⁻¹⁴ mol/dm³.",
      "detalhada": "A resolução segue a solução oficial do problema 5 (item 5.3).\n\n**1) Condição:** 99 mol% do ouro como [Au(CN)2]⁻ e 1 mol% como Au⁺ livre: [Au⁺] = [Au(CN)2⁻]/99.\n\n**2) Constante:** Kf = [Au(CN)2⁻]/([Au⁺][CN⁻]²) = 99/[CN⁻]².\n\n**3) Resolvendo:** [CN⁻]² = 99/(4×10²⁸) = 2,5×10⁻²⁷ ⇒ [CN⁻] = 4,97×10⁻¹⁴ ≈ 5×10⁻¹⁴ mol/dm³.\n\n**4) Leitura:** a quantidade de CN⁻ livre necessária é minúscula porque o complexo é extraordinariamente estável.",
      "alternativas": [
        "Errada. Esquece a raiz quadrada: usa [CN⁻] = 99/Kf, sendo que a constante tem [CN⁻]² no denominador.",
        "Errada. Inverte a razão: trata [Au⁺]/[complexo] = 99 (em vez de 1/99), o que dá [CN⁻]² = 1/(99·Kf).",
        "Errada. Usa a razão [complexo]/[Au⁺] = 99/100 = 0,99 (a fração) em vez de 99. Tem de ser 99 mol% em forma de complexo para 1 mol% livre: razão 99 : 1.",
        "Correta. [Au⁺] = [complexo]/99, Kf = 99/[CN⁻]² = 4×10²⁸ e [CN⁻] = 5×10⁻¹⁴ mol/dm³.",
        "Errada. Corresponde a manter 99,9 mol% (razão 999 : 1) e não 99 mol% como pede o enunciado."
      ],
      "dica": "Traduza \"x% como complexo\" na razão [complexo]/[íon livre] e substitua na expressão de Kf, lembrando do expoente do ligante."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 30ª IChO (1998), problema 5",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1264",
    "materia": "quimica",
    "assunto": "Termoquímica",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 1999,
      "orgao": "prova teórica (Bangcoc), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 31ª IChO, Bangcoc, 1999, problema 1. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Uma amostra de 0,6000 g de um composto sólido Q (C, H e O; M = 122,0 g/mol) foi queimada em excesso de O2 em um calorímetro de bomba contendo 710,0 g de água a 25,000 °C. Ao final, a temperatura era 27,250 °C. A variação de energia interna padrão de combustão de Q é ΔU° = −3079 kJ/mol. Dado o calor específico da água, 4,184 J g⁻¹ K⁻¹, qual é a capacidade calorífica do calorímetro, sem contar a água?",
    "alternativas": [
      "6 730 J/K",
      "3 759 J/K",
      "2 971 J/K",
      "9 701 J/K",
      "7 519 J/K"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "q = (0,6000/122,0) × 3079 = 15,14 kJ; C(total) = 15,14/2,250 = 6,730 kJ/K; descontando a água (2,971 kJ/K) sobram 3,759 kJ/K para o calorímetro.",
      "detalhada": "A resolução segue a solução oficial do problema 1 (item 1.2), que obtém 3 759 J/K.\n\n**1) Calor liberado:** n(Q) = 0,6000 g / 122,0 g/mol = 4,918×10⁻³ mol; q = 4,918×10⁻³ × 3079 kJ/mol = 15,14 kJ (queima a volume constante: q = ΔU).\n\n**2) Capacidade calorífica total:** C = q/ΔT = 15,14 kJ / 2,250 K = 6,730 kJ/K.\n\n**3) Parte da água:** 710,0 g × 4,184 J g⁻¹ K⁻¹ = 2 971 J/K.\n\n**4) Calorímetro:** 6 730 − 2 971 ≈ 3 759 J/K.\n\n(No problema original, as massas de CO2 e H2O liberadas identificam Q como C7H6O2, o ácido benzoico.)",
      "alternativas": [
        "Errada. É a capacidade calorífica total (calorímetro + água): q/ΔT = 15,14 kJ / 2,250 K. Falta subtrair a parte da água (710,0 g × 4,184 = 2 971 J/K).",
        "Correta. C(total) = 15,14 kJ/2,250 K = 6 730 J/K; menos a água (2 971 J/K) dá 3 759 J/K.",
        "Errada. É apenas a capacidade calorífica da água (710,0 g × 4,184 J g⁻¹ K⁻¹), sem descontá-la da capacidade total.",
        "Errada. Soma a água à capacidade total em vez de subtraí-la. O calor liberado aquece água e calorímetro juntos; o calorímetro é a diferença.",
        "Errada. Dobra o resultado correto, como se o calor liberado fosse o dobro (por exemplo, contar duas vezes a quantidade de Q)."
      ],
      "dica": "Em calorimetria: calor liberado = (C_calorímetro + m·c_água)·ΔT. Isole a parte do calorímetro por diferença."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 31ª IChO (1999), problema 1",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1265",
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
      "ano": 1999,
      "orgao": "prova teórica (Bangcoc), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 31ª IChO, Bangcoc, 1999, problema 5. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "A amigdalina, um glicosídeo (C20H27NO11) presente em sementes de Rosaceae, não dá teste positivo com Benedict ou Fehling. Sua hidrólise enzimática dá B (C8H7NO, levógiro, na forma natural) e C (C12H22O11), e a hidrólise ácida completa dá D (C6H12O6, dextrógiro) e E (C8H8O3, levógiro). B também pode ser preparado a partir de benzaldeído, primeiro com NaHSO3 e depois com NaCN; esse B sintético é racêmico (mistura 1 : 1 dos dois enantiômeros). A hidrólise ácida de B dá E. Qual é a constituição de E (sem considerar a configuração)?",
    "alternativas": [
      "Ácido 4-hidroxifenilacético, HO–C6H4–CH2–COOH",
      "Ácido 4-metoxibenzoico (ácido anísico), CH3O–C6H4–COOH",
      "Vanilina, 4-hidróxi-3-metoxibenzaldeído",
      "Ácido fenilacético, C6H5–CH2–COOH",
      "Ácido mandélico (ácido 2-hidróxi-2-fenilacético), C6H5–CH(OH)–COOH"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "Benzaldeído + NaHSO3, depois NaCN, forma a cianoidrina C6H5–CH(OH)–CN (B, C8H7NO); a hidrólise ácida do –CN dá –COOH: E = ácido mandélico, C6H5–CH(OH)–COOH (C8H8O3).",
      "detalhada": "A resolução segue a solução oficial do problema 5 (a amigdalina libera benzaldeído, HCN e gentiobiose/glicose).\n\n**1) B:** C6H5–CHO + NaHSO3 → adição ao C=O; NaCN troca o –SO3Na por –CN e dá a cianoidrina (mandelonitrila) C6H5–CH(OH)–CN, C8H7NO. Na amigdalina ele é levógiro (opticamente ativo); a síntese a partir do benzaldeído, sem agente quiral, dá a mistura racêmica.\n\n**2) E:** a hidrólise ácida da nitrila converte –CN em –COOH: C6H5–CH(OH)–COOH, ácido mandélico, C8H8O3.\n\n**3) Os demais:** D é a D-glicose (C6H12O6) e C é a gentiobiose (C12H22O11), formada por duas glicoses.",
      "alternativas": [
        "Errada. Tem a mesma fórmula molecular, C8H8O3, mas o OH está no anel. A rota (benzaldeído → cianoidrina) coloca o OH no carbono alfa, e não no anel aromático.",
        "Errada. Também é C8H8O3, mas não surge da cianoidrina do benzaldeído: o grupo CH3O no anel e a ausência de OH alcoólico não combinam com a rota.",
        "Errada. É C8H8O3, mas é aldeído; a hidrólise de uma nitrila dá ácido carboxílico, e não aldeído. Além disso, a rota parte do benzaldeído sem substituintes no anel.",
        "Errada. É C8H8O2 (um oxigênio a menos). A hidrólise da cianoidrina conserva o OH alcoólico e dá C8H8O3.",
        "Correta. Cianoidrina do benzaldeído (B) + hidrólise ácida = ácido mandélico, C6H5–CH(OH)–COOH (C8H8O3)."
      ],
      "dica": "Nitrila + H3O⁺/aquecimento = ácido carboxílico; cianoidrina = carbono ligado a OH e CN. Acompanhe as fórmulas moleculares."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 31ª IChO (1999), problema 5",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1266",
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
      "ano": 2000,
      "orgao": "prova teórica (Copenhague), problema 4, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 32ª IChO, Copenhague, 2000, problema 4. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Um composto natural A contém só C, H e O, com 63,2% de C, 5,3% de H e 31,5% de O em massa; seu espectro de massa tem íon molecular em m/z = 152 e picos em m/z = 137 e 123 (perda de 15 e 29 unidades de massa). Uma solução de A em éter, agitada com NaOH aquoso, fica sem A (A passa à fase aquosa), mas, agitada com NaHCO3 aquoso, A permanece no éter. A forma espelho de prata com o reagente de Tollens. O espectro de ¹H RMN mostra um singleto de 3 H em 3,9 ppm (CH3O–), um singleto de 1 H em 9,8 ppm e um sinal em 6,3 ppm que desaparece com D2O. Quais são a fórmula molecular e os grupos funcionais de A?",
    "alternativas": [
      "C8H8O3; fenol (OH ligado ao anel), aldeído e éter metílico (OCH3).",
      "C8H8O3; ácido carboxílico e éter",
      "C8H8O3; éster e álcool alifático",
      "C8H8O3; fenol, aldeído e éster metílico (–COOCH3)",
      "C8H8O3; cetona e ácido carboxílico"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "C : H : O = 5,3 : 5,3 : 2,0 → C8H8O3 (M = 152). Solúvel em NaOH e não em NaHCO3 = fenol; Tollens e 9,8 ppm = aldeído; 3,9 ppm (3 H) = OCH3. Perda de 15 (CH3) e de 29 (CHO) concorda.",
      "detalhada": "A resolução segue a solução oficial do problema 4 (itens 4.1 a 4.5), em que A é um hidróxi-metoxibenzaldeído (por exemplo, a vanilina).\n\n**1) Fórmula:** 63,2/12,0 = 5,27; 5,3/1,0 = 5,3; 31,5/16,0 = 1,97, razão 8 : 8 : 3; fórmula empírica C8H8O3 (M = 152 g/mol, igual ao íon molecular).\n\n**2) Acidez:** só é extraído por NaOH, e não por NaHCO3: ácido muito fraco, como fenol (um ácido carboxílico seria extraído por NaHCO3 também).\n\n**3) Tollens:** formação de espelho de prata indica aldeído (–CHO, 9,8 ppm).\n\n**4) RMN e massa:** singleto de 3 H em 3,9 ppm = –OCH3; o sinal em 6,3 ppm que some com D2O é o –OH fenólico. Perdas de CH3 (152 → 137) e de CHO (152 → 123) combinam.\n\n**5) Insaturações:** (2×8 + 2 − 8)/2 = 5: anel aromático (4) + C=O (1).",
      "alternativas": [
        "Correta. C8H8O3 (M = 152); fenol (solúvel em NaOH, não em NaHCO3), aldeído (Tollens, 9,8 ppm) e OCH3 (3,9 ppm).",
        "Errada. Um ácido carboxílico se dissolveria também em NaHCO3 aquoso e daria sinal acima de 10 ppm no RMN. Aqui A só passa à fase aquosa com NaOH (base forte), característica de fenol, e há aldeído (Tollens positivo).",
        "Errada. O teste de Tollens e o singleto em 9,8 ppm indicam aldeído. Um álcool alifático não se dissolveria em NaOH diluído (só fenóis, que são mais ácidos).",
        "Errada. Fenol (1 O) + aldeído (1 O) + éster (2 O) somariam 4 oxigênios, mas A tem só 3 O (C8H8O3, M = 152). O singleto de 3 H em 3,9 ppm é de OCH3 ligado ao anel (éter).",
        "Errada. O singleto em 9,8 ppm (H aldeídico) e o espelho de prata (Tollens) indicam aldeído, não cetona (cetonas não reduzem Ag⁺); e A não é ácido porque fica no éter com NaHCO3."
      ],
      "dica": "Extração: ácidos carboxílicos dissolvem em NaHCO3; fenóis só em NaOH. Tollens positivo indica aldeído."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 32ª IChO (2000), problema 4",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1267",
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
      "ano": 2000,
      "orgao": "prova teórica (Copenhague), problema 6, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 32ª IChO, Copenhague, 2000, problema 6. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "No subsolo calcário da Dinamarca, o CaCO3 dissolve-se na água subterrânea rica em CO2: CaCO3(s) + CO2(aq) + H2O(l) ⇌ Ca²⁺(aq) + 2 HCO3⁻(aq), com K = 10⁻⁴·²⁵ a 0 °C. Considere água em equilíbrio com CaCO3 sob pressão parcial de CO2 de 1,00 bar, na qual [CO2(aq)] = 0,0751 mol/dm³. Desprezando outros equilíbrios, qual é a concentração de íons cálcio?",
    "alternativas": [
      "1,6×10⁻² mol/dm³",
      "1,3×10⁻² mol/dm³",
      "1,02×10⁻² mol/dm³",
      "2,0×10⁻² mol/dm³",
      "1,0×10⁻³ mol/dm³"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "Com [HCO3⁻] = 2[Ca²⁺] = 2x: K = x(2x)²/[CO2] = 4x³/[CO2], logo x = (K·[CO2]/4)^(1/3) = (10⁻⁴·²⁵ × 0,0751/4)^(1/3) = 1,02×10⁻² mol/dm³.",
      "detalhada": "A resolução segue a solução oficial do problema 6 (item 6.6).\n\n**1) Expressão da constante:** K = [Ca²⁺][HCO3⁻]²/[CO2(aq)] = 10⁻⁴·²⁵ = 5,62×10⁻⁵.\n\n**2) Balanço de carga/matéria:** cada CaCO3 que se dissolve libera um Ca²⁺ e 2 HCO3⁻ (carbono do CO2 e do carbonato): [HCO3⁻] = 2[Ca²⁺] = 2x.\n\n**3) Substituição:** 5,62×10⁻⁵ = x(2x)²/0,0751 = 4x³/0,0751, logo x³ = 5,62×10⁻⁵ × 0,0751/4 = 1,06×10⁻⁶.\n\n**4) Resultado:** x = 1,02×10⁻² mol/dm³ (≈ 408 mg/dm³ de Ca²⁺): é por isso que a água subterrânea é \"dura\" e deposita CaCO3 ao perder CO2.",
      "alternativas": [
        "Errada. Faz [Ca²⁺][HCO3⁻]²/[CO2] com [Ca²⁺] = [HCO3⁻] = x, o que dá x³ = K·[CO2]. Mas a estequiometria impõe [HCO3⁻] = 2[Ca²⁺].",
        "Errada. Resulta de x³ = K·[CO2]/2: o fator (2x)² = 4x² foi trocado por 2x². K = 4x³/[CO2] exige dividir por 4.",
        "Correta. [HCO3⁻] = 2[Ca²⁺] ⇒ 4x³ = K·[CO2] ⇒ x = 1,02×10⁻² mol/dm³.",
        "Errada. É o dobro da resposta, isto é, [HCO3⁻] = 2[Ca²⁺] = 2,0×10⁻² mol/dm³ (concentração de bicarbonato), e não a de cálcio.",
        "Errada. Extrai a raiz quadrada em vez da raiz cúbica; mas K = [Ca²⁺][HCO3⁻]²/[CO2] é de terceira ordem em x."
      ],
      "dica": "Escreva a constante, use o balanço estequiométrico ([HCO3⁻] = 2[Ca²⁺]) e isole x: o expoente final é 3."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 32ª IChO (2000), problema 6",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1268",
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
      "ano": 2001,
      "orgao": "prova teórica (Mumbai), problema 4, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 33ª IChO, Mumbai, 2001, problema 4. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "A areia monazítica de Kerala (Índia) é rica em tório. Todo o chumbo da monazita é radiogênico: o ²⁰⁸Pb é o produto final estável da série do ²³²Th (meia-vida de 1,41×10¹⁰ anos). A razão atômica ²⁰⁸Pb/²³²Th medida em uma amostra por espectrometria de massa foi 0,104. Supondo que todo ²⁰⁸Pb e ²³²Th permaneceu na amostra desde a formação do mineral, qual é a idade da amostra?",
    "alternativas": [
      "6,4×10⁸ anos",
      "1,39×10⁹ anos",
      "1,41×10¹⁰ anos",
      "2,01×10⁹ anos",
      "4,6×10¹⁰ anos"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "N0 = N(Th) + N(Pb), logo N0/N = 1 + 0,104 = 1,104; t = ln(1,104)/λ = t½ · ln(1,104)/ln 2 = 1,41×10¹⁰ × 0,0989/0,693 ≈ 2,01×10⁹ anos.",
      "detalhada": "A resolução segue a solução oficial do problema 4 (item 4.1), que obtém 2,01×10⁹ anos.\n\n**1) Balanço de átomos:** cada ²⁰⁸Pb presente veio de um ²³²Th decaído. Assim N0(Th) = N(Th) + N(Pb) = N(Th)·(1 + 0,104).\n\n**2) Lei do decaimento:** N = N0·e^(−λt), então e^(λt) = N0/N = 1,104 e t = ln(1,104)/λ.\n\n**3) Constante:** λ = ln 2/t½ = 0,693/1,41×10¹⁰ anos = 4,92×10⁻¹¹ ano⁻¹.\n\n**4) Idade:** t = 0,0989/4,92×10⁻¹¹ ≈ 2,01×10⁹ anos.",
      "alternativas": [
        "Errada. Usa a meia-vida do ²³⁸U (4,47×10⁹ anos), que é do outro par (²⁰⁶Pb/²³⁸U), em vez da do ²³²Th.",
        "Errada. Calcula t = t½ × ln(1,104), esquecendo de dividir por ln 2. O tempo é t = t½ × ln(1,104)/ln 2.",
        "Errada. É a meia-vida do ²³²Th, correspondente à razão ²⁰⁸Pb/²³²Th = 1 (metade decaiu), e não 0,104.",
        "Correta. N0/N = 1,104, λ = 4,92×10⁻¹¹ ano⁻¹, t = ln(1,104)/λ ≈ 2,01×10⁹ anos.",
        "Errada. Interpreta 0,104 como a fração restante de tório (N/N0 = 0,104), obtendo t = t½·log₂(1/0,104). Mas 0,104 é a razão Pb/Th, e N0/N = 1 + 0,104."
      ],
      "dica": "Em datação, o filho radiogênico é o que o pai perdeu: N0(pai) = N(pai) + N(filho)."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 33ª IChO (2001), problema 4",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1269",
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
      "ano": 2001,
      "orgao": "prova teórica (Mumbai), problema 6, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 33ª IChO, Mumbai, 2001, problema 6. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "A zingerona, composto picante do gengibre, é a 4-(4-hidróxi-3-metoxifenil)butan-2-ona (C11H14O3). Em uma síntese, a vanilina (A, 4-hidróxi-3-metoxibenzaldeído) reage com acetona (B, C3H6O) em meio de NaOH aquoso e forma C; a hidrogenação catalítica de C (H2/catalisador) dá a zingerona. Qual é o composto C e que reação o forma?",
    "alternativas": [
      "4-(4-hidróxi-3-metoxifenil)-4-hidroxibutan-2-ona (C11H14O4), formada por adição aldólica sem desidratação",
      "4-(4-hidróxi-3-metoxifenil)but-3-en-2-ona (C11H12O3), formada por condensação aldólica com perda de água",
      "4-hidróxi-3-metoxibenzoato de metila, formado por esterificação",
      "Ácido 4-hidróxi-3-metoxibenzoico, formado por oxidação do aldeído",
      "4-(4-hidróxi-3-metoxifenil)butan-2-ol, formado por redução da cetona"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Aldeído aromático sem α-H + cetona com α-H em base: condensação aldólica (Claisen-Schmidt) com desidratação, dando a enona Ar–CH=CH–CO–CH3 (C11H12O3); H2 saturaria a C=C e dá a zingerona (C11H14O3).",
      "detalhada": "A resolução segue a solução oficial do problema 6 (item 6.4).\n\n**1) Reação:** em NaOH, a acetona forma o enolato (CH2⁻–CO–CH3), que ataca o C=O da vanilina; o aldol formado perde H2O e gera a C=C conjugada: Ar–CH=CH–CO–CH3.\n\n**2) Fórmula:** C8H8O3 + C3H6O − H2O = C11H12O3 (C).\n\n**3) Hidrogenação:** C11H12O3 + H2 → C11H14O3, a zingerona (a C=C é saturada e o C=O da cetona permanece).\n\n**4) Aplicação:** a mesma vanilina condensa com a pentano-2,4-diona (2 : 1) e dá a curcumina, da cúrcuma.",
      "alternativas": [
        "Errada. O aldol sem perda de água (C11H14O4) não tem a C=C que a hidrogenação precisa consumir; para chegar à zingerona (C11H14O3) por H2, C deve ser C11H12O3, o enona formado pela desidratação.",
        "Correta. Condensação aldólica vanilina + acetona dá Ar–CH=CH–CO–CH3 (C11H12O3), que com H2 dá a zingerona.",
        "Errada. A vanilina é aldeído, e a acetona não tem –OH para esterificar: a reação em NaOH aquoso é a condensação aldólica, e não esterificação.",
        "Errada. Em NaOH aquoso com acetona não há oxidante. O aldeído sem α-hidrogênio é o eletrófilo; a acetona (enolato) é o nucleófilo.",
        "Errada. É C11H16O3. A reação de C com H2 só reduz a C=C, e, de qualquer modo, a hidrogenação aqui dá a zingerona, uma cetona."
      ],
      "dica": "Se o produto final tem 2 H a mais que o intermediário, o intermediário deve ter uma C=C: pense em aldol com desidratação."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 33ª IChO (2001), problema 6",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1270",
    "materia": "quimica",
    "assunto": "Polímeros",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 2002,
      "orgao": "prova teórica (Groningen), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 34ª IChO, Groningen, 2002, problema 5. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "As aramidas, como a PPTA (Kevlar®/Twaron®), são poliamidas aromáticas obtidas por policondensação de dois monômeros em quantidades equimolares: C + A ⇌ Am + H2O, em que C é um grupo –CO2H, A é um grupo –NH2 e Am é um grupo amida. O comprimento médio da cadeia é Pn (número médio de unidades monoméricas por cadeia) e p é o grau de conversão (fração de grupos funcionais que reagiram). Que conversão é necessária para obter uma cadeia média de 500 unidades?",
    "alternativas": [
      "p = 0,002",
      "p = 0,98",
      "p = 0,9998",
      "p = 0,50",
      "p = 0,998"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "Com U0 monômeros iniciais e Nt cadeias, Pn = U0/Nt e p = (U0 − Nt)/U0 = 1 − 1/Pn; para Pn = 500, p = 1 − 1/500 = 0,998.",
      "detalhada": "A resolução segue a solução oficial do problema 5 (item 5.2).\n\n**1) Definições:** Pn = U0/Nt (monômeros por cadeia) e p = fração de grupos reagidos = (U0 − Nt)/U0, pois cada ligação amida formada une duas unidades e diminui em 1 o número de cadeias.\n\n**2) Relação:** p = 1 − Nt/U0 = 1 − 1/Pn, ou seja, Pn = 1/(1 − p) (equação de Carothers).\n\n**3) Valor:** Pn = 500 ⇒ 1 − p = 1/500 = 0,002 ⇒ p = 0,998. Por isso as policondensações exigem conversões altíssimas (99,8%).",
      "alternativas": [
        "Errada. É 1/Pn, o inverso do que se pede. De Pn = 1/(1 − p) segue p = 1 − 1/Pn = 1 − 1/500.",
        "Errada. Corresponde a Pn = 1/(1 − 0,98) = 50 unidades por cadeia, não 500.",
        "Errada. Dá Pn = 1/(1 − 0,9998) = 5 000 unidades por cadeia, dez vezes mais do que o pedido.",
        "Errada. Com p = 0,50, Pn = 1/(1 − 0,50) = 2: só dímeros. Para cadeias longas a conversão deve ser muito próxima de 1.",
        "Correta. Pn = 1/(1 − p): 500 = 1/(1 − p) ⇒ p = 0,998."
      ],
      "dica": "Em policondensação equimolar vale a equação de Carothers: Pn = 1/(1 − p). Cadeias longas exigem conversão quase total."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 34ª IChO (2002), problema 5",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1271",
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
      "ano": 2002,
      "orgao": "prova teórica (Groningen), problema 4, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 34ª IChO, Groningen, 2002, problema 4. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Em uma fábrica de metanol (CO + 2 H2 ⇌ CH3OH), a vazão de metanol na saída do reator é de 1 000 mol/s e 2/3 do CO alimentado é convertido. O CO e o H2 vêm do reformador, que fornece CO e H2 na proporção 1 : 3 (CH4 + H2O → CO + 3 H2, reação completa). Na saída do reator, a pressão total é 10 MPa. Com as vazões na saída (500 mol/s de CO, 2 500 mol/s de H2 e 1 000 mol/s de CH3OH), a pressão padrão p0 = 0,1 MPa e Kp = p(CH3OH)·p0² / [p(CO)·p(H2)²], qual é o valor de Kp?",
    "alternativas": [
      "5,1",
      "5,1×10⁻²",
      "5,1×10⁻⁴",
      "5,1×10⁻³",
      "2,0×10³"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "p(CO) = 10 × 500/4 000 = 1,25 MPa; p(H2) = 6,25 MPa; p(CH3OH) = 2,50 MPa; Kp = 2,50 × 0,1² / (1,25 × 6,25²) = 5,12×10⁻⁴.",
      "detalhada": "A resolução segue a solução oficial do problema 4 (itens 4.1 a 4.5), que obtém Kp = 5,12×10⁻⁴.\n\n**1) Vazão total na saída:** 500 + 2 500 + 1 000 = 4 000 mol/s.\n\n**2) Pressões parciais (pᵢ = p·nᵢ/ntot, p = 10 MPa):** CO: 1,25 MPa; H2: 6,25 MPa; CH3OH: 2,50 MPa.\n\n**3) Kp:** Kp = p(CH3OH)·p0² / [p(CO)·p(H2)²] = 2,50 × (0,1)² / (1,25 × 6,25²) = 0,025/48,8 = 5,12×10⁻⁴.\n\n**4) Uso:** na figura do problema original, esse valor corresponde a cerca de 630 K, a temperatura em que o reator deve operar para atingir o equilíbrio.",
      "alternativas": [
        "Errada. É a constante em frações molares, Kx = x(CH3OH)/(x(CO)·x(H2)²) = 0,25/(0,125 × 0,625²). Falta o fator (p0/p)² = (0,1/10)² = 10⁻⁴.",
        "Errada. Esquece o fator p0² e dá a constante em MPa⁻², 2,5/(1,25 × 6,25²) = 5,1×10⁻² MPa⁻². Kp adimensional exige multiplicar por p0² = 0,01 MPa².",
        "Correta. Pressões parciais 1,25; 6,25; 2,50 MPa; Kp = 2,50 × 0,1²/(1,25 × 6,25²) = 5,12×10⁻⁴.",
        "Errada. Usa p0 em vez de p0² no numerador (2,50 × 0,1 em vez de 2,50 × 0,1²): o resultado sai 10 vezes maior, 5,1×10⁻³. A estequiometria Δn = −2 exige o quadrado de p0 (0,01 MPa²).",
        "Errada. Inverte a expressão: é a constante da reação de decomposição do metanol, CH3OH ⇌ CO + 2 H2 (1/Kp = 1,95×10³)."
      ],
      "dica": "Kp adimensional: divida cada pressão parcial por p0 antes de montar a razão (equivale a multiplicar por p0^Δn de ν = −Δn)."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 34ª IChO (2002), problema 4",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1272",
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
      "ano": 2003,
      "orgao": "prova teórica (Atenas), problema 31, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 35ª IChO, Atenas, 2003, problema 31. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Uma amostra de 2,81 g de um diéster A, oticamente ativo, contendo só C, H e O, foi saponificada com 30,00 cm³ de NaOH 1,00 mol/dm³. Depois da saponificação, a solução precisou de 6,00 cm³ de HCl 1,00 mol/dm³ para titular apenas o NaOH que sobrou. Os produtos da saponificação foram um ácido dicarboxílico B (oticamente inativo), metanol e um álcool C oticamente ativo. Qual é a massa molar de A?",
    "alternativas": [
      "117 g/mol",
      "468 g/mol",
      "94 g/mol",
      "234 g/mol",
      "78 g/mol"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "NaOH consumido = 30,00 − 6,00 = 24,00 mmol; um diéster gasta 2 OH⁻, então n(A) = 12,00 mmol e M = 2,81 g/0,01200 mol ≈ 234 g/mol.",
      "detalhada": "A resolução segue a solução oficial do problema 31 (item a), que obtém 234 g/mol.\n\n**1) NaOH consumido:** 30,00 cm³ × 1,00 mol/dm³ = 30,00 mmol adicionados; sobraram 6,00 mmol (titulados por 6,00 cm³ de HCl 1,00 mol/dm³). Consumidos: 24,00 mmol.\n\n**2) Estequiometria:** R–OCO–X–CO–OR + 2 NaOH → NaOOC–X–COONa + 2 ROH. Então n(A) = 24,00/2 = 12,00 mmol.\n\n**3) Massa molar:** M(A) = 2,81 g / 0,01200 mol = 234 g/mol (corresponde a C13H14O4: fumarato de metila e 1-feniletila).",
      "alternativas": [
        "Errada. Considera 1 mol de NaOH por mol de éster (24,0 mmol de diéster). Um diéster consome 2 mol de NaOH: R–OCO–X–CO–OR + 2 OH⁻.",
        "Errada. Usa só os 6,00 mmol de HCl, isto é, o NaOH em excesso: 2,81 g / 6,00×10⁻³ mol. O consumido pelo éster é 30,00 − 6,00 = 24,00 mmol.",
        "Errada. Divide a massa por todos os 30,00 mmol de NaOH adicionados, sem descontar o excesso titulado pelo HCl.",
        "Correta. n(NaOH consumido) = 24,00 mmol, n(diéster) = 12,00 mmol e M = 2,81/0,01200 ≈ 234 g/mol.",
        "Errada. Divide a massa por 36,0 mmol, somando NaOH e HCl em vez de subtrair."
      ],
      "dica": "Saponificação com retitulação: NaOH consumido = adicionado − excesso; depois divida pelo número de grupos éster."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 35ª IChO (2003), problema 31",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1273",
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
      "ano": 2003,
      "orgao": "prova teórica (Atenas), problema 31, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 35ª IChO, Atenas, 2003, problema 31. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Na identificação de um diéster A, a saponificação dá metanol, um álcool C e um ácido dicarboxílico B oticamente inativo. B reage com Br2 em CCl4 e forma um único composto D, oticamente inativo (e não uma mistura de dois compostos). A ozonólise de B dá um único produto. Qual alternativa identifica corretamente B e D?",
    "alternativas": [
      "B = ácido (E)-but-2-enodioico (fumárico); D = ácido meso-2,3-dibromobutanodioico",
      "B = ácido (Z)-but-2-enodioico (maleico); D = ácido meso-2,3-dibromobutanodioico",
      "B = ácido fumárico; D = mistura racêmica de (2R,3R) e (2S,3S)",
      "B = ácido maleico; D = mistura racêmica de (2R,3R) e (2S,3S)",
      "B = ácido 2-metilidenobutanodioico (itacônico); D = ácido 2-bromo-2-(bromometil)butanodioico"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "B é um ácido butenodioico simétrico (ozonólise dá um só produto). A adição anti de Br2 ao (E) dá meso (único composto inativo); ao (Z) daria o par racêmico. Logo B = fumárico e D = meso-2,3-dibromosuccínico.",
      "detalhada": "A resolução segue a solução oficial do problema 31 (itens b, d e e).\n\n**1) Estrutura de B:** reage com Br2 (tem C=C) e a ozonólise dá um único produto, então a C=C é simétrica: HOOC–CH=CH–COOH.\n\n**2) Estereoquímica:** o Br2 adiciona-se em anti (via íon bromônio). Ao isômero (E) (fumárico) a adição anti dá (2R,3S): composto meso, único e oticamente inativo. Ao (Z) (maleico), a adição anti dá o par (2R,3R)/(2S,3S), mistura racêmica de dois compostos.\n\n**3) Conclusão:** como D é um único composto inativo, B = ácido (E)-but-2-enodioico (fumárico) e D = ácido meso-2,3-dibromobutanodioico (em projeção de Fischer, os dois Br do mesmo lado).",
      "alternativas": [
        "Correta. Fumárico (E) + Br2 (adição anti) = meso-2,3-dibromosuccínico: um só composto inativo.",
        "Errada. A adição anti de Br2 ao isômero Z dá o par racêmico (2R,3R)/(2S,3S), uma mistura de dois compostos, e não um só composto meso.",
        "Errada. A adição anti de Br2 ao isômero E dá o composto meso (2R,3S), único. A mistura racêmica resultaria do isômero Z.",
        "Errada. Embora a química do par (Z → racêmico) esteja certa, o enunciado fala em um único composto D oticamente inativo, e não em mistura de dois compostos.",
        "Errada. A ozonólise do ácido itacônico dá dois produtos diferentes (ácido 2-oxobutanodioico e metanal), e não um só; a adição de Br2 a ele ainda geraria um carbono quiral (racemato)."
      ],
      "dica": "Adição anti a um alceno E dá meso (se os dois carbonos são iguais); a um Z dá racemato. Use isso para inferir a geometria."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 35ª IChO (2003), problema 31",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1274",
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
      "ano": 2004,
      "orgao": "prova teórica (Kiel), problema 6, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 36ª IChO, Kiel, 2004, problema 6. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "A reação de Diels-Alder é concertada e estereoespecífica. O ciclopentadieno reage com o (Z)-but-2-enodinitrilo (cis-NC–CH=CH–CN) e forma um único estereoisômero C (adução endo). Com o isômero (E) do alceno, obtêm-se dois estereoisômeros diferentes, D1 e D2, com os dois grupos CN em posições opostas (um endo e outro exo) no anel norborneno. Qual é a relação entre D1 e D2?",
    "alternativas": [
      "São diastereoisômeros: um é o aduto endo,endo e o outro o exo,exo.",
      "São enantiômeros (imagens especulares não superponíveis).",
      "São isômeros constitucionais (de posição).",
      "São o mesmo composto (meso), porque a molécula é simétrica.",
      "São tautômeros."
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "O dienófilo (E) conserva a relação trans: em cada adução um CN fica endo e o outro exo. Os dois produtos possíveis (D1 e D2) são imagens especulares, ou seja, enantiômeros.",
      "detalhada": "A resolução segue a solução oficial do problema 6 (item 6.2), que registra: \"The two compounds are enantiomers\".\n\n**1) Estereoespecificidade:** na Diels-Alder, a geometria do dienófilo é transferida ao produto. O (Z) (cis) dá os dois CN do mesmo lado (ambos endo): um único estereoisômero C, meso.\n\n**2) Dienófilo (E):** os dois CN ficam em lados opostos do anel: um endo e outro exo (trans). O dieno pode atacar qualquer das duas faces do dienófilo, e as duas aproximações geram os dois enantiômeros.\n\n**3) Conclusão:** D1 e D2, trans-5,6-diciano-norborneno, são enantiômeros: quirais, sem plano de simetria, e imagens especulares um do outro.",
      "alternativas": [
        "Errada. Com o dienófilo (E) os dois CN ficam em lados opostos (um endo e um exo) em ambos os produtos; os isômeros endo,endo e exo,exo vêm do dienófilo (Z). D1 e D2 são imagens especulares um do outro.",
        "Correta. O aduto trans (um CN endo, outro exo) é quiral; as duas faces de ataque dão D1 e D2, enantiômeros.",
        "Errada. Têm a mesma conectividade (os mesmos átomos ligados na mesma ordem); diferem só na orientação espacial.",
        "Errada. A adição do dienófilo trans produz dois centros quirais sem plano de simetria (um CN endo, o outro exo), logo a molécula é quiral e não meso.",
        "Errada. Tautômeros diferem na posição de um H e de uma ligação π e se interconvertem rapidamente. D1 e D2 têm esqueleto igual e diferem apenas na configuração."
      ],
      "dica": "Dienófilo cis → produto cis (aqui meso); dienófilo trans → produto trans, quiral, formado como par de enantiômeros."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 36ª IChO (2004), problema 6",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1275",
    "materia": "quimica",
    "assunto": "Estequiometria",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 2004,
      "orgao": "prova teórica (Kiel), problema 4, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 36ª IChO, Kiel, 2004, problema 4. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O mineral argirodita é um composto estequiométrico de prata (nox +1), enxofre (nox −2) e de um elemento desconhecido Y (nox +4), com razão de massas m(Ag) : m(Y) = 11,88 : 1. Aquecida em fluxo de hidrogênio, a argirodita dá Ag2S, H2S e um sulfeto marrom-avermelhado de Y (YS, com Y de nox +2). Para converter totalmente 10,0 g de argirodita são necessários 0,295 dm³ de H2 a 400 K e 100 kPa (um H2 por átomo de Y). Qual é a fórmula empírica da argirodita?",
    "alternativas": [
      "Ag4GeS4",
      "Ag2GeS3",
      "Ag10GeS7",
      "Ag8SnS6",
      "Ag8GeS6"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "n(H2) = pV/RT = 8,87 mmol = n(fórmula): M = 10,0/8,87×10⁻³ = 1 127 g/mol. Com m(Ag)/m(Y) = 11,88 resulta M(Y) = 72,6 g/mol (Ge) e a proporção Ag : Ge = 8 : 1; carga: 8 Ag⁺ + Ge⁴⁺ = 12+ = 6 S²⁻: Ag8GeS6.",
      "detalhada": "A resolução segue a solução oficial do problema 4 (item 4.2), que obtém M(Y) = 72,57 g/mol (Ge) e Ag8GeS6.\n\n**1) H2 consumido:** n(H2) = pV/(RT) = 100×10³ Pa × 0,295×10⁻³ m³ / (8,314 × 400) = 8,87×10⁻³ mol. Como cada Ge⁴⁺ → Ge²⁺ pede 1 H2 (e Ag⁺ e S²⁻ só se redistribuem), n(fórmula) = 8,87×10⁻³ mol e M = 10,0 g / 8,87×10⁻³ mol = 1 127 g/mol.\n\n**2) Massa molar de Y:** com Ag_aYS_(a/2+2) e a·107,87 = 11,88·M(Y), M = a·107,87 + M(Y) + (a/2 + 2)·32,07 = 1 127. Resolvendo: M(Y) = 72,6 g/mol (germânio) e a = 8.\n\n**3) Fórmula:** Ag8GeS6 (neutra: 8 × (+1) + 4 = 12 = 6 × 2).",
      "alternativas": [
        "Errada. A razão m(Ag) : m(Ge) seria 4 × 107,9 / 72,6 = 5,9, e não 11,88. Além disso, sua massa molar (632 g/mol) não combina com 1 127 g/mol (10,0 g / n(H2)).",
        "Errada. A razão de massas seria 3,0 e a massa molar, 385 g/mol, muito menor que 1 127 g/mol obtidos pelo consumo de H2.",
        "Errada. A razão de massas seria 14,9 (maior que 11,88) e M = 1 376 g/mol. Não combina com os dados.",
        "Errada. A razão de massas seria 7,3 e M = 1 174 g/mol. A massa molar do Y obtida dos dados (≈ 72,6 g/mol) é a do germânio, e não a do estanho (118,7 g/mol).",
        "Correta. M(composto) = 1 127 g/mol, M(Y) = 72,6 g/mol (Ge) e a razão Ag : Ge = 8 : 1: Ag8GeS6."
      ],
      "dica": "Combine as duas pistas (razão de massas e consumo de H2) e confira a neutralidade de carga da fórmula obtida."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 36ª IChO (2004), problema 4",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1276",
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
      "ano": 2005,
      "orgao": "prova teórica (Taipé), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 37ª IChO, Taipé, 2005, problema 1. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Três aminoácidos, glicina (Gly), L-alanina (L-Ala) e D-alanina (D-Ala), são usados como material de partida para formar tripeptídeos lineares por condensação. Quantos tripeptídeos lineares diferentes são possíveis (cada um com os três aminoácidos escolhidos livremente, em qualquer posição, com repetição permitida) e quantos deles são oticamente ativos?",
    "alternativas": [
      "27 tripeptídeos, todos oticamente ativos",
      "9 tripeptídeos, dos quais 8 são oticamente ativos",
      "27 tripeptídeos, dos quais 26 são oticamente ativos",
      "27 tripeptídeos, dos quais 24 são oticamente ativos",
      "18 tripeptídeos, dos quais 17 são oticamente ativos"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "Três posições com 3 escolhas cada: 3³ = 27 sequências. Só Gly-Gly-Gly não tem carbono quiral (inativo): 26 são oticamente ativas.",
      "detalhada": "A resolução segue a solução oficial do problema 1 (itens 1.4 e 1.5): \"27 possible tripeptides\"; \"26 optically active\".\n\n**1) Contagem:** a sequência N-terminal – meio – C-terminal é ordenada; cada posição admite Gly, L-Ala ou D-Ala: 3 × 3 × 3 = 27 tripeptídeos.\n\n**2) Atividade óptica:** a glicina (H2N–CH2–COOH) não é quiral; os demais aminoácidos têm um carbono quiral. Qualquer tripeptídeo com pelo menos uma alanina tem pelo menos um centro quiral e, como as extremidades são diferentes (NH2 e COOH), nenhuma sequência é meso: 27 − 1 = 26 ativos.\n\n**3) Exceção:** apenas Gly-Gly-Gly, sem centros quirais, é inativo.",
      "alternativas": [
        "Errada. O Gly-Gly-Gly (H2N–CH2CO–NH–CH2CO–NH–CH2COOH) não tem nenhum carbono quiral e é oticamente inativo.",
        "Errada. Usa 3² = 9 em vez de 3³ = 27. São três posições (N-terminal, meio e C-terminal), cada uma com 3 opções.",
        "Correta. 3³ = 27 sequências; só Gly-Gly-Gly (sem centro quiral) é inativo: 26 ativas.",
        "Errada. Só o Gly-Gly-Gly é inativo. Mesmo tripeptídeos como L-Ala-Gly-D-Ala, em que as alaninas têm configuração oposta, são ativos, porque as extremidades (NH2 e COOH) são diferentes e a molécula não tem plano de simetria.",
        "Errada. 3 × 3 × 2 não conta todas as combinações. Cada uma das três posições aceita os três aminoácidos: 3³ = 27 sequências."
      ],
      "dica": "Conte sequências como escolhas independentes por posição (3³) e procure o único caso sem carbono quiral."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 37ª IChO (2005), problema 1",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1277",
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
      "ano": 2005,
      "orgao": "prova teórica (Taipé), problema 6, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 37ª IChO, Taipé, 2005, problema 6. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Em água natural saturada com CaCO3 e em equilíbrio com o CO2 do ar, ocorre CaCO3(s) + CO2(aq) + H2O ⇌ Ca²⁺ + 2 HCO3⁻, com constante Keq = 4,28×10⁻⁵ a 298 K. A concentração de CO2(aq) em equilíbrio com o ar é 1,24×10⁻⁵ mol/dm³. Qual é a concentração de Ca²⁺ na água, em mg/dm³ (M(Ca) = 40,1 g/mol)? (Considere [HCO3⁻] = 2[Ca²⁺].)",
    "alternativas": [
      "20 mg/dm³",
      "0,51 mg/dm³",
      "26 mg/dm³",
      "32 mg/dm³",
      "41 mg/dm³"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "Keq = [Ca²⁺](2[Ca²⁺])²/[CO2] = 4x³/[CO2] ⇒ x = (4,28×10⁻⁵ × 1,24×10⁻⁵/4)^(1/3) = 5,1×10⁻⁴ mol/dm³ = 20,5 mg/dm³ de Ca²⁺ (≈ 20 mg/dm³).",
      "detalhada": "A resolução segue a solução oficial do problema 6 (item 6.6), que obtém 20,5 mg/dm³ (usando 40,1 g/mol).\n\n**1) Expressão:** Keq = [Ca²⁺][HCO3⁻]²/[CO2(aq)].\n\n**2) Balanço:** [HCO3⁻] = 2[Ca²⁺] = 2x.\n\n**3) Substituição:** 4,28×10⁻⁵ = x·(2x)²/1,24×10⁻⁵ ⇒ 4x³ = 5,31×10⁻¹⁰ ⇒ x = 5,1×10⁻⁴ mol/dm³.\n\n**4) Conversão:** 5,1×10⁻⁴ mol/dm³ × 40,1 g/mol = 2,05×10⁻² g/dm³ = 20,5 mg/dm³, isto é, cerca de 20 mg/dm³.",
      "alternativas": [
        "Correta. 4x³/[CO2] = Keq dá x = 5,1×10⁻⁴ mol/dm³, que equivale a 20,5 mg/dm³ ≈ 20 mg/dm³ de Ca²⁺.",
        "Errada. Dá o valor em mmol/dm³ (5,1×10⁻⁴ mol/dm³ = 0,51 mmol/dm³) e o chama de mg/dm³. Para converter para mg/dm³, multiplique pela massa molar do cálcio (40,1 g/mol).",
        "Errada. Faz [HCO3⁻]² = 2[Ca²⁺]² (divide por 2 em vez de 4): (K·[CO2]/2)^(1/3) = 6,4×10⁻⁴ mol/dm³.",
        "Errada. Usa [Ca²⁺] = [HCO3⁻], isto é, x³ = K·[CO2], esquecendo que a estequiometria dá 2 HCO3⁻ por Ca²⁺ e que K = 4x³/[CO2].",
        "Errada. Calcula [HCO3⁻] = 2[Ca²⁺] = 1,02×10⁻³ mol/dm³ e o converte para mg/dm³ com a massa do cálcio, confundindo a concentração de bicarbonato com a de Ca²⁺."
      ],
      "dica": "Dureza da água por CaCO3: escreva K com [HCO3⁻] = 2[Ca²⁺], resolva a raiz cúbica e só então converta para mg/dm³."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 37ª IChO (2005), problema 6",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1278",
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
      "ano": 2006,
      "orgao": "prova teórica (Gyeongsan), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 38ª IChO, Gyeongsan, 2006, problema 5. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "A eficácia de um fármaco depende de sua absorção. Suponha que a forma iônica (A⁻) de um fármaco ácido fraco não atravesse a membrana, enquanto a forma neutra (HA) a atravessa livremente, de modo que [HA] é igual nos dois lados no equilíbrio. A membrana separa o estômago (pH = 2,0) do sangue (pH = 7,4). Qual é a razão entre a concentração total ([HA] + [A⁻]) de ácido acetilsalicílico (pKa = 3,52) no sangue e a no estômago?",
    "alternativas": [
      "5,4",
      "≈ 7,4×10³",
      "≈ 2,5×10⁵",
      "≈ 1,4×10⁻⁴",
      "1 (as concentrações totais são iguais)"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Com [HA] igual, o total é [HA](1 + 10^(pH−pKa)): sangue 1 + 7 586 = 7 587; estômago 1 + 0,030 = 1,03; razão 7 587/1,03 ≈ 7,4×10³.",
      "detalhada": "A resolução segue a solução oficial do problema 5 (item 5.3), que obtém 7 400.\n\n**1) Equilíbrio ácido-base:** [A⁻]/[HA] = 10^(pH − pKa).\n\n**2) Sangue (pH 7,40):** [A⁻]/[HA] = 10^(7,40−3,52) = 7 586; total = [HA](1 + 7 586) = 7 587·[HA].\n\n**3) Estômago (pH 2,00):** [A⁻]/[HA] = 10^(2,00−3,52) = 0,0302; total = 1,03·[HA].\n\n**4) Razão:** como [HA] é igual nos dois lados, (total no sangue)/(total no estômago) = 7 587/1,03 ≈ 7,4×10³: a forma ionizada fica \"presa\" no sangue.",
      "alternativas": [
        "Errada. É a diferença de pH entre sangue e estômago (7,4 − 2,0), e não uma razão de concentrações. A razão envolve potências de 10 desses valores.",
        "Correta. Total no sangue = 7 587·[HA]; no estômago, 1,03·[HA]; razão ≈ 7,4×10³.",
        "Errada. É 10^(pH_sangue − pH_estômago) = 10^5,4. A razão não depende da diferença dos pH, mas de [A⁻]/[HA] = 10^(pH − pKa) em cada compartimento.",
        "Errada. É o inverso: razão estômago/sangue. O sangue, mais básico, concentra mais ácido total, e a razão sangue/estômago é maior que 1.",
        "Errada. Só a concentração da forma neutra HA é igual nos dois lados. A concentração total inclui A⁻, que no sangue (pH 7,4) é cerca de 7 600 vezes maior que HA."
      ],
      "dica": "Para ácido fraco, [A⁻]/[HA] = 10^(pH−pKa). Compare as concentrações totais com [HA] igual nos dois lados."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 38ª IChO (2006), problema 5",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1279",
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
      "ano": 2007,
      "orgao": "prova teórica (Moscou), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 39ª IChO, Moscou, 2007, problema 5. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Em uma mistura reacional com ácido acético e etanol na proporção molar 1 : 2, com algumas gotas de H2SO4 concentrado, forma-se acetato de etila, com rendimento de 85%, mesmo em refluxo prolongado (a reação é um equilíbrio). Supondo que a constante de equilíbrio não varia com a composição e que o volume não muda, qual seria o rendimento esperado se o ácido acético e o etanol fossem tomados na proporção molar 1 : 1?",
    "alternativas": [
      "85%",
      "92%",
      "50%",
      "67%",
      "75%"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "K = (0,85)²/(0,15 × 1,15) = 4,19; para 1 : 1, K = x²/(1 − x)² ⇒ x/(1 − x) = √4,19 = 2,05 ⇒ x = 0,67 (67%).",
      "detalhada": "A resolução segue a solução oficial do problema 5 (item 5.3), que obtém 67%.\n\n**1) Constante de equilíbrio (CH3COOH + C2H5OH ⇌ CH3COOC2H5 + H2O), com 1 mol de ácido e 2 mol de etanol:** no equilíbrio há 0,85 mol de éster e de água, 0,15 mol de ácido e 2 − 0,85 = 1,15 mol de etanol. K = (0,85 × 0,85)/(0,15 × 1,15) = 4,19.\n\n**2) Proporção 1 : 1 (1 mol de cada):** com conversão x, K = x²/(1 − x)² = 4,19.\n\n**3) Resolvendo:** x/(1 − x) = 2,05, logo x = 2,05/3,05 = 0,672: rendimento de 67%.\n\n**4) Interpretação:** menos excesso de etanol desloca o equilíbrio para os reagentes.",
      "alternativas": [
        "Errada. Só seria igual se a proporção 1 : 2 não influísse no equilíbrio. Com menos etanol (reagente em excesso) o equilíbrio se desloca para trás, e o rendimento cai.",
        "Errada. Aumentaria o rendimento, o que contraria o princípio de Le Chatelier: tirar etanol (de 2 para 1 mol) diminui a conversão.",
        "Errada. Seria o rendimento se K = 1. Aqui K = 4,19, então a conversão em 1 : 1 fica acima de 50%.",
        "Correta. K = 0,85²/(0,15 × 1,15) = 4,19 e, para 1 : 1, x²/(1 − x)² = 4,19 ⇒ x ≈ 0,67 (67%).",
        "Errada. Resulta de interpolar entre 85% e 67% sem calcular o equilíbrio. O cálculo exato com K = 4,19 dá 67%."
      ],
      "dica": "Calcule K com o dado de um experimento e use-o no outro; em esterificação, o volume se cancela porque Δn = 0."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 39ª IChO (2007), problema 5",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1280",
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
      "ano": 2007,
      "orgao": "prova teórica (Moscou), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 2 (ed. Anton Sirota, IUVENTA, Bratislava): 39ª IChO, Moscou, 2007, problema 5. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Uma mistura equimolar X de três líquidos incolores A, B e C (3,92 g) foi dissolvida em éter dietílico e hidrogenada na presença de Pd/C: absorveram-se 0,448 dm³ de H2 (condições normais). Após a reação, A e C foram recuperados inalterados (3,22 g da mistura) e nenhum outro composto orgânico, exceto o éter dietílico, pôde ser identificado: B desapareceu totalmente. Sabe-se que B dá, no espectro de ¹H RMN, um singleto, um tripleto e um quarteto na razão 1 : 3 : 2, e que a hidrólise alcalina de B dá acetato e etanol. Qual é B?",
    "alternativas": [
      "Etil vinil éter, CH2=CH–O–CH2CH3, M = 72 g/mol",
      "Ortoacetato de trietila, CH3C(OCH2CH3)3, M = 162 g/mol",
      "Malonato de dietila, CH2(COOCH2CH3)2, M = 160 g/mol",
      "But-1-ino, HC≡C–CH2CH3, M = 54 g/mol",
      "Etoxietino (etil-etinil-éter), HC≡C–O–CH2CH3, M = 70 g/mol"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "Massa de B = 3,92 − 3,22 = 0,70 g; n(H2) = 0,0200 mol = 2 n(B) ⇒ n(B) = 0,0100 mol e M(B) = 70 g/mol (C4H6O): HC≡C–O–CH2CH3, que dá singleto (≡C–H), quarteto (OCH2) e tripleto (CH3) 1 : 2 : 3, e com 2 H2 dá o éter dietílico (CH3CH2OCH2CH3).",
      "detalhada": "A resolução segue a solução oficial do problema 5 (item 5.4), em que A é o ortoacetato de trietila, B é o etoxietino e C é o malonato de dietila.\n\n**1) Mols de H2:** 0,448 dm³ / 22,4 dm³/mol = 0,0200 mol.\n\n**2) Massa de B:** só B desapareceu, e a massa perdida é 3,92 − 3,22 = 0,70 g.\n\n**3) Estequiometria:** a mistura é equimolar (3 compostos) e B é o único hidrogenado. Um alcino consome 2 H2: n(B) = 0,0200/2 = 0,0100 mol, logo M(B) = 0,70/0,0100 = 70 g/mol (C4H6O).\n\n**4) Identificação:** HC≡C–O–CH2CH3 (etoxietino) tem M = 70,1 g/mol; com 2 H2 vira CH3CH2–O–CH2CH3, o próprio éter dietílico (único composto orgânico além do solvente, como diz o enunciado). O RMN dá singleto (≡C–H, 1 H), quarteto (OCH2, 2 H) e tripleto (CH3, 3 H); a hidrólise básica dá acetato de etila (enol → éster) e depois acetato + etanol.",
      "alternativas": [
        "Errada. Consumiria 1 H2 por molécula: n(B) seria 0,0200 mol e M(B) = 0,70 g / 0,0200 mol = 35 g/mol, incompatível com 72 g/mol. O espectro também não teria o singleto isolado de H alcínico (os H vinílicos dão multipletos).",
        "Errada. É A: não reage com H2 e fica inalterado. Aliás, o A não é hidrogenado porque não tem ligações múltiplas.",
        "Errada. É C: não é hidrogenado (a carbonila de éster não reage nas condições de Pd/C). A massa de A + C recuperada, 3,22 g, bate com 0,0100 mol × (162 + 160).",
        "Errada. Não tem oxigênio e, portanto, não daria acetato e etanol por hidrólise; sua massa (54 g/mol) também não bate com os 0,70 g desaparecidos por 0,0100 mol.",
        "Correta. m(B) = 0,70 g, n(B) = n(H2)/2 = 0,0100 mol, M = 70 g/mol: etoxietino, HC≡C–OEt, que com 2 H2 dá éter dietílico."
      ],
      "dica": "Use a massa que \"sumiu\" e o consumo de H2 (2 H2 por alcino) para achar a massa molar; confirme com RMN e a hidrólise."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 2: 39ª IChO (2007), problema 5",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%202%20-%20icho%2021-40.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  }
] });
