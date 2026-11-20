/* Questões de Química adaptadas dos problemas teóricos da 51ª, 52ª, 54ª e 55ª Olimpíadas Internacionais de Química (IChO 2019, 2020, 2022 e 2023),
   exceto a 53ª (2021, Japão), que não é usada.
   Fonte: "The Competition Problems from the International Chemistry Olympiads, Volume 5" (Series 5), IChO International Information Centre / NIVAM,
   Bratislava, 2026, editores Anton Sirota e Martin Putala. Original: https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf
   Página da coleção: https://icho.sk/competition-problems/
   Permissão do original (página de créditos do volume): "You are free to copy, distribute, transmit or adapt this publication or its parts for unlimited teaching
   purposes, however, as it is usual and required in the chemical literature, you are obliged to attribute your copies, transmissions in internet or adaptations
   with a reference to: The Competition Problems from the International Chemistry Olympiads, Series 5, IChO International Information Center, Bratislava, 2026."
   Este arquivo é uma adaptação (tradução para o português do Brasil, conversão para múltipla escolha e comentários novos), com as respostas conferidas na
   solução oficial de cada problema. O conteúdo adaptado é distribuído gratuitamente, sem fins comerciais, para estudo, com a mesma citação do original. */
Banco.registrar({ questoes: [
  {
    "id": "qui-1321",
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
      "ano": 2019,
      "orgao": "prova teórica (Paris), problema 6, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 51ª IChO, Paris, 2019, problema 6. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O homopolímero 1, α-metoxi-ω-aminopoli(etilenoglicol), CH3–O–(CH2CH2O)n–CH2CH2–NH2, foi analisado por RMN de 1H (DMSO-d6, 60 °C). Sinais e áreas relativas: 2,7 ppm, área 0,6 (NH2, some com D2O); 3,3 ppm, área 0,9 (OCH3); 3,4 ppm, área 0,6 (CH2 ligado ao N); cerca de 3,5 ppm, área 133,7 (os 4 H de cada unidade –OCH2CH2– mais os 2 H do CH2 terminal ligado ao O, que valem 0,6). Qual é o grau de polimerização médio n?",
    "alternativas": [
      "444",
      "222",
      "111",
      "37",
      "148"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "A área por H vem do OCH3 (0,9/3 = 0,3); as unidades repetidas têm 4 H cada e a área da cadeia é 133,7 − 0,6 = 133,1. Logo n ≈ 111.",
      "detalhada": "**1) Área de 1 H:** o OCH3 (3 H) tem área 0,9, então 1 H vale 0,9/3 = 0,3.\n\n**2) Área dos H das unidades repetidas:** o sinal em 3,5 ppm (133,7) inclui os 2 H do CH2 terminal ligado ao O, que valem 0,6. Sobram 133,7 − 0,6 = 133,1.\n\n**3) Número de unidades:** cada –OCH2CH2– tem 4 H, então n = (133,1/4)/0,3 = 33,3/0,3 ≈ 111.",
      "alternativas": [
        "Esquece de dividir por 4 H por unidade: 133,1/0,3 ≈ 444 conta átomos de H da cadeia, não unidades repetidas.",
        "Divide por 2 em vez de 4: trata cada unidade –OCH2CH2– como se tivesse só 2 H, mas ela tem 4 H.",
        "n = (133,1/4)/(0,9/3) = 33,3/0,3 ≈ 111: desconta-se o CH2 terminal, divide-se por 4 H por unidade e compara-se com a área por H do OCH3.",
        "Usa a área do OCH3 (0,9) como se fosse a de 1 H. Ela corresponde a 3 H, então 1 H vale 0,3.",
        "Divide por 3 H por unidade (como no CH3) em vez de 4: 133,1/(3×0,3) ≈ 148."
      ],
      "dica": "Em RMN, a área é proporcional ao número de H: calibre com um grupo conhecido (aqui o OCH3) e divida pelo número de H de cada unidade."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 51ª IChO (2019), problema 6",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1322",
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
      "ano": 2019,
      "orgao": "prova teórica (Paris), problema 6, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 51ª IChO, Paris, 2019, problema 6. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O bloco de polietilenoglicol (PEG) do copolímero em bloco 3 tem n = 111 unidades –OCH2CH2– (44 g/mol cada). O segundo bloco vem da polimerização de um N-carboxianidrido de lisina protegida; cada unidade repetida desse bloco tem 262 g/mol e um grupo benzílico com 5 H aromáticos. As extremidades da cadeia somam 75 g/mol. No espectro de RMN de 1H de 3, o sinal dos 4n H do PEG tem área 622 e o sinal dos 5 H aromáticos tem área 119. Qual é a massa molar numérica média Mn do copolímero?",
    "alternativas": [
      "4,9 kg/mol",
      "4,5 kg/mol",
      "13,9 kg/mol",
      "27,2 kg/mol",
      "9,4 kg/mol"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "Calibrando a área por H com o PEG (622/444 ≈ 1,40), os 5 H aromáticos dão m = 119/(5×1,40) = 17. Mn = 111×44 + 17×262 + 75 ≈ 9,4 kg/mol.",
      "detalhada": "**1) Área por H:** o PEG tem 4×111 = 444 H e área 622, então 1 H vale 622/444 ≈ 1,40.\n\n**2) Unidades do 2º bloco:** os 5 H aromáticos valem 5×1,40 = 7,0 de área por unidade; m = 119/7,0 ≈ 17.\n\n**3) Mn:** 111×44 + 17×262 + 75 = 4884 + 4454 + 75 = 9413 g/mol ≈ 9,4 kg/mol.",
      "alternativas": [
        "É só a massa do bloco de PEG (111×44 = 4884 g/mol): ignora o segundo bloco e as extremidades.",
        "É só a massa do segundo bloco (17×262 ≈ 4454 g/mol): esquece o PEG.",
        "Divide a área aromática por 2,5 em vez de por 5 H, obtendo m ≈ 34 em vez de 17.",
        "Esquece de dividir por 5 H aromáticos: m = 119/1,40 ≈ 85 unidades, cinco vezes demais.",
        "Área por H = 622/(4×111) ≈ 1,40; m = 119/(5×1,40) ≈ 17 unidades; Mn = 111×44 + 17×262 + 75 ≈ 9413 g/mol ≈ 9,4 kg/mol."
      ],
      "dica": "Para a massa de um copolímero em bloco, some os blocos e as extremidades; o número de unidades de cada bloco vem das áreas de RMN corrigidas por H."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 51ª IChO (2019), problema 6",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1323",
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
      "ano": 2019,
      "orgao": "prova teórica (Paris), problema 6, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 51ª IChO, Paris, 2019, problema 6. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Cromatografia de exclusão por tamanho (SEC) de copolímeros em bloco. A calibração com padrões de massa conhecida deu uma reta log(M/kg mol⁻¹) = 9,05 − 1,26·Ve, com Ve (volume de eluição) em cm³. O pico do copolímero X aparece em Ve = 6,18 cm³. O primeiro bloco (PEG) tem 111 unidades de 44 g/mol, as extremidades somam 75 g/mol e cada unidade do segundo bloco tem 262 g/mol. Quantas unidades m tem o segundo bloco de X?",
    "alternativas": [
      "51",
      "70",
      "17",
      "18",
      "111"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "A reta de calibração dá M = 10^1,263 ≈ 18,3 kg/mol. Descontando o PEG (4884 g/mol) e as extremidades (75 g/mol) e dividindo por 262, m ≈ 51.",
      "detalhada": "**1) Massa de X:** log M = 9,05 − 1,26×6,18 = 1,263; M = 10^1,263 ≈ 18,3 kg/mol = 18 330 g/mol.\n\n**2) Descontar o resto:** 18 330 − 111×44 − 75 = 13 371 g/mol pertencem ao segundo bloco.\n\n**3) Unidades:** m = 13 371/262 ≈ 51.",
      "alternativas": [
        "log M = 9,05 − 1,26×6,18 = 1,263, logo M ≈ 18,3 kg/mol = 18 330 g/mol; m = (18 330 − 111×44 − 75)/262 ≈ 51.",
        "Divide a massa total (menos extremidades) por 262 sem descontar o bloco de PEG: (18 330 − 75)/262 ≈ 70.",
        "É o número de unidades do copolímero analisado por RMN, não o do pico X da SEC.",
        "É a massa molar de X em kg/mol (18,3), não o número de unidades.",
        "É o número de unidades do bloco de PEG (n), não do segundo bloco."
      ],
      "dica": "Na SEC, volumes de eluição maiores correspondem a massas menores; a massa vem da reta de calibração, e só depois se separam os blocos."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 51ª IChO (2019), problema 6",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1324",
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
      "ano": 2019,
      "orgao": "prova teórica (Paris), problema 7, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 51ª IChO, Paris, 2019, problema 7. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Numa síntese de um [2]catenano, um álcool primário R–CH2–OH é primeiro tratado com cloreto de mesila (MsCl), formando o mesilato R–CH2–OMs (F). Em seguida, F reage com LiBr em acetona e forma o brometo R–CH2–Br (G). Qual alternativa descreve corretamente o papel do MsCl e o tipo de reação F → G?",
    "alternativas": [
      "O MsCl transforma o grupo OH num bom grupo de saída (mesilato); a troca por Br⁻ é uma substituição nucleofílica unimolecular (SN1).",
      "O MsCl é um grupo protetor do álcool; a troca do mesilato por Br⁻ é uma SN2.",
      "O MsCl é um grupo diretor; F → G é uma substituição eletrofílica aromática.",
      "O MsCl transforma o grupo OH num bom grupo de saída (mesilato); a troca por Br⁻ é uma substituição nucleofílica bimolecular (SN2).",
      "O MsCl é um grupo desativante; F → G é uma substituição nucleofílica aromática."
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "MsCl converte OH (grupo de saída ruim) em mesilato (grupo de saída excelente); Br⁻ então desloca o mesilato por SN2 num carbono primário.",
      "detalhada": "**1) Papel do MsCl:** ele reage com o OH e forma o mesilato R–O–SO2CH3. O íon mesilato é uma base muito fraca, portanto um ótimo grupo de saída.\n\n**2) Mecanismo F → G:** o nucleófilo Br⁻ (do LiBr, solúvel em acetona) ataca o carbono primário pelo lado oposto ao grupo de saída, em uma só etapa, com estado de transição de cinco ligações parciais: SN2.",
      "alternativas": [
        "O primeiro papel está certo, mas SN1 exigiria carbocátion estável; num carbono primário e com nucleófilo forte (Br⁻) em acetona o caminho é SN2.",
        "O mesilato não protege o álcool: ele é substituído na etapa seguinte, ou seja, funciona como grupo de saída.",
        "Não há anel aromático sendo substituído: o carbono atacado é alifático, e Br⁻ é nucleófilo, não eletrófilo.",
        "O OH⁻ é um grupo de saída ruim; como mesilato ele sai facilmente, e o Br⁻ ataca o carbono primário por trás em uma única etapa (SN2).",
        "Mesma confusão: o centro reativo é um carbono sp³ primário, não um anel aromático."
      ],
      "dica": "Álcool é um mau grupo de saída (OH⁻): transforme o OH em mesilato ou tosilato e o nucleófilo faz a substituição."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 51ª IChO (2019), problema 7",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1325",
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
      "ano": 2019,
      "orgao": "prova teórica (Paris), problema 8, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 51ª IChO, Paris, 2019, problema 8. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Inositóis são cicloexano-1,2,3,4,5,6-hexóis (C6H12O6). Essa família tem 9 estereoisômeros, contando os enantiômeros. Quantos desses estereoisômeros são opticamente ativos?",
    "alternativas": [
      "1",
      "2",
      "7",
      "9",
      "4"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Dos nove estereoisômeros, sete são meso (inativos) e dois formam um par de enantiômeros (chiro-inositol): 2 são opticamente ativos.",
      "detalhada": "Com seis carbonos estereogênicos num anel, a maioria das combinações tem plano de simetria. Dos 9 estereoisômeros, 7 são meso: scilo-, myo-, epi-, allo-, muco-, neo- e cis-inositol. Os 2 restantes, D-chiro- e L-chiro-inositol, são imagens especulares não sobreponíveis e giram o plano da luz polarizada em sentidos opostos. A resposta segue a solução oficial do problema (que pede para desenhar justamente as estruturas opticamente ativas).",
      "alternativas": [
        "Um composto quiral sempre vem acompanhado de seu enantiômero, que também é ativo; não pode haver só um.",
        "Sete dos nove são compostos meso (têm plano de simetria) e, portanto, inativos. Os outros dois são o par de enantiômeros do chiro-inositol, os únicos opticamente ativos.",
        "Conta os meso (cis-, epi-, allo-, myo-, muco-, neo- e scilo-inositol), que têm plano de simetria e não giram a luz polarizada.",
        "Todos os nove só seriam ativos se nenhum tivesse plano de simetria, o que não ocorre.",
        "Não há dois pares de enantiômeros: só o chiro-inositol existe como par (+) e (−)."
      ],
      "dica": "Meso = tem plano de simetria interno = inativo, mesmo com vários centros estereogênicos."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 51ª IChO (2019), problema 8",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1326",
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
      "ano": 2019,
      "orgao": "prova teórica (Paris), problema 9, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 51ª IChO, Paris, 2019, problema 9. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "A levobupivacaína, anestésico local, é sintetizada a partir do aminoácido natural L-lisina. O carbono α estereogênico da L-lisina (cloridrato) está ligado a –NH3⁺, –COOH, –CH2CH2CH2CH2NH3⁺ e H. Qual é a sua configuração absoluta e a ordem de prioridade CIP desses substituintes (1 > 2 > 3 > 4)?",
    "alternativas": [
      "(R); –NH3⁺ > –COOH > –CH2CH2CH2CH2NH3⁺ > H",
      "(S); –COOH > –NH3⁺ > –CH2CH2CH2CH2NH3⁺ > H",
      "(R); –COOH > –NH3⁺ > –CH2CH2CH2CH2NH3⁺ > H",
      "(S); –CH2CH2CH2CH2NH3⁺ > –COOH > –NH3⁺ > H",
      "(S); –NH3⁺ > –COOH > –CH2CH2CH2CH2NH3⁺ > H"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "Pela regra CIP: –NH3⁺ > –COOH > cadeia lateral > H; com o H afastado, a sequência gira no sentido anti-horário: configuração S.",
      "detalhada": "**1) Prioridades:** o N (Z = 7) tem prioridade 1. Entre os dois carbonos, o do –COOH tem substituintes (O, O, O) e o da cadeia lateral (C, H, H); logo –COOH é 2 e a cadeia lateral é 3. O H é 4.\n\n**2) Configuração:** olhando com o H para trás, 1 → 2 → 3 gira no sentido anti-horário: (S). A L-lisina natural é (S); a letra L fala da configuração relativa (ao gliceraldeído), e nem todo L-aminoácido é S (a L-cisteína é R).",
      "alternativas": [
        "A ordem de prioridade está certa, mas a rotação é anti-horária (S) para o L-aminoácido natural.",
        "Prioridade errada: o –COOH não pode vir antes do N (Z = 7). Com essa ordem a configuração seria R, então o descritor S também está errado.",
        "Prioridade errada (N vence C) e descritor errado.",
        "A cadeia lateral só tem C e H ligados ao primeiro carbono e perde para N e para –COOH.",
        "N (Z = 7) vence C; entre os carbonos, –COOH tem (O,O,O) e a cadeia lateral só (C,H,H). Com H atrás, N → COOH → cadeia gira no sentido anti-horário: S."
      ],
      "dica": "Prioridade CIP olha o número atômico do primeiro átomo; só em empate se desce na cadeia."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 51ª IChO (2019), problema 9",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1327",
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
      "ano": 2019,
      "orgao": "prova teórica (Paris), problema 9, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 51ª IChO, Paris, 2019, problema 9. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Na síntese da levobupivacaína, uma amida é formada a partir de um ácido carboxílico e uma amina na presença de DCC (diciclo-hexilcarbodiimida), e um álcool é tratado com cloreto de tosila (TsCl) para depois ser substituído por uma amina. Qual alternativa descreve o papel de cada reagente?",
    "alternativas": [
      "O DCC protege o grupo amino; o TsCl torna o OH um bom grupo de saída, permitindo a substituição nucleofílica do grupo hidroxila.",
      "O DCC ativa o ácido carboxílico para formar a ligação amida; o TsCl permite a substituição eletrofílica do grupo hidroxila.",
      "O DCC ativa o ácido carboxílico para formar a ligação amida; o TsCl torna o OH um bom grupo de saída, permitindo a substituição nucleofílica do grupo hidroxila.",
      "O DCC protege o grupo hidroxila; o TsCl ativa o ácido carboxílico para a ligação amida.",
      "O DCC é o agente redutor que converte o ácido em aldeído; o TsCl protege a amina."
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "DCC é agente de acoplamento (ativa o ácido para formar amida); TsCl converte o OH em tosilato, bom grupo de saída para substituição nucleofílica.",
      "detalhada": "**DCC:** a carbodiimida reage com o ácido carboxílico e forma uma O-acilisoureia, muito mais eletrofílica que o ácido. A amina ataca essa espécie e forma a amida, liberando a diciclo-hexilureia.\n\n**TsCl:** reage com o OH e forma o tosilato (R–OTs). O íon tosilato é base fraca e sai com facilidade; o nucleófilo (aqui, uma amina) substitui então o antigo grupo hidroxila. As respostas seguem a solução oficial do problema.",
      "alternativas": [
        "O DCC não protege nada: ele ativa o ácido para o acoplamento. Só o segundo papel está certo.",
        "O DCC está certo, mas o carbono do tosilato é eletrófilo e o OH é substituído por um nucleófilo: a substituição é nucleofílica.",
        "A carbodiimida converte o –COOH num intermediário reativo que a amina ataca; o tosilato formado a partir do álcool é deslocado pelo nucleófilo.",
        "Os papéis estão trocados e o DCC não é grupo protetor.",
        "Nenhum dos dois faz isso: o DCC é um agente de acoplamento e o TsCl ativa álcoois como tosilatos."
      ],
      "dica": "Se um álcool vai ser substituído, ative-o com TsCl ou MsCl; se um ácido vai virar amida, ative-o com DCC ou similar."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 51ª IChO (2019), problema 9",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1328",
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
      "ano": 2019,
      "orgao": "prova teórica (Paris), problema 9, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 51ª IChO, Paris, 2019, problema 9. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "A pureza enantiomérica de aminoácidos pode ser verificada derivatizando o grupo α-amino com o ácido de Mosher enantiopuro de configuração (S). Se for usada lisina racêmica (mistura 1:1 de D e L) e considerar-se que só o grupo α-amino é derivatizado, o que se forma?",
    "alternativas": [
      "Dois diastereoisômeros: (S)-Mosher–L-lisina e (S)-Mosher–D-lisina.",
      "Dois enantiômeros.",
      "Uma mistura racêmica de dois enantiômeros.",
      "Quatro diastereoisômeros.",
      "Quatro compostos: dois enantiômeros e dois diastereoisômeros."
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "Reagente quiral enantiopuro + racemato = dois diastereoisômeros, distinguíveis por RMN ou cromatografia.",
      "detalhada": "O ácido de Mosher (S) tem um centro fixo. A lisina racêmica fornece L (S) e D (R). Os produtos são (S,S) e (S,R): estereoisômeros que não são imagens especulares, ou seja, diastereoisômeros. Como têm propriedades físicas diferentes, as proporções entre eles (e, portanto, a pureza enantiomérica da lisina) podem ser medidas por RMN ou por cromatografia líquida. Resposta conforme a solução oficial.",
      "alternativas": [
        "Ao unir um reagente enantiopuro a um racemato obtêm-se dois produtos com configurações (S,S) e (S,R): diastereoisômeros, com propriedades diferentes (RMN e cromatografia os distinguem).",
        "Os produtos não são imagens especulares: só um dos centros é invertido; o centro do ácido de Mosher é o mesmo (S) nos dois.",
        "O reagente enantiopuro impede que o produto seja racêmico.",
        "Só há dois centros em jogo (o do Mosher, fixo, e o do α-carbono da lisina, D ou L), logo apenas duas combinações.",
        "Mesma contagem excessiva: com um dos centros enantiopuro só existem dois produtos."
      ],
      "dica": "Racemato + agente quiral enantiopuro: dois diastereoisômeros. Dois enantiômeros só se separam por meios quirais."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 51ª IChO (2019), problema 9",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1329",
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
      "ano": 2019,
      "orgao": "prova teórica (Paris), problema 3, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 51ª IChO, Paris, 2019, problema 3. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Adiciona-se amônia a 0,1 mol de AgCl(s) em 1 dm³ de água até desaparecer o último grão de sólido; nesse ponto [NH3] = 1,78 mol/dm³. Despreze a diluição. Dados a 298 K: pKs(AgCl) = 9,7; constante de formação do complexo [Ag(NH3)n]⁺: β = 10^7,2. Qual é a estequiometria n do complexo?",
    "alternativas": [
      "n = 1",
      "n = 3",
      "n = 6",
      "n = 2",
      "n = 31"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "A reação AgCl + n NH3 ⇌ [Ag(NH3)n]⁺ + Cl⁻ tem K = Ks·β = 10^−2,5. Com [complexo] = [Cl⁻] = 0,1 e [NH3] = 1,78, obtém-se 1,78^n = 3,16 e n = 2.",
      "detalhada": "A resolução segue a solução oficial do problema 3.\n\n**1) Constante:** AgCl ⇌ Ag⁺ + Cl⁻ (Ks = 10^−9,7) somada a Ag⁺ + n NH3 ⇌ [Ag(NH3)n]⁺ (β = 10^7,2) dá K = 10^−2,5 = 3,16×10⁻³.\n\n**2) Último grão de sólido:** todo o AgCl dissolveu, então [[Ag(NH3)n]⁺] = [Cl⁻] = 0,1 mol/dm³.\n\n**3) Cálculo de n:** 3,16×10⁻³ = (0,1×0,1)/1,78^n → 1,78^n = 3,16 → n = ln 3,16/ln 1,78 = 2,0.",
      "alternativas": [
        "Com n = 1 a constante seria 0,01/1,78 = 5,6×10⁻³, diferente do K calculado (3,2×10⁻³).",
        "Com n = 3 a constante seria 0,01/1,78³ = 1,8×10⁻³, diferente do K calculado.",
        "Esquece que [Cl⁻] também é 0,1 mol/dm³ no último grão, usando só 0,1/1,78^n = K.",
        "K = Ks·β = 10^−2,5 = 3,16×10⁻³ = [complexo][Cl⁻]/[NH3]^n = 0,1×0,1/1,78^n, logo 1,78^n = 3,16 e n = 2.",
        "Usa só o produto de solubilidade (10^−9,7) como constante, esquecendo a formação do complexo (β)."
      ],
      "dica": "Some reações = multiplique constantes. Quando um sólido acaba de se dissolver, as concentrações dos produtos dependem só da quantidade inicial."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 51ª IChO (2019), problema 3",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1330",
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
      "ano": 2020,
      "orgao": "prova teórica (Istambul), problema 3, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 52ª IChO, Istambul, 2020, problema 3. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Quando o éter alílico do 2-naftol (2-(prop-2-en-1-iloxi)naftaleno) é aquecido, ocorre um rearranjo [3,3]-sigmatrópico (de Claisen) e se forma um fenol alílico. Qual é o produto principal?",
    "alternativas": [
      "3-(prop-2-en-1-il)naftalen-2-ol",
      "1-(prop-2-en-1-il)naftalen-2-ol",
      "2-(prop-2-en-1-il)naftalen-1-ol",
      "1-(prop-1-en-1-il)naftalen-2-ol",
      "Naftalen-2-ol e propeno"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Claisen do 2-naftil alil éter: o alil migra para o C1 (ortho), com perda de aromaticidade em apenas um anel no estado de transição; o produto principal é o 1-alilnaftalen-2-ol.",
      "detalhada": "A resolução segue a solução oficial do problema 3. No rearranjo de Claisen, o alil vinil éter (aqui, o éter alílico de um enol aromático) forma uma nova ligação C–C na posição ortho e o oxigênio vira C=O (que tautomeriza para o fenol). No 2-naftol há duas posições ortho: C1 e C3. No C1, o estado de transição desfaz a aromaticidade de apenas um anel; no C3, desfaria a dos dois anéis. Por isso o C1 é favorecido, e o produto principal é o 1-alil-2-naftol.",
      "alternativas": [
        "A migração para o C3 também é ortho, mas exigiria perder a aromaticidade dos dois anéis; é o produto minoritário.",
        "O alil migra para o carbono 1, vizinho ao C–O. No estado de transição só um anel perde a aromaticidade (o outro anel benzênico permanece intacto), o que favorece esse caminho.",
        "Troca as posições: a hidroxila fica no C2 (onde estava o oxigênio) e o alil entra no vizinho, o C1.",
        "O alil migra sem isomerizar a dupla: continua prop-2-en-1-il (CH2–CH=CH2).",
        "Seria uma clivagem do éter, não um rearranjo [3,3]-sigmatrópico (que conserva todos os átomos)."
      ],
      "dica": "No naftaleno, a ligação C1–C2 tem mais caráter de dupla; reações que desfazem só um anel aromático são preferidas."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 52ª IChO (2020), problema 3",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1331",
    "materia": "quimica",
    "assunto": "Atomística",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 2020,
      "orgao": "prova teórica (Istambul), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 52ª IChO, Istambul, 2020, problema 5. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O β-caroteno (pigmento da cenoura) tem uma cadeia conjugada de 22 carbonos e 22 elétrons π; seu máximo de absorção é 455 nm. Considere as afirmações: (i) absorve na região visível do espectro; (ii) a transição HOMO→LUMO ocorre pela absorção de um fóton de infravermelho; (iii) o espaçamento entre os níveis 22 e 23 é igual à energia do fóton de IV na cor laranja; (iv) absorve luz verde/azul e transmite vermelho/amarelo; (v) absorve no UV-Vis porque a molécula não tem momento de dipolo líquido. Qual par de afirmações explica por que ele é laranja?",
    "alternativas": [
      "(i) e (ii)",
      "(ii) e (iii)",
      "(iii) e (iv)",
      "(i) e (iv)",
      "(i) e (v)"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "O β-caroteno absorve luz azul-esverdeada no visível e transmite vermelho e amarelo: dá laranja. As afirmações corretas são (i) e (iv).",
      "detalhada": "A resolução segue a solução oficial do problema 5. A cor que vemos é a complementar à absorvida. A cadeia conjugada longa reduz a diferença de energia entre HOMO e LUMO até a região do visível (455 nm, azul). A luz azul-verde é absorvida; vermelho e amarelo passam e dão a cor laranja. A afirmação (ii) erra a região do espectro; (iii) erra os níveis envolvidos e o tipo de fóton; (v) cita uma propriedade (dipolo líquido) que não determina absorção.",
      "alternativas": [
        "A transição HOMO→LUMO do β-caroteno é no visível (455 nm), não no infravermelho.",
        "Ambas supõem um fóton de infravermelho; além disso, com 22 elétrons (2 por nível) o HOMO é o nível 11, não o 22.",
        "A (iv) está certa, mas a (iii) cita níveis 22 e 23, que não são o HOMO e o LUMO, e energia de IV, o que é incorreto.",
        "Absorve no visível (455 nm, azul) e transmite as cores complementares, vermelho e amarelo, que somam o laranja.",
        "A (i) está certa, mas a ausência de dipolo líquido não tem relação com absorver no UV-Vis."
      ],
      "dica": "A cor observada é a complementar da absorvida: absorve azul, vê laranja."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 52ª IChO (2020), problema 5",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1332",
    "materia": "quimica",
    "assunto": "Atomística",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 2020,
      "orgao": "prova teórica (Istambul), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 52ª IChO, Istambul, 2020, problema 5. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Modelo da partícula na caixa unidimensional para o β-caroteno: 22 elétrons π percorrem os 22 carbonos conjugados, de comprimento L = 1,40 Å × 22 = 30,8 Å. Os níveis valem En = n²h²/(8mL²) e cada nível comporta 2 elétrons. Usando h = 6,626×10⁻³⁴ J·s, me = 9,109×10⁻³¹ kg e c = 2,998×10⁸ m/s, qual é o comprimento de onda da transição entre o último nível ocupado (HOMO) e o primeiro desocupado (LUMO)?",
    "alternativas": [
      "≈ 695 nm",
      "≈ 1,36×10³ nm (1360 nm)",
      "≈ 1,25×10³ nm",
      "≈ 340 nm",
      "≈ 1,49×10³ nm"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Com 22 elétrons e 2 por nível, HOMO = 11 e LUMO = 12. ΔE = 23·E1 = 1,46×10⁻¹⁹ J e λ = hc/ΔE ≈ 1360 nm. (O valor experimental, 455 nm, mostra como o modelo é grosseiro.)",
      "detalhada": "A resolução segue a solução oficial do problema 5.\n\n**1) E1:** E1 = h²/(8mL²) = (6,626×10⁻³⁴)²/(8×9,109×10⁻³¹×(30,8×10⁻¹⁰)²) = 6,35×10⁻²¹ J.\n\n**2) Níveis:** 22 elétrons ocupam 11 níveis: HOMO n = 11; LUMO n = 12.\n\n**3) Transição:** ΔE = (12² − 11²)E1 = 23×6,35×10⁻²¹ = 1,46×10⁻¹⁹ J. λ = hc/ΔE = 1,36×10⁻⁶ m = 1360 nm.",
      "alternativas": [
        "Põe só 1 elétron por nível (HOMO n = 22), ignorando que cada nível comporta 2 elétrons.",
        "HOMO n = 11, LUMO n = 12: ΔE = (12² − 11²)E1 = 23×6,35×10⁻²¹ = 1,46×10⁻¹⁹ J; λ = hc/ΔE ≈ 1,36 μm.",
        "Usa HOMO n = 12 e LUMO n = 13: conta um nível a mais ocupado.",
        "Usa L = 1,40 Å × 11 (metade do comprimento), o que quadruplica a energia.",
        "Usa HOMO n = 10 e LUMO n = 11: conta um nível a menos ocupado."
      ],
      "dica": "Nos modelos de partícula na caixa, conte elétrons de dois em dois por nível antes de achar HOMO e LUMO."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 52ª IChO (2020), problema 5",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1333",
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
      "ano": 2020,
      "orgao": "prova teórica (Istambul), problema 6, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 52ª IChO, Istambul, 2020, problema 6. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Dadas as entalpias de reação a 300 K: (1) B2H6(g) + 6 Cl2(g) → 2 BCl3(g) + 6 HCl(g), ΔrH = −1326 kJ/mol; (2) BCl3(g) + 3 H2O(l) → H3BO3(g) + 3 HCl(g), ΔrH = −112,5 kJ/mol; (3) B2H6(g) + 6 H2O(l) → 2 H3BO3(s) + 6 H2(g), ΔrH = −493,4 kJ/mol; (4) ½ H2(g) + ½ Cl2(g) → HCl(g), ΔrH = −92,3 kJ/mol. Qual é a entalpia molar de sublimação do H3BO3 [H3BO3(s) → H3BO3(g)] a 300 K?",
    "alternativas": [
      "+50 kJ/mol",
      "−25 kJ/mol",
      "+81 kJ/mol",
      "−252 kJ/mol",
      "+25 kJ/mol"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "Combinando as reações por Hess: (1) + 2×(2) − 12×(4) − (3) = 2 H3BO3(s) → 2 H3BO3(g), ΔH = +50,0 kJ, ou 25 kJ/mol.",
      "detalhada": "A resolução segue a solução oficial do problema 6.\n\n**1)** (1) + 2×(2): B2H6 + 6 Cl2 + 6 H2O(l) → 2 H3BO3(g) + 12 HCl, ΔH = −1326 − 225 = −1551 kJ.\n\n**2)** Para eliminar HCl e Cl2, subtrai-se 12×(4) (6 H2 + 6 Cl2 → 12 HCl, −1107,6 kJ), ou seja, soma-se +1107,6 kJ: B2H6 + 6 H2O(l) → 2 H3BO3(g) + 6 H2, ΔH = −443,4 kJ.\n\n**3)** Subtraindo (3), que gera H3BO3(s): 2 H3BO3(s) → 2 H3BO3(g), ΔH = −443,4 − (−493,4) = +50,0 kJ. Por mol: +25 kJ/mol.",
      "alternativas": [
        "É o valor para 2 mol de H3BO3; esqueceu de dividir por 2.",
        "Sinal trocado: a sublimação absorve calor (endotérmica).",
        "Usa a reação (2) uma vez só em vez de duas: o B2H6 gera 2 BCl3.",
        "Usa 6×(4) em vez de 12×(4): o balanço de HCl e H2 não fecha.",
        "(1) + 2×(2) − 12×(4) dá B2H6 + 6 H2O(l) → 2 H3BO3(g) + 6 H2, ΔH = −443,4 kJ. Subtraindo (3) (−493,4): +50,0 kJ para 2 mol, ou +25 kJ/mol."
      ],
      "dica": "Em Hess, confira cada espécie intermediária cancelando: se algo sobra, o fator de uma reação está errado."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 52ª IChO (2020), problema 6",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1334",
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
      "ano": 2020,
      "orgao": "prova teórica (Istambul), problema 6, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 52ª IChO, Istambul, 2020, problema 6. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Um motor térmico ideal opera com 1 mol de gás perfeito monoatômico num ciclo de Carnot: expansão isotérmica reversível a 1000 K (T_H) recebendo q_H = 250 J da fonte quente, expansão adiabática, compressão isotérmica reversível a 300 K (T_C) liberando |q_C| para a fonte fria e compressão adiabática. Vale |q_C|/q_H = T_C/T_H. Quais são o trabalho líquido |w|, o calor |q_C| e a eficiência do ciclo?",
    "alternativas": [
      "|w| = 75 J; |q_C| = 175 J; eficiência = 30 %",
      "|w| = 175 J; |q_C| = 75 J; eficiência = 30 %",
      "|w| = 175 J; |q_C| = 75 J; eficiência = 70 %",
      "|w| = 175 J; |q_C| = 75 J; eficiência = 17,5 %",
      "|w| = 75 J; |q_C| = 175 J; eficiência = 70 %"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "No ciclo de Carnot, |q_C| = q_H·T_C/T_H = 75 J, |w| = q_H − |q_C| = 175 J e η = 1 − T_C/T_H = 70 %.",
      "detalhada": "A resolução segue a solução oficial do problema 6.\n\n**1) Calor cedido:** |q_C| = 250 J × 300/1000 = 75 J.\n\n**2) Trabalho líquido:** w = q_H − |q_C| = 250 − 75 = 175 J (primeira lei, em um ciclo ΔU = 0).\n\n**3) Eficiência:** η = w/q_H = 175/250 = 0,70 = 1 − T_C/T_H.",
      "alternativas": [
        "Troca trabalho e calor cedido: o que sobra depois de ceder 75 J é o trabalho (175 J).",
        "Calcula a eficiência como q_C/q_H em vez de w/q_H.",
        "|q_C| = 250×300/1000 = 75 J; |w| = 250 − 75 = 175 J; η = 175/250 = 1 − 300/1000 = 0,70.",
        "Divide w por T_H (em K) em vez de por q_H: a eficiência é adimensional e vale w/q_H.",
        "Mistura os valores: a eficiência de 70 % só é compatível com w = 175 J."
      ],
      "dica": "Eficiência de Carnot depende só das temperaturas das fontes: 1 − T_fria/T_quente (em kelvin)."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 52ª IChO (2020), problema 6",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1335",
    "materia": "quimica",
    "assunto": "Atomística",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 2020,
      "orgao": "prova teórica (Istambul), problema 7, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 52ª IChO, Istambul, 2020, problema 7. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Em terapia fotodinâmica, o oxigênio triplete é excitado ao estado singlete por luz de comprimento de onda 1270 nm. Usando h = 6,626×10⁻³⁴ J·s, c = 2,998×10⁸ m/s e NA = 6,022×10²³ mol⁻¹, qual é a energia necessária por mol de moléculas?",
    "alternativas": [
      "94,2 kJ/mol",
      "1,56×10⁻²² kJ/mol",
      "94 200 kJ/mol",
      "188 kJ/mol",
      "47,1 kJ/mol"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "E = hc/λ = 1,564×10⁻¹⁹ J por fóton; × 6,022×10²³ mol⁻¹ ≈ 9,42×10⁴ J/mol = 94,2 kJ/mol.",
      "detalhada": "A resolução segue a solução oficial do problema 7.\n\n**1) Por fóton:** E = hc/λ = (6,626×10⁻³⁴ × 2,998×10⁸)/(1270×10⁻⁹) = 1,564×10⁻¹⁹ J.\n\n**2) Por mol:** 1,564×10⁻¹⁹ J × 6,022×10²³ mol⁻¹ = 9,42×10⁴ J/mol = 94,2 kJ/mol.",
      "alternativas": [
        "E = hc/λ = 1,564×10⁻¹⁹ J por fóton; multiplicado por NA: 9,42×10⁴ J/mol = 94,2 kJ/mol.",
        "É a energia de um fóton (em kJ), sem multiplicar por NA.",
        "Erro de unidade: 9,42×10⁴ é em J/mol, não em kJ/mol.",
        "Dobra o valor, como se fossem necessários dois fótons por molécula.",
        "Metade do valor correto; equivale a usar λ = 2540 nm."
      ],
      "dica": "Energia de fóton vem em joules por partícula; multiplique por NA e divida por 1000 para kJ/mol."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 52ª IChO (2020), problema 7",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1336",
    "materia": "quimica",
    "assunto": "Ligações químicas",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 2020,
      "orgao": "prova teórica (Istambul), problema 8, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 52ª IChO, Istambul, 2020, problema 8. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Uma liga Cu2Pt tem célula unitária cúbica de faces centradas (4 átomos por célula) com aresta de 380 pm, com os átomos de Cu e de Pt distribuídos ao acaso nas posições atômicas (2/3 Cu e 1/3 Pt). Dados: M(Cu) = 63,55 g/mol; M(Pt) = 195,08 g/mol; NA = 6,022×10²³ mol⁻¹. Qual é a densidade da liga?",
    "alternativas": [
      "≈ 9,75 g/cm³",
      "≈ 13,0 g/cm³",
      "≈ 15,7 g/cm³",
      "≈ 39,0 g/cm³",
      "≈ 6,50 g/cm³"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Uma célula CFC tem 4 átomos; com 2/3 Cu e 1/3 Pt, a massa é 7,13×10⁻²² g e o volume 5,49×10⁻²³ cm³: ρ ≈ 13,0 g/cm³.",
      "detalhada": "A resolução segue a solução oficial do problema 8 (item 8.17).\n\n**1) Massa da célula:** 4 átomos: 4×(2/3) = 2,67 de Cu e 4×(1/3) = 1,33 de Pt. m = (2,67×63,55 + 1,33×195,08)/6,022×10²³ = (169,7 + 259,5)/6,022×10²³ = 429,2/6,022×10²³ = 7,13×10⁻²² g.\n\n**2) Volume:** a = 380 pm = 3,80×10⁻⁸ cm → V = 5,49×10⁻²³ cm³.\n\n**3) Densidade:** ρ = 7,13×10⁻²²/5,49×10⁻²³ ≈ 13,0 g/cm³.",
      "alternativas": [
        "Conta 3 átomos por célula (como se a célula tivesse um Cu2Pt inteiro), mas uma CFC tem 4 átomos.",
        "A célula tem 4 átomos: 2,67 Cu + 1,33 Pt, massa = (2,67×63,55 + 1,33×195,08)/NA = 7,13×10⁻²² g; volume = (3,80×10⁻⁸ cm)³ = 5,49×10⁻²³ cm³; ρ = 13,0 g/cm³.",
        "Supõe composição 1:1 (Cu e Pt em partes iguais) em vez de 2:1.",
        "Usa 4 fórmulas Cu2Pt por célula (12 átomos), quando são 4 átomos no total.",
        "Usa 2 átomos por célula, número que não corresponde à CFC."
      ],
      "dica": "Em CFC conte 4 átomos por célula (8×1/8 + 6×1/2) e some as massas ponderadas pela composição."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 52ª IChO (2020), problema 8",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1337",
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
      "ano": 2020,
      "orgao": "prova teórica (Istambul), problema 9, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 52ª IChO, Istambul, 2020, problema 9. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Uma solução contendo íons Ni²⁺ na concentração de 20 mg/dm³ (M(Ni) = 58,69 g/mol) é saturada com H2S, de modo que [H2S] = 0,1 mol/dm³ permanece constante. Dados: Ksp(NiS) = 4,0×10⁻²⁰; para o H2S, Ka1 = 9,6×10⁻⁸ e Ka2 = 1,3×10⁻¹⁴. Qual é o pH mínimo em que o NiS começa a precipitar?",
    "alternativas": [
      "≈ 2,49",
      "≈ 2,10",
      "≈ 4,01",
      "≈ 2,99",
      "≈ 5,97"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "O NiS precipita quando [Ni²⁺][S²⁻] = Ksp. Com [Ni²⁺] = 3,41×10⁻⁴, [S²⁻] = 1,17×10⁻¹⁶; como [S²⁻] = Ka1·Ka2·[H2S]/[H⁺]², [H⁺] = 1,03×10⁻³ e pH ≈ 2,99.",
      "detalhada": "A resolução segue o método da solução oficial do problema 9 (item 9.8), usando a concentração de Ni²⁺ dada no enunciado (20 mg/dm³). A solução oficial usa a concentração obtida no item 9.7 (2,1×10⁻⁴ mol/dm³) e chega a pH 3,09; com 20 mg/dm³ o resultado é pH 2,99.\n\n**1) Concentração de Ni²⁺:** 20×10⁻³ g/dm³ ÷ 58,69 g/mol = 3,41×10⁻⁴ mol/dm³.\n\n**2) [S²⁻] mínima:** Ksp = [Ni²⁺][S²⁻] → [S²⁻] = 4,0×10⁻²⁰/3,41×10⁻⁴ = 1,17×10⁻¹⁶ mol/dm³.\n\n**3) [H⁺]:** combinando os dois equilíbrios do H2S, [S²⁻] = Ka1·Ka2·[H2S]/[H⁺]²; então [H⁺]² = (9,6×10⁻⁸ × 1,3×10⁻¹⁴ × 0,1)/1,17×10⁻¹⁶ = 1,06×10⁻⁶ e [H⁺] = 1,03×10⁻³ mol/dm³.\n\n**4) pH:** pH = −log(1,03×10⁻³) ≈ 2,99.",
      "alternativas": [
        "Esquece o fator [H2S] = 0,1 na expressão de [H⁺]²: [H⁺]² = Ka1·Ka2/[S²⁻].",
        "Usa 20 mg/dm³ sem dividir pela massa molar, tratando 0,020 como mol/dm³ de Ni²⁺.",
        "É o pH da solução saturada de H2S pura (√(Ka1·[H2S])), que não leva em conta o Ksp do NiS.",
        "[Ni²⁺] = 3,41×10⁻⁴ mol/dm³ → [S²⁻] = 4,0×10⁻²⁰/3,41×10⁻⁴ = 1,17×10⁻¹⁶; [H⁺]² = Ka1·Ka2·[H2S]/[S²⁻] = 1,06×10⁻⁶; [H⁺] = 1,03×10⁻³ e pH ≈ 2,99.",
        "Tira o log de [H⁺]² sem extrair a raiz quadrada, dobrando o pH."
      ],
      "dica": "Em precipitação seletiva com H2S, o pH controla [S²⁻]: quanto mais ácido, menos sulfeto livre."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 52ª IChO (2020), problema 9",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1338",
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
      "ano": 2022,
      "orgao": "prova teórica (Tianjin), problema 6, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 54ª IChO, Tianjin, 2022, problema 6. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Na cicloadição (3+2) de Lu assimétrica, catalisada por uma fosfina quiral, o cicloaduto 3 foi obtido com 80 % de excesso enantiomérico (ee = (maior − menor)/(maior + menor) × 100 %). Qual é a razão entre as quantidades do enantiômero majoritário e do minoritário?",
    "alternativas": [
      "90 : 10",
      "80 : 20",
      "95 : 5",
      "70 : 30",
      "60 : 40"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "ee = 80 % significa M − m = 80 % do total; com M + m = 100 %, M = 90 % e m = 10 %: razão 90 : 10.",
      "detalhada": "A resolução segue a solução oficial do problema 6 (6.6).\n\n**1)** ee = (M − m)/(M + m) × 100 %.\n\n**2)** Com 80 % de ee e M + m = 100: M − m = 80. Somando as duas equações, 2M = 180, M = 90 e m = 10.\n\n**3)** A mistura tem 90 % do enantiômero principal e 10 % do outro: razão 90 : 10.",
      "alternativas": [
        "ee = (M − m)/(M + m) = 0,80 com M + m = 100: M − m = 80, logo M = 90 e m = 10.",
        "Confunde ee com a porcentagem do majoritário: 80 % de ee não é 80 % do enantiômero principal.",
        "Valor de ee de 90 %, não de 80 %.",
        "Valor de ee de 40 %.",
        "Valor de ee de 20 %; é o que resulta de dividir o ee por 4."
      ],
      "dica": "ee não é a fração do majoritário: é a diferença entre os dois. 100 % de ee = enantiopuro; 0 % = racêmico."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 54ª IChO (2022), problema 6",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1339",
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
      "ano": 2022,
      "orgao": "prova teórica (Tianjin), problema 8, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 54ª IChO, Tianjin, 2022, problema 8. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O composto espiro racêmico 6 (mistura 1:1 de dois enantiômeros) reage com cloroformiato de (−)-mentila, 10, enantiopuro, e gera dois produtos, 11a e 11b, que puderam ser separados por cromatografia em coluna. Que relação existe entre 11a e 11b?",
    "alternativas": [
      "São enantiômeros.",
      "São isômeros cis-trans.",
      "São diastereoisômeros.",
      "São isômeros conformacionais.",
      "São isômeros constitucionais de posição."
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "Racemato + auxiliar quiral enantiopuro dá dois diastereoisômeros, separáveis por cromatografia comum.",
      "detalhada": "A resolução segue a solução oficial do problema 8 (8.3). Os dois enantiômeros do composto 6 formam carbamatos com a (−)-mentila, cujos centros são idênticos nos dois produtos. Um produto tem configuração (R no espiro, mentila fixa) e o outro (S no espiro, mentila fixa): não são imagens especulares, são diastereoisômeros. Têm solubilidade e adsorção distintas, o que permite separá-los em coluna; a hidrazinólise posterior remove a mentila e dá os enantiômeros (+)-6 e (−)-6 puros.",
      "alternativas": [
        "Enantiômeros têm propriedades idênticas em meio aquiral e não se separam por cromatografia em coluna comum; além disso, a mentila fixa um dos centros.",
        "Não há dupla ligação ou anel diferenciando os produtos: a diferença está na configuração de centros estereogênicos.",
        "Cada enantiômero de 6 se liga ao mesmo centro enantiopuro da mentila: formam-se (R,S) e (S,S), que não são imagens especulares e têm propriedades físicas diferentes (por isso se separam por cromatografia comum).",
        "Conformeros interconvertem por rotação de ligações e não se isolam; 11a e 11b são isolados.",
        "A conectividade dos átomos é a mesma nos dois; muda só a configuração espacial."
      ],
      "dica": "Desdobramento de racemato: ligue um auxiliar quiral enantiopuro, separe os diastereoisômeros e remova o auxiliar."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 54ª IChO (2022), problema 8",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1340",
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
      "ano": 2022,
      "orgao": "prova teórica (Tianjin), problema 4, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 54ª IChO, Tianjin, 2022, problema 4. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Para monitorar o SO2 formado como subproduto do aquecimento de pirita (FeS2), o gás foi absorvido em NaOH 2 mol/dm³ e a solução foi diluída a 500 cm³. Uma alíquota de 25,00 cm³ foi acidificada e tratada com 50,00 cm³ de I2 0,05122 mol/dm³ (SO3²⁻ + I2 + H2O → SO4²⁻ + 2 I⁻ + 2 H⁺). O I2 em excesso foi titulado com Na2S2O3 0,1012 mol/dm³ (I2 + 2 S2O3²⁻ → 2 I⁻ + S4O6²⁻), gastando-se 18,47 cm³. Num ensaio, foram obtidos 17,6 g de enxofre elementar. Considere que todo o enxofre produzido está como S elementar ou como S do SO2. Qual porcentagem do enxofre total (S elementar + S do SO2) foi perdida como SO2? (M(S) = 32,06 g/mol)",
    "alternativas": [
      "≈ 5,9 %",
      "≈ 2,5 %",
      "≈ 0,30 %",
      "≈ 11 %",
      "≈ 5,6 %"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "O SO2 consome o I2 não gasto pelo tiossulfato: 1,626×10⁻³ mol por alíquota, ou 3,25×10⁻² mol no total. Com 0,549 mol de S elementar, a perda é 3,25×10⁻²/(0,549 + 3,25×10⁻²) ≈ 5,6 %.",
      "detalhada": "A resolução segue o procedimento do problema 4 (item 4.3).\n\n**1) I2 em excesso:** n(S2O3²⁻) = 0,1012 × 0,01847 = 1,869×10⁻³ mol; cada I2 consome 2 S2O3²⁻, logo sobraram 9,35×10⁻⁴ mol de I2.\n\n**2) I2 gasto pelo SO2 (alíquota):** 0,05122 × 0,05000 = 2,561×10⁻³ mol adicionados; 2,561×10⁻³ − 9,35×10⁻⁴ = 1,626×10⁻³ mol, igual aos mols de SO2 (1:1).\n\n**3) Total de SO2:** × (500/25) = 3,25×10⁻² mol.\n\n**4) Porcentagem:** S elementar = 17,6/32,06 = 0,549 mol. Perda = 0,0325/(0,549 + 0,0325) = 5,6 %.",
      "alternativas": [
        "Divide os mols de SO2 só pelos mols de S elementar (0,549), em vez de pelo total de S da pirita (S + SO2).",
        "Esquece que 1 mol de I2 consome 2 mol de tiossulfato: subtrai 1,869×10⁻³ mol de I2 em vez de 9,35×10⁻⁴ mol.",
        "Esquece o fator de diluição de 20 (500 cm³/25 cm³): usa só os mols da alíquota.",
        "Conta 2 mol de enxofre por mol de SO2.",
        "n(S2O3²⁻) = 1,869×10⁻³ mol → I2 em excesso = 9,35×10⁻⁴ mol; I2 total = 2,561×10⁻³ mol; consumido pelo SO2 = 1,626×10⁻³ mol por alíquota; × 20 = 3,25×10⁻² mol SO2; 3,25×10⁻²/(0,549 + 3,25×10⁻²) ≈ 5,6 %."
      ],
      "dica": "Titulação por retorno: o que o analito consumiu é (total adicionado) − (o que sobrou, medido pelo titulante)."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 54ª IChO (2022), problema 4",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1341",
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
      "ano": 2022,
      "orgao": "prova teórica (Tianjin), problema 4, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 54ª IChO, Tianjin, 2022, problema 4. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Um celular reproduz vídeo por 22 h com uma bateria de íons de lítio de 3,8 V e 3110 mAh. Se ela fosse trocada por uma bateria ideal de lítio-enxofre de 4,2 V com 23 g de enxofre como material ativo, que reage estequiometricamente segundo 16 Li + S8 → 8 Li2S, por quantas horas o aparelho funcionaria? Use os valores arredondados: carga da bateria de lítio-enxofre 1,4×10⁵ C, energia dela 5,9×10⁵ J e potência do celular 1,93×10³ J/h. (M(S) = 32,06 g/mol; F = 96 485 C/mol; 1 mAh = 3,6 C)",
    "alternativas": [
      "≈ 272 h",
      "≈ 1203 h",
      "≈ 306 h",
      "≈ 75 h",
      "≈ 601 h"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "Cada S recebe 2 e⁻: 0,717 mol de S dá carga de 1,4×10⁵ C (38 455 mAh) e energia de 5,9×10⁵ J a 4,2 V. O celular consome 1,93×10³ J/h (4,25×10⁴ J em 22 h), logo a bateria de Li–S dura 5,9×10⁵/1,93×10³ ≈ 306 h.",
      "detalhada": "A resolução segue o procedimento do problema 4 (item 4.6), com os valores arredondados pedidos no enunciado.\n\n**1) Carga:** S8 + 16 e⁻ → 8 S²⁻, ou seja, 2 e⁻ por S. n(S) = 23/32,06 = 0,717 mol; n(e⁻) = 1,435 mol; Q = 1,435 × 96 485 = 1,384×10⁵ C, arredondado a 1,4×10⁵ C (= 38 455 mAh).\n\n**2) Energia:** 4,2 V × 1,4×10⁵ C = 5,9×10⁵ J.\n\n**3) Potência do celular:** a bateria de íons de lítio tem 3,8 V × 3,110 Ah = 4,25×10⁴ J, que sustentam 22 h: 4,25×10⁴/22 = 1,93×10³ J/h.\n\n**4) Tempo:** 5,9×10⁵/1,93×10³ ≈ 306 h. Sem arredondar as etapas intermediárias, o resultado seria cerca de 301 h; por isso o enunciado fixa os valores.",
      "alternativas": [
        "Compara só as cargas (mAh) e ignora a diferença de tensão (4,2 V contra 3,8 V).",
        "Usa 8 elétrons por átomo de S em vez de 2 (esquece que cada S8 recebe 16 e⁻, ou 2 por átomo).",
        "Mesmo caminho, com arredondamento: 23 g/32,06 = 0,717 mol de S; 2 e⁻ por átomo (S8 + 16 e⁻ → 8 S²⁻) = 1,435 mol de e⁻; carga 1,4×10⁵ C; energia 4,2 V × 1,4×10⁵ C = 5,9×10⁵ J; a bateria de íons de lítio gasta 4,25×10⁴ J em 22 h, ou 1,93×10³ J/h: 5,9×10⁵/1,93×10³ ≈ 306 h.",
        "Usa 0,5 e⁻ por átomo de S (um quarto do correto).",
        "Usa 4 elétrons por átomo de S."
      ],
      "dica": "Compare baterias por energia (tensão × carga), não só por carga."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 54ª IChO (2022), problema 4",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1342",
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
      "ano": 2022,
      "orgao": "prova teórica (Tianjin), problema 2, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 54ª IChO, Tianjin, 2022, problema 2. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "A estrutura do espinélio AB2O4 tem, por célula unitária, 8 cátions A (sítios tetraédricos) e 16 cátions B (sítios octaédricos) para 32 O²⁻. Fe2O3 e Cr2O3 em massa 63,6 : 36,4 reagem em atmosfera redutora e formam um espinélio puro e estequiométrico em que os sítios A são ocupados só por ferro (como Fe²⁺). Quantos Fe³⁺ e Cr³⁺ há nos sítios B de uma célula unitária? (M(Fe2O3) = 159,69 g/mol; M(Cr2O3) = 151,99 g/mol)",
    "alternativas": [
      "7 Fe³⁺ e 9 Cr³⁺",
      "9 Fe³⁺ e 7 Cr³⁺",
      "10 Fe³⁺ e 6 Cr³⁺",
      "8 Fe³⁺ e 8 Cr³⁺",
      "0 Fe³⁺ e 16 Cr³⁺"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "A razão de massas dá Fe : Cr = 5 : 3, ou seja, 15 Fe e 9 Cr nos 24 cátions da célula. Tirando os 8 Fe dos sítios A, os sítios B ficam com 7 Fe³⁺ e 9 Cr³⁺.",
      "detalhada": "A resolução segue a solução oficial do problema 2 (item 2.3).\n\n**1) Mols de metal:** Fe2O3: 63,6/159,69 = 0,398 mol → 0,797 mol de Fe. Cr2O3: 36,4/151,99 = 0,2395 mol → 0,479 mol de Cr. Razão Fe : Cr = 1,66 (≈ 5 : 3).\n\n**2) Cátions por célula:** 8 + 16 = 24: Fe = 24×5/8 = 15; Cr = 24×3/8 = 9.\n\n**3) Sítios B:** os 8 sítios A têm só Fe; sobram 15 − 8 = 7 Fe³⁺ e 9 Cr³⁺ (total 16). Confere a carga: 8(+2) + 7(+3) + 9(+3) = +64 = 32 × 2.",
      "alternativas": [
        "Fe:Cr = 1,66:1 nos 24 cátions da célula = 15 Fe e 9 Cr. Os 8 sítios A levam 8 Fe, restando 7 Fe e 9 Cr nos 16 sítios B. Carga: 8×2 + 7×3 + 9×3 = 64 = 32×2.",
        "Inverte as quantidades de Fe e Cr.",
        "Aplica a proporção Fe:Cr = 5:3 diretamente aos 16 sítios B, esquecendo que os 8 sítios A são só de Fe.",
        "Supõe metade e metade em B, sem usar a razão de massas dos óxidos.",
        "Corresponde ao cromita ideal FeCr2O4 (Fe só em A, Cr só em B), que não respeita a razão em massa 63,6 : 36,4."
      ],
      "dica": "Calcule primeiro a composição global em átomos; depois subtraia o que já foi alocado a cada sítio."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 54ª IChO (2022), problema 2",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1343",
    "materia": "quimica",
    "assunto": "Ligações químicas",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 3,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 2022,
      "orgao": "prova teórica (Tianjin), problema 2, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 54ª IChO, Tianjin, 2022, problema 2. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O Cr(II) do complexo octaédrico 2 (íon d⁴) está num campo cristalino regular com energia de desdobramento Δo = 16 000 cm⁻¹ e energia de emparelhamento P = 23 500 cm⁻¹. Qual é a energia de estabilização do campo cristalino (CFSE) desse íon?",
    "alternativas": [
      "−25 600 cm⁻¹ (−1,6 Δo)",
      "−2 100 cm⁻¹",
      "−6 400 cm⁻¹ (−0,4 Δo)",
      "−9 600 cm⁻¹ (−0,6 Δo)",
      "+9 600 cm⁻¹"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "Com Δo < P o d⁴ é de spin alto: t2g³ eg¹. CFSE = 3(−0,4Δo) + 0,6Δo = −0,6Δo = −9 600 cm⁻¹ (4 elétrons desemparelhados, μ ≈ 4,9 μB).",
      "detalhada": "A resolução segue a solução oficial do problema 2 (itens 2.8 e 2.9).\n\n**1) Spin alto ou baixo:** comparar Δo (16 000) com P (23 500). Como Δo < P, é mais barato colocar o quarto elétron em eg do que emparelhá-lo: spin alto.\n\n**2) Configuração:** t2g³ eg¹.\n\n**3) CFSE:** t2g vale −0,4Δo por elétron e eg vale +0,6Δo: 3(−0,4) + 1(+0,6) = −0,6; CFSE = −0,6 × 16 000 = −9 600 cm⁻¹.\n\n**4)** Há 4 elétrons desemparelhados: μ = √(4×6) = 4,9 μB.",
      "alternativas": [
        "É a CFSE de spin baixo (t2g⁴), que não se aplica porque Δo é menor que P.",
        "É a CFSE de spin baixo corrigida com um emparelhamento (−25 600 + 23 500); como o caso é de spin alto, o emparelhamento não ocorre.",
        "Conta só um elétron em t2g, ou esquece a desestabilização do elétron em eg (+0,6 Δo).",
        "Como Δo < P, o íon é de spin alto: t2g³ eg¹ (4 elétrons desemparelhados). CFSE = 3(−0,4Δo) + 1(+0,6Δo) = −0,6Δo = −9 600 cm⁻¹.",
        "Sinal invertido: o campo octaédrico estabiliza os elétrons t2g, mais do que desestabiliza os eg neste caso."
      ],
      "dica": "Compare Δo com P: Δo < P → spin alto; Δo > P → spin baixo."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 54ª IChO (2022), problema 2",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1344",
    "materia": "quimica",
    "assunto": "Cinética química",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 2022,
      "orgao": "prova teórica (Tianjin), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 54ª IChO, Tianjin, 2022, problema 5. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "A constante de velocidade aparente da oxidação 2 NO + O2 → 2 NO2 é 6,63×10⁵ L² mol⁻² min⁻¹ a 600 K, e a energia de ativação aparente é 1,20 kJ/mol (independente da temperatura). Qual é a constante a 700 K? (R = 8,314 J mol⁻¹ K⁻¹)",
    "alternativas": [
      "≈ 6,41×10⁵ L² mol⁻² min⁻¹",
      "≈ 6,86×10⁵ L² mol⁻² min⁻¹",
      "≈ 6,63×10⁵ L² mol⁻² min⁻¹",
      "≈ 7,74×10⁵ L² mol⁻² min⁻¹",
      "≈ 9,3×10⁵ L² mol⁻² min⁻¹"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Pela equação de Arrhenius, ln(k700/k600) = (Ea/R)(1/600 − 1/700) = 0,0344, logo k700 ≈ 6,86×10⁵ L² mol⁻² min⁻¹.",
      "detalhada": "A resolução segue a solução oficial do problema 5 (item 5.3).\n\n**1)** ln(k2/k1) = (Ea/R)(1/T1 − 1/T2).\n\n**2)** Ea/R = 1200 J/mol ÷ 8,314 J/(mol K) = 144,3 K; 1/600 − 1/700 = 2,381×10⁻⁴ K⁻¹.\n\n**3)** ln(k2/k1) = 144,3 × 2,381×10⁻⁴ = 0,0344; k2 = 6,63×10⁵ × 1,035 = 6,86×10⁵ L² mol⁻² min⁻¹.",
      "alternativas": [
        "Inverte o sinal do expoente: com Ea > 0, k aumenta com a temperatura.",
        "ln(k2/k1) = (Ea/R)(1/T1 − 1/T2) = (1200/8,314)(1/600 − 1/700) = 0,0344; k2 = 6,63×10⁵ × e^0,0344 ≈ 6,86×10⁵.",
        "Usa Ea = 1,20 J/mol em vez de 1,20 kJ/mol: o expoente some e k parece não variar.",
        "Faz k proporcional a T (×700/600), o que não é o comportamento de Arrhenius.",
        "Usa Ea = 12 kJ/mol (erra a ordem de grandeza da energia de ativação)."
      ],
      "dica": "Ea pequena = reação pouco sensível à temperatura: o fator de variação fica perto de 1."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 54ª IChO (2022), problema 5",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1345",
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
      "ano": 2022,
      "orgao": "prova teórica (Tianjin), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 54ª IChO, Tianjin, 2022, problema 1. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Nanopartículas de ouro esféricas, com diâmetro de 30,0 nm, são formadas de átomos de ouro compactados como ouro metálico, de densidade 19,3 g/cm³ (M(Au) = 196,97 g/mol; NA = 6,022×10²³ mol⁻¹). Quantos átomos de ouro há em cada nanopartícula?",
    "alternativas": [
      "≈ 6,7×10⁶ átomos",
      "≈ 4,2×10⁵ átomos",
      "≈ 8,3×10²⁶ átomos",
      "≈ 1,4×10⁻¹⁸ átomos",
      "≈ 8,3×10⁵ átomos"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "V = (4/3)π(15 nm)³ = 1,41×10⁻¹⁷ cm³; m = ρV = 2,73×10⁻¹⁶ g; N = m·NA/M ≈ 8,3×10⁵ átomos.",
      "detalhada": "A resolução segue a solução oficial do problema 1 (item 1.3).\n\n**1) Volume:** r = 15,0 nm = 15,0×10⁻⁷ cm; V = (4/3)π r³ = 1,41×10⁻¹⁷ cm³.\n\n**2) Massa:** m = 19,3 g/cm³ × 1,41×10⁻¹⁷ cm³ = 2,73×10⁻¹⁶ g.\n\n**3) Átomos:** N = (2,73×10⁻¹⁶/196,97) × 6,022×10²³ = 8,3×10⁵.",
      "alternativas": [
        "Usa o diâmetro (30 nm) como se fosse o raio: o volume sai 8 vezes maior.",
        "Usa a massa molar do HAuCl4·3H2O (394 g/mol) em vez da do Au (196,97 g/mol).",
        "Não converte nm³ em cm³: usa o raio em nm no cálculo do volume em cm³.",
        "É o número de mols de átomos de Au (N/NA), não o número de átomos.",
        "V = (4/3)π(15,0×10⁻⁷ cm)³ = 1,41×10⁻¹⁷ cm³; m = 19,3 × V = 2,73×10⁻¹⁶ g; N = (m/196,97) × NA ≈ 8,3×10⁵."
      ],
      "dica": "Raio = diâmetro/2 e 1 nm = 10⁻⁷ cm: os dois erros mais comuns no volume de nanopartículas."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 54ª IChO (2022), problema 1",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1346",
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
      "ano": 2023,
      "orgao": "prova teórica (Zurique), problema 6, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 55ª IChO, Zurique, 2023, problema 6. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Na conversão de metanol em olefinas sobre zeólitas aparece um intermediário de massa molar 86,09 g/mol, com 55,8 % de C e 7,0 % de H (o restante é oxigênio). Seu espectro de RMN de 1H mostra quatro sinais: 12,2 ppm (1 H, singleto largo, desaparece com D2O); 6,3 ppm (1 H, dupleto); 5,7 ppm (1 H, dupleto); 2,0 ppm (3 H, singleto). Qual é o composto?",
    "alternativas": [
      "Ácido metacrílico (ácido 2-metilprop-2-enoico), CH2=C(CH3)–COOH",
      "Ácido crotônico (ácido but-2-enoico), CH3–CH=CH–COOH",
      "Ácido but-3-enoico, CH2=CH–CH2–COOH",
      "Acetato de vinila, CH3–CO–O–CH=CH2",
      "Ácido ciclopropanocarboxílico"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "A massa e a análise elementar dão C4H6O2; os sinais mostram COOH, =CH2 (dois dupletos) e CH3 em carbono sem H: ácido metacrílico.",
      "detalhada": "A resolução segue a solução oficial do problema 6 (item 6.9).\n\n**1) Fórmula:** 55,8 % de C de 86,09 g/mol = 48,0 g (4 C); 7,0 % de H = 6,0 g (6 H); o resto, 32,0 g, são 2 O: C4H6O2.\n\n**2) RMN:** o sinal em 12,2 ppm que some com D2O é um H ácido (COOH). Os sinais em 6,3 e 5,7 ppm (1 H cada, dupletos de pequeno acoplamento) são os dois H de um =CH2 terminal. O singleto de 3 H em 2,0 ppm é um CH3 ligado a um carbono sem H e próximo ao COOH.\n\n**3) Estrutura:** CH2=C(CH3)–COOH, ácido metacrílico (monômero do PMMA).",
      "alternativas": [
        "C4H6O2 (86,09 g/mol). Os dois dupletos são os H do =CH2; o singleto de 3 H em 2,0 ppm é o CH3 ligado ao carbono sem H; o sinal em 12,2 ppm é o COOH.",
        "Mesma fórmula, mas o CH3 seria um dupleto (acoplado ao H vizinho) e haveria dois H vinílicos em multipletos, não dois dupletos simples e um CH3 singleto.",
        "Teria um CH2 (2 H) e um =CH– com acoplamentos complexos; não teria CH3 singleto de 3 H.",
        "Tem a mesma fórmula, mas não tem H ácido (sinal em 12,2 ppm que some com D2O) e traz três H vinílicos.",
        "Tem a mesma fórmula e o COOH, mas não tem H vinílicos (6,3 e 5,7 ppm) nem CH3 singleto."
      ],
      "dica": "Sinal que some com D2O = H ligado a O ou N; CH3 singleto = ligado a carbono sem H."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 55ª IChO (2023), problema 6",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1347",
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
      "ano": 2023,
      "orgao": "prova teórica (Zurique), problema 6, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 55ª IChO, Zurique, 2023, problema 6. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Uma das 12 moléculas-plataforma de C, H e O listadas pelo Departamento de Energia dos EUA como candidatas a partir de recursos renováveis é o composto A. Dados: M = 156,03 g/mol; análise elementar: 46,15 % de C e 2,56 % de H; RMN de 1H em DMSO: 7,81 ppm (singleto) e 13,0 ppm (singleto largo, some com D2O), de mesma integral; RMN de 13C: 165,1, 150,6 e 120,6 ppm. Qual é o composto A?",
    "alternativas": [
      "Ácido tereftálico (benzeno-1,4-dicarboxílico)",
      "Ácido furano-2-carboxílico (ácido 2-furoico)",
      "Ácido cítrico",
      "Ácido furano-2,5-dicarboxílico",
      "Ácido 5-formilfuran-2-carboxílico"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "A composição centesimal e a massa molar dão C6H4O5; os 3 sinais de 13C e os dois singletos 1:1 indicam uma molécula simétrica, o ácido furano-2,5-dicarboxílico.",
      "detalhada": "A resolução segue a solução oficial do problema 6 (item 6.10).\n\n**1) Fórmula:** O = 100 − 46,15 − 2,56 = 51,29 %. Razão C : H : O = 3,85 : 2,56 : 3,21 = 1,5 : 1 : 1,25; multiplicando por 4, C6H4O5, com 156,09 g/mol (a massa dada, 156,03 g/mol, difere só por arredondamento).\n\n**2) Simetria:** três sinais de 13C para 6 carbonos e dois singletos de mesma integral em 1H (2 H de anel; 2 H de COOH) indicam duas metades iguais. O sinal em 13,0 ppm que some com D2O é de COOH; 165,1 ppm é C=O; 150,6 e 120,6 ppm são os carbonos do anel furânico.\n\n**3) Composto:** o ácido furano-2,5-dicarboxílico (FDCA, obtido a partir de açúcares) é a molécula da lista de plataformas do DOE. O isômero 3,4 tem a mesma fórmula e padrão de sinais parecido, mas não está nessa lista e não é alternativa; entre as opções, só o 2,5 é compatível com os dados.",
      "alternativas": [
        "Sua fórmula é C8H6O4 (166 g/mol), com 57,8 % de C: não bate com a análise elementar.",
        "C5H4O3 (112 g/mol), com 3 H de anel e 1 COOH: não bate com a massa nem com a razão de integrais.",
        "C6H8O7 (192 g/mol), com mais H e sem sinais aromáticos em 7,81 ppm.",
        "46,15 % C, 2,56 % H e 51,29 % O dão C6H4O5 (156 g/mol); só 3 sinais de 13C indicam simetria: C=O (165), C2/C5 (150,6) e C3/C4 (120,6); 2 H do anel + 2 H de COOH, cada par equivalente.",
        "C6H4O4 (140 g/mol), com 6 sinais de 13C (todos os carbonos diferentes) e 4 sinais de 1H (CHO, COOH e os dois H do anel): não tem a simetria que os dados exigem."
      ],
      "dica": "Comece sempre pela fórmula molecular (análise elementar + massa molar); depois use o número de sinais de RMN para a simetria."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 55ª IChO (2023), problema 6",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1348",
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
      "ano": 2023,
      "orgao": "prova teórica (Zurique), problema 9, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 55ª IChO, Zurique, 2023, problema 9. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Na eletrólise de Kolbe, um carboxilato RCOO⁻ em metanol sofre descarboxilação oxidativa e dimerização, e o solvente é reduzido no cátodo. Formam-se um produto orgânico A e dois gases: o gás B reage com Ca(OH)2 e o gás C é altamente inflamável. Qual alternativa identifica A, B e C?",
    "alternativas": [
      "A = R–R; B = CO; C = H2",
      "A = R–R; B = CO2; C = H2",
      "A = R–OH; B = CO2; C = O2",
      "A = R–H; B = CO2; C = H2",
      "A = R–R; B = CO2; C = CH4"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Kolbe: 2 RCOO⁻ + 2 CH3OH → R–R + 2 CO2 + 2 CH3O⁻ + H2. O CO2 reage com Ca(OH)2 e o H2 é o gás inflamável.",
      "detalhada": "A resolução segue a solução oficial do problema 9 (itens 9.1 e 9.2).\n\n**1) Oxidação (ânodo):** 2 RCOO⁻ → R–R + 2 CO2 + 2 e⁻.\n\n**2) Redução (cátodo):** 2 CH3OH + 2 e⁻ → 2 CH3O⁻ + H2.\n\n**3) Global:** 2 RCOO⁻ + 2 CH3OH → R–R + 2 CO2 + 2 CH3O⁻ + H2.\n\nO CO2 reage com Ca(OH)2 formando CaCO3 (turvação), e o H2 é o gás inflamável. A é o dímero R–R (por exemplo, o pentanoato dá octano).",
      "alternativas": [
        "O gás liberado na descarboxilação é CO2, e é ele que reage com Ca(OH)2 (formando CaCO3); o CO não reage assim.",
        "No ânodo: 2 RCOO⁻ → R–R + 2 CO2 + 2 e⁻. No cátodo: 2 CH3OH + 2 e⁻ → 2 CH3O⁻ + H2. O CO2 turva a água de cal (Ca(OH)2) e o H2 é inflamável.",
        "A Kolbe é uma dimerização (R–R); álcool e O2 não são os produtos.",
        "O produto é o dímero R–R; R–H seria uma redução da descarboxilação, não a Kolbe.",
        "O gás inflamável vem da redução do metanol (solvente) e é H2, não CH4."
      ],
      "dica": "Kolbe = dois carboxilatos que perdem CO2 e se juntam pelo carbono: R–R."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 55ª IChO (2023), problema 9",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1349",
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
      "ano": 2023,
      "orgao": "prova teórica (Zurique), problema 10, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 55ª IChO, Zurique, 2023, problema 10. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O pasireotídeo é um peptídeo cíclico. Na sua síntese, um peptídeo linear com as cadeias laterais protegidas é ciclizado por uma reação de acoplamento intramolecular entre o grupo amino N-terminal e o ácido carboxílico C-terminal, usando um reagente de acoplamento e uma base. Qual afirmação sobre essa ciclização está correta?",
    "alternativas": [
      "A reação deve ser feita em alta concentração do peptídeo para atingir velocidade suficiente.",
      "A piperidina é uma base adequada para a reação.",
      "O grupo protetor da lisina cai nas condições de ciclização, e o ciclo se fecha pelo grupo amino da cadeia lateral.",
      "Excesso de água favorece a ciclização porque hidrolisa subprodutos.",
      "A reação deve ser feita em baixa concentração do peptídeo para evitar a policondensação."
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "Macrociclização exige diluição alta: assim a reação intramolecular supera a intermolecular (policondensação).",
      "detalhada": "A resolução segue a solução oficial do problema 10 (item 10.5).\n\nPara formar anéis médios ou grandes, a reação intramolecular compete com a intermolecular, que forma dímeros e polímeros. Diminuir a concentração do peptídeo reduz a frequência de encontros entre moléculas diferentes, sem afetar a probabilidade de os dois extremos da mesma cadeia se encontrarem. Por isso usa-se alta diluição (princípio da diluição de Ruggli–Ziegler). Além disso, a base deve ser não nucleofílica (por exemplo, uma amina terciária impedida), nunca uma amina secundária como a piperidina.",
      "alternativas": [
        "Em alta concentração a reação intermolecular compete e favorece a policondensação indesejada.",
        "A piperidina é uma base nucleofílica e competiria com o grupo amino do peptídeo, formando amida com o C-terminal ativado.",
        "O grupo protetor da lisina é estável nas condições de ciclização; senão, a regiosseletividade se perderia.",
        "A água hidrolisaria o éster ativado do C-terminal, desativando o grupo antes da formação da ligação amida.",
        "Em solução diluída é pouco provável que moléculas diferentes se encontrem (reação intermolecular, que gera oligômeros); a reação intramolecular (formação do anel) passa a predominar."
      ],
      "dica": "Para formar anéis, dilua; para formar cadeias, concentre."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 55ª IChO (2023), problema 10",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1350",
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
      "ano": 2023,
      "orgao": "prova teórica (Zurique), problema 7, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 55ª IChO, Zurique, 2023, problema 7. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Uma enzima E converte dois substratos A e B. Com pré-equilíbrio rápido entre a enzima livre e todos os complexos enzima–substrato, e a mesma constante de dissociação K para cada substrato, a velocidade inicial é v0 = k[E]0[A]0[B]0/((K + [A]0)(K + [B]0)). Se a concentração de B é mantida constante, igual a c0, a equação assume a forma de Michaelis–Menten, v0 = vmax[A]0/(KM + [A]0). Quanto vale vmax?",
    "alternativas": [
      "vmax = k[E]0",
      "vmax = k[E]0·c0/K",
      "vmax = k[E]0·c0/(K + c0)",
      "vmax = k[E]0·[A]0·c0/(K + c0)",
      "vmax = k[E]0·c0/(K + c0)²"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "Agrupando o termo constante c0/(K + c0), v0 = vmax[A]0/(K + [A]0), com vmax = k[E]0·c0/(K + c0) e KM = K.",
      "detalhada": "A resolução segue a solução oficial do problema 7 (item 7.3).\n\n**1)** Substituindo [B]0 = c0: v0 = k[E]0·[A]0·c0/((K + [A]0)(K + c0)).\n\n**2)** Rearranjando: v0 = {k[E]0·c0/(K + c0)}·[A]0/(K + [A]0).\n\n**3)** Comparando com v0 = vmax[A]0/(KM + [A]0): KM = K e vmax = k[E]0·c0/(K + c0).",
      "alternativas": [
        "Seria o limite de saturação por A e por B ao mesmo tempo; com B fixo em c0, a fração de enzima ligada a B é c0/(K + c0), menor que 1.",
        "Esquece de somar c0 ao denominador: só vale se c0 ≪ K.",
        "Com [B] = c0, v0 = [k[E]0·c0/(K + c0)]·[A]0/(K + [A]0). Comparando com vmax[A]0/(KM + [A]0): KM = K e vmax = k[E]0·c0/(K + c0).",
        "Mantém [A]0 em vmax, mas vmax não depende de [A]0 (é a velocidade em A saturante).",
        "Eleva o denominador ao quadrado, misturando o termo (K + [A]0) que forma o denominador de Michaelis–Menten."
      ],
      "dica": "Para reduzir uma equação de duas variáveis a Michaelis–Menten, fixe uma delas e agrupe tudo que não depende da outra em vmax."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 55ª IChO (2023), problema 7",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1351",
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
      "ano": 2023,
      "orgao": "prova teórica (Zurique), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 55ª IChO, Zurique, 2023, problema 5. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Na hidrodessulfurização (remoção de enxofre de combustíveis), estudou-se a troca isotópica entre um catalisador MoS2/SiO2 (1,2350 g; inicialmente só com 32S) e H2(34S) gasoso. Fluxo de gás: 20,0 mL/min a 1,00 bar e 23,0 °C, contendo 1,00 % em volume de H2S, com 99,95 % de 34S, balanceado com Ar, durante 10,0 min. No gás coletado, a fração de 34S entre os átomos de enxofre era 87,3 %. Supondo gás ideal e que todo o enxofre da superfície trocou com a fase gasosa, quantos mols de átomos de S da superfície foram trocados? (R = 8,314 J mol⁻¹ K⁻¹)",
    "alternativas": [
      "≈ 2,1×10⁻⁵ mol",
      "≈ 1,02×10⁻⁵ mol",
      "≈ 5,1×10⁻⁶ mol",
      "≈ 8,1×10⁻⁵ mol",
      "≈ 1,1×10⁻³ mol"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "O S da superfície (32S) aparece como H2(32S) no gás coletado: V = 2,00 − 1,75 = 0,25 mL, e n = pV/RT ≈ 1,02×10⁻⁵ mol.",
      "detalhada": "A resolução segue a solução oficial do problema 5 (item 5.4).\n\n**1) H2(34S) fornecido:** 20,0 mL/min × 10,0 min × 0,0100 × 0,9995 = 2,00 mL.\n\n**2) H2(34S) coletado:** 200 mL × 0,0100 × 0,873 = 1,75 mL.\n\n**3) H2(32S) formado** (veio da superfície do catalisador): 2,00 − 1,75 = 0,25 mL.\n\n**4) Mols:** n = pV/RT = (1,00×10⁵ Pa × 0,25×10⁻⁶ m³)/(8,314 × 296,15) = 1,0154×10⁻⁵ mol, que a solução oficial escreve como 1,02×10⁻⁵ mol.",
      "alternativas": [
        "Dobra o valor: conta dois átomos de S por molécula de H2S trocada, mas cada H2S tem um S.",
        "V(H2 34S) fornecido = 200 mL × 0,0100 × 0,9995 = 2,00 mL; coletado = 200 × 0,0100 × 0,873 = 1,75 mL; a diferença (0,25 mL de H2 32S) vem da superfície: n = pV/RT = 10⁵ × 0,25×10⁻⁶/(8,314 × 296,15) ≈ 1,02×10⁻⁵ mol.",
        "Metade do valor: divide por 2 a diferença de volume sem razão.",
        "Usa o volume total de H2S fornecido (2,00 mL) em vez da diferença entre fornecido e coletado.",
        "É o total de S do catalisador (2×n(Mo)), não só o da superfície."
      ],
      "dica": "Em troca isotópica, o que aparece de isótopo novo na fase gasosa mede o que saiu da superfície."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 55ª IChO (2023), problema 5",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1352",
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
      "ano": 2023,
      "orgao": "prova teórica (Zurique), problema 6, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 55ª IChO, Zurique, 2023, problema 6. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Na oxidação direta de metano (gás natural) a metanol sobre uma zeólita com cobre, cada molécula de CH4 recebe um átomo de oxigênio, e o Cu(II) é reduzido a Cu(I); são necessários dois átomos de Cu por CH4 oxidado. Num autoclave de 1 L, com 200 mg de zeólita contendo 4,3 % em massa de cobre, a pressão de metano caiu de 933 Pa para 925 Pa a 528 K. Que porcentagem do cobre reagiu? (M(Cu) = 63,55 g/mol; R = 8,314 J mol⁻¹ K⁻¹)",
    "alternativas": [
      "≈ 1,3 %",
      "≈ 5,4 %",
      "≈ 27 %",
      "≈ 2,7 %",
      "≈ 0,27 %"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "O consumo de 8 Pa de CH4 em 1 L a 528 K equivale a 1,82×10⁻⁶ mol, que reduz 3,64×10⁻⁶ mol de Cu de um total de 1,35×10⁻⁴ mol: 2,7 %.",
      "detalhada": "A resolução segue a solução oficial do problema 6 (item 6.2).\n\n**1) CH4 consumido:** Δp = 933 − 925 = 8 Pa; n = pV/RT = (8 × 1×10⁻³)/(8,314 × 528) = 1,82×10⁻⁶ mol.\n\n**2) Cu que reagiu:** 2 × 1,82×10⁻⁶ = 3,64×10⁻⁶ mol.\n\n**3) Cu total:** 0,200 g × 0,043/63,55 = 1,35×10⁻⁴ mol.\n\n**4)** Fração: 3,64×10⁻⁶/1,35×10⁻⁴ = 0,027 = 2,7 %.",
      "alternativas": [
        "Conta um átomo de Cu por CH4, esquecendo que o O vem de dois Cu(II) → Cu(I).",
        "Conta quatro átomos de Cu por CH4.",
        "Erro de uma ordem de grandeza (por exemplo, usa 80 Pa em vez de 8 Pa).",
        "n(CH4 consumido) = pV/RT = 8 Pa × 10⁻³ m³/(8,314 × 528) = 1,82×10⁻⁶ mol → 3,64×10⁻⁶ mol de Cu; n(Cu) total = 0,200 × 0,043/63,55 = 1,35×10⁻⁴ mol; razão = 2,7 %.",
        "Erro de uma ordem de grandeza no sentido oposto (usa 0,8 Pa em vez de 8 Pa)."
      ],
      "dica": "Num recipiente de volume fixo, a queda de pressão mede o consumo do gás: n = Δp·V/(RT)."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 55ª IChO (2023), problema 6",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1353",
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
      "ano": 2023,
      "orgao": "prova teórica (Zurique), problema 2, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 55ª IChO, Zurique, 2023, problema 2. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "Na redução eletroquímica de CO2 a etanol em meio ácido, 2 CO2 + 12 H⁺ + 12 e⁻ → C2H5OH + 3 H2O, ligue essa meia-célula a um eletrodo de H2/2 H⁺ (ânodo). A reação global é 2 CO2 + 6 H2 → C2H5OH + 3 H2O. Dados a 298,15 K (ΔfH em kJ/mol; S em J K⁻¹ mol⁻¹): CO2(g): −393,52 e 213,79; H2O(l): −285,83 e 69,95; H2(g): 0 e 130,68; C2H5OH(l): −276,00 e 159,86. Qual é o potencial padrão dessa célula? (F = 96 485 C/mol)",
    "alternativas": [
      "≈ +0,082 V",
      "≈ +0,49 V",
      "≈ +0,16 V",
      "≈ −0,082 V",
      "≈ +0,30 V"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "ΔG = ΔH − TΔS = −346,45 − 298,15×(−0,842) = −95,4 kJ/mol; E = 95 400/(12×96 485) ≈ 0,082 V.",
      "detalhada": "A resolução segue a solução oficial do problema 2 (item 2.2).\n\n**1) ΔH:** −276,00 + 3(−285,83) − 2(−393,52) = −346,45 kJ/mol.\n\n**2) ΔS:** 3(69,95) + 159,86 − 2(213,79) − 6(130,68) = −842 J K⁻¹ mol⁻¹.\n\n**3) ΔG:** −346,45 − 298,15 × (−0,842) = −95,4 kJ/mol.\n\n**4) E:** como E(H⁺/H2) = 0, E(cátodo) = E(célula) = −ΔG/(nF) = 95 400/(12 × 96 485) = 0,082 V (a solução oficial dá 0,0825 V).",
      "alternativas": [
        "ΔH = −346,45 kJ; ΔS = −842 J/K; ΔG = ΔH − TΔS = −95,4 kJ; E = −ΔG/(nF) = 95 400/(12 × 96 485) ≈ 0,082 V.",
        "Usa n = 2 elétrons em vez de 12 na relação ΔG = −nFE.",
        "Usa n = 6 (número de H2) em vez dos 12 elétrons transferidos.",
        "Sinal trocado: ΔG < 0 significa reação espontânea e E > 0.",
        "Usa ΔH em lugar de ΔG (esquece o termo −TΔS)."
      ],
      "dica": "ΔG° = −nFE°: conte n como o número de elétrons da equação balanceada (aqui 12)."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 55ª IChO (2023), problema 2",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1354",
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
      "ano": 2023,
      "orgao": "prova teórica (Zurique), problema 8, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 55ª IChO, Zurique, 2023, problema 8. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "A reação de Nazarov converte uma divinil cetona em ciclopentenona por eletrociclização de um cátion pentadienílico (4 elétrons π). De acordo com as regras de Woodward–Hoffmann, em que sentido ocorre o fechamento do anel (rotação dos termini) em condições térmicas e em condições fotoquímicas?",
    "alternativas": [
      "Térmica: disrotatória; fotoquímica: conrotatória.",
      "Térmica e fotoquímica: disrotatórias.",
      "Térmica: conrotatória; fotoquímica: disrotatória.",
      "Térmica e fotoquímica: conrotatórias.",
      "Térmica: cicloadição [4+2]; fotoquímica: cicloadição [2+2]."
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "O cátion pentadienílico tem 4 elétrons π (4n): a eletrociclização térmica é conrotatória e a fotoquímica é disrotatória.",
      "detalhada": "A resolução segue o problema 8 (item 8.2) da 55ª IChO, aplicando as regras de Woodward–Hoffmann (a mesma tabela aparece no problema 4 da 52ª IChO).\n\n**1) Contagem:** o cátion pentadienílico tem 5 orbitais p e 4 elétrons π: 4n elétrons, n = 1.\n\n**2) Regras:** para 4n elétrons, a eletrociclização térmica é conrotatória; a fotoquímica é disrotatória. Para 4n + 2, vale o inverso.\n\n**3)** Isso vem do HOMO: no estado fundamental, o HOMO do cátion pentadienílico tem lobos de fases opostas nas pontas (rotação conrotatória); no estado excitado, o elétron promovido ocupa o orbital seguinte, com fases iguais nas pontas (rotação disrotatória).",
      "alternativas": [
        "Inverte as regras: para 4n elétrons, térmica é conrotatória (a disrotatória é a térmica de 4n + 2).",
        "As duas condições têm simetrias diferentes: a excitação muda a rotação permitida.",
        "Com 4n elétrons π (n = 1), o estado fundamental fecha por rotação conrotatória; ao excitar um elétron (hν) muda a simetria do HOMO e o fechamento passa a ser disrotatório.",
        "Mesma confusão: o estado excitado inverte a rotação permitida.",
        "A reação de Nazarov é uma eletrociclização (um só componente π), não uma cicloadição entre duas moléculas."
      ],
      "dica": "4n: térmico con, foto dis. 4n + 2: térmico dis, foto con. Conte só os elétrons que participam do anel."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 55ª IChO (2023), problema 8",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  },
  {
    "id": "qui-1355",
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
      "ano": 2023,
      "orgao": "prova teórica (Zurique), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de The Competition Problems from the International Chemistry Olympiads, Series 5 (IChO International Information Centre, Bratislava, 2026; ed. Anton Sirota, NIVAM): 55ª IChO, Zurique, 2023, problema 1. Reprodução e adaptação permitidas para fins de ensino, com citação.",
    "enunciado": "O 99mTc (t½ = 6,015 h) é usado em diagnóstico por imagem. Num exame padrão, administra-se uma atividade de 200 MBq. Supondo que nenhuma atividade seja perdida por excreção, depois de quantas horas a atividade cai a menos de 1 % da inicial?",
    "alternativas": [
      "≈ 20 h",
      "≈ 12 h",
      "≈ 80 h",
      "≈ 600 h",
      "≈ 40 h"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "t = ln(A0/A)/λ = ln(100) × t½/ln 2 = 6,64 meias-vidas × 6,015 h ≈ 40 h.",
      "detalhada": "A resolução segue a solução oficial do problema 1 (item 1.9), que usa t½ ≈ 6 h e obtém 39,9 h.\n\n**1) Constante de decaimento:** λ = ln 2/t½ = 0,693/6,015 h = 0,1152 h⁻¹.\n\n**2) Tempo:** A/A0 = 0,01 → t = −ln(0,01)/λ = 4,605/0,1152 h = 40,0 h.",
      "alternativas": [
        "Usa ln 10 em vez de ln 100 (1 % é uma queda de 100 vezes, não de 10).",
        "Considera só 2 meias-vidas, que levariam a 25 % da atividade, e não a 1 %.",
        "Dobra o tempo (por exemplo, usa λ = ln 2/(2 t½)).",
        "Conta 100 meias-vidas, como se 1 % fosse 1/100 do número de meias-vidas.",
        "A = A0·e^(−λt) com λ = ln 2/t½; t = ln(100)/λ = 4,605 × 6,015 h/0,693 ≈ 40 h (6,6 meias-vidas)."
      ],
      "dica": "Um fator de 100 em atividade vale cerca de 6,6 meias-vidas (2^6,64 = 100)."
    },
    "fontes": [
      {
        "titulo": "The Competition Problems from the International Chemistry Olympiads, Volume 5: 55ª IChO (2023), problema 1",
        "url": "https://www.icho.sk/files/documents/competition-problems/volume%205%20-%20icho%2051-55.pdf"
      },
      {
        "titulo": "IChO International Information Centre: coleção de problemas e condições de uso",
        "url": "https://icho.sk/competition-problems/"
      }
    ]
  }
] });
