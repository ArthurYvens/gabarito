/* Questões de Química adaptadas da 40ª Olimpíada Internacional de Química (IChO 2008, Budapeste, Hungria).
   Fontes: "Preparatory Problems for the 40th International Chemistry Olympiad, Budapest" (editor Gábor Magyarfalvi) e
   "Theoretical Problems for the 40th International Chemistry Olympiad, Budapest", © 2008 40th International Chemistry Olympiad.
   Originais: https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008PP.pdf
              https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008EN.pdf
   Os originais são licenciados sob Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0): https://creativecommons.org/licenses/by-sa/3.0/
   Este arquivo é uma adaptação (tradução para o português do Brasil, conversão para múltipla escolha e comentários novos), com as respostas
   conferidas na solução oficial de cada problema. Os autores originais não endossam esta adaptação. O conteúdo adaptado deste arquivo é
   distribuído sob a mesma licença, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR). */
Banco.registrar({ questoes: [
  {
    "id": "qui-1001",
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
      "ano": 2008,
      "orgao": "prova teórica (Budapeste), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 1. Licença CC BY-SA 3.0; esta adaptação usa a mesma licença.",
    "enunciado": "O rótulo de um frasco com uma solução aquosa diluída de um ácido estragou; só a concentração do ácido ficou legível. Uma medida rápida com o pHmetro mostrou que a concentração de íons H⁺ é igual ao valor do rótulo. Seria possível que o frasco contivesse ácido acético (pKa = 4,76; Kw = 1,0×10⁻¹⁴ a 25 °C)? Se sim, qual seria o pH da solução?",
    "alternativas": [
      "Sim, com pH ≈ 2,38",
      "Sim, com pH ≈ 4,76",
      "Sim, com pH ≈ 6,25",
      "Não: só daria certo com pH = 7,00, o que é impossível para um ácido",
      "Sim, com pH ≈ 9,38"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "É possível, mas só numa solução muito diluída: com [H⁺] = c, o balanço de massa e o de carga dão [HA] = [OH⁻] e K = [H⁺]([H⁺]² − Kw)/Kw, o que leva a [H⁺] ≈ 5,6×10⁻⁷ mol/L, pH ≈ 6,25.",
      "detalhada": "A resolução segue a solução oficial do problema 1 da prova teórica.\n\n**1) Balanços.** Massa: c = [HA] + [A⁻]. Carga: [H⁺] = [A⁻] + [OH⁻]. Como o enunciado impõe c = [H⁺], comparando as duas: **[HA] = [OH⁻]**.\n\n**2) Constante de acidez.** K = [H⁺][A⁻]/[HA] = [H⁺]([H⁺] − [OH⁻])/[OH⁻]. Com [OH⁻] = Kw/[H⁺]: K = ([H⁺]³ − Kw·[H⁺])/Kw.\n\n**3) Estimativa.** Como [HA] = [OH⁻] é minúsculo, quase todo o ácido está ionizado: a solução é muito diluída e o pH fica pouco abaixo de 7. Desprezando o termo Kw·[H⁺]: [H⁺] ≈ (K·Kw)^(1/3) = (1,74×10⁻⁵ × 1,0×10⁻¹⁴)^(1/3) ≈ 5,6×10⁻⁷ mol/L.\n\n**4) Resultado exato.** Resolvendo a equação completa por iteração, [H⁺] = 5,64×10⁻⁷ mol/L e **pH = 6,25**.\n\nCom ácido sulfúrico isso seria impossível: a primeira ionização é completa e o H⁺ sempre supera a concentração do ácido.",
      "alternativas": [
        "Errada. É pKa/2, como se [H⁺] = √(Ka·c) com c = 1 mol/L. Isso ignora a condição [H⁺] = c do enunciado.",
        "Errada. pH = pKa vale para uma mistura com [HA] = [A⁻] (tampão), não para a condição [H⁺] = c.",
        "Correta. [HA] = [OH⁻] e K = ([H⁺]³ − Kw[H⁺])/Kw dão [H⁺] = 5,64×10⁻⁷ mol/L, pH = 6,25.",
        "Errada. A condição pode ser satisfeita: em solução muito diluída o ácido acético se ioniza quase todo, e a água contribui com H⁺ suficiente para fechar a conta, com pH entre 6 e 7.",
        "Errada. É (pKa + pKw)/2, uma fórmula de sal básico; uma solução de ácido nunca tem pH acima de 7."
      ],
      "dica": "Quando o ácido está muito diluído, não dá para desprezar a autoionização da água: escreva os balanços de massa e de carga antes de aproximar."
    },
    "fontes": [
      {
        "titulo": "Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 1 (com soluções oficiais)",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008EN.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0)",
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1002",
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
      "ano": 2008,
      "orgao": "prova teórica (Budapeste), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 1. Licença CC BY-SA 3.0; esta adaptação usa a mesma licença.",
    "enunciado": "Uma solução aquosa diluída de um ácido tem concentração de H⁺ exatamente igual à concentração analítica do ácido, c. Suponha que o ácido seja o EDTA (H4A), com pKa1 = 1,70, pKa2 = 2,60, pKa3 = 6,30 e pKa4 = 10,60. Como a solução será bem ácida, a 3ª e a 4ª ionizações podem ser desprezadas. Qual é o valor de c?",
    "alternativas": [
      "2,5×10⁻³ mol/L",
      "7,1×10⁻³ mol/L",
      "1,4×10⁻² mol/L",
      "2,0×10⁻² mol/L",
      "Não existe: num ácido poliprótico o H⁺ sempre supera a concentração do ácido"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Com c = [H⁺], os balanços de massa e carga dão [H4A] = [H2A²⁻]; então Ka1·Ka2 = [H⁺]², pH = (1,70 + 2,60)/2 = 2,15 e c = 10⁻²·¹⁵ ≈ 7,1×10⁻³ mol/L.",
      "detalhada": "A resolução segue a solução oficial do problema 1 da prova teórica.\n\n**1) Balanço de massa** (só as duas primeiras ionizações): c = [H4A] + [H3A⁻] + [H2A²⁻].\n\n**2) Balanço de carga:** [H⁺] = [H3A⁻] + 2[H2A²⁻] (o OH⁻ é desprezível em meio ácido).\n\n**3) Condição c = [H⁺]:** igualando, [H4A] = [H2A²⁻].\n\n**4) Produto das constantes:** Ka1·Ka2 = [H⁺]²[H2A²⁻]/[H4A] = [H⁺]². Logo pH = (pKa1 + pKa2)/2 = 2,15.\n\n**5) Concentração:** c = [H⁺] = 10⁻²·¹⁵ ≈ **7,1×10⁻³ mol/L**. Resolver com as quatro constantes, sem aproximação, dá o mesmo valor (7,08×10⁻³ mol/L).",
      "alternativas": [
        "Errada. É Ka2 (10⁻²·⁶): toma uma constante isolada como se fosse a resposta.",
        "Correta. [H4A] = [H2A²⁻] leva a [H⁺]² = Ka1·Ka2, pH 2,15 e c ≈ 7,1×10⁻³ mol/L.",
        "Errada. É o dobro do valor certo, como se cada molécula de EDTA tivesse liberado exatamente dois H⁺.",
        "Errada. É Ka1 (10⁻¹·⁷): mais uma vez, uma constante tomada como concentração.",
        "Errada. Isso vale para o ácido sulfúrico, cuja primeira ionização é completa. No EDTA as ionizações são parciais: parte fica como H4A e parte vai além de H3A⁻, e as duas coisas se compensam quando [H4A] = [H2A²⁻]."
      ],
      "dica": "Em ácido diprótico, o pH em que [H2A] = [A²⁻] é a média dos dois pKa: é o mesmo truque do ponto de anfólito."
    },
    "fontes": [
      {
        "titulo": "Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 1 (com soluções oficiais)",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008EN.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0)",
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1003",
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
      "ano": 2008,
      "orgao": "prova teórica (Budapeste), problema 2, adaptada"
    },
    "credito": "Adaptada e traduzida de Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 2. Licença CC BY-SA 3.0; esta adaptação usa a mesma licença.",
    "enunciado": "Um hidrocarboneto aromático muito conhecido, o naftaleno (A, C10H8), é hidrogenado com 5 H2 sobre paládio e dá B (C10H18, decalina). A oxidação radicalar de B fornece C (C10H18O). Uma solução de C em hexano reage com sódio metálico, com liberação de gás, mas C não reage com ácido crômico. Qual é a estrutura de C?",
    "alternativas": [
      "Deca-hidronaftalen-1-ol",
      "Deca-hidronaftalen-2-ol",
      "Ciclodecanona",
      "Deca-hidronaftalen-4a-ol (OH no carbono da junção dos anéis)",
      "Ciclodecanol"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "Reagir com sódio mostra um grupo OH; não ser oxidado pelo ácido crômico mostra que o álcool é terciário. Em B, o único carbono terciário é o da junção dos anéis: C é o deca-hidronaftalen-4a-ol.",
      "detalhada": "A resolução segue a solução oficial do problema 2 da prova teórica.\n\n**1) Reação com Na:** 2 R–OH + 2 Na → 2 R–O⁻Na⁺ + H2. O gás indica um álcool (cetona e éter não liberam H2).\n\n**2) Ácido crômico:** oxida álcoois primários e secundários (a aldeído/ácido e a cetona). Se C não reage, o álcool é **terciário**.\n\n**3) Onde fica o OH:** na decalina, os únicos carbonos ligados a três outros carbonos (terciários) são os dois da junção dos anéis (4a e 8a). A oxidação radicalar ataca justamente a ligação C–H terciária, a mais fraca.\n\n**4) Fórmula:** deca-hidronaftalen-4a-ol = C10H18O, a mesma de C. A solução oficial desenha o OH na junção dos anéis.",
      "alternativas": [
        "Errada. É um álcool secundário: seria oxidado a cetona pelo ácido crômico.",
        "Errada. Também é secundário e reagiria com o ácido crômico.",
        "Errada. Tem a fórmula C10H18O, mas cetona não tem H ácido e não libera gás com sódio.",
        "Correta. Álcool terciário (reage com Na, resiste ao ácido crômico) no carbono da junção dos anéis, o único C terciário da decalina.",
        "Errada. Ciclodecanol é C10H20O (um anel só) e, além disso, é secundário."
      ],
      "dica": "Na + álcool → H2; ácido crômico só oxida álcool primário e secundário. Juntando as duas pistas, sobra o terciário."
    },
    "fontes": [
      {
        "titulo": "Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 2 (com soluções oficiais)",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008EN.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0)",
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: Naphthalene",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Naphthalene"
      }
    ]
  },
  {
    "id": "qui-1004",
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
      "ano": 2008,
      "orgao": "prova teórica (Budapeste), problema 2, adaptada"
    },
    "credito": "Adaptada e traduzida de Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 2. Licença CC BY-SA 3.0; esta adaptação usa a mesma licença.",
    "enunciado": "Um hidrocarboneto aromático muito conhecido, o naftaleno (A, C10H8), é hidrogenado com 5 H2 sobre paládio e dá B (C10H18, decalina). A oxidação radicalar de B fornece C (C10H18O). C é o álcool terciário deca-hidronaftalen-4a-ol. Aquecido com ZnCl2, C perde água e dá o alqueno D (C10H16); o espectro de RMN de ¹³C de D mostra apenas dois tipos de grupos CH2. A ozonólise de D (1. O3; 2. Zn/H⁺) dá E, que também tem só dois tipos de CH2. Qual é E?",
    "alternativas": [
      "4-(2-Oxociclo-hexil)butanal",
      "Ciclodecano-1,5-diona",
      "Ácido decanodioico",
      "Ciclodecano-1,2-diona",
      "Ciclodecano-1,6-diona"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "A desidratação leva à ligação dupla mais substituída, entre os dois carbonos da junção (D = 1,2,3,4,5,6,7,8-octa-hidronaftaleno, simétrico, dois tipos de CH2). Cortar essa ligação abre o sistema bicíclico num anel de dez membros com duas carbonilas opostas: ciclodecano-1,6-diona.",
      "detalhada": "A resolução segue a solução oficial do problema 2 da prova teórica.\n\n**1) Desidratação de C (regra de Zaitsev):** o OH sai da junção dos anéis e a dupla se forma entre C4a e C8a, a posição tetrassubstituída, a mais estável. D é o 1,2,3,4,5,6,7,8-octa-hidronaftaleno. Por simetria, ele tem só dois tipos de CH2: os vizinhos da dupla (alílicos) e os do meio.\n\n**2) Ozonólise com Zn/H⁺ (redutiva):** cada carbono da C=C vira C=O. Como os dois carbonos da dupla estão nos dois anéis, o corte transforma o biciclo num **anel de dez carbonos** com as carbonilas nas posições 1 e 6.\n\n**3) Conferência:** ciclodecano-1,6-diona, C10H16O2, tem os CH2 vizinhos às carbonilas (C2, C5, C7, C10) e os CH2 do meio (C3, C4, C8, C9): dois tipos, como diz o enunciado.",
      "alternativas": [
        "Errada. Sairia da ozonólise do alqueno trissubstituído (dupla entre C1 e C8a). Tem a mesma fórmula, mas muitos tipos de CH2, além de um CHO.",
        "Errada. A ciclodecano-1,5-diona tem três CH2 entre as carbonilas de um lado e cinco do outro: são cinco tipos de CH2, não dois.",
        "Errada. Ozonólise com Zn é redutiva e não forma ácido carboxílico; além disso, abrir os dois anéis exigiria cortar duas ligações C=C.",
        "Errada. Na ozonólise, a ligação entre os dois carbonos da dupla é justamente a que se rompe: as duas C=O formadas nunca ficam ligadas uma à outra.",
        "Correta. O corte da dupla tetrassubstituída da junção dá o anel de dez membros com as C=O em posições opostas (1 e 6)."
      ],
      "dica": "Ozonólise de uma dupla que está na junção de dois anéis fundidos abre os dois de uma vez: resulta um anel maior, com as carbonilas frente a frente."
    },
    "fontes": [
      {
        "titulo": "Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 2 (com soluções oficiais)",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008EN.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0)",
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: Cyclodecane-1,6-dione",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Cyclodecane-1_6-dione"
      }
    ]
  },
  {
    "id": "qui-1005",
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
      "ano": 2008,
      "orgao": "prova teórica (Budapeste), problema 2, adaptada"
    },
    "credito": "Adaptada e traduzida de Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 2. Licença CC BY-SA 3.0; esta adaptação usa a mesma licença.",
    "enunciado": "Na mesma sequência de reações que começa no naftaleno (A, C10H8), obtém-se G, um álcool bicíclico saturado C10H18O formado por um anel de cinco e um de sete átomos de carbono fundidos (deca-hidroazulen-4-ol). Aquecido com Pd/C a 350 °C, G perde uma molécula de H2O e 8 átomos de H e dá o hidrocarboneto H, de cor azul intensa. Aquecido a 450 °C, H se converte em A. Qual é H e que relação ele tem com A?",
    "alternativas": [
      "Azuleno, C10H8, isômero constitucional do naftaleno",
      "Naftaleno: H e A são o mesmo composto",
      "1,2,3,4-Tetra-hidronaftaleno, C10H12",
      "[10]Anuleno (ciclodecapentaeno), C10H10",
      "Indeno, C9H8"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "G (C10H18O) − H2O − 8 H = C10H8 com o esqueleto 5 + 7: é o azuleno, aromático e azul, isômero constitucional do naftaleno, no qual se rearranja a 450 °C.",
      "detalhada": "A resolução segue a solução oficial do problema 2 da prova teórica.\n\n**1) Fórmula de H:** C10H18O − H2O = C10H16; tirando mais 8 H, sobra **C10H8**, a mesma fórmula do naftaleno.\n\n**2) Esqueleto:** a desidrogenação não muda a ligação entre os carbonos. Um anel de cinco fundido a um de sete, totalmente insaturado, é o **azuleno**.\n\n**3) Relação com A:** mesma fórmula, ligações diferentes: isômeros constitucionais. O azuleno também é aromático (10 elétrons π na periferia) e azul, ao contrário do naftaleno, que é incolor. A 450 °C ele se rearranja no naftaleno, mais estável: é a seta H → A do esquema.",
      "alternativas": [
        "Correta. C10H8 com anéis de 5 e 7 membros: azuleno, isômero constitucional do naftaleno.",
        "Errada. H tem anéis de cinco e de sete átomos; o naftaleno tem dois anéis de seis. Só se transformam um no outro a 450 °C.",
        "Errada. Tetralina é C10H12 e tem esqueleto 6 + 6; a conta de H perdidos dá C10H8.",
        "Errada. O [10]anuleno é monocíclico e C10H10; G é bicíclico, e a desidrogenação não abre anéis.",
        "Errada. O indeno tem 9 carbonos (anéis de 6 e 5); a reação não perde carbono."
      ],
      "dica": "Desidrogenação catalítica (Pd/C, calor) não mexe no esqueleto: para achar o produto, mantenha os anéis e só tire hidrogênios."
    },
    "fontes": [
      {
        "titulo": "Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 2 (com soluções oficiais)",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008EN.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0)",
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: Azulene",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Azulene"
      }
    ]
  },
  {
    "id": "qui-1006",
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
      "ano": 2008,
      "orgao": "prova teórica (Budapeste), problema 3, adaptada"
    },
    "credito": "Adaptada e traduzida de Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 3. Licença CC BY-SA 3.0; esta adaptação usa a mesma licença.",
    "enunciado": "O fármaco vimpocetina é preparado a partir da (+)-vincamina, C21H26N2O3, um alcaloide que tem um grupo OH num carbono sem hidrogênio, o mesmo carbono que carrega um éster metílico (–C(OH)(CO2CH3)–). Na primeira etapa, a vincamina é tratada com H2SO4 concentrado (catalítico) em CH2Cl2 e dá o intermediário A, cuja análise elementar é: C 74,97%, H 7,19%, N 8,33% (o restante é oxigênio). Use C = 12,01; H = 1,008; N = 14,01; O = 16,00. Qual é a fórmula de A e que transformação ocorreu?",
    "alternativas": [
      "C20H24N2O3: hidrólise do éster metílico",
      "C21H24N2O2: desidratação (eliminação de uma molécula de H2O)",
      "C21H26N2O3: só um rearranjo, sem mudar a fórmula",
      "C22H26N2O2: troca do éster metílico pelo etílico",
      "C21H22N2O: eliminação de duas moléculas de H2O"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "A composição bate com C21H24N2O2 (C 74,97%, H 7,19%, N 8,33%), que é a vincamina menos H2O: o ácido sulfúrico desidratou o álcool terciário, formando uma ligação C=C conjugada com o éster.",
      "detalhada": "A resolução segue a solução oficial do problema 3 da prova teórica.\n\n**1) Fórmula mínima de A:** em 100 g, C 74,97/12,01 = 6,242 mol; H 7,19/1,008 = 7,13 mol; N 8,33/14,01 = 0,595 mol; O (100 − 90,49) = 9,51/16,00 = 0,594 mol. Dividindo por 0,594: C 10,5 : H 12 : N 1 : O 1 → C21H24N2O2.\n\n**2) Comparação com a vincamina:** C21H26N2O3 − C21H24N2O2 = H2O. Perdeu-se exatamente uma molécula de água.\n\n**3) Interpretação:** ácido forte concentrado desidrata o álcool terciário (eliminação), formando uma dupla C=C conjugada com o éster (é o éster do ácido apovincamínico). Na segunda etapa (NaOH, depois C2H5Br), o éster metílico vira etílico e se obtém a vimpocetina, C22H26N2O2.\n\nObservação: o oxigênio impresso na prova (9,55%) não fecha a soma em 100%; por isso o enunciado dá só C, H e N.",
      "alternativas": [
        "Errada. C20H24N2O3 teria C 70,6% e O 14,1%, longe dos dados. Hidrólise de éster também não é o que o H2SO4 concentrado em CH2Cl2 faz aqui.",
        "Correta. C21H24N2O2 dá C 74,97%, H 7,19%, N 8,33%: é a vincamina menos uma H2O.",
        "Errada. A própria vincamina tem C 71,2% e O 13,5%: a composição de A é outra.",
        "Errada. C22H26N2O2 é a vimpocetina (C 75,4%), produto da segunda etapa, que usa NaOH e C2H5Br.",
        "Errada. C21H22N2O teria C 79,2%; a vincamina tem um só OH para eliminar, e o grupo éster continua em A."
      ],
      "dica": "Quando a fórmula do produto difere da do reagente por exatamente H2O e o reagente é ácido forte concentrado, pense em desidratação de álcool."
    },
    "fontes": [
      {
        "titulo": "Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 3 (com soluções oficiais)",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008EN.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0)",
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: Vincamine",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Vincamine"
      },
      {
        "titulo": "PubChem: Vinpocetine",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Vinpocetine"
      }
    ]
  },
  {
    "id": "qui-1007",
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
      "ano": 2008,
      "orgao": "prova teórica (Budapeste), problema 3, adaptada"
    },
    "credito": "Adaptada e traduzida de Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 3. Licença CC BY-SA 3.0; esta adaptação usa a mesma licença.",
    "enunciado": "A vimpocetina (B, C22H26N2O2) é obtida como um único estereoisômero e tem 3 outros estereoisômeros possíveis. Um de seus metabólitos, D, forma-se pela hidratação regio e estereosseletiva de uma ligação C=C de B, e tem 7 outros estereoisômeros possíveis. Nenhum desses compostos tem forma meso. Quantos centros estereogênicos (carbonos quirais) há em B e em D?",
    "alternativas": [
      "B: 3; D: 7",
      "B: 1; D: 2",
      "B: 2; D: 3",
      "B: 2; D: 4",
      "B: 4; D: 8"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "Sem formas meso, n centros estereogênicos dão 2ⁿ estereoisômeros. B tem 1 + 3 = 4 = 2² (2 centros); D tem 1 + 7 = 8 = 2³ (3 centros): a hidratação criou um centro novo.",
      "detalhada": "A resolução segue a solução oficial do problema 3 da prova teórica.\n\n**1) Total de estereoisômeros:** o composto mais os \"outros\". B: 1 + 3 = 4. D: 1 + 7 = 8.\n\n**2) Regra 2ⁿ:** sem compostos meso, cada centro estereogênico dobra o número de estereoisômeros. 4 = 2² → B tem **2** centros; 8 = 2³ → D tem **3** centros.\n\n**3) Interpretação:** a adição de H2O à dupla C=C transforma um carbono sp² num carbono sp³ com quatro grupos diferentes (OH, éster, CH2 do anel e N). É o terceiro centro, e por isso a solução oficial aceita os dois estereoisômeros nesse carbono.",
      "alternativas": [
        "Errada. Usa o número de \"outros\" estereoisômeros como se fosse o número de centros.",
        "Errada. Com 1 centro haveria só 2 estereoisômeros (um par de enantiômeros), não 4.",
        "Correta. 4 = 2² e 8 = 2³: B tem 2 centros e D, 3.",
        "Errada. Com 4 centros, D teria 16 estereoisômeros, não 8.",
        "Errada. 4 e 8 são os totais de estereoisômeros, não os números de centros."
      ],
      "dica": "Total de estereoisômeros = 2ⁿ (sem meso). Some 1 ao número de \"outros\" antes de tirar o logaritmo de base 2."
    },
    "fontes": [
      {
        "titulo": "Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 3 (com soluções oficiais)",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008EN.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0)",
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: Vinpocetine",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Vinpocetine"
      }
    ]
  },
  {
    "id": "qui-1008",
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
      "ano": 2008,
      "orgao": "prova teórica (Budapeste), problema 4, adaptada"
    },
    "credito": "Adaptada e traduzida de Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 4. Licença CC BY-SA 3.0; esta adaptação usa a mesma licença.",
    "enunciado": "Na abertura de epóxidos catalisada por ácido, a ligação C–O que se rompe é a que gera o carbocátion (ou espécie parecida com ele) mais estável. Na catálise básica, rompe-se predominantemente a ligação C–O menos impedida. O 2,2-dimetiloxirano (1,2-epóxi-2-metilpropano) reage com metanol a baixa temperatura (i) com catálise de H2SO4 e (ii) com catálise de NaOCH3. Quais são os produtos predominantes em (i) e em (ii), nessa ordem?",
    "alternativas": [
      "(i) 1-metoxi-2-metilpropan-2-ol; (ii) 2-metoxi-2-metilpropan-1-ol",
      "(i) e (ii) 1-metoxi-2-metilpropan-2-ol",
      "(i) e (ii) 2-metoxi-2-metilpropan-1-ol",
      "(i) 2-metoxi-2-metilpropan-1-ol; (ii) 1-metoxi-2-metilpropan-2-ol",
      "(i) 2-metilpropano-1,2-diol; (ii) 1-metoxi-2-metilpropan-2-ol"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "Em ácido, o metanol ataca o carbono terciário (carbocátion terciário estável): 2-metoxi-2-metilpropan-1-ol. Em base, o metóxido ataca o CH2, menos impedido (SN2): 1-metoxi-2-metilpropan-2-ol.",
      "detalhada": "A resolução segue a solução oficial do problema 4 da prova teórica.\n\n**(i) Catálise ácida:** o H⁺ protona o oxigênio do epóxido. A ligação que se rompe é a do carbono terciário, porque o cátion terciário (CH3)2C⁺–CH2OH é o mais estável. O metanol ataca esse carbono: (CH3)2C(OCH3)–CH2OH, o **2-metoxi-2-metilpropan-1-ol**.\n\n**(ii) Catálise básica:** o íon CH3O⁻ ataca diretamente o anel (SN2), pelo carbono menos impedido, o CH2. O oxigênio fica no carbono terciário e, depois de protonado, vira OH: CH3O–CH2–C(CH3)2–OH, o **1-metoxi-2-metilpropan-2-ol**.\n\nOs dois produtos são isômeros de posição (C5H12O2): só a regiosseletividade os diferencia.",
      "alternativas": [
        "Errada. É a resposta trocada: em ácido o nucleófilo vai ao carbono mais substituído, e em base ao menos impedido.",
        "Errada. Esse produto (ataque ao CH2) só predomina na catálise básica.",
        "Errada. Esse produto (ataque ao carbono terciário) só predomina na catálise ácida.",
        "Correta. Ácido: ataque no C terciário (via carbocátion). Base: ataque SN2 no CH2.",
        "Errada. O nucleófilo é o metanol, não a água; o diol só se formaria em meio aquoso."
      ],
      "dica": "Epóxido em ácido: o nucleófilo vai ao carbono mais substituído (como na regra de Markovnikov). Em base: vai ao menos impedido (SN2)."
    },
    "fontes": [
      {
        "titulo": "Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 4 (com soluções oficiais)",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008EN.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0)",
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: 2-Methoxy-2-methylpropan-1-ol",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/2-Methoxy-2-methylpropan-1-ol"
      },
      {
        "titulo": "PubChem: 1-Methoxy-2-methylpropan-2-ol",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/1-Methoxy-2-methyl-2-propanol"
      }
    ]
  },
  {
    "id": "qui-1009",
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
      "ano": 2008,
      "orgao": "prova teórica (Budapeste), problema 4, adaptada"
    },
    "credito": "Adaptada e traduzida de Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 4. Licença CC BY-SA 3.0; esta adaptação usa a mesma licença.",
    "enunciado": "Aluminossilicatos porosos ácidos convertem alquiloxiranos (epóxidos) em derivados do 1,4-dioxano por dimerização cíclica. Na catálise ácida, um carbocátion aberto e plano só se forma se for terciário, benzílico ou alílico; quando ele se forma, a ligação C–O que se rompe é a do carbono terciário. Quando ele não se forma, o anel se abre pela ligação C–O do CH2, menos impedido, e o carbono substituído conserva a configuração. Considere duas reações feitas com um único enantiômero: (i) (S)-2-metiloxirano, que dá o 2,5-dimetil-1,4-dioxano; (ii) (R)-2-etil-2-metiloxirano, que dá o 2,5-dietil-2,5-dimetil-1,4-dioxano. Quantos estereoisômeros do dioxano se formam em (i) e em (ii), respectivamente?",
    "alternativas": [
      "1 e 1",
      "1 e 2",
      "2 e 3",
      "3 e 3",
      "1 e 3"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "Em (i) o carbono quiral é secundário: não se forma cátion plano, o anel se abre pela ligação CH2–O e o carbono quiral conserva a configuração; sai um só estereoisômero, o (2S,5S)-2,5-dimetil-1,4-dioxano. Em (ii) o carbono quiral é terciário: o cátion plano é atacado pelas duas faces e saem os três estereoisômeros possíveis, (R,R), (S,S) e o meso (R,S).",
      "detalhada": "A resolução segue a solução oficial do problema 4 da prova teórica.\n\n**(i) (S)-2-metiloxirano:** o carbono estereogênico é secundário. Pelo enunciado, não há carbocátion aberto, e o anel se abre pela ligação CH2–O: a ligação C–O do carbono quiral não é tocada, e cada unidade conserva a configuração S. Forma-se **um único estereoisômero**, o (2S,5S)-2,5-dimetil-1,4-dioxano, que é o produto desenhado na solução oficial.\n\n**(ii) (R)-2-etil-2-metiloxirano:** o carbono estereogênico é terciário, então a ligação C–O se rompe formando um **carbocátion plano**. O ataque pela face de cima ou pela de baixo é igualmente possível, e a configuração original se perde em cada um dos dois centros do dímero.\n\n**Contagem em (ii):** com dois centros, as combinações são (R,R), (S,S) e (R,S). Como o 2,5-dietil-2,5-dimetil-1,4-dioxano tem centro de simetria quando os centros são opostos, (R,S) e (S,R) são o mesmo composto, meso. Total: **3** estereoisômeros, os mesmos que se obtêm partindo do epóxido racêmico.",
      "alternativas": [
        "Errada. Em (ii) o carbocátion terciário plano destrói a informação de configuração: não sai um único produto.",
        "Errada. Esquece o meso (R,S), ou então um dos dois produtos quirais.",
        "Errada. Em (i) não há cátion plano; a estereoquímica do epóxido enantiopuro é transferida para um único produto.",
        "Errada. Em (i) a configuração não se perde, porque o carbono secundário não forma cátion aberto.",
        "Correta. (i) 1 estereoisômero (sem cátion plano); (ii) 3: (R,R), (S,S) e o meso (R,S)."
      ],
      "dica": "Carbocátion plano = perda da configuração naquele carbono. Com dois centros iguais, conte o meso uma vez só."
    },
    "fontes": [
      {
        "titulo": "Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 4 (com soluções oficiais)",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008EN.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0)",
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1010",
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
      "ano": 2008,
      "orgao": "prova teórica (Budapeste), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 5. Licença CC BY-SA 3.0; esta adaptação usa a mesma licença.",
    "enunciado": "A e B são sólidos brancos cristalinos, muito solúveis em água. A solução aquosa de 20,00 g de A é levemente básica (pH 8,5–9), e a de 11,52 g de B é levemente ácida (pH 4,5–5). Misturando as duas, forma-se um precipitado branco C que, filtrado, lavado e seco, pesa 20,35 g. O filtrado é praticamente neutro, dá cor castanha com solução acidificada de KI e, fervido, evapora sem deixar resíduo. Quais são A e B? Massas molares (g/mol): Ba(NO2)2 = 229,3; Ba(NO3)2 = 261,3; Ca(NO2)2 = 132,1; Sr(NO2)2 = 179,6; (NH4)2SO4 = 132,1; NH4Cl = 53,5; BaSO4 = 233,4; SrSO4 = 183,7; CaSO4 = 136,1.",
    "alternativas": [
      "A = Ca(NO2)2; B = (NH4)2SO4",
      "A = Ba(NO3)2; B = (NH4)2SO4",
      "A = Ba(NO2)2; B = (NH4)2SO4",
      "A = Sr(NO2)2; B = (NH4)2SO4",
      "A = Ba(NO2)2; B = NH4Cl"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "20,00 g de Ba(NO2)2 (0,0872 mol) e 11,52 g de (NH4)2SO4 (0,0872 mol) dão 0,0872 mol de BaSO4 = 20,35 g. No filtrado fica NH4NO2: o nitrito oxida I⁻ a I2 (cor castanha) e, no aquecimento, NH4⁺ + NO2⁻ → N2 + 2 H2O, sem resíduo.",
      "detalhada": "A resolução segue a solução oficial do problema 5 da prova teórica.\n\n**1) Pistas qualitativas:** A básico em solução sugere sal de ácido fraco (nitrito); B ácido sugere sal de amônio. O filtrado castanho com KI acidificado indica um oxidante: 2 NO2⁻ + 2 I⁻ + 4 H⁺ → 2 NO + I2 + 2 H2O. Evaporar sem resíduo indica que o que sobrou em solução se decompõe todo em gases: NH4⁺ + NO2⁻ → N2 + 2 H2O.\n\n**2) Conta com Ba(NO2)2 e (NH4)2SO4:** n(A) = 20,00/229,3 = 0,0872 mol; n(B) = 11,52/132,1 = 0,0872 mol (proporção 1:1). Ba²⁺ + SO4²⁻ → BaSO4: 0,0872 × 233,4 = **20,35 g**, exatamente a massa de C.\n\n**3) Por que os outros falham:** com Ca(NO2)2 sairiam 11,9 g de CaSO4; com Sr(NO2)2, 16,0 g de SrSO4; com Ba(NO3)2, 17,9 g de BaSO4. Nenhum dá 20,35 g.",
      "alternativas": [
        "Errada. Pelo sulfato (reagente limitante), sairiam 0,0872 × 136,1 ≈ 11,9 g de CaSO4, e o CaSO4 ainda é um pouco solúvel.",
        "Errada. 20,00 g de Ba(NO3)2 são 0,0765 mol e dariam 17,9 g de BaSO4. Além disso, nitrato de bário não deixa a solução básica, e o nitrato não oxida I⁻ nessas condições.",
        "Correta. As quantidades são equimolares (0,0872 mol) e dão 20,35 g de BaSO4; no filtrado, o NH4NO2 explica a cor com KI e a evaporação sem resíduo.",
        "Errada. Sairiam cerca de 16,0 g de SrSO4, não 20,35 g.",
        "Errada. Cloreto de amônio não precipita o bário: não haveria o sólido C."
      ],
      "dica": "Em problema de identificação, junte as pistas qualitativas (pH, cor, resíduo) com uma conta de massa: só uma combinação fecha as duas."
    },
    "fontes": [
      {
        "titulo": "Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 5 (com soluções oficiais)",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008EN.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0)",
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1011",
    "materia": "quimica",
    "assunto": "Ligações químicas",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 2008,
      "orgao": "prova teórica (Budapeste), problema 6, adaptada"
    },
    "credito": "Adaptada e traduzida de Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 6. Licença CC BY-SA 3.0; esta adaptação usa a mesma licença.",
    "enunciado": "Os hidratos de clatrato de cloro e de metano têm a mesma estrutura. Ela se baseia em dodecaedros formados por 20 moléculas de água cada um, arrumados como numa rede cúbica de corpo centrado (um dodecaedro em cada vértice e um no centro da célula unitária). Os dodecaedros se ligam por moléculas de água adicionais nas faces da célula unitária, duas em cada face. Há dois tipos de cavidade: o interior de cada dodecaedro (tipo A) e cavidades um pouco maiores (tipo B), 6 por célula unitária. A aresta da célula é 1,182 nm. Se todas as cavidades estiverem ocupadas por uma molécula de gás, qual é a razão entre o número de moléculas de água e o de moléculas hóspedes?",
    "alternativas": [
      "3,71",
      "5,75",
      "6,50",
      "7,67",
      "23,0"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Por célula: 2 dodecaedros × 20 = 40 águas, mais 6 faces × 2 águas × ½ = 6 águas, total 46. Cavidades: 2 do tipo A + 6 do tipo B = 8. Razão 46/8 = 5,75.",
      "detalhada": "A resolução segue a solução oficial do problema 6 da prova teórica.\n\n**1) Dodecaedros por célula:** rede cúbica de corpo centrado tem 8 vértices × ⅛ + 1 central = **2** dodecaedros, logo 2 × 20 = 40 moléculas de água e 2 cavidades do tipo A.\n\n**2) Águas das faces:** 6 faces × 2 moléculas, mas cada face é compartilhada por duas células: 6 × 2 × ½ = **6**.\n\n**3) Total de água:** 40 + 6 = **46** por célula.\n\n**4) Hóspedes:** 2 (tipo A) + 6 (tipo B) = **8**. Razão: 46 : 8 = **5,75**.",
      "alternativas": [
        "Errada. Conta só 1 dodecaedro por célula (20 + 6 = 26 águas, 1 + 6 = 7 cavidades). A rede de corpo centrado tem 2.",
        "Correta. 46 águas e 8 cavidades por célula: 46/8 = 5,75.",
        "Errada. Esquece que cada face é dividida entre duas células e soma 12 águas de face (52/8).",
        "Errada. Ocupa só as 6 cavidades B (46/6). Isso é o que acontece no hidrato de cloro, cuja molécula não cabe nas cavidades A, mas a pergunta supõe todas cheias.",
        "Errada. Conta só as 2 cavidades A (46/2)."
      ],
      "dica": "Em célula unitária: vértice vale ⅛, face vale ½, aresta vale ¼ e o centro vale 1."
    },
    "fontes": [
      {
        "titulo": "Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 6 (com soluções oficiais)",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008EN.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0)",
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1012",
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
      "ano": 2008,
      "orgao": "prova teórica (Budapeste), problema 6, adaptada"
    },
    "credito": "Adaptada e traduzida de Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 6. Licença CC BY-SA 3.0; esta adaptação usa a mesma licença.",
    "enunciado": "Os hidratos de clatrato de cloro e de metano têm a mesma estrutura. Ela se baseia em dodecaedros formados por 20 moléculas de água cada um, arrumados como numa rede cúbica de corpo centrado (um dodecaedro em cada vértice e um no centro da célula unitária). Os dodecaedros se ligam por moléculas de água adicionais nas faces da célula unitária, duas em cada face. Há dois tipos de cavidade: o interior de cada dodecaedro (tipo A) e cavidades um pouco maiores (tipo B), 6 por célula unitária. A aresta da célula é 1,182 nm. Cada célula unitária contém 46 moléculas de água e 8 cavidades. No hidrato de metano, formado entre 0 e 10 °C, todas as cavidades estão ocupadas por CH4. Qual é a densidade desse clatrato? Use M(H2O) = 18,02 g/mol, M(CH4) = 16,04 g/mol e NA = 6,022×10²³ mol⁻¹.",
    "alternativas": [
      "0,833 g/cm³",
      "0,930 g/cm³",
      "0,962 g/cm³",
      "1,071 g/cm³",
      "1,26 g/cm³"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "Massa da célula: (46 × 18,02 + 8 × 16,04) g/mol ÷ NA = 957 g/mol ÷ 6,022×10²³ = 1,589×10⁻²¹ g. Volume: (1,182×10⁻⁷ cm)³ = 1,651×10⁻²¹ cm³. Densidade ≈ 0,962 g/cm³.",
      "detalhada": "A resolução segue a solução oficial do problema 6 da prova teórica.\n\n**1) Massa por célula:** 46 × 18,02 + 8 × 16,04 = 828,9 + 128,3 = 957,2 g por mol de células. Dividindo por NA: 957,2 / 6,022×10²³ = **1,589×10⁻²¹ g**.\n\n**2) Volume da célula:** a = 1,182 nm = 1,182×10⁻⁷ cm; a³ = **1,651×10⁻²¹ cm³**.\n\n**3) Densidade:** 1,589×10⁻²¹ / 1,651×10⁻²¹ = **0,962 g/cm³**.\n\nÉ menos denso que a água líquida: o hidrato de metano flutua, como o gelo.",
      "alternativas": [
        "Errada. Esquece as 8 moléculas de metano e conta só a água da célula.",
        "Errada. Põe metano só nas 6 cavidades B; a pergunta diz que todas as cavidades estão ocupadas.",
        "Correta. 1,589×10⁻²¹ g / 1,651×10⁻²¹ cm³ = 0,962 g/cm³.",
        "Errada. Usa 52 águas por célula, contando inteiras as águas das faces, que são compartilhadas.",
        "Errada. É a densidade do hidrato de cloro, cujo hóspede (Cl2, 70,9 g/mol) é bem mais pesado que o metano."
      ],
      "dica": "Densidade de cristal = (massa do conteúdo de uma célula) / (aresta³). Converta nm para cm antes (1 nm = 10⁻⁷ cm)."
    },
    "fontes": [
      {
        "titulo": "Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 6 (com soluções oficiais)",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008EN.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0)",
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1013",
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
      "ano": 2008,
      "orgao": "prova teórica (Budapeste), problema 7, adaptada"
    },
    "credito": "Adaptada e traduzida de Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 7. Licença CC BY-SA 3.0; esta adaptação usa a mesma licença.",
    "enunciado": "Cristais de ditionato de sódio foram obtidos por evaporação de uma solução. Eles se dissolvem bem em água e não precipitam com BaCl2. Aquecidos e mantidos a 130 °C, perdem 14,88% da massa, e o pó branco resultante continua sem precipitar com BaCl2. Mantidos a 300 °C por algumas horas, os cristais originais perdem 41,34% da massa, e o resíduo agora dá precipitado branco com BaCl2. Qual é a composição dos cristais? Massas molares (g/mol): Na2S2O6 = 206,1; H2O = 18,02; Na2SO4 = 142,0.",
    "alternativas": [
      "Na2S2O6·H2O",
      "Na2S2O6·2H2O",
      "Na2S2O6·3H2O",
      "Na2S2O6·4H2O",
      "Na2S2O6·6H2O"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "A 130 °C sai só a água de cristalização: 2 × 18,02/(206,1 + 36,0) = 14,88%, o que dá o di-hidrato. A 300 °C, Na2S2O6 → Na2SO4 + SO2: a perda total é (242,1 − 142,0)/242,1 = 41,34%, o que confirma a fórmula.",
      "detalhada": "A resolução segue a solução oficial do problema 7 da prova teórica.\n\n**1) Perda a 130 °C:** sem formar sulfato (não há precipitado com Ba²⁺), só sai água. Para Na2S2O6·xH2O: 18,02x/(206,1 + 18,02x) = 0,1488 → x = 2,0.\n\n**2) Perda a 300 °C:** o resíduo agora precipita com Ba²⁺, então se formou sulfato: Na2S2O6·2H2O → Na2SO4 + SO2 + 2 H2O. Restam 142,0 g de cada 242,1 g: perda de 100,1/242,1 = **41,34%**, como medido.\n\n**3) Fórmula:** **Na2S2O6·2H2O**.",
      "alternativas": [
        "Errada. Uma água daria perda de 8,0% a 130 °C.",
        "Correta. 36,0/242,1 = 14,88%; a decomposição a Na2SO4 + SO2 confirma os 41,34%.",
        "Errada. Três águas dariam perda de 20,8%.",
        "Errada. Quatro águas dariam perda de 25,9%.",
        "Errada. Seis águas dariam perda de 34,4%."
      ],
      "dica": "Use as duas perdas de massa: a primeira dá a água de cristalização e a segunda serve de prova real da fórmula."
    },
    "fontes": [
      {
        "titulo": "Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 7 (com soluções oficiais)",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008EN.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0)",
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1014",
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
      "ano": 2008,
      "orgao": "prova teórica (Budapeste), problema 7, adaptada"
    },
    "credito": "Adaptada e traduzida de Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 7. Licença CC BY-SA 3.0; esta adaptação usa a mesma licença.",
    "enunciado": "A 75 °C, o íon ditionato é oxidado pelo bromo em meio ácido: S2O6²⁻ + Br2 + 2 H2O → 2 SO4²⁻ + 2 Br⁻ + 4 H⁺. Algumas velocidades iniciais medidas foram ([Br2]0 em mmol/L; [S2O6²⁻]0 e [H⁺]0 em mol/L; v0 em nmol L⁻¹ s⁻¹):\n- 0,500; 0,0500; 0,500 → 640\n- 0,500; 0,0100; 0,500 → 129\n- 0,100; 0,0500; 0,500 → 641\n- 0,500; 0,0500; 0,100 → 128\nQual é a lei de velocidade e o valor da constante k?",
    "alternativas": [
      "v = k[S2O6²⁻][H⁺]; k = 2,56×10⁻⁵ L mol⁻¹ s⁻¹",
      "v = k[S2O6²⁻][H⁺][Br2]; k = 5,12×10⁻² L² mol⁻² s⁻¹",
      "v = k[S2O6²⁻]; k = 1,28×10⁻⁵ s⁻¹",
      "v = k[S2O6²⁻][H⁺]; k = 2,56×10⁻² L mol⁻¹ s⁻¹",
      "v = k[S2O6²⁻][H⁺]²; k = 5,12×10⁻⁵ L² mol⁻² s⁻¹"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "Dividir [S2O6²⁻] ou [H⁺] por 5 divide a velocidade por 5 (primeira ordem em cada); mudar [Br2] não altera nada (ordem zero). k = 640×10⁻⁹/(0,0500 × 0,500) = 2,56×10⁻⁵ L mol⁻¹ s⁻¹.",
      "detalhada": "A resolução segue a solução oficial do problema 7 da prova teórica.\n\n**1) Ordem em S2O6²⁻:** de 0,0500 para 0,0100 mol/L (÷5), v0 vai de 640 para 129 (÷5): **ordem 1**.\n\n**2) Ordem em Br2:** de 0,500 para 0,100 mmol/L, v0 fica em ≈ 640: **ordem 0**.\n\n**3) Ordem em H⁺:** de 0,500 para 0,100 mol/L (÷5), v0 vai de 640 para 128 (÷5): **ordem 1**.\n\n**4) Constante:** v = k[S2O6²⁻][H⁺] → k = 6,40×10⁻⁷ mol L⁻¹ s⁻¹ / (0,0500 × 0,500 mol² L⁻²) = **2,56×10⁻⁵ L mol⁻¹ s⁻¹**.\n\nO oxidante não aparece na lei de velocidade: a etapa lenta é a decomposição do ditionato catalisada por ácido (S2O6²⁻ + H⁺ → HSO4⁻ + SO2), e por isso Cl2, BrO3⁻, H2O2 e Cr2O7²⁻ dão praticamente o mesmo k.",
      "alternativas": [
        "Correta. Ordem 1 em ditionato e em H⁺, ordem zero em Br2, e k = 2,56×10⁻⁵ L mol⁻¹ s⁻¹.",
        "Errada. Os dados mostram que [Br2] não afeta a velocidade: incluí-lo na lei muda a ordem e a unidade de k.",
        "Errada. A velocidade cai 5 vezes quando [H⁺] cai 5 vezes: o H⁺ entra na lei.",
        "Errada. A lei está certa, mas v0 está em nmol (10⁻⁹), não em µmol: o k fica mil vezes maior.",
        "Errada. Com ordem 2 em H⁺, dividir [H⁺] por 5 dividiria a velocidade por 25, não por 5."
      ],
      "dica": "Compare pares de experimentos em que só uma concentração muda. Se a velocidade não se mexe, a ordem é zero."
    },
    "fontes": [
      {
        "titulo": "Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 7 (com soluções oficiais)",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008EN.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0)",
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1015",
    "materia": "quimica",
    "assunto": "Eletroquímica",
    "tipo": "multipla",
    "estilo": "Outra",
    "dificuldade": 2,
    "objetivos": [
      "enem",
      "livre"
    ],
    "prova": {
      "banca": "IChO",
      "ano": 2008,
      "orgao": "prova teórica (Budapeste), problema 9, adaptada"
    },
    "credito": "Adaptada e traduzida de Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 9. Licença CC BY-SA 3.0; esta adaptação usa a mesma licença.",
    "enunciado": "O tálio forma íons Tl⁺ e Tl³⁺. A 25 °C, os potenciais-padrão de redução são: Tl⁺(aq) + e⁻ → Tl(s), E°1 = −0,336 V; Tl³⁺(aq) + 3 e⁻ → Tl(s), E°2 = +0,728 V. Qual é o potencial-padrão E°4 da semirreação Tl³⁺(aq) + 2 e⁻ → Tl⁺(aq)?",
    "alternativas": [
      "0,392 V",
      "0,924 V",
      "1,064 V",
      "1,26 V",
      "2,52 V"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "Potenciais não se somam; energias de Gibbs sim (ΔG° = −nFE°). −2FE°4 = −3FE°2 − (−1FE°1), logo E°4 = (3 × 0,728 − (−0,336))/2 = 1,26 V.",
      "detalhada": "A resolução segue a solução oficial do problema 9 da prova teórica.\n\n**1) Combinação das semirreações:** (Tl³⁺ + 3 e⁻ → Tl) − (Tl⁺ + e⁻ → Tl) = (Tl³⁺ + 2 e⁻ → Tl⁺).\n\n**2) Energias de Gibbs:** ΔG°4 = ΔG°2 − ΔG°1 → −2FE°4 = −3FE°2 + 1FE°1.\n\n**3) Potencial:** E°4 = (3E°2 − E°1)/2 = (3 × 0,728 + 0,336)/2 = 2,520/2 = **1,26 V**.\n\nO valor alto mostra que o Tl³⁺ é um oxidante forte: é o que decide a próxima pergunta, sobre o iodeto de tálio.",
      "alternativas": [
        "Errada. É E°2 + E°1: soma os potenciais diretamente, sem pesar pelos elétrons.",
        "Errada. Erro de sinal: usa (3E°2 + E°1)/2.",
        "Errada. É E°2 − E°1: subtrai os potenciais sem multiplicar cada um pelo número de elétrons.",
        "Correta. E°4 = (3E°2 − E°1)/2 = 1,26 V.",
        "Errada. Pesa corretamente pelos elétrons, mas esquece de dividir pelos 2 elétrons da semirreação final."
      ],
      "dica": "Para combinar semirreações, multiplique cada E° pelo seu n (é ΔG°/−F), some ou subtraia, e divida pelo n da semirreação final."
    },
    "fontes": [
      {
        "titulo": "Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 9 (com soluções oficiais)",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008EN.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0)",
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1016",
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
      "ano": 2008,
      "orgao": "prova teórica (Budapeste), problema 9, adaptada"
    },
    "credito": "Adaptada e traduzida de Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 9. Licença CC BY-SA 3.0; esta adaptação usa a mesma licença.",
    "enunciado": "A fórmula empírica TlI3 pode corresponder a dois compostos diferentes: Tl³⁺(I⁻)3 ou Tl⁺(I3⁻), com o íon tri-iodeto. A 25 °C: Tl³⁺ + 2 e⁻ → Tl⁺, E° = +1,26 V; I3⁻ + 2 e⁻ → 3 I⁻, E° = +0,550 V; I2(s) + 2 e⁻ → 2 I⁻, E° = +0,540 V; Tl³⁺ + 3 e⁻ → Tl(s), E° = +0,728 V. Qual dos dois é o isômero estável em condições-padrão, e qual reação converte o outro nele?",
    "alternativas": [
      "Tl³⁺(I⁻)3; Tl⁺ + I3⁻ → Tl³⁺ + 3 I⁻",
      "Tl⁺(I3⁻); Tl³⁺ + 3 I⁻ → Tl(s) + 3/2 I2",
      "Os dois são igualmente estáveis, porque têm a mesma fórmula empírica",
      "Tl³⁺(I⁻)3, porque E°(Tl³⁺/Tl) = 0,728 V é maior que E°(I2/I⁻) = 0,540 V",
      "Tl⁺(I3⁻); Tl³⁺ + 3 I⁻ → Tl⁺ + I3⁻"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "Como E°(Tl³⁺/Tl⁺) = 1,26 V é muito maior que E°(I3⁻/I⁻) = 0,550 V, o Tl³⁺ oxida o iodeto: Tl³⁺ + 3 I⁻ → Tl⁺ + I3⁻. O isômero estável é Tl⁺(I3⁻).",
      "detalhada": "A resolução segue a solução oficial do problema 9 da prova teórica.\n\n**1) Quem oxida quem:** entre Tl³⁺/Tl⁺ (1,26 V) e I3⁻/I⁻ (0,550 V), o par de maior potencial sofre redução. Então Tl³⁺ é reduzido a Tl⁺ e o I⁻ é oxidado a I3⁻.\n\n**2) Reação de isomerização:** Tl³⁺ + 3 I⁻ → Tl⁺ + I3⁻. Fem: 1,26 − 0,550 = +0,71 V > 0, espontânea.\n\n**3) Conclusão:** \"TlI3\" é, na verdade, tri-iodeto de tálio(I), Tl⁺(I3⁻). Os pares que envolvem Tl metálico não interessam, porque nenhum dos dois isômeros contém Tl(0).\n\nObservação: com excesso de KI a história muda. O complexo TlI4⁻ (β4 = 10³⁵·⁷) é tão estável que volta a favorecer o tálio(III); esse é o item seguinte do problema original.",
      "alternativas": [
        "Errada. É a reação no sentido inverso, com fem negativa (0,550 − 1,26 < 0): não é espontânea.",
        "Errada. Acerta o isômero, mas a equação forma Tl metálico, que não aparece em nenhum dos dois compostos. O par relevante é Tl³⁺/Tl⁺, e o produto é I3⁻.",
        "Errada. Mesma fórmula empírica não significa mesma energia: são compostos diferentes, e um se converte no outro.",
        "Errada. Compara o par errado (Tl³⁺/Tl). Além disso, um potencial maior do tálio indicaria que o Tl³⁺ oxida o I⁻, o que desfaz o isômero Tl³⁺(I⁻)3 em vez de estabilizá-lo.",
        "Correta. E°(Tl³⁺/Tl⁺) = 1,26 V > E°(I3⁻/I⁻) = 0,550 V: o Tl³⁺ oxida o iodeto, e o estável é Tl⁺(I3⁻)."
      ],
      "dica": "Um cátion oxidante e um ânion redutor não convivem no mesmo sal se o E° do cátion for bem maior: eles reagem entre si."
    },
    "fontes": [
      {
        "titulo": "Theoretical Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 9 (com soluções oficiais)",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008EN.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0)",
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1017",
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
      "ano": 2008,
      "orgao": "problemas preparatórios (Budapeste), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 1. Licença CC BY-SA 3.0; esta adaptação usa a mesma licença.",
    "enunciado": "Numa história de Sherlock Holmes, uma caixa guarda pastilhas de uma substância conservada em óleo mineral. Na água, ela libera um gás inflamável e a solução fica rosa com fenolftaleína; a chama tem cor carmim, típica do lítio. Holmes mede: 28,350 g da substância liberam 86,876 L de gás a 26,67 °C e 101 325 Pa (n = 3,531 mol, 1 mol de gás por mol da substância). Depois ele dissolve 28,350 g em água, neutraliza com ácido fluorídrico e seca o resíduo de fluoreto de lítio: a massa é 3,116 vezes a inicial. Use as massas isotópicas: ⁶Li = 6,015; ⁷Li = 7,016; Li natural = 6,94; ¹H = 1,008; ²H (D) = 2,014; F = 19,00. Qual é a substância?",
    "alternativas": [
      "LiH com lítio natural",
      "⁷LiH",
      "LiD com lítio natural",
      "⁶LiD (deutereto de lítio-6)",
      "⁶LiH"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "M = 28,350/3,531 = 8,029 g/mol, e o LiF formado tem 3,116 × 8,029 = 25,02 g/mol, portanto é ⁶LiF (6,015 + 19,00 = 25,015). Se o lítio é ⁶Li (6,015), o resto, 2,014 g/mol, é deutério: a substância é ⁶LiD.",
      "detalhada": "A resolução segue a solução oficial do problema 1 da lista de problemas preparatórios.\n\n**1) Massa molar:** 1 mol de gás por mol de substância (LiX + H2O → LiOH + HX). M = 28,350 g / 3,531 mol = **8,03 g/mol**.\n\n**2) Massa molar do fluoreto:** cada mol de LiX vira 1 mol de LiF, de massa 3,116 × 8,029 = **25,02 g/mol**. Com F = 19,00, o lítio tem 6,02 g/mol, ou seja, é **⁶Li** puro, de massa 6,015 (o lítio natural tem cerca de 7,5% de ⁶Li).\n\n**3) O outro elemento:** 8,03 − 6,015 = 2,01 g/mol, a massa do **deutério**. A substância é ⁶LiD; o gás liberado é HD (⁶LiD + H2O → ⁶LiOH + HD).\n\n**4) Por que importa:** o ⁶LiD é o combustível de fusão das bombas termonucleares. Com nêutrons, ⁶Li + n → ³H + ⁴He, e depois ³H + ²H → ⁴He + n.",
      "alternativas": [
        "Errada. LiH natural tem M = 7,95 g/mol, e o LiF natural, 25,9 g/mol: a razão seria 3,26, não 3,125.",
        "Errada. A massa molar bate (8,02 g/mol), mas o ⁷LiF tem 26,0 g/mol: a razão seria 3,24. É a segunda medida que separa as duas hipóteses.",
        "Errada. LiD natural tem 8,95 g/mol: 28,350 g seriam só 3,17 mol, não 3,531 mol.",
        "Correta. 8,029 g/mol = 6,015 + 2,014, e ⁶LiF/⁶LiD = 25,015/8,029 = 3,116, exatamente a razão medida.",
        "Errada. ⁶LiH tem 7,02 g/mol: 28,350 g dariam 4,04 mol de gás."
      ],
      "dica": "Quando a massa molar não fecha com as massas atômicas médias, pense em isótopos: duas medidas independentes (gás e sal) fixam os dois elementos."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 1 (com soluções)",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008PP.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0)",
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1018",
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
      "ano": 2008,
      "orgao": "problemas preparatórios (Budapeste), problema 7, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 7. Licença CC BY-SA 3.0; esta adaptação usa a mesma licença.",
    "enunciado": "Uma solução de ácido acético (pKa = 4,76) tem pH 4,00; sua concentração analítica é 6,75×10⁻⁴ mol/L. Misturam-se volumes iguais dessa solução e de uma solução de NaOH de pOH 4,00. Qual é o pH da mistura?",
    "alternativas": [
      "4,00",
      "4,16",
      "4,35",
      "4,76",
      "7,00"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "Na mistura, c(HAc) = 3,375×10⁻⁴ e [Na⁺] = 5,00×10⁻⁵ mol/L. O balanço de carga [H⁺] + [Na⁺] = [Ac⁻] com Ka = [H⁺][Ac⁻]/[HAc] dá [H⁺] = 4,46×10⁻⁵ mol/L, pH = 4,35.",
      "detalhada": "A resolução segue a solução oficial do problema 7 da lista de problemas preparatórios.\n\n**1) Diluição:** volumes iguais dividem as concentrações por 2: c(HAc) = 3,375×10⁻⁴ mol/L; [Na⁺] = 1,00×10⁻⁴/2 = 5,00×10⁻⁵ mol/L.\n\n**2) Equações:** carga: [H⁺] + [Na⁺] = [Ac⁻] (o OH⁻ é desprezível). Massa: [HAc] = c − [Ac⁻] = c − [H⁺] − [Na⁺].\n\n**3) Ka:** 1,74×10⁻⁵ = [H⁺]([H⁺] + 5,00×10⁻⁵) / (3,375×10⁻⁴ − [H⁺] − 5,00×10⁻⁵). Resolvendo a equação do 2º grau: [H⁺] = **4,46×10⁻⁵ mol/L, pH = 4,35**.\n\n**4) Por que Henderson-Hasselbalch falha aqui:** a fórmula supõe [Ac⁻] ≈ [Na⁺]. Mas o H⁺ que vem do próprio ácido (≈ 4,5×10⁻⁵ mol/L) é do mesmo tamanho que o Na⁺ (5,0×10⁻⁵ mol/L): numa solução tão diluída, a aproximação não vale.",
      "alternativas": [
        "Errada. É o resultado de Henderson-Hasselbalch: 4,76 + log(5,00×10⁻⁵/2,875×10⁻⁴) = 4,00. A fórmula despreza a ionização do próprio ácido, que aqui não é desprezível.",
        "Errada. É o pH do ácido acético só diluído pela metade, como se o NaOH não tivesse reagido.",
        "Correta. Com os balanços de carga e de massa, [H⁺] = 4,46×10⁻⁵ mol/L, pH = 4,35.",
        "Errada. pH = pKa exigiria [HAc] = [Ac⁻], mas só cerca de 15% do ácido foi neutralizado.",
        "Errada. pH 4 e pOH 4 não significam quantidades iguais de ácido e base: o ácido acético é fraco e tem concentração analítica 6,75 vezes maior que o seu [H⁺]."
      ],
      "dica": "Henderson-Hasselbalch só vale quando as concentrações do par são muito maiores que o [H⁺]. Em soluções muito diluídas, use os balanços."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 7 (com soluções)",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008PP.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0)",
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1019",
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
      "ano": 2008,
      "orgao": "problemas preparatórios (Budapeste), problema 8, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 8. Licença CC BY-SA 3.0; esta adaptação usa a mesma licença.",
    "enunciado": "Em água, o HF participa de dois equilíbrios: (1) HF + H2O ⇌ H3O⁺ + F⁻, K1 = 1,1×10⁻³; (2) HF + F⁻ ⇌ HF2⁻, K2 = 0,26. Duas químicas mediram o pH de uma mesma solução de HF de concentração conhecida e calcularam K1. Uma considerou os dois equilíbrios; a outra só o equilíbrio (1). Para surpresa da primeira, as duas obtiveram o mesmo valor de K1. Qual era a concentração analítica de HF?",
    "alternativas": [
      "1,1×10⁻³ mol/L",
      "2,2×10⁻³ mol/L",
      "2,9×10⁻⁴ mol/L",
      "4,4×10⁻³ mol/L",
      "9,9×10⁻² mol/L"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Igualar as duas expressões de K1 leva a [HF]total = 2[H3O⁺]; substituindo, K1 = [H3O⁺]. Então [H3O⁺] = 1,1×10⁻³ mol/L e [HF]total = 2,2×10⁻³ mol/L.",
      "detalhada": "A resolução segue a solução oficial do problema 8 da lista de problemas preparatórios.\n\n**1) Expressão completa** (balanço de flúor [HF]total = [HF] + [F⁻] + 2[HF2⁻] e de carga [H3O⁺] = [F⁻] + [HF2⁻]): K1 = [H3O⁺]([H3O⁺] − [HF2⁻]) / ([HF]total − [H3O⁺] − [HF2⁻]).\n\n**2) Expressão simplificada** (sem o equilíbrio 2): K1' = [H3O⁺]² / ([HF]total − [H3O⁺]).\n\n**3) Igualando** e simplificando (com [HF2⁻] ≠ 0): [HF2⁻]·[HF]total = 2[HF2⁻]·[H3O⁺], ou seja, **[HF]total = 2[H3O⁺]**.\n\n**4) Valor:** levando isso a K1': K1 = [H3O⁺]²/[H3O⁺] = [H3O⁺]. Logo [H3O⁺] = 1,1×10⁻³ mol/L e **[HF]total = 2K1 = 2,2×10⁻³ mol/L**.\n\nConferência numérica: resolvendo os dois equilíbrios para 2,2×10⁻³ mol/L, sai [H3O⁺] = 1,1×10⁻³ mol/L, e a fórmula simplificada devolve o mesmo K1.",
      "alternativas": [
        "Errada. É a concentração de H3O⁺ nessa solução, não a de HF.",
        "Correta. As duas expressões coincidem quando [HF]total = 2[H3O⁺]; como então K1 = [H3O⁺], c = 2K1 = 2,2×10⁻³ mol/L.",
        "Errada. É K1·K2, a constante de 2 HF + H2O ⇌ H3O⁺ + HF2⁻ (outro item do problema), e não uma concentração.",
        "Errada. Aplica o fator 2 duas vezes (c = 4K1).",
        "Errada. É a concentração de uma solução de HF com pH 2,00 (outro item do mesmo problema)."
      ],
      "dica": "Quando dois modelos dão o mesmo número, iguale as expressões algébricas: a condição que sobra costuma ser simples."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 8 (com soluções)",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008PP.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0)",
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1020",
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
      "ano": 2008,
      "orgao": "problemas preparatórios (Budapeste), problema 14, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 14. Licença CC BY-SA 3.0; esta adaptação usa a mesma licença.",
    "enunciado": "O aquecimento de proteínas libera ácido glutâmico, HOOC–CH2–CH2–CH(NH2)–COOH. Aquecido, ele perde água e cicliza no ácido piroglutâmico (A, ácido 5-oxopirrolidina-2-carboxílico, C5H7NO3). Aquecido com cal, Ca(OH)2, A perde uma molécula de CO2 e uma de H2O e dá B, um líquido incolor de odor característico. B é estável em meio básico, mas em ácido se decompõe rapidamente em produtos vermelhos; reage com potássio metálico formando um sal, e com H2/Pd dá E. Qual é B?",
    "alternativas": [
      "1H-Pirrol, C4H5N",
      "Pirrolidina, C4H9N",
      "Piridina, C5H5N",
      "2-Pirrolidona, C4H7NO",
      "Furano, C4H4O"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "C5H7NO3 − CO2 − H2O = C4H5N: é o pirrol, heterociclo aromático de cinco membros. O N–H fracamente ácido explica a reação com K, e a hidrogenação dá a pirrolidina (E).",
      "detalhada": "A resolução segue a solução oficial do problema 14 da lista de problemas preparatórios.\n\n**1) Fórmula de B:** C5H7NO3 − CO2 − H2O = **C4H5N**.\n\n**2) Estrutura:** a descarboxilação e a perda de água a partir do anel da lactama levam ao anel aromático de cinco membros com N–H: o **pirrol** (1H-pirrol).\n\n**3) As outras pistas:** o N–H do pirrol é fracamente ácido e o K forma o sal C (pirrolida de potássio). Com H2/Pd, o anel satura e dá a pirrolidina (E, C4H9N). Em ácido, o pirrol polimeriza em produtos coloridos; é o velho teste da lasca de madeira molhada em ácido que fica vermelha com os vapores.",
      "alternativas": [
        "Correta. C4H5N, aromático, com N–H ácido; dá pirrolidina por hidrogenação.",
        "Errada. Pirrolidina é C4H9N e é o produto E (hidrogenação de B), não o próprio B.",
        "Errada. Piridina tem 5 carbonos, e A perde um carbono (como CO2): não há como chegar a C5H5N.",
        "Errada. 2-Pirrolidona (C4H7NO) seria só a perda de CO2; o enunciado diz que também sai uma H2O.",
        "Errada. Furano não tem nitrogênio, e todo o N de A continua em B."
      ],
      "dica": "Faça a conta de átomos primeiro: subtrair CO2 e H2O da fórmula de A já elimina quase todas as alternativas."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 14 (com soluções)",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008PP.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0)",
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: Pyrrole",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Pyrrole"
      },
      {
        "titulo": "PubChem: Pyroglutamic acid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Pyroglutamic-acid"
      }
    ]
  },
  {
    "id": "qui-1021",
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
      "ano": 2008,
      "orgao": "problemas preparatórios (Budapeste), problema 14, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 14. Licença CC BY-SA 3.0; esta adaptação usa a mesma licença.",
    "enunciado": "O pirrol (B, C4H5N, anel aromático de cinco membros com N–H) é hidrogenado com H2/Pd e dá a pirrolidina (E, C4H9N, anel saturado). Compare a basicidade de B e de E.",
    "alternativas": [
      "B é mais básico, porque o anel aromático estabiliza o cátion formado na protonação",
      "B e E são igualmente básicos, porque os dois são aminas secundárias com ligação N–H",
      "E é mais básico, porque seu nitrogênio é sp² e o par isolado tem mais caráter s",
      "E é muito mais básico, porque nele o par isolado do N está localizado, enquanto em B ele faz parte do sistema aromático",
      "B é mais básico, porque reage com potássio e forma um sal estável"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "Na pirrolidina, o par isolado do N (sp³) está livre para receber H⁺. No pirrol, esse par é um dos 6 elétrons π do anel aromático: protonar o N destruiria a aromaticidade. Por isso E é muito mais básico.",
      "detalhada": "A resolução segue a solução oficial do problema 14 da lista de problemas preparatórios.\n\n**1) Pirrol (B):** o N é sp² e seu par isolado ocupa um orbital p, entrando no sexteto aromático (4 elétrons das duas C=C + 2 do N). Para receber H⁺, o anel teria de perder a aromaticidade. O pirrol é uma base extremamente fraca, e o cátion que se forma em ácido não é aromático. É por isso que o pirrol se decompõe (polimeriza) em ácido e fica estável em base: o ânion pirrolida continua aromático.\n\n**2) Pirrolidina (E):** amina secundária alifática comum, com N sp³ e par isolado localizado. É uma base típica: o ácido conjugado tem pKa por volta de 11.\n\n**3) Conclusão:** **E é muito mais básico que B**.",
      "alternativas": [
        "Errada. É o contrário: protonar o N do pirrol tira o par isolado do sexteto e destrói a aromaticidade, e o cátion não é aromático.",
        "Errada. Ser amina secundária não basta: o que importa é se o par isolado está disponível. No pirrol, ele está comprometido com a aromaticidade.",
        "Errada. Na pirrolidina o N é sp³. E mais caráter s deixaria o par isolado mais preso ao núcleo, tornando a base mais fraca, não mais forte.",
        "Correta. Par isolado localizado (E) contra par isolado deslocalizado no anel aromático (B).",
        "Errada. Reagir com K mostra que o N–H do pirrol é ácido; isso não diz nada a favor da basicidade."
      ],
      "dica": "Antes de comparar basicidades de aminas, pergunte: o par isolado do N faz parte de um sistema aromático? Se faz, a base é muito fraca."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 14 (com soluções)",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008PP.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0)",
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: Pyrrolidine",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Pyrrolidine"
      }
    ]
  },
  {
    "id": "qui-1022",
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
      "ano": 2008,
      "orgao": "problemas preparatórios (Budapeste), problema 14, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 14. Licença CC BY-SA 3.0; esta adaptação usa a mesma licença.",
    "enunciado": "O pirrol (C4H5N, anel aromático de cinco membros com quatro C–H e um N–H) reage com 4 equivalentes de Br2 e dá o composto D, um sólido incolor. Qual é D e que tipo de reação ocorreu?",
    "alternativas": [
      "C4H5Br4N: adição de bromo às duas ligações C=C do anel",
      "C4H3Br2N, 2,5-dibromopirrol: substituição só nas posições vizinhas ao N",
      "C4H4BrN, 1-bromopirrol: substituição no nitrogênio",
      "C4Br5N: substituição de todos os hidrogênios, inclusive o do N",
      "C4HBr4N, 2,3,4,5-tetrabromo-1H-pirrol: substituição eletrofílica aromática nos quatro carbonos"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "O pirrol é um aromático muito rico em elétrons e sofre substituição eletrofílica com facilidade: cada Br2 troca um H de carbono por Br (liberando HBr). Com 4 equivalentes, os quatro C–H são substituídos: 2,3,4,5-tetrabromo-1H-pirrol, C4HBr4N.",
      "detalhada": "A resolução segue a solução oficial do problema 14 da lista de problemas preparatórios.\n\n**1) Tipo de reação:** anéis aromáticos preservam a aromaticidade fazendo **substituição** (SEAr), não adição. O pirrol é ainda mais reativo que o benzeno, porque o N doa densidade eletrônica ao anel, e reage com bromo sem catalisador.\n\n**2) Estequiometria:** cada substituição consome 1 Br2 (um Br entra no anel e o outro sai como HBr). 4 equivalentes = 4 substituições = os quatro C–H.\n\n**3) Produto:** **2,3,4,5-tetrabromo-1H-pirrol, C4HBr4N**. O N–H permanece.",
      "alternativas": [
        "Errada. Adicionar Br2 às duas duplas destruiria a aromaticidade e consumiria só 2 equivalentes de Br2, não 4.",
        "Errada. As posições 2 e 5 reagem primeiro, mas com 4 equivalentes a substituição continua em 3 e 4.",
        "Errada. A SEAr ocorre nos carbonos do anel; o N–H não é o ponto de ataque do eletrófilo.",
        "Errada. Seriam 5 substituições (5 equivalentes), e o H do nitrogênio não é trocado por Br nessas condições.",
        "Correta. Quatro substituições eletrofílicas, uma por equivalente de Br2, mantendo o anel aromático."
      ],
      "dica": "Aromático + halogênio → substituição (sai HX). Conte os equivalentes: cada Br2 troca um H."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 14 (com soluções)",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008PP.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0)",
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: 2,3,4,5-Tetrabromo-1H-pyrrole",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/2_3_4_5-Tetrabromo-1H-pyrrole"
      }
    ]
  },
  {
    "id": "qui-1023",
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
      "ano": 2008,
      "orgao": "problemas preparatórios (Budapeste), problema 15, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 15. Licença CC BY-SA 3.0; esta adaptação usa a mesma licença.",
    "enunciado": "Pela regra de Hückel, um sistema cíclico, plano e totalmente conjugado é aromático se tiver 4n + 2 elétrons π (n = 0, 1, 2...). O ciclopenta-1,3-dieno tem pKa = 18 (no C–H do CH2 do anel), enquanto o ciclopenteno tem pKa = 45. Qual é a explicação para essa diferença de 27 unidades?",
    "alternativas": [
      "A base conjugada do ciclopentadieno, o ânion ciclopentadienila, é aromática: cíclica, plana, conjugada e com 6 elétrons π (4n + 2, com n = 1)",
      "O ânion ciclopentadienila tem 4 elétrons π e é antiaromático, o que aumenta a acidez",
      "O próprio ciclopentadieno já é aromático, e a perda de H⁺ apenas preserva essa aromaticidade",
      "O ciclopentadieno tem menos tensão de anel que o ciclopenteno, o que facilita a perda de H⁺",
      "O ciclopenteno é o mais ácido, porque tem pKa maior"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "Ao perder H⁺ do CH2, o ciclopentadieno vira um ânion em que os cinco carbonos são sp² e o par de elétrons entra na conjugação: 4 + 2 = 6 elétrons π, aromático. Essa estabilização da base conjugada torna o ácido muito mais forte.",
      "detalhada": "A resolução segue a solução oficial do problema 15 da lista de problemas preparatórios.\n\n**1) Acidez e base conjugada:** quanto mais estável a base conjugada, mais forte o ácido (menor pKa).\n\n**2) Ciclopentadieno → ânion:** no ciclopentadieno, o CH2 é sp³ e interrompe a conjugação (não é aromático). Saindo o H⁺, esse carbono passa a sp², e o par de elétrons fica num orbital p, conjugado com as duas C=C: o anel tem **6 elétrons π**, cíclico e plano, logo **aromático**.\n\n**3) Ciclopenteno → ânion:** a carga negativa no carbono alílico fica deslocalizada só em 3 átomos e não há aromaticidade: o ânion é bem menos estável, e o pKa, muito mais alto.",
      "alternativas": [
        "Correta. O ânion ciclopentadienila tem 6 elétrons π: é aromático, e isso estabiliza a base conjugada.",
        "Errada. As duas C=C dão 4 elétrons e o par do carbânion dá mais 2: são 6, não 4. Além disso, antiaromaticidade desestabilizaria o ânion e diminuiria a acidez.",
        "Errada. O CH2 sp³ do ciclopentadieno quebra o ciclo conjugado: a molécula neutra não é aromática. A aromaticidade aparece justamente ao perder o H⁺.",
        "Errada. A diferença de 27 unidades de pKa (10²⁷ em K) é grande demais para tensão de anel, e os dois anéis têm tensão parecida.",
        "Errada. Leitura invertida: pKa maior significa ácido mais fraco."
      ],
      "dica": "Se a base conjugada fica aromática, o ácido fica muito mais forte. Conte os elétrons π do íon, não da molécula neutra."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 15 (com soluções)",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008PP.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0)",
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1024",
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
      "ano": 2008,
      "orgao": "problemas preparatórios (Budapeste), problema 15, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 15. Licença CC BY-SA 3.0; esta adaptação usa a mesma licença.",
    "enunciado": "A regra de Hückel (4n + 2 elétrons π) pode ser estendida a sistemas policíclicos fundidos como condição suficiente para a aromaticidade. Considere o coroneno, C24H12, hidrocarboneto plano formado por seis anéis benzênicos fundidos em volta de um anel central, com todos os 24 carbonos sp². O que o coroneno mostra sobre a regra?",
    "alternativas": [
      "Tem 26 elétrons π (4n + 2, com n = 6), o que confirma que a regra é necessária e suficiente",
      "Tem 12 elétrons π, um por hidrogênio, e por isso não é aromático",
      "Tem 24 elétrons π (4n, com n = 6) e, portanto, é antiaromático, o que confirma a regra",
      "Não é aromático, porque anéis fundidos não podem ser aromáticos",
      "Tem 24 elétrons π (4n) e, mesmo assim, é aromático: a regra de Hückel é suficiente, mas não necessária"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "Os 24 carbonos sp² contribuem com um elétron π cada: 24 = 4 × 6, que não é da forma 4n + 2. Mesmo assim, o coroneno é um hidrocarboneto aromático estável (benzenoide). É o contraexemplo oficial: 4n + 2 basta para garantir a aromaticidade, mas não é exigência.",
      "detalhada": "A resolução segue a solução oficial do problema 15 da lista de problemas preparatórios.\n\n**1) Contagem:** cada carbono sp² contribui com 1 elétron π. C24 → **24 elétrons π**, que é 4n (n = 6), e não 4n + 2.\n\n**2) Fato experimental:** o coroneno é plano, muito estável e tem as propriedades de um aromático (é formado por anéis benzênicos fundidos).\n\n**3) Lógica:** se a regra fosse necessária, todo aromático teria 4n + 2 elétrons. O coroneno é aromático sem cumprir a regra, então ela é só **condição suficiente** para sistemas fundidos. A regra de Hückel foi deduzida para anéis monocíclicos, e nos policíclicos a contagem global é só uma aproximação.",
      "alternativas": [
        "Errada. 24 carbonos sp², um elétron π cada: são 24, não 26.",
        "Errada. Os elétrons π vêm dos orbitais p dos carbonos, não dos hidrogênios.",
        "Errada. A contagem 4n está certa, mas o coroneno é aromático, não antiaromático: a regra de 4n não se transfere diretamente para policíclicos.",
        "Errada. Naftaleno, antraceno e o próprio coroneno são aromáticos fundidos.",
        "Correta. 24 elétrons π (4n) num composto aromático: contraexemplo de que a regra é suficiente, mas não necessária."
      ],
      "dica": "Regra suficiente: se cumpre, é aromático. Regra necessária: se é aromático, cumpre. Um único contraexemplo derruba a segunda."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 15 (com soluções)",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008PP.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0)",
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: Coronene",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Coronene"
      }
    ]
  },
  {
    "id": "qui-1025",
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
      "ano": 2008,
      "orgao": "problemas preparatórios (Budapeste), problema 16, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 16. Licença CC BY-SA 3.0; esta adaptação usa a mesma licença.",
    "enunciado": "Um derivado de ferro-porfirina (P) liga piridina (L) em duas etapas, num solvente orgânico inerte: P + L ⇌ PL, K1 = 1500; PL + L ⇌ PL2, K2 = 19 000. Um químico gera o complexo PL \"in situ\", com concentração 0,100 mol/L e sem P, PL2 nem L livre. Depois de algum tempo, o sistema atinge o equilíbrio. Como os dois equilíbrios estão muito deslocados no sentido de ligar L, a reação global é praticamente 2 PL ⇌ P + PL2. Qual é a concentração de PL no equilíbrio?",
    "alternativas": [
      "0,0123 mol/L",
      "0,0219 mol/L",
      "0,0438 mol/L",
      "0,0640 mol/L",
      "0,100 mol/L"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "Para 2 PL ⇌ P + PL2, K = K2/K1 = 12,67. Com [P] = [PL2] = y e [PL] = 0,100 − 2y: y/(0,100 − 2y) = √12,67 = 3,56, logo y = 0,0438 e [PL] = 0,0123 mol/L.",
      "detalhada": "A resolução segue a solução oficial do problema 16 da lista de problemas preparatórios.\n\n**1) Constante da reação global:** 2 PL ⇌ P + PL2 é (PL + L ⇌ PL2) menos (P + L ⇌ PL). Então K = K2/K1 = 19 000/1500 = **12,67**.\n\n**2) Tabela:** para cada 2 PL que reagem, forma-se 1 P e 1 PL2. Com [P] = [PL2] = y: [PL] = 0,100 − 2y.\n\n**3) Resolução:** y²/(0,100 − 2y)² = 12,67 → y/(0,100 − 2y) = 3,559 → y = 0,0438 mol/L. **[PL] = 0,100 − 0,0877 = 0,0123 mol/L**.\n\n**4) Conferência:** o L livre é [L] = [PL2]/(K2·[PL]) = 0,0438/(19 000 × 0,0123) ≈ 1,9×10⁻⁴ mol/L, desprezível. A aproximação da reação global vale.",
      "alternativas": [
        "Correta. K = K2/K1 = 12,67, y = 0,0438 mol/L e [PL] = 0,100 − 2y = 0,0123 mol/L.",
        "Errada. Usa [PL] = 0,100 − y, esquecendo que cada P + PL2 consome 2 PL.",
        "Errada. É a concentração de P (ou de PL2) no equilíbrio, não a de PL.",
        "Errada. Inverte a constante (usa K1/K2 = 0,079), como se o complexo intermediário fosse favorecido.",
        "Errada. Supõe que PL não reage. Ele é estável só cineticamente; no equilíbrio, desproporciona."
      ],
      "dica": "Constante de uma reação que é a diferença de duas outras: divida as constantes. E confira a estequiometria (2 PL → 1 P + 1 PL2)."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 16 (com soluções)",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008PP.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0)",
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1026",
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
      "ano": 2008,
      "orgao": "problemas preparatórios (Budapeste), problema 18, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 18. Licença CC BY-SA 3.0; esta adaptação usa a mesma licença.",
    "enunciado": "O ascaridol (A, C10H16O2), terpeno do óleo da erva-de-santa-maria, se relaciona a dois hidrocarbonetos isoméricos, D e E (C10H16), ambos dienos com anel de seis membros. A ozonólise de D seguida de tratamento redutivo (Zn/H2O) dá um equivalente de glioxal (etanodial, OHC–CHO) e um equivalente de 6-metil-heptano-2,5-diona, CH3–CO–CH2–CH2–CO–CH(CH3)2. Qual é D?",
    "alternativas": [
      "1-Metil-4-(propan-2-il)ciclo-hexa-1,4-dieno",
      "1-Metil-4-(propan-2-il)ciclo-hexa-1,3-dieno",
      "1-Metil-4-(propan-2-ilideno)ciclo-hex-1-eno",
      "2-Metil-5-(propan-2-il)ciclo-hexa-1,3-dieno",
      "1-Metil-4-(propan-2-il)benzeno"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "O glioxal vem de dois carbonos CH vizinhos, cada um com uma ligação dupla: as duplas são conjugadas (C1=C2–C3=C4). Os outros quatro carbonos do anel, com o metil e o isopropil, formam a dicetona. D é o 1-metil-4-(propan-2-il)ciclo-hexa-1,3-dieno (α-terpineno).",
      "detalhada": "A resolução segue a solução oficial do problema 18 da lista de problemas preparatórios.\n\n**1) Contagem:** 2 C (glioxal) + 8 C (dicetona) = 10 C. As duas duplas foram cortadas e os fragmentos se recompõem num anel de seis com dois substituintes.\n\n**2) Glioxal:** OHC–CHO vem de um fragmento =CH–CH= do anel: os dois carbonos centrais de um dieno conjugado.\n\n**3) Dicetona:** CH3–CO–CH2–CH2–CO–CH(CH3)2. As duas C=O marcam os carbonos que estavam ligados aos CH do glioxal. Um deles leva o metil, o outro leva o isopropil, e entre eles há dois CH2.\n\n**4) Montagem:** C1(CH3)=C2H–C3H=C4(iPr)–C5H2–C6H2–C1. Nome: **1-metil-4-(propan-2-il)ciclo-hexa-1,3-dieno** (α-terpineno).\n\n**5) Origem de A:** o ascaridol se forma a partir de D e do oxigênio singlete (F), numa adição do tipo Diels-Alder ao dieno conjugado.",
      "alternativas": [
        "Errada. Esse é o γ-terpineno (E). Com duplas isoladas (1,4), a ozonólise dá dois fragmentos com CH2 entre as carbonilas (3-oxobutanal e 4-metil-3-oxopentanal), não glioxal.",
        "Correta. O dieno conjugado C1=C2–C3=C4 dá glioxal (C2–C3) e a dicetona com os carbonos C4, C5, C6 e C1.",
        "Errada. A dupla exocíclica do isopropilideno daria acetona (CH3–CO–CH3) na ozonólise, que não aparece.",
        "Errada. Esse dieno (α-felandreno) tem o metil num dos dois carbonos centrais do dieno conjugado: a ozonólise daria metilglioxal (CH3–CO–CHO) em vez de glioxal, e 2-(propan-2-il)butanodial em vez da dicetona.",
        "Errada. É o p-cimeno, C10H14, aromático: não tem a fórmula C10H16 nem dá esses produtos de ozonólise."
      ],
      "dica": "Na ozonólise, \"cole\" as carbonilas de volta duas a duas (C=O + O=C → C=C). Glioxal entre dois fragmentos indica dieno conjugado."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 18 (com soluções)",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008PP.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0)",
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: alpha-Terpinene",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/alpha-Terpinene"
      },
      {
        "titulo": "PubChem: Ascaridole",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Ascaridole"
      }
    ]
  },
  {
    "id": "qui-1027",
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
      "ano": 2008,
      "orgao": "problemas preparatórios (Budapeste), problema 18, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 18. Licença CC BY-SA 3.0; esta adaptação usa a mesma licença.",
    "enunciado": "O ascaridol (A, C10H16O2), terpeno do óleo da erva-de-santa-maria, se relaciona a dois hidrocarbonetos isoméricos, D e E (C10H16), ambos dienos com anel de seis membros. A ozonólise de E, com tratamento redutivo, dá um equivalente de 3-oxobutanal (OHC–CH2–CO–CH3) e um de 4-metil-3-oxopentanal (OHC–CH2–CO–CH(CH3)2). Como D e E se formam pela desidratação do mesmo diol e, portanto, têm o mesmo esqueleto carbônico (metil e isopropil em carbonos opostos do anel), E é o anel C1(CH3)=C2H–C3H2–C4(CH(CH3)2)=C5H–C6H2–C1. Qual é o nome IUPAC de E?",
    "alternativas": [
      "4-Metil-1-(propan-2-il)ciclo-hexa-1,4-dieno",
      "1-Metil-4-(propan-2-il)ciclo-hexa-1,3-dieno",
      "1-Metil-4-(propan-2-il)ciclo-hexa-1,4-dieno",
      "2-Metil-5-(propan-2-il)ciclo-hexa-1,4-dieno",
      "3-Metil-6-(propan-2-il)ciclo-hexa-1,4-dieno"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "As duplas recebem os menores localizadores (1 e 4). Os substituintes ficam em 1 e 4 nos dois sentidos de numeração; no empate, o localizador mais baixo vai para o prefixo citado primeiro em ordem alfabética, metil (m) antes de propan-2-il (p). Nome: 1-metil-4-(propan-2-il)ciclo-hexa-1,4-dieno (γ-terpineno).",
      "detalhada": "A resolução segue a solução oficial do problema 18 da lista de problemas preparatórios. A pergunta de nomenclatura é um acréscimo desta adaptação, conferido com o nome IUPAC registrado no PubChem.\n\n**1) Cadeia principal:** anel de seis carbonos com duas duplas: ciclo-hexadieno.\n\n**2) Localizadores das duplas** (prioridade sobre os substituintes): começando em C1, as duplas ficam em **1 e 4** (1,4-dieno). Isso vale começando pelo carbono do metil ou pelo do isopropil.\n\n**3) Substituintes:** nas duas numerações, os substituintes ficam em {1, 4}. Empate.\n\n**4) Desempate:** a regra IUPAC dá o menor localizador ao substituinte citado primeiro em ordem alfabética: **metil** (m) vem antes de **propan-2-il** (p). Metil fica em 1.\n\n**5) Nome:** **1-metil-4-(propan-2-il)ciclo-hexa-1,4-dieno** (nome trivial: γ-terpineno).",
      "alternativas": [
        "Errada. Descreve o mesmo composto, mas desempata ao contrário: em ordem alfabética, metil vem antes de propan-2-il e recebe o localizador 1.",
        "Errada. É D (α-terpineno), com duplas conjugadas: outro composto.",
        "Correta. Duplas em 1,4; substituintes em 1,4; metil com o menor localizador pela ordem alfabética.",
        "Errada. Descreve o mesmo composto com localizadores de substituintes mais altos ({2, 5} em vez de {1, 4}).",
        "Errada. Põe os substituintes nos carbonos sp³ (C3 e C6): é outro composto, que na ozonólise daria dialdeídos ramificados, não os cetoaldeídos do enunciado."
      ],
      "dica": "Ordem dos critérios: menores localizadores para as insaturações, depois para o conjunto dos substituintes e, no empate, ordem alfabética."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 18 (com soluções)",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008PP.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0)",
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: gamma-Terpinene",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/gamma-Terpinene"
      }
    ]
  },
  {
    "id": "qui-1028",
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
      "ano": 2008,
      "orgao": "problemas preparatórios (Budapeste), problema 18, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 18. Licença CC BY-SA 3.0; esta adaptação usa a mesma licença.",
    "enunciado": "O ascaridol (A, C10H16O2) só pode ser destilado em alto vácuo, porque explode quando aquecido. O RMN de ¹³C mostra uma só ligação C=C em A. Uma solução de A em éter não reage com sódio. A redução com LiAlH4 dá B (C10H18O2), um diol. A hidrogenação catalítica de A consome o dobro de H2 que a de B, e as duas dão o mesmo diol saturado C. Que grupo funcional contém os dois átomos de oxigênio de A?",
    "alternativas": [
      "Dois grupos OH (A é um diol insaturado)",
      "Um grupo carboxila (–COOH)",
      "Um éster cíclico (lactona)",
      "Uma ligação O–O em ponte no anel (endoperóxido)",
      "Uma carbonila de cetona e um éter cíclico"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "A não tem O–H (não reage com Na), mas vira diol ganhando só 2 H (LiAlH4) e gasta um H2 a mais que B na hidrogenação: os dois oxigênios estão ligados entre si. Peróxido também explica a explosão. A é um endoperóxido, formado pela adição de O2 singlete ao dieno conjugado.",
      "detalhada": "A resolução segue a solução oficial do problema 18 da lista de problemas preparatórios.\n\n**1) Sem O–H:** A não reage com sódio, logo não é álcool nem ácido.\n\n**2) Redução a diol com só 2 H a mais:** C10H16O2 → C10H18O2. Para dois O sem H virarem dois OH ganhando só 2 H, basta romper uma ligação entre eles: R–O–O–R + 2 [H] → R–OH + HO–R. Uma lactona reduzida a diol ganharia 4 H, e cetona + éter daria um só OH.\n\n**3) Hidrogenação:** A gasta um H2 a mais que B, que corresponde à quebra da ligação O–O. B só tem a C=C.\n\n**4) Explosividade:** típica de peróxidos orgânicos.\n\n**5) Estrutura:** a ponte –O–O– liga dois carbonos opostos do anel de seis membros (2,3-dioxabiciclo[2.2.2]oct-5-eno com metil e isopropil). Ela se forma pela adição tipo Diels-Alder do oxigênio singlete ao α-terpineno, com clorofila como fotossensibilizador.",
      "alternativas": [
        "Errada. Um diol reagiria com sódio (liberando H2), o que não acontece.",
        "Errada. O H ácido do –COOH reagiria com sódio, e a redução de ácido a álcool não dá um diol.",
        "Errada. A redução de uma lactona com LiAlH4 dá diol, mas ganhando 4 H (C10H20O2), não 2.",
        "Correta. Sem O–H, vira diol ganhando 2 H, gasta um H2 a mais na hidrogenação e é explosivo: ligação O–O.",
        "Errada. A redução daria um álcool-éter, com um só OH, e não um diol."
      ],
      "dica": "Dois oxigênios sem H que viram dois OH ganhando só 2 H indicam uma ligação O–O. Se ainda por cima o composto explode, é peróxido."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 18 (com soluções)",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008PP.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0)",
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: Ascaridole",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Ascaridole"
      }
    ]
  },
  {
    "id": "qui-1029",
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
      "ano": 2008,
      "orgao": "problemas preparatórios (Budapeste), problema 25, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 25. Licença CC BY-SA 3.0; esta adaptação usa a mesma licença.",
    "enunciado": "Uma expedição chega a um planeta distante, e a chegada da nave inicia a decomposição da atmosfera local por uma reação de primeira ordem com meia-vida de 13 horas. Todos precisam partir antes que reste apenas 13% da atmosfera original. Quanto tempo a expedição tem?",
    "alternativas": [
      "2,6 h",
      "16,6 h",
      "22,6 h",
      "26,0 h",
      "38,3 h"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "Na primeira ordem, a fração restante é (1/2)^(t/t½). 0,13 = (1/2)^(t/13 h) → t = 13 h × ln(0,13)/ln(0,5) = 38,3 h.",
      "detalhada": "A resolução segue a solução oficial do problema 25 da lista de problemas preparatórios.\n\n**1) Lei integrada de 1ª ordem:** [A]/[A]0 = (1/2)^(t/t½), ou ln([A]/[A]0) = −kt, com k = ln 2/t½.\n\n**2) Conta:** t = t½ · ln(0,13)/ln(0,5) = 13 h × (−2,040)/(−0,693) = **38,3 h**.\n\n**3) Bom senso:** após 3 meias-vidas (39 h) restaria 12,5%. Como 13% é um pouco mais que isso, o tempo é um pouco menor que 39 h.",
      "alternativas": [
        "Errada. Calcula o tempo para restarem 87% (usa ln 0,87): confunde o que resta com o que se decompôs.",
        "Errada. Mistura log decimal no numerador com ln no denominador (13 × log 0,13/ln 0,5).",
        "Errada. Trata a queda como linear (13 h para perder 50%, logo 87% em 22,6 h). Em primeira ordem, a queda é exponencial.",
        "Errada. Duas meias-vidas deixam 25%, ainda longe de 13%.",
        "Correta. t = 13 h × ln(0,13)/ln(0,5) = 38,3 h."
      ],
      "dica": "Em primeira ordem, conte meias-vidas: 50%, 25%, 12,5%... Isso já dá a ordem de grandeza da resposta."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 25 (com soluções)",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008PP.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0)",
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1030",
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
      "ano": 2008,
      "orgao": "problemas preparatórios (Budapeste), problema 25, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 25. Licença CC BY-SA 3.0; esta adaptação usa a mesma licença.",
    "enunciado": "A reação 2 NO(g) + O2(g) → 2 NO2(g) obedece à lei de velocidade v = k[NO]²[O2]. A velocidade inicial continua a mesma quando a temperatura sobe de 460 °C para 600 °C e, ao mesmo tempo, todas as concentrações iniciais são reduzidas à metade. Qual é a energia de ativação de Arrhenius? (R = 8,314 J mol⁻¹ K⁻¹)",
    "alternativas": [
      "79 kJ/mol",
      "53 kJ/mol",
      "34 kJ/mol",
      "26 kJ/mol",
      "Zero, porque a velocidade não mudou"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "A ordem global é 3: dividir todas as concentrações por 2 divide o produto [NO]²[O2] por 8. Para manter v, k(600 °C)/k(460 °C) = 8. Ea = R·ln 8/(1/733,15 − 1/873,15) ≈ 79 kJ/mol.",
      "detalhada": "A resolução segue a solução oficial do problema 25 da lista de problemas preparatórios.\n\n**1) Efeito das concentrações:** v = k[NO]²[O2]. Com tudo dividido por 2: (1/2)² × (1/2) = 1/8 da velocidade, mantido o mesmo k.\n\n**2) Compensação:** como v não mudou, k teve de ficar **8 vezes maior**: k2/k1 = 8.\n\n**3) Arrhenius:** ln(k2/k1) = (Ea/R)(1/T1 − 1/T2), com T1 = 733,15 K e T2 = 873,15 K.\n\nEa = 8,314 × ln 8 / (1/733,15 − 1/873,15) = 8,314 × 2,079 / 2,187×10⁻⁴ ≈ **79 kJ/mol**.",
      "alternativas": [
        "Correta. k2/k1 = 2³ = 8 (ordem global 3) e Ea = R ln 8/(1/T1 − 1/T2) ≈ 79 kJ/mol.",
        "Errada. Usa k2/k1 = 4, como se só o NO (ordem 2) tivesse sido diluído.",
        "Errada. Usa as temperaturas em °C (460 e 600) em vez de kelvin na equação de Arrhenius.",
        "Errada. Usa k2/k1 = 2, como se a ordem global fosse 1.",
        "Errada. A velocidade não mudou porque o aumento de k compensou a queda das concentrações; o próprio k aumentou 8 vezes."
      ],
      "dica": "Velocidade igual não quer dizer constante igual: veja o que mudou nas concentrações e quanto o k precisou compensar."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 40th International Chemistry Olympiad (Budapeste, 2008), problema 25 (com soluções)",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2008/IChO40HU2008PP.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0)",
        "url": "https://creativecommons.org/licenses/by-sa/3.0/deed.pt_BR"
      }
    ]
  }
] });
