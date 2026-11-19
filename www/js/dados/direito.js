/* Direito Constitucional, Direito Administrativo, Direito Penal e Conhecimentos Bancários.
   Questões inéditas, escritas no estilo das bancas, e aulas de apoio. */
(function () {
  'use strict';

  var U = {
    cf: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm',
    l14133: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm',
    l8112: 'https://www.planalto.gov.br/ccivil_03/leis/l8112cons.htm',
    l8429: 'https://www.planalto.gov.br/ccivil_03/leis/l8429.htm',
    l9784: 'https://www.planalto.gov.br/ccivil_03/leis/l9784.htm',
    cp: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm',
    l4595: 'https://www.planalto.gov.br/ccivil_03/leis/l4595.htm',
    l9613: 'https://www.planalto.gov.br/ccivil_03/leis/l9613.htm',
    l7357: 'https://www.planalto.gov.br/ccivil_03/leis/l7357.htm',
    bcb: 'https://www.bcb.gov.br',
    stf: 'https://portal.stf.jus.br'
  };
  function f(titulo, url) { return { titulo: titulo, url: url }; }

  var questoes = [

    /* ===================== DIREITO CONSTITUCIONAL ===================== */

    {
      id: 'dco-001',
      materia: 'direito-constitucional',
      assunto: 'Princípios fundamentais',
      tipo: 'multipla',
      estilo: 'FCC',
      dificuldade: 1,
      objetivos: ['concursos-gerais', 'tribunais'],
      enunciado: 'Nos termos do art. 1º da Constituição Federal de 1988, constitui fundamento da República Federativa do Brasil:',
      alternativas: [
        'garantir o desenvolvimento nacional.',
        'a prevalência dos direitos humanos.',
        'o pluralismo político.',
        'erradicar a pobreza e a marginalização.',
        'a independência nacional.'
      ],
      resposta: 2,
      explicacao: {
        resumo: 'O pluralismo político é um dos cinco fundamentos do art. 1º. As demais alternativas trazem objetivos fundamentais (art. 3º) ou princípios das relações internacionais (art. 4º).',
        detalhada: 'O Título I da Constituição ("Dos Princípios Fundamentais") tem quatro artigos que as bancas adoram misturar. O **art. 1º** traz os **fundamentos** da República: soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa e **pluralismo político**. O **art. 2º** consagra a separação dos Poderes. O **art. 3º** lista os **objetivos fundamentais**, e o **art. 4º**, os **princípios que regem as relações internacionais**.\n\nA forma mais segura de não confundir é observar a redação. Os objetivos do art. 3º começam por **verbos no infinitivo**: construir uma sociedade livre, justa e solidária; garantir o desenvolvimento nacional; erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais; promover o bem de todos, sem preconceitos. Os fundamentos do art. 1º são **substantivos** que descrevem a base sobre a qual o Estado se assenta. Já os princípios do art. 4º olham "para fora", para a relação com outros países: independência nacional, prevalência dos direitos humanos, autodeterminação dos povos, não intervenção, concessão de asilo político etc.\n\nAtenção ao pluralismo **político**: ele não se resume à pluralidade de partidos. Significa a convivência de diferentes ideias, crenças, opiniões e grupos sociais. A banca às vezes troca a expressão por "pluripartidarismo" (que é uma consequência, tratada no art. 17) ou por "pluralismo jurídico", que não está no texto.',
        alternativas: [
          'Errada. "Garantir o desenvolvimento nacional" é objetivo fundamental (art. 3º, II). Repare no verbo no infinitivo.',
          'Errada. A prevalência dos direitos humanos rege as relações internacionais do Brasil (art. 4º, II).',
          'Correta. O pluralismo político é o fundamento do art. 1º, V.',
          'Errada. Erradicar a pobreza e a marginalização é objetivo fundamental (art. 3º, III).',
          'Errada. A independência nacional é o primeiro princípio das relações internacionais (art. 4º, I).'
        ],
        dica: 'Mnemônico dos fundamentos: SO-CI-DI-VA-PLU (soberania, cidadania, dignidade, valores sociais do trabalho e da livre iniciativa, pluralismo político). Objetivo começa com verbo; fundamento, não.'
      },
      fontes: [f('Constituição Federal, arts. 1º a 4º', U.cf)]
    },

    {
      id: 'dco-002',
      materia: 'direito-constitucional',
      assunto: 'Princípios fundamentais',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'policial'],
      enunciado: 'A busca da integração econômica, política, social e cultural dos povos da América Latina, visando à formação de uma comunidade latino-americana de nações, figura no texto constitucional entre os objetivos fundamentais da República Federativa do Brasil, ao lado da construção de uma sociedade livre, justa e solidária.',
      resposta: false,
      explicacao: {
        resumo: 'Errado. A integração latino-americana está no parágrafo único do art. 4º, que trata dos princípios das relações internacionais, e não no art. 3º (objetivos fundamentais).',
        detalhada: 'O item pega o candidato que decorou o conteúdo, mas não a localização. O **parágrafo único do art. 4º** dispõe que a República "buscará a integração econômica, política, social e cultural dos povos da América Latina, visando à formação de uma comunidade latino-americana de nações". O dispositivo está no artigo que disciplina as **relações internacionais**, porque trata da postura do Brasil diante de outros Estados.\n\nOs **objetivos fundamentais** (art. 3º) são quatro e voltados para dentro do País: construir uma sociedade livre, justa e solidária; garantir o desenvolvimento nacional; erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais; e promover o bem de todos, sem preconceitos de origem, raça, sexo, cor, idade e quaisquer outras formas de discriminação.\n\nEm prova no estilo CEBRASPE, a troca entre "fundamento", "objetivo" e "princípio das relações internacionais" é uma das pegadinhas mais frequentes do Título I. Um bom teste: o item fala da relação do Brasil com outros países? Se sim, o lugar é o art. 4º.',
        dica: 'Tudo o que envolve outros países (América Latina, asilo político, repúdio ao terrorismo, não intervenção) mora no art. 4º.'
      },
      fontes: [f('Constituição Federal, arts. 3º e 4º', U.cf)]
    },

    {
      id: 'dco-003',
      materia: 'direito-constitucional',
      assunto: 'Direitos e garantias fundamentais',
      tipo: 'multipla',
      estilo: 'FGV',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'policial', 'tribunais'],
      textoBase: 'Durante patrulhamento noturno, por volta das 23h, policiais militares ouvem gritos de socorro vindos de uma residência e, pela janela, veem um homem agredindo violentamente uma mulher. Sem mandado judicial e sem o consentimento do morador, os policiais arrombam a porta, entram no imóvel e prendem o agressor.',
      enunciado: 'Considerando a inviolabilidade do domicílio prevista na Constituição Federal, assinale a afirmativa correta.',
      alternativas: [
        'A entrada foi ilícita, pois, no período noturno, somente o consentimento do morador autoriza o ingresso na casa.',
        'A entrada foi lícita, pois em caso de flagrante delito é permitido penetrar na casa, a qualquer hora, sem determinação judicial.',
        'A entrada somente seria lícita se precedida de ordem escrita do delegado de polícia, autoridade competente para autorizar a medida em situações de urgência.',
        'A entrada foi ilícita, pois a determinação judicial é indispensável em qualquer hipótese de ingresso forçado na casa.',
        'A entrada foi lícita apenas porque se tratava de crime hediondo, única hipótese em que o flagrante autoriza o ingresso noturno.'
      ],
      resposta: 1,
      explicacao: {
        resumo: 'Art. 5º, XI: a casa pode ser penetrada sem consentimento, a qualquer hora, em flagrante delito, desastre ou para prestar socorro; a ordem judicial só autoriza a entrada durante o dia.',
        detalhada: 'O **art. 5º, XI, da CF** estabelece que "a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de **flagrante delito ou desastre, ou para prestar socorro**, ou, **durante o dia, por determinação judicial**". Daí saem duas regras: (1) flagrante, desastre e socorro autorizam o ingresso **a qualquer hora**, de dia ou de noite, sem mandado; (2) a ordem judicial só pode ser cumprida **durante o dia**.\n\nNo caso, havia agressão em curso, ou seja, **flagrante delito** (art. 302, I, do CPP: quem está cometendo a infração), além da necessidade de prestar socorro à vítima. O ingresso noturno, sem mandado, foi legítimo. O STF, no **Tema 280 da repercussão geral (RE 603.616)**, fixou que a entrada forçada sem mandado é lícita, mesmo à noite, quando amparada em **fundadas razões**, justificadas a posteriori, de que dentro da casa ocorre situação de flagrante; do contrário, o agente responde nas esferas disciplinar, civil e penal, e os atos praticados são nulos.\n\nOutro ponto cobrado é a **reserva de jurisdição**: fora das hipóteses de urgência, só o juiz pode determinar o ingresso forçado. Delegado, CPI ou Ministério Público não expedem "mandado" de entrada em casa. Quanto ao conceito de "dia", a doutrina diverge (das 6h às 18h, ou da aurora ao crepúsculo), e a Lei de Abuso de Autoridade (Lei 13.869/2019, art. 22, § 1º, III) tipifica o cumprimento de mandado de busca domiciliar após as 21h ou antes das 5h.',
        alternativas: [
          'Errada. O consentimento não é a única via à noite: flagrante, desastre e socorro autorizam o ingresso a qualquer hora.',
          'Correta. É a literalidade do art. 5º, XI, aplicada a um flagrante evidente.',
          'Errada. Há reserva de jurisdição: a autoridade policial não pode autorizar o ingresso forçado em domicílio.',
          'Errada. A ordem judicial é dispensada em flagrante delito, desastre e socorro.',
          'Errada. A CF não restringe o flagrante a crimes hediondos; qualquer flagrante delito autoriza o ingresso.'
        ],
        dica: 'Mandado judicial: só de dia. Flagrante, desastre e socorro: a qualquer hora. A banca costuma inverter isso.'
      },
      fontes: [f('Constituição Federal, art. 5º, XI', U.cf), f('STF, Tema 280 da repercussão geral', U.stf)]
    },

    {
      id: 'dco-004',
      materia: 'direito-constitucional',
      assunto: 'Direitos e garantias fundamentais',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'tribunais', 'oab'],
      enunciado: 'Os tratados e convenções internacionais sobre direitos humanos aprovados, em cada Casa do Congresso Nacional, em dois turnos, por três quintos dos votos dos respectivos membros, equivalem às emendas constitucionais; já os tratados de direitos humanos incorporados sem esse rito possuem, segundo o entendimento do STF, status supralegal.',
      resposta: true,
      explicacao: {
        resumo: 'Certo. É o art. 5º, § 3º (incluído pela EC 45/2004), combinado com a tese da supralegalidade firmada pelo STF no RE 466.343.',
        detalhada: 'O **§ 3º do art. 5º**, incluído pela **EC 45/2004**, criou um rito especial: tratados e convenções internacionais sobre **direitos humanos** aprovados em cada Casa do Congresso, em **dois turnos**, por **três quintos** dos votos dos respectivos membros, serão **equivalentes às emendas constitucionais**. É o mesmo quórum exigido para aprovar uma PEC (art. 60, § 2º). O primeiro tratado aprovado assim foi a Convenção sobre os Direitos das Pessoas com Deficiência.\n\nE os tratados de direitos humanos que **não** passaram por esse rito, como o Pacto de São José da Costa Rica, incorporado antes de 2004? No **RE 466.343**, o STF decidiu que eles têm **status supralegal**: ficam abaixo da Constituição, mas acima das leis ordinárias, paralisando a eficácia da legislação infraconstitucional com eles conflitante. Foi esse raciocínio que levou à **Súmula Vinculante 25**: "É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito".\n\nResumo da hierarquia: tratado de direitos humanos com o rito do § 3º = emenda constitucional; tratado de direitos humanos sem o rito = norma supralegal; tratado que não versa sobre direitos humanos = lei ordinária. A prisão civil do devedor de alimentos continua possível (art. 5º, LXVII).',
        dica: 'Quórum de 3/5, em dois turnos, em cada Casa. A banca troca por "maioria absoluta" ou "turno único". E o rito só vale para tratados de direitos humanos.'
      },
      fontes: [f('Constituição Federal, art. 5º, § 3º', U.cf), f('STF, RE 466.343 e Súmula Vinculante 25', U.stf)]
    },

    {
      id: 'dco-005',
      materia: 'direito-constitucional',
      assunto: 'Direitos e garantias fundamentais',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['policial', 'concursos-gerais'],
      enunciado: 'Conforme a Constituição Federal, a prática da tortura constitui crime inafiançável e imprescritível, sujeito à pena de reclusão.',
      resposta: false,
      explicacao: {
        resumo: 'Errado. A tortura é inafiançável e insuscetível de graça ou anistia (art. 5º, XLIII), mas não é imprescritível. Imprescritíveis são apenas o racismo e a ação de grupos armados contra a ordem constitucional e o Estado Democrático.',
        detalhada: 'A CF traz três incisos que precisam ser lidos lado a lado. O **art. 5º, XLII**, diz que a prática do **racismo** constitui crime **inafiançável e imprescritível**, sujeito à pena de reclusão. O **XLIV** dá o mesmo tratamento (**inafiançável e imprescritível**) à **ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático**. Já o **XLIII** considera **inafiançáveis e insuscetíveis de graça ou anistia** a **tortura**, o **tráfico** ilícito de entorpecentes e drogas afins, o **terrorismo** e os crimes definidos como **hediondos**.\n\nLogo, a tortura **prescreve** normalmente, segundo as regras do Código Penal. O que a Constituição lhe nega é a fiança e os benefícios da graça e da anistia. O constituinte reservou a imprescritibilidade às condutas que atacam a igualdade entre as pessoas (racismo) e a própria democracia (grupos armados).\n\nPara memorizar: **3T + H** (Tortura, Tráfico, Terrorismo e Hediondos) = inafiançáveis e sem graça ou anistia; **RAÇÃO** (RAcismo + AÇÃO de grupos armados) = inafiançáveis e imprescritíveis. Vale lembrar que o STF, no HC 154.248, equiparou a injúria racial ao racismo para fins de imprescritibilidade, e a Lei 14.532/2023 passou a tipificá-la na Lei 7.716/1989.',
        dica: 'Imprescritíveis são só dois: racismo e ação de grupos armados. Se o item disser que tortura, tráfico ou terrorismo são imprescritíveis, está errado.'
      },
      fontes: [f('Constituição Federal, art. 5º, XLII a XLIV', U.cf)]
    },

    {
      id: 'dco-006',
      materia: 'direito-constitucional',
      assunto: 'Remédios constitucionais',
      tipo: 'multipla',
      estilo: 'OAB/FGV',
      dificuldade: 2,
      objetivos: ['oab', 'tribunais'],
      textoBase: 'A Associação dos Taxistas do Município Alfa, legalmente constituída e em funcionamento há cinco anos, pretende impetrar mandado de segurança coletivo contra ato do Secretário Municipal de Transportes que, sem amparo legal, cassou as autorizações de parte de seus associados. Não houve assembleia nem autorização individual dos associados atingidos.',
      enunciado: 'Sobre a legitimidade da associação, assinale a afirmativa correta.',
      alternativas: [
        'A associação pode impetrar o mandado de segurança coletivo, independentemente de autorização dos associados, ainda que a pretensão interesse apenas a uma parte deles.',
        'A associação não pode impetrar o mandado de segurança coletivo, pois a Constituição reserva essa ação aos partidos políticos com representação no Congresso Nacional.',
        'A associação pode impetrar o mandado de segurança coletivo, mas depende de autorização expressa e individual de cada associado beneficiado.',
        'A associação não pode impetrar o mandado de segurança coletivo, porque o direito defendido não abrange a totalidade de seus associados.'
      ],
      resposta: 0,
      explicacao: {
        resumo: 'No MS coletivo a associação atua como substituta processual: não precisa de autorização dos associados (Súmula 629 do STF) e pode defender interesse de apenas parte deles (Súmula 630).',
        detalhada: 'Segundo o **art. 5º, LXX, da CF**, o mandado de segurança coletivo pode ser impetrado por: (a) **partido político com representação no Congresso Nacional**; e (b) **organização sindical, entidade de classe ou associação legalmente constituída e em funcionamento há pelo menos um ano**, em defesa dos interesses de seus membros ou associados. A associação do caso cumpre o requisito temporal com folga.\n\nNo MS coletivo, a entidade age como **substituta processual**: defende, em nome próprio, direito alheio. Por isso o STF editou a **Súmula 629** ("A impetração de mandado de segurança coletivo por entidade de classe em favor dos associados independe da autorização destes") e a **Súmula 630** ("A entidade de classe tem legitimação para o mandado de segurança ainda quando a pretensão veiculada interesse apenas a uma parte da respectiva categoria"). A Lei 12.016/2009 (art. 21) segue a mesma lógica.\n\nA pegadinha preferida é misturar o MS coletivo com a **representação** do **art. 5º, XXI**: "as entidades associativas, **quando expressamente autorizadas**, têm legitimidade para representar seus filiados judicial ou extrajudicialmente". Nas ações coletivas comuns propostas por associação com base nesse inciso, o STF exige autorização expressa (RE 573.232). No mandado de segurança coletivo, não.',
        alternativas: [
          'Correta. Aplicam-se o art. 5º, LXX, b, e as Súmulas 629 e 630 do STF.',
          'Errada. Os partidos políticos são apenas um dos legitimados; sindicatos, entidades de classe e associações também podem impetrar.',
          'Errada. A exigência de autorização expressa é do art. 5º, XXI (representação), não do MS coletivo, em que há substituição processual.',
          'Errada. A Súmula 630 admite a impetração mesmo quando a pretensão interessa apenas a parte da categoria.'
        ],
        dica: 'MS coletivo: substituição processual, sem autorização. Art. 5º, XXI: representação, com autorização expressa. O requisito de "um ano de funcionamento" vem escrito junto da associação.'
      },
      fontes: [f('Constituição Federal, art. 5º, LXX', U.cf), f('STF, Súmulas 629 e 630', U.stf)]
    },

    {
      id: 'dco-007',
      materia: 'direito-constitucional',
      assunto: 'Remédios constitucionais',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 1,
      objetivos: ['concursos-gerais', 'policial'],
      enunciado: 'São gratuitas as ações de habeas corpus e de habeas data e, na forma da lei, os atos necessários ao exercício da cidadania.',
      resposta: true,
      explicacao: {
        resumo: 'Certo. É a redação do art. 5º, LXXVII, da CF. Mandado de segurança, mandado de injunção e ação popular não estão nessa regra de gratuidade.',
        detalhada: 'O **art. 5º, LXXVII**, garante a gratuidade de duas ações constitucionais, **habeas corpus** e **habeas data**, e, na forma da lei, dos atos necessários ao exercício da cidadania. A lógica é proteger os bens mais sensíveis, a **liberdade de locomoção** (HC) e o **acesso e a retificação de informações pessoais** (HD), afastando qualquer barreira financeira.\n\nCuidado com a **ação popular**: ela não é "gratuita" em sentido amplo. O art. 5º, LXXIII, diz que o autor fica isento de custas judiciais e do ônus da sucumbência **salvo comprovada má-fé**. Já o **mandado de segurança** e o **mandado de injunção** seguem as regras comuns de custas.\n\nAproveite para fixar o alcance do habeas data: ele serve para informações **relativas à pessoa do impetrante** constantes de registros ou bancos de dados de entidades governamentais ou de caráter público. Para obter informação de interesse coletivo ou geral, o caminho é o direito de informação (art. 5º, XXXIII) e, se ele for negado, o mandado de segurança.',
        dica: 'Gratuidade constitucional plena: só HC e HD. Na ação popular, a isenção depende da boa-fé do autor.'
      },
      fontes: [f('Constituição Federal, art. 5º, LXXII, LXXIII e LXXVII', U.cf)]
    },

    {
      id: 'dco-008',
      materia: 'direito-constitucional',
      assunto: 'Remédios constitucionais',
      tipo: 'multipla',
      estilo: 'Vunesp',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'tribunais'],
      enunciado: 'A respeito da ação popular, assinale a alternativa correta.',
      alternativas: [
        'Pessoa jurídica de direito privado sem fins lucrativos tem legitimidade para propor ação popular em defesa do meio ambiente.',
        'O Ministério Público é o único legitimado para propor ação popular que vise anular ato lesivo à moralidade administrativa.',
        'A ação popular destina-se a proteger direito líquido e certo não amparado por habeas corpus ou habeas data.',
        'Qualquer cidadão é parte legítima para propô-la, ficando o autor, salvo comprovada má-fé, isento de custas judiciais e do ônus da sucumbência.',
        'Qualquer estrangeiro residente no País pode propor ação popular, independentemente de alistamento eleitoral, já que a legitimidade decorre da residência.'
      ],
      resposta: 3,
      explicacao: {
        resumo: 'Art. 5º, LXXIII: a legitimidade é do cidadão (eleitor), e o autor só arca com custas e sucumbência se agir com comprovada má-fé.',
        detalhada: 'Pelo **art. 5º, LXXIII**, "qualquer **cidadão** é parte legítima para propor ação popular que vise a anular ato lesivo ao patrimônio público ou de entidade de que o Estado participe, à **moralidade administrativa**, ao **meio ambiente** e ao **patrimônio histórico e cultural**, ficando o autor, **salvo comprovada má-fé**, isento de custas judiciais e do ônus da sucumbência".\n\n"Cidadão", aqui, tem sentido técnico: é o nacional no gozo dos direitos políticos. A Lei 4.717/1965 (art. 1º, § 3º) exige a prova da cidadania com o título de eleitor. Por isso **pessoa jurídica não pode propor ação popular (Súmula 365 do STF)**, e o estrangeiro, em regra, também não. A exceção lembrada pelas bancas é o **português equiparado** (art. 12, § 1º), que, havendo reciprocidade e estando no gozo de direitos políticos no Brasil, pode alistar-se e, portanto, ajuizar a ação.\n\nO Ministério Público **não** é autor da ação popular: ele acompanha o processo como fiscal da ordem jurídica e pode prosseguir com a ação se o autor desistir. Exemplo prático: um eleitor descobre que a prefeitura vendeu um terreno público por valor muito abaixo do de mercado; ele pode ajuizar ação popular para anular a venda, sem pagar custas, desde que não aja de má-fé.',
        alternativas: [
          'Errada. Súmula 365 do STF: pessoa jurídica não tem legitimidade para propor ação popular.',
          'Errada. A legitimidade é de qualquer cidadão; o MP atua como fiscal e pode assumir a ação se o autor desistir.',
          'Errada. Proteger direito líquido e certo não amparado por HC ou HD é a função do mandado de segurança (art. 5º, LXIX).',
          'Correta. Literalidade do art. 5º, LXXIII.',
          'Errada. Exige-se a condição de cidadão, comprovada pelo título de eleitor; residência não basta.'
        ],
        dica: 'Ação popular = cidadão-eleitor. PJ não (Súmula 365); MP não é autor. A isenção de custas cai se houver má-fé.'
      },
      fontes: [f('Constituição Federal, art. 5º, LXXIII', U.cf), f('STF, Súmula 365', U.stf)]
    },

    {
      id: 'dco-009',
      materia: 'direito-constitucional',
      assunto: 'Organização do Estado',
      tipo: 'multipla',
      estilo: 'FCC',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'tribunais'],
      enunciado: 'De acordo com a Constituição Federal, compete à União, aos Estados e ao Distrito Federal legislar concorrentemente sobre direito',
      alternativas: ['penal.', 'do trabalho.', 'eleitoral.', 'agrário.', 'penitenciário.'],
      resposta: 4,
      explicacao: {
        resumo: 'Direito penitenciário é competência legislativa concorrente (art. 24, I). Penal, trabalho, eleitoral e agrário são competência privativa da União (art. 22, I).',
        detalhada: 'O **art. 22, I**, reserva **privativamente à União** legislar sobre direito civil, comercial, penal, processual, eleitoral, agrário, marítimo, aeronáutico, espacial e do trabalho. Já o **art. 24, I**, coloca na **competência concorrente** da União, dos Estados e do DF o direito tributário, financeiro, **penitenciário**, econômico e urbanístico.\n\nNa competência concorrente, a União edita **normas gerais** e os Estados as suplementam (art. 24, §§ 1º e 2º). Se não houver lei federal sobre normas gerais, os Estados exercem a competência legislativa plena, e a superveniência de lei federal **suspende** a eficácia da lei estadual no que lhe for contrário (§§ 3º e 4º). Note: suspende, não revoga.\n\nObserve a "pegadinha da família": direito **penal** é privativo da União, mas direito **penitenciário** é concorrente. Por isso os Estados podem editar normas sobre a organização de seus estabelecimentos prisionais, respeitadas as normas gerais da Lei de Execução Penal. Outra atenção: os **Municípios** não aparecem no caput do art. 24; eles suplementam a legislação federal e estadual no que couber, com base no art. 30, II.',
        alternativas: [
          'Errada. Direito penal é competência privativa da União (art. 22, I).',
          'Errada. Direito do trabalho é competência privativa da União (art. 22, I).',
          'Errada. Direito eleitoral é competência privativa da União (art. 22, I).',
          'Errada. Direito agrário é competência privativa da União (art. 22, I).',
          'Correta. Direito penitenciário está no art. 24, I (competência concorrente).'
        ],
        dica: 'Mnemônicos clássicos: art. 22, I = CAPACETE PM (Civil, Agrário, Penal, Aeronáutico, Comercial, Eleitoral, Trabalho, Espacial, Processual, Marítimo). Art. 24, I = PUTEF (Penitenciário, Urbanístico, Tributário, Econômico, Financeiro).'
      },
      fontes: [f('Constituição Federal, arts. 22 e 24', U.cf)]
    },

    {
      id: 'dco-010',
      materia: 'direito-constitucional',
      assunto: 'Organização do Estado',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'tribunais'],
      enunciado: 'Os Territórios Federais integram a União, e sua criação, transformação em Estado ou reintegração ao Estado de origem serão reguladas em lei complementar.',
      resposta: true,
      explicacao: {
        resumo: 'Certo. É o texto do art. 18, § 2º, da CF. Territórios não são entes federativos autônomos: são descentralizações administrativas da União.',
        detalhada: 'Pelo **art. 18, caput**, a organização político-administrativa do Brasil compreende **União, Estados, Distrito Federal e Municípios**, todos autônomos. Os **Territórios Federais** não estão nessa lista: o **§ 2º** diz que eles **integram a União** (são autarquias territoriais, sem autonomia política), e que sua criação, transformação em Estado ou reintegração ao Estado de origem serão reguladas em **lei complementar**.\n\nHoje não existem Territórios. A Constituição de 1988 transformou Roraima e Amapá em Estados e extinguiu Fernando de Noronha, reincorporando sua área a Pernambuco (arts. 14 e 15 do ADCT). Mas eles podem voltar a ser criados, e a CF já prevê regras: nos Territórios com mais de cem mil habitantes haverá órgãos judiciários de primeira e segunda instância, membros do Ministério Público e defensores públicos federais (art. 33, § 3º), e cada Território elegerá quatro Deputados Federais (art. 45, § 2º), mas nenhum Senador.\n\nCompare com os demais casos do art. 18: **Estados** podem incorporar-se entre si, subdividir-se ou desmembrar-se mediante **plebiscito** da população diretamente interessada e **lei complementar** do Congresso (§ 3º); **Municípios** são criados por **lei estadual**, dentro do período determinado por lei complementar federal, após **Estudos de Viabilidade Municipal** e **plebiscito** (§ 4º).',
        dica: 'Território: lei complementar federal. Estado novo: plebiscito + lei complementar. Município novo: lei estadual + plebiscito + estudo de viabilidade + período definido em LC federal.'
      },
      fontes: [f('Constituição Federal, art. 18', U.cf)]
    },

    {
      id: 'dco-011',
      materia: 'direito-constitucional',
      assunto: 'Poder Legislativo',
      tipo: 'multipla',
      estilo: 'FGV',
      dificuldade: 3,
      objetivos: ['concursos-gerais', 'tribunais', 'oab'],
      textoBase: 'Um Deputado Federal, regularmente diplomado e no exercício do mandato, é preso em flagrante pela prática de crime inafiançável.',
      enunciado: 'Diante da situação hipotética, assinale a afirmativa correta à luz do art. 53 da Constituição Federal.',
      alternativas: [
        'Os autos devem ser remetidos dentro de vinte e quatro horas à Câmara dos Deputados, que, pelo voto da maioria de seus membros, resolverá sobre a prisão.',
        'A prisão é vedada em qualquer hipótese, pois a imunidade formal protege o parlamentar contra toda e qualquer prisão desde a posse.',
        'Os autos devem ser remetidos à Câmara dos Deputados, que somente poderá relaxar a prisão pelo voto de dois terços de seus membros.',
        'A imunidade formal impede apenas a prisão por crime afiançável; sendo o crime inafiançável, a prisão é mantida independentemente de qualquer deliberação da Casa.',
        'Recebida a denúncia, a Câmara poderá sustar o andamento da ação penal, ainda que o crime tenha sido praticado antes da diplomação.'
      ],
      resposta: 0,
      explicacao: {
        resumo: 'Art. 53, § 2º: desde a diplomação, o parlamentar só pode ser preso em flagrante de crime inafiançável, e a Casa decide sobre a prisão, em 24 horas, pelo voto da maioria de seus membros.',
        detalhada: 'O **art. 53, § 2º**, dispõe: "Desde a expedição do diploma, os membros do Congresso Nacional não poderão ser presos, salvo em flagrante de crime inafiançável. Nesse caso, os autos serão remetidos dentro de **vinte e quatro horas** à Casa respectiva, para que, pelo voto da **maioria de seus membros**, resolva sobre a prisão". É a chamada **imunidade formal quanto à prisão**.\n\nTrês detalhes caem sempre. Primeiro, o marco inicial é a **expedição do diploma**, não a posse. Segundo, o quórum é de **maioria absoluta** ("maioria de seus membros"). Terceiro, a imunidade quanto ao **processo** (§ 3º) só permite à Casa **sustar a ação penal** por crime ocorrido **após a diplomação**, por iniciativa de partido político nela representado e pelo voto da maioria de seus membros; o pedido deve ser apreciado em até 45 dias (§ 4º), e a sustação suspende a prescrição enquanto durar o mandato (§ 5º).\n\nDe onde vêm os "dois terços" das alternativas erradas? Do **§ 8º**: as imunidades subsistem durante o **estado de sítio** e só podem ser suspensas pelo voto de **dois terços** dos membros da Casa, nos casos de atos praticados fora do recinto do Congresso que sejam incompatíveis com a execução da medida. Não confunda as duas regras.',
        alternativas: [
          'Correta. Literalidade do art. 53, § 2º.',
          'Errada. A imunidade começa com a diplomação e admite a prisão em flagrante de crime inafiançável.',
          'Errada. O quórum é a maioria dos membros da Casa (maioria absoluta), não dois terços.',
          'Errada. Mesmo no flagrante de crime inafiançável, a Casa delibera sobre a prisão em 24 horas.',
          'Errada. A sustação só alcança crimes ocorridos após a diplomação (art. 53, § 3º).'
        ],
        dica: 'Diploma (não posse), 24 horas, maioria absoluta. Dois terços só aparecem no estado de sítio (§ 8º).'
      },
      fontes: [f('Constituição Federal, art. 53', U.cf)]
    },

    {
      id: 'dco-012',
      materia: 'direito-constitucional',
      assunto: 'Poder Legislativo',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'policial', 'tribunais'],
      enunciado: 'Como as comissões parlamentares de inquérito têm poderes de investigação próprios das autoridades judiciais, elas podem determinar, por decisão fundamentada, a interceptação das comunicações telefônicas de investigado.',
      resposta: false,
      explicacao: {
        resumo: 'Errado. A interceptação telefônica está sob reserva de jurisdição (art. 5º, XII): só o juiz pode determiná-la. A CPI pode quebrar o sigilo dos dados telefônicos (registros de chamadas), mas não ouvir as conversas.',
        detalhada: 'O **art. 58, § 3º**, dá às CPIs "poderes de investigação próprios das autoridades judiciais". Elas são criadas pela Câmara e pelo Senado, em conjunto ou separadamente, mediante requerimento de **um terço** de seus membros, para apuração de **fato determinado** e por **prazo certo**, e suas conclusões, se for o caso, são encaminhadas ao Ministério Público para que promova a responsabilidade civil ou criminal dos infratores.\n\nEsses poderes, porém, não alcançam as matérias sob **reserva de jurisdição**, isto é, as que a própria Constituição entregou exclusivamente ao juiz. O STF consolidou que a CPI **não pode**: determinar **interceptação telefônica** (o art. 5º, XII, exige ordem judicial, para fins de investigação criminal ou instrução processual penal), determinar **busca e apreensão domiciliar** (art. 5º, XI) e decretar **prisão**, salvo em flagrante.\n\nPor outro lado, a CPI **pode**, por decisão fundamentada e com base em fatos concretos, quebrar os sigilos **bancário, fiscal e de dados telefônicos** (a relação de ligações, não o conteúdo delas), ouvir testemunhas sob compromisso e requisitar documentos. A diferença entre "dados telefônicos" e "interceptação" é a pegadinha central do tema.',
        dica: 'CPI quebra sigilo de dados (bancário, fiscal, registros telefônicos), mas não intercepta, não faz busca domiciliar e não prende (salvo em flagrante).'
      },
      fontes: [f('Constituição Federal, arts. 5º, XII, e 58, § 3º', U.cf), f('Supremo Tribunal Federal', U.stf)]
    },

    {
      id: 'dco-013',
      materia: 'direito-constitucional',
      assunto: 'Administração Pública na Constituição',
      tipo: 'multipla',
      estilo: 'FCC',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'tribunais'],
      enunciado: 'Nos termos do art. 37, XVI, da Constituição Federal, havendo compatibilidade de horários e observado o teto remuneratório, é permitida a acumulação remunerada de',
      alternativas: [
        'dois cargos de natureza técnica ou científica.',
        'um cargo de professor com outro técnico ou científico.',
        'três cargos de professor, desde que em entes federativos distintos.',
        'um cargo privativo de profissional de saúde com um cargo administrativo de nível médio.',
        'um cargo de juiz com um cargo técnico em órgão do Poder Executivo.'
      ],
      resposta: 1,
      explicacao: {
        resumo: 'O art. 37, XVI, b, permite acumular um cargo de professor com outro técnico ou científico, desde que haja compatibilidade de horários.',
        detalhada: 'A regra é a **proibição** de acumular cargos públicos. O **art. 37, XVI**, só admite a acumulação remunerada, quando houver **compatibilidade de horários** e respeitado o teto do inciso XI, nestes casos: (a) **dois cargos de professor**; (b) **um cargo de professor com outro técnico ou científico**; (c) **dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas**. O inciso XVII estende a proibição a empregos e funções em autarquias, fundações, empresas públicas, sociedades de economia mista, suas subsidiárias e sociedades controladas, direta ou indiretamente, pelo poder público.\n\nNote que as exceções são sempre **de dois**, nunca de três. E, fora da área da saúde (alínea c), o cargo técnico ou científico só se acumula **com o de professor**, não com outro técnico. Cargo "técnico ou científico" é o que exige conhecimento específico, de nível superior ou de formação técnica; não basta o nome "técnico" num cargo de atribuições burocráticas.\n\nHá regras próprias para algumas carreiras: o **magistrado** só pode exercer, além do cargo, **uma função de magistério** (art. 95, parágrafo único, I), e o mesmo vale para os membros do Ministério Público (art. 128, § 5º, II, d). Exemplo: um engenheiro de uma agência reguladora pode lecionar numa universidade estadual, se os horários forem compatíveis; mas não pode ocupar, ao mesmo tempo, outro cargo de engenheiro.',
        alternativas: [
          'Errada. Dois cargos técnicos ou científicos só podem ser acumulados se ambos forem privativos de profissionais de saúde com profissão regulamentada (alínea c). Fora disso, o cargo técnico ou científico só se acumula com um cargo de professor (alínea b).',
          'Correta. Hipótese do art. 37, XVI, b.',
          'Errada. As exceções admitem no máximo dois cargos; o ente federativo é irrelevante.',
          'Errada. O cargo administrativo de nível médio não se enquadra em nenhuma hipótese do inciso XVI. O cargo privativo de profissional de saúde se acumula com outro cargo ou emprego privativo de profissional de saúde (alínea c) ou, se for técnico ou científico, com um cargo de professor (alínea b).',
          'Errada. O juiz só pode acumular uma função de magistério (art. 95, parágrafo único, I).'
        ],
        dica: 'Acumulação: sempre dois, nunca três; e o "técnico ou científico" anda de mãos dadas com o professor (a exceção são dois cargos privativos de saúde, alínea c).'
      },
      fontes: [f('Constituição Federal, arts. 37, XVI e XVII, e 95', U.cf)]
    },

    {
      id: 'dco-014',
      materia: 'direito-constitucional',
      assunto: 'Administração Pública na Constituição',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'tribunais', 'policial'],
      enunciado: 'As pessoas jurídicas de direito privado prestadoras de serviços públicos respondem objetivamente pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa.',
      resposta: true,
      explicacao: {
        resumo: 'Certo. É o art. 37, § 6º: responsabilidade objetiva da pessoa jurídica perante a vítima e responsabilidade subjetiva do agente, apurada em ação regressiva.',
        detalhada: 'O **art. 37, § 6º**, estabelece que "as pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa". É a adoção da **teoria do risco administrativo**: a vítima precisa provar apenas a conduta, o dano e o nexo causal, sem discutir culpa.\n\nSão duas relações diferentes. Entre a **vítima e a pessoa jurídica**, a responsabilidade é **objetiva**. Entre a **pessoa jurídica e o agente**, ela é **subjetiva**: o regresso depende de dolo ou culpa. O STF, no **Tema 940**, firmou a tese da **dupla garantia**: a ação deve ser ajuizada contra o Estado ou a prestadora de serviço público, sendo o agente parte ilegítima para responder diretamente à vítima.\n\nO STF também decidiu (RE 591.874) que a responsabilidade objetiva da concessionária alcança **usuários e não usuários** do serviço. Exemplo: um ônibus de empresa concessionária atropela um ciclista que não era passageiro; a empresa responde objetivamente. E, como se trata de risco administrativo (e não de risco integral), admitem-se excludentes, como a culpa exclusiva da vítima, o caso fortuito e a força maior.',
        dica: 'Objetiva para a vítima, subjetiva no regresso. Empresa estatal que explora atividade econômica não entra no § 6º: responde pelas regras do direito privado.'
      },
      fontes: [f('Constituição Federal, art. 37, § 6º', U.cf), f('STF, Tema 940 da repercussão geral', U.stf)]
    },

    /* ===================== DIREITO ADMINISTRATIVO ===================== */

    {
      id: 'dad-001',
      materia: 'direito-administrativo',
      assunto: 'Princípios da Administração',
      tipo: 'multipla',
      estilo: 'FCC',
      dificuldade: 1,
      objetivos: ['concursos-gerais', 'tribunais'],
      enunciado: 'A Constituição Federal determina que a publicidade dos atos, programas, obras, serviços e campanhas dos órgãos públicos deverá ter caráter educativo, informativo ou de orientação social, dela não podendo constar nomes, símbolos ou imagens que caracterizem promoção pessoal de autoridades ou servidores públicos. Segundo a doutrina majoritária, essa vedação é desdobramento direto do princípio da',
      alternativas: ['eficiência.', 'razoabilidade.', 'impessoalidade.', 'continuidade do serviço público.', 'segurança jurídica.'],
      resposta: 2,
      explicacao: {
        resumo: 'O art. 37, § 1º, concretiza a impessoalidade: os atos são da Administração, não do agente que os pratica, e por isso não podem servir à promoção pessoal.',
        detalhada: 'O **art. 37, § 1º, da CF** proíbe que a publicidade oficial contenha nomes, símbolos ou imagens que caracterizem **promoção pessoal** de autoridades ou servidores. A doutrina vê aí uma das faces do **princípio da impessoalidade**: os atos administrativos são imputados ao **órgão ou entidade**, e não ao agente que os pratica. A obra é "da Prefeitura", não "do Prefeito".\n\nA impessoalidade tem outras faces cobradas em prova: (1) **finalidade**: a Administração deve buscar o interesse público, sem favorecer nem perseguir pessoas; (2) **isonomia**: tratamento igual a quem está na mesma situação, como no concurso público e na licitação; (3) **vedação ao nepotismo**, sintetizada na Súmula Vinculante 13.\n\nExemplo prático: uma placa de obra pública com a foto do governador e o slogan pessoal da campanha dele viola o § 1º do art. 37. O mesmo vale para o uso, na publicidade institucional, de cores e símbolos que identifiquem a gestão com o partido ou com o próprio governante. Nesses casos, também se pode invocar a moralidade, mas, quando a banca pergunta pelo desdobramento "direto" da vedação à promoção pessoal, espera a impessoalidade.',
        alternativas: [
          'Errada. A eficiência (EC 19/1998) relaciona-se a resultados, qualidade e economicidade, não à promoção pessoal.',
          'Errada. A razoabilidade trata da adequação e da coerência das decisões administrativas.',
          'Correta. A vedação à promoção pessoal é a face da impessoalidade segundo a qual o ato pertence à Administração, não ao agente.',
          'Errada. A continuidade diz respeito à prestação ininterrupta dos serviços públicos.',
          'Errada. A segurança jurídica protege a estabilidade das relações e a confiança legítima.'
        ],
        dica: 'Promoção pessoal na publicidade oficial = impessoalidade. É o enquadramento clássico, mesmo quando a conduta também ofende a moralidade.'
      },
      fontes: [f('Constituição Federal, art. 37, caput e § 1º', U.cf)]
    },

    {
      id: 'dad-002',
      materia: 'direito-administrativo',
      assunto: 'Princípios da Administração',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 1,
      objetivos: ['concursos-gerais', 'tribunais', 'policial'],
      enunciado: 'O princípio da eficiência não constava da redação original do caput do art. 37 da Constituição Federal, tendo sido nele inserido pela reforma administrativa promovida pela Emenda Constitucional n.º 19/1998.',
      resposta: true,
      explicacao: {
        resumo: 'Certo. O caput original trazia legalidade, impessoalidade, moralidade e publicidade; a eficiência veio com a EC 19/1998.',
        detalhada: 'Em 1988, o caput do **art. 37** elencava quatro princípios expressos: legalidade, impessoalidade, moralidade e publicidade. A **EC 19/1998**, conhecida como **reforma administrativa**, acrescentou a **eficiência**, completando o famoso **LIMPE**.\n\nA eficiência impõe à Administração o dever de agir com presteza, perfeição e rendimento funcional, buscando os melhores resultados com o menor custo. A mesma EC 19 trouxe instrumentos que materializam esse princípio: a **avaliação especial de desempenho** como condição para a aquisição da estabilidade (art. 41, § 4º), a possibilidade de **perda do cargo** por insuficiência de desempenho, na forma de lei complementar (art. 41, § 1º, III), e a ampliação da autonomia de órgãos e entidades mediante contrato que fixe metas de desempenho (art. 37, § 8º).\n\nCuidado: eficiência **não** autoriza agir fora da lei. Os princípios convivem, e uma solução "mais eficiente" que viole a legalidade continua inválida. A Lei 9.784/1999 (art. 2º) também menciona a eficiência entre os princípios do processo administrativo federal.',
        dica: 'A EC 19/1998 é a "emenda da eficiência". Se o item disser que a eficiência é originária de 1988, está errado.'
      },
      fontes: [f('Constituição Federal, arts. 37 e 41', U.cf)]
    },

    {
      id: 'dad-003',
      materia: 'direito-administrativo',
      assunto: 'Princípios da Administração',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'tribunais', 'oab'],
      enunciado: 'Conforme a Súmula Vinculante 13 do STF, viola a Constituição Federal a nomeação, para cargo em comissão, de primo da autoridade nomeante.',
      resposta: false,
      explicacao: {
        resumo: 'Errado. A SV 13 alcança cônjuge, companheiro e parentes em linha reta, colateral ou por afinidade até o terceiro grau, inclusive. Primo é parente colateral de quarto grau.',
        detalhada: 'A **Súmula Vinculante 13** proíbe a nomeação de "cônjuge, companheiro ou parente em linha reta, colateral ou por afinidade, **até o terceiro grau, inclusive**, da autoridade nomeante ou de servidor da mesma pessoa jurídica investido em cargo de direção, chefia ou assessoramento", para cargo em comissão, de confiança ou função gratificada, em qualquer dos Poderes e esferas, compreendido o **ajuste mediante designações recíprocas** (o chamado nepotismo cruzado).\n\nContagem de graus na linha colateral: sobe-se até o ancestral comum e desce-se até o parente, contando cada geração. Irmão = 2º grau; tio e sobrinho = 3º grau; **primo = 4º grau**. Assim, o primo fica **fora** do alcance da súmula. Na linha reta: pai e filho (1º), avô e neto (2º), bisavô e bisneto (3º). Por afinidade: sogro e genro (1º), cunhado (2º).\n\nIsso não significa que toda nomeação de primo seja automaticamente válida: se houver desvio de finalidade, fraude ou falta de qualificação, o ato pode ser questionado com base na moralidade e na impessoalidade. Mas a vedação objetiva da SV 13 para no terceiro grau.',
        dica: 'Até o 3º grau, inclusive: irmão, tio, sobrinho e cunhado entram; primo (4º grau) não.'
      },
      fontes: [f('STF, Súmula Vinculante 13', U.stf), f('Constituição Federal, art. 37', U.cf)]
    },

    {
      id: 'dad-004',
      materia: 'direito-administrativo',
      assunto: 'Atos administrativos',
      tipo: 'multipla',
      estilo: 'FGV',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'tribunais'],
      enunciado: 'Acerca dos atributos do ato administrativo, assinale a afirmativa correta.',
      alternativas: [
        'A presunção de legitimidade é relativa, admitindo prova em contrário, e faz recair sobre quem alega a ilegalidade o ônus de demonstrá-la.',
        'A imperatividade está presente em todos os atos administrativos, inclusive nos atos enunciativos, como certidões e atestados.',
        'A autoexecutoriedade permite que a Administração cobre multa de trânsito não paga diretamente do patrimônio do infrator, sem recorrer ao Poder Judiciário.',
        'A presunção de legitimidade é absoluta, de modo que o ato administrativo não pode ser invalidado pelo Poder Judiciário.',
        'A tipicidade autoriza a Administração a praticar atos inominados, não previstos em lei, sempre que houver interesse público.'
      ],
      resposta: 0,
      explicacao: {
        resumo: 'A presunção de legitimidade e veracidade é juris tantum: o ato vale até prova em contrário, e o ônus dessa prova recai sobre quem o impugna.',
        detalhada: 'A doutrina aponta quatro atributos (mnemônico **PATI**): **P**resunção de legitimidade e veracidade, **A**utoexecutoriedade, **T**ipicidade e **I**mperatividade. A **presunção de legitimidade** decorre da submissão da Administração à lei: presume-se que o ato foi praticado conforme o direito e que os fatos nele narrados são verdadeiros. Essa presunção é **relativa (juris tantum)**: pode ser afastada por prova em contrário, e o **ônus** de produzi-la é de quem alega o vício.\n\nOs demais atributos **não estão em todos os atos**. A **imperatividade** (impor obrigações unilateralmente) não existe nos atos **enunciativos** (certidões, atestados, pareceres) nem nos **negociais** (licenças, autorizações, permissões), porque estes apenas declaram algo ou atendem a pedido do particular. A **autoexecutoriedade** (executar o ato sem ordem judicial) depende de previsão legal ou de situação de urgência: a Administração pode aplicar a multa, mas a **cobrança forçada** de multa não paga exige **execução fiscal** no Judiciário.\n\nA **tipicidade**, por fim, significa que o ato deve corresponder a figuras **previamente definidas em lei** aptas a produzir determinados resultados. É uma garantia do particular contra atos inominados e um desdobramento da legalidade. Exemplo prático: um auto de infração ambiental presume-se legítimo; se a empresa autuada discordar, cabe a ela provar que os fatos não ocorreram como descritos.',
        alternativas: [
          'Correta. A presunção é juris tantum e transfere o ônus da prova a quem impugna o ato.',
          'Errada. Atos enunciativos e negociais não têm imperatividade.',
          'Errada. A aplicação da multa é imperativa, mas a cobrança forçada exige execução fiscal.',
          'Errada. A presunção é relativa; o Judiciário pode anular ato ilegal.',
          'Errada. A tipicidade proíbe atos inominados: o ato deve corresponder a figura prevista em lei.'
        ],
        dica: 'Só a presunção de legitimidade está em todos os atos. Se o item disser que "todos os atos são imperativos" ou "autoexecutórios", desconfie.'
      },
      fontes: [f('Lei 9.784/1999 (processo administrativo federal)', U.l9784)]
    },

    {
      id: 'dad-005',
      materia: 'direito-administrativo',
      assunto: 'Atos administrativos',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'tribunais'],
      enunciado: 'Com fundamento no poder de autotutela, a Administração Pública federal pode anular, a qualquer tempo, ato administrativo ilegal do qual decorram efeitos favoráveis a destinatário de boa-fé.',
      resposta: false,
      explicacao: {
        resumo: 'Errado. A autotutela permite anular atos ilegais (Súmula 473 do STF), mas, para atos favoráveis ao destinatário de boa-fé, o direito de anular decai em cinco anos (art. 54 da Lei 9.784/1999).',
        detalhada: 'A **autotutela** é o poder-dever de a Administração rever seus próprios atos, sem precisar recorrer ao Judiciário. A **Súmula 473 do STF** resume: a Administração pode **anular** seus atos quando eivados de vícios que os tornam ilegais, porque deles não se originam direitos; ou **revogá-los**, por motivo de conveniência ou oportunidade, respeitados os direitos adquiridos, e ressalvada, em todos os casos, a apreciação judicial. A Lei 9.784/1999 repete a ideia no art. 53.\n\nMas a autotutela tem limite temporal, em nome da **segurança jurídica**. O **art. 54 da Lei 9.784/1999** estabelece que "o direito da Administração de anular os atos administrativos de que decorram efeitos favoráveis para os destinatários **decai em cinco anos**, contados da data em que foram praticados, **salvo comprovada má-fé**". No caso de efeitos patrimoniais contínuos, o prazo conta da percepção do primeiro pagamento (§ 1º).\n\nExemplo: em 2019, um servidor de boa-fé passa a receber uma gratificação concedida por erro de interpretação da própria Administração. Em 2026, passados mais de cinco anos do primeiro pagamento, a Administração federal já não pode anular a concessão. Se houvesse má-fé do servidor (por exemplo, apresentação de documento falso), não haveria decadência.',
        dica: 'Anular: ato ilegal, efeitos retroativos (ex tunc), prazo de 5 anos se favorável ao destinatário de boa-fé. Revogar: ato válido, por conveniência e oportunidade, efeitos ex nunc, só pela própria Administração.'
      },
      fontes: [f('Lei 9.784/1999, arts. 53 a 55', U.l9784), f('STF, Súmula 473', U.stf)]
    },

    {
      id: 'dad-006',
      materia: 'direito-administrativo',
      assunto: 'Atos administrativos',
      tipo: 'multipla',
      estilo: 'FCC',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'tribunais', 'oab'],
      textoBase: 'O Secretário de Administração de determinado Estado exonerou servidor ocupante de cargo em comissão, declarando no ato que a exoneração se devia à extinção do cargo por falta de recursos orçamentários. Uma semana depois, nomeou outra pessoa para o mesmo cargo, que nunca deixou de existir.',
      enunciado: 'À luz da teoria dos atos administrativos, a exoneração é',
      alternativas: [
        'válida, pois a exoneração de cargo em comissão é ato livre, que dispensa motivação, o que torna irrelevante o motivo declarado.',
        'válida, pois eventual vício no motivo é sempre sanável e foi convalidado pela nomeação do novo ocupante.',
        'inválida apenas se ficar demonstrado que o Secretário não tinha competência para exonerar.',
        'inválida, pois, embora pudesse dispensar motivação, uma vez declarado, o motivo vincula a validade do ato à sua existência e veracidade.',
        'inválida, pois a exoneração de ocupante de cargo em comissão depende de prévio processo administrativo com contraditório e ampla defesa.'
      ],
      resposta: 3,
      explicacao: {
        resumo: 'Teoria dos motivos determinantes: o motivo declarado, ainda que a motivação fosse dispensável, passa a condicionar a validade do ato. Motivo falso ou inexistente gera nulidade.',
        detalhada: 'Os **elementos** do ato administrativo são cinco: **competência, finalidade, forma, motivo e objeto**. O **motivo** é a situação de fato e de direito que autoriza ou exige a prática do ato. Já a **motivação** é a exposição desse motivo no próprio ato.\n\nA exoneração de cargo em comissão é **ad nutum**: a CF (art. 37, II) diz que esses cargos são de livre nomeação e exoneração, e a autoridade nem precisa justificar a dispensa. Mas, pela **teoria dos motivos determinantes**, quando a Administração **declara** um motivo, fica vinculada a ele: se o motivo for **falso ou inexistente**, o ato é **nulo**. No caso, o cargo não foi extinto, como prova a nomeação de outra pessoa uma semana depois. O motivo declarado era falso.\n\nVícios de **motivo** e de **finalidade** são considerados **insanáveis** e não admitem convalidação. Os vícios sanáveis, segundo a doutrina, são os de **competência** (salvo competência exclusiva) e de **forma** (salvo forma essencial), nos termos do art. 55 da Lei 9.784/1999, quando não houver lesão ao interesse público nem prejuízo a terceiros. Anulado o ato, restabelece-se a situação anterior, embora nada impeça a autoridade de praticar nova exoneração, desta vez sem indicar motivo falso.',
        alternativas: [
          'Errada. A motivação era dispensável, mas, uma vez declarado, o motivo vincula o ato.',
          'Errada. O vício de motivo é insanável e não se convalida pela prática de outro ato.',
          'Errada. O vício aqui está no motivo, independentemente da competência.',
          'Correta. Aplicação da teoria dos motivos determinantes.',
          'Errada. O cargo em comissão é de livre exoneração; não se exige processo prévio.'
        ],
        dica: 'Competência e forma: sanáveis (com ressalvas). Motivo, finalidade e objeto: insanáveis. Motivo declarado vincula, mesmo em ato ad nutum.'
      },
      fontes: [f('Constituição Federal, art. 37, II', U.cf), f('Lei 9.784/1999, arts. 50 e 55', U.l9784)]
    },

    {
      id: 'dad-007',
      materia: 'direito-administrativo',
      assunto: 'Poderes administrativos',
      tipo: 'multipla',
      estilo: 'Vunesp',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'policial'],
      textoBase: 'Após uma discussão pessoal com um subordinado, o chefe de uma repartição federal determinou, de ofício, a remoção do servidor para uma unidade situada em outro Estado, com o objetivo, revelado a colegas, de "dar uma lição" nele. Não havia nenhuma necessidade de serviço na unidade de destino.',
      enunciado: 'A conduta do chefe configura',
      alternativas: [
        'excesso de poder, por vício no elemento competência.',
        'ato válido, pois a remoção de ofício é discricionária e insuscetível de controle judicial.',
        'vício de forma, sanável mediante convalidação pela autoridade superior.',
        'regular exercício do poder disciplinar, já que a remoção figura entre as penalidades da Lei n.º 8.112/1990.',
        'desvio de finalidade, modalidade de abuso de poder que torna o ato nulo.'
      ],
      resposta: 4,
      explicacao: {
        resumo: 'A remoção foi usada como punição, finalidade diversa da prevista em lei (o interesse do serviço). Há desvio de finalidade, espécie de abuso de poder, com vício insanável.',
        detalhada: 'O **abuso de poder** é gênero que comporta duas espécies: o **excesso de poder**, quando o agente vai além da sua **competência**, e o **desvio de poder (ou de finalidade)**, quando o agente, embora competente, pratica o ato visando a **fim diverso** daquele previsto, explícita ou implicitamente, na regra de competência. A Lei 4.717/1965 (art. 2º, parágrafo único, e) define o desvio de finalidade exatamente assim.\n\nA **remoção de ofício**, no interesse da Administração, existe para atender à **necessidade do serviço** (Lei 8.112/1990, art. 36, parágrafo único, I). Usá-la para punir o servidor é desviá-la de seu fim. Além disso, a remoção **não é penalidade**: as sanções disciplinares estão no art. 127 da Lei 8.112 (advertência, suspensão, demissão, cassação de aposentadoria ou disponibilidade, destituição de cargo em comissão e destituição de função comissionada), e sua aplicação exige processo com contraditório e ampla defesa.\n\nO ato discricionário **pode** ser controlado pelo Judiciário quanto à legalidade, o que inclui competência, finalidade e veracidade dos motivos. O que o juiz não faz é substituir o mérito (conveniência e oportunidade) por sua própria escolha. No exemplo, o servidor pode pedir a anulação da remoção por desvio de finalidade.',
        alternativas: [
          'Errada. O chefe era competente; o vício está na finalidade, não na competência.',
          'Errada. Atos discricionários sujeitam-se a controle de legalidade, inclusive quanto à finalidade.',
          'Errada. O vício não é de forma, e o vício de finalidade é insanável.',
          'Errada. A remoção não é penalidade prevista no art. 127 da Lei 8.112/1990.',
          'Correta. Usar a remoção para punir caracteriza desvio de finalidade.'
        ],
        dica: 'Excesso de poder = competência. Desvio de poder = finalidade. Os dois são espécies de abuso de poder.'
      },
      fontes: [f('Lei 8.112/1990, arts. 36 e 127', U.l8112)]
    },

    {
      id: 'dad-008',
      materia: 'direito-administrativo',
      assunto: 'Poderes administrativos',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'tribunais'],
      enunciado: 'Compete privativamente ao Presidente da República dispor, mediante decreto, sobre a extinção de funções ou cargos públicos, ainda que ocupados, desde que a medida não implique aumento de despesa.',
      resposta: false,
      explicacao: {
        resumo: 'Errado. O decreto autônomo do art. 84, VI, b, só pode extinguir funções ou cargos públicos quando vagos.',
        detalhada: 'O **poder regulamentar** é, em regra, exercido por **decretos de execução** (art. 84, IV): o Chefe do Executivo expede regulamentos para a fiel execução das leis, sem inovar na ordem jurídica. A EC 32/2001, porém, criou hipóteses de **decreto autônomo** no **art. 84, VI**, que extraem fundamento diretamente da Constituição.\n\nPelo art. 84, VI, o Presidente pode dispor, mediante decreto, sobre: (a) **organização e funcionamento da administração federal**, quando **não implicar aumento de despesa nem criação ou extinção de órgãos públicos**; e (b) **extinção de funções ou cargos públicos, quando vagos**. O item mistura as condições: o "sem aumento de despesa" pertence à alínea a, e a extinção de cargos exige que estejam **vagos**. Cargo ocupado só se extingue por **lei** (art. 48, X), e o servidor estável atingido fica em disponibilidade (art. 41, § 3º).\n\nOutra pegadinha: as atribuições do inciso VI são **delegáveis** aos Ministros de Estado, ao Procurador-Geral da República e ao Advogado-Geral da União (art. 84, parágrafo único), assim como as dos incisos XII (indulto e comutação de penas) e XXV, primeira parte (prover cargos públicos federais).',
        dica: 'Decreto autônomo: organização sem aumento de despesa e sem criar ou extinguir órgão; extinção de cargo só se estiver vago. Delegável a Ministro, PGR e AGU.'
      },
      fontes: [f('Constituição Federal, art. 84, IV e VI', U.cf)]
    },

    {
      id: 'dad-009',
      materia: 'direito-administrativo',
      assunto: 'Licitações (Lei 14.133/2021)',
      tipo: 'multipla',
      estilo: 'Vunesp',
      dificuldade: 1,
      objetivos: ['concursos-gerais', 'tribunais'],
      enunciado: 'Nos termos da Lei n.º 14.133/2021 (Lei de Licitações e Contratos Administrativos), NÃO constitui modalidade de licitação:',
      alternativas: ['pregão.', 'tomada de preços.', 'diálogo competitivo.', 'leilão.', 'concurso.'],
      resposta: 1,
      explicacao: {
        resumo: 'A Lei 14.133/2021 prevê cinco modalidades: pregão, concorrência, concurso, leilão e diálogo competitivo. Tomada de preços e convite, da antiga Lei 8.666/1993, foram extintos.',
        detalhada: 'O **art. 28 da Lei 14.133/2021** lista as modalidades: **pregão, concorrência, concurso, leilão e diálogo competitivo**. A **tomada de preços** e o **convite**, previstos na Lei 8.666/1993, deixaram de existir. A Lei 8.666/1993 foi revogada, e o período de convivência entre os dois regimes já terminou. O § 2º do art. 28 ainda proíbe a **criação de outras modalidades** e a **combinação** das existentes.\n\nDiferenças essenciais: o **pregão** é obrigatório para **bens e serviços comuns** e usa o critério de menor preço ou de maior desconto; a **concorrência** serve para bens e serviços especiais e para obras e serviços comuns e especiais de engenharia; o **concurso** escolhe trabalho técnico, científico ou artístico, com prêmio ou remuneração ao vencedor; o **leilão** destina-se à **alienação** de imóveis ou de bens móveis inservíveis ou legalmente apreendidos, a quem oferecer o **maior lance**; e o **diálogo competitivo**, a grande novidade, permite à Administração dialogar com licitantes previamente selecionados para desenvolver alternativas capazes de atender a necessidades que ela ainda não sabe especificar, como em contratações de inovação tecnológica.\n\nTambém mudou o critério de escolha da modalidade: na lei antiga, o valor do contrato definia concorrência, tomada de preços ou convite; na nova lei, o que importa é a **natureza do objeto**. Exemplo: um município que precisa comprar canetas e papel (bens comuns) fará pregão; para desenvolver uma solução inédita de mobilidade urbana, cujas especificações técnicas não domina, poderá usar o diálogo competitivo.',
        alternativas: [
          'Errada. O pregão é modalidade (art. 28, I), obrigatória para bens e serviços comuns.',
          'Correta. A tomada de preços existia na Lei 8.666/1993 e não foi mantida.',
          'Errada. O diálogo competitivo é a modalidade nova (art. 28, V).',
          'Errada. O leilão é modalidade (art. 28, IV), voltada à alienação de bens.',
          'Errada. O concurso é modalidade (art. 28, III), para escolha de trabalho técnico, científico ou artístico.'
        ],
        dica: 'Modalidades da Lei 14.133: pregão, concorrência, concurso, leilão e diálogo competitivo. Convite e tomada de preços ficaram na Lei 8.666.'
      },
      fontes: [f('Lei 14.133/2021, arts. 6º e 28 a 32', U.l14133)]
    },

    {
      id: 'dad-010',
      materia: 'direito-administrativo',
      assunto: 'Licitações (Lei 14.133/2021)',
      tipo: 'multipla',
      estilo: 'OAB/FGV',
      dificuldade: 2,
      objetivos: ['oab', 'concursos-gerais'],
      textoBase: 'O Município Beta pretende contratar, para o show de encerramento da festa de aniversário da cidade, uma cantora nacionalmente conhecida e consagrada pela opinião pública. A contratação seria feita por meio de um empresário que apresentou carta de exclusividade válida apenas para aquela data e aquele evento.',
      enunciado: 'Com base na Lei n.º 14.133/2021, assinale a afirmativa correta.',
      alternativas: [
        'A contratação deve ocorrer por dispensa de licitação, já que a contratação de artistas está entre as hipóteses do artigo que trata da dispensa.',
        'A contratação exige licitação na modalidade concurso, por envolver a escolha de trabalho artístico.',
        'A contratação da artista pode se dar por inexigibilidade, mas não por meio desse empresário, pois a lei não admite exclusividade restrita a evento ou local específico.',
        'A contratação deve ser precedida de leilão, a fim de que vença o empresário que oferecer o maior desconto.'
      ],
      resposta: 2,
      explicacao: {
        resumo: 'Art. 74, II e § 2º: é inexigível a licitação para contratar artista consagrado, diretamente ou por empresário exclusivo; mas a exclusividade deve ser permanente e contínua, não restrita a evento ou local.',
        detalhada: 'A **inexigibilidade** ocorre quando a **competição é inviável** (art. 74 da Lei 14.133/2021), e seu rol é **exemplificativo** ("em especial nos casos de"). Já a **dispensa** (art. 75) ocorre quando a competição seria possível, mas a lei autoriza não licitar; seu rol é **taxativo**. Uma artista consagrada não tem "concorrente" equivalente: por isso o caso é de inexigibilidade.\n\nO **art. 74, II**, autoriza a contratação de **profissional do setor artístico**, **diretamente ou por meio de empresário exclusivo**, desde que **consagrado pela crítica especializada ou pela opinião pública**. E o **§ 2º** considera empresário exclusivo a pessoa física ou jurídica que possua contrato, declaração, carta ou outro documento que ateste a **exclusividade permanente e contínua** de representação, no País ou em Estado específico, **afastada a possibilidade de contratação direta por inexigibilidade por meio de empresário com representação restrita a evento ou local específico**.\n\nA regra combate uma prática conhecida: as "exclusividades de ocasião", criadas para justificar intermediários e preços inflados. Na prática, o Município pode contratar a artista diretamente ou por meio de seu verdadeiro empresário exclusivo, instruindo o processo de contratação direta com os documentos exigidos pelo art. 72, entre eles a justificativa de preço e a razão da escolha do contratado.',
        alternativas: [
          'Errada. A contratação de artista consagrado é hipótese de inexigibilidade (art. 74, II), não de dispensa.',
          'Errada. O concurso escolhe, entre vários concorrentes, o melhor trabalho técnico, científico ou artístico, com prêmio; não serve para contratar uma artista específica.',
          'Correta. Aplicam-se o art. 74, II, e o § 2º do mesmo artigo.',
          'Errada. O leilão serve para alienação de bens, com critério do maior lance.'
        ],
        dica: 'Inexigibilidade = competição inviável (rol exemplificativo, art. 74). Dispensa = competição viável, mas a lei libera (rol taxativo, art. 75).'
      },
      fontes: [f('Lei 14.133/2021, arts. 72, 74 e 75', U.l14133)]
    },

    {
      id: 'dad-011',
      materia: 'direito-administrativo',
      assunto: 'Agentes públicos (Lei 8.112/1990)',
      tipo: 'multipla',
      estilo: 'FCC',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'tribunais'],
      textoBase: 'João, servidor público federal estável, foi demitido após processo administrativo disciplinar. Anos depois, o Poder Judiciário invalidou a demissão por vício insanável no processo.',
      enunciado: 'Nos termos da Lei n.º 8.112/1990, o retorno de João ao cargo anteriormente ocupado denomina-se',
      alternativas: [
        'reintegração, com ressarcimento de todas as vantagens.',
        'recondução, sem direito a ressarcimento.',
        'reversão, com contagem do tempo de afastamento apenas para aposentadoria.',
        'aproveitamento, após período em disponibilidade.',
        'readaptação, em cargo de atribuições afins.'
      ],
      resposta: 0,
      explicacao: {
        resumo: 'Reintegração (art. 28) é a reinvestidura do servidor estável quando invalidada sua demissão por decisão administrativa ou judicial, com ressarcimento de todas as vantagens.',
        detalhada: 'O **art. 8º da Lei 8.112/1990** lista as formas de provimento: nomeação, promoção, readaptação, reversão, aproveitamento, reintegração e recondução. A **reintegração** (**art. 28**) é "a reinvestidura do servidor estável no cargo anteriormente ocupado, ou no cargo resultante de sua transformação, quando invalidada a sua demissão por decisão administrativa ou judicial, **com ressarcimento de todas as vantagens**". É exatamente o caso de João.\n\nE se o cargo estiver ocupado por outra pessoa? O § 2º do art. 28 responde: o eventual ocupante será **reconduzido** ao cargo de origem, sem direito a indenização, ou **aproveitado** em outro cargo, ou ainda posto em **disponibilidade**. Se o cargo tiver sido extinto, o reintegrado fica em disponibilidade (§ 1º). A Constituição trata do tema no art. 41, § 2º.\n\nPara não confundir: **recondução** (art. 29) é o retorno do servidor estável ao cargo anteriormente ocupado, por inabilitação em estágio probatório relativo a outro cargo ou por reintegração do anterior ocupante; **reversão** (art. 25) é o retorno à atividade do **aposentado**; **aproveitamento** (art. 30) é o retorno de quem estava em **disponibilidade**; **readaptação** (art. 24) é a investidura em cargo compatível com limitação física ou mental superveniente.',
        alternativas: [
          'Correta. Literalidade do art. 28 da Lei 8.112/1990.',
          'Errada. Recondução é o retorno por inabilitação em estágio probatório ou por reintegração do anterior ocupante (art. 29).',
          'Errada. Reversão é o retorno do servidor aposentado (art. 25).',
          'Errada. Aproveitamento é o retorno do servidor em disponibilidade (art. 30).',
          'Errada. Readaptação decorre de limitação física ou mental (art. 24).'
        ],
        dica: 'REintegração: volta após demissão invalidada, com tudo pago. REversão: o aposentado volta. Aproveitamento: o disponível volta.'
      },
      fontes: [f('Lei 8.112/1990, arts. 8º e 24 a 30', U.l8112), f('Constituição Federal, art. 41, § 2º', U.cf)]
    },

    {
      id: 'dad-012',
      materia: 'direito-administrativo',
      assunto: 'Agentes públicos (Lei 8.112/1990)',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 3,
      objetivos: ['concursos-gerais', 'tribunais', 'policial'],
      enunciado: 'De acordo com a Lei n.º 8.112/1990, quando houver conveniência para o serviço, a penalidade de suspensão poderá ser convertida em multa, na base de 50% por dia de vencimento ou remuneração, ficando o servidor obrigado a permanecer em serviço.',
      resposta: true,
      explicacao: {
        resumo: 'Certo. É o art. 130, § 2º, da Lei 8.112/1990: a Administração mantém o servidor trabalhando e ele sofre o desconto correspondente.',
        detalhada: 'A **suspensão** (art. 130) é aplicada em caso de **reincidência** das faltas punidas com advertência e de violação das demais proibições que não tipifiquem infração sujeita a demissão, **não podendo exceder 90 dias**. Durante a suspensão, o servidor fica afastado e não é remunerado.\n\nO **§ 2º** cria uma alternativa pensada para o serviço público: quando houver **conveniência para o serviço**, a suspensão pode ser **convertida em multa**, de **50% por dia** de vencimento ou remuneração, e o servidor **continua trabalhando**. Assim, a punição não prejudica a continuidade do atendimento à população. Exemplo: um servidor punido com 10 dias de suspensão, lotado num setor com poucos servidores, pode ter a pena convertida; trabalhará esses 10 dias recebendo metade da remuneração correspondente.\n\nOutros números da Lei 8.112 que caem com frequência: suspensão de até **15 dias** para o servidor que, injustificadamente, se recusar a ser submetido a inspeção médica determinada pela autoridade (§ 1º); cancelamento dos registros de advertência após **3 anos** e de suspensão após **5 anos** de efetivo exercício, se o servidor não praticar nova infração (art. 131); e prescrição da ação disciplinar em **5 anos** (demissão, cassação e destituição de cargo em comissão), **2 anos** (suspensão) e **180 dias** (advertência), conforme o art. 142.',
        dica: 'Conversão em multa: só para a suspensão (não para a advertência), na base de 50%, e o servidor permanece em serviço.'
      },
      fontes: [f('Lei 8.112/1990, arts. 127 a 131 e 142', U.l8112)]
    },

    {
      id: 'dad-013',
      materia: 'direito-administrativo',
      assunto: 'Improbidade administrativa',
      tipo: 'multipla',
      estilo: 'FGV',
      dificuldade: 3,
      objetivos: ['concursos-gerais', 'tribunais', 'oab'],
      enunciado: 'Com base na Lei n.º 8.429/1992, com a redação dada pela Lei n.º 14.230/2021, assinale a afirmativa correta.',
      alternativas: [
        'Os atos de improbidade que causam lesão ao erário podem ser punidos a título de culpa grave, desde que comprovado o prejuízo.',
        'Considera-se dolo a vontade livre e consciente de alcançar o resultado ilícito tipificado na lei, não bastando a voluntariedade do agente.',
        'Qualquer cidadão é parte legítima para propor a ação de improbidade administrativa.',
        'A configuração do enriquecimento ilícito exige, sempre, a demonstração de dano efetivo ao patrimônio público.',
        'A perda da função pública e a suspensão dos direitos políticos podem ser executadas provisoriamente, antes do trânsito em julgado da sentença condenatória.'
      ],
      resposta: 1,
      explicacao: {
        resumo: 'Desde a Lei 14.230/2021, só há improbidade dolosa, e o dolo exige vontade livre e consciente de alcançar o resultado ilícito (art. 1º, § 2º).',
        detalhada: 'A **Lei 14.230/2021** reformou profundamente a Lei de Improbidade. A mudança mais importante: **não existe mais improbidade culposa**. O art. 1º, § 1º, considera atos de improbidade apenas as **condutas dolosas** tipificadas nos arts. 9º, 10 e 11, e o **§ 2º** esclarece que dolo é "a vontade livre e consciente de alcançar o resultado ilícito tipificado", **não bastando a voluntariedade do agente**. O § 3º acrescenta que o mero exercício da função, sem comprovação de ato doloso com fim ilícito, afasta a responsabilidade.\n\nAntes da reforma, o art. 10 (lesão ao erário) admitia a modalidade culposa. Hoje, nem a culpa grave basta. O STF, no **Tema 1199**, decidiu que a revogação da modalidade culposa alcança os atos praticados na vigência do texto anterior que ainda não tinham condenação transitada em julgado, mas não atinge a coisa julgada, e que o novo regime de prescrição não retroage.\n\nSobre as demais alternativas: a ação é proposta pelo **Ministério Público** (art. 17), e o STF, nas ADIs 7.042 e 7.043, reconheceu também a legitimidade da **pessoa jurídica interessada**; o cidadão comum não é legitimado. O **enriquecimento ilícito** (art. 9º) não exige dano ao erário: o art. 21, I, diz que a aplicação das sanções independe da efetiva ocorrência de dano ao patrimônio público, salvo quanto à pena de ressarcimento e às condutas do art. 10. E a **perda da função** e a **suspensão dos direitos políticos** só se efetivam com o **trânsito em julgado** (art. 20).',
        alternativas: [
          'Errada. A Lei 14.230/2021 eliminou a improbidade culposa, inclusive no art. 10.',
          'Correta. Literalidade do art. 1º, § 2º.',
          'Errada. São legitimados o MP e, segundo o STF (ADIs 7.042 e 7.043), a pessoa jurídica interessada; o cidadão dispõe da ação popular.',
          'Errada. O art. 21, I, dispensa o dano efetivo, salvo para o ressarcimento e para as condutas do art. 10.',
          'Errada. O art. 20 exige o trânsito em julgado para a perda da função e a suspensão dos direitos políticos.'
        ],
        dica: 'Improbidade hoje = sempre dolo, inclusive na lesão ao erário. Culpa grave, erro grosseiro ou mera voluntariedade não bastam.'
      },
      fontes: [f('Lei 8.429/1992 (redação da Lei 14.230/2021)', U.l8429), f('STF, Tema 1199 da repercussão geral', U.stf)]
    },

    {
      id: 'dad-014',
      materia: 'direito-administrativo',
      assunto: 'Improbidade administrativa',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'tribunais'],
      enunciado: 'Segundo a redação atual da Lei n.º 8.429/1992, a ação para a aplicação das sanções por improbidade administrativa prescreve em oito anos, contados a partir da ocorrência do fato ou, no caso de infrações permanentes, do dia em que cessou a permanência.',
      resposta: true,
      explicacao: {
        resumo: 'Certo. É o art. 23, caput, com a redação da Lei 14.230/2021. Antes, o prazo era de cinco anos, contados, em regra, do fim do mandato ou do vínculo.',
        detalhada: 'A Lei 14.230/2021 unificou e alongou o prazo prescricional: o **art. 23** passou a prever **8 anos**, contados da **ocorrência do fato** ou, nas **infrações permanentes**, do dia em que **cessou a permanência**. No regime anterior, o prazo era de 5 anos, contados, em regra, do término do mandato, do cargo em comissão ou da função de confiança.\n\nA reforma também disciplinou a **prescrição intercorrente**: o prazo é interrompido por marcos como o ajuizamento da ação e a publicação da sentença condenatória e, interrompido, recomeça a correr **pela metade** do prazo do caput, ou seja, 4 anos (art. 23, §§ 4º e 5º). O STF, no Tema 1199, fixou que esse novo regime prescricional é **irretroativo**, aplicando-se os novos marcos temporais a partir da publicação da lei.\n\nA exceção que as bancas adoram: a **ação de ressarcimento ao erário fundada em ato doloso de improbidade é imprescritível** (art. 37, § 5º, da CF, e **Tema 897** do STF). Ou seja, as sanções (multa, perda da função, suspensão dos direitos políticos) prescrevem em 8 anos, mas a devolução do dinheiro desviado dolosamente pode ser cobrada a qualquer tempo.',
        dica: 'Prazo de 8 anos, contado do fato; intercorrente pela metade (4 anos). Ressarcimento por ato doloso de improbidade = imprescritível.'
      },
      fontes: [f('Lei 8.429/1992, art. 23', U.l8429), f('STF, Temas 897 e 1199 da repercussão geral', U.stf)]
    },

    /* ===================== DIREITO PENAL ===================== */

    {
      id: 'dpe-001',
      materia: 'direito-penal',
      assunto: 'Teoria do crime',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['policial', 'oab', 'tribunais'],
      enunciado: 'Na desistência voluntária, o agente que, voluntariamente, desiste de prosseguir na execução do crime responde pela tentativa do delito inicialmente visado, com a pena reduzida de um a dois terços.',
      resposta: false,
      explicacao: {
        resumo: 'Errado. Pelo art. 15 do CP, na desistência voluntária (e no arrependimento eficaz) o agente só responde pelos atos já praticados; afasta-se a tentativa.',
        detalhada: 'O **art. 15 do Código Penal** dispõe: "O agente que, voluntariamente, desiste de prosseguir na execução ou impede que o resultado se produza, **só responde pelos atos já praticados**". O dispositivo traz dois institutos: a **desistência voluntária** (o agente interrompe a execução que ainda poderia continuar) e o **arrependimento eficaz** (o agente esgota a execução, mas age para impedir o resultado, e consegue).\n\nA doutrina chama esses institutos de "**ponte de ouro**": a lei oferece ao agente uma saída vantajosa para que ele abandone o crime. A consequência é que a **tentativa** do crime visado **desaparece**, e ele responde apenas pelo que já fez, se isso for típico. A redução de um a dois terços é a da **tentativa** (art. 14, parágrafo único), que pressupõe justamente que o crime não se consumou por **circunstâncias alheias à vontade do agente**.\n\nExemplo: Fulano entra numa casa para furtar, começa a recolher objetos e, por decisão própria, devolve tudo ao lugar e vai embora. Não responde por tentativa de furto, mas pode responder pela violação de domicílio (art. 150), ato já praticado. Fórmula de Frank: na tentativa, o agente "quer prosseguir, mas não pode"; na desistência voluntária, "pode prosseguir, mas não quer".',
        dica: 'Voluntariedade não exige espontaneidade: se o agente desiste porque um amigo o convenceu, ainda há desistência voluntária. Só não há se ele foi impedido por fator externo.'
      },
      fontes: [f('Código Penal, arts. 14 e 15', U.cp)]
    },

    {
      id: 'dpe-002',
      materia: 'direito-penal',
      assunto: 'Teoria do crime',
      tipo: 'multipla',
      estilo: 'Vunesp',
      dificuldade: 2,
      objetivos: ['policial', 'tribunais'],
      textoBase: 'Carlos furtou, sem violência ou grave ameaça, o notebook de um colega de trabalho. Dias depois, arrependido e por iniciativa própria, devolveu o aparelho intacto à vítima. A devolução ocorreu depois do oferecimento da denúncia pelo Ministério Público, mas antes de seu recebimento pelo juiz.',
      enunciado: 'Nos termos do Código Penal, a situação descrita configura',
      alternativas: [
        'desistência voluntária, de modo que Carlos responderá apenas pelos atos já praticados.',
        'arrependimento eficaz, que afasta a tipicidade do furto.',
        'crime impossível, por ausência de prejuízo final à vítima.',
        'arrependimento posterior, causa de diminuição de pena de um a dois terços.',
        'causa de extinção da punibilidade, em razão da reparação integral do dano.'
      ],
      resposta: 3,
      explicacao: {
        resumo: 'Crime consumado sem violência ou grave ameaça, coisa restituída voluntariamente antes do recebimento da denúncia: arrependimento posterior (art. 16), com redução de um a dois terços.',
        detalhada: 'O **art. 16 do CP** prevê o **arrependimento posterior**: "Nos crimes cometidos **sem violência ou grave ameaça à pessoa**, reparado o dano ou restituída a coisa, **até o recebimento da denúncia ou da queixa**, por **ato voluntário** do agente, a pena será **reduzida de um a dois terços**". Todos os requisitos estão presentes: furto, restituição integral, iniciativa do agente e devolução antes do **recebimento** (o marco é o recebimento pelo juiz, não o oferecimento pelo MP).\n\nDiferença central: a desistência voluntária e o arrependimento eficaz (art. 15) ocorrem **antes da consumação**; o arrependimento posterior ocorre **depois** que o crime já se consumou. Por isso ele não afasta o crime, apenas **diminui a pena**. A fração varia conforme a presteza e a amplitude da reparação: quanto mais rápida e completa, maior a redução.\n\nSe a reparação ocorrer **depois do recebimento** da denúncia, mas antes do julgamento, incide apenas a **atenuante genérica** do art. 65, III, b. Há ainda regimes especiais: no **peculato culposo**, a reparação antes da sentença irrecorrível **extingue a punibilidade** (art. 312, § 3º). E o art. 16 não se aplica ao roubo, porque nele há violência ou grave ameaça.',
        alternativas: [
          'Errada. A desistência voluntária ocorre durante a execução, antes da consumação; o furto já estava consumado.',
          'Errada. O arrependimento eficaz também é anterior à consumação e não afasta a tipicidade de crime consumado.',
          'Errada. Crime impossível exige ineficácia absoluta do meio ou impropriedade absoluta do objeto (art. 17).',
          'Correta. Presentes todos os requisitos do art. 16.',
          'Errada. Fora de hipóteses específicas, como o peculato culposo, a reparação não extingue a punibilidade.'
        ],
        dica: 'O marco do arrependimento posterior é o RECEBIMENTO da denúncia, não o oferecimento. A banca troca um pelo outro.'
      },
      fontes: [f('Código Penal, arts. 15, 16 e 65', U.cp)]
    },

    {
      id: 'dpe-003',
      materia: 'direito-penal',
      assunto: 'Teoria do crime',
      tipo: 'multipla',
      estilo: 'OAB/FGV',
      dificuldade: 2,
      objetivos: ['oab', 'policial'],
      textoBase: 'Caio, caçador regularmente autorizado, estava em área de caça quando viu um vulto se movendo atrás de arbustos. Acreditando tratar-se de um javali, disparou. O vulto era Tício, outro caçador, que morreu. A perícia concluiu que, com um mínimo de cautela, como aguardar alguns segundos para visualizar o alvo, Caio teria percebido que se tratava de uma pessoa.',
      enunciado: 'Diante do caso, assinale a afirmativa correta.',
      alternativas: [
        'Caio responde por homicídio doloso, com pena reduzida de um sexto a um terço, por erro de proibição evitável.',
        'Caio incorreu em erro de tipo evitável, que exclui o dolo, mas permite a punição por homicídio culposo.',
        'Caio está isento de pena, pois o erro de tipo, evitável ou não, exclui o dolo e a culpa.',
        'Caio responde por homicídio doloso consumado, como se tivesse atingido o animal pretendido, por se tratar de erro na execução.'
      ],
      resposta: 1,
      explicacao: {
        resumo: 'Caio errou sobre um elemento do tipo ("alguém"). O erro de tipo sempre exclui o dolo; se evitável, permite a punição por crime culposo, se previsto em lei (art. 20).',
        detalhada: 'O **erro de tipo** (art. 20 do CP) recai sobre um **elemento constitutivo do tipo penal**. O tipo de homicídio é "matar **alguém**". Caio não sabia que matava "alguém": achava que atirava num animal. Sem consciência de um elemento do tipo, **não há dolo**. Por isso o art. 20 diz que o erro de tipo "**exclui o dolo, mas permite a punição por crime culposo, se previsto em lei**".\n\nA consequência depende da evitabilidade. Se o erro era **inevitável** (escusável), exclui dolo **e** culpa: o fato é atípico. Se era **evitável** (inescusável), exclui o dolo, mas o agente responde por **crime culposo**, se houver previsão. A perícia indicou que um mínimo de cautela evitaria o erro, e o homicídio admite a forma culposa (art. 121, § 3º): Caio responde por **homicídio culposo**.\n\nNão confunda com o **erro de proibição** (art. 21): nele o agente sabe exatamente o que faz, mas acredita que a conduta é **lícita**; se inevitável, isenta de pena; se evitável, reduz a pena de um sexto a um terço. E o **erro na execução** (aberratio ictus, art. 73) ocorre quando o agente quer atingir uma pessoa e, por acidente ou erro no uso dos meios, atinge outra; aqui, Caio nunca quis atingir pessoa alguma.',
        alternativas: [
          'Errada. Caio não errou sobre a ilicitude do fato, e sim sobre um elemento do tipo; não há dolo.',
          'Correta. Erro de tipo evitável: exclui o dolo, e Caio responde por homicídio culposo (art. 20 c/c art. 121, § 3º).',
          'Errada. Só o erro de tipo inevitável exclui também a culpa.',
          'Errada. A aberratio ictus pressupõe a intenção de atingir uma pessoa e uma falha na execução; aqui não havia dolo de matar.'
        ],
        dica: 'Erro de tipo: "não sei o que faço" (exclui o dolo). Erro de proibição: "sei o que faço, mas acho que pode" (afeta a culpabilidade).'
      },
      fontes: [f('Código Penal, arts. 20, 21, 73 e 121', U.cp)]
    },

    {
      id: 'dpe-004',
      materia: 'direito-penal',
      assunto: 'Teoria do crime',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['policial', 'tribunais'],
      enunciado: 'Conforme entendimento sumulado do STF, não há crime quando a preparação do flagrante pela polícia torna impossível a sua consumação.',
      resposta: true,
      explicacao: {
        resumo: 'Certo. É a Súmula 145 do STF. O flagrante preparado configura crime impossível, ao contrário do flagrante esperado, que é válido.',
        detalhada: 'A **Súmula 145 do STF** dispõe: "Não há crime, quando a preparação do flagrante pela polícia torna impossível a sua consumação". No **flagrante preparado (ou provocado)**, o agente é **induzido** a praticar o crime por alguém (policial ou terceiro) que, ao mesmo tempo, toma todas as providências para que a consumação seja impossível. A situação se encaixa no **crime impossível** do **art. 17 do CP**, que não pune nem a tentativa quando, por ineficácia absoluta do meio ou por absoluta impropriedade do objeto, é impossível consumar o crime.\n\nDiferente é o **flagrante esperado**: a polícia, sabendo que um crime vai ocorrer, apenas **aguarda** o momento e age quando ele começa, **sem induzir** ninguém. Esse flagrante é **válido**. Exemplo: a polícia recebe a informação de que haverá um assalto a uma agência bancária e monta campana; os assaltantes chegam por iniciativa própria e são presos ao iniciar a execução.\n\nTambém não se confunde com o **flagrante prorrogado (ação controlada)** da Lei 12.850/2013, em que a polícia retarda a intervenção para colher mais provas. E atenção ao tráfico: quem "vende" droga a policial disfarçado pode responder pelos núcleos anteriores já consumados, como "ter em depósito" ou "trazer consigo"; além disso, o Pacote Anticrime incluiu na Lei de Drogas (art. 33, § 1º, IV) a venda ou entrega de droga a agente policial disfarçado, quando presentes elementos probatórios razoáveis de conduta criminal preexistente.',
        dica: 'Preparado (induzimento + consumação impossível) = não há crime. Esperado (sem induzimento) = flagrante válido.'
      },
      fontes: [f('STF, Súmula 145', U.stf), f('Código Penal, art. 17', U.cp)]
    },

    {
      id: 'dpe-005',
      materia: 'direito-penal',
      assunto: 'Excludentes de ilicitude',
      tipo: 'multipla',
      estilo: 'Vunesp',
      dificuldade: 2,
      objetivos: ['policial', 'oab'],
      enunciado: 'Sobre as causas excludentes de ilicitude previstas no Código Penal, assinale a alternativa correta.',
      alternativas: [
        'A legítima defesa pode ser invocada para repelir agressão futura, ainda que incerta, desde que o meio empregado seja moderado.',
        'A legítima defesa só ampara a defesa de direito próprio, não alcançando a defesa de direito de terceiro.',
        'Observados os requisitos legais, considera-se também em legítima defesa o agente de segurança pública que repele agressão ou risco de agressão a vítima mantida refém durante a prática de crimes.',
        'O excesso culposo é impunível em qualquer das excludentes de ilicitude, respondendo o agente apenas pelo excesso doloso.',
        'Age em estado de necessidade quem pratica o fato para salvar de perigo atual direito próprio, ainda que tenha provocado esse perigo por sua vontade.'
      ],
      resposta: 2,
      explicacao: {
        resumo: 'O parágrafo único do art. 25, incluído pela Lei 13.964/2019, prevê expressamente a legítima defesa do agente de segurança pública que protege vítima mantida refém.',
        detalhada: 'O **art. 23 do CP** lista as excludentes de ilicitude: **estado de necessidade**, **legítima defesa**, **estrito cumprimento de dever legal** e **exercício regular de direito**. A **legítima defesa** (art. 25) exige: **injusta agressão**, **atual ou iminente**, a **direito seu ou de outrem**, repelida com **uso moderado dos meios necessários**.\n\nA **Lei 13.964/2019 (Pacote Anticrime)** acrescentou o **parágrafo único ao art. 25**: "Observados os requisitos previstos no caput deste artigo, considera-se também em legítima defesa o agente de segurança pública que repele agressão ou risco de agressão a vítima mantida refém durante a prática de crimes". Note que o dispositivo não cria uma licença automática: os requisitos do caput continuam exigidos.\n\nO **estado de necessidade** (art. 24) exige **perigo atual**, que o agente **não provocou por sua vontade** nem podia evitar de outro modo, para salvar direito próprio ou alheio cujo sacrifício, nas circunstâncias, não era razoável exigir; e não pode alegá-lo quem tinha o dever legal de enfrentar o perigo (§ 1º). Por fim, o **parágrafo único do art. 23** é claro: em **qualquer** das excludentes, o agente responde pelo **excesso doloso ou culposo**.',
        alternativas: [
          'Errada. A agressão deve ser atual ou iminente; agressão futura não autoriza legítima defesa.',
          'Errada. O art. 25 ampara a defesa de direito "seu ou de outrem" (legítima defesa de terceiro).',
          'Correta. Literalidade do art. 25, parágrafo único, incluído pela Lei 13.964/2019.',
          'Errada. O agente responde pelo excesso doloso ou culposo (art. 23, parágrafo único).',
          'Errada. O estado de necessidade exige perigo que o agente não provocou por sua vontade (art. 24).'
        ],
        dica: 'Legítima defesa: agressão atual OU iminente. Estado de necessidade: perigo ATUAL (o art. 24 não fala em perigo iminente).'
      },
      fontes: [f('Código Penal, arts. 23 a 25', U.cp)]
    },

    {
      id: 'dpe-006',
      materia: 'direito-penal',
      assunto: 'Excludentes de ilicitude',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['policial', 'tribunais'],
      enunciado: 'Segundo o Código Penal, a punição pelo excesso, doloso ou culposo, aplica-se apenas à legítima defesa, não se estendendo ao estado de necessidade, ao estrito cumprimento de dever legal e ao exercício regular de direito.',
      resposta: false,
      explicacao: {
        resumo: 'Errado. O parágrafo único do art. 23 determina que o agente, em qualquer das hipóteses de excludente de ilicitude, responde pelo excesso doloso ou culposo.',
        detalhada: 'O **art. 23, parágrafo único, do CP** dispõe: "O agente, **em qualquer das hipóteses deste artigo**, responderá pelo excesso doloso ou culposo". A regra vale, portanto, para as **quatro** excludentes: estado de necessidade, legítima defesa, estrito cumprimento de dever legal e exercício regular de direito.\n\nO **excesso** ocorre quando a situação justificante existe no início, mas o agente ultrapassa os limites permitidos. Será **doloso** quando ele, consciente de que a agressão ou o perigo já cessaram, continua agindo; será **culposo** quando ultrapassa os limites por falta de cuidado na avaliação da situação. No excesso culposo, ele responde pelo crime culposo correspondente, se houver previsão legal.\n\nExemplo com o estrito cumprimento de dever legal: o policial que, ao cumprir mandado de prisão, emprega a força necessária para vencer a resistência do preso age licitamente; se, já dominado e algemado o preso, continua a agredi-lo, responde pelo excesso. Na prova, desconfie sempre que o item restringir a uma única excludente uma regra que o art. 23 aplica a todas.',
        dica: 'O parágrafo único do art. 23 diz "em qualquer das hipóteses": o excesso é punível em todas as excludentes.'
      },
      fontes: [f('Código Penal, art. 23', U.cp)]
    },

    {
      id: 'dpe-007',
      materia: 'direito-penal',
      assunto: 'Crimes contra a Administração Pública',
      tipo: 'multipla',
      estilo: 'FCC',
      dificuldade: 2,
      objetivos: ['policial', 'tribunais', 'concursos-gerais'],
      textoBase: 'Marcos foi aprovado em concurso para fiscal de tributos municipais e aguardava a posse. Antes de assumir o cargo, procurou o dono de um restaurante e exigiu dele R$ 5.000,00, afirmando que, se não recebesse o valor, fiscalizaria o estabelecimento "com todo o rigor" assim que entrasse em exercício. O empresário, intimidado, pagou.',
      enunciado: 'A conduta de Marcos tipifica o crime de',
      alternativas: ['concussão.', 'corrupção passiva.', 'prevaricação.', 'peculato.', 'advocacia administrativa.'],
      resposta: 0,
      explicacao: {
        resumo: 'Exigir vantagem indevida, ainda que antes de assumir a função, mas em razão dela, é concussão (art. 316 do CP).',
        detalhada: 'O **art. 316 do CP** define a **concussão**: "**Exigir**, para si ou para outrem, direta ou indiretamente, **ainda que fora da função ou antes de assumi-la, mas em razão dela**, vantagem indevida". O verbo **exigir** traz a ideia de imposição: a vítima cede por temor das represálias ligadas à função pública.\n\nA diferença para a **corrupção passiva** (art. 317) está no verbo: nela o funcionário **solicita**, **recebe** ou **aceita promessa** de vantagem indevida. Na solicitação há um pedido, não uma imposição. Os dois tipos alcançam a conduta praticada **antes de assumir a função**, desde que em razão dela; por isso a falta de posse não afasta o crime.\n\nA concussão é crime **formal**: consuma-se com a **exigência**, e o recebimento do dinheiro é mero exaurimento. Os demais crimes da lista: **prevaricação** (art. 319) é retardar ou deixar de praticar, indevidamente, ato de ofício, ou praticá-lo contra disposição expressa de lei, para satisfazer interesse ou sentimento pessoal; **peculato** (art. 312) é apropriar-se ou desviar dinheiro, valor ou bem de que o funcionário tem a posse em razão do cargo; **advocacia administrativa** (art. 321) é patrocinar interesse privado perante a Administração, valendo-se da qualidade de funcionário.',
        alternativas: [
          'Correta. Houve exigência de vantagem indevida em razão da função, ainda que antes de assumi-la (art. 316).',
          'Errada. A corrupção passiva pressupõe solicitar, receber ou aceitar promessa, não exigir.',
          'Errada. A prevaricação envolve ato de ofício retardado, omitido ou praticado contra a lei por interesse ou sentimento pessoal.',
          'Errada. O peculato exige apropriação ou desvio de bem de que o funcionário tem a posse em razão do cargo.',
          'Errada. A advocacia administrativa é patrocinar interesse privado perante a Administração.'
        ],
        dica: 'EXIGIR = concussão. SOLICITAR, RECEBER ou ACEITAR PROMESSA = corrupção passiva. OFERECER ou PROMETER (o particular) = corrupção ativa (art. 333).'
      },
      fontes: [f('Código Penal, arts. 312 a 321', U.cp)]
    },

    {
      id: 'dpe-008',
      materia: 'direito-penal',
      assunto: 'Crimes contra a Administração Pública',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['policial', 'tribunais'],
      enunciado: 'No crime de peculato doloso, a reparação do dano, se precede à sentença irrecorrível, extingue a punibilidade do funcionário público; se lhe é posterior, reduz de metade a pena imposta.',
      resposta: false,
      explicacao: {
        resumo: 'Errado. Esse benefício (art. 312, § 3º) é exclusivo do peculato culposo. No peculato doloso, a reparação pode, no máximo, gerar arrependimento posterior ou atenuante.',
        detalhada: 'O **peculato culposo** está no **§ 2º do art. 312**: o funcionário que "concorre **culposamente** para o crime de outrem" (por exemplo, deixa o cofre aberto por descuido e um terceiro subtrai o dinheiro) recebe pena de detenção de três meses a um ano. O **§ 3º** completa: "No caso do **parágrafo anterior**, a reparação do dano, se precede à sentença irrecorrível, **extingue a punibilidade**; se lhe é posterior, **reduz de metade** a pena imposta".\n\nA expressão "no caso do parágrafo anterior" restringe o benefício ao **peculato culposo**. No **peculato doloso** (apropriação, desvio ou subtração, caput e § 1º), a reparação não extingue a punibilidade. Se ocorrer voluntariamente **até o recebimento da denúncia**, incide o **arrependimento posterior** (art. 16), com redução de um a dois terços, já que o peculato é cometido sem violência ou grave ameaça; se posterior, pode configurar a atenuante do art. 65, III, b.\n\nExemplo: um servidor do almoxarifado esquece a porta destrancada e um colega, valendo-se da facilidade do cargo, leva notebooks da repartição. O servidor descuidado comete peculato culposo; se ressarcir o prejuízo antes do trânsito em julgado, terá extinta a punibilidade. O colega comete peculato-furto (§ 1º), doloso, e não se beneficia dessa regra.',
        dica: 'Extinção da punibilidade pela reparação: só no peculato CULPOSO e só antes da sentença irrecorrível. Depois dela, a pena cai pela metade.'
      },
      fontes: [f('Código Penal, arts. 16 e 312', U.cp)]
    },

    {
      id: 'dpe-009',
      materia: 'direito-penal',
      assunto: 'Aplicação da lei penal',
      tipo: 'multipla',
      estilo: 'FGV',
      dificuldade: 2,
      objetivos: ['policial', 'oab', 'tribunais'],
      enunciado: 'Sobre a aplicação da lei penal, assinale a afirmativa correta.',
      alternativas: [
        'Quanto ao tempo do crime, o Código Penal adotou a teoria do resultado, considerando-se praticado o crime no momento em que ele se consuma.',
        'Quanto ao lugar do crime, o Código Penal adotou a teoria da atividade, considerando-se praticado o crime apenas onde ocorreu a ação ou omissão.',
        'A lei posterior que de qualquer modo favorecer o agente não se aplica aos fatos já decididos por sentença condenatória transitada em julgado.',
        'A abolitio criminis faz cessar a execução da pena, mas mantém os demais efeitos penais da sentença condenatória, como a reincidência.',
        'Considera-se praticado o crime no momento da ação ou omissão, ainda que outro seja o momento do resultado.'
      ],
      resposta: 4,
      explicacao: {
        resumo: 'Tempo do crime: teoria da atividade (art. 4º). Lugar do crime: ubiquidade (art. 6º). A lei mais benéfica retroage mesmo após o trânsito em julgado.',
        detalhada: 'O **art. 4º do CP** adota a **teoria da atividade** para o **tempo do crime**: "Considera-se praticado o crime no momento da ação ou omissão, ainda que outro seja o momento do resultado". É isso que define, por exemplo, a imputabilidade: quem atira em alguém um dia antes de completar 18 anos, e a vítima morre dias depois, responde segundo o ECA, porque era menor no momento da conduta.\n\nJá para o **lugar do crime**, o **art. 6º** adota a **teoria da ubiquidade (mista)**: considera-se praticado o crime tanto no lugar em que ocorreu a ação ou omissão, no todo ou em parte, quanto onde se produziu ou deveria produzir-se o resultado. Mnemônico: **LUTA** (Lugar = Ubiquidade; Tempo = Atividade).\n\nQuanto à **lei penal no tempo** (art. 2º): a **abolitio criminis** faz cessar a execução **e os efeitos penais** da sentença condenatória (inclusive a reincidência), permanecendo apenas os efeitos extrapenais, como a obrigação de reparar o dano. E a **lei posterior mais benéfica** aplica-se aos fatos anteriores, **ainda que decididos por sentença condenatória transitada em julgado** (parágrafo único). Atenção à **Súmula 711 do STF**: a lei penal mais grave aplica-se ao crime **continuado** ou **permanente** se sua vigência for anterior à cessação da continuidade ou da permanência.',
        alternativas: [
          'Errada. O CP adotou a teoria da atividade quanto ao tempo do crime (art. 4º).',
          'Errada. Quanto ao lugar, o CP adotou a ubiquidade: lugar da ação ou omissão e lugar do resultado (art. 6º).',
          'Errada. A lei mais benéfica retroage ainda que haja trânsito em julgado (art. 2º, parágrafo único).',
          'Errada. A abolitio criminis faz cessar a execução e todos os efeitos penais; só os efeitos extrapenais subsistem.',
          'Correta. Literalidade do art. 4º do CP (teoria da atividade).'
        ],
        dica: 'LUTA: Lugar = Ubiquidade; Tempo = Atividade.'
      },
      fontes: [f('Código Penal, arts. 2º a 6º', U.cp), f('STF, Súmula 711', U.stf)]
    },

    {
      id: 'dpe-010',
      materia: 'direito-penal',
      assunto: 'Aplicação da lei penal',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 3,
      objetivos: ['policial', 'tribunais'],
      enunciado: 'Ficam sujeitos à lei brasileira, embora cometidos no estrangeiro, os crimes contra a administração pública praticados por quem está a seu serviço, sendo o agente punido segundo a lei brasileira ainda que absolvido ou condenado no estrangeiro.',
      resposta: true,
      explicacao: {
        resumo: 'Certo. É hipótese de extraterritorialidade incondicionada (art. 7º, I, c, e § 1º, do CP).',
        detalhada: 'A regra geral é a **territorialidade** (art. 5º): aplica-se a lei brasileira ao crime cometido no território nacional. O **art. 7º** traz exceções, chamadas de **extraterritorialidade**, em que a lei brasileira alcança crimes praticados no exterior. Elas se dividem em **incondicionada** (inciso I) e **condicionada** (inciso II e § 3º).\n\nSão casos de **extraterritorialidade incondicionada** (art. 7º, I) os crimes: (a) contra a vida ou a liberdade do Presidente da República; (b) contra o patrimônio ou a fé pública da União, do DF, de Estado, de Território, de Município, de empresa pública, sociedade de economia mista, autarquia ou fundação instituída pelo Poder Público; (c) **contra a administração pública, por quem está a seu serviço**; e (d) de genocídio, quando o agente for brasileiro ou domiciliado no Brasil. O **§ 1º** determina que, nesses casos, o agente é punido segundo a lei brasileira **ainda que absolvido ou condenado no estrangeiro**.\n\nPara evitar dupla punição excessiva, o **art. 8º** manda que a pena cumprida no estrangeiro **atenue** a pena imposta no Brasil pelo mesmo crime, quando diversas, ou nela seja **computada**, quando idênticas. Exemplo: um servidor de uma representação diplomática brasileira que desvia recursos públicos no exterior pode ser processado no Brasil por peculato, independentemente do que ocorrer no país estrangeiro. Já nos casos condicionados, como o crime praticado por brasileiro no exterior, exigem-se requisitos como a entrada do agente no território nacional e a dupla tipicidade (art. 7º, § 2º).',
        dica: 'Incondicionada (art. 7º, I): Presidente, patrimônio ou fé pública do Poder Público, administração pública por quem está a seu serviço e genocídio (agente brasileiro ou domiciliado no Brasil).'
      },
      fontes: [f('Código Penal, arts. 5º a 8º', U.cp)]
    },

    /* ===================== CONHECIMENTOS BANCÁRIOS ===================== */

    {
      id: 'cba-001',
      materia: 'conhecimentos-bancarios',
      assunto: 'Sistema Financeiro Nacional',
      tipo: 'multipla',
      estilo: 'Cesgranrio',
      dificuldade: 1,
      objetivos: ['bancarios'],
      enunciado: 'De acordo com a Lei n.º 4.595/1964, compete privativamente ao Banco Central do Brasil',
      alternativas: [
        'fixar as diretrizes e normas da política cambial.',
        'emitir moeda-papel e moeda metálica, nas condições e limites autorizados pelo Conselho Monetário Nacional.',
        'regular e fiscalizar o mercado de valores mobiliários.',
        'fiscalizar as sociedades seguradoras e de capitalização.',
        'supervisionar as entidades fechadas de previdência complementar.'
      ],
      resposta: 1,
      explicacao: {
        resumo: 'A emissão de moeda é competência privativa do BCB (art. 10, I, da Lei 4.595/1964, reforçado pelo art. 164 da CF), dentro dos limites autorizados pelo CMN.',
        detalhada: 'No SFN, o **Conselho Monetário Nacional (CMN)** é o órgão **normativo** máximo: formula a política da moeda e do crédito e fixa as diretrizes e normas da **política cambial** (art. 4º da Lei 4.595/1964). O **Banco Central do Brasil (BCB)** é o principal **executor e supervisor**: cumpre e faz cumprir as normas do CMN e exerce as competências privativas listadas no **art. 10** da mesma lei.\n\nEntre as competências privativas do BCB está **emitir moeda-papel e moeda metálica, nas condições e limites autorizados pelo CMN** (art. 10, I). A Constituição reforça: "a competência da União para emitir moeda será exercida exclusivamente pelo banco central" (art. 164). Outras atribuições do BCB: executar os serviços do meio circulante, receber os recolhimentos compulsórios, realizar operações de redesconto e empréstimos a instituições financeiras, fiscalizar as instituições financeiras e autorizar o seu funcionamento.\n\nAs demais alternativas pertencem a outros supervisores: a **CVM** (Lei 6.385/1976) regula e fiscaliza o mercado de valores mobiliários; a **SUSEP** fiscaliza seguradoras, sociedades de capitalização e entidades abertas de previdência complementar; a **PREVIC** supervisiona as entidades **fechadas** de previdência complementar (fundos de pensão). Atalho: o CMN **decide as regras**, o BCB **executa e fiscaliza**, e a Casa da Moeda **fabrica** cédulas e moedas por encomenda do BCB.',
        alternativas: [
          'Errada. Fixar as diretrizes e normas da política cambial é atribuição do CMN (art. 4º, V, da Lei 4.595/1964).',
          'Correta. Art. 10, I, da Lei 4.595/1964 e art. 164 da CF.',
          'Errada. Regular e fiscalizar o mercado de valores mobiliários cabe à CVM.',
          'Errada. Seguradoras e sociedades de capitalização são fiscalizadas pela SUSEP.',
          'Errada. Entidades fechadas de previdência complementar são supervisionadas pela PREVIC.'
        ],
        dica: 'O BCB emite (detém a competência); a Casa da Moeda apenas fabrica. E quem autoriza os limites de emissão é o CMN.'
      },
      fontes: [f('Lei 4.595/1964, arts. 4º e 10', U.l4595), f('Constituição Federal, art. 164', U.cf), f('Banco Central do Brasil', U.bcb)]
    },

    {
      id: 'cba-002',
      materia: 'conhecimentos-bancarios',
      assunto: 'Sistema Financeiro Nacional',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 1,
      objetivos: ['bancarios'],
      enunciado: 'O Conselho Monetário Nacional é o órgão executivo do Sistema Financeiro Nacional, responsável pela fiscalização direta e cotidiana das instituições financeiras.',
      resposta: false,
      explicacao: {
        resumo: 'Errado. O CMN é órgão normativo: edita as regras. A fiscalização das instituições financeiras cabe ao Banco Central do Brasil.',
        detalhada: 'O SFN costuma ser estudado em três camadas: **órgãos normativos** (fixam as regras), **entidades supervisoras** (fiscalizam o cumprimento das regras) e **operadores** (instituições que atuam no mercado). O **CMN** está no topo da camada normativa: não atende o público, não fiscaliza bancos no dia a dia e não executa operações. Ele edita **resoluções** que orientam todo o sistema.\n\nQuem fiscaliza as instituições financeiras é o **Banco Central do Brasil**, nos termos do art. 10 da Lei 4.595/1964. O BCB também concede autorização de funcionamento, aplica penalidades e pode decretar regimes especiais, como intervenção e liquidação extrajudicial. Desde a **Lei Complementar 179/2021**, o BCB é **autarquia de natureza especial**, sem vinculação a Ministério, com diretoria de mandatos fixos.\n\nEsquema para a prova: moeda, crédito e câmbio: **CMN** (normativo) e **BCB** (supervisor). Mercado de capitais: **CMN** e **CVM**. Seguros, capitalização e previdência aberta: **CNSP** e **SUSEP**. Previdência complementar fechada: **CNPC** e **PREVIC**.',
        dica: 'Conselho (CMN, CNSP, CNPC) = norma. Autarquia (BCB, CVM, SUSEP, PREVIC) = supervisão.'
      },
      fontes: [f('Lei 4.595/1964', U.l4595), f('Banco Central do Brasil', U.bcb)]
    },

    {
      id: 'cba-003',
      materia: 'conhecimentos-bancarios',
      assunto: 'Produtos e serviços bancários',
      tipo: 'multipla',
      estilo: 'Cesgranrio',
      dificuldade: 2,
      objetivos: ['bancarios'],
      enunciado: 'Um gerente explica a um cliente as diferenças entre alguns produtos de captação bancária. Está correta a seguinte afirmação:',
      alternativas: [
        'O CDB é um título de renda variável, cujo rendimento depende exclusivamente do desempenho das ações do banco emissor.',
        'O RDB pode ser livremente transferido a terceiros antes do vencimento, por simples endosso.',
        'O CDB é título de renda fixa emitido por bancos para captar recursos e pode ser negociado antes do vencimento, enquanto o RDB é inegociável e intransferível.',
        'Os fundos de investimento contam com a mesma garantia do Fundo Garantidor de Créditos aplicável aos depósitos a prazo.',
        'A caderneta de poupança é um título público federal emitido pelo Tesouro Nacional.'
      ],
      resposta: 2,
      explicacao: {
        resumo: 'CDB e RDB são depósitos a prazo de renda fixa; a diferença clássica é que o CDB é título negociável e o RDB é inegociável e intransferível.',
        detalhada: 'O **CDB (Certificado de Depósito Bancário)** e o **RDB (Recibo de Depósito Bancário)** são instrumentos de **captação a prazo** das instituições financeiras. O investidor "empresta" dinheiro ao banco e recebe uma remuneração, que pode ser **prefixada** ou **pós-fixada** (atrelada a um indexador). Ambos são **renda fixa**, porque a forma de remuneração é definida na contratação.\n\nA diferença que as bancas cobram: o **CDB é um título** e pode ser **negociado ou transferido** antes do vencimento; o **RDB é um recibo**, **inegociável e intransferível**. Por isso o RDB é menos flexível para quem pode precisar do dinheiro antes do prazo.\n\nSobre a garantia: CDB, RDB, poupança, depósitos à vista, LCI e LCA, entre outros, contam com a cobertura do **Fundo Garantidor de Créditos (FGC)**, até o limite fixado em seu regulamento. **Fundos de investimento não têm cobertura do FGC**, porque o cotista é dono de uma fração de uma carteira, e não credor do banco. Já a **poupança** é um depósito captado por instituições financeiras autorizadas, e não um título do Tesouro Nacional.',
        alternativas: [
          'Errada. O CDB é renda fixa; sua remuneração é definida na contratação (pré ou pós-fixada).',
          'Errada. O RDB é inegociável e intransferível.',
          'Correta. É a distinção clássica entre CDB e RDB.',
          'Errada. Fundos de investimento não são cobertos pelo FGC.',
          'Errada. A poupança é depósito em instituição financeira, não título do Tesouro.'
        ],
        dica: 'RDB = Recibo = fica Retido com o investidor (não se transfere). Fundo de investimento não tem FGC.'
      },
      fontes: [f('Banco Central do Brasil', U.bcb)]
    },

    {
      id: 'cba-004',
      materia: 'conhecimentos-bancarios',
      assunto: 'Produtos e serviços bancários',
      tipo: 'multipla',
      estilo: 'Cesgranrio',
      dificuldade: 2,
      objetivos: ['bancarios'],
      enunciado: 'Uma cliente emite um cheque com data futura (o chamado cheque "pré-datado"), mas o beneficiário o apresenta ao banco antes da data indicada. De acordo com a Lei n.º 7.357/1985 (Lei do Cheque), o banco sacado',
      alternativas: [
        'deve recusar o pagamento, pois o cheque é ordem de pagamento a prazo e a data futura vincula o banco.',
        'deve devolver o cheque, que só poderá ser reapresentado após 60 dias, prazo de apresentação para cheques da mesma praça.',
        'deve reter o cheque até a data indicada e só então efetuar o pagamento.',
        'deve pagá-lo no dia da apresentação, havendo fundos, pois o cheque é ordem de pagamento à vista.',
        'só poderá pagá-lo se o emitente autorizar expressamente a antecipação.'
      ],
      resposta: 3,
      explicacao: {
        resumo: 'O cheque é pagável à vista; apresentado antes da data indicada como de emissão, é pagável no dia da apresentação (art. 32 da Lei 7.357/1985).',
        detalhada: 'O **art. 32 da Lei 7.357/1985** dispõe que "o cheque é pagável **à vista**", considerando-se não escrita qualquer menção em contrário. O parágrafo único completa: "O cheque apresentado para pagamento **antes do dia indicado como data de emissão** é pagável **no dia da apresentação**". Para o banco, portanto, o "pré-datado" não existe: ele paga se houver fundos.\n\nO acordo de pós-datação vale **entre as partes** (emitente e beneficiário). Por isso o STJ editou a **Súmula 370**: "Caracteriza dano moral a apresentação antecipada de cheque pré-datado". Quem responde é o **beneficiário** que descumpriu o combinado, não o banco que pagou.\n\nOutros pontos frequentes: o **prazo de apresentação** é de **30 dias**, quando o cheque é emitido no lugar onde deve ser pago (mesma praça), e de **60 dias**, quando emitido em outro lugar do País ou no exterior (art. 33). O cheque deve conter, entre outros requisitos, a denominação "cheque", a ordem incondicional de pagar quantia determinada, o nome do banco sacado, o lugar de pagamento, a data e o lugar de emissão e a assinatura do emitente (art. 1º).',
        alternativas: [
          'Errada. O cheque é ordem de pagamento à vista; a menção a prazo é considerada não escrita.',
          'Errada. O prazo de apresentação para a mesma praça é de 30 dias, e a lei não prevê essa espera para reapresentação.',
          'Errada. A lei não autoriza o banco a reter o cheque até a data futura.',
          'Correta. Art. 32, caput e parágrafo único, da Lei 7.357/1985.',
          'Errada. A lei não exige autorização do emitente para o pagamento à vista.'
        ],
        dica: 'Prazo de apresentação: 30 dias na mesma praça, 60 dias em praças diferentes. Pré-datado apresentado antes da data é pago na hora (e gera dano moral contra quem o apresentou, Súmula 370 do STJ).'
      },
      fontes: [f('Lei 7.357/1985 (Lei do Cheque), arts. 1º, 32 e 33', U.l7357)]
    },

    {
      id: 'cba-005',
      materia: 'conhecimentos-bancarios',
      assunto: 'Pix e meios de pagamento',
      tipo: 'multipla',
      estilo: 'Cesgranrio',
      dificuldade: 1,
      objetivos: ['bancarios'],
      enunciado: 'O Pix, arranjo de pagamentos instantâneos instituído pelo Banco Central do Brasil, caracteriza-se por',
      alternativas: [
        'permitir transferências e pagamentos com liquidação em tempo real, 24 horas por dia, 7 dias por semana, inclusive em feriados.',
        'exigir, em todas as transações, que o pagador informe agência, número e tipo da conta do recebedor.',
        'funcionar apenas entre contas mantidas na mesma instituição financeira.',
        'ser operado e regulamentado pela Federação Brasileira de Bancos, sem participação do Banco Central.',
        'ser restrito a pessoas físicas, vedada sua utilização por empresas.'
      ],
      resposta: 0,
      explicacao: {
        resumo: 'O Pix liquida as transações em tempo real, a qualquer dia e hora, entre quaisquer instituições participantes, com regras definidas pelo Banco Central.',
        detalhada: 'O **Pix** é o arranjo de pagamentos instantâneos brasileiro, **instituído e regulamentado pelo Banco Central do Brasil**, que também opera a infraestrutura central de liquidação, o **SPI (Sistema de Pagamentos Instantâneos)**, e a base de chaves, o **DICT**. A transação é liquidada **em segundos**, **24 horas por dia, todos os dias do ano**, inclusive fins de semana e feriados.\n\nPara facilitar o uso, o Pix admite a identificação do recebedor por **chave** (CPF ou CNPJ, e-mail, número de celular ou chave aleatória), por **QR Code** ou pela digitação dos dados da conta. Funciona entre contas de **instituições diferentes**, para **pessoas físicas, empresas e entes governamentais**. Ao longo do tempo, ganhou funcionalidades como Pix Saque, Pix Troco, Pix Cobrança e Pix Automático.\n\nNa prova, lembre que o Pix convive com outros meios de pagamento (TED, boleto, cartões) e que é o **BCB**, e não uma associação privada, quem define suas regras. Limites de valor por período e horário dependem de regras do BCB e de configurações das instituições e do próprio usuário; por isso, estude a lógica do arranjo, e não números que podem mudar.',
        alternativas: [
          'Correta. Liquidação em tempo real e disponibilidade integral.',
          'Errada. O Pix pode ser feito com chave ou QR Code, dispensando os dados da conta.',
          'Errada. O Pix funciona entre instituições diferentes.',
          'Errada. O BCB é o instituidor e regulador do Pix e opera o SPI.',
          'Errada. Empresas e entes públicos também usam o Pix.'
        ],
        dica: 'Pix: instituído pelo BCB, liquidado no SPI, 24/7. A chave é um "apelido" da conta, não a conta em si.'
      },
      fontes: [f('Banco Central do Brasil', U.bcb)]
    },

    {
      id: 'cba-006',
      materia: 'conhecimentos-bancarios',
      assunto: 'Pix e meios de pagamento',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['bancarios'],
      enunciado: 'O Mecanismo Especial de Devolução (MED) do Pix permite a devolução de valores em caso de fundada suspeita de fraude ou de falha operacional, não se destinando a desfazer transações por mero arrependimento do pagador ou por desacordo comercial entre as partes.',
      resposta: true,
      explicacao: {
        resumo: 'Certo. O MED é voltado a fraudes e falhas operacionais; desacordos comerciais e arrependimento devem ser resolvidos entre as partes.',
        detalhada: 'O **Mecanismo Especial de Devolução (MED)** foi criado pelo Banco Central, no regulamento do Pix, para dar mais segurança ao arranjo. Ele padroniza as regras e os procedimentos para viabilizar a **devolução** de valores quando houver **fundada suspeita de uso do arranjo para fraude** ou quando ocorrer **falha operacional** nos sistemas das instituições envolvidas.\n\nFuncionamento simplificado: a vítima contesta a transação junto à sua instituição; esta registra a notificação, e a instituição do recebedor pode **bloquear cautelarmente** os recursos na conta de destino enquanto analisa o caso. Confirmada a fraude, os valores disponíveis são devolvidos. A devolução depende de haver saldo na conta do recebedor, e o mecanismo vem sendo aperfeiçoado pelo BCB ao longo do tempo.\n\nO MED **não** serve para desfazer um Pix feito por engano de digitação, por arrependimento ou por desacordo comercial (o produto chegou com defeito, por exemplo). Nesses casos, o pagador deve procurar o recebedor, os canais do fornecedor ou, se necessário, os órgãos de defesa do consumidor e o Judiciário. Já o recebedor que identifica um valor recebido por engano pode, por iniciativa própria, fazer a devolução pelo próprio Pix.',
        dica: 'MED = fraude ou falha operacional. Engano, arrependimento ou briga comercial ficam fora do MED.'
      },
      fontes: [f('Banco Central do Brasil', U.bcb)]
    },

    {
      id: 'cba-007',
      materia: 'conhecimentos-bancarios',
      assunto: 'Prevenção à lavagem de dinheiro',
      tipo: 'multipla',
      estilo: 'Cesgranrio',
      dificuldade: 2,
      objetivos: ['bancarios'],
      enunciado: 'A respeito da prevenção à lavagem de dinheiro, à luz da Lei n.º 9.613/1998, assinale a afirmativa correta.',
      alternativas: [
        'O crime de lavagem somente se consuma depois de concluída a fase de integração dos recursos à economia formal.',
        'Somente bens provenientes de crimes previstos em rol taxativo da lei, como o tráfico de drogas, podem ser objeto de lavagem.',
        'O Conselho de Controle de Atividades Financeiras (COAF) é órgão do Poder Judiciário.',
        'As instituições financeiras só podem comunicar operações suspeitas ao COAF mediante prévia autorização judicial.',
        'A doutrina costuma descrever o processo de lavagem em três etapas: colocação, ocultação e integração.'
      ],
      resposta: 4,
      explicacao: {
        resumo: 'O modelo clássico descreve a lavagem em três fases (colocação, ocultação e integração), mas o crime não depende de percorrer todas elas.',
        detalhada: 'A **lavagem de dinheiro** é o processo de dar aparência lícita a recursos de origem ilícita. A doutrina e os organismos internacionais descrevem três etapas: (1) **colocação**: introdução do dinheiro no sistema econômico, por exemplo com depósitos fracionados; (2) **ocultação** (também chamada de estratificação ou dissimulação): sucessão de transações para dificultar o rastreamento; (3) **integração**: retorno do dinheiro à economia formal com aparência legítima, como na compra de imóveis ou em investimentos em empresas.\n\nPelo **art. 1º da Lei 9.613/1998**, o crime consiste em **ocultar ou dissimular** a natureza, origem, localização, disposição, movimentação ou propriedade de bens, direitos ou valores provenientes, direta ou indiretamente, de **infração penal**. Desde a Lei 12.683/2012, **não existe mais rol taxativo** de crimes antecedentes: qualquer infração penal, inclusive contravenção, pode gerar a lavagem. E o crime não exige que as três fases sejam percorridas: a ocultação já basta.\n\nO **COAF** é a unidade de inteligência financeira do Brasil, hoje **vinculado administrativamente ao Banco Central** (Lei 13.974/2020). As pessoas obrigadas, como os bancos, devem **comunicar ao COAF** as operações suspeitas, **sem autorização judicial** e **sem dar ciência ao cliente** (art. 11, II). As comunicações feitas de boa-fé não geram responsabilidade civil ou administrativa (art. 11, § 2º).',
        alternativas: [
          'Errada. A lavagem se consuma com a ocultação ou dissimulação; não exige a integração.',
          'Errada. Desde a Lei 12.683/2012, qualquer infração penal pode ser antecedente da lavagem.',
          'Errada. O COAF é unidade de inteligência financeira vinculada administrativamente ao BCB, não órgão do Judiciário.',
          'Errada. A comunicação ao COAF é dever legal e não depende de ordem judicial.',
          'Correta. Colocação, ocultação e integração são as três fases clássicas.'
        ],
        dica: 'Fases: C-O-I (Colocação, Ocultação, Integração). Comunicação ao COAF: sem avisar o cliente e sem ordem judicial.'
      },
      fontes: [f('Lei 9.613/1998, arts. 1º, 10 e 11', U.l9613)]
    },

    {
      id: 'cba-008',
      materia: 'conhecimentos-bancarios',
      assunto: 'Prevenção à lavagem de dinheiro',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['bancarios'],
      enunciado: 'As instituições financeiras devem comunicar ao COAF as operações que possam constituir sérios indícios dos crimes previstos na Lei n.º 9.613/1998, abstendo-se de dar ciência desse ato a qualquer pessoa, inclusive àquela à qual se refira a informação.',
      resposta: true,
      explicacao: {
        resumo: 'Certo. É o dever previsto no art. 11, II, da Lei 9.613/1998: comunicar sem alertar o cliente.',
        detalhada: 'As **pessoas obrigadas** do **art. 9º da Lei 9.613/1998** (bancos, corretoras, seguradoras, administradoras de cartões, entre muitas outras) têm deveres de **identificar clientes e manter cadastros atualizados** (art. 10, I), **registrar operações** (art. 10, II), adotar **políticas, procedimentos e controles internos** (art. 10, III) e **comunicar operações suspeitas** (art. 11).\n\nO **art. 11, II**, determina que essas pessoas **comuniquem ao COAF**, no prazo de **24 horas**, a proposta ou realização das operações que se enquadrem nas hipóteses da lei e das normas dos reguladores, **abstendo-se de dar ciência de tal ato a qualquer pessoa, inclusive àquela à qual se refira a informação**. A vedação existe para não frustrar a investigação: avisar o cliente permitiria que ele movimentasse ou escondesse os recursos.\n\nExemplo: um cliente com renda declarada modesta passa a receber dezenas de depósitos em espécie fracionados e a transferi-los imediatamente para contas de terceiros. O banco deve comunicar a operação ao COAF e **não** pode informar o cliente sobre isso. A instituição que descumpre os deveres de prevenção sujeita-se às sanções administrativas do art. 12 (advertência, multa, inabilitação temporária de administradores e cassação ou suspensão da autorização de funcionamento).',
        dica: 'Comunicar ao COAF: obrigação legal, em 24 horas, sem avisar o cliente e sem precisar de ordem judicial.'
      },
      fontes: [f('Lei 9.613/1998, arts. 9º a 12', U.l9613)]
    }
  ];

  var aulas = [

    {
      id: 'aula-dco-direitos',
      materia: 'direito-constitucional',
      assunto: 'Direitos e garantias fundamentais',
      titulo: 'Direitos e garantias fundamentais: o que mais cai no art. 5º',
      duracaoMin: 20,
      resumo: 'Características, destinatários e dimensões dos direitos fundamentais, as reservas de jurisdição do art. 5º, os crimes com tratamento constitucional especial e a hierarquia dos tratados de direitos humanos.',
      secoes: [
        {
          titulo: 'Direitos x garantias, características e destinatários',
          texto: 'A CF organiza o Título II em cinco capítulos: direitos e deveres individuais e coletivos (art. 5º), direitos sociais (arts. 6º a 11), nacionalidade (arts. 12 e 13), direitos políticos (arts. 14 a 16) e partidos políticos (art. 17).\n\n**Direitos** são os bens e vantagens protegidos (vida, liberdade, propriedade); **garantias** são os instrumentos que asseguram esses direitos (o devido processo legal, o habeas corpus, a vedação de tribunal de exceção). Na síntese clássica de Rui Barbosa, os direitos são disposições declaratórias; as garantias, assecuratórias.\n\nCaracterísticas mais cobradas:\n- **Historicidade**: surgem e evoluem com a história.\n- **Universalidade**: destinam-se a todos os seres humanos.\n- **Relatividade**: nenhum direito é absoluto; havendo colisão, aplica-se a ponderação.\n- **Irrenunciabilidade e inalienabilidade**: o titular pode deixar de exercê-los, mas não pode abrir mão deles definitivamente.\n- **Imprescritibilidade**: não se perdem pelo decurso do tempo.\n\nEmbora o caput do art. 5º fale em "brasileiros e estrangeiros residentes no País", o STF entende que os direitos fundamentais alcançam também o **estrangeiro não residente** (um turista pode impetrar habeas corpus) e, no que for compatível, as **pessoas jurídicas**. O **§ 1º** do art. 5º estabelece que as normas definidoras dos direitos e garantias fundamentais têm **aplicação imediata**.'
        },
        {
          titulo: 'Dimensões (gerações) dos direitos',
          texto: 'A doutrina classifica os direitos em dimensões, conforme o momento histórico em que foram reconhecidos, associando as três primeiras ao lema da Revolução Francesa:\n\n- **1ª dimensão (liberdade)**: direitos civis e políticos, que exigem abstenção do Estado (liberdade de expressão, de locomoção, propriedade, voto).\n- **2ª dimensão (igualdade)**: direitos sociais, econômicos e culturais, que exigem prestações do Estado (saúde, educação, previdência, trabalho).\n- **3ª dimensão (fraternidade ou solidariedade)**: direitos difusos e coletivos (meio ambiente equilibrado, paz, desenvolvimento, proteção do consumidor).\n\nParte da doutrina fala ainda em 4ª dimensão (democracia, pluralismo, informação) e em 5ª dimensão (paz, na formulação de Paulo Bonavides). Prefira o termo **dimensão**: as novas não substituem as anteriores, somam-se a elas.'
        },
        {
          titulo: 'Reserva de jurisdição: o que só o juiz pode autorizar',
          texto: 'Algumas restrições a direitos fundamentais só podem ser determinadas pelo **Poder Judiciário**. É a chamada **reserva de jurisdição**, que nem a CPI, nem o Ministério Público, nem a autoridade policial podem ultrapassar.\n\n- **Domicílio (art. 5º, XI)**: sem consentimento do morador, só se entra em flagrante delito, desastre ou para prestar socorro (a qualquer hora), ou, **durante o dia, por determinação judicial**.\n- **Comunicações telefônicas (art. 5º, XII)**: a interceptação depende de **ordem judicial**, nas hipóteses e na forma da lei (Lei 9.296/1996), **para fins de investigação criminal ou instrução processual penal**.\n- **Prisão (art. 5º, LXI)**: ninguém será preso senão em flagrante delito ou por ordem escrita e fundamentada de autoridade judiciária competente, salvo nos casos de transgressão militar ou crime propriamente militar.\n\n**Exemplo**: uma CPI pode quebrar o sigilo bancário e de registros telefônicos de um investigado, por decisão fundamentada; mas não pode mandar interceptar o telefone dele nem determinar busca na casa dele. Em prova, sempre que aparecer "interceptação", "busca domiciliar" ou "prisão" fora do flagrante, pense no juiz.'
        },
        {
          titulo: 'Crimes com tratamento constitucional especial',
          texto: 'O art. 5º traz um quadro de crimes com regras próprias que as bancas adoram embaralhar:\n\n- **Racismo (XLII)**: inafiançável e **imprescritível**, sujeito à pena de reclusão.\n- **Ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (XLIV)**: inafiançável e **imprescritível**.\n- **Tortura, tráfico ilícito de entorpecentes e drogas afins, terrorismo e crimes hediondos (XLIII)**: inafiançáveis e **insuscetíveis de graça ou anistia**; por eles respondem os mandantes, os executores e os que, podendo evitá-los, se omitirem.\n\nMemorize: **imprescritíveis são só dois** (racismo e ação de grupos armados). Os "3T + H" (tortura, tráfico, terrorismo e hediondos) prescrevem normalmente, mas não admitem fiança, graça ou anistia.\n\nOutras regras penais do art. 5º: a lei penal não retroagirá, salvo para beneficiar o réu (XL); nenhuma pena passará da pessoa do condenado, podendo a obrigação de reparar o dano e a decretação do perdimento de bens ser estendidas aos sucessores, até o limite do valor do patrimônio transferido (XLV); não haverá penas de morte (salvo em caso de guerra declarada), de caráter perpétuo, de trabalhos forçados, de banimento ou cruéis (XLVII).'
        },
        {
          titulo: 'Tratados de direitos humanos e prisão civil',
          texto: 'Depois da **EC 45/2004**, os tratados internacionais podem ocupar três posições na hierarquia normativa:\n\n- **Tratado de direitos humanos aprovado pelo rito do art. 5º, § 3º** (em cada Casa, dois turnos, três quintos dos votos): **equivalente a emenda constitucional**. Exemplo: Convenção sobre os Direitos das Pessoas com Deficiência.\n- **Tratado de direitos humanos aprovado sem esse rito**: **supralegal** (abaixo da CF, acima das leis), conforme o STF no RE 466.343. Exemplo: Pacto de São José da Costa Rica.\n- **Tratado que não versa sobre direitos humanos**: **lei ordinária**.\n\nO art. 5º, LXVII, ainda menciona a prisão civil do depositário infiel, mas, como o Pacto de São José só admite prisão civil por dívida alimentar, a legislação infraconstitucional que a regulava perdeu eficácia. Daí a **Súmula Vinculante 25**: é ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito. A única prisão civil por dívida admitida hoje é a do **devedor de alimentos**, em caso de inadimplemento voluntário e inescusável.'
        }
      ],
      pontosChave: [
        'Direitos declaram bens protegidos; garantias são os instrumentos que os asseguram.',
        'Nenhum direito fundamental é absoluto; o estrangeiro não residente também é protegido.',
        'Casa: flagrante, desastre e socorro a qualquer hora; mandado judicial só durante o dia.',
        'Interceptação telefônica, busca domiciliar e prisão fora do flagrante exigem ordem judicial (reserva de jurisdição).',
        'Imprescritíveis: só racismo e ação de grupos armados. Tortura, tráfico, terrorismo e hediondos: sem fiança, graça ou anistia.',
        'Tratado de direitos humanos com o rito do § 3º = emenda; sem o rito = supralegal (SV 25: não há prisão do depositário infiel).'
      ],
      fontes: [f('Constituição Federal, art. 5º', U.cf), f('Supremo Tribunal Federal', U.stf)]
    },

    {
      id: 'aula-dco-remedios',
      materia: 'direito-constitucional',
      assunto: 'Remédios constitucionais',
      titulo: 'Remédios constitucionais: HC, HD, MS, MI e ação popular',
      duracaoMin: 20,
      resumo: 'Quando cabe cada remédio constitucional, quem pode propor, o que é gratuito e as súmulas que mais aparecem em prova.',
      secoes: [
        {
          titulo: 'Visão geral: um remédio para cada problema',
          texto: 'Os remédios constitucionais são ações previstas na própria Constituição para proteger direitos contra ilegalidade ou abuso de poder. Quadro de comparação:\n\n- **Habeas corpus (art. 5º, LXVIII)**: protege a **liberdade de locomoção** contra violência ou coação, atual ou iminente, por ilegalidade ou abuso de poder.\n- **Habeas data (LXXII)**: assegura o **conhecimento** de informações **relativas à pessoa do impetrante** em registros ou bancos de dados de entidades governamentais ou de caráter público, e a **retificação** desses dados.\n- **Mandado de segurança (LXIX e LXX)**: protege **direito líquido e certo** não amparado por HC ou HD, contra ato de autoridade pública ou de agente de pessoa jurídica no exercício de atribuições do Poder Público.\n- **Mandado de injunção (LXXI)**: cabível quando a **falta de norma regulamentadora** torna inviável o exercício de direitos e liberdades constitucionais e das prerrogativas inerentes à nacionalidade, à soberania e à cidadania.\n- **Ação popular (LXXIII)**: permite ao **cidadão** anular ato lesivo ao patrimônio público, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural.\n\nO mandado de segurança é **residual**: só cabe quando não for caso de HC ou HD.'
        },
        {
          titulo: 'Habeas corpus e habeas data',
          texto: 'O **habeas corpus** pode ser impetrado por **qualquer pessoa**, em seu favor ou de outrem, sem necessidade de advogado, inclusive por estrangeiro e por pessoa jurídica (sempre em favor de pessoa física). Pode ser **preventivo** (ameaça de constrangimento) ou **repressivo** (constrangimento já ocorrido). A CF diz que não cabe HC em relação a punições disciplinares militares (art. 142, § 2º), mas o STF admite o exame dos pressupostos de legalidade da punição, como a competência da autoridade e a previsão da pena, sem entrar no mérito.\n\nO **habeas data** protege informações **da própria pessoa**. Para dados de terceiros ou informações de interesse coletivo, o caminho é o direito de informação (art. 5º, XXXIII) e, se ele for negado, o mandado de segurança. A Lei 9.507/1997 exige a prova da **recusa administrativa** prévia, e o STJ consolidou na **Súmula 2** que não cabe habeas data se não houve recusa de informações pela autoridade administrativa.\n\nAmbos são **gratuitos** (art. 5º, LXXVII).'
        },
        {
          titulo: 'Mandado de segurança individual e coletivo',
          texto: 'O mandado de segurança exige **direito líquido e certo**, isto é, comprovado de plano por **prova pré-constituída**, sem necessidade de produzir provas no curso do processo. A Lei 12.016/2009 fixa o prazo **decadencial de 120 dias**, contados da ciência do ato impugnado (art. 23).\n\nO **mandado de segurança coletivo** (art. 5º, LXX) pode ser impetrado por:\n- **partido político com representação no Congresso Nacional**;\n- **organização sindical, entidade de classe ou associação legalmente constituída e em funcionamento há pelo menos um ano**, em defesa dos interesses de seus membros ou associados.\n\nSúmulas essenciais do STF:\n- **Súmula 629**: a impetração por entidade de classe em favor dos associados **independe da autorização** destes.\n- **Súmula 630**: a entidade tem legitimação ainda quando a pretensão interesse **apenas a uma parte** da categoria.\n- **Súmula 266**: não cabe mandado de segurança contra **lei em tese**.\n- **Súmula 269**: o mandado de segurança **não é substitutivo de ação de cobrança**.\n\n**Exemplo**: o candidato aprovado dentro do número de vagas que não foi nomeado no prazo de validade do concurso, com documentos que comprovam a situação, pode usar o MS, porque o STF reconhece o direito subjetivo à nomeação nesse caso, salvo situações excepcionais devidamente motivadas.'
        },
        {
          titulo: 'Mandado de injunção',
          texto: 'O mandado de injunção combate a **omissão normativa** que impede o exercício de um direito constitucional. Ele é regulado pela **Lei 13.300/2016**, que admite impetração individual e coletiva.\n\nReconhecida a mora, o Judiciário (art. 8º da lei):\n- determina **prazo razoável** para que o impetrado edite a norma; e\n- estabelece as **condições** em que se dará o exercício do direito, caso a mora não seja suprida no prazo.\n\nO prazo pode ser dispensado se o impetrado já deixou de atender prazo fixado em mandado de injunção anterior. A decisão, em regra, tem eficácia **apenas entre as partes**, mas pode ganhar eficácia **ultra partes ou erga omnes** quando isso for inerente ou indispensável ao exercício do direito (art. 9º).\n\n**Exemplo clássico**: o direito de greve dos servidores públicos (art. 37, VII) depende de lei específica. Diante da omissão, o STF, nos Mandados de Injunção 670, 708 e 712, determinou a aplicação, no que couber, da lei de greve do setor privado (Lei 7.783/1989).'
        },
        {
          titulo: 'Ação popular',
          texto: 'A ação popular pode ser proposta por **qualquer cidadão**, isto é, o nacional no gozo dos direitos políticos, que prova essa condição com o **título de eleitor** (Lei 4.717/1965, art. 1º, § 3º). Por isso:\n- **pessoa jurídica não pode propô-la** (Súmula 365 do STF);\n- o **Ministério Público não é autor**, mas acompanha a ação e pode assumi-la se o autor desistir;\n- o estrangeiro, em regra, não tem legitimidade, salvo o português equiparado no gozo de direitos políticos.\n\nO autor fica **isento de custas e do ônus da sucumbência, salvo comprovada má-fé**. O objeto é amplo: patrimônio público ou de entidade de que o Estado participe, moralidade administrativa, meio ambiente e patrimônio histórico e cultural.\n\n**Comparação rápida com o MS**: no mandado de segurança, o impetrante defende **direito próprio**, líquido e certo; na ação popular, o cidadão defende o **interesse da coletividade**, mesmo sem prejuízo pessoal.'
        }
      ],
      pontosChave: [
        'HC protege a locomoção; HD protege dados da própria pessoa; MS é residual e exige direito líquido e certo.',
        'HC e HD são gratuitos; na ação popular, a isenção de custas cai se houver má-fé.',
        'MS coletivo: partido com representação no CN, sindicato, entidade de classe ou associação com um ano de funcionamento.',
        'MS coletivo dispensa autorização dos associados (Súmula 629) e pode defender parte da categoria (Súmula 630).',
        'Habeas data exige recusa administrativa prévia (Súmula 2 do STJ).',
        'Ação popular: só o cidadão-eleitor; pessoa jurídica não (Súmula 365 do STF).',
        'Mandado de injunção (Lei 13.300/2016): prazo para editar a norma e condições para exercer o direito.'
      ],
      fontes: [f('Constituição Federal, art. 5º, LXVIII a LXXIII', U.cf), f('Supremo Tribunal Federal', U.stf)]
    },

    {
      id: 'aula-dad-atos',
      materia: 'direito-administrativo',
      assunto: 'Atos administrativos',
      titulo: 'Atos administrativos: elementos, atributos e extinção',
      duracaoMin: 20,
      resumo: 'Os cinco elementos e os quatro atributos do ato administrativo, a diferença entre vinculação e discricionariedade, a teoria dos motivos determinantes e as formas de extinção e convalidação.',
      secoes: [
        {
          titulo: 'Conceito e elementos (requisitos)',
          texto: 'Ato administrativo é a manifestação unilateral de vontade da Administração (ou de quem lhe faça as vezes), sob regime de direito público, que produz efeitos jurídicos imediatos. Seus **elementos** são cinco, extraídos do art. 2º da Lei 4.717/1965 (Lei da Ação Popular):\n\n- **Competência**: quem pode praticar o ato, conforme a lei. Elemento sempre **vinculado**.\n- **Finalidade**: o resultado de interesse público que a lei quer alcançar. Também **vinculado**.\n- **Forma**: o modo de exteriorização do ato (em regra, escrita). **Vinculado**.\n- **Motivo**: a situação de fato e de direito que autoriza ou exige o ato. Pode ser **vinculado ou discricionário**.\n- **Objeto**: o efeito jurídico imediato produzido (o conteúdo do ato). Pode ser **vinculado ou discricionário**.\n\nMnemônico: **COM-FI-FOR-M-OB**. O **mérito administrativo** (juízo de conveniência e oportunidade) reside justamente no **motivo** e no **objeto** dos atos discricionários.'
        },
        {
          titulo: 'Atributos: PATI',
          texto: 'Os atributos são características que diferenciam o ato administrativo dos atos privados:\n\n- **Presunção de legitimidade e veracidade**: presume-se que o ato está conforme a lei e que os fatos nele descritos são verdadeiros. É **relativa** e está presente em **todos** os atos.\n- **Autoexecutoriedade**: a Administração executa o ato por seus próprios meios, sem ordem judicial, quando a lei autoriza ou em situação de urgência. Ex.: demolição de prédio em risco iminente de desabamento.\n- **Tipicidade**: o ato deve corresponder a figuras previamente definidas em lei.\n- **Imperatividade**: o ato se impõe ao particular independentemente de sua concordância. Não existe nos atos **negociais** (licenças, autorizações) nem nos **enunciativos** (certidões, pareceres).\n\n**Atenção**: a multa é imperativa, mas sua **cobrança forçada não é autoexecutória**: depende de execução fiscal.'
        },
        {
          titulo: 'Vinculação, discricionariedade e motivos determinantes',
          texto: 'No **ato vinculado**, a lei define todos os elementos e a Administração não tem margem de escolha: preenchidos os requisitos, deve praticar o ato. Ex.: licença para construir e aposentadoria compulsória.\n\nNo **ato discricionário**, a lei deixa margem de escolha quanto ao **motivo** e/ou ao **objeto**, segundo critérios de conveniência e oportunidade. Ex.: autorização de uso de bem público e exoneração de cargo em comissão.\n\nO Judiciário controla a **legalidade** de qualquer ato, inclusive dos discricionários (competência, forma, finalidade, razoabilidade e veracidade dos motivos), mas **não substitui o mérito** pela sua própria escolha.\n\nPela **teoria dos motivos determinantes**, os motivos declarados vinculam a validade do ato. Mesmo que a motivação fosse dispensável, se a autoridade declarou um motivo e ele é **falso ou inexistente**, o ato é nulo. **Exemplo**: exoneração de comissionado "por corte de gastos" seguida da nomeação de outra pessoa para o mesmo cargo.'
        },
        {
          titulo: 'Extinção: anulação, revogação e outras formas',
          texto: 'Quadro comparativo:\n\n- **Anulação**: retira ato **ilegal**. Pode ser feita pela **Administração** (autotutela) ou pelo **Judiciário**. Efeitos, em regra, **retroativos (ex tunc)**. Na esfera federal, para atos favoráveis ao destinatário de boa-fé, o prazo é de **5 anos** (art. 54 da Lei 9.784/1999).\n- **Revogação**: retira ato **válido**, por **conveniência e oportunidade**. Só pela **própria Administração** (no exercício da função jurisdicional, o Judiciário não revoga atos de outro Poder). Efeitos **prospectivos (ex nunc)**. Não alcança atos vinculados, atos que já exauriram seus efeitos nem direitos adquiridos.\n- **Cassação**: extinção porque o **beneficiário descumpriu** as condições do ato. Ex.: licença de funcionamento cassada porque o estabelecimento passou a exercer atividade proibida.\n- **Caducidade**: extinção porque uma **nova norma** tornou inadmissível a situação antes permitida.\n- **Contraposição**: extinção por um **novo ato** com efeitos opostos. Ex.: a exoneração extingue os efeitos da nomeação.\n\nA **Súmula 473 do STF** resume a autotutela: a Administração pode anular seus atos ilegais e revogar os inconvenientes ou inoportunos, respeitados os direitos adquiridos e ressalvada a apreciação judicial.'
        },
        {
          titulo: 'Convalidação',
          texto: '**Convalidar** é corrigir um ato com **vício sanável**, com efeitos retroativos, preservando o que ele produziu. O **art. 55 da Lei 9.784/1999** permite a convalidação pela própria Administração quando a decisão não acarretar **lesão ao interesse público** nem **prejuízo a terceiros**.\n\nVícios **sanáveis**, segundo a doutrina majoritária:\n- **competência**, salvo se exclusiva;\n- **forma**, salvo se essencial à validade do ato.\n\nVícios **insanáveis**: **motivo**, **finalidade** e **objeto**. Um ato praticado com desvio de finalidade, por exemplo, nunca pode ser convalidado.\n\n**Exemplo**: um ato assinado por servidor subordinado, quando a competência (não exclusiva) era do chefe, pode ser ratificado pelo chefe competente, desde que não haja lesão ao interesse público nem prejuízo a terceiros.'
        }
      ],
      pontosChave: [
        'Elementos: competência, finalidade, forma, motivo e objeto (COM-FI-FOR-M-OB). O mérito está no motivo e no objeto.',
        'Atributos: presunção de legitimidade (em todos os atos), autoexecutoriedade, tipicidade e imperatividade (PATI).',
        'O motivo declarado vincula a validade do ato, mesmo quando a motivação era dispensável.',
        'Anulação: ato ilegal, ex tunc, pela Administração ou pelo Judiciário. Revogação: ato válido, ex nunc, só pela Administração.',
        'Na esfera federal, anular ato favorável ao destinatário de boa-fé decai em 5 anos (art. 54 da Lei 9.784/1999).',
        'Convalidam-se vícios de competência (não exclusiva) e de forma (não essencial).'
      ],
      fontes: [f('Lei 9.784/1999, arts. 50 a 55', U.l9784), f('STF, Súmula 473', U.stf)]
    },

    {
      id: 'aula-dad-principios',
      materia: 'direito-administrativo',
      assunto: 'Princípios da Administração',
      titulo: 'Princípios da Administração Pública: LIMPE e além',
      duracaoMin: 18,
      resumo: 'Os princípios expressos do art. 37 da CF, os princípios implícitos mais cobrados e o modo como as bancas transformam cada um deles em pegadinha.',
      secoes: [
        {
          titulo: 'Supraprincípios e princípios expressos',
          texto: 'A doutrina aponta dois **supraprincípios** que estruturam o regime jurídico-administrativo: a **supremacia do interesse público sobre o privado**, que fundamenta prerrogativas (desapropriar, aplicar sanções, alterar contratos), e a **indisponibilidade do interesse público**, que impõe limites (licitar, fazer concurso, prestar contas).\n\nO **caput do art. 37 da CF** traz cinco princípios **expressos**, aplicáveis à Administração direta e indireta de **todos os Poderes** e de **todos os entes** federativos: **L**egalidade, **I**mpessoalidade, **M**oralidade, **P**ublicidade e **E**ficiência (**LIMPE**). A eficiência foi incluída pela **EC 19/1998**.'
        },
        {
          titulo: 'Legalidade e impessoalidade',
          texto: '**Legalidade**: o particular pode fazer tudo o que a lei não proíbe (art. 5º, II); a Administração só pode fazer **o que a lei permite ou autoriza**. A própria CF prevê situações excepcionais que restringem esse princípio, como as medidas provisórias, o estado de defesa e o estado de sítio.\n\n**Impessoalidade** tem várias faces:\n- **finalidade**: o ato deve buscar o interesse público, sem favorecer nem perseguir pessoas;\n- **isonomia**: tratamento igual a quem está na mesma situação (concurso público, licitação);\n- **imputação ao órgão**: o ato é da Administração, não do agente; por isso é vedada a **promoção pessoal** na publicidade oficial (art. 37, § 1º);\n- **vedação ao nepotismo**: a **Súmula Vinculante 13** proíbe a nomeação de cônjuge, companheiro ou parente até o **terceiro grau**, inclusive, para cargos em comissão, de confiança ou funções gratificadas, incluindo o nepotismo cruzado (designações recíprocas).'
        },
        {
          titulo: 'Moralidade, publicidade e eficiência',
          texto: '**Moralidade**: exige atuação ética, leal e de boa-fé. Não basta o ato ser legal; ele também deve ser honesto. Sua violação pode configurar **improbidade administrativa** (art. 37, § 4º) e pode ser combatida por **ação popular** (art. 5º, LXXIII).\n\n**Publicidade**: os atos devem ser divulgados, como condição de eficácia e instrumento de controle social. Comporta exceções: sigilo imprescindível à **segurança da sociedade e do Estado** e proteção da **intimidade** (art. 5º, XXXIII e LX). A Lei de Acesso à Informação (Lei 12.527/2011) trata a transparência como regra e o sigilo como exceção.\n\n**Eficiência**: impõe a busca de resultados, qualidade, rapidez e economicidade. Gerou instrumentos como a avaliação especial de desempenho para a aquisição da estabilidade (art. 41, § 4º) e a perda do cargo por insuficiência de desempenho, na forma de lei complementar (art. 41, § 1º, III).'
        },
        {
          titulo: 'Princípios implícitos (ou reconhecidos)',
          texto: 'Muitos princípios não estão no caput do art. 37, mas decorrem do sistema ou de leis, como o **art. 2º da Lei 9.784/1999**, que menciona legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, segurança jurídica, interesse público e eficiência.\n\n- **Razoabilidade e proporcionalidade**: a medida deve ser adequada, necessária e proporcional em sentido estrito; vedam-se exageros. Ex.: interditar um restaurante inteiro por causa de uma lâmpada queimada.\n- **Autotutela**: a Administração revê seus atos, anulando os ilegais e revogando os inconvenientes (Súmula 473 do STF).\n- **Motivação**: a Administração deve indicar os fundamentos de fato e de direito de suas decisões (art. 50 da Lei 9.784/1999).\n- **Segurança jurídica**: protege a confiança legítima e veda a aplicação retroativa de nova interpretação (art. 2º, parágrafo único, XIII, da Lei 9.784/1999).\n- **Continuidade do serviço público**: os serviços essenciais não podem parar, o que explica limites ao direito de greve e regras sobre a interrupção do serviço.'
        },
        {
          titulo: 'Como as bancas cobram: exemplos práticos',
          texto: '- "Placa de obra com foto do prefeito": violação da **impessoalidade** (art. 37, § 1º).\n- "Nomeação do sobrinho do secretário para cargo em comissão": nepotismo vedado pela SV 13 (sobrinho é parente de 3º grau). Se for **primo** (4º grau), a SV 13 **não** alcança.\n- "O princípio da eficiência é originário da CF de 1988": **errado**; veio com a EC 19/1998.\n- "A Administração pode fazer tudo o que a lei não proíbe": **errado**; essa é a legalidade para o particular.\n- "A publicidade é absoluta": **errado**; há sigilo para a segurança da sociedade e do Estado e para a proteção da intimidade.\n- "Os princípios do art. 37 aplicam-se apenas ao Poder Executivo": **errado**; alcançam a Administração de todos os Poderes e entes.'
        }
      ],
      pontosChave: [
        'LIMPE: legalidade, impessoalidade, moralidade, publicidade e eficiência (esta incluída pela EC 19/1998).',
        'Legalidade administrativa: a Administração só faz o que a lei permite ou autoriza.',
        'Promoção pessoal na publicidade oficial viola a impessoalidade (art. 37, § 1º).',
        'SV 13: nepotismo até o 3º grau, inclusive, abrangendo designações recíprocas; primo (4º grau) fica fora.',
        'Publicidade é a regra; o sigilo é exceção (segurança da sociedade e do Estado e intimidade).',
        'Razoabilidade, proporcionalidade, autotutela, motivação, segurança jurídica e continuidade são princípios implícitos muito cobrados.'
      ],
      fontes: [f('Constituição Federal, art. 37', U.cf), f('Lei 9.784/1999, art. 2º', U.l9784), f('STF, Súmula Vinculante 13', U.stf)]
    },

    {
      id: 'aula-dpe-crime',
      materia: 'direito-penal',
      assunto: 'Teoria do crime',
      titulo: 'Teoria do crime: do fato típico ao erro',
      duracaoMin: 22,
      resumo: 'Conceito analítico de crime, dolo e culpa, iter criminis, tentativa e seus institutos vizinhos, e a diferença entre erro de tipo e erro de proibição.',
      secoes: [
        {
          titulo: 'Conceito analítico de crime',
          texto: 'Pela concepção **tripartida**, majoritária na doutrina e nas bancas, crime é **fato típico, ilícito (antijurídico) e culpável**.\n\n- **Fato típico**: conduta humana que se amolda a um tipo penal. Elementos: **conduta** (dolosa ou culposa, comissiva ou omissiva), **resultado** (nos crimes materiais), **nexo causal** e **tipicidade**.\n- **Ilicitude**: contrariedade da conduta ao ordenamento. Presume-se, salvo se presente uma **excludente** (art. 23): estado de necessidade, legítima defesa, estrito cumprimento de dever legal e exercício regular de direito.\n- **Culpabilidade**: juízo de reprovação sobre o autor. Elementos: **imputabilidade**, **potencial consciência da ilicitude** e **exigibilidade de conduta diversa**.\n\nA análise é sequencial: só se examina a ilicitude de um fato típico, e só se examina a culpabilidade de um fato típico e ilícito.'
        },
        {
          titulo: 'Dolo e culpa',
          texto: 'O **art. 18 do CP** define:\n\n- **Crime doloso**: quando o agente **quis o resultado** (dolo direto) ou **assumiu o risco de produzi-lo** (dolo eventual).\n- **Crime culposo**: quando o agente deu causa ao resultado por **imprudência** (agir sem cautela), **negligência** (deixar de tomar um cuidado devido) ou **imperícia** (falta de aptidão técnica no exercício de arte, profissão ou ofício).\n\nRegra importantíssima (art. 18, parágrafo único): **salvo os casos expressos em lei, ninguém pode ser punido por fato previsto como crime senão quando o pratica dolosamente**. Ou seja, a modalidade culposa precisa estar **expressamente prevista** no tipo.\n\nDiferença que mais cai: no **dolo eventual**, o agente prevê o resultado e **não se importa** com ele ("seja o que for"); na **culpa consciente**, ele prevê o resultado, mas **acredita sinceramente** que ele não ocorrerá ("comigo não acontece").'
        },
        {
          titulo: 'Iter criminis, consumação e tentativa',
          texto: 'O caminho do crime tem quatro fases: **cogitação**, **preparação**, **execução** e **consumação**. Em regra, cogitação e preparação **não são puníveis**, salvo quando a lei transforma o ato preparatório em crime autônomo (como a associação criminosa, art. 288).\n\nPelo **art. 14**, o crime é:\n- **consumado**, quando nele se reúnem todos os elementos de sua definição legal;\n- **tentado**, quando, iniciada a execução, não se consuma **por circunstâncias alheias à vontade do agente**.\n\nSalvo disposição em contrário, a tentativa é punida com a pena do crime consumado **diminuída de um a dois terços** (art. 14, parágrafo único). Quanto mais perto da consumação o agente chegou, menor a redução.\n\nSegundo a doutrina majoritária, não admitem tentativa: crimes **culposos**, **preterdolosos**, **omissivos próprios** e **habituais**. E a tentativa de **contravenção** não é punível (art. 4º da Lei das Contravenções Penais).'
        },
        {
          titulo: 'Os vizinhos da tentativa: quadro de comparação',
          texto: '- **Desistência voluntária (art. 15)**: o agente, **podendo prosseguir**, interrompe a execução por vontade própria. Responde só pelos atos já praticados.\n- **Arrependimento eficaz (art. 15)**: o agente **esgota a execução**, mas age para **impedir o resultado**, e consegue. Responde só pelos atos já praticados.\n- **Arrependimento posterior (art. 16)**: o crime **já se consumou**, sem violência ou grave ameaça à pessoa; o agente repara o dano ou restitui a coisa, voluntariamente, **até o recebimento da denúncia ou da queixa**. Pena reduzida de **um a dois terços**.\n- **Crime impossível (art. 17)**: por **ineficácia absoluta do meio** ou **absoluta impropriedade do objeto**, era impossível consumar o crime. **Não se pune** nem a tentativa. Ex.: tentar matar com arma de brinquedo, ou atirar em quem já estava morto. É também a base da **Súmula 145 do STF** (flagrante preparado).\n\nFórmula de Frank para separar tentativa e desistência: na tentativa, o agente **quer prosseguir, mas não pode**; na desistência, **pode prosseguir, mas não quer**.'
        },
        {
          titulo: 'Erro de tipo e erro de proibição',
          texto: '- **Erro de tipo (art. 20)**: o agente se engana sobre um **elemento do tipo**; "não sabe o que faz". Sempre **exclui o dolo**. Se **inevitável**, exclui também a culpa (o fato é atípico); se **evitável**, permite a punição por **crime culposo**, se previsto em lei. Ex.: o caçador que atira num vulto pensando tratar-se de um animal.\n- **Erro de proibição (art. 21)**: o agente sabe o que faz, mas acredita que sua conduta é **lícita**; "sabe o que faz, mas acha que pode". Afeta a **culpabilidade** (potencial consciência da ilicitude). Se **inevitável**, **isenta de pena**; se **evitável**, **reduz a pena de um sexto a um terço**.\n\nO art. 21 começa dizendo que o **desconhecimento da lei é inescusável**, mas, logo em seguida, admite que o erro sobre a ilicitude do fato, se inevitável, isente de pena. Não há contradição: ninguém se exime alegando que não leu o Código, mas pode ser isento quem, nas circunstâncias concretas, não tinha como perceber que a conduta era proibida.'
        }
      ],
      pontosChave: [
        'Crime (conceito tripartido) = fato típico + ilícito + culpável.',
        'A culpa só é punida quando expressamente prevista em lei (art. 18, parágrafo único).',
        'Tentativa: execução iniciada, não consumada por circunstâncias alheias à vontade do agente; pena reduzida de 1 a 2/3.',
        'Desistência voluntária e arrependimento eficaz: o agente responde só pelos atos já praticados.',
        'Arrependimento posterior: crime sem violência ou grave ameaça, reparação até o recebimento da denúncia, redução de 1 a 2/3.',
        'Crime impossível (meio ou objeto absolutamente inidôneo) não é punido; flagrante preparado = Súmula 145 do STF.',
        'Erro de tipo exclui o dolo; erro de proibição inevitável isenta de pena e, se evitável, reduz de 1/6 a 1/3.'
      ],
      fontes: [f('Código Penal, arts. 13 a 23', U.cp), f('STF, Súmula 145', U.stf)]
    },

    {
      id: 'aula-cba-sfn',
      materia: 'conhecimentos-bancarios',
      assunto: 'Sistema Financeiro Nacional',
      titulo: 'Sistema Financeiro Nacional: estrutura e funções',
      duracaoMin: 18,
      resumo: 'Como o SFN se organiza em órgãos normativos, supervisores e operadores, o papel do CMN e do Banco Central e o que diferencia as principais instituições financeiras.',
      secoes: [
        {
          titulo: 'O que é o SFN e onde ele está na lei',
          texto: 'O **Sistema Financeiro Nacional (SFN)** é o conjunto de instituições, órgãos e regras que viabilizam a transferência de recursos entre quem poupa (agentes superavitários) e quem precisa de recursos (agentes deficitários). Essa **intermediação financeira** é o que permite crédito, investimento e pagamentos.\n\nNa Constituição, o **art. 192** dispõe que o SFN será estruturado de forma a promover o desenvolvimento equilibrado do País e a servir aos interesses da coletividade, em todas as partes que o compõem, **abrangendo as cooperativas de crédito**, e será regulado por **leis complementares**. A lei-base é a **Lei 4.595/1964**, recepcionada com status de lei complementar, que criou o CMN e o Banco Central.\n\nO **art. 17** da Lei 4.595 considera instituições financeiras as pessoas jurídicas públicas ou privadas que tenham como atividade principal ou acessória a **coleta, intermediação ou aplicação de recursos financeiros** próprios ou de terceiros, em moeda nacional ou estrangeira, e a **custódia de valor de propriedade de terceiros**. Para funcionar, dependem de **autorização do Banco Central** (art. 18).'
        },
        {
          titulo: 'Estrutura em três camadas',
          texto: 'Quadro da estrutura do SFN por mercado:\n\n- **Moeda, crédito e câmbio**: órgão normativo **CMN**; supervisor **Banco Central do Brasil**; operadores: bancos, cooperativas de crédito, financeiras, instituições de pagamento, entre outros.\n- **Mercado de capitais (valores mobiliários)**: normativo **CMN**; supervisor **CVM**; operadores: bolsa, corretoras, distribuidoras, administradores de fundos.\n- **Seguros, capitalização e previdência aberta**: normativo **CNSP**; supervisor **SUSEP**; operadores: seguradoras, sociedades de capitalização, entidades abertas de previdência e resseguradores.\n- **Previdência complementar fechada**: normativo **CNPC**; supervisor **PREVIC**; operadores: entidades fechadas (fundos de pensão).\n\nRegra de bolso: **conselhos** editam normas; **autarquias** supervisionam; **instituições** operam.'
        },
        {
          titulo: 'Conselho Monetário Nacional',
          texto: 'O **CMN** é o órgão **normativo máximo** do SFN. Não executa operações nem atende o público: formula a política da moeda e do crédito e edita **resoluções**. Entre suas competências (art. 4º da Lei 4.595/1964):\n\n- autorizar as emissões de papel-moeda;\n- fixar as diretrizes e normas da **política cambial**;\n- disciplinar o **crédito** em todas as suas modalidades;\n- regular a constituição, o funcionamento e a fiscalização das instituições financeiras;\n- fixar as diretrizes de recolhimentos compulsórios, encaixes e redesconto.\n\nA composição do CMN é definida em lei e reúne autoridades da área econômica do governo federal e o presidente do Banco Central. Como a denominação dos ministérios muda com o tempo, em prova vale mais dominar a **função** do conselho do que decorar cargos.'
        },
        {
          titulo: 'Banco Central do Brasil',
          texto: 'O **BCB** é o principal **executor** das políticas do CMN e o **supervisor** do sistema bancário. Desde a **Lei Complementar 179/2021**, é **autarquia de natureza especial**, caracterizada pela **ausência de vinculação a Ministério**, de tutela ou de subordinação hierárquica, com presidente e diretores com **mandatos fixos**, não coincidentes com o do Presidente da República. Seu objetivo fundamental é **assegurar a estabilidade de preços**; sem prejuízo dele, também deve zelar pela estabilidade e eficiência do sistema financeiro, suavizar as flutuações do nível de atividade econômica e fomentar o pleno emprego.\n\nCompetências privativas (art. 10 da Lei 4.595/1964), entre outras:\n- **emitir moeda** nas condições e limites autorizados pelo CMN (a CF, art. 164, reforça a exclusividade);\n- executar os serviços do **meio circulante**;\n- receber os **recolhimentos compulsórios**;\n- realizar operações de **redesconto** e empréstimos a instituições financeiras;\n- **fiscalizar** as instituições financeiras e **autorizar** seu funcionamento.\n\nO BCB também é chamado de **banco dos bancos** e de **banco do governo**: guarda as reservas internacionais e é depositário das disponibilidades de caixa da União (art. 164, § 3º, da CF). Além disso, regula o sistema de pagamentos, incluindo o **Pix**.'
        },
        {
          titulo: 'Operadores: quem é quem',
          texto: '- **Bancos comerciais**: captam depósitos à vista e fornecem crédito de curto e médio prazo; a captação de depósitos à vista é sua marca registrada.\n- **Bancos múltiplos**: reúnem em uma só instituição duas ou mais carteiras (comercial, de investimento, de crédito imobiliário, de crédito, financiamento e investimento etc.), sendo uma delas obrigatoriamente comercial ou de investimento.\n- **Caixa Econômica Federal**: empresa pública que atua como banco e executa políticas públicas, como habitação e programas sociais.\n- **Bancos de investimento**: não captam depósitos à vista; atuam em financiamentos de prazo mais longo e em operações do mercado de capitais.\n- **Cooperativas de crédito**: pertencem aos próprios associados, que são ao mesmo tempo donos e usuários; são mencionadas expressamente no art. 192 da CF.\n- **Sociedades corretoras e distribuidoras**: intermediam operações com títulos e valores mobiliários.\n- **Instituições de pagamento**: gerenciam contas de pagamento e meios de pagamento, como carteiras digitais, sob regulação do BCB.\n\n**Exemplo**: quando você deposita seu salário numa conta corrente e o banco usa esses recursos para conceder um empréstimo a uma empresa, está ocorrendo a **intermediação financeira** que justifica toda a regulação do SFN.'
        }
      ],
      pontosChave: [
        'SFN: art. 192 da CF (inclui as cooperativas de crédito) e Lei 4.595/1964, recepcionada como lei complementar.',
        'Conselhos normatizam (CMN, CNSP, CNPC); autarquias supervisionam (BCB, CVM, SUSEP, PREVIC).',
        'O CMN é o órgão normativo máximo: política da moeda, do crédito e cambial.',
        'O BCB emite moeda com exclusividade, fiscaliza as instituições financeiras e autoriza seu funcionamento.',
        'LC 179/2021: o BCB é autarquia de natureza especial, sem vinculação a Ministério, com mandatos fixos.',
        'Banco comercial capta depósitos à vista; banco múltiplo precisa ter carteira comercial ou de investimento.'
      ],
      fontes: [f('Lei 4.595/1964', U.l4595), f('Constituição Federal, arts. 164 e 192', U.cf), f('Banco Central do Brasil', U.bcb)]
    }
  ];

  Banco.registrar({ questoes: questoes, aulas: aulas });
})();
