/* Questões inéditas no estilo ENEM, escritas para o app. */
Banco.registrar({
  questoes: [
    /* ============================== MATEMÁTICA ============================== */
    {
      id: 'mat-701',
      materia: 'matematica',
      assunto: 'Razão e proporção',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'Uma prefeitura divulgou o mapa de uma nova ciclovia, desenhado na escala 1 : 200 000. No mapa, o trecho que liga o parque ao terminal de ônibus mede 4,5 cm. Uma ciclista pretende percorrer todo o trecho mantendo velocidade constante de 18 km/h.',
      enunciado: 'O tempo que a ciclista levará para percorrer esse trecho é de',
      alternativas: ['3 minutos.', '15 minutos.', '30 minutos.', '45 minutos.', '60 minutos.'],
      resposta: 2,
      explicacao: {
        resumo: 'O trecho real mede 4,5 × 200 000 = 900 000 cm = 9 km; a 18 km/h, a ciclista leva 9 ÷ 18 = 0,5 h = 30 minutos.',
        detalhada: 'A escala 1 : 200 000 diz que **1 cm no mapa equivale a 200 000 cm na realidade**.\n\n**Passo 1 (distância real):** 4,5 × 200 000 = 900 000 cm.\n\n**Passo 2 (conversão):** 100 cm = 1 m e 1 000 m = 1 km, logo 1 km = 100 000 cm. Assim, 900 000 cm = 9 km.\n\n**Passo 3 (tempo):** tempo = distância ÷ velocidade = 9 ÷ 18 = 0,5 h, que são 30 minutos.\n\nNa prova, o grande risco desse tipo de item é a conversão de unidades. Vale a regra: de cm para km, **corte cinco zeros**.',
        alternativas: [
          'Converteu 900 000 cm em 900 m (dividiu por 1 000 em vez de 100 000), obtendo 0,9 km e 3 minutos.',
          'Tomou os 4,5 cm do mapa como se fossem 4,5 km, e 4,5 ÷ 18 = 0,25 h = 15 minutos.',
          'Correta. 9 km a 18 km/h correspondem a 0,5 h, ou 30 minutos.',
          'Corresponde a 13,5 km, que seria o resultado com escala 1 : 300 000.',
          'Corresponde a 18 km, que seria o resultado com escala 1 : 400 000.'
        ],
        dica: 'Em escala, primeiro calcule a distância real em cm e só depois converta para km. Confira se o resultado faz sentido (9 km de ciclovia a 18 km/h: meia hora).'
      },
      fontes: [
        { titulo: 'Wikipédia: Escala (cartografia)', url: 'https://pt.wikipedia.org/wiki/Escala_(cartografia)' },
        { titulo: 'IBGE Educa', url: 'https://educa.ibge.gov.br/' }
      ]
    },
    {
      id: 'mat-702',
      materia: 'matematica',
      assunto: 'Matemática financeira',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'Uma loja de eletrodomésticos anuncia uma geladeira por R$ 1.200,00 à vista. Para quem prefere parcelar, a loja oferece a seguinte condição: entrada de R$ 400,00 no ato da compra e uma única parcela de R$ 840,00, paga 30 dias depois.',
      enunciado: 'A taxa mensal de juros que a loja cobra sobre o saldo devedor nessa condição de pagamento é de',
      alternativas: ['3,3%.', '5%.', '10%.', '40%.', '70%.'],
      resposta: 1,
      explicacao: {
        resumo: 'Os juros incidem sobre o saldo financiado (1 200 − 400 = 800): 840 − 800 = 40, e 40 ÷ 800 = 5% ao mês.',
        detalhada: 'Quem dá entrada **não deve juros sobre o valor entrada**: a dívida é apenas o saldo.\n\n**Passo 1 (saldo devedor):** 1 200 − 400 = R$ 800,00.\n\n**Passo 2 (juros pagos):** a parcela é de R$ 840,00, então os juros são 840 − 800 = R$ 40,00.\n\n**Passo 3 (taxa):** juros ÷ saldo = 40 ÷ 800 = 0,05 = **5% ao mês**.\n\nAlternativamente: 800 × 1,05 = 840.',
        alternativas: [
          'Dividiu os R$ 40,00 de juros pelo preço total (40 ÷ 1 200 ≈ 3,3%), mas os juros incidem só sobre o saldo financiado.',
          'Correta. 40 ÷ 800 = 0,05.',
          'Dividiu os juros pelo valor da entrada (40 ÷ 400 = 10%).',
          'Confundiu R$ 40,00 de juros com 40%.',
          'Calculou a razão entre a parcela e o preço (840 ÷ 1 200 = 0,70), que não é taxa de juros.'
        ],
        dica: 'Em parcelamento com entrada, o "capital" é o preço à vista menos a entrada. É a base da taxa.'
      },
      fontes: [
        { titulo: 'Banco Central do Brasil: Cidadania financeira', url: 'https://www.bcb.gov.br/cidadaniafinanceira' },
        { titulo: 'Wikipédia: Juro', url: 'https://pt.wikipedia.org/wiki/Juro' }
      ]
    },
    {
      id: 'mat-703',
      materia: 'matematica',
      assunto: 'Estatística básica',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'Um aplicativo de entregas registrou, em cinco pedidos consecutivos feitos a um mesmo restaurante, os seguintes tempos de espera, em minutos: 20, 22, 24, 26 e 98. O último pedido atrasou por causa de um acidente de trânsito. O gerente quer divulgar aos clientes um único número que represente o tempo de espera típico, sem que o atraso excepcional distorça a informação.',
      enunciado: 'A medida mais adequada para esse fim, bem como o valor dela, é, respectivamente,',
      alternativas: [
        'a média, 38 minutos.',
        'a amplitude, 78 minutos.',
        'a mediana, 22 minutos.',
        'a mediana, 24 minutos.',
        'a média, 24 minutos.'
      ],
      resposta: 3,
      explicacao: {
        resumo: 'A mediana, que é o valor central dos dados ordenados (24 min), quase não é afetada pelo valor extremo de 98 min.',
        detalhada: 'A **média** usa todos os valores e por isso é sensível a valores extremos: (20 + 22 + 24 + 26 + 98) ÷ 5 = 190 ÷ 5 = 38 min, bem acima do tempo da maioria dos pedidos.\n\nA **mediana** é o valor central com os dados em ordem crescente. Com cinco valores, é o terceiro: 20, 22, **24**, 26, 98. Se o último valor fosse 200, a mediana continuaria 24.\n\nA amplitude (98 − 20 = 78) mede dispersão, não o valor típico.',
        alternativas: [
          'A média (38 min) é puxada pelo valor atípico de 98 min.',
          'A amplitude mede a dispersão (98 − 20 = 78), não o tempo típico.',
          'A medida está certa, mas o valor está errado: 22 é o segundo valor, não o central.',
          'Correta. O terceiro valor da lista ordenada é 24.',
          'O valor 24 é da mediana; a média é 38 min.'
        ],
        dica: 'Quando o enunciado fala em valor "atípico" ou "extremo" e pede o valor "típico", pense em mediana.'
      },
      fontes: [
        { titulo: 'Wikipédia: Mediana (estatística)', url: 'https://pt.wikipedia.org/wiki/Mediana_(estat%C3%ADstica)' },
        { titulo: 'IBGE Educa', url: 'https://educa.ibge.gov.br/' }
      ]
    },
    {
      id: 'mat-704',
      materia: 'matematica',
      assunto: 'Funções',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 3,
      objetivos: ['enem', 'livre'],
      textoBase: 'Uma locadora de bicicletas elétricas oferece dois planos. No plano A, o cliente paga uma taxa fixa de R$ 80,00 mais R$ 0,50 por quilômetro rodado. No plano B, paga uma taxa fixa de R$ 50,00 mais R$ 0,80 por quilômetro rodado. Um turista quer escolher o plano mais barato para o passeio, cuja distância ele ainda não decidiu.',
      enunciado: 'O plano A é mais vantajoso que o plano B para qualquer distância',
      alternativas: [
        'maior que 60 km.',
        'menor que 100 km.',
        'igual a 100 km, e somente a ela.',
        'maior que 90 km.',
        'maior que 100 km.'
      ],
      resposta: 4,
      explicacao: {
        resumo: 'O custo de A é 80 + 0,5x e o de B é 50 + 0,8x. A é mais barato quando 80 + 0,5x < 50 + 0,8x, isto é, x > 100 km.',
        detalhada: 'Sendo x a distância em km: **A(x) = 80 + 0,5x** e **B(x) = 50 + 0,8x**.\n\nA é mais vantajoso quando A(x) < B(x): 80 + 0,5x < 50 + 0,8x, então 30 < 0,3x, logo **x > 100**.\n\nEm x = 100, os dois custam R$ 130,00 (empate). O plano A tem taxa fixa maior, mas cresce mais devagar; por isso compensa nos passeios longos.',
        alternativas: [
          'Dividiu a diferença das taxas fixas (30) pelo preço de A (0,50), o que dá 60, sem comparar as duas funções.',
          'Inverte o sentido: para distâncias menores que 100 km o plano B é que é mais barato.',
          'Quem acha o empate em 100 km (R$ 130,00 nos dois) e para aí concluiu que só nesse ponto A compensa; porém, A é mais barato em toda distância acima dele.',
          'Falsa: a 90 km, A custa R$ 125,00 e B custa R$ 122,00, então B ainda é mais barato. Quem erra aqui costuma errar a conta 0,3x > 30.',
          'Correta. 0,3x > 30 implica x > 100.'
        ],
        dica: 'Em comparação de planos, monte as duas funções afins e descubra onde se igualam. O plano de taxa fixa maior e variável menor vence nas distâncias longas.'
      },
      fontes: [
        { titulo: 'Wikipédia: Função afim', url: 'https://pt.wikipedia.org/wiki/Fun%C3%A7%C3%A3o_afim' },
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org/' }
      ]
    },
    /* ============================== FÍSICA ============================== */
    {
      id: 'fis-701',
      materia: 'fisica',
      assunto: 'Cinemática',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'Em uma viagem intermunicipal, um ônibus percorreu os primeiros 60 km de uma rodovia a 60 km/h, por causa de obras na pista. Em seguida, percorreu outros 60 km, já em trecho liberado, a 120 km/h.',
      enunciado: 'A velocidade escalar média do ônibus em todo o percurso foi de',
      alternativas: ['80 km/h.', '60 km/h.', '90 km/h.', '120 km/h.', '180 km/h.'],
      resposta: 0,
      explicacao: {
        resumo: 'Velocidade média é distância total ÷ tempo total: 120 km ÷ 1,5 h = 80 km/h.',
        detalhada: 'A velocidade média **não é a média aritmética** das velocidades quando os trechos têm tempos diferentes.\n\n- 1º trecho: 60 km ÷ 60 km/h = 1 h.\n- 2º trecho: 60 km ÷ 120 km/h = 0,5 h.\n\nTempo total = 1,5 h e distância total = 120 km, então vm = 120 ÷ 1,5 = **80 km/h**.\n\nO ônibus passou mais tempo na velocidade menor, por isso a média fica mais perto de 60 que de 120.',
        alternativas: [
          'Correta. 120 km em 1,5 h.',
          'É só a velocidade do primeiro trecho, ignorando o segundo.',
          'Média aritmética (60 + 120) ÷ 2, que só vale se os tempos forem iguais.',
          'É a distância total em km, não uma velocidade.',
          'Soma das velocidades, o que não tem significado físico.'
        ],
        dica: 'Se as distâncias são iguais e as velocidades diferem, a média não é aritmética (é harmônica). Sempre calcule tempo total e distância total.'
      },
      fontes: [
        { titulo: 'Wikipédia: Velocidade média', url: 'https://pt.wikipedia.org/wiki/Velocidade_m%C3%A9dia' },
        { titulo: 'Inmetro: Sistema Internacional de Unidades', url: 'https://www.gov.br/inmetro/pt-br' }
      ]
    },
    {
      id: 'fis-702',
      materia: 'fisica',
      assunto: 'Energia',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'Em uma residência, um chuveiro elétrico de potência 5 000 W é usado durante 20 minutos por dia, em todos os dias de um mês de 30 dias. A distribuidora de energia cobra R$ 0,80 por quilowatt-hora (kWh) consumido.',
      enunciado: 'O custo mensal da energia consumida apenas por esse chuveiro é de',
      alternativas: ['R$ 24,00.', 'R$ 40,00.', 'R$ 50,00.', 'R$ 120,00.', 'R$ 400,00.'],
      resposta: 1,
      explicacao: {
        resumo: 'Energia = 5 kW × (1/3 h) × 30 = 50 kWh; custo = 50 × 0,80 = R$ 40,00.',
        detalhada: 'A conta de luz cobra **energia (kWh) = potência (kW) × tempo (h)**.\n\n**Passo 1 (unidades):** 5 000 W = 5 kW e 20 min = 1/3 h.\n\n**Passo 2 (energia diária):** 5 × 1/3 = 5/3 kWh.\n\n**Passo 3 (mês):** 5/3 × 30 = 50 kWh.\n\n**Passo 4 (custo):** 50 × 0,80 = **R$ 40,00**.',
        alternativas: [
          'Tratou 20 minutos como 0,2 h (30 kWh × 0,80 = R$ 24,00). Minutos não são décimos de hora.',
          'Correta. 50 kWh × R$ 0,80.',
          'Confundiu a energia (50 kWh) com o valor em reais.',
          'Considerou 1 hora de banho por dia (5 × 30 = 150 kWh) e 150 × 0,80 = R$ 120,00.',
          'Errou a casa decimal na tarifa (R$ 8,00 por kWh).'
        ],
        dica: 'Converta minutos em horas dividindo por 60 (20 min = 1/3 h) e watts em quilowatts dividindo por 1 000.'
      },
      fontes: [
        { titulo: 'ANEEL: Agência Nacional de Energia Elétrica', url: 'https://www.gov.br/aneel/pt-br' },
        { titulo: 'Wikipédia: Quilowatt-hora', url: 'https://pt.wikipedia.org/wiki/Quilowatt-hora' }
      ]
    },
    {
      id: 'fis-703',
      materia: 'fisica',
      assunto: 'Dinâmica',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 3,
      objetivos: ['enem', 'livre'],
      textoBase: 'Uma oficina usa um elevador hidráulico para erguer veículos. O mecânico aplica uma força de 50 N no êmbolo menor, de área 4 cm². O êmbolo maior, onde fica o suporte do veículo, tem área de 80 cm². O fluido é incompressível e os atritos são desprezíveis. Considere g = 10 m/s².',
      enunciado: 'A maior massa que esse sistema consegue sustentar em equilíbrio é de',
      alternativas: ['0,25 kg.', '5 kg.', '100 kg.', '1 000 kg.', '4 000 kg.'],
      resposta: 2,
      explicacao: {
        resumo: 'Pelo princípio de Pascal, F2 = F1 × (A2/A1) = 50 × 20 = 1 000 N, que sustenta m = 1 000 ÷ 10 = 100 kg.',
        detalhada: 'No princípio de Pascal, a **pressão** transmitida é a mesma nos dois êmbolos: F1/A1 = F2/A2.\n\n**Força no êmbolo maior:** F2 = 50 × (80 ÷ 4) = 50 × 20 = 1 000 N.\n\n**Massa sustentada:** o peso é P = m·g, então m = 1 000 ÷ 10 = **100 kg**.\n\nO elevador multiplica a força por 20, mas o êmbolo menor percorre uma distância 20 vezes maior que a do maior (a energia se conserva).',
        alternativas: [
          'Usou a razão inversa (A1/A2) e obteve 2,5 N, que sustentam 0,25 kg.',
          'Dividiu só a força aplicada pelo g (50 ÷ 10), sem multiplicar pela razão das áreas.',
          'Correta. 1 000 N ÷ 10 m/s² = 100 kg.',
          'Parou na força de 1 000 N e a leu como massa em kg, esquecendo de dividir por g.',
          'Multiplicou 50 × 80, sem usar a razão entre as áreas.'
        ],
        dica: 'Em prensa hidráulica, a força é multiplicada pela razão das áreas. Depois, atenção ao último passo: força em newtons dividida por g dá massa em kg.'
      },
      fontes: [
        { titulo: 'Wikipédia: Prensa hidráulica', url: 'https://pt.wikipedia.org/wiki/Prensa_hidr%C3%A1ulica' },
        { titulo: 'Inmetro: Sistema Internacional de Unidades', url: 'https://www.gov.br/inmetro/pt-br' }
      ]
    },
    /* ============================== QUÍMICA ============================== */
    {
      id: 'qui-701',
      materia: 'quimica',
      assunto: 'Estequiometria',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'O gás natural, cujo componente principal é o metano (CH4), é usado como combustível em indústrias. A combustão completa do metano é representada pela equação CH4 + 2 O2 → CO2 + 2 H2O. Uma indústria queima 8 kg de metano por hora em uma caldeira. Dados de massas molares, em g/mol: H = 1, C = 12, O = 16.',
      enunciado: 'A massa de dióxido de carbono lançada na atmosfera a cada hora, nessa combustão completa, é de',
      alternativas: ['8 kg.', '11 kg.', '16 kg.', '22 kg.', '44 kg.'],
      resposta: 3,
      explicacao: {
        resumo: 'M(CH4) = 16 g/mol e M(CO2) = 44 g/mol. Como 1 mol de CH4 gera 1 mol de CO2, 16 kg de metano gerariam 44 kg; 8 kg geram 22 kg.',
        detalhada: 'A proporção na equação é **1 mol de CH4 : 1 mol de CO2**.\n\n- Massa molar do CH4 = 12 + 4 = 16 g/mol.\n- Massa molar do CO2 = 12 + 32 = 44 g/mol.\n\nPortanto 16 kg de CH4 produzem 44 kg de CO2. Regra de três: 8 kg de CH4 produzem 8 × 44 ÷ 16 = **22 kg** de CO2.\n\nO carbono não desaparece: o metano queimado volta à atmosfera como CO2, com massa maior porque agrega o oxigênio do ar.',
        alternativas: [
          'Supôs que a massa do produto é igual à do reagente, mas ela se conserva só no total (inclui O2 e H2O).',
          'Usou a metade do correto (0,25 kmol de CO2 em vez de 0,5 kmol).',
          'Confundiu com a massa molar do metano (16 g/mol).',
          'Correta. 0,5 kmol de CO2 × 44 kg/kmol.',
          'É a massa molar do CO2 (44 g/mol), que corresponderia a 16 kg de metano queimados.'
        ],
        dica: 'Em estequiometria, converta para mol, use a proporção da equação balanceada e volte para massa. Aqui a proporção é 1 : 1.'
      },
      fontes: [
        { titulo: 'Wikipédia: Metano', url: 'https://pt.wikipedia.org/wiki/Metano' },
        { titulo: 'gov.br: Ministério do Meio Ambiente', url: 'https://www.gov.br/mma/pt-br' }
      ]
    },
    {
      id: 'qui-702',
      materia: 'quimica',
      assunto: 'Soluções',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 1,
      objetivos: ['enem', 'livre'],
      textoBase: 'O soro fisiológico é uma solução aquosa de cloreto de sódio com concentração de 0,9% em massa por volume (0,9 g de NaCl para cada 100 mL de solução). Em um hospital, um enfermeiro prepara uma bolsa com 500 mL de soro fisiológico.',
      enunciado: 'A massa de cloreto de sódio que deve ser dissolvida para preparar essa bolsa é de',
      alternativas: ['4,5 g.', '9 g.', '0,9 g.', '45 g.', '450 g.'],
      resposta: 0,
      explicacao: {
        resumo: '0,9 g em cada 100 mL; em 500 mL, são 5 × 0,9 = 4,5 g de NaCl.',
        detalhada: 'Concentração de 0,9% m/v significa **0,9 g de soluto em 100 mL de solução**.\n\n500 mL são 5 vezes 100 mL, então a massa é 5 × 0,9 = **4,5 g**.\n\nEm regra de três: 0,9 g está para 100 mL assim como x está para 500 mL, logo x = 4,5 g.',
        alternativas: [
          'Correta. 0,9 g × 5.',
          'É o dobro do valor correto: resulta de usar 0,9 g para cada 50 mL em vez de 100 mL (10 × 0,9 = 9 g).',
          'É a massa para apenas 100 mL, que é a referência da concentração.',
          'Multiplicou por 50 em vez de 5.',
          'Multiplicou por 500 sem dividir por 100.'
        ],
        dica: 'Porcentagem m/v é gramas por 100 mL. Veja quantas vezes o volume pedido contém 100 mL.'
      },
      fontes: [
        { titulo: 'Wikipédia: Soro fisiológico', url: 'https://pt.wikipedia.org/wiki/Soro_fisiol%C3%B3gico' },
        { titulo: 'Anvisa', url: 'https://www.gov.br/anvisa/pt-br' }
      ]
    },
    {
      id: 'qui-703',
      materia: 'quimica',
      assunto: 'Química orgânica',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 1,
      objetivos: ['enem', 'livre'],
      textoBase: 'O vinagre é obtido pela fermentação do álcool presente em vinhos, sucos e outros líquidos por bactérias. Seu sabor azedo e seu caráter ácido se devem ao ácido acético (ácido etanoico), de fórmula estrutural CH3–C(=O)–OH, presente em cerca de 4% a 5% da mistura.',
      enunciado: 'O grupo funcional responsável pelo caráter ácido desse composto, e a função orgânica a que ele pertence, são, respectivamente,',
      alternativas: [
        'hidroxila (–OH), álcool.',
        'carbonila na extremidade da cadeia (–CHO), aldeído.',
        'carbonila entre dois carbonos (C=O), cetona.',
        'grupo –COO– entre dois carbonos, éster.',
        'carboxila (–COOH), ácido carboxílico.'
      ],
      resposta: 4,
      explicacao: {
        resumo: 'O grupo –C(=O)–OH (carboxila) caracteriza os ácidos carboxílicos.',
        detalhada: 'O grupo **carboxila** reúne uma carbonila (C=O) e uma hidroxila (–OH) no mesmo carbono: –COOH. Os compostos que o possuem são os **ácidos carboxílicos**, e o hidrogênio da hidroxila é liberado em água, o que dá o caráter ácido.\n\nO nome etanoico segue a regra: prefixo "et" (2 carbonos) + "an" (ligação simples) + "oico" (ácido carboxílico).\n\nNa fermentação acética, o etanol (um álcool) é oxidado a ácido acético.',
        alternativas: [
          'Álcool tem –OH ligado a carbono saturado, sem carbonila; é a matéria-prima do vinagre, não o ácido.',
          'Aldeído tem –CHO (carbonila na ponta da cadeia, com H ligado ao C=O), sem a hidroxila.',
          'Cetona tem carbonila (C=O) entre dois carbonos, sem a hidroxila ligada ao carbono carbonílico; o –OH do vinagre está na carboxila, não numa cetona.',
          'Éster é –COO– entre dois carbonos (R–COO–R); aqui o oxigênio liga H, não carbono.',
          'Correta. –COOH é a carboxila.'
        ],
        dica: 'A terminação "-oico" no nome sistemático indica ácido carboxílico. Aldeído é "-al"; cetona, "-ona"; álcool, "-ol".'
      },
      fontes: [
        { titulo: 'Wikipédia: Ácido acético', url: 'https://pt.wikipedia.org/wiki/%C3%81cido_ac%C3%A9tico' },
        { titulo: 'Anvisa', url: 'https://www.gov.br/anvisa/pt-br' }
      ]
    },
    /* ============================== BIOLOGIA ============================== */
    {
      id: 'bio-701',
      materia: 'biologia',
      assunto: 'Genética',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'O albinismo oculocutâneo é uma condição de herança autossômica recessiva, caracterizada pela ausência de produção de melanina. Um casal com pigmentação normal da pele tem um filho albino e deseja ter mais um filho.',
      enunciado: 'A probabilidade de que o próximo filho do casal seja uma menina albina é de',
      alternativas: ['6,25%.', '12,5%.', '25%.', '50%.', '75%.'],
      resposta: 1,
      explicacao: {
        resumo: 'Os pais são Aa × Aa. P(aa) = 1/4 e P(menina) = 1/2; como são eventos independentes, 1/4 × 1/2 = 1/8 = 12,5%.',
        detalhada: 'Se o casal é normal e teve um filho albino (aa), cada genitor passou um alelo a; logo, **ambos são heterozigotos (Aa)**.\n\nNo cruzamento Aa × Aa, a prole tem 1/4 AA, 1/2 Aa e 1/4 aa: P(albino) = 1/4.\n\nA probabilidade de ser menina é 1/2, independente do albinismo (locus autossômico). Pela **regra do "e"** (eventos independentes se multiplicam): 1/4 × 1/2 = 1/8 = **12,5%**.\n\nO fato de já existir um filho albino não altera a probabilidade do próximo: cada gravidez é independente.',
        alternativas: [
          'É 1/16, que resulta de multiplicar duas probabilidades de 1/4.',
          'Correta. 1/4 × 1/2 = 1/8.',
          'É a probabilidade de albino, sem considerar o sexo.',
          'É a probabilidade de portador (Aa), ou a de menina, mas não do evento pedido.',
          'É a probabilidade de a criança ter pigmentação normal (AA ou Aa).'
        ],
        dica: 'Pais normais com filho afetado em herança recessiva: ambos são Aa. Para "e" (albino E menina), multiplique as probabilidades.'
      },
      fontes: [
        { titulo: 'Wikipédia: Leis de Mendel', url: 'https://pt.wikipedia.org/wiki/Leis_de_Mendel' },
        { titulo: 'gov.br: Ministério da Saúde', url: 'https://www.gov.br/saude/pt-br' }
      ]
    },
    {
      id: 'bio-702',
      materia: 'biologia',
      assunto: 'Ecologia',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'Em um rio da Amazônia contaminado por mercúrio de garimpos, pesquisadores analisaram quatro níveis de uma mesma cadeia alimentar: fitoplâncton, pequenos crustáceos que se alimentam dele, peixes que comem os crustáceos e peixes grandes que comem os peixes menores. O mercúrio, na forma de metilmercúrio, é absorvido com facilidade e quase não é eliminado pelos organismos.',
      enunciado: 'A maior concentração do metal deve ser encontrada nos peixes grandes, porque',
      alternativas: [
        'eles vivem em águas mais profundas, onde o metal se deposita.',
        'o fitoplâncton elimina o metal, que é transferido apenas aos peixes.',
        'os produtores absorvem mais mercúrio que os consumidores por fazerem fotossíntese.',
        'o metal se acumula nos tecidos e é transferido de um nível trófico a outro, concentrando-se no topo da cadeia.',
        'o mercúrio é degradado por decompositores, restando mais nos peixes maiores.'
      ],
      resposta: 3,
      explicacao: {
        resumo: 'Como o mercúrio não é eliminado, ele se acumula no corpo e aumenta de concentração a cada nível trófico: é a magnificação trófica.',
        detalhada: 'Substâncias **persistentes** (que não se degradam) e **bioacumulativas** (que se fixam nos tecidos) passam de presa a predador. Cada peixe pequeno contém o metal de todos os crustáceos que comeu; o peixe grande, o de todos os pequenos.\n\nO resultado é a **biomagnificação (ou magnificação trófica)**: a concentração cresce do fitoplâncton ao predador de topo. Por isso as populações ribeirinhas que se alimentam de peixes carnívoros grandes estão mais expostas.',
        alternativas: [
          'A profundidade não é o fator citado; a concentração decorre da cadeia alimentar.',
          'O texto diz que o metal quase não é eliminado, e a transferência ocorre desde o primeiro nível.',
          'A fotossíntese não explica o acúmulo; as concentrações menores nos produtores decorrem de serem a base da cadeia.',
          'Correta. É a biomagnificação.',
          'Decompositores não degradam o mercúrio, que é um elemento químico, e não uma molécula orgânica.'
        ],
        dica: 'Poluente persistente + cadeia alimentar = a concentração cresce rumo ao predador de topo.'
      },
      fontes: [
        { titulo: 'Wikipédia: Bioacumulação', url: 'https://pt.wikipedia.org/wiki/Bioacumula%C3%A7%C3%A3o' },
        { titulo: 'gov.br: Ministério do Meio Ambiente', url: 'https://www.gov.br/mma/pt-br' }
      ]
    },
    {
      id: 'bio-703',
      materia: 'biologia',
      assunto: 'Citologia',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 1,
      objetivos: ['enem', 'livre'],
      textoBase: 'Ao preparar uma salada, uma cozinheira temperou as folhas de alface com sal e deixou o prato na mesa por cerca de 20 minutos. Ao voltar, notou que as folhas estavam murchas e que havia água acumulada no fundo do prato.',
      enunciado: 'O fenômeno que explica a murcha das folhas é a',
      alternativas: [
        'saída de água das células para o meio mais concentrado, por osmose.',
        'entrada de sal nas células por transporte ativo, que as desidrata.',
        'entrada de água nas células por osmose, que provoca o rompimento da parede celular.',
        'digestão do conteúdo celular pelos lisossomos, estimulada pelo sal.',
        'perda de gás carbônico pelos estômatos, provocada pela fotossíntese.'
      ],
      resposta: 0,
      explicacao: {
        resumo: 'O sal torna o meio externo hipertônico; a água sai das células vegetais por osmose, e as folhas perdem a turgência.',
        detalhada: 'A **osmose** é a passagem de água, através de uma membrana semipermeável, do meio menos concentrado (hipotônico) para o mais concentrado (hipertônico).\n\nCom o sal, o meio externo fica **hipertônico** em relação ao interior das células da alface. A água sai, o vacúolo diminui, a célula perde a pressão de turgor (**plasmólise**) e a folha murcha. A água que se acumula no prato é a que saiu das células.\n\nÉ também por isso que o sal conserva carnes e peixes: desidrata as células dos microrganismos.',
        alternativas: [
          'Correta.',
          'O sal não é transportado ativamente para dentro; a questão é o fluxo de água.',
          'É o oposto: a água sai. A entrada de água em meio hipotônico deixa a célula túrgida.',
          'Não há digestão celular envolvida no episódio, e sim movimento de água.',
          'Os estômatos não têm relação com a água no prato, nem ocorre fotossíntese na mesa.'
        ],
        dica: 'A água sempre vai para o lado mais concentrado em soluto. Muito sal fora da célula significa água saindo.'
      },
      fontes: [
        { titulo: 'Wikipédia: Osmose', url: 'https://pt.wikipedia.org/wiki/Osmose' },
        { titulo: 'gov.br: Ministério da Saúde', url: 'https://www.gov.br/saude/pt-br' }
      ]
    },
    {
      id: 'bio-704',
      materia: 'biologia',
      assunto: 'Evolução',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'Em um hospital, uma bactéria que antes morria com o tratamento padrão passou a causar infecções que não respondem mais a um determinado antibiótico. Os médicos observaram que, em pacientes tratados de forma incompleta, a população bacteriana voltava a crescer e, ao longo dos meses, a maioria das bactérias isoladas na enfermaria era resistente ao medicamento.',
      enunciado: 'Do ponto de vista da teoria evolutiva, o aumento de bactérias resistentes se explica porque',
      alternativas: [
        'as bactérias criam a resistência ao perceber a presença do antibiótico, adaptando-se a ele.',
        'o antibiótico provoca mutações dirigidas, que tornam as bactérias resistentes.',
        'o uso intenso de uma característica faz que ela seja transmitida aos descendentes.',
        'o antibiótico enfraquece as bactérias sensíveis, que deixam descendentes resistentes.',
        'o antibiótico elimina as bactérias sensíveis e favorece a reprodução das variantes já resistentes, que passam o caráter adiante.'
      ],
      resposta: 4,
      explicacao: {
        resumo: 'Há variação prévia na população; o antibiótico exerce seleção natural, e as bactérias resistentes sobrevivem, se reproduzem e transmitem a resistência.',
        detalhada: 'Na teoria sintética da evolução, a **variabilidade** surge por mutação e recombinação, ao acaso e antes da pressão seletiva. Algumas bactérias já traziam um alelo de resistência.\n\nO antibiótico atua como **agente seletivo**: mata as sensíveis e deixa as resistentes, que se multiplicam rapidamente e passam o alelo aos descendentes. Com o tempo, a frequência do alelo aumenta.\n\nO tratamento interrompido deixa sobreviventes resistentes, por isso é importante terminá-lo conforme a prescrição.',
        alternativas: [
          'Ideia de adaptação intencional, que a evolução não contempla. A variação ocorre antes e ao acaso.',
          'O antibiótico não induz mutações dirigidas; apenas seleciona as que já existem.',
          'É o lamarckismo (uso e desuso), que não explica a transmissão da característica.',
          'A resistência está nos genes; sensíveis não geram descendentes resistentes por enfraquecimento.',
          'Correta. É a seleção natural.'
        ],
        dica: 'A seleção natural escolhe a variação que já existe; ela não cria a característica "por necessidade".'
      },
      fontes: [
        { titulo: 'Wikipédia: Resistência a antibióticos', url: 'https://pt.wikipedia.org/wiki/Resist%C3%AAncia_a_antibi%C3%B3ticos' },
        { titulo: 'Anvisa', url: 'https://www.gov.br/anvisa/pt-br' }
      ]
    },
    /* ============================== HISTÓRIA ============================== */
    {
      id: 'his-701',
      materia: 'historia',
      assunto: 'Brasil Império',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'Em setembro de 1850, o Império do Brasil aprovou duas leis. A Lei nº 581 (Lei Eusébio de Queirós) estabeleceu medidas para a repressão do tráfico de africanos. A Lei nº 601 (Lei de Terras) determinou que as terras devolutas, isto é, as terras públicas sem uso, só poderiam ser adquiridas por compra, ficando proibida a aquisição por outro título.',
      enunciado: 'Lidas em conjunto, essas leis indicam que, em meados do século XIX, o Estado imperial',
      alternativas: [
        'abandonou o grande latifúndio, ao distribuir terras gratuitamente aos trabalhadores.',
        'interrompeu a produção agrícola de exportação, para dar lugar à indústria.',
        'preparava a transição para o trabalho livre, regulando o acesso à terra de modo a preservar o poder dos grandes proprietários.',
        'reconheceu a posse de terras por escravos libertos, em compensação ao fim do tráfico.',
        'retirou do Estado o controle sobre as terras públicas, que passaram a ser de livre ocupação.'
      ],
      resposta: 2,
      explicacao: {
        resumo: 'Com o fim do tráfico, a mão de obra escrava tendia a escassear; ao exigir compra para obter terra, a Lei de Terras dificultou o acesso de libertos e imigrantes pobres e manteve a grande propriedade.',
        detalhada: 'A **Lei Eusébio de Queirós (1850)** pôs fim efetivo ao tráfico atlântico de africanos para o Brasil, diante da pressão britânica e de interesses internos. A escravidão ainda continuaria por décadas, mas era preciso pensar na futura mão de obra.\n\nA **Lei de Terras (1850)** acabou com a possibilidade de ocupar terras devolutas pela posse e só admitiu a **compra**. Quem tinha pouco dinheiro, como ex-escravizados e imigrantes, tinha pouco acesso à terra e precisava trabalhar para os grandes fazendeiros. Assim, a terra tornou-se mercadoria, e a propriedade ficou concentrada.\n\nAs duas leis são lidas como parte de um mesmo movimento: **preparar a transição para o trabalho livre sem abalar a elite agrária**.',
        alternativas: [
          'Contraria o texto: a Lei de Terras exige compra, e não distribui terras.',
          'Nada no texto indica fim da exportação; o café seguia como base da economia.',
          'Correta.',
          'O texto não reconhece posse a libertos; a exigência de compra os dificulta.',
          'Ao contrário: a lei reforça o controle do Estado, que passa a vender as terras.'
        ],
        dica: 'Quando o ENEM junta duas leis da mesma data, procure a lógica em comum. Aqui: trabalho (tráfico) e terra (Lei de Terras).'
      },
      fontes: [
        { titulo: 'Lei nº 601, de 18 de setembro de 1850 (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/leis/l0601-1850.htm' },
        { titulo: 'Lei nº 581, de 4 de setembro de 1850 (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/leis/lim/lim581.htm' }
      ]
    },
    {
      id: 'his-702',
      materia: 'historia',
      assunto: 'Era Vargas',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'Em 1º de maio de 1943, durante o Estado Novo, o governo de Getúlio Vargas aprovou o Decreto-Lei nº 5.452, que instituiu a Consolidação das Leis do Trabalho (CLT). A data, Dia do Trabalhador, foi escolhida de propósito. O texto reuniu normas já existentes sobre jornada, férias, carteira de trabalho e organização sindical. Os sindicatos reconhecidos deviam ser registrados no Ministério do Trabalho.',
      enunciado: 'Considerando o contexto político em que foi editada, a CLT',
      alternativas: [
        'representou uma conquista dos sindicatos livres, que negociaram as normas com o Congresso.',
        'estendeu aos trabalhadores rurais os mesmos direitos dos urbanos, desde a sua edição.',
        'aboliu os sindicatos, por considerá-los incompatíveis com o governo.',
        'reuniu os direitos trabalhistas em um único código e manteve os sindicatos sob a tutela do Estado.',
        'foi fruto da Assembleia Constituinte de 1946, após a queda de Vargas.'
      ],
      resposta: 3,
      explicacao: {
        resumo: 'A CLT consolidou os direitos trabalhistas em um só texto, mas o Estado Novo manteve os sindicatos subordinados ao Ministério do Trabalho.',
        detalhada: 'A CLT **reuniu e sistematizou** leis trabalhistas editadas desde 1930. Foi um marco de proteção ao trabalhador urbano e ajudou a construir a imagem de Vargas como "pai dos pobres".\n\nPorém, a CLT foi decretada em um **regime autoritário** (Estado Novo, 1937–1945), sem Congresso funcionando. O modelo sindical era **corporativista**: sindicatos únicos e registrados e controlados pelo Ministério do Trabalho. O Estado concedia direitos e, em troca, controlava a organização operária.\n\nOs trabalhadores rurais só tiveram estatuto próprio com o Estatuto do Trabalhador Rural, de 1963.',
        alternativas: [
          'Os sindicatos não negociaram a CLT, e o Congresso estava fechado no Estado Novo.',
          'A CLT tratava do trabalho urbano; o rural teve legislação própria depois.',
          'Os sindicatos não foram abolidos: foram regulados e controlados pelo Estado.',
          'Correta.',
          'A CLT é de 1943, bem antes da Constituinte de 1946.'
        ],
        dica: 'No Estado Novo, todo "benefício" vem com controle: direito social concedido pelo alto, sindicato atrelado ao Estado.'
      },
      fontes: [
        { titulo: 'Decreto-Lei nº 5.452, de 1º de maio de 1943 (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm' },
        { titulo: 'gov.br: Ministério do Trabalho e Emprego', url: 'https://www.gov.br/trabalho-e-emprego/pt-br' }
      ]
    },
    {
      id: 'his-703',
      materia: 'historia',
      assunto: 'Ditadura militar e redemocratização',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'Entre 1983 e 1984, comícios reuniram multidões em várias capitais brasileiras para exigir eleições diretas para presidente da República. A proposta de emenda constitucional que as restabeleceria (Emenda Dante de Oliveira) foi votada na Câmara dos Deputados em abril de 1984 e não alcançou os votos necessários para ser aprovada. Em janeiro de 1985, o Colégio Eleitoral, de eleição indireta, escolheu Tancredo Neves, candidato de oposição, para a Presidência.',
      enunciado: 'A sequência de fatos descrita no texto permite concluir que',
      alternativas: [
        'a transição democrática se deu por pressão popular e por negociação política, ainda sem eleições diretas para presidente.',
        'o movimento pelas eleições diretas fracassou por completo e não teve efeitos políticos.',
        'o regime militar aceitou imediatamente as reivindicações populares.',
        'o fim do regime militar ocorreu por golpe das Forças Armadas contra os civis.',
        'a eleição direta para presidente foi restabelecida em 1984, com a aprovação da emenda.'
      ],
      resposta: 0,
      explicacao: {
        resumo: 'A emenda foi derrotada, mas a mobilização enfraqueceu o regime; a saída ocorreu por via indireta, com vitória de um candidato da oposição, que marcou a transição para o governo civil.',
        detalhada: 'A campanha das **Diretas Já** foi um dos maiores movimentos de massa da história brasileira. A emenda não obteve o apoio exigido na Câmara dos Deputados, e o regime conseguiu manter o processo indireto.\n\nContudo, a mobilização tinha deslocado o equilíbrio de forças. Parte da base governista rompeu com o regime, e a oposição se uniu na candidatura de Tancredo Neves, que venceu o Colégio Eleitoral em janeiro de 1985. Tancredo adoeceu na véspera da posse e morreu em abril de 1985; José Sarney, o vice, tomou posse e assumiu a Presidência, e o primeiro presidente civil desde 1964 foi, assim, definido em uma **transição negociada ("lenta, gradual e segura")**, e as eleições diretas para presidente só ocorreram em 1989.',
        alternativas: [
          'Correta.',
          'Houve efeitos políticos: a pressão contribuiu para a vitória da oposição no Colégio Eleitoral.',
          'A emenda foi rejeitada, e não aceita pelo governo.',
          'O texto não menciona golpe; a transição foi por vias institucionais.',
          'A emenda não foi aprovada; as eleições diretas ocorreram só em 1989.'
        ],
        dica: 'Diretas Já: emenda derrotada (1984), mas efeito político real. Tancredo, eleito indiretamente (1985), e eleição direta só em 1989.'
      },
      fontes: [
        { titulo: 'Câmara dos Deputados: Diretas Já', url: 'https://www.camara.leg.br/radio/programas/277301-diretas-ja-marcou-a-historia-do-pais-e-reuniu-milhoes-de-pessoas/' },
        { titulo: 'Constituição Federal de 1988 (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm' }
      ]
    },
    {
      id: 'his-704',
      materia: 'historia',
      assunto: 'História geral',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'Na Inglaterra do início do século XIX, as fábricas têxteis de Manchester funcionavam com máquinas a vapor. Muitos operários, incluindo crianças, trabalhavam de 12 a 14 horas por dia por salários baixos, em ambientes insalubres. Aos poucos, os operários passaram a se organizar em associações para defender seus interesses, e o Parlamento aprovou, ao longo do século, as Leis Fabris, que limitaram o trabalho infantil e a jornada nas fábricas.',
      enunciado: 'No contexto da Revolução Industrial, a organização dos operários mencionada no texto teve como principal objetivo',
      alternativas: [
        'restabelecer o trabalho artesanal, extinguindo as fábricas.',
        'obter melhores condições de trabalho e salário por meio de ação coletiva e pressão por leis.',
        'transferir as indústrias para o campo, onde viviam os proprietários de terras.',
        'garantir o direito de propriedade dos industriais, que lhes cabia por lei.',
        'financiar a compra de máquinas a vapor pelas famílias de trabalhadores.'
      ],
      resposta: 1,
      explicacao: {
        resumo: 'Diante da exploração nas fábricas, os operários se uniram em associações (trade unions) para negociar e pressionar por leis que limitassem jornada e trabalho infantil.',
        detalhada: 'A **Revolução Industrial** criou o proletariado urbano: trabalhadores sem a propriedade dos meios de produção, dependentes do salário. As condições eram duras.\n\nA reação veio de forma coletiva: sociedades de ajuda mútua, **sindicatos (trade unions)**, greves e movimentos políticos como o cartismo. Alguns grupos chegaram a quebrar máquinas (ludismo), mas a tendência vencedora foi a de organização e pressão por **legislação** (Leis Fabris), com limites à jornada e ao trabalho de crianças.\n\nO texto fala da organização em associações e de leis, e não de retorno ao passado.',
        alternativas: [
          'Isso seria a posição dos ludistas, e não da organização por direitos citada no texto.',
          'Correta.',
          'O texto não indica deslocamento das fábricas.',
          'Os industriais já tinham a propriedade garantida; a organização operária era para reivindicar direitos.',
          'Não há relação com o texto: os operários tinham salários baixos.'
        ],
        dica: 'Associação de operários + leis que limitam jornada = luta por direitos trabalhistas. Não confunda com o ludismo (destruição de máquinas).'
      },
      fontes: [
        { titulo: 'Wikipédia: Revolução Industrial', url: 'https://pt.wikipedia.org/wiki/Revolu%C3%A7%C3%A3o_Industrial' },
        { titulo: 'Britannica: Industrial Revolution', url: 'https://www.britannica.com/event/Industrial-Revolution' }
      ]
    },
    /* ============================== GEOGRAFIA ============================== */
    {
      id: 'geo-701',
      materia: 'geografia',
      assunto: 'Climatologia',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'Em anos de El Niño, as águas superficiais do oceano Pacífico equatorial ficam mais quentes que o normal. Esse aquecimento altera a circulação da atmosfera em escala global, e o fenômeno é monitorado de perto por institutos de meteorologia, como o INPE (por meio do seu Centro de Previsão de Tempo e Estudos Climáticos, o CPTEC) no Brasil.',
      enunciado: 'No território brasileiro, os efeitos mais comuns do El Niño são',
      alternativas: [
        'chuvas acima da média no Nordeste e seca no Sul.',
        'queda de temperatura em todo o país e geadas na Amazônia.',
        'redução das chuvas no Norte e no Nordeste e aumento das chuvas no Sul.',
        'chuvas intensas no Centro-Oeste e seca no Sudeste, sem alteração no Sul.',
        'aumento do volume de chuvas em todo o semiárido nordestino.'
      ],
      resposta: 2,
      explicacao: {
        resumo: 'Em anos de El Niño, é comum haver seca no Norte e no Nordeste e chuvas acima da média no Sul do Brasil.',
        detalhada: 'O El Niño altera a **circulação de Walker**. Sobre o Brasil, o padrão comum é:\n\n- **Norte e Nordeste:** menos chuvas, com risco de seca no semiárido e na Amazônia oriental.\n- **Sul:** chuvas acima da média e enchentes.\n- **Sudeste:** temperaturas mais altas em boa parte do ano.\n\nÉ um padrão **típico**, não uma regra, pois outros sistemas atmosféricos também influenciam. A fase oposta, a La Niña (resfriamento do Pacífico), tende a inverter o quadro.',
        alternativas: [
          'Inverte o padrão: o Nordeste tende a ter menos chuva no El Niño.',
          'O El Niño está associado a anomalias de temperatura mais altas, e não a geadas na Amazônia.',
          'Correta.',
          'O padrão mais típico é o de mais chuva no Sul; a seca está no Norte e no Nordeste.',
          'O semiárido tende a receber menos chuva no El Niño.'
        ],
        dica: 'El Niño: Sul molhado, Norte e Nordeste seco. La Niña tende a inverter.'
      },
      fontes: [
        { titulo: 'Wikipédia: El Niño', url: 'https://pt.wikipedia.org/wiki/El_Ni%C3%B1o' },
        { titulo: 'INPE (CPTEC/INPE: previsão de tempo e clima)', url: 'https://www.gov.br/inpe/pt-br' }
      ]
    },
    {
      id: 'geo-702',
      materia: 'geografia',
      assunto: 'Biomas brasileiros',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'O Cerrado ocupa parte do Planalto Central e é conhecido como "berço das águas". Nele nascem rios que alimentam bacias hidrográficas importantes, como a do Tocantins-Araguaia, a do São Francisco e a do Paraná. Ao mesmo tempo, é uma das áreas de maior expansão da agricultura mecanizada de grãos, o que gera debate sobre a conservação do bioma.',
      enunciado: 'A preservação do Cerrado é estratégica para o abastecimento de água do país porque esse bioma',
      alternativas: [
        'ocupa áreas de baixa altitude, onde a água da chuva se acumula em lagos.',
        'tem vegetação densa que impede a evaporação e conserva a água do solo.',
        'concentra rios exclusivamente temporários, que dependem da floresta para existir.',
        'está distante dos grandes centros e, por isso, não é afetado pelo uso do solo.',
        'abriga nascentes que abastecem várias bacias hidrográficas e tem solos que favorecem a infiltração e a recarga dos aquíferos.'
      ],
      resposta: 4,
      explicacao: {
        resumo: 'Por ocupar áreas elevadas do Planalto Central e ter solos profundos e permeáveis, o Cerrado alimenta nascentes e aquíferos que abastecem diferentes bacias.',
        detalhada: 'O Cerrado está em posição **elevada** (planaltos e chapadas), de onde partem rios para direções diferentes: Tocantins-Araguaia, São Francisco e Paraná, entre outros. Por isso é chamado de "berço das águas".\n\nSeus solos profundos e bem drenados favorecem a **infiltração** da água da chuva e a recarga dos **aquíferos**, que mantêm os rios na seca. A remoção da vegetação e o uso intensivo do solo ameaçam essa função.\n\nO Cerrado não é "floresta": a vegetação é de savana, com árvores de raízes profundas.',
        alternativas: [
          'O Cerrado ocupa planaltos, em altitude, e não áreas baixas.',
          'A vegetação não é densa como a de uma floresta; é característica de savana.',
          'Os rios da região são perenes em boa parte, e não exclusivamente temporários.',
          'O Cerrado é muito afetado pelo uso do solo, sobretudo pela expansão agrícola.',
          'Correta.'
        ],
        dica: 'Cerrado = "berço das águas": nascentes em planalto e recarga de aquíferos. Quem o desmata afeta várias bacias.'
      },
      fontes: [
        { titulo: 'IBGE Educa', url: 'https://educa.ibge.gov.br/' },
        { titulo: 'Ministério do Meio Ambiente', url: 'https://www.gov.br/mma/pt-br' }
      ]
    },
    {
      id: 'geo-703',
      materia: 'geografia',
      assunto: 'Urbanização',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 1,
      objetivos: ['enem', 'livre'],
      textoBase: 'Marcela mora na cidade A e trabalha na cidade B, que faz limite com a primeira. Entre as duas, a mancha urbana é contínua: não se sabe onde termina uma e começa a outra. Todos os dias, ela gasta cerca de duas horas, no total, para ir e voltar do trabalho. Milhares de pessoas fazem o mesmo trajeto.',
      enunciado: 'Os processos urbanos descritos na situação são, respectivamente,',
      alternativas: [
        'a conurbação e o movimento pendular.',
        'o êxodo rural e a segregação socioespacial.',
        'a gentrificação e a verticalização.',
        'a macrocefalia urbana e o êxodo urbano.',
        'a periferização e a desconcentração industrial.'
      ],
      resposta: 0,
      explicacao: {
        resumo: 'A união contínua das manchas urbanas é a conurbação, e o deslocamento diário entre cidade de moradia e de trabalho é o movimento pendular.',
        detalhada: 'A **conurbação** ocorre quando o crescimento de duas ou mais cidades vizinhas as une fisicamente, formando uma área urbana contínua. É comum nas **regiões metropolitanas**.\n\nO **movimento pendular** (ou migração pendular) é o deslocamento diário de pessoas entre o município de residência e o de trabalho ou estudo. É característico de áreas conurbadas, e o IBGE usa esses fluxos para delimitar os arranjos populacionais.\n\nAs demais opções trazem conceitos que existem, mas não descrevem a situação.',
        alternativas: [
          'Correta.',
          'Êxodo rural é a migração do campo para a cidade; não há campo na situação.',
          'Gentrificação é a valorização de um bairro popular com a saída de moradores mais pobres; verticalização é a construção de prédios.',
          'Macrocefalia é a concentração desproporcional em uma só cidade; êxodo urbano é cidade para o campo.',
          'Periferização é a expansão para a periferia; não há menção a indústrias.'
        ],
        dica: 'Manchas urbanas que se juntam = conurbação. Ir e voltar todo dia entre duas cidades = movimento pendular.'
      },
      fontes: [
        { titulo: 'IBGE Educa', url: 'https://educa.ibge.gov.br/' },
        { titulo: 'IBGE', url: 'https://www.ibge.gov.br/' }
      ]
    },
    {
      id: 'geo-704',
      materia: 'geografia',
      assunto: 'Cartografia',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'Uma empresa marca uma videoconferência entre duas filiais. A filial A está localizada no meridiano de 45° de longitude Oeste, e a filial B, no meridiano de 60° de longitude Oeste. Considere que, em cada filial, vale o horário solar do próprio meridiano e que a Terra gira 360° em 24 horas, no sentido oeste-leste.',
      enunciado: 'Quando for meio-dia (12 h) na filial A, o horário na filial B será',
      alternativas: ['9 h.', '11 h.', '12 h.', '13 h.', '15 h.'],
      resposta: 1,
      explicacao: {
        resumo: 'Cada 15° de longitude correspondem a 1 hora. B está 15° a oeste de A, portanto 1 hora atrás: 11 h.',
        detalhada: 'A Terra gira 360° em 24 h, então **cada 15° equivalem a 1 hora** (360 ÷ 24 = 15).\n\nDiferença de longitude: 60° − 45° = 15°, ou seja, 1 hora.\n\nComo a Terra gira de oeste para leste, o Sol nasce primeiro nos lugares mais a leste. A filial B está mais a **oeste**, e é mais cedo lá: 12 h − 1 h = **11 h**.\n\nRegra prática: **a leste, o horário adianta; a oeste, atrasa**.',
        alternativas: [
          'Subtraiu 3 horas, o que corresponderia a 45° de diferença.',
          'Correta.',
          'Ignorou a diferença de longitude.',
          'Somou 1 hora; B está a oeste, então é mais cedo.',
          'Somou 3 horas e errou o sentido.'
        ],
        dica: 'Leste = mais tarde; oeste = mais cedo. 15° de longitude valem 1 hora.'
      },
      fontes: [
        { titulo: 'Observatório Nacional: Hora legal brasileira', url: 'https://www.gov.br/observatorio/pt-br' },
        { titulo: 'Wikipédia: Fuso horário', url: 'https://pt.wikipedia.org/wiki/Fuso_hor%C3%A1rio' }
      ]
    },
    /* ============================== PORTUGUÊS ============================== */
    {
      id: 'por-701',
      materia: 'portugues',
      assunto: 'Interpretação de texto',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'No fim da tarde, a praça da cidade parecia uma sala de espera: dezenas de pessoas, cada uma em seu banco, de cabeça baixa, iluminadas pelo brilho azulado do celular. Ninguém olhava para o ipê florido, que despejava flores amarelas no chão, nem para o menino que tentava, sozinho, empinar uma pipa sem vento. A praça estava cheia, mas ninguém estava nela.',
      enunciado: 'No último período do texto, a oposição entre "cheia" e "ninguém estava nela" produz o sentido de que',
      alternativas: [
        'a praça foi abandonada pela população e está vazia.',
        'a tecnologia aproxima as pessoas e valoriza os espaços públicos.',
        'a presença física no espaço público não garante a participação nele, já que a atenção está voltada ao celular.',
        'os frequentadores da praça são apenas crianças, e os adultos estão em casa.',
        'o ipê florido é a única atração da praça e ninguém consegue vê-lo.'
      ],
      resposta: 2,
      explicacao: {
        resumo: 'A frase é um paradoxo: a praça está cheia de gente, mas ninguém "está" nela de fato, pois a atenção está nos celulares. A crítica é à ausência de vivência do espaço comum.',
        detalhada: 'O texto descreve uma cena de **presença sem atenção**. As pessoas ocupam a praça, mas não percebem o que há nela (o ipê, o menino).\n\nA última frase fecha a descrição com um **paradoxo**: "cheia" se refere à presença física; "ninguém estava nela", à presença de fato, atenta e participativa. Há uma crítica sutil ao uso do celular que isola as pessoas mesmo em espaços de convivência.\n\nPara interpretar bem, releia as frases anteriores: elas preparam o sentido do final.',
        alternativas: [
          'O texto afirma que a praça está cheia, e não vazia.',
          'O texto sugere o contrário: a tecnologia afasta as pessoas do espaço.',
          'Correta.',
          'O texto cita dezenas de pessoas, sem restringir a idade; só o menino está sozinho.',
          'O ipê é só um dos elementos ignorados, e a frase final não trata dele em particular.'
        ],
        dica: 'Quando o texto opõe duas expressões (cheia/ninguém), procure o paradoxo: a mesma coisa vista em dois níveis diferentes (físico e simbólico).'
      },
      fontes: [
        { titulo: 'Base Nacional Comum Curricular: Língua Portuguesa', url: 'https://basenacionalcomum.mec.gov.br/' },
        { titulo: 'Inep: Matriz de referência do ENEM', url: 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem' }
      ]
    },
    {
      id: 'por-702',
      materia: 'portugues',
      assunto: 'Coesão e coerência',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'A coleta seletiva avançou nas cidades brasileiras; no entanto, grande parte do material reciclável ainda chega aos aterros misturada ao lixo comum, uma vez que muitas famílias não separam os resíduos em casa. Portanto, ampliar a coleta sem educar a população resulta em pouco ganho ambiental.',
      enunciado: 'No texto, as expressões destacadas "no entanto", "uma vez que" e "Portanto" estabelecem, respectivamente, relações de',
      alternativas: [
        'adição, finalidade e oposição.',
        'oposição, tempo e conclusão.',
        'causa, oposição e explicação.',
        'oposição, causa e conclusão.',
        'concessão, condição e consequência.'
      ],
      resposta: 3,
      explicacao: {
        resumo: '"No entanto" introduz oposição; "uma vez que" introduz causa; "Portanto" introduz conclusão.',
        detalhada: 'Os conectivos organizam as ideias:\n\n- **"No entanto"**: conjunção adversativa, que contrapõe o avanço da coleta ao fato de o lixo reciclável ir ao aterro (**oposição**).\n- **"Uma vez que"**: locução conjuntiva causal, equivalente a "porque" ou "já que" (**causa**): a causa de o reciclável ir ao aterro é a falta de separação em casa.\n- **"Portanto"**: conjunção conclusiva (**conclusão**), que retoma o que foi dito.\n\nSegundo as gramáticas, "uma vez que" é locução conjuntiva subordinativa causal (como "já que", "visto que"). Só com verbo no particípio ("uma vez aprovada a lei...") ela tem valor temporal, o que não ocorre no texto.',
        alternativas: [
          'Nenhum dos três conectivos exprime adição, finalidade ou oposição nessa ordem.',
          '"Uma vez que" exprime causa, e não tempo, nesse contexto.',
          'A ordem está trocada: "no entanto" é oposição, e não causa.',
          'Correta.',
          '"No entanto" não é concessiva, e "Portanto" não é consequência de condição.'
        ],
        dica: 'Teste trocando por sinônimos: "no entanto" = mas; "uma vez que" = porque; "portanto" = logo.'
      },
      fontes: [
        { titulo: 'Base Nacional Comum Curricular: Língua Portuguesa', url: 'https://basenacionalcomum.mec.gov.br/' },
        { titulo: 'Inep: ENEM', url: 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem' }
      ]
    }
  ]
});
