/* Questões inéditas no estilo Cesgranrio, escritas para o app. */
Banco.registrar({ questoes: [
  /* ======================= CONHECIMENTOS BANCÁRIOS ======================= */
  {
    id: 'cba-401', materia: 'conhecimentos-bancarios', assunto: 'Sistema Financeiro Nacional', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 1,
    objetivos: ['bancarios', 'estatais'],
    enunciado: 'No Sistema Financeiro Nacional (SFN), o Conselho Monetário Nacional (CMN) é o órgão normativo máximo. Entre as atribuições do CMN, inclui-se',
    alternativas: [
      'emitir papel-moeda e executar as normas editadas sobre crédito e câmbio.',
      'formular a política da moeda e do crédito, com o objetivo de promover o progresso econômico e social do país.',
      'fiscalizar o mercado de valores mobiliários e punir as companhias abertas que descumprirem a lei.',
      'supervisionar as sociedades seguradoras e as entidades de capitalização.',
      'autorizar o funcionamento das instituições financeiras e fiscalizar suas operações diariamente.'
    ],
    resposta: 1,
    explicacao: {
      resumo: 'O CMN é normativo: formula a política da moeda e do crédito. Quem executa e fiscaliza é o Banco Central.',
      detalhada: 'A Lei 4.595/1964 criou o CMN para **formular a política da moeda e do crédito**, objetivando o progresso econômico e social do país. Ele edita as normas gerais do sistema, mas não executa nem fiscaliza: essas funções ficam com o **Banco Central do Brasil (BCB)**.\n\nA divisão de tarefas no SFN costuma ser cobrada assim:\n- **CMN**: normatiza (órgão normativo);\n- **BCB**: emite moeda, executa a política monetária, autoriza e fiscaliza as instituições financeiras;\n- **CVM**: mercado de valores mobiliários;\n- **Susep**: seguros privados, resseguro, capitalização;\n- **Previc**: previdência complementar fechada.',
      alternativas: [
        'Errada. Emitir moeda e executar as normas é tarefa do BCB.',
        'Certa. É a atribuição central do CMN, prevista na Lei 4.595/1964.',
        'Errada. O mercado de valores mobiliários é regulado e fiscalizado pela CVM.',
        'Errada. Seguros e capitalização ficam com o CNSP (normativo) e a Susep (executor).',
        'Errada. Autorizar e fiscalizar instituições financeiras é função do BCB.'
      ],
      dica: 'Decore: CMN faz a regra, BCB faz cumprir a regra. A banca troca os dois na alternativa-isca.'
    },
    fontes: [{ titulo: 'Lei 4.595/1964', url: 'https://www.planalto.gov.br/ccivil_03/leis/l4595.htm' }, { titulo: 'Banco Central: Sistema Financeiro Nacional', url: 'https://www.bcb.gov.br/estabilidadefinanceira/sfn' }]
  },
  {
    id: 'cba-402', materia: 'conhecimentos-bancarios', assunto: 'Produtos e serviços bancários', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 2,
    objetivos: ['bancarios', 'estatais'],
    enunciado: 'Um investidor mantém no Banco Alfa, em seu nome, um CDB de R$ 180.000,00, uma LCI de R$ 90.000,00, cotas de um fundo de investimento de renda fixa de R$ 200.000,00 e ações de companhias abertas. O Banco Alfa é liquidado extrajudicialmente. Considerando que o investidor não possui outros valores no mesmo conglomerado e que o limite de cobertura do Fundo Garantidor de Créditos (FGC) é de R$ 250.000,00 por CPF e por instituição (ou conglomerado), o valor máximo que o FGC poderá pagar a esse investidor, nessa situação, é, em reais, de',
    alternativas: ['90.000,00', '180.000,00', '200.000,00', '250.000,00', '470.000,00'],
    resposta: 3,
    explicacao: {
      resumo: 'CDB e LCI são cobertos (R$ 270 mil), mas o teto por CPF e instituição é de R$ 250 mil. Fundos e ações não têm garantia do FGC.',
      detalhada: 'Primeiro, separe o que o FGC cobre. Entre os produtos do enunciado, **CDB** e **LCI** estão na lista de créditos garantidos (junto com poupança, LCA, LC, RDB, depósitos à vista e a prazo). **Cotas de fundos de investimento** e **ações** não são obrigações do banco: o risco é do mercado, e o FGC não os cobre.\n\nSomando o que é coberto: 180.000 + 90.000 = **R$ 270.000**. Como a garantia é de **R$ 250.000 por CPF/CNPJ e por instituição (ou conglomerado financeiro)**, o pagamento fica limitado a R$ 250.000.\n\nHá ainda um teto global de R$ 1 milhão por CPF/CNPJ, em janela de quatro anos, para pagamentos de garantias relativas a instituições diferentes, o que não é atingido aqui.',
      alternativas: [
        'Errada. Seria apenas a LCI; o CDB também é coberto.',
        'Errada. Seria apenas o CDB; a LCI também entra na soma.',
        'Errada. Esse valor é o do fundo, que não é coberto pelo FGC.',
        'Certa. 180.000 + 90.000 = 270.000, limitado a 250.000.',
        'Errada. Inclui o fundo de investimento (que não é coberto) e ainda ignora o limite por instituição.'
      ],
      dica: 'Dois filtros, nessa ordem: o produto é coberto? Depois, aplique o teto por CPF/instituição. A banca põe a soma bruta como isca.'
    },
    fontes: [{ titulo: 'FGC: o que é garantido', url: 'https://www.fgc.org.br/' }]
  },
  {
    id: 'cba-403', materia: 'conhecimentos-bancarios', assunto: 'Pix e meios de pagamento', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 1,
    objetivos: ['bancarios', 'estatais'],
    enunciado: 'O Pix, arranjo de pagamentos instantâneos instituído pelo Banco Central do Brasil, tem como característica',
    alternativas: [
      'funcionar 24 horas por dia, todos os dias do ano, com liquidação em tempo real por meio do Sistema de Pagamentos Instantâneos (SPI), operado pelo Banco Central.',
      'depender de horário bancário, com processamento apenas em dias úteis.',
      'permitir transferências somente entre contas mantidas na mesma instituição.',
      'exigir, para toda transação, que o recebedor seja pessoa jurídica.',
      'ser inviável sem o cadastro prévio de uma chave, mesmo quando o pagador conhece a agência e a conta do recebedor.'
    ],
    resposta: 0,
    explicacao: {
      resumo: 'O Pix funciona 24x7x365 e liquida em tempo real no SPI, do Banco Central.',
      detalhada: 'O Pix foi instituído pela Resolução BCB 1/2020 e é um arranjo de pagamentos **instantâneos**: a transferência é concluída em segundos, a qualquer hora, inclusive fins de semana e feriados. A liquidação ocorre no **SPI** (Sistema de Pagamentos Instantâneos), infraestrutura operada pelo próprio BCB, o que o distingue dos meios que dependem de compensação em horário bancário.\n\nO Pix é interoperável: funciona entre instituições diferentes. Pode ser iniciado por **chave** (CPF/CNPJ, telefone, e-mail ou chave aleatória), **QR Code** ou por dados de agência e conta. Pessoas físicas e jurídicas usam o arranjo, tanto como pagadoras quanto como recebedoras.',
      alternativas: [
        'Certa. Descreve a disponibilidade e a liquidação do Pix.',
        'Errada. É justamente o contrário: o Pix não depende de dia útil.',
        'Errada. O Pix é interoperável entre instituições participantes.',
        'Errada. Pessoas físicas também recebem Pix.',
        'Errada. A chave é facilitadora; é possível pagar com agência e conta.'
      ],
      dica: 'Quando a alternativa limita o Pix a horário comercial, a uma só instituição ou a um tipo de usuário, desconfie.'
    },
    fontes: [{ titulo: 'Banco Central: Pix', url: 'https://www.bcb.gov.br/estabilidadefinanceira/pix' }]
  },
  {
    id: 'cba-404', materia: 'conhecimentos-bancarios', assunto: 'Prevenção à lavagem de dinheiro', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 2,
    objetivos: ['bancarios', 'estatais'],
    enunciado: 'Na análise de um conjunto de operações, o setor de conformidade de um banco constatou que um mesmo cliente realizava, em várias agências e no mesmo dia, depósitos em espécie de valores inferiores ao limite que exigiria comunicação, somando quantia expressiva sem justificativa econômica aparente. Na doutrina sobre lavagem de dinheiro, essa prática, que busca introduzir o dinheiro ilícito no sistema financeiro, corresponde à fase de',
    alternativas: ['integração.', 'ocultação (layering).', 'reinvestimento.', 'cooptação.', 'colocação (placement).'],
    resposta: 4,
    explicacao: {
      resumo: 'Depósitos fracionados em espécie para introduzir o dinheiro no sistema financeiro caracterizam a colocação (placement).',
      detalhada: 'A doutrina (com base nas recomendações do GAFI) divide a lavagem em três fases:\n\n- **Colocação (placement)**: o dinheiro ilícito entra no sistema econômico, por exemplo em depósitos fracionados, o chamado "smurfing" ou estruturação, para fugir dos limites de comunicação;\n- **Ocultação (layering)**: sucessão de operações para romper o rastro da origem (transferências entre contas, empresas de fachada);\n- **Integração**: o dinheiro, já com aparência lícita, volta à economia formal em bens, empresas e investimentos.\n\nA Lei 9.613/1998 não nomeia essas fases, mas as obrigações dos bancos (identificar clientes, manter registros e comunicar operações suspeitas ao Coaf) existem justamente para barrar a entrada dos recursos. O **fracionamento para evitar comunicação** é, ele próprio, um indício que deve ser comunicado.',
      alternativas: [
        'Errada. Integração é a fase final, de reentrada do dinheiro "limpo" na economia.',
        'Errada. Ocultação são as camadas posteriores de movimentação para dificultar o rastreamento.',
        'Errada. Não é fase reconhecida do modelo tradicional.',
        'Errada. Não é fase do modelo; cooptação lembra a atração de terceiros (os "laranjas").',
        'Certa. A introdução inicial do dinheiro em espécie no sistema é a colocação.'
      ],
      dica: 'Dinheiro vivo entrando no banco = colocação. Muitas transferências para esconder a origem = ocultação. Bens e empresas = integração.'
    },
    fontes: [{ titulo: 'Lei 9.613/1998', url: 'https://www.planalto.gov.br/ccivil_03/leis/l9613.htm' }, { titulo: 'Banco Central: prevenção à lavagem de dinheiro', url: 'https://www.bcb.gov.br/estabilidadefinanceira/prevencaolavagemdinheiro' }]
  },
  {
    id: 'cba-405', materia: 'conhecimentos-bancarios', assunto: 'Prevenção à lavagem de dinheiro', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 2,
    objetivos: ['bancarios', 'estatais'],
    enunciado: 'De acordo com a Lei nº 9.613/1998, as pessoas sujeitas às suas obrigações, entre as quais as instituições financeiras, devem comunicar ao Conselho de Controle de Atividades Financeiras (Coaf) as operações com indícios de lavagem de dinheiro. Em relação a essa comunicação, tem-se que ela',
    alternativas: [
      'deve ser precedida de aviso ao cliente, para que ele apresente justificativas antes do envio.',
      'gera responsabilidade civil para a instituição se, depois, o crime não for confirmado, ainda que a comunicação tenha sido de boa-fé.',
      'deve ser feita sem dar ciência da comunicação a qualquer pessoa, inclusive àquela a que se refira a operação, e, se feita de boa-fé, não acarreta responsabilidade civil ou administrativa.',
      'depende de autorização judicial prévia, por envolver sigilo bancário.',
      'só é obrigatória quando o valor da operação ultrapassar R$ 100.000,00.'
    ],
    resposta: 2,
    explicacao: {
      resumo: 'A comunicação ao Coaf é sigilosa (não se avisa o cliente) e, feita de boa-fé, não gera responsabilidade civil ou administrativa.',
      detalhada: 'O art. 11 da Lei 9.613/1998 manda as pessoas do art. 9º dar especial atenção a operações suspeitas e comunicá-las ao Coaf **no prazo de 24 horas**, **abstendo-se de dar ciência** a qualquer pessoa, inclusive àquela a quem se refira a informação. Avisar o cliente ("tipping off") frustra a investigação.\n\nPara proteger quem colabora, o art. 11, § 2º, estabelece que as comunicações feitas **de boa-fé** não acarretam responsabilidade civil ou administrativa. Também não se exige ordem judicial: o Coaf (art. 14 da Lei 9.613/1998), unidade de inteligência financeira do país, tem autonomia técnica e operacional e, nos termos do art. 2º da Lei 13.974/2020, vincula-se administrativamente ao Banco Central do Brasil, e recebe os dados por determinação legal. Quanto a valores, a comunicação decorre de **indícios**, não de um piso fixo: valores abaixo do limite de registro podem ser suspeitos justamente pelo fracionamento.',
      alternativas: [
        'Errada. Avisar o cliente é vedado.',
        'Errada. Boa-fé afasta a responsabilidade civil e administrativa (art. 11, § 2º).',
        'Certa. Reproduz o sentido do art. 11, II e § 2º.',
        'Errada. Não há exigência de autorização judicial para a comunicação ao Coaf.',
        'Errada. O valor não é o critério único; há também operações suspeitas de qualquer monta.'
      ],
      dica: 'Duas palavras guardam o artigo: sigilo (não avisa o cliente) e boa-fé (protege o comunicante).'
    },
    fontes: [{ titulo: 'Lei 9.613/1998, arts. 11 e 14', url: 'https://www.planalto.gov.br/ccivil_03/leis/l9613.htm' }, { titulo: 'Lei 13.974/2020, art. 2º', url: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l13974.htm' }]
  },
  {
    id: 'cba-406', materia: 'conhecimentos-bancarios', assunto: 'Produtos e serviços bancários', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 2,
    objetivos: ['bancarios', 'estatais'],
    enunciado: 'Pela regra vigente para a caderneta de poupança, nos depósitos feitos a partir de maio de 2012, enquanto a meta da taxa Selic ao ano for superior a 8,5%, o rendimento é de',
    alternativas: [
      '70% da meta da taxa Selic ao ano, mensalizada, mais a Taxa Referencial (TR).',
      '0,5% ao mês mais a Taxa Referencial (TR).',
      '100% da taxa DI acumulada no mês.',
      'a Taxa Referencial (TR), apenas.',
      'taxa livremente pactuada entre o banco e o poupador.'
    ],
    resposta: 1,
    explicacao: {
      resumo: 'Com a Selic meta acima de 8,5% a.a., a poupança rende 0,5% ao mês mais TR.',
      detalhada: 'A Lei 12.703/2012 criou duas faixas para a poupança, conforme a **meta da taxa Selic**:\n\n- **Selic meta superior a 8,5% a.a.**: rendimento de **0,5% ao mês + TR**;\n- **Selic meta igual ou inferior a 8,5% a.a.**: **70% da meta Selic ao ano, mensalizada, + TR**.\n\nOs rendimentos são creditados mensalmente, na data de aniversário do depósito, e, para pessoas físicas, são isentos de imposto de renda. A alternativa A descreve a regra da faixa **inferior**, o que a torna a isca clássica quando o enunciado fala em Selic acima de 8,5%.',
      alternativas: [
        'Errada. Regra aplicável apenas quando a meta Selic for igual ou inferior a 8,5% a.a.',
        'Certa. Regra para meta Selic acima de 8,5% a.a.',
        'Errada. A poupança não é indexada ao DI.',
        'Errada. A TR é componente, mas não é o rendimento total.',
        'Errada. O rendimento é fixado em lei, não pactuado.'
      ],
      dica: 'Selic alta: 0,5% a.m. + TR. Selic baixa (até 8,5%): 70% da Selic + TR. Leia o sinal do enunciado (superior ou inferior).'
    },
    fontes: [{ titulo: 'Lei 12.703/2012', url: 'https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12703.htm' }, { titulo: 'Banco Central: Selic', url: 'https://www.bcb.gov.br/controleinflacao/taxaselic' }]
  },
  {
    id: 'cba-407', materia: 'conhecimentos-bancarios', assunto: 'Sistema Financeiro Nacional', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 2,
    objetivos: ['bancarios', 'estatais', 'concursos-gerais'],
    enunciado: 'A taxa Selic é a principal referência da política monetária brasileira. Sobre ela, é correto afirmar que',
    alternativas: [
      'a meta da taxa Selic é definida pelo Comitê de Política Monetária (Copom) do Banco Central, e a taxa Selic apurada corresponde à média ponderada das operações diárias com lastro em títulos públicos federais.',
      'a meta da taxa Selic é fixada mensalmente pelo Conselho Monetário Nacional (CMN), que também executa as operações de mercado aberto.',
      'a taxa Selic corresponde à média das taxas dos Certificados de Depósito Bancário emitidos pelos bancos privados.',
      'a meta da taxa Selic é definida pelo Tesouro Nacional, em leilões semanais de títulos públicos.',
      'a taxa Selic incide apenas sobre operações de crédito pessoal, sem relação com os títulos públicos.'
    ],
    resposta: 0,
    explicacao: {
      resumo: 'O Copom (BCB) define a meta da Selic; a Selic efetiva é a média das operações diárias lastreadas em títulos públicos federais.',
      detalhada: 'O **Copom**, colegiado do Banco Central, define a **meta da taxa Selic**, em reuniões regulares ao longo do ano, com o objetivo de manter a inflação na meta. Já a **taxa Selic** (efetiva, ou "Selic Over") é a média ponderada das taxas das operações de financiamento por um dia, lastreadas em **títulos públicos federais**, registradas no Selic (Sistema Especial de Liquidação e de Custódia). O BCB atua no mercado aberto para manter a taxa efetiva próxima da meta.\n\nRegistro importante: a **meta de inflação** é que é definida pelo **CMN**; a meta da Selic é do Copom. Misturar as duas é a pegadinha mais comum do tema.',
      alternativas: [
        'Certa. Atribuição do Copom e conceito da taxa efetiva.',
        'Errada. O CMN fixa a meta de inflação, não a da Selic, e as operações de mercado aberto são do BCB.',
        'Errada. A média de taxas de CDB é a base de outras referências, não da Selic.',
        'Errada. O Tesouro emite títulos, mas não define a meta da Selic.',
        'Errada. A Selic é a referência para o mercado de títulos públicos e influencia todas as taxas da economia.'
      ],
      dica: 'Copom decide a meta da Selic; CMN decide a meta de inflação; BCB executa.'
    },
    fontes: [{ titulo: 'Banco Central: Copom', url: 'https://www.bcb.gov.br/controleinflacao/copom' }, { titulo: 'Banco Central: taxa Selic', url: 'https://www.bcb.gov.br/controleinflacao/taxaselic' }]
  },

  /* ======================= MATEMÁTICA ======================= */
  {
    id: 'mat-401', materia: 'matematica', assunto: 'Porcentagem', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 1,
    objetivos: ['bancarios', 'estatais', 'concursos-gerais'],
    enunciado: 'Uma loja aumentou em 20% o preço de um eletrodoméstico que custava R$ 800,00. Passado um mês, concedeu um desconto de 25% sobre o preço já reajustado. Após essas duas alterações, o preço do eletrodoméstico, em reais, passou a ser',
    alternativas: ['680,00', '700,00', '720,00', '760,00', '800,00'],
    resposta: 2,
    explicacao: {
      resumo: 'Fator de 1,20 e depois de 0,75: 800 x 1,20 x 0,75 = 720.',
      detalhada: 'Porcentagens sucessivas **não se somam**: multiplicam-se os fatores. Aumento de 20% é fator 1,20; desconto de 25% é fator 0,75.\n\n800 x 1,20 = 960; 960 x 0,75 = **720**. O fator acumulado é 1,2 x 0,75 = 0,90, isto é, redução líquida de 10%, e não "+20% - 25% = -5%" (que daria 760, a isca).',
      alternativas: [
        'Errada. Seria uma redução de 15%.',
        'Errada. Seria uma redução de 12,5%.',
        'Certa. 800 x 0,90 = 720.',
        'Errada. Resultado de somar os percentuais (+20% - 25% = -5%).',
        'Errada. Seria o preço original, sem efeito líquido.'
      ],
      dica: 'Variações sucessivas: multiplique os fatores. Somar +20% e -25% é o erro que a banca espera.'
    },
    fontes: [{ titulo: 'Banco Central: educação financeira', url: 'https://www.bcb.gov.br/cidadaniafinanceira' }]
  },
  {
    id: 'mat-402', materia: 'matematica', assunto: 'Matemática financeira', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 1,
    objetivos: ['bancarios', 'estatais', 'concursos-gerais'],
    enunciado: 'Um capital de R$ 5.000,00 foi aplicado a juros simples, à taxa de 2% ao mês, durante 8 meses. O valor dos juros obtidos nessa aplicação, em reais, foi de',
    alternativas: ['800,00', '850,00', '1.000,00', '5.800,00', '6.000,00'],
    resposta: 0,
    explicacao: {
      resumo: 'J = C x i x n = 5.000 x 0,02 x 8 = 800.',
      detalhada: 'No regime de juros **simples**, J = C . i . n, com a taxa e o prazo na mesma unidade (mês): J = 5.000 x 0,02 x 8 = **R$ 800,00**.\n\nO montante seria M = 5.000 + 800 = 5.800, que aparece como isca (o enunciado pede os **juros**, não o montante). O valor 850 viria do regime composto aproximado (5.000 x 1,02^8 - 5.000 ≈ 858).',
      alternativas: [
        'Certa. Juros = 5.000 x 0,02 x 8.',
        'Errada. Aproximação do regime composto (5.000 x 1,02^8 - 5.000 = 858), não do regime simples.',
        'Errada. Corresponderia a juros de 2,5% ao mês no período.',
        'Errada. É o montante, não os juros.',
        'Errada. Corresponderia a juros de 15% ao mês no período.'
      ],
      dica: 'Releia a pergunta: juros ou montante? A Cesgranrio põe os dois nas alternativas.'
    },
    fontes: [{ titulo: 'Banco Central: educação financeira', url: 'https://www.bcb.gov.br/cidadaniafinanceira' }]
  },
  {
    id: 'mat-403', materia: 'matematica', assunto: 'Matemática financeira', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 2,
    objetivos: ['bancarios', 'estatais', 'concursos-gerais'],
    enunciado: 'Uma empresa possui um título de R$ 12.100,00 com vencimento daqui a 2 meses. Para antecipar o recebimento, negociou o desconto desse título hoje, em regime de juros compostos, à taxa de 10% ao mês (desconto racional composto). O valor presente do título, em reais, é',
    alternativas: ['9.680,00', '9.800,00', '9.900,00', '10.000,00', '11.000,00'],
    resposta: 3,
    explicacao: {
      resumo: 'VP = 12.100 / (1,10)^2 = 12.100 / 1,21 = 10.000.',
      detalhada: 'No desconto racional composto, o valor presente é o valor futuro dividido por (1 + i)^n: VP = 12.100 / 1,10^2 = 12.100 / 1,21 = **R$ 10.000,00**.\n\nConferindo: 10.000 x 1,10 = 11.000; 11.000 x 1,10 = 12.100. A isca 9.680 vem de descontar 20% simples de 12.100 (12.100 x 0,80), e 11.000 é o valor após apenas um mês de capitalização.',
      alternativas: [
        'Errada. Desconto simples de 2 x 10% sobre o valor nominal.',
        'Errada. 12.100 x 0,9 x 0,9 = 9.801: usa desconto por fora composto no lugar do racional.',
        'Errada. 11.000 x 0,9: aplica 10% de desconto sobre o valor de um mês antes, em vez de dividir por 1,10.',
        'Certa. 12.100 / 1,21 = 10.000.',
        'Errada. É o valor do título um mês antes do vencimento.'
      ],
      dica: 'Juros compostos: divida por (1+i)^n. Cálculo de 1,1 ao quadrado é 1,21: decore.'
    },
    fontes: [{ titulo: 'Banco Central: educação financeira', url: 'https://www.bcb.gov.br/cidadaniafinanceira' }]
  },
  {
    id: 'mat-404', materia: 'matematica', assunto: 'Matemática financeira', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 2,
    objetivos: ['bancarios', 'estatais', 'concursos-gerais'],
    enunciado: 'Um investidor deseja que sua aplicação tenha rentabilidade real de 10% ao ano. Sabendo que a inflação prevista para o período é de 5% ao ano, a taxa nominal anual que essa aplicação deve render, para atingir o objetivo, é de',
    alternativas: ['5,0%', '10,0%', '10,5%', '15,0%', '15,5%'],
    resposta: 4,
    explicacao: {
      resumo: '(1 + nominal) = (1 + real) x (1 + inflação) = 1,10 x 1,05 = 1,155, ou 15,5%.',
      detalhada: 'A relação entre as taxas é multiplicativa (equação de Fisher): **1 + i nominal = (1 + i real) x (1 + inflação)**.\n\n1 + i = 1,10 x 1,05 = 1,155, logo i nominal = **15,5%**. Somar as taxas (10% + 5% = 15%) ignora o efeito da inflação sobre o ganho real, e é o erro que a banca induz.',
      alternativas: [
        'Errada. É apenas a inflação.',
        'Errada. É apenas a rentabilidade real.',
        'Errada. 10% x 1,05 = 10,5%: aplica a inflação sobre a taxa real, e não sobre o fator (1 + taxa real).',
        'Errada. Soma simples das taxas.',
        'Certa. 1,10 x 1,05 = 1,155.'
      ],
      dica: 'Taxa real e taxa nominal se relacionam por produto, não por soma ou subtração.'
    },
    fontes: [{ titulo: 'Banco Central: educação financeira', url: 'https://www.bcb.gov.br/cidadaniafinanceira' }]
  },
  {
    id: 'mat-405', materia: 'matematica', assunto: 'Matemática financeira', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 2,
    objetivos: ['bancarios', 'estatais', 'concursos-gerais'],
    enunciado: 'Um título de R$ 6.000,00 foi descontado em um banco 3 meses antes do vencimento, em operação de desconto comercial (por fora) simples, com taxa de desconto de 2% ao mês. O valor líquido recebido pelo portador do título, em reais, foi de',
    alternativas: ['5.400,00', '5.640,00', '5.760,00', '5.880,00', '6.360,00'],
    resposta: 1,
    explicacao: {
      resumo: 'Desconto = 6.000 x 0,02 x 3 = 360; valor líquido = 6.000 - 360 = 5.640.',
      detalhada: 'No desconto comercial simples, o desconto incide sobre o **valor nominal**: D = N . d . n = 6.000 x 0,02 x 3 = **R$ 360,00**. O valor líquido (atual) é V = N - D = 6.000 - 360 = **R$ 5.640,00**.\n\nA isca 6.360 soma o desconto ao valor nominal, em vez de subtrair; a 5.880 aplica o desconto de apenas 2% (um mês).',
      alternativas: [
        'Errada. Aplica 10% de desconto uma só vez sobre o nominal (6.000 x 0,10 = 600), em vez de 2% ao mês por três meses.',
        'Certa. 6.000 - 360.',
        'Errada. Desconto de 2% ao mês por apenas dois meses, em vez de três (6.000 x 0,02 x 2 = 240).',
        'Errada. Desconto de 2% apenas (um mês).',
        'Errada. Soma o desconto em vez de subtraí-lo.'
      ],
      dica: 'Pede-se o valor líquido: subtraia o desconto do valor nominal. Cuidado com o número de meses.'
    },
    fontes: [{ titulo: 'Banco Central: educação financeira', url: 'https://www.bcb.gov.br/cidadaniafinanceira' }]
  },
  {
    id: 'mat-406', materia: 'matematica', assunto: 'Matemática financeira', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 3,
    objetivos: ['bancarios', 'estatais'],
    enunciado: 'Um financiamento de R$ 120.000,00 será pago em 60 prestações mensais pelo Sistema de Amortização Constante (SAC), com juros de 1% ao mês sobre o saldo devedor, e a primeira prestação vence um mês após a contratação. O valor da segunda prestação, em reais, é de',
    alternativas: ['3.000,00', '3.120,00', '3.180,00', '3.200,00', '3.380,00'],
    resposta: 2,
    explicacao: {
      resumo: 'Amortização de 2.000 por mês; juros da 2ª parcela sobre 118.000 = 1.180; prestação = 3.180.',
      detalhada: 'No SAC, a amortização é constante: 120.000 / 60 = **R$ 2.000,00** por mês. Os juros incidem sobre o saldo devedor existente no início de cada período.\n\n- 1ª prestação: juros = 1% x 120.000 = 1.200; prestação = 3.200;\n- Saldo após a 1ª amortização: 118.000;\n- 2ª prestação: juros = 1% x 118.000 = 1.180; prestação = 2.000 + 1.180 = **R$ 3.180,00**.\n\nAs prestações do SAC são decrescentes (cada uma cai 20 reais, que é 1% da amortização). 3.200 é o valor da primeira, a principal isca.',
      alternativas: [
        'Errada. 2.000 + 1% x 100.000: usa um saldo devedor que não corresponde ao da 2ª parcela.',
        'Errada. 2.000 + 1% x 112.000: usa saldo devedor errado (o correto é 118.000).',
        'Certa. 2.000 + 1% x 118.000.',
        'Errada. É a primeira prestação.',
        'Errada. Valor acima da primeira prestação, impossível no SAC, em que as parcelas decrescem.'
      ],
      dica: 'SAC: prestação decrescente; o saldo da parcela n é a dívida inicial menos (n-1) amortizações.'
    },
    fontes: [{ titulo: 'Banco Central: educação financeira', url: 'https://www.bcb.gov.br/cidadaniafinanceira' }]
  },

  /* ======================= PORTUGUÊS ======================= */
  {
    id: 'por-401', materia: 'portugues', assunto: 'Interpretação de texto', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 1,
    objetivos: ['bancarios', 'estatais', 'concursos-gerais'],
    textoBase: 'A abertura de contas por aplicativo reduziu filas e custos, mas trouxe novos desafios. Se, por um lado, o cliente resolve em minutos o que antes exigia uma tarde inteira na agência, por outro, cresce o número de golpes que se aproveitam da pressa e da falta de familiaridade com os recursos digitais. Por isso, os bancos têm investido em campanhas educativas, que reforçam um princípio simples: nenhuma instituição legítima pede senha ou código de confirmação por telefone ou mensagem.',
    enunciado: 'Segundo o texto, a expansão do atendimento digital',
    alternativas: [
      'tornou desnecessária a presença física das agências bancárias.',
      'inviabilizou a ação de golpistas, que dependem do contato presencial.',
      'transferiu aos clientes a responsabilidade pelas campanhas educativas.',
      'trouxe ganho de tempo ao cliente, mas também ampliou riscos que exigem orientação.',
      'levou os bancos a solicitarem códigos de confirmação por telefone, para maior segurança.'
    ],
    resposta: 3,
    explicacao: {
      resumo: 'O texto aponta a vantagem (tempo) e o risco (golpes), motivo das campanhas educativas.',
      detalhada: 'A estrutura "Se, por um lado... por outro..." organiza duas ideias: a **vantagem** (o cliente resolve em minutos o que exigia uma tarde) e o **risco** (golpes que exploram pressa e pouca familiaridade). A conclusão ("Por isso") mostra a reação dos bancos: campanhas educativas. A alternativa D resume exatamente isso.\n\nAs demais extrapolam o texto: ele não diz que as agências são desnecessárias, que os golpes cessaram, que a responsabilidade passou ao cliente, e afirma o contrário sobre códigos por telefone.',
      alternativas: [
        'Errada. O texto menciona redução de filas, não o fim das agências.',
        'Errada. O texto diz que os golpes aumentaram.',
        'Errada. Os bancos é que investem nas campanhas.',
        'Certa. Sintetiza o contraste do primeiro período e a consequência do segundo.',
        'Errada. O texto afirma que nenhuma instituição legítima pede códigos.'
      ],
      dica: 'Em interpretação, desconfie de alternativas com palavras absolutas e de ideias que o texto não afirma.'
    },
    fontes: [{ titulo: 'Academia Brasileira de Letras', url: 'https://www.academia.org.br/' }]
  },
  {
    id: 'por-402', materia: 'portugues', assunto: 'Concordância verbal e nominal', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 2,
    objetivos: ['bancarios', 'estatais', 'concursos-gerais'],
    enunciado: 'De acordo com a norma-padrão da língua portuguesa, a frase correta quanto à concordância é:',
    alternativas: [
      'Fazem dois anos que o banco inaugurou a nova agência.',
      'Haviam muitos clientes na fila do caixa.',
      'Devem existir motivos para a recusa do crédito.',
      'Aluga-se salas comerciais no andar térreo da agência.',
      'Houveram diversos erros no lançamento dos dados.'
    ],
    resposta: 2,
    explicacao: {
      resumo: 'Em "Devem existir motivos", o verbo auxiliar concorda com o sujeito "motivos"; nas demais, o verbo está errado.',
      detalhada: '- **Fazer** indicando tempo é impessoal: "Faz dois anos";\n- **Haver** no sentido de existir é impessoal: "Havia muitos clientes";\n- "Existir" tem sujeito ("motivos"), e o auxiliar "dever" concorda com ele: **Devem existir motivos**;\n- Com a partícula apassivadora "se", o verbo concorda com o sujeito paciente: "**Alugam-se** salas comerciais";\n- "Houve diversos erros": "haver" no sentido de ocorrer também é impessoal, mesmo em locução.',
      alternativas: [
        'Errada. Faz dois anos.',
        'Errada. Havia muitos clientes.',
        'Certa. Sujeito "motivos" e auxiliar no plural.',
        'Errada. Alugam-se salas comerciais.',
        'Errada. Houve diversos erros.'
      ],
      dica: 'Haver (existir/ocorrer) e fazer (tempo) não vão ao plural. Mas o verbo "existir" tem sujeito e vai ao plural.'
    },
    fontes: [{ titulo: 'Academia Brasileira de Letras', url: 'https://www.academia.org.br/' }]
  },
  {
    id: 'por-403', materia: 'portugues', assunto: 'Crase', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 2,
    objetivos: ['bancarios', 'estatais', 'concursos-gerais'],
    enunciado: 'Está correto o emprego do sinal indicativo de crase em:',
    alternativas: [
      'O gerente referiu-se à cliente que assinou o contrato ontem.',
      'O banco passará a atender à partir de segunda-feira.',
      'Entregue o formulário à qualquer funcionário do setor.',
      'Terminado o expediente, ela voltou à pé para casa e descansou.',
      'O atendente dirigiu-se à ele para esclarecer a dúvida.'
    ],
    resposta: 0,
    explicacao: {
      resumo: 'Crase exige preposição "a" + artigo "a": "referir-se a" + "a cliente" = "à cliente".',
      detalhada: '- **A**: "referir-se" pede a preposição "a"; "cliente" é feminino determinado ("a cliente que assinou"), logo ocorre a fusão: **à cliente**;\n- B: "a partir" não leva crase (antes de expressão com verbo/substantivo sem artigo, "a" é só preposição);\n- C: antes de pronome indefinido ("qualquer") não há crase;\n- D: antes de palavra masculina ou sem artigo, "a pé" não leva crase ("voltou **a** pé");\n- E: antes de pronome pessoal ("ele") não há crase: "dirigiu-se **a** ele".',
      alternativas: [
        'Certa. Preposição "a" mais artigo "a".',
        'Errada. "A partir" não leva crase.',
        'Errada. Antes de "qualquer", não há crase.',
        'Errada. "A pé" não leva crase: voltou a pé.',
        'Errada. Antes de pronome pessoal, não há crase.'
      ],
      dica: 'Teste de substituição: troque a palavra feminina por uma masculina. Se aparecer "ao", há crase no feminino.'
    },
    fontes: [{ titulo: 'Academia Brasileira de Letras', url: 'https://www.academia.org.br/' }]
  },
  {
    id: 'por-404', materia: 'portugues', assunto: 'Pontuação', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 2,
    objetivos: ['bancarios', 'estatais', 'concursos-gerais'],
    enunciado: 'A frase em que o uso da vírgula está de acordo com a norma-padrão é:',
    alternativas: [
      'O gerente, informou aos clientes que o sistema estava fora do ar.',
      'Os clientes, que chegaram cedo foram atendidos primeiro.',
      'O contrato foi assinado, pelo cliente na própria agência.',
      'Não sei, quando o cartão será entregue.',
      'Ontem, o gerente, que está na agência há dez anos, aprovou o financiamento.'
    ],
    resposta: 4,
    explicacao: {
      resumo: 'A oração explicativa "que está na agência há dez anos" vem isolada por duas vírgulas.',
      detalhada: '- A: vírgula separa sujeito do verbo;\n- B: oração explicativa pede **duas** vírgulas ("Os clientes, que chegaram cedo, foram...");\n- C: vírgula separa o verbo do agente da passiva;\n- D: oração subordinada objetiva direta não se separa por vírgula;\n- E: adjunto adverbial deslocado ("Ontem,") e oração adjetiva explicativa entre vírgulas, ambos corretos.',
      alternativas: [
        'Errada. Sujeito e verbo não se separam.',
        'Errada. Falta a segunda vírgula da oração explicativa.',
        'Errada. Verbo e agente da passiva não se separam.',
        'Errada. Oração objetiva direta não leva vírgula.',
        'Certa. Pontuação correta.'
      ],
      dica: 'Oração explicativa entre vírgulas pede as duas; se faltar uma, a banca erra de propósito.'
    },
    fontes: [{ titulo: 'Academia Brasileira de Letras', url: 'https://www.academia.org.br/' }]
  },

  /* ======================= INFORMÁTICA ======================= */
  {
    id: 'inf-401', materia: 'informatica', assunto: 'Segurança da informação', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 1,
    objetivos: ['bancarios', 'estatais', 'concursos-gerais'],
    enunciado: 'Um funcionário recebe um e-mail, aparentemente do seu banco, informando que a conta será bloqueada em 24 horas caso ele não atualize o cadastro por meio de um link. A conduta mais adequada diante dessa mensagem é',
    alternativas: [
      'clicar no link, pois o e-mail traz o logotipo do banco e, se o site pedir a senha, digitá-la.',
      'não clicar no link, acessar o serviço digitando o endereço oficial do banco ou pelo aplicativo oficial e relatar a mensagem como suspeita.',
      'encaminhar a mensagem a colegas para que verifiquem se também a receberam.',
      'responder ao remetente, solicitando a confirmação de que o e-mail é legítimo.',
      'baixar o anexo da mensagem e abri-lo, para que o antivírus avalie o conteúdo.'
    ],
    resposta: 1,
    explicacao: {
      resumo: 'Mensagem com urgência e link é típica de phishing: não clicar, acessar pelo canal oficial e relatar.',
      detalhada: '**Phishing** é a fraude em que o golpista se passa por instituição conhecida para obter dados. Sinais clássicos: urgência ("24 horas"), ameaça de bloqueio e link para "atualizar" dados. O logotipo não prova nada: é fácil de copiar.\n\nA conduta correta, segundo a Cartilha do CERT.br, é **não clicar**, acessar o serviço pelo endereço digitado no navegador ou pelo aplicativo oficial e **reportar** a mensagem. Encaminhar a mensagem, responder ao golpista ou abrir anexos só amplia o risco.',
      alternativas: [
        'Errada. É exatamente o que o golpista deseja.',
        'Certa. Evita o link e usa um canal confiável.',
        'Errada. Espalha a mensagem fraudulenta.',
        'Errada. Confirmaria ao golpista que o e-mail é lido e ativo.',
        'Errada. Abrir anexo desconhecido pode instalar código malicioso.'
      ],
      dica: 'Urgência + link + pedido de dados = phishing. O canal oficial é o que você digita ou o aplicativo.'
    },
    fontes: [{ titulo: 'Cartilha de Segurança para Internet (CERT.br)', url: 'https://cartilha.cert.br/' }]
  },
  {
    id: 'inf-402', materia: 'informatica', assunto: 'Planilhas (Excel e Calc)', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 2,
    objetivos: ['bancarios', 'estatais', 'concursos-gerais'],
    enunciado: 'Em uma planilha eletrônica (Excel, em português), as células A1, A2, A3, A4 e A5 contêm, respectivamente, os valores 10, 20, 30, 40 e 50. Na célula B1 foi digitada a fórmula\n=SE(MÉDIA(A1:A5)>25;MÁXIMO(A1:A5);MÍNIMO(A1:A5))\nO valor exibido em B1 é',
    alternativas: ['10', '30', '40', '50', '150'],
    resposta: 3,
    explicacao: {
      resumo: 'A média é 30, maior que 25; a função SE retorna o MÁXIMO, que é 50.',
      detalhada: 'A função SE tem a forma =SE(teste; valor_se_verdadeiro; valor_se_falso). O teste é MÉDIA(A1:A5) > 25. A média é (10+20+30+40+50)/5 = **30**, e 30 > 25 é **verdadeiro**. Logo, a fórmula devolve MÁXIMO(A1:A5) = **50**.\n\nSe o teste fosse falso, o resultado seria o MÍNIMO (10). O 30 é a média, e o 150 é a soma: ambos são iscas por confundir a função usada.',
      alternativas: [
        'Errada. É o resultado do ramo falso.',
        'Errada. É a média, usada apenas no teste.',
        'Errada. É o conteúdo de A4, sem relação com MÉDIA, MÁXIMO ou MÍNIMO.',
        'Certa. Teste verdadeiro retorna o máximo.',
        'Errada. É a soma do intervalo.'
      ],
      dica: 'Resolva de dentro para fora: primeiro o teste lógico, depois o ramo escolhido.'
    },
    fontes: [{ titulo: 'Suporte da Microsoft', url: 'https://support.microsoft.com/pt-br' }]
  },
  {
    id: 'inf-403', materia: 'informatica', assunto: 'Computação em nuvem', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 1,
    objetivos: ['bancarios', 'estatais', 'concursos-gerais'],
    enunciado: 'Uma empresa contratou um serviço de correio eletrônico corporativo que é acessado pelo navegador, sem que a empresa precise instalar o software nem gerenciar servidores, sistema operacional ou armazenamento. Segundo a classificação usual de computação em nuvem, esse modelo de serviço é denominado',
    alternativas: ['SaaS (Software as a Service).', 'IaaS (Infrastructure as a Service).', 'PaaS (Platform as a Service).', 'nuvem privada, apenas.', 'hospedagem local (on-premises).'],
    resposta: 0,
    explicacao: {
      resumo: 'Aplicativo pronto, usado pelo navegador e gerenciado pelo provedor: SaaS.',
      detalhada: 'Os três modelos de serviço, segundo o NIST:\n\n- **SaaS**: o provedor entrega o **aplicativo pronto** (e-mail, planilhas online); o cliente só usa;\n- **PaaS**: o provedor entrega uma **plataforma** para o cliente desenvolver e executar aplicações;\n- **IaaS**: o provedor entrega **infraestrutura** (máquinas virtuais, rede, armazenamento) e o cliente gerencia o sistema e os aplicativos.\n\nNuvem pública/privada/híbrida são modelos de **implantação**, outra classificação. Hospedagem local é o contrário da nuvem.',
      alternativas: [
        'Certa. Software pronto fornecido como serviço.',
        'Errada. IaaS entrega infraestrutura, e o cliente instala o próprio software.',
        'Errada. PaaS entrega plataforma de desenvolvimento.',
        'Errada. É modelo de implantação, não de serviço.',
        'Errada. Não é nuvem; os servidores ficam na empresa.'
      ],
      dica: 'Escada: IaaS (tijolo), PaaS (obra pronta para decorar), SaaS (casa pronta). O e-mail pronto é SaaS.'
    },
    fontes: [{ titulo: 'NIST SP 800-145: definição de computação em nuvem', url: 'https://csrc.nist.gov/pubs/sp/800/145/final' }]
  },

  /* ======================= INGLÊS ======================= */
  {
    id: 'ing-401', materia: 'ingles', assunto: 'Reading comprehension', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 2,
    objetivos: ['bancarios', 'estatais', 'concursos-gerais'],
    textoBase: 'Many banks now offer instant payments around the clock. Customers can send money in a few seconds, even at night or on weekends. However, experts warn that this speed also helps fraudsters, who pressure victims to act before they have time to think. For this reason, banks advise people to check the name of the recipient carefully and never to share passwords or confirmation codes.',
    enunciado: 'According to the text, experts are concerned because',
    alternativas: [
      'instant payments are available only on weekdays.',
      'the speed of the payments can be exploited by criminals to pressure victims.',
      'banks refuse to refund customers who send money by mistake.',
      'customers have stopped checking the name of the recipient, as banks recommended.',
      'passwords have become unnecessary in instant payments.'
    ],
    resposta: 1,
    explicacao: {
      resumo: 'O texto diz que a rapidez ajuda golpistas a pressionar vítimas a agir sem pensar.',
      detalhada: 'A ideia aparece em "this speed also helps fraudsters, who pressure victims to act before they have time to think". A alternativa B a reformula ("exploited by criminals to pressure victims").\n\nA contradiz o texto ("even at night or on weekends"). C e D inventam fatos (reembolso, hábito dos clientes). E contradiz o conselho final de **nunca** compartilhar senhas e códigos.',
      alternativas: [
        'Errada. O texto diz que os pagamentos funcionam também à noite e em fins de semana.',
        'Certa. Paráfrase da advertência dos especialistas.',
        'Errada. Reembolso não é mencionado.',
        'Errada. O texto só diz que os bancos aconselham a conferência do nome.',
        'Errada. O texto recomenda não compartilhar senhas, não as dispensa.'
      ],
      dica: 'Procure no texto a frase que sustenta a alternativa. Se só dá para "achar" que sim, está errada.'
    },
    fontes: [{ titulo: 'Cambridge Dictionary', url: 'https://dictionary.cambridge.org/' }]
  },
  {
    id: 'ing-402', materia: 'ingles', assunto: 'Vocabulary', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 2,
    objetivos: ['bancarios', 'estatais', 'concursos-gerais'],
    textoBase: 'Late fees apply when customers fail to settle the invoice by the due date. In addition, interest accrues daily on the outstanding balance until the debt is fully paid.',
    enunciado: 'In the text, the word "outstanding" in "outstanding balance" is closest in meaning to',
    alternativas: ['exceptional.', 'recently opened.', 'still unpaid.', 'fully refunded.', 'automatically canceled.'],
    resposta: 2,
    explicacao: {
      resumo: '"Outstanding balance" é o saldo devedor, a parte ainda não paga: "still unpaid".',
      detalhada: 'Em contexto financeiro, **outstanding** significa "pendente, em aberto, ainda não pago". O texto indica isso: os juros incidem sobre o saldo "until the debt is fully paid". O sentido mais comum do adjetivo, "excelente, notável", é a isca (alternativa A): é um sentido de polissemia do adjetivo, que o contexto (juros até a dívida ser paga) afasta.\n\nVocabulário útil: **settle** (quitar), **due date** (data de vencimento), **accrue** (acumular-se, no caso de juros), **late fee** (multa por atraso).',
      alternativas: [
        'Errada. É o sentido geral de "outstanding", incoerente aqui.',
        'Errada. Não há relação com abertura recente.',
        'Certa. Saldo ainda não pago.',
        'Errada. Reembolsado é o contrário de dívida em aberto.',
        'Errada. Dívida cancelada não gera juros.'
      ],
      dica: 'Palavras com mais de um sentido: use o contexto. Juros sobre saldo até a dívida ser paga = saldo pendente.'
    },
    fontes: [{ titulo: 'Cambridge Dictionary', url: 'https://dictionary.cambridge.org/' }]
  },

  /* ======================= RACIOCÍNIO LÓGICO ======================= */
  {
    id: 'rlm-401', materia: 'raciocinio-logico', assunto: 'Equivalências e negações', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 2,
    objetivos: ['bancarios', 'estatais', 'concursos-gerais'],
    enunciado: 'Considere a seguinte afirmação: "Se o cliente é correntista, então ele tem acesso ao aplicativo do banco." A negação lógica dessa afirmação é:',
    alternativas: [
      'Se o cliente não é correntista, então ele não tem acesso ao aplicativo do banco.',
      'O cliente não é correntista e tem acesso ao aplicativo do banco.',
      'O cliente não é correntista ou não tem acesso ao aplicativo do banco.',
      'O cliente é correntista e não tem acesso ao aplicativo do banco.',
      'Se o cliente tem acesso ao aplicativo do banco, então ele é correntista.'
    ],
    resposta: 3,
    explicacao: {
      resumo: 'A negação de "se p, então q" é "p e não q".',
      detalhada: 'A condicional "p → q" só é falsa quando p é verdadeira e q é falsa. Portanto, sua negação é **p ∧ ~q**: "o cliente é correntista **e** não tem acesso ao aplicativo".\n\nAs outras alternativas: A é a **inversa**; E é a **recíproca**; nenhuma delas é equivalente nem negação. C ("~p ou ~q") não é negação nem equivalente: a equivalente de p → q seria "~p ou q". B tem estrutura errada.',
      alternativas: [
        'Errada. É a inversa da condicional.',
        'Errada. Nega p e mantém q.',
        'Errada. Nega os dois termos de modo incorreto.',
        'Certa. p e não q.',
        'Errada. É a recíproca da condicional.'
      ],
      dica: 'Negação de "se..., então": mantém o primeiro, troca "então" por "e" e nega o segundo.'
    },
    fontes: [{ titulo: 'IME-USP', url: 'https://www.ime.usp.br/' }]
  },
  {
    id: 'rlm-402', materia: 'raciocinio-logico', assunto: 'Análise combinatória', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 2,
    objetivos: ['bancarios', 'estatais', 'concursos-gerais'],
    enunciado: 'Uma agência bancária tem 6 caixas e 4 gerentes. Deseja-se formar uma comissão composta por exatamente 2 caixas e 1 gerente. O número de comissões distintas que podem ser formadas é',
    alternativas: ['24', '30', '40', '48', '60'],
    resposta: 4,
    explicacao: {
      resumo: 'C(6,2) x C(4,1) = 15 x 4 = 60.',
      detalhada: 'A ordem dos escolhidos não importa (é uma comissão), então usamos **combinação**. Os caixas: C(6,2) = 6x5/2 = 15 maneiras. O gerente: C(4,1) = 4 maneiras. Pelo princípio multiplicativo: 15 x 4 = **60**.\n\nAs iscas vêm de erros típicos: 24 = 6 x 4 (um só caixa); 30 = 6 x 5, arranjo dos dois caixas (conta a ordem, que a comissão não tem); 40 = C(5,2) x 4, esquece um dos seis caixas; 48 = 12 x 4, conta os caixas como 6 x 2.',
      alternativas: [
        'Errada. Seria 1 caixa e 1 gerente (6 x 4).',
        'Errada. Arranjo de dois caixas, 6 x 5 = 30, que conta a ordem; a comissão não tem ordem.',
        'Errada. C(5,2) x 4 = 40: esquece um dos seis caixas.',
        'Errada. 12 x 4 = 48: conta os caixas como 6 x 2, sem considerar que a ordem não importa.',
        'Certa. 15 x 4.'
      ],
      dica: 'Comissão = combinação. Escolhas de grupos independentes: multiplique.'
    },
    fontes: [{ titulo: 'IME-USP', url: 'https://www.ime.usp.br/' }]
  }
] });
