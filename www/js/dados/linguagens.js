/* Linguagens: Língua Portuguesa e Língua Inglesa.
   Questões inéditas, escritas no estilo de cada banca. Textos-base autorais, salvo o trecho de
   Machado de Assis (domínio público), com a obra citada. */

/* ===================== LÍNGUA PORTUGUESA — QUESTÕES ===================== */
Banco.registrar({
  questoes: [
    {
      id: 'por-001',
      materia: 'portugues',
      assunto: 'Interpretação de texto',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'Um dia, há bastantes anos, lembrou-me reproduzir no Engenho Novo a casa em que me criei na antiga Rua de Mata-cavalos, dando-lhe o mesmo aspecto e economia daquela outra, que desapareceu. [...] O meu fim evidente era atar as duas pontas da vida, e restaurar na velhice a adolescência. Pois, senhor, não consegui recompor o que foi nem o que fui.\n\nASSIS, Machado de. Dom Casmurro (1899), capítulo II, “Do livro”.',
      enunciado: 'No capítulo em que explica a origem do livro que está escrevendo, o narrador relata a construção de uma casa no Engenho Novo. Essa construção revela-se, para ele, uma tentativa',
      alternativas: [
        'bem-sucedida de recuperar a juventude, já que a nova casa reproduz fielmente a antiga.',
        'de obter vantagem financeira, pois a casa foi construída com evidente fim econômico.',
        'frustrada de unir passado e presente, o que o leva a buscar outro meio de reconstituir a própria história.',
        'de agradar à família, que desejava voltar a morar na antiga Rua de Mata-cavalos.',
        'de preservar um imóvel histórico que corria o risco de ser demolido.'
      ],
      resposta: 2,
      explicacao: {
        resumo: 'Letra C. O narrador quis “atar as duas pontas da vida” copiando a casa da infância, mas admite: “não consegui recompor o que foi nem o que fui”. A tentativa fracassou, e o livro surge como outro caminho para recompor o passado.',
        detalhada: 'Questões de interpretação no estilo ENEM pedem que você relacione **o que o texto diz** com **o contexto informado no enunciado**. Aqui, o enunciado avisa que o capítulo explica a origem do livro. O trecho mostra três movimentos: o narrador reproduz a casa da infância; declara seu objetivo (“atar as duas pontas da vida, e restaurar na velhice a adolescência”); e confessa o fracasso (“não consegui recompor o que foi nem o que fui”).\n\nO raciocínio passo a passo é este: se a casa nova não devolveu a juventude, a tentativa foi **frustrada**. E, se o capítulo trata da origem do livro, a escrita aparece como o “outro meio” de reconstituir a própria história. Essa é exatamente a leitura que a alternativa C propõe, sem extrapolar o texto.\n\nRepare na palavra “economia”, que serve de armadilha: em Machado, “o mesmo aspecto e economia” significa a mesma **disposição interna**, a mesma organização da casa, e não finanças. Ler palavras antigas com o sentido de hoje é um erro clássico em textos literários do século XIX.\n\nExemplo extra do mesmo raciocínio: se um texto diz “quis voltar à cidade natal para reencontrar a infância, mas tudo já era outro”, a leitura correta é de **tentativa frustrada de recuperar o passado**, e não de sucesso nem de motivo prático.',
        alternativas: [
          'Errada. O próprio narrador diz que não conseguiu recompor o passado; a reprodução da casa não trouxe a juventude de volta.',
          'Errada. “Economia” aqui significa a organização interna da casa, não ganho financeiro. A alternativa usa o sentido moderno da palavra.',
          'Correta. O objetivo de unir as “duas pontas da vida” falhou, e o capítulo apresenta o livro como novo meio de reconstituir a história.',
          'Errada. O texto não menciona desejo da família; a iniciativa é pessoal (“lembrou-me reproduzir”).',
          'Errada. A casa antiga “desapareceu”; o narrador não fala em preservação de patrimônio nem em risco de demolição.'
        ],
        dica: 'No ENEM, desconfie de alternativas que trazem informação ausente do texto (desejo da família, preservação de patrimônio) e de palavras antigas lidas com o sentido atual.'
      },
      fontes: [
        { titulo: 'Dom Casmurro — Wikipédia', url: 'https://pt.wikipedia.org/wiki/Dom_Casmurro' },
        { titulo: 'Inep — Exame Nacional do Ensino Médio', url: 'https://www.gov.br/inep' }
      ]
    },
    {
      id: 'por-002',
      materia: 'portugues',
      assunto: 'Interpretação de texto',
      tipo: 'multipla',
      estilo: 'FGV',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'tribunais', 'estatais', 'enem', 'livre'],
      textoBase: 'Na fila do banco, ninguém conversa mais. Cada um olha para a própria tela, como quem guarda um segredo. Antigamente, dizem os mais velhos, a espera era o lugar das notícias do bairro: quem casou, quem se mudou, quem ficou devendo na venda. Não sei se a memória deles é exata ou se a saudade enfeita o que passou. Sei apenas que hoje, quando a senhora da frente comentou o calor, três pessoas ergueram os olhos ao mesmo tempo, surpresas, como se tivessem ouvido uma língua esquecida.',
      enunciado: 'Ao afirmar “Não sei se a memória deles é exata ou se a saudade enfeita o que passou”, o cronista',
      alternativas: [
        'confirma que, no passado, as filas eram de fato mais sociáveis.',
        'desqualifica o depoimento dos mais velhos, tratando-o como mentiroso.',
        'atribui à tecnologia a culpa exclusiva pelo isolamento das pessoas.',
        'relativiza o relato dos mais velhos, admitindo que a lembrança pode idealizar o passado.',
        'defende que a conversa entre desconhecidos é um costume que deve ser abandonado.'
      ],
      resposta: 3,
      explicacao: {
        resumo: 'Letra D. O cronista não confirma nem nega o relato: ele o relativiza, sugerindo que a saudade pode “enfeitar” (idealizar) o passado.',
        detalhada: 'A FGV gosta de perguntar sobre o **valor de um trecho** dentro do texto. O caminho é olhar a estrutura da frase: “Não sei se X ou se Y”. Quem diz “não sei” não afirma nada com certeza; apenas apresenta duas possibilidades. A primeira é a memória ser exata; a segunda é a saudade “enfeitar o que passou”, isto é, fazer o passado parecer melhor do que foi.\n\nIsso é **relativizar**: colocar em dúvida, sem descartar. Por isso, tanto a alternativa que confirma o relato (A) quanto a que o desqualifica como mentira (B) vão além do que o texto permite. O cronista fica no meio do caminho, e logo em seguida volta ao que conhece com segurança (“Sei apenas que hoje...”).\n\nObserve também o verbo “enfeitar”: é uma metáfora. A saudade funciona como um enfeite que deixa a lembrança mais bonita. Reconhecer a linguagem figurada ajuda a chegar à ideia de **idealização**.\n\nExemplo extra: em “Não sei se o filme era tão bom ou se eu era jovem demais para criticar”, o falante também relativiza a própria avaliação, sem afirmar que o filme era ruim.',
        alternativas: [
          'Errada. Quem diz “não sei” não confirma; a exatidão da memória é justamente o que está em dúvida.',
          'Errada. Admitir que a saudade “enfeita” não é chamar alguém de mentiroso; é reconhecer que a lembrança pode ser idealizada.',
          'Errada. O trecho destacado nem menciona tecnologia; e o texto como um todo não fala em culpa exclusiva.',
          'Correta. O cronista apresenta duas hipóteses e não escolhe nenhuma, relativizando o relato.',
          'Errada. O final do texto sugere o contrário: a conversa espontânea aparece como algo valioso e quase perdido.'
        ],
        dica: 'Na FGV, palavras absolutas como “exclusiva”, “sempre” e “nunca” costumam marcar extrapolação.'
      },
      fontes: [
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org' },
        { titulo: 'Academia Brasileira de Letras', url: 'https://www.academia.org.br' }
      ]
    },
    {
      id: 'por-003',
      materia: 'portugues',
      assunto: 'Interpretação de texto',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 3,
      objetivos: ['concursos-gerais', 'tribunais', 'policial', 'bancarios', 'estatais', 'livre'],
      textoBase: 'A universalização do saneamento básico costuma ser tratada como pauta exclusivamente ambiental. Trata-se, contudo, de um tema que atravessa a saúde pública, a educação e a economia: crianças que adoecem com frequência faltam às aulas, adultos doentes produzem menos, e o sistema de saúde gasta com o tratamento de enfermidades que poderiam ser evitadas. Investir em redes de água e esgoto, portanto, não é apenas proteger rios; é reduzir desigualdades que se acumulam ao longo de gerações.',
      enunciado: 'Depreende-se do texto que o autor considera inadequado associar o saneamento básico à questão ambiental, devendo o tema ser tratado apenas como problema de saúde pública.',
      resposta: false,
      explicacao: {
        resumo: 'Errado. O autor critica tratar o saneamento como pauta “exclusivamente” ambiental, mas não rejeita a dimensão ambiental; ele a amplia, somando saúde, educação e economia.',
        detalhada: 'O CEBRASPE adora o **erro por extrapolação**: o item pega uma ideia verdadeira do texto e a leva longe demais. O texto diz que o saneamento costuma ser visto como pauta **exclusivamente** ambiental e que isso é limitado, porque o tema “atravessa” outras áreas. Ou seja, o autor **acrescenta** dimensões; não **retira** a ambiental.\n\nA prova está no fechamento: “não é **apenas** proteger rios”. Quem diz “não é apenas” admite que também é. Logo, proteger rios continua fazendo parte do assunto. O item erra duas vezes: diz que o autor acha inadequada a associação ambiental e restringe o tema a “apenas” saúde pública, quando o texto cita também educação e economia.\n\nPasso a passo para itens desse tipo: (1) localize no texto a ideia citada; (2) compare as palavras de intensidade (“exclusivamente”, “apenas”, “somente”); (3) verifique se o item trocou um “não só” por um “não”.\n\nExemplo extra: “O esporte não é apenas lazer; é saúde.” Seria errado concluir que, para o autor, esporte não é lazer.',
        dica: 'Expressões como “não é apenas”, “não só... mas também” somam ideias. Itens que transformam soma em exclusão costumam estar errados.'
      },
      fontes: [
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org' },
        { titulo: 'Academia Brasileira de Letras', url: 'https://www.academia.org.br' }
      ]
    },
    {
      id: 'por-004',
      materia: 'portugues',
      assunto: 'Concordância verbal e nominal',
      tipo: 'multipla',
      estilo: 'FCC',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'tribunais', 'policial', 'bancarios', 'estatais', 'livre'],
      enunciado: 'Está em conformidade com a norma-padrão quanto à concordância verbal a frase:',
      alternativas: [
        'Fazia dois meses que os relatórios não eram entregues ao setor responsável.',
        'Houveram muitas reclamações sobre o atendimento no último trimestre.',
        'Devem haver soluções mais simples para o problema apresentado.',
        'Aluga-se salas comerciais no centro da cidade.',
        'A maioria dos servidores aprovaram a proposta, mas nenhum deles assinaram o documento.'
      ],
      resposta: 0,
      explicacao: {
        resumo: 'Letra A. O verbo “fazer” indicando tempo decorrido é impessoal e fica no singular: “Fazia dois meses”.',
        detalhada: 'Alguns verbos são **impessoais**: não têm sujeito e, por isso, ficam sempre na 3ª pessoa do singular. Os dois mais cobrados são **haver** no sentido de existir ou de tempo decorrido (“Há muitas vagas”, “Havia anos que...”) e **fazer** indicando tempo ou fenômeno natural (“Faz dez anos”, “Fez dias quentes”). Em A, “Fazia dois meses” está correto: “dois meses” não é sujeito, é complemento.\n\nO segundo ponto importante é a **locução verbal**: quando o verbo principal é impessoal, o auxiliar herda essa impessoalidade. Por isso o certo é “**Deve** haver soluções”, e não “Devem haver”. Já com **existir**, que é pessoal, o auxiliar vai ao plural: “Devem existir soluções”.\n\nTerceiro ponto: a **voz passiva sintética**. Em “Alugam-se salas”, o “se” é pronome apassivador e “salas” é o sujeito (equivale a “Salas são alugadas”). Logo, o verbo concorda com “salas”: “Alugam-se”.\n\nPor fim, com expressões partitivas como “a maioria dos”, a concordância é facultativa (“A maioria dos servidores aprovou/aprovaram”). Mas “nenhum” leva o verbo ao singular: “nenhum deles **assinou**”. Por isso a alternativa E está errada, apesar de começar bem.',
        alternativas: [
          'Correta. “Fazer” indicando tempo é impessoal: fica no singular.',
          'Errada. “Haver” com sentido de existir é impessoal: “Houve muitas reclamações”.',
          'Errada. O auxiliar de “haver” impessoal também fica no singular: “Deve haver soluções”.',
          'Errada. Voz passiva sintética: “salas” é sujeito, então “Alugam-se salas”.',
          'Errada. A primeira parte admite plural (“a maioria dos servidores aprovaram”), mas “nenhum deles” exige singular: “nenhum deles assinou”.'
        ],
        dica: 'A FCC costuma esconder o erro na segunda metade da frase. Leia a alternativa inteira antes de marcar.'
      },
      fontes: [
        { titulo: 'Academia Brasileira de Letras', url: 'https://www.academia.org.br' },
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org' }
      ]
    },
    {
      id: 'por-005',
      materia: 'portugues',
      assunto: 'Concordância verbal e nominal',
      tipo: 'multipla',
      estilo: 'Vunesp',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'tribunais', 'policial', 'bancarios', 'estatais', 'enem', 'livre'],
      enunciado: 'Assinale a alternativa em que a concordância nominal está de acordo com a norma-padrão.',
      alternativas: [
        'Seguem anexo ao processo as cópias dos documentos.',
        'A diretora ficou meia preocupada com os prazos.',
        'É proibida entrada de pessoas não autorizadas.',
        'Elas mesmo organizaram toda a programação do evento.',
        'Havia bastantes motivos para adiar a reunião, e as próprias diretoras concordaram.'
      ],
      resposta: 4,
      explicacao: {
        resumo: 'Letra E. “Bastantes” é adjetivo (= muitos) e concorda com “motivos”; “próprias” concorda com “diretoras”.',
        detalhada: 'Na concordância nominal, a regra geral é simples: **adjetivos, artigos, numerais e pronomes concordam em gênero e número com o substantivo** a que se referem. As bancas cobram as palavras que ora variam, ora não, conforme a classe.\n\n**Bastante**: se acompanha substantivo, é adjetivo ou pronome e varia (“bastantes motivos” = muitos motivos). Se modifica verbo ou adjetivo, é advérbio e não varia (“Eles estudaram bastante”; “Elas estão bastante cansadas”). **Meio** segue a mesma lógica: “meia porção” (metade, varia), mas “meio preocupada” (um pouco, advérbio, invariável).\n\n**Anexo, incluso, obrigado, mesmo e próprio** são adjetivos e concordam: “seguem **anexas** as cópias”, “elas **mesmas** organizaram”, “as **próprias** diretoras”.\n\nAs expressões **“é proibido”, “é necessário”, “é bom”** ficam invariáveis quando o substantivo vem sem determinante (“É proibido entrada”), e concordam quando há artigo ou outro determinante (“É proibida **a** entrada”). Por isso “É proibida entrada” está errado.\n\nExemplo extra: “Comprei bastantes livros e li bastante.” O primeiro “bastantes” varia (acompanha substantivo); o segundo não (modifica o verbo).',
        alternativas: [
          'Errada. “Anexo” é adjetivo e concorda com “cópias”: “Seguem anexas”.',
          'Errada. “Meio” com sentido de “um pouco” é advérbio e não varia: “meio preocupada”.',
          'Errada. Sem artigo, a expressão fica invariável: “É proibido entrada”; com artigo, “É proibida a entrada”.',
          'Errada. “Mesmo” como reforço é adjetivo e concorda: “Elas mesmas organizaram”.',
          'Correta. “Bastantes” acompanha “motivos” e varia; “próprias” concorda com “diretoras”.'
        ],
        dica: 'Teste do “muitos”: se você pode trocar “bastante” por “muitos/muitas”, ele varia; se pode trocar por “muito”, fica invariável.'
      },
      fontes: [
        { titulo: 'Academia Brasileira de Letras', url: 'https://www.academia.org.br' },
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org' }
      ]
    },
    {
      id: 'por-006',
      materia: 'portugues',
      assunto: 'Concordância verbal e nominal',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 1,
      objetivos: ['concursos-gerais', 'tribunais', 'policial', 'bancarios', 'estatais', 'livre'],
      enunciado: 'Na frase “Ainda existe dúvidas sobre os critérios de correção do edital”, a forma verbal está empregada de acordo com a norma-padrão, pois o verbo existir, assim como haver, é impessoal.',
      resposta: false,
      explicacao: {
        resumo: 'Errado. “Existir” é verbo pessoal e concorda com o sujeito “dúvidas”: “Ainda existem dúvidas”. Impessoal é o “haver” (“Ainda há dúvidas”).',
        detalhada: '“Haver” e “existir” têm sentido parecido, mas comportamento gramatical oposto. **Haver**, no sentido de existir, é **impessoal**: não tem sujeito e fica no singular (“Há dúvidas”, “Havia dúvidas”). **Existir** é **pessoal**: tem sujeito e concorda com ele (“Existem dúvidas”, “Existiam dúvidas”).\n\nNa frase do item, o sujeito de “existir” é “dúvidas”, que vem depois do verbo (sujeito posposto). Esse deslocamento engana o ouvido, mas a regra não muda: o verbo vai ao plural. O correto é “Ainda **existem** dúvidas sobre os critérios”.\n\nO mesmo vale para outros verbos parecidos: **ocorrer, acontecer, faltar, restar, bastar** são pessoais. “Faltam dois dias para a prova”, “Restam poucas vagas”, “Ocorreram problemas”.\n\nUm bom teste é perguntar “o que existe?”. A resposta (“dúvidas”) é o sujeito, e o verbo concorda com ela.',
        dica: 'Troque “haver” por “existir” e veja o que muda: “Há problemas” vira “Existem problemas”. O CEBRASPE cobra essa troca com frequência.'
      },
      fontes: [
        { titulo: 'Academia Brasileira de Letras', url: 'https://www.academia.org.br' }
      ]
    },
    {
      id: 'por-007',
      materia: 'portugues',
      assunto: 'Crase',
      tipo: 'multipla',
      estilo: 'FCC',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'tribunais', 'policial', 'bancarios', 'estatais', 'livre'],
      enunciado: 'O sinal indicativo de crase está empregado corretamente em:',
      alternativas: [
        'O candidato começou à estudar com seis meses de antecedência.',
        'A reunião foi marcada para as 14h, e a entrega dos documentos ficou restrita à secretaria.',
        'Encaminhamos o requerimento à Vossa Senhoria para apreciação.',
        'Os dois candidatos ficaram frente à frente durante o debate.',
        'O servidor referiu-se à uma decisão anterior do tribunal.'
      ],
      resposta: 1,
      explicacao: {
        resumo: 'Letra B. “Restrita” exige a preposição “a”, e “secretaria” admite o artigo “a”: restrita a + a secretaria = restrita à secretaria.',
        detalhada: 'Crase é a **fusão da preposição “a” com o artigo feminino “a”** (ou com o “a” inicial de “aquele, aquela, aquilo”). Para haver crase, duas condições precisam acontecer juntas: (1) a palavra anterior exige a preposição “a”; (2) a palavra seguinte é feminina e aceita o artigo “a”.\n\nEm B, “restrita” pede complemento com “a” (restrita a algo), e “secretaria” aceita artigo (“a secretaria”). As duas condições se cumprem, então o acento é obrigatório. Note que, na mesma frase, “para as 14h” está corretamente **sem** acento: a preposição já é “para”, e o “as” é só artigo.\n\nAs outras alternativas mostram os casos clássicos de proibição:\n- antes de **verbo** (“começou a estudar”), porque verbo não aceita artigo;\n- antes de **pronomes de tratamento** como Vossa Senhoria, que não admitem artigo;\n- em expressões com **palavras repetidas** (“frente a frente”, “cara a cara”), em que o “a” é só preposição;\n- antes de **artigo indefinido** (“referiu-se a uma decisão”), pois não cabe artigo definido antes de outro artigo.\n\nExemplo extra: “Assisti à palestra” (assistir a + a palestra) tem crase; “Assisti a uma palestra” não tem.',
        alternativas: [
          'Errada. Não há crase antes de verbo: “começou a estudar”.',
          'Correta. “Restrita a” + “a secretaria” gera crase; e “para as 14h” fica sem acento porque a preposição é “para”.',
          'Errada. Pronomes de tratamento como Vossa Senhoria não admitem artigo: “a Vossa Senhoria”.',
          'Errada. Em expressões com palavras repetidas, o “a” é apenas preposição: “frente a frente”.',
          'Errada. Antes de artigo indefinido não há crase: “referiu-se a uma decisão”.'
        ],
        dica: 'Cuidado com “à uma”: a crase é correta quando indica hora (“Chegou à uma hora”), mas errada quando “uma” é artigo indefinido.'
      },
      fontes: [
        { titulo: 'Crase — Wikipédia', url: 'https://pt.wikipedia.org/wiki/Crase' },
        { titulo: 'Academia Brasileira de Letras', url: 'https://www.academia.org.br' }
      ]
    },
    {
      id: 'por-008',
      materia: 'portugues',
      assunto: 'Crase',
      tipo: 'multipla',
      estilo: 'Cesgranrio',
      dificuldade: 3,
      objetivos: ['concursos-gerais', 'bancarios', 'estatais', 'tribunais', 'livre'],
      enunciado: 'As frases abaixo foram escritas sem o acento grave. Em qual delas o acento indicativo de crase é OBRIGATÓRIO no “a” destacado em maiúscula?',
      alternativas: [
        'Entreguei o relatório A sua chefe antes do almoço.',
        'Ela caminhou até A porta do auditório sem dizer nada.',
        'A nova agência fica A duas quadras da praça principal.',
        'O gerente dirigiu-se A agência central logo cedo.',
        'O cliente comprou o equipamento A prazo.'
      ],
      resposta: 3,
      explicacao: {
        resumo: 'Letra D. “Dirigir-se” exige a preposição “a”, e “agência” aceita o artigo “a”: dirigiu-se à agência. Nas demais, a crase é facultativa (A e B) ou proibida (C e E).',
        detalhada: 'A Cesgranrio costuma separar três situações: crase **obrigatória**, **facultativa** e **proibida**. Saber os casos facultativos é o que diferencia quem acerta.\n\n**Facultativa** (pode ou não haver acento): antes de **pronome possessivo feminino no singular** (“a sua chefe” ou “à sua chefe”), antes de **nome próprio feminino de pessoa** (“Entreguei a Marina” ou “à Marina”) e depois da preposição **até** (“até a porta” ou “até à porta”). Por isso, A e B não são obrigatórias.\n\n**Proibida**: antes de palavra masculina (“a prazo”, “a pé”) e quando um “a” no singular antecede palavra no plural (“a duas quadras”). Neste último caso, se houvesse artigo, ele estaria no plural (“as”); como só há “a”, trata-se apenas de preposição.\n\n**Obrigatória**: em D, “dirigir-se” exige “a” (quem se dirige, dirige-se a algum lugar) e “agência” é feminina e aceita artigo. O teste do masculino confirma: “dirigiu-se **ao** banco central” → “dirigiu-se **à** agência central”.\n\nExemplo extra: “Vou à farmácia” (vou ao mercado) tem crase; “Vou a Curitiba” (venho de Curitiba) não tem, porque o nome da cidade não aceita artigo.',
        alternativas: [
          'Errada. Antes de pronome possessivo feminino no singular, a crase é facultativa.',
          'Errada. Depois de “até”, a crase é facultativa (“até a porta” ou “até à porta”).',
          'Errada. “A” no singular antes de palavra no plural é só preposição: “a duas quadras”.',
          'Correta. “Dirigir-se a” + “a agência” = “à agência”; troque por masculino: “dirigiu-se ao banco”.',
          'Errada. “Prazo” é palavra masculina; não há artigo feminino para fundir: “a prazo”.'
        ],
        dica: 'Possessivo feminino singular, nome de mulher e “até”: os três casos facultativos que mais caem.'
      },
      fontes: [
        { titulo: 'Crase — Wikipédia', url: 'https://pt.wikipedia.org/wiki/Crase' },
        { titulo: 'Academia Brasileira de Letras', url: 'https://www.academia.org.br' }
      ]
    },
    {
      id: 'por-009',
      materia: 'portugues',
      assunto: 'Crase',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'tribunais', 'policial', 'bancarios', 'estatais', 'livre'],
      enunciado: 'Em “O acesso à sua sala depende de autorização prévia da chefia”, o emprego do acento indicativo de crase é facultativo, de modo que sua supressão não prejudicaria a correção gramatical do período.',
      resposta: true,
      explicacao: {
        resumo: 'Certo. Antes de pronome possessivo feminino no singular, o artigo é opcional; por isso a crase também é: “acesso à sua sala” ou “acesso a sua sala”.',
        detalhada: 'Para entender por que a crase é facultativa aqui, lembre que ela depende do **artigo**. Antes de pronome possessivo, o uso do artigo é livre em português: tanto “a sua sala” quanto “sua sala” estão corretos. Se o artigo é opcional, a crase também é.\n\nNo item, “acesso” exige a preposição “a” (acesso a algo). Então temos duas possibilidades corretas:\n- com artigo: acesso a + a sua sala = **acesso à sua sala**;\n- sem artigo: acesso a + sua sala = **acesso a sua sala**.\n\nAtenção a dois limites da regra. Primeiro, ela vale para o possessivo **feminino no singular**; no plural, o “a” sozinho antes de “suas” indica ausência de artigo (“acesso a suas salas”), e com artigo seria “às suas salas”. Segundo, quando o possessivo está **substantivado**, sem substantivo depois, a crase passa a ser obrigatória: “Minha proposta é igual à sua”.\n\nExemplo extra: “Fiz referência à minha mãe” e “Fiz referência a minha mãe” estão ambas corretas.',
        dica: 'O CEBRASPE adora perguntar se a supressão do acento “prejudica a correção”. Nos casos facultativos, a resposta é não.'
      },
      fontes: [
        { titulo: 'Crase — Wikipédia', url: 'https://pt.wikipedia.org/wiki/Crase' }
      ]
    },
    {
      id: 'por-010',
      materia: 'portugues',
      assunto: 'Pontuação',
      tipo: 'multipla',
      estilo: 'FGV',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'tribunais', 'policial', 'bancarios', 'estatais', 'enem', 'livre'],
      enunciado: 'Assinale a frase corretamente pontuada, de acordo com a norma-padrão.',
      alternativas: [
        'Os candidatos aprovados na primeira fase, deverão comparecer à sede no sábado.',
        'O diretor, informou aos servidores que o prazo seria prorrogado.',
        'Precisamos de três documentos: RG CPF e comprovante de residência.',
        'O relatório que, foi entregue ontem, contém erros graves.',
        'Na reunião de ontem, o diretor anunciou as novas metas, e os servidores, surpresos, aplaudiram.'
      ],
      resposta: 4,
      explicacao: {
        resumo: 'Letra E. A vírgula isola o adjunto adverbial deslocado, separa orações com sujeitos diferentes ligadas por “e” e isola o predicativo intercalado “surpresos”.',
        detalhada: 'A regra mais cobrada de pontuação é negativa: **não se separa por vírgula o sujeito do verbo, nem o verbo de seus complementos**. As alternativas A e B quebram essa regra: em A, “Os candidatos aprovados na primeira fase” é o sujeito de “deverão”; em B, “O diretor” é o sujeito de “informou”. Por mais longo que seja o sujeito, ele não se separa do verbo.\n\nEm C, falta a vírgula que separa os itens de uma **enumeração**: “RG, CPF e comprovante de residência”. Em D, a vírgula foi posta dentro da oração adjetiva, separando o pronome relativo “que” do verbo “foi”. Ou a oração vem toda entre vírgulas, ou sem nenhuma.\n\nA alternativa E mostra três usos corretos:\n- “Na reunião de ontem,” é adjunto adverbial **deslocado** para o início, e a vírgula é adequada;\n- “, e os servidores” liga orações com **sujeitos diferentes** (“o diretor” e “os servidores”), caso em que a vírgula antes do “e” é aceita e recomendada;\n- “, surpresos,” é um **predicativo intercalado**, isolado entre vírgulas.\n\nExemplo extra: “Os alunos que estudaram passaram” (sem vírgulas) e “Os alunos, ansiosos, aguardavam o resultado” (termo intercalado entre vírgulas) estão ambos corretos.',
        alternativas: [
          'Errada. A vírgula separa o sujeito (“Os candidatos aprovados na primeira fase”) do verbo “deverão”.',
          'Errada. A vírgula separa o sujeito “O diretor” do verbo “informou”.',
          'Errada. Falta vírgula entre os itens da enumeração: “RG, CPF e comprovante de residência”.',
          'Errada. A vírgula separa o pronome relativo “que” do verbo da própria oração.',
          'Correta. Adjunto deslocado, orações com sujeitos diferentes ligadas por “e” e predicativo intercalado, todos bem pontuados.'
        ],
        dica: 'Sujeito longo é a armadilha preferida: leia em voz alta, encontre o verbo e confira se há vírgula entre os dois.'
      },
      fontes: [
        { titulo: 'Vírgula — Wikipédia', url: 'https://pt.wikipedia.org/wiki/Vírgula' },
        { titulo: 'Academia Brasileira de Letras', url: 'https://www.academia.org.br' }
      ]
    },
    {
      id: 'por-011',
      materia: 'portugues',
      assunto: 'Pontuação',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 3,
      objetivos: ['concursos-gerais', 'tribunais', 'policial', 'bancarios', 'estatais', 'livre'],
      enunciado: 'No período “Os servidores, que haviam cumprido as metas, receberam bonificação”, a supressão das vírgulas manteria a correção gramatical, mas alteraria o sentido original, pois a oração passaria a restringir o grupo de servidores bonificados.',
      resposta: true,
      explicacao: {
        resumo: 'Certo. Com vírgulas, a oração é explicativa (todos cumpriram as metas e todos receberam); sem vírgulas, é restritiva (só os que cumpriram receberam). As duas formas são corretas, com sentidos diferentes.',
        detalhada: 'As orações introduzidas por pronome relativo (“que”, “o qual”, “onde”...) são chamadas **adjetivas** e se dividem em dois tipos. A **explicativa** vem entre vírgulas e acrescenta uma informação sobre **todo** o grupo mencionado. A **restritiva** vem sem vírgulas e **delimita** uma parte desse grupo.\n\nNo período original, com vírgulas, a leitura é: os servidores (todos eles) haviam cumprido as metas e (todos) receberam bonificação. Sem as vírgulas, “Os servidores que haviam cumprido as metas receberam bonificação”, a leitura passa a ser: **somente** aqueles que cumpriram as metas foram bonificados; os outros, não.\n\nAs duas construções são gramaticalmente corretas. O que muda é o sentido, e é exatamente isso que o item afirma. Por isso está certo.\n\nExemplo extra: “Os brasileiros, que gostam de futebol, assistiram à final” afirma que todos os brasileiros gostam de futebol. “Os brasileiros que gostam de futebol assistiram à final” fala só de uma parte deles.',
        dica: 'O CEBRASPE pergunta muito sobre “supressão de vírgulas” em orações adjetivas. Quase sempre a resposta é: continua correto, mas muda o sentido.'
      },
      fontes: [
        { titulo: 'Vírgula — Wikipédia', url: 'https://pt.wikipedia.org/wiki/Vírgula' },
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org' }
      ]
    },
    {
      id: 'por-012',
      materia: 'portugues',
      assunto: 'Regência',
      tipo: 'multipla',
      estilo: 'FCC',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'tribunais', 'policial', 'bancarios', 'estatais', 'livre'],
      enunciado: 'A regência verbal está de acordo com a norma-padrão em:',
      alternativas: [
        'Os torcedores assistiram ao jogo decisivo no telão da praça.',
        'Prefiro mais estudar de manhã do que à noite.',
        'Os motoristas devem obedecer o novo regulamento de trânsito.',
        'Ele aspira o cargo de diretor desde que ingressou na empresa.',
        'Esqueci do nome do professor que me orientou no estágio.'
      ],
      resposta: 0,
      explicacao: {
        resumo: 'Letra A. “Assistir” no sentido de ver, presenciar é transitivo indireto e exige a preposição “a”: assistiram ao jogo.',
        detalhada: '**Regência** é a relação entre um verbo (ou nome) e seus complementos: se o complemento vem com ou sem preposição, e com qual. Muitos verbos mudam de regência conforme o sentido, e as bancas exploram justamente a diferença entre o uso do dia a dia e a norma-padrão.\n\nOs casos da questão:\n- **Assistir** (ver, presenciar) pede “a”: “assistir **ao** jogo”, “assistir **à** aula”. No sentido de ajudar, é transitivo direto: “O médico assistiu o paciente”.\n- **Preferir** pede “a” e não admite “mais” nem “do que”: “Prefiro estudar de manhã **a** estudar à noite”.\n- **Obedecer** e **desobedecer** pedem “a”: “obedecer **ao** regulamento”.\n- **Aspirar** no sentido de desejar pede “a”: “aspira **ao** cargo”. No sentido de inspirar, sorver, é transitivo direto: “aspirar o ar puro”.\n- **Esquecer** e **lembrar**: sem pronome, são transitivos diretos (“Esqueci o nome”); com pronome, pedem “de” (“Esqueci-me do nome”). A mistura “Esqueci do nome” é condenada pela norma-padrão.\n\nExemplo extra: “Todos aspiram a uma vida tranquila” (desejar) × “O aparelho aspira a poeira” (sugar).',
        alternativas: [
          'Correta. Assistir no sentido de ver exige a preposição “a”: “assistiram ao jogo”.',
          'Errada. “Preferir” não aceita “mais” nem “do que”: “Prefiro estudar de manhã a estudar à noite”.',
          'Errada. “Obedecer” é transitivo indireto: “obedecer ao novo regulamento”.',
          'Errada. “Aspirar” no sentido de desejar exige “a”: “aspira ao cargo”.',
          'Errada. Sem pronome, “esquecer” é transitivo direto: “Esqueci o nome” ou “Esqueci-me do nome”.'
        ],
        dica: 'Memorize os pares que mudam de sentido: assistir (ver × ajudar), aspirar (desejar × inspirar), visar (pretender × mirar/rubricar).'
      },
      fontes: [
        { titulo: 'Academia Brasileira de Letras', url: 'https://www.academia.org.br' },
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org' }
      ]
    },
    {
      id: 'por-013',
      materia: 'portugues',
      assunto: 'Regência',
      tipo: 'multipla',
      estilo: 'Vunesp',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'tribunais', 'policial', 'estatais', 'enem', 'livre'],
      enunciado: 'Assinale a alternativa em que o pronome relativo está precedido da preposição exigida, conforme a norma-padrão.',
      alternativas: [
        'Este é o livro que eu mais gosto.',
        'Esta é a vaga a que todos os candidatos aspiram.',
        'O filme em que assistimos ontem foi premiado no festival.',
        'A cidade que nasci fica no interior de Minas Gerais.'
      ],
      resposta: 1,
      explicacao: {
        resumo: 'Letra B. Quem aspira (deseja) aspira “a” algo; por isso “a vaga a que todos aspiram”.',
        detalhada: 'Quando o pronome relativo (“que”, “o qual”, “quem”, “cujo”) funciona como complemento de um verbo que exige preposição, **a preposição vai antes do relativo**. É uma das regras mais cobradas em concursos e uma das mais desrespeitadas na fala.\n\nO método passo a passo é desfazer a frase em duas:\n- “Esta é a vaga.” + “Todos aspiram **à** vaga.” → “Esta é a vaga **a que** todos aspiram.” (correto)\n- “Este é o livro.” + “Eu gosto **do** livro.” → “Este é o livro **de que** eu mais gosto.”\n- “O filme foi premiado.” + “Assistimos **ao** filme.” → “O filme **a que** assistimos.”\n- “A cidade fica em Minas.” + “Nasci **na** cidade.” → “A cidade **em que** (ou onde) nasci.”\n\nVeja que em C a preposição existe, mas está errada: “assistir” (ver) pede “a”, e não “em”.\n\nExemplo extra: “O cargo de que ele precisa” (precisar de), “A pessoa com quem conversei” (conversar com), “O assunto sobre o qual falamos” (falar sobre).',
        alternativas: [
          'Errada. “Gostar” exige “de”: “o livro de que eu mais gosto”.',
          'Correta. “Aspirar” (desejar) exige “a”: “a vaga a que todos aspiram”.',
          'Errada. “Assistir” (ver) exige “a”, não “em”: “o filme a que assistimos”.',
          'Errada. “Nascer” pede “em” para indicar lugar: “a cidade em que nasci” ou “onde nasci”.'
        ],
        dica: 'Desmonte a frase: coloque o antecedente depois do verbo e veja qual preposição aparece. Ela deve subir para antes do “que”.'
      },
      fontes: [
        { titulo: 'Pronome — Wikipédia', url: 'https://pt.wikipedia.org/wiki/Pronome' },
        { titulo: 'Academia Brasileira de Letras', url: 'https://www.academia.org.br' }
      ]
    },
    {
      id: 'por-014',
      materia: 'portugues',
      assunto: 'Colocação pronominal',
      tipo: 'multipla',
      estilo: 'FCC',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'tribunais', 'policial', 'bancarios', 'estatais', 'livre'],
      enunciado: 'A colocação do pronome oblíquo átono está de acordo com a norma-padrão em:',
      alternativas: [
        'Me informaram que o processo foi arquivado.',
        'Ninguém avisou-me sobre a mudança de horário.',
        'Far-se-á a revisão dos contratos no próximo semestre.',
        'Os documentos que entregaram-me estavam incompletos.',
        'Quando encontrei-o, já era tarde demais.'
      ],
      resposta: 2,
      explicacao: {
        resumo: 'Letra C. Com verbo no futuro do presente iniciando a frase e sem palavra atrativa, a norma-padrão exige a mesóclise: “Far-se-á”.',
        detalhada: 'A colocação pronominal decide onde fica o pronome átono (me, te, se, o, a, lhe, nos, vos...) em relação ao verbo: antes (**próclise**), depois (**ênclise**) ou no meio (**mesóclise**).\n\n**Regra 1: não se inicia frase com pronome átono** na norma-padrão. Por isso “Me informaram” está errado; o correto é “Informaram-me”.\n\n**Regra 2: palavras atrativas puxam o pronome para antes do verbo (próclise).** As principais são:\n- palavras negativas (não, nunca, ninguém, nada);\n- pronomes relativos (que, o qual, onde);\n- conjunções subordinativas (quando, se, porque, embora);\n- pronomes indefinidos (alguém, ninguém, tudo) e advérbios sem pausa (aqui, já, sempre).\nAssim: “Ninguém **me** avisou”, “Os documentos que **me** entregaram”, “Quando **o** encontrei”.\n\n**Regra 3: com verbo no futuro do presente ou do pretérito, a ênclise é proibida** (“Fará-se” está errado). Se o verbo inicia a oração e não há palavra atrativa, a norma-padrão exige a mesóclise, com o pronome entre o radical e a terminação: “Far-se-á”, “Dir-te-ia”, “Entregá-lo-emos”. Se houver palavra atrativa, usa-se a próclise: “Não se fará a revisão”. Com sujeito expresso antes do verbo, a próclise também é aceita: “O diretor se fará presente”.\n\nExemplo extra: “Convidá-la-ei para a festa” (mesóclise) × “Nunca a convidarei” (próclise pela negação).',
        alternativas: [
          'Errada. A norma-padrão não admite pronome átono no início da frase: “Informaram-me”.',
          'Errada. “Ninguém” é palavra atrativa e exige próclise: “Ninguém me avisou”.',
          'Correta. Futuro do presente, sem palavra atrativa e em início de frase: mesóclise.',
          'Errada. O pronome relativo “que” atrai o pronome: “que me entregaram”.',
          'Errada. A conjunção subordinativa “quando” atrai o pronome: “Quando o encontrei”.'
        ],
        dica: 'Procure primeiro a palavra atrativa. Se houver, a resposta é próclise. Se não houver e o verbo no futuro abrir a frase, mesóclise. Ênclise com futuro, nunca.'
      },
      fontes: [
        { titulo: 'Pronome — Wikipédia', url: 'https://pt.wikipedia.org/wiki/Pronome' },
        { titulo: 'Academia Brasileira de Letras', url: 'https://www.academia.org.br' }
      ]
    },
    {
      id: 'por-015',
      materia: 'portugues',
      assunto: 'Colocação pronominal',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 1,
      objetivos: ['concursos-gerais', 'tribunais', 'policial', 'bancarios', 'estatais', 'livre'],
      enunciado: 'Em “Não se sabe ainda quando o resultado será divulgado”, a próclise é obrigatória em razão da presença da palavra negativa que antecede o verbo.',
      resposta: true,
      explicacao: {
        resumo: 'Certo. Palavras negativas como “não” atraem o pronome átono para antes do verbo; “Não sabe-se” estaria em desacordo com a norma-padrão.',
        detalhada: 'Na norma-padrão, o advérbio de negação **“não”** e outras palavras negativas (nunca, jamais, ninguém, nada, nem) são **fatores de próclise**: o pronome átono passa obrigatoriamente para antes do verbo.\n\nNo período do item, o pronome “se” vem depois de “Não” e antes de “sabe”. Essa posição é exatamente a exigida. A forma com ênclise, “Não sabe-se ainda...”, seria considerada incorreta.\n\nA regra continua valendo em locuções verbais. Com palavra atrativa, a forma mais segura é a próclise ao auxiliar (“Não **se** pode afirmar”); também se aceita a ênclise ao infinitivo (“Não pode afirmar-**se**”). Já “Não pode-se afirmar”, com o pronome preso ao auxiliar depois da negação, é condenada.\n\nExemplo extra: “Nunca me disseram isso”, “Ninguém nos consultou”, “Nada se resolveu”.',
        dica: 'Item de colocação pronominal no CEBRASPE costuma trocar a posição do pronome e perguntar se “mantém a correção”. Com palavra negativa, só a próclise mantém.'
      },
      fontes: [
        { titulo: 'Pronome — Wikipédia', url: 'https://pt.wikipedia.org/wiki/Pronome' }
      ]
    },
    {
      id: 'por-016',
      materia: 'portugues',
      assunto: 'Classes de palavras',
      tipo: 'multipla',
      estilo: 'Cesgranrio',
      dificuldade: 3,
      objetivos: ['concursos-gerais', 'bancarios', 'estatais', 'tribunais', 'enem', 'livre'],
      enunciado: 'A palavra “que” é pronome relativo em:',
      alternativas: [
        'Os projetos que a equipe apresentou foram aprovados pela diretoria.',
        'Espero que o resultado saia ainda nesta semana.',
        'Que dia difícil tivemos hoje!',
        'Estudou tanto que passou em primeiro lugar no concurso.'
      ],
      resposta: 0,
      explicacao: {
        resumo: 'Letra A. O “que” retoma “projetos” e pode ser trocado por “os quais”: os projetos os quais a equipe apresentou.',
        detalhada: 'A palavra “que” tem várias classes, e a banca quer que você as diferencie pelo **papel** na frase. O teste mais seguro para o **pronome relativo** é a troca por **“o qual, a qual, os quais, as quais”**. Se a troca funciona e o “que” retoma um termo anterior (o antecedente), ele é relativo.\n\nEm A, “Os projetos **os quais** a equipe apresentou” mantém o sentido; o “que” retoma “projetos” e ainda funciona como objeto direto de “apresentou”. É pronome relativo.\n\nNas demais:\n- em B, o “que” introduz uma oração que completa o verbo “espero” (espero **isso**). É **conjunção integrante**; o teste é trocar a oração por “isso”;\n- em C, o “que” acompanha o substantivo “dia” e intensifica a exclamação. É **pronome adjetivo exclamativo** (alguns gramáticos o chamam de determinante exclamativo);\n- em D, o “que” vem depois de “tanto” e introduz a consequência. É **conjunção consecutiva** (tanto... que, tão... que).\n\nExemplo extra: “Disse que viria” (integrante: disse isso) × “A pessoa que veio” (relativo: a qual veio).',
        alternativas: [
          'Correta. Pode ser trocado por “os quais” e retoma “projetos”: pronome relativo.',
          'Errada. Introduz oração que completa “espero” (espero isso): conjunção integrante.',
          'Errada. Acompanha o substantivo “dia” em frase exclamativa: pronome adjetivo exclamativo.',
          'Errada. Forma o par “tanto... que” e introduz consequência: conjunção consecutiva.'
        ],
        dica: 'Dois testes rápidos: troca por “o qual” → relativo; troca da oração por “isso” → conjunção integrante.'
      },
      fontes: [
        { titulo: 'Pronome — Wikipédia', url: 'https://pt.wikipedia.org/wiki/Pronome' },
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org' }
      ]
    },
    {
      id: 'por-017',
      materia: 'portugues',
      assunto: 'Coesão e coerência',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 1,
      objetivos: ['enem', 'concursos-gerais', 'livre'],
      textoBase: 'As bibliotecas públicas brasileiras enfrentam um paradoxo. Nunca se produziram tantos livros no país, e o acesso à informação nunca foi tão amplo. No entanto, muitas dessas instituições funcionam em prédios precários, com acervos desatualizados e horários que não coincidem com o tempo livre do trabalhador. Esses espaços, que poderiam ser centros de convivência e formação, acabam vistos como depósitos de papel.',
      enunciado: 'No texto, a expressão “No entanto” contribui para a progressão das ideias ao',
      alternativas: [
        'introduzir uma conclusão a partir dos dados apresentados anteriormente.',
        'estabelecer uma oposição entre a abundância de livros e informação e a precariedade das bibliotecas.',
        'indicar a causa da ampliação do acesso à informação no país.',
        'acrescentar um exemplo que confirma a afirmação anterior.',
        'marcar uma relação temporal entre a produção de livros e a criação das bibliotecas.'
      ],
      resposta: 1,
      explicacao: {
        resumo: 'Letra B. “No entanto” é conector adversativo: opõe o cenário favorável (muitos livros, muita informação) à situação precária das bibliotecas, construindo o “paradoxo” anunciado.',
        detalhada: 'Os **conectores** (ou articuladores) são responsáveis pela **coesão sequencial**: eles mostram como uma ideia se relaciona com a outra. “No entanto” pertence ao grupo dos **adversativos**, junto com “mas”, “porém”, “contudo”, “todavia” e “entretanto”. Eles introduzem uma ideia que contraria a expectativa criada pela anterior.\n\nVeja o passo a passo no texto: a primeira frase anuncia um **paradoxo**, isto é, uma contradição aparente. A segunda apresenta o lado positivo (muitos livros, acesso amplo). Então “No entanto” vira a chave e apresenta o lado negativo (prédios precários, acervos velhos). A oposição entre esses dois lados é justamente o paradoxo.\n\nRepare ainda na **coesão referencial**: “essas instituições” e “Esses espaços” retomam “bibliotecas públicas”, evitando repetição. É um recurso que o ENEM também cobra.\n\nExemplo extra: “O time jogou bem; no entanto, perdeu.” A expectativa (jogar bem → vencer) é quebrada pelo conector adversativo.',
        alternativas: [
          'Errada. Conclusão seria marcada por “portanto”, “logo”, “assim”; “no entanto” indica oposição.',
          'Correta. O conector opõe o cenário de abundância à precariedade das bibliotecas, formando o paradoxo.',
          'Errada. Causa seria introduzida por “porque”, “pois”, “já que”; o texto não explica a causa do acesso à informação.',
          'Errada. A frase introduzida por “No entanto” contraria, e não confirma, a anterior.',
          'Errada. Não há relação de tempo; a relação é de contraste.'
        ],
        dica: 'Quando a questão perguntar o papel de um conector, substitua-o por “mas”, “portanto” ou “porque” e veja qual mantém o sentido.'
      },
      fontes: [
        { titulo: 'Inep — Exame Nacional do Ensino Médio', url: 'https://www.gov.br/inep' },
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org' }
      ]
    },
    {
      id: 'por-018',
      materia: 'portugues',
      assunto: 'Coesão e coerência',
      tipo: 'multipla',
      estilo: 'FGV',
      dificuldade: 3,
      objetivos: ['concursos-gerais', 'tribunais', 'policial', 'bancarios', 'estatais', 'livre'],
      enunciado: 'Em “Embora os recursos tenham sido liberados, as obras não começaram”, o conector “Embora” pode ser substituído, sem prejuízo do sentido original e da correção gramatical, por:',
      alternativas: [
        'Porquanto',
        'Contanto que',
        'À medida que',
        'Conquanto',
        'Visto que'
      ],
      resposta: 3,
      explicacao: {
        resumo: 'Letra D. “Conquanto” é conjunção concessiva, como “embora”, e também pede o verbo no subjuntivo: “Conquanto os recursos tenham sido liberados, as obras não começaram”.',
        detalhada: '“Embora” introduz uma **concessão**: um fato que, em tese, levaria a um resultado, mas não impede o resultado contrário. Aqui, a liberação dos recursos deveria levar ao início das obras, mas as obras não começaram. Para substituir “embora”, é preciso outro conector **concessivo**.\n\nOs principais conectores concessivos são: **embora, conquanto, ainda que, mesmo que, posto que, se bem que, apesar de que**. Todos pedem o verbo no **subjuntivo** (“tenham sido”), o que garante também a correção gramatical da troca.\n\nAs demais opções mudam a relação lógica:\n- **porquanto** e **visto que** são **causais** (= porque);\n- **contanto que** é **condicional** (= desde que);\n- **à medida que** é **proporcional** (= conforme).\n\nO par “porquanto” × “conquanto” é armadilha clássica: os dois são formais e parecidos no som, mas “porquanto” indica causa e “conquanto” indica concessão.\n\nExemplo extra: “Conquanto estivesse cansado, terminou o relatório” = “Embora estivesse cansado...”. Já “Terminou cedo, porquanto estava cansado” = “porque estava cansado”.',
        alternativas: [
          'Errada. “Porquanto” é causal (= porque) e mudaria o sentido.',
          'Errada. “Contanto que” é condicional (= desde que).',
          'Errada. “À medida que” indica proporção.',
          'Correta. “Conquanto” é concessivo como “embora” e mantém o subjuntivo.',
          'Errada. “Visto que” é causal e exigiria outra construção.'
        ],
        dica: 'Grave o par: “porquanto” = porque; “conquanto” = embora. A FGV adora colocar os dois juntos.'
      },
      fontes: [
        { titulo: 'Academia Brasileira de Letras', url: 'https://www.academia.org.br' },
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org' }
      ]
    }
  ]
});

/* ===================== LÍNGUA INGLESA — QUESTÕES ===================== */
Banco.registrar({
  questoes: [
    {
      id: 'ing-001',
      materia: 'ingles',
      assunto: 'Reading comprehension',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 1,
      objetivos: ['enem', 'livre'],
      textoBase: 'Community gardens are spreading across many cities. On empty lots that once collected garbage, neighbors now grow tomatoes, lettuce and herbs. Supporters say the benefits go beyond food: older residents teach younger ones, strangers become friends, and children learn where their meals come from. Critics, however, point out that many gardens depend on temporary agreements with landowners and may disappear when the land is sold.',
      enunciado: 'Segundo o texto, os defensores das hortas comunitárias argumentam que elas',
      alternativas: [
        'resolvem definitivamente o problema da fome nas cidades.',
        'trazem benefícios sociais e educativos, além da produção de alimentos.',
        'aumentam o valor de venda dos terrenos ocupados.',
        'dependem de acordos permanentes com os proprietários dos terrenos.',
        'devem substituir os supermercados nos bairros.'
      ],
      resposta: 1,
      explicacao: {
        resumo: 'Letra B. O texto diz que, para os defensores (“Supporters”), os benefícios “go beyond food” (vão além da comida): troca entre gerações, novas amizades e aprendizado das crianças.',
        detalhada: 'No ENEM, as questões de inglês vêm com enunciado e alternativas em português, e o segredo é **localizar no texto o trecho que responde à pergunta**. O enunciado fala dos “defensores”; no texto, eles aparecem como **“Supporters”**. A frase seguinte é a resposta: “the benefits go beyond food”, ou seja, os benefícios **vão além da comida**.\n\nDepois dos dois-pontos, o texto lista quais são esses benefícios: os mais velhos ensinam os mais novos (“older residents teach younger ones”), desconhecidos se tornam amigos (“strangers become friends”) e as crianças aprendem de onde vem a comida (“children learn where their meals come from”). São benefícios **sociais e educativos**, o que corresponde à alternativa B.\n\nCuidado com a alternativa D: o texto fala em acordos **temporários** (“temporary agreements”), e quem levanta esse ponto são os **críticos** (“Critics, however...”), não os defensores. A palavra “however” marca a mudança de ponto de vista.\n\nExemplo extra de leitura: em “Fans say the movie is brilliant; critics, however, call it boring”, a opinião positiva é dos fãs e a negativa, dos críticos.',
        alternativas: [
          'Errada. O texto não fala em fome nem em solução definitiva; isso é extrapolação.',
          'Correta. “The benefits go beyond food”: o texto cita troca entre gerações, amizades e aprendizado.',
          'Errada. O texto não trata de valorização dos terrenos; menciona apenas que eles podem ser vendidos.',
          'Errada. Os acordos são temporários (“temporary”), e esse é um argumento dos críticos.',
          'Errada. Não há menção a supermercados.'
        ],
        dica: 'Marque no texto quem diz o quê: “supporters”, “critics”, “experts”. O ENEM costuma trocar a voz de um grupo pela de outro.'
      },
      fontes: [
        { titulo: 'Cambridge Dictionary — supporter', url: 'https://dictionary.cambridge.org/dictionary/english/supporter' },
        { titulo: 'Inep — Exame Nacional do Ensino Médio', url: 'https://www.gov.br/inep' }
      ]
    },
    {
      id: 'ing-002',
      materia: 'ingles',
      assunto: 'Reading comprehension',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'LIBRARY NOTICE\n\nStarting next Monday, the second floor will be closed for renovation. Books from that floor can still be requested at the front desk, and they will be delivered within 24 hours. Study rooms on the first floor must now be booked online. We apologize for any inconvenience and thank you for your patience.',
      enunciado: 'Ao ler o aviso, um estudante que costuma pegar livros do segundo andar da biblioteca deve concluir que',
      alternativas: [
        'não poderá emprestar esses livros até o fim da reforma.',
        'precisará reservar uma sala de estudo para ter acesso aos livros.',
        'poderá solicitar os livros no balcão de atendimento e recebê-los em até 24 horas.',
        'terá de procurar os livros por conta própria no primeiro andar.',
        'deverá pedir os livros pela internet com 24 horas de antecedência.'
      ],
      resposta: 2,
      explicacao: {
        resumo: 'Letra C. O aviso diz que os livros do segundo andar “can still be requested at the front desk” e serão entregues “within 24 hours” (em até 24 horas).',
        detalhada: 'Avisos, cartazes e comunicados são gêneros frequentes no ENEM. A estratégia é identificar **a informação prática** que o texto transmite e relacioná-la à situação do enunciado: aqui, um estudante que usa livros do segundo andar.\n\nTrês expressões resolvem a questão:\n- **“can still be requested”**: ainda podem ser solicitados (o “still” indica que o serviço continua);\n- **“at the front desk”**: no balcão de atendimento, na recepção;\n- **“within 24 hours”**: dentro de 24 horas, ou seja, em até um dia.\n\nA alternativa E mistura informações: o que deve ser feito **online** (“booked online”) é a reserva das **salas de estudo**, não o pedido de livros. E “within 24 hours” não é antecedência, é o prazo máximo de entrega. Misturar dados verdadeiros do texto em uma combinação falsa é uma estratégia típica de distrator.\n\nExemplo extra: “Your order will arrive within three days” significa que o pedido chegará em até três dias, e não depois de três dias.',
        alternativas: [
          'Errada. O aviso diz que os livros ainda podem ser solicitados (“can still be requested”).',
          'Errada. A reserva online vale para as salas de estudo, não para acessar livros.',
          'Correta. Pedido no balcão (“front desk”) e entrega em até 24 horas (“within 24 hours”).',
          'Errada. O aviso não manda procurar os livros no primeiro andar; eles são entregues ao leitor.',
          'Errada. Mistura duas informações: “online” refere-se às salas, e “within 24 hours” é prazo de entrega, não antecedência.'
        ],
        dica: 'Distratores do ENEM costumam juntar duas informações verdadeiras do texto de um jeito errado. Confira a que cada dado se refere.'
      },
      fontes: [
        { titulo: 'Cambridge Dictionary — within', url: 'https://dictionary.cambridge.org/dictionary/english/within' },
        { titulo: 'Inep — Exame Nacional do Ensino Médio', url: 'https://www.gov.br/inep' }
      ]
    },
    {
      id: 'ing-003',
      materia: 'ingles',
      assunto: 'Reading comprehension',
      tipo: 'multipla',
      estilo: 'Cesgranrio',
      dificuldade: 3,
      objetivos: ['bancarios', 'estatais', 'livre'],
      textoBase: 'As more customers move their banking to smartphones, fraudsters have changed their tactics. Instead of breaking into systems, which has become increasingly difficult, they now target people. A typical scam begins with a message that seems to come from the customer’s bank, warning of a “suspicious transaction”. The victim is then asked to confirm personal data or install an app. Banks insist that they will never request passwords by message, yet thousands of customers fall for these tricks every year. Experts argue that technology alone cannot solve the problem; customer education is just as important.',
      enunciado: 'According to the text,',
      alternativas: [
        'fraudsters have abandoned digital channels and returned to traditional methods.',
        'breaking into banking systems has become easier as more customers use smartphones.',
        'banks often ask customers to confirm their passwords through text messages.',
        'technological solutions are enough to put an end to banking fraud.',
        'criminals now focus on deceiving customers rather than attacking banks’ systems.'
      ],
      resposta: 4,
      explicacao: {
        resumo: 'Letra E. O texto diz que, em vez de invadir sistemas (“Instead of breaking into systems”), os fraudadores agora miram as pessoas (“they now target people”).',
        detalhada: 'A Cesgranrio costuma fazer perguntas do tipo **“According to the text”** com alternativas em inglês. Cada alternativa deve ser confrontada com uma frase específica do texto. A resposta certa normalmente é uma **paráfrase**: diz o mesmo com outras palavras.\n\nA frase-chave é: “**Instead of** breaking into systems, which has become increasingly difficult, they now **target people**.” “Instead of” significa “em vez de”; “target” é “ter como alvo”. A alternativa E reescreve isso: os criminosos agora se concentram em **enganar clientes** (“deceiving customers”) **em vez de** (“rather than”) atacar os sistemas.\n\nVeja como os distratores distorcem o texto:\n- B inverte a informação: invadir sistemas ficou **mais difícil** (“increasingly difficult”), não mais fácil;\n- C contradiz o texto: os bancos dizem que **nunca** pedem senhas por mensagem (“will never request passwords”);\n- D contradiz a opinião dos especialistas: a tecnologia **sozinha** não resolve (“technology alone cannot solve the problem”).\n\nExemplo extra de paráfrase: “He prefers tea instead of coffee” = “He drinks tea rather than coffee”.',
        alternativas: [
          'Errada. Os fraudadores mudaram de tática dentro do ambiente digital (mensagens, apps); não voltaram a métodos tradicionais.',
          'Errada. O texto diz o contrário: invadir sistemas “has become increasingly difficult”.',
          'Errada. Os bancos afirmam que nunca pedem senhas por mensagem (“will never request passwords by message”).',
          'Errada. Os especialistas dizem que a tecnologia sozinha não resolve; a educação do cliente é igualmente importante.',
          'Correta. Paráfrase de “Instead of breaking into systems [...] they now target people”.'
        ],
        dica: 'Fique atento a “instead of”, “rather than”, “yet” e “alone”: são palavras pequenas que mudam todo o sentido da frase.'
      },
      fontes: [
        { titulo: 'Cambridge Dictionary — instead of', url: 'https://dictionary.cambridge.org/dictionary/english/instead-of' },
        { titulo: 'Cambridge Dictionary — target', url: 'https://dictionary.cambridge.org/dictionary/english/target' }
      ]
    },
    {
      id: 'ing-004',
      materia: 'ingles',
      assunto: 'Grammar',
      tipo: 'multipla',
      estilo: 'Cesgranrio',
      dificuldade: 2,
      objetivos: ['bancarios', 'estatais', 'enem', 'livre'],
      enunciado: 'Choose the alternative that correctly completes the sentence: “The bank ______ its new app last year, and since then more than two million customers ______ it.”',
      alternativas: [
        'launched / have downloaded',
        'has launched / downloaded',
        'has launched / have downloaded',
        'launched / downloaded',
        'was launching / have been downloaded'
      ],
      resposta: 0,
      explicacao: {
        resumo: 'Letra A. “Last year” indica tempo passado terminado (simple past: launched); “since then” liga o passado ao presente (present perfect: have downloaded).',
        detalhada: 'A diferença entre **simple past** e **present perfect** é uma das mais cobradas. A regra prática é observar os **marcadores de tempo**:\n- **simple past** (did, launched, went): ação concluída em um momento definido do passado. Marcadores: *yesterday, last year, in 2020, ago*;\n- **present perfect** (have/has + particípio): ação que começou no passado e chega até agora, ou cujo resultado importa agora. Marcadores: *since, for, already, yet, ever, so far*.\n\nNa primeira lacuna, “last year” é um momento terminado, então só cabe **launched**. O present perfect (“has launched last year”) é incompatível com esse marcador em inglês padrão.\n\nNa segunda lacuna, “since then” (desde então) cria um período que vai do lançamento até hoje. Esse é o território do present perfect: **have downloaded**. Por isso A é a única alternativa correta.\n\nA alternativa E tem ainda um problema de voz: “customers have been downloaded” seria passiva (os clientes teriam sido baixados), o que não faz sentido.\n\nExemplo extra: “I moved to São Paulo in 2019, and I have lived here since then.”',
        alternativas: [
          'Correta. Simple past com “last year” e present perfect com “since then”.',
          'Errada. “Has launched” não combina com “last year”, e “since then” pede present perfect.',
          'Errada. A segunda lacuna está certa, mas “has launched last year” contraria a regra do present perfect.',
          'Errada. A primeira lacuna está certa, mas “since then” exige present perfect: “have downloaded”.',
          'Errada. “Was launching” não indica ação concluída, e “have been downloaded” é voz passiva sem sentido aqui.'
        ],
        dica: 'Viu “ago”, “last” ou um ano específico? Simple past. Viu “since” ou “for” chegando até hoje? Present perfect.'
      },
      fontes: [
        { titulo: 'Cambridge Dictionary — since', url: 'https://dictionary.cambridge.org/dictionary/english/since' },
        { titulo: 'Cambridge Dictionary', url: 'https://dictionary.cambridge.org' }
      ]
    },
    {
      id: 'ing-005',
      materia: 'ingles',
      assunto: 'Grammar',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['bancarios', 'estatais', 'livre'],
      textoBase: 'If the manager had read the report, she would have noticed the mistake.',
      enunciado: 'A frase está gramaticalmente correta e expressa uma situação hipotética referente ao passado, que não se concretizou: a gerente não leu o relatório e, por isso, não percebeu o erro.',
      resposta: true,
      explicacao: {
        resumo: 'Certo. É o third conditional (if + past perfect, would have + particípio), usado para hipóteses no passado contrárias à realidade.',
        detalhada: 'O inglês tem estruturas fixas de **conditional sentences**. As três mais cobradas são:\n- **first conditional** (possibilidade real no futuro): *If it rains, I will stay home.*\n- **second conditional** (hipótese no presente ou futuro, improvável): *If I had money, I would travel.*\n- **third conditional** (hipótese no passado, que não aconteceu): *If I had studied, I would have passed.*\n\nA frase do item segue exatamente a fórmula do terceiro tipo: **If + past perfect** (“had read”) + **would have + particípio** (“would have noticed”). O sentido é contrafactual: a condição não ocorreu no passado, logo o resultado também não. Traduzindo: “Se a gerente tivesse lido o relatório, teria percebido o erro”. A realidade implícita é que ela não leu e não percebeu.\n\nUm erro comum é usar “would” nas duas orações (“If she would have read...”). Em inglês padrão, a oração com “if” não leva “would” no terceiro condicional.\n\nExemplo extra: “If we had left earlier, we would have caught the train.” (Não saímos cedo; perdemos o trem.)',
        dica: 'No terceiro condicional, “had” fica do lado do “if”; “would have” fica do lado do resultado. Nunca os dois juntos na mesma oração.'
      },
      fontes: [
        { titulo: 'Cambridge Dictionary — if', url: 'https://dictionary.cambridge.org/dictionary/english/if' },
        { titulo: 'Cambridge Dictionary', url: 'https://dictionary.cambridge.org' }
      ]
    },
    {
      id: 'ing-006',
      materia: 'ingles',
      assunto: 'Vocabulary',
      tipo: 'multipla',
      estilo: 'Cesgranrio',
      dificuldade: 1,
      objetivos: ['enem', 'bancarios', 'estatais', 'livre'],
      textoBase: 'Many people believe that the company’s profits fell last year. Actually, they rose by 8%, although the growth was smaller than expected.',
      enunciado: 'In the text, the word “Actually” can be replaced, without change in meaning, by:',
      alternativas: [
        'Currently',
        'Nowadays',
        'Eventually',
        'In fact',
        'At present'
      ],
      resposta: 3,
      explicacao: {
        resumo: 'Letra D. “Actually” significa “na verdade, de fato”, e é usado para corrigir uma ideia anterior. Equivale a “In fact”.',
        detalhada: '“Actually” é um dos **falsos cognatos** (false friends) mais famosos. Parece “atualmente”, mas significa **“na verdade”, “de fato”, “realmente”**. No texto, ele corrige uma crença: muitos acham que os lucros caíram; **na verdade**, subiram 8%.\n\nPara dizer “atualmente” em inglês, usa-se **currently, nowadays, at present, these days**. Repare que três das alternativas (A, B e E) são justamente essas palavras: a banca aposta que o candidato vai confundir “actually” com “atualmente”.\n\nA alternativa C, “eventually”, é outro falso cognato: significa **“finalmente, no fim das contas”**, e não “eventualmente”.\n\nOutros falsos cognatos que caem bastante:\n- *pretend* = fingir (não “pretender”, que é *intend*);\n- *library* = biblioteca (livraria é *bookstore*);\n- *push* = empurrar (puxar é *pull*);\n- *parents* = pais (parentes é *relatives*).\n\nExemplo extra: “I thought the test was on Monday. Actually, it’s on Tuesday.” = “Na verdade, é na terça”.',
        alternativas: [
          'Errada. “Currently” significa “atualmente”, e não “na verdade”.',
          'Errada. “Nowadays” significa “hoje em dia”.',
          'Errada. “Eventually” significa “finalmente, por fim”; também é falso cognato.',
          'Correta. “In fact” = “na verdade, de fato”, o mesmo sentido de “actually”.',
          'Errada. “At present” significa “no momento, atualmente”.'
        ],
        dica: 'Se a frase com “actually” contradiz ou corrige o que veio antes, o sentido é “na verdade”. Esse contraste é a pista.'
      },
      fontes: [
        { titulo: 'Cambridge Dictionary — actually', url: 'https://dictionary.cambridge.org/dictionary/english/actually' },
        { titulo: 'Cambridge Dictionary — currently', url: 'https://dictionary.cambridge.org/dictionary/english/currently' }
      ]
    },
    {
      id: 'ing-007',
      materia: 'ingles',
      assunto: 'Vocabulary',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['bancarios', 'estatais', 'enem', 'livre'],
      textoBase: 'After months of tense negotiation, the two companies eventually signed the merger agreement.',
      enunciado: 'No trecho, o vocábulo “eventually” equivale a “eventualmente”, no sentido de “ocasionalmente” ou “por acaso”.',
      resposta: false,
      explicacao: {
        resumo: 'Errado. “Eventually” é falso cognato: significa “finalmente, por fim, no fim das contas”. As empresas, depois de meses de negociação, finalmente assinaram o acordo.',
        detalhada: '“Eventually” indica algo que acontece **depois de um longo tempo ou de um processo**, muitas vezes após dificuldades. A tradução adequada é **“finalmente”, “por fim”, “no fim das contas”**. O próprio contexto ajuda: “After months of tense negotiation” (depois de meses de negociação tensa) prepara o leitor para um desfecho que demorou a chegar.\n\nO “eventualmente” do português, no sentido de “de vez em quando” ou “por acaso”, corresponde em inglês a **occasionally, sometimes, by chance** ou **possibly**, conforme o caso. Do mesmo modo, o adjetivo “eventual” em português (possível, casual) não é o mesmo que *eventual* em inglês, que significa “final, que acontece no fim”: *the eventual winner* = o vencedor final.\n\nPasso a passo para itens de vocabulário no CEBRASPE: (1) não confie na semelhança com o português; (2) leia a frase inteira; (3) teste a tradução proposta no contexto. “Depois de meses de negociação, as empresas ocasionalmente assinaram o acordo” não faz sentido.\n\nExemplo extra: “He failed twice, but eventually he passed the exam.” = “mas finalmente passou”.',
        dica: 'Lista curta de falsos cognatos que o CEBRASPE adora: actually, eventually, pretend, exquisite, sensible, injury.'
      },
      fontes: [
        { titulo: 'Cambridge Dictionary — eventually', url: 'https://dictionary.cambridge.org/dictionary/english/eventually' }
      ]
    },
    {
      id: 'ing-008',
      materia: 'ingles',
      assunto: 'Grammar',
      tipo: 'multipla',
      estilo: 'FGV',
      dificuldade: 3,
      objetivos: ['estatais', 'bancarios', 'enem', 'livre'],
      enunciado: 'Choose the option that correctly completes the sentence: “______ the heavy rain, the marathon started on time.”',
      alternativas: [
        'Although',
        'Even though',
        'Despite',
        'However'
      ],
      resposta: 2,
      explicacao: {
        resumo: 'Letra C. “Despite” é preposição e vem seguido de substantivo ou expressão nominal (“the heavy rain”). “Although” e “even though” exigiriam uma oração com verbo.',
        detalhada: 'As quatro opções expressam **contraste**, então o sentido não basta para decidir. O que decide é a **estrutura gramatical** depois da lacuna. Depois dela vem “the heavy rain”, uma expressão nominal, sem verbo.\n\n- **Despite / In spite of** são preposições: pedem substantivo, pronome ou verbo com -ing. *Despite the rain*, *in spite of being tired*.\n- **Although / Even though / Though** são conjunções: pedem uma oração completa, com sujeito e verbo. *Although it was raining*, *even though it rained heavily*.\n- **However** é advérbio conectivo: liga duas orações independentes e costuma vir depois de ponto ou ponto e vírgula, com vírgula em seguida. *It rained heavily; however, the marathon started on time.*\n\nAssim, só “Despite” completa a frase corretamente. Para usar “Although”, seria preciso reescrever: “**Although it rained heavily**, the marathon started on time.”\n\nUm erro comum é escrever “despite of”. Ou se usa **despite**, ou **in spite of**; nunca “despite of”.',
        alternativas: [
          'Errada. “Although” é conjunção e exige oração com verbo: “Although it rained heavily...”.',
          'Errada. “Even though” também é conjunção e pede sujeito e verbo depois.',
          'Correta. “Despite” é preposição e aceita a expressão nominal “the heavy rain”.',
          'Errada. “However” liga orações independentes (“It rained; however, ...”) e não introduz expressão nominal.'
        ],
        dica: 'Olhe o que vem depois da lacuna: substantivo → despite/in spite of; oração com verbo → although/even though.'
      },
      fontes: [
        { titulo: 'Cambridge Dictionary — despite', url: 'https://dictionary.cambridge.org/dictionary/english/despite' },
        { titulo: 'Cambridge Dictionary — although', url: 'https://dictionary.cambridge.org/dictionary/english/although' }
      ]
    }
  ]
});

/* ===================== AULAS ===================== */
Banco.registrar({
  aulas: [
    {
      id: 'aula-por-crase',
      materia: 'portugues',
      assunto: 'Crase',
      titulo: 'Crase sem decoreba: o teste das duas condições',
      duracaoMin: 18,
      resumo: 'Entenda a crase como a fusão de duas palavras e aprenda a decidir, com testes rápidos, quando o acento é obrigatório, proibido ou facultativo.',
      secoes: [
        {
          titulo: 'O que é crase, afinal',
          texto: '**Crase não é um acento: é um fenômeno.** Crase é a fusão de duas vogais iguais. Em português, ela acontece quando a **preposição “a”** encontra o **artigo feminino “a”** (ou o “a” inicial de aquele, aquela, aquilo). O acento grave (`) é apenas o sinal que marca essa fusão na escrita.\n\nVeja a soma:\n- Fui a (preposição) + a (artigo) farmácia → Fui **à** farmácia.\n- Refiro-me a (preposição) + aquele livro → Refiro-me **àquele** livro.\n\nPor isso não existe “crase antes de palavra masculina”: no masculino, o artigo é “o”, e a soma vira “ao” (Fui **ao** mercado). Entender a crase como soma resolve a maior parte das dúvidas.'
        },
        {
          titulo: 'A regra de ouro: as duas condições',
          texto: 'Só há crase quando **duas condições acontecem ao mesmo tempo**:\n- a palavra anterior **exige a preposição “a”** (ir a, referir-se a, obediente a, acesso a);\n- a palavra seguinte é **feminina e aceita o artigo “a”**.\n\nSe faltar uma delas, não há crase. Dois testes ajudam a conferir:\n- **Teste do masculino**: troque a palavra feminina por uma masculina. Se aparecer “ao”, havia crase. “Assisti **à** palestra” → “Assisti **ao** debate”.\n- **Teste do “volto da”** (para lugares): se você “volta **da**”, vai “**à**”; se “volta **de**”, vai “**a**”. “Volto **da** Bahia” → “Vou **à** Bahia”. “Volto **de** Curitiba” → “Vou **a** Curitiba”.\n\nCerto: “O prêmio foi entregue **à** diretora.” (entregue ao diretor)\nErrado: “O prêmio foi entregue à ele.” (pronome masculino, e pronome pessoal não aceita artigo)'
        },
        {
          titulo: 'Quando a crase é obrigatória',
          texto: 'Além dos casos que passam no teste das duas condições, a crase é obrigatória em situações fixas:\n- **Horas determinadas**: “A reunião começa **às** 14h”, “Chegou **à** uma hora”. Mas: “desde as 8h”, “para as 14h”, “após as 10h” (a preposição já é outra).\n- **Locuções femininas** adverbiais, prepositivas e conjuntivas: **às vezes, à noite, à tarde, às pressas, à medida que, à custa de, à procura de, à beira de**.\n- **“À moda de”**, mesmo com a palavra “moda” oculta: “bife **à** milanesa”, “gol **à** Pelé”.\n- **Aquele, aquela, aquilo** depois de termo que pede “a”: “Não dei atenção **àquilo**”.\n- **A qual, as quais** quando o verbo pede “a”: “A vaga **à qual** me candidatei”.\n\nCerto: “Saímos **às** pressas.”\nErrado: “O evento vai das 9h as 18h.” (o correto é “das 9h **às** 18h”, pois “das” mostra que há artigo)'
        },
        {
          titulo: 'Quando a crase é proibida',
          texto: 'Não há crase quando não pode haver artigo feminino. Os casos que mais caem:\n- antes de **palavra masculina**: “andar **a** cavalo”, “pagar **a** prazo”;\n- antes de **verbo**: “começou **a** estudar”;\n- antes de **pronomes pessoais** e da maioria dos **pronomes de tratamento**: “entreguei **a** ela”, “solicito **a** Vossa Excelência”;\n- antes de **artigo indefinido** e de pronomes como “esta”, “essa”, “cada”, “toda”: “referiu-se **a** uma decisão”, “**a** cada dia”;\n- em expressões com **palavras repetidas**: “frente **a** frente”, “gota **a** gota”;\n- quando um **“a” no singular** vem antes de palavra no **plural**: “falou **a** pessoas estranhas” (com artigo seria “**às** pessoas”);\n- antes de **nomes de cidade** que não aceitam artigo: “vou **a** Recife” (mas “vou **à** Recife antiga”, porque a palavra especificada passa a aceitar artigo).\n\nErrado: “Estou disposto à colaborar.” Certo: “Estou disposto **a** colaborar.”'
        },
        {
          titulo: 'Quando a crase é facultativa',
          texto: 'Em três situações o artigo é opcional, e por isso a crase também é. Nessas frases, **as duas formas estão corretas**:\n- antes de **pronome possessivo feminino no singular**: “Fiz um pedido **a/à** sua secretária”;\n- antes de **nome próprio feminino de pessoa**: “Enviei o convite **a/à** Juliana”;\n- depois da preposição **até**: “Fomos **até a/até à** praia”.\n\nAtenção a dois detalhes. Primeiro, no plural o raciocínio muda: “Entreguei os papéis **às** suas secretárias” (com artigo) ou “**a** suas secretárias” (sem artigo). Segundo, quando o possessivo está **sozinho**, substituindo um substantivo, a crase é obrigatória: “Minha opinião é igual **à** sua”.\n\nNas provas, a pergunta típica é: “a retirada do acento prejudica a correção?”. Nos casos facultativos, a resposta é **não**.'
        }
      ],
      pontosChave: [
        'Crase é a fusão da preposição “a” com o artigo “a” (ou com o “a” de aquele, aquela, aquilo).',
        'Só há crase quando a palavra anterior pede “a” e a seguinte é feminina e aceita artigo.',
        'Teste do masculino: se aparece “ao”, há crase no feminino; teste do “volto da” resolve lugares.',
        'É obrigatória em horas determinadas, locuções femininas (às vezes, à medida que) e na ideia de “à moda de”.',
        'É proibida antes de masculino, verbo, pronome pessoal, artigo indefinido e em palavras repetidas.',
        'É facultativa antes de possessivo feminino singular, de nome de mulher e depois de “até”.'
      ],
      fontes: [
        { titulo: 'Crase — Wikipédia', url: 'https://pt.wikipedia.org/wiki/Crase' },
        { titulo: 'Academia Brasileira de Letras', url: 'https://www.academia.org.br' }
      ]
    },
    {
      id: 'aula-por-concordancia',
      materia: 'portugues',
      assunto: 'Concordância verbal e nominal',
      titulo: 'Concordância verbal e nominal: as regras que mais caem',
      duracaoMin: 20,
      resumo: 'Aprenda a encontrar o sujeito, dominar os verbos impessoais e a voz passiva sintética e acertar as palavras que ora variam, ora não.',
      secoes: [
        {
          titulo: 'O princípio: quem manda é o sujeito (ou o substantivo)',
          texto: 'Concordância é a harmonia entre as palavras da frase. Na **concordância verbal**, o verbo concorda em número e pessoa com o **sujeito**. Na **concordância nominal**, adjetivos, artigos, numerais e pronomes concordam em gênero e número com o **substantivo** a que se referem.\n\nO grande segredo das questões de concordância verbal é **achar o sujeito**. Pergunte ao verbo “quem?” ou “o quê?”. Cuidado com o **sujeito posposto**, que vem depois do verbo e engana o ouvido:\n- Errado: “Chegou os resultados da prova.”\n- Certo: “**Chegaram** os resultados da prova.” (o que chegou? os resultados)\n\nOutra armadilha é o sujeito longo, com um termo no singular perto do verbo: “A lista com os nomes dos aprovados **saiu** ontem” (o núcleo é “lista”, não “nomes”).'
        },
        {
          titulo: 'Verbos impessoais: haver e fazer',
          texto: 'Alguns verbos não têm sujeito e ficam sempre na **3ª pessoa do singular**:\n- **haver** no sentido de existir, acontecer ou de tempo decorrido: “**Há** muitas vagas”, “**Houve** problemas”, “**Havia** anos que não o via”;\n- **fazer** indicando tempo ou clima: “**Faz** dez anos”, “**Fez** dias muito frios”.\n\nNa **locução verbal**, o auxiliar herda a impessoalidade: “**Deve** haver soluções”, “**Vai** fazer dois anos”.\n\nJá **existir, ocorrer, acontecer, faltar, restar e bastar** são pessoais e concordam com o sujeito:\n- Certo: “**Existem** dúvidas”, “**Devem existir** dúvidas”, “**Faltam** três dias”.\n- Errado: “Houveram reclamações”, “Devem haver vagas”, “Existe muitas dúvidas”.\n\nHaver no sentido de “ter” como auxiliar, porém, é pessoal: “Eles **haviam** saído”.'
        },
        {
          titulo: 'O “se”: voz passiva ou sujeito indeterminado?',
          texto: 'O pronome “se” muda a concordância conforme a função:\n- **Pronome apassivador** (voz passiva sintética): aparece com verbo transitivo direto, e o termo que acompanha o verbo é o **sujeito**. O verbo concorda com ele: “**Vendem-se** casas” = “Casas são vendidas”; “**Alugam-se** salas”.\n- **Índice de indeterminação do sujeito**: aparece com verbo transitivo indireto (com preposição), intransitivo ou de ligação. O verbo fica **sempre no singular**: “**Precisa-se** de funcionários”, “**Trata-se** de casos graves”, “**Vive-se** bem aqui”.\n\nTeste rápido: tente passar para a voz passiva analítica. Se der certo (“Casas são vendidas”), é apassivador e há concordância. Se não der (“Funcionários são precisados” não existe), é índice de indeterminação e o verbo fica no singular.\n\nErrado: “Aluga-se apartamentos.” Certo: “**Alugam-se** apartamentos.”\nErrado: “Precisam-se de técnicos.” Certo: “**Precisa-se** de técnicos.”'
        },
        {
          titulo: 'Casos especiais de concordância verbal',
          texto: 'Alguns sujeitos têm regras próprias:\n- **Expressões partitivas** (a maioria de, grande parte de, metade de) + plural: o verbo pode ficar no singular ou no plural. “A maioria dos alunos **aprovou/aprovaram**.”\n- **Mais de um**: verbo no singular. “Mais de um candidato **faltou**.”\n- **Nenhum, cada, qualquer** + substantivo: verbo no singular. “Nenhum dos servidores **assinou**.”\n- **Porcentagem**: o verbo pode concordar com o número ou com o termo que o especifica. “Trinta por cento do eleitorado **votou**”; “Trinta por cento dos eleitores **votaram**”.\n- **Um dos que**: a norma-padrão prefere o plural. “Ele é um dos que mais **trabalham**.”\n- **Sujeito composto antes do verbo**: plural. “O diretor e a secretária **viajaram**.” Depois do verbo, aceita-se também a concordância com o núcleo mais próximo: “**Viajou** o diretor e a secretária.”\n\nAs bancas gostam de juntar um caso facultativo com um obrigatório na mesma frase. Leia até o fim.'
        },
        {
          titulo: 'Concordância nominal: as palavras traiçoeiras',
          texto: 'Regra geral: o adjetivo concorda com o substantivo. As bancas cobram as palavras que mudam de classe:\n- **Anexo, incluso, obrigado, mesmo, próprio, quite**: são adjetivos e variam. “Seguem **anexas** as planilhas”, “Elas **mesmas** decidiram”, “Muito **obrigada**”, disse ela.\n- **Meio**: varia como numeral (“**meia** hora”), não varia como advérbio (“ela está **meio** cansada”).\n- **Bastante**: varia junto de substantivo (“**bastantes** motivos”), não varia junto de verbo ou adjetivo (“estudaram **bastante**”, “**bastante** cansadas”).\n- **Menos**: nunca varia. Errado: “menas pessoas”. Certo: “**menos** pessoas”.\n- **É proibido, é necessário, é bom**: sem determinante, ficam invariáveis (“É **proibido** entrada”); com artigo, concordam (“É **proibida a** entrada”).\n\nTeste útil: troque “bastante” por “muitos” (varia) ou “muito” (não varia); troque “meio” por “um pouco” (não varia).'
        }
      ],
      pontosChave: [
        'Encontre o sujeito perguntando “quem?” ou “o quê?” ao verbo; cuidado com o sujeito posposto.',
        'Haver (existir ou tempo) e fazer (tempo) são impessoais e ficam no singular, inclusive com auxiliar: “Deve haver”.',
        'Existir, ocorrer, faltar e restar são pessoais: “Existem dúvidas”, “Faltam três dias”.',
        'Com “se” apassivador o verbo concorda (“Vendem-se casas”); com índice de indeterminação fica no singular (“Precisa-se de técnicos”).',
        '“Mais de um” e “nenhum” pedem singular; partitivas como “a maioria de” aceitam singular ou plural.',
        'Anexo, mesmo e obrigado variam; menos nunca varia; meio e bastante dependem da classe.',
        '“É proibido entrada” (sem artigo) e “É proibida a entrada” (com artigo) estão corretas.'
      ],
      fontes: [
        { titulo: 'Academia Brasileira de Letras', url: 'https://www.academia.org.br' },
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org' }
      ]
    },
    {
      id: 'aula-por-coesao',
      materia: 'portugues',
      assunto: 'Coesão e coerência',
      titulo: 'Coesão e coerência: como um texto se mantém de pé',
      duracaoMin: 17,
      resumo: 'Veja a diferença entre coesão e coerência, os mecanismos de retomada e os conectores que mais caem no ENEM e nos concursos.',
      secoes: [
        {
          titulo: 'Coesão e coerência não são a mesma coisa',
          texto: '**Coesão** é a ligação visível entre as partes do texto: pronomes que retomam palavras, conectores que unem frases, sinônimos que evitam repetição. É a “costura” da superfície.\n\n**Coerência** é a lógica do sentido: as ideias não se contradizem, fazem sentido no mundo e se encaminham para um propósito. É a “arquitetura” do conteúdo.\n\nUm texto pode ter conectores e ainda assim ser incoerente: “Choveu muito; portanto, as ruas ficaram secas.” A coesão está lá (o conector “portanto”), mas a relação de causa e consequência contraria o que sabemos do mundo. O contrário também acontece: textos curtos podem ser coerentes quase sem conectores, como em “Fila enorme. Desisti.”'
        },
        {
          titulo: 'Coesão referencial: retomar sem repetir',
          texto: 'A coesão referencial faz o leitor acompanhar de quem ou de que se fala. Os principais recursos são:\n- **Pronomes**: “A ministra chegou cedo. **Ela** abriu a sessão.”\n- **Sinônimos e expressões equivalentes**: “Machado de Assis... **o autor de Dom Casmurro**...”.\n- **Hiperônimos** (termo mais geral): “Comprei rosas e margaridas. **As flores** murcharam.”\n- **Elipse** (omissão do termo já conhecido): “Os alunos chegaram e **[os alunos]** sentaram-se.”\n- **Numerais e advérbios**: “Ana e Pedro passaram; **a primeira** em Direito, **o segundo** em Medicina.” “Fui a Belém e **lá** fiquei uma semana.”\n\nQuando o termo retoma algo anterior, chama-se **anáfora**; quando antecipa algo que virá, **catáfora** (“Só quero **isto**: silêncio.”).\n\nCuidado com a **ambiguidade**: “O diretor conversou com o gerente sobre **seu** desempenho.” De quem é o desempenho? Uma boa retomada não deixa dúvida.'
        },
        {
          titulo: 'Coesão sequencial: os conectores',
          texto: 'Os conectores mostram a relação lógica entre as ideias. Conheça os grupos:\n- **Adição**: e, além disso, também, não só... mas também.\n- **Oposição (adversativa)**: mas, porém, contudo, todavia, entretanto, no entanto.\n- **Concessão**: embora, conquanto, ainda que, mesmo que, apesar de que (sem o “que”, “apesar de” pede substantivo ou infinitivo: “Apesar da chuva”, “Apesar de ter chovido”).\n- **Causa**: porque, pois, já que, visto que, porquanto, uma vez que.\n- **Conclusão**: portanto, logo, assim, por isso, por conseguinte.\n- **Condição**: se, caso, desde que, contanto que.\n- **Finalidade**: para que, a fim de que.\n- **Proporção**: à medida que, à proporção que.\n- **Tempo**: quando, enquanto, assim que, logo que.\n\nNa prova, o pedido mais comum é substituir um conector por outro “sem alterar o sentido”. Para acertar, primeiro identifique a relação (causa? oposição?) e só depois procure, nas alternativas, um conector do mesmo grupo. Verifique também o modo verbal: os concessivos pedem subjuntivo.'
        },
        {
          titulo: 'Oposição × concessão e as armadilhas de vocabulário',
          texto: 'Oposição e concessão expressam contraste, mas com estruturas diferentes:\n- **Adversativa** (mas, porém): a ideia de contraste vem na **segunda** parte e é a que prevalece. “Estudou muito, **mas** não passou.”\n- **Concessiva** (embora, ainda que): o fato concedido vem na oração com o conector, normalmente com **subjuntivo**. “**Embora** tenha estudado muito, não passou.”\n\nAo trocar uma pela outra, a frase precisa ser reorganizada:\n- Certo: “Choveu, **mas** o jogo aconteceu.” → “**Embora** tenha chovido, o jogo aconteceu.”\n- Errado: “Embora choveu, o jogo aconteceu.” (falta o subjuntivo)\n\nArmadilhas de vocabulário que as bancas adoram:\n- **porquanto** = porque (causa) × **conquanto** = embora (concessão);\n- **posto que** é concessivo na norma-padrão (= embora), apesar do uso causal no dia a dia;\n- **entretanto**, como conjunção, é adversativo (= porém); o sentido temporal (“nesse meio-tempo”) existe, mas é raro e quase não cai em prova.'
        },
        {
          titulo: 'Coerência: o que derruba o sentido',
          texto: 'Os problemas de coerência mais cobrados são:\n- **Contradição interna**: “Ele nunca viajou de avião. Na última viagem de avião, perdeu a mala.”\n- **Relação lógica falsa**: usar “portanto” onde não há conclusão, ou “porque” onde não há causa.\n- **Quebra de progressão**: o texto repete a mesma ideia sem acrescentar nada, ou muda de assunto sem transição.\n- **Incompatibilidade com o mundo**: “O sol se pôs ao meio-dia, e a noite começou.” (fora de um contexto ficcional que justifique isso).\n\nNa redação do ENEM, essas noções aparecem na **competência 4**, que avalia o uso de mecanismos linguísticos de coesão, e influenciam a avaliação da organização das ideias. Na interpretação de textos, a pergunta costuma ser “a que termo se refere tal pronome?” ou “que relação o conector estabelece?”.\n\nRoteiro rápido de revisão: (1) cada pronome tem referente claro? (2) cada conector expressa a relação certa? (3) alguma frase contradiz outra?'
        }
      ],
      pontosChave: [
        'Coesão é a ligação visível entre as partes do texto; coerência é a lógica do sentido.',
        'Pronomes, sinônimos, hiperônimos e elipse fazem a coesão referencial e evitam repetição.',
        'Anáfora retoma o que já foi dito; catáfora antecipa o que vem depois.',
        'Para trocar um conector, identifique primeiro a relação lógica e escolha outro do mesmo grupo.',
        'Concessivos (embora, conquanto, ainda que) pedem subjuntivo; adversativos (mas, porém) não.',
        'Porquanto é causal; conquanto é concessivo.',
        'Contradição, relação lógica falsa e falta de progressão são os principais problemas de coerência.'
      ],
      fontes: [
        { titulo: 'Inep — Exame Nacional do Ensino Médio', url: 'https://www.gov.br/inep' },
        { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org' },
        { titulo: 'Academia Brasileira de Letras', url: 'https://www.academia.org.br' }
      ]
    },
    {
      id: 'aula-ing-reading',
      materia: 'ingles',
      assunto: 'Reading comprehension',
      titulo: 'Reading comprehension: como ler em inglês na prova',
      duracaoMin: 16,
      resumo: 'Estratégias de leitura para entender textos em inglês mesmo sem conhecer todas as palavras: skimming, scanning, cognatos, falsos cognatos e marcadores do discurso.',
      secoes: [
        {
          titulo: 'Como o inglês é cobrado',
          texto: 'No **ENEM**, a prova de Linguagens traz **cinco questões de língua estrangeira**, e o candidato escolhe entre inglês e espanhol na inscrição. Os textos são variados (notícias, cartuns, poemas, anúncios, letras de música), mas **enunciado e alternativas vêm em português**. O foco é compreender a ideia principal e a finalidade do texto.\n\nNos **concursos** (Cesgranrio em bancos e estatais, CEBRASPE, FGV), os textos costumam ser jornalísticos ou técnicos, e as alternativas muitas vezes vêm em inglês. Além da leitura, aparecem perguntas de gramática e vocabulário **dentro do texto**: o sentido de uma palavra, o referente de um pronome, a função de um conector.\n\nEm qualquer caso, o objetivo não é traduzir tudo, e sim **entender o suficiente para responder**. As estratégias a seguir ajudam a ler mais rápido e com mais segurança.'
        },
        {
          titulo: 'Skimming e scanning',
          texto: 'São duas leituras com propósitos diferentes:\n- **Skimming** (leitura panorâmica): passar os olhos pelo texto para captar o **assunto geral**. Olhe título, primeira e última frase de cada parágrafo, palavras repetidas, números e nomes próprios.\n- **Scanning** (leitura de busca): procurar uma **informação específica**, como uma data, um nome, um número ou a palavra-chave do enunciado.\n\nRoteiro prático para a prova:\n- leia o **enunciado primeiro**, para saber o que procurar;\n- faça o skimming do texto (30 segundos bastam);\n- use o scanning para achar o trecho que responde;\n- leia esse trecho com atenção, frase por frase;\n- compare com as alternativas, eliminando as que **extrapolam** ou **contradizem** o texto.\n\nExemplo: se o enunciado pergunta “o que os críticos dizem”, procure a palavra **critics** no texto e leia a frase em volta dela.'
        },
        {
          titulo: 'Cognatos e falsos cognatos',
          texto: '**Cognatos** são palavras parecidas com o português e de sentido igual: *important, information, community, economy, technology*. Eles são grandes aliados: em textos jornalísticos, uma boa parte do vocabulário é formada por cognatos.\n\n**Falsos cognatos** (false friends) parecem, mas não são. Os mais cobrados:\n- *actually* = na verdade (atualmente = *currently*);\n- *eventually* = finalmente, por fim (eventualmente = *occasionally*);\n- *pretend* = fingir (pretender = *intend*);\n- *library* = biblioteca (livraria = *bookstore*);\n- *push* = empurrar (puxar = *pull*);\n- *parents* = pais (parentes = *relatives*);\n- *college* = faculdade (colégio = *school*);\n- *exquisite* = requintado, refinado (esquisito = *weird, strange*).\n\nCerto: “*Actually, profits rose*” = “**Na verdade**, os lucros subiram”.\nErrado: “*Actually, profits rose*” = “Atualmente, os lucros subiram”.'
        },
        {
          titulo: 'Marcadores do discurso: as placas do texto',
          texto: 'Conectores mostram para onde o raciocínio vai. Reconhecê-los é metade da interpretação:\n- **Contraste**: *but, however, although, even though, despite, in spite of, yet, whereas*.\n- **Adição**: *and, also, moreover, furthermore, in addition, besides*.\n- **Causa**: *because, since, as, due to, because of*.\n- **Consequência**: *so, therefore, thus, as a result, consequently*.\n- **Exemplo**: *for example, for instance, such as*.\n- **Condição**: *if, unless* (= a menos que), *provided that*.\n\nAtenção à gramática dos conectores de contraste: *although* e *even though* pedem **oração** (“*Although it rained...*”); *despite* e *in spite of* pedem **substantivo** ou verbo com -ing (“*Despite the rain...*”); *however* liga frases independentes (“*It rained. However, ...*”).\n\nQuando um texto diz “*Supporters say X. Critics, however, argue Y*”, o *however* avisa que a opinião vai mudar de lado.'
        },
        {
          titulo: 'Erros que derrubam candidatos',
          texto: 'Quase sempre a alternativa errada comete um destes desvios:\n- **Extrapolação**: diz mais do que o texto. Se o texto fala que algo “pode” acontecer (*may, might*), a alternativa que diz que “vai” acontecer está errada.\n- **Inversão**: troca causa e consequência, ou o “mais” pelo “menos” (*easier* × *more difficult*).\n- **Troca de voz**: atribui aos *critics* o que disseram os *supporters*.\n- **Mistura de dados**: junta duas informações verdadeiras do texto de um jeito falso.\n- **Palavra absoluta**: *always, never, only, completely* costumam marcar extrapolação.\n\nPratique com este mini-texto: “*Remote work has grown since 2020. However, many companies now ask employees to return to the office at least twice a week.*” A ideia principal é que o trabalho remoto cresceu, **mas** muitas empresas pedem retorno parcial ao escritório. Uma alternativa que diga “o trabalho remoto acabou” extrapola; uma que diga “as empresas proibiram o escritório” inverte.'
        }
      ],
      pontosChave: [
        'Leia o enunciado antes do texto para saber o que procurar.',
        'Skimming dá o assunto geral; scanning encontra a informação específica.',
        'Cognatos ajudam, mas falsos cognatos como actually, eventually e pretend enganam.',
        'Conectores como however, although e therefore indicam a direção do raciocínio.',
        'Although pede oração; despite pede substantivo ou verbo com -ing.',
        'Desconfie de alternativas que extrapolam, invertem ou usam palavras absolutas.'
      ],
      fontes: [
        { titulo: 'Cambridge Dictionary', url: 'https://dictionary.cambridge.org' },
        { titulo: 'Inep — Exame Nacional do Ensino Médio', url: 'https://www.gov.br/inep' }
      ]
    }
  ]
});
