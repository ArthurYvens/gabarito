/* Questões de Química adaptadas dos problemas preparatórios da 56ª Olimpíada Internacional de Química (IChO 2024, Riade, Arábia Saudita).
   Fonte: "Preparatory Problems for the 56th International Chemistry Olympiad", editor Gábor Magyarfalvi, © 2024 56th International Chemistry Olympiad.
   Original: https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf
   O original é licenciado sob Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0): https://creativecommons.org/licenses/by-nc-sa/4.0/
   Este arquivo é uma adaptação (tradução para o português do Brasil, conversão para múltipla escolha e comentários novos), com as respostas conferidas na
   solução oficial de cada problema. O conteúdo adaptado deste arquivo é distribuído sob a mesma licença, CC BY-NC-SA 4.0
   (https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR), com uso apenas não comercial e crédito aos autores originais. */
Banco.registrar({ questoes: [
  {
    "id": "qui-1101",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 1. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Um estudante recebeu um ácido dicarboxílico (diprótico) B, sólido branco pouco solúvel em água. Dissolveu 1,2000 g dele em água até completar 200 cm³ de solução-estoque e titulou 25,00 cm³ dessa solução com NaOH 0,1000 mol/dm³, acompanhando o pH. O segundo ponto de equivalência (neutralização dos dois H⁺ ácidos) apareceu com 18,04 mL de NaOH. Qual é a massa molar do ácido B?",
    "alternativas": [
      "83 g/mol",
      "166 g/mol",
      "333 g/mol",
      "665 g/mol",
      "1330 g/mol"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "O ponto em 18,04 mL é o segundo equivalente, então n(ácido) = n(NaOH)/2 nos 25,00 cm³; multiplicando por 200/25 e dividindo a massa por esse número de mols, M ≈ 166 g/mol.",
      "detalhada": "A resolução segue a solução oficial do problema 1 (a massa molar identifica o ácido ftálico, C8H6O4).\n\n**1) Mols de NaOH até o 2º ponto de equivalência:** 0,1000 mol/dm³ × 0,01804 dm³ = 1,804×10⁻³ mol.\n\n**2) Mols de ácido nos 25,00 cm³:** o ácido é diprótico, então cada mol de ácido consome 2 mol de NaOH: n(ácido) = 1,804×10⁻³/2 = 9,02×10⁻⁴ mol.\n\n**3) Mols no balão de 200 cm³:** 9,02×10⁻⁴ × (200/25) = 7,216×10⁻³ mol.\n\n**4) Massa molar:** M = 1,2000 g / 7,216×10⁻³ mol ≈ 166 g/mol.",
      "alternativas": [
        "Errada. É o valor de quem trata o ácido como monoprótico (n(ácido) = n(NaOH)). Mas o volume de 18,04 mL corresponde ao segundo equivalente: cada molécula consome dois íons OH⁻.",
        "Correta. n(ácido) = n(NaOH)/2 nos 25,00 cm³, fator 8 pela diluição (200/25) e M = 1,2000 g / 7,216×10⁻³ mol ≈ 166 g/mol.",
        "Errada. Sai de dividir por 2 duas vezes (n(ácido) = n(NaOH)/4). A estequiometria diprótica pede só uma divisão por 2.",
        "Errada. Combina dois erros: tratar o ácido como monoprótico e esquecer que só 25,00 cm³ dos 200 cm³ foram titulados.",
        "Errada. Esquece o fator de diluição: usa os mols dos 25,00 cm³ como se fossem os de todo o balão (1,2000 g / 9,02×10⁻⁴ mol)."
      ],
      "dica": "Em titulação de ácido poliprótico, veja se o volume dado é do 1º ou do 2º equivalente e lembre de que só uma alíquota foi titulada."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 1",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: Phthalic acid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Phthalic-acid"
      }
    ]
  },
  {
    "id": "qui-1102",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 1. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Um ácido dicarboxílico C (H2A), muito solúvel em água, tem Ka1 = 6,03×10⁻⁴ e Ka2 = 1,41×10⁻⁵. Numa solução aquosa inicial dele (antes de qualquer titulação), o pH medido é 2,33. Que porcentagem dos íons H⁺ presentes na solução provém da segunda desprotonação (HA⁻ → A²⁻ + H⁺)?",
    "alternativas": [
      "0,03%",
      "0,3%",
      "0,6%",
      "3%",
      "30%"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Pela constante Ka2, [HA⁻]/[A²⁻] = [H⁺]/Ka2 ≈ 332; os H⁺ totais liberados são [HA⁻] + 2[A²⁻], e a segunda etapa responde por [A²⁻]/([HA⁻] + 2[A²⁻]) ≈ 0,3%.",
      "detalhada": "A resolução segue a solução oficial do problema 1.\n\n**1) Razão entre as espécies no pH dado:** [H⁺] = 10⁻²·³³ = 4,68×10⁻³ mol/dm³. De Ka2 = [H⁺][A²⁻]/[HA⁻], vem [HA⁻]/[A²⁻] = [H⁺]/Ka2 = 4,68×10⁻³ / 1,41×10⁻⁵ ≈ 332.\n\n**2) Contagem dos H⁺:** cada HA⁻ formado liberou 1 H⁺ (primeira etapa); cada A²⁻ liberou 2 H⁺ (uma na primeira e outra na segunda etapa). A segunda etapa produziu [A²⁻] íons H⁺, do total [HA⁻] + 2[A²⁻].\n\n**3) Fração:** [A²⁻]/([HA⁻] + 2[A²⁻]) = 1/(332 + 2) ≈ 3,0×10⁻³, isto é, cerca de 0,3%.\n\nA segunda desprotonação é desprezível: o H⁺ da solução vem quase todo da primeira etapa.",
      "alternativas": [
        "Errada. Seria o resultado de um erro de potência de dez na razão [HA⁻]/[A²⁻] (≈3320 em vez de ≈332).",
        "Correta. 1/(332 + 2) ≈ 0,003, ou seja, 0,3% dos H⁺ vêm da segunda etapa.",
        "Errada. É 2/(332 + 2): põe no numerador os dois H⁺ de cada A²⁻, mas só um deles vem da segunda etapa (HA⁻ → A²⁻ + H⁺); o outro já foi liberado na primeira. Na fração, a segunda etapa entra com peso 1.",
        "Errada. Corresponde a uma razão [HA⁻]/[A²⁻] de ≈33, dez vezes menor que a real, por erro de potência de dez ao dividir [H⁺] por Ka2.",
        "Errada. Ordem de grandeza incompatível: Ka2 é cerca de 40 vezes menor que Ka1 e o pH é muito menor que pKa2 (4,85), então quase todo HA⁻ continua protonado."
      ],
      "dica": "Em ácido diprótico fraco e pH bem abaixo de pKa2, quase tudo está como H2A/HA⁻: a segunda etapa quase não contribui com H⁺."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 1",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1103",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 2, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 2. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "O ácido málico (ácido 2-hidroxibutanodioico), presente na maçã, tem fórmula estrutural HOOC–CH(OH)–CH2–COOH (C4H6O5). Num espectro de RMN de ¹³C com desacoplamento de prótons, cada tipo de carbono quimicamente diferente aparece como uma linha. Para comparação, o anidrido maleico (C4H2O3), simétrico, mostra só 2 linhas. Quantas linhas tem o espectro de ¹³C do ácido málico?",
    "alternativas": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "O ácido málico não tem simetria: seus 4 carbonos (dois COOH diferentes, o CH(OH) e o CH2) são todos diferentes e dão 4 linhas.",
      "detalhada": "A resolução segue a solução oficial do problema 2.\n\nEscreva os carbonos da cadeia: C1 (HOOC–), C2 (–CH(OH)–), C3 (–CH2–) e C4 (–COOH).\n\n- C1 e C4 são ambos carbono de ácido carboxílico, mas C1 está ligado ao carbono que tem OH e C4 ao CH2; os ambientes são diferentes.\n- C2 tem um OH e um H; C3 tem dois H.\n\nNão há plano nem eixo de simetria que torne dois carbonos equivalentes, então são 4 carbonos diferentes e **4 linhas** (todas singletos, por causa do desacoplamento de prótons).\n\nNo anidrido maleico, ao contrário, há um plano de simetria: os dois C=O são equivalentes entre si e os dois CH também, resultando em apenas 2 linhas.",
      "alternativas": [
        "Errada. Uma só linha exigiria os quatro carbonos equivalentes, o que não ocorre em uma cadeia com OH em apenas um carbono.",
        "Errada. É o resultado do anidrido maleico, que é simétrico. O ácido málico não tem simetria.",
        "Errada. Só seria assim se os dois grupos COOH fossem equivalentes, mas um está ligado ao CH(OH) e o outro ao CH2.",
        "Correta. Os 4 carbonos estão em ambientes químicos diferentes, então são 4 linhas.",
        "Errada. A molécula tem 4 carbonos. O número 5 é o dos átomos de oxigênio, e RMN de ¹³C conta só os carbonos."
      ],
      "dica": "Conte carbonos quimicamente distintos: procure planos ou eixos de simetria. Sem simetria, número de linhas = número de carbonos."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 2",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: Malic acid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Malic-acid"
      }
    ]
  },
  {
    "id": "qui-1104",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 2, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 2. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "O ácido málico é fabricado em duas etapas: (1) n-butano + 3,5 O2 → anidrido maleico + 4 H2O; (2) anidrido maleico + 2 H2O → ácido málico. Nenhuma das substâncias usadas (n-butano, O2, H2O) nem o intermediário anidrido maleico é quiral. O ácido málico tem um carbono assimétrico e é vendido em três formas: L-(−)-málico (o da maçã), D-(+)-málico e DL-málico. Qual dessas formas é produzida diretamente por esse processo industrial?",
    "alternativas": [
      "O L-(−)-málico, o mesmo enantiômero que ocorre na maçã.",
      "O D-(+)-málico, o enantiômero de imagem especular do natural.",
      "O DL-málico, a mistura racêmica com 50% de cada enantiômero.",
      "Um composto meso, que é opticamente inativo por ter um plano de simetria.",
      "Uma mistura de diastereoisômeros do ácido málico."
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "Sem nenhum agente quiral na rota, o novo centro estereogênico se forma com igual probabilidade nas duas configurações, o que dá a mistura racêmica DL.",
      "detalhada": "A resolução segue a solução oficial do problema 2.\n\nA adição de água ao anidrido maleico (que é plano e sem quiralidade) cria o carbono assimétrico do ácido málico. Como a água e o anidrido são aquirais e não há catalisador, solvente ou reagente quiral, o ataque pode ocorrer por qualquer das duas faces da molécula com a mesma probabilidade. Os dois enantiômeros (R e S) saem em quantidades iguais: **mistura racêmica, DL-málico**.\n\nO L-málico existe puro nas frutas porque as enzimas são quirais. No problema, o L-málico (natural) custa 0,50 euro/g e o racemato, que sai direto da indústria, custa 0,10 euro/g.\n\nO composto meso exige pelo menos dois centros estereogênicos; o ácido málico tem só um. Diastereoisômeros também precisam de dois ou mais centros.",
      "alternativas": [
        "Errada. Só uma síntese ou fermentação com catalisador quiral (uma enzima) formaria o enantiômero natural de modo seletivo.",
        "Errada. Pelo mesmo motivo: nada na rota favorece um enantiômero sobre o outro.",
        "Correta. Sem influência quiral, formam-se R e S em partes iguais (racemato DL).",
        "Errada. Meso requer dois ou mais centros estereogênicos com simetria interna. O ácido málico só tem um.",
        "Errada. Diastereoisômeros só existem com dois ou mais centros estereogênicos; aqui há um único."
      ],
      "dica": "Reagentes e catalisadores aquirais produzem racemato. Só ambientes quirais (enzimas, auxiliares quirais) dão um único enantiômero."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 2",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: Malic acid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Malic-acid"
      }
    ]
  },
  {
    "id": "qui-1105",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 3, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 3. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "A hidrazina (N2H4) forma com o ácido sulfúrico o sal (N2H5)(HSO4). Calcule o pH aproximado de uma solução 0,10 mol/dm³ desse sal. Dado: HSO4⁻ ⇌ H⁺ + SO4²⁻, Ka2 = 1,02×10⁻². Despreze a hidrólise do íon N2H5⁺, que é ácido e base muito fracos, e considere que o único H⁺ vem da dissociação do HSO4⁻.",
    "alternativas": [
      "1,00",
      "1,30",
      "1,56",
      "1,99",
      "4,30"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "Como Ka2 não é pequeno frente à concentração, resolve-se a equação x²/(0,10 − x) = 1,02×10⁻², que dá [H⁺] ≈ 2,72×10⁻² mol/dm³ e pH ≈ 1,56.",
      "detalhada": "A resolução segue a solução oficial do problema 3 (com a hidrólise do N2H5⁺ desprezada, pH ≈ 1,56; considerando-a, 1,57).\n\n**1) Equilíbrio:** HSO4⁻ ⇌ H⁺ + SO4²⁻, com [H⁺] = [SO4²⁻] = x e [HSO4⁻] = 0,10 − x.\n\n**2) Equação:** Ka2 = x²/(0,10 − x) = 1,02×10⁻². Isso dá x² + 1,02×10⁻² x − 1,02×10⁻³ = 0.\n\n**3) Raiz positiva:** x = [−1,02×10⁻² + √((1,02×10⁻²)² + 4 × 1,02×10⁻³)] / 2 ≈ 2,72×10⁻² mol/dm³.\n\n**4) pH:** −log(2,72×10⁻²) ≈ 1,56.\n\nNão se pode simplificar 0,10 − x ≈ 0,10: a dissociação é cerca de 27%, então a conta aproximada daria 1,50, que já foge do valor correto.",
      "alternativas": [
        "Errada. Seria o pH de um ácido forte 0,10 mol/dm³. O HSO4⁻ é um ácido fraco (Ka2 ≈ 10⁻²) e só se dissocia em parte.",
        "Errada. Equivale a [H⁺] = 0,05 mol/dm³, ou seja, 50% de dissociação, valor que não sai de Ka2 = 1,02×10⁻².",
        "Correta. A equação quadrática dá [H⁺] ≈ 2,72×10⁻² mol/dm³ e pH ≈ 1,56.",
        "Errada. É o pKa2 do HSO4⁻ (−log 1,02×10⁻²), que só seria o pH se [HSO4⁻] = [SO4²⁻], o que não ocorre numa solução do sal puro.",
        "Errada. É o pH aproximado do outro sal da hidrazina, (N2H5)2SO4, que é uma solução de ácido fraco (N2H5⁺) e não tem HSO4⁻."
      ],
      "dica": "Se o ácido se dissocia mais de ~5%, não despreze x na subtração: resolva a quadrática."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 3",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1106",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 4, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 4. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Para analisar uma magnésia calcinada cáustica (composta sobretudo de MgO), um estudante montou um calorímetro improvisado e mediu primeiro a capacidade calorífica dele. Colocou no calorímetro 200 cm³ de HCl 0,500 mol/dm³ (densidade 1,007 g/cm³) e, num béquer, 300 cm³ de NaOH 0,400 mol/dm³ (densidade 1,016 g/cm³), ambos a 24,2 °C. Ao despejar a base no calorímetro, a temperatura máxima foi 26,3 °C. Dados: H⁺(aq) + OH⁻(aq) → H2O(l), ΔH = −56,0 kJ/mol; todas as soluções aquosas têm o calor específico da água, 4,178 J g⁻¹ K⁻¹. Qual é a capacidade calorífica do calorímetro?",
    "alternativas": [
      "552 J/K",
      "1085 J/K",
      "2115 J/K",
      "2667 J/K",
      "5600 J/K"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "O reagente limitante é o H⁺ (0,100 mol), que libera 5,60 kJ; descontando o calor absorvido pela solução (506,2 g, ΔT = 2,1 K), sobra o do calorímetro: C ≈ 552 J/K.",
      "detalhada": "A resolução segue a solução oficial do problema 4.\n\n**1) Limitante:** n(H⁺) = 0,200 dm³ × 0,500 = 0,100 mol; n(OH⁻) = 0,300 × 0,400 = 0,120 mol. O limitante é o H⁺.\n\n**2) Calor liberado:** Q = 0,100 mol × 56,0 kJ/mol = 5,60 kJ = 5600 J.\n\n**3) Massa da solução final:** 200 × 1,007 + 300 × 1,016 = 201,4 + 304,8 = 506,2 g. ΔT = 26,3 − 24,2 = 2,1 K.\n\n**4) Balanço de calor:** Q = (m·c + C)·ΔT, logo 5600 = 4,178 × 506,2 × 2,1 + C × 2,1. O primeiro termo vale 4441 J, então C = (5600 − 4441)/2,1 ≈ 552 J/K.",
      "alternativas": [
        "Correta. C = (5600 J − 4441 J)/2,1 K ≈ 552 J/K.",
        "Errada. Usa 0,120 mol (NaOH) para calcular o calor, mas o limitante é o H⁺ (0,100 mol); com 0,120 mol de reação o calor seria 6720 J.",
        "Errada. É 4441 J / 2,1 K, isto é, a capacidade calorífica da solução, não a do calorímetro.",
        "Errada. É 5600 J / 2,1 K: atribui todo o calor ao calorímetro, esquecendo que a solução também se aquece.",
        "Errada. É o calor liberado em joules (5600 J), sem dividir pela variação de temperatura e sem descontar o calor da solução; a unidade nem é a de J/K."
      ],
      "dica": "Calorimetria: calor da reação = (calor da solução + calor do calorímetro). Ache o limitante antes de calcular o calor."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 4",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1107",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 4, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 4. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "No mesmo calorímetro (capacidade calorífica 552 J/K), a 24,4 °C, o estudante adicionou 12,81 g da amostra de magnésia (MgO + CaO + SiO2) a 500 cm³ de HCl 2,000 mol/dm³ (densidade 1,033 g/cm³). A temperatura máxima foi 40,5 °C. O sólido que não dissolveu (SiO2), lavado e seco, tinha 0,51 g. Dados: MgO(s) + 2 H⁺(aq) → Mg²⁺(aq) + H2O(l), ΔH = −146 kJ/mol; CaO(s) + 2 H⁺(aq) → Ca²⁺(aq) + H2O(l), ΔH = −193 kJ/mol; M(MgO) = 40,3 g/mol; M(CaO) = 56,1 g/mol; calor específico das soluções aquosas = 4,178 J g⁻¹ K⁻¹ e do SiO2 = 0,736 J g⁻¹ K⁻¹. Para a massa da solução aquecida, use a do HCl somada à dos óxidos que se dissolvem (MgO + CaO); o SiO2 insolúvel entra no balanço de calor só com o seu calor específico. Qual é, aproximadamente, a porcentagem em massa de MgO na amostra?",
    "alternativas": [
      "4%",
      "17%",
      "56%",
      "92%",
      "96%"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "O calor total (≈44,46 kJ) e a massa dos óxidos solúveis (12,30 g) formam um sistema de duas equações em n(MgO) e n(CaO); a solução dá 0,292 mol de MgO, ou seja, 11,77 g e cerca de 92% da amostra.",
      "detalhada": "A resolução segue a solução oficial do problema 4.\n\n**1) Massa dos óxidos solúveis:** 12,81 − 0,51 = 12,30 g (o SiO2 não reage).\n\n**2) Calor liberado:** a massa da solução é a do HCl mais a dos óxidos dissolvidos, como instrui o enunciado: 500 × 1,033 + 12,30 = 528,8 g e ΔT = 40,5 − 24,4 = 16,1 K. Q = 4,178 × 528,8 × 16,1 + 552 × 16,1 + 0,736 × 0,51 × 16,1 ≈ 35 570 + 8 887 + 6 = 44 463 J ≈ 44,46 kJ.\n\n**3) Sistema:** com x = n(MgO) e y = n(CaO): 40,3x + 56,1y = 12,30 e 146x + 193y = 44,46.\n\n**4) Solução:** x ≈ 0,292 mol e y ≈ 0,0095 mol. m(MgO) = 0,292 × 40,3 ≈ 11,77 g.\n\n**5) Porcentagem:** 11,77/12,81 ≈ 0,92, isto é, **92% de MgO** (o resto: ≈4% de CaO e ≈4% de SiO2).\n\nObservação do próprio problema: o resultado é muito sensível à precisão da medida de temperatura.",
      "alternativas": [
        "Errada. É da ordem da fração de CaO (≈4%) ou de SiO2 (≈4%) na amostra, não da de MgO.",
        "Errada. Resulta de não descontar o SiO2: usar 12,81 g em vez de 12,30 g na equação de massa desloca muito a solução do sistema.",
        "Errada. Resulta de usar só a massa do ácido (516,5 g) como massa da solução, sem somar os óxidos dissolvidos (12,30 g), o que contraria a instrução do enunciado e subestima o calor.",
        "Correta. n(MgO) ≈ 0,292 mol → 11,77 g → 11,77/12,81 ≈ 92%.",
        "Errada. É 12,30/12,81: supõe que todo sólido solúvel é MgO, ignorando o CaO (que também libera calor e tem outra massa molar)."
      ],
      "dica": "Duas incógnitas (MgO e CaO), duas equações: uma de massa e uma de calor. Não esqueça o calor do calorímetro nem a massa que não reagiu."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 4",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1108",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 5, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 5. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Um eletrolisador alimentado com água converte CO2 em CO com densidade de corrente de 420 mA/cm². Em regime estacionário, o carbonato (CO3²⁻) é o principal portador de carga pela membrana: no cátodo ocorre 2 CO2 + 2 e⁻ → CO + CO3²⁻ e, no ânodo, 2 CO3²⁻ → 2 CO2 + O2 + 4 e⁻. Considere um eletrodo de 100 cm², corrente constante de 420 mA/cm² e CO2 de entrada a 60 °C e pressão atmosférica (101 325 Pa). O CO2 que sai no ânodo não é reciclado para a entrada. Qual é a vazão mínima de CO2 na entrada? Dados: F = 96 485 C/mol; R = 8,314 J mol⁻¹ K⁻¹.",
    "alternativas": [
      "11,9 dm³/h",
      "21,4 dm³/h",
      "35,1 dm³/h",
      "42,8 dm³/h",
      "85,7 dm³/h"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "A corrente é 42 A, ou 0,435 mmol de e⁻ por segundo; como entra 1 CO2 por elétron, a vazão é 0,435 mmol/s, ou 11,9 cm³/s a 60 °C, o que dá 42,8 dm³/h.",
      "detalhada": "A resolução segue a solução oficial do problema 5.\n\n**1) Corrente:** I = 0,420 A/cm² × 100 cm² = 42 A.\n\n**2) Mols de elétrons por segundo:** 42 / 96 485 = 4,35×10⁻⁴ mol/s (0,435 mmol/s).\n\n**3) Estequiometria:** somando cátodo e ânodo (para 4 e⁻): 4 CO2 → 2 CO + 2 CO2 + O2. Entram 4 CO2 para 4 elétrons, ou seja, 1 CO2 por elétron: metade do CO2 vira CO e a outra metade atravessa como carbonato e volta como CO2. Como o CO2 do ânodo não volta para a entrada, n(CO2) = 0,435 mmol/s.\n\n**4) Volume a 60 °C (333,15 K):** V = nRT/p = 4,35×10⁻⁴ × 8,314 × 333,15 / 101 325 = 1,19×10⁻⁵ m³/s = 11,9 cm³/s.\n\n**5) Por hora:** 11,9 cm³/s × 3600 s = 42 840 cm³ ≈ **42,8 dm³/h**.",
      "alternativas": [
        "Errada. É a vazão em cm³/s (11,9) tratada como se fosse dm³/h; falta multiplicar por 3600 s e converter cm³ em dm³.",
        "Errada. Supõe que o CO2 que sai no ânodo é reciclado para a entrada (0,5 CO2 por elétron). Sem reciclo, cada elétron consome 1 CO2 de entrada, o dobro desse valor.",
        "Errada. É o volume calculado a 0 °C (273,15 K); o enunciado pede a 60 °C.",
        "Correta. 0,435 mmol/s de CO2 a 60 °C e 1 atm dá 11,9 cm³/s = 42,8 dm³/h.",
        "Errada. Considera 2 CO2 de entrada por elétron, o dobro do valor real (a estequiometria é 1 CO2 por elétron)."
      ],
      "dica": "Em eletrólise: mols de e⁻ = I·t/F. Depois use a estequiometria global do ciclo e a lei dos gases na temperatura pedida."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 5",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1109",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 8, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 8. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "O gás marrom NO2 se dimeriza no N2O4 incolor: 2 NO2(g) ⇌ N2O4(g). Dados a 25 °C (considere independentes da temperatura): NO2(g): ΔfH° = 33,18 kJ/mol e S° = 219,85 J mol⁻¹ K⁻¹; N2O4(g): ΔfH° = 9,16 kJ/mol e S° = 304,29 J mol⁻¹ K⁻¹. Use R = 8,3145 J mol⁻¹ K⁻¹ e estado padrão de 1 bar. Qual é a constante de equilíbrio K da dimerização a 25 °C?",
    "alternativas": [
      "1,1×10⁻³",
      "8,9×10²",
      "4,2×10⁸",
      "1,0×10¹⁰",
      "1,2×10¹⁷"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "ΔH° = −57,2 kJ/mol e ΔS° = −135,41 J mol⁻¹ K⁻¹ dão ΔG° ≈ −16,83 kJ/mol a 298,15 K, e K = exp(−ΔG°/RT) ≈ 887.",
      "detalhada": "A resolução segue a solução oficial do problema 8.\n\n**1) Entalpia da reação:** ΔH° = 9,16 − 2 × 33,18 = −57,2 kJ/mol.\n\n**2) Entropia da reação:** ΔS° = 304,29 − 2 × 219,85 = −135,41 J mol⁻¹ K⁻¹.\n\n**3) Energia livre:** ΔG° = ΔH° − TΔS° = −57 200 + 298,15 × 135,41 ≈ −16 830 J/mol.\n\n**4) Constante:** K = exp(16 830 / (8,3145 × 298,15)) = exp(6,79) ≈ 8,9×10², ou seja, ≈ 887.",
      "alternativas": [
        "Errada. É o inverso de K (1/887): resulta de inverter o sinal de ΔG° ou a ordem produtos − reagentes.",
        "Correta. ΔG° ≈ −16,83 kJ/mol e K ≈ 887.",
        "Errada. Aparece quando se ignora o coeficiente 2 do NO2 nas somas de ΔfH° e S°, o que muda o ΔG° para ≈ −49 kJ/mol.",
        "Errada. É o K calculado só com ΔH° (−57,2 kJ/mol), esquecendo o termo −TΔS° de entropia, que é desfavorável e muito importante aqui.",
        "Errada. Resulta de somar em vez de subtrair o termo TΔS° (usar ΔG° = ΔH° + TΔS°), um erro de sinal que leva a um ΔG° de ≈ −97,6 kJ/mol."
      ],
      "dica": "ΔG° = ΔH° − TΔS° e K = exp(−ΔG°/RT). Converta kJ em J e some os coeficientes estequiométricos dos dois lados."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 8",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: Dinitrogen tetroxide",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Dinitrogen-tetroxide"
      }
    ]
  },
  {
    "id": "qui-1110",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 8, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 8. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "1 mol de NO2 é colocado num recipiente vazio e rígido de 25 dm³ e resfriado a 0 °C (273,15 K). Nessa temperatura a dimerização 2 NO2 → N2O4 é praticamente completa. Para o N2O4: ponto de ebulição normal = 21,69 °C; ΔvapH = 22,96 kJ/mol; ΔvapS = 77,9 J mol⁻¹ K⁻¹ (independentes da temperatura). Use R = 8,3145 J mol⁻¹ K⁻¹ e estado padrão de 1 bar. Qual é a pressão total do sistema a 0 °C?",
    "alternativas": [
      "45,4 kPa",
      "47,7 kPa",
      "50,8 kPa",
      "68,1 kPa",
      "90,8 kPa"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "A pressão de vapor do N2O4 líquido a 0 °C é 47,7 kPa (com p° = 1 bar), mas 0,500 mol de N2O4 gasoso nos 25 dm³ exerce só 45,4 kPa; como 45,4 < 47,7, não há líquido e a pressão é 45,4 kPa.",
      "detalhada": "A resolução segue a solução oficial do problema 8 (item 8.8).\n\n**1) Pressão de vapor do N2O4 a 0 °C:** ΔG(vap) = ΔH − TΔS = 22 960 − 273,15 × 77,9 ≈ 1680 J/mol. K = exp(−1680/(8,3145 × 273,15)) = 0,477, logo p(vapor) ≈ 0,477 bar = 47,7 kPa, com p° = 1 bar.\n\n**2) Pressão se todo o N2O4 estiver gasoso:** a dimerização completa dá 0,500 mol de N2O4: p = nRT/V = 0,500 × 8,3145 × 273,15 / 0,025 ≈ 45,4 kPa.\n\n**3) Comparação:** 45,4 kPa é menor que a pressão de vapor de equilíbrio (47,7 kPa), então nenhum N2O4 condensa. A pressão do sistema é **45,4 kPa**.",
      "alternativas": [
        "Correta. Todo o N2O4 fica como gás (0,500 mol) e p = nRT/V ≈ 45,4 kPa < 47,7 kPa.",
        "Errada. É a pressão de vapor do N2O4 líquido a 0 °C. Só valeria se houvesse líquido em equilíbrio, mas o gás dos 0,500 mol (45,4 kPa) fica abaixo desse valor.",
        "Errada. É a pressão de equilíbrio da dimerização parcial a 25 °C, não a 0 °C, em que a dimerização é praticamente completa.",
        "Errada. Corresponderia a 0,75 mol de gás, isto é, a só metade do NO2 dimerizado, mas a 0 °C a dimerização é praticamente total.",
        "Errada. É a pressão de 1 mol de NO2 sem nenhuma dimerização (nRT/V)."
      ],
      "dica": "Antes de supor um equilíbrio líquido–vapor, calcule a pressão que a quantidade de gás exerceria: se ficar abaixo da pressão de vapor, não há líquido."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 8",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: Dinitrogen tetroxide",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Dinitrogen-tetroxide"
      }
    ]
  },
  {
    "id": "qui-1111",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 10, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 10. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "No preparo de um suco, o aromatizante berrina é oxidado a diberrina pelo aditivo moxona: 2 berrina + moxona → diberrina. A velocidade de formação da diberrina é v = k[berrina][moxona], com k = 4,61 dm³ mol⁻¹ h⁻¹ na temperatura de cozimento (108 °C). O suco fica intragável quando 75% da berrina já foi consumida. Com a moxona em grande excesso, a 0,100 mol/dm³ (praticamente constante), quanto tempo de cozimento leva até o suco ficar intragável?",
    "alternativas": [
      "19 min",
      "45 min",
      "90 min",
      "180 min",
      "360 min"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "A berrina é consumida duas vezes mais rápido que a diberrina se forma: kobs = 2k[moxona] = 0,922 h⁻¹, e o tempo para restar 25% é ln 4 / 0,922 ≈ 1,5 h ≈ 90 min.",
      "detalhada": "A resolução segue a solução oficial do problema 10.\n\n**1) Pseudoprimeira ordem:** com a moxona constante, v = kobs'[berrina], com kobs' = k[moxona] = 4,61 × 0,100 = 0,461 h⁻¹ (para a formação da diberrina).\n\n**2) Estequiometria:** −d[berrina]/dt = 2·d[diberrina]/dt, então a berrina cai com constante 2 × 0,461 = 0,922 h⁻¹.\n\n**3) Tempo para restar 25%:** ln([berrina]0/[berrina]) = 0,922·t, com [berrina] = 0,25·[berrina]0: t = ln 4 / 0,922 = 1,386/0,922 ≈ 1,50 h ≈ **90 min**.",
      "alternativas": [
        "Errada. É o tempo para consumir só 25% da berrina (ln(4/3)/0,922).",
        "Errada. É a meia-vida (ln 2/0,922), isto é, o tempo para consumir 50%, não 75%.",
        "Correta. t = ln 4 / (2 × 0,461 h⁻¹) ≈ 1,5 h ≈ 90 min.",
        "Errada. Esquece o fator 2 da estequiometria (2 berrina por moxona): usa 0,461 h⁻¹ para a berrina.",
        "Errada. Divide por 2 em vez de multiplicar, usando 0,2305 h⁻¹ como constante de consumo da berrina."
      ],
      "dica": "Quando a velocidade é dada pela formação do produto, multiplique pelo coeficiente estequiométrico para obter o consumo do reagente."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 10",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1112",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 18, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 18. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Num motor, a gasolina queima com 10 kg de ar para cada 1 dm³ de combustível. Use o octano (C8H18; densidade 0,703 g/cm³; M = 114 g/mol) como modelo da gasolina e considere o ar com 21% de O2 em mol e massa molar média de 29 g/mol. Possíveis combustões do octano: C8H18 + 4,5 O2 → 8 C + 9 H2O; C8H18 + 8,5 O2 → 8 CO + 9 H2O; C8H18 + 12,5 O2 → 8 CO2 + 9 H2O. Quais são os principais produtos da combustão nessas condições?",
    "alternativas": [
      "C (fuligem) e H2O.",
      "CO e H2O, apenas.",
      "CO2 e H2O, apenas.",
      "C (fuligem), CO e H2O.",
      "CO, CO2 e H2O."
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "Há 72,4 mol de O2 para 6,17 mol de octano, ou 11,7 mol de O2 por mol de octano: entre 8,5 (só CO) e 12,5 (só CO2), então se formam CO, CO2 e H2O.",
      "detalhada": "A resolução segue a solução oficial do problema 18.\n\n**1) Mols de octano em 1 dm³:** 1000 cm³ × 0,703 g/cm³ = 703 g; 703/114 = 6,17 mol.\n\n**2) Mols de O2 em 10 kg de ar:** 10 000 g / 29 g/mol = 344,8 mol de ar; × 0,21 = 72,4 mol de O2.\n\n**3) Razão:** 72,4/6,17 ≈ 11,7 mol de O2 por mol de octano.\n\n**4) Comparação:** a combustão em C pede 4,5, em CO pede 8,5 e em CO2 pede 12,5 mol de O2 por mol de octano. Como 8,5 < 11,7 < 12,5, há O2 de sobra para formar CO, mas não o bastante para só CO2: os produtos principais são **CO, CO2 e H2O**.",
      "alternativas": [
        "Errada. Fuligem só se forma com O2 insuficiente para oxidar todo o carbono a CO (abaixo de 8,5 mol por mol de octano); com 11,7 mol/mol isso não ocorre.",
        "Errada. Só CO exigiria 8,5 mol de O2/mol; com 11,7 já sobra oxigênio para converter parte do CO em CO2.",
        "Errada. Só CO2 exigiria 12,5 mol de O2/mol (combustão completa), mais do que os 11,7 disponíveis.",
        "Errada. Falta o CO2: com 11,7 mol de O2 por mol de octano o carbono vai a CO e a CO2, e a fuligem não aparece.",
        "Correta. 8,5 < 11,7 < 12,5: a combustão é parcialmente completa, com CO, CO2 e água."
      ],
      "dica": "Compare a razão O2/combustível disponível com a de cada reação: o produto depende de qual intervalo a razão ocupa."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 18",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: Octane",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Octane"
      }
    ]
  },
  {
    "id": "qui-1113",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 18, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 18. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "O metal M, muito usado em conversores catalíticos, é precipitado de soluções por um composto orgânico HL, na forma do complexo ML2, usado em gravimetria. HL tem 2 átomos de N, 2 de O e dois outros elementos (C e H), e grau de insaturação (DBE) igual a 2. No complexo ML2, o metal tem 31,61% em massa e 3,23% em número de átomos. Dados (g/mol): C 12,01; H 1,008; N 14,01; O 16,00; Ni 58,69; Pd 106,4; Pt 195,1. Quais são a fórmula molecular de HL e o metal M?",
    "alternativas": [
      "HL = C2H4N2O2; M = Pd",
      "HL = C4H8N2O2; M = Ni",
      "HL = C4H8N2O2; M = Pt",
      "HL = C6H12N2O2; M = Pd",
      "HL = C4H8N2O2; M = Pd"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "Os 3,23% em átomos dão 1/31 átomos por unidade ML2, o que fixa x + y = 11 em CxHy+1N2O2; com DBE = 2 vem x = 4 e y = 7 (C4H8N2O2, a dimetilglioxima); a fração em massa dá M = 106,4 g/mol, paládio.",
      "detalhada": "A resolução segue a solução oficial do problema 18.\n\n**1) Fórmula geral:** se HL = CxHy+1N2O2, o ligante é L⁻ = CxHyN2O2, com x + y + 4 átomos. ML2 tem 1 + 2(x + y + 4) = 2x + 2y + 9 átomos.\n\n**2) Porcentagem em átomos:** 1/(2x + 2y + 9) = 0,0323, então 2x + 2y + 9 ≈ 31 e x + y = 11.\n\n**3) Insaturação:** DBE = (2x + 2 + 2 − (y + 1))/2 = 2, logo 2x − y = 1.\n\n**4) Sistema:** x + y = 11 e 2x − y = 1 dão x = 4 e y = 7. HL = C4H8N2O2 (dimetilglioxima).\n\n**5) Metal:** a massa de 2 L = 2 × 115,1 = 230,2 g/mol. M/(M + 230,2) = 0,3161, logo M = 0,3161 × 230,2 / 0,6839 ≈ 106,4 g/mol: **paládio**.",
      "alternativas": [
        "Errada. C2H4N2O2 tem DBE = 2, mas daria 1/(1 + 2 × 9) = 5,3% em átomos (e 37,9% de Pd em massa), não 3,23%.",
        "Errada. A fórmula de HL está certa, mas com Ni o teor em massa seria 20,3%, não 31,61%.",
        "Errada. A fórmula de HL está certa, mas com Pt o teor em massa seria 45,9%, não 31,61%.",
        "Errada. C6H12N2O2 também tem DBE = 2, mas daria 1/(1 + 2 × 21) = 2,3% em átomos, não 3,23%.",
        "Correta. C4H8N2O2 (dimetilglioxima) e Pd: 1/31 = 3,23% em átomos e 106,4/(106,4 + 230,2) = 31,6% em massa."
      ],
      "dica": "Use as duas porcentagens de modo independente: a de átomos fixa o tamanho de L; a de massa identifica o metal."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 18",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: Dimethylglyoxime",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Dimethylglyoxime"
      }
    ]
  },
  {
    "id": "qui-1114",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 20, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 20. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "A bromação de alquenos ocorre por um íon bromônio intermediário: o íon brometo só pode atacar pelo lado oposto ao do bromo, e a adição é anti (estereoespecífica). A adição de Br2 ao oct-4-eno forma o 4,5-dibromo-octano, que tem três estereoisômeros possíveis: (4R,5R), (4S,5S) e o composto meso (4R,5S). Qual afirmação descreve corretamente o que se forma a partir de cada alqueno?",
    "alternativas": [
      "O (E)-oct-4-eno forma só o composto meso; o (Z)-oct-4-eno forma o par de enantiômeros (4R,5R) e (4S,5S).",
      "O (E)-oct-4-eno forma o par de enantiômeros (4R,5R) e (4S,5S); o (Z)-oct-4-eno forma só o composto meso.",
      "Os dois alquenos formam apenas o composto meso.",
      "Os dois alquenos formam apenas o par de enantiômeros (4R,5R) e (4S,5S).",
      "Cada alqueno forma os três estereoisômeros."
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "Na adição anti, o isômero E leva ao composto meso (um único estereoisômero) e o isômero Z leva ao par de enantiômeros (R,R) + (S,S).",
      "detalhada": "A resolução segue a solução oficial do problema 20 (item 20.1).\n\nNo íon bromônio, um Br fica de um lado do plano do alqueno e o outro Br entra do lado oposto (anti). Em consequência:\n\n- **(E)-oct-4-eno** (trans, grupos propila em lados opostos): os dois Br anti geram uma molécula com plano de simetria, o **composto meso (4R,5S)**. É só um dos três estereoisômeros.\n- **(Z)-oct-4-eno** (cis): a adição anti gera os dois enantiômeros **(4R,5R) e (4S,5S)** (uma mistura racêmica); dois dos três estereoisômeros, e o meso não se forma.\n\nPor isso a bromação é estereoespecífica: a geometria do alqueno determina quais estereoisômeros aparecem.",
      "alternativas": [
        "Correta. E → meso; Z → racemato (4R,5R) + (4S,5S), consequência da adição anti.",
        "Errada. Inverte os resultados; seria o que ocorreria numa adição sin (os dois Br do mesmo lado), não numa adição anti.",
        "Errada. O (Z)-oct-4-eno, em adição anti, não dá o meso: dá o par R,R e S,S.",
        "Errada. O (E)-oct-4-eno, em adição anti, dá o meso, não o par de enantiômeros.",
        "Errada. Como a adição é estereoespecífica, nunca se formam os três estereoisômeros a partir de um mesmo alqueno puro."
      ],
      "dica": "Adição anti: E dá meso (em alquenos simétricos como este) e Z dá o par de enantiômeros."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 20",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1115",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 20, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 20. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Em meio aquoso (Br2 em H2O/acetonitrila), o íon bromônio intermediário pode ser atacado por uma molécula de água em vez do íon brometo. Isso forma uma bromidrina (Br e OH em carbonos vizinhos, em lados opostos do plano). A água ataca de preferência o carbono mais substituído do íon bromônio. Qual é o produto principal da reação do 1-metilciclo-hexeno com Br2 em H2O/acetonitrila?",
    "alternativas": [
      "1,2-dibromo-1-metilciclo-hexano.",
      "2-bromo-1-metilciclo-hexan-1-ol, com Br e OH na mesma face do anel (sin).",
      "2-bromo-2-metilciclo-hexan-1-ol (OH no carbono secundário e Br no terciário).",
      "2-bromo-1-metilciclo-hexan-1-ol, com Br e OH em faces opostas do anel (anti).",
      "1-metilciclo-hexano-1,2-diol."
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "A água ataca o carbono terciário (C1) do íon bromônio, pelo lado oposto ao Br: o produto é o 2-bromo-1-metilciclo-hexan-1-ol, com OH e Br anti (como par de enantiômeros).",
      "detalhada": "A resolução segue a solução oficial do problema 20 (item 20.2).\n\n**1) Íon bromônio:** o Br2 forma o íon bromônio ligando os carbonos C1 (com CH3) e C2 do anel.\n\n**2) Regiosseletividade:** o C1 é terciário e suporta melhor a carga parcial positiva; a água ataca ali.\n\n**3) Estereoquímica:** o ataque é pelo lado oposto ao Br, então OH e Br ficam em faces opostas (anti).\n\n**4) Desprotonação:** perde-se H⁺ do O e fica o OH. O produto é o **2-bromo-1-metilciclo-hexan-1-ol** (OH no C1 com o CH3, Br no C2), formado como mistura dos dois enantiômeros.",
      "alternativas": [
        "Errada. É o produto de adição de Br2 em solvente não nucleofílico. Em água, o solvente (nucleófilo em grande excesso) compete com o Br⁻.",
        "Errada. Regiosseletividade certa, mas a adição é anti: o nucleófilo ataca pelo lado oposto ao Br, então OH e Br não ficam na mesma face.",
        "Errada. Inverte a regiosseletividade: o OH vai para o carbono mais substituído (C1), e o Br para o C2.",
        "Correta. OH no carbono terciário (C1), Br no C2, em faces opostas.",
        "Errada. Um diol não se forma: a molécula de água só se liga a um carbono; o outro permanece com bromo."
      ],
      "dica": "Bromidrina: o Br vai para o carbono menos substituído, o OH para o mais substituído, em anti."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 20",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1116",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 21, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 21. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Um pó branco, o composto X, borbulha em água e deixa a solução levemente básica; seu espectro de RMN de ¹H mostra o padrão de um boro-hidreto (BH4⁻), um redutor de iminas (C=N) a aminas. Numa aminação redutiva, a 4-iodoanilina (I–C6H4–NH2) é misturada com o 4-fluorobenzaldeído (F–C6H4–CHO), formando uma imina; em seguida se adiciona X. Qual é o produto final?",
    "alternativas": [
      "F–C6H4–CO–NH–C6H4–I (uma amida).",
      "F–C6H4–CH=N–C6H4–I (a imina, sem redução).",
      "F–C6H4–CH2–OH (um álcool benzílico).",
      "I–C6H4–CH2–NH–C6H4–F (amina com os halogênios trocados de anel).",
      "F–C6H4–CH2–NH–C6H4–I (uma amina secundária)."
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "A imina formada entre o aldeído e a amina é reduzida pelo NaBH4 a uma amina secundária: F–C6H4–CH2–NH–C6H4–I, a N-(4-fluorobenzil)-4-iodoanilina.",
      "detalhada": "A resolução segue a solução oficial do problema 21.\n\n**1) Identificação de X:** a reatividade (efervescência em água por liberação de H2, meio básico) e o padrão de RMN de ¹H indicam o boro-hidreto. O H ligado ao boro aparece em dois conjuntos de linhas, um para cada isótopo do boro: ¹¹B (≈ 80%, spin 3/2, quarteto) e ¹⁰B (≈ 20%, spin 3, septeto). A razão entre as áreas dos dois conjuntos é a das abundâncias, ≈ 80 : 20. O RMN não identifica o cátion (o problema oficial também não); X é um boro-hidreto redutor, por exemplo NaBH4.\n\n**2) Aminação redutiva:** R–NH2 + R'–CHO → R–N=CH–R' (imina, perde H2O). O NaBH4 reduz C=N a CH–N: R–NH–CH2–R'.\n\n**3) Produto:** o anel da anilina mantém o iodo e o do aldeído mantém o flúor: **I–C6H4–NH–CH2–C6H4–F**.\n\nNo problema original, sem o redutor (esquecido ou prejudicado por água), o produto isolado é a imina colorida, não a amina.",
      "alternativas": [
        "Errada. A amida exigiria o ácido carboxílico (ou cloreto de acila). Um aldeído com amina forma imina, não amida, e o NaBH4 é redutor.",
        "Errada. É o produto antes da redução (a imina). Com X (NaBH4), o grupo C=N é reduzido a CH–N.",
        "Errada. Seria o produto da redução de aldeído que sobrou sem reagir com a amina; a aminação redutiva dá a amina, não o álcool.",
        "Errada. Troca os halogênios: o iodo vem da anilina e o flúor, do aldeído; o anel do –NH– mantém o iodo.",
        "Correta. Imina reduzida: o N fica ligado ao anel com iodo e ao CH2 do anel com flúor."
      ],
      "dica": "Aminação redutiva: amina + aldeído → imina → (NaBH4) → amina com um novo CH2 no nitrogênio."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 21",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: Sodium borohydride",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Sodium-borohydride"
      }
    ]
  },
  {
    "id": "qui-1117",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 22, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 22. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Na síntese do medicamento finasterida, o grupo ácido carboxílico de um esteroide reage com a terc-butilamina, (CH3)3C–NH2, na presença de DCC (diciclo-hexilcarbodiimida, C6H11–N=C=N–C6H11), formando uma amida. Qual é o papel do DCC nessa reação?",
    "alternativas": [
      "Base forte que desprotona a amina e a torna mais nucleofílica.",
      "Agente de acoplamento e desidratante: ativa o ácido carboxílico e retira a água formada na amidação.",
      "Agente oxidante, que converte o grupo –COOH em –CHO.",
      "Agente redutor, que converte o ácido carboxílico em álcool.",
      "Solvente apolar da reação, sem participação química."
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "O DCC é um reagente de acoplamento: ativa o ácido carboxílico e atua como desidratante, permitindo a formação da ligação amida com a amina.",
      "detalhada": "A resolução segue a solução oficial do problema 22 (item 22.8).\n\nÁcido carboxílico e amina, simplesmente misturados, dão principalmente um sal (R–COO⁻ R'–NH3⁺), e não amida. O DCC ativa o ácido: o oxigênio do –COOH ataca o carbono central da carbodiimida e forma um intermediário reativo (O-acilisoureia), que a amina ataca. O produto é a amida, e o DCC se transforma em diciclo-hexilureia, que \"carrega\" os elementos da água: por isso se diz que o DCC é desidratante.\n\nResumo do papel: **agente de acoplamento de amidas / desidratante / ativador do ácido carboxílico**.",
      "alternativas": [
        "Errada. A carbodiimida não é uma base forte e não age desprotonando a amina. Seu papel é ativar o ácido.",
        "Correta. É o papel clássico do DCC na síntese de amidas e ésteres.",
        "Errada. O DCC não oxida: o carbono do ácido continua no mesmo estado de oxidação na amida.",
        "Errada. Não há redução: o grupo C=O é mantido na amida. Redutores seriam hidretos como LiAlH4.",
        "Errada. O DCC é consumido (vira diciclo-hexilureia): é reagente e não solvente."
      ],
      "dica": "DCC, DIC e EDC são carbodiimidas: ativam –COOH para formar amidas e ésteres, levando a água embora como ureia."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 22",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: Dicyclohexylcarbodiimide",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Dicyclohexylcarbodiimide"
      }
    ]
  },
  {
    "id": "qui-1118",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 22, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 22. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Aminoácidos podem ser preparados a partir de 2-oxoácidos. O ácido pirúvico, CH3–CO–COOH, reage com NH4Cl, formando o composto D; este é reduzido com NaBH4 e dá o aminoácido E, obtido na forma racêmica. Quais são D e E?",
    "alternativas": [
      "D = CH3–CH(OH)–COOH; E = CH3–CH(NH2)–COOH (alanina racêmica).",
      "D = CH3–C(=NH)–COOH; E = CH3–CH(OH)–COOH (ácido láctico).",
      "D = CH3–C(=NH)–COOH; E = (S)-alanina enantiomericamente pura.",
      "D = CH3–C(=NH)–COOH (imina); E = CH3–CH(NH2)–COOH (alanina, mistura racêmica de R e S).",
      "D = CH3–CH(NH2)–COOH; E = CH3–CH(NH2)–CH2OH."
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "O NH3 (de NH4Cl) condensa com o C=O do piruvato e dá a imina D; o NaBH4 reduz C=N a CH–NH2, formando alanina E. Como o redutor não é quiral, saem R e S em partes iguais (racemato).",
      "detalhada": "A resolução segue a solução oficial do problema 22 (itens 22.3 e 22.4).\n\n**1) Formação de D:** o grupo C=O (cetona) do ácido pirúvico reage com a amônia (liberada pelo NH4Cl) e perde água: CH3–C(=NH)–COOH, uma imina.\n\n**2) Redução:** o NaBH4 doa hidreto ao carbono do C=N, que vira CH–NH2: E = CH3–CH(NH2)–COOH, **alanina**.\n\n**3) Estereoquímica:** a imina é plana, e o hidreto pode atacar as duas faces com igual probabilidade, já que nem a imina nem o NaBH4 são quirais. Formam-se (S)-alanina e (R)-alanina em quantidades iguais: **racemato**.",
      "alternativas": [
        "Errada. O ácido láctico não é D: o NH4Cl introduz o nitrogênio, e a primeira etapa dá a imina, não o álcool.",
        "Errada. D está certa, mas o NaBH4 reduz o C=N da imina (formando a amina) e não a transforma em álcool; nesta sequência, o nitrogênio permanece.",
        "Errada. D está certa, mas o redutor e a imina são aquirais, então não pode haver (S)-alanina pura: sai racemato.",
        "Correta. Imina D → alanina E; as duas faces da imina são atacadas igualmente, gerando (R) e (S) em proporção 1:1.",
        "Errada. Nem o NH4Cl fornece o aminoácido pronto (D) nem o NaBH4 reduz o grupo –COOH a –CH2OH; hidretos suaves como o NaBH4 não reduzem ácidos carboxílicos."
      ],
      "dica": "Aminoácido a partir de 2-oxoácido: 1) C=O + NH3 → C=NH; 2) redução → CH–NH2. Redutor aquiral dá racemato."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 22",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: Alanine",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Alanine"
      }
    ]
  },
  {
    "id": "qui-1119",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 22, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 22. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Na síntese de Gabriel, um haleto de alquila primário reage por SN2 com a ftalimida de potássio e, depois, a hidrazina (N2H4) libera a amina primária. Considere esta sequência: (1) ftalimida de potássio + 5-cloropent-1-ino (HC≡C–CH2–CH2–CH2–Cl) → A; (2) acoplamento de Sonogashira (catalisador de Pd) de A com iodobenzeno, C6H5–I → B; (3) N2H4 → amina C, de fórmula molecular C11H13N. Qual é a estrutura de C?",
    "alternativas": [
      "C6H5–C≡C–CH2–CH2–CH2–NH2",
      "HC≡C–CH2–CH2–CH2–NH2",
      "C6H5–CH=CH–CH2–CH2–CH2–NH2",
      "A ftalimida B, ainda ligada ao nitrogênio, N-(5-fenilpent-4-in-1-il)ftalimida (C19H15NO2).",
      "C6H5–C≡C–CH2–CH(NH2)–CH3"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "O nitrogênio entra no carbono primário que tinha o Cl (SN2); o acoplamento de Sonogashira coloca o fenil no alcino terminal; a hidrazina remove o grupo ftaloíla. C = C6H5–C≡C–CH2–CH2–CH2–NH2 (C11H13N).",
      "detalhada": "A resolução segue a solução oficial do problema 22 (item 22.1).\n\n**A:** o ânion da ftalimida substitui o Cl do carbono primário (SN2): ftalimida–CH2–CH2–CH2–C≡CH.\n\n**B:** no acoplamento de Sonogashira, o H do alcino terminal é trocado pelo grupo fenil do iodobenzeno: ftalimida–CH2–CH2–CH2–C≡C–C6H5.\n\n**C:** a hidrazina quebra a ftalimida e libera a amina primária: **H2N–CH2–CH2–CH2–C≡C–C6H5** (5-fenilpent-4-in-1-amina).\n\n**Conferência da fórmula:** carbonos: 6 (anel) + 2 (C≡C) + 3 (CH2) = 11; hidrogênios: 5 (anel) + 6 (3 CH2) + 2 (NH2) = 13; um N: C11H13N.",
      "alternativas": [
        "Correta. Amina primária terminal e alcino com fenil; fórmula C11H13N.",
        "Errada. Faltou o fenil do acoplamento de Sonogashira. Essa amina é C5H9N, não C11H13N.",
        "Errada. É um alceno (C11H15N), com dois H a mais. A Sonogashira mantém a tripla ligação.",
        "Errada. É o composto B: a hidrazina ainda não agiu. B tem fórmula C19H15NO2, e não C11H13N.",
        "Errada. É um isômero com mesma fórmula, mas o nitrogênio estaria num carbono secundário. Na síntese de Gabriel, o N entra no carbono primário ligado ao Cl, no fim da cadeia."
      ],
      "dica": "Gabriel: R–CH2–X (primário) + ftalimida⁻ → R–CH2–N(ftalimida) → (N2H4) → R–CH2–NH2."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 22",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1120",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 24, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 24. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "A síntese da epinefrina (adrenalina) começa com o catecol (benzeno-1,2-diol). Na primeira etapa, ele reage com cloreto de cloroacetila, ClCH2–CO–Cl, na presença de AlCl3, formando o composto A. Qual é o produto A?",
    "alternativas": [
      "Cloroacetato de 2-hidroxifenila (éster, formado no oxigênio).",
      "4-clorobenzeno-1,2-diol (cloração do anel).",
      "4-(2-cloroetil)benzeno-1,2-diol (alquilação do anel, sem C=O).",
      "2-cloro-1-(2,3-di-hidroxifenil)etan-1-ona (acilação no carbono vizinho de um OH).",
      "2-cloro-1-(3,4-di-hidroxifenil)etan-1-ona (acilação de Friedel–Crafts no anel)."
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "Com AlCl3 ocorre acilação de Friedel–Crafts: o grupo ClCH2–CO– liga-se ao anel (posição 4, para em relação a um OH), dando 2-cloro-1-(3,4-di-hidroxifenil)etan-1-ona.",
      "detalhada": "A resolução segue a solução oficial do problema 24 (item 24.1).\n\nCloreto de acila + ácido de Lewis (AlCl3) + anel aromático ativado: **acilação de Friedel–Crafts**. O ClCH2–C⁺=O ataca o anel do catecol, e o H do anel é substituído. Os grupos OH são ativadores orto/para; a posição 4 (para em relação ao OH do C1, e menos impedida que a 3) é a favorecida, e a cetona resultante é o 3,4-di-hidroxifenil: **(HO)2C6H3–CO–CH2Cl**, isto é, 2-cloro-1-(3,4-di-hidroxifenil)etan-1-ona.\n\nNa sequência, A reage com uma amina (SN2 no CH2Cl), a cetona é reduzida com NaBH4 a álcool e a última etapa, com H2/Pd, leva à epinefrina (o texto oficial não detalha o grupo removido nessa etapa).",
      "alternativas": [
        "Errada. A O-acilação daria um éster, mas com AlCl3 (catalisador de Friedel–Crafts) o ataque é ao anel (substituição aromática), e o produto é uma cetona aromática.",
        "Errada. Não há fonte de Cl⁺ nesta reação: o cloreto de cloroacetila acila o anel, e o cloro permanece no CH2.",
        "Errada. A alquilação exigiria um haleto de alquila, e o produto manteria o CH2 sem o C=O. Aqui o reagente é um cloreto de acila e o produto é cetona.",
        "Errada. A posição 3 é vizinha de um OH e mais impedida; o grupo acila entra na posição 4 (para em relação a um OH), o que dá o 3,4-di-hidroxi.",
        "Correta. Acilação no anel, na posição 4: a cetona aromática é o ponto de partida para a epinefrina."
      ],
      "dica": "ArH + RCOCl + AlCl3 → ArCOR (cetona aromática). O C=O fica ligado ao anel."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 24",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: Epinephrine",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Epinephrine"
      }
    ]
  },
  {
    "id": "qui-1121",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 24, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 24. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "A síntese da epinefrina descrita no problema dá uma mistura racêmica, mas o organismo produz apenas o enantiômero (R). Para isolar o (R), trata-se o racemato com ácido L-(+)-tartárico (enantiomericamente puro) e depois com NH3. Como funciona essa resolução quiral?",
    "alternativas": [
      "Os enantiômeros têm solubilidades diferentes em água; o ácido tartárico serve só como solvente.",
      "A epinefrina (uma base) forma com o ácido tartárico dois sais diastereoisoméricos, de solubilidades diferentes, separados por cristalização; depois o NH3 libera a epinefrina (R) do sal.",
      "O ácido tartárico reage só com o enantiômero (S) e o destrói, deixando o (R).",
      "O ácido tartárico converte o enantiômero (S) em (R) por racemização inversa.",
      "Os enantiômeros têm pontos de ebulição diferentes e são separados por destilação fracionada após a adição do ácido."
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "O ácido L-tartárico puro forma sais diastereoisoméricos com os dois enantiômeros da base. Diastereoisômeros têm propriedades físicas diferentes e podem ser separados por cristalização; a base (NH3) libera depois a epinefrina (R).",
      "detalhada": "A resolução segue a solução oficial do problema 24 (item 24.2).\n\nEnantiômeros têm as mesmas propriedades físicas (solubilidade, ponto de fusão) em meio aquiral, então não se separam por métodos comuns. A solução é transformá-los em diastereoisômeros:\n\n1. A epinefrina é uma base (tem amina). Ela reage com o ácido L-(+)-tartárico, que é enantiomericamente puro, e forma dois sais: (R)-epinefrina·L-tartarato e (S)-epinefrina·L-tartarato. Eles são **diastereoisômeros**.\n2. Diastereoisômeros têm solubilidades diferentes: um cristaliza primeiro e pode ser filtrado.\n3. Adicionando uma base (NH3), o sal do (R) volta a amina livre: obtém-se **(R)-epinefrina**.",
      "alternativas": [
        "Errada. Enantiômeros têm solubilidades iguais em solvente aquiral como a água; é por isso que a resolução exige formar diastereoisômeros.",
        "Correta. Sais diastereoisoméricos separados por cristalização; NH3 libera a base.",
        "Errada. O ácido tartárico forma sais com os dois enantiômeros, não destrói nenhum.",
        "Errada. O ácido tartárico não interconverte enantiômeros: uma resolução separa, não converte (nesse processo, o rendimento do (R) é, no máximo, de 50%).",
        "Errada. Enantiômeros têm o mesmo ponto de ebulição, então a destilação não os separa; a diferença só aparece nos sais diastereoisoméricos."
      ],
      "dica": "Resolução de racemato: reagir com agente quiral puro → diastereoisômeros (propriedades diferentes) → separar → liberar."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 24",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: Epinephrine",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Epinephrine"
      }
    ]
  },
  {
    "id": "qui-1122",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 24, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 24. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Na síntese em fase sólida de um análogo da anandamida, um ácido carboxílico é ligado ao grupo –CH2OH de uma resina (o suporte sólido), formando um éster, com DIC (diisopropilcarbodiimida, (CH3)2CH–N=C=N–CH(CH3)2) e DMAP (4-dimetilaminopiridina). Quais são os papéis de DIC e de DMAP, respectivamente?",
    "alternativas": [
      "DIC: base; DMAP: reagente de acoplamento.",
      "DIC: catalisador; DMAP: reagente de acoplamento.",
      "DIC: solvente; DMAP: ácido.",
      "DIC: reagente de acoplamento; DMAP: base e catalisador.",
      "DIC: ácido e catalisador; DMAP: solvente."
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "O DIC é o reagente de acoplamento (ativa o ácido e retira a água, como o DCC); o DMAP é uma base orgânica e atua como catalisador nucleofílico da esterificação.",
      "detalhada": "A resolução segue a solução oficial do problema 24 (itens 24.3 e 24.4).\n\n- **DIC:** carbodiimida, ativa o grupo –COOH (forma um intermediário reativo) e leva a água embora como diisopropilureia: **reagente de acoplamento**.\n- **DMAP:** a piridina com o grupo –N(CH3)2 é mais básica que a piridina e é um excelente catalisador nucleofílico de acilação. Ela ataca o intermediário ativado, formando um acil-piridínio muito reativo, que o álcool da resina ataca. Ao final, o DMAP se regenera: **base e catalisador**.",
      "alternativas": [
        "Errada. Inverte os papéis: o DIC não é base, e o DMAP não é o reagente de acoplamento (ele não é consumido).",
        "Errada. O DIC é consumido na reação (vira ureia), então não é catalisador; o DMAP não é o reagente de acoplamento.",
        "Errada. Nenhum deles é solvente nem ácido: o DMAP é uma base.",
        "Correta. DIC = reagente de acoplamento; DMAP = base e catalisador.",
        "Errada. O DIC não é ácido nem catalisador, e o DMAP é usado em quantidade catalítica, não como solvente."
      ],
      "dica": "Esterificação de Steglich: carbodiimida (DCC ou DIC) como acoplante e DMAP como catalisador."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 24",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1123",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 26, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 26. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Na síntese da (+)-cassaína, o β-cetoéster MeO–CO–CH2–CO–C(CH3)2–CH=CH–SnMe3 é alquilado por um cloreto alílico: o carbono entre as duas carbonilas é desprotonado por carbonato de césio (Cs2CO3), e o ânion formado (enolato) ataca o cloreto, com iodeto de césio (CsI) presente, na presença do éter de coroa 18-coroa-6 (18-C-6). Qual é o papel do 18-coroa-6?",
    "alternativas": [
      "Agente redutor, que fornece hidreto ao substrato.",
      "Ácido de Lewis, que ativa o haleto de alquila.",
      "Solvente prótico polar que solvata o ânion.",
      "Agente oxidante do iodeto a iodo.",
      "Ligante do cátion Cs⁺: deixa o ânion \"nu\", sem par iônico, e portanto mais nucleofílico."
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "O éter de coroa envolve o cátion Cs⁺, separando-o do ânion; o ânion fica \"nu\" e muito mais nucleofílico e reativo.",
      "detalhada": "A resolução segue a solução oficial do problema 26 (item 26.3).\n\nO 18-coroa-6 tem uma cavidade de tamanho adequado para complexar cátions grandes, como o Cs⁺, pelos 6 oxigênios do anel. Com o cátion \"escondido\" dentro da coroa, o ânion (aqui, o enolato do β-cetoéster, gerado pelo carbonato) deixa de formar par iônico forte com ele e fica livre, **\"nu\"**. Um ânion desse tipo é mais nucleofílico, e a substituição ocorre mais rápida e mais completa.",
      "alternativas": [
        "Errada. O éter de coroa não tem hidreto nem outro grupo redutor: é só um poliéter cíclico.",
        "Errada. Ele não é ácido de Lewis do substrato; atua sobre o cátion do sal.",
        "Errada. O 18-coroa-6 não é um solvente prótico e não \"solvata\" o ânion; ele se liga ao cátion.",
        "Errada. Não oxida: o éter de coroa é inerte do ponto de vista redox.",
        "Correta. Complexa o Cs⁺ e libera o ânion nucleofílico."
      ],
      "dica": "Éteres de coroa: 18-C-6 captura K⁺ (e Cs⁺); 15-C-5, o Na⁺; 12-C-4, o Li⁺. O ânion fica mais reativo."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 26",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: 18-Crown-6",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/18-Crown-6"
      }
    ]
  },
  {
    "id": "qui-1124",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 28, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 28. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Quatro polimerizações: (a) ácido 6-aminoexanoico, H2N–(CH2)5–COOH, aquecido, que dá uma poliamida (náilon-6); (b) ε-caprolactona (lactona de 7 membros) com Sn(OR)2, que dá um poliéster; (c) 4,4'-oxidianilina + dianidrido piromelítico, que dá uma poli-imida; (d) estireno + peróxido de benzoíla com aquecimento, que dá o poliestireno. Critério: no crescimento em etapas, quaisquer duas moléculas com grupos funcionais complementares podem reagir (em geral com perda de molécula pequena); no crescimento em cadeia, o monômero se adiciona a uma extremidade ativa da cadeia (radical, íon ou complexo metálico), inclusive na abertura de anel. Qual alternativa classifica corretamente cada uma?",
    "alternativas": [
      "(a) etapas; (b) cadeia; (c) etapas; (d) cadeia.",
      "(a) etapas; (b) etapas; (c) etapas; (d) cadeia.",
      "(a) etapas; (b) cadeia; (c) cadeia; (d) cadeia.",
      "(a) cadeia; (b) cadeia; (c) etapas; (d) etapas.",
      "(a) cadeia; (b) etapas; (c) cadeia; (d) etapas."
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "Em (a) e (c), grupos funcionais diferentes reagem entre si e a cadeia cresce por etapas; em (b) (abertura de anel) e (d) (radicais), a cadeia cresce por adição de monômero a uma extremidade ativa.",
      "detalhada": "A resolução segue a solução oficial do problema 28 (item 28.1).\n\n- **(a) Etapas.** Amino e ácido reagem entre si, liberando H2O (policondensação). Qualquer par de moléculas pode reagir: cadeias de qualquer tamanho se juntam.\n- **(b) Cadeia.** O Sn(OR)2 inicia a abertura do anel da lactona; cada monômero se adiciona ao fim de uma cadeia em crescimento (polimerização por abertura de anel).\n- **(c) Etapas.** Diamina + dianidrido formam imidas com perda de água (policondensação).\n- **(d) Cadeia.** O peróxido gera radicais, que adicionam estireno um a um à extremidade radicalar (polimerização radicalar em cadeia).",
      "alternativas": [
        "Correta. (a) e (c) são policondensações; (b) e (d), polimerizações em cadeia.",
        "Errada. Trata a abertura de anel (b) como etapas; ela é uma polimerização em cadeia, em que o monômero só se adiciona à extremidade ativa.",
        "Errada. (c) é formada por reação entre grupos funcionais de dois monômeros diferentes, com perda de água: é crescimento em etapas.",
        "Errada. Inverte (a) e (d): (a) é policondensação (etapas) e (d) é radicalar em cadeia; (b) e (c) estão certas.",
        "Errada. Inverte os quatro casos: (a) e (c) são de etapas, e (b) e (d) são em cadeia."
      ],
      "dica": "Etapas: perda de molécula pequena (H2O) e qualquer par de grupos reage. Cadeia: iniciador e extremidade ativa (radical, íon, catalisador)."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 28",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1125",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 28, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 28. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Você tem uma mistura de três poliestirenos com arquiteturas diferentes (linear, cíclico e enxertado) que, apesar disso, têm exatamente a mesma massa molar média numérica (Mn) e a mesma média ponderal (Mw). Na cromatografia de permeação em gel (GPC), que separa as moléculas pelo tamanho hidrodinâmico em solução, o que a solução oficial prevê para a ordem de eluição do polímero linear em relação ao cíclico?",
    "alternativas": [
      "Um único pico, pois Mn e Mw iguais implicam o mesmo tempo de eluição.",
      "O cíclico elui antes do linear.",
      "O linear elui depois do cíclico, pois o novelo estatístico é o mais compacto.",
      "Um único pico, pois os três são poliestireno e a GPC separa pela polaridade.",
      "Eluem em tempos diferentes: o linear (novelo maior) sai antes do cíclico, que é mais compacto."
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "A GPC separa pelo tamanho em solução, não só pela massa. O polímero cíclico é o mais compacto, penetra mais nos poros e elui depois; o linear, em novelo estatístico, elui antes dele.",
      "detalhada": "A resolução segue a solução oficial do problema 28 (item 28.2).\n\nA GPC (ou SEC) tem uma coluna cheia de partículas porosas. Moléculas grandes (maior raio hidrodinâmico) não entram nos poros e saem primeiro; as pequenas percorrem mais volume de poro e saem depois. O tamanho acompanha a massa molar, mas também a forma.\n\nPara a mesma Mn e Mw:\n\n- o **linear** forma um novelo estatístico, relativamente grande: elui **antes**;\n- o **cíclico** não tem extremidades e se dobra de modo mais compacto: elui **depois** do linear (a solução oficial o dá como o que elui por último).\n\nPortanto, as arquiteturas eluem em tempos diferentes, apesar das mesmas massas molares médias.",
      "alternativas": [
        "Errada. A GPC não mede massa e sim tamanho hidrodinâmico; arquiteturas diferentes têm tamanhos diferentes e portanto tempos de eluição diferentes.",
        "Errada. Inverte a ordem: o polímero compacto (cíclico) penetra mais nos poros e sai depois do linear.",
        "Errada. O novelo do linear é maior que o do cíclico, e por isso ele elui antes, e não depois.",
        "Errada. O mecanismo da GPC é a exclusão por tamanho, não a polaridade; e arquiteturas diferentes têm tamanhos diferentes.",
        "Correta. Maior tamanho em solução, menor volume de eluição; o cíclico é mais compacto e sai depois do linear."
      ],
      "dica": "GPC: maior tamanho hidrodinâmico elui primeiro. Mesmo Mn e Mw não garantem o mesmo tamanho se a forma muda."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 28",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1126",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 29, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 29. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Para funcionalizar o PVC, parte dos átomos de Cl é trocada por grupos azida (N3) e o PVC parcialmente azidado (Mn = 70 800 g/mol) reage, por cicloadição azida–alcino catalisada por Cu(I) (\"química click\"), com poli(dimetilsiloxano) com um grupo propargila na ponta (Mn = 640 g/mol). Nessa reação cada cadeia de PDMS se liga a uma azida do PVC, sem perda de massa. O produto purificado P2 tem Mn = 192 400 g/mol. Em média, quantas cadeias laterais de PDMS há por molécula de PVC no P2?",
    "alternativas": [
      "1,7",
      "111",
      "190",
      "295",
      "301"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "A massa que o PVC ganhou foi 192 400 − 70 800 = 121 600 g/mol; dividida por 640 g/mol por cadeia de PDMS, dá 190 cadeias por molécula.",
      "detalhada": "A resolução segue a solução oficial do problema 29 (item 29.3).\n\nComo a cicloadição não elimina nada, a massa do P2 é a do PVC azidado mais a das cadeias de PDMS ligadas:\n\nMn(P2) = Mn(PVC azidado) + n × 640\n\nn = (192 400 − 70 800)/640 = 121 600/640 = **190**.",
      "alternativas": [
        "Errada. É (192 400 − 70 800)/70 800: compara o ganho de massa com a massa do PVC, sem dividir pela massa de cada cadeia de PDMS (640 g/mol).",
        "Errada. É 70 800/640: compara a massa do próprio PVC com a do PDMS, em vez da massa ganha.",
        "Correta. (192 400 − 70 800)/640 = 190.",
        "Errada. Desconta 3 950 g/mol (a Mn da mistura da reação), valor que não é a massa do PVC azidado.",
        "Errada. É 192 400/640: não desconta a massa do PVC de partida."
      ],
      "dica": "Na química click não sai massa. Número de cadeias enxertadas = ganho de massa / massa de cada cadeia."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 29",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1127",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 29, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 29. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Na funcionalização do PVC (Mn = 192 400 g/mol após a reação), cada molécula do produto P2 carrega, em média, 190 cadeias de PDMS propargílico (640 g/mol cada). A mistura no fim da reação continha P2 e o excesso do PDMS que sobrou, e a Mn da mistura toda, medida por GPC, foi 3 950 g/mol. Qual foi o excesso de PDMS adicionado, em mol% em relação à quantidade necessária para reagir com o PVC azidado?",
    "alternativas": [
      "3%",
      "30%",
      "57%",
      "190%",
      "300%"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Para cada molécula de P2 há x cadeias livres de PDMS: (192 400 + 640x)/(1 + x) = 3 950, que dá x ≈ 56,9. Em relação às 190 cadeias consumidas por molécula, o excesso é 56,9/190 ≈ 30%.",
      "detalhada": "A resolução segue a solução oficial do problema 29 (item 29.4).\n\n**1) Média numérica:** seja 1 molécula de P2 (192 400 g/mol) para cada x moléculas de PDMS livre (640 g/mol). Mn = massa total / número de moléculas:\n\n(192 400 + 640x)/(1 + x) = 3 950\n\n**2) Resolvendo:** 192 400 + 640x = 3 950 + 3 950x, logo 188 450 = 3 310x e x ≈ 56,9.\n\n**3) Excesso:** são 56,9 cadeias livres por molécula de P2, que consumiu 190 cadeias. O excesso é 56,9/190 ≈ 0,30 = **30%**.",
      "alternativas": [
        "Errada. É erro de potência de dez ao dividir 56,9 por 190 (resultado correto: ≈0,30, ou seja, 30%).",
        "Correta. 56,9 cadeias livres para cada 190 consumidas: ≈30% de excesso.",
        "Errada. 56,9 é o número de cadeias livres por molécula de P2; falta dividir pelas 190 cadeias consumidas para ter a porcentagem.",
        "Errada. 190 é o número de cadeias por molécula de P2, não uma porcentagem de excesso.",
        "Errada. É 192 400/640 ≈ 301, a razão entre massas de P2 e de PDMS, que não tem relação com a quantidade em excesso."
      ],
      "dica": "Mn de mistura = massa total / mols totais de moléculas. Monte a média ponderada pelo número de moléculas e resolva para x."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 29",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1128",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 30, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 30. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Para fazer um poliuretano reticulado se usa hexametileno-diisocianato (HDI, OCN–(CH2)6–NCO), poli(etilenoglicol) (HO–(CH2CH2O)n–H, Mn = 500 g/mol) e um poliol reticulante \"caseiro\". Para saber quantos grupos –OH ele tem por molécula, acetilam-se todos os –OH com anidrido acético: cada –OH vira –O–CO–CH3, o que aumenta a massa em 42,036 g/mol por grupo. Por GPC: poliol original, Mn = 1 240 g/mol e Mw = 2 232 g/mol; poliol acetilado, Mn = 1 383 g/mol e Mw = 2 531 g/mol. Quantos grupos –OH, em média, há em cada molécula do poliol?",
    "alternativas": [
      "1,4",
      "2,4",
      "3,4",
      "7,1",
      "8,7"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "Cada –OH acetilado soma 42,036 g/mol à massa média numérica: (1 383 − 1 240)/42,036 ≈ 3,4 grupos –OH por molécula.",
      "detalhada": "A resolução segue a solução oficial do problema 30 (item 30.1).\n\nA Mn conta moléculas: é a massa média por molécula. Se cada molécula tem, em média, n grupos –OH e cada um ganha 42,036 g/mol ao ser acetilado, então Mn(acetilado) − Mn(original) = n × 42,036.\n\nn = (1 383 − 1 240)/42,036 = 143/42,036 ≈ **3,4**.\n\nÉ um valor médio (por isso fracionário): há moléculas com mais e com menos grupos –OH.",
      "alternativas": [
        "Errada. Resulta de dividir 143 pela massa do anidrido acético (102 g/mol), mas o ganho de massa por –OH é o do grupo acetila menos H, 42,036 g/mol.",
        "Errada. Resulta de dividir 143 por 60, a massa do ácido acético, que não é o ganho de massa por grupo.",
        "Correta. 143/42,036 ≈ 3,4.",
        "Errada. Usa a massa média ponderal (Mw): (2 531 − 2 232)/42,036 ≈ 7,1. Para contar moléculas e grupos por molécula, usa-se Mn.",
        "Errada. É 1 240/143, a razão inversa que não tem significado de contagem de grupos."
      ],
      "dica": "Mn conta moléculas; Mw pesa as maiores. Para contagem de grupos por molécula use a variação em Mn."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 30",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1129",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 30, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 30. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Para a síntese do poliuretano mistura-se 1,6820 g de HDI (M = 168,196 g/mol), 4,0000 g de poli(etilenoglicol) (Mn = 500 g/mol, 2 grupos –OH por molécula) e o poliol reticulante (Mn = 1 240 g/mol, em média 3,4 grupos –OH por molécula) na quantidade necessária para igualar o número de grupos –OH e de grupos –NCO. Qual é a massa do poliol reticulante?",
    "alternativas": [
      "1,46 g",
      "2,63 g",
      "4,38 g",
      "4,96 g",
      "7,29 g"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "Há 0,0200 mol de –NCO e 0,0160 mol de –OH do PEG; faltam 0,0040 mol de –OH, que correspondem a 0,0040/3,4 mol de poliol, ou 1,46 g.",
      "detalhada": "A resolução segue a solução oficial do problema 30 (item 30.2).\n\n**1) Grupos –NCO:** n(HDI) = 1,6820/168,196 = 0,01000 mol; cada HDI tem 2 –NCO: 0,02000 mol.\n\n**2) –OH do PEG:** n(PEG) = 4,0000/500 = 0,008 mol; 2 –OH cada: 0,016 mol.\n\n**3) –OH que faltam:** 0,0200 − 0,0160 = 0,0040 mol.\n\n**4) Poliol:** 0,0040 mol de –OH / 3,4 –OH por molécula = 1,18×10⁻³ mol; massa = 1,18×10⁻³ × 1 240 = **1,46 g**.",
      "alternativas": [
        "Correta. (0,0200 − 0,0160)/3,4 × 1 240 = 1,46 g.",
        "Errada. Usa Mw (2 232 g/mol) em vez de Mn para converter mols em massa, mas a massa média numérica é a que corresponde aos mols de moléculas.",
        "Errada. Considera só 1 grupo –OH por molécula de PEG (0,008 mol de –OH) em vez de 2.",
        "Errada. Ignora que cada molécula do poliol tem 3,4 –OH: trata 0,0040 mol de –OH como 0,0040 mol de moléculas.",
        "Errada. Ignora o PEG e supõe que todos os 0,0200 mol de –OH vêm do poliol."
      ],
      "dica": "Equilíbrio estequiométrico: mols de –OH = mols de –NCO. Some os grupos, não as moléculas."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 30",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1130",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 30, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 30. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Na reação ~~~NCO + HO~~~ → ~~~NHCOO~~~ entre HDI (0,0100 mol), PEG (0,0080 mol) e poliol (0,00118 mol), com 0,0200 mol de –NCO e 0,0200 mol de –OH no total, cada ligação uretana formada junta duas moléculas e diminui em um o número de moléculas. Após 3 h, uma amostra tem Mn = 1 227 g/mol. A massa total da mistura é 7,141 g (1,6820 g de HDI, 4,0000 g de PEG e 1,459 g de poliol). Qual é a conversão (fração de –NCO que reagiu) após 3 h?",
    "alternativas": [
      "29%",
      "33,2%",
      "66,8%",
      "69,7%",
      "95,9%"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "O número de moléculas caiu de 0,01918 mol (inicial) para 7,141/1 227 = 0,00582 mol; a diferença, 0,01336 mol, é o número de ligações uretana formadas. Dividindo por 0,0200 mol de –NCO, a conversão é 66,8%.",
      "detalhada": "A resolução segue a solução oficial do problema 30 (item 30.3).\n\n**1) Moléculas no início:** 0,0100 + 0,0080 + 0,00118 ≈ 0,01918 mol.\n\n**2) Moléculas após 3 h:** Mn = massa total / número de moléculas, logo n = 7,141 g / 1 227 g/mol = 5,82×10⁻³ mol.\n\n**3) Ligações formadas:** cada uretana reduz em 1 o número de moléculas: 0,01918 − 0,00582 = 0,01336 mol de –NCO (e de –OH) que reagiram.\n\n**4) Conversão:** 0,01336/0,0200 = 0,668, ou seja, **66,8%**.",
      "alternativas": [
        "Errada. É n(3 h)/n(–NCO) = 0,00582/0,0200: fração de moléculas que sobram em relação aos –NCO, e não a conversão.",
        "Errada. É 100% − 66,8%: a fração de –NCO que ainda não reagiu.",
        "Correta. (0,01918 − 0,00582)/0,0200 = 66,8%.",
        "Errada. É (n₀ − n)/n₀: fração de moléculas perdidas em relação às moléculas iniciais, não em relação aos grupos –NCO.",
        "Errada. É a conversão do ponto de gel (n₀/0,0200 = 95,9%) e não a atingida em 3 h."
      ],
      "dica": "Em policondensação, cada ligação formada tira uma molécula do total: conversão = (n₀ − n)/(mols do grupo funcional)."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 30",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1131",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 1, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 1. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Um ácido dicarboxílico C, que contém só C, H e O, tem massa molar de 150 g/mol (determinada por titulação). Ele não desvia o plano da luz polarizada, embora tenha dois centros quirais (estereogênicos). Qual é o ácido C?",
    "alternativas": [
      "Ácido L-(+)-tartárico, (2R,3R)-2,3-di-hidroxibutanodioico.",
      "Ácido D-(−)-tartárico, (2S,3S)-2,3-di-hidroxibutanodioico.",
      "Ácido málico, HOOC–CH(OH)–CH2–COOH.",
      "Ácido ftálico, C6H4(COOH)2.",
      "Ácido meso-tartárico, (2R,3S)-2,3-di-hidroxibutanodioico."
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "M = 150 g/mol corresponde a C4H6O6, o ácido tartárico. Ser opticamente inativo com dois centros quirais exige a forma meso, (2R,3S).",
      "detalhada": "A resolução segue a solução oficial do problema 1 (item 1.10).\n\n**1) Fórmula:** um ácido dicarboxílico alifático de 150 g/mol com dois centros quirais é o ácido 2,3-di-hidroxibutanodioico (tartárico), C4H6O6: 4 × 12,011 + 6 × 1,008 + 6 × 15,999 = 150,09 g/mol.\n\n**2) Atividade óptica:** dos três estereoisômeros do tartárico, (2R,3R) e (2S,3S) são enantiômeros e desviam a luz; o (2R,3S) tem um plano de simetria interno, é o composto **meso** e é opticamente inativo.",
      "alternativas": [
        "Errada. Tem a massa certa, mas é um enantiômero puro, que desvia a luz polarizada.",
        "Errada. Também tem massa 150 g/mol, mas é o enantiômero do anterior e desvia a luz polarizada.",
        "Errada. O málico tem massa 134 g/mol e só um centro quiral (é ativo).",
        "Errada. O ftálico é aromático, tem 166 g/mol e nenhum centro quiral.",
        "Correta. Meso: dois centros quirais com plano de simetria interno; 150 g/mol; opticamente inativo."
      ],
      "dica": "Dois centros quirais + inatividade óptica + molécula simétrica = composto meso."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 1",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: Tartaric acid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Tartaric-acid"
      }
    ]
  },
  {
    "id": "qui-1132",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 2, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 2. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Na fabricação do vinagre de maçã, o ácido málico, C4H6O5, é fermentado a etanol e CO2; em seguida, o oxigênio do ar oxida o etanol a ácido acético (CH3COOH) e água. Qual é a equação química global balanceada da conversão do ácido málico em ácido acético?",
    "alternativas": [
      "C4H6O5 + O2 → CH3COOH + 2 CO2 + H2O",
      "C4H6O5 → CH3COOH + 2 CO2",
      "C4H6O5 + 2 O2 → CH3COOH + 2 CO2 + 2 H2O",
      "2 C4H6O5 + O2 → 2 CH3COOH + 4 CO2",
      "C4H6O5 + O2 → CH3COOH + CO2 + H2O"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "Somando C4H6O5 → C2H5OH + 2 CO2 e C2H5OH + O2 → CH3COOH + H2O, o etanol se cancela e resulta C4H6O5 + O2 → CH3COOH + 2 CO2 + H2O.",
      "detalhada": "A resolução segue a solução oficial do problema 2 (item 2.3).\n\n**Fermentação do ácido málico:** C4H6O5 → C2H5OH + 2 CO2.\n\n**Oxidação do etanol:** C2H5OH + O2 → CH3COOH + H2O.\n\n**Soma (o etanol aparece dos dois lados e se cancela):** C4H6O5 + O2 → CH3COOH + 2 CO2 + H2O.\n\n**Conferência:** C: 4 = 2 + 2; H: 6 = 4 + 2; O: 5 + 2 = 7 = 2 + 4 + 1.",
      "alternativas": [
        "Correta. Balanceada: 4 C, 6 H e 7 O de cada lado.",
        "Errada. Não balanceia: H (6 contra 4) e O (5 contra 6); falta o O2 e a água.",
        "Errada. O oxigênio e a água estão em excesso: do lado direito há 8 H, e do esquerdo só 6.",
        "Errada. Os átomos de C e O fecham, mas o H não: 12 H contra 8.",
        "Errada. Perde carbono: 4 C à esquerda e só 3 C à direita."
      ],
      "dica": "Equação global = soma das etapas; cancele o intermediário (aqui, o etanol) e confira C, H e O."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 2",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: Malic acid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Malic-acid"
      }
    ]
  },
  {
    "id": "qui-1133",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 4, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 4. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "A magnésia calcinada cáustica (MgO com um pouco de CaO e SiO2) é dissolvida em ácido clorídrico. Dados de entalpia padrão de formação (kJ/mol): MgO(s) = −602; CaO(s) = −636; Mg²⁺(aq) = −462; Ca²⁺(aq) = −543; H2O(l) = −286; H⁺(aq) = 0. Qual é a variação de entalpia padrão da reação MgO(s) + 2 H⁺(aq) → Mg²⁺(aq) + H2O(l)?",
    "alternativas": [
      "−193 kJ/mol",
      "−146 kJ/mol",
      "+140 kJ/mol",
      "+146 kJ/mol"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "ΔH = ΔfH(Mg²⁺) + ΔfH(H2O) − ΔfH(MgO) = −462 − 286 + 602 = −146 kJ/mol.",
      "detalhada": "A resolução segue a solução oficial do problema 4 (item 4.2).\n\nPela lei de Hess, ΔH = Σ ΔfH(produtos) − Σ ΔfH(reagentes):\n\nΔH = [(−462) + (−286)] − [(−602) + 2 × 0] = −748 + 602 = **−146 kJ/mol**.\n\nPara o CaO a mesma conta dá −543 − 286 + 636 = −193 kJ/mol.",
      "alternativas": [
        "Errada. É o valor da dissolução do CaO (−543 − 286 + 636), não do MgO.",
        "Correta. (−462 − 286) − (−602) = −146 kJ/mol.",
        "Errada. Esquece a água entre os produtos: ΔH = (−462) − (−602) = +140 kJ/mol, sem a contribuição de −286 kJ/mol da água.",
        "Errada. Inverte o sinal: usa reagentes − produtos."
      ],
      "dica": "ΔH = produtos − reagentes, e não esqueça nenhum produto (como a água)."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 4",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1134",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 6, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 6. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Modelo simples de nanopartículas: o monômero M1 (massa molar W) forma partículas Mi (com i unidades) em equilíbrios Mi + M1 ⇌ Mi+1, todos com a mesma constante K = [Mi+1]/([Mi][M1]). A concentração total de monômero (em unidades incorporadas) é T = 1 mol/dm³ e K = 10 dm³/mol. A massa molar média é a massa total dividida pela quantidade total de partículas, Σ[Mi]. Use Σ xⁿ = 1/(1 − x) e Σ (n + 1) xⁿ = 1/(1 − x)² (para |x| < 1, com x = K[M1]). Qual é a massa molar média das nanopartículas?",
    "alternativas": [
      "1,37 W",
      "3,70 W",
      "10 W",
      "11 W"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Com x = K[M1]: T = [M1]/(1 − x)² e Σ[Mi] = [M1]/(1 − x), logo M_média = W/(1 − x). A condição x/(1 − x)² = KT = 10 dá x = 0,730 e M_média ≈ 3,70 W.",
      "detalhada": "A resolução segue a solução oficial do problema 6 (item 6.1).\n\n**1) Concentrações:** para i ≥ 0, [M(i+1)] = K^i [M1]^(i+1), isto é, [M(i+1)] = [M1] x^i, com x = K[M1].\n\n**2) Partículas:** Σ[Mi] = [M1] Σ xⁱ = [M1]/(1 − x).\n\n**3) Monômero total:** T = Σ(i ≥ 0) (i + 1)[M(i+1)] = [M1] Σ(i ≥ 0) (i + 1) xⁱ = [M1]/(1 − x)².\n\n**4) Média:** M_média = W·T/Σ[Mi] = W/(1 − x).\n\n**5) Valor de x:** KT = x/(1 − x)², isto é, 10x² − 21x + 10 = 0, com raízes 0,730 e 1,370. Só vale x < 1, então x = 0,730 e M_média = W/0,270 ≈ **3,70 W**.",
      "alternativas": [
        "Errada. É o resultado da raiz x = 1,37 da equação do segundo grau, que não serve, pois a soma geométrica só converge para x < 1.",
        "Correta. x = 0,730 → M_média = W/(1 − 0,730) ≈ 3,70 W.",
        "Errada. É KT: confunde o produto K·T com a massa molar média.",
        "Errada. É 1 + KT, obtido ao supor [M1] ≈ T (sem consumo de monômero) e truncar 1/(1 − x) ≈ 1 + x; essa aproximação não vale aqui, pois x = 0,73 não é pequeno."
      ],
      "dica": "Em somas geométricas, só serve a raiz com |x| < 1; confira a condição de convergência."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 6",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1135",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 7, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 7. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Num reator adiabático de volume constante (1,00 m³), 50,0 mol de CO e 50,0 mol de O2 são colocados a 298 K e reagem: 2 CO + O2 → 2 CO2, com ΔH° = −566,0 kJ (por mol de reação), ou seja, ΔU° = −563,5 kJ. Gases ideais; Cp (J mol⁻¹ K⁻¹): CO 29,1; O2 29,4; CO2 37,1 (constantes); Cv = Cp − R com R = 8,314 J mol⁻¹ K⁻¹. Como o sistema é isolado, a energia interna total não varia. Qual é a temperatura quando 1,00 mol de CO2 já se formou?",
    "alternativas": [
      "135 K",
      "395 K",
      "433 K",
      "567 K"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "A energia liberada (0,5 × 563,5 kJ) aquece os gases: ΔT = 281 750 J / (Cv total) ≈ 135 K, e T ≈ 298 + 135 = 433 K.",
      "detalhada": "A resolução segue a solução oficial do problema 7.\n\n**1) Energia liberada por 1 mol de CO2:** como 2 CO2 se formam por reação, 1 mol de CO2 libera 563,5/2 = 281,75 kJ, que fica no sistema (isolado).\n\n**2) Mols presentes:** 1 CO2, 49 CO e 49,5 O2.\n\n**3) Capacidade calorífica a volume constante:** Cv(CO2) = 37,1 − 8,314 = 28,79; Cv(CO) = 29,1 − 8,314 = 20,79; Cv(O2) = 29,4 − 8,314 = 21,09. C = 1 × 28,79 + 49 × 20,79 + 49,5 × 21,09 ≈ 2091 J/K.\n\n**4) Temperatura:** ΔT = 281 750/2091 ≈ 134,7 K, logo T ≈ **433 K**.",
      "alternativas": [
        "Errada. É só o aumento de temperatura (ΔT ≈ 135 K); a pergunta pede a temperatura final.",
        "Errada. Usa Cp no lugar de Cv; em volume constante a capacidade calorífica correta é Cv = Cp − R.",
        "Correta. 298 K + 134,7 K ≈ 433 K.",
        "Errada. Usa o calor total de 1 reação por mol de CO2 (563,5 kJ), esquecendo que 1 mol de CO2 corresponde a meia reação."
      ],
      "dica": "Reator de volume constante e isolado: ΔU = 0; o calor da reação vai para a energia térmica (use Cv)."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 7",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1136",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 8, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 8. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "O dímero N2O4 tem ΔfH° = +9,16 kJ/mol no estado gasoso. A vaporização N2O4(l) → N2O4(g) tem ΔH = +22,96 kJ/mol. Qual é a entalpia padrão de formação do N2O4 líquido?",
    "alternativas": [
      "−32,1 kJ/mol",
      "−13,8 kJ/mol",
      "+9,2 kJ/mol",
      "+13,8 kJ/mol",
      "+32,1 kJ/mol"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "ΔfH(g) = ΔfH(l) + ΔvapH, logo ΔfH(l) = 9,16 − 22,96 = −13,8 kJ/mol.",
      "detalhada": "A resolução segue a solução oficial do problema 8 (item 8.5).\n\nFormar o líquido e depois vaporizar leva ao gás: N2 + 2 O2 → N2O4(l) → N2O4(g). Assim, ΔfH(g) = ΔfH(l) + ΔvapH.\n\nΔfH(l) = 9,16 − 22,96 = **−13,8 kJ/mol**. O líquido é mais estável (entalpia mais baixa) que o gás, como se espera.",
      "alternativas": [
        "Errada. É −9,16 − 22,96: sinais trocados.",
        "Correta. 9,16 − 22,96 = −13,8 kJ/mol.",
        "Errada. É o valor do gás, sem a correção da vaporização.",
        "Errada. É o valor correto com o sinal invertido (22,96 − 9,16).",
        "Errada. Soma 9,16 + 22,96, como se o líquido fosse mais energético que o gás."
      ],
      "dica": "O líquido tem entalpia menor que o gás: ΔfH(l) = ΔfH(g) − ΔvapH."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 8",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: Dinitrogen tetroxide",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Dinitrogen-tetroxide"
      }
    ]
  },
  {
    "id": "qui-1137",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 9, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 9. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "A atorvastatina inibe a enzima HMG-CoA redutase: a constante de dissociação do complexo enzima–inibidor, KI = [E][I]/[EI], vale 14 nM a 37 °C, e a entalpia padrão da associação E + I ⇌ EI vale −18,1 kJ/mol (independente da temperatura). Considere a constante de associação, K = 1/KI, e a equação de van't Hoff, ln(K2/K1) = −(ΔH/R)(1/T2 − 1/T1), com ΔH a entalpia da associação e R = 8,314 J mol⁻¹ K⁻¹. Qual é a constante de associação a 25 °C?",
    "alternativas": [
      "5,4×10⁻² nM⁻¹",
      "7,1×10⁻² nM⁻¹",
      "9,5×10⁻² nM⁻¹",
      "1,4×10¹ nM⁻¹",
      "9,5×10⁷ nM⁻¹"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "K(37 °C) = 1/14 = 0,0714 nM⁻¹. Como a ligação é exotérmica, K aumenta ao esfriar: K(25 °C) = 0,0714 × exp(0,2825) ≈ 0,0947 nM⁻¹.",
      "detalhada": "A resolução segue a solução oficial do problema 9 (item 9.4).\n\n**1) A 37 °C:** K = 1/KI = 1/(14 nM) = 0,0714 nM⁻¹.\n\n**2) Van't Hoff:** ln(K25/K37) = −(ΔH/R)(1/298,15 − 1/310,15) = (18 100/8,314)(1,298×10⁻⁴) = 0,2825.\n\n**3) Resultado:** K25 = 0,0714 × e^0,2825 ≈ **0,0947 nM⁻¹**.\n\nPara um processo exotérmico (ΔH < 0), o equilíbrio de associação é mais favorável a temperaturas menores.",
      "alternativas": [
        "Errada. Resulta do sinal trocado no expoente: K diminuiria ao esfriar, o que contraria o fato de a ligação ser exotérmica.",
        "Errada. É o valor a 37 °C, sem a correção de temperatura.",
        "Correta. K(25 °C) ≈ 0,0947 nM⁻¹.",
        "Errada. É o próprio KI (14 nM) tomado como constante de associação; a constante de associação é o inverso, 1/KI.",
        "Errada. Erro de unidade: 0,0947 nM⁻¹ = 9,5×10⁷ M⁻¹, não nM⁻¹."
      ],
      "dica": "Exotérmico: K sobe quando T cai. K de associação = 1/K de dissociação."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 9",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1138",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 10, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 10. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "No preparo de um suco, a berrina é oxidada pela moxona (2 berrina + moxona → diberrina). A velocidade da reação é v = −½·d[berrina]/dt = −d[moxona]/dt = k[berrina][moxona], com k = 4,61 dm³ mol⁻¹ h⁻¹ a 108 °C. O suco fica intragável quando 75% da berrina é consumida. A energia de ativação é 58,60 kJ/mol (R = 8,314 J mol⁻¹ K⁻¹). Num lote cozido a 120 °C, com moxona em grande excesso a 0,22 mol/dm³, após quanto tempo o suco fica intragável?",
    "alternativas": [
      "23 min",
      "41 min",
      "47 min",
      "72 min",
      "90 min"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "Arrhenius dá k(120 °C) ≈ 8,11 dm³ mol⁻¹ h⁻¹; a berrina cai com 2k[moxona] = 3,57 h⁻¹, e t = ln 4/3,57 ≈ 0,39 h ≈ 23 min.",
      "detalhada": "A resolução segue a solução oficial do problema 10 (item 10.5).\n\n**1) k a 120 °C:** ln(k2/k1) = (Ea/R)(1/T1 − 1/T2) = (58 600/8,314)(1/381,15 − 1/393,15) = 0,5646, logo k2 = 4,61 × 1,759 ≈ 8,11 dm³ mol⁻¹ h⁻¹.\n\n**2) Constante de consumo da berrina:** 2 × 8,11 × 0,22 = 3,57 h⁻¹ (o fator 2 vem da estequiometria).\n\n**3) Tempo:** ln 4 / 3,57 = 0,389 h ≈ **23 min**.",
      "alternativas": [
        "Correta. ≈ 23 min.",
        "Errada. É o tempo calculado com k a 108 °C (4,61), sem corrigir para 120 °C.",
        "Errada. Esquece o fator 2 da estequiometria (usa k[moxona] no lugar de 2k[moxona]).",
        "Errada. Resulta de inverter o sinal da correção de temperatura (k diminuiria ao aquecer).",
        "Errada. É o tempo a 108 °C com 0,100 mol/dm³ de moxona, e não o caso do enunciado."
      ],
      "dica": "Temperatura maior, k maior, tempo menor. Corrija k por Arrhenius antes de calcular o tempo."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 10",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1139",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 12, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 12. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "O cristal violeta (CV⁺) reage com hidróxido formando um carbinol incolor: CV⁺ + OH⁻ → CVOH, com v = k[CV⁺][OH⁻] e k = 7,77 dm³ mol⁻¹ min⁻¹ a 30 °C. Misturam-se 5 cm³ de CV 1,82×10⁻⁵ mol/dm³ com 5 cm³ de NaOH 0,16 mol/dm³ (volumes aditivos). Qual é, aproximadamente, a concentração de CV⁺ depois de 6 min?",
    "alternativas": [
      "5,2×10⁻⁹ mol/dm³",
      "2,2×10⁻⁷ mol/dm³",
      "4,4×10⁻⁷ mol/dm³",
      "8,6×10⁻⁶ mol/dm³"
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "Na mistura, [CV⁺]0 = 9,10×10⁻⁶ e [OH⁻] = 0,080 mol/dm³ (excesso enorme); a reação é de pseudoprimeira ordem com kobs = 0,622 min⁻¹ e [CV⁺] = 9,10×10⁻⁶ e^(−0,622 × 6) ≈ 2,2×10⁻⁷ mol/dm³.",
      "detalhada": "A resolução segue a solução oficial do problema 12 (itens 12.1 a 12.4).\n\n**1) Concentrações após a mistura (volume dobra):** [CV⁺]0 = 9,10×10⁻⁶ mol/dm³; [OH⁻] = 0,080 mol/dm³ (excesso de cerca de 8800 vezes).\n\n**2) Pseudoprimeira ordem:** kobs = k[OH⁻] = 7,77 × 0,080 = 0,622 min⁻¹.\n\n**3) Concentração em 6 min:** [CV⁺] = 9,10×10⁻⁶ × e^(−0,622 × 6) = 9,10×10⁻⁶ × 0,0240 ≈ **2,2×10⁻⁷ mol/dm³**.",
      "alternativas": [
        "Errada. Usa a concentração de NaOH antes da mistura (0,16 mol/dm³) em vez de 0,080 mol/dm³.",
        "Correta. e^(−3,73) = 0,024; 9,10×10⁻⁶ × 0,024 ≈ 2,2×10⁻⁷ mol/dm³.",
        "Errada. Parte de [CV⁺]0 = 1,82×10⁻⁵, sem considerar que a diluição pela mistura divide a concentração por 2.",
        "Errada. Usa 6 s no lugar de 6 min no expoente."
      ],
      "dica": "Depois da mistura, divida as concentrações pela razão dos volumes antes de calcular kobs."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 12",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1140",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 12, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 12. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "A constante de velocidade da reação CV⁺ + OH⁻ → CVOH vale 7,77 dm³ mol⁻¹ min⁻¹ a 30 °C e 22,78 dm³ mol⁻¹ min⁻¹ a 45 °C. Admitindo a lei de Arrhenius, qual é a energia de ativação? (R = 8,314 J mol⁻¹ K⁻¹)",
    "alternativas": [
      "0,8 kJ/mol",
      "6,9 kJ/mol",
      "25,0 kJ/mol",
      "57,5 kJ/mol",
      "132 kJ/mol"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "ln(22,78/7,77) = (Ea/R)(1/303,15 − 1/318,15) dá Ea/R ≈ 6916 K e Ea ≈ 57,5 kJ/mol.",
      "detalhada": "A resolução segue a solução oficial do problema 12 (item 12.5).\n\nln(k2/k1) = (Ea/R)(1/T1 − 1/T2), com T1 = 303,15 K e T2 = 318,15 K.\n\nln(22,78/7,77) = 1,0756 e (1/303,15 − 1/318,15) = 1,555×10⁻⁴ K⁻¹. Logo Ea/R = 6916 K e Ea = 6916 × 8,314 ≈ 57 500 J/mol = **57,5 kJ/mol**.",
      "alternativas": [
        "Errada. Resulta de usar as temperaturas em °C no lugar de K.",
        "Errada. É Ea/R = 6916 K dividido por 1000, esquecendo de multiplicar por R.",
        "Errada. Usa log10 no lugar do logaritmo natural.",
        "Correta. Ea ≈ 57,5 kJ/mol.",
        "Errada. Multiplica o resultado correto por ln 10 sem necessidade."
      ],
      "dica": "Temperaturas sempre em kelvin; ln(k2/k1) = (Ea/R)(1/T1 − 1/T2)."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 12",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1141",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 13, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 13. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "O alumínio metálico forma uma rede cúbica de faces centradas (CFC, 4 átomos por célula unitária). A 213 GPa, a aresta da célula é 324,6 pm. Dados: M(Al) = 26,98 g/mol; NA = 6,022×10²³ mol⁻¹. Qual é a densidade do alumínio nessa pressão?",
    "alternativas": [
      "2,62 g/cm³",
      "2,71 g/cm³",
      "5,24 g/cm³",
      "5,70 g/cm³",
      "10,5 g/cm³"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "ρ = (4 × 26,98 g/mol)/(6,022×10²³ mol⁻¹ × (3,246×10⁻⁸ cm)³) ≈ 5,24 g/cm³.",
      "detalhada": "A resolução segue a solução oficial do problema 13 (item 13.1).\n\nMassa da célula: 4 × 26,98/6,022×10²³ = 1,792×10⁻²² g.\n\nVolume: (324,6 pm)³ = (3,246×10⁻⁸ cm)³ = 3,420×10⁻²³ cm³.\n\nρ = 1,792×10⁻²²/3,420×10⁻²³ ≈ **5,24 g/cm³** (o dobro da densidade ambiente, 2,71 g/cm³, o que é coerente com a alta pressão).",
      "alternativas": [
        "Errada. Resulta de contar só 2 átomos por célula (como na CCC).",
        "Errada. É a densidade do alumínio sob pressão ambiente (2,710 g/cm³).",
        "Correta. 4 átomos/célula e aresta de 324,6 pm dão 5,24 g/cm³.",
        "Errada. É a densidade da forma CCC (2 átomos por célula, aresta 250,5 pm), que surge acima de 310 GPa: outra fase.",
        "Errada. Resulta de contar 8 átomos por célula."
      ],
      "dica": "ρ = (Z·M)/(NA·a³); CFC tem Z = 4, CCC tem Z = 2."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 13",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1142",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 14, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 14. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Na calcopirita (CuFeS2), o ferro pode ser substituído por outro metal X, gerando minerais CuXS2. Dois deles têm 32,5% (A) e 26,5% (B) de enxofre em massa. Dados (g/mol): Cu 63,55; S 32,06; Al 26,98; Ga 69,72; In 114,8; Tl 204,4. Quais são A e B?",
    "alternativas": [
      "A = CuAlS2 e B = CuGaS2",
      "A = CuInS2 e B = CuGaS2",
      "A = CuAlS2 e B = CuInS2",
      "A = CuGaS2 e B = CuInS2",
      "A = CuGaS2 e B = CuTlS2"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "M(CuXS2) = 2 × 32,06/w(S): 197,3 g/mol (32,5%) e ≈ 242 g/mol (26,5%), o que dá M(X) ≈ 69,6 (Ga, tabelado 69,72) e ≈ 114,3 (In, tabelado 114,8).",
      "detalhada": "A resolução segue a solução oficial do problema 14 (item 14.1).\n\n**A:** M(CuXS2) = 2 × 32,06/0,325 = 197,3 g/mol; M(X) = 197,3 − 63,55 − 64,12 = 69,6 g/mol, que é o gálio (69,72): **CuGaS2**.\n\n**B:** M = 64,12/0,265 ≈ 242 g/mol; M(X) = 242 − 63,55 − 64,12 ≈ 114,3 g/mol, o índio (114,8): **CuInS2**.\n\nTeores de S dos candidatos: Al 41,5%; Ga 32,5%; In 26,4%; Tl 19,3%.",
      "alternativas": [
        "Errada. CuAlS2 teria 41,5% de S, e não 32,5%.",
        "Errada. Troca A e B: o menor teor de S corresponde ao metal mais pesado (In).",
        "Errada. CuAlS2 teria 41,5% de S, e não 32,5%.",
        "Correta. CuGaS2 (32,5% de S) e CuInS2 (26,4% ≈ 26,5%).",
        "Errada. CuTlS2 teria só 19,3% de S."
      ],
      "dica": "w(S) = 2·M(S)/M(composto). Quanto mais pesado X, menor o teor de enxofre."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 14",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1143",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 15, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 15. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "O berilo puro é incolor e contém só Si, O, Al e Be, formando um silicato eletricamente neutro (Be²⁺, Al³⁺, Si⁴⁺, O²⁻). Uma amostra de 0,2024 g contém 0,0635 g de Si e 0,0102 g de Be. Dados (g/mol): Be 9,01; Al 26,98; Si 28,09; O 16,00. Qual é a fórmula do berilo?",
    "alternativas": [
      "Be3Si6O21",
      "Be3Al2Si6O12",
      "BeAl2Si2O8",
      "Be3Al2Si4O13",
      "Be3Al2Si6O18"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "n(Be):n(Si) = 1:2; a neutralidade elétrica e o balanço de massa (O + Al = 0,1287 g) dão Be:Si:O:Al = 3:6:18:2, isto é, Be3Al2Si6O18.",
      "detalhada": "A resolução segue a solução oficial do problema 15 (item 15.3).\n\n**1) Mols:** n(Be) = 0,0102/9,01 = 1,13×10⁻³ mol; n(Si) = 0,0635/28,09 = 2,26×10⁻³ mol (razão 1:2). A massa restante, de O + Al, é 0,2024 − 0,0635 − 0,0102 = 0,1287 g.\n\n**2) Neutralidade:** 2n(Be) + 4n(Si) + 3n(Al) = 2n(O). Com m(O) + m(Al) = 0,1287 g, resolvem-se m(O) ≈ 0,1086 g e m(Al) ≈ 0,0201 g, isto é, 6,79×10⁻³ mol de O e 7,4×10⁻⁴ mol de Al.\n\n**3) Razão:** Be:Si:O:Al = 1,13 : 2,26 : 6,79 : 0,74 (×10⁻³) ≈ 3 : 6 : 18 : 2. Berilo = **Be3Al2Si6O18**.",
      "alternativas": [
        "Errada. Considera que toda a massa restante é oxigênio (sem Al); a razão Be:Si fecha, mas falta o alumínio.",
        "Errada. Não equilibra as cargas: 3 × 2 + 2 × 3 + 6 × 4 = +36, e 12 O dariam só −24.",
        "Errada. A razão Be:Si fecha e as cargas se equilibram, mas o teor de Si seria 22,7%, e não os 31,4% medidos (0,0635/0,2024).",
        "Errada. A razão Be:Si seria 3:4, e não 1:2 como nos dados.",
        "Correta. Be3Al2Si6O18 fecha massa, razão Be:Si e cargas."
      ],
      "dica": "Use a razão dos mols conhecidos (Be, Si) e a neutralidade elétrica para achar O e Al."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 15",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1144",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 15, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 15. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "A oxidação parcial do silano (SiH4) por N2O ocorre por um mecanismo em cadeia: (1) N2O → N2 + O (iniciação, lenta); (2) O + SiH4 → SiH3 + OH; (3) OH + SiH4 → SiH3 + H2O; (4) SiH3 + N2O → SiH3O + N2; (5) SiH3O + SiH4 → SiH3OH + SiH3; (6) SiH3 + SiH3O → H3SiOSiH3 (terminação, lenta). Com N2O em grande excesso e usando o estado estacionário (iniciação = terminação, e propagação 4 = propagação 5 = v), qual é a lei de velocidade e qual dos gráficos ln[SiH4], log[SiH4], 1/[SiH4] ou 1/[SiH4]² contra t seria linear?",
    "alternativas": [
      "v = k′[SiH4]^(1/2); nenhum deles é linear.",
      "v = k′[SiH4]; o de ln[SiH4] contra t.",
      "v = k′[SiH4]²; o de 1/[SiH4] contra t.",
      "v = k′[SiH4]^(3/2); o de 1/[SiH4]² contra t.",
      "v = k′ (ordem zero); o de log[SiH4] contra t."
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "k₁[N2O] = k₆[SiH3][SiH3O] e k₄[SiH3][N2O] = k₅[SiH3O][SiH4] dão v = (k₁k₄k₅/k₆)^(1/2)[N2O][SiH4]^(1/2); com N2O em excesso, v = k′[SiH4]^(1/2), e nenhum dos quatro gráficos é reta.",
      "detalhada": "A resolução segue a solução oficial do problema 15 (itens 15.10 e 15.11).\n\n**1) Estado estacionário:** iniciação = terminação: k₁[N2O] = k₆[SiH3][SiH3O]. Propagação: v = k₄[SiH3][N2O] = k₅[SiH3O][SiH4].\n\n**2) De k₄[SiH3][N2O] = k₅[SiH3O][SiH4]:** [SiH3] = k₅[SiH3O][SiH4]/(k₄[N2O]).\n\n**3) Substituindo na iniciação = terminação:** [SiH3O] = [N2O](k₁k₄/(k₅k₆[SiH4]))^(1/2).\n\n**4) Velocidade:** v = k₅[SiH3O][SiH4] = (k₁k₄k₅/k₆)^(1/2)[N2O][SiH4]^(1/2). Com N2O em excesso, v = k′[SiH4]^(1/2): ordem 1/2 em SiH4.\n\nOrdem 1/2 não é linear em ln[SiH4], log[SiH4], 1/[SiH4] ou 1/[SiH4]² (seria linear [SiH4]^(1/2) contra t).",
      "alternativas": [
        "Correta. Ordem 1/2 em SiH4, e nenhuma das coordenadas listadas dá reta.",
        "Errada. A ordem 1 daria ln[SiH4] linear, mas a ordem obtida é 1/2.",
        "Errada. A ordem 2 daria 1/[SiH4] linear, mas a ordem é 1/2.",
        "Errada. A ordem 3/2 daria 1/[SiH4]^(1/2) linear, não 1/[SiH4]², e a ordem obtida é 1/2.",
        "Errada. A ordem zero daria [SiH4] linear contra t, e a ordem real é 1/2."
      ],
      "dica": "Cadeia não ramificada: iniciação = terminação e propagações iguais à velocidade; raiz quadrada da razão k₁/k₆ aparece."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 15",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1145",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 16, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 16. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "O aquecimento de Na[B3H8] em diglima com B2H6 produz um sal B que contém um ânion cluster com carga 2−, razão B:H = 1:1 e 24,5% de sódio em massa. Dados (g/mol): Na 22,99; B 10,81; H 1,008. Qual é a fórmula de B?",
    "alternativas": [
      "Na2[B6H6]",
      "Na2[B8H8]",
      "Na2[B10H10]",
      "Na2[B12H12]",
      "Na2[B14H14]"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "Com Na2[BxHx], 2 × 22,99/(2 × 22,99 + x × 11,818) = 0,245 dá x = 12: Na2[B12H12].",
      "detalhada": "A resolução segue a solução oficial do problema 16 (item 16.1).\n\nO ânion é BxHx²⁻, então o sal é Na2BxHx. A massa de BH é 10,81 + 1,008 = 11,818 g/mol.\n\n45,98/(45,98 + 11,818x) = 0,245 ⇒ 11,818x = 141,7 ⇒ x ≈ 12. B = **Na2[B12H12]**.\n\nTeor de Na em cada candidato: x = 6: 39,3%; x = 8: 32,7%; x = 10: 28,0%; x = 12: 24,5%; x = 14: 21,7%.",
      "alternativas": [
        "Errada. Daria 39,3% de Na.",
        "Errada. Daria 32,7% de Na.",
        "Errada. Daria 28,0% de Na.",
        "Correta. 24,5% de Na.",
        "Errada. Daria 21,7% de Na."
      ],
      "dica": "Escreva o teor percentual em função de x e resolva; confira os candidatos no final."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 16",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1146",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 17, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 17. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "O ligante B de uma rede metal–orgânica é uma molécula simétrica com só C, H e O, massa molar 172 g/mol e centro de inversão. Não descolora água de bromo. Titulando 0,500 g de B (solução bem ácida), gastam-se 11,6 mL de NaOH 0,500 mol/dm³. Seu espectro de ¹³C tem 3 sinais. Qual é B?",
    "alternativas": [
      "Ácido cis-ciclo-hexano-1,4-dicarboxílico",
      "Ácido trans-ciclo-hexano-1,2-dicarboxílico",
      "Ácido (E)-oct-4-enodioico, HOOC–(CH2)2–CH=CH–(CH2)2–COOH",
      "Ácido benzeno-1,4-dicarboxílico (tereftálico)",
      "Ácido trans-ciclo-hexano-1,4-dicarboxílico"
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "n(NaOH)/n(B) = 5,8×10⁻³/2,91×10⁻³ = 2 (dois COOH); sobra C6H10 (saturado, sem C=C), 3 sinais de ¹³C e centro de inversão levam ao trans-1,4-dicarboxílico, C8H12O4.",
      "detalhada": "A resolução segue a solução oficial do problema 17 (item 17.2).\n\n**1) Grupos ácidos:** n(NaOH) = 0,500 × 0,0116 = 5,80×10⁻³ mol; n(B) = 0,500/172 = 2,91×10⁻³ mol; razão = 2: dois grupos –COOH.\n\n**2) Fórmula:** 172 − 90 (2 COOH) = 82 g/mol = C6H10: **C8H12O4**.\n\n**3) Estrutura:** não descolora Br2 (sem C=C) e tem 1 ciclo (grau de insaturação 3 = 2 C=O + 1 anel). Três sinais de ¹³C (C=O, CH, CH2) e centro de inversão indicam o **trans-1,4** (conformação cadeira diequatorial).\n\nO isômero cis também existe, mas não tem centro de inversão.",
      "alternativas": [
        "Errada. O isômero cis não tem centro de inversão (um grupo axial e um equatorial).",
        "Errada. Não é simétrico por inversão e daria 4 sinais de ¹³C (C=O, C1/C2, C3/C6, C4/C5).",
        "Errada. Tem 172 g/mol, mas descoloriria a água de bromo, pois tem uma ligação C=C.",
        "Errada. É aromático e tem 166 g/mol (C8H6O4), e não 172 g/mol.",
        "Correta. C8H12O4, 3 sinais de ¹³C, centro de inversão e sem C=C."
      ],
      "dica": "Titulação dá o número de COOH; grau de insaturação e RMN de ¹³C dão o resto."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 17",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: 1,4-Cyclohexanedicarboxylic acid",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/1_4-Cyclohexanedicarboxylic-acid"
      }
    ]
  },
  {
    "id": "qui-1147",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 17, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 17. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Para estimar a área superficial de um material poroso (MOF), a adsorção de nitrogênio estabiliza em 5,0×10⁻³ mol/g quando se forma uma monocamada. Cada molécula de N2 ocupa 0,162 nm² (1 nm² = 10⁻¹⁸ m²). Dado: NA = 6,022×10²³ mol⁻¹. Qual é a área superficial específica do material?",
    "alternativas": [
      "49 m²/g",
      "245 m²/g",
      "490 m²/g",
      "980 m²/g",
      "4900 m²/g"
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "S = 5,0×10⁻³ mol/g × 6,022×10²³ mol⁻¹ × 0,162×10⁻¹⁸ m² ≈ 490 m²/g.",
      "detalhada": "A resolução segue a solução oficial do problema 17 (item 17.3).\n\nNúmero de moléculas por grama: 5,0×10⁻³ × 6,022×10²³ = 3,01×10²¹.\n\nÁrea: 3,01×10²¹ × 0,162×10⁻¹⁸ m² = 488 m²/g ≈ **490 m²/g**.",
      "alternativas": [
        "Errada. Erro de potência de dez na conversão de nm² em m².",
        "Errada. É a metade: toma a área de um átomo de N em vez da molécula N2.",
        "Correta. ≈ 490 m²/g.",
        "Errada. É o dobro: conta cada molécula como dois átomos de N ocupando área.",
        "Errada. Erro de potência de dez na conversão de nm² em m²."
      ],
      "dica": "Converta nm² para m² (10⁻¹⁸) e some número de moléculas × área de cada uma."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 17",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1148",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 19, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 19. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "O molibdênio (grupo 6, 6 elétrons de valência) forma a sequência MoCl5 → MoCl4(OEt2)2 → MoCl3(THF)3, em que OEt2 (éter dietílico) e THF são ligantes neutros e Cl é Cl⁻. Quais são o estado de oxidação do Mo e o número de elétrons d, nessa ordem?",
    "alternativas": [
      "+5, d¹; +4, d²; +3, d³",
      "+5, d⁵; +4, d⁴; +3, d³",
      "+5, d²; +4, d³; +3, d⁴",
      "+5, d⁰; +4, d¹; +3, d²",
      "+3, d³; +4, d²; +5, d¹"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "O número de oxidação é dado pelos Cl⁻ (5, 4 e 3), e o número de elétrons d é 6 menos o estado de oxidação: d¹, d² e d³.",
      "detalhada": "A resolução segue a solução oficial do problema 19 (item 19.2).\n\nLigantes neutros (éteres) não contribuem para a carga. Em MoCl5 há 5 Cl⁻, logo Mo(+5); em MoCl4(OEt2)2, Mo(+4); em MoCl3(THF)3, Mo(+3).\n\nElétrons d = 6 − estado de oxidação: Mo(+5) é d¹, Mo(+4) é d², Mo(+3) é d³.",
      "alternativas": [
        "Correta. +5/d¹, +4/d², +3/d³.",
        "Errada. Confunde o estado de oxidação com o número de elétrons d.",
        "Errada. Usa 7 elétrons de valência em vez de 6 (somou 1 em cada d).",
        "Errada. Usa 5 elétrons de valência em vez de 6.",
        "Errada. Os estados de oxidação estão invertidos em relação aos compostos."
      ],
      "dica": "d = (grupo) − (estado de oxidação). Mo está no grupo 6."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 19",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1149",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 20, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 20. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "A bromação de um alqueno ocorre por um íon bromônio, com adição anti. Considere a adição de Br2 ao oct-1-eno, CH2=CH–(CH2)5–CH3. Que estereoisômeros do 1,2-dibromo-octano se formam?",
    "alternativas": [
      "Só um estereoisômero, um composto meso.",
      "Os dois enantiômeros possíveis, em proporção igual (racemato).",
      "Dois diastereoisômeros.",
      "Um composto sem estereoisômeros, pois não há centro estereogênico.",
      "Quatro estereoisômeros."
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "O produto CH2Br–CHBr–(CH2)5–CH3 tem um único centro estereogênico (C2), e o ataque do Br⁻ ao íon bromônio pode ocorrer nos dois lados: formam-se os dois enantiômeros.",
      "detalhada": "A resolução segue a solução oficial do problema 20 (item 20.1, c).\n\nO C2 do produto tem quatro grupos diferentes (H, Br, CH2Br e C6H13): é um centro estereogênico. Com um único centro, só há dois estereoisômeros, que são enantiômeros. O íon bromônio do alqueno terminal pode se formar nas duas faces, então ambos se formam em quantidades iguais: **racemato**.",
      "alternativas": [
        "Errada. Meso exige pelo menos dois centros estereogênicos; aqui há um só.",
        "Correta. Um centro estereogênico; os dois enantiômeros se formam em quantidades iguais.",
        "Errada. Diastereoisômeros precisam de pelo menos dois centros estereogênicos.",
        "Errada. O C2 do produto tem quatro grupos diferentes, então é estereogênico.",
        "Errada. Quatro estereoisômeros exigiriam dois centros estereogênicos sem simetria; aqui há só um."
      ],
      "dica": "Conte os centros estereogênicos do produto: n centros dão até 2ⁿ estereoisômeros."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 20",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1150",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 20, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 20. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Considere a adição de Br2 ao 2-propilpent-1-eno, CH2=C(CH2CH2CH3)2 (C8H16), que forma o 1,2-dibromo-2-propilpentano. Que estereoisômeros se formam?",
    "alternativas": [
      "Dois enantiômeros (racemato), pois o C2 é estereogênico.",
      "Um composto meso.",
      "Dois diastereoisômeros.",
      "Três estereoisômeros.",
      "Um composto só, sem estereoisômeros, pois o C2 tem dois grupos propila idênticos."
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "No produto, o C2 liga Br, CH2Br e dois grupos propila iguais; não é estereogênico, e o produto não tem estereoisômeros.",
      "detalhada": "A resolução segue a solução oficial do problema 20 (item 20.1, e).\n\nO produto é CH2Br–CBr(CH2CH2CH3)2. O C2 tem Br, CH2Br e dois grupos propila idênticos: só três grupos diferentes. Sem centro estereogênico (e sem outro elemento de estereoisomeria), o produto é um único composto, **sem estereoisômeros**.",
      "alternativas": [
        "Errada. O C2 não é estereogênico: tem dois grupos propila iguais.",
        "Errada. Composto meso exige dois ou mais centros estereogênicos.",
        "Errada. Diastereoisômeros exigem dois ou mais centros estereogênicos.",
        "Errada. Não há centro estereogênico.",
        "Correta. Sem centro estereogênico, o produto não tem estereoisômeros."
      ],
      "dica": "Dois substituintes iguais no carbono eliminam a estereogenia."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 20",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1151",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 21, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 21. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Numa aminação redutiva, as aminas disponíveis eram 4-iodoanilina, 4-metoxianilina e 4-metilanilina, e os aldeídos eram benzaldeído, 2-bromobenzaldeído e 4-fluorobenzaldeído. Numa tentativa sem o redutor, formou-se um composto colorido D, com RMN de ¹H (δ, ppm): 2,35 (3H, s); 7,14 (2H, d); 7,23 (2H, d); 7,45 (3H, m); 7,88 (2H, d); 8,44 (1H, s). Qual é D?",
    "alternativas": [
      "4-CH3–C6H4–N=CH–C6H5 (N-benzilideno-4-metilanilina, uma imina)",
      "4-CH3–C6H4–NH–CH2–C6H5 (N-benzil-4-metilanilina, uma amina)",
      "4-CH3–C6H4–N=CH–C6H4–4-F (imina do 4-fluorobenzaldeído)",
      "4-CH3–C6H4–N=CH–C6H4–2-Br (imina do 2-bromobenzaldeído)",
      "4-CH3O–C6H4–N=CH–C6H5 (imina da 4-metoxianilina)"
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "O CH3 aromático (2,35, 3H), o anel monossubstituído (7,45, 3H e 7,88, 2H) e o singleto de 1H em 8,44 (N=CH) indicam a imina de 4-metilanilina e benzaldeído.",
      "detalhada": "A resolução segue a solução oficial do problema 21 (item 21.3).\n\n- **δ 8,44 (1H, s):** H de N=CH (imina); a amina reduzida mostraria um CH2 (~4,3, 2H) e um NH.\n- **δ 2,35 (3H, s):** CH3 ligado a anel aromático (4-metilanilina; a 4-metoxianilina daria OCH3 em ~3,7).\n- **δ 7,14 e 7,23 (2H, 2H, d):** anel p-dissubstituído do tolil.\n- **δ 7,45 (3H, m) e 7,88 (2H, d):** anel monossubstituído (5 H), do benzaldeído.\n\nSem o redutor (por exemplo, NaBH4 esquecido), a reação para na imina: **D = N-benzilideno-4-metilanilina**.",
      "alternativas": [
        "Correta. Imina de 4-metilanilina com benzaldeído; encaixa em todos os sinais.",
        "Errada. A amina teria um CH2 (~4,3, 2H) e um NH, mas o espectro tem um singleto de 1H em 8,44 e nenhum CH2.",
        "Errada. O 4-fluorobenzaldeído daria um anel p-dissubstituído (4H) e não o padrão de 5 H (3H + 2H) em 7,45 e 7,88.",
        "Errada. O 2-bromobenzaldeído daria um anel o-dissubstituído (4H), e não 5 H.",
        "Errada. A metoxila daria um singleto de 3H em torno de 3,7, e não 2,35."
      ],
      "dica": "Singleto em 8 a 8,5 ppm com 1H, sem CH2 benzílico = imina (N=CH)."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 21",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1152",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 22, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 22. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "A finasterida, medicamento contra a queda de cabelo, é um esteroide em que o anel A contém o grupo –NH–C(=O)–CH=CH– (nitrogênio dentro do anel) e, no carbono 17, há o substituinte –C(=O)–NH–C(CH3)3. Quais são as duas funções nitrogenadas da finasterida?",
    "alternativas": [
      "Amina secundária e nitrila.",
      "Imina e éster.",
      "Lactama (amida cíclica) e amida (secundária).",
      "Nitrocomposto e amina primária.",
      "Carbamato e ureia."
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "O N dentro do anel, ligado a C=O, forma uma lactama (amida cíclica); o –C(=O)–NH–C(CH3)3 é uma amida secundária (N-terc-butil).",
      "detalhada": "A resolução segue a solução oficial do problema 22 (item 22.6).\n\n- No anel A, o N está ligado a um C=O: é uma amida cíclica, chamada **lactama**.\n\n- No C17, o C(=O) ligado a N–H e a um grupo terc-butila é uma **amida** (secundária).\n\nPortanto, as duas funções nitrogenadas são uma lactama e uma amida secundária.",
      "alternativas": [
        "Errada. Não há nitrila (C≡N) nem amina livre: os dois N estão ligados a C=O.",
        "Errada. Não há C=N nem éster (C(=O)–O–).",
        "Correta. Lactama no anel e amida secundária na cadeia lateral.",
        "Errada. Não há grupo NO2 e nenhum N é de amina primária.",
        "Errada. Não há carbamato nem ureia: os N não estão ligados a O ou a outro N."
      ],
      "dica": "N ligado a C=O = amida; se estiver dentro de um anel, é uma lactama."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 22",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: Finasteride",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Finasteride"
      }
    ]
  },
  {
    "id": "qui-1153",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 24, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 24. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Numa etapa da síntese em fase sólida de um análogo da anandamida, um alcino L é tratado com H2 na presença do catalisador de Lindlar, formando o composto M (como a anandamida natural, M tem ligações duplas cis). Qual é o papel do catalisador de Lindlar?",
    "alternativas": [
      "Hidrogena totalmente o alcino a alcano.",
      "Reduz o alcino a alceno trans (E) por adição anti.",
      "Hidrata o alcino, formando uma cetona.",
      "Quebra o alcino, formando dois ácidos carboxílicos.",
      "Hidrogena parcialmente o alcino a alceno cis (Z), por adição sin de H2."
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "O catalisador de Lindlar (Pd envenenado) para a hidrogenação no alceno: os dois H entram do mesmo lado e o produto é o alceno cis (Z).",
      "detalhada": "A resolução segue a solução oficial do problema 24 (item 24.5).\n\nO catalisador de Lindlar é paládio \"envenenado\" (com Pb e quinolina) e perde a atividade para hidrogenar alcenos. O H2 adiciona-se de modo sin à tripla ligação, formando o **alceno cis (Z)**, e a redução não vai até o alcano. É o que a síntese precisa, já que a anandamida tem duplas cis.",
      "alternativas": [
        "Errada. O catalisador é envenenado exatamente para evitar a hidrogenação total ao alcano.",
        "Errada. O alceno trans vem da redução com Na/NH3 líquida, não de H2/Lindlar.",
        "Errada. A hidratação de alcinos exige H2O e um ácido (e sais de Hg), e não H2.",
        "Errada. A clivagem oxidativa exige oxidantes (O3, KMnO4), e não H2.",
        "Correta. Hidrogenação parcial e sin: alceno Z."
      ],
      "dica": "Lindlar → cis (Z); Na/NH3 → trans (E)."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 24",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1154",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 24, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 24. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Na última etapa da síntese da epinefrina (adrenalina), o composto C, 4-[2-(N-benzil-N-metilamino)-1-hidroxietil]benzeno-1,2-diol, é tratado com H2 e Pd (cat.), formando a epinefrina e também tolueno (C6H5CH3). Qual ligação é clivada nessa reação?",
    "alternativas": [
      "A ligação C=C do anel aromático do catecol (hidrogenação do anel).",
      "A ligação C–OH benzílica, que vira CH2.",
      "A ligação N–CH3.",
      "A ligação N–CH2 do grupo benzila (hidrogenólise), liberando tolueno.",
      "As ligações O–H do catecol."
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "A hidrogenólise rompe a ligação N–CH2(C6H5) do grupo benzila: o N ganha H (amina secundária) e o benzila sai como tolueno.",
      "detalhada": "A resolução segue a solução oficial do problema 24 (item 24.1).\n\nO grupo benzila (C6H5–CH2–) em N pode ser removido com H2 e Pd por hidrogenólise: a ligação N–CH2 é quebrada, e o N recebe um H (formando N–H, como na epinefrina), enquanto o CH2 recebe outro H, formando CH3. O fragmento sai como **tolueno**, C6H5CH3.\n\nOs outros grupos (OH do álcool, N–CH3, anel do catecol) permanecem na epinefrina.",
      "alternativas": [
        "Errada. O anel do catecol é preservado na epinefrina, e a hidrogenólise suave não o reduz.",
        "Errada. O grupo OH do álcool secundário permanece na epinefrina.",
        "Errada. O N–CH3 permanece (a epinefrina é N-metilada).",
        "Correta. Hidrogenólise da ligação N–benzila: forma o tolueno.",
        "Errada. As ligações O–H dos fenóis permanecem; não há remoção de nada ali."
      ],
      "dica": "Benzila (Bn) em N ou O sai por H2/Pd, formando tolueno."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 24",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: Epinephrine",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Epinephrine"
      }
    ]
  },
  {
    "id": "qui-1155",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 27, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 27. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Na síntese do (±)-przewalskin B, um intermediário bicíclico D, que já tem centros estereogênicos definidos, passa por uma etapa que cria um novo centro estereogênico e dá uma mistura inseparável de dois estereoisômeros, E e F, que diferem apenas na configuração desse novo centro. Qual é a relação entre E e F?",
    "alternativas": [
      "Diastereoisômeros.",
      "Enantiômeros.",
      "Isômeros constitucionais.",
      "Tautômeros.",
      "Conformações do mesmo composto."
    ],
    "resposta": 0,
    "explicacao": {
      "resumo": "Estereoisômeros que não são imagens especulares entre si, por terem diferido só em um dos vários centros, são diastereoisômeros.",
      "detalhada": "A resolução segue a solução oficial do problema 27 (item 27.2).\n\nSe os demais centros estereogênicos são os mesmos e só o novo centro tem configuração oposta, E e F não são imagens especulares (para isso todos os centros precisariam estar invertidos). Estereoisômeros que não são enantiômeros são **diastereoisômeros**, com propriedades físicas diferentes (embora, aqui, a mistura seja inseparável).",
      "alternativas": [
        "Correta. Diferem em apenas um dos vários centros: diastereoisômeros.",
        "Errada. Enantiômeros exigiriam a inversão de todos os centros estereogênicos.",
        "Errada. Têm a mesma conectividade, só diferem na disposição espacial.",
        "Errada. Tautômeros trocam a posição de um H e de uma ligação dupla, o que não ocorre aqui.",
        "Errada. Conformações se interconvertem por rotação de ligações; estereoisômeros de configuração, não."
      ],
      "dica": "Inverteu um centro entre vários = diastereoisômeros; inverteu todos = enantiômeros."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 27",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1156",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 27, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 27. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Na síntese do (±)-przewalskin B, o produto da condensação aldólica contém um grupo protegido como éter de terc-butildimetilsilila (–O–TBS). Depois do tratamento com TBAF (fluoreto de tetrabutilamônio), obtém-se o composto D, que tem o grupo –OH livre. Qual é o papel do TBAF?",
    "alternativas": [
      "Oxida o álcool a aldeído.",
      "Remove o grupo protetor TBS (o fluoreto ataca o silício), regenerando o –OH.",
      "Reduz a carbonila a álcool.",
      "Introduz um átomo de flúor no carbono ligado ao oxigênio.",
      "Catalisa uma reação de Diels–Alder."
    ],
    "resposta": 1,
    "explicacao": {
      "resumo": "O fluoreto ataca o Si (formando a ligação Si–F, muito forte) e libera o álcool: o TBAF desprotege o éter de silila.",
      "detalhada": "A resolução segue a solução oficial do problema 27.\n\nÉteres de silila (como TBS) protegem álcoois durante outras etapas. O íon F⁻ tem grande afinidade pelo silício (a ligação Si–F é muito forte): ele ataca o Si, rompe a ligação Si–O e, após protonação, libera o **álcool livre**. É a etapa de **desproteção**.",
      "alternativas": [
        "Errada. O F⁻ não é um oxidante.",
        "Correta. Desproteção do éter de silila: remove o TBS e libera o –OH.",
        "Errada. O TBAF não é fonte de hidreto.",
        "Errada. O F⁻ ataca o silício, e não substitui o O por F no carbono.",
        "Errada. O TBAF não participa de cicloadições."
      ],
      "dica": "F⁻ + Si–O → Si–F + O⁻: o fluoreto desprotege éteres de silila."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 27",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      },
      {
        "titulo": "PubChem: Tetrabutylammonium fluoride",
        "url": "https://pubchem.ncbi.nlm.nih.gov/compound/Tetrabutylammonium-fluoride"
      }
    ]
  },
  {
    "id": "qui-1157",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 28, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 28. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Numa polimerização por metátese com abertura de anel (ROMP), usa-se o catalisador de Grubbs (um carbeno de Ru). Primeiro se adicionam 100 equivalentes de um norborneno com dois grupos benzila (CH2C6H5); quando esse monômero acaba, adicionam-se 100 equivalentes de outro norborneno com dois grupos CH3. Que polímero se forma e como se classifica a polimerização?",
    "alternativas": [
      "Copolímero aleatório, por crescimento em etapas.",
      "Uma mistura de dois homopolímeros, por crescimento em cadeia.",
      "Copolímero alternado, por polimerização radicalar.",
      "Polímero reticulado, por crescimento em etapas.",
      "Copolímero em bloco (100 + 100 unidades), por polimerização viva."
    ],
    "resposta": 4,
    "explicacao": {
      "resumo": "Como as extremidades da cadeia continuam ativas depois do primeiro monômero (sem terminação), o segundo monômero cresce a partir da mesma cadeia: copolímero em bloco, em polimerização viva.",
      "detalhada": "A resolução segue a solução oficial do problema 28 (item 28.1, f).\n\nNa ROMP com Grubbs, a extremidade da cadeia é um carbeno de Ru que permanece ativo enquanto houver monômero e não há terminação nem transferência: é uma **polimerização viva**. Ao esgotar o primeiro monômero, a adição do segundo continua na mesma cadeia, formando um bloco depois do outro: **copolímero em bloco** com 100 + 100 unidades (a massa molar e a composição são controladas pela razão monômero/catalisador).",
      "alternativas": [
        "Errada. A adição sequencial a extremidades ativas dá blocos, não uma distribuição aleatória, e não é policondensação.",
        "Errada. As cadeias continuam ativas e crescem com o segundo monômero; não ficam como dois homopolímeros separados.",
        "Errada. Alternado exigiria os dois monômeros juntos e com reatividade cruzada; o iniciador aqui é o Ru, e não radical.",
        "Errada. Os monômeros têm só uma ligação dupla polimerizável, então a cadeia é linear.",
        "Correta. Polimerização viva e adição sequencial dão copolímero em bloco."
      ],
      "dica": "Polimerização viva: sem terminação. Adição sequencial de monômeros produz copolímeros em bloco."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 28",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1158",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 29, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 29. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Na GPC (cromatografia de permeação em gel), as moléculas maiores eluem primeiro. Considere três amostras: o PVC parcialmente azidado (Mn = 70 800 g/mol), o produto purificado P2 (PVC com cadeias laterais de PDMS, Mn = 192 400 g/mol) e o PDMS propargílico (Mn = 640 g/mol). Qual é a ordem de eluição, do primeiro para o último?",
    "alternativas": [
      "PDMS, PVC azidado, P2.",
      "PVC azidado, P2, PDMS.",
      "P2, PVC azidado, PDMS.",
      "PDMS, P2, PVC azidado.",
      "P2, PDMS, PVC azidado."
    ],
    "resposta": 2,
    "explicacao": {
      "resumo": "Quanto maior a massa (e o tamanho), mais cedo elui: P2 (192 400), depois o PVC azidado (70 800) e por último o PDMS (640).",
      "detalhada": "A resolução segue a solução oficial do problema 29 (item 29.2).\n\nNa GPC, as moléculas maiores não entram nos poros e saem primeiro; as menores percorrem mais poros e saem depois. A ordem de tamanho segue a de massa molar: P2 (192 400) > PVC azidado (70 800) > PDMS (640). Logo, a ordem de eluição é **P2, PVC azidado, PDMS**.",
      "alternativas": [
        "Errada. É a ordem inversa (da menor para a maior massa).",
        "Errada. O P2 é maior que o PVC azidado e elui antes dele.",
        "Correta. Em ordem decrescente de massa.",
        "Errada. Coloca o PDMS, a menor molécula, em primeiro lugar.",
        "Errada. O PDMS (640 g/mol) é o menor e elui por último."
      ],
      "dica": "GPC: maior sai primeiro, menor sai por último."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 29",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1159",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 30, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 30. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Numa mistura de HDI, poli(etilenoglicol) e poliol, há inicialmente 0,01918 mol de moléculas e 0,0200 mol de grupos –NCO (e de –OH). Cada ligação uretana formada junta duas moléculas e reduz em um o número de moléculas. Um modelo simples diz que o ponto de gel ocorre quando Mn se torna infinita, isto é, quando o número total de moléculas tende a zero. Qual é a conversão (fração de –NCO que reagiu) no ponto de gel?",
    "alternativas": [
      "4,1%",
      "50%",
      "66,8%",
      "95,9%",
      "100%"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "O número de moléculas é 0,01918 − p × 0,0200; ele chega a zero quando p = 0,01918/0,0200 ≈ 0,959, ou seja, 95,9%.",
      "detalhada": "A resolução segue a solução oficial do problema 30 (item 30.4).\n\nSeja p a conversão de –NCO. Cada ligação formada reduz em 1 o número de moléculas: n(p) = 0,01918 − p × 0,0200.\n\nMn infinita significa n → 0: p = 0,01918/0,0200 = 0,9590. Com o valor exato (0,0191765 mol = 0,0100 de HDI + 0,0080 de PEG + 0,0011765 de poliol), p = 0,9588. Nos dois casos, **95,9%**.",
      "alternativas": [
        "Errada. É 100% − 95,9%: a fração que ainda resta de grupos –NCO.",
        "Errada. Nenhum dado do enunciado leva a esse valor.",
        "Errada. Com 66,8% de conversão ainda restam cerca de 0,0058 mol de moléculas (0,01918 − 0,668 × 0,0200); o gel só ocorre quando o número de moléculas chega a zero.",
        "Correta. p = 0,01918/0,0200 ≈ 95,9%.",
        "Errada. A 100% o número de moléculas seria negativo (0,01918 − 0,0200); o gel ocorre antes disso."
      ],
      "dica": "Gel: Mn → ∞ quando o número de moléculas → 0."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 30",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  },
  {
    "id": "qui-1160",
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
      "ano": 2024,
      "orgao": "problemas preparatórios (Riade), problema 30, adaptada"
    },
    "credito": "Adaptada e traduzida de Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 30. Licença CC BY-NC-SA 4.0; esta adaptação usa a mesma licença.",
    "enunciado": "Na formação de um poliuretano, os grupos –NCO e –OH têm a mesma concentração e a reação é de segunda ordem: −d[NCO]/dt = k[NCO]², o que dá 1/[NCO] = 1/[NCO]0 + kt. Depois de 3 h, a conversão é 66,8%; o ponto de gel, nesse modelo, ocorre a 95,88% de conversão. Em que instante (em horas) a reação atinge o ponto de gel?",
    "alternativas": [
      "4,3 h",
      "8,6 h",
      "24 h",
      "34,7 h"
    ],
    "resposta": 3,
    "explicacao": {
      "resumo": "Com 1/(1 − p) = 1 + k[NCO]0 t: k[NCO]0 = (1/0,332 − 1)/3 = 0,670 h⁻¹ e t = (1/0,0412 − 1)/0,670 ≈ 34,7 h.",
      "detalhada": "A resolução segue a solução oficial do problema 30 (item 30.5).\n\nComo [NCO] = [NCO]0(1 − p), a lei integrada vira 1/(1 − p) = 1 + k[NCO]0·t.\n\n**1) Constante a partir dos 3 h:** 1/(1 − 0,668) = 3,01, logo k[NCO]0 = (3,01 − 1)/3 = 0,670 h⁻¹.\n\n**2) No gel (p = 0,9588):** 1/(1 − 0,9588) = 24,28, logo t = (24,28 − 1)/0,670 ≈ **34,7 h**.",
      "alternativas": [
        "Errada. Trata a conversão como linear no tempo (ordem zero).",
        "Errada. Usa uma lei de primeira ordem, ln(1 − p) = −k′t, que não é a do enunciado.",
        "Errada. Esquece de subtrair 1 em 1/(1 − p), tanto no cálculo de k (3,01/3) quanto no tempo (24,28).",
        "Correta. t ≈ 34,7 h, o que é bem mais lento que a primeira ordem porque a taxa cai com o quadrado da concentração."
      ],
      "dica": "Segunda ordem com concentrações iguais: 1/(1 − p) = 1 + k[NCO]0·t."
    },
    "fontes": [
      {
        "titulo": "Preparatory Problems for the 56th International Chemistry Olympiad (Riade, 2024), problema 30",
        "url": "https://scheikundeolympiade.science.ru.nl/internationaal/2024/IChO56_Preparatory_Problems_20240310_public.pdf"
      },
      {
        "titulo": "Preparatory Problems for the 56th IChO (Riade, 2024), versão com soluções",
        "url": "https://www.pianetachimica.it/olimpiadi/56icho/56_IChO_2024_Preparatory_Problems.pdf"
      },
      {
        "titulo": "Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0)",
        "url": "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR"
      }
    ]
  }
] });
