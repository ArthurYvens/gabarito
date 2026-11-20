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
  }
] });
