/* Questões de Química adaptadas das coletâneas oficiais de problemas das Olimpíadas Internacionais de Química (IChO): Volume 3 (41ª a 45ª IChO, 2009 a 2013)
   e Volume 4 (46ª a 50ª IChO, 2014 a 2018). Fonte: "The Competition Problems from the International Chemistry Olympiads", editor Anton Sirota,
   IChO International Information Centre (IUVENTA/NIVAM), Bratislava, Eslováquia. Volume 3: https://www.icho.sk/files/documents/competition-problems/volume%203%20-%20icho%2041-45.pdf
   Volume 4: https://www.icho.sk/files/documents/competition-problems/volume%204%20-%20icho%2046-50.pdf (página da coleção: https://icho.sk/competition-problems/).
   Permissão, conforme a página de créditos de cada volume: "You are free to copy, distribute, transmit or adapt this publication or its parts for unlimited teaching
   purposes", com citação de "The Competition Problems from the International Chemistry Olympiads, Volume N". Os volumes 3 e 4 acrescentam que os problemas copiados
   não podem ser publicados nem distribuídos para fins comerciais.
   Este arquivo é uma adaptação (tradução para o português do Brasil, conversão para múltipla escolha, comentários novos), com as respostas conferidas na solução
   oficial de cada problema. O conteúdo adaptado é distribuído gratuitamente, sem fins comerciais, para estudo, com a mesma citação dos originais. Não foram
   usados problemas práticos (de laboratório) nem problemas com aviso de copyright próprio. */
Banco.registrar({ questoes: [
  {
    "id": "qui-1281",
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
      "ano": 2009,
      "orgao": "prova teórica (Cambridge), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 3 (ed. Anton Sirota, IUVENTA, Bratislava): 41ª IChO, Cambridge, 2009, problema 1. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Uma amostra purificada contém 192 mg de ²²⁶Ra (massa isotópica relativa 226,025) e foi deixada em repouso até o rádio e seus descendentes de vida curta entrarem em estado estacionário (equilíbrio secular). Nesse estado, a cadeia emite quatro partículas α para cada átomo de ²²⁶Ra que decai (os decaimentos α do ²²⁶Ra, do ²²²Rn, do ²¹⁸Po e do ²¹⁴Po), e a taxa total de emissão α, medida por cintilação, é 27,7 GBq (1 Bq = 1 decaimento por segundo). Use NA = 6,022×10²³ mol⁻¹ e 1 ano = 3,156×10⁷ s. Qual é a meia-vida do ²²⁶Ra?",
    "alternativas": [
      "1,62×10³ anos",
      "101 anos",
      "405 anos",
      "810 anos",
      "6,5×10³ anos"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "No estado estacionário a taxa do ²²⁶Ra é 1/4 da taxa α total; com N = 5,12×10²⁰ átomos, λ = 1,354×10⁻¹¹ s⁻¹ e t½ ≈ 1,62×10³ anos.",
      "detalhada": "A resolução segue a solução oficial do problema 1 (item 1.8), que dá t½ ≈ 1620 anos. Usa-se 226,025 (massa isotópica real do ²²⁶Ra); o oficial usa 226,25, e a diferença não altera o resultado (t½ ≈ 1,62×10³ anos nos dois casos).\n\n**1) Átomos de ²²⁶Ra:** N = (0,192 g / 226,025 g/mol) × 6,022×10²³ mol⁻¹ = **5,12×10²⁰ átomos**.\n\n**2) Taxa do ²²⁶Ra:** em equilíbrio secular, cada membro da cadeia decai na mesma taxa que o ²²⁶Ra. Como há quatro decaimentos α (²²⁶Ra, ²²²Rn, ²¹⁸Po, ²¹⁴Po), a taxa total é 4 vezes a do ²²⁶Ra: 27,7×10⁹ s⁻¹ / 4 = 6,925×10⁹ s⁻¹.\n\n**3) Constante de decaimento:** λ = taxa / N = 6,925×10⁹ / 5,1155×10²⁰ = **1,354×10⁻¹¹ s⁻¹**.\n\n**4) Meia-vida:** t½ = ln 2 / λ = 0,693 / 1,354×10⁻¹¹ = 5,12×10¹⁰ s; dividindo por 3,156×10⁷ s/ano, t½ ≈ **1,62×10³ anos**.",
      "alternativas": [
        "Correta. Taxa do ²²⁶Ra = 27,7/4 = 6,93 GBq; N = 5,12×10²⁰ átomos; λ = 1,354×10⁻¹¹ s⁻¹ e t½ = ln 2/λ = 5,12×10¹⁰ s ≈ 1,62×10³ anos.",
        "Errada. Multiplica a taxa por 4 em vez de dividi-la: a taxa total é a soma de quatro decaimentos, então a do ²²⁶Ra sozinho é 27,7/4 GBq.",
        "Errada. Usa a taxa total de 27,7 GBq como se fosse só do ²²⁶Ra e esquece de dividir por 4 (λ = 5,4×10⁻¹¹ s⁻¹).",
        "Errada. Divide a taxa total por 2 em vez de por 4; a cadeia tem quatro emissões α em equilíbrio com o ²²⁶Ra.",
        "Errada. Divide por 4 duas vezes (λ = taxa/(16 N)); a divisão por 4 deve ser feita uma só vez."
      ],
      "dica": "Em equilíbrio secular todos os membros da cadeia têm a mesma atividade: conte quantos decaimentos da cadeia entram na taxa medida."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 3: 41ª IChO (2009), problema 1",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%203%20-%20icho%2041-45.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1282",
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
      "ano": 2009,
      "orgao": "prova teórica (Cambridge), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 3 (ed. Anton Sirota, IUVENTA, Bratislava): 41ª IChO, Cambridge, 2009, problema 1. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Um cristal de ouro tem cela unitária cúbica de faces centradas (um átomo em cada vértice e um no centro de cada face), com aresta de 0,408 nm. A densidade do ouro é 1,93×10⁴ kg m⁻³ e a massa atômica relativa é 196,97. A partir desses dados, qual é o valor estimado da constante de Avogadro?",
    "alternativas": [
      "1,50×10²³ mol⁻¹",
      "3,01×10²³ mol⁻¹",
      "6,01×10²³ mol⁻¹",
      "9,02×10²³ mol⁻¹",
      "1,20×10²⁴ mol⁻¹"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "A cela cúbica de faces centradas tem 4 átomos; a massa da cela dividida por 4 dá a massa de um átomo, e NA = M/m(átomo) ≈ 6,01×10²³ mol⁻¹.",
      "detalhada": "A resolução segue a solução oficial do problema 1 (itens 1.1 a 1.3).\n\n**1) Átomos por cela:** 8 vértices × 1/8 + 6 faces × 1/2 = 1 + 3 = **4 átomos**.\n\n**2) Volume e massa da cela:** V = (0,408 nm)³ = 6,79×10⁻²⁹ m³; m = ρV = 1,93×10⁴ kg m⁻³ × 6,79×10⁻²⁹ m³ = 1,31×10⁻²⁴ kg.\n\n**3) Massa de um átomo:** 1,31×10⁻²⁴ kg / 4 = 3,28×10⁻²⁵ kg = 3,28×10⁻²² g.\n\n**4) Constante de Avogadro:** NA = M / m(átomo) = 196,97 g/mol / 3,28×10⁻²² g = **6,01×10²³ mol⁻¹**.",
      "alternativas": [
        "Errada. Resulta de supor 1 átomo por cela (conta só os vértices, 8 × 1/8). Os 6 átomos das faces, cada um dividido por 2 celas, somam mais 3.",
        "Errada. Supõe 2 átomos por cela (como na estrutura cúbica de corpo centrado). A de faces centradas tem 4.",
        "Correta. 4 átomos por cela; m(cela) = 1,93×10⁴ × (0,408×10⁻⁹)³ = 1,31×10⁻²⁴ kg; m(átomo) = 3,28×10⁻²⁵ kg; NA = 196,97 g/mol ÷ 3,28×10⁻²² g.",
        "Errada. Supõe 6 átomos por cela (conta as 6 faces inteiras, sem dividir cada uma por 2).",
        "Errada. Supõe 8 átomos por cela (conta os 8 vértices inteiros, sem dividir cada um por 8)."
      ],
      "dica": "Átomo no vértice vale 1/8, na face vale 1/2, na aresta 1/4 e no interior da cela vale 1 inteiro."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 3: 41ª IChO (2009), problema 1",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%203%20-%20icho%2041-45.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1283",
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
      "ano": 2009,
      "orgao": "prova teórica (Cambridge), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 3 (ed. Anton Sirota, IUVENTA, Bratislava): 41ª IChO, Cambridge, 2009, problema 5. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Na fabricação das resinas epóxi, um dos reagentes é obtido do benzeno. O benzeno reage com propeno na presença de catalisador ácido e forma, como produto principal, o hidrocarboneto D, com 89,94% de C e 10,06% de H em massa e 6 sinais no espectro de RMN de ¹³C. Qual é D?",
    "alternativas": [
      "Cumeno (isopropilbenzeno)",
      "Propilbenzeno",
      "1,3,5-Trimetilbenzeno (mesitileno)",
      "1,2,4-Trimetilbenzeno",
      "4-Etiltolueno (1-etil-4-metilbenzeno)"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "A alquilação de Friedel-Crafts do benzeno com propeno em meio ácido passa pelo cátion isopropila (carbocátion secundário) e dá cumeno, C9H12, que tem 6 sinais de ¹³C.",
      "detalhada": "A resolução segue a solução oficial do problema 5 (item 5.3: D é o cumeno).\n\n**1) Fórmula:** 89,94/12,01 : 10,06/1,008 = 7,49 : 9,98 = 3 : 4, ou seja, fórmula mínima C3H4. Como o produto vem de benzeno (C6) com propeno (C3), D = C9H12 (massa molar 120,2 g/mol; %C = 108,1/120,2 = 89,94%).\n\n**2) Mecanismo:** em meio ácido, H⁺ adiciona-se ao propeno no carbono terminal e deixa o carbocátion secundário CH3–CH⁺–CH3 (regra de Markovnikov), muito mais estável que o primário. Esse cátion ataca o anel (substituição eletrofílica aromática) e forma C6H5–CH(CH3)2.\n\n**3) RMN de ¹³C:** o anel monossubstituído tem 4 sinais (ipso, 2 orto equivalentes, 2 meta equivalentes e para); a cadeia tem 2 (CH e os dois CH3 equivalentes). Total = **6**, como no enunciado. O propilbenzeno daria 7.",
      "alternativas": [
        "Correta. C9H12 (89,94% C). O próton se liga ao carbono terminal (CH2) do propeno (Markovnikov), e a carga fica no carbono central, formando o cátion isopropila; este substitui um H do anel. Sinais de ¹³C: C ipso, orto, meta, para, CH e CH3 = 6.",
        "Errada. Mesma fórmula C9H12, mas exigiria o cátion propila primário (instável). Teria 7 sinais de ¹³C (4 do anel e 3 da cadeia).",
        "Errada. Mesma fórmula, mas só tem 3 sinais de ¹³C pela simetria, e não se forma do propeno com o benzeno.",
        "Errada. Mesma fórmula, mas tem 9 sinais de ¹³C (nenhum carbono é equivalente) e não vem da alquilação do benzeno com propeno.",
        "Errada. Mesma fórmula, mas tem 7 sinais de ¹³C (4 do anel, CH2, CH3 do etil e CH3 do anel) e não é produto dessa alquilação."
      ],
      "dica": "Fórmula e % de C não distinguem isômeros: conte os sinais de ¹³C pela simetria e use Markovnikov para o carbocátion."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 3: 41ª IChO (2009), problema 5",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%203%20-%20icho%2041-45.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      },
      {
        "titulo": "PubChem: Cumene",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Cumene"
      }
    ]
  },
  {
    "id": "qui-1284",
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
      "ano": 2009,
      "orgao": "prova teórica (Cambridge), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 3 (ed. Anton Sirota, IUVENTA, Bratislava): 41ª IChO, Cambridge, 2009, problema 5. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Na alquilação do benzeno com propeno em meio ácido, além do cumeno (produto principal), formam-se dois produtos minoritários E e F, ambos de fórmula C12H18 (88,82% de C e 11,18% de H). O espectro de RMN de ¹³C de E tem 4 sinais e o de F tem 5 sinais. Quem são E e F?",
    "alternativas": [
      "E = 1,4-diisopropilbenzeno; F = 1,2-diisopropilbenzeno",
      "E = 1,2-diisopropilbenzeno; F = 1,4-diisopropilbenzeno",
      "E = 1,3-diisopropilbenzeno; F = 1,2-diisopropilbenzeno",
      "E = 1,4-diisopropilbenzeno; F = 1,3-diisopropilbenzeno",
      "E = 1,3-diisopropilbenzeno; F = 1,4-diisopropilbenzeno"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "C12H18 é diisopropilbenzeno; contando carbonos não equivalentes, o isômero para tem 4 sinais de ¹³C, o orto 5 e o meta 6.",
      "detalhada": "A resolução segue a solução oficial do problema 5 (item 5.3: E é o 1,4- e F o 1,2-diisopropilbenzeno).\n\n**1) Fórmula:** %C = 12×12,01/162,3 = 88,8%; logo E e F são C12H18, isto é, benzeno com dois grupos isopropila (C3H7).\n\n**2) Sinais de ¹³C por simetria** (cada grupo isopropila dá 2 sinais: CH e CH3):\n- **para (1,4):** os carbonos 1 e 4 são equivalentes e os quatro CH do anel também: 2 sinais de anel + 2 = **4**;\n- **orto (1,2):** C1/C2, C3/C6 e C4/C5 formam 3 sinais de anel + 2 = **5**;\n- **meta (1,3):** C1/C3, C2, C4/C6 e C5 formam 4 sinais de anel + 2 = **6**.\n\nPortanto E (4 sinais) é o para e F (5 sinais) é o orto.",
      "alternativas": [
        "Correta. O isômero para tem 4 sinais (2 de anel, CH e CH3) e o orto tem 5 (3 de anel, CH e CH3).",
        "Errada. Troca os isômeros: o orto tem 5 sinais de ¹³C e o para tem 4.",
        "Errada. O isômero meta tem 6 sinais (4 de anel, CH e CH3), e não 4.",
        "Errada. O meta tem 6 sinais de ¹³C, e não 5 (o de 5 sinais é o orto).",
        "Errada. O meta tem 6 sinais e o para tem 4; nenhum deles tem 5 sinais, e o par fica invertido."
      ],
      "dica": "Em benzenos dissubstituídos, conte pares de carbonos equivalentes por simetria: para < orto < meta em número de sinais."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 3: 41ª IChO (2009), problema 5",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%203%20-%20icho%2041-45.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1285",
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
      "ano": 2009,
      "orgao": "prova teórica (Cambridge), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 3 (ed. Anton Sirota, IUVENTA, Bratislava): 41ª IChO, Cambridge, 2009, problema 5. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "A reação do fenol com propanona (acetona) em HCl dá o composto H, usado para fabricar resinas epóxi. H tem fórmula C15H16O2 e seu espectro de RMN de ¹³C tem 6 sinais; um isômero minoritário I, formado na mesma reação, tem 12 sinais. A formação de H é regiosseletiva: o OH do fenol orienta o ataque do carbocátion às posições orto/para, e a posição para é preferida. Qual é H?",
    "alternativas": [
      "2,2′-(propano-2,2-di-il)difenol",
      "2,4′-(propano-2,2-di-il)difenol",
      "4-Isopropilfenol",
      "4,4′-Metilenodifenol (bisfenol F)",
      "4,4′-(Propano-2,2-di-il)difenol (bisfenol A)"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "Dois fenóis atacam, em para, o carbono carbonílico da acetona protonada e dão o bisfenol A, C15H16O2, com 6 sinais de ¹³C por ser simétrico.",
      "detalhada": "A resolução segue a solução oficial do problema 5 (itens 5.5 e 5.7: H é o bisfenol A; para I o oficial aponta o isômero 2,4′, e menciona o 3,4′ como também compatível com os dados).\n\n**1) Reação:** a acetona protonada (HCl) é eletrófila; o anel do fenol, ativado pelo OH, ataca em orto/para (o OH doa elétrons por ressonância). A posição para é preferida por ter menos impedimento estérico. Repetindo o processo com um segundo fenol, forma-se HO–C6H4–C(CH3)2–C6H4–OH.\n\n**2) Fórmula:** 2 C6H5OH + (CH3)2CO → C15H16O2 + H2O.\n\n**3) Contagem de sinais de ¹³C:** no 4,4′ (H), os dois anéis são equivalentes: 4 sinais de anel + C quaternário + CH3 (equivalentes) = **6 sinais**. No isômero 2,4′ (I), os anéis não são equivalentes: o anel orto-substituído dá 6 sinais e o para-substituído dá 4; somam-se o C quaternário e os CH3 (equivalentes, por serem enantiotópicos): 6 + 4 + 1 + 1 = **12 sinais**.",
      "alternativas": [
        "Errada. É C15H16O2, mas o ataque orto nos dois anéis daria só 8 sinais de ¹³C (6 de anel, C quaternário e CH3) e contraria a preferência pela posição para.",
        "Errada. É C15H16O2, mas é assimétrico (um anel orto, outro para) e tem 12 sinais de ¹³C: é o isômero minoritário I.",
        "Errada. É C9H12O, não C15H16O2: só um anel fenólico.",
        "Errada. É C13H12O2: o carbono central é CH2, sem os dois CH3 da acetona.",
        "Correta. Dois fenóis ligados em para ao carbono (CH3)2C da acetona: C15H16O2 e, pela simetria, 6 sinais de ¹³C (4 do anel, C quaternário e CH3)."
      ],
      "dica": "Fenol + eletrófilo: pense em orto/para, com preferência pela posição para; a simetria da molécula confirma pelo número de sinais de RMN."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 3: 41ª IChO (2009), problema 5",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%203%20-%20icho%2041-45.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      },
      {
        "titulo": "PubChem: Bisphenol A",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Bisphenol-A"
      }
    ]
  },
  {
    "id": "qui-1286",
    "materia": "quimica",
    "assunto": "Termoquímica",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 2010,
      "orgao": "prova teórica (Tóquio), problema 2, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 3 (ed. Anton Sirota, IUVENTA, Bratislava): 42ª IChO, Tóquio, 2010, problema 2. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O ciclo de Born-Haber do cloreto de sódio usa os dados seguintes, todos em kJ/mol: entalpia de formação do NaCl(s) = −411; sublimação do Na(s) = +109; ionização do Na(g) = +496; dissociação do Cl2(g) em 2 Cl(g) = +242 (por mol de Cl2); ganho de um elétron pelo Cl(g) = −349. Qual é a entalpia de formação da rede cristalina, isto é, Na⁺(g) + Cl⁻(g) → NaCl(s)?",
    "alternativas": [
      "−1486 kJ/mol",
      "−909 kJ/mol",
      "−788 kJ/mol",
      "−377 kJ/mol",
      "+788 kJ/mol"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "Pela lei de Hess, o NaCl(s) se separa em íons com 411 + 109 + 496 + 121 − 349 = 788 kJ/mol; a formação da rede é o inverso: −788 kJ/mol.",
      "detalhada": "A resolução segue a solução oficial do problema 2 (item 2.4), que dá −788 kJ/mol.\n\n**1) Caminho direto:** Na(s) + ½ Cl2(g) → NaCl(s), ΔfH = −411 kJ/mol.\n\n**2) Caminho pelos íons gasosos** (mesmo ponto de partida e chegada): Na(s) → Na(g) (+109); Na(g) → Na⁺(g) + e⁻ (+496); ½ Cl2 → Cl(g) (+121); Cl(g) + e⁻ → Cl⁻(g) (−349); Na⁺(g) + Cl⁻(g) → NaCl(s) (ΔH_rede).\n\n**3) Lei de Hess:** −411 = 109 + 496 + 121 − 349 + ΔH_rede, logo ΔH_rede = −411 − 377 = **−788 kJ/mol**.",
      "alternativas": [
        "Errada. Soma o ganho de elétron com sinal trocado (+349) em vez de −349.",
        "Errada. Usa os 242 kJ inteiros da dissociação do Cl2, mas só 1/2 mol de Cl2 (1 mol de Cl) é necessário por mol de NaCl: 242/2 = 121.",
        "Correta. 411 + 109 + 496 + 121 − 349 = 788 kJ/mol para separar o NaCl(s) em íons gasosos; a formação da rede é o processo inverso, −788 kJ/mol.",
        "Errada. Esquece a entalpia de formação do NaCl(s) no ciclo (−411).",
        "Errada. É a entalpia de dissociação do cristal em íons (etapa F do ciclo); a formação da rede é o processo inverso e é exotérmica."
      ],
      "dica": "No ciclo de Born-Haber, 1 mol de NaCl precisa de ½ mol de Cl2: use metade da energia de dissociação."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 3: 42ª IChO (2010), problema 2",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%203%20-%20icho%2041-45.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1287",
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
      "ano": 2010,
      "orgao": "prova teórica (Tóquio), problema 3, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 3 (ed. Anton Sirota, IUVENTA, Bratislava): 42ª IChO, Tóquio, 2010, problema 3. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "A demanda química de oxigênio (DQO) é a massa de O2 (em mg) que aceitaria o mesmo número de elétrons que o oxidante forte usa para oxidar as substâncias oxidáveis em 1 dm³ da amostra. Numa análise, 1,00 dm³ de água ácida, livre de cloreto, recebeu 1,00×10⁻¹ dm³ de KMnO4 5,00×10⁻³ mol/dm³ e foi aquecida; depois recebeu 1,00×10⁻¹ dm³ de oxalato de sódio (Na2C2O4) 1,25×10⁻² mol/dm³. O oxalato que sobrou foi titulado com 3,00×10⁻² dm³ do mesmo KMnO4. As semirreações são MnO4⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H2O, C2O4²⁻ → 2 CO2 + 2 e⁻ e O2 + 4 H⁺ + 4 e⁻ → 2 H2O. Qual é a DQO da amostra (M(O2) = 32 g/mol)?",
    "alternativas": [
      "3,00 mg/dm³",
      "6,00 mg/dm³",
      "12,0 mg/dm³",
      "16,0 mg/dm³",
      "24,0 mg/dm³"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "A matéria oxidável cede 7,5×10⁻⁴ mol de elétrons; como 1 mol de O2 aceita 4 mol de e⁻, a DQO é 7,5×10⁻⁴ × 32/4 g = 6,0 mg por dm³.",
      "detalhada": "A resolução segue a solução oficial do problema 3 (item 3.4), que dá 6,00 mg/dm³.\n\n**1) Elétrons aceitos pelo permanganato:** volume total = 0,100 + 0,030 = 0,130 dm³; n(MnO4⁻) = 0,130 × 5,00×10⁻³ = 6,5×10⁻⁴ mol; × 5 e⁻ = **3,25×10⁻³ mol de e⁻**.\n\n**2) Elétrons doados pelo oxalato:** n = 0,100 × 1,25×10⁻² = 1,25×10⁻³ mol; × 2 e⁻ = **2,50×10⁻³ mol de e⁻**.\n\n**3) Elétrons doados pela matéria oxidável:** 3,25×10⁻³ − 2,50×10⁻³ = **7,5×10⁻⁴ mol de e⁻** (o permanganato aceita o que o oxalato e a amostra doam).\n\n**4) Equivalência em O2:** 4 mol de e⁻ por mol de O2: n(O2) = 7,5×10⁻⁴/4 = 1,875×10⁻⁴ mol; m = 1,875×10⁻⁴ × 32 g = 6,0×10⁻³ g = 6,0 mg em 1,00 dm³ → **6,00 mg/dm³**.",
      "alternativas": [
        "Errada. Divide os 7,5×10⁻⁴ mol de e⁻ por 8 em vez de por 4; cada O2 recebe 4 e⁻.",
        "Correta. Elétrons aceitos pelo MnO4⁻: 5 × 5,00×10⁻³ × 0,130 = 3,25×10⁻³ mol; doados pelo oxalato: 2 × 1,25×10⁻³ = 2,50×10⁻³ mol; sobram 7,5×10⁻⁴ mol de e⁻ para a matéria oxidável; ÷4 × 32 g/mol = 6,0 mg.",
        "Errada. Admite que cada O2 aceita 2 e⁻ (como se fosse meia-reação para H2O2); o O2 recebe 4 e⁻ para formar 2 H2O.",
        "Errada. Conta só 1 e⁻ por oxalato (1,25×10⁻³ mol); cada C2O4²⁻ perde 2 e⁻ ao virar 2 CO2.",
        "Errada. Converte 7,5×10⁻⁴ mol de e⁻ em massa de O2 sem dividir por 4 (usa 32 g por mol de elétrons em vez de 8 g)."
      ],
      "dica": "Balanço de elétrons: o que o oxidante forte aceitou = o que o padrão (oxalato) doou + o que a matéria orgânica doou."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 3: 42ª IChO (2010), problema 3",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%203%20-%20icho%2041-45.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1288",
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
      "ano": 2010,
      "orgao": "prova teórica (Tóquio), problema 6, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 3 (ed. Anton Sirota, IUVENTA, Bratislava): 42ª IChO, Tóquio, 2010, problema 6. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Considere todos os isômeros constitucionais de fórmula C8H10O que contêm um anel benzênico. Quantos deles NÃO liberam gás hidrogênio quando se adiciona um pedaço de sódio metálico ao composto puro (ou à solução concentrada em solvente aprótico, se for sólido)?",
    "alternativas": [
      "3",
      "5",
      "9",
      "14",
      "19"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Só quem tem O–H libera H2 com sódio. Dos 19 isômeros C8H10O com anel benzênico, 14 têm O–H (5 álcoois e 9 fenóis) e 5 são éteres.",
      "detalhada": "A resolução segue a solução oficial do problema 6 (item 6.1: a lista tem 5 estruturas, todas éteres).\n\n**1) Quem libera H2 com sódio:** compostos com hidrogênio ligado a oxigênio (álcoois e fenóis) reagem: 2 R–OH + 2 Na → 2 R–ONa + H2. Éteres não têm O–H e não reagem.\n\n**2) Contagem dos isômeros C8H10O com anel benzênico** (grau de insaturação 4, todo ele no anel):\n- álcoois: 2-feniletanol, 1-feniletanol e os 3 metilbenzil-álcoois = 5;\n- fenóis: 3 etilfenóis e 6 dimetilfenóis = 9;\n- éteres: éter benzil metílico (C6H5–CH2–O–CH3), etoxibenzeno (C6H5–O–C2H5) e o-, m-, p-metoxitolueno (CH3–C6H4–O–CH3) = **5**.\n\nTotal de 19; os que **não** reagem são os 5 éteres.",
      "alternativas": [
        "Errada. Conta só os três metilanisóis (o-, m- e p-metoxitolueno) e esquece o etoxibenzeno e o éter benzil metílico.",
        "Correta. São os cinco éteres: éter benzil metílico, etoxibenzeno e os o-, m- e p-metoxitolueno. Sem O–H, não liberam H2 com sódio.",
        "Errada. É o número de fenóis (3 etilfenóis e 6 dimetilfenóis), que têm O–H e reagem com sódio.",
        "Errada. É o número de isômeros com grupo O–H (5 álcoois e 9 fenóis), justamente os que liberam H2.",
        "Errada. É o número total de isômeros C8H10O com anel benzênico; inclui os 14 que reagem com sódio."
      ],
      "dica": "Teste com sódio = presença de hidrogênio ácido (O–H). Para contar isômeros, separe por função: álcoois, fenóis e éteres."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 3: 42ª IChO (2010), problema 6",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%203%20-%20icho%2041-45.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1289",
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
      "ano": 2010,
      "orgao": "prova teórica (Tóquio), problema 8, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 3 (ed. Anton Sirota, IUVENTA, Bratislava): 42ª IChO, Tóquio, 2010, problema 8. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Uma amostra de náilon-6,6 foi preparada por policondensação de quantidades equimolares de ácido adípico (hexanodioico) e hexano-1,6-diamina. As cadeias têm a forma HO–[CO(CH2)4CO–NH(CH2)6NH]n–H. A unidade entre colchetes (um ácido mais uma diamina, menos duas moléculas de água) tem massa 226,36 g/mol, e os grupos terminais H e OH somam 18,02 g/mol. A massa molar média da amostra é 5507,25 g/mol. O grau de polimerização médio X conta o número de monômeros por cadeia (X = 2n). Qual é X?",
    "alternativas": [
      "24,25",
      "24,33",
      "48,50",
      "48,66",
      "97,00"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "Descontados os grupos terminais, 5489,23 g/mol correspondem a n = 24,25 unidades repetidas, ou seja, X = 2n = 48,50 monômeros.",
      "detalhada": "A resolução segue a solução oficial do problema 8 (item 8.2), que dá X = 48,50.\n\n**1) Massa só da parte repetida:** 5507,25 − 18,02 = 5489,23 g/mol.\n\n**2) Número de unidades repetidas:** n = 5489,23 / 226,36 = **24,25**.\n\n**3) Grau de polimerização:** cada unidade [CO(CH2)4CO–NH(CH2)6NH] vem de 2 monômeros, logo X = 2n = **48,50**. Equivalentemente, a massa média por monômero é 226,36/2 = 113,18 g/mol e X = 5489,23/113,18 = 48,50.",
      "alternativas": [
        "Errada. É o valor de n (número de unidades repetidas), e não de X = 2n (número de monômeros).",
        "Errada. Dividiu 5507,25 por 226,36 sem descontar os grupos terminais, e ainda obteve n em vez de X.",
        "Correta. n = (5507,25 − 18,02)/226,36 = 24,25 e X = 2n = 48,50.",
        "Errada. Não desconta a massa dos grupos terminais (18,02 g/mol): 5507,25/113,18 = 48,66.",
        "Errada. Dobra X duas vezes (usa 4n); cada unidade repetida contém só 2 monômeros."
      ],
      "dica": "Em policondensação, subtraia os grupos terminais antes de dividir pela massa da unidade repetida, e atenção a se a unidade tem 1 ou 2 monômeros."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 3: 42ª IChO (2010), problema 8",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%203%20-%20icho%2041-45.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1290",
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
      "ano": 2010,
      "orgao": "prova teórica (Tóquio), problema 8, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 3 (ed. Anton Sirota, IUVENTA, Bratislava): 42ª IChO, Tóquio, 2010, problema 8. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Um oligoéster é preparado a partir de 36,54 g de ácido adípico (hexanodioico, 146,16 g/mol) e de W gramas de butano-1,4-diol (90,14 g/mol). A reação vai até o consumo total dos grupos –COOH (grau de reação p → 1) e o oligoéster obtido tem grau de polimerização médio X = 11,00 (X = número total de monômeros por cadeia), com unidades de butano-1,4-diol nas duas extremidades. Qual é o valor de W?",
    "alternativas": [
      "27,0 g",
      "18,8 g",
      "22,5 g",
      "24,8 g",
      "31,5 g"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "Com X = 11 e diol nas duas pontas, a cadeia tem 5 adipatos e 6 dióis; n(diol) = 0,2500 × 6/5 = 0,3000 mol e W = 0,3000 × 90,14 ≈ 27,0 g.",
      "detalhada": "A resolução segue a solução oficial do problema 8 (item 8.5), que dá W = 27,0 g.\n\n**1) Composição da cadeia:** X = 11 monômeros, com diol em ambas as extremidades: HO(CH2)4O–[CO(CH2)4CO–O(CH2)4O]5–H, ou seja, **5 adipatos e 6 dióis**.\n\n**2) Como p → 1:** todo –COOH reagiu; a razão molar alimentada é igual à razão na cadeia: n(diol)/n(ácido) = 6/5.\n\n**3) Contas:** n(ácido) = 36,54 g / 146,16 g/mol = 0,2500 mol; n(diol) = 0,2500 × 6/5 = 0,3000 mol; W = 0,3000 × 90,14 = **27,0 g**.\n\n(Conferência com a equação de Carothers modificada, X = (1 + r)/(1 − r) para p = 1: r = 0,2500/0,3000 = 0,8333 → X = 1,8333/0,1667 = 11,0.)",
      "alternativas": [
        "Correta. X = 11 corresponde a 5 unidades de adipato e 6 de diol (diol nas duas pontas). n(ácido) = 0,2500 mol, n(diol) = 0,2500 × 6/5 = 0,3000 mol, m = 0,3000 × 90,14 ≈ 27,0 g.",
        "Errada. Usa a razão invertida (5 diol para 6 ácido); com diol nas duas pontas há mais diol que ácido.",
        "Errada. Usa quantidades iguais de diol e ácido (0,2500 mol × 90,14 g/mol = 22,5 g); com r = 1 a equação de Carothers dá X infinito no limite p → 1, e não X = 11.",
        "Errada. Usa a razão 11/10 (X/(X − 1)) como razão diol/ácido; o oligoéster com X = 11 tem 6 diol e 5 ácido, razão 6/5.",
        "Errada. Usa a razão 7/5 (7 diol para 5 ácido): as 12 moléculas iniciais menos as 10 ligações éster dão 2 cadeias, isto é, X = 6, e não 11."
      ],
      "dica": "Em cadeias terminadas por diol, há um diol a mais que ácidos: monômeros X = 2k + 1 dão k ácidos e k + 1 dióis."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 3: 42ª IChO (2010), problema 8",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%203%20-%20icho%2041-45.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1291",
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
      "ano": 2011,
      "orgao": "prova teórica (Ancara), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 3 (ed. Anton Sirota, IUVENTA, Bratislava): 43ª IChO, Ancara, 2011, problema 1. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "A 820 °C, a reação 2 NO(g) + H2(g) → N2O(g) + H2O(g) teve as seguintes velocidades iniciais de formação de N2O: experimento 1, p(NO) = 120,0 torr e p(H2) = 60,0 torr, v = 8,66×10⁻² torr/s; experimento 2, p(NO) = 60,0 torr e p(H2) = 60,0 torr, v = 2,17×10⁻² torr/s; experimento 3, p(NO) = 60,0 torr e p(H2) = 180,0 torr, v = 6,62×10⁻² torr/s. Qual é a lei de velocidade experimental e o valor de k (pressões em torr, tempo em s)?",
    "alternativas": [
      "v = k·p(NO)²·p(H2)²; k = 1,7×10⁻⁹ torr⁻³ s⁻¹",
      "v = k·p(NO)²·p(H2); k = 1,0×10⁻⁷ torr⁻² s⁻¹",
      "v = k·p(NO)·p(H2)²; k = 2,0×10⁻⁷ torr⁻² s⁻¹",
      "v = k·p(NO)²; k = 6,0×10⁻⁶ torr⁻¹ s⁻¹",
      "v = k·p(NO)·p(H2); k = 1,2×10⁻⁵ torr⁻¹ s⁻¹"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Dobrar p(NO) quadruplica a velocidade (ordem 2) e triplicar p(H2) triplica (ordem 1): v = k p(NO)² p(H2), com k = 1,0×10⁻⁷ torr⁻² s⁻¹.",
      "detalhada": "A resolução segue a solução oficial do problema 1 (item 1.1), que dá v = k p(NO)² p(H2) e k = 1,00×10⁻⁷ torr⁻² s⁻¹.\n\n**1) Ordem em NO** (experimentos 1 e 2, p(H2) fixo): v1/v2 = 8,66×10⁻²/2,17×10⁻² = 3,99 = 2ᵃ → a = 2.\n\n**2) Ordem em H2** (experimentos 3 e 2, p(NO) fixo): v3/v2 = 6,62×10⁻²/2,17×10⁻² = 3,05 = 3ᵇ → b = 1.\n\n**3) Constante:** k = v1/(p(NO)² p(H2)) = 8,66×10⁻² / (120,0² × 60,0) = **1,0×10⁻⁷ torr⁻² s⁻¹**.",
      "alternativas": [
        "Errada. A ordem 2 em H2 prevê v3/v2 = 9, mas o experimento mostra 6,62/2,17 ≈ 3 (ordem 1 em H2).",
        "Correta. v1/v2 ≈ 4 ao dobrar p(NO) (ordem 2); v3/v2 ≈ 3 ao triplicar p(H2) (ordem 1); k = 8,66×10⁻²/(120² × 60) = 1,0×10⁻⁷ torr⁻² s⁻¹.",
        "Errada. Inverte as ordens: dobrar p(NO) quadruplica a velocidade (ordem 2, e não 1) e triplicar p(H2) triplica (ordem 1, e não 2).",
        "Errada. Ignora o H2, mas o experimento 3 mostra que triplicar p(H2) triplica a velocidade.",
        "Errada. Ordem 1 em NO prevê v1/v2 = 2, mas o experimento mostra ≈ 4."
      ],
      "dica": "Compare dois experimentos que mudam um só reagente: a razão das velocidades é a razão das pressões elevada à ordem."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 3: 43ª IChO (2011), problema 1",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%203%20-%20icho%2041-45.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1292",
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
      "ano": 2011,
      "orgao": "prova teórica (Ancara), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 3 (ed. Anton Sirota, IUVENTA, Bratislava): 43ª IChO, Ancara, 2011, problema 5. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O difluoreto de dinitrogênio, N2F2, existe nas formas trans e cis. Com um pouco de SbF5 como catalisador, o trans-N2F2 atinge o equilíbrio trans ⇌ cis a 25 °C. As entalpias padrão de formação são 67,31 kJ/mol (trans) e 62,03 kJ/mol (cis), e as entropias padrão a 25 °C são 262,10 e 266,50 J K⁻¹ mol⁻¹, respectivamente. Qual é a razão [cis]/[trans] no equilíbrio a 25 °C (R = 8,314 J K⁻¹ mol⁻¹)?",
    "alternativas": [
      "14,3",
      "0,070",
      "4,96",
      "8,4",
      "7,3×10²"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "ΔG = ΔH − TΔS = −5,28 − 298 × 0,00440 = −6,59 kJ/mol, então K = e^(−ΔG/RT) = 14,3 favorece o cis.",
      "detalhada": "A resolução segue a solução oficial do problema 5 (item 5.4), que dá K = 14,3.\n\n**1) Variação da reação trans → cis:** ΔH = 62,03 − 67,31 = −5,28 kJ/mol; ΔS = 266,50 − 262,10 = +4,40 J K⁻¹ mol⁻¹.\n\n**2) Energia livre a 298 K:** ΔG = −5280 − 298 × 4,40 = −6591 J/mol.\n\n**3) Constante:** K = [cis]/[trans] = exp(−ΔG/RT) = exp(6591/(8,314 × 298)) = exp(2,66) = **14,3**.",
      "alternativas": [
        "Correta. ΔH = −5,28 kJ/mol, ΔS = +4,40 J K⁻¹ mol⁻¹, ΔG = −5,28 − 298 × 0,00440 = −6,59 kJ/mol; K = e^(6590/(8,314 × 298)) = 14,3.",
        "Errada. É 1/K: razão [trans]/[cis]. A constante pedida é [cis]/[trans], e o cis é o mais estável (ΔG < 0).",
        "Errada. Usa ΔG = ΔH + TΔS (sinal errado no termo da entropia), que dá −3,97 kJ/mol.",
        "Errada. Ignora o termo da entropia (ΔG = ΔH = −5,28 kJ/mol).",
        "Errada. Calcula ln K = 6,59 (esquece de dividir ΔG por RT) e toma K = e^6,59."
      ],
      "dica": "Cuide das unidades: ΔH em kJ e ΔS em J. Converta antes de somar ΔH − TΔS."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 3: 43ª IChO (2011), problema 5",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%203%20-%20icho%2041-45.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1293",
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
      "ano": 2011,
      "orgao": "prova teórica (Ancara), problema 6, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 3 (ed. Anton Sirota, IUVENTA, Bratislava): 43ª IChO, Ancara, 2011, problema 6. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Na lixiviação do ouro com tiossulfato de amônio, o ouro(I) forma os complexos [Au(NH3)2]⁺ (Kf = 1,00×10²⁶) e [Au(S2O3)2]³⁻ (Kf = 1,00×10²⁸). Numa solução de lixiviação em equilíbrio, [S2O3²⁻] = [NH3] = 0,100 mol/dm³ e a concentração total de ouro(I) é 5,50×10⁻⁵ mol/dm³. Qual porcentagem do ouro(I) está na forma de complexo de tiossulfato?",
    "alternativas": [
      "99,0%",
      "1,0%",
      "50%",
      "90,9%",
      "99,99%"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "A troca de ligantes tem K = Kf2/Kf1 = 100; com [NH3] = [S2O3²⁻], a razão [tiossulfato]/[amin] = 100 e a fração do complexo de tiossulfato é 100/101 ≈ 99,0%.",
      "detalhada": "A resolução segue a solução oficial do problema 6 (item 6.5), que dá 99,0%.\n\n**1) Reação de troca:** [Au(NH3)2]⁺ + 2 S2O3²⁻ ⇌ [Au(S2O3)2]³⁻ + 2 NH3.\n\n**2) Constante:** K = Kf2/Kf1 = 1,00×10²⁸/1,00×10²⁶ = 1,00×10².\n\n**3) Razão entre complexos:** K = ([Au(S2O3)2]³⁻ [NH3]²)/([Au(NH3)2]⁺ [S2O3²⁻]²). Como [NH3] = [S2O3²⁻] = 0,100, os fatores se cancelam e [Au(S2O3)2]³⁻/[Au(NH3)2]⁺ = 100.\n\n**4) Porcentagem:** com x = [Au(S2O3)2]³⁻ e 5,50×10⁻⁵ − x = [Au(NH3)2]⁺, x = 5,445×10⁻⁵ mol/dm³, isto é, 5,445/5,50 = **99,0%**.",
      "alternativas": [
        "Correta. Na troca [Au(NH3)2]⁺ + 2 S2O3²⁻ ⇌ [Au(S2O3)2]³⁻ + 2 NH3, K = Kf2/Kf1 = 1,00×10²; com [S2O3²⁻] = [NH3], a razão tiossulfato/amin é 100 e a fração é 100/101 = 99,0%.",
        "Errada. É a fração do complexo amin; inverteu a razão de Kf (usou Kf1/Kf2 = 10⁻²).",
        "Errada. Supõe que os dois complexos são igualmente estáveis; mas Kf2 é 100 vezes maior que Kf1.",
        "Errada. Corresponde a razão 10 (tira a raiz quadrada de K = 10²); como as concentrações dos ligantes são iguais, a razão entre os complexos é o próprio K = 100.",
        "Errada. Corresponde a razão 10⁴ (erro de dois expoentes na divisão Kf2/Kf1)."
      ],
      "dica": "Para competição entre dois complexos com o mesmo metal, a constante da troca é a razão das constantes de formação."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 3: 43ª IChO (2011), problema 6",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%203%20-%20icho%2041-45.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1294",
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
      "ano": 2012,
      "orgao": "prova teórica (Washington), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 3 (ed. Anton Sirota, IUVENTA, Bratislava): 44ª IChO, Washington, 2012, problema 1. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Estime a entalpia de dissociação da ligação simples B–B no B2Cl4(g) (Cl2B–BCl2) a partir de: entalpia de dissociação da ligação B–Cl = 443 kJ/mol; da ligação Cl–Cl = 242 kJ/mol; ΔfH°(BCl3, g) = −403 kJ/mol; ΔfH°(B2Cl4, g) = −489 kJ/mol. Use um ciclo termoquímico para a reação 2 BCl3(g) → B2Cl4(g) + Cl2(g).",
    "alternativas": [
      "317 kJ/mol",
      "327 kJ/mol",
      "559 kJ/mol",
      "569 kJ/mol",
      "1697 kJ/mol"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "ΔrH = +317 kJ/mol pelas entalpias de formação; em termos de ligações, ΔrH = 2 × 443 − 242 − E(B–B), logo E(B–B) = 327 kJ/mol.",
      "detalhada": "A resolução segue a solução oficial do problema 1 (item 1.4), que dá 327 kJ/mol.\n\n**1) Entalpia da reação 2 BCl3 → B2Cl4 + Cl2:** ΔrH = ΔfH(B2Cl4) + ΔfH(Cl2) − 2 ΔfH(BCl3) = −489 + 0 − 2(−403) = **+317 kJ/mol**.\n\n**2) Em termos de ligações:** nos reagentes há 6 B–Cl; nos produtos há 4 B–Cl, 1 B–B e 1 Cl–Cl. Rompidas − formadas: ΔrH = 6(443) − [4(443) + E(B–B) + 242] = 2(443) − 242 − E(B–B) = 644 − E(B–B).\n\n**3) Igualando:** 644 − E(B–B) = 317 → **E(B–B) = 327 kJ/mol**.",
      "alternativas": [
        "Errada. É a entalpia da reação 2 BCl3 → B2Cl4 + Cl2 (ΔfH dos produtos − ΔfH dos reagentes = −489 + 806); ainda falta descontar as ligações B–Cl e Cl–Cl.",
        "Correta. Rompem-se 6 B–Cl (6 × 443) e formam-se 4 B–Cl, 1 B–B e 1 Cl–Cl: 317 = 2 × 443 − 242 − E(B–B), então E(B–B) = 327 kJ/mol.",
        "Errada. Ignora o balanço das ligações B–Cl e faz E(B–B) = ΔrH + E(Cl–Cl) = 317 + 242 = 559 kJ/mol.",
        "Errada. Considera só 2 ligações B–Cl a mais rompidas e não desconta a ligação Cl–Cl formada (2 × 443 − 317).",
        "Errada. Esquece de cancelar as 4 ligações B–Cl que existem nos reagentes e nos produtos (4 × 443 + 242 − 317)."
      ],
      "dica": "Entalpia de reação pelas ligações = soma do que se rompe menos a soma do que se forma; cancele as ligações que aparecem dos dois lados."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 3: 44ª IChO (2012), problema 1",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%203%20-%20icho%2041-45.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1295",
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
      "ano": 2012,
      "orgao": "prova teórica (Washington), problema 2, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 3 (ed. Anton Sirota, IUVENTA, Bratislava): 44ª IChO, Washington, 2012, problema 2. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "A substituição de um ligante Cl⁻ num complexo quadrado-plano de platina(II) por piridina (py), em metanol a 25 °C, com [py] muito maior que a de platina, segue v = k_obs[complexo], em que k_obs = k_S + k_Y[py] (k_S: caminho assistido pelo solvente; k_Y: caminho direto pela piridina). Os valores medidos foram: [py] = 0,122 mol/dm³, k_obs = 7,20×10⁻⁴ s⁻¹; [py] = 0,061 mol/dm³, k_obs = 3,45×10⁻⁴ s⁻¹; [py] = 0,030 mol/dm³, k_obs = 1,75×10⁻⁴ s⁻¹. Qual conclusão os dados sustentam?",
    "alternativas": [
      "k_Y ≈ 6×10⁻³ dm³ mol⁻¹ s⁻¹ e k_S ≈ 7×10⁻⁴ s⁻¹: o caminho assistido pelo solvente é o principal.",
      "k_Y ≈ 6×10⁻⁴ dm³ mol⁻¹ s⁻¹ e k_S ≈ 0: o caminho direto é o principal.",
      "k_Y ≈ 1×10⁻⁵ dm³ mol⁻¹ s⁻¹ e k_S ≈ 0: o caminho direto é o principal.",
      "Os dados não permitem separar k_S e k_Y, pois só há três pontos.",
      "k_Y ≈ 6×10⁻³ dm³ mol⁻¹ s⁻¹ e k_S ≈ 0: o caminho direto (via piridina) é o principal."
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "k_obs/[py] é praticamente constante (≈ 5,9×10⁻³ dm³ mol⁻¹ s⁻¹): a reta passa pela origem, logo k_S ≈ 0 e a reação ocorre pelo caminho direto com k_Y ≈ 6×10⁻³.",
      "detalhada": "A resolução segue a solução oficial do problema 2 (itens 2.3 e 2.4), que dá k_Y = 5,8×10⁻³ dm³ mol⁻¹ s⁻¹, k_S ≈ 0 e predomínio do caminho direto.\n\n**1) Modelo:** k_obs = k_S + k_Y[py] é uma reta em [py]: a inclinação é k_Y e o intercepto é k_S.\n\n**2) Inclinação:** entre os pontos extremos, k_Y = (7,20×10⁻⁴ − 1,75×10⁻⁴)/(0,122 − 0,030) = 5,9×10⁻³ dm³ mol⁻¹ s⁻¹ (a resolução oficial lê 5,8×10⁻³ no gráfico).\n\n**3) Intercepto:** k_S = k_obs − k_Y[py] ≈ 7,20×10⁻⁴ − 5,9×10⁻³ × 0,122 ≈ 0.\n\n**4) Conclusão:** k_obs/[py] vale 5,9×10⁻³, 5,7×10⁻³ e 5,8×10⁻³ para os três pontos, quase constante. Com k_S ≈ 0, a substituição ocorre pelo caminho direto (k_Y).",
      "alternativas": [
        "Errada. A reta k_obs × [py] passa praticamente pela origem; k_S ≈ 0 e o termo k_Y[py] responde por quase todo o k_obs.",
        "Errada. A inclinação é (7,20 − 1,75)×10⁻⁴/(0,122 − 0,030) ≈ 5,9×10⁻³, e não 10⁻⁴: erra uma ordem de grandeza.",
        "Errada. Esse k_Y é cerca de 600 vezes menor que a inclinação da reta dos dados.",
        "Errada. Dois pontos já definem uma reta, e os três estão quase alinhados (o ponto do meio desvia cerca de 5% da reta): a inclinação e o intercepto se determinam, e o intercepto é praticamente zero.",
        "Correta. k_obs é proporcional a [py] (k_obs/[py] ≈ 5,9×10⁻³ para os três pontos); a inclinação é k_Y ≈ 6×10⁻³ e o intercepto k_S ≈ 0."
      ],
      "dica": "Se k_obs/[nucleófilo] é constante, o termo independente do nucleófilo (k_S) é desprezível."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 3: 44ª IChO (2012), problema 2",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%203%20-%20icho%2041-45.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1296",
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
      "ano": 2012,
      "orgao": "prova teórica (Washington), problema 3, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 3 (ed. Anton Sirota, IUVENTA, Bratislava): 44ª IChO, Washington, 2012, problema 3. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Em água, o íon tetratiomolibdato se hidrolisa em etapas: MoS4²⁻ + H2O ⇌ MoOS3²⁻ + H2S (K1 = 1,3×10⁻⁵); MoOS3²⁻ + H2O ⇌ MoO2S2²⁻ + H2S (K2 = 1,0×10⁻⁵); MoO2S2²⁻ + H2O ⇌ MoO3S²⁻ + H2S (K3 = 1,6×10⁻⁵); MoO3S²⁻ + H2O ⇌ MoO4²⁻ + H2S (K4 = 6,5×10⁻⁶). No equilíbrio, [MoO4²⁻] = 1×10⁻⁷ mol/dm³ e [H2S] = 1×10⁻⁶ mol/dm³. Qual é a concentração de MoS4²⁻?",
    "alternativas": [
      "1,0×10⁻³¹ mol/dm³",
      "1,4×10⁻²⁰ mol/dm³",
      "7,4×10⁻¹² mol/dm³",
      "7,7×10⁻⁹ mol/dm³",
      "7×10⁶ mol/dm³"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "O produto dos quatro K dá K = [MoO4²⁻][H2S]⁴/[MoS4²⁻] = 1,35×10⁻²⁰, e [MoS4²⁻] = 1×10⁻⁷ × (1×10⁻⁶)⁴ / 1,35×10⁻²⁰ ≈ 7,4×10⁻¹² mol/dm³.",
      "detalhada": "A resolução segue a solução oficial do problema 3 (item 3.1), que dá 7×10⁻¹² mol/dm³.\n\n**1) Soma das reações:** somando as quatro hidrólises, MoS4²⁻ + 4 H2O ⇌ MoO4²⁻ + 4 H2S, cuja constante é o produto K1K2K3K4 = 1,3×10⁻⁵ × 1,0×10⁻⁵ × 1,6×10⁻⁵ × 6,5×10⁻⁶ = 1,35×10⁻²⁰.\n\n**2) Expressão:** K = [MoO4²⁻][H2S]⁴ / [MoS4²⁻].\n\n**3) Isolando:** [MoS4²⁻] = (1×10⁻⁷)(1×10⁻⁶)⁴ / 1,35×10⁻²⁰ = 1×10⁻³¹ / 1,35×10⁻²⁰ = **7,4×10⁻¹² mol/dm³**.",
      "alternativas": [
        "Errada. É o numerador [MoO4²⁻][H2S]⁴ sem dividir pelo produto das constantes (K1K2K3K4 = 1,35×10⁻²⁰).",
        "Errada. É o produto K1K2K3K4 e não a concentração; falta substituir os valores de [MoO4²⁻] e [H2S].",
        "Correta. Multiplicando as quatro constantes, [MoO4²⁻][H2S]⁴/[MoS4²⁻] = 1,35×10⁻²⁰; [MoS4²⁻] = 1×10⁻⁷ × (10⁻⁶)⁴ / 1,35×10⁻²⁰ = 7,4×10⁻¹².",
        "Errada. Usa só a primeira etapa e a primeira potência de H2S ([MoO4²⁻][H2S]/K1); a cadeia completa tem quatro H2S.",
        "Errada. Usa só uma potência de [H2S] com a constante global (1×10⁻⁷ × 1×10⁻⁶ / 1,35×10⁻²⁰); são quatro H2S, e o resultado (milhões de mol/dm³) é fisicamente impossível."
      ],
      "dica": "Somar reações em sequência multiplica as constantes de equilíbrio: a constante global é o produto das etapas."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 3: 44ª IChO (2012), problema 3",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%203%20-%20icho%2041-45.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1297",
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
      "ano": 2013,
      "orgao": "prova teórica (Moscou), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 3 (ed. Anton Sirota, IUVENTA, Bratislava): 45ª IChO, Moscou, 2013, problema 1. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Os hidratos de metano, CH4·nH2O, ocorrem no fundo dos oceanos. A decomposição de 1,00 g de um hidrato de composição fixa a 25 °C e 101,3 kPa libera 205 cm³ de metano. Qual é o valor de n (não necessariamente inteiro)? Use R = 8,314 J K⁻¹ mol⁻¹, M(H2O) = 18,0 g/mol e M(CH4) = 16,0 g/mol.",
    "alternativas": [
      "2,9",
      "5,2",
      "5,7",
      "6,6",
      "11,5"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "Os 205 cm³ de CH4 são 8,38×10⁻³ mol (0,134 g); a água é o resto: 0,866 g = 4,81×10⁻² mol, e n = 4,81×10⁻²/8,38×10⁻³ ≈ 5,7.",
      "detalhada": "A resolução segue a solução oficial do problema 1 (item 1.1), que dá CH4·5,75 H2O.\n\n**1) Mols de metano (gás ideal):** n = pV/RT = (101 300 Pa × 205×10⁻⁶ m³)/(8,314 × 298,15) = **8,38×10⁻³ mol**, ou seja, 0,134 g de CH4.\n\n**2) Água no hidrato:** 1,00 − 0,134 = 0,866 g; n(H2O) = 0,866/18,0 = **4,81×10⁻² mol**.\n\n**3) Razão:** n = 4,81×10⁻²/8,38×10⁻³ = **5,7** (a solução oficial apresenta 5,75 por arredondamento das etapas); o hidrato real é próximo de CH4·6 H2O.",
      "alternativas": [
        "Errada. É cerca de metade do valor correto: conta o dobro de moléculas de metano por hidrato.",
        "Errada. Usa o volume molar de 22,4 dm³/mol (CNTP, 0 °C) em vez do volume a 25 °C (24,5 dm³/mol).",
        "Correta. n(CH4) = pV/RT = 8,38×10⁻³ mol; m(CH4) = 0,134 g; m(H2O) = 0,866 g = 4,81×10⁻² mol; n = 4,81×10⁻²/8,38×10⁻³ ≈ 5,7 (a solução oficial arredonda para 5,75).",
        "Errada. Atribui toda a massa de 1,00 g à água, esquecendo que 0,134 g são de metano.",
        "Errada. É o dobro do valor correto: equivale a contar só metade dos mols de metano."
      ],
      "dica": "Subtraia a massa do gás liberado antes de calcular os mols de água e use o volume molar na temperatura da questão."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 3: 45ª IChO (2013), problema 1",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%203%20-%20icho%2041-45.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1298",
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
      "ano": 2013,
      "orgao": "prova teórica (Moscou), problema 3, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 3 (ed. Anton Sirota, IUVENTA, Bratislava): 45ª IChO, Moscou, 2013, problema 3. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Na redução de Meerwein-Schmidt-Ponndorf-Verley, a ciclo-hexanona é reduzida por propan-2-ol (isopropanol), em solução ideal e a 298 K: C6H10O + C3H8O ⇌ C6H12O (ciclo-hexanol) + C3H6O (acetona). São dados (líquidos, 298 K) ΔfH° em kJ/mol e S° em J K⁻¹ mol⁻¹: acetona −248,4 e 200,4; isopropanol −318,1 e 180,6; ciclo-hexanona −271,2 e 229,0; ciclo-hexanol −348,2 e 203,4. Qual é a razão mínima entre a massa de isopropanol e a de ciclo-hexanona (M = 60,1 e 98,1 g/mol) para o equilíbrio render 99% de ciclo-hexanol, sem produtos no início? Use R = 8,314 J K⁻¹ mol⁻¹.",
    "alternativas": [
      "0,61",
      "6,3",
      "6,9",
      "11,3",
      "18,5"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "K = e^(−ΔG°/RT) ≈ 9,5 (ΔG° = −5,6 kJ/mol); para 99% de rendimento são necessários 11,3 mol de isopropanol por mol de cetona, isto é, 6,9 g de isopropanol por grama de ciclo-hexanona.",
      "detalhada": "A resolução segue a solução oficial do problema 3 (item 3.1a), que dá razão de massas ≈ 6,9.\n\n**1) Termodinâmica da reação:** ΔrH° = (−248,4) + (−348,2) − (−318,1) − (−271,2) = −7,3 kJ/mol; ΔrS° = 200,4 + 203,4 − 180,6 − 229,0 = −5,8 J K⁻¹ mol⁻¹; ΔrG° = −7300 + 298 × 5,8 = −5,6 kJ/mol.\n\n**2) Constante:** K = e^(5570/(8,314 × 298)) ≈ 9,5 (o gabarito oficial usa 9,6 por arredondar ΔG°).\n\n**3) Rendimento de 99%:** com y mol de cetona e z de álcool, no equilíbrio há 0,01y de cetona, 0,99y de ciclo-hexanol e de acetona e (z − 0,99y) de isopropanol: K = (0,99y)²/[0,01y (z − 0,99y)] = 98,01 y/(z − 0,99y), logo z/y = 98,01/K + 0,99 = 10,4 + 0,99 ≈ **11,3**.\n\n**4) Massas:** razão mássica = 11,3 × 60,1/98,1 = **6,9**.",
      "alternativas": [
        "Errada. É a razão de massas para quantidades iguais de isopropanol e ciclo-hexanona (1:1); com K ≈ 9,5 o rendimento de 99% exige grande excesso do álcool.",
        "Errada. Esquece que 0,99y de isopropanol é consumido: usa z = 98,01y/K sem somar 0,99y.",
        "Correta. ΔrG° = −5,6 kJ/mol, K ≈ 9,5; K = 0,99² y/[0,01 (z − 0,99y)] → z/y ≈ 11,3 mol/mol; em massa, 11,3 × 60,1/98,1 ≈ 6,9.",
        "Errada. É a razão molar; a pergunta pede a razão entre massas, que exige multiplicar pela razão das massas molares (60,1/98,1).",
        "Errada. Converte a razão molar em massa com a razão das massas molares invertida (98,1/60,1)."
      ],
      "dica": "No equilíbrio com excesso de um reagente, lembre de descontar o que foi consumido: o álcool restante é z − 0,99y, e não z."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 3: 45ª IChO (2013), problema 3",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%203%20-%20icho%2041-45.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1299",
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
      "ano": 2013,
      "orgao": "prova teórica (Moscou), problema 8, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 3 (ed. Anton Sirota, IUVENTA, Bratislava): 45ª IChO, Moscou, 2013, problema 8. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Alguns arqueas usam metilamina como fonte de energia e possuem enzimas com o 22º aminoácido, X (pirrolisina), formado a partir de duas moléculas de L-lisina (C6H14N2O2). Sabe-se que X contém só C, H, N e O, tem massa molar 255 g/mol e 18,8% de oxigênio em massa. A marcação isotópica mostrou que 15 dos 16 átomos de C e N das duas lisinas entram em X e que um dos dois nitrogênios α é perdido. Qual é a fórmula molecular de X?",
    "alternativas": [
      "C6H14N2O2",
      "C12H19N3O3",
      "C12H23N3O4",
      "C12H26N4O3",
      "C12H21N3O3"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "X tem 12 C e 3 N (duas lisinas menos um N α), 3 O (18,8% de 255 g/mol) e os 21 g restantes são 21 H: C12H21N3O3.",
      "detalhada": "A resolução segue a solução oficial do problema 8 (item 8.4), que dá C12H21N3O3 (pirrolisina).\n\n**1) Carbono e nitrogênio:** duas lisinas têm 12 C e 4 N (16 átomos). Se 15 dos 16 átomos de C e N entram em X e o átomo perdido é um N, então X tem **12 C e 3 N**.\n\n**2) Oxigênio:** n(O) = 255 × 0,188/16,0 = **3**.\n\n**3) Hidrogênio:** o que falta da massa molar: 255 − (12 × 12) − (3 × 14) − (3 × 16) = 255 − 144 − 42 − 48 = 21 g/mol, ou **21 H**.\n\n**4) Fórmula:** **C12H21N3O3** (M = 255,3 g/mol; %O = 48,0/255,3 = 18,8%).",
      "alternativas": [
        "Errada. É a lisina (M = 146 g/mol), o precursor; X tem massa molar 255 g/mol.",
        "Errada. Tem 12 C, 3 N e 3 O corretos, mas só 19 H (M = 253); com 255 g/mol são 21 H.",
        "Errada. Tem 4 O e 23,4% de O (4 × 16,00 / 273,3), e não 18,8%; não é a fórmula de X.",
        "Errada. É a fórmula do intermediário D (dipeptídeo), com 4 N; X perde um N α.",
        "Correta. 12 C (das duas lisinas), 3 N (4 − 1), 3 O (255 × 0,188/16) e H pelo resto: 255 − 144 − 42 − 48 = 21 H."
      ],
      "dica": "Quando se conhece a massa molar, descubra C, N e O pelas outras informações e deixe o H como a massa que sobra."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 3: 45ª IChO (2013), problema 8",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%203%20-%20icho%2041-45.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      },
      {
        "titulo": "PubChem: Pyrrolysine",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Pyrrolysine"
      }
    ]
  },
  {
    "id": "qui-1300",
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
      "ano": 2013,
      "orgao": "prova teórica (Moscou), problema 2, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 3 (ed. Anton Sirota, IUVENTA, Bratislava): 45ª IChO, Moscou, 2013, problema 2. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Cloroplastos isolados, na presença de um oxidante (reação de Hill), liberam O2 sob luz. Cloroplastos isolados foram irradiados por 2 horas com luz monocromática de 672 nm e potência 0,503 mJ/s; formaram-se 47,6 mm³ de O2 (medidos a 10 °C e 740 mmHg). A exigência quântica é o número médio de fótons necessário para transferir um elétron do redutor para o oxidante; cada molécula de O2 formada corresponde à transferência de 4 elétrons. Use h = 6,63×10⁻³⁴ J s, c = 3,00×10⁸ m/s, NA = 6,02×10²³ mol⁻¹ e R = 8,314 J K⁻¹ mol⁻¹. Qual é a exigência quântica?",
    "alternativas": [
      "1,3",
      "2,5",
      "5,1",
      "10",
      "20"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Foram absorvidos 2,03×10⁻⁵ mol de fótons para formar 2,00×10⁻⁶ mol de O2 (8,0×10⁻⁶ mol de e⁻): 2,03×10⁻⁵/8,0×10⁻⁶ ≈ 2,5 fótons por elétron.",
      "detalhada": "A resolução segue a solução oficial do problema 2 (item 2.5), que dá 2,5.\n\n**1) Energia que chegou:** E = 0,503×10⁻³ J/s × 7200 s = **3,62 J**.\n\n**2) Energia de 1 mol de fótons de 672 nm:** E_m = hcNA/λ = 6,63×10⁻³⁴ × 3,00×10⁸ × 6,02×10²³ / 672×10⁻⁹ = 1,78×10⁵ J/mol; n(fótons) = 3,62/1,78×10⁵ = **2,03×10⁻⁵ mol**.\n\n**3) Mols de O2:** p = 740/760 × 101,3 kPa = 98,6 kPa; n = pV/RT = 98 600 × 47,6×10⁻⁹/(8,314 × 283) = **2,00×10⁻⁶ mol**.\n\n**4) Elétrons transferidos:** 4 por O2: n(e⁻) = 8,0×10⁻⁶ mol.\n\n**5) Exigência quântica:** 2,03×10⁻⁵/8,0×10⁻⁶ = **2,5 fótons por elétron**.",
      "alternativas": [
        "Errada. Usa 8 elétrons por O2 (2 × 4) em vez de 4: n(e⁻) = 8 × 2,00×10⁻⁶ = 1,6×10⁻⁵ mol, e a razão cai para 1,3.",
        "Correta. Energia absorvida = 3,62 J; fótons = 3,62/(1,78×10⁵ J/mol) = 2,03×10⁻⁵ mol; O2 = 2,00×10⁻⁶ mol; elétrons = 4 × 2,00×10⁻⁶ = 8,0×10⁻⁶ mol; razão = 2,5.",
        "Errada. Admite 2 elétrons por O2 (n(e⁻) = 4,0×10⁻⁶ mol); a oxidação da água a O2 envolve 4 elétrons.",
        "Errada. É o número de fótons por molécula de O2, e não por elétron; falta dividir por 4.",
        "Errada. Multiplica por 2 a razão fótons/O2 (usa 0,5 elétron por O2) em vez de dividir por 4."
      ],
      "dica": "Exigência quântica = fótons absorvidos ÷ elétrons transferidos; não esqueça os 4 e⁻ de cada O2."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 3: 45ª IChO (2013), problema 2",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%203%20-%20icho%2041-45.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1301",
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
      "ano": 2014,
      "orgao": "prova teórica (Hanói), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 4 (ed. Anton Sirota, IUVENTA, Bratislava): 46ª IChO, Hanói, 2014, problema 1. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "No modelo da partícula na caixa, o comprimento de onda λ que promove um elétron π do HOMO para o LUMO num polieno linear com k ligações duplas conjugadas é λ = B(k + 2)²/(2k + 1), com B = 64,6 nm (derivado de L = (k + 2)·1,40 Å). Deseja-se sintetizar um polieno linear que absorva em cerca de 600 nm. Qual é a estrutura adequada?",
    "alternativas": [
      "CH2=CH–(CH=CH)8–CH=CH2 (k = 10)",
      "CH2=CH–(CH=CH)10–CH=CH2 (k = 12)",
      "CH2=CH–(CH=CH)12–CH=CH2 (k = 14)",
      "CH2=CH–(CH=CH)13–CH=CH2 (k = 15)",
      "CH2=CH–(CH=CH)14–CH=CH2 (k = 16)"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "Resolvendo (k + 2)²/(2k + 1) = 600/64,6 = 9,29 obtém-se k ≈ 14,9; o inteiro mais próximo é k = 15 (λ = 602 nm), CH2=CH–(CH=CH)13–CH=CH2.",
      "detalhada": "A resolução segue a solução oficial do problema 1 (item 1.3), que dá k = 15.\n\n**1) Equação:** (k + 2)²/(2k + 1) = λ/B = 600/64,6 = 9,29.\n\n**2) Forma quadrática:** k² + 4k + 4 = 18,58k + 9,29, ou seja, k² − 14,58k − 5,29 = 0; a raiz positiva é k = 14,9 (a outra é negativa e não serve).\n\n**3) Inteiro mais próximo:** k = 15 dá λ = 602 nm; k = 14 dá 570 nm e k = 16 dá 634 nm. A estrutura com 15 ligações duplas conjugadas é CH2=CH–(CH=CH)13–CH=CH2 (2 duplas nas pontas + 13 internas).\n\n(Com essa estrutura, ΔE = hc/λ ≈ 199 kJ/mol.)",
      "alternativas": [
        "Errada. Com k = 10, λ = 64,6 × 144/21 = 443 nm, bem abaixo de 600 nm.",
        "Errada. Com k = 12, λ = 64,6 × 196/25 = 506 nm.",
        "Errada. Com k = 14, λ = 64,6 × 256/29 = 570 nm; fica 30 nm abaixo do pedido.",
        "Correta. Com k = 15, λ = 64,6 × 289/31 = 602 nm. A equação (k + 2)²/(2k + 1) = 600/64,6 dá k ≈ 14,9 ≈ 15.",
        "Errada. Com k = 16, λ = 64,6 × 324/33 = 634 nm; passa 34 nm do valor pedido."
      ],
      "dica": "Quanto maior a conjugação, maior o λ de absorção: teste valores inteiros de k na fórmula e escolha o mais próximo."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 4: 46ª IChO (2014), problema 1",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%204%20-%20icho%2046-50.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1302",
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
      "ano": 2014,
      "orgao": "prova teórica (Hanói), problema 2, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 4 (ed. Anton Sirota, IUVENTA, Bratislava): 46ª IChO, Hanói, 2014, problema 2. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Colocou-se 1,00 mol de N2O4 num recipiente vazio de volume fixo igual a 24,44 dm³. A 298 K, a pressão total no equilíbrio N2O4(g) ⇌ 2 NO2(g) é 1,190 bar. Supondo gases ideais (R = 8,3145 J K⁻¹ mol⁻¹, pressão padrão 1 bar), qual é o valor de ΔG° da reação a 298 K?",
    "alternativas": [
      "−4,7 kJ/mol",
      "−2,4 kJ/mol",
      "+2,4 kJ/mol",
      "+4,7 kJ/mol",
      "+9,5 kJ/mol"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "A pressão total dá o grau de dissociação x = 0,174; com as pressões parciais, K = 0,148 e ΔG° = −RT ln K ≈ +4,7 kJ/mol.",
      "detalhada": "A resolução segue a solução oficial do problema 2 (item 2.1), que dá ΔG° = 4,72 kJ/mol.\n\n**1) Pressão sem dissociação:** p₀ = nRT/V = 1,00 × 8,3145 × 298/(24,44×10⁻³ m³) = 1,014×10⁵ Pa = 1,014 bar.\n\n**2) Grau de dissociação:** N2O4 ⇌ 2 NO2; 1 − x e 2x mol; n_total = 1 + x; p_total = p₀(1 + x) → 1 + x = 1,190/1,014 = 1,174 → x = 0,174.\n\n**3) Pressões parciais (em bar):** p(N2O4) = 1,190 × (1 − 0,174)/1,174 = 0,837; p(NO2) = 1,190 × 0,348/1,174 = 0,353.\n\n**4) Constante e energia livre:** K = p(NO2)²/p(N2O4) = 0,353²/0,837 = 0,148; ΔG° = −RT ln K = −8,3145 × 298 × ln 0,148 = **+4,7 kJ/mol** (a solução oficial apresenta 4,72 por usar K = 0,1489).",
      "alternativas": [
        "Errada. Sinal invertido: usa K = p(N2O4)/p(NO2)² (ou ΔG = +RT ln K); como K = 0,148 < 1, ΔG° é positivo.",
        "Errada. Metade do valor e com sinal trocado; erro de sinal e de coeficiente estequiométrico.",
        "Errada. É metade do valor correto (considera a reação ½ N2O4 ⇌ NO2); a reação pedida tem coeficiente 1 para N2O4 e 2 para NO2.",
        "Correta. Sem dissociação, p₀ = nRT/V = 1,014 bar; p_total = p₀(1 + x) = 1,190 → x = 0,174; K = p(NO2)²/p(N2O4) = 0,148; ΔG° = −RT ln K = +4,7 kJ/mol.",
        "Errada. É o dobro do valor correto: multiplica por 2 por causa do coeficiente 2 do NO2; o coeficiente já está no expoente de K."
      ],
      "dica": "Primeiro ache a pressão inicial hipotética (nRT/V) para obter o grau de dissociação; depois use pressões parciais em bar."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 4: 46ª IChO (2014), problema 2",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%204%20-%20icho%2046-50.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1303",
    "materia": "quimica",
    "assunto": "Soluções",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 2014,
      "orgao": "prova teórica (Hanói), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 4 (ed. Anton Sirota, IUVENTA, Bratislava): 46ª IChO, Hanói, 2014, problema 5. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Uma solução X contém dois ácidos fracos monopróticos, HA (Ka = 1,74×10⁻⁷) e HB (Ka = 1,34×10⁻⁷), e tem pH 3,75. Para neutralizar 100 cm³ de X gastam-se 100 cm³ de NaOH 0,220 mol/dm³. Quais são as concentrações totais iniciais de HA e de HB em X (use as aproximações razoáveis)?",
    "alternativas": [
      "[HA] = 0,110 mol/dm³ e [HB] = 0,110 mol/dm³",
      "[HA] = 0,124 mol/dm³ e [HB] = 0,096 mol/dm³",
      "[HA] = 0,096 mol/dm³ e [HB] = 0,124 mol/dm³",
      "[HA] = 0,166 mol/dm³ e [HB] = 0,0536 mol/dm³",
      "[HA] = 0,0536 mol/dm³ e [HB] = 0,166 mol/dm³"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "Pelo balanço de carga, [H⁺]² = Ka(HA)[HA] + Ka(HB)[HB] = (10⁻³·⁷⁵)²; junto com [HA] + [HB] = 0,220 mol/dm³ (titulação) resulta [HA] = 0,0536 e [HB] = 0,166 mol/dm³.",
      "detalhada": "A resolução segue a solução oficial do problema 5 (item 5.1), que dá 0,053 e 0,167 mol/dm³ com o passo intermediário arredondado; sem arredondar, obtém-se 0,0536 e 0,166 mol/dm³.\n\n**1) Balanço de carga:** [H⁺] = [A⁻] + [B⁻] + [OH⁻]; em meio ácido, [OH⁻] é desprezível. Como [A⁻] = Ka(HA)[HA]/[H⁺] e [B⁻] = Ka(HB)[HB]/[H⁺] (e Ka ≪ [H⁺], então [HA] ≈ [HA]ᵢ), obtém-se [H⁺]² = Ka(HA)[HA]ᵢ + Ka(HB)[HB]ᵢ.\n\n**2) Primeira equação:** [H⁺]² = (10⁻³·⁷⁵)² = 3,1623×10⁻⁸, logo 1,74×10⁻⁷[HA] + 1,34×10⁻⁷[HB] = 3,1623×10⁻⁸, ou 1,74[HA] + 1,34[HB] = 0,31623.\n\n**3) Segunda equação (neutralização 1 : 1):** ([HA] + [HB]) × 0,100 dm³ = 0,220 × 0,100 → [HA] + [HB] = 0,220.\n\n**4) Sistema:** substituindo [HB] = 0,220 − [HA]: 0,40[HA] = 0,31623 − 0,29480 = 0,02143 → [HA] = 0,02143 / 0,40 = **0,0536 mol/dm³** e [HB] = 0,220 − 0,0536 = **0,166 mol/dm³**.",
      "alternativas": [
        "Errada. Divide igualmente os 0,220 mol/dm³ entre os ácidos; mas o pH impõe a equação 1,74[HA] + 1,34[HB] = 0,316.",
        "Errada. Divide o total na proporção das constantes (1,74 : 1,34); a condição de neutralidade e o pH levam a outra proporção.",
        "Errada. Divide o total na proporção invertida das constantes; não usa a equação do pH.",
        "Errada. Resolve o sistema e troca as respostas: HA é o ácido menos concentrado (0,0536 mol/dm³).",
        "Correta. Balanço de carga: [H⁺] ≈ [A⁻] + [B⁻] → [H⁺]² = Ka(HA)[HA] + Ka(HB)[HB]; com [HA] + [HB] = 0,220 resulta [HA] = 0,0536 e [HB] = 0,166 mol/dm³."
      ],
      "dica": "Com dois ácidos fracos, use duas equações: o balanço de carga (para H⁺) e a estequiometria da titulação (para o total)."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 4: 46ª IChO (2014), problema 5",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%204%20-%20icho%2046-50.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1304",
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
      "ano": 2014,
      "orgao": "prova teórica (Hanói), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 4 (ed. Anton Sirota, IUVENTA, Bratislava): 46ª IChO, Hanói, 2014, problema 5. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Uma solução Y contém NaA 6,00×10⁻² mol/dm³ e NaB 4,00×10⁻² mol/dm³, sais dos ácidos fracos HA (Ka = 1,74×10⁻⁷) e HB (Ka = 1,34×10⁻⁷). Dado Kw = 1,00×10⁻¹⁴ a 298 K, qual é o pH de Y?",
    "alternativas": [
      "4,10",
      "7,00",
      "9,77",
      "9,90",
      "10,05"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "Os dois ânions hidrolisam: [OH⁻]² = Kb(A⁻)·0,06 + Kb(B⁻)·0,04 = 6,43×10⁻⁹, [OH⁻] = 8,02×10⁻⁵ mol/dm³ e pH = 9,90.",
      "detalhada": "A resolução segue a solução oficial do problema 5 (item 5.2), que dá pH = 9,90.\n\n**1) Constantes de hidrólise:** Kb(A⁻) = Kw/Ka(HA) = 1,00×10⁻¹⁴/1,74×10⁻⁷ = 5,75×10⁻⁸; Kb(B⁻) = 1,00×10⁻¹⁴/1,34×10⁻⁷ = 7,46×10⁻⁸.\n\n**2) Balanço de prótons:** [H⁺] + [HA] + [HB] = [OH⁻]; em meio básico [H⁺] é desprezível, então [OH⁻] = [HA] + [HB].\n\n**3) Aproximação:** [HA] = Kb,A[A⁻]/[OH⁻] e [HB] = Kb,B[B⁻]/[OH⁻] (hidrólise pequena), logo [OH⁻]² = 5,75×10⁻⁸ × 0,06 + 7,46×10⁻⁸ × 0,04 = 6,43×10⁻⁹.\n\n**4) pH:** [OH⁻] = 8,02×10⁻⁵ mol/dm³; pOH = 4,10; pH = 14,00 − 4,10 = **9,90**.",
      "alternativas": [
        "Errada. É o pOH (−log 8,02×10⁻⁵); a pergunta é pelo pH = 14 − pOH.",
        "Errada. Ignora a hidrólise dos ânions A⁻ e B⁻, que são bases conjugadas de ácidos fracos e tornam a solução básica.",
        "Errada. Considera só a hidrólise de A⁻ (NaA 0,06 mol/dm³) e esquece o B⁻.",
        "Correta. [OH⁻]² = Kb(A⁻)[A⁻] + Kb(B⁻)[B⁻] = 5,75×10⁻⁸ × 0,06 + 7,46×10⁻⁸ × 0,04 → [OH⁻] = 8,02×10⁻⁵; pOH = 4,10 e pH = 9,90.",
        "Errada. Soma as raízes ([OH⁻] = √(Kb,A cA) + √(Kb,B cB)) em vez de somar os termos dentro de uma única raiz."
      ],
      "dica": "Com duas bases fracas juntas, as contribuições para [OH⁻]² somam; não some as raízes."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 4: 46ª IChO (2014), problema 5",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%204%20-%20icho%2046-50.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1305",
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
      "ano": 2015,
      "orgao": "prova teórica (Baku), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 4 (ed. Anton Sirota, IUVENTA, Bratislava): 47ª IChO, Baku, 2015, problema 5. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Os açúcares redutores de um suco (admita só glicose e frutose) foram determinados com o reagente de Fehling. A 10,00 cm³ do suco juntou-se reagente de Fehling contendo 2,000 mmol de Cu²⁺ (50,00 cm³ de CuSO4 0,04000 mol/dm³ em meio alcalino com tartarato) e aqueceu-se: C6H12O6 + 2 Cu²⁺ + 5 OH⁻ → C6H11O7⁻ + Cu2O + 3 H2O. Depois acidificou-se e adicionou-se KI em excesso; o Cu²⁺ que sobrou oxida o iodeto (2 Cu²⁺ + 4 I⁻ → 2 CuI + I2) e o iodo formado foi titulado com tiossulfato 0,05078 mol/dm³, gastando 11,87 cm³ (I2 + 2 S2O3²⁻ → 2 I⁻ + S4O6²⁻). Admitindo que toda a frutose se converte em glicose, qual a concentração mássica total de açúcares no suco (M = 180,16 g/mol)?",
    "alternativas": [
      "6,3 g/dm³",
      "12,6 g/dm³",
      "15,3 g/dm³",
      "18,0 g/dm³",
      "25,2 g/dm³"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Dos 2,000 mmol de Cu²⁺, 0,6028 mmol sobraram (iguais aos mmol de tiossulfato); 1,3972 mmol reagiram com os açúcares, 2 por açúcar: 0,6986 mmol em 10 cm³, ou 12,6 g/dm³.",
      "detalhada": "A resolução segue a solução oficial do problema 5 (item 5.3), que dá 12,6 g/dm³.\n\n**1) Cu²⁺ que sobrou:** de 2 Cu²⁺ → 1 I2 → 2 S2O3²⁻, vem n(Cu²⁺ restante) = n(S2O3²⁻) = 11,87 cm³ × 0,05078 mol/dm³ = **0,6028 mmol**.\n\n**2) Cu²⁺ consumido pelo açúcar:** 2,000 − 0,6028 = 1,3972 mmol.\n\n**3) Açúcar (2 Cu²⁺ por molécula):** n = 1,3972/2 = 0,6986 mmol em 10,00 cm³, ou c = 0,06986 mol/dm³.\n\n**4) Concentração mássica:** 0,06986 mol/dm³ × 180,16 g/mol = **12,6 g/dm³**.",
      "alternativas": [
        "Errada. É metade do valor correto: divide por 2 duas vezes (por exemplo, supõe 4 Cu²⁺ por açúcar).",
        "Correta. Cu²⁺ restante = n(S2O3²⁻) = 0,6028 mmol; consumido = 2,000 − 0,6028 = 1,3972 mmol; açúcar = 1,3972/2 = 0,6986 mmol em 10,00 cm³ → 0,06986 mol/dm³ × 180,16 = 12,6 g/dm³.",
        "Errada. Considera que 2 S2O3²⁻ correspondem a 1 Cu²⁺ (Cu²⁺ restante = 0,3014 mmol); mas 2 Cu²⁺ geram 1 I2 e este gasta 2 S2O3²⁻: a razão Cu²⁺ : S2O3²⁻ é 1 : 1.",
        "Errada. Ignora a titulação e supõe que todo o Cu²⁺ (2,000 mmol) foi consumido pelos açúcares.",
        "Errada. Esquece que cada açúcar consome 2 Cu²⁺ e divide só por 1 (n(açúcar) = n(Cu²⁺ consumido))."
      ],
      "dica": "Em titulação de retorno, o que o analito consumiu = o que foi adicionado − o que sobrou (medido na titulação)."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 4: 47ª IChO (2015), problema 5",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%204%20-%20icho%2046-50.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1306",
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
      "ano": 2015,
      "orgao": "prova teórica (Baku), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 4 (ed. Anton Sirota, IUVENTA, Bratislava): 47ª IChO, Baku, 2015, problema 5. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Um suco contém 12,6 g/dm³ de açúcares redutores totais (glicose + frutose). Para separar a glicose, 10,00 cm³ do suco foram tratados com 10,00 cm³ de KIO3 0,01502 mol/dm³ e KI em excesso (IO3⁻ + 5 I⁻ + 6 H⁺ → 3 I2 + 3 H2O). Adicionou-se NaOH em excesso: o iodo oxida só a glicose, na proporção de 1 I2 por glicose (a frutose não reage nessas condições). A mistura foi acidificada e o I2 que sobrou foi titulado com tiossulfato 0,01089 mol/dm³, gastando 23,43 cm³. Qual é a concentração mássica de glicose no suco (M = 180,16 g/mol)?",
    "alternativas": [
      "3,52 g/dm³",
      "5,82 g/dm³",
      "6,78 g/dm³",
      "11,6 g/dm³",
      "12,6 g/dm³"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "O iodato gera 0,4506 mmol de I2; 0,1276 mmol sobraram (tiossulfato/2); os 0,3230 mmol restantes oxidaram a glicose: 0,03230 mol/dm³ = 5,82 g/dm³.",
      "detalhada": "A resolução segue a solução oficial do problema 5 (item 5.5), que dá 5,82 g/dm³ de glicose (e 6,78 g/dm³ de frutose).\n\n**1) I2 gerado pelo iodato:** n(IO3⁻) = 10,00 × 0,01502 = 0,1502 mmol; 1 IO3⁻ → 3 I2; n(I2) = **0,4506 mmol**.\n\n**2) I2 que sobrou:** n(S2O3²⁻) = 23,43 × 0,01089 = 0,2552 mmol; 2 S2O3²⁻ por I2: n(I2) = **0,1276 mmol**.\n\n**3) I2 consumido pela glicose:** 0,4506 − 0,1276 = **0,3230 mmol** (1 por glicose).\n\n**4) Concentração:** 0,3230 mmol/10,00 cm³ = 0,03230 mol/dm³; × 180,16 g/mol = **5,82 g/dm³**. A frutose tem 12,6 − 5,82 = 6,78 g/dm³.",
      "alternativas": [
        "Errada. Admite 1 S2O3²⁻ por I2 (I2 restante = 0,2552 mmol); a razão correta é 2 S2O3²⁻ por I2.",
        "Correta. I2 formado = 3 × 0,1502 = 0,4506 mmol; I2 restante = 0,2552/2 = 0,1276 mmol; glicose = 0,4506 − 0,1276 = 0,3230 mmol em 10 cm³ → 0,03230 mol/dm³ × 180,16 = 5,82 g/dm³.",
        "Errada. É a concentração de frutose (12,6 − 5,82), e não de glicose.",
        "Errada. Admite 2 I2 por glicose (dobra a conta); a proporção dada é 1 : 1.",
        "Errada. É o total de açúcares redutores (glicose + frutose) dado no enunciado, e não só a glicose."
      ],
      "dica": "Em duas titulações do mesmo suco, a diferença entre os resultados isola um dos componentes: aqui só a glicose reage com o iodo alcalino."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 4: 47ª IChO (2015), problema 5",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%204%20-%20icho%2046-50.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1307",
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
      "ano": 2015,
      "orgao": "prova teórica (Baku), problema 8, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 4 (ed. Anton Sirota, IUVENTA, Bratislava): 47ª IChO, Baku, 2015, problema 8. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O composto X1, constituído só por carbono, hidrogênio e oxigênio, é o principal metabólito de um solvente usado em dispersantes de derramamento de petróleo, e é excretado na urina. X1 tem 54,53% de carbono em massa, e os números de átomos dos três elementos (em alguma ordem) formam três termos consecutivos de uma progressão geométrica (n, nq, nq²), com soma não superior a 25. Qual é a fórmula mínima de X1?",
    "alternativas": [
      "C2H4O",
      "CH2O",
      "C3H6O",
      "C4H8O",
      "C3H6O2"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "A fórmula C2H4O tem 54,53% de C e átomos nas quantidades 2 (C), 4 (H) e 1 (O), isto é, 1, 2, 4: progressão geométrica de razão 2.",
      "detalhada": "A resolução segue a solução oficial do problema 8 (itens 8.1 e 8.2), que dá a fórmula mínima C2H4O.\n\n**1) Teste dos casos:** escreve-se a fórmula como CₐHᵦOᵧ com (a, b, c) em progressão geométrica e impõe-se %C = 54,53%. O oficial analisa as três ordens possíveis (n(H) > n(C) > n(O), n(C) > n(H) > n(O), n(C) > n(O) > n(H)) e só a primeira tem raiz inteira positiva, com razão q = 2: O = n, C = 2n, H = 4n.\n\n**2) Conferência:** C2H4O, M = 44,05 g/mol; %C = 24,02/44,05 = **54,53%**.\n\n**3) Fórmula mínima:** C2H4O. A fórmula molecular é múltipla (C4H8O2, C6H12O3 etc.); a fórmula molecular (C6H12O3, o ácido butoxiacético) sai do dado sobre o precursor X.",
      "alternativas": [
        "Correta. C2H4O: 24,02/44,05 = 54,53% de C; e os números 1 (O), 2 (C) e 4 (H) formam uma progressão geométrica de razão 2.",
        "Errada. Tem 40,0% de C (12,01/30,03) e não 54,53%.",
        "Errada. Tem 62,0% de C e os números 3, 6 e 1 não formam progressão geométrica.",
        "Errada. Tem 66,6% de C; os números 4, 8 e 1 não formam progressão geométrica.",
        "Errada. Tem 48,6% de C; os números 3, 6 e 2 não formam progressão geométrica."
      ],
      "dica": "Teste uma fórmula pela %C e confira a condição extra do enunciado (aqui, a progressão geométrica)."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 4: 47ª IChO (2015), problema 8",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%204%20-%20icho%2046-50.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1308",
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
      "ano": 2015,
      "orgao": "prova teórica (Baku), problema 8, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 4 (ed. Anton Sirota, IUVENTA, Bratislava): 47ª IChO, Baku, 2015, problema 8. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O composto X (só C, H e O; 11,94% de H em massa) é oxidado em duas etapas catalisadas por enzimas: X + NAD⁺ → X0 + NADH + H⁺ e X0 + NAD⁺ + H2O → X1 + NADH + H⁺. O produto final X1 tem fórmula mínima C2H4O, e sua fórmula molecular é um múltiplo inteiro da mínima. Qual é a fórmula molecular de X?",
    "alternativas": [
      "C4H10O",
      "C5H12O2",
      "C6H12O3",
      "C8H18O3",
      "C6H14O2"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "As duas oxidações retiram 2 H cada e a segunda adiciona O; assim X = X1 + 2 H − O = C2nH(4n+2)O(n−1), e %H = 11,94% só com n = 3: C6H14O2.",
      "detalhada": "A resolução segue a solução oficial do problema 8 (item 8.3), que dá C6H14O2.\n\n**1) Relação entre X e X1:** da 2ª equação, X0 + H2O − 2 H = X1, ou seja, X0 = X1 − O. Da 1ª, X = X0 + 2 H = X1 − O + 2 H.\n\n**2) Fórmula geral:** com X1 = C2nH4nOn, X = **C2nH(4n+2)O(n−1)**.\n\n**3) Teste pela %H:** n = 2: C4H10O, 13,6% de H; n = 3: C6H14O2, M = 118,2 g/mol, %H = 14,11/118,2 = **11,94%** ✓; n = 4: C8H18O3, 11,2% de H.\n\n**4) Resposta:** n = 3, X = **C6H14O2** (uma estrutura compatível é o 2-butoxietanol, um éter-álcool primário; X1 seria C6H12O3, o ácido butoxiacético).",
      "alternativas": [
        "Errada. Segue a família C2nH(4n+2)O(n−1) com n = 2, mas tem 13,6% de H e não 11,94%.",
        "Errada. Tem 11,6% de H, e não 11,94%, e não tem a forma C2nH(4n+2)O(n−1).",
        "Errada. É a fórmula do próprio X1 (múltiplo de C2H4O): tem 9,2% de H; X tem 2 H a mais e 1 O a menos.",
        "Errada. Segue a família com n = 4, mas tem 11,2% de H e não 11,94%.",
        "Correta. Se X1 = (C2H4O)n, então X = C2nH(4n+2)O(n−1); com n = 3 resulta C6H14O2, com 14 × 1,008/118,2 = 11,94% de H."
      ],
      "dica": "Escreva o efeito de cada etapa (perda de 2 H, ganho de O) para ligar o reagente e o produto antes de usar a % de H."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 4: 47ª IChO (2015), problema 8",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%204%20-%20icho%2046-50.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      },
      {
        "titulo": "PubChem: 2-Butoxyethanol",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/2-Butoxyethanol"
      }
    ]
  },
  {
    "id": "qui-1309",
    "materia": "quimica",
    "assunto": "Soluções",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 2016,
      "orgao": "prova teórica (Tbilisi), problema 3, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 4 (ed. Anton Sirota, IUVENTA, Bratislava): 48ª IChO, Tbilisi, 2016, problema 3. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O sal de cozinha iodado contém iodato de potássio (KIO3). Para determinar o teor, dissolveram-se 10,000 g de sal em 100 cm³ de HCl 1,0 mol/dm³ contendo 1,0 g de KI (IO3⁻ + 8 I⁻ + 6 H⁺ → 3 I3⁻ + 3 H2O) e titulou-se com tiossulfato de sódio 0,00235 mol/dm³ (I3⁻ + 2 S2O3²⁻ → 3 I⁻ + S4O6²⁻), gastando 7,50 cm³. Qual é o nível de iodação em ppm (1 ppm = 1 mg de iodo por kg de sal; M(I) = 126,90 g/mol)?",
    "alternativas": [
      "18,6 ppm",
      "37,3 ppm",
      "74,6 ppm",
      "111,8 ppm",
      "224 ppm"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Cada IO3⁻ consome 6 S2O3²⁻ (3 I3⁻ × 2): n(IO3⁻) = 1,76×10⁻⁵/6 = 2,94×10⁻⁶ mol, o que dá 3,73×10⁻⁴ g de iodo em 10,000 g de sal, ou 37,3 ppm.",
      "detalhada": "A resolução segue a solução oficial do problema 3 (item 3.1.3), que dá 37,3 ppm.\n\n**1) Tiossulfato gasto:** n = 0,00750 dm³ × 0,00235 mol/dm³ = **1,76×10⁻⁵ mol**.\n\n**2) Relação IO3⁻ : S2O3²⁻:** 1 IO3⁻ → 3 I3⁻ (1ª equação) e 1 I3⁻ consome 2 S2O3²⁻ (2ª equação); logo 1 : 6. n(IO3⁻) = 1,76×10⁻⁵/6 = **2,94×10⁻⁶ mol**.\n\n**3) Massa de iodo:** 2,94×10⁻⁶ mol × 126,90 g/mol = 3,73×10⁻⁴ g = 0,373 mg.\n\n**4) ppm:** 0,373 mg em 10,000 g = 0,0100 kg de sal → 0,373/0,0100 = **37,3 mg/kg = 37,3 ppm**, dentro da faixa de 25 a 55 ppm exigida na Geórgia.",
      "alternativas": [
        "Errada. Divide por 12 (supõe 12 S2O3²⁻ por IO3⁻); o iodato gera 3 I3⁻/I2, que consomem 6 S2O3²⁻.",
        "Correta. n(S2O3²⁻) = 1,76×10⁻⁵ mol; n(IO3⁻) = 1,76×10⁻⁵/6 = 2,94×10⁻⁶ mol; m(I) = 2,94×10⁻⁶ × 126,90 = 3,73×10⁻⁴ g em 10,000 g de sal = 37,3 mg/kg.",
        "Errada. Divide por 3 (considera só os 3 I3⁻ por IO3⁻ e esquece que cada um gasta 2 S2O3²⁻).",
        "Errada. Divide por 2 (só a estequiometria I3⁻ : S2O3²⁻), sem levar em conta que 1 IO3⁻ forma 3 I3⁻.",
        "Errada. Supõe 1 IO3⁻ por S2O3²⁻ (razão 1 : 1), sem usar a estequiometria das duas reações."
      ],
      "dica": "Em iodometria em série, multiplique as razões das duas equações: IO3⁻ → 3 I2 → 6 S2O3²⁻."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 4: 48ª IChO (2016), problema 3",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%204%20-%20icho%2046-50.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1310",
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
      "ano": 2016,
      "orgao": "prova teórica (Tbilisi), problema 6, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 4 (ed. Anton Sirota, IUVENTA, Bratislava): 48ª IChO, Tbilisi, 2016, problema 6. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Na síntese industrial da galantamina, o intermediário obtido por resolução tem rotação específica de −400° cm² g⁻¹, enquanto o enantiômero puro tem −415° cm² g⁻¹ nas mesmas condições. A única impureza óptica é o outro enantiômero. O excesso enantiomérico (ee) é a diferença entre as porcentagens dos enantiômeros (por exemplo, 70% R e 30% S dão ee = 40%). Qual é o ee do composto resolvido?",
    "alternativas": [
      "3,6%",
      "48,2%",
      "92,8%",
      "96,4%",
      "98,2%"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "A rotação observada é proporcional à diferença entre as frações dos enantiômeros: ee = 400/415 = 0,964, ou 96,4% (98,2% do enantiômero (−) e 1,8% do (+)).",
      "detalhada": "A resolução segue a solução oficial do problema 6 (item 6.2.1), que dá 96,4%.\n\n**1) Rotação como média:** seja x a fração do enantiômero (−), de rotação −415, e (1 − x) a do (+), de +415: x(−415) + (1 − x)(+415) = −400.\n\n**2) Resolvendo:** 415(1 − 2x) = −400 → 1 − 2x = −0,9639 → x = 0,982 (98,2%), e a fração do outro é 1,8%.\n\n**3) Excesso enantiomérico:** ee = 98,2% − 1,8% = **96,4%**, que coincide com a pureza óptica 400/415 × 100.",
      "alternativas": [
        "Errada. É a quantidade de impureza (100 − 96,4); o ee é a pureza em excesso, não a porcentagem do enantiômero indesejado.",
        "Errada. É a metade de 96,4%: resulta de dividir a razão das rotações por 2, sem base na definição de ee.",
        "Errada. Toma 96,4% como a porcentagem do enantiômero majoritário (ee = 96,4 − 3,6 = 92,8), mas 96,4% já é a razão das rotações, isto é, o próprio ee.",
        "Correta. Sendo x a fração do enantiômero (−): −415x + 415(1 − x) = −400 → x = 0,982; ee = 0,982 − 0,018 = 0,964 = 400/415.",
        "Errada. É a porcentagem do enantiômero majoritário (x = 815/830), e não a diferença entre as porcentagens dos enantiômeros."
      ],
      "dica": "Pureza óptica (rotação observada ÷ rotação do puro) é igual ao excesso enantiomérico; não confunda com a porcentagem do enantiômero majoritário."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 4: 48ª IChO (2016), problema 6",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%204%20-%20icho%2046-50.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1311",
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
      "ano": 2016,
      "orgao": "prova teórica (Tbilisi), problema 8, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 4 (ed. Anton Sirota, IUVENTA, Bratislava): 48ª IChO, Tbilisi, 2016, problema 8. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O aquecimento da D-glicose com acetona e algumas gotas de ácido concentrado forma o diacetonídeo A (1,2:5,6-di-O-isopropilideno-D-glicofuranose, com dois acetais cíclicos). A hidrólise seletiva de A remove apenas o acetal do diol terminal (C5–C6) e preserva o do diol 1,2, dando B. Qual dos reagentes abaixo pode ser usado nessa hidrólise seletiva?",
    "alternativas": [
      "Ácido acético a 50%",
      "Ácido sulfúrico concentrado",
      "HCl 6 mol/dm³ em água",
      "NaOH 1 mol/dm³ em água",
      "HCl 6 mol/dm³ em ácido acético"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "A hidrólise seletiva do acetal terminal usa ácido fraco: ácido acético a 50%. Ácidos fortes removem os dois acetais e bases não hidrolisam acetais.",
      "detalhada": "A resolução segue a solução oficial do problema 8 (item 8.1.3), que dá ácido acético a 50%.\n\n**1) Reatividade dos acetais:** acetais são hidrolisados por ácido e estáveis em base. Em A há dois: o 5,6-O-isopropilideno (anel de cinco membros fora do anel do açúcar, mais fácil de hidrolisar) e o 1,2-O-isopropilideno (fundido ao furanosídeo, mais estável).\n\n**2) Seletividade:** com ácido fraco e diluído, como o ácido acético a 50%, só o acetal terminal reage, e B retém o grupo 1,2-O-isopropilideno. Ácidos fortes (H2SO4 concentrado, HCl 6 mol/dm³ em água ou em ácido acético) removem ambos; NaOH não ataca acetais.",
      "alternativas": [
        "Correta. Ácido fraco e diluído: hidrolisa o acetal terminal (exocíclico, menos tensionado) e preserva o acetal 1,2, fundido ao anel furanosídico.",
        "Errada. Ácido forte e desidratante: remove os dois acetais e ainda pode carbonizar o carboidrato.",
        "Errada. Ácido forte aquoso: hidrolisa os dois acetais, e não seletivamente.",
        "Errada. Acetais são estáveis em meio básico; a base não hidrolisa nenhum dos dois.",
        "Errada. Ácido forte e concentrado: remove os dois acetais."
      ],
      "dica": "Para desproteger só o acetal mais lábil, use o ácido mais fraco e brando; ácido forte tira tudo, base não tira nada."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 4: 48ª IChO (2016), problema 8",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%204%20-%20icho%2046-50.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1312",
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
      "ano": 2016,
      "orgao": "prova teórica (Tbilisi), problema 8, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 4 (ed. Anton Sirota, IUVENTA, Bratislava): 48ª IChO, Tbilisi, 2016, problema 8. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O composto H, de fórmula C6H10O7, é um derivado natural de açúcar com anel de seis membros, usado como bloco de construção da heparina, um polissacarídeo anticoagulante do organismo. Qual das afirmações classifica corretamente H?",
    "alternativas": [
      "É um ácido aldárico (diácido derivado de uma aldose).",
      "É um ácido aldônico (carboxila no antigo grupo aldeído).",
      "É uma lactona (éster cíclico interno).",
      "É um composto meso (aquiral).",
      "É um ácido urônico (o CH2OH terminal da aldose virou COOH) e, na forma livre, reduz o reagente de Fehling."
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "H (C6H10O7) é um ácido urônico, derivado de uma aldose em que o grupo CH2OH terminal virou COOH; na forma livre, o hemiacetal anomérico está disponível, e H é um açúcar redutor.",
      "detalhada": "A resolução segue a solução oficial do problema 8 (item 8.3.3), que marca H como açúcar redutor e como ácido urônico.\n\n**1) Fórmula:** uma hexose aldose é C6H12O6. Oxidar o CH2OH terminal a COOH troca CH2OH por COOH: perde 2 H e ganha 1 O → **C6H10O7**, a fórmula de H.\n\n**2) Descartes pela fórmula:** ácido aldônico (COOH no C1): C6H12O7; ácido aldárico (COOH nas duas pontas): C6H10O8; lactona: perde H2O.\n\n**3) Açúcar redutor:** o H isolado (monossacarídeo livre) tem o carbono anomérico como hemiacetal livre, que em solução se abre em aldeído e reduz Cu²⁺ do reagente de Fehling. Essa propriedade vale para H na forma livre; na heparina, o carbono anomérico de cada unidade está ligado glicosidicamente e não reduz.",
      "alternativas": [
        "Errada. Um ácido aldárico de uma hexose tem fórmula C6H10O8 (duas carboxilas); H tem só 7 átomos de O.",
        "Errada. Um ácido aldônico de hexose (como o glicônico) é C6H12O7 e não tem anel hemiacetal livre; H é C6H10O7.",
        "Errada. A lactona de um ácido de hexose perde água e tem fórmula C6H8O6 ou C6H10O6; H tem C6H10O7.",
        "Errada. H tem vários centros estereogênicos sem plano de simetria interna: é quiral.",
        "Correta. Aldose C6H12O6 com o CH2OH oxidado a COOH tem fórmula C6H10O7; na forma livre, o hemiacetal anomérico reduz o reagente de Fehling (açúcar redutor). Essa propriedade é do H isolado; na heparina, o C1 está ligado glicosidicamente e não reduz."
      ],
      "dica": "Ácidos de açúcares: aldônico (C1), urônico (C terminal) e aldárico (ambos); confira pela fórmula e pelo número de oxigênios."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 4: 48ª IChO (2016), problema 8",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%204%20-%20icho%2046-50.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1313",
    "materia": "quimica",
    "assunto": "Petróleo e combustíveis",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 2017,
      "orgao": "prova teórica (Nakhon Pathom), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 4 (ed. Anton Sirota, IUVENTA, Bratislava): 49ª IChO, Nakhon Pathom, 2017, problema 1. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O propeno pode ser obtido pela desidrogenação direta do propano: CH3–CH2–CH3(g) → CH3–CH=CH2(g) + H2(g). Use as entalpias médias de ligação ΔH(C=C) = 1,77 ΔH(C–C), ΔH(C–H) = 1,19 ΔH(C–C) e ΔH(H–H) = 1,05 ΔH(C–H). Qual é a variação de entalpia dessa reação, expressa em função de ΔH(C–C)?",
    "alternativas": [
      "−0,83 ΔH(C–C)",
      "−0,64 ΔH(C–C)",
      "−0,36 ΔH(C–C)",
      "+0,36 ΔH(C–C)",
      "+1,61 ΔH(C–C)"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "Rompem-se 2 C–H e 1 C–C (3,38 ΔH(C–C)) e formam-se 1 C=C e 1 H–H (3,02 ΔH(C–C)); a reação é endotérmica: ΔH = +0,36 ΔH(C–C).",
      "detalhada": "A resolução segue a solução oficial do problema 1 (item 1.1), que dá +0,360 ΔH(C–C).\n\n**1) Ligações do propano que mudam:** CH3–CH2–CH3 tem 2 C–C e 8 C–H; CH3–CH=CH2 tem 1 C–C, 1 C=C e 6 C–H; H2 tem 1 H–H.\n\n**2) Balanço (rompidas − formadas):** rompem-se 1 C–C (que vira C=C) e 2 C–H; formam-se 1 C=C e 1 H–H.\n\nΔH = [ΔH(C–C) + 2 ΔH(C–H)] − [ΔH(C=C) + ΔH(H–H)]\n= [1 + 2(1,19)] − [1,77 + 1,05 × 1,19]\n= 3,38 − 3,02 = **+0,36 ΔH(C–C)**.\n\nComo ΔH(C–C) é positiva, a reação é endotérmica, o que explica a dificuldade da desidrogenação direta.",
      "alternativas": [
        "Errada. Conta só uma ligação C–H rompida (1,19 + 1,00 − 3,02); a desidrogenação rompe duas C–H.",
        "Errada. Esquece de contar a quebra da ligação C–C que vira C=C (2,38 − 3,02).",
        "Errada. Tem o módulo certo, mas o sinal invertido: ΔH = rompidas − formadas > 0 (reação endotérmica).",
        "Correta. Rompem-se 2 C–H e 1 C–C: 2(1,19) + 1,00 = 3,38; formam-se 1 C=C e 1 H–H: 1,77 + 1,05 × 1,19 = 3,02; ΔH = 3,38 − 3,02 = +0,36 ΔH(C–C).",
        "Errada. Esquece a ligação H–H formada (3,38 − 1,77)."
      ],
      "dica": "Entalpia de reação por ligações: some as que se rompem e subtraia as que se formam; confira o sinal (positivo = endotérmica)."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 4: 49ª IChO (2017), problema 1",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%204%20-%20icho%2046-50.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1314",
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
      "ano": 2017,
      "orgao": "prova teórica (Nakhon Pathom), problema 3, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 4 (ed. Anton Sirota, IUVENTA, Bratislava): 49ª IChO, Nakhon Pathom, 2017, problema 3. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O metanol é produzido por CO(g) + 2 H2(g) → CH3OH(g). A 298 K e 1 bar, ΔfH° (kJ/mol): CO = −111, H2 = 0, CH3OH = −201; S° (J K⁻¹ mol⁻¹): CO = 198, H2 = 131, CH3OH = 240. Qual é o ΔG° da reação a 298 K?",
    "alternativas": [
      "−155,6 kJ/mol",
      "−90,0 kJ/mol",
      "−63,5 kJ/mol",
      "−24,4 kJ/mol",
      "+24,4 kJ/mol"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "ΔH° = −90 kJ/mol e ΔS° = −220 J K⁻¹ mol⁻¹; ΔG° = ΔH° − TΔS° = −90 + 298 × 0,220 ≈ −24,4 kJ/mol.",
      "detalhada": "A resolução segue a solução oficial do problema 3 (item 3.1), que dá ΔG° ≈ −24 kJ/mol (e Kp ≈ 10⁴ a 298 K).\n\n**1) Entalpia:** ΔH° = ΔfH(CH3OH) − ΔfH(CO) − 2 ΔfH(H2) = −201 − (−111) − 0 = **−90 kJ/mol**.\n\n**2) Entropia:** ΔS° = 240 − 198 − 2 × 131 = **−220 J K⁻¹ mol⁻¹** (3 mol de gás viram 1).\n\n**3) Energia livre:** ΔG° = ΔH° − TΔS° = −90 − 298 × (−0,220) = −90 + 65,6 = **−24,4 kJ/mol**.\n\nCom ΔG° ≈ −24 kJ/mol, Kp = exp(24 400/(8,3145 × 298)) ≈ 2×10⁴ (a solução oficial dá 1,6×10⁴ por arredondar ΔG° para −24 kJ).",
      "alternativas": [
        "Errada. Usa ΔG = ΔH + TΔS (sinal errado do termo de entropia).",
        "Errada. É ΔH° da reação; esquece o termo TΔS.",
        "Errada. Esquece o coeficiente 2 do H2 na entropia (ΔS = 240 − 198 − 131 = −89 J/K em vez de −220).",
        "Correta. ΔH° = −201 + 111 = −90 kJ/mol; ΔS° = 240 − 198 − 2 × 131 = −220 J/K; ΔG° = −90 − 298 × (−0,220) = −24,4 kJ/mol.",
        "Errada. Sinal trocado: a reação é espontânea nas condições padrão a 298 K (ΔG° < 0)."
      ],
      "dica": "Converta ΔS de J para kJ e lembre dos coeficientes estequiométricos: 2 mol de H2 contribuem com 2 × 131."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 4: 49ª IChO (2017), problema 3",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%204%20-%20icho%2046-50.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1315",
    "materia": "quimica",
    "assunto": "Soluções",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 2017,
      "orgao": "prova teórica (Nakhon Pathom), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 4 (ed. Anton Sirota, IUVENTA, Bratislava): 49ª IChO, Nakhon Pathom, 2017, problema 5. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O fosfato é determinado pelo método do azul de molibdênio, a 800 nm, com ε = 6720 dm³ mol⁻¹ cm⁻¹ e cubeta de 1,00 cm (1 mol de fosfato forma 1 mol do composto colorido). Para uma amostra muito concentrada, ajusta-se o zero de absorbância do aparelho com uma solução de referência do composto colorido a 7,5×10⁻⁵ mol/dm³; em relação a essa referência, a amostra tem transmitância T = 0,55. Qual é a concentração de fosfato na amostra?",
    "alternativas": [
      "3,6×10⁻⁵ mol/dm³",
      "3,9×10⁻⁵ mol/dm³",
      "8,2×10⁻⁵ mol/dm³",
      "1,14×10⁻⁴ mol/dm³",
      "2,6×10⁻⁴ mol/dm³"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "O zero foi ajustado com uma referência que absorve 6720 × 7,5×10⁻⁵ = 0,504; a absorbância medida (0,260) soma-se a ela: A_total = 0,764 e c = 0,764/6720 = 1,14×10⁻⁴ mol/dm³.",
      "detalhada": "A resolução segue a solução oficial do problema 5 (item 5.2.1), que dá 1,14×10⁻⁴ mol/dm³.\n\n**1) Absorbância da referência:** A_ref = εbc = 6720 × 1,00 × 7,5×10⁻⁵ = **0,504** (T_ref = 10⁻⁰·⁵⁰⁴ = 0,313).\n\n**2) Absorbância medida (relativa à referência):** A = −log 0,55 = **0,260**.\n\n**3) Absorbância real da amostra:** A_total = 0,504 + 0,260 = 0,764 (equivalentemente, T_amostra = 0,313 × 0,55 = 0,172).\n\n**4) Concentração:** c = A_total/(εb) = 0,764/6720 = **1,14×10⁻⁴ mol/dm³**.",
      "alternativas": [
        "Errada. Subtrai as absorbâncias (0,504 − 0,260); com a referência no zero, a absorbância medida soma-se à da referência.",
        "Errada. Usa só a absorbância medida (A = −log 0,55 = 0,260), esquecendo que o zero foi ajustado com a referência, que já absorve 0,504.",
        "Errada. Usa a transmitância como se fosse absorbância (0,55/6720).",
        "Correta. A_ref = 6720 × 7,5×10⁻⁵ = 0,504; A_medida = −log 0,55 = 0,260; A_total = 0,764 e c = 0,764/6720 = 1,14×10⁻⁴ mol/dm³.",
        "Errada. Usa logaritmo natural em vez de decimal (A = −ln T); a lei de Beer-Lambert usa log₁₀."
      ],
      "dica": "Ao ajustar o zero com uma referência colorida, as transmitâncias se multiplicam (ou as absorbâncias se somam)."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 4: 49ª IChO (2017), problema 5",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%204%20-%20icho%2046-50.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1316",
    "materia": "quimica",
    "assunto": "Soluções",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 2017,
      "orgao": "prova teórica (Nakhon Pathom), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 4 (ed. Anton Sirota, IUVENTA, Bratislava): 49ª IChO, Nakhon Pathom, 2017, problema 5. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Uma amostra aquosa de 100 cm³ de fosfomolibdato de amônio, (NH4)3PMo12O40, foi extraída com 5,0 cm³ de solvente orgânico. O coeficiente de partição orgânico/água é Kow = c(orgânica)/c(água) = 5,0, e a absorbância da fase orgânica é 0,200, com ε = 5000 dm³ mol⁻¹ cm⁻¹ e cubeta de 1,00 cm. Qual é a massa total de fósforo (M = 30,97 g/mol) na amostra aquosa original?",
    "alternativas": [
      "0,0062 mg",
      "0,0248 mg",
      "0,031 mg",
      "0,155 mg",
      "0,63 mg"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "A fase orgânica tem 2×10⁻⁷ mol e a aquosa, pelo Kow, 8×10⁻⁷ mol; o total 1×10⁻⁶ mol contém 1×10⁻⁶ × 30,97 g = 0,031 mg de fósforo (1 P por fórmula).",
      "detalhada": "A resolução segue a solução oficial do problema 5 (item 5.4), que dá 0,031 mg.\n\n**1) Concentração na fase orgânica (Beer-Lambert):** c(org) = A/(εb) = 0,200/5000 = **4×10⁻⁵ mol/dm³**; em 5,0 cm³: n(org) = 4×10⁻⁵ × 0,0050 = 2×10⁻⁷ mol.\n\n**2) Fase aquosa pelo Kow:** c(água) = c(org)/Kow = 4×10⁻⁵/5,0 = 8×10⁻⁶ mol/dm³; em 100 cm³: n(água) = 8×10⁻⁶ × 0,100 = 8×10⁻⁷ mol.\n\n**3) Total:** 2×10⁻⁷ + 8×10⁻⁷ = 1×10⁻⁶ mol de fosfomolibdato; cada fórmula tem 1 P.\n\n**4) Massa de P:** 1×10⁻⁶ mol × 30,97 g/mol = 3,1×10⁻⁵ g = **0,031 mg**.",
      "alternativas": [
        "Errada. Conta só o composto que está na fase orgânica (2×10⁻⁷ mol); falta o que ficou na água.",
        "Errada. Conta só o composto que ficou na fase aquosa (8×10⁻⁷ mol); falta o que foi extraído.",
        "Correta. c(org) = 0,200/5000 = 4×10⁻⁵ mol/dm³; n(org) = 2×10⁻⁷ mol; c(água) = 4×10⁻⁵/5 = 8×10⁻⁶ mol/dm³, n(água) = 8×10⁻⁷ mol; total 1×10⁻⁶ mol × 30,97 = 0,031 mg de P.",
        "Errada. É 5 vezes o valor correto: multiplica o total por Kow.",
        "Errada. Inverte o coeficiente de partição (c(água) = 5 × c(org) = 2×10⁻⁴ mol/dm³), obtendo muito mais composto na água."
      ],
      "dica": "Num equilíbrio de partição, o total é a soma das duas fases: calcule a quantidade em cada uma (concentração × volume)."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 4: 49ª IChO (2017), problema 5",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%204%20-%20icho%2046-50.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1317",
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
      "ano": 2018,
      "orgao": "prova teórica (Bratislava e Praga), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 4 (ed. Anton Sirota, IUVENTA, Bratislava): 50ª IChO, Bratislava e Praga, 2018, problema 1. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Numa dupla hélice de DNA palindrômica, a sequência de uma fita lida de 5′ para 3′ é igual à da fita complementar lida de 5′ para 3′ (exemplo: 5′-CGCGAATTCGCG-3′, pareada com 3′-GCGCTTAAGCGC-5′). Quantos dsDNA palindrômicos diferentes de 12 pares de bases existem?",
    "alternativas": [
      "24",
      "144",
      "1024",
      "2048",
      "4096"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "Os seis primeiros nucleotídeos têm 4 escolhas cada; os seis últimos são o complemento reverso dos primeiros. Total: 4⁶ = 4096.",
      "detalhada": "A resolução segue a solução oficial do problema 1 (item 1.1), que dá 4⁶ = 4096.\n\n**1) Condição:** numa fita palindrômica, a segunda metade é o complemento reverso da primeira (A↔T, C↔G), então basta escolher a primeira metade.\n\n**2) Contagem:** 12 pares de bases → 6 nucleotídeos livres (posições 1 a 6), cada um com 4 opções (A, T, C, G): 4 × 4 × 4 × 4 × 4 × 4 = **4⁶ = 4096**.\n\n(Nota: não existe dsDNA palindrômico com número ímpar de pares de bases, pois a base central teria de ser complementar de si mesma.)",
      "alternativas": [
        "Errada. É 4 × 6: soma as opções por posição em vez de multiplicá-las.",
        "Errada. É 12², sem relação com o número de combinações de nucleotídeos.",
        "Errada. É 4⁵: considera só 5 posições livres, mas são 6 (as posições 7 a 12 é que são determinadas).",
        "Errada. É 2¹¹: não corresponde a nenhuma regra de contagem do problema (cada posição livre tem 4 opções, e não 2).",
        "Correta. Os 6 primeiros nucleotídeos de uma fita são livres (4 opções cada) e os 6 últimos ficam determinados pela autocomplementaridade: 4⁶ = 4096."
      ],
      "dica": "Em estruturas autocomplementares, só metade da sequência é livre: o número de possibilidades é 4 elevado a metade do comprimento."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 4: 50ª IChO (2018), problema 1",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%204%20-%20icho%2046-50.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1318",
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
      "ano": 2018,
      "orgao": "prova teórica (Bratislava e Praga), problema 2, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 4 (ed. Anton Sirota, IUVENTA, Bratislava): 50ª IChO, Bratislava e Praga, 2018, problema 2. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "A L-isoleucina é o ácido (2S,3S)-2-amino-3-metilpentanoico. Em temperatura ambiente ela epimeriza lentamente no carbono α e forma o ácido (2R,3S)-2-amino-3-metilpentanoico, a D-alo-isoleucina. Qual afirmação compara corretamente esses dois compostos?",
    "alternativas": [
      "Têm a mesma rotação específica, mas pontos de fusão diferentes.",
      "Têm rotações específicas de mesmo módulo e sinais opostos, e o mesmo ponto de fusão.",
      "Têm rotações específicas diferentes, mas o mesmo ponto de fusão.",
      "A D-alo-isoleucina não é opticamente ativa.",
      "Têm rotações específicas diferentes e pontos de fusão diferentes."
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "Os compostos diferem em um só de dois centros estereogênicos: são diastereoisômeros (epímeros) e, por isso, têm rotações específicas e pontos de fusão diferentes.",
      "detalhada": "A resolução segue a solução oficial do problema 2 (item 2.1).\n\n**1) Relação estereoquímica:** o enantiômero da L-isoleucina (2S,3S) seria o (2R,3R). O composto (2R,3S) inverte apenas o centro C-2: não é imagem especular, é um **diastereoisômero** (mais especificamente, um epímero em C-2).\n\n**2) Propriedades:** enantiômeros têm as mesmas propriedades físicas, exceto o sinal da rotação; diastereoisômeros têm propriedades físicas diferentes (ponto de fusão, solubilidade, rotação específica etc.).\n\n**3) Atividade óptica:** a D-alo-isoleucina tem 2 centros estereogênicos e é quiral, logo opticamente ativa.",
      "alternativas": [
        "Errada. Diastereoisômeros, em geral, têm rotações específicas diferentes; a alternativa afirma que são iguais.",
        "Errada. Isso vale para enantiômeros; aqui só um dos dois centros está invertido, então não são imagens especulares.",
        "Errada. Diastereoisômeros costumam ter pontos de fusão diferentes; a alternativa afirma que são iguais.",
        "Errada. Tem dois centros estereogênicos e nenhum plano de simetria; é quiral e opticamente ativa.",
        "Correta. (2S,3S) e (2R,3S) diferem em só um centro: são epímeros, isto é, diastereoisômeros, com propriedades físicas diferentes (rotação específica, ponto de fusão)."
      ],
      "dica": "Mudou todos os centros: enantiômeros. Mudou só alguns: diastereoisômeros, com propriedades físicas diferentes."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 4: 50ª IChO (2018), problema 2",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%204%20-%20icho%2046-50.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      },
      {
        "titulo": "PubChem: L-Isoleucine",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/L-Isoleucine"
      }
    ]
  },
  {
    "id": "qui-1319",
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
      "ano": 2018,
      "orgao": "prova teórica (Bratislava e Praga), problema 2, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 4 (ed. Anton Sirota, IUVENTA, Bratislava): 50ª IChO, Bratislava e Praga, 2018, problema 2. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "A isoleucina tem dois centros estereogênicos (C-2 e C-3). Quantos estereoisômeros possíveis tem o tripeptídeo Ile–Ile–Ile (com a sequência dos resíduos fixa e cada resíduo podendo ter qualquer configuração)?",
    "alternativas": [
      "8",
      "32",
      "36",
      "64",
      "128"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "São 6 centros estereogênicos (2 por resíduo, 3 resíduos); sem simetria interna, o número de estereoisômeros é 2⁶ = 64.",
      "detalhada": "A resolução segue a solução oficial do problema 2 (item 2.4), que dá 2⁶ = 64.\n\n**1) Centros estereogênicos:** cada isoleucina tem o carbono α (C-2) e o carbono β (C-3), ambos estereogênicos; em Ile–Ile–Ile há 3 × 2 = **6** centros.\n\n**2) Regra 2ᴺ:** para N centros estereogênicos independentes, sem simetria que reduza o total, o número de estereoisômeros é 2ᴺ. Como o tripeptídeo tem extremidades diferentes (N-terminal e C-terminal), não há estruturas meso.\n\n**3) Total:** 2⁶ = **64**.",
      "alternativas": [
        "Errada. Conta só os 3 carbonos α (2³); cada resíduo também tem o carbono β estereogênico.",
        "Errada. É 2⁵: perde um dos 6 centros estereogênicos.",
        "Errada. É 6², sem relação com a regra 2ᴺ para N centros estereogênicos.",
        "Correta. O tripeptídeo tem 3 × 2 = 6 centros estereogênicos; o número máximo de estereoisômeros é 2⁶ = 64.",
        "Errada. É 2⁷: conta um centro a mais do que existe."
      ],
      "dica": "Conte todos os centros estereogênicos da molécula (aqui, 2 por resíduo) e aplique 2ᴺ, verificando se há simetria meso."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 4: 50ª IChO (2018), problema 2",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%204%20-%20icho%2046-50.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1320",
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
      "ano": 2018,
      "orgao": "prova teórica (Bratislava e Praga), problema 3, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Volume 4 (ed. Anton Sirota, IUVENTA, Bratislava): 50ª IChO, Bratislava e Praga, 2018, problema 3. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Um eletrolisador de membrana polimérica opera a 2,00 V e é alimentado por uma usina eólica de 10,0 MW que funcionou a plena potência das 22 h às 6 h. A eletrólise produziu 1090 kg de hidrogênio puro. Qual é o rendimento da eletrólise, definido como a massa de H2 produzida dividida pela massa teórica (F = 96 485 C/mol; M(H2) = 2,02 g/mol)?",
    "alternativas": [
      "36,2%",
      "57,8%",
      "72,3%",
      "82,6%",
      "145%"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "Em 8 h a usina fornece 2,88×10¹¹ J; a 2,00 V isso são 1,44×10¹¹ C e 1507 kg de H2 teóricos (2 e⁻ por H2); o rendimento é 1090/1507 = 72,3%.",
      "detalhada": "A resolução segue a solução oficial do problema 3 (item 3.5), que dá 72,3%.\n\n**1) Energia elétrica:** de 22 h a 6 h são 8 h: W = P·t = 10,0×10⁶ W × 8 × 3600 s = **2,88×10¹¹ J**.\n\n**2) Carga transferida:** Q = W/U = 2,88×10¹¹ J / 2,00 V = **1,44×10¹¹ C**.\n\n**3) Massa teórica de H2** (2 H⁺ + 2 e⁻ → H2): m = Q·M/(zF) = 1,44×10¹¹ × 2,02×10⁻³ kg/mol / (2 × 96 485) = **1507 kg**.\n\n**4) Rendimento:** 1090/1507 = **72,3%**.",
      "alternativas": [
        "Errada. Admite 1 elétron por molécula de H2 (a massa teórica fica o dobro); a formação de H2 envolve 2 elétrons.",
        "Errada. Usa 10 horas de funcionamento em vez de 8 (das 22 h às 6 h).",
        "Correta. W = 10,0×10⁶ W × 8 × 3600 s = 2,88×10¹¹ J; Q = W/U = 1,44×10¹¹ C; n(H2) = Q/2F = 7,46×10⁵ mol, ou 1507 kg teóricos; 1090/1507 = 72,3%.",
        "Errada. Usa 7 horas de funcionamento em vez de 8.",
        "Errada. Admite 4 elétrons por H2 (metade da massa teórica); o resultado maior que 100% já indica erro."
      ],
      "dica": "Em eletrólise, a massa teórica sai da carga total (Q = W/U) e do número de elétrons por molécula; confira o intervalo de tempo."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 4: 50ª IChO (2018), problema 3",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%204%20-%20icho%2046-50.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  }
] });
