/* Questões inéditas no estilo CEBRASPE, escritas para o app. */
(function () {
  'use strict';

  var CF = { titulo: 'Constituição Federal de 1988', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm' };
  var CP = { titulo: 'Código Penal', url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm' };
  var CERT = { titulo: 'Cartilha de Segurança para Internet (CERT.br)', url: 'https://cartilha.cert.br/' };
  var ABL = { titulo: 'Academia Brasileira de Letras', url: 'https://www.academia.org.br/' };
  var OBMEP = { titulo: 'OBMEP: material de estudo', url: 'https://www.obmep.org.br/' };
  var TEXTO = 'Texto próprio, escrito para o app.\n\n'
    + 'A leitura em voz alta, que já foi hábito comum nas casas brasileiras, perdeu espaço para as telas. '
    + 'Ainda assim, muitas famílias a mantêm como ritual noturno: o adulto lê, a criança escuta e, entre uma página e outra, '
    + 'ambos conversam sobre o que acontece na história. Esse diálogo, mais que o enredo, é o que se costuma lembrar na vida adulta.';
  var GERAIS = ['concursos-gerais', 'tribunais'];

  function q(o) {
    o.estilo = 'CEBRASPE';
    o.tipo = 'certo-errado';
    return o;
  }

  Banco.registrar({ questoes: [

    /* ---------- Português ---------- */
    q({
      id: 'por-101', materia: 'portugues', assunto: 'Interpretação de texto', dificuldade: 2,
      objetivos: GERAIS.concat(['policial']),
      textoBase: TEXTO,
      enunciado: 'Infere-se do texto que, na lembrança dos adultos que ouviram histórias na infância, a conversa entre leitor e ouvinte costuma ser mais marcante que o enredo lido.',
      resposta: true,
      explicacao: {
        resumo: 'Correto: o último período afirma que o diálogo, "mais que o enredo", é o que se costuma lembrar.',
        detalhada: 'O item pede uma **inferência** simples, que o próprio texto sustenta. Em "Esse diálogo, mais que o enredo, é o que se costuma lembrar na vida adulta", o autor compara o diálogo ao enredo e coloca o diálogo em primeiro lugar na memória.\n\nNão há extrapolação: o item não diz que o enredo é esquecido, apenas que a conversa é mais marcante, exatamente como o texto.',
        dica: 'No CEBRASPE, confira se o item não acrescenta palavras absolutas ("sempre", "nunca", "somente"). Aqui não acrescenta, então o item é fiel ao texto.'
      },
      fontes: [ABL]
    }),
    q({
      id: 'por-102', materia: 'portugues', assunto: 'Coesão e coerência', dificuldade: 2,
      objetivos: GERAIS,
      textoBase: TEXTO,
      enunciado: 'No trecho "muitas famílias a mantêm como ritual noturno", o pronome "a" retoma o termo "as telas".',
      resposta: false,
      explicacao: {
        resumo: 'Errado: o pronome "a" retoma "leitura em voz alta", que é o que as famílias mantêm.',
        detalhada: 'O pronome oblíquo "a" é objeto direto de "mantêm" e funciona como **anáfora**: recupera algo já dito. O que as famílias mantêm como ritual noturno é a **leitura em voz alta**, e não as telas, que, segundo o texto, ocuparam o espaço dela.\n\nTrocar o referente muda o sentido: manter "as telas" como ritual contradiria o contraste que o período constrói com "Ainda assim".',
        dica: 'Em questão de referenciação, substitua o pronome pelo termo sugerido e releia: se o sentido do período quebrar, o item é errado.'
      },
      fontes: [ABL]
    }),
    q({
      id: 'por-103', materia: 'portugues', assunto: 'Pontuação', dificuldade: 3,
      objetivos: GERAIS,
      textoBase: TEXTO,
      enunciado: 'As vírgulas que isolam "que já foi hábito comum nas casas brasileiras" indicam tratar-se de oração explicativa; a retirada delas não geraria desvio gramatical, mas alteraria o sentido do trecho.',
      resposta: true,
      explicacao: {
        resumo: 'Correto: sem as vírgulas a oração passaria a restritiva, o que muda o sentido sem violar a gramática.',
        detalhada: 'Com vírgulas, a oração adjetiva é **explicativa**: acrescenta uma informação sobre toda a "leitura em voz alta". Sem vírgulas, seria **restritiva**, e o trecho sugeriria que existe um tipo de leitura em voz alta que foi hábito comum e outro que não foi.\n\nPor isso a pontuação aqui tem valor semântico, e não apenas estilístico. A frase continua correta nos dois casos; o que muda é o significado.',
        dica: 'A banca gosta de perguntar se a retirada da vírgula "altera o sentido" ou "gera erro". Veja qual dos dois ocorre: no caso das adjetivas, quase sempre é o sentido.'
      },
      fontes: [ABL]
    }),
    q({
      id: 'por-104', materia: 'portugues', assunto: 'Concordância verbal e nominal', dificuldade: 2,
      objetivos: GERAIS,
      textoBase: TEXTO,
      enunciado: 'A reescrita "As leituras em voz alta, que já foram hábito comum nas casas brasileiras, perdeu espaço para as telas" mantém a correção gramatical do texto.',
      resposta: false,
      explicacao: {
        resumo: 'Errado: com o sujeito no plural ("As leituras"), o verbo deveria ir ao plural: "perderam".',
        detalhada: 'O núcleo do sujeito passou a "leituras", plural. O verbo "perdeu", que ficou no singular, não concorda com ele. O correto seria "perderam espaço para as telas".\n\nA armadilha é a longa oração intercalada ("que já foram hábito comum nas casas brasileiras"), que afasta o verbo do sujeito e induz o leitor a aceitar o singular. Ao reescrever, ache primeiro o núcleo do sujeito e ignore o que vem entre vírgulas.',
        dica: 'Sujeito distante do verbo por uma intercalação: risque a intercalação e releia.'
      },
      fontes: [ABL]
    }),

    /* ---------- Direito Constitucional ---------- */
    q({
      id: 'dco-101', materia: 'direito-constitucional', assunto: 'Direitos e garantias fundamentais', dificuldade: 2,
      objetivos: GERAIS.concat(['policial']),
      enunciado: 'Segundo a Constituição Federal, a casa é asilo inviolável do indivíduo, e nela se pode penetrar sem o consentimento do morador, a qualquer hora do dia ou da noite, em caso de flagrante delito, desastre ou para prestar socorro; por determinação judicial, apenas durante o dia.',
      resposta: true,
      explicacao: {
        resumo: 'Correto: reproduz o art. 5º, XI, da CF.',
        detalhada: 'O texto constitucional prevê quatro hipóteses de ingresso sem consentimento: **flagrante delito, desastre e prestação de socorro** (a qualquer hora) e **determinação judicial** (somente durante o dia).\n\nNote o contraste: as três primeiras hipóteses não dependem de ordem judicial nem de horário; a ordem judicial, sim, depende do período diurno.',
        dica: 'A pegadinha clássica troca o horário: dizer que a ordem judicial vale "a qualquer hora" torna o item errado. Memorize: dia só para o juiz.'
      },
      fontes: [CF]
    }),
    q({
      id: 'dco-102', materia: 'direito-constitucional', assunto: 'Remédios constitucionais', dificuldade: 2,
      objetivos: GERAIS.concat(['policial']),
      enunciado: 'O mandado de segurança é cabível para proteger direito líquido e certo, ainda que o direito esteja amparado por habeas corpus ou habeas data, desde que a autoridade seja de nível federal.',
      resposta: false,
      explicacao: {
        resumo: 'Errado: o mandado de segurança protege direito líquido e certo não amparado por habeas corpus ou habeas data (art. 5º, LXIX).',
        detalhada: 'O mandado de segurança é **residual**: só cabe quando o direito líquido e certo **não** for amparado por habeas corpus (liberdade de locomoção) nem por habeas data (informações pessoais).\n\nO item também inventa um requisito, "autoridade de nível federal", que não existe: o mandado cabe contra ilegalidade ou abuso de poder de autoridade pública de qualquer esfera, ou de agente de pessoa jurídica no exercício de atribuições do Poder Público.',
        dica: 'Residualidade: HC e HD primeiro, MS por exclusão. Quando o item inverte essa lógica, é errado.'
      },
      fontes: [CF]
    }),
    q({
      id: 'dco-103', materia: 'direito-constitucional', assunto: 'Organização do Estado', dificuldade: 3,
      objetivos: GERAIS,
      enunciado: 'A incorporação de Estados entre si, sua subdivisão ou seu desmembramento para se anexarem a outros dependem de aprovação da população diretamente interessada, por plebiscito, e do Congresso Nacional, por lei complementar.',
      resposta: true,
      explicacao: {
        resumo: 'Correto: é a regra do art. 18, § 3º, da CF.',
        detalhada: 'A alteração territorial dos Estados exige **duas manifestações**: a população diretamente interessada, por **plebiscito**, e o Congresso Nacional, por **lei complementar**. Sem uma das duas, a mudança não ocorre.\n\nNão confunda com os Municípios (art. 18, § 4º), cuja criação, incorporação, fusão e desmembramento dependem de lei estadual, dentro do período fixado por lei complementar federal, estudo de viabilidade e consulta prévia por plebiscito.',
        dica: 'Estados: lei complementar federal. Municípios: lei estadual. A banca troca os dois.'
      },
      fontes: [CF]
    }),
    q({
      id: 'dco-104', materia: 'direito-constitucional', assunto: 'Poder Legislativo', dificuldade: 1,
      objetivos: GERAIS,
      enunciado: 'A Câmara dos Deputados compõe-se de representantes dos Estados e do Distrito Federal, eleitos pelo princípio majoritário, ao passo que o Senado Federal compõe-se de representantes do povo, eleitos pelo sistema proporcional.',
      resposta: false,
      explicacao: {
        resumo: 'Errado: os conceitos estão trocados. Deputados representam o povo (sistema proporcional); senadores representam os Estados e o DF (princípio majoritário).',
        detalhada: 'Segundo os arts. 45 e 46 da CF, a **Câmara** compõe-se de representantes do **povo**, eleitos pelo **sistema proporcional**. O **Senado** compõe-se de representantes dos **Estados e do Distrito Federal**, eleitos pelo **princípio majoritário**, com três senadores por unidade e mandato de oito anos.\n\nO item inverte as duas casas, o tipo de representação e o sistema eleitoral.',
        dica: 'Item "espelhado": todas as informações certas, mas na casa errada.'
      },
      fontes: [CF]
    }),

    /* ---------- Direito Administrativo ---------- */
    q({
      id: 'dad-101', materia: 'direito-administrativo', assunto: 'Princípios da Administração', dificuldade: 1,
      objetivos: GERAIS,
      enunciado: 'Em decorrência do princípio da autotutela, a Administração Pública pode anular seus próprios atos quando eivados de vícios que os tornem ilegais e revogá-los por motivo de conveniência ou oportunidade, respeitados os direitos adquiridos e ressalvada, em todos os casos, a apreciação judicial.',
      resposta: true,
      explicacao: {
        resumo: 'Correto: é o conteúdo da Súmula 473 do STF e da autotutela administrativa.',
        detalhada: 'A **autotutela** permite à Administração controlar seus próprios atos sem precisar acionar o Judiciário: **anula** os ilegais e **revoga** os inconvenientes ou inoportunos. Em qualquer caso, os direitos adquiridos são respeitados e o Judiciário pode apreciar o ato.\n\nA Súmula 473 do STF resume essa regra e é muito cobrada.',
        dica: 'Anulação é por ilegalidade; revogação é por mérito (conveniência e oportunidade).'
      },
      fontes: [{ titulo: 'Lei 9.784/1999, art. 53', url: 'https://www.planalto.gov.br/ccivil_03/leis/l9784.htm' }, { titulo: 'Portal do STF', url: 'https://portal.stf.jus.br' }]
    }),
    q({
      id: 'dad-102', materia: 'direito-administrativo', assunto: 'Atos administrativos', dificuldade: 2,
      objetivos: GERAIS.concat(['policial']),
      enunciado: 'A revogação é a forma de extinção do ato administrativo ilegal, produzida pela própria Administração, e opera efeitos retroativos (ex tunc).',
      resposta: false,
      explicacao: {
        resumo: 'Errado: o ato ilegal é anulado, com efeitos em regra retroativos. A revogação extingue ato legal, por conveniência e oportunidade, com efeitos ex nunc.',
        detalhada: 'O item mistura dois institutos. **Anulação**: retira ato ilegal, pode ser feita pela Administração ou pelo Judiciário, e seus efeitos são em regra **ex tunc**. **Revogação**: retira ato **legal**, mas inconveniente ou inoportuno, só pela Administração, e seus efeitos são **ex nunc** (daqui para a frente).\n\nAtos vinculados não podem ser revogados, pois não há juízo de conveniência a refazer.',
        dica: 'Ilegal = anula = ex tunc. Legal mas inoportuno = revoga = ex nunc.'
      },
      fontes: [{ titulo: 'Lei 9.784/1999, art. 53', url: 'https://www.planalto.gov.br/ccivil_03/leis/l9784.htm' }]
    }),
    q({
      id: 'dad-103', materia: 'direito-administrativo', assunto: 'Poderes administrativos', dificuldade: 2,
      objetivos: GERAIS,
      enunciado: 'O poder disciplinar é exercido sobre os agentes e particulares que mantêm vínculo jurídico específico com a Administração, ao passo que o poder de polícia alcança, em regra, a coletividade em geral, para limitar direitos e liberdades em prol do interesse público.',
      resposta: true,
      explicacao: {
        resumo: 'Correto: a distinção está no vínculo especial (disciplinar) versus a generalidade dos administrados (polícia).',
        detalhada: 'O **poder disciplinar** pressupõe um **vínculo especial** com a Administração, como o servidor ou o contratado. O **poder de polícia** (CTN, art. 78) limita direito, interesse ou liberdade em razão do interesse público e atinge os particulares em geral, sem vínculo específico.\n\nÉ uma distinção clássica, útil para identificar qual poder foi exercido em cada situação.',
        dica: 'Pergunte: há vínculo especial com a Administração? Se sim, disciplinar; se for a coletividade, polícia.'
      },
      fontes: [{ titulo: 'Código Tributário Nacional, art. 78', url: 'https://www.planalto.gov.br/ccivil_03/leis/l5172compilado.htm' }]
    }),
    q({
      id: 'dad-104', materia: 'direito-administrativo', assunto: 'Agentes públicos (Lei 8.112/1990)', dificuldade: 2,
      objetivos: GERAIS,
      enunciado: 'De acordo com a Constituição Federal, o servidor nomeado para cargo de provimento efetivo em virtude de concurso público adquire estabilidade após dois anos de efetivo exercício.',
      resposta: false,
      explicacao: {
        resumo: 'Errado: o prazo constitucional é de três anos (art. 41 da CF, redação da EC 19/1998).',
        detalhada: 'O art. 41 da CF fixa **três anos** de efetivo exercício, além de ser condição a **avaliação especial de desempenho** por comissão instituída para essa finalidade. O prazo de 24 meses da redação original da Lei 8.112/1990 (art. 21) não vale mais, pois a Constituição prevalece.\n\nDois anos era o prazo antigo, e é a armadilha da banca.',
        dica: 'Estabilidade: três anos e avaliação de desempenho. Estágio probatório acompanha esse prazo.'
      },
      fontes: [CF]
    }),

    /* ---------- Direito Penal ---------- */
    q({
      id: 'dpe-101', materia: 'direito-penal', assunto: 'Aplicação da lei penal', dificuldade: 2,
      objetivos: GERAIS.concat(['policial']),
      enunciado: 'A lei posterior que de qualquer modo favorecer o agente aplica-se aos fatos anteriores, ainda que decididos por sentença condenatória transitada em julgado.',
      resposta: true,
      explicacao: {
        resumo: 'Correto: é a retroatividade da lei penal benéfica (art. 2º, parágrafo único, do CP).',
        detalhada: 'A lei penal em regra não retroage, mas a **lei posterior mais benéfica retroage** e alcança inclusive fatos já julgados, mesmo com condenação definitiva. Isso decorre também do art. 5º, XL, da CF.\n\nA aplicação cabe ao juízo da execução (Súmula 611 do STF).',
        dica: 'Mais benéfica retroage sempre, até depois do trânsito em julgado. Mais gravosa nunca retroage.'
      },
      fontes: [CP, CF]
    }),
    q({
      id: 'dpe-102', materia: 'direito-penal', assunto: 'Teoria do crime', dificuldade: 2,
      objetivos: GERAIS.concat(['policial']),
      enunciado: 'Pratica o crime com dolo eventual o agente que prevê o resultado lesivo, mas espera sinceramente que ele não ocorra, confiando em sua habilidade para evitá-lo.',
      resposta: false,
      explicacao: {
        resumo: 'Errado: essa descrição é de culpa consciente. No dolo eventual, o agente assume o risco de produzir o resultado.',
        detalhada: 'Nos dois institutos o agente **prevê** o resultado. A diferença está na atitude diante dele. No **dolo eventual** (art. 18, I, do CP), ele **assume o risco**, é indiferente e aceita que ocorra. Na **culpa consciente**, ele **acredita sinceramente que não vai ocorrer**, confiando em suas habilidades ou em circunstâncias favoráveis.\n\nO item descreve exatamente a segunda hipótese.',
        dica: 'Culpa consciente: "vai dar certo, eu consigo evitar". Dolo eventual: "se acontecer, paciência".'
      },
      fontes: [CP]
    }),
    q({
      id: 'dpe-103', materia: 'direito-penal', assunto: 'Excludentes de ilicitude', dificuldade: 2,
      objetivos: GERAIS.concat(['policial']),
      enunciado: 'Se, ao agir em legítima defesa, o agente exceder dolosamente os limites da excludente, responderá pelo excesso.',
      resposta: true,
      explicacao: {
        resumo: 'Correto: o agente responde pelo excesso doloso ou culposo (art. 23, parágrafo único, do CP).',
        detalhada: 'O art. 23, parágrafo único, estabelece que o agente **responde pelo excesso, doloso ou culposo**. Se o excesso é doloso, responde pelo crime a título de dolo; se culposo, responde por culpa, desde que o fato seja punível a esse título.\n\nA parte do fato coberta pela excludente continua lícita; só o excesso é punido.',
        dica: 'Excesso não é "tudo ou nada": só a parte excessiva é punida.'
      },
      fontes: [CP]
    }),

    /* ---------- Informática ---------- */
    q({
      id: 'inf-101', materia: 'informatica', assunto: 'Segurança da informação', dificuldade: 1,
      objetivos: GERAIS.concat(['policial', 'bancarios']),
      enunciado: 'Phishing é a técnica de fraude em que mensagens falsas, geralmente imitando instituições conhecidas, induzem o usuário a fornecer dados pessoais ou financeiros ou a executar ações em benefício do golpista.',
      resposta: true,
      explicacao: {
        resumo: 'Correto: esse é o conceito de phishing, golpe de engenharia social.',
        detalhada: 'O **phishing** se baseia em **engenharia social**: o golpista se passa por banco, órgão público ou empresa, em e-mail, SMS ou página falsa, para obter senhas, números de cartão e outros dados, ou levar a vítima a instalar um programa malicioso.\n\nA defesa passa por desconfiar de links e anexos inesperados, conferir o endereço do site e usar autenticação em dois fatores.',
        dica: 'Phishing engana a pessoa; não é falha técnica do sistema.'
      },
      fontes: [CERT]
    }),
    q({
      id: 'inf-102', materia: 'informatica', assunto: 'Redes e internet', dificuldade: 2,
      objetivos: GERAIS.concat(['policial', 'bancarios']),
      enunciado: 'O protocolo SMTP é utilizado para o recebimento de mensagens de correio eletrônico pelo cliente de e-mail, enquanto os protocolos POP3 e IMAP são utilizados para o envio.',
      resposta: false,
      explicacao: {
        resumo: 'Errado: os papéis estão trocados. O SMTP envia mensagens; POP3 e IMAP recebem.',
        detalhada: 'O **SMTP** (Simple Mail Transfer Protocol) cuida do **envio** e do transporte entre servidores. O **POP3** baixa as mensagens do servidor para o dispositivo, e o **IMAP** permite acessá-las e gerenciá-las no próprio servidor, sincronizando vários dispositivos.\n\nO item inverte as funções, um clássico das provas.',
        dica: 'S de SMTP lembra "Send". POP e IMAP "puxam" a mensagem.'
      },
      fontes: [CERT]
    }),
    q({
      id: 'inf-103', materia: 'informatica', assunto: 'Planilhas (Excel e Calc)', dificuldade: 2,
      objetivos: GERAIS.concat(['bancarios']),
      enunciado: 'Em uma planilha eletrônica, se a célula B1 contiver a fórmula =A1*2 e for copiada para a célula B2, a fórmula em B2 passará a ser =A2*2.',
      resposta: true,
      explicacao: {
        resumo: 'Correto: a referência A1 é relativa e se ajusta ao ser copiada uma linha abaixo.',
        detalhada: 'Em **referência relativa** (A1), a posição é tomada em relação à célula da fórmula. Ao copiar de B1 para B2, a linha avança uma posição, e A1 vira A2. Para manter a referência fixa, usa-se **referência absoluta**: $A$1.\n\nO mesmo raciocínio vale para colunas: copiar para a direita altera as letras.',
        dica: 'Sem cifrão, a referência anda junto com a cópia. Com cifrão, fica travada.'
      },
      fontes: [{ titulo: 'Suporte da Microsoft: referências relativas e absolutas', url: 'https://support.microsoft.com/pt-br/office/alternar-entre-refer%C3%AAncias-relativas-absolutas-e-mistas-dfec08cd-ae65-4f56-839e-5f0d8d0baca9' }]
    }),

    /* ---------- Raciocínio Lógico ---------- */
    q({
      id: 'rlm-101', materia: 'raciocinio-logico', assunto: 'Equivalências e negações', dificuldade: 1,
      objetivos: GERAIS.concat(['policial', 'bancarios']),
      enunciado: 'A negação da proposição "Todo servidor da repartição é pontual" é "Algum servidor da repartição não é pontual".',
      resposta: true,
      explicacao: {
        resumo: 'Correto: negar "todo" é dizer que existe ao menos um que não satisfaz a propriedade.',
        detalhada: 'A negação de uma proposição universal afirmativa ("Todo A é B") é uma proposição particular negativa: **"Algum A não é B"** (ou "existe A que não é B"). Basta um servidor que não seja pontual para tornar a original falsa.\n\nNão é "Nenhum servidor é pontual", que é um caso mais forte e não a negação lógica.',
        dica: 'Negação de "todo" é "algum não"; não vá ao extremo "nenhum".'
      },
      fontes: [OBMEP]
    }),
    q({
      id: 'rlm-102', materia: 'raciocinio-logico', assunto: 'Proposições e conectivos', dificuldade: 2,
      objetivos: GERAIS.concat(['policial', 'bancarios']),
      enunciado: 'A negação da proposição composta "P ou Q" é logicamente equivalente a "não P ou não Q".',
      resposta: false,
      explicacao: {
        resumo: 'Errado: pelas leis de De Morgan, ~(P ou Q) equivale a ~P e ~Q.',
        detalhada: 'Pelas **leis de De Morgan**, negar uma disjunção troca o conectivo "ou" por "e" e nega cada parte: ~(P ∨ Q) ≡ ~P ∧ ~Q. De modo análogo, ~(P ∧ Q) ≡ ~P ∨ ~Q.\n\nVerificação: "P ou Q" só é falsa quando P e Q são ambas falsas, isto é, quando "não P" **e** "não Q" são verdadeiras. Já "não P ou não Q" seria verdadeira se só uma delas fosse falsa, o que não anula "P ou Q".',
        dica: 'Ao negar, o conectivo troca (e vira ou, ou vira e) e as partes são negadas.'
      },
      fontes: [OBMEP]
    }),
    q({
      id: 'rlm-103', materia: 'raciocinio-logico', assunto: 'Análise combinatória', dificuldade: 2,
      objetivos: GERAIS.concat(['policial', 'bancarios']),
      enunciado: 'Uma comissão de 3 pessoas, sem cargos distintos, será formada a partir de um grupo de 5 candidatos. Nesse caso, a comissão poderá ser formada de 60 maneiras diferentes.',
      resposta: false,
      explicacao: {
        resumo: 'Errado: como a ordem não importa, o número é C(5,3) = 10, e não 5 × 4 × 3 = 60.',
        detalhada: 'Em comissão sem cargos distintos, a ordem de escolha **não importa**: é uma **combinação**. C(5,3) = 5! / (3! · 2!) = 10.\n\nO valor 60 é o do **arranjo** A(5,3) = 5 × 4 × 3, que contaria cada trio várias vezes (3! = 6 ordens por trio). Dividindo 60 por 6 obtém-se 10.',
        dica: 'Pergunte: trocar a ordem gera outro agrupamento? Se não, combinação; se sim (cargos distintos), arranjo.'
      },
      fontes: [OBMEP]
    }),

    /* ---------- Conhecimentos Bancários ---------- */
    q({
      id: 'cba-101', materia: 'conhecimentos-bancarios', assunto: 'Sistema Financeiro Nacional', dificuldade: 2,
      objetivos: ['bancarios'],
      enunciado: 'No Sistema Financeiro Nacional, o Conselho Monetário Nacional é o órgão normativo máximo, cabendo ao Banco Central do Brasil cumprir e fazer cumprir as disposições que regulam o funcionamento do sistema e as normas expedidas pelo Conselho.',
      resposta: true,
      explicacao: {
        resumo: 'Correto: o CMN edita as normas e o Banco Central as executa e fiscaliza.',
        detalhada: 'O **CMN** é o órgão **deliberativo e normativo**, responsável por formular a política da moeda e do crédito. O **Banco Central** é a autarquia **executora**: cumpre e faz cumprir as normas (Lei 4.595/1964, art. 9º), fiscaliza as instituições financeiras e conduz a política monetária.\n\nO CMN não fiscaliza diretamente nem atende o público; o BC não cria as regras gerais do sistema.',
        dica: 'CMN normatiza; BC executa e supervisiona.'
      },
      fontes: [{ titulo: 'Lei 4.595/1964', url: 'https://www.planalto.gov.br/ccivil_03/leis/l4595.htm' }]
    }),
    q({
      id: 'cba-102', materia: 'conhecimentos-bancarios', assunto: 'Pix e meios de pagamento', dificuldade: 1,
      objetivos: ['bancarios'],
      enunciado: 'O Pix, arranjo de pagamentos instituído pelo Banco Central do Brasil, destina-se exclusivamente a pessoas físicas, não podendo ser utilizado por empresas.',
      resposta: false,
      explicacao: {
        resumo: 'Errado: o Pix pode ser usado por pessoas físicas, empresas e órgãos públicos.',
        detalhada: 'O Pix é um arranjo de pagamentos **instantâneos** instituído pelo Banco Central, disponível **24 horas por dia, todos os dias**, e utilizado por pessoas físicas e jurídicas, inclusive governo, para pagamentos e transferências.\n\nA expressão "exclusivamente" derruba o item.',
        dica: 'Absolutos como "exclusivamente" e "somente" são sinal clássico de item errado.'
      },
      fontes: [{ titulo: 'Banco Central do Brasil: Pix', url: 'https://www.bcb.gov.br/estabilidadefinanceira/pix' }]
    }),
    q({
      id: 'cba-103', materia: 'conhecimentos-bancarios', assunto: 'Prevenção à lavagem de dinheiro', dificuldade: 3,
      objetivos: ['bancarios', 'policial'],
      enunciado: 'Quando uma instituição financeira comunicar ao Coaf operação suspeita de lavagem de dinheiro, deverá informar a comunicação ao cliente envolvido, em nome da transparência.',
      resposta: false,
      explicacao: {
        resumo: 'Errado: a lei proíbe dar ciência da comunicação a qualquer pessoa, inclusive ao cliente (Lei 9.613/1998, art. 11).',
        detalhada: 'As pessoas obrigadas devem comunicar ao Coaf as operações suspeitas **abstendo-se de dar ciência** do ato a qualquer pessoa, inclusive àquela a quem se refira a informação. Avisar o cliente comprometeria a investigação e pode configurar infração.\n\nAs comunicações feitas de boa-fé não geram responsabilidade civil, administrativa ou penal.',
        dica: 'Sigilo: a comunicação ao Coaf é feita sem avisar o cliente.'
      },
      fontes: [{ titulo: 'Lei 9.613/1998, art. 11', url: 'https://www.planalto.gov.br/ccivil_03/leis/l9613.htm' }]
    })

  ] });
})();
