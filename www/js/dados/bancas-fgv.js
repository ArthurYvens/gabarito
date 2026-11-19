/* Questões inéditas no estilo FGV, escritas para o app. */
Banco.registrar({ questoes: [

  /* ---------- Português ---------- */
  {
    id: 'por-201', materia: 'portugues', assunto: 'Interpretação de texto', tipo: 'multipla', estilo: 'FGV',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais', 'estatais'],
    textoBase: 'A biblioteca do bairro, que durante anos funcionou numa sala emprestada pela igreja, ganhou prédio próprio. Os moradores, contudo, notaram que o acervo continuava o mesmo: os livros mudaram de endereço, não de conteúdo. Para a coordenadora, a mudança física foi apenas o primeiro passo; sem novas aquisições e sem programas de leitura, o espaço novo corre o risco de ser uma casca bem pintada.',
    enunciado: 'No texto, a expressão "casca bem pintada" é empregada para indicar',
    alternativas: [
      'o reconhecimento da qualidade estética do novo prédio, apontada como principal mérito da obra.',
      'uma estrutura renovada na aparência, mas sem mudança substancial naquilo que oferece à comunidade.',
      'a crítica à igreja, que teria negligenciado a conservação da sala cedida à biblioteca.',
      'a deterioração do acervo, que exigiria restauro urgente antes da inauguração do espaço.',
      'a existência de defeitos estruturais no prédio, escondidos por uma reforma superficial.'
    ],
    resposta: 1,
    explicacao: {
      resumo: 'A "casca bem pintada" é imagem de algo que só mudou por fora: o prédio é novo, mas sem novos livros e programas o serviço continua igual.',
      detalhada: 'A coordenadora afirma que a mudança física foi "apenas o primeiro passo". A condição para que o espaço não seja só aparência é haver **novas aquisições** e **programas de leitura**, isto é, mudança no que a biblioteca oferece. A metáfora da casca pintada opõe, portanto, aparência (prédio novo) e substância (acervo e atividades).\n\nA FGV costuma cobrar o sentido de expressões figuradas **a partir do contexto**, sem exigir conhecimento externo. Releia a frase anterior à expressão: ela dá a chave da interpretação.',
      alternativas: [
        'Errada. A imagem tem sentido crítico, não elogioso; o texto não enaltece a estética do prédio.',
        'Correta. Aparência renovada, conteúdo e serviços inalterados.',
        'Errada. A igreja só é mencionada como cedente da sala; não há crítica a ela.',
        'Errada. O texto não fala de deterioração, e sim de acervo que "continuava o mesmo".',
        'Errada. Não há referência a problemas estruturais; o defeito apontado é de conteúdo.'
      ],
      dica: 'Em questão de sentido figurado, descarte as alternativas que trazem informação inexistente no texto (igreja negligente, defeitos de obra) e fique com a que opõe forma e conteúdo.'
    },
    fontes: [{ titulo: 'Khan Academy: Português', url: 'https://pt.khanacademy.org/' }]
  },
  {
    id: 'por-202', materia: 'portugues', assunto: 'Concordância verbal e nominal', tipo: 'multipla', estilo: 'FGV',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais', 'policial', 'estatais'],
    textoBase: 'A chefia de uma repartição pública pediu a um servidor que revisasse a redação de um memorando interno antes do envio ao gabinete. Todas as frases abaixo tratam de rotinas administrativas, mas apenas uma delas respeita a concordância da norma-padrão.',
    enunciado: 'Assinale a opção que apresenta a frase do memorando em que a concordância está de acordo com a norma-padrão.',
    alternativas: [
      'Fazem dois anos que o setor aguarda a reforma da sala de atendimento.',
      'Haviam muitos candidatos na fila de inscrição quando o sistema saiu do ar.',
      'Devem haver ajustes no cronograma, caso o recurso não seja liberado.',
      'Cabem ao gestor da unidade as decisões sobre a escala de plantões.',
      'Existe, nos autos, várias provas contrárias à tese da defesa.'
    ],
    resposta: 3,
    explicacao: {
      resumo: 'Em "Cabem ao gestor as decisões", o verbo concorda com o sujeito posposto "as decisões" (plural). As demais trazem erros clássicos com fazer, haver e existir.',
      detalhada: '- **Fazer** indicando tempo decorrido é impessoal: "Faz dois anos".\n- **Haver** com sentido de existir é impessoal e não vai ao plural: "Havia muitos candidatos". Em locução, o auxiliar acompanha: "Deve haver ajustes".\n- **Existir** é pessoal e concorda com o sujeito: "Existem... várias provas".\n- Em "Cabem ao gestor as decisões", o sujeito é "as decisões" (posposto), e o verbo **caber** concorda com ele.\n\nA banca explora a inversão da ordem: o termo que vem depois do verbo parece complemento, mas é o sujeito.',
      alternativas: [
        'Errada. Fazer, indicando tempo, é impessoal: "Faz dois anos".',
        'Errada. Haver no sentido de existir não varia: "Havia".',
        'Errada. Na locução, o verbo haver impessoal transmite a impessoalidade ao auxiliar: "Deve haver".',
        'Correta. Sujeito posposto "as decisões", verbo "cabem" no plural.',
        'Errada. Existir é pessoal: "Existem, nos autos, várias provas".'
      ],
      dica: 'Antes de decidir a concordância, ache o sujeito. Se o verbo for fazer (tempo) ou haver (existir), ele fica no singular.'
    },
    fontes: [{ titulo: 'Concordância verbal (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Concord%C3%A2ncia_verbal' }]
  },
  {
    id: 'por-203', materia: 'portugues', assunto: 'Crase', tipo: 'multipla', estilo: 'FGV',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais', 'estatais'],
    enunciado: 'Ao revisar o relatório de uma corregedoria, o analista precisa identificar o trecho em que o uso do acento grave indicativo de crase está correto. Assinale-o.',
    alternativas: [
      'A diretora referiu-se à servidora que denunciou o esquema, e não àquela que o praticou.',
      'A reunião começou à 9 horas, conforme a portaria.',
      'O servidor entregou o documento à ela, sem exigir protocolo.',
      'Os candidatos começaram à responder as questões logo após o sinal.',
      'O gerente dedicou-se à estudar o novo regulamento durante as férias.'
    ],
    resposta: 0,
    explicacao: {
      resumo: 'Em "referiu-se à servidora" há preposição "a" (regência de referir-se) + artigo "a" antes de substantivo feminino; em "àquela" há "a" + "aquela". Nas demais não pode haver crase.',
      detalhada: 'Crase é a fusão da preposição **a** com o artigo **a(s)** ou com o início de **aquele(s), aquela(s), aquilo**.\n\n- "Referiu-se à servidora": referir-se exige "a"; "servidora" aceita artigo. Crase.\n- "começou à 9 horas": o artigo acompanha o substantivo "horas" (plural), então o correto é "às 9 horas". Crase mal empregada no singular.\n- "à ela": antes de pronome pessoal não há artigo. Sem crase.\n- "começaram à responder" e "dedicou-se à estudar": antes de verbo não há crase.',
      alternativas: [
        'Correta. Preposição exigida pelo verbo mais artigo feminino; "àquela" também correto.',
        'Errada. Horas é plural: o correto é "às 9 horas", e não "à 9 horas".',
        'Errada. Pronome pessoal não admite artigo; escreve-se "a ela".',
        'Errada. Crase não ocorre antes de verbo.',
        'Errada. Crase não ocorre antes de verbo.'
      ],
      dica: 'Truque do verbo "voltar": se "volto à" funciona, há crase; se for "volto a" ou "volto da" (ou antes de verbo/pronome pessoal), não há.'
    },
    fontes: [{ titulo: 'Crase (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Crase' }]
  },
  {
    id: 'por-204', materia: 'portugues', assunto: 'Pontuação', tipo: 'multipla', estilo: 'FGV',
    dificuldade: 3, objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    textoBase: 'Em uma portaria de corregedoria, constaram duas redações alternativas para o mesmo trecho:\n(1) "Os servidores, que chegaram atrasados, foram advertidos."\n(2) "Os servidores que chegaram atrasados foram advertidos."',
    enunciado: 'Quanto ao efeito da pontuação sobre o sentido das duas redações, assinale a afirmativa correta.',
    alternativas: [
      'As duas redações têm o mesmo sentido: todos os servidores foram advertidos por terem chegado atrasados.',
      'Em (1), a oração adjetiva é restritiva e indica que só alguns servidores foram advertidos.',
      'Em (2), a oração adjetiva é explicativa e atribui o atraso a todos os servidores do conjunto.',
      'As vírgulas de (1) são facultativas, de modo que sua retirada, em (2), não altera o significado.',
      'Em (1), a oração é explicativa e o atraso é atribuído a todos os servidores; em (2), é restritiva e só os atrasados foram advertidos.'
    ],
    resposta: 4,
    explicacao: {
      resumo: 'A vírgula transforma a oração adjetiva em explicativa (1), que vale para todo o grupo; sem vírgula, ela é restritiva (2) e delimita o subconjunto dos advertidos.',
      detalhada: 'A **oração adjetiva explicativa** vem entre vírgulas, acrescenta uma informação sobre todo o antecedente: em (1), todos os servidores chegaram atrasados e todos foram advertidos.\n\nA **oração adjetiva restritiva** não leva vírgula e restringe o antecedente: em (2), entre os servidores, apenas os que chegaram atrasados foram advertidos.\n\nPortanto, a pontuação **muda o sentido**; as vírgulas não são facultativas aqui.',
      alternativas: [
        'Errada. Em (2), só os atrasados foram advertidos; os sentidos são diferentes.',
        'Errada. A oração de (1) é explicativa, não restritiva.',
        'Errada. A oração de (2) é restritiva.',
        'Errada. A retirada das vírgulas altera o sentido.',
        'Correta. Descreve com precisão as duas funções.'
      ],
      dica: 'Vírgula antes de "que" adjetivo: explicativa, vale para todos. Sem vírgula: restritiva, vale para uma parte.'
    },
    fontes: [{ titulo: 'Oração subordinada adjetiva (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Ora%C3%A7%C3%A3o_subordinada_adjetiva' }]
  },
  {
    id: 'por-205', materia: 'portugues', assunto: 'Regência', tipo: 'multipla', estilo: 'FGV',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais', 'policial', 'estatais'],
    enunciado: 'Uma coordenação pediu que a redação de um comunicado fosse ajustada à norma-padrão quanto à regência verbal. Assinale a frase do comunicado que já a respeita.',
    alternativas: [
      'O gestor aspira o cargo de diretor desde que ingressou no órgão.',
      'Assistimos o julgamento do processo na tarde de ontem.',
      'Os servidores obedeceram às normas internas durante a inspeção.',
      'Prefiro mais cumprir o plantão noturno do que o diurno.',
      'Chegamos na repartição às oito horas, como determina a escala.'
    ],
    resposta: 2,
    explicacao: {
      resumo: 'Obedecer é transitivo indireto: quem obedece, obedece a algo ("às normas"). As demais violam a regência de aspirar, assistir, preferir e chegar.',
      detalhada: '- **Aspirar** no sentido de almejar pede "a": "aspira ao cargo".\n- **Assistir** no sentido de ver pede "a": "assistimos ao julgamento".\n- **Obedecer** pede "a": "obedeceram às normas". Correta.\n- **Preferir** não admite "mais" nem "do que": "Prefiro cumprir o plantão noturno ao diurno".\n- **Chegar** pede "a" (destino): "chegamos à repartição".',
      alternativas: [
        'Errada. Aspirar (almejar) é transitivo indireto: "ao cargo".',
        'Errada. Assistir (ver) pede "a": "ao julgamento".',
        'Correta. Obedecer + a.',
        'Errada. Preferir dispensa "mais" e o "do que" é substituído por "a".',
        'Errada. Em norma-padrão, chegar pede "a": "à repartição".'
      ],
      dica: 'Cuidado com os verbos que a fala cotidiana "simplifica": aspirar, assistir, preferir, chegar e ir pedem preposição a.'
    },
    fontes: [{ titulo: 'Regência verbal (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Reg%C3%AAncia_verbal' }]
  },

  /* ---------- Direito Administrativo ---------- */
  {
    id: 'dad-201', materia: 'direito-administrativo', assunto: 'Licitações (Lei 14.133/2021)', tipo: 'multipla', estilo: 'FGV',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais', 'estatais'],
    enunciado: 'Uma secretaria municipal, acostumada ao regime anterior, pretende adotar a modalidade "convite" para uma contratação de médio valor e, para agilizar, combinar elementos do pregão com os da concorrência, criando um procedimento próprio. À luz da Lei 14.133/2021, assinale a afirmativa correta.',
    alternativas: [
      'A Lei 14.133/2021 não prevê o convite, e veda a criação de outras modalidades ou a combinação das previstas, que são pregão, concorrência, concurso, leilão e diálogo competitivo.',
      'O convite continua válido, mas apenas para valores inferiores aos da dispensa, podendo ser combinado com o pregão se houver ato motivado.',
      'A combinação de modalidades é permitida desde que haja regulamento municipal, pois a lei só fixa um rol exemplificativo.',
      'O convite foi substituído pela tomada de preços, que o município pode escolher livremente, em qualquer contratação.',
      'A criação de modalidade própria depende de autorização do tribunal de contas, que pode aprová-la em caráter geral.'
    ],
    resposta: 0,
    explicacao: {
      resumo: 'A Lei 14.133/2021 (art. 28) lista cinco modalidades e proíbe criar outras ou combiná-las. Convite e tomada de preços deixaram de existir.',
      detalhada: 'As modalidades do art. 28 são: **pregão, concorrência, concurso, leilão e diálogo competitivo**. O §2º do mesmo artigo veda a criação de outras modalidades ou a combinação das previstas. Convite e tomada de preços (da Lei 8.666/1993) não constam do novo regime.\n\nA escolha da modalidade depende do objeto (pregão: bens e serviços comuns; concorrência: bens e serviços especiais e obras e serviços comuns e especiais de engenharia, nos termos do art. 6º, XXXVIII; etc.), e não do valor, como ocorria na lógica antiga.',
      alternativas: [
        'Correta. Rol fechado, sem convite, e vedada a combinação.',
        'Errada. O convite não existe na Lei 14.133/2021.',
        'Errada. O rol não é exemplificativo e regulamento não pode criar modalidade.',
        'Errada. A tomada de preços também não existe mais.',
        'Errada. Não há autorização de tribunal de contas para criar modalidade; a lei veda.'
      ],
      dica: 'Na Lei 14.133, a modalidade segue o objeto, não o valor. Convite e tomada de preços pertencem ao passado.'
    },
    fontes: [{ titulo: 'Lei 14.133/2021, art. 28', url: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm' }]
  },
  {
    id: 'dad-202', materia: 'direito-administrativo', assunto: 'Atos administrativos', tipo: 'multipla', estilo: 'FGV',
    dificuldade: 3, objetivos: ['concursos-gerais', 'tribunais', 'oab'],
    enunciado: 'Um chefe de seção, sem delegação, concedeu a um servidor licença para tratar de interesses particulares, ato cuja concessão cabe à autoridade máxima do órgão, mas não em caráter exclusivo. Percebendo o erro, o dirigente do órgão quer preservar o ato, sem prejuízo a terceiros nem lesão ao interesse público. Assinale a afirmativa que expressa a solução juridicamente adequada.',
    alternativas: [
      'O ato é nulo e insanável, impondo-se a anulação, pois o vício de competência nunca admite aproveitamento.',
      'O ato deve ser revogado por razões de conveniência e oportunidade, pois o defeito de competência é causa de revogação.',
      'O vício de competência, por não se tratar de competência exclusiva, é sanável, podendo o ato ser convalidado pela autoridade competente, por meio de ratificação.',
      'A convalidação é vedada na Administração Pública, que só pode anular ou revogar seus atos, conforme a Súmula 473 do STF.',
      'A única alternativa é a conversão do ato em outro de competência do chefe de seção, com efeitos ex nunc.'
    ],
    resposta: 2,
    explicacao: {
      resumo: 'Vício de competência em ato que não é de competência exclusiva é sanável: a autoridade competente pode convalidá-lo por ratificação, desde que não haja lesão ao interesse público nem prejuízo a terceiros.',
      detalhada: 'A Lei 9.784/1999 (art. 55) admite a **convalidação** de atos com defeitos sanáveis, em decisão motivada, quando não acarretarem lesão ao interesse público nem prejuízo a terceiros. Na doutrina, são sanáveis o vício de **competência** (exceto a exclusiva) e o de **forma** (se não for essencial).\n\nSão insanáveis, em regra, os vícios de finalidade, de motivo e de objeto. **Revogação** é retirada por conveniência e oportunidade de ato válido, e **anulação** é por ilegalidade; nenhuma delas é a solução aqui.',
      alternativas: [
        'Errada. O vício de competência pode ser sanado, salvo competência exclusiva.',
        'Errada. Revogação pressupõe ato válido, e o vício é de legalidade.',
        'Correta. Convalidação por ratificação, nos termos do art. 55 da Lei 9.784/1999.',
        'Errada. A Lei 9.784/1999 admite expressamente a convalidação; a Súmula 473 não a proíbe.',
        'Errada. Conversão pressupõe ato nulo aproveitado com outro conteúdo, e o caso trata de ratificação pela autoridade competente.'
      ],
      dica: 'Competência e forma não essencial: convalidam. Finalidade, motivo e objeto: tendem a ser insanáveis. Competência exclusiva também não convalida.'
    },
    fontes: [{ titulo: 'Lei 9.784/1999, art. 55', url: 'https://www.planalto.gov.br/ccivil_03/leis/l9784.htm' }]
  },
  {
    id: 'dad-203', materia: 'direito-administrativo', assunto: 'Agentes públicos (Lei 8.112/1990)', tipo: 'multipla', estilo: 'FGV',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'Em 10 de março, a autoridade competente tomou conhecimento de que um servidor federal havia infringido dever funcional, infração punível com advertência. Nenhum processo foi instaurado. Em 20 de outubro do mesmo ano, a autoridade decidiu aplicar a penalidade de advertência. À luz da Lei 8.112/1990, assinale a afirmativa correta.',
    alternativas: [
      'A punição é válida, pois a ação disciplinar prescreve em cinco anos, para qualquer penalidade.',
      'A punição é válida, pois o prazo prescricional da advertência é de dois anos, contados da data do fato.',
      'A punição não pode ser aplicada, pois a pretensão punitiva já prescreveu: o prazo da advertência é de 180 dias, contados da data em que o fato se tornou conhecido.',
      'A punição não pode ser aplicada, pois o prazo da advertência é de 90 dias e se interrompe apenas com a notificação do servidor.',
      'A punição é válida, pois a advertência é imprescritível, por ser a menos grave das penalidades.'
    ],
    resposta: 2,
    explicacao: {
      resumo: 'A ação disciplinar prescreve em 180 dias para advertência (2 anos para suspensão e 5 anos para demissão, cassação e destituição). O prazo corre do conhecimento do fato; de 10 de março a 20 de outubro passaram mais de 180 dias.',
      detalhada: 'Art. 142 da Lei 8.112/1990: a ação disciplinar prescreve em **5 anos** (demissão, cassação de aposentadoria ou disponibilidade, destituição de cargo em comissão), **2 anos** (suspensão) e **180 dias** (advertência). O prazo começa a correr da data em que o fato se tornou conhecido (§1º), e a abertura de sindicância ou processo disciplinar o interrompe (§3º).\n\nComo não houve processo, a pretensão prescreveu: de 10 de março a 20 de outubro são mais de sete meses.',
      alternativas: [
        'Errada. Cinco anos valem apenas para as penalidades mais graves.',
        'Errada. Dois anos é o prazo da suspensão, e a contagem não parte da data do fato.',
        'Correta. 180 dias, contados do conhecimento do fato.',
        'Errada. O prazo da advertência não é de 90 dias, e a interrupção ocorre pela abertura do processo.',
        'Errada. Nenhuma penalidade disciplinar é imprescritível.'
      ],
      dica: 'Decore a escada 180 dias, 2 anos e 5 anos, e lembre que o termo inicial é o conhecimento do fato pela autoridade.'
    },
    fontes: [{ titulo: 'Lei 8.112/1990, art. 142', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8112cons.htm' }]
  },
  {
    id: 'dad-204', materia: 'direito-administrativo', assunto: 'Improbidade administrativa', tipo: 'multipla', estilo: 'FGV',
    dificuldade: 3, objetivos: ['concursos-gerais', 'tribunais', 'estatais'],
    enunciado: 'Um agente público deixou de adotar, por negligência e sem má-fé, as cautelas rotineiras de conferência de uma planilha, o que resultou em pagamento a maior a uma empresa. Não há prova de que ele quisesse favorecer o particular ou obter proveito. Com base na Lei 8.429/1992, com a redação da Lei 14.230/2021, assinale a afirmativa correta.',
    alternativas: [
      'Ele pratica ato de improbidade que causa prejuízo ao erário, na modalidade culposa, que a lei ainda prevê, com sanções atenuadas.',
      'A culpa grave equipara-se ao dolo e basta para configurar a improbidade, pois o prejuízo ao erário é objetivo.',
      'A improbidade independe do elemento subjetivo, bastando o nexo causal entre a conduta e o dano ao erário.',
      'Não há improbidade, pois a lei exige o dolo, entendido como a vontade livre e consciente de alcançar o resultado ilícito, não bastando a negligência; as demais esferas de responsabilização permanecem possíveis.',
      'Há improbidade por violação a princípios da Administração, que dispensa o dolo, por serem os princípios de observância obrigatória.'
    ],
    resposta: 3,
    explicacao: {
      resumo: 'Após a Lei 14.230/2021, só há improbidade dolosa. Negligência, imprudência ou imperícia não configuram o ato, sem prejuízo de outras responsabilidades (civil, administrativa).',
      detalhada: 'O art. 1º, §§1º a 3º, da Lei 8.429/1992 estabelece que os atos de improbidade são os **dolosos**. O dolo é a vontade livre e consciente de alcançar o resultado ilícito (§2º), e o mero exercício da função, sem comprovação de ato doloso com fim ilícito, afasta a improbidade (§3º). A **modalidade culposa foi extinta** (antes existia no art. 10).\n\nIsso não impede a responsabilização do agente por outras vias, como a ressarcitória e a disciplinar, nem afasta o dever de reparar o dano.',
      alternativas: [
        'Errada. A modalidade culposa foi suprimida pela Lei 14.230/2021.',
        'Errada. Culpa, ainda que grave, não se equipara ao dolo.',
        'Errada. Não há responsabilização objetiva em improbidade.',
        'Correta. Dolo é indispensável.',
        'Errada. Também nos atos contra princípios exige-se dolo, e o rol do art. 11 é taxativo.'
      ],
      dica: 'Lei 14.230/2021 = só dolo. Questão que fala em improbidade "culposa" ou "responsabilidade objetiva" quase sempre está errada.'
    },
    fontes: [{ titulo: 'Lei 8.429/1992, art. 1º', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8429.htm' }]
  },

  /* ---------- Direito Constitucional ---------- */
  {
    id: 'dco-201', materia: 'direito-constitucional', assunto: 'Direitos e garantias fundamentais', tipo: 'multipla', estilo: 'FGV',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais', 'policial', 'oab'],
    enunciado: 'Às 23h, policiais munidos de mandado judicial de busca e apreensão, expedido para cumprimento "a qualquer hora", dirigiram-se à casa de um investigado e tentaram entrar sem o seu consentimento. Não havia flagrante delito, desastre nem pedido de socorro. De acordo com a Constituição da República, assinale a afirmativa correta.',
    alternativas: [
      'A entrada era lícita, pois a ordem judicial autoriza o ingresso a qualquer hora do dia ou da noite.',
      'A entrada era lícita, pois o mandado, sendo fundamentado, supre a necessidade de consentimento em qualquer horário.',
      'A entrada era lícita, pois a inviolabilidade do domicílio cede diante de investigação criminal em curso.',
      'A entrada só poderia ocorrer à noite se houvesse ordem do Ministério Público, que dispensa o consentimento.',
      'A entrada era ilícita, pois, durante a noite, a casa só pode ser invadida sem consentimento em caso de flagrante delito, desastre ou para prestar socorro; a ordem judicial só vale durante o dia.'
    ],
    resposta: 4,
    explicacao: {
      resumo: 'Art. 5º, XI, da CF: a casa é asilo inviolável. Sem consentimento, só se entra em flagrante, desastre ou socorro (dia ou noite), ou por determinação judicial, apenas durante o dia.',
      detalhada: 'O inciso XI do art. 5º cria um regime de **quatro exceções** ao consentimento do morador. Três valem **a qualquer hora**: flagrante delito, desastre e prestação de socorro. A quarta, a **determinação judicial**, vale **somente durante o dia**.\n\nPor isso, o mandado, ainda que expedido "a qualquer hora", não autoriza ingresso noturno sem consentimento, em ausência das três hipóteses de exceção. O Ministério Público não tem poder de afastar a inviolabilidade, e a investigação em curso não é exceção constitucional.',
      alternativas: [
        'Errada. A ordem judicial só excepciona a inviolabilidade durante o dia.',
        'Errada. A fundamentação não supre a limitação temporal da Constituição.',
        'Errada. Investigação criminal não é exceção constitucional.',
        'Errada. Nem o Ministério Público nem a polícia podem afastar a inviolabilidade; só o juiz, de dia.',
        'Correta. Reproduz o art. 5º, XI.'
      ],
      dica: 'Ordem judicial = só de dia. Flagrante, desastre e socorro = dia e noite.'
    },
    fontes: [{ titulo: 'Constituição Federal, art. 5º, XI', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm' }]
  },
  {
    id: 'dco-202', materia: 'direito-constitucional', assunto: 'Remédios constitucionais', tipo: 'multipla', estilo: 'FGV',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais', 'oab'],
    enunciado: 'Um cidadão, eleitor, ajuizou ação popular contra ato do prefeito que considerava lesivo ao patrimônio público municipal. Ao final, o pedido foi julgado improcedente, sem que o juiz identificasse má-fé do autor. Com base na Constituição da República, assinale a afirmativa correta.',
    alternativas: [
      'O autor ficará isento de custas judiciais e do ônus da sucumbência, pois a Constituição ressalva apenas a hipótese de comprovada má-fé.',
      'O autor deverá arcar com as custas e os honorários de sucumbência, por se tratar de ação de natureza patrimonial.',
      'O autor ficará isento apenas das custas, devendo pagar os honorários de sucumbência à parte vencedora.',
      'A isenção só existiria se o autor fosse beneficiário da justiça gratuita, comprovada a hipossuficiência.',
      'O autor deverá pagar custas em dobro, por haver sido vencido em demanda que movimentou a máquina pública.'
    ],
    resposta: 0,
    explicacao: {
      resumo: 'O art. 5º, LXXIII, da CF isenta o autor popular de custas e do ônus da sucumbência, salvo comprovada má-fé.',
      detalhada: 'A ação popular pode ser proposta por **qualquer cidadão** (eleitor) para anular ato lesivo ao patrimônio público, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural. A Constituição concede ao autor isenção das **custas judiciais e do ônus da sucumbência** (que inclui honorários), **salvo comprovada má-fé**. Na Lei 4.717/1965, a lide julgada manifestamente temerária sujeita o autor ao décuplo das custas (art. 13).\n\nNa ausência de má-fé, ainda que vencido, nada paga.',
      alternativas: [
        'Correta. Isenção constitucional, ressalvada a má-fé.',
        'Errada. A natureza patrimonial não afasta a isenção.',
        'Errada. A isenção abrange o ônus da sucumbência.',
        'Errada. A isenção é direta da Constituição, sem exigência de hipossuficiência.',
        'Errada. Custas em dobro não existem; o agravamento ocorre só com má-fé.'
      ],
      dica: 'Ação popular: cidadão sem custas e sem sucumbência, salvo má-fé comprovada.'
    },
    fontes: [{ titulo: 'Constituição Federal, art. 5º, LXXIII', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm' }]
  },
  {
    id: 'dco-203', materia: 'direito-constitucional', assunto: 'Organização do Estado', tipo: 'multipla', estilo: 'FGV',
    dificuldade: 3, objetivos: ['concursos-gerais', 'tribunais', 'oab'],
    enunciado: 'Um Estado-membro editou lei de proteção do meio ambiente, matéria de competência legislativa concorrente, quando ainda não existia lei federal de normas gerais sobre o tema. Meses depois, a União editou lei com normas gerais que contrariam parte da lei estadual. Assinale a afirmativa correta.',
    alternativas: [
      'A lei estadual era inconstitucional desde a origem, pois só a União pode legislar sobre meio ambiente.',
      'A lei estadual era válida, no exercício de competência plena, e a lei federal superveniente suspende sua eficácia no que lhe for contrário.',
      'A lei estadual era válida e, com a lei federal, passou a ser inteiramente revogada, por hierarquia.',
      'A lei estadual continua integralmente eficaz, pois a União só pode editar normas gerais antes da legislação estadual.',
      'A lei estadual era válida somente porque uma lei complementar federal a autorizou, nos termos do art. 22, parágrafo único.'
    ],
    resposta: 1,
    explicacao: {
      resumo: 'Na competência concorrente, sem lei federal de normas gerais, o Estado exerce competência plena. A lei federal superveniente suspende a eficácia da estadual no que lhe for contrário (art. 24, §§3º e 4º).',
      detalhada: 'No art. 24, a União edita **normas gerais** (§1º), e os Estados suplementam (§2º). Se não houver lei federal, os Estados exercem a competência plena para atender suas peculiaridades (§3º). Sobrevindo lei federal, **a eficácia** da lei estadual fica **suspensa** no que lhe for contrário (§4º): não é revogação nem nulidade.\n\nA suspensão é de eficácia, e a norma estadual pode voltar a produzir efeitos se a federal for revogada.',
      alternativas: [
        'Errada. Meio ambiente é matéria concorrente (art. 24, VI).',
        'Correta. Competência plena e suspensão de eficácia pela lei federal superveniente.',
        'Errada. A lei estadual não é "revogada" nem inteiramente afastada: só sua eficácia é suspensa, e apenas no que for contrário.',
        'Errada. A lei federal superveniente prevalece naquilo que for contrário.',
        'Errada. A autorização por lei complementar é do art. 22, parágrafo único (competência privativa), e não da concorrente.'
      ],
      dica: 'Norma geral federal superveniente suspende, não revoga, a norma estadual contrária.'
    },
    fontes: [{ titulo: 'Constituição Federal, art. 24', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm' }]
  },
  {
    id: 'dco-204', materia: 'direito-constitucional', assunto: 'Poder Legislativo', tipo: 'multipla', estilo: 'FGV',
    dificuldade: 3, objetivos: ['concursos-gerais', 'tribunais', 'oab'],
    enunciado: 'Uma Comissão Parlamentar de Inquérito, regularmente constituída para apurar fato determinado, aprovou requerimentos para determinar (i) a quebra do sigilo bancário de um investigado, (ii) a interceptação de suas comunicações telefônicas e (iii) a busca e apreensão em sua residência. Com base na Constituição e na jurisprudência do STF, assinale a afirmativa correta.',
    alternativas: [
      'A CPI pode determinar as três medidas, pois possui poderes de investigação próprios das autoridades judiciais.',
      'A CPI não pode determinar nenhuma das três, pois todas se submetem à cláusula de reserva de jurisdição.',
      'A CPI pode determinar a interceptação telefônica e a quebra do sigilo bancário, mas não a busca domiciliar.',
      'A CPI pode determinar a quebra do sigilo bancário, mediante decisão fundamentada, mas não a interceptação telefônica nem a busca domiciliar, sujeitas à reserva de jurisdição.',
      'A CPI pode determinar a busca domiciliar durante o dia, mas não as outras duas medidas.'
    ],
    resposta: 3,
    explicacao: {
      resumo: 'A CPI tem poderes de investigação próprios das autoridades judiciais (art. 58, §3º), mas não os que a Constituição reserva ao juiz: interceptação telefônica e busca domiciliar. Pode quebrar sigilos bancário, fiscal e de dados telefônicos, com fundamentação.',
      detalhada: 'A CPI pode, por decisão **fundamentada** e com base em fato determinado, quebrar os sigilos **bancário, fiscal e de dados telefônicos** (registros de ligações). Mas o STF entende que ela **não** pode decretar:\n\n- **interceptação telefônica** (art. 5º, XII: ordem judicial, "nas hipóteses e na forma que a lei estabelecer");\n- **busca e apreensão domiciliar** (art. 5º, XI: determinação judicial);\n- prisão, salvo em flagrante.\n\nEssas matérias estão sob **cláusula de reserva de jurisdição**.',
      alternativas: [
        'Errada. Os poderes são "próprios" das autoridades judiciais, mas não incluem os de reserva de jurisdição.',
        'Errada. O sigilo bancário pode ser quebrado pela CPI.',
        'Errada. A interceptação telefônica depende de decisão judicial.',
        'Correta.',
        'Errada. A CPI não pode determinar busca domiciliar: é matéria de reserva de jurisdição, ainda que de dia (art. 5º, XI).'
      ],
      dica: 'CPI quebra sigilo (bancário, fiscal e telefônico), mas não intercepta, não faz busca em casa e não prende (exceto em flagrante).'
    },
    fontes: [{ titulo: 'Constituição Federal, art. 58, §3º', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm' }]
  },

  /* ---------- Raciocínio Lógico ---------- */
  {
    id: 'rlm-201', materia: 'raciocinio-logico', assunto: 'Equivalências e negações', tipo: 'multipla', estilo: 'FGV',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais', 'policial', 'estatais'],
    enunciado: 'A chefia declarou: "Se Ana for aprovada no concurso, então Bruno será nomeado." Considere que essa declaração seja verdadeira. Assinale a opção que apresenta uma afirmação logicamente equivalente a ela.',
    alternativas: [
      'Se Bruno for nomeado, então Ana foi aprovada no concurso.',
      'Se Ana não for aprovada no concurso, então Bruno não será nomeado.',
      'Ana é aprovada no concurso e Bruno não é nomeado.',
      'Ana é aprovada no concurso ou Bruno não é nomeado.',
      'Ana não é aprovada no concurso ou Bruno é nomeado.'
    ],
    resposta: 4,
    explicacao: {
      resumo: 'p → q equivale a ~p ∨ q (e também a ~q → ~p). A opção E é a forma disjuntiva.',
      detalhada: 'A condicional "se p, então q" só é falsa quando p é verdadeira e q é falsa. Disso decorrem duas equivalências: **~q → ~p** (contrapositiva) e **~p ∨ q**.\n\n- A) é a **recíproca** (q → p): não equivale.\n- B) é a **inversa** (~p → ~q): não equivale.\n- C) é a **negação** de p → q (p ∧ ~q).\n- D) é p ∨ ~q, equivalente a q → p (recíproca), não à original.\n- E) é ~p ∨ q: equivalente.',
      alternativas: [
        'Errada. Recíproca.',
        'Errada. Inversa.',
        'Errada. Negação da condicional.',
        'Errada. Equivale à recíproca.',
        'Correta. ~p ∨ q.'
      ],
      dica: 'Macete do "Ou": nega a primeira OU mantém a segunda (p → q = ~p ∨ q). A contrapositiva (~q → ~p) também é equivalente.'
    },
    fontes: [{ titulo: 'Khan Academy', url: 'https://pt.khanacademy.org/' }]
  },
  {
    id: 'rlm-202', materia: 'raciocinio-logico', assunto: 'Proposições e conectivos', tipo: 'multipla', estilo: 'FGV',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais', 'policial', 'estatais'],
    enunciado: 'Um auditor afirmou: "Todos os processos do lote estão digitalizados e assinados." Depois de uma conferência, descobriu-se que a afirmação era falsa. Assinale a opção que apresenta uma conclusão necessariamente verdadeira a respeito do lote.',
    alternativas: [
      'Nenhum processo do lote está digitalizado e assinado.',
      'Todos os processos do lote não estão digitalizados nem assinados.',
      'Pelo menos um processo do lote está digitalizado, mas não assinado.',
      'Todos os processos do lote estão digitalizados, mas nenhum está assinado.',
      'Pelo menos um processo do lote não está digitalizado ou não está assinado.'
    ],
    resposta: 4,
    explicacao: {
      resumo: 'A negação de "todo A é B e C" é "algum A não é B ou não é C".',
      detalhada: 'Se é falso que "todos os processos estão digitalizados e assinados", então existe **ao menos um** processo que **não** satisfaz a conjunção, isto é, **não está digitalizado ou não está assinado** (ou nenhum dos dois). A negação de "todo" é "algum... não", e a negação de "e" (De Morgan) é "ou... não".\n\nAs demais opções são mais fortes do que a negação e não decorrem dela necessariamente.',
      alternativas: [
        'Errada. É mais forte; pode haver processos em ordem.',
        'Errada. Exagera a negação.',
        'Errada. Define um caso específico; o processo poderia não estar digitalizado.',
        'Errada. Afirma duas coisas que não são consequência.',
        'Correta.'
      ],
      dica: 'Negar "todo ... e" vira "algum ... não ... ou não ...". Troque o quantificador e aplique De Morgan.'
    },
    fontes: [{ titulo: 'Khan Academy', url: 'https://pt.khanacademy.org/' }]
  },
  {
    id: 'rlm-203', materia: 'raciocinio-logico', assunto: 'Argumentação', tipo: 'multipla', estilo: 'FGV',
    dificuldade: 3, objetivos: ['concursos-gerais', 'tribunais', 'policial', 'estatais'],
    enunciado: 'Considere as premissas: (I) "Nenhum técnico é estagiário." (II) "Alguns estagiários são bolsistas." Assinale a opção que apresenta uma conclusão que decorre logicamente das premissas.',
    alternativas: [
      'Alguns bolsistas não são técnicos.',
      'Todo bolsista é estagiário.',
      'Nenhum bolsista é técnico.',
      'Alguns técnicos são bolsistas.',
      'Alguns técnicos não são bolsistas.'
    ],
    resposta: 0,
    explicacao: {
      resumo: 'Os estagiários que são bolsistas não são técnicos (premissa I), logo existem bolsistas que não são técnicos.',
      detalhada: 'Por (II), há pelo menos um indivíduo que é estagiário e bolsista. Por (I), esse indivíduo, sendo estagiário, **não é técnico**. Ele é bolsista e não é técnico: logo, **alguns bolsistas não são técnicos**.\n\nAs demais conclusões extrapolam as premissas: nada diz que todo bolsista é estagiário (B), nem que **nenhum** bolsista é técnico (C), pois pode haver bolsista técnico que não seja estagiário. (D) e (E) falam de técnicos, sobre os quais as premissas nada garantem (nem mesmo que existam).',
      alternativas: [
        'Correta.',
        'Errada. Pode haver bolsistas que não sejam estagiários.',
        'Errada. Só se sabe de bolsistas que são estagiários; outros podem ser técnicos.',
        'Errada. Não se pode afirmar nada sobre técnicos que sejam bolsistas.',
        'Errada. As premissas nem garantem a existência de técnicos.'
      ],
      dica: 'Silogismo com "nenhum" e "alguns": parta do indivíduo garantido pela premissa particular e veja o que a universal diz dele.'
    },
    fontes: [{ titulo: 'Khan Academy', url: 'https://pt.khanacademy.org/' }]
  },
  {
    id: 'rlm-204', materia: 'raciocinio-logico', assunto: 'Análise combinatória', tipo: 'multipla', estilo: 'FGV',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais', 'estatais'],
    enunciado: 'Um órgão dispõe de 7 analistas e 5 técnicos. Será formada uma comissão de 4 pessoas, sem cargos distintos entre os membros, que deve ter pelo menos 1 técnico. O número de comissões distintas que podem ser formadas é',
    alternativas: ['350.', '420.', '460.', '490.', '495.'],
    resposta: 2,
    explicacao: {
      resumo: 'Total de comissões C(12,4) = 495; sem técnicos, C(7,4) = 35. Com pelo menos um técnico: 495 - 35 = 460.',
      detalhada: 'Método do **complementar**.\n\n- Total, sem restrição: C(12,4) = 12·11·10·9 / 24 = **495**.\n- Sem nenhum técnico (só analistas): C(7,4) = **35**.\n- Pelo menos um técnico: 495 - 35 = **460**.\n\nConferindo por casos: 1 técnico C(5,1)·C(7,3) = 175; 2 técnicos C(5,2)·C(7,2) = 210; 3 técnicos C(5,3)·C(7,1) = 70; 4 técnicos C(5,4) = 5. Soma: 175 + 210 + 70 + 5 = 460.',
      alternativas: [
        'Errada. É a comissão com 3 analistas e 2 técnicos, C(7,3)·C(5,2) = 350.',
        'Errada. É 2 x C(5,2)·C(7,2) = 2 x 210: conta em dobro a comissão com 2 técnicos e 2 analistas.',
        'Correta. 495 - 35.',
        'Errada. Subtrai 5 em vez de 35.',
        'Errada. É o total, sem a restrição.'
      ],
      dica: 'Quando o enunciado diz "pelo menos um", pense no complementar: total menos o caso em que nenhum aparece.'
    },
    fontes: [{ titulo: 'Combinação (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Combina%C3%A7%C3%A3o_(matem%C3%A1tica)' }]
  },

  /* ---------- Informática ---------- */
  {
    id: 'inf-201', materia: 'informatica', assunto: 'Segurança da informação', tipo: 'multipla', estilo: 'FGV',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais', 'policial', 'estatais'],
    enunciado: 'Numa manhã, os servidores de um órgão perceberam que os arquivos da rede passaram a ter extensão desconhecida e não abriam mais. Uma mensagem na tela informava que os dados haviam sido criptografados e exigia pagamento em criptomoeda para a liberação. Assinale a opção que identifica o tipo de ataque e a medida preventiva mais eficaz para reduzir o dano de um incidente como esse.',
    alternativas: [
      'Phishing; instalação de um antivírus que bloqueie as mensagens de e-mail suspeitas.',
      'Ransomware; manutenção de cópias de segurança desconectadas da rede (offline), com testes periódicos de restauração.',
      'Spyware; uso de firewall que impeça a saída de informações da rede interna.',
      'Ransomware; pagamento do resgate, que é a forma mais eficaz de recuperar os dados.',
      'Negação de serviço (DoS); aquisição de links de internet mais rápidos.'
    ],
    resposta: 1,
    explicacao: {
      resumo: 'Sequestro de dados mediante criptografia e exigência de resgate é ransomware. A medida mais eficaz de mitigação são backups isolados e testados.',
      detalhada: 'O **ransomware** cifra arquivos e cobra resgate. Prevenir 100% é difícil, mas é possível **reduzir o dano** com backup **desconectado da rede** (offline ou imutável), seguindo a regra **3-2-1** (3 cópias, 2 mídias, 1 fora do local), com **testes de restauração**. Outras medidas complementares: atualizações, segmentação de rede, privilégio mínimo e treinamento.\n\nPagar o resgate **não** garante a recuperação e financia o crime.',
      alternativas: [
        'Errada. Phishing é a isca; o ataque descrito é ransomware.',
        'Correta.',
        'Errada. Spyware espiona; não criptografa para resgate.',
        'Errada. O ataque está correto, mas pagar o resgate não é medida preventiva e não garante recuperação.',
        'Errada. DoS indisponibiliza serviços por excesso de requisições, sem criptografar dados.'
      ],
      dica: 'Ransomware: o remédio é o backup. A banca costuma oferecer "pagar o resgate" como alternativa errada.'
    },
    fontes: [{ titulo: 'Cartilha de Segurança para Internet (CERT.br)', url: 'https://cartilha.cert.br/' }]
  },
  {
    id: 'inf-202', materia: 'informatica', assunto: 'Planilhas (Excel e Calc)', tipo: 'multipla', estilo: 'FGV',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais', 'estatais'],
    enunciado: 'Em uma planilha, as células A1 a A5 contêm, respectivamente, os valores 5, 12, 20, 8 e 15, e as células B1 a B5 contêm 1, 2, 3, 4 e 5. Na célula C1 foi digitada a fórmula =SOMASE(A1:A5;">10";B1:B5). O resultado exibido em C1 é',
    alternativas: ['3.', '10.', '15.', '47.', '#VALOR!'],
    resposta: 1,
    explicacao: {
      resumo: 'SOMASE soma os valores de B correspondentes às células de A maiores que 10 (A2, A3 e A5): 2 + 3 + 5 = 10.',
      detalhada: 'A sintaxe é **=SOMASE(intervalo_critério; critério; intervalo_soma)**. As linhas em que A é maior que 10 são 2 (12), 3 (20) e 5 (15). Somam-se os valores correspondentes em B: 2 + 3 + 5 = **10**.\n\nOs distratores: 3 seria o resultado de CONT.SE(A1:A5;">10"); 15 é a soma de B1:B5; 47 é a soma dos valores de A maiores que 10 (12 + 20 + 15).',
      alternativas: [
        'Errada. É a contagem de células que atendem ao critério (CONT.SE).',
        'Correta.',
        'Errada. É a soma de todo o intervalo B.',
        'Errada. É a soma dos próprios valores de A que atendem ao critério.',
        'Errada. Os intervalos têm o mesmo tamanho; não há erro.'
      ],
      dica: 'No SOMASE com três argumentos, o critério olha o primeiro intervalo, mas a soma é feita no terceiro.'
    },
    fontes: [{ titulo: 'Função SOMASE (Microsoft)', url: 'https://support.microsoft.com/pt-br/office/função-somase-169b8c99-c05c-4483-a712-1697a653039b' }]
  },
  {
    id: 'inf-203', materia: 'informatica', assunto: 'Redes e internet', tipo: 'multipla', estilo: 'FGV',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais', 'policial', 'estatais'],
    enunciado: 'Uma servidora acessa o e-mail institucional pelo computador do trabalho, pelo celular e pelo notebook, e deseja que leituras e pastas permaneçam consistentes em todos os aparelhos. Sobre os protocolos de correio eletrônico, assinale a afirmativa correta.',
    alternativas: [
      'O SMTP é o protocolo indicado, pois permite recuperar e sincronizar as mensagens do servidor.',
      'O POP3, em sua configuração padrão, mantém as mensagens no servidor e as sincroniza entre os dispositivos.',
      'O HTTP é usado apenas para o envio de mensagens, sendo incapaz de transportar a leitura de e-mails pela web.',
      'O DNS é responsável por armazenar as mensagens e controlar o estado de leitura de cada uma.',
      'O IMAP mantém as mensagens no servidor e permite acesso e sincronização a partir de vários dispositivos.'
    ],
    resposta: 4,
    explicacao: {
      resumo: 'IMAP mantém as mensagens e o estado (lida, pastas) no servidor e permite acesso por vários dispositivos. O SMTP envia; o POP3, em geral, baixa e remove do servidor.',
      detalhada: '- **SMTP**: **envio** e transferência entre servidores.\n- **POP3**: **recebimento**, em geral baixando as mensagens ao dispositivo (comportamento padrão: remover do servidor), o que dificulta o uso em vários aparelhos.\n- **IMAP**: acesso às mensagens **no servidor**, com pastas e marcações sincronizadas entre dispositivos.\n\nAlém disso, o webmail usa HTTP/HTTPS, e o DNS apenas **traduz nomes em endereços IP**.',
      alternativas: [
        'Errada. O SMTP serve para envio.',
        'Errada. É o IMAP que sincroniza; o POP3, por padrão, baixa as mensagens.',
        'Errada. O webmail transporta mensagens por HTTP/HTTPS.',
        'Errada. O DNS resolve nomes de domínio, não guarda e-mails.',
        'Correta.'
      ],
      dica: 'SMTP envia; POP3 baixa; IMAP sincroniza.'
    },
    fontes: [{ titulo: 'RFC 9051 - IMAP4rev2', url: 'https://www.rfc-editor.org/rfc/rfc9051' }]
  },

  /* ---------- Matemática ---------- */
  {
    id: 'mat-201', materia: 'matematica', assunto: 'Porcentagem', tipo: 'multipla', estilo: 'FGV',
    dificuldade: 1, objetivos: ['concursos-gerais', 'estatais', 'policial'],
    enunciado: 'Um produto custava R$ 250,00. A loja aumentou o preço em 20% e, na semana seguinte, anunciou um desconto de 20% sobre o novo preço. Em relação ao preço original, o preço final é',
    alternativas: [
      'igual ao preço original.',
      '10 reais maior que o preço original.',
      '10 reais menor que o preço original, o que equivale a uma redução de 4%.',
      '20 reais menor que o preço original, o que equivale a uma redução de 8%.',
      '4 reais menor que o preço original.'
    ],
    resposta: 2,
    explicacao: {
      resumo: 'Após o aumento, 250 x 1,20 = 300. Com 20% de desconto, 300 x 0,80 = 240: 10 reais abaixo (4% a menos).',
      detalhada: 'Aumentos e descontos percentuais sucessivos **não se anulam**, pois incidem sobre bases diferentes. O fator é 1,20 x 0,80 = **0,96**, ou seja, queda de 4%.\n\nEm reais: 250 x 1,20 = 300; 300 x 0,80 = **240**. A diferença é 250 - 240 = **10 reais**, que equivalem a 10/250 = 4%.',
      alternativas: [
        'Errada. Os 20% incidem sobre bases diferentes.',
        'Errada. O preço final é menor.',
        'Correta.',
        'Errada. Soma erradamente os percentuais.',
        'Errada. Confunde 4% com 4 reais.'
      ],
      dica: 'Aumento e desconto de mesmo percentual nunca voltam ao preço original: use fatores (1,20 x 0,80 = 0,96).'
    },
    fontes: [{ titulo: 'Khan Academy: porcentagem', url: 'https://pt.khanacademy.org/' }]
  },
  {
    id: 'mat-202', materia: 'matematica', assunto: 'Razão e proporção', tipo: 'multipla', estilo: 'FGV',
    dificuldade: 2, objetivos: ['concursos-gerais', 'estatais', 'policial'],
    enunciado: 'Três sócios investiram em uma empresa valores diretamente proporcionais a 2, 3 e 4. Ao fim do ano, o lucro de R$ 27.000,00 foi distribuído na mesma proporção dos investimentos. A diferença entre a maior e a menor parte recebida é de',
    alternativas: [
      'R$ 6.000,00.',
      'R$ 3.000,00.',
      'R$ 9.000,00.',
      'R$ 12.000,00.',
      'R$ 4.500,00.'
    ],
    resposta: 0,
    explicacao: {
      resumo: 'A soma das razões é 9, e cada parte vale 27.000/9 = 3.000. Partes: 6.000, 9.000 e 12.000. Diferença: 12.000 - 6.000 = 6.000.',
      detalhada: 'Divisão diretamente proporcional: some as razões (2 + 3 + 4 = 9). Cada unidade vale 27.000 / 9 = **R$ 3.000**. Os sócios recebem 2 x 3.000 = **6.000**, 3 x 3.000 = **9.000** e 4 x 3.000 = **12.000**.\n\nA diferença entre a maior e a menor parte é 12.000 - 6.000 = **R$ 6.000**, o equivalente a 2 unidades (4 - 2).',
      alternativas: [
        'Correta.',
        'Errada. É o valor de uma unidade proporcional.',
        'Errada. É a parte do sócio intermediário.',
        'Errada. É a maior parte, não a diferença.',
        'Errada. Não decorre dos cálculos.'
      ],
      dica: 'Leia o que o enunciado pede: a questão pede a diferença, não a maior parte.'
    },
    fontes: [{ titulo: 'Khan Academy: razão e proporção', url: 'https://pt.khanacademy.org/' }]
  },

  /* ---------- Direito Penal ---------- */
  {
    id: 'dpe-201', materia: 'direito-penal', assunto: 'Excludentes de ilicitude', tipo: 'multipla', estilo: 'FGV',
    dificuldade: 3, objetivos: ['concursos-gerais', 'policial', 'tribunais', 'oab'],
    enunciado: 'Antônio foi atacado a socos por Bruno e, para se defender, reagiu e o derrubou. Bruno, já caído, rendido e sem condições de continuar a agressão, pediu que Antônio parasse. Mesmo assim, Antônio, tomado de raiva, desferiu diversos chutes na cabeça de Bruno, com intenção de matá-lo, e este veio a falecer em decorrência deles. Assinale a afirmativa correta.',
    alternativas: [
      'Antônio agiu em legítima defesa até o fim, pois a agressão de Bruno foi injusta.',
      'Antônio responde por excesso doloso, pois, cessada a agressão, a continuação dos golpes não é abrangida pela legítima defesa, respondendo pelo resultado a título de dolo.',
      'Antônio responde apenas por homicídio culposo, pois o excesso, em qualquer caso, é punido como culpa.',
      'Antônio não responde por crime algum, pois o excesso na legítima defesa é causa de exclusão de culpabilidade por emoção.',
      'Antônio responde por lesão corporal leve, pois o resultado morte foi apenas preterdoloso.'
    ],
    resposta: 1,
    explicacao: {
      resumo: 'A legítima defesa exige agressão atual ou iminente. Cessada a agressão, os golpes seguintes configuram excesso doloso, punível a título de dolo (art. 23, parágrafo único, do Código Penal).',
      detalhada: 'A **legítima defesa** (art. 25) exige agressão injusta **atual ou iminente** e uso moderado dos meios necessários. Quando a agressão cessa e o agente continua a reagir, há **excesso**, punível conforme o art. 23, parágrafo único: responde o agente pelo excesso **doloso** ou **culposo**.\n\nAqui, Antônio sabia que a agressão havia cessado (Bruno estava rendido e pedia que parasse) e continuou com intenção de matar: **excesso doloso (extensivo)**, com responsabilização pelo resultado a título de dolo. A emoção não exclui a imputabilidade penal (art. 28, I).',
      alternativas: [
        'Errada. A legítima defesa exige agressão atual ou iminente, que havia cessado.',
        'Correta.',
        'Errada. O excesso é punido como culposo apenas quando for culposo; aqui foi doloso.',
        'Errada. A emoção e a paixão não excluem a imputabilidade (art. 28, I).',
        'Errada. Não se trata de crime preterdoloso, pois o agente agiu com intenção de matar, mesmo ciente da cessação da agressão; o resultado morte foi querido.'
      ],
      dica: 'Agressão terminou e o agente continua: excesso. Se sabia, excesso doloso; se errou na avaliação, excesso culposo.'
    },
    fontes: [{ titulo: 'Código Penal, arts. 23 a 25', url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm' }]
  },
  {
    id: 'dpe-202', materia: 'direito-penal', assunto: 'Crimes contra a Administração Pública', tipo: 'multipla', estilo: 'FGV',
    dificuldade: 2, objetivos: ['concursos-gerais', 'policial', 'tribunais', 'oab'],
    enunciado: 'Um fiscal sanitário, ao inspecionar um restaurante, solicitou ao proprietário o valor de R$ 5.000,00 para não lavrar o auto de infração por irregularidades que constatara. O proprietário recusou, não entregou valor algum e denunciou o fato à corregedoria. Assinale a afirmativa correta quanto à conduta do fiscal.',
    alternativas: [
      'O crime não se consumou, pois depende do efetivo recebimento da vantagem indevida; configura-se somente tentativa.',
      'Há concussão consumada, pois o fiscal exigiu a vantagem em razão da função.',
      'Há corrupção ativa, pois o fiscal tomou a iniciativa de oferecer a negociação.',
      'Há corrupção passiva consumada, pois o crime é formal e se consuma com a simples solicitação da vantagem indevida, independentemente do recebimento.',
      'Há prevaricação, pois o fiscal retardou ato de ofício para satisfazer interesse pessoal.'
    ],
    resposta: 3,
    explicacao: {
      resumo: 'A corrupção passiva (CP, art. 317) pune quem solicita, recebe ou aceita promessa de vantagem indevida. É crime formal: consuma-se com a solicitação.',
      detalhada: 'O art. 317 do Código Penal tem três núcleos: **solicitar**, **receber** ou **aceitar promessa**. O crime é **formal**: consuma-se no momento em que o funcionário solicita (o recebimento é mero exaurimento). Se ele pratica, omite ou retarda ato de ofício em razão da vantagem, aplica-se o aumento do §1º.\n\nA **concussão** (art. 316) tem como núcleo **exigir** (com ameaça, ainda que velada), e não solicitar. A **corrupção ativa** (art. 333) é do particular. A **prevaricação** (art. 319) não tem vantagem como motivo da ação, mas interesse ou sentimento pessoal.',
      alternativas: [
        'Errada. O crime é formal e se consuma com a solicitação.',
        'Errada. O núcleo foi "solicitar", típico de corrupção passiva; concussão exige "exigir".',
        'Errada. Corrupção ativa é praticada por particular, que oferece ou promete vantagem.',
        'Correta.',
        'Errada. Não há retardamento de ato de ofício descrito, e o móvel é a vantagem patrimonial.'
      ],
      dica: 'Solicitar, receber ou aceitar: corrupção passiva. Exigir: concussão. Oferecer ou prometer: corrupção ativa.'
    },
    fontes: [{ titulo: 'Código Penal, arts. 316, 317 e 333', url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm' }]
  }

] });
