/* Conteúdo do módulo de redação: aulas, competências, repertórios, temas e um modelo comentado. */
var Redacao = {
  competencias: [
    {
      n: 1, titulo: 'Domínio da escrita formal',
      oQue: 'Ortografia, acentuação, concordância, regência, pontuação, crase e escolha de palavras adequadas ao registro formal.',
      como: 'Revise as regras de concordância e crase, evite gírias e marcas de oralidade, e prefira períodos curtos: quanto menor a frase, menor a chance de erro de estrutura sintática.',
      zera: 'Não zera sozinha a redação, mas desvios graves e frequentes derrubam a nota para 0 ou 40 nesta competência.'
    },
    {
      n: 2, titulo: 'Compreensão do tema e tipo textual',
      oQue: 'Abordar o tema completo (todas as palavras-chave do recorte), no formato dissertativo-argumentativo, usando repertório sociocultural legítimo, pertinente e produtivo.',
      como: 'Sublinhe o recorte do tema e repita-o (com sinônimos) na introdução e na conclusão. O repertório deve ser usado para argumentar, não apenas citado.',
      zera: 'Fuga total ao tema ou texto que não é dissertativo-argumentativo (narração, poema, carta) zera a redação inteira.'
    },
    {
      n: 3, titulo: 'Seleção e organização dos argumentos',
      oQue: 'Projeto de texto visível: uma tese clara e argumentos que a sustentam, desenvolvidos com causas, consequências, exemplos e dados.',
      como: 'Anuncie os dois argumentos já na introdução e desenvolva cada um em um parágrafo próprio. Explique o porquê: argumento sem aprofundamento vale pouco.',
      zera: 'Argumentos soltos, contraditórios ou apenas listados limitam a nota a 80 ou 120.'
    },
    {
      n: 4, titulo: 'Coesão textual',
      oQue: 'Conectivos entre e dentro dos parágrafos, retomadas por pronomes e sinônimos, sem repetição excessiva.',
      como: 'Comece cada parágrafo com um operador diferente (Em primeiro lugar / Além disso / Portanto) e use ao menos um conectivo interno em cada período longo.',
      zera: 'Repetição de conectivos e falta de articulação entre parágrafos derrubam a nota.'
    },
    {
      n: 5, titulo: 'Proposta de intervenção',
      oQue: 'Solução detalhada para o problema, articulada à discussão, com agente, ação, modo ou meio, finalidade e detalhamento, respeitando os direitos humanos.',
      como: 'Use a fórmula: [Agente] deve [ação], por meio de [meio], a fim de [finalidade]. Depois, detalhe um dos elementos com um aposto ou exemplo.',
      zera: 'Proposta que desrespeita os direitos humanos recebe nota 0 nesta competência.'
    }
  ],

  zeram: [
    'Fuga total ao tema proposto.',
    'Não obediência ao tipo dissertativo-argumentativo.',
    'Texto com até 7 linhas escritas (texto insuficiente).',
    'Parte do texto deliberadamente desconectada do tema (impropérios, desenhos, receitas, letras de música).',
    'Nome, assinatura ou identificação fora do local devido.',
    'Texto predominante ou integralmente em língua estrangeira.',
    'Folha de redação em branco, mesmo com texto no rascunho.'
  ],

  aulas: [
    {
      id: 'red-estrutura', titulo: 'A estrutura do texto dissertativo-argumentativo', duracaoMin: 18,
      resumo: 'Como montar introdução, desenvolvimento e conclusão com um projeto de texto que o corretor enxerga logo nas primeiras linhas.',
      secoes: [
        { titulo: 'O que o texto precisa fazer', texto: 'O texto dissertativo-argumentativo **defende um ponto de vista** sobre um problema e convence o leitor com argumentos. Não é um resumo do tema nem uma opinião solta: é uma tese sustentada por razões.\n\nPense em quatro blocos, cada um com uma função:\n- **Introdução**: apresenta o problema e a tese.\n- **Desenvolvimento 1**: primeiro argumento, aprofundado.\n- **Desenvolvimento 2**: segundo argumento, aprofundado.\n- **Conclusão**: retoma a tese e propõe a intervenção.' },
        { titulo: 'Introdução em três movimentos', texto: '**1. Contextualização.** Abra com um repertório (um fato histórico, uma lei, um pensador) que se ligue ao tema. Ele precisa conversar com o problema, não decorar o parágrafo.\n\n**2. Tese.** Afirme o problema com o recorte exato do tema. Ex.: "Nesse cenário, a insegurança alimentar persiste no Brasil."\n\n**3. Anúncio dos argumentos.** Diga as duas causas que vai discutir: "...seja pela desigualdade de renda, seja pela ineficiência na distribuição de alimentos."\n\nCom isso, o corretor já sabe o caminho do texto: é o que a Competência 3 chama de **projeto de texto**.' },
        { titulo: 'Parágrafo de desenvolvimento', texto: 'Cada parágrafo de desenvolvimento tem uma estrutura própria:\n- **Tópico frasal**: a primeira frase anuncia o argumento ("Em primeiro lugar, a desigualdade de renda impede...").\n- **Fundamentação**: explique a causa e a consequência. Por que isso acontece? O que isso gera?\n- **Repertório**: um dado, lei, autor ou exemplo que comprove o que você disse.\n- **Fechamento**: uma frase que liga o argumento de volta à tese.\n\nO erro mais comum é parar no tópico frasal e no repertório, sem explicar. A nota vem do **aprofundamento**.' },
        { titulo: 'Conclusão com proposta completa', texto: 'Na conclusão, retome a tese em uma frase e apresente a proposta de intervenção com os **cinco elementos**:\n- **Agente**: quem vai agir (Ministério da Educação, escolas, mídia, ONGs).\n- **Ação**: o que vai ser feito (ampliar, criar, fiscalizar).\n- **Meio ou modo**: como (por meio de parcerias, mediante campanhas).\n- **Finalidade**: para quê (a fim de garantir...).\n- **Detalhamento**: um desses elementos explicado melhor ("...campanhas, veiculadas nas redes sociais e na TV aberta, ...").\n\nO ideal é propor uma solução para cada argumento desenvolvido.' },
        { titulo: 'Erros que custam pontos', texto: '- Tese só na conclusão: o corretor precisa vê-la na introdução.\n- Repertório "de bolso" sem ligação com o tema (citar Bauman em qualquer redação).\n- Parágrafos com uma frase só.\n- Proposta genérica: "o governo deve fazer algo".\n- Conectivo repetido no início de todo parágrafo.' }
      ],
      pontosChave: ['Introdução = contextualização + tese + anúncio dos argumentos.', 'Cada desenvolvimento: tópico frasal, fundamentação, repertório, fechamento.', 'Aprofundar (causa e consequência) vale mais do que citar.', 'Proposta: agente, ação, meio, finalidade e detalhamento.', 'Retome o recorte exato do tema na introdução e na conclusão.']
    },
    {
      id: 'red-repertorio', titulo: 'Repertório sociocultural produtivo', duracaoMin: 12,
      resumo: 'O que conta como repertório legitimado, como ligá-lo ao argumento e por que citar não basta.',
      secoes: [
        { titulo: 'Os três critérios', texto: 'Para render nota máxima na Competência 2, o repertório precisa ser:\n- **Legitimado**: vem de uma área do conhecimento (lei, obra, pensador, dado de instituição, fato histórico).\n- **Pertinente**: tem relação com o tema.\n- **Produtivo**: é usado para argumentar, não apenas mencionado.' },
        { titulo: 'Citar x usar', texto: '**Só citado**: "Segundo Bauman, vivemos uma modernidade líquida. Além disso, a evasão escolar..."\n\n**Usado**: "Para Bauman, na modernidade líquida os vínculos se tornam frágeis e descartáveis. Essa lógica alcança a escola: sem vínculo com um projeto de futuro, o jovem abandona os estudos ao primeiro obstáculo financeiro."\n\nNo segundo caso, o conceito explica o problema. É isso que a banca quer.' },
        { titulo: 'Onde encontrar', texto: 'A Constituição Federal é o repertório mais versátil: os direitos sociais do art. 6º servem a quase qualquer tema social. Leis específicas (ECA, Estatuto da Pessoa Idosa, LGPD) são precisas e fáceis de lembrar. Obras literárias brasileiras e fatos históricos mostram que o problema tem raízes. Veja a lista de repertórios nesta seção para exemplos prontos com "como usar".' }
      ],
      pontosChave: ['Legitimado, pertinente e produtivo.', 'Explique o conceito e ligue-o ao problema.', 'A Constituição serve a quase todos os temas sociais.', 'Evite números que você não tem certeza: um dado errado tira credibilidade.', 'Prefira repertório no desenvolvimento, onde ele sustenta o argumento.']
    },
    {
      id: 'red-discursiva', titulo: 'Discursiva de concurso: o que muda', duracaoMin: 14,
      resumo: 'Como as bancas de concurso corrigem a prova discursiva e as diferenças em relação ao ENEM.',
      secoes: [
        { titulo: 'Tema técnico e quesitos', texto: 'Em concurso, o tema costuma ser técnico (ligado ao cargo) e vem dividido em **quesitos**: perguntas que o texto precisa responder, na ordem. Cada quesito vale uma parte da nota de conteúdo. Responda todos, de preferência um por parágrafo, usando as palavras do comando.' },
        { titulo: 'Erros descontam mais', texto: 'Enquanto o ENEM avalia a norma-padrão como uma das competências, muitas bancas de concurso **descontam cada erro** de grafia, morfossintaxe e vocabulário da nota de conteúdo, proporcionalmente ao número de linhas. Por isso, frases simples e vocabulário que você domina valem mais do que construções sofisticadas arriscadas.\n\nOs critérios exatos (pesos, fórmulas e limites de linhas) **mudam a cada edital**. Leia o anexo do edital antes de treinar.' },
        { titulo: 'Proposta de intervenção não é obrigatória', texto: 'A proposta com cinco elementos é exigência do ENEM. Em concurso, a conclusão retoma a resposta aos quesitos e, quando o comando pede, apresenta medidas. Não force uma proposta onde o comando não pediu.' },
        { titulo: 'Limite de linhas', texto: 'Ultrapassar o máximo invalida o excesso; ficar abaixo do mínimo pode zerar. Treine com a folha pautada e conte as linhas: o editor desta seção estima as linhas para você.' }
      ],
      pontosChave: ['Responda cada quesito, na ordem do comando.', 'Erros costumam ser descontados da nota de conteúdo.', 'Os critérios mudam por edital: leia o anexo.', 'Proposta de intervenção só quando o comando pedir.', 'Respeite os limites mínimo e máximo de linhas.']
    }
  ],

  repertorios: [
    { area: 'Constituição', ref: 'Constituição Federal de 1988, art. 6º', ideia: 'Lista os direitos sociais: educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência, proteção à maternidade e à infância e assistência aos desamparados.', uso: 'Mostre a distância entre o direito garantido no papel e a realidade do problema do tema.', temas: 'Qualquer tema social' },
    { area: 'Constituição', ref: 'Constituição Federal, art. 205', ideia: 'A educação é direito de todos e dever do Estado e da família, com colaboração da sociedade.', uso: 'Distribui responsabilidades: ótimo para justificar os agentes da proposta (Estado, família, sociedade).', temas: 'Educação, evasão escolar, inclusão' },
    { area: 'Constituição', ref: 'Constituição Federal, art. 225', ideia: 'Todos têm direito ao meio ambiente ecologicamente equilibrado, e cabe ao poder público e à coletividade defendê-lo para as presentes e futuras gerações.', uso: 'Base para temas ambientais e de responsabilidade intergeracional.', temas: 'Meio ambiente, clima, consumo' },
    { area: 'Sociologia', ref: 'Zygmunt Bauman, "Modernidade Líquida" (2000)', ideia: 'Na modernidade líquida, relações, empregos e vínculos se tornam frágeis e temporários.', uso: 'Explique a fragilidade de vínculos (família, escola, trabalho) como causa do problema.', temas: 'Relações digitais, consumo, solidão' },
    { area: 'Sociologia', ref: 'Émile Durkheim, fato social e anomia', ideia: 'Fatos sociais são maneiras de agir exteriores ao indivíduo e coercitivas; a anomia é a ausência ou fragilidade de normas que orientam a conduta.', uso: 'Mostre que um comportamento é coletivo e estrutural, não só escolha individual.', temas: 'Violência, desinformação, comportamento coletivo' },
    { area: 'Filosofia', ref: 'Hannah Arendt, "Eichmann em Jerusalém" (1963)', ideia: 'A "banalidade do mal": atos graves podem ser praticados por pessoas comuns que deixam de refletir sobre o que fazem.', uso: 'Para naturalização de violências e discursos de ódio.', temas: 'Discurso de ódio, violência, intolerância' },
    { area: 'Educação', ref: 'Paulo Freire, "Pedagogia do Oprimido" (escrita em 1968)', ideia: 'Critica a "educação bancária", em que o aluno só recebe conteúdo, e defende a educação como prática de liberdade e consciência crítica.', uso: 'Argumente que a escola precisa formar senso crítico (ótimo para desinformação).', temas: 'Educação, desinformação, cidadania' },
    { area: 'Geografia', ref: 'Milton Santos, "Por uma outra globalização" (2000)', ideia: 'A globalização é vista como fábula (o que se promete), perversidade (o que se vive, com exclusão) e possibilidade (o que pode ser).', uso: 'Para desigualdade no acesso à tecnologia e aos benefícios do progresso.', temas: 'Exclusão digital, desigualdade, trabalho' },
    { area: 'História do Brasil', ref: 'Sérgio Buarque de Holanda, "Raízes do Brasil" (1936)', ideia: 'O "homem cordial" age movido pelo coração e mistura o público e o privado; "cordial" não significa gentil.', uso: 'Para patrimonialismo, clientelismo e dificuldade de impessoalidade nas instituições.', temas: 'Corrupção, serviço público, política' },
    { area: 'Sociologia', ref: 'Gilberto Dimenstein, "O cidadão de papel" (1993)', ideia: 'Muitos direitos existem apenas na lei, sem efetivação na vida real.', uso: 'Combine com a Constituição para mostrar a distância entre a norma e a prática.', temas: 'Direitos sociais, infância, cidadania' },
    { area: 'Literatura', ref: 'Carolina Maria de Jesus, "Quarto de Despejo" (1960)', ideia: 'Diário de uma catadora da favela do Canindé (SP) que registra a fome e a exclusão no cotidiano.', uso: 'Humaniza o problema da fome e da pobreza urbana com um testemunho real.', temas: 'Fome, desigualdade, moradia' },
    { area: 'Geografia', ref: 'Josué de Castro, "Geografia da Fome" (1946)', ideia: 'Mostra que a fome no Brasil é um fenômeno social e político, não natural.', uso: 'Desmonte a ideia de que a fome é fatalidade e aponte causas estruturais.', temas: 'Insegurança alimentar, desigualdade' },
    { area: 'Filosofia', ref: 'Byung-Chul Han, "Sociedade do Cansaço" (2010)', ideia: 'Na sociedade do desempenho, o indivíduo se cobra produtividade sem limite e adoece (esgotamento, depressão).', uso: 'Para saúde mental, trabalho e pressão por desempenho.', temas: 'Saúde mental, trabalho, juventude' },
    { area: 'Literatura', ref: 'George Orwell, "1984" (1949)', ideia: 'Um Estado que vigia tudo e controla a informação e a própria linguagem.', uso: 'Para privacidade, vigilância e manipulação da informação.', temas: 'Dados pessoais, desinformação, redes sociais' },
    { area: 'Leis', ref: 'Lei Geral de Proteção de Dados (Lei 13.709/2018)', ideia: 'Regula o tratamento de dados pessoais, com princípios como finalidade, necessidade e transparência.', uso: 'Mostre que existe base legal e que o problema está na fiscalização ou na cultura.', temas: 'Privacidade, internet, consumo digital' },
    { area: 'Leis', ref: 'Estatuto da Criança e do Adolescente (Lei 8.069/1990)', ideia: 'Adota a proteção integral: crianças e adolescentes são sujeitos de direitos, com prioridade absoluta.', uso: 'Base para temas de infância, trabalho infantil e educação.', temas: 'Infância, educação, violência' },
    { area: 'Leis', ref: 'Lei Brasileira de Inclusão (Lei 13.146/2015)', ideia: 'Assegura os direitos da pessoa com deficiência e define barreiras (urbanísticas, atitudinais, nas comunicações).', uso: 'O conceito de "barreira atitudinal" ajuda a mostrar que o preconceito também exclui.', temas: 'Acessibilidade, inclusão, mercado de trabalho' }
  ],

  temas: [
    { titulo: 'Caminhos para combater a insegurança alimentar no Brasil', tipo: 'enem', textos: ['A alimentação foi incluída entre os direitos sociais do art. 6º da Constituição Federal pela Emenda Constitucional nº 64, de 2010.', 'Insegurança alimentar é a falta de acesso regular e permanente a alimentos de qualidade e em quantidade suficiente. Ela pode ser leve (incerteza sobre o acesso futuro), moderada (redução na quantidade) ou grave (fome).', '"A fome é a expressão biológica de males sociológicos." — ideia associada à obra de Josué de Castro.'] },
    { titulo: 'Desafios para a valorização do trabalho de cuidado no Brasil', tipo: 'enem', textos: ['O trabalho de cuidado inclui cuidar de crianças, idosos, pessoas com deficiência e da casa. Grande parte dele não é remunerada e recai sobre as mulheres.', 'Quando não é pago, esse trabalho não aparece nas estatísticas de produção, embora sustente toda a atividade econômica.'] },
    { titulo: 'Caminhos para combater a desinformação nas redes sociais', tipo: 'enem', textos: ['Conteúdos falsos tendem a circular mais rápido quando provocam emoções fortes, como medo e indignação.', 'A educação midiática ensina a verificar a origem de uma informação, comparar fontes e reconhecer manipulações.'] },
    { titulo: 'O desafio de garantir a saúde mental dos jovens brasileiros', tipo: 'enem', textos: ['A saúde, nos termos do art. 196 da Constituição, é direito de todos e dever do Estado.', 'Pressão por desempenho, comparação constante nas redes e insegurança sobre o futuro aparecem com frequência em relatos de jovens sobre ansiedade.'] },
    { titulo: 'Inclusão digital da população idosa no Brasil', tipo: 'enem', textos: ['Serviços públicos, bancos e consultas médicas migraram para aplicativos e sites.', 'O Estatuto da Pessoa Idosa (Lei 10.741/2003) garante o direito à educação, à cultura e ao acesso a produtos e serviços que respeitem sua condição.'] },
    { titulo: 'Os desafios da permanência dos jovens no ensino médio', tipo: 'enem', textos: ['A educação, conforme o art. 205 da Constituição, visa ao pleno desenvolvimento da pessoa, ao preparo para a cidadania e à qualificação para o trabalho.', 'Entre os motivos apontados para o abandono escolar estão a necessidade de trabalhar, a gravidez na adolescência e a falta de interesse pelo currículo.'] },
    { titulo: 'Mobilidade urbana e o direito à cidade', tipo: 'enem', textos: ['O transporte passou a figurar entre os direitos sociais da Constituição com a Emenda Constitucional nº 90, de 2015.', 'Longos deslocamentos diários reduzem o tempo de estudo, descanso e convívio familiar dos trabalhadores das periferias.'] },
    { titulo: 'A preservação do patrimônio cultural imaterial brasileiro', tipo: 'enem', textos: ['O patrimônio imaterial inclui saberes, celebrações, formas de expressão e lugares, como o ofício das baianas de acarajé e o samba de roda do Recôncavo Baiano, registrados pelo IPHAN.', 'O art. 216 da Constituição define o patrimônio cultural brasileiro como os bens de natureza material e imaterial portadores de referência à identidade e à memória dos diferentes grupos formadores da sociedade.'] },
    { titulo: 'Transparência e controle social na Administração Pública', tipo: 'concurso', textos: ['Comando: Redija um texto dissertativo abordando: (1) o princípio da publicidade e sua relação com a transparência; (2) o papel da Lei de Acesso à Informação (Lei 12.527/2011); (3) os instrumentos de participação do cidadão no controle da gestão pública. Extensão: 20 a 30 linhas.'] },
    { titulo: 'Atendimento ao cidadão na era dos serviços públicos digitais', tipo: 'concurso', textos: ['Comando: Discorra sobre: (1) vantagens da digitalização dos serviços públicos; (2) riscos de exclusão de parte da população; (3) medidas que conciliem eficiência e acessibilidade. Extensão: 20 a 30 linhas.'] },
    { titulo: 'Ética no serviço público e prevenção de conflitos de interesse', tipo: 'concurso', textos: ['Comando: Redija um texto abordando: (1) o conceito de conflito de interesses no exercício de cargo público; (2) os princípios da impessoalidade e da moralidade; (3) mecanismos de prevenção. Extensão: 15 a 25 linhas.'] }
  ],

  modelo: {
    tema: 'Caminhos para combater a insegurança alimentar no Brasil',
    paragrafos: [
      { texto: 'Em "Quarto de Despejo", Carolina Maria de Jesus descreve a fome como uma presença diária, capaz de definir o humor, o trabalho e até as cores do mundo. Passadas décadas da publicação, esse retrato ainda encontra eco no Brasil, onde a insegurança alimentar persiste apesar de a alimentação figurar entre os direitos sociais da Constituição. Tal cenário decorre, sobretudo, da desigualdade de renda e da ineficiência das políticas de abastecimento.', nota: 'Introdução: repertório literário ligado ao tema, tese com o recorte ("insegurança alimentar no Brasil") e anúncio dos dois argumentos.' },
      { texto: 'Em primeiro lugar, a concentração de renda impede que parte da população tenha acesso regular a alimentos de qualidade. Segundo Josué de Castro, em "Geografia da Fome", a fome não é um fenômeno natural, mas resultado de escolhas sociais e políticas. Nesse sentido, quando o salário de uma família é consumido por aluguel e transporte, a comida torna-se a despesa ajustável do orçamento, o que reduz a quantidade e a qualidade das refeições. Assim, a insegurança alimentar revela-se um problema estrutural, e não individual.', nota: 'Desenvolvimento 1: tópico frasal, repertório usado para explicar (não só citado), cadeia de causa e consequência e fechamento ligado à tese.' },
      { texto: 'Além disso, a ineficiência na distribuição agrava o quadro. Embora o país seja um grande produtor agrícola, toneladas de alimentos se perdem entre a colheita e o consumo, por falhas de armazenamento, de transporte e de articulação entre produtores e consumidores. Desse modo, convivem, no mesmo território, o desperdício e a fome, contradição que expõe a falta de planejamento das políticas de abastecimento.', nota: 'Desenvolvimento 2: novo conectivo de abertura, argumento diferente do primeiro e a contradição (desperdício x fome) como aprofundamento.' },
      { texto: 'Portanto, é necessário enfrentar as causas da insegurança alimentar. Para isso, o Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome, em parceria com os municípios, deve ampliar os programas de compra pública de alimentos da agricultura familiar, por meio de convênios que destinem esses produtos a escolas e bancos de alimentos, a fim de reduzir o desperdício e garantir refeições regulares às famílias vulneráveis. Somente assim o retrato de Carolina deixará de ser atual.', nota: 'Conclusão: retomada da tese e proposta completa — agente (ministério e municípios), ação (ampliar programas), meio (convênios), finalidade (reduzir desperdício e garantir refeições) e detalhamento (destino a escolas e bancos de alimentos). Fecha retomando o repertório da introdução.' }
    ]
  },

  fontes: [
    { titulo: 'INEP — Enem: provas, gabaritos e a Cartilha do Participante', url: 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem' },
    { titulo: 'Constituição Federal (texto compilado)', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm' },
    { titulo: 'Vocabulário Ortográfico (VOLP) — Academia Brasileira de Letras', url: 'https://www.academia.org.br/nossa-lingua/busca-no-vocabulario' }
  ]
};
