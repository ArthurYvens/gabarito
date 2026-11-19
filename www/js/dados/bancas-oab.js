/* Questões inéditas no estilo OAB/FGV (1ª fase do Exame de Ordem), escritas para o app. */
(function () {
  'use strict';

  var U = {
    cf: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm',
    l14133: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm',
    l8112: 'https://www.planalto.gov.br/ccivil_03/leis/l8112cons.htm',
    l8429: 'https://www.planalto.gov.br/ccivil_03/leis/l8429.htm',
    l9784: 'https://www.planalto.gov.br/ccivil_03/leis/l9784.htm',
    cp: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm',
    stf: 'https://portal.stf.jus.br',
    stj: 'https://www.stj.jus.br'
  };
  function f(titulo, url) { return { titulo: titulo, url: url }; }
  var OAB = ['oab'];
  var OAB_TRIB = ['oab', 'tribunais'];
  var OAB_GER = ['oab', 'concursos-gerais'];
  var OAB_TODOS = ['oab', 'tribunais', 'concursos-gerais'];

  var questoes = [

    /* ===================== DIREITO CONSTITUCIONAL ===================== */

    {
      id: 'dco-601',
      materia: 'direito-constitucional',
      assunto: 'Remédios constitucionais',
      tipo: 'multipla',
      estilo: 'OAB/FGV',
      dificuldade: 2,
      objetivos: OAB_TODOS,
      enunciado: 'A Associação dos Auditores do Município de Vale Alto, constituída e em funcionamento há mais de dois anos, impetrou mandado de segurança coletivo contra ato do Secretário de Fazenda, que suprimiu uma gratificação. A pretensão beneficia apenas os auditores lotados na região norte, que são uma parte da categoria, e o estatuto da associação não traz autorização específica para esse caso. Diante do caso, assinale a afirmativa correta.',
      alternativas: [
        'A associação não tem legitimidade, pois o mandado de segurança coletivo só pode ser impetrado por partido político ou por organização sindical.',
        'A associação só poderia impetrar o writ se obtivesse autorização expressa de cada um dos associados beneficiados, em assembleia específica.',
        'A associação tem legitimidade, pois a entidade de classe pode impetrar mandado de segurança coletivo mesmo quando o interesse é de apenas parte da categoria, sem autorização especial dos associados.',
        'A associação tem legitimidade, mas apenas se o pedido beneficiar todos os membros da categoria, sem distinção.'
      ],
      resposta: 2,
      explicacao: {
        resumo: 'A associação regularmente constituída há pelo menos um ano pode impetrar mandado de segurança coletivo em defesa de parte da categoria, sem autorização dos associados (Súmulas 629 e 630 do STF).',
        detalhada: 'O art. 5º, LXX, da CF atribui legitimidade ao **partido político com representação no Congresso Nacional** e à **organização sindical, entidade de classe ou associação legalmente constituída e em funcionamento há pelo menos um ano**, em defesa dos interesses de seus membros ou associados.\n\nO STF consolidou dois entendimentos que a banca adora cobrar: a **Súmula 629** (a impetração de mandado de segurança coletivo por entidade de classe em favor dos associados independe da autorização destes) e a **Súmula 630** (a entidade de classe tem legitimação ainda quando a pretensão interesse apenas a uma parte da respectiva categoria). Trata-se de **substituição processual**, e não de representação, por isso não se exige autorização individual nem assembleia.\n\nNo caso, a associação existe há mais de dois anos e o pedido beneficia parte da categoria: a legitimidade está presente.',
        alternativas: [
          'Errada. A legitimidade não é restrita a partido e sindicato: abrange também entidade de classe e associação com mais de um ano.',
          'Errada. Pela Súmula 629 do STF, a autorização dos associados é desnecessária. É a regra do mandado de segurança coletivo, diferente da ação coletiva ordinária do art. 5º, XXI.',
          'Correta. Reproduz as Súmulas 629 e 630 do STF.',
          'Errada. A Súmula 630 admite expressamente a impetração em favor de apenas parte da categoria.'
        ],
        dica: 'Não confunda o art. 5º, XXI (associação precisa de autorização expressa para representar filiados em ação coletiva) com o mandado de segurança coletivo (LXX), que dispensa autorização.'
      },
      fontes: [f('Constituição Federal, art. 5º, LXX', U.cf), f('Súmulas do STF (629 e 630)', U.stf)]
    },
    {
      id: 'dco-602',
      materia: 'direito-constitucional',
      assunto: 'Remédios constitucionais',
      tipo: 'multipla',
      estilo: 'OAB/FGV',
      dificuldade: 2,
      objetivos: OAB_TODOS,
      enunciado: 'Ana descobriu que o cadastro mantido por um órgão público federal registra, de forma equivocada, uma dívida em seu nome. Sem nunca ter pedido a correção ao órgão, ela contratou advogado e impetrou habeas data para retificar a informação. Diante do caso, assinale a afirmativa correta.',
      alternativas: [
        'O habeas data não deve ser conhecido, pois a jurisprudência exige o pedido administrativo prévio e a recusa do órgão, ou a falta de decisão no prazo, para configurar interesse de agir.',
        'O habeas data deve ser conhecido, pois a Constituição dispensa qualquer tentativa administrativa prévia em razão da inafastabilidade do controle jurisdicional.',
        'O habeas data não é cabível, pois só serve para o conhecimento de informações, nunca para a retificação de dados.',
        'O habeas data não é cabível, pois dados mantidos por órgãos públicos não são objeto da garantia, restrita a bancos de dados privados.'
      ],
      resposta: 0,
      explicacao: {
        resumo: 'O habeas data exige pedido administrativo prévio e prova da recusa ou do decurso do prazo sem decisão (Súmula 2 do STJ e art. 8º, parágrafo único, da Lei 9.507/1997): sem isso, falta interesse de agir.',
        detalhada: 'O art. 5º, LXXII, da CF prevê o habeas data para **assegurar o conhecimento** de informações relativas à pessoa do impetrante constantes de registros ou bancos de dados de entidades governamentais ou de caráter público, e para a **retificação** de dados, quando não se prefira fazê-lo por processo sigiloso, judicial ou administrativo.\n\nO STJ, na **Súmula 2**, afirma que não cabe habeas data se não houve recusa de informações por parte da autoridade administrativa. A lógica é a do interesse de agir: sem pedido e sem negativa (ou omissão) do órgão, não há lide a resolver.\n\nO habeas data é **gratuito** (art. 5º, LXXVII) e serve tanto para conhecer quanto para retificar dados, inclusive em bancos de entidades privadas de caráter público.',
        alternativas: [
          'Correta. Aplica a Súmula 2 do STJ e o requisito de interesse de agir.',
          'Errada. A inafastabilidade não dispensa as condições da ação; a recusa prévia é exigida.',
          'Errada. A retificação é finalidade expressa do habeas data (art. 5º, LXXII, b).',
          'Errada. A garantia alcança justamente registros de entidades governamentais ou de caráter público.'
        ],
        dica: 'Habeas data: dados do próprio impetrante e prova da recusa administrativa. Informações de terceiros ou "de interesse coletivo" não se obtêm por esta via.'
      },
      fontes: [f('Constituição Federal, art. 5º, LXXII e LXXVII', U.cf), f('Superior Tribunal de Justiça: Súmulas', U.stj)]
    },
    {
      id: 'dco-603',
      materia: 'direito-constitucional',
      assunto: 'Direitos e garantias fundamentais',
      tipo: 'multipla',
      estilo: 'OAB/FGV',
      dificuldade: 2,
      objetivos: OAB_TODOS,
      enunciado: 'Durante a madrugada, policiais militares, ao receberem denúncia anônima, passaram a monitorar a casa de Jorge. Observaram intensa movimentação de usuários de drogas entrando e saindo, e viram, pela janela, uma pessoa fracionando entorpecente sobre a mesa. Sem mandado judicial, ingressaram à força na residência e prenderam Jorge em flagrante por tráfico de drogas. Posteriormente, sua defesa alegou nulidade por violação de domicílio. Considerando a Constituição e o entendimento do STF, assinale a afirmativa correta.',
      alternativas: [
        'A prova é ilícita, pois o ingresso em domicílio durante a noite exige sempre mandado judicial, sem exceção.',
        'A prova é ilícita, pois o ingresso sem mandado só seria válido com o consentimento do morador, mesmo em caso de flagrante.',
        'A prova é ilícita, pois a denúncia anônima, por si só, impede qualquer ingresso na casa, ainda que haja flagrante evidente.',
        'O ingresso é lícito, pois o tráfico é crime permanente e havia fundadas razões, justificadas posteriormente, de que ocorria flagrante delito no interior da casa.'
      ],
      resposta: 3,
      explicacao: {
        resumo: 'O flagrante delito autoriza o ingresso em domicílio a qualquer hora, sem mandado, desde que haja fundadas razões, posteriormente justificadas (STF, Tema 280).',
        detalhada: 'O art. 5º, XI, da CF declara a casa asilo inviolável, e ninguém nela pode penetrar sem consentimento do morador, **salvo em caso de flagrante delito ou desastre, ou para prestar socorro**, ou, **durante o dia**, por determinação judicial. Ou seja: o mandado é exigido só para o ingresso diurno; o flagrante dispensa o mandado em qualquer horário.\n\nO STF (RE 603.616, Tema 280) fixou que a entrada forçada em domicílio sem mandado é lícita, mesmo em período noturno, quando amparada em **fundadas razões, devidamente justificadas a posteriori**, que indiquem que dentro da casa ocorre situação de flagrante delito, sob pena de responsabilização disciplinar, civil e penal do agente e de nulidade dos atos. Crimes permanentes (como ter em depósito drogas) mantêm o estado de flagrância.\n\nNo caso, os policiais não agiram só por denúncia anônima: houve campana, movimentação típica e visualização do fracionamento, elementos concretos.',
        alternativas: [
          'Errada. O mandado é exigido só de dia; à noite vale a regra do flagrante, desastre ou socorro.',
          'Errada. O consentimento é uma hipótese, não a única; o flagrante dispensa o mandado.',
          'Errada. A denúncia anônima isolada não basta, mas aliada a diligências que indiquem flagrante legitima o ingresso.',
          'Correta. Aplica o art. 5º, XI, e o Tema 280 do STF.'
        ],
        dica: 'A FGV adora o "à noite nunca": o que a CF diz é que o mandado só vale de dia. Flagrante, desastre e socorro valem a qualquer hora.'
      },
      fontes: [f('Constituição Federal, art. 5º, XI', U.cf), f('Supremo Tribunal Federal', U.stf)]
    },
    {
      id: 'dco-604',
      materia: 'direito-constitucional',
      assunto: 'Organização do Estado',
      tipo: 'multipla',
      estilo: 'OAB/FGV',
      dificuldade: 2,
      objetivos: OAB_TODOS,
      enunciado: 'A Assembleia Legislativa do Estado Beta aprovou lei, sancionada pelo Governador, que autoriza e disciplina a realização de bingos e sorteios promocionais organizados por entidades beneficentes no território estadual, com fiscalização pela Secretaria de Fazenda. Um partido político com representação no Congresso Nacional questiona a lei. Assinale a afirmativa correta.',
      alternativas: [
        'A lei é válida, pois a defesa do consumidor é matéria de competência legislativa concorrente, e os Estados podem suplementar a legislação federal.',
        'A lei é inconstitucional, pois compete privativamente à União legislar sobre sistemas de consórcios e sorteios, conforme a Súmula Vinculante 2.',
        'A lei é válida, pois os Estados detêm competência residual para legislar sobre tudo o que não foi expressamente atribuído à União.',
        'A lei é inconstitucional, mas apenas por vício formal de iniciativa, já que o tema seria de iniciativa privativa do Chefe do Executivo.'
      ],
      resposta: 1,
      explicacao: {
        resumo: 'Sistemas de consórcios e sorteios, inclusive bingos e loterias, são de competência legislativa privativa da União (art. 22, XX); lei estadual é inconstitucional (Súmula Vinculante 2).',
        detalhada: 'O art. 22, XX, da CF atribui à União a competência **privativa** para legislar sobre **sistemas de consórcios e sorteios**. A **Súmula Vinculante 2** consolidou: é inconstitucional a lei ou ato normativo estadual ou distrital que disponha sobre sistemas de consórcios e sorteios, inclusive bingos e loterias.\n\nO vício é de **competência legislativa** (inconstitucionalidade formal orgânica), não de iniciativa. A competência residual dos Estados (art. 25, §1º) só alcança o que não foi reservado à União, e a competência concorrente (art. 24) não inclui o tema. A delegação por lei complementar federal (art. 22, parágrafo único) exige norma que a autorize, o que não é o caso.\n\nO partido com representação no Congresso é legitimado para a ADI (art. 103, VIII).',
        alternativas: [
          'Errada. O tema não é de defesa do consumidor, e sim de competência privativa da União.',
          'Correta. Art. 22, XX, e Súmula Vinculante 2.',
          'Errada. A competência residual não alcança matéria expressamente reservada à União.',
          'Errada. O vício não é de iniciativa, e sim de competência legislativa.'
        ],
        dica: 'Súmula Vinculante 2 é cobrança clássica: bingo, loteria, consórcio e sorteio são só da União.'
      },
      fontes: [f('Constituição Federal, arts. 22, XX, e 25', U.cf), f('Supremo Tribunal Federal: Súmulas Vinculantes', U.stf)]
    },
    {
      id: 'dco-605',
      materia: 'direito-constitucional',
      assunto: 'Poder Legislativo',
      tipo: 'multipla',
      estilo: 'OAB/FGV',
      dificuldade: 2,
      objetivos: OAB_TODOS,
      enunciado: 'Uma Comissão Parlamentar de Inquérito do Senado Federal, instaurada para apurar desvios em contratos públicos, aprovou requerimentos para: I) quebrar o sigilo bancário e fiscal de um empresário investigado, por decisão fundamentada; II) decretar a prisão preventiva do empresário; III) determinar a interceptação das comunicações telefônicas do investigado; IV) autorizar busca e apreensão na residência do empresário. Considerando a Constituição e a jurisprudência do STF, assinale a afirmativa correta.',
      alternativas: [
        'Apenas o requerimento I é válido, pois a CPI tem poderes de investigação próprios das autoridades judiciais, mas não pode invadir matérias sob reserva de jurisdição.',
        'Todos os requerimentos são válidos, pois a CPI tem poderes de investigação próprios das autoridades judiciais.',
        'Nenhum dos requerimentos é válido, pois a CPI só pode convocar testemunhas e requisitar documentos públicos.',
        'Apenas os requerimentos I e III são válidos, pois o sigilo das comunicações telefônicas pode ser afastado por qualquer autoridade com poderes de investigação.'
      ],
      resposta: 0,
      explicacao: {
        resumo: 'A CPI pode quebrar sigilos bancário, fiscal e de dados telefônicos por decisão fundamentada, mas não decretar prisão (salvo flagrante), busca domiciliar ou interceptação telefônica, que estão sob reserva de jurisdição.',
        detalhada: 'O art. 58, §3º, da CF confere às CPIs **poderes de investigação próprios das autoridades judiciais**, além de outros previstos nos regimentos. O STF, porém, delimita esses poderes: a CPI pode determinar, por decisão **fundamentada**, a quebra dos sigilos **bancário, fiscal e telefônico (registro de ligações)**, convocar investigados e testemunhas e requisitar documentos.\n\nNão pode, porque se submetem à **cláusula de reserva de jurisdição**: decretar **prisão** (salvo em flagrante), determinar **busca e apreensão domiciliar** (art. 5º, XI), e autorizar **interceptação telefônica** (art. 5º, XII, que só admite a medida por ordem judicial). Também não pode impor medidas cautelares reais, como indisponibilidade de bens, nem condenar.\n\nA distinção entre dados telefônicos (registro de ligações, possível) e interceptação do conteúdo das conversas (só juiz) é a pegadinha mais comum.',
        alternativas: [
          'Correta. Só a quebra de sigilos de dados, fundamentada, está dentro dos poderes da CPI.',
          'Errada. Os poderes são próprios de autoridade judicial, mas não incluem as matérias sob reserva de jurisdição.',
          'Errada. A CPI pode também quebrar sigilos e determinar diligências de investigação.',
          'Errada. A interceptação das comunicações telefônicas é reservada ao juiz (art. 5º, XII).'
        ],
        dica: 'CPI: quebra sigilo de dados (bancário, fiscal, registros telefônicos), sim. Prisão, busca domiciliar e escuta telefônica, não: só o juiz.'
      },
      fontes: [f('Constituição Federal, art. 58, §3º', U.cf), f('Supremo Tribunal Federal', U.stf)]
    },
    {
      id: 'dco-606',
      materia: 'direito-constitucional',
      assunto: 'Administração Pública na Constituição',
      tipo: 'multipla',
      estilo: 'OAB/FGV',
      dificuldade: 3,
      objetivos: OAB_TODOS,
      enunciado: 'O edital de concurso público para o cargo de Analista do Estado Gama previa cinco vagas e validade de dois anos. Carlos foi aprovado em terceiro lugar. Durante todo o prazo de validade, o Estado não nomeou ninguém, limitando-se a alegar que a nomeação é ato discricionário, de conveniência e oportunidade. Carlos procurou você, como advogado(a), para saber de seus direitos. Assinale a afirmativa correta.',
      alternativas: [
        'Carlos tem mera expectativa de direito, e a Administração pode nomear ou não, conforme seu juízo discricionário.',
        'Carlos só teria direito à nomeação se o prazo de validade tivesse sido prorrogado por igual período.',
        'Carlos tem direito subjetivo à nomeação, pois foi aprovado dentro do número de vagas previsto no edital, salvo situação excepcional superveniente, imprevisível, grave e devidamente motivada.',
        'Carlos tem direito à nomeação apenas se comprovar a preterição, isto é, a contratação de terceiros temporários para o mesmo cargo.'
      ],
      resposta: 2,
      explicacao: {
        resumo: 'O candidato aprovado dentro do número de vagas do edital tem direito subjetivo à nomeação durante a validade do certame (STF, RE 598.099, Tema 161).',
        detalhada: 'O STF, no **RE 598.099 (Tema 161)**, fixou que o candidato aprovado **dentro do número de vagas** previsto no edital tem **direito subjetivo à nomeação** dentro do prazo de validade do concurso. A Administração se vincula ao edital (princípios da legalidade, segurança jurídica e boa-fé).\n\nA recusa só se justifica em **situações excepcionais**, que exigem: **superveniência** (fatos posteriores ao edital), **imprevisibilidade**, **gravidade** (crise que torne inviável a nomeação) e **necessidade** (não há outra medida menos gravosa), tudo **motivado**. Simples alegação de conveniência não basta.\n\nO prazo de validade do concurso é de **até dois anos, prorrogável uma vez por igual período** (art. 37, III). Já o candidato aprovado **fora** das vagas tem, em regra, mera expectativa, salvo preterição arbitrária e imotivada (Tema 784).',
        alternativas: [
          'Errada. É o entendimento superado: dentro das vagas, há direito subjetivo.',
          'Errada. A prorrogação é irrelevante para o direito de quem está dentro das vagas, durante a validade.',
          'Correta. Reproduz a tese do Tema 161 do STF.',
          'Errada. A prova da preterição é exigida do candidato fora das vagas, não do aprovado dentro delas.'
        ],
        dica: 'Dentro das vagas: direito subjetivo. Fora das vagas: expectativa, salvo preterição. A FGV inverte essas expressões.'
      },
      fontes: [f('Constituição Federal, art. 37, III e IV', U.cf), f('Supremo Tribunal Federal: RE 598.099', U.stf)]
    },
    {
      id: 'dco-607',
      materia: 'direito-constitucional',
      assunto: 'Direitos e garantias fundamentais',
      tipo: 'multipla',
      estilo: 'OAB/FGV',
      dificuldade: 2,
      objetivos: OAB_TODOS,
      enunciado: 'Marcos celebrou contrato de financiamento de veículo com alienação fiduciária em garantia e, passado um ano, deixou de pagar as prestações. Ao ajuizar a ação de busca e apreensão, o banco requereu, também, a prisão civil de Marcos como depositário infiel do bem, alegando que a conversão da ação em depósito autorizaria a medida. Diante do caso, assinale a afirmativa correta.',
      alternativas: [
        'A prisão civil é cabível, pois o devedor fiduciante é depositário do bem e a Constituição admite a prisão do depositário infiel.',
        'A prisão civil é cabível, mas apenas se o contrato for celebrado por escritura pública, o que lhe confere maior segurança.',
        'A prisão civil é cabível por até um ano, que é o prazo máximo previsto para esta modalidade.',
        'A prisão civil não é cabível, pois é ilícita a prisão do depositário infiel, qualquer que seja a modalidade de depósito, conforme a Súmula Vinculante 25.'
      ],
      resposta: 3,
      explicacao: {
        resumo: 'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade de depósito (Súmula Vinculante 25). Subsiste apenas a do devedor voluntário e inescusável de pensão alimentícia.',
        detalhada: 'O art. 5º, LXVII, da CF diz que não haverá prisão civil por dívida, **salvo a do responsável pelo inadimplemento voluntário e inescusável de obrigação alimentícia** e a do depositário infiel. Contudo, o STF entendeu que o **Pacto de São José da Costa Rica** (art. 7º, 7), tratado de direitos humanos com **status supralegal**, paralisa a eficácia das normas infraconstitucionais que regulamentavam a prisão do depositário infiel.\n\nO resultado foi a **Súmula Vinculante 25**: é ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito (inclusive o da alienação fiduciária). Na prática, a única prisão civil que continua possível é a do devedor de **alimentos**.\n\nA forma do contrato (escritura pública) e o prazo da prisão são irrelevantes: o problema é a própria impossibilidade da medida.',
        alternativas: [
          'Errada. A literalidade da CF a admitia, mas o STF a tornou inaplicável pelo status supralegal do Pacto de São José.',
          'Errada. A forma do contrato não altera a vedação.',
          'Errada. Não existe a prisão civil do depositário infiel; e o prazo de um ano não corresponde à lei.',
          'Correta. Súmula Vinculante 25.'
        ],
        dica: 'Prisão civil hoje: só dívida de alimentos. Depositário infiel, em qualquer modalidade, nunca.'
      },
      fontes: [f('Constituição Federal, art. 5º, LXVII e §2º', U.cf), f('Supremo Tribunal Federal: Súmula Vinculante 25', U.stf)]
    },
    {
      id: 'dco-608',
      materia: 'direito-constitucional',
      assunto: 'Direitos e garantias fundamentais',
      tipo: 'multipla',
      estilo: 'OAB/FGV',
      dificuldade: 3,
      objetivos: OAB_TODOS,
      enunciado: 'O Brasil ratificou, em 2001, uma convenção internacional de direitos humanos, que foi aprovada pelo Congresso Nacional por decreto legislativo e promulgada por decreto presidencial, sem passar pelo quórum especial do art. 5º, §3º, da Constituição. Um decreto-lei de 1969, anterior a essa convenção, contradiz seu texto. Em ação proposta por Paula, discute-se qual norma deve prevalecer. Com base na jurisprudência do STF, assinale a afirmativa correta.',
      alternativas: [
        'A convenção tem hierarquia de emenda constitucional, pois todo tratado de direitos humanos é materialmente constitucional.',
        'A convenção tem status supralegal: está abaixo da Constituição e acima da legislação ordinária, de modo que a norma interna conflitante tem sua eficácia paralisada.',
        'A convenção tem o mesmo nível de uma lei ordinária, e o conflito se resolve pelo critério cronológico.',
        'A convenção está acima da Constituição, por ser norma de proteção da pessoa humana.'
      ],
      resposta: 1,
      explicacao: {
        resumo: 'Tratados de direitos humanos que não passaram pelo rito do art. 5º, §3º, têm status supralegal; os aprovados por 3/5 em dois turnos nas duas Casas equivalem a emenda constitucional.',
        detalhada: 'O art. 5º, §3º, da CF (EC 45/2004) dispõe que os tratados e convenções internacionais sobre direitos humanos aprovados em **cada Casa do Congresso, em dois turnos, por três quintos dos votos dos respectivos membros**, serão **equivalentes às emendas constitucionais**.\n\nNo **RE 466.343**, o STF decidiu que os tratados de direitos humanos **anteriores ou posteriores à EC 45 que não passaram por esse rito** têm **status supralegal**: abaixo da Constituição, mas **acima das leis ordinárias**. Por isso, a legislação interna conflitante, anterior ou posterior, **tem a eficácia paralisada**.\n\nTratados sobre outras matérias, sem esse quórum, têm nível de lei ordinária. Nenhum tratado fica acima da Constituição.',
        alternativas: [
          'Errada. A equivalência a emenda exige o rito especial do §3º.',
          'Correta. Entendimento firmado no RE 466.343.',
          'Errada. Esse é o nível de tratados comuns, não os de direitos humanos.',
          'Errada. A Constituição prevalece sobre os tratados, que se sujeitam ao controle de constitucionalidade.'
        ],
        dica: 'Direitos humanos, com 3/5 e dois turnos: nível de emenda. Sem o rito: supralegal. Nunca acima da Constituição.'
      },
      fontes: [f('Constituição Federal, art. 5º, §§2º e 3º', U.cf), f('Supremo Tribunal Federal: RE 466.343', U.stf)]
    },
    {
      id: 'dco-609',
      materia: 'direito-constitucional',
      assunto: 'Organização do Estado',
      tipo: 'multipla',
      estilo: 'OAB/FGV',
      dificuldade: 3,
      objetivos: OAB_TODOS,
      enunciado: 'O Estado Delta, durante três exercícios seguidos, deixou de aplicar o percentual mínimo da receita de impostos estaduais em ações e serviços públicos de saúde, como exige a Constituição. O Procurador-Geral da República, ao tomar conhecimento do fato, pretende provocar a intervenção federal no Estado. Assinale a afirmativa correta.',
      alternativas: [
        'A intervenção depende de provimento, pelo STF, de representação do Procurador-Geral da República, pois a hipótese é de ofensa a princípio constitucional sensível (art. 34, VII).',
        'A intervenção pode ser decretada de ofício pelo Presidente da República, pois se trata de hipótese de intervenção espontânea.',
        'A intervenção depende de requisição do Superior Tribunal de Justiça, que é o tribunal competente para as causas entre a União e os Estados.',
        'A intervenção depende de solicitação da Assembleia Legislativa do Estado, que é o Poder coacto ou impedido.'
      ],
      resposta: 0,
      explicacao: {
        resumo: 'A não aplicação do mínimo constitucional em saúde e ensino é hipótese do art. 34, VII, e: a intervenção depende de provimento pelo STF da representação do PGR (art. 36, III).',
        detalhada: 'A intervenção federal é **excepcional**, pois a regra é a autonomia dos entes. O art. 34 lista as hipóteses. O inciso VII trata dos **princípios constitucionais sensíveis**: forma republicana, direitos da pessoa humana, autonomia municipal, prestação de contas e **aplicação do mínimo exigido da receita de impostos estaduais na manutenção e desenvolvimento do ensino e nas ações e serviços públicos de saúde** (alínea e).\n\nNessas hipóteses, o art. 36, III, exige **provimento, pelo STF, de representação do Procurador-Geral da República** (a chamada ADI interventiva). Só depois o Presidente da República decreta a intervenção; se bastar, o decreto se limita a **suspender a execução do ato impugnado**, sem necessidade de aprovação do Congresso (art. 36, §3º).\n\nAs demais vias: **espontânea** (de ofício), no art. 34, I, II, III e V; **por solicitação** do Poder coacto (Legislativo ou Executivo, art. 34, IV); **por requisição** do STF, STJ ou TSE, nos casos de desobediência a ordem judicial (art. 36, II).',
        alternativas: [
          'Correta. Art. 34, VII, e, c/c art. 36, III.',
          'Errada. A intervenção espontânea só vale para as hipóteses dos incisos I, II, III e V do art. 34.',
          'Errada. A requisição de tribunal superior é para desobediência a ordem ou decisão judicial.',
          'Errada. A solicitação é para coação ou impedimento do Legislativo ou do Executivo locais (art. 34, IV).'
        ],
        dica: 'Princípios sensíveis (art. 34, VII): sempre ADI interventiva, com provimento do STF após representação do PGR.'
      },
      fontes: [f('Constituição Federal, arts. 34 a 36', U.cf), f('Supremo Tribunal Federal', U.stf)]
    },

    /* ===================== DIREITO ADMINISTRATIVO ===================== */

    {
      id: 'dad-601',
      materia: 'direito-administrativo',
      assunto: 'Princípios da Administração',
      tipo: 'multipla',
      estilo: 'OAB/FGV',
      dificuldade: 1,
      objetivos: OAB_TODOS,
      enunciado: 'O Prefeito do Município de Serra Clara, que não possui lei local sobre o tema, nomeou seu sobrinho, bacharel em Direito, para o cargo em comissão de Assessor Jurídico do Gabinete do Prefeito. Um vereador da oposição procurou você, como advogado(a), para saber se o ato é legítimo. Assinale a afirmativa correta.',
      alternativas: [
        'O ato é lícito, pois o cargo em comissão é de livre nomeação e exoneração, e o ato só seria nulo se houvesse prova de incompetência do nomeado.',
        'O ato é ilícito, pois viola a Súmula Vinculante 13, e a vedação ao nepotismo decorre diretamente dos princípios da moralidade e da impessoalidade, ainda que não haja lei local.',
        'O ato é ilícito, mas só poderia ser anulado se houvesse lei municipal expressa vedando o nepotismo.',
        'O ato é lícito, pois o parentesco colateral de terceiro grau não é alcançado pela vedação do nepotismo.'
      ],
      resposta: 1,
      explicacao: {
        resumo: 'A nomeação de parente até o terceiro grau da autoridade nomeante para cargo em comissão é vedada pela Súmula Vinculante 13, que decorre diretamente dos princípios do art. 37, caput.',
        detalhada: 'A **Súmula Vinculante 13** proíbe a nomeação de cônjuge, companheiro ou **parente em linha reta, colateral ou por afinidade, até o terceiro grau**, inclusive, da autoridade nomeante ou de servidor da mesma pessoa jurídica investido em cargo de direção, chefia ou assessoramento, para o exercício de cargo em comissão ou de confiança, ou de função gratificada. Alcança também o **nepotismo cruzado**.\n\nO sobrinho é parente colateral de **terceiro grau** do tio: sobe ao pai (1º grau) e ao avô, ascendente comum (2º grau), e desce ao prefeito, seu tio (3º grau). A vedação decorre **diretamente** dos princípios da moralidade, impessoalidade, eficiência e igualdade (art. 37, caput), de modo que **independe de lei formal** que a regulamente.\n\nA súmula não é absoluta: o STF costuma excluir cargos de natureza **política** (como secretário municipal), mas a Assessoria Jurídica de Gabinete é cargo técnico de assessoramento.',
        alternativas: [
          'Errada. A vedação independe da qualificação do nomeado.',
          'Correta. Súmula Vinculante 13.',
          'Errada. A vedação decorre diretamente da Constituição; lei local não é pressuposto.',
          'Errada. O terceiro grau está incluído (tios, sobrinhos, bisavós, bisnetos).'
        ],
        dica: 'SV 13: até o terceiro grau, inclusive. Tio e sobrinho são de terceiro grau; primos, de quarto (fora da vedação).'
      },
      fontes: [f('Constituição Federal, art. 37, caput', U.cf), f('Supremo Tribunal Federal: Súmula Vinculante 13', U.stf)]
    },
    {
      id: 'dad-602',
      materia: 'direito-administrativo',
      assunto: 'Atos administrativos',
      tipo: 'multipla',
      estilo: 'OAB/FGV',
      dificuldade: 2,
      objetivos: OAB_TODOS,
      enunciado: 'Em 2018, um órgão da Administração Pública federal concedeu a Helena, servidora pública, uma gratificação a que ela não tinha direito, por erro de interpretação da lei pela chefia. Helena recebeu o valor de boa-fé desde então. Em 2025, nova chefia constatou o erro e instaurou procedimento para anular o ato e cobrar a devolução do que foi pago. Considerando a Lei nº 9.784/1999, assinale a afirmativa correta.',
      alternativas: [
        'A Administração pode anular o ato a qualquer momento, pois a Súmula 473 do STF permite anular os atos ilegais sem limite de prazo.',
        'A Administração pode anular o ato, mas apenas no prazo prescricional de dez anos, contado da data do ato.',
        'A Administração só poderia revogar o ato, e não anulá-lo, pois ele já produziu efeitos favoráveis à servidora.',
        'Decaiu o direito da Administração de anular o ato, pois decorreram mais de cinco anos da prática, sem comprovação de má-fé.'
      ],
      resposta: 3,
      explicacao: {
        resumo: 'O art. 54 da Lei 9.784/1999 fixa em cinco anos a decadência do direito de a Administração federal anular atos de que decorram efeitos favoráveis aos destinatários, salvo comprovada má-fé.',
        detalhada: 'A Administração tem o **poder-dever de autotutela** (Súmulas 346 e 473 do STF): anula os atos ilegais e revoga os inconvenientes e inoportunos. Mas esse poder não é eterno. O **art. 54 da Lei 9.784/1999** prevê que o direito de anular atos administrativos de que decorram efeitos favoráveis para os destinatários **decai em cinco anos**, contados da data em que foram praticados, **salvo comprovada má-fé**.\n\nNo caso, o ato foi praticado em 2018 e a anulação foi tentada em 2025 (mais de cinco anos), e Helena agiu de boa-fé: o ato é **convalidado pelo decurso do tempo**, em homenagem à segurança jurídica e à confiança legítima.\n\nA **revogação** é diferente: incide sobre atos válidos, por conveniência e oportunidade, e respeita direitos adquiridos. Não é o instrumento para corrigir ilegalidade.',
        alternativas: [
          'Errada. A Súmula 473 é lida em harmonia com o art. 54 da Lei 9.784/1999, que fixa prazo decadencial.',
          'Errada. O prazo é de cinco anos e é decadencial, não prescricional de dez.',
          'Errada. Ato ilegal se anula; revogação é para atos válidos.',
          'Correta. Aplica o art. 54 da Lei 9.784/1999.'
        ],
        dica: 'Atenção: o prazo de cinco anos da Lei 9.784 é regra federal e vale para atos favoráveis; má-fé comprovada afasta a decadência.'
      },
      fontes: [f('Lei 9.784/1999, art. 54', U.l9784), f('Supremo Tribunal Federal: Súmulas 346 e 473', U.stf)]
    },
    {
      id: 'dad-603',
      materia: 'direito-administrativo',
      assunto: 'Poderes administrativos',
      tipo: 'multipla',
      estilo: 'OAB/FGV',
      dificuldade: 3,
      objetivos: OAB_TODOS,
      enunciado: 'Uma sociedade de economia mista municipal, com capital majoritariamente público, criada por lei para prestar exclusivamente o serviço de fiscalização e controle do trânsito urbano, em regime não concorrencial, aplicou multa de trânsito a Roberto. Ele alega a nulidade da multa, sustentando que o poder de polícia não pode ser delegado a pessoa jurídica de direito privado. Com base na jurisprudência do STF, assinale a afirmativa correta.',
      alternativas: [
        'A multa é nula, pois o poder de polícia é indelegável a qualquer pessoa jurídica de direito privado, inclusive as da administração indireta.',
        'A multa é válida, pois o poder de polícia pode ser delegado a qualquer particular, mediante contrato.',
        'A multa é válida, pois o STF admite a delegação do poder de polícia, por lei, a pessoas jurídicas de direito privado da administração indireta de capital majoritariamente público, que prestem serviço público próprio do Estado em regime não concorrencial.',
        'A multa é válida quanto à fiscalização, mas nula quanto à sanção, pois a aplicação de penalidades é sempre indelegável.'
      ],
      resposta: 2,
      explicacao: {
        resumo: 'O STF admite a delegação do poder de polícia a entidades privadas da administração indireta de capital majoritariamente público, que prestem serviço público próprio do Estado em regime não concorrencial (Tema 532).',
        detalhada: 'A doutrina tradicional dividia o poder de polícia em quatro fases (**ciclo de polícia**): ordem (legislação), consentimento, fiscalização e sanção. A ordem é indelegável. No **RE 633.782 (Tema 532)**, o STF fixou a tese: é constitucional a delegação do poder de polícia, por meio de lei, a pessoas jurídicas de direito privado integrantes da Administração indireta, de **capital social majoritariamente público**, que prestem **exclusivamente serviço público de atuação própria do Estado** e em **regime não concorrencial**.\n\nPor outro lado, a **ADI 1.717** continua indicando que o poder de polícia não se delega a **entidades privadas em sentido estrito**, como empresas contratadas por licitação.\n\nAssim, a multa aplicada pela sociedade de economia mista descrita é válida: todos os requisitos do Tema 532 estão presentes.',
        alternativas: [
          'Errada. Há delegação admitida, com os requisitos do Tema 532.',
          'Errada. A delegação a particulares em geral continua vedada.',
          'Correta. Reproduz os requisitos do Tema 532.',
          'Errada. O STF considerou válida, no caso da multa de trânsito, a aplicação de sanção pela entidade que atenda aos requisitos.'
        ],
        dica: 'Três requisitos do Tema 532: capital majoritariamente público, serviço próprio do Estado e regime não concorrencial. Faltou um, a delegação cai.'
      },
      fontes: [f('Supremo Tribunal Federal: RE 633.782 (Tema 532)', U.stf), f('Constituição Federal, art. 37', U.cf)]
    },
    {
      id: 'dad-604',
      materia: 'direito-administrativo',
      assunto: 'Licitações (Lei 14.133/2021)',
      tipo: 'multipla',
      estilo: 'OAB/FGV',
      dificuldade: 2,
      objetivos: OAB_TODOS,
      enunciado: 'Luciana, secretária de Administração de um Município, pretende licitar a compra de material de escritório de valor modesto e, por hábito, determinou que o edital adote a modalidade convite, que ela conhecia da lei antiga. O procurador do Município foi consultado sobre a regularidade da escolha, à luz da Lei nº 14.133/2021. Assinale a afirmativa correta.',
      alternativas: [
        'A modalidade convite não existe na Lei nº 14.133/2021, cujas modalidades são pregão, concorrência, concurso, leilão e diálogo competitivo, e, se o Município licitar, o material de escritório, bem comum, deve ser licitado por pregão.',
        'O convite continua previsto na Lei nº 14.133/2021 para contratações de pequeno valor, desde que haja ao menos três convidados.',
        'O convite permanece válido na nova lei, mas apenas para obras e serviços de engenharia de pequeno valor.',
        'O convite é admitido na nova lei somente nos Municípios de menos de dez mil habitantes, como regime simplificado.'
      ],
      resposta: 0,
      explicacao: {
        resumo: 'A Lei 14.133/2021 extinguiu o convite e a tomada de preços; as modalidades são pregão, concorrência, concurso, leilão e diálogo competitivo, e bens comuns se licitam por pregão.',
        detalhada: 'O **art. 28** da Lei 14.133/2021 lista as modalidades: **pregão, concorrência, concurso, leilão e diálogo competitivo**. Desapareceram o **convite** e a **tomada de preços**, que existiam na Lei 8.666/1993, e o **RDC**, que foi incorporado.\n\nO **art. 29** manda adotar o **pregão** sempre que o objeto possuir padrões de desempenho e qualidade que possam ser objetivamente definidos pelo edital, por meio de especificações usuais de mercado (bens e serviços comuns). A concorrência é a modalidade para os demais casos. O pregão **não** se aplica a serviços técnicos especializados de natureza predominantemente intelectual nem a obras e serviços de engenharia, exceto os serviços comuns de engenharia (art. 29, parágrafo único).\n\nA Lei 8.666/1993 foi **revogada** após o período de transição (art. 193, II), de modo que o convite não é mais alternativa. Para valores baixos, resta a **dispensa por valor** (art. 75, I e II), que não é modalidade de licitação.',
        alternativas: [
          'Correta. Arts. 28 e 29 da Lei 14.133/2021.',
          'Errada. O convite foi extinto.',
          'Errada. Não há convite nem para obras.',
          'Errada. Não há regime simplificado de convite para pequenos Municípios.'
        ],
        dica: 'Lei 14.133: cinco modalidades (pregão, concorrência, concurso, leilão, diálogo competitivo). Convite e tomada de preços são da lei antiga.'
      },
      fontes: [f('Lei 14.133/2021, arts. 28 e 29', U.l14133)]
    },
    {
      id: 'dad-605',
      materia: 'direito-administrativo',
      assunto: 'Licitações (Lei 14.133/2021)',
      tipo: 'multipla',
      estilo: 'OAB/FGV',
      dificuldade: 2,
      objetivos: OAB_TODOS,
      enunciado: 'O Município de Rio Verde contratou diretamente, sem licitação, uma agência de publicidade de notória especialização para criar e veicular a campanha institucional da prefeitura, justificando a contratação com fundamento na inexigibilidade, por inviabilidade de competição. Diante da Lei nº 14.133/2021, assinale a afirmativa correta.',
      alternativas: [
        'A contratação é regular, pois a notória especialização do contratado sempre autoriza a inexigibilidade, em qualquer serviço técnico.',
        'A contratação é regular, desde que haja parecer jurídico favorável e o preço seja compatível com o de mercado.',
        'A contratação é irregular apenas se o valor ultrapassar o limite da dispensa em razão do valor.',
        'A contratação é irregular, pois a lei veda expressamente a inexigibilidade de licitação para serviços de publicidade e divulgação.'
      ],
      resposta: 3,
      explicacao: {
        resumo: 'O art. 74, III, da Lei 14.133/2021 admite inexigibilidade para serviços técnicos especializados de natureza predominantemente intelectual com profissionais de notória especialização, mas veda a medida para serviços de publicidade e divulgação.',
        detalhada: 'O **art. 74** da Lei 14.133/2021 traz o rol **exemplificativo** das hipóteses de **inexigibilidade** (inviabilidade de competição): fornecedor exclusivo, profissional do setor artístico consagrado, **serviços técnicos especializados de natureza predominantemente intelectual** com profissionais ou empresas de **notória especialização**, objetos que devam ou possam ser contratados por credenciamento, aquisição ou locação de imóvel.\n\nPorém, o inciso III do art. 74 traz uma ressalva expressa: **é vedada a inexigibilidade para serviços de publicidade e divulgação**. A publicidade é serviço que pode ser licitado (inclusive por critério de melhor técnica), então há competição viável.\n\nO fundamento do parecer jurídico ou o preço compatível não curam o vício, pois a inexigibilidade é incabível no caso. E a dispensa por valor (art. 75) é outra hipótese, com contratação direta fundada em outro critério.',
        alternativas: [
          'Errada. A notória especialização não alcança publicidade e divulgação.',
          'Errada. Parecer e preço não substituem os pressupostos legais.',
          'Errada. O vício é a hipótese, não o valor.',
          'Correta. Art. 74, III, parte final.'
        ],
        dica: 'Notória especialização libera a licitação em serviços técnicos intelectuais, menos publicidade e divulgação: cai muito em prova.'
      },
      fontes: [f('Lei 14.133/2021, art. 74', U.l14133)]
    },
    {
      id: 'dad-606',
      materia: 'direito-administrativo',
      assunto: 'Agentes públicos (Lei 8.112/1990)',
      tipo: 'multipla',
      estilo: 'OAB/FGV',
      dificuldade: 2,
      objetivos: OAB_TODOS,
      enunciado: 'Maria foi nomeada para cargo efetivo na administração pública federal, regido pela Lei nº 8.112/1990. Tomou posse no dia 10 de março, mas, por motivo pessoal, não se apresentou ao órgão e, até o dia 10 de abril, não havia entrado em exercício. Diante da situação, assinale a afirmativa correta.',
      alternativas: [
        'O ato de nomeação será tornado sem efeito, pois a servidora não entrou em exercício.',
        'Maria será exonerada de ofício, pois não entrou em exercício no prazo de quinze dias contados da posse.',
        'Maria será demitida por abandono de cargo, que se configura com a ausência intencional por mais de trinta dias consecutivos.',
        'Maria será apenas advertida, pois o prazo para entrar em exercício pode ser prorrogado a pedido.'
      ],
      resposta: 1,
      explicacao: {
        resumo: 'O prazo para entrar em exercício é de quinze dias contados da posse; vencido o prazo, o servidor é exonerado de ofício (art. 15, §§1º e 2º, da Lei 8.112/1990).',
        detalhada: 'Na Lei 8.112/1990, a **posse** ocorre em **trinta dias** contados da publicação do ato de provimento (art. 13, §1º). Quem não toma posse nesse prazo vê o **ato de provimento tornado sem efeito** (art. 13, §6º).\n\nJá o **exercício** é o efetivo desempenho das atribuições. O prazo para o servidor empossado entrar em exercício é de **quinze dias**, contados da **data da posse** (art. 15, §1º). Se não entrar em exercício nesse prazo, **será exonerado** (art. 15, §2º). A exoneração é de ofício (art. 34, parágrafo único, II).\n\nDo contrário, o ato de nomeação é "tornado sem efeito" quando **não há posse**. A demissão por abandono de cargo (art. 132, II, c/c art. 138) pressupõe servidor que já está em exercício e se ausenta por mais de trinta dias consecutivos.',
        alternativas: [
          'Errada. Tornar sem efeito é a consequência de quem não toma posse; Maria tomou.',
          'Correta. Art. 15, §§1º e 2º, e art. 34, parágrafo único, II.',
          'Errada. O abandono de cargo supõe servidor em exercício; Maria nunca entrou em exercício.',
          'Errada. Não há advertência nem prorrogação para esse caso.'
        ],
        dica: 'Posse: 30 dias da publicação. Exercício: 15 dias da posse. Sem posse, ato sem efeito; sem exercício, exoneração.'
      },
      fontes: [f('Lei 8.112/1990, arts. 13 e 15', U.l8112)]
    },
    {
      id: 'dad-607',
      materia: 'direito-administrativo',
      assunto: 'Improbidade administrativa',
      tipo: 'multipla',
      estilo: 'OAB/FGV',
      dificuldade: 3,
      objetivos: OAB_TODOS,
      enunciado: 'Em 2024, Raimundo, secretário municipal de obras, autorizou o pagamento de uma medição de serviços sem conferir o boletim técnico, por descuido e negligência, o que resultou em pagamento a maior e prejuízo ao erário. O Ministério Público apurou que Raimundo não tinha qualquer intenção de causar o dano, nem se beneficiou do valor. Diante da Lei nº 8.429/1992, com a redação dada pela Lei nº 14.230/2021, assinale a afirmativa correta.',
      alternativas: [
        'Raimundo comete ato de improbidade por dano ao erário na modalidade culposa, pois a negligência basta para a configuração.',
        'Raimundo comete ato de improbidade por violação a princípios (art. 11), ainda que sem dolo, por ter faltado com o dever de cuidado.',
        'Não há ato de improbidade, pois a lei passou a exigir dolo para todas as modalidades, o que não impede a responsabilização civil e administrativa pelo dano.',
        'Há ato de improbidade, mas a sanção deve ser atenuada em razão da culpa, limitada ao ressarcimento do dano.'
      ],
      resposta: 2,
      explicacao: {
        resumo: 'A Lei 14.230/2021 extinguiu a improbidade culposa: só há ato de improbidade se houver ação ou omissão dolosa. A negligência pode gerar ressarcimento e sanções administrativas, mas não improbidade.',
        detalhada: 'A **Lei 14.230/2021** reformou profundamente a Lei 8.429/1992. O art. 1º, §§1º a 3º, passou a definir ato de improbidade como **conduta dolosa** tipificada nos arts. 9º, 10 e 11, com o **fim ilícito** de alcançar o resultado vedado. A **modalidade culposa** do dano ao erário foi **suprimida**: o art. 10 refere-se a "ação ou omissão, dolosa". O art. 1º, §3º, esclarece que o **mero exercício da função** ou **desempenho de competências públicas**, sem comprovação de ato doloso com fim ilícito, **não** basta.\n\nO **erro, a negligência e a imperícia** podem ensejar a **responsabilidade civil** (ressarcimento ao erário), a **responsabilidade administrativa** e a atuação dos Tribunais de Contas, mas não a sanção por improbidade. Além disso, o rol dos atos do art. 11 passou a ser **taxativo**.\n\nO Tema 1.199 do STF trata da aplicação da Lei 14.230 no tempo (exigência de dolo e novos prazos prescricionais: não retroage sobre coisa julgada, mas alcança atos culposos sem condenação definitiva); os fatos aqui são de 2024, posteriores à lei.',
        alternativas: [
          'Errada. A modalidade culposa foi extinta.',
          'Errada. O art. 11 também exige dolo e hoje é taxativo.',
          'Correta. A improbidade exige dolo; a negligência pode gerar ressarcimento e responsabilização em outras esferas.',
          'Errada. Não existe improbidade culposa com sanção atenuada.'
        ],
        dica: 'Pós-14.230: improbidade só com dolo. Erro grosseiro e culpa podem gerar ressarcimento e sanção administrativa, mas não a Lei 8.429.'
      },
      fontes: [f('Lei 8.429/1992 (redação da Lei 14.230/2021)', U.l8429)]
    },

    /* ===================== DIREITO PENAL ===================== */

    {
      id: 'dpe-601',
      materia: 'direito-penal',
      assunto: 'Teoria do crime',
      tipo: 'multipla',
      estilo: 'OAB/FGV',
      dificuldade: 2,
      objetivos: OAB_TODOS,
      enunciado: 'Pedro, ao ver Lucas, seu desafeto, atravessando a rua, acelerou o carro em direção a ele "só para assustá-lo", embora tenha previsto que poderia atropelá-lo e matá-lo e, mesmo assim, não se importou com esse resultado. Pedro atropelou Lucas, que faleceu. Considerando a teoria do crime, assinale a afirmativa correta.',
      alternativas: [
        'Pedro responde por homicídio culposo, pois não queria o resultado morte e agiu com culpa consciente.',
        'Pedro responde por homicídio doloso, com dolo direto, pois sua conduta era dirigida à produção do resultado.',
        'Pedro responde por lesão corporal seguida de morte, crime preterdoloso, pois queria apenas ferir Lucas.',
        'Pedro responde por homicídio doloso, com dolo eventual, pois previu o resultado e assumiu o risco de produzi-lo.'
      ],
      resposta: 3,
      explicacao: {
        resumo: 'Quem prevê o resultado e assume o risco de produzi-lo age com dolo eventual (art. 18, I, parte final, do CP).',
        detalhada: 'O art. 18, I, do CP diz que o crime é doloso quando o agente **quis o resultado** (dolo direto) **ou assumiu o risco de produzi-lo** (dolo eventual). No dolo eventual, o agente prevê o resultado como possível e **aceita**, é indiferente a ele ("tanto faz").\n\nNa **culpa consciente**, o agente também prevê o resultado, mas **confia sinceramente que ele não ocorrerá**, por acreditar em sua habilidade ou em circunstâncias que o evitem. A diferença está no elemento volitivo: no dolo eventual, **assume-se o risco**; na culpa consciente, **espera-se evitá-lo**.\n\nNo caso, Pedro previu a morte e "não se importou": aceitou o resultado. Responde por **homicídio doloso** (art. 121, caput), e não pelo crime culposo do CTB. O crime **preterdoloso** exige dolo na conduta antecedente (lesão) e culpa no resultado mais grave, o que não ocorre.',
        alternativas: [
          'Errada. Na culpa consciente o agente confia em que o resultado não ocorrerá; Pedro foi indiferente.',
          'Errada. O dolo direto exige que o agente queira o resultado; aqui há apenas aceitação.',
          'Errada. Não havia dolo de lesão: o dolo era de assustar, mas com aceitação da morte.',
          'Correta. Art. 18, I, parte final: assunção do risco.'
        ],
        dica: 'Dolo eventual: "se acontecer, paciência". Culpa consciente: "vai dar certo, não vai acontecer". A FGV descreve a indiferença do agente.'
      },
      fontes: [f('Código Penal, art. 18', U.cp)]
    },
    {
      id: 'dpe-602',
      materia: 'direito-penal',
      assunto: 'Teoria do crime',
      tipo: 'multipla',
      estilo: 'OAB/FGV',
      dificuldade: 2,
      objetivos: OAB_TODOS,
      enunciado: 'Bruno, com a intenção de matar Luís, apontou-lhe uma arma de fogo municiada com seis projéteis. Embora tivesse a possibilidade de efetuar os disparos e Luís estivesse indefeso, Bruno, por vontade própria, sem qualquer interferência externa, desistiu de continuar e foi embora, sem disparar. Considerando o Código Penal, assinale a afirmativa correta.',
      alternativas: [
        'Bruno responde por tentativa de homicídio, com a pena reduzida de um a dois terços, pois o crime não se consumou.',
        'Bruno responde por tentativa de homicídio, mas com a pena reduzida de um terço, em razão da desistência.',
        'Bruno não responde por tentativa de homicídio, em razão da desistência voluntária, respondendo apenas pelos atos já praticados.',
        'Bruno não responde por nenhum crime, pois a desistência voluntária exclui a tipicidade de todos os atos praticados.'
      ],
      resposta: 2,
      explicacao: {
        resumo: 'Na desistência voluntária, o agente, que podia prosseguir, interrompe a execução por vontade própria e só responde pelos atos já praticados (art. 15 do CP).',
        detalhada: 'O art. 15 do CP trata da **desistência voluntária** e do **arrependimento eficaz**: o agente que, voluntariamente, **desiste de prosseguir na execução** ou **impede que o resultado se produza** só responde pelos **atos já praticados**. Trata-se de causa de **exclusão da tipicidade do crime pretendido** (a tentativa) e é conhecida como "ponte de ouro" para o agente.\n\nA diferença para a **tentativa** (art. 14, II) está em que, nesta, o crime não se consuma por **circunstâncias alheias à vontade do agente**; na desistência, a interrupção decorre da vontade do agente, que **podia continuar**. A fórmula de Frank: "posso, mas não quero" (desistência) x "quero, mas não posso" (tentativa).\n\nO agente continua respondendo pelos atos já praticados que constituam crime autônomo, como a ameaça ou o porte ilegal de arma. Por isso, não se pode dizer que não responde por nenhum crime.',
        alternativas: [
          'Errada. A redução de um a dois terços é a da tentativa, que não ocorre aqui.',
          'Errada. Não há tentativa quando há desistência voluntária.',
          'Correta. Art. 15 do CP.',
          'Errada. Os atos já praticados, se típicos por si sós, continuam puníveis.'
        ],
        dica: 'Fórmula de Frank: "posso, mas não quero" é desistência voluntária; "quero, mas não posso" é tentativa.'
      },
      fontes: [f('Código Penal, arts. 14 e 15', U.cp)]
    },
    {
      id: 'dpe-603',
      materia: 'direito-penal',
      assunto: 'Teoria do crime',
      tipo: 'multipla',
      estilo: 'OAB/FGV',
      dificuldade: 1,
      objetivos: OAB_TODOS,
      enunciado: 'Tiago subtraiu, sem violência ou grave ameaça, um notebook de uma loja. Dias depois, arrependido e por ato voluntário, devolveu o equipamento intacto ao dono, antes de oferecida a denúncia. Considerando o Código Penal, assinale a afirmativa correta.',
      alternativas: [
        'A devolução extingue a punibilidade de Tiago pelo furto.',
        'A devolução configura arrependimento posterior, que é causa de diminuição de pena de um a dois terços.',
        'A devolução exclui a tipicidade do furto, que não chegou a se consumar.',
        'A devolução é apenas circunstância atenuante genérica, sem alterar a pena na terceira fase.'
      ],
      resposta: 1,
      explicacao: {
        resumo: 'Nos crimes sem violência ou grave ameaça, a reparação do dano ou a restituição da coisa, voluntária, até o recebimento da denúncia ou queixa, reduz a pena de um a dois terços (art. 16 do CP).',
        detalhada: 'O **arrependimento posterior** (art. 16 do CP) exige: (1) crime **sem violência ou grave ameaça à pessoa**; (2) **reparação do dano ou restituição da coisa**; (3) até o **recebimento da denúncia ou queixa**; e (4) **ato voluntário** do agente. Preenchidos, a pena é **reduzida de um a dois terços**, causa de diminuição aplicada na terceira fase da dosimetria.\n\nNo furto, o crime já se consumou com a inversão da posse; a devolução posterior **não afasta a tipicidade** nem **extingue a punibilidade** (diferente do peculato culposo, art. 312, §3º, em que a reparação antes da sentença irrecorrível extingue a punibilidade).\n\nSe a reparação ocorrer **depois** do recebimento da denúncia, e antes do julgamento, incide a **atenuante** do art. 65, III, b, e não a causa de diminuição.',
        alternativas: [
          'Errada. A devolução, no furto, não extingue a punibilidade.',
          'Correta. Art. 16 do CP.',
          'Errada. O furto já estava consumado.',
          'Errada. Antes da denúncia, aplica-se a causa de diminuição, não a atenuante.'
        ],
        dica: 'Arrependimento posterior: antes do recebimento da denúncia, sem violência, reduz de 1/3 a 2/3. Depois da denúncia, só atenuante.'
      },
      fontes: [f('Código Penal, art. 16', U.cp)]
    },
    {
      id: 'dpe-604',
      materia: 'direito-penal',
      assunto: 'Excludentes de ilicitude',
      tipo: 'multipla',
      estilo: 'OAB/FGV',
      dificuldade: 2,
      objetivos: OAB_TODOS,
      enunciado: 'Rogério, policial militar em serviço, durante uma troca de tiros em via pública, puxou um transeunte que estava ao seu lado e o colocou à sua frente, para se proteger dos disparos. O transeunte foi atingido e ferido. Rogério, processado por lesão corporal, alega estado de necessidade. Considerando o Código Penal, assinale a afirmativa correta.',
      alternativas: [
        'Rogério não pode alegar o estado de necessidade, pois tinha o dever legal de enfrentar o perigo.',
        'Rogério age em estado de necessidade, pois sacrificou um bem de valor igual ao que salvou, a vida e a integridade corporal.',
        'Rogério age em estado de necessidade, mas a pena deve ser reduzida de um a dois terços, pois o sacrifício era razoável.',
        'Rogério age em legítima defesa putativa, pois supôs a existência de agressão injusta do transeunte.'
      ],
      resposta: 0,
      explicacao: {
        resumo: 'Não pode alegar estado de necessidade quem tinha o dever legal de enfrentar o perigo (art. 24, §1º, do CP).',
        detalhada: 'O **estado de necessidade** (art. 24 do CP) exclui a ilicitude de quem pratica o fato para salvar de **perigo atual**, que **não provocou por sua vontade**, **direito próprio ou alheio**, **cujo sacrifício, nas circunstâncias, não era razoável exigir-se**. O §1º ressalva: **não pode alegá-lo quem tinha o dever legal de enfrentar o perigo**, como policiais, bombeiros e salva-vidas no exercício do ofício.\n\nA doutrina esclarece que o dever legal não é de sacrifício absoluto (ninguém é obrigado ao heroísmo), mas o agente do Estado **não pode** usar o terceiro inocente como escudo, pois o risco inerente à atividade é dele.\n\nO §2º prevê que, embora seja razoável exigir o sacrifício do bem ameaçado, a pena pode ser **reduzida de um a dois terços**. A legítima defesa putativa (art. 20, §1º) exige erro sobre situação de fato e agressão suposta, o que não existe aqui.',
        alternativas: [
          'Correta. Art. 24, §1º, do CP.',
          'Errada. O dever legal de enfrentar o perigo impede a alegação.',
          'Errada. A redução do §2º exige que se possa alegar o estado de necessidade; aqui, o §1º impede.',
          'Errada. Não há erro sobre agressão do transeunte: a ameaça vinha de terceiros.'
        ],
        dica: 'Dever legal de enfrentar o perigo (policial, bombeiro) = não alega estado de necessidade, mas pode alegar legítima defesa quando há agressão injusta.'
      },
      fontes: [f('Código Penal, art. 24', U.cp)]
    },
    {
      id: 'dpe-605',
      materia: 'direito-penal',
      assunto: 'Excludentes de ilicitude',
      tipo: 'multipla',
      estilo: 'OAB/FGV',
      dificuldade: 3,
      objetivos: OAB_TODOS,
      enunciado: 'Durante um assalto a banco, criminosos mantiveram Helena como refém, com uma arma apontada para sua cabeça. O sargento Paulo, policial militar com treinamento especial, constatando que não havia alternativa menos lesiva para impedir a execução da refém, disparou e matou um dos criminosos, que estava prestes a atirar. Considerando o Código Penal, assinale a afirmativa correta.',
      alternativas: [
        'Paulo agiu em legítima defesa de terceiro, pois a lei considera em legítima defesa o agente de segurança pública que repele agressão ou risco de agressão a vítima mantida refém durante a prática de crimes.',
        'Paulo agiu em estado de necessidade, pois sacrificou a vida do criminoso para salvar a da refém.',
        'Paulo responde por homicídio doloso, mas com pena reduzida, pois agiu em excesso culposo.',
        'Paulo responde por homicídio doloso, mas é isento de pena por inexigibilidade de conduta diversa, causa excludente de culpabilidade.'
      ],
      resposta: 0,
      explicacao: {
        resumo: 'O art. 25, parágrafo único, do CP, incluído pela Lei 13.964/2019, considera em legítima defesa o agente de segurança pública que repele agressão ou risco de agressão a vítima mantida refém durante a prática de crimes.',
        detalhada: 'A **legítima defesa** (art. 25 do CP) exige: agressão **injusta, atual ou iminente**; a **direito próprio ou alheio**; reação com **meios necessários**, usados **moderadamente**. O **Pacote Anticrime** (Lei 13.964/2019) acrescentou o **parágrafo único**: observados os requisitos do caput, **considera-se também em legítima defesa o agente de segurança pública que repele agressão ou risco de agressão a vítima mantida refém durante a prática de crimes**.\n\nNo caso, Helena é refém, a agressão é atual e iminente, a injustiça é evidente, e Paulo agiu com meio necessário e moderado, sem alternativa menos lesiva. É **legítima defesa de terceiro**, que exclui a **ilicitude**.\n\nO estado de necessidade exige conflito entre bens lícitos, mas aqui há agressão injusta, o que caracteriza legítima defesa. E, não havendo excesso, não há o que reduzir.',
        alternativas: [
          'Correta. Art. 25, parágrafo único, do CP.',
          'Errada. Há agressão injusta, o que afasta o estado de necessidade e configura legítima defesa.',
          'Errada. Não houve excesso, pois a reação foi necessária e moderada.',
          'Errada. A conduta é lícita; não se discute culpabilidade.'
        ],
        dica: 'Agressão injusta (de pessoa) = legítima defesa. Perigo sem agressão injusta (animal, enchente) = estado de necessidade.'
      },
      fontes: [f('Código Penal, arts. 23 a 25', U.cp)]
    },
    {
      id: 'dpe-606',
      materia: 'direito-penal',
      assunto: 'Crimes contra a Administração Pública',
      tipo: 'multipla',
      estilo: 'OAB/FGV',
      dificuldade: 3,
      objetivos: OAB_TODOS,
      enunciado: 'O Município de Monte Claro firmou convênio com uma empresa privada para executar a arrecadação do estacionamento rotativo nas vias públicas, atividade típica da Administração. Fábio, empregado da empresa, recebia em dinheiro os valores pagos pelos motoristas e, em vez de repassá-los aos cofres municipais, apropriou-se deles. Considerando o Código Penal, assinale a afirmativa correta.',
      alternativas: [
        'Fábio responde por apropriação indébita, pois é empregado de empresa privada e, portanto, não é funcionário público.',
        'Fábio responde por peculato, pois se equipara a funcionário público quem trabalha para empresa conveniada para a execução de atividade típica da Administração Pública.',
        'Fábio responde por furto qualificado pelo abuso de confiança, pois subtraiu valores que pertenciam ao Município.',
        'Fábio responde por estelionato, pois enganou o Município quanto aos valores arrecadados.'
      ],
      resposta: 1,
      explicacao: {
        resumo: 'Quem trabalha para empresa conveniada ou contratada para executar atividade típica da Administração equipara-se a funcionário público (art. 327, §1º), e a apropriação do dinheiro público configura peculato (art. 312).',
        detalhada: 'O **art. 327 do CP** considera funcionário público, para efeitos penais, quem exerce cargo, emprego ou função pública, ainda que **transitoriamente ou sem remuneração**. O **§1º** o **equipara** a quem exerce cargo, emprego ou função em **entidade paraestatal** e a quem **trabalha para empresa prestadora de serviço contratada ou conveniada para a execução de atividade típica da Administração Pública**.\n\nO **peculato-apropriação** (art. 312, caput) é a conduta do funcionário público que se **apropria de dinheiro, valor ou qualquer outro bem móvel, público ou particular, de que tem a posse em razão do cargo**, ou o desvia em proveito próprio ou alheio. A posse lícita anterior é o que o distingue do furto.\n\nFábio recebeu o dinheiro em razão da função equiparada, e se apropriou dele. Responde por peculato, e o crime é próprio. A pena é aumentada de um terço se o autor ocupa cargo em comissão ou função de direção (art. 327, §2º), o que não é o caso. Terceiro que participe responde em concurso (art. 30 do CP, a qualidade é elementar).',
        alternativas: [
          'Errada. O art. 327, §1º, equipara o empregado a funcionário público.',
          'Correta. Art. 312 c/c art. 327, §1º, do CP.',
          'Errada. Não houve subtração, mas apropriação de coisa de que tinha a posse.',
          'Errada. Não houve fraude para obter a posse: a posse era lícita.'
        ],
        dica: 'Peculato é crime próprio, mas o conceito de funcionário público do art. 327 é amplo: o empregado de empresa contratada para atividade típica entra no conceito.'
      },
      fontes: [f('Código Penal, arts. 312 e 327', U.cp)]
    },
    {
      id: 'dpe-607',
      materia: 'direito-penal',
      assunto: 'Crimes contra a Administração Pública',
      tipo: 'multipla',
      estilo: 'OAB/FGV',
      dificuldade: 2,
      objetivos: OAB_TODOS,
      enunciado: 'Lúcio, auditor fiscal, procurou o empresário Sérgio e, de forma velada, solicitou dez mil reais para deixar de lançar um tributo devido. Sérgio, indignado, recusou a proposta e comunicou o fato à polícia. Lúcio não chegou a receber qualquer valor. Considerando o Código Penal, assinale a afirmativa correta.',
      alternativas: [
        'Lúcio responde por tentativa de corrupção passiva, pois o crime só se consuma com o recebimento da vantagem.',
        'Lúcio responde por concussão, pois a solicitação equivale à exigência da vantagem indevida.',
        'Lúcio responde por corrupção passiva consumada, pois o crime se consuma com a mera solicitação da vantagem indevida.',
        'Sérgio responde por corrupção ativa, pois deixou de denunciar a proposta de imediato.'
      ],
      resposta: 2,
      explicacao: {
        resumo: 'A corrupção passiva (art. 317) é crime formal: consuma-se com a simples solicitação da vantagem indevida, sendo irrelevante o recebimento. Exigir configura concussão.',
        detalhada: 'O **art. 317** tipifica a corrupção passiva: **solicitar ou receber**, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, **vantagem indevida**, ou **aceitar promessa** de tal vantagem. É **crime formal**: consuma-se com a **solicitação**, mesmo que o particular recuse e que nada seja entregue.\n\nA **concussão** (art. 316) é diferente: o funcionário **exige** a vantagem indevida, valendo-se da função, o que implica **intimidação** (metus publicae potestatis). Aqui, Lúcio apenas solicitou, de forma velada: corrupção passiva.\n\nA **corrupção ativa** (art. 333) é a conduta do particular que **oferece ou promete** vantagem indevida a funcionário público para determinar-lhe a prática, omissão ou retardamento de ato de ofício. Sérgio recusou: não há crime algum de sua parte.',
        alternativas: [
          'Errada. O crime se consuma com a solicitação; o recebimento é exaurimento.',
          'Errada. Concussão exige exigir, não solicitar.',
          'Correta. Art. 317 do CP.',
          'Errada. Sérgio não ofereceu nem prometeu vantagem; não há crime.'
        ],
        dica: 'Solicitar: corrupção passiva. Exigir: concussão. Oferecer ou prometer: corrupção ativa.'
      },
      fontes: [f('Código Penal, arts. 316, 317 e 333', U.cp)]
    },
    {
      id: 'dpe-608',
      materia: 'direito-penal',
      assunto: 'Aplicação da lei penal',
      tipo: 'multipla',
      estilo: 'OAB/FGV',
      dificuldade: 2,
      objetivos: OAB_TODOS,
      enunciado: 'Cláudio foi condenado definitivamente, em 2019, por um crime previsto em determinado artigo de lei penal, e cumpre a pena em regime semiaberto. Em 2024, uma lei nova revogou o artigo, deixando de considerar o fato como crime. Diante do caso, assinale a afirmativa correta.',
      alternativas: [
        'Cláudio continua a cumprir a pena, pois a lei aplicável é a vigente ao tempo do fato e a condenação já transitou em julgado.',
        'A lei nova só beneficiaria Cláudio se a condenação ainda não tivesse transitado em julgado.',
        'A execução da pena cessa, mas Cláudio permanece reincidente, pois a condenação ocorreu antes da lei nova.',
        'Ocorre a abolitio criminis, que faz cessar a execução e os efeitos penais da condenação, subsistindo os efeitos civis da sentença.'
      ],
      resposta: 3,
      explicacao: {
        resumo: 'A abolitio criminis retroage mesmo após o trânsito em julgado: cessam a execução e os efeitos penais da condenação (art. 2º, caput, do CP), subsistindo os efeitos civis.',
        detalhada: 'O **art. 2º, caput, do CP** estabelece que ninguém pode ser punido por fato que lei posterior deixa de considerar crime, **cessando em virtude dela a execução e os efeitos penais da sentença condenatória**. É a **abolitio criminis**, que também extingue a punibilidade (art. 107, III) e **retroage ainda que haja coisa julgada**. A retroatividade da lei penal benéfica tem base constitucional (art. 5º, XL).\n\nOs **efeitos penais** que cessam incluem a reincidência, o lançamento do nome no rol dos culpados e os maus antecedentes. Já os **efeitos extrapenais**, **civis** (como a obrigação de reparar o dano) e administrativos, **subsistem**, pois a conduta continua ilícita civilmente.\n\nA regra *tempus regit actum* é a regra geral; as exceções são a **abolitio criminis** e a **novatio legis in mellius** (art. 2º, parágrafo único), que retroagem.',
        alternativas: [
          'Errada. A lei penal benéfica retroage, mesmo com coisa julgada.',
          'Errada. A retroatividade alcança também as condenações definitivas.',
          'Errada. Cessam também os efeitos penais, inclusive a reincidência.',
          'Correta. Art. 2º, caput, do CP, c/c art. 5º, XL, da CF.'
        ],
        dica: 'Abolitio criminis: apaga efeitos penais, mas não os civis. A pegadinha é a reincidência, que cai junto com a condenação.'
      },
      fontes: [f('Código Penal, art. 2º', U.cp), f('Constituição Federal, art. 5º, XL', U.cf)]
    }
  ];

  Banco.registrar({ questoes: questoes });
})();
