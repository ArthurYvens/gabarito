/* Questões inéditas de segurança da informação, engenharia social e forense computacional, escritas para o app. */
Banco.registrar({ questoes: [

  {
    id: 'inf-831', materia: 'informatica', assunto: 'Segurança da informação', tipo: 'multipla', estilo: 'FGV',
    dificuldade: 1, objetivos: ['concursos-gerais', 'tribunais', 'estatais'],
    enunciado: 'Um analista baixou a planilha da folha de pagamento de um servidor interno e, antes de usá-la, calculou o hash SHA-256 do arquivo. O valor obtido é diferente do que está registrado no sistema de controle. Sem que nenhum terceiro tenha lido o conteúdo, a diferença indica que, primariamente, foi comprometida a propriedade de',
    alternativas: [
      'confidencialidade, pois o conteúdo foi exposto a pessoa não autorizada.',
      'integridade, pois o arquivo pode ter sido alterado de forma indevida ou corrompido.',
      'disponibilidade, pois o arquivo deixou de estar acessível ao analista.',
      'irretratabilidade, pois o autor do arquivo passou a poder negar a autoria.',
      'legalidade, pois o arquivo deixou de observar a legislação aplicável.'
    ],
    resposta: 1,
    explicacao: {
      resumo: 'Hash diferente do esperado indica que o conteúdo mudou, o que atinge a integridade.',
      detalhada: 'A **integridade** é a garantia de que a informação não foi alterada de maneira não autorizada ou acidental. O hash funciona como uma "impressão digital" do conteúdo: qualquer mudança, mesmo de um único bit, produz um resumo muito diferente.\n\nO enunciado diz que ninguém leu o arquivo, o que afasta a **confidencialidade**. O analista conseguiu baixar e abrir o arquivo, o que afasta a **disponibilidade**. Não há dúvida sobre autoria, o que afasta a **irretratabilidade**.\n\nLembre-se: o hash detecta a alteração, mas não diz quem alterou nem o motivo. Para isso são necessários logs e outras fontes.',
      alternativas: [
        'Errada. Nada no enunciado indica leitura por terceiros; hash diferente não revela acesso, e sim alteração.',
        'Correta. Mudança no valor do hash é o sinal clássico de perda de integridade.',
        'Errada. O arquivo estava acessível; o problema é o conteúdo, não o acesso.',
        'Errada. Irretratabilidade (não repúdio) trata de impedir a negação de autoria, o que não está em jogo.',
        'Errada. Legalidade não é pilar da tríade CIA; a pergunta se refere a propriedades da segurança da informação.'
      ],
      dica: 'Verificação de hash = integridade. Se a questão falar em vazamento, é confidencialidade; em indisponibilidade ou queda do serviço, disponibilidade.'
    },
    fontes: [
      { titulo: 'CERT.br: Cartilha de Segurança para Internet', url: 'https://cartilha.cert.br/' },
      { titulo: 'NIST FIPS 180-4: Secure Hash Standard', url: 'https://csrc.nist.gov/pubs/fips/180-4/upd1/final' }
    ]
  },

  {
    id: 'inf-832', materia: 'informatica', assunto: 'Segurança da informação', tipo: 'multipla', estilo: 'FCC',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais', 'bancarios'],
    enunciado: 'Um diretor assinou digitalmente, com certificado válido, um contrato eletrônico e, meses depois, alegou que nunca o firmou. A propriedade da segurança da informação que, quando atendida pela assinatura digital, impede que o signatário negue a autoria é a',
    alternativas: [
      'disponibilidade.',
      'confidencialidade.',
      'anonimidade.',
      'irretratabilidade (não repúdio).',
      'cifragem simétrica.'
    ],
    resposta: 3,
    explicacao: {
      resumo: 'A assinatura digital, feita com a chave privada do signatário e vinculada a um certificado, fornece não repúdio.',
      detalhada: 'A **irretratabilidade**, ou **não repúdio**, é a garantia de que o autor de uma ação ou documento não poderá negá-la depois. Na assinatura digital, o resumo (hash) do documento é cifrado com a **chave privada** do signatário, que só ele deve possuir. Qualquer pessoa verifica a assinatura com a **chave pública** presente no certificado digital emitido por uma autoridade certificadora.\n\nAlém do não repúdio, a assinatura digital também fornece **autenticidade** (quem assinou) e **integridade** (o documento não mudou depois de assinado). Ela **não** garante confidencialidade: o documento continua legível, a menos que também seja cifrado.',
      alternativas: [
        'Errada. Disponibilidade garante acesso; o problema descrito é a negação de autoria, não o acesso.',
        'Errada. A assinatura digital não oculta o conteúdo.',
        'Errada. Anonimidade é o oposto: a assinatura identifica o autor.',
        'Correta. Não repúdio é a propriedade que impede a negação da autoria.',
        'Errada. Cifragem simétrica usa uma única chave compartilhada, o que não permite provar a autoria a terceiros.'
      ],
      dica: 'Assinatura digital: autenticidade + integridade + não repúdio. Confidencialidade vem da cifragem, não da assinatura.'
    },
    fontes: [
      { titulo: 'CERT.br: Cartilha de Segurança para Internet', url: 'https://cartilha.cert.br/' },
      { titulo: 'NIST FIPS 186-5: Digital Signature Standard', url: 'https://csrc.nist.gov/pubs/fips/186-5/final' }
    ]
  },

  {
    id: 'inf-833', materia: 'informatica', assunto: 'Segurança da informação', tipo: 'multipla', estilo: 'Cesgranrio',
    dificuldade: 1, objetivos: ['concursos-gerais', 'bancarios', 'estatais'],
    enunciado: 'Ao ligar o computador, um funcionário encontra todos os arquivos de trabalho com extensão alterada e inacessíveis, além de uma mensagem que exige pagamento em criptomoeda em troca da chave para recuperá-los. O código malicioso responsável por esse comportamento é classificado como',
    alternativas: [
      'ransomware.',
      'worm.',
      'keylogger.',
      'adware.',
      'bot.'
    ],
    resposta: 0,
    explicacao: {
      resumo: 'Cifrar os dados da vítima e cobrar resgate pela chave é a marca do ransomware.',
      detalhada: 'O **ransomware** é um código malicioso que torna inacessíveis os dados do equipamento, geralmente por **criptografia**, e exige um resgate (em geral em criptomoeda) para restabelecer o acesso. A defesa mais eficaz é manter **backups** atualizados e desconectados da rede, além de manter o sistema atualizado e desconfiar de anexos e links.\n\n- **Worm**: se propaga sozinho pela rede, explorando vulnerabilidades, sem precisar de um arquivo hospedeiro.\n- **Keylogger**: captura o que é digitado.\n- **Adware**: exibe propaganda indesejada.\n- **Bot**: permite controle remoto do equipamento, que passa a integrar uma botnet.',
      alternativas: [
        'Correta. Cifra os arquivos e pede resgate.',
        'Errada. Worm se replica pela rede; não é definido pelo sequestro de dados.',
        'Errada. Keylogger registra teclas digitadas, não cifra arquivos.',
        'Errada. Adware mostra anúncios.',
        'Errada. Bot dá controle remoto ao atacante; o enunciado descreve sequestro de dados.'
      ],
      dica: 'Mensagem de resgate + arquivos cifrados = ransomware. Não confunda com worm, que é definido pela propagação automática.'
    },
    fontes: [
      { titulo: 'CERT.br: Cartilha de Segurança para Internet', url: 'https://cartilha.cert.br/' },
      { titulo: 'CERT.br', url: 'https://www.cert.br/' }
    ]
  },

  {
    id: 'inf-834', materia: 'informatica', assunto: 'Segurança da informação', tipo: 'multipla', estilo: 'Vunesp',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais', 'estatais'],
    enunciado: 'Após uma invasão, a equipe de TI percebeu que o atacante mantinha acesso remoto a um servidor e que o antivírus e o gerenciador de tarefas não exibiam os processos e arquivos usados por ele. O conjunto de programas e técnicas que permite esconder a presença do invasor e manter esse acesso é denominado',
    alternativas: [
      'adware.',
      'cavalo de troia (trojan).',
      'rootkit.',
      'worm.',
      'screenlogger.'
    ],
    resposta: 2,
    explicacao: {
      resumo: 'Rootkit é o conjunto de técnicas e programas que escondem a presença de um invasor e asseguram seu acesso.',
      detalhada: 'O **rootkit** modifica componentes do sistema (ou o próprio núcleo) para ocultar processos, arquivos, conexões e chaves de registro, o que dificulta a detecção por ferramentas comuns. Em geral, vem acompanhado de um **backdoor**, que mantém a porta de entrada aberta para o atacante.\n\n- **Adware**: exibe propaganda.\n- **Cavalo de troia**: aparenta ser um programa legítimo, mas executa ações maliciosas; não se define por esconder o invasor.\n- **Worm**: propaga cópias de si pela rede.\n- **Screenlogger**: registra imagens da tela ou da região ao redor do clique.\n\nA resposta típica a um rootkit é reinstalar o sistema a partir de mídia confiável, pois não se pode confiar nas ferramentas do sistema comprometido.',
      alternativas: [
        'Errada. Adware apresenta anúncios.',
        'Errada. O trojan se disfarça de programa útil; não é a técnica de ocultação descrita.',
        'Correta. Ocultar a presença e manter acesso é a definição de rootkit.',
        'Errada. Worm se espalha automaticamente pela rede.',
        'Errada. Screenlogger captura a tela, não esconde o invasor.'
      ],
      dica: 'Palavras-chave de rootkit: esconder, ocultar, manter acesso. Se a questão falar em "se disfarçar de programa útil", é trojan.'
    },
    fontes: [
      { titulo: 'CERT.br: Cartilha de Segurança para Internet', url: 'https://cartilha.cert.br/' },
      { titulo: 'CERT.br', url: 'https://www.cert.br/' }
    ]
  },

  {
    id: 'inf-835', materia: 'informatica', assunto: 'Engenharia social', tipo: 'multipla', estilo: 'FGV',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'Um atacante entra em contato com o setor financeiro de uma empresa, apresenta-se como auditor de uma consultoria contratada, cita nomes de diretores e de projetos reais e inventa um prazo urgente para convencer uma funcionária a lhe informar dados de acesso a um sistema. A técnica de engenharia social empregada, baseada na criação de um cenário e de uma identidade falsos plausíveis, é conhecida como',
    alternativas: [
      'tailgating.',
      'shoulder surfing.',
      'dumpster diving.',
      'baiting.',
      'pretexting.'
    ],
    resposta: 4,
    explicacao: {
      resumo: 'Inventar um pretexto e uma identidade falsa para obter informação é pretexting.',
      detalhada: 'No **pretexting**, o atacante constrói uma história convincente (o pretexto), assume um papel (auditor, técnico, fornecedor, colega de outro setor) e usa informações previamente levantadas para ganhar a confiança da vítima. A urgência e a autoridade são gatilhos psicológicos frequentes.\n\n- **Tailgating**: entrar em área restrita seguindo um funcionário autorizado.\n- **Shoulder surfing**: observar por cima do ombro o que a pessoa digita ou lê.\n- **Dumpster diving**: vasculhar o lixo atrás de documentos e mídias.\n- **Baiting**: deixar uma isca, como um pen drive "esquecido", para despertar curiosidade.\n\nA defesa passa por **procedimentos de verificação** (ligar de volta por um número oficial, confirmar com o gestor) e por treinamento.',
      alternativas: [
        'Errada. Tailgating é uma entrada física não autorizada por carona.',
        'Errada. Shoulder surfing é observação direta do que a vítima digita.',
        'Errada. Dumpster diving é a busca de informação em lixo.',
        'Errada. Baiting usa uma isca física ou digital, sem interação com identidade inventada.',
        'Correta. O pretexto é uma história inventada para obter informação.'
      ],
      dica: 'Identidade falsa + história + urgência = pretexting.'
    },
    fontes: [
      { titulo: 'CERT.br: Cartilha de Segurança para Internet', url: 'https://cartilha.cert.br/' },
      { titulo: 'CERT.br', url: 'https://www.cert.br/' }
    ]
  },

  {
    id: 'inf-836', materia: 'informatica', assunto: 'Engenharia social', tipo: 'multipla', estilo: 'FCC',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'Uma pessoa sem crachá aguarda na recepção de um prédio corporativo e, quando um funcionário abre a porta da área de servidores com seu cartão de acesso, entra logo atrás dele, aproveitando a gentileza de ele segurar a porta. A técnica empregada e a contramedida mais adequada são, respectivamente:',
    alternativas: [
      'shoulder surfing; configuração de bloqueio automático de tela.',
      'tailgating; vestíbulo de acesso (mantrap) ou catraca de passagem individual, aliados a treinamento dos funcionários.',
      'dumpster diving; uso de trituradores de papel.',
      'baiting; bloqueio das portas USB das estações.',
      'phishing; filtro antispam no servidor de e-mail.'
    ],
    resposta: 1,
    explicacao: {
      resumo: 'Entrar atrás de alguém autorizado é tailgating (carona); controles físicos de passagem individual e conscientização reduzem o risco.',
      detalhada: 'O **tailgating** (ou **piggybacking**) explora a cortesia e a pressa das pessoas para burlar o controle de acesso físico. A contramedida combina **controle técnico** (vestíbulo com duas portas, catraca de passagem individual, leitura obrigatória de cartão na entrada) e **controle humano**: cultura de não segurar a porta para desconhecidos, de abordar quem não tem crachá e de comunicar a segurança.\n\nAs demais alternativas trazem técnicas reais, mas que não correspondem ao cenário: observação de tela, lixo, isca e e-mail fraudulento.',
      alternativas: [
        'Errada. Shoulder surfing é espiar a tela ou o teclado; bloqueio de tela não resolve a carona.',
        'Correta. A técnica é tailgating e a defesa é impedir a passagem de mais de uma pessoa por autenticação.',
        'Errada. Dumpster diving é busca de documentos no lixo; no cenário não há descarte, e sim passagem pela porta.',
        'Errada. Baiting usa uma isca, como mídia abandonada; bloquear USB não impede a carona.',
        'Errada. Phishing é fraude por mensagem eletrônica; o cenário é presencial.'
      ],
      dica: 'Quando a questão pede técnica e contramedida, as duas partes precisam estar certas. Verifique a segunda mesmo depois de acertar a primeira.'
    },
    fontes: [
      { titulo: 'CERT.br: Cartilha de Segurança para Internet', url: 'https://cartilha.cert.br/' },
      { titulo: 'GSI/PR: Segurança da Informação', url: 'https://www.gov.br/gsi/pt-br' }
    ]
  },

  {
    id: 'inf-837', materia: 'informatica', assunto: 'Engenharia social', tipo: 'multipla', estilo: 'Cesgranrio',
    dificuldade: 1, objetivos: ['bancarios', 'estatais', 'concursos-gerais'],
    enunciado: 'Uma cliente de banco atendeu uma ligação com voz gravada que dizia ser da central de segurança da instituição, informava sobre uma compra suspeita e pedia que ela digitasse no telefone a senha do cartão para "cancelar a operação". Esse golpe, que usa a rede telefônica como canal, é denominado',
    alternativas: [
      'smishing.',
      'pharming.',
      'vishing.',
      'whaling.',
      'defacement.'
    ],
    resposta: 2,
    explicacao: {
      resumo: 'Phishing por voz, com ligação que se passa por instituição, é vishing.',
      detalhada: 'O **vishing** (voice phishing) usa chamadas telefônicas, muitas vezes automatizadas, para induzir a vítima a revelar dados ou fazer operações. O **smishing** é o equivalente por **SMS**. O **pharming** redireciona o usuário para um site falso por manipulação de DNS. O **whaling** é o phishing dirigido a executivos de alto escalão. O **defacement** é a alteração do aspecto visual de um site.\n\nNenhum banco pede senha por telefone. A conduta correta é desligar e ligar de volta para o número impresso no cartão.',
      alternativas: [
        'Errada. Smishing usa mensagens SMS.',
        'Errada. Pharming usa o redirecionamento de DNS para páginas falsas.',
        'Correta. A ligação telefônica caracteriza vishing.',
        'Errada. Whaling é phishing dirigido a executivos de alto escalão; a vítima do cenário é uma cliente comum, contatada por telefone.',
        'Errada. Defacement é a pichação de sites, não um golpe telefônico.'
      ],
      dica: 'Decore o canal: vishing = voz, smishing = SMS, phishing = e-mail ou site, pharming = DNS.'
    },
    fontes: [
      { titulo: 'CERT.br: Cartilha de Segurança para Internet', url: 'https://cartilha.cert.br/' },
      { titulo: 'CERT.br', url: 'https://www.cert.br/' }
    ]
  },

  {
    id: 'inf-838', materia: 'informatica', assunto: 'Segurança da informação', tipo: 'multipla', estilo: 'Vunesp',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais', 'bancarios'],
    enunciado: 'Para enviar a Beatriz uma mensagem de e-mail confidencial, usando criptografia assimétrica, Carlos deve cifrar o conteúdo com',
    alternativas: [
      'a chave pública de Beatriz.',
      'a chave privada de Beatriz.',
      'a chave pública do próprio Carlos.',
      'a chave privada do próprio Carlos.',
      'o hash da mensagem, calculado por Beatriz.'
    ],
    resposta: 0,
    explicacao: {
      resumo: 'Para garantir confidencialidade, cifra-se com a chave pública do destinatário; só a chave privada dele decifra.',
      detalhada: 'Na criptografia **assimétrica**, cada pessoa tem um par de chaves: a **pública**, que pode ser divulgada, e a **privada**, mantida em segredo. O que é cifrado com uma só é decifrado com a outra.\n\n- **Confidencialidade**: o remetente cifra com a **chave pública do destinatário**; somente o destinatário, com a chave privada, consegue ler.\n- **Assinatura digital** (autenticidade, integridade e não repúdio): o remetente usa a **própria chave privada**, e qualquer um verifica com a pública dele.\n\nNa prática, a cifragem assimétrica é usada para trocar uma chave simétrica de sessão, pois os algoritmos simétricos são muito mais rápidos para grandes volumes.',
      alternativas: [
        'Correta. Só Beatriz, com a chave privada, poderá decifrar.',
        'Errada. Quem cifra usa a chave pública do destinatário; a privada serve para decifrar, e só Beatriz a possui.',
        'Errada. Cifrar com a própria chave pública só permitiria que Carlos lesse.',
        'Errada. Isso é a operação de assinatura: qualquer um decifraria com a pública de Carlos, sem sigilo.',
        'Errada. Hash não é chave e não é reversível.'
      ],
      dica: 'Sigilo: chave pública do destinatário. Assinatura: chave privada do remetente. Troque as duas e você cai na pegadinha.'
    },
    fontes: [
      { titulo: 'CERT.br: Cartilha de Segurança para Internet', url: 'https://cartilha.cert.br/' },
      { titulo: 'RFC 4949: Internet Security Glossary', url: 'https://www.rfc-editor.org/rfc/rfc4949' }
    ]
  },

  {
    id: 'inf-839', materia: 'informatica', assunto: 'Segurança da informação', tipo: 'multipla', estilo: 'FGV',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'Sobre as funções hash criptográficas, como a SHA-256, é correto afirmar que',
    alternativas: [
      'produzem resumos de tamanho proporcional ao da mensagem de entrada.',
      'permitem recuperar a mensagem original mediante o uso da chave privada.',
      'garantem que duas mensagens diferentes jamais produzam o mesmo resumo.',
      'geram, para qualquer entrada, um resumo de tamanho fixo, e uma pequena alteração na entrada produz um resumo totalmente diferente.',
      'exigem uma chave secreta compartilhada entre quem calcula e quem verifica o resumo.'
    ],
    resposta: 3,
    explicacao: {
      resumo: 'A SHA-256 gera sempre 256 bits, independentemente da entrada, e pequenas mudanças alteram o resumo por completo (efeito avalanche).',
      detalhada: 'Uma função hash criptográfica recebe uma entrada de qualquer tamanho e devolve um resumo de **tamanho fixo** (256 bits na SHA-256). É **unidirecional**: não é viável obter a entrada a partir do resumo. Apresenta o **efeito avalanche**: trocar um único bit da entrada muda cerca de metade dos bits do resumo.\n\nComo o conjunto de entradas é infinito e o de resumos é finito, colisões **existem** matematicamente; o que se exige é que seja **computacionalmente inviável** encontrá-las (resistência a colisões). Por isso o item C está errado ao falar em "jamais".\n\nO hash simples não usa chave. Quando se quer autenticar a origem com uma chave secreta compartilhada, usa-se o **HMAC**.',
      alternativas: [
        'Errada. O tamanho do resumo é fixo.',
        'Errada. Hash é de mão única; não há como "decifrar", e não se usa chave privada.',
        'Errada. Colisões existem; o que se garante é que são inviáveis de encontrar.',
        'Correta. Tamanho fixo e efeito avalanche.',
        'Errada. Isso descreve o HMAC; a função hash em si não usa chave.'
      ],
      dica: 'Cuidado com os absolutos: "jamais", "nunca", "sempre". Em hash, o correto é "computacionalmente inviável".'
    },
    fontes: [
      { titulo: 'NIST FIPS 180-4: Secure Hash Standard', url: 'https://csrc.nist.gov/pubs/fips/180-4/upd1/final' },
      { titulo: 'RFC 4949: Internet Security Glossary', url: 'https://www.rfc-editor.org/rfc/rfc4949' }
    ]
  },

  {
    id: 'inf-840', materia: 'informatica', assunto: 'Segurança da informação', tipo: 'multipla', estilo: 'FCC',
    dificuldade: 3, objetivos: ['concursos-gerais', 'tribunais', 'bancarios'],
    enunciado: 'Ao acessar um site por HTTPS, o navegador recebe um certificado digital X.509 do servidor. O que permite ao navegador confiar que a chave pública presente no certificado realmente pertence ao titular do site é',
    alternativas: [
      'o uso da porta 443, reservada a sites auditados.',
      'o fato de o certificado conter a chave privada do servidor, assinada pelo navegador.',
      'a senha do administrador do site, enviada junto ao certificado.',
      'o hash do conteúdo HTML, calculado pelo navegador.',
      'a assinatura digital da autoridade certificadora emissora, cuja cadeia de certificação chega a uma raiz presente no repositório de confiança.'
    ],
    resposta: 4,
    explicacao: {
      resumo: 'O certificado é assinado por uma AC; o navegador valida a cadeia até uma AC raiz em que confia.',
      detalhada: 'Em uma **infraestrutura de chaves públicas (ICP/PKI)**, um certificado X.509 liga uma **chave pública** a uma identidade (nome de domínio, organização). Essa ligação é atestada pela **assinatura digital da autoridade certificadora (AC)**. O navegador verifica:\n\n- a assinatura da AC sobre o certificado, subindo a **cadeia** de ACs intermediárias até uma **AC raiz** que já consta em seu repositório de confiança;\n- se o certificado está **dentro da validade**;\n- se o nome do site corresponde ao do certificado;\n- se não foi **revogado** (listas de revogação ou OCSP).\n\nA **chave privada** nunca vai no certificado; ela fica apenas com o titular. A porta 443 é apenas a porta padrão de HTTPS e não implica auditoria.',
      alternativas: [
        'Errada. A porta é uma convenção de serviço, sem relação com a confiança.',
        'Errada. A chave privada jamais é incluída no certificado.',
        'Errada. Senha de administrador não faz parte do certificado.',
        'Errada. O hash do HTML nada diz sobre a identidade do servidor.',
        'Correta. A confiança vem da assinatura da AC e da cadeia até uma raiz confiável.'
      ],
      dica: 'Certificado digital = chave pública + identidade + assinatura da AC. A chave privada nunca viaja.'
    },
    fontes: [
      { titulo: 'RFC 5280: Internet X.509 Public Key Infrastructure', url: 'https://www.rfc-editor.org/rfc/rfc5280' },
      { titulo: 'CERT.br: Cartilha de Segurança para Internet', url: 'https://cartilha.cert.br/' }
    ]
  },

  {
    id: 'inf-841', materia: 'informatica', assunto: 'Segurança da informação', tipo: 'multipla', estilo: 'Cesgranrio',
    dificuldade: 2, objetivos: ['concursos-gerais', 'bancarios', 'estatais'],
    enunciado: 'Uma instituição financeira quer reforçar a autenticação de seus sistemas internos com autenticação multifator (MFA), combinando fatores de categorias diferentes. Dentre as combinações abaixo, a que configura MFA é:',
    alternativas: [
      'senha e PIN numérico.',
      'senha e pergunta secreta.',
      'senha e código temporário gerado por aplicativo autenticador no celular do usuário.',
      'impressão digital e reconhecimento facial.',
      'token físico e cartão de acesso.'
    ],
    resposta: 2,
    explicacao: {
      resumo: 'MFA exige fatores de categorias distintas: algo que se sabe, algo que se tem e algo que se é. Senha mais código no celular une conhecimento e posse.',
      detalhada: 'Os fatores de autenticação são:\n\n- **Conhecimento**: o que o usuário sabe (senha, PIN, resposta secreta);\n- **Posse**: o que o usuário tem (token, cartão, celular com aplicativo gerador de código);\n- **Inerência**: o que o usuário é (biometria).\n\nPara ser **multifator** de verdade, é preciso combinar **categorias diferentes**. Senha e PIN, ou senha e pergunta secreta, são dois fatores de conhecimento. Impressão digital e face são dois fatores de inerência. Token e cartão são dois fatores de posse. Apenas a alternativa C une conhecimento (senha) e posse (celular com código TOTP).\n\nObservação: SMS como segundo fator é considerado mais fraco por riscos como troca de chip (SIM swap).',
      alternativas: [
        'Errada. Contar dois itens não basta; senha e PIN são ambos algo que se sabe, e MFA exige categorias diferentes.',
        'Errada. Contar dois itens não basta; senha e pergunta secreta são ambas algo que se sabe, e MFA exige categorias diferentes.',
        'Correta. Conhecimento mais posse.',
        'Errada. Ambos são inerência (algo que se é); a categoria se repete.',
        'Errada. Ambos são posse (algo que se tem); a categoria se repete.'
      ],
      dica: 'Contar dois itens não basta: "duas senhas" não é MFA. Procure a combinação de categorias diferentes.'
    },
    fontes: [
      { titulo: 'NIST SP 800-63B: Digital Identity Guidelines (Authentication)', url: 'https://pages.nist.gov/800-63-4/sp800-63b.html' },
      { titulo: 'CERT.br: Cartilha de Segurança para Internet', url: 'https://cartilha.cert.br/' }
    ]
  },

  {
    id: 'inf-842', materia: 'informatica', assunto: 'Segurança da informação', tipo: 'multipla', estilo: 'Vunesp',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais', 'estatais'],
    enunciado: 'Um órgão faz backup completo aos domingos e backups incrementais de segunda a quinta-feira, sempre à noite. Na sexta-feira pela manhã, o servidor de arquivos falha e os dados precisam ser restaurados ao estado do backup de quinta. Para essa restauração serão necessários',
    alternativas: [
      'somente o backup completo de domingo e o incremental de quinta-feira.',
      'o backup completo de domingo e os quatro incrementais, de segunda a quinta-feira, restaurados em sequência.',
      'o backup completo de domingo e o backup diferencial de quinta-feira.',
      'apenas os quatro backups incrementais, de segunda a quinta-feira.',
      'o backup completo de domingo e o incremental de segunda-feira.'
    ],
    resposta: 1,
    explicacao: {
      resumo: 'Cada incremental guarda só o que mudou desde o último backup de qualquer tipo; é preciso o completo mais todos os incrementais, em ordem.',
      detalhada: 'No **backup completo** (full), todos os dados são copiados. No **incremental**, copia-se apenas o que mudou desde o **último backup de qualquer tipo** (completo ou incremental). No **diferencial**, copia-se o que mudou desde o **último backup completo**.\n\nComo cada incremental depende do anterior, a restauração exige o completo de domingo e **todos** os incrementais da cadeia (segunda, terça, quarta e quinta), na ordem. Se faltar um deles, os dados posteriores ficam inconsistentes.\n\nTrade-off:\n- **Incremental**: backup mais rápido e menor, restauração mais lenta e mais frágil;\n- **Diferencial**: backup cresce a cada dia, mas a restauração usa só o completo e o último diferencial.',
      alternativas: [
        'Errada. Faltariam os incrementais de segunda a quarta.',
        'Correta. A cadeia completa de incrementais é necessária.',
        'Errada. O enunciado fala de incrementais; a restauração com diferencial só vale se o esquema for diferencial.',
        'Errada. Sem o completo não há base sobre a qual aplicar os incrementais.',
        'Errada. Faltariam terça, quarta e quinta.'
      ],
      dica: 'Incremental: restaura com o completo + todos os incrementais. Diferencial: completo + só o último diferencial.'
    },
    fontes: [
      { titulo: 'CERT.br: Cartilha de Segurança para Internet', url: 'https://cartilha.cert.br/' },
      { titulo: 'NIST SP 800-34 Rev. 1: Contingency Planning Guide (estratégias de backup)', url: 'https://csrc.nist.gov/pubs/sp/800/34/r1/final' }
    ]
  },

  {
    id: 'inf-843', materia: 'informatica', assunto: 'Segurança da informação', tipo: 'multipla', estilo: 'FGV',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais', 'estatais'],
    enunciado: 'Uma empresa instalou, em linha com o tráfego entre a Internet e a rede interna, um equipamento que inspeciona os pacotes em busca de assinaturas e comportamentos conhecidos de ataque e, ao identificá-los, descarta o tráfego malicioso automaticamente. Esse equipamento é um',
    alternativas: [
      'roteador com lista de controle de acesso estática.',
      'IDS passivo, instalado em porta espelhada de um switch.',
      'honeypot.',
      'IPS (sistema de prevenção de intrusão).',
      'gateway de VPN.'
    ],
    resposta: 3,
    explicacao: {
      resumo: 'Atuar em linha e bloquear automaticamente o tráfego malicioso é a função do IPS.',
      detalhada: 'O **IDS** (Intrusion Detection System) **detecta** e gera alertas; costuma operar de forma **passiva**, recebendo uma cópia do tráfego (por exemplo, porta espelhada), e por isso não bloqueia. O **IPS** (Intrusion Prevention System) fica **em linha** com o tráfego e pode **bloquear** pacotes e conexões em tempo real.\n\nO **firewall** filtra o tráfego com base em regras (endereços, portas, estado da conexão e, nos de nova geração, aplicações). O **honeypot** é um sistema-isca para observar atacantes. O **gateway de VPN** cria túneis cifrados.\n\nUm risco do IPS são os **falsos positivos**, que podem bloquear tráfego legítimo.',
      alternativas: [
        'Errada. ACL estática filtra por critérios simples, sem análise de assinaturas.',
        'Errada. O IDS passivo detecta e alerta, mas não bloqueia por si.',
        'Errada. Honeypot é um sistema isca, não filtra tráfego da rede real.',
        'Correta. Em linha, analisa e bloqueia.',
        'Errada. VPN cifra e autentica túneis; não inspeciona ataques.'
      ],
      dica: 'IDS = detecta e avisa. IPS = detecta e bloqueia. "Em linha" e "bloqueio automático" apontam para o IPS.'
    },
    fontes: [
      { titulo: 'NIST SP 800-94: Guide to Intrusion Detection and Prevention Systems', url: 'https://csrc.nist.gov/pubs/sp/800/94/final' },
      { titulo: 'CERT.br: Cartilha de Segurança para Internet', url: 'https://cartilha.cert.br/' }
    ]
  },

  {
    id: 'inf-844', materia: 'informatica', assunto: 'Segurança da informação', tipo: 'multipla', estilo: 'FCC',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais', 'estatais'],
    enunciado: 'Uma aplicação web monta consultas ao banco de dados concatenando diretamente o texto digitado pelo usuário no formulário de login, o que permite que um invasor altere a lógica da consulta. Entre as medidas de desenvolvimento seguro, a mais eficaz para prevenir esse tipo de vulnerabilidade (injeção de SQL) é',
    alternativas: [
      'usar consultas parametrizadas (prepared statements), tratando a entrada do usuário como dado e não como parte do comando SQL.',
      'ocultar as mensagens de erro do banco de dados, deixando o código SQL como está.',
      'trafegar a aplicação apenas por HTTPS.',
      'cifrar o arquivo físico do banco de dados no disco.',
      'exigir que as senhas dos usuários tenham no mínimo doze caracteres.'
    ],
    resposta: 0,
    explicacao: {
      resumo: 'Consultas parametrizadas separam o código SQL dos dados, impedindo que a entrada altere a lógica da consulta.',
      detalhada: 'A **injeção** (SQL, comandos de sistema, LDAP etc.) ocorre quando dados não confiáveis são enviados a um interpretador como se fossem parte do comando. Ela é uma das categorias tradicionais do **OWASP Top 10**.\n\nA defesa principal é usar **consultas parametrizadas** (ou ORMs que as utilizem), em que o texto da consulta e os valores seguem por caminhos separados. Medidas complementares: validação da entrada por lista de permissão, **privilégio mínimo** na conta do banco e mensagens de erro genéricas.\n\nOcultar erros dificulta a exploração, mas não elimina a falha. HTTPS protege o trânsito, e cifrar o disco protege o dado em repouso; nenhum dos dois impede que a consulta seja manipulada. Senhas longas não resolvem uma consulta mal construída.',
      alternativas: [
        'Correta. Separa comando e dado, tratando a causa.',
        'Errada. Esconder o erro apenas oculta o sintoma.',
        'Errada. HTTPS protege o canal, não a construção da consulta.',
        'Errada. Cifrar o disco protege contra furto da mídia, não contra injeção.',
        'Errada. Política de senha é outra camada e não corrige a consulta.'
      ],
      dica: 'Para injeção, a resposta é quase sempre "parametrizar" e "validar a entrada". Criptografia e HTTPS não resolvem.'
    },
    fontes: [
      { titulo: 'OWASP Top 10', url: 'https://owasp.org/Top10/' },
      { titulo: 'OWASP: SQL Injection', url: 'https://owasp.org/www-community/attacks/SQL_Injection' }
    ]
  },

  {
    id: 'inf-845', materia: 'informatica', assunto: 'Segurança da informação', tipo: 'multipla', estilo: 'Vunesp',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'Uma empresa contratou uma consultoria para realizar um teste de intrusão (pentest) em seus sistemas. Do ponto de vista ético e legal, a providência indispensável antes de iniciar as atividades é',
    alternativas: [
      'obter autorização verbal do gerente de TI, que dispensa documentação.',
      'testar qualquer sistema alcançável a partir da rede da empresa, pois a falha ajudará a organização.',
      'divulgar publicamente as vulnerabilidades encontradas para pressionar a correção.',
      'iniciar a exploração e só depois definir o que pode ser testado.',
      'formalizar, em contrato ou termo de autorização, o escopo, as regras de engajamento, os limites e as janelas de teste, assinado por quem tem poder para autorizar.'
    ],
    resposta: 4,
    explicacao: {
      resumo: 'O teste só é legítimo com autorização formal e escopo definido; sem isso, a mesma atividade pode configurar crime.',
      detalhada: 'O pentest é uma avaliação **autorizada** de segurança. O que o separa de uma invasão é a **autorização prévia, formal e por escrito** de quem tem poder sobre os sistemas, com **escopo** (o que pode ser testado), **regras de engajamento** (técnicas permitidas, horários, contatos de emergência), **limites** e **tratamento sigiloso** dos resultados.\n\nUma metodologia típica passa por: planejamento e escopo, levantamento de informações, análise de vulnerabilidades, exploração controlada, pós-exploração e **relatório** com recomendações. As falhas são reportadas ao contratante de forma confidencial, nunca divulgadas publicamente.\n\nInvadir dispositivo informático alheio sem autorização é crime previsto no art. 154-A do Código Penal.',
      alternativas: [
        'Errada. Autorização verbal e informal não protege nem o contratante nem a consultoria.',
        'Errada. Sistemas fora do escopo (inclusive de terceiros) não podem ser testados.',
        'Errada. A divulgação é confidencial e acordada; expor falhas sem correção causa dano.',
        'Errada. O planejamento e a definição de escopo vêm antes de qualquer teste.',
        'Correta. Autorização formal com escopo e regras de engajamento.'
      ],
      dica: 'Nas questões de ética, a resposta é sempre: autorização formal, escopo definido, confidencialidade.'
    },
    fontes: [
      { titulo: 'Código Penal, art. 154-A', url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm' },
      { titulo: 'OWASP: Web Security Testing Guide', url: 'https://owasp.org/www-project-web-security-testing-guide/' }
    ]
  },

  {
    id: 'inf-846', materia: 'informatica', assunto: 'Segurança da informação', tipo: 'multipla', estilo: 'Cesgranrio',
    dificuldade: 2, objetivos: ['concursos-gerais', 'estatais', 'bancarios'],
    enunciado: 'No ciclo de vida de resposta a incidentes de segurança descrito pelo NIST em sua publicação SP 800-61 (revisão 2), a fase em que a equipe isola os sistemas afetados para limitar a propagação, remove o código malicioso e restabelece os serviços é a de',
    alternativas: [
      'preparação.',
      'detecção e análise.',
      'contenção, erradicação e recuperação.',
      'atividade pós-incidente.',
      'auditoria de conformidade.'
    ],
    resposta: 2,
    explicacao: {
      resumo: 'Isolar, eliminar a causa e restaurar os serviços compõem a fase de contenção, erradicação e recuperação.',
      detalhada: 'O ciclo da SP 800-61 r2 tem quatro fases:\n\n- **Preparação**: equipe, políticas, ferramentas, treinamento;\n- **Detecção e análise**: identificar o evento, confirmar se é incidente e classificá-lo;\n- **Contenção, erradicação e recuperação**: limitar o dano, eliminar a causa e voltar à operação normal;\n- **Atividade pós-incidente**: lições aprendidas e melhoria dos controles.\n\nA contenção precisa equilibrar rapidez e **preservação de evidências**: antes de desligar ou reinstalar, deve-se coletar o que for necessário para a investigação. Observação: o NIST publicou em 2025 a revisão 3, alinhada às funções do Cybersecurity Framework 2.0, mas a revisão 3 não usa mais as quatro fases; o modelo de quatro fases da revisão 2 continua sendo o mais cobrado em provas.',
      alternativas: [
        'Errada. Preparação ocorre antes de o incidente acontecer.',
        'Errada. Nessa fase se identifica e analisa; não se age ainda para conter.',
        'Correta. É a fase de agir sobre o incidente.',
        'Errada. Acontece depois, com a revisão do que ocorreu.',
        'Errada. Auditoria de conformidade é atividade de governança, não fase do ciclo de resposta; a isca é confundir resposta a incidente com auditoria.'
      ],
      dica: 'Ordem: preparar, detectar e analisar, conter/erradicar/recuperar, aprender. Ação sobre o ambiente = fase 3.'
    },
    fontes: [
      { titulo: 'NIST SP 800-61 Rev. 2', url: 'https://csrc.nist.gov/pubs/sp/800/61/r2/final' },
      { titulo: 'NIST SP 800-61 Rev. 3', url: 'https://csrc.nist.gov/pubs/sp/800/61/r3/final' }
    ]
  },

  {
    id: 'inf-847', materia: 'informatica', assunto: 'Forense computacional', tipo: 'multipla', estilo: 'FGV',
    dificuldade: 3, objetivos: ['policial', 'tribunais', 'concursos-gerais'],
    enunciado: 'Um perito chega a um local onde há um computador ligado, suspeito de ter sido usado em uma fraude, e precisa coletar as evidências respeitando a ordem de volatilidade. A sequência correta de coleta, do dado mais volátil para o menos volátil, é:',
    alternativas: [
      'disco rígido, memória RAM, arquivos temporários, mídias de backup.',
      'mídias de backup, disco rígido, arquivos temporários, memória RAM.',
      'arquivos temporários, memória RAM, mídias de backup, disco rígido.',
      'memória RAM, arquivos temporários, disco rígido, mídias de arquivamento (backup).',
      'disco rígido, mídias de arquivamento, memória RAM, arquivos temporários.'
    ],
    resposta: 3,
    explicacao: {
      resumo: 'A coleta começa pelo que some mais rápido: registradores e memória, depois sistemas de arquivos temporários, disco e, por fim, mídias de arquivamento.',
      detalhada: 'A **ordem de volatilidade** (RFC 3227) manda coletar primeiro o que se perde mais depressa quando o equipamento é desligado ou continua em uso. Da mais volátil para a menos volátil:\n\n- registradores e cache;\n- tabela de roteamento, cache ARP, tabela de processos, estatísticas do kernel e **memória**;\n- **sistemas de arquivos temporários**;\n- **disco**;\n- dados de **logs remotos** e de monitoramento;\n- configuração física e topologia de rede;\n- **mídias de arquivamento** (fitas, backups).\n\nDesligar a máquina logo na chegada destrói a memória, onde podem estar processos, chaves de criptografia e conexões de rede ativas. Por outro lado, tudo que for feito na máquina viva **altera** o estado, então cada ação deve ser documentada.',
      alternativas: [
        'Errada. Inverte RAM e disco; o disco é bem menos volátil.',
        'Errada. Começa pelo menos volátil.',
        'Errada. Coloca o backup antes do disco, quando é o último da lista.',
        'Correta. RAM, temporários, disco, arquivamento.',
        'Errada. Coloca disco e arquivamento antes da memória.'
      ],
      dica: 'Pergunte-se: o que desaparece primeiro se a energia cair? Esse é o primeiro a coletar. Backup em fita é o último.'
    },
    fontes: [
      { titulo: 'RFC 3227: Guidelines for Evidence Collection and Archiving', url: 'https://www.rfc-editor.org/rfc/rfc3227' },
      { titulo: 'NIST SP 800-86: Guide to Integrating Forensic Techniques into Incident Response', url: 'https://csrc.nist.gov/pubs/sp/800/86/final' }
    ]
  },

  {
    id: 'inf-848', materia: 'informatica', assunto: 'Forense computacional', tipo: 'multipla', estilo: 'FCC',
    dificuldade: 2, objetivos: ['policial', 'tribunais', 'concursos-gerais'],
    enunciado: 'Na perícia computacional, a cadeia de custódia consiste',
    alternativas: [
      'na criptografia do disco rígido apreendido, de modo que apenas o perito possa abri-lo.',
      'no conjunto de procedimentos que documentam a história cronológica do vestígio, registrando quem o manuseou, quando, como e com que finalidade, desde a coleta até o descarte.',
      'na cópia do conteúdo da mídia para um servidor da empresa investigada, para facilitar o acesso do advogado.',
      'no cálculo do hash do original, que dispensa qualquer registro de manuseio.',
      'na instalação de ferramentas de recuperação de arquivos apagados na máquina periciada.'
    ],
    resposta: 1,
    explicacao: {
      resumo: 'A cadeia de custódia documenta toda a trajetória do vestígio para provar que ele não foi alterado nem substituído.',
      detalhada: 'O Código de Processo Penal (art. 158-A) define cadeia de custódia como o conjunto de procedimentos usados para **manter e documentar a história cronológica do vestígio**, de modo a rastrear sua posse e manuseio do reconhecimento até o descarte. Na prática, inclui etiquetagem, lacre, formulários de transferência com data, hora e responsável, armazenamento seguro e registro de cada acesso.\n\nSem cadeia de custódia, a **autenticidade e a integridade** da prova podem ser contestadas, comprometendo seu valor. O **hash** é um complemento técnico (prova que o conteúdo não mudou), mas não substitui o registro de quem teve a posse.',
      alternativas: [
        'Errada. Cifrar o disco não documenta o manuseio; pode até alterar o vestígio.',
        'Correta. É o registro cronológico e completo do vestígio.',
        'Errada. Entregar cópia à parte interessada, sem controle, rompe a custódia.',
        'Errada. O hash é útil, mas não dispensa o registro de manuseio.',
        'Errada. Instalar programas na máquina periciada altera o vestígio.'
      ],
      dica: 'Cadeia de custódia = papel e controle: quem, quando, onde, por quê. Hash = prova técnica de que o conteúdo é o mesmo. As duas coisas se complementam.'
    },
    fontes: [
      { titulo: 'Código de Processo Penal, art. 158-A', url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del3689.htm' },
      { titulo: 'RFC 3227: Guidelines for Evidence Collection and Archiving', url: 'https://www.rfc-editor.org/rfc/rfc3227' }
    ]
  },

  {
    id: 'inf-849', materia: 'informatica', assunto: 'Forense computacional', tipo: 'multipla', estilo: 'Vunesp',
    dificuldade: 2, objetivos: ['policial', 'tribunais', 'concursos-gerais'],
    enunciado: 'Para examinar um disco rígido apreendido, o perito conectou-o ao seu equipamento por meio de um bloqueador de escrita (write blocker), fez uma imagem bit a bit e calculou o hash SHA-256 do disco original e da imagem. O conjunto desses procedimentos tem como finalidade',
    alternativas: [
      'acelerar a cópia dos dados e dispensar o lacre da mídia.',
      'cifrar o conteúdo da imagem para que ninguém possa lê-lo.',
      'recuperar automaticamente todos os arquivos apagados.',
      'dispensar o registro da cadeia de custódia.',
      'impedir qualquer alteração na mídia original e demonstrar, por hashes idênticos, que a cópia analisada é fiel ao original.'
    ],
    resposta: 4,
    explicacao: {
      resumo: 'O bloqueador impede escrita no original e a comparação de hashes demonstra que a imagem é idêntica.',
      detalhada: 'O **bloqueador de escrita** (por hardware ou software) permite apenas leitura do dispositivo, evitando que o sistema operacional do perito altere metadados ou dados da mídia original. A **imagem forense** é uma cópia bit a bit, que inclui espaço não alocado e áreas onde há resquícios de arquivos apagados. O exame é feito sobre a imagem, preservando o original.\n\nO **hash** do original e o da imagem, quando idênticos, comprovam que a cópia é fiel; o hash também permite demonstrar depois que nada mudou. Recomenda-se algoritmo robusto como SHA-256, pois MD5 e SHA-1 têm colisões conhecidas.\n\nNada disso substitui a **cadeia de custódia**; os dois mecanismos se somam.',
      alternativas: [
        'Errada. O objetivo não é velocidade, e o lacre continua necessário.',
        'Errada. A imagem é cópia fiel, não cifrada; não impede a leitura por terceiros.',
        'Errada. A recuperação de arquivos é uma etapa posterior de análise, e não é automática.',
        'Errada. A cadeia de custódia permanece obrigatória.',
        'Correta. Preservação do original e verificação de fidelidade da cópia.'
      ],
      dica: 'Write blocker = preservar o original. Hash igual = cópia fiel. Palavras como "dispensa" ou "substitui" a cadeia de custódia indicam alternativa errada.'
    },
    fontes: [
      { titulo: 'NIST SP 800-86: Guide to Integrating Forensic Techniques into Incident Response', url: 'https://csrc.nist.gov/pubs/sp/800/86/final' },
      { titulo: 'RFC 3227: Guidelines for Evidence Collection and Archiving', url: 'https://www.rfc-editor.org/rfc/rfc3227' }
    ]
  },

  {
    id: 'inf-850', materia: 'informatica', assunto: 'Segurança da informação', tipo: 'multipla', estilo: 'Cesgranrio',
    dificuldade: 2, objetivos: ['concursos-gerais', 'bancarios', 'estatais', 'tribunais'],
    enunciado: 'Uma empresa, na condição de controladora, descobriu que um ataque expôs dados pessoais de clientes e que o incidente pode acarretar risco ou dano relevante aos titulares. De acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), o controlador deve',
    alternativas: [
      'comunicar o incidente à autoridade nacional (ANPD) e aos titulares, em prazo razoável definido pela autoridade, informando, no mínimo, a natureza dos dados, os titulares envolvidos, as medidas de segurança, os riscos e as providências adotadas.',
      'aguardar o ajuizamento de ação por algum titular, pois só então a lei exige comunicação.',
      'comunicar apenas aos titulares, já que a ANPD não é destinatária de comunicações de incidentes.',
      'comunicar somente se houver condenação judicial por vazamento.',
      'apagar os registros do incidente, para não gerar prova contra si.'
    ],
    resposta: 0,
    explicacao: {
      resumo: 'O art. 48 da LGPD obriga o controlador a comunicar a ANPD e os titulares quando o incidente possa causar risco ou dano relevante.',
      detalhada: 'Pelo **art. 48 da LGPD**, o controlador deve comunicar à **autoridade nacional** e ao **titular** a ocorrência de incidente de segurança que possa acarretar risco ou dano relevante. A comunicação deve ser feita em **prazo razoável, definido pela ANPD**, e conter, no mínimo: a natureza dos dados afetados, as informações sobre os titulares envolvidos, as medidas técnicas e de segurança usadas (observados os segredos comercial e industrial), os riscos, os motivos da demora (se não for imediata) e as medidas adotadas para reverter ou mitigar os efeitos.\n\nO prazo foi regulamentado pela ANPD (Resolução CD/ANPD nº 15/2024), que fixa **três dias úteis** a partir do conhecimento de que o incidente afetou dados pessoais.\n\nAlém disso, o **art. 37** exige que controlador e operador mantenham **registro das operações de tratamento**, e o **art. 52** prevê sanções, como advertência e multa de até 2% do faturamento, limitada a R$ 50 milhões por infração.',
      alternativas: [
        'Correta. Reproduz o art. 48, caput e §1º.',
        'Errada. A comunicação é um dever do controlador, independentemente de ação judicial.',
        'Errada. A LGPD exige comunicação à autoridade nacional e ao titular (art. 48, caput).',
        'Errada. Não depende de condenação; depende do risco ou dano relevante.',
        'Errada. Destruir registros agrava a situação; a LGPD exige registro e prestação de contas.'
      ],
      dica: 'Art. 48: comunicar à ANPD e ao titular. A banca costuma retirar um dos dois destinatários para criar a pegadinha.'
    },
    fontes: [
      { titulo: 'Lei nº 13.709/2018 (LGPD), arts. 37, 46 a 49 e 52', url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm' },
      { titulo: 'ANPD: comunicação de incidente de segurança', url: 'https://www.gov.br/anpd/pt-br/assuntos/incidente-de-seguranca' }
    ]
  },

  /* ===================== CERTO OU ERRADO (CEBRASPE) ===================== */

  {
    id: 'inf-851', materia: 'informatica', assunto: 'Segurança da informação', tipo: 'certo-errado', estilo: 'CEBRASPE',
    dificuldade: 1, objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'Um ataque de negação de serviço distribuído (DDoS) que sobrecarrega um portal público e o torna inacessível aos usuários legítimos compromete diretamente a disponibilidade, um dos três pilares da tríade da segurança da informação.',
    resposta: true,
    explicacao: {
      resumo: 'Certo. O DDoS atinge a disponibilidade, pois impede o acesso de quem está autorizado.',
      detalhada: 'A tríade **CIA** é composta por **confidencialidade**, **integridade** e **disponibilidade**. A disponibilidade garante que a informação e os serviços estejam acessíveis a quem tem direito, quando necessário.\n\nNo **DDoS**, muitas máquinas (em geral uma **botnet**) enviam requisições simultâneas e esgotam banda, memória ou processamento do alvo. Não há, necessariamente, leitura nem alteração de dados; o dano é a **indisponibilidade**. Entre as defesas estão serviços de mitigação em nuvem, limitação de taxa, redundância e balanceamento de carga.',
      dica: 'Queda do serviço = disponibilidade. Vazamento = confidencialidade. Alteração indevida = integridade.'
    },
    fontes: [
      { titulo: 'CERT.br: Cartilha de Segurança para Internet', url: 'https://cartilha.cert.br/' },
      { titulo: 'CERT.br', url: 'https://www.cert.br/' }
    ]
  },

  {
    id: 'inf-852', materia: 'informatica', assunto: 'Segurança da informação', tipo: 'certo-errado', estilo: 'CEBRASPE',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'Na assinatura digital, o signatário gera a assinatura com a sua chave pública, que é mantida em segredo, e qualquer pessoa pode verificá-la com a respectiva chave privada, divulgada abertamente.',
    resposta: false,
    explicacao: {
      resumo: 'Errado. As chaves estão invertidas: assina-se com a chave privada (secreta) e verifica-se com a chave pública (divulgada).',
      detalhada: 'No par de chaves assimétrico, a **chave privada** é secreta e fica sob controle exclusivo do titular; a **chave pública** é divulgada, normalmente por meio de um certificado digital.\n\nNa **assinatura digital**, o signatário calcula o hash do documento e o cifra com a **chave privada**. Qualquer pessoa verifica com a **chave pública**. Se a verificação der certo, tem-se autenticidade, integridade e não repúdio. Se a chave "pública" fosse usada para assinar, qualquer um poderia produzir a assinatura, e se a "privada" fosse divulgada, deixaria de ser privada.',
      dica: 'Chave privada nunca é divulgada. Se o item diz que a privada é pública, ou o contrário, está errado.'
    },
    fontes: [
      { titulo: 'NIST FIPS 186-5: Digital Signature Standard', url: 'https://csrc.nist.gov/pubs/fips/186-5/final' },
      { titulo: 'RFC 4949: Internet Security Glossary', url: 'https://www.rfc-editor.org/rfc/rfc4949' }
    ]
  },

  {
    id: 'inf-853', materia: 'informatica', assunto: 'Segurança da informação', tipo: 'certo-errado', estilo: 'CEBRASPE',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'O AES (Advanced Encryption Standard) é um algoritmo de criptografia assimétrica, no qual a mensagem é cifrada com uma chave pública e decifrada com uma chave privada distinta.',
    resposta: false,
    explicacao: {
      resumo: 'Errado. O AES é uma cifra simétrica de bloco: a mesma chave cifra e decifra.',
      detalhada: 'O **AES**, padronizado pelo NIST na FIPS 197, é uma **cifra simétrica de bloco** (blocos de 128 bits, chaves de 128, 192 ou 256 bits). Quem cifra e quem decifra usam a **mesma chave**, o que cria o desafio da distribuição segura dessa chave.\n\nExemplos de algoritmos **assimétricos**: RSA, ECDSA, Diffie-Hellman (acordo de chaves). Em protocolos como o TLS, usa-se criptografia assimétrica para autenticar e combinar uma chave de sessão, e criptografia simétrica (como AES) para cifrar o grande volume de dados, pois é muito mais rápida.',
      dica: 'Simétricos que costumam cair: AES, 3DES, ChaCha20 (e o antigo DES). Assimétricos: RSA, ECC, Diffie-Hellman.'
    },
    fontes: [
      { titulo: 'NIST FIPS 197: Advanced Encryption Standard', url: 'https://csrc.nist.gov/pubs/fips/197/final' },
      { titulo: 'CERT.br: Cartilha de Segurança para Internet', url: 'https://cartilha.cert.br/' }
    ]
  },

  {
    id: 'inf-854', materia: 'informatica', assunto: 'Segurança da informação', tipo: 'certo-errado', estilo: 'CEBRASPE',
    dificuldade: 3, objetivos: ['concursos-gerais', 'tribunais', 'estatais'],
    enunciado: 'Armazenar as senhas dos usuários como hash com sal (salt) individual dificulta ataques baseados em tabelas pré-calculadas (rainbow tables) e faz com que dois usuários com a mesma senha tenham valores de hash armazenados diferentes.',
    resposta: true,
    explicacao: {
      resumo: 'Certo. O sal é um valor aleatório único por senha, misturado antes do hash; isso inutiliza tabelas pré-calculadas e esconde senhas repetidas.',
      detalhada: 'Guardar senhas em texto puro é gravíssimo; guardar apenas o **hash simples** ainda é fraco, pois o atacante pode comparar com **tabelas pré-calculadas** de hashes de senhas comuns. O **sal** (salt) é um valor aleatório e único para cada usuário, combinado à senha antes do cálculo. Assim:\n\n- a mesma senha gera **hashes diferentes** para usuários diferentes;\n- uma tabela pré-calculada deixa de servir, pois cada sal exigiria uma tabela própria.\n\nO sal não é segredo; o que ele faz é obrigar o atacante a atacar cada hash separadamente. Por isso, recomenda-se também usar funções de derivação **lentas e configuráveis** (como Argon2id, scrypt ou bcrypt) em vez de hashes rápidos como SHA-256 puro.',
      dica: 'Sal: aleatório, único por senha, não precisa ser secreto. Ele combate rainbow tables e impede perceber senhas repetidas.'
    },
    fontes: [
      { titulo: 'OWASP Password Storage Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html' },
      { titulo: 'NIST SP 800-63B', url: 'https://pages.nist.gov/800-63-4/sp800-63b.html' }
    ]
  },

  {
    id: 'inf-855', materia: 'informatica', assunto: 'Segurança da informação', tipo: 'certo-errado', estilo: 'CEBRASPE',
    dificuldade: 3, objetivos: ['concursos-gerais', 'tribunais', 'estatais'],
    enunciado: 'As diretrizes de identidade digital do NIST (SP 800-63B) recomendam que as organizações obriguem os usuários a trocar a senha periodicamente, por exemplo a cada noventa dias, mesmo na ausência de qualquer indício de comprometimento.',
    resposta: false,
    explicacao: {
      resumo: 'Errado. O NIST desaconselha a expiração periódica obrigatória; a troca deve ser exigida quando há evidência de comprometimento.',
      detalhada: 'A expiração periódica leva os usuários a criarem variações previsíveis da senha anterior ("Senha1", "Senha2"...), o que **enfraquece** a segurança. Por isso, a revisão atual do NIST SP 800-63B diz que o verificador **não deve exigir troca periódica**; a troca obrigatória cabe quando há **evidência de que o autenticador foi comprometido**.\n\nO documento também orienta a privilegiar o **comprimento** (mínimo de 15 caracteres quando a senha é o único fator), a não impor regras de composição (obrigar maiúscula, símbolo etc.), a **barrar senhas conhecidas por vazamentos** e a usar **MFA**.\n\nAtenção: muitas políticas corporativas e normas antigas ainda exigem troca periódica, e algumas questões podem cobrar a regra da política interna. Aqui, o item cita expressamente a recomendação do NIST.',
      dica: 'NIST atual: sem expiração periódica obrigatória, sem regras de composição, com checagem contra senhas vazadas e senhas longas.'
    },
    fontes: [
      { titulo: 'NIST SP 800-63B: Authentication and Authenticator Management', url: 'https://pages.nist.gov/800-63-4/sp800-63b.html' },
      { titulo: 'CERT.br: Cartilha de Segurança para Internet', url: 'https://cartilha.cert.br/' }
    ]
  },

  {
    id: 'inf-856', materia: 'informatica', assunto: 'Engenharia social', tipo: 'certo-errado', estilo: 'CEBRASPE',
    dificuldade: 1, objetivos: ['concursos-gerais', 'tribunais', 'policial', 'bancarios'],
    enunciado: 'O phishing é uma técnica de engenharia social em que o atacante se passa por uma entidade confiável para induzir a vítima a fornecer informações ou executar uma ação, explorando o fator humano e não, necessariamente, uma falha técnica de software.',
    resposta: true,
    explicacao: {
      resumo: 'Certo. A engenharia social explora a confiança, a urgência e a curiosidade das pessoas; o phishing é seu exemplo mais comum.',
      detalhada: 'A **engenharia social** manipula pessoas, não sistemas. O **phishing** envia mensagens (e-mail, SMS, aplicativos, redes sociais) que imitam bancos, órgãos públicos, lojas ou colegas, com um pretexto que desperta medo, urgência ou ganância, e leva a vítima a clicar em um link falso, abrir um anexo ou informar credenciais.\n\nPor depender do comportamento humano, a defesa combina **conscientização**, verificação pelo canal oficial, **MFA** (que reduz o dano de uma senha roubada) e filtros técnicos de e-mail. Variações: **spear phishing** (alvo específico), **whaling** (executivos), **vishing** (voz) e **smishing** (SMS).',
      dica: 'Engenharia social = fator humano. Se o item diz que "exige exploração de falha de software", desconfie.'
    },
    fontes: [
      { titulo: 'CERT.br: Cartilha de Segurança para Internet', url: 'https://cartilha.cert.br/' },
      { titulo: 'CERT.br', url: 'https://www.cert.br/' }
    ]
  },

  {
    id: 'inf-857', materia: 'informatica', assunto: 'Segurança da informação', tipo: 'certo-errado', estilo: 'CEBRASPE',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'No registro de eventos de segurança do Windows, o evento de ID 4624 indica uma tentativa de logon que falhou, enquanto o evento de ID 4625 indica um logon concluído com sucesso.',
    resposta: false,
    explicacao: {
      resumo: 'Errado. O evento 4624 registra logon bem-sucedido, e o 4625, falha de logon. O item inverteu os dois.',
      detalhada: 'No log **Segurança** do Visualizador de Eventos (Event Viewer):\n\n- **4624**: uma conta foi conectada com sucesso (logon bem-sucedido);\n- **4625**: falha no logon de uma conta;\n- **4634 / 4647**: logoff;\n- **4672**: privilégios especiais atribuídos a um novo logon.\n\nA análise de vários eventos **4625** seguidos de um **4624** para a mesma conta pode indicar tentativa de adivinhação de senha que acabou dando certo. O campo **tipo de logon** (por exemplo, 2 interativo, 3 rede, 10 remoto) ajuda a entender como o acesso ocorreu. Esses registros só existem se a **política de auditoria** estiver habilitada.',
      dica: 'Na análise de logs, muitos 4625 seguidos de um 4624 para a mesma conta sugerem adivinhação de senha que deu certo; sempre confira o tipo de logon.'
    },
    fontes: [
      { titulo: 'Microsoft Learn: evento 4624', url: 'https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/event-4624' },
      { titulo: 'Microsoft Learn: evento 4625', url: 'https://learn.microsoft.com/pt-br/windows/security/threat-protection/auditing/event-4625' }
    ]
  },

  {
    id: 'inf-858', materia: 'informatica', assunto: 'Forense computacional', tipo: 'certo-errado', estilo: 'CEBRASPE',
    dificuldade: 3, objetivos: ['policial', 'tribunais', 'concursos-gerais'],
    enunciado: 'Na investigação de um incidente que envolve vários sistemas, a correlação dos registros (logs) em uma linha do tempo depende da sincronização dos relógios dos equipamentos, por exemplo por meio do protocolo NTP, e do conhecimento do fuso horário em que cada registro foi gerado.',
    resposta: true,
    explicacao: {
      resumo: 'Certo. Sem relógios sincronizados e fuso conhecido, a ordem real dos eventos entre sistemas diferentes pode ficar errada.',
      detalhada: 'Uma investigação reconstrói **o que aconteceu e em que ordem**. Se um servidor registra em UTC, outro em horário local e um terceiro tem o relógio adiantado em alguns minutos, a sequência dos eventos fica distorcida e pode levar a conclusões erradas ou fragilizar a prova.\n\nBoas práticas:\n\n- manter os equipamentos sincronizados por **NTP**;\n- preferir registrar em **UTC**;\n- ao coletar evidência, **anotar a hora do sistema, o fuso horário e a diferença para uma fonte confiável** (o RFC 3227 recomenda esse registro);\n- centralizar logs em um servidor protegido contra alteração.',
      dica: 'Se a questão perguntar o que é indispensável para correlacionar logs entre sistemas, pense em relógio sincronizado e fuso horário.'
    },
    fontes: [
      { titulo: 'RFC 3227: Guidelines for Evidence Collection and Archiving', url: 'https://www.rfc-editor.org/rfc/rfc3227' },
      { titulo: 'NIST SP 800-86', url: 'https://csrc.nist.gov/pubs/sp/800/86/final' }
    ]
  },

  {
    id: 'inf-859', materia: 'informatica', assunto: 'Segurança da informação', tipo: 'certo-errado', estilo: 'CEBRASPE',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais', 'bancarios', 'estatais'],
    enunciado: 'De acordo com a Lei nº 13.709/2018 (LGPD), as medidas de segurança dos agentes de tratamento devem ser observadas desde a fase de concepção do produto ou do serviço até a sua execução, e o dever de garantir a segurança da informação relativa aos dados pessoais persiste mesmo após o término do tratamento.',
    resposta: true,
    explicacao: {
      resumo: 'Certo. Os arts. 46, § 2º, e 47 da LGPD tratam, respectivamente, da segurança desde a concepção e da permanência do dever após o tratamento.',
      detalhada: 'O **art. 46** impõe aos agentes de tratamento (controlador e operador) a adoção de medidas de segurança, técnicas e administrativas, aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou tratamento inadequado. O **§ 2º** determina que essas medidas sejam observadas **desde a fase de concepção do produto ou do serviço até a sua execução**, ideia conhecida como **privacy by design**.\n\nO **art. 47** estende a obrigação a qualquer pessoa que intervenha em uma das fases do tratamento e a mantém **mesmo após o término** do tratamento. O **art. 49** exige que os sistemas sejam estruturados para atender aos requisitos de segurança, às boas práticas e aos princípios da lei.',
      dica: 'LGPD, segurança: arts. 46 a 49. Memorize "desde a concepção até a execução" e "mesmo após o término".'
    },
    fontes: [
      { titulo: 'Lei nº 13.709/2018 (LGPD), arts. 46 a 49', url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm' },
      { titulo: 'ANPD', url: 'https://www.gov.br/anpd/pt-br' }
    ]
  },

  {
    id: 'inf-860', materia: 'informatica', assunto: 'Segurança da informação', tipo: 'certo-errado', estilo: 'CEBRASPE',
    dificuldade: 2, objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'Em um teste de intrusão contratado, ao identificar sistemas vizinhos que parecem vulneráveis e não constam do escopo acordado, a equipe executora pode ampliar os testes por conta própria, pois a autorização do contratante abrange toda a rede da organização.',
    resposta: false,
    explicacao: {
      resumo: 'Errado. A autorização cobre apenas o escopo formalmente acordado; testar fora dele é atividade não autorizada.',
      detalhada: 'O pentest só é legítimo dentro do que foi **autorizado por escrito**: alvos, técnicas, janelas de tempo e limites. Sistemas fora do escopo podem pertencer a **terceiros** (provedores, parceiros) ou ter impacto crítico, e a equipe não tem autorização para testá-los. Ao encontrar algo fora do escopo, o procedimento correto é **parar, registrar e comunicar** o contratante, que decide se amplia o escopo mediante aditivo formal.\n\nExceder o escopo pode caracterizar invasão de dispositivo informático (art. 154-A do Código Penal) e gerar responsabilidade contratual e civil.',
      dica: 'Na ética do pentest, nada se presume: o que não está no escopo escrito não está autorizado.'
    },
    fontes: [
      { titulo: 'Código Penal, art. 154-A', url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm' },
      { titulo: 'OWASP: Web Security Testing Guide', url: 'https://owasp.org/www-project-web-security-testing-guide/' }
    ]
  }

] });
