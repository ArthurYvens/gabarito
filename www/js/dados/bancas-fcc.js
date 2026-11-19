/* Questões inéditas no estilo FCC, escritas para o app. */
Banco.registrar({ questoes: [

  /* ===================== LÍNGUA PORTUGUESA ===================== */

  {
    id: 'por-301', materia: 'portugues', assunto: 'Concordância verbal e nominal', tipo: 'multipla', estilo: 'FCC',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais'],
    enunciado: 'Está de acordo com a norma-padrão da língua portuguesa quanto à concordância a frase:',
    alternativas: [
      'Deve haver critérios claros para a escolha dos candidatos.',
      'Fazem dois anos que o regulamento do órgão foi revisto.',
      'Existe, no processo, falhas que precisam de correção.',
      'Aluga-se salas comerciais nesta região da cidade.',
      'Houveram muitas reclamações durante a sessão.'
    ],
    resposta: 0,
    explicacao: {
      resumo: 'O verbo haver, no sentido de existir, é impessoal e fica no singular; o verbo auxiliar que o acompanha também (deve haver).',
      detalhada: 'A regra central da questão é a do verbo **haver** com sentido de **existir** ou **ocorrer**: ele é **impessoal**, não tem sujeito, e permanece na 3ª pessoa do singular. Em locução verbal, o **auxiliar** assume a impessoalidade do principal. Por isso, "deve haver critérios" está correto, e "devem haver critérios" estaria errado.\n\nOutros dois verbos impessoais aparecem como pegadinha: **fazer**, indicando tempo decorrido ("faz dois anos"), e **existir**, que, ao contrário de haver, **tem sujeito** e concorda com ele ("existem falhas"). Na voz passiva sintética, o verbo concorda com o sujeito paciente: "alugam-se salas".',
      alternativas: [
        'Correta. Haver (existir) é impessoal; o auxiliar "deve" acompanha o singular.',
        'Errada. Fazer indicando tempo decorrido é impessoal: "faz dois anos".',
        'Errada. Existir concorda com o sujeito "falhas": "existem, no processo, falhas".',
        'Errada. Na passiva sintética, o verbo concorda com o sujeito: "alugam-se salas".',
        'Errada. Haver no sentido de ocorrer é impessoal: "houve muitas reclamações".'
      ],
      dica: 'A FCC adora "devem haver", "podem haver" e "fazem anos". Haver e fazer impessoais não vão para o plural, nem por meio de auxiliar.'
    },
    fontes: [{ titulo: 'Academia Brasileira de Letras: Vocabulário Ortográfico', url: 'https://www.academia.org.br/nossa-lingua/busca-no-vocabulario' }]
  },

  {
    id: 'por-302', materia: 'portugues', assunto: 'Crase', tipo: 'multipla', estilo: 'FCC',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais'],
    enunciado: 'O sinal indicativo de crase está empregado corretamente em:',
    alternativas: [
      'O servidor foi atendido à pedido da chefia imediata.',
      'Os documentos foram entregues às pressas, antes das dezoito horas.',
      'A comissão começou à analisar os recursos interpostos.',
      'Refiro-me à qualquer servidor que descumpra a norma.',
      'O ofício será encaminhado à Vossa Senhoria na próxima semana.'
    ],
    resposta: 1,
    explicacao: {
      resumo: 'Locuções adverbiais femininas, como "às pressas", levam crase. As demais frases trazem a antes de palavra masculina, verbo, pronome indefinido ou pronome de tratamento.',
      detalhada: 'A crase é a fusão da **preposição a** com o **artigo a(s)**. Só ocorre se o termo regido exigir a preposição e a palavra seguinte aceitar o artigo feminino.\n\n- "a pedido": palavra masculina, sem artigo, **sem crase**;\n- "começou a analisar": antes de **verbo**, **sem crase**;\n- "qualquer": pronome indefinido, **não admite artigo**, sem crase;\n- "Vossa Senhoria": **pronomes de tratamento não admitem artigo** (não se diz "a Vossa Senhoria"), logo não há crase. Exceções: senhora, senhorita, dona e madame, que aceitam o artigo ("entregue à senhora").\n\nJá "às pressas" é **locução adverbial feminina** (como "às vezes", "às escuras"), e nela a crase é obrigatória.',
      alternativas: [
        'Errada. "A pedido" é expressão masculina; não há crase.',
        'Correta. Locução adverbial feminina: às pressas.',
        'Errada. Antes de verbo no infinitivo não há crase.',
        'Errada. "Qualquer" não admite artigo; não há crase.',
        'Errada. Não há crase antes de pronome de tratamento (Vossa Senhoria, Vossa Excelência, Vossa Majestade), pois eles não admitem artigo. As exceções são senhora, senhorita, dona e madame, que aceitam o artigo: "à senhora".'
      ],
      dica: 'Teste clássico: troque a palavra por um termo masculino. Se aparecer "ao", há crase; se aparecer só "a", não há. Memorize: às vezes, às pressas, às escuras.'
    },
    fontes: [{ titulo: 'Academia Brasileira de Letras: Vocabulário Ortográfico', url: 'https://www.academia.org.br/nossa-lingua/busca-no-vocabulario' }]
  },

  {
    id: 'por-303', materia: 'portugues', assunto: 'Regência', tipo: 'multipla', estilo: 'FCC',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais'],
    enunciado: 'A frase em que a regência verbal está de acordo com a norma-padrão é:',
    alternativas: [
      'Assistimos o julgamento do recurso pela transmissão oficial.',
      'O servidor cujo o cargo foi extinto apresentou recurso.',
      'O prazo a que se refere o edital já expirou.',
      'Preferimos mais a transparência do que o sigilo.',
      'Os candidatos aspiram o cargo de analista.'
    ],
    resposta: 2,
    explicacao: {
      resumo: 'O verbo referir-se exige a preposição a; por isso "o prazo a que se refere o edital" está correto.',
      detalhada: '**Referir-se** é verbo transitivo indireto e pede a preposição **a**; na oração adjetiva, ela vem antes do pronome relativo: "o prazo **a que** se refere o edital".\n\nAs demais apresentam desvios clássicos: **assistir** no sentido de "ver" pede **a** ("assistimos ao julgamento"); **cujo** não admite artigo depois dele ("cujo cargo"); **preferir** é construído com "a" ("preferimos a transparência ao sigilo"), sem "mais" e sem "do que"; **aspirar**, no sentido de "desejar", pede **a** ("aspiram ao cargo"); só no sentido de "inalar" é transitivo direto.',
      alternativas: [
        'Errada. Assistir (ver) é transitivo indireto: "ao julgamento".',
        'Errada. Depois de "cujo" não se usa artigo.',
        'Correta. Referir-se a: "o prazo a que se refere".',
        'Errada. Preferir dispensa "mais" e "do que": "preferimos a transparência ao sigilo".',
        'Errada. Aspirar, no sentido de desejar, é transitivo indireto: "aspiram ao cargo".'
      ],
      dica: 'Duas bancas preferem estes quatro verbos: assistir, preferir, aspirar e visar. Procure sempre "preferir mais...do que" e "cujo o".'
    },
    fontes: [{ titulo: 'Academia Brasileira de Letras: Vocabulário Ortográfico', url: 'https://www.academia.org.br/nossa-lingua/busca-no-vocabulario' }]
  },

  {
    id: 'por-304', materia: 'portugues', assunto: 'Interpretação de texto', tipo: 'multipla', estilo: 'FCC',
    dificuldade: 1, objetivos: ['concursos-gerais', 'tribunais'],
    textoBase: 'A transparência na gestão pública não se limita à divulgação de dados: exige que as informações sejam compreensíveis para quem as consulta. Um portal repleto de tabelas, mas incapaz de ser entendido pelo cidadão comum, cumpre a lei apenas na aparência.',
    enunciado: 'De acordo com o texto, a transparência na gestão pública:',
    alternativas: [
      'dispensa a divulgação de dados, bastando a prestação de contas.',
      'é satisfeita pela simples quantidade de tabelas publicadas.',
      'depende de um portal eletrônico para existir.',
      'requer que a informação divulgada possa ser compreendida pelo cidadão.',
      'é cumprida de fato por portais com grande volume de dados.'
    ],
    resposta: 3,
    explicacao: {
      resumo: 'Para o texto, divulgar dados não basta: a informação precisa ser compreensível para quem a consulta.',
      detalhada: 'O texto afirma que a transparência "não se limita" à divulgação de dados e "exige" que as informações sejam compreensíveis. O segundo período dá o exemplo negativo: o portal cheio de tabelas, mas incompreensível, só cumpre a lei "na aparência".\n\nAs alternativas incorretas **extrapolam** ou **invertem** o texto: dizer que a divulgação é dispensada (A) contradiz o "não se limita"; afirmar que a quantidade basta (B e E) é o oposto do exemplo; e a dependência de portal (C) não é afirmada em parte alguma.',
      alternativas: [
        'Errada. O texto diz que a divulgação não é suficiente, e não que seja dispensável.',
        'Errada. Quantidade de tabelas não equivale a transparência.',
        'Errada. O texto usa o portal como exemplo, sem afirmar que a transparência dependa dele.',
        'Correta. É a ideia de que as informações precisam ser compreensíveis.',
        'Errada. O portal com muitos dados incompreensíveis cumpre a lei só na aparência.'
      ],
      dica: 'Em interpretação, desconfie de quem troca "não se limita a" por "dispensa". Ler "apenas", "exige" e "mas" resolve muita questão.'
    },
    fontes: [{ titulo: 'Lei de Acesso à Informação (Lei 12.527/2011)', url: 'https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm' }]
  },

  {
    id: 'por-305', materia: 'portugues', assunto: 'Coesão e coerência', tipo: 'multipla', estilo: 'FCC',
    dificuldade: 3, objetivos: ['concursos-gerais', 'tribunais'],
    textoBase: 'O prazo para recurso terminou na sexta-feira; os candidatos, porém, só foram avisados na segunda.',
    enunciado: 'Mantêm-se a correção gramatical e o sentido do texto original na reescrita:',
    alternativas: [
      'Os candidatos só foram avisados na segunda, visto que o prazo para recurso terminou na sexta-feira.',
      'Uma vez que o prazo para recurso terminara na sexta-feira, os candidatos foram avisados na segunda.',
      'Se o prazo para recurso terminasse na sexta-feira, os candidatos só seriam avisados na segunda.',
      'O prazo para recurso terminou na sexta-feira, portanto os candidatos só foram avisados na segunda.',
      'Embora o prazo para recurso tenha terminado na sexta-feira, os candidatos só foram avisados na segunda.'
    ],
    resposta: 4,
    explicacao: {
      resumo: 'O "porém" marca oposição; a conjunção concessiva "embora" preserva essa relação de contraste.',
      detalhada: 'No original, as duas orações são ligadas por "porém", conjunção **adversativa**: o aviso tardio contrasta com o prazo já encerrado. A reescrita com **"embora"** (concessiva) mantém o contraste e a ordem dos fatos, e o verbo no **subjuntivo** ("tenha terminado") é o exigido por essa conjunção.\n\nAs demais mudam a relação lógica: "visto que" e "uma vez que" expressam **causa**; "se" cria uma **condição** hipotética; "portanto" indica **conclusão**, e o aviso tardio não decorre do término do prazo.',
      alternativas: [
        'Errada. "Visto que" estabelece causa, e o texto não faz essa relação.',
        'Errada. "Uma vez que" também é causal, e a reescrita ainda tira o "só".',
        'Errada. "Se" cria hipótese; o texto narra fatos ocorridos.',
        'Errada. "Portanto" indica conclusão; o original indica contraste.',
        'Correta. "Embora" mantém a ideia de oposição do "porém", com verbo no subjuntivo.'
      ],
      dica: 'Na reescrita, identifique primeiro a relação (causa, oposição, condição, conclusão) e só depois olhe a gramática. A banca troca a relação e mantém a forma.'
    },
    fontes: [{ titulo: 'Academia Brasileira de Letras: Vocabulário Ortográfico', url: 'https://www.academia.org.br/nossa-lingua/busca-no-vocabulario' }]
  },

  {
    id: 'por-306', materia: 'portugues', assunto: 'Colocação pronominal', tipo: 'multipla', estilo: 'FCC',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais'],
    enunciado: 'A colocação do pronome oblíquo átono está de acordo com a norma-padrão em:',
    alternativas: [
      'Nunca vi-o em nenhuma das reuniões.',
      'Quando se publicou o edital, ninguém o contestou.',
      'Me entregaram o documento ontem à tarde.',
      'Não entregaram-lhe o documento no prazo.',
      'Ninguém falou-me sobre o novo prazo.'
    ],
    resposta: 1,
    explicacao: {
      resumo: 'A conjunção "quando" atrai "se" para antes do verbo, e "ninguém" atrai "o": a próclise é obrigatória.',
      detalhada: 'Palavras **atrativas** exigem a **próclise**: advérbios de negação e de tempo ("nunca", "não"), pronomes indefinidos negativos ("ninguém"), conjunções subordinativas ("quando", "que", "se") e pronomes relativos.\n\nNa alternativa correta, "quando" atrai o "se" e "ninguém" atrai o "o". Nas demais: "nunca vi-o" e "não entregaram-lhe" e "ninguém falou-me" são ênclises indevidas diante de palavra atrativa, e "me entregaram" inicia a oração com pronome átono, o que a norma-padrão evita.',
      alternativas: [
        'Errada. "Nunca" atrai o pronome: "nunca o vi".',
        'Correta. "Quando" atrai "se"; "ninguém" atrai "o".',
        'Errada. Não se inicia oração com pronome átono: "entregaram-me".',
        'Errada. "Não" atrai: "não lhe entregaram".',
        'Errada. "Ninguém" atrai: "ninguém me falou".'
      ],
      dica: 'Procure a palavra atrativa antes do verbo (não, nunca, ninguém, que, quando, se). Se existir, o pronome vai antes do verbo.'
    },
    fontes: [{ titulo: 'Academia Brasileira de Letras: Vocabulário Ortográfico', url: 'https://www.academia.org.br/nossa-lingua/busca-no-vocabulario' }]
  },

  /* ===================== DIREITO CONSTITUCIONAL ===================== */

  {
    id: 'dco-301', materia: 'direito-constitucional', assunto: 'Direitos e garantias fundamentais', tipo: 'multipla', estilo: 'FCC',
    dificuldade: 1, objetivos: ['concursos-gerais', 'tribunais'],
    enunciado: 'De acordo com a Constituição Federal, a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:',
    alternativas: [
      'por determinação judicial, a qualquer hora do dia ou da noite.',
      'por ordem de autoridade policial, durante o dia, havendo fundada suspeita de crime.',
      'somente em caso de flagrante delito, sendo vedada a entrada para prestar socorro.',
      'por determinação do Ministério Público, durante o dia.',
      'em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.'
    ],
    resposta: 4,
    explicacao: {
      resumo: 'Art. 5º, XI: o ingresso sem consentimento é possível em flagrante delito, desastre ou socorro (a qualquer hora) e, durante o dia, por determinação judicial.',
      detalhada: 'O inciso XI do art. 5º cria dois regimes. Em **flagrante delito, desastre ou para prestar socorro**, a entrada é permitida **a qualquer hora**, sem ordem de ninguém. Já a entrada **por determinação judicial** só é possível **durante o dia**.\n\nAs alternativas trocam esses elementos: a ordem judicial noturna (A) é vedada; autoridade policial ou Ministério Público (B e D) não têm essa competência, que é reservada ao juiz; e o socorro é justamente uma das exceções, não uma proibição (C).',
      alternativas: [
        'Errada. A ordem judicial só vale durante o dia.',
        'Errada. Autoridade policial não pode determinar a entrada; só o juiz.',
        'Errada. Prestar socorro é exceção expressa à inviolabilidade.',
        'Errada. O Ministério Público não pode determinar a entrada em domicílio.',
        'Correta. Reproduz as exceções do art. 5º, XI.'
      ],
      dica: 'A FCC cobra o texto literal: "dia" só qualifica a ordem judicial. Flagrante, desastre e socorro valem de dia e de noite.'
    },
    fontes: [{ titulo: 'Constituição Federal, art. 5º, XI', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm' }]
  },

  {
    id: 'dco-302', materia: 'direito-constitucional', assunto: 'Remédios constitucionais', tipo: 'multipla', estilo: 'FCC',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais'],
    enunciado: 'Nos termos do art. 5º da Constituição Federal, são gratuitas as ações de:',
    alternativas: [
      'mandado de segurança e mandado de injunção.',
      'habeas corpus e mandado de segurança.',
      'habeas corpus e habeas data.',
      'mandado de injunção e habeas data.',
      'mandado de segurança e habeas data.'
    ],
    resposta: 2,
    explicacao: {
      resumo: 'O art. 5º, LXXVII, torna gratuitas as ações de habeas corpus e habeas data.',
      detalhada: 'O inciso LXXVII é direto: "são gratuitas as ações de **habeas corpus** e **habeas data**, e, na forma da lei, os atos necessários ao exercício da cidadania". Mandado de segurança e mandado de injunção **não** têm essa gratuidade constitucional.\n\nA técnica da banca é combinar um remédio gratuito com outro que não é. Basta que cada alternativa traga um remédio errado para eliminá-la: só a letra C reúne os dois certos.',
      alternativas: [
        'Errada. Nenhum dos dois é gratuito por força do inciso LXXVII.',
        'Errada. O mandado de segurança não está na regra de gratuidade.',
        'Correta. São os dois remédios citados no inciso LXXVII.',
        'Errada. O mandado de injunção não está na regra.',
        'Errada. O mandado de segurança não está na regra.'
      ],
      dica: 'Decore o par: HC + HD gratuitos. Ao ver MS ou MI na alternativa, desconfie.'
    },
    fontes: [{ titulo: 'Constituição Federal, art. 5º, LXXVII', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm' }]
  },

  {
    id: 'dco-303', materia: 'direito-constitucional', assunto: 'Organização do Estado', tipo: 'multipla', estilo: 'FCC',
    dificuldade: 3, objetivos: ['concursos-gerais', 'tribunais'],
    enunciado: 'De acordo com a Constituição Federal, a criação, a incorporação, a fusão e o desmembramento de Municípios far-se-ão por:',
    alternativas: [
      'lei ordinária federal, ouvida a Assembleia Legislativa do respectivo Estado.',
      'lei complementar federal, após aprovação da Câmara Municipal do Município de origem.',
      'lei estadual, independentemente de consulta às populações, dentro do período fixado por lei ordinária federal.',
      'lei estadual, dentro do período determinado por lei complementar federal, dependendo de consulta prévia, mediante plebiscito, às populações dos Municípios envolvidos.',
      'lei complementar estadual, sem prazo definido, mediante referendo posterior das populações dos Municípios envolvidos.'
    ],
    resposta: 3,
    explicacao: {
      resumo: 'Art. 18, § 4º: lei estadual, dentro do período fixado por lei complementar federal, com plebiscito prévio das populações envolvidas.',
      detalhada: 'A Constituição divide a competência: a **lei complementar federal** só fixa o **período** em que os processos podem ocorrer; a **lei estadual** é o instrumento que cria, incorpora, funde ou desmembra o Município. Antes disso, é obrigatória a **consulta prévia, por plebiscito**, às populações dos Municípios envolvidos, e os Estudos de Viabilidade Municipal precisam ser divulgados.\n\nAs alternativas erradas trocam o tipo de lei (federal, complementar estadual), dispensam a consulta ou a convertem em **referendo posterior**, e a regra é consulta **prévia**.',
      alternativas: [
        'Errada. A criação é por lei estadual, e não por lei ordinária federal.',
        'Errada. A lei complementar federal apenas fixa o período, e não cria o Município.',
        'Errada. A consulta às populações é obrigatória, e o período vem de lei complementar.',
        'Correta. Reproduz o art. 18, § 4º.',
        'Errada. O período é determinado por lei complementar federal, e a consulta é prévia (plebiscito).'
      ],
      dica: 'Memorize a ordem: LC federal (período), plebiscito (prévio), lei estadual (cria). Quem troca "plebiscito" por "referendo" erra a questão.'
    },
    fontes: [{ titulo: 'Constituição Federal, art. 18, § 4º', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm' }]
  },

  {
    id: 'dco-304', materia: 'direito-constitucional', assunto: 'Poder Legislativo', tipo: 'multipla', estilo: 'FCC',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais'],
    enunciado: 'Segundo a Constituição Federal, a respeito da composição do Congresso Nacional:',
    alternativas: [
      'cada Estado e o Distrito Federal elegerão três Senadores, com mandato de oito anos.',
      'a Câmara dos Deputados é eleita pelo princípio majoritário, e o Senado Federal, pelo sistema proporcional.',
      'o número total de Deputados é fixado em lei ordinária, proporcionalmente à população.',
      'a representação de cada Estado no Senado é renovada de quatro em quatro anos, alternadamente, por metade e dois terços.',
      'cada Senador é eleito com um suplente e mandato de quatro anos.'
    ],
    resposta: 0,
    explicacao: {
      resumo: 'Art. 46: o Senado tem três Senadores por Estado e pelo DF, eleitos pelo princípio majoritário, com mandato de oito anos.',
      detalhada: 'O Senado representa os Estados e o DF, com **três Senadores** cada, **mandato de oito anos** e renovação de **quatro em quatro anos**, alternadamente por **um e dois terços**. Cada Senador é eleito com **dois suplentes** (art. 46, § 3º).\n\nA Câmara dos Deputados é eleita pelo sistema **proporcional**, e o número total de Deputados é fixado por **lei complementar** (art. 45, § 1º), com mínimo de oito e máximo de setenta por unidade da Federação.',
      alternativas: [
        'Correta. É o que diz o art. 46, caput e § 1º.',
        'Errada. O sistema está invertido: a Câmara é proporcional, e o Senado, majoritário.',
        'Errada. O número de Deputados é fixado por lei complementar.',
        'Errada. A renovação é alternada por um e dois terços, e não por metade e dois terços.',
        'Errada. Cada Senador tem dois suplentes, e o mandato é de oito anos.'
      ],
      dica: 'Câmara = proporcional, LC fixa o número, 8 a 70. Senado = majoritário, 3 por Estado, 8 anos, 2 suplentes, renovação 1/3 e 2/3.'
    },
    fontes: [{ titulo: 'Constituição Federal, arts. 45 e 46', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm' }]
  },

  {
    id: 'dco-305', materia: 'direito-constitucional', assunto: 'Administração Pública na Constituição', tipo: 'multipla', estilo: 'FCC',
    dificuldade: 1, objetivos: ['concursos-gerais', 'tribunais'],
    enunciado: 'De acordo com o art. 37 da Constituição Federal, o prazo de validade do concurso público será de:',
    alternativas: [
      'até um ano, prorrogável uma vez, por igual período.',
      'até dois anos, prorrogável uma vez, por igual período.',
      'dois anos, prorrogável indefinidamente, a critério da Administração.',
      'até quatro anos, prorrogável duas vezes, por igual período.',
      'até três anos, improrrogável.'
    ],
    resposta: 1,
    explicacao: {
      resumo: 'Art. 37, III: o concurso vale por até dois anos, prorrogável uma vez, por igual período.',
      detalhada: 'O inciso III do art. 37 fixa a validade de **até dois anos**, **prorrogável uma única vez, por igual período** (ou seja, no máximo mais dois anos). O prazo de validade é **fixado no edital**, e cabe à Administração decidir pela prorrogação.\n\nAs demais alternativas alteram o prazo, o número de prorrogações ou tiram a possibilidade de prorrogar. Lembre também que, durante o prazo improrrogável previsto no edital de convocação, o aprovado tem **prioridade** sobre os novos concursados (inciso IV).',
      alternativas: [
        'Errada. O prazo é de até dois anos, e não de um.',
        'Correta. Reproduz o art. 37, III.',
        'Errada. Só há uma prorrogação possível.',
        'Errada. O limite é de dois anos, com uma única prorrogação.',
        'Errada. A Constituição prevê a possibilidade de prorrogação.'
      ],
      dica: 'A banca troca "uma vez" por "duas vezes" ou "dois anos" por "três". Decore: 2 + 2, e prorroga uma só vez.'
    },
    fontes: [{ titulo: 'Constituição Federal, art. 37, III', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm' }]
  },

  /* ===================== DIREITO ADMINISTRATIVO ===================== */

  {
    id: 'dad-301', materia: 'direito-administrativo', assunto: 'Princípios da Administração', tipo: 'multipla', estilo: 'FCC',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais'],
    enunciado: 'Uma prefeitura veiculou campanha informativa sobre a vacinação, em que constavam o nome e a fotografia do prefeito como autor da iniciativa. Segundo a Constituição Federal, a publicidade dos atos deve ter caráter educativo, informativo ou de orientação social, dela não podendo constar nomes, símbolos ou imagens que caracterizem promoção pessoal. Nesse caso, houve violação direta do princípio da:',
    alternativas: [
      'legalidade.',
      'eficiência.',
      'impessoalidade.',
      'publicidade.',
      'motivação.'
    ],
    resposta: 2,
    explicacao: {
      resumo: 'A vedação à promoção pessoal na publicidade oficial, prevista no art. 37, § 1º, é desdobramento da impessoalidade.',
      detalhada: 'A **impessoalidade** exige que a atuação administrativa vise ao interesse público, e não a favorecer ou promover pessoas. A obra e a campanha são da **Administração**, e não do governante. É o que o art. 37, § 1º, concretiza ao proibir nomes, símbolos e imagens de promoção pessoal na publicidade oficial.\n\nA **publicidade** continua sendo princípio da Administração, mas a campanha informativa a atende; o problema é o desvio para promoção pessoal. Legalidade, eficiência e motivação não são o foco do dispositivo transcrito no enunciado.',
      alternativas: [
        'Errada. O dispositivo citado não trata da submissão à lei como foco.',
        'Errada. Não se discute a produtividade ou o resultado da campanha.',
        'Correta. A proibição de promoção pessoal é a face da impessoalidade.',
        'Errada. A campanha divulga o ato; a falha é o uso do nome e da imagem.',
        'Errada. O caso não envolve a justificativa do ato.'
      ],
      dica: 'Nome, foto ou slogan do governante em propaganda oficial: pense em impessoalidade (art. 37, § 1º).'
    },
    fontes: [{ titulo: 'Constituição Federal, art. 37, caput e § 1º', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm' }]
  },

  {
    id: 'dad-302', materia: 'direito-administrativo', assunto: 'Atos administrativos', tipo: 'multipla', estilo: 'FCC',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais'],
    enunciado: 'Um chefe de seção, competente para promover remoções, removeu uma servidora para outra cidade com o único propósito de puni-la por divergência pessoal, seguindo a forma legal. O ato apresenta vício no elemento:',
    alternativas: [
      'finalidade.',
      'competência.',
      'forma.',
      'motivo.',
      'objeto.'
    ],
    resposta: 0,
    explicacao: {
      resumo: 'Usar a remoção para punir por desavença pessoal configura desvio de finalidade, vício do elemento finalidade.',
      detalhada: 'A doutrina e a Lei da Ação Popular tratam como elementos do ato administrativo a **competência, a finalidade, a forma, o motivo e o objeto**. A **finalidade** é o resultado de **interesse público** que a lei quer alcançar. Quando o agente, mesmo competente e seguindo a forma, usa o ato para **fim diverso** do previsto (perseguição, favorecimento), ocorre o **desvio de finalidade**, que gera **nulidade**.\n\nA competência existia, a forma foi seguida e o objeto (remoção) era possível. O vício está só no propósito ilegítimo.',
      alternativas: [
        'Correta. O agente usou a remoção para fim pessoal: desvio de finalidade.',
        'Errada. O enunciado diz que o chefe era competente.',
        'Errada. A forma legal foi observada.',
        'Errada. O enunciado não aponta falta nem falsidade de motivo; o vício é o fim ilegítimo.',
        'Errada. Remover é objeto possível; o problema é a finalidade.'
      ],
      dica: 'Agente competente e forma correta, mas fim ilegítimo? Finalidade. Agente incompetente? Competência. A banca separa pelo detalhe do enunciado.'
    },
    fontes: [{ titulo: 'Lei 4.717/1965 (Ação Popular), art. 2º', url: 'https://www.planalto.gov.br/ccivil_03/leis/l4717.htm' }]
  },

  {
    id: 'dad-303', materia: 'direito-administrativo', assunto: 'Poderes administrativos', tipo: 'multipla', estilo: 'FCC',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais'],
    enunciado: 'Nos termos da Lei nº 9.784/1999, que regula o processo administrativo no âmbito federal, NÃO podem ser objeto de delegação:',
    alternativas: [
      'os atos de caráter não normativo, desde que haja conveniência.',
      'os atos de mero expediente praticados por chefia intermediária.',
      'os atos de gestão cuja competência não seja exclusiva da autoridade.',
      'a decisão de recursos administrativos.',
      'a prática de atos preparatórios de decisão.'
    ],
    resposta: 3,
    explicacao: {
      resumo: 'Art. 13: não se delegam a edição de atos normativos, a decisão de recursos administrativos e as matérias de competência exclusiva.',
      detalhada: 'A delegação é admitida, em regra, **quando não houver impedimento legal** (art. 12). O art. 13 lista as **vedações**: I) a edição de **atos de caráter normativo**; II) a **decisão de recursos administrativos**; III) as matérias de **competência exclusiva** do órgão ou autoridade.\n\nPor isso, atos não normativos, de mero expediente, de gestão e preparatórios podem ser delegados. A única hipótese vedada, entre as listadas, é a decisão de recurso administrativo.',
      alternativas: [
        'Errada. Atos não normativos podem ser delegados.',
        'Errada. Atos de mero expediente são delegáveis.',
        'Errada. Só a competência exclusiva é vedada.',
        'Correta. Art. 13, II.',
        'Errada. Atos preparatórios são delegáveis.'
      ],
      dica: 'Os três "nãos" da delegação: normativo, recurso e competência exclusiva. A avocação é o movimento contrário, e é excepcional e temporária.'
    },
    fontes: [{ titulo: 'Lei 9.784/1999, arts. 12 a 15', url: 'https://www.planalto.gov.br/ccivil_03/leis/l9784.htm' }]
  },

  {
    id: 'dad-304', materia: 'direito-administrativo', assunto: 'Licitações (Lei 14.133/2021)', tipo: 'multipla', estilo: 'FCC',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais'],
    enunciado: 'De acordo com a Lei nº 14.133/2021, são modalidades de licitação:',
    alternativas: [
      'pregão, concorrência, convite, concurso e leilão.',
      'pregão, concorrência, concurso, leilão e diálogo competitivo.',
      'concorrência, tomada de preços, concurso, leilão e diálogo competitivo.',
      'pregão, convite, tomada de preços, concorrência e leilão.',
      'pregão, concorrência, concurso, leilão e registro de preços.'
    ],
    resposta: 1,
    explicacao: {
      resumo: 'O art. 28 prevê cinco modalidades: pregão, concorrência, concurso, leilão e diálogo competitivo.',
      detalhada: 'A Lei 14.133/2021 **extinguiu o convite e a tomada de preços**, que existiam na Lei 8.666/1993, e criou o **diálogo competitivo**. As modalidades do art. 28 são: **pregão, concorrência, concurso, leilão e diálogo competitivo**. O § 2º veda a criação de outras modalidades ou a combinação das existentes.\n\nO **registro de preços** é um **procedimento auxiliar**, e não uma modalidade.',
      alternativas: [
        'Errada. O convite não existe na Lei 14.133/2021.',
        'Correta. Reproduz o art. 28.',
        'Errada. A tomada de preços foi extinta, e o pregão está faltando.',
        'Errada. Convite e tomada de preços não são mais modalidades.',
        'Errada. O registro de preços é procedimento auxiliar, e o diálogo competitivo ficou de fora.'
      ],
      dica: 'Convite e tomada de preços são "fantasmas" da Lei 8.666. Ao ver alguma das duas, a alternativa está errada.'
    },
    fontes: [{ titulo: 'Lei 14.133/2021, art. 28', url: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm' }]
  },

  {
    id: 'dad-305', materia: 'direito-administrativo', assunto: 'Agentes públicos (Lei 8.112/1990)', tipo: 'multipla', estilo: 'FCC',
    dificuldade: 1, objetivos: ['concursos-gerais', 'tribunais'],
    enunciado: 'Nos termos da Lei nº 8.112/1990, a respeito dos prazos da posse e do exercício do servidor público federal:',
    alternativas: [
      'a posse ocorrerá em quinze dias da publicação do ato de provimento, e o exercício, em trinta dias da posse.',
      'a posse ocorrerá em trinta dias da publicação do ato de provimento, e o exercício, em trinta dias da posse.',
      'a posse e o exercício ocorrerão, cada um, no prazo de quinze dias.',
      'a posse ocorrerá em sessenta dias da publicação do ato de provimento, e o exercício, em quinze dias da posse.',
      'a posse ocorrerá em trinta dias da publicação do ato de provimento, e o exercício, em quinze dias da posse.'
    ],
    resposta: 4,
    explicacao: {
      resumo: 'Posse: 30 dias da publicação do ato de provimento (art. 13, § 1º). Exercício: 15 dias da posse (art. 15, § 1º).',
      detalhada: 'A Lei 8.112/1990 estabelece que a **posse** ocorre em **trinta dias contados da publicação do ato de provimento** (art. 13, § 1º), e o **exercício** deve ocorrer em **quinze dias contados da data da posse** (art. 15, § 1º). A redação atual vem da Lei 9.527/1997; as versões antigas (trinta dias para o exercício) não valem mais.\n\nA banca costuma **trocar os números**, ou os marcos iniciais, para criar as alternativas erradas.',
      alternativas: [
        'Errada. Os números estão invertidos.',
        'Errada. O exercício é em quinze dias, e não em trinta.',
        'Errada. A posse tem prazo de trinta dias, e não de quinze.',
        'Errada. A posse não tem prazo de sessenta dias.',
        'Correta. Reproduz os arts. 13, § 1º, e 15, § 1º.'
      ],
      dica: '30 para tomar posse (contados da publicação), 15 para entrar em exercício (contados da posse). Cuidado com o marco inicial.'
    },
    fontes: [{ titulo: 'Lei 8.112/1990, arts. 13 e 15', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8112cons.htm' }]
  },

  /* ===================== RACIOCÍNIO LÓGICO ===================== */

  {
    id: 'rlm-301', materia: 'raciocinio-logico', assunto: 'Proposições e conectivos', tipo: 'multipla', estilo: 'FCC',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais'],
    enunciado: 'Sabe-se que a proposição composta "(p e q) → r" é falsa. Dessa informação, conclui-se que os valores lógicos de p, q e r são, respectivamente:',
    alternativas: [
      'verdadeiro, verdadeiro e falso.',
      'falso, verdadeiro e falso.',
      'verdadeiro, falso e verdadeiro.',
      'falso, falso e verdadeiro.',
      'verdadeiro, verdadeiro e verdadeiro.'
    ],
    resposta: 0,
    explicacao: {
      resumo: 'A condicional só é falsa quando o antecedente é verdadeiro e o consequente é falso; logo, p e q são V e r é F.',
      detalhada: 'A condicional "A → B" é **falsa** apenas no caso **V → F**. Aqui, A = "p e q" e B = r. Para A ser verdadeira, a conjunção exige **p verdadeiro e q verdadeiro**; e B tem de ser **falso**, ou seja, **r falso**.\n\nTestando as demais: em B, "falso e verdadeiro" é falso, e F → F é verdadeira; em C, p e q dão F, e a condicional é verdadeira; em D também; em E, V → V é verdadeira.',
      alternativas: [
        'Correta. (V e V) = V, e V → F é falsa.',
        'Errada. Com p falso, o antecedente é falso, e a condicional seria verdadeira.',
        'Errada. Com q falso, o antecedente é falso.',
        'Errada. Antecedente falso torna a condicional verdadeira.',
        'Errada. V → V é verdadeira.'
      ],
      dica: 'Condicional falsa = única linha V → F. Trabalhe de trás para frente: o consequente fixa o F, o antecedente fixa o V.'
    },
    fontes: [{ titulo: 'Wikipédia: Condicional material', url: 'https://pt.wikipedia.org/wiki/Condicional_material' }]
  },

  {
    id: 'rlm-302', materia: 'raciocinio-logico', assunto: 'Equivalências e negações', tipo: 'multipla', estilo: 'FCC',
    dificuldade: 1, objetivos: ['concursos-gerais', 'tribunais'],
    enunciado: 'A negação da afirmação "Todos os candidatos foram aprovados" é logicamente equivalente a:',
    alternativas: [
      'Nenhum candidato foi aprovado.',
      'Todos os candidatos foram reprovados.',
      'Pelo menos um candidato foi aprovado.',
      'Algum candidato não foi aprovado.',
      'Apenas um candidato não foi aprovado.'
    ],
    resposta: 3,
    explicacao: {
      resumo: 'A negação de "todo A é B" é "algum A não é B".',
      detalhada: 'Pela lógica de quantificadores, negar "**todo** A é B" é dizer "**existe** (algum, pelo menos um) A que **não** é B". Para negar um universal basta **um contraexemplo**.\n\n"Nenhum foi aprovado" e "todos foram reprovados" são mais fortes que a negação, e podem ser falsos mesmo que a afirmação original seja falsa. "Pelo menos um foi aprovado" não nega nada. "Apenas um não foi aprovado" fixa a quantidade, e a negação aceita qualquer número maior que zero.',
      alternativas: [
        'Errada. "Nenhum foi aprovado" é o contrário, e não a negação: ambas podem ser falsas ao mesmo tempo, se houver aprovados e reprovados.',
        'Errada. "Todos reprovados" também é o contrário: seria falsa se houvesse aprovados e reprovados, e nesse caso a negação seria verdadeira.',
        'Errada. Pode ser verdadeiro junto com a afirmação original.',
        'Correta. "Algum não foi aprovado" nega "todos foram aprovados".',
        'Errada. Restringe a um único candidato.'
      ],
      dica: 'Negar "todo" não leva a "nenhum". Leva a "algum não". Pegadinha clássica da FCC.'
    },
    fontes: [{ titulo: 'Wikipédia: Quantificação (lógica)', url: 'https://pt.wikipedia.org/wiki/Quantificador' }]
  },

  {
    id: 'rlm-303', materia: 'raciocinio-logico', assunto: 'Sequências lógicas', tipo: 'multipla', estilo: 'FCC',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais'],
    enunciado: 'Considere a sequência numérica 3, 8, 15, 24, 35, ... Mantida a lei de formação, o oitavo termo dessa sequência é:',
    alternativas: [
      '63.',
      '71.',
      '80.',
      '81.',
      '99.'
    ],
    resposta: 2,
    explicacao: {
      resumo: 'O termo de ordem n é (n + 1)² − 1; para n = 8, o termo é 9² − 1 = 80.',
      detalhada: 'Os termos são 4 − 1, 9 − 1, 16 − 1, 25 − 1, 36 − 1: quadrados perfeitos menos 1. O 1º termo é 2² − 1 = 3, o 2º é 3² − 1 = 8, e assim por diante; portanto o n-ésimo é **(n + 1)² − 1**.\n\nOutra forma: as diferenças entre termos são 5, 7, 9, 11, 13, 15, 17 (números ímpares). Continuando: 35, 48, 63, 80. O 8º termo é **80**.',
      alternativas: [
        'Errada. É o 7º termo (8² − 1).',
        'Errada. Não segue a lei de formação.',
        'Correta. 9² − 1 = 80.',
        'Errada. É 9², sem subtrair 1.',
        'Errada. É o 10º termo (10² − 1).'
      ],
      dica: 'Quando a diferença entre termos cresce em progressão aritmética, procure quadrados. Tome cuidado com o "off-by-one": o 1º termo é 2² − 1.'
    },
    fontes: [{ titulo: 'Wikipédia: Sequência', url: 'https://pt.wikipedia.org/wiki/Sequ%C3%AAncia' }]
  },

  {
    id: 'rlm-304', materia: 'raciocinio-logico', assunto: 'Análise combinatória', tipo: 'multipla', estilo: 'FCC',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais'],
    enunciado: 'Uma comissão de 3 pessoas será formada a partir de um grupo de 5 técnicos e 4 analistas. O número de comissões distintas que podem ser formadas, com pelo menos um analista, é:',
    alternativas: [
      '84.',
      '64.',
      '80.',
      '70.',
      '74.'
    ],
    resposta: 4,
    explicacao: {
      resumo: 'Total de comissões, C(9,3) = 84, menos as sem analista, C(5,3) = 10, resulta em 74.',
      detalhada: 'A ordem dos membros não importa, então se usa **combinação**. O total de comissões de 3 entre 9 pessoas é C(9,3) = 84. "Pelo menos um analista" é o complementar de "nenhum analista", ou seja, só técnicos: C(5,3) = 10. Resposta: 84 − 10 = **74**.\n\nConferência direta: 1 analista = 4 × C(5,2) = 40; 2 analistas = C(4,2) × 5 = 30; 3 analistas = C(4,3) = 4. Soma: 74.',
      alternativas: [
        'Errada. É o total C(9,3), sem aplicar a condição.',
        'Errada. 84 − 20: subtrai duas vezes as comissões só de técnicos, C(5,3) = 10.',
        'Errada. 84 − 4: subtrai só as comissões de 4 analistas escolhidos 3 a 3, C(4,3), em vez do complementar (só técnicos).',
        'Errada. 74 − 4: desconta de novo as 4 comissões só de analistas, que atendem à condição.',
        'Correta. 84 − 10 = 74.'
      ],
      dica: '"Pelo menos um" pede o complementar: total menos o caso "nenhum".'
    },
    fontes: [{ titulo: 'Wikipédia: Análise combinatória', url: 'https://pt.wikipedia.org/wiki/An%C3%A1lise_combinat%C3%B3ria' }]
  },

  /* ===================== MATEMÁTICA ===================== */

  {
    id: 'mat-301', materia: 'matematica', assunto: 'Porcentagem', tipo: 'multipla', estilo: 'FCC',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais'],
    enunciado: 'O preço de um material de escritório sofreu aumento de 20% e, em seguida, um desconto de 25% sobre o preço já reajustado. Em relação ao preço inicial, o preço final ficou:',
    alternativas: [
      '5% menor.',
      '10% menor.',
      'igual.',
      '5% maior.',
      '15% menor.'
    ],
    resposta: 1,
    explicacao: {
      resumo: 'Os fatores multiplicam: 1,20 × 0,75 = 0,90, ou seja, o preço final é 10% menor.',
      detalhada: 'Aumento de 20% equivale ao fator **1,20**; desconto de 25% equivale ao fator **0,75**. Variações sucessivas **multiplicam-se**: 1,20 × 0,75 = **0,90**. O preço final é 90% do inicial, ou seja, **10% menor**.\n\nExemplo com R$ 600,00: após o aumento, 720; após o desconto, 540, que é 10% abaixo de 600.',
      alternativas: [
        'Errada. Seria o resultado de subtrair 25 − 20, o que ignora o efeito sobre o preço reajustado.',
        'Correta. 1,20 × 0,75 = 0,90.',
        'Errada. Só seria igual se o desconto fosse de cerca de 16,7%.',
        'Errada. O preço final é menor que o inicial.',
        'Errada. O desconto é sobre um valor maior; a perda líquida é de 10%.'
      ],
      dica: 'Nunca some percentuais sucessivos: multiplique os fatores (1 + i).'
    },
    fontes: [{ titulo: 'Wikipédia: Percentagem', url: 'https://pt.wikipedia.org/wiki/Percentagem' }]
  },

  {
    id: 'mat-302', materia: 'matematica', assunto: 'Razão e proporção', tipo: 'multipla', estilo: 'FCC',
    dificuldade: 3, objetivos: ['concursos-gerais', 'tribunais'],
    enunciado: 'Uma gratificação de R$ 7.200,00 será dividida entre três servidores em partes inversamente proporcionais ao número de faltas de cada um no semestre: 2, 3 e 6 faltas, respectivamente. A quantia recebida pelo servidor que teve 3 faltas é, em reais:',
    alternativas: [
      '1.200,00.',
      '1.800,00.',
      '2.400,00.',
      '4.800,00.',
      '3.600,00.'
    ],
    resposta: 2,
    explicacao: {
      resumo: 'As partes são proporcionais a 1/2, 1/3 e 1/6, isto é, a 3, 2 e 1; o servidor de 3 faltas recebe 2/6 de 7.200, ou R$ 2.400,00.',
      detalhada: 'Partes **inversamente proporcionais** a 2, 3 e 6 são **diretamente proporcionais aos inversos**: 1/2, 1/3 e 1/6. Com denominador comum 6: 3/6, 2/6 e 1/6, ou seja, proporção **3 : 2 : 1**. A soma das razões é 6, e cada unidade vale 7.200 ÷ 6 = 1.200.\n\nPartes: 3 × 1.200 = 3.600 (2 faltas), 2 × 1.200 = **2.400** (3 faltas), 1 × 1.200 = 1.200 (6 faltas). Total: 7.200.',
      alternativas: [
        'Errada. É a parte de quem teve 6 faltas.',
        'Errada. 7.200 ÷ 4: divide em quatro partes iguais, sem aplicar a proporção.',
        'Correta. 2 × 1.200 = 2.400.',
        'Errada. 3.600 + 1.200: soma das partes dos servidores de 2 e de 6 faltas.',
        'Errada. É a parte de quem teve 2 faltas.'
      ],
      dica: 'Inversamente proporcional: inverta os números e reduza ao mesmo denominador. Quem tem menos faltas recebe mais.'
    },
    fontes: [{ titulo: 'Wikipédia: Proporcionalidade', url: 'https://pt.wikipedia.org/wiki/Proporcionalidade' }]
  },

  /* ===================== INFORMÁTICA ===================== */

  {
    id: 'inf-301', materia: 'informatica', assunto: 'Segurança da informação', tipo: 'multipla', estilo: 'FCC',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais'],
    enunciado: 'Um servidor calculou o hash de um arquivo antes de enviá-lo por rede. O destinatário recalculou o hash após receber o arquivo e comparou os dois valores, que foram idênticos. A conferência verificou, diretamente, a propriedade da segurança da informação denominada:',
    alternativas: [
      'integridade.',
      'confidencialidade.',
      'disponibilidade.',
      'autenticidade.',
      'irretratabilidade.'
    ],
    resposta: 0,
    explicacao: {
      resumo: 'Hashes iguais indicam que o conteúdo não foi alterado: é verificação de integridade.',
      detalhada: 'A **função hash** gera uma "impressão digital" do conteúdo. Se o conteúdo muda, mesmo que em um bit, o hash muda. Comparar os valores antes e depois do envio indica que o arquivo **não foi alterado**: isso é **integridade**.\n\nO hash sozinho não garante **confidencialidade** (o arquivo pode estar legível a terceiros), **disponibilidade**, nem **autenticidade** ou **irretratabilidade** (que exigem assinatura digital, que usa hash e chave privada, para provar a origem).',
      alternativas: [
        'Correta. Comparação de hash verifica se o conteúdo permaneceu inalterado.',
        'Errada. Confidencialidade exige criptografia ou controle de acesso.',
        'Errada. Disponibilidade trata do acesso quando necessário.',
        'Errada. Autenticidade exige comprovar a origem, o que o hash isolado não faz.',
        'Errada. Irretratabilidade (não repúdio) exige assinatura digital.'
      ],
      dica: 'Hash = integridade. Assinatura digital = integridade + autenticidade + não repúdio. Criptografia = confidencialidade.'
    },
    fontes: [{ titulo: 'Cartilha de Segurança para Internet (CERT.br)', url: 'https://cartilha.cert.br' }]
  },

  {
    id: 'inf-302', materia: 'informatica', assunto: 'Planilhas (Excel e Calc)', tipo: 'multipla', estilo: 'FCC',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais'],
    textoBase: 'Em uma planilha eletrônica, as células A1 a A5 contêm, respectivamente, os valores 5, 12, 8, 20 e 15, e as células B1 a B5 contêm, respectivamente, 100, 200, 300, 400 e 500.',
    enunciado: 'Ao se digitar, na célula C1, a fórmula =SOMASE(A1:A5;">10";B1:B5), o valor exibido será:',
    alternativas: [
      '600.',
      '1000.',
      '1500.',
      '1100.',
      '3.'
    ],
    resposta: 3,
    explicacao: {
      resumo: 'SOMASE soma, em B1:B5, as células cujas correspondentes em A1:A5 são maiores que 10: 200 + 400 + 500 = 1100.',
      detalhada: 'A sintaxe é **=SOMASE(intervalo_critério; critério; intervalo_soma)**. Os valores de A maiores que 10 são 12 (A2), 20 (A4) e 15 (A5). A função soma os valores de **B nas mesmas linhas**: B2 = 200, B4 = 400 e B5 = 500, totalizando **1100**.\n\nCuidado: 1500 seria a soma de todo o intervalo B, e 3 seria a **quantidade** de células que atendem ao critério (resultado de CONT.SE).',
      alternativas: [
        'Errada. 100 + 500: mistura uma linha que não atende (A1 = 5) com uma que atende.',
        'Errada. B1 a B4 somados: inclui a linha 1, que não atende, e omite a linha 5, que atende.',
        'Errada. É a soma de todo o intervalo B1:B5, ignorando o critério.',
        'Correta. 200 + 400 + 500 = 1100.',
        'Errada. Seria o resultado de CONT.SE (quantidade de células).'
      ],
      dica: 'SOMASE soma o terceiro argumento nas linhas em que o primeiro atende ao critério. Primeiro, marque as linhas; depois, some o outro intervalo.'
    },
    fontes: [{ titulo: 'Microsoft: função SOMASE', url: 'https://support.microsoft.com/pt-br/office/fun%C3%A7%C3%A3o-somase-169b8c99-c05c-4483-a712-1697a653039b' }]
  }

] });
