/* Conhecimentos gerais: Informática, História, Geografia e Biologia.
   Questões inéditas, escritas no estilo das bancas; textos-base próprios ou trechos de documentos públicos com a origem citada. */
(function () {
  'use strict';

  var CERT = { titulo: 'Cartilha de Segurança para Internet (CERT.br)', url: 'https://cartilha.cert.br/' };
  var MS = { titulo: 'Suporte da Microsoft (português)', url: 'https://support.microsoft.com/pt-br' };
  var LO = { titulo: 'Ajuda do LibreOffice', url: 'https://help.libreoffice.org/' };

  /* ======================= INFORMÁTICA ======================= */
  var informatica = [
    {
      id: 'inf-001',
      materia: 'informatica',
      assunto: 'Segurança da informação',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 1,
      objetivos: ['concursos-gerais', 'policial', 'tribunais'],
      enunciado: 'Ransomware é um tipo de código malicioso que torna inacessíveis os dados armazenados em um equipamento, geralmente por meio de criptografia, e exige o pagamento de um resgate para restabelecer o acesso; manter cópias de segurança atualizadas, guardadas fora do alcance do equipamento infectado, é uma das principais formas de reduzir os danos desse tipo de ataque.',
      resposta: true,
      explicacao: {
        resumo: 'Certo. O ransomware sequestra os dados (em geral cifrando-os) e cobra resgate; um backup atualizado e desconectado permite recuperar os arquivos sem depender do criminoso.',
        detalhada: 'O nome vem do inglês **ransom**, "resgate". O ransomware age como um sequestrador digital: depois de infectar o equipamento, ele **criptografa** os arquivos (documentos, fotos, bancos de dados) ou bloqueia o próprio acesso ao sistema e exibe uma mensagem exigindo pagamento, quase sempre em criptomoeda, em troca da chave que desfaria o bloqueio. A Cartilha do CERT.br distingue o tipo que impede o acesso ao equipamento do tipo que impede o acesso aos dados, sendo este o mais comum.\n\nA defesa mais eficaz contra a **perda** dos dados é o **backup**. Se existe uma cópia íntegra e recente, basta limpar ou reinstalar o sistema e restaurar os arquivos. Mas há um detalhe que as bancas adoram: o backup precisa estar **fora do alcance** do equipamento infectado. Um disco externo que fica sempre conectado ou uma pasta de rede mapeada podem ser cifrados junto com o resto. Por isso se recomenda manter ao menos uma cópia **desconectada** (offline) ou em serviço que guarde versões anteriores dos arquivos.\n\nO backup não impede a infecção; ele reduz o dano. A prevenção envolve outras camadas:\n- manter sistema operacional e programas **atualizados**, fechando as vulnerabilidades exploradas pelo código;\n- usar antimalware e firewall;\n- desconfiar de anexos e links recebidos por e-mail ou mensagem, já que o **phishing** é uma das principais portas de entrada do ransomware.\n\nPagar o resgate não é recomendado: não há garantia de que a chave será entregue, e o pagamento financia novos ataques. Esse tema se conecta diretamente aos pilares da segurança da informação: o ransomware ataca sobretudo a **disponibilidade** dos dados, e, quando os criminosos também copiam e ameaçam divulgar os arquivos, atinge ainda a **confidencialidade**.',
        dica: 'O CEBRASPE costuma trocar o conceito com o de spyware (que espiona, sem bloquear) ou afirmar que pagar o resgate "garante" a recuperação dos dados. Ambas as versões estão erradas.'
      },
      fontes: [CERT, { titulo: 'Ransomware (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Ransomware' }]
    },
    {
      id: 'inf-002',
      materia: 'informatica',
      assunto: 'Segurança da informação',
      tipo: 'multipla',
      estilo: 'FGV',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'tribunais', 'estatais'],
      enunciado: 'Em um órgão público, a equipe de suporte observou que um programa malicioso se espalhou por dezenas de computadores da rede interna em poucas horas. A análise mostrou que o código enviava cópias de si mesmo de um computador para outro explorando uma vulnerabilidade do sistema operacional, sem que nenhum usuário precisasse abrir arquivo ou executar programa algum, e sem se anexar a outros arquivos. O tráfego gerado pelas cópias deixou a rede lenta.\n\nO tipo de código malicioso descrito é o',
      alternativas: [
        'vírus, pois depende de um arquivo hospedeiro para se propagar.',
        'worm, pois se propaga automaticamente pela rede, explorando vulnerabilidades, sem precisar de hospedeiro.',
        'cavalo de troia, pois se disfarça de programa legítimo para ser instalado pelo próprio usuário.',
        'spyware, pois monitora as atividades do usuário e envia as informações a terceiros.',
        'rootkit, pois esconde a presença do invasor e de outros códigos maliciosos no sistema.'
      ],
      resposta: 1,
      explicacao: {
        resumo: 'Letra B. Propagação automática pela rede, por exploração de vulnerabilidade, sem hospedeiro e sem ação do usuário é a assinatura do worm.',
        detalhada: 'Para acertar questões sobre **códigos maliciosos** (malware), o segredo é olhar para dois aspectos: **como o código se propaga** e **o que ele faz** depois de instalado. O enunciado dá três pistas sobre a propagação: o programa (1) envia **cópias de si mesmo** de computador para computador, (2) **explora vulnerabilidades** e (3) não precisa de **hospedeiro** nem de que alguém o execute. Essas três características juntas definem o **worm** (verme).\n\nCompare com o **vírus**: ele também se replica, mas se **anexa a outros arquivos ou programas** (o hospedeiro) e depende de que esse arquivo infectado seja **executado** para entrar em ação. É por isso que um vírus costuma chegar em anexo de e-mail ou pendrive. O worm, ao contrário, é autônomo. Uma consequência típica do worm, citada na questão, é o **consumo intenso de recursos de rede**, já que milhares de cópias trafegam ao mesmo tempo.\n\nAs demais alternativas descrevem malwares que não se espalham sozinhos dessa forma:\n- o **cavalo de troia** chega disfarçado de programa útil (um jogo, um "atualizador") e é instalado pelo próprio usuário enganado;\n- o **spyware** tem como objetivo espionar (há variações como keylogger, que registra teclas, e screenlogger, que captura a tela);\n- o **rootkit** é um conjunto de técnicas para **esconder** a presença do invasor, não para se propagar.\n\nUma conexão útil: worms costumam ser usados para montar **botnets**, redes de computadores infectados (bots) controlados remotamente, que depois podem ser empregadas em ataques de negação de serviço ou no envio de spam. A melhor prevenção contra worms é manter o sistema **atualizado**, pois eles dependem de falhas ainda não corrigidas, e usar firewall para limitar o tráfego entre máquinas.',
        alternativas: [
          'Errada. O vírus precisa de hospedeiro e de execução; o texto diz justamente que o código não se anexava a arquivos nem dependia do usuário.',
          'Correta. O worm se replica e se propaga sozinho pela rede, explorando vulnerabilidades, e costuma degradar o desempenho da rede.',
          'Errada. O cavalo de troia depende de o usuário instalá-lo, enganado pela aparência de programa legítimo.',
          'Errada. O spyware é definido pelo que faz (espionar), não por se propagar automaticamente pela rede.',
          'Errada. O rootkit serve para ocultar a invasão e outros códigos; não é um mecanismo de propagação.'
        ],
        dica: 'Pense em "worm = autônomo, rede, vulnerabilidade" e "vírus = hospedeiro + execução". Se a questão disser que o código "não precisa ser executado pelo usuário", desconfie de vírus.'
      },
      fontes: [CERT, { titulo: 'Worm (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Worm' }]
    },
    {
      id: 'inf-003',
      materia: 'informatica',
      assunto: 'Segurança da informação',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 3,
      objetivos: ['concursos-gerais', 'tribunais', 'bancarios'],
      enunciado: 'Em uma política de cópias de segurança, o backup diferencial copia apenas os arquivos criados ou modificados desde o último backup de qualquer tipo, seja ele completo ou incremental; por isso, na restauração, é necessário aplicar o último backup completo e todos os backups diferenciais feitos depois dele, na ordem em que foram gerados.',
      resposta: false,
      explicacao: {
        resumo: 'Errado. O item descreve o backup incremental. O diferencial copia tudo o que mudou desde o último backup completo, e a restauração usa só o último completo e o último diferencial.',
        detalhada: 'Existem três tipos clássicos de backup, e a diferença entre eles está no **ponto de referência** usado para decidir o que copiar:\n- **completo (total ou normal)**: copia todos os arquivos selecionados, tenham sido alterados ou não;\n- **incremental**: copia apenas o que mudou desde o **último backup de qualquer tipo** (completo ou incremental);\n- **diferencial**: copia tudo o que mudou desde o **último backup completo**.\n\nO item atribuiu ao diferencial a definição do incremental. Veja um exemplo com backup completo no domingo. Na segunda, o incremental copia o que mudou na segunda; na terça, o que mudou só na terça; e assim por diante: cada cópia é pequena e rápida. Já o diferencial de segunda copia o que mudou na segunda; o de terça copia o que mudou na segunda **e** na terça; o de quarta, tudo desde domingo. Ou seja, o diferencial **cresce** ao longo da semana.\n\nA consequência aparece na **restauração**. Se o disco falhar na quinta:\n- com incremental, é preciso o completo de domingo **mais todos os incrementais** (segunda, terça e quarta), na ordem; se um deles estiver corrompido, a cadeia se quebra;\n- com diferencial, basta o completo de domingo **mais o último diferencial** (o de quarta).\n\nResumo do custo-benefício: o incremental é mais rápido de **fazer** e ocupa menos espaço; o diferencial é mais simples e rápido de **restaurar**. Em ferramentas tradicionais, isso é controlado pelo **atributo de arquivamento** dos arquivos: o backup completo e o incremental desmarcam esse atributo, e o diferencial não desmarca, por isso continua copiando os mesmos arquivos até o próximo completo.',
        dica: 'Memorize: "Diferencial = Desde o completo". "Incremental = desde o último, qualquer que seja". Na restauração: incremental pede todos; diferencial pede só o último.'
      },
      fontes: [CERT, { titulo: 'Cópia de segurança (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Backup' }]
    },
    {
      id: 'inf-004',
      materia: 'informatica',
      assunto: 'Redes e internet',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'policial', 'bancarios'],
      enunciado: 'Ao acessar o site de um banco, um usuário verificou que o endereço começava com https:// e que o navegador exibia o ícone de cadeado. Nessa situação, é correto concluir que o site é legítimo e pertence de fato ao banco, pois o protocolo HTTPS impede que páginas falsas obtenham certificado digital.',
      resposta: false,
      explicacao: {
        resumo: 'Errado. O HTTPS e o cadeado indicam que a conexão com aquele domínio é cifrada, mas não garantem que o site seja idôneo: páginas falsas também podem ter certificado válido.',
        detalhada: 'O **HTTPS** é o HTTP protegido por uma camada de segurança (**TLS**, sucessora do antigo SSL). Ele oferece três coisas: **confidencialidade** (os dados trafegam cifrados, e quem intercepta a comunicação não consegue lê-los), **integridade** (alterações no caminho são detectadas) e **autenticação do servidor em relação ao domínio** (o certificado comprova que você está falando com quem controla aquele endereço). A porta padrão do HTTPS é a 443; a do HTTP, a 80.\n\nO erro do item está em confundir "conexão segura" com "site confiável". Um golpista pode registrar um domínio parecido com o do banco, como uma variação com letra trocada, e obter para ele um certificado digital perfeitamente válido. O navegador mostrará o cadeado, porque a conexão com **aquele domínio falso** está de fato cifrada. O cadeado diz que ninguém está bisbilhotando a conversa; não diz que você está conversando com a pessoa certa.\n\nPor isso a Cartilha do CERT.br orienta a:\n- **digitar o endereço** do banco diretamente ou usar o aplicativo oficial, em vez de clicar em links recebidos;\n- conferir com atenção o **nome do domínio** na barra de endereços;\n- desconfiar de mensagens com urgência, prêmios ou ameaças de bloqueio, típicas de **phishing**.\n\nConexão com outro conteúdo: no **pharming**, o criminoso altera a resolução de nomes (DNS) para que, mesmo digitando o endereço correto, a vítima seja levada a um servidor falso. Nesse caso, o navegador normalmente acusa erro de certificado, pois o servidor falso não tem certificado válido para o domínio verdadeiro, mais um motivo para nunca ignorar alertas de certificado.',
        dica: 'Cadeado = canal cifrado, não "site do bem". Itens que dizem que HTTPS "garante" a legitimidade, a ausência de vírus ou a honestidade do site estão errados.'
      },
      fontes: [CERT, { titulo: 'HTTPS (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/HTTPS' }]
    },
    {
      id: 'inf-005',
      materia: 'informatica',
      assunto: 'Redes e internet',
      tipo: 'multipla',
      estilo: 'Cesgranrio',
      dificuldade: 1,
      objetivos: ['bancarios', 'estatais', 'concursos-gerais'],
      enunciado: 'Quando um usuário digita www.exemplo.com.br na barra de endereços do navegador, o computador precisa descobrir o endereço IP do servidor que hospeda o site antes de estabelecer a conexão. O serviço responsável por traduzir nomes de domínio em endereços IP é o',
      alternativas: ['DHCP', 'FTP', 'SMTP', 'DNS', 'HTTP'],
      resposta: 3,
      explicacao: {
        resumo: 'Letra D. O DNS (Domain Name System) funciona como uma "agenda" da internet, convertendo nomes de domínio em endereços IP.',
        detalhada: 'Na internet, os computadores se localizam por **endereços IP** (números como 200.160.4.6 no IPv4, ou sequências hexadecimais mais longas no IPv6). Como seria impraticável memorizar números, criou-se o **DNS (Domain Name System)**, que traduz nomes fáceis de lembrar em endereços IP. É como a agenda do celular: você procura "Maria" e o aparelho disca o número.\n\nO DNS é **hierárquico e distribuído**. Para resolver www.exemplo.com.br, consultam-se, se necessário, os servidores da **raiz**, depois os responsáveis pelo domínio **.br**, depois os de **.com.br** e, por fim, o servidor que responde por **exemplo.com.br**. Para não repetir esse caminho a cada acesso, as respostas ficam guardadas temporariamente em **cache** no computador, no roteador e nos servidores do provedor. O DNS usa normalmente a **porta 53**.\n\nAs outras siglas são protocolos ou serviços com funções diferentes:\n- **DHCP** atribui automaticamente endereço IP, máscara, gateway e servidores DNS aos dispositivos que entram na rede;\n- **FTP** transfere arquivos entre computadores;\n- **SMTP** envia mensagens de correio eletrônico;\n- **HTTP** transfere as páginas web depois que o endereço já foi descoberto.\n\nConexão com segurança: como o DNS é a "agenda" da internet, adulterá-lo permite redirecionar vítimas para sites falsos mesmo quando elas digitam o endereço correto. Esse golpe é o **pharming**, e por isso é importante manter roteadores atualizados e com senha de administração trocada.',
        alternativas: [
          'Errada. O DHCP distribui configurações de rede (como o IP do próprio dispositivo), mas não traduz nomes de domínio.',
          'Errada. O FTP é usado para transferir arquivos.',
          'Errada. O SMTP é o protocolo de envio de e-mails.',
          'Correta. O DNS resolve nomes de domínio em endereços IP.',
          'Errada. O HTTP transporta as páginas, mas só depois que o DNS informou o endereço IP do servidor.'
        ],
        dica: 'DNS = Nome vira Número. DHCP = o dispositivo ganha um IP ao entrar na rede. As bancas gostam de colocar as duas siglas lado a lado.'
      },
      fontes: [{ titulo: 'Domain Name System (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Domain_Name_System' }, CERT]
    },
    {
      id: 'inf-006',
      materia: 'informatica',
      assunto: 'Redes e internet',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'policial', 'tribunais'],
      enunciado: 'No serviço de correio eletrônico, o protocolo SMTP é utilizado no envio de mensagens, ao passo que os protocolos POP3 e IMAP são utilizados para que o programa cliente acesse as mensagens recebidas; o IMAP, diferentemente do POP3 em sua configuração típica, mantém as mensagens no servidor, o que permite consultá-las de forma sincronizada a partir de vários dispositivos.',
      resposta: true,
      explicacao: {
        resumo: 'Certo. SMTP envia; POP3 e IMAP recebem. O POP3 tradicionalmente baixa as mensagens para o dispositivo, e o IMAP as mantém no servidor, sincronizando pastas e status entre aparelhos.',
        detalhada: 'O correio eletrônico funciona em etapas, cada uma com seu protocolo. Quando você clica em "Enviar", o programa cliente entrega a mensagem ao seu servidor de e-mail usando **SMTP** (Simple Mail Transfer Protocol), e os servidores também conversam entre si por SMTP até a mensagem chegar ao servidor do destinatário. Lá ela fica guardada na caixa postal.\n\nPara **ler** a mensagem, o destinatário usa outro protocolo:\n- **POP3**: na configuração típica, **baixa** as mensagens para o dispositivo e as **apaga do servidor**. Funciona bem para quem usa um único computador, mas, se você ler no notebook, a mensagem pode não aparecer depois no celular.\n- **IMAP**: as mensagens **permanecem no servidor**, e o cliente apenas exibe e sincroniza o conteúdo. Pastas, mensagens lidas, excluídas ou movidas aparecem do mesmo jeito em todos os dispositivos.\n\nPortas mais cobradas: SMTP 25 (e 587 para envio autenticado pelo cliente), POP3 110 (995 com TLS), IMAP 143 (993 com TLS). Quando você usa **webmail**, o navegador conversa com o servidor por **HTTP/HTTPS**; o SMTP continua sendo usado entre os servidores de e-mail.\n\nUm jeito de fixar: "SMTP = Sua Mensagem Tá Partindo", e o IMAP é o protocolo da era dos vários dispositivos, porque o servidor é a "fonte da verdade" da caixa postal.',
        dica: 'Se o item disser que o SMTP serve para receber, ou que o IMAP apaga as mensagens do servidor por padrão, está errado.'
      },
      fontes: [{ titulo: 'Simple Mail Transfer Protocol (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol' }, { titulo: 'Internet Message Access Protocol (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Internet_Message_Access_Protocol' }]
    },
    {
      id: 'inf-007',
      materia: 'informatica',
      assunto: 'Planilhas (Excel e Calc)',
      tipo: 'multipla',
      estilo: 'FCC',
      dificuldade: 3,
      objetivos: ['tribunais', 'concursos-gerais', 'bancarios'],
      enunciado: 'Em uma planilha do Microsoft Excel, em português, a célula D2 contém a fórmula =B2*$C$1+A$1. Essa célula foi copiada (Ctrl+C) e colada (Ctrl+V) na célula E5. A fórmula resultante em E5 será',
      alternativas: ['=B2*$C$1+A$1', '=C5*$D$4+B$4', '=B5*$C$1+A$1', '=C5*$C$1+A$4', '=C5*$C$1+B$1'],
      resposta: 4,
      explicacao: {
        resumo: 'Letra E. De D2 para E5 a fórmula anda 1 coluna e 3 linhas: B2 vira C5, $C$1 não muda e A$1 vira B$1.',
        detalhada: 'Ao **copiar** uma fórmula, o Excel e o LibreOffice Calc ajustam as referências de acordo com o **deslocamento** entre a célula de origem e a de destino. O cifrão ($) "trava" a parte que vem logo depois dele: **$C** trava a coluna, **$1** trava a linha.\n\nPrimeiro, calcule o deslocamento: de **D2** para **E5**, a coluna vai de D para E (**+1 coluna**) e a linha vai de 2 para 5 (**+3 linhas**). Agora aplique a cada referência:\n- **B2** (relativa): coluna B + 1 = C; linha 2 + 3 = 5. Resultado: **C5**.\n- **$C$1** (absoluta): coluna e linha travadas. Resultado: **$C$1**.\n- **A$1** (mista, linha travada): a coluna é livre, A + 1 = B; a linha fica 1. Resultado: **B$1**.\n\nFórmula final: **=C5*$C$1+B$1**. Um uso prático disso: em uma tabela de preços em que C1 guarda a cotação do dólar, travamos $C$1 para que todas as linhas usem a mesma cotação, enquanto B2, B3, B4... variam linha a linha.\n\nDois detalhes que caem em prova. Primeiro, a tecla **F4** (no Excel) ou **Shift+F4** (no Calc), com o cursor sobre a referência, alterna entre A1, $A$1, A$1 e $A1. Segundo, **recortar e colar** (Ctrl+X) **não** ajusta as referências da fórmula movida: ela continua apontando para as mesmas células.',
        alternativas: [
          'Errada. Essa é a fórmula original; ela só permaneceria igual se todas as referências fossem absolutas ou se a célula tivesse sido recortada, e não copiada.',
          'Errada. Ajustou também as partes travadas por $, o que não acontece.',
          'Errada. Ajustou só as linhas e esqueceu o deslocamento de uma coluna em B2 e em A$1.',
          'Errada. Em A$1 a linha está travada e a coluna é livre; o certo é B$1, e não A$4.',
          'Correta. B2 vira C5, $C$1 permanece e A$1 vira B$1.'
        ],
        dica: 'Sempre calcule o deslocamento (colunas e linhas) antes de mexer nas referências, e lembre: o $ trava apenas o que vem imediatamente depois dele.'
      },
      fontes: [MS, LO, { titulo: 'Planilha eletrônica (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Planilha_eletr%C3%B4nica' }]
    },
    {
      id: 'inf-008',
      materia: 'informatica',
      assunto: 'Planilhas (Excel e Calc)',
      tipo: 'multipla',
      estilo: 'Vunesp',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'estatais', 'policial'],
      textoBase: 'Considere a planilha a seguir, elaborada no Microsoft Excel ou no LibreOffice Calc, ambos em português, com as notas de uma aluna:\n\n- A1: Aluna | B1: Nota 1 | C1: Nota 2 | D1: Nota 3\n- A2: Carla | B2: 8 | C2: 5 | D2: 6,5\n\nNa célula E2, foi digitada a fórmula:\n\n=SE(SOMA(B2:D2)/3>=7;"Aprovado";SE(SOMA(B2:D2)/3>=5;"Recuperação";"Reprovado"))',
      enunciado: 'Após a confirmação da fórmula com a tecla Enter, o conteúdo exibido em E2 será',
      alternativas: ['Recuperação', 'Aprovado', 'Reprovado', '6,5', '#VALOR!'],
      resposta: 0,
      explicacao: {
        resumo: 'Letra A. A soma é 19,5, a média é 6,5; o primeiro teste (>=7) é falso e o segundo (>=5) é verdadeiro, então aparece "Recuperação".',
        detalhada: 'A função **SE** tem a estrutura **=SE(teste; valor_se_verdadeiro; valor_se_falso)**. Quando colocamos um SE dentro de outro (SE **aninhado**), criamos várias faixas de decisão, avaliadas da esquerda para a direita.\n\nResolva por partes:\n- **SOMA(B2:D2)**: o sinal de dois-pontos indica o **intervalo** de B2 até D2, ou seja, 8 + 5 + 6,5 = **19,5**.\n- **19,5/3 = 6,5** (a média das três notas).\n- Primeiro teste: 6,5 >= 7? **Falso**. Então a função vai para o valor_se_falso, que é o segundo SE.\n- Segundo teste: 6,5 >= 5? **Verdadeiro**. Resultado: o texto **"Recuperação"**.\n\nRepare que os textos aparecem entre aspas na fórmula, mas a célula exibe apenas o conteúdo, sem as aspas. A fórmula poderia ser escrita de modo mais enxuto com a função **MÉDIA(B2:D2)**, que faz soma e divisão de uma só vez.\n\nA pegadinha clássica está no separador. Em português, o **ponto e vírgula** separa argumentos, e os **dois-pontos** indicam intervalo. Se a fórmula fosse SOMA(B2;D2), seriam somadas apenas as células B2 e D2 (8 + 6,5 = 14,5), a "média" seria cerca de 4,83, e o resultado passaria a ser "Reprovado". Uma única troca de símbolo muda a resposta inteira.',
        alternativas: [
          'Correta. A média 6,5 não alcança 7, mas é maior ou igual a 5.',
          'Errada. Seria o resultado só se a média fosse maior ou igual a 7.',
          'Errada. Seria o resultado se a média fosse menor que 5, o que ocorreria, por exemplo, com SOMA(B2;D2).',
          'Errada. O valor 6,5 é calculado internamente, mas a função SE devolve um dos textos, não o número.',
          'Errada. Não há erro: todas as células contêm números e a sintaxe está correta.'
        ],
        dica: 'Dois-pontos (:) = "até"; ponto e vírgula (;) = "e". Em SE aninhado, pare no primeiro teste verdadeiro.'
      },
      fontes: [MS, LO]
    },
    {
      id: 'inf-009',
      materia: 'informatica',
      assunto: 'Planilhas (Excel e Calc)',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['bancarios', 'concursos-gerais', 'tribunais'],
      enunciado: 'Em uma planilha do Excel, em português, o intervalo A2:C200 contém, na coluna A, códigos de produtos sem repetição; na coluna B, os nomes; e, na coluna C, os preços. Nessa situação, a fórmula =PROCV(1050;A2:C200;3;FALSO) retorna o preço do produto de código 1050, caso ele exista, pois procura o valor na primeira coluna do intervalo e devolve o conteúdo da terceira coluna da mesma linha, exigindo correspondência exata.',
      resposta: true,
      explicacao: {
        resumo: 'Certo. O PROCV busca 1050 na primeira coluna de A2:C200 e devolve o valor da 3ª coluna do intervalo (C) na linha encontrada; FALSO exige correspondência exata.',
        detalhada: 'O **PROCV** (procura vertical) é a função de busca mais cobrada em concursos. Sua sintaxe é **=PROCV(valor_procurado; matriz_tabela; núm_índice_coluna; [procurar_intervalo])**:\n- **valor_procurado**: o que se busca (aqui, 1050);\n- **matriz_tabela**: o intervalo onde buscar (A2:C200); a busca é feita **sempre na primeira coluna** desse intervalo;\n- **núm_índice_coluna**: de qual coluna **do intervalo** vem a resposta (3 = terceira coluna, que é a C);\n- **procurar_intervalo**: **FALSO** (ou 0) exige valor **exato**; **VERDADEIRO** (ou 1, ou omitido) aceita correspondência aproximada e pressupõe a primeira coluna em **ordem crescente**.\n\nNo caso, a função percorre a coluna A até achar 1050 e devolve o que estiver na coluna C da mesma linha: o preço. Se o código não existir, o resultado é o erro **#N/D** (não disponível). No LibreOffice Calc, a função tem o mesmo nome e funciona da mesma forma, com o quarto argumento indicando se a primeira coluna está ordenada (0 para busca exata).\n\nAtenção a dois pontos de prova. O índice de coluna é contado **a partir do início do intervalo**, não da letra da planilha: em =PROCV(x;C2:F50;2;0), o 2 corresponde à coluna D. E o PROCV **não olha para a esquerda**: ele só devolve colunas à direita da coluna de busca. Para buscas mais flexíveis, combina-se **ÍNDICE** com **CORRESP**. Existe também o **PROCH**, que faz a busca na horizontal (primeira linha do intervalo).',
        dica: 'Esqueceu o FALSO no último argumento? O padrão é busca aproximada, que pode devolver um valor errado sem nenhum aviso se a coluna não estiver ordenada.'
      },
      fontes: [MS, LO]
    },
    {
      id: 'inf-010',
      materia: 'informatica',
      assunto: 'Sistemas operacionais',
      tipo: 'multipla',
      estilo: 'Cesgranrio',
      dificuldade: 1,
      objetivos: ['bancarios', 'estatais', 'concursos-gerais'],
      enunciado: 'Um escriturário precisa se afastar por alguns minutos de sua estação de trabalho com Windows e quer impedir que outra pessoa use a sessão aberta, sem fechar os programas nem encerrar a sessão. O atalho de teclado que bloqueia o computador imediatamente, exigindo senha ou outro método de entrada para voltar à área de trabalho, é',
      alternativas: ['Windows + D', 'Windows + E', 'Windows + L', 'Alt + F4', 'Ctrl + Shift + Esc'],
      resposta: 2,
      explicacao: {
        resumo: 'Letra C. Windows + L (de lock, "trancar") bloqueia a sessão na hora, mantendo os programas abertos.',
        detalhada: 'O atalho **Windows + L** leva imediatamente à tela de bloqueio. Os programas e documentos continuam abertos, exatamente como estavam, mas ninguém consegue usá-los sem desbloquear a sessão com senha, PIN ou outro método configurado. É a forma mais rápida de cumprir a chamada **política de tela limpa**, comum em bancos e órgãos públicos: ao sair da mesa, bloqueie o computador. Outra forma de chegar ao mesmo resultado é **Ctrl + Alt + Del** e, em seguida, a opção **Bloquear**.\n\nOs outros atalhos clássicos do Windows, também muito cobrados:\n- **Windows + D**: mostra a área de trabalho (minimiza tudo) e, se repetido, restaura as janelas;\n- **Windows + E**: abre o Explorador de Arquivos;\n- **Alt + F4**: fecha a janela ativa; com a área de trabalho em foco, abre a caixa de desligamento;\n- **Ctrl + Shift + Esc**: abre diretamente o Gerenciador de Tarefas;\n- **Alt + Tab**: alterna entre as janelas abertas.\n\nPor que isso importa além da prova: um computador desbloqueado é uma **falha de segurança física**. Qualquer pessoa que passe pela mesa pode enviar e-mails, acessar sistemas e copiar dados em nome do usuário logado, o que atinge a **confidencialidade**, a **integridade** e a **autenticidade** das operações.',
        alternativas: [
          'Errada. Windows + D apenas mostra a área de trabalho; basta um clique para voltar às janelas, sem nenhuma proteção.',
          'Errada. Windows + E abre o Explorador de Arquivos.',
          'Correta. Windows + L bloqueia a sessão imediatamente, sem fechar os programas.',
          'Errada. Alt + F4 fecha a janela ativa, o que contraria a intenção de manter os programas abertos.',
          'Errada. Ctrl + Shift + Esc abre o Gerenciador de Tarefas.'
        ],
        dica: 'L de Lock (trancar), D de Desktop, E de Explorer. Associar a letra à palavra em inglês ajuda a memorizar.'
      },
      fontes: [MS, { titulo: 'Tecla de atalho (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Atalho_de_teclado' }]
    },
    {
      id: 'inf-011',
      materia: 'informatica',
      assunto: 'Editores de texto',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'tribunais', 'policial'],
      enunciado: 'Em computadores com o Microsoft Word e o LibreOffice Writer instalados e configurados em português do Brasil, o atalho de teclado Ctrl + S produz o mesmo efeito nos dois programas: aplicar sublinhado ao texto selecionado.',
      resposta: false,
      explicacao: {
        resumo: 'Errado. No Word em português, Ctrl + S sublinha; no Writer, Ctrl + S salva o documento (o sublinhado é Ctrl + U).',
        detalhada: 'Esta é uma das pegadinhas mais tradicionais de Informática em concursos. O **Microsoft Word em português** "traduziu" vários atalhos para as iniciais das palavras em português, enquanto o **LibreOffice Writer** manteve, em geral, os atalhos baseados nas palavras em inglês.\n\nCompare os principais:\n- **Negrito**: Word = Ctrl + N; Writer = Ctrl + B (de bold);\n- **Itálico**: Ctrl + I nos dois;\n- **Sublinhado**: Word = Ctrl + S; Writer = Ctrl + U (de underline);\n- **Salvar**: Word = Ctrl + B (de "baixar"); Writer = Ctrl + S (de save);\n- **Novo documento**: Word = Ctrl + O; Writer = Ctrl + N (de new);\n- **Abrir**: Word = Ctrl + A; Writer = Ctrl + O (de open);\n- **Selecionar tudo**: Word = Ctrl + T; Writer = Ctrl + A (de all).\n\nRepare na lógica: quase todos os atalhos do Word em português "trocam de lugar" com os do Writer. Quem pressiona Ctrl + S no Writer esperando sublinhar acaba salvando o arquivo; quem pressiona Ctrl + N no Writer esperando negrito abre um documento novo. Atalhos universais, como Ctrl + C (copiar), Ctrl + V (colar), Ctrl + X (recortar) e Ctrl + Z (desfazer), são iguais nos dois programas.',
        dica: 'Word em português pensa em português (Negrito, Sublinhado, Baixar); Writer pensa em inglês (Bold, Underline, Save). Itálico é Ctrl + I nos dois.'
      },
      fontes: [MS, LO, { titulo: 'LibreOffice Writer (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/LibreOffice_Writer' }]
    },
    {
      id: 'inf-012',
      materia: 'informatica',
      assunto: 'Computação em nuvem',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['concursos-gerais', 'estatais', 'bancarios'],
      enunciado: 'No modelo de serviço de computação em nuvem denominado SaaS (software como serviço), o provedor disponibiliza ao cliente uma aplicação pronta, geralmente acessada pelo navegador, e se encarrega da infraestrutura subjacente, como servidores, sistema operacional e armazenamento; um serviço de correio eletrônico via web contratado por uma empresa é exemplo desse modelo.',
      resposta: true,
      explicacao: {
        resumo: 'Certo. No SaaS o cliente apenas usa o software pronto; toda a infraestrutura e a plataforma são geridas pelo provedor. Webmail corporativo é exemplo típico.',
        detalhada: 'A **computação em nuvem** é o fornecimento de recursos computacionais (processamento, armazenamento, software) **pela rede, sob demanda**, pagando-se, em geral, conforme o uso. Suas características essenciais são: autosserviço sob demanda, amplo acesso pela rede, compartilhamento de recursos entre clientes (pool), **elasticidade** rápida (aumentar ou reduzir recursos conforme a necessidade) e serviço medido.\n\nOs três modelos de serviço diferem em **quanto o cliente administra**:\n- **IaaS (infraestrutura como serviço)**: o provedor entrega máquinas virtuais, redes e armazenamento; o cliente instala e administra sistema operacional e aplicações.\n- **PaaS (plataforma como serviço)**: o provedor entrega também o ambiente de execução (sistema, banco de dados, ferramentas de desenvolvimento); o cliente cuida apenas das aplicações que desenvolve.\n- **SaaS (software como serviço)**: o provedor entrega a **aplicação pronta**; o cliente apenas usa, normalmente pelo navegador ou por aplicativo, e configura opções do próprio serviço.\n\nUma analogia ajuda: IaaS é alugar um terreno com infraestrutura e construir a casa; PaaS é alugar a casa vazia e mobiliá-la; SaaS é hospedar-se em um hotel, onde tudo já está pronto. Webmail, suítes de escritório on-line e armazenamento de arquivos na web são exemplos de SaaS.\n\nAs bancas também cobram os **modelos de implantação**: nuvem **pública** (recursos de um provedor compartilhados por vários clientes), **privada** (exclusiva de uma organização), **híbrida** (combinação das duas) e **comunitária** (compartilhada por organizações com interesses comuns).',
        dica: 'Quanto mais "para baixo" na sigla (IaaS), mais o cliente administra; no SaaS, o cliente só usa. Não confunda modelo de serviço (IaaS, PaaS, SaaS) com modelo de implantação (pública, privada, híbrida, comunitária).'
      },
      fontes: [{ titulo: 'Computação em nuvem (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Computa%C3%A7%C3%A3o_em_nuvem' }, { titulo: 'Software como serviço (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Software_como_servi%C3%A7o' }]
    }
  ];

  var aulasInformatica = [
    {
      id: 'aula-inf-seguranca',
      materia: 'informatica',
      assunto: 'Segurança da informação',
      titulo: 'Segurança da informação: pilares, códigos maliciosos, golpes e backup',
      duracaoMin: 20,
      resumo: 'Os princípios que orientam a proteção de dados, os principais tipos de malware e golpes, os mecanismos de defesa e os tipos de backup, com foco no que mais cai em concursos.',
      secoes: [
        {
          titulo: 'Os pilares da segurança da informação',
          texto: 'Segurança da informação é o conjunto de medidas para proteger dados e sistemas contra acessos indevidos, alterações e indisponibilidade. Ela se apoia em três princípios básicos, a famosa tríade **CID**:\n- **Confidencialidade**: a informação só é acessada por quem tem autorização. Exemplo: criptografar um arquivo com dados de clientes.\n- **Integridade**: a informação não é alterada de forma indevida, seja por acidente ou por má-fé. Exemplo: o resumo criptográfico (hash) de um arquivo baixado permite verificar se ele foi modificado.\n- **Disponibilidade**: a informação está acessível quando quem tem direito precisa dela. Exemplo: servidores redundantes e backups.\n\nMuitas bancas acrescentam a **autenticidade** (garantia de que a informação vem de quem diz ter enviado) e o **não repúdio** ou irretratabilidade (o autor não consegue negar a autoria, como ocorre com a assinatura digital).\n\nTrês termos completam o vocabulário: **vulnerabilidade** é uma fraqueza (um sistema desatualizado, uma senha fraca); **ameaça** é o que pode explorar essa fraqueza (um criminoso, um malware, um incêndio); e **risco** é a combinação da probabilidade de a ameaça se concretizar com o impacto que ela causaria.'
        },
        {
          titulo: 'Códigos maliciosos (malware)',
          texto: '**Malware** é qualquer programa feito para executar ações danosas. Os tipos mais cobrados são:\n- **Vírus**: se anexa a arquivos ou programas (hospedeiros) e se propaga quando eles são executados.\n- **Worm**: se propaga sozinho pela rede, enviando cópias de si mesmo e explorando vulnerabilidades, sem precisar de hospedeiro; costuma consumir muitos recursos.\n- **Bot e botnet**: o bot permite que o atacante controle o computador remotamente; uma rede de bots (botnet) é usada em ataques de negação de serviço e envio de spam.\n- **Cavalo de troia (trojan)**: parece um programa útil, mas executa funções maliciosas escondidas; depende de o usuário instalá-lo.\n- **Spyware**: monitora e envia informações a terceiros. Variações: **keylogger** (captura o que é digitado), **screenlogger** (captura a tela e a posição do mouse) e **adware** (exibe propaganda).\n- **Backdoor**: abre uma "porta dos fundos" para o invasor voltar sem passar pelos controles normais.\n- **Rootkit**: conjunto de técnicas para esconder a presença do invasor e de outros malwares.\n- **Ransomware**: torna os dados ou o equipamento inacessíveis, normalmente por criptografia, e exige resgate.\n\nPara diferenciá-los, pergunte sempre: **como se propaga?** e **o que faz?** Vírus e worm se distinguem pela propagação; spyware, ransomware e rootkit, pelo objetivo.'
        },
        {
          titulo: 'Golpes na internet e engenharia social',
          texto: 'Boa parte dos ataques não explora falhas técnicas, e sim a confiança das pessoas. Isso é **engenharia social**: convencer a vítima a entregar informações ou executar ações.\n\n- **Phishing**: mensagem ou página que se passa por instituição conhecida (banco, loja, órgão público) para obter senhas, dados de cartão ou fazer a vítima instalar um programa. Sinais típicos: urgência ("sua conta será bloqueada"), erros de escrita, links com endereço estranho, pedidos de dados que a instituição nunca pede.\n- **Pharming**: tipo de phishing que adultera o DNS, levando a vítima ao site falso mesmo quando ela digita o endereço correto.\n- **Boato (hoax)**: mensagem alarmista ou falsa, espalhada em correntes, que pode conter links maliciosos.\n- **Falsa central de atendimento**: o golpista liga fingindo ser do banco e pede senha, códigos recebidos por SMS ou a instalação de um aplicativo de acesso remoto.\n\nRegra de ouro: na dúvida, **não clique**. Acesse o serviço digitando o endereço ou pelo aplicativo oficial, e confirme a informação por um canal que você mesmo escolheu.'
        },
        {
          titulo: 'Mecanismos de proteção',
          texto: 'Nenhuma medida isolada resolve; a proteção é feita em **camadas**:\n- **Atualizações**: corrigem vulnerabilidades. Sistemas desatualizados são a principal porta de entrada de worms.\n- **Antimalware (antivírus)**: detecta e remove códigos maliciosos por assinaturas e por comportamento.\n- **Firewall**: filtra o tráfego de rede segundo regras, bloqueando conexões não autorizadas. Atenção: firewall **não** é antivírus e não analisa o conteúdo dos arquivos que você mesmo abre.\n- **Senhas fortes e únicas**, guardadas em um gerenciador de senhas, e **verificação em duas etapas** (algo que você sabe + algo que você tem, como um código no celular).\n- **Criptografia**: na **simétrica**, a mesma chave cifra e decifra; na **assimétrica**, usa-se um par de chaves (pública e privada). A assinatura digital usa a chave **privada** do autor para assinar, e qualquer pessoa confere com a chave **pública** dele.\n- **Certificado digital**: documento eletrônico que associa uma chave pública a uma pessoa, empresa ou site, emitido por uma autoridade certificadora. É ele que viabiliza o **HTTPS**.\n\nLembre que o cadeado do HTTPS indica conexão cifrada, não que o site seja honesto.'
        },
        {
          titulo: 'Backup: tipos e boas práticas',
          texto: 'O **backup** (cópia de segurança) é a última linha de defesa: quando tudo falha, é ele que permite recuperar os dados. Os tipos clássicos são:\n- **Completo**: copia todos os arquivos selecionados. É o mais lento de fazer e o mais simples de restaurar.\n- **Incremental**: copia apenas o que mudou desde o **último backup de qualquer tipo**. É rápido de fazer, mas a restauração exige o último completo e **todos** os incrementais seguintes.\n- **Diferencial**: copia tudo o que mudou desde o **último backup completo**. Cresce ao longo do tempo, mas a restauração exige só o último completo e o **último** diferencial.\n\nBoas práticas:\n- seguir a regra **3-2-1**: três cópias dos dados, em dois tipos de mídia diferentes, uma delas fora do local (por exemplo, na nuvem);\n- manter ao menos uma cópia **desconectada**, já que o ransomware pode cifrar discos e pastas de rede conectados;\n- **testar a restauração** periodicamente: backup que nunca foi testado pode não funcionar quando for preciso;\n- proteger as cópias com criptografia e controle de acesso, pois elas também contêm dados sensíveis.'
        }
      ],
      pontosChave: [
        'Tríade CID: confidencialidade, integridade e disponibilidade; autenticidade e não repúdio completam os princípios mais cobrados.',
        'Vírus precisa de hospedeiro e de execução; worm se propaga sozinho pela rede explorando vulnerabilidades.',
        'Spyware espiona (keylogger, screenlogger, adware); ransomware sequestra dados e pede resgate; rootkit esconde a invasão.',
        'Phishing usa engenharia social para se passar por instituição confiável; pharming adultera o DNS.',
        'Firewall filtra tráfego de rede, mas não substitui o antivírus.',
        'Na assinatura digital, assina-se com a chave privada e confere-se com a chave pública.',
        'Backup incremental: desde o último backup de qualquer tipo. Diferencial: desde o último completo.',
        'HTTPS e cadeado garantem canal cifrado, não a honestidade do site.'
      ],
      fontes: [CERT, { titulo: 'Malware (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Malware' }, { titulo: 'Cópia de segurança (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Backup' }]
    },
    {
      id: 'aula-inf-planilhas',
      materia: 'informatica',
      assunto: 'Planilhas (Excel e Calc)',
      titulo: 'Planilhas no Excel e no Calc: fórmulas, referências e funções essenciais',
      duracaoMin: 20,
      resumo: 'Como montar fórmulas, quando usar referências relativas, absolutas e mistas, e as funções mais cobradas (SOMA, MÉDIA, SE, CONT.SE, SOMASE e PROCV), com as diferenças entre Excel e LibreOffice Calc.',
      secoes: [
        {
          titulo: 'Estrutura de uma planilha',
          texto: 'Um arquivo de planilha (chamado **pasta de trabalho** no Excel) contém uma ou mais **planilhas**, as abas na parte de baixo da tela. Cada planilha é uma grade de **colunas** (identificadas por letras) e **linhas** (identificadas por números). O cruzamento de uma coluna com uma linha é a **célula**, cujo endereço é a letra seguida do número: **B3** é a célula da coluna B, linha 3.\n\nDois símbolos organizam as referências a várias células, nas versões em português:\n- **dois-pontos (:)** indica **intervalo**: A1:A5 significa "de A1 até A5" (cinco células); B2:C3 é um bloco de quatro células;\n- **ponto e vírgula (;)** separa argumentos: =SOMA(A1;A5) soma **apenas** A1 e A5.\n\nPara usar uma célula de outra planilha do mesmo arquivo: no **Excel**, =Planilha2!A1 (com ponto de exclamação); no **Calc**, =Planilha2.A1 (com ponto). Os formatos padrão de arquivo são **.xlsx** no Excel e **.ods** no Calc, e cada programa consegue abrir e salvar no formato do outro.'
        },
        {
          titulo: 'Fórmulas e operadores',
          texto: 'Toda fórmula começa com o sinal de **igual (=)**. Sem ele, o programa trata o conteúdo como texto. Os operadores mais usados são:\n- **aritméticos**: + (soma), - (subtração), asterisco * (multiplicação), barra / (divisão), acento circunflexo ^ (potência) e % (porcentagem);\n- de comparação: **=**, **<>** (diferente), **>**, **<**, **>=**, **<=**, que devolvem VERDADEIRO ou FALSO;\n- de texto: **&** junta (concatena) textos, como em =A1&" "&B1.\n\nA **ordem de precedência** segue a matemática: primeiro a potência, depois multiplicação e divisão, depois soma e subtração. Assim, =2+3*2^2 resulta em **14** (2^2 = 4; 3*4 = 12; 2 + 12 = 14). Os parênteses mudam a ordem: =(2+3)*2^2 resulta em 20.\n\nExemplo prático: se A2 contém o preço e B2 a quantidade, =A2*B2 calcula o total da linha, e essa fórmula pode ser copiada para as linhas de baixo.'
        },
        {
          titulo: 'Referências relativas, absolutas e mistas',
          texto: 'Quando uma fórmula é **copiada**, as referências se ajustam ao deslocamento. O cifrão ($) impede o ajuste da parte que vem logo depois dele:\n- **A1** (relativa): coluna e linha se ajustam;\n- **$A$1** (absoluta): nada se ajusta;\n- **$A1** (mista): a coluna fica travada, a linha se ajusta;\n- **A$1** (mista): a linha fica travada, a coluna se ajusta.\n\nMétodo para resolver questões: (1) calcule quantas colunas e quantas linhas a fórmula andou; (2) some esse deslocamento só nas partes **sem** cifrão.\n\nExemplo: D2 contém =B2*$C$1 e é copiada para D3. O deslocamento é 0 coluna e +1 linha. B2 vira B3; $C$1 fica igual. Resultado: =B3*$C$1. É assim que se aplica uma mesma taxa, guardada em C1, a toda uma coluna de valores.\n\nAtalhos: no **Excel**, a tecla **F4** alterna entre os quatro tipos de referência; no **Calc**, o atalho é **Shift + F4**. E atenção: **recortar e colar** uma fórmula não altera suas referências; só copiar altera.'
        },
        {
          titulo: 'Funções essenciais',
          texto: 'Funções são fórmulas prontas. As mais cobradas, com os nomes em português (iguais no Excel e no Calc):\n- **=SOMA(A1:A10)**: soma o intervalo.\n- **=MÉDIA(A1:A10)**: média aritmética; células vazias são ignoradas.\n- **=MÁXIMO(...)** e **=MÍNIMO(...)**: maior e menor valor.\n- **=CONT.NÚM(...)**: conta células com números; **=CONT.VALORES(...)**: conta células não vazias.\n- **=CONT.SE(A1:A10;">=7")**: conta as células que atendem a um critério.\n- **=SOMASE(A1:A10;"Norte";B1:B10)**: soma os valores de B cuja linha tem "Norte" em A.\n- **=SE(teste;valor_se_verdadeiro;valor_se_falso)**: decisão. Ex.: =SE(B2>=7;"Aprovado";"Reprovado"). Pode ser aninhada e combinada com **E(...)** e **OU(...)**.\n- **=PROCV(valor;intervalo;coluna;FALSO)**: procura o valor na primeira coluna do intervalo e devolve o conteúdo da coluna indicada, na mesma linha. Com FALSO, exige correspondência exata.\n\nNo PROCV, o número da coluna é contado a partir do início do intervalo, e a busca nunca devolve colunas à esquerda da primeira.'
        },
        {
          titulo: 'Mensagens de erro mais cobradas',
          texto: 'Reconhecer o erro ajuda a encontrar a causa:\n- **#DIV/0!**: divisão por zero ou por célula vazia.\n- **#N/D**: valor não disponível; típico do PROCV que não encontra o valor procurado.\n- **#REF!**: referência inválida, por exemplo quando a célula usada na fórmula foi excluída.\n- **#NOME?**: nome de função ou de intervalo que o programa não reconhece, muitas vezes por erro de digitação (=SOMMA(A1:A3)).\n- **#VALOR!**: tipo de dado errado, como tentar somar um texto com um número usando o operador +.\n- **#####**: não é erro de fórmula; a coluna é estreita demais para exibir o número ou a data.\n\nO LibreOffice Calc exibe a maioria dessas mesmas mensagens e, em alguns casos, mostra códigos como **Err:502** (argumento inválido), cuja descrição aparece na barra de status.'
        }
      ],
      pontosChave: [
        'Toda fórmula começa com =; dois-pontos indica intervalo e ponto e vírgula separa argumentos.',
        'Precedência: potência, depois multiplicação e divisão, depois soma e subtração; parênteses mudam a ordem.',
        'O $ trava a coluna ou a linha que vem logo depois dele; copiar ajusta referências, recortar não.',
        'F4 no Excel e Shift + F4 no Calc alternam os tipos de referência.',
        'SE(teste;verdadeiro;falso) decide; CONT.SE conta e SOMASE soma com critério.',
        'PROCV busca na primeira coluna do intervalo; FALSO exige valor exato; se não achar, dá #N/D.',
        'Outra planilha: Planilha2!A1 no Excel e Planilha2.A1 no Calc; formatos .xlsx e .ods.'
      ],
      fontes: [MS, LO, { titulo: 'LibreOffice Calc (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/LibreOffice_Calc' }]
    }
  ];

  /* ======================= HISTÓRIA ======================= */
  var CPDOC = { titulo: 'Atlas Histórico do Brasil (FGV CPDOC)', url: 'https://atlas.fgv.br/' };

  var historia = [
    {
      id: 'his-001',
      materia: 'historia',
      assunto: 'Brasil Colônia',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 1,
      objetivos: ['enem', 'livre'],
      textoBase: 'No Brasil dos séculos XVI e XVII, o engenho de açúcar era muito mais do que uma unidade produtiva. Em torno da casa-grande e da moenda organizavam-se a capela, as roças de subsistência, as senzalas e a vida de dependentes livres, como lavradores, artesãos e agregados. O jesuíta André João Antonil, em obra publicada em 1711, observou que ser senhor de engenho era um título cobiçado por muitos, porque significava ser servido, obedecido e respeitado por muita gente, prestígio que ele comparava ao dos títulos de nobreza no Reino.',
      enunciado: 'A observação de Antonil sobre o senhor de engenho revela uma característica da sociedade açucareira colonial, que é a',
      alternativas: [
        'ampla mobilidade social, garantida pelo acesso fácil à terra para todos os colonos livres.',
        'associação entre o controle da produção açucareira, o domínio sobre pessoas escravizadas e dependentes e o prestígio social.',
        'predominância do trabalho livre assalariado nas atividades da moenda e do cultivo da cana.',
        'orientação da produção para o abastecimento do mercado interno, com pouca ligação com a Europa.',
        'igualdade jurídica entre os moradores do engenho, unidos por laços religiosos.'
      ],
      resposta: 1,
      explicacao: {
        resumo: 'Letra B. Ser senhor de engenho significava concentrar terra, pessoas escravizadas e dependentes, o que se traduzia em poder e prestígio numa sociedade fortemente hierarquizada.',
        detalhada: 'A economia açucareira, implantada principalmente em Pernambuco e na Bahia a partir do século XVI, seguiu o modelo de **plantation**: grandes propriedades (**latifúndio**), **monocultura** de cana, produção voltada para a **exportação** e uso de **mão de obra escravizada**, primeiro de indígenas e, de forma crescente, de africanos trazidos pelo tráfico atlântico. O acesso à terra dependia das **sesmarias**, doações feitas pela Coroa a quem tivesse recursos para explorá-las, o que já restringia o grupo dos grandes proprietários.\n\nO trecho de Antonil mostra que o engenho era também um centro de **poder social**. O senhor reunia sob sua autoridade a família, os escravizados, os lavradores que moíam cana em sua moenda, os agregados e até o capelão. Ser "servido, obedecido e respeitado" era o que dava ao título valor comparável ao de nobreza. É a base da sociedade **patriarcal** e **estamental** da colônia, em que o lugar de cada pessoa dependia da origem, da cor e da relação com a terra.\n\nEssa estrutura deixou marcas duradouras: a concentração fundiária, a desigualdade racial e a confusão entre o poder privado do grande proprietário e o poder público, que reaparece, por exemplo, no **coronelismo** da Primeira República. O sociólogo Gilberto Freyre, em Casa-grande & senzala (1933), tomou justamente o engenho como chave para interpretar a formação da sociedade brasileira, obra hoje lida de forma crítica por suavizar a violência da escravidão.',
        alternativas: [
          'Errada. A terra era concedida em sesmarias a quem tinha recursos e prestígio; a sociedade era rígida, com pouca mobilidade.',
          'Correta. O prestígio do senhor vinha justamente do domínio sobre terra, produção e pessoas.',
          'Errada. A base do trabalho no engenho era a escravidão; trabalhadores livres eram minoria e dependentes do senhor.',
          'Errada. O açúcar era produzido para exportação, integrado ao comércio atlântico controlado pela metrópole.',
          'Errada. A sociedade colonial era profundamente desigual, inclusive do ponto de vista jurídico, com pessoas escravizadas tratadas como propriedade.'
        ],
        dica: 'No ENEM, questões sobre o engenho costumam pedir a ligação entre economia (plantation) e sociedade (patriarcal, escravista, hierarquizada). Desconfie de alternativas que falem em igualdade ou mobilidade.'
      },
      fontes: [{ titulo: 'Engenho de açúcar (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Engenho' }, { titulo: 'André João Antonil (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Andr%C3%A9_Jo%C3%A3o_Antonil' }, CPDOC]
    },
    {
      id: 'his-002',
      materia: 'historia',
      assunto: 'Brasil Império',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: '"Art. 1º Ficam prohibidas as acquisições de terras devolutas por outro titulo que não seja o de compra."\n\nBRASIL. Lei nº 601, de 18 de setembro de 1850 (Lei de Terras). Grafia original.\n\nDuas semanas antes, em 4 de setembro de 1850, havia sido aprovada a Lei Eusébio de Queirós, que proibiu o tráfico de africanos escravizados para o Brasil.',
      enunciado: 'Analisadas em conjunto, as duas leis de 1850 indicam que as elites agrárias do Império buscavam',
      alternativas: [
        'promover uma reforma agrária que distribuísse as terras devolutas aos africanos libertos.',
        'estimular a pequena propriedade familiar como base da economia exportadora.',
        'abolir imediatamente a escravidão, substituindo-a pelo trabalho de imigrantes proprietários.',
        'dificultar o acesso à terra para quem não tivesse recursos, assegurando mão de obra para a grande lavoura diante do fim do tráfico.',
        'transferir para as províncias o controle sobre a distribuição das terras públicas, enfraquecendo o poder central.'
      ],
      resposta: 3,
      explicacao: {
        resumo: 'Letra D. Com o fim do tráfico, a terra passou a ser obtida apenas por compra, o que impedia que imigrantes pobres, libertos e trabalhadores livres se tornassem proprietários e os mantinha disponíveis como mão de obra para os fazendeiros.',
        detalhada: 'Em 1850, o Brasil vivia sob forte pressão britânica contra o tráfico de africanos. A **Lei Eusébio de Queirós** proibiu efetivamente esse comércio. Os fazendeiros, sobretudo os cafeicultores em expansão no Sudeste, sabiam que a escravidão tenderia a se esgotar e começaram a pensar em quem trabalharia nas lavouras no futuro: imigrantes europeus, trabalhadores livres pobres e, mais tarde, libertos.\n\nAté então, ocupar terras devolutas (terras públicas sem uso) por **posse** era prática comum; o regime de sesmarias tinha sido suspenso em 1822. A **Lei de Terras** mudou essa regra: a partir dela, terra pública só se adquiria por **compra**. A terra virou mercadoria cara, acessível a quem tinha capital. Assim, o trabalhador livre que chegasse sem recursos não teria como se instalar em um lote próprio e precisaria vender sua força de trabalho aos grandes proprietários. O sociólogo José de Souza Martins resumiu essa lógica: enquanto o trabalho era cativo, a terra podia ser livre; quando o trabalho começou a se tornar livre, a terra precisou ser cativa.\n\nAs consequências atravessaram o tempo. A lei consolidou a **concentração fundiária**, dificultou que os libertos, após 1888, tivessem acesso a terra e ajuda a entender, até hoje, os conflitos agrários e o debate sobre reforma agrária. É um bom exemplo de conexão entre História e Geografia agrária: a estrutura fundiária atual tem raízes em decisões políticas do século XIX.',
        alternativas: [
          'Errada. A lei fez o oposto de uma reforma agrária: restringiu o acesso à terra à compra.',
          'Errada. A economia continuou baseada no latifúndio exportador; a pequena propriedade não era prioridade das elites.',
          'Errada. A abolição só ocorreu em 1888; em 1850, apenas o tráfico foi proibido.',
          'Correta. A combinação do fim do tráfico com a terra só por compra garantia trabalhadores sem terra para a grande lavoura.',
          'Errada. A lei reforçou o controle do governo imperial sobre as terras devolutas, sem transferi-lo às províncias.'
        ],
        dica: 'Lembre o par de 1850: Eusébio de Queirós (fim do tráfico, 4/9) e Lei de Terras (terra só por compra, 18/9). O ENEM gosta de pedir a relação entre os dois.'
      },
      fontes: [{ titulo: 'Lei nº 601, de 18 de setembro de 1850 (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/leis/l0601-1850.htm' }, { titulo: 'Lei de Terras (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Lei_de_Terras' }, { titulo: 'Lei Eusébio de Queirós (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Lei_Eus%C3%A9bio_de_Queir%C3%B3s' }]
    },
    {
      id: 'his-003',
      materia: 'historia',
      assunto: 'República Velha',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'Numa cidade do interior, em dia de eleição na década de 1910, os eleitores chegavam em grupos, conduzidos por empregados de um grande fazendeiro. Cada um recebia já preenchida a cédula que deveria depositar, e a escolha era feita à vista da mesa eleitoral, composta por aliados do chefe local. Quem contrariasse a orientação podia perder o trabalho na fazenda, o pedaço de terra em que plantava ou a proteção do "coronel". Os votos assim reunidos sustentavam o governo estadual, que, por sua vez, apoiava o presidente da República.',
      enunciado: 'A situação descrita era favorecida, na Primeira República, principalmente',
      alternativas: [
        'pelo voto aberto, que expunha a escolha do eleitor ao controle dos chefes locais, num sistema de troca de favores entre coronéis, governos estaduais e governo federal.',
        'pelo voto secreto e obrigatório, adotado pela Constituição de 1891 para ampliar a participação popular.',
        'pelo voto feminino, que dobrou o número de eleitores sob influência dos fazendeiros.',
        'pela existência de uma Justiça Eleitoral independente, encarregada de apurar os votos nos municípios.',
        'pelo predomínio da população urbana e operária, organizada em partidos nacionais de massa.'
      ],
      resposta: 0,
      explicacao: {
        resumo: 'Letra A. Sem voto secreto, o eleitor podia ser vigiado e pressionado; o "voto de cabresto" alimentava a cadeia coronel, governador e presidente.',
        detalhada: 'A **Constituição de 1891** instituiu o voto direto para homens maiores de 21 anos, mas excluiu analfabetos, mendigos, praças de pré e religiosos sujeitos a voto de obediência; as mulheres, na prática, também não votavam. Como a maioria da população era analfabeta e rural, o eleitorado era pequeno. E, sobretudo, o voto era **aberto**: não havia garantia de sigilo.\n\nNesse cenário floresceu o **coronelismo**. O coronel, grande proprietário rural, controlava os votos de sua região (o **curral eleitoral**) por meio de favores (emprego, terra, remédio, proteção) e de ameaças, o chamado **voto de cabresto**. Fraudes como atas falsificadas e eleitores "fantasmas" completavam o quadro. Os votos entregues pelos coronéis elegiam os aliados do governador; em troca, o governo estadual garantia ao coronel cargos, verbas e autoridade local. No plano nacional, a **política dos governadores**, articulada no governo Campos Sales (1898-1902), fechava o ciclo: o presidente apoiava as oligarquias estaduais, e estas elegiam bancadas fiéis ao presidente. Opositores eleitos podiam ainda ter o diploma negado no Congresso, a chamada "degola".\n\nEsse sistema só começou a ser desmontado após a **Revolução de 1930**. O **Código Eleitoral de 1932** criou o **voto secreto**, a **Justiça Eleitoral** e o **voto feminino**, medidas que tentavam justamente quebrar o controle das oligarquias sobre as eleições. Conexão útil: a expressão "voto de cabresto" e a ideia de troca de favores por votos continuam presentes no debate atual sobre clientelismo.',
        alternativas: [
          'Correta. O voto aberto permitia vigiar o eleitor, base do voto de cabresto e da política dos governadores.',
          'Errada. O voto secreto só foi instituído pelo Código Eleitoral de 1932, após a Revolução de 1930.',
          'Errada. As mulheres só conquistaram o direito de voto em 1932.',
          'Errada. A Justiça Eleitoral só foi criada em 1932; antes, as eleições eram controladas pelos próprios grupos políticos.',
          'Errada. A população brasileira era majoritariamente rural, e os partidos eram regionais, como o PRP e o PRM.'
        ],
        dica: 'Associe: República Velha = voto aberto + coronelismo + política dos governadores. Voto secreto, feminino e Justiça Eleitoral = 1932, já na Era Vargas.'
      },
      fontes: [{ titulo: 'Coronelismo (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Coronelismo' }, { titulo: 'Política dos governadores (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Pol%C3%ADtica_dos_governadores' }, CPDOC]
    },
    {
      id: 'his-004',
      materia: 'historia',
      assunto: 'Era Vargas',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 3,
      objetivos: ['enem', 'livre'],
      textoBase: 'Entre 1930 e 1945, o governo de Getúlio Vargas criou o Ministério do Trabalho, Indústria e Comércio, instituiu a carteira de trabalho, regulamentou a jornada de oito horas, as férias e o salário mínimo e, em 1943, reuniu as normas na Consolidação das Leis do Trabalho (CLT). Ao mesmo tempo, os sindicatos passaram a depender do reconhecimento do Ministério, apenas um sindicato podia representar cada categoria em uma mesma base territorial e a contribuição sindical obrigatória era recolhida com a intermediação do Estado. A propaganda oficial apresentava Vargas como o "pai dos pobres".',
      enunciado: 'O conjunto de medidas descrito expressa uma política trabalhista caracterizada',
      alternativas: [
        'pela adesão ao liberalismo econômico, com o Estado afastado das relações entre patrões e empregados.',
        'pela conquista de direitos exclusivamente por meio de greves gerais, sem participação do Estado.',
        'pela extensão imediata de todos os direitos trabalhistas aos trabalhadores rurais, maioria da população.',
        'pela autonomia plena dos sindicatos, que podiam se organizar livremente e escolher suas filiações.',
        'pela concessão de direitos aos trabalhadores urbanos combinada ao controle estatal sobre a organização sindical.'
      ],
      resposta: 4,
      explicacao: {
        resumo: 'Letra E. O trabalhismo varguista ampliou direitos dos trabalhadores urbanos, mas atrelou os sindicatos ao Estado, num modelo corporativista de controle e cooptação.',
        detalhada: 'Até 1930, a "questão social" era frequentemente tratada como caso de polícia, e as greves operárias das décadas de 1910 e 1920 eram duramente reprimidas. O governo Vargas mudou a estratégia: trouxe as relações de trabalho para dentro do Estado. Por um lado, **concedeu direitos** reais e muito valorizados pelos trabalhadores urbanos: carteira de trabalho, jornada de oito horas, férias, salário mínimo e, por fim, a **CLT** (1943).\n\nPor outro lado, organizou o sindicalismo segundo um modelo **corporativista**, inspirado em experiências europeias da época, como a Carta del Lavoro italiana. O sindicato precisava ser **reconhecido** pelo Ministério do Trabalho; vigorava a **unicidade sindical** (um só sindicato por categoria em cada base territorial); e o **imposto sindical** sustentava essas entidades com a mediação do Estado. Resultado: sindicatos financeiramente dependentes e politicamente vigiados, com lideranças muitas vezes alinhadas ao governo (os chamados "pelegos"). A propaganda do "pai dos pobres" apresentava os direitos como dádiva do líder, e não como conquista das lutas operárias.\n\nUm limite importante: os **trabalhadores rurais**, então maioria da população, ficaram em grande parte fora dessa proteção, o que só começou a mudar com o Estatuto do Trabalhador Rural, de 1963. A herança é longa: a Constituição de 1988 manteve a unicidade sindical, e a contribuição sindical só deixou de ser obrigatória com a reforma trabalhista de 2017. Ou seja, a estrutura criada na Era Vargas moldou as relações de trabalho no Brasil por mais de setenta anos.',
        alternativas: [
          'Errada. O Estado passou a intervir fortemente nas relações de trabalho, o oposto do liberalismo.',
          'Errada. Houve lutas operárias anteriores, mas o texto destaca a ação do Estado, que apresentava os direitos como concessão.',
          'Errada. Os trabalhadores rurais ficaram, em grande parte, excluídos da legislação trabalhista do período.',
          'Errada. Os sindicatos dependiam do reconhecimento do Ministério e estavam submetidos à unicidade sindical.',
          'Correta. Direitos para os trabalhadores urbanos e controle estatal dos sindicatos são as duas faces do trabalhismo varguista.'
        ],
        dica: 'Ao ver "Era Vargas" e "trabalhismo", pense em duas palavras ao mesmo tempo: concessão (direitos) e controle (sindicatos atrelados). A alternativa certa quase sempre combina as duas.'
      },
      fontes: [{ titulo: 'Consolidação das Leis do Trabalho (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Consolida%C3%A7%C3%A3o_das_Leis_do_Trabalho' }, { titulo: 'Era Vargas (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Era_Vargas' }, CPDOC]
    },
    {
      id: 'his-005',
      materia: 'historia',
      assunto: 'Era Vargas',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['enem', 'livre', 'concursos-gerais'],
      enunciado: 'O Estado Novo (1937-1945) foi implantado por meio de um golpe justificado pela suposta ameaça de uma insurreição comunista, divulgada no chamado Plano Cohen, documento forjado; o regime fechou o Congresso Nacional, impôs uma Constituição outorgada em 1937 e criou o Departamento de Imprensa e Propaganda (DIP), encarregado da censura e da promoção da imagem do governo.',
      resposta: true,
      explicacao: {
        resumo: 'Certo. O golpe de 10 de novembro de 1937 usou o falso Plano Cohen como pretexto, fechou o Congresso, outorgou a Constituição de 1937 e, em 1939, criou o DIP.',
        detalhada: 'O caminho para o Estado Novo foi preparado pela **polarização política** de meados dos anos 1930. De um lado, a **Ação Integralista Brasileira**, de inspiração fascista; de outro, a **Aliança Nacional Libertadora**, frente de esquerda. Após o levante comunista de novembro de 1935 (a chamada Intentona Comunista), o governo obteve do Congresso estado de sítio e leis de exceção, e o anticomunismo passou a ser usado como justificativa para concentrar poder.\n\nEm setembro de 1937, o governo divulgou o **Plano Cohen**, documento que descrevia um suposto plano comunista para tomar o poder. Mais tarde se comprovou que ele era **forjado**, redigido no meio integralista. O clima de medo serviu de pretexto: em **10 de novembro de 1937**, Vargas fechou o Congresso, cancelou as eleições presidenciais previstas para 1938 e **outorgou** uma nova Constituição, apelidada de "Polaca" pela inspiração na Constituição autoritária da Polônia.\n\nO regime combinou **centralização** (interventores nomeados nos estados, cerimônia de queima das bandeiras estaduais), **repressão** (polícia política, prisões de opositores) e **propaganda**. O **DIP**, criado em 1939, controlava jornais, rádio e cinema, censurava conteúdos e produzia a imagem do líder, inclusive por meio do programa de rádio oficial do governo. Não confunda com o **DASP** (Departamento Administrativo do Serviço Público), criado em 1938 para modernizar a administração e organizar concursos públicos.',
        dica: 'O CEBRASPE costuma trocar DIP por DASP ou dizer que o Plano Cohen era um plano comunista verdadeiro. DIP = propaganda e censura; DASP = burocracia e concursos.'
      },
      fontes: [{ titulo: 'Estado Novo (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Estado_Novo_(Brasil)' }, { titulo: 'Plano Cohen (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Plano_Cohen' }, CPDOC]
    },
    {
      id: 'his-006',
      materia: 'historia',
      assunto: 'Ditadura militar e redemocratização',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 1,
      objetivos: ['enem', 'livre'],
      textoBase: '"Art. 10 - Fica suspensa a garantia de habeas corpus, nos casos de crimes políticos, contra a segurança nacional, a ordem econômica e social e a economia popular."\n\nBRASIL. Ato Institucional nº 5, de 13 de dezembro de 1968.',
      enunciado: 'A medida transcrita insere-se em um contexto de',
      alternativas: [
        'abertura política "lenta, gradual e segura", que preparava a devolução do poder aos civis.',
        'redemocratização, marcada pela convocação da Assembleia Nacional Constituinte.',
        'endurecimento do regime militar, que ampliou a repressão e retirou garantias contra prisões arbitrárias de opositores.',
        'governo democrático eleito, que enfrentava a ameaça de um golpe de Estado.',
        'anistia ampla, geral e irrestrita aos presos e exilados políticos.'
      ],
      resposta: 2,
      explicacao: {
        resumo: 'Letra C. O AI-5 marcou o endurecimento da ditadura: ao suspender o habeas corpus para crimes políticos, deixou opositores sem proteção contra prisões ilegais.',
        detalhada: 'O **habeas corpus** é a garantia jurídica que protege qualquer pessoa contra prisão ilegal ou abuso de poder: um juiz pode mandar soltar alguém preso sem fundamento. Suspender essa garantia para "crimes políticos" significava que o regime poderia prender opositores sem controle judicial, o que abriu caminho para prisões arbitrárias, desaparecimentos e tortura. Hoje o habeas corpus está previsto no art. 5º da Constituição de 1988, entre os direitos fundamentais.\n\nO **AI-5**, de dezembro de 1968, foi a resposta do governo Costa e Silva a um ano de forte contestação: passeatas estudantis (como a Passeata dos Cem Mil, no Rio de Janeiro), greves operárias em Contagem (MG) e Osasco (SP) e a recusa da Câmara em autorizar o processo contra um deputado que criticara os militares. Além de suspender o habeas corpus, o ato permitiu ao presidente decretar o **recesso do Congresso**, **cassar mandatos**, suspender direitos políticos e intervir em estados e municípios, e a censura se intensificou. Começavam os chamados **"anos de chumbo"**.\n\nAs outras alternativas descrevem momentos posteriores do regime. A **abertura "lenta, gradual e segura"** começou no governo Geisel (1974-1979); o AI-5 foi revogado por emenda constitucional que entrou em vigor no início de 1979. A **Lei da Anistia** é de 1979, as **Diretas Já** mobilizaram o país em 1984, e a **Assembleia Constituinte** (1987-1988) produziu a Constituição de 1988, que marca a redemocratização.',
        alternativas: [
          'Errada. A abertura começou em 1974, no governo Geisel, e caminhou no sentido oposto ao do AI-5.',
          'Errada. A Constituinte foi instalada em 1987, na fase de redemocratização.',
          'Correta. O AI-5 representou o auge do autoritarismo, com suspensão de garantias e ampliação da repressão.',
          'Errada. Em 1968 o Brasil já vivia sob a ditadura instaurada pelo golpe de 1964.',
          'Errada. A anistia, ainda que não "ampla, geral e irrestrita" como pediam os movimentos, só veio em 1979.'
        ],
        dica: 'Linha do tempo que salva questões: 1964 golpe; 1968 AI-5; 1974 início da abertura; 1979 Anistia e fim do AI-5; 1984 Diretas Já; 1985 fim do regime; 1988 nova Constituição.'
      },
      fontes: [{ titulo: 'Ato Institucional nº 5 (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/ait/ait-05-68.htm' }, { titulo: 'Ato Institucional nº 5 (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Ato_Institucional_n%C2%BA_5' }]
    },
    {
      id: 'his-007',
      materia: 'historia',
      assunto: 'História geral',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: '"Os homens nascem e permanecem livres e iguais em direitos. As distinções sociais só podem fundamentar-se na utilidade comum."\n\nDeclaração dos Direitos do Homem e do Cidadão, França, 1789, art. 1º (tradução livre).',
      enunciado: 'Ao ser proclamado em 1789, esse princípio confrontava diretamente a organização do Antigo Regime francês porque',
      alternativas: [
        'defendia a manutenção do poder absoluto do rei, considerado representante de Deus.',
        'propunha a coletivização das terras e o fim da propriedade privada.',
        'reconhecia o voto feminino universal como fundamento da soberania popular.',
        'negava que o nascimento em uma ordem social, como o clero ou a nobreza, justificasse privilégios legais.',
        'reforçava a divisão da sociedade em três estados com direitos diferentes.'
      ],
      resposta: 3,
      explicacao: {
        resumo: 'Letra D. Ao afirmar que todos nascem iguais em direitos, a Declaração atacava a sociedade de ordens, em que clero e nobreza tinham privilégios garantidos pelo nascimento.',
        detalhada: 'A França do **Antigo Regime** era uma sociedade **estamental**, dividida em três ordens: o **Primeiro Estado** (clero), o **Segundo Estado** (nobreza) e o **Terceiro Estado** (todos os demais: burguesia, trabalhadores urbanos e camponeses, a imensa maioria). Os dois primeiros tinham privilégios definidos por **nascimento** ou condição, como isenções de impostos e acesso exclusivo a altos cargos, enquanto o Terceiro Estado sustentava o reino com tributos. O rei governava como monarca **absoluto**, justificado pelo direito divino.\n\nA **Declaração dos Direitos do Homem e do Cidadão**, aprovada em agosto de 1789 pela Assembleia Nacional, traduziu em lei as ideias do **Iluminismo**: direitos naturais (Locke), soberania nacional (Sieyès), vontade geral (Rousseau), separação de poderes (Montesquieu). Ao dizer que as distinções sociais só podem se basear na **utilidade comum**, ela tirou o fundamento dos privilégios hereditários: a partir dali, uma posição social deveria ser justificada pelo mérito ou pela função, e não pelo sangue.\n\nVale notar os limites do documento. O "homem" da Declaração não incluía, na prática, as mulheres; em 1791, Olympe de Gouges escreveu a Declaração dos Direitos da Mulher e da Cidadã para denunciar essa exclusão. A propriedade foi declarada direito "inviolável e sagrado", e a escravidão nas colônias francesas só foi abolida em 1794, sob pressão da revolta de São Domingos (Haiti); restabelecida por Napoleão em 1802, só terminou de vez em 1848. Mesmo assim, o texto é um marco do constitucionalismo e ecoa, por exemplo, no art. 5º da Constituição brasileira de 1988: "Todos são iguais perante a lei".',
        alternativas: [
          'Errada. A Declaração afirmava a soberania da nação, contrariando o absolutismo de direito divino.',
          'Errada. Ela protegia a propriedade privada como direito sagrado; a coletivização é ideia muito posterior.',
          'Errada. As mulheres não obtiveram direitos políticos com a Revolução Francesa.',
          'Correta. A igualdade de direitos desde o nascimento derrubava a lógica dos privilégios de ordem.',
          'Errada. A Declaração rompia com a sociedade de três estados, em vez de reforçá-la.'
        ],
        dica: 'No ENEM, "iguais em direitos" contra "privilégios de nascimento" é a chave para identificar a crítica iluminista ao Antigo Regime.'
      },
      fontes: [{ titulo: 'Declaração dos Direitos do Homem e do Cidadão (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Declara%C3%A7%C3%A3o_dos_Direitos_do_Homem_e_do_Cidad%C3%A3o' }]
    },
    {
      id: 'his-008',
      materia: 'historia',
      assunto: 'História geral',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'Na Inglaterra do início do século XIX, a difusão de teares mecânicos e de máquinas de fiar transformou a produção têxtil. Tecelões que antes trabalhavam em casa, controlando o ritmo e as etapas do próprio trabalho, passaram a disputar vagas em fábricas com jornadas muito longas, salários baixos e grande presença de mulheres e crianças. Entre 1811 e 1816, grupos de trabalhadores invadiram oficinas e destruíram máquinas em várias regiões do país; o Parlamento chegou a tornar a destruição de máquinas um crime punível com a morte.',
      enunciado: 'As ações descritas no texto, conhecidas como ludismo, expressavam',
      alternativas: [
        'o apoio dos trabalhadores à mecanização, vista como garantia de empregos mais bem pagos.',
        'a reação dos trabalhadores à perda de autonomia e de renda provocada pela substituição do trabalho artesanal pela produção mecanizada.',
        'a defesa, pelos industriais, de leis que limitassem a jornada e proibissem o trabalho infantil.',
        'um movimento socialista organizado em partido político, com o objetivo de tomar o Estado.',
        'a resistência da aristocracia rural ao crescimento das cidades industriais.'
      ],
      resposta: 1,
      explicacao: {
        resumo: 'Letra B. Os luditas atacavam as máquinas porque elas simbolizavam a perda do controle sobre o próprio trabalho, o desemprego e a queda dos rendimentos.',
        detalhada: 'A **Revolução Industrial**, iniciada na Inglaterra na segunda metade do século XVIII, substituiu a produção artesanal e a manufatura pela **maquinofatura**. O artesão dominava todas as etapas de seu ofício, era dono das ferramentas e definia o próprio ritmo. Na fábrica, o trabalhador passa a operar uma máquina que não lhe pertence, repete uma tarefa parcial e obedece ao relógio do patrão. Essa mudança foi acompanhada de jornadas exaustivas, salários baixos e uso intenso de mulheres e crianças, pagas com valores ainda menores.\n\nO **ludismo** foi uma das primeiras formas de resistência operária. A quebra de máquinas não era simples irracionalidade: era uma forma de pressão sobre os patrões, numa época em que os sindicatos eram proibidos pelas leis inglesas (as Combination Acts, de 1799 e 1800). A reação do Estado foi dura, incluindo a lei de 1812 que punia com a morte a destruição de máquinas.\n\nCom o tempo, a luta operária mudou de forma: vieram as associações e os sindicatos (as trade unions, legalizadas em 1824), o **cartismo** (que, a partir de 1838, reivindicou o sufrágio universal masculino) e as primeiras leis fabris, como a de 1833, que limitou o trabalho infantil nas fábricas têxteis. Conexão com a Sociologia: Marx descreveu esse processo como **alienação** do trabalhador em relação ao produto e ao processo de trabalho. E o tema permanece atual no debate sobre automação e trabalho por plataformas digitais.',
        alternativas: [
          'Errada. A destruição de máquinas indica rejeição, e não apoio, à mecanização tal como era implantada.',
          'Correta. A mecanização tirava dos tecelões autonomia, emprego e renda, e as máquinas se tornaram alvo dos protestos.',
          'Errada. As leis de limitação da jornada resultaram de pressões de trabalhadores e reformadores, não da iniciativa dos industriais, e vieram depois.',
          'Errada. O ludismo foi um movimento de ação direta, sem partido político nem programa de tomada do Estado.',
          'Errada. Os protagonistas eram trabalhadores, não a aristocracia rural.'
        ],
        dica: 'Ludismo = quebra de máquinas (1811-1816). Cartismo = luta pelo voto (a partir de 1838). As bancas costumam trocar um pelo outro.'
      },
      fontes: [{ titulo: 'Ludismo (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Ludismo' }, { titulo: 'Revolução Industrial (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Revolu%C3%A7%C3%A3o_Industrial' }]
    }
  ];

  var aulasHistoria = [
    {
      id: 'aula-his-era-vargas',
      materia: 'historia',
      assunto: 'Era Vargas',
      titulo: 'Era Vargas: da Revolução de 1930 ao suicídio de 1954',
      duracaoMin: 20,
      resumo: 'As fases do período Vargas, do fim da Primeira República ao Estado Novo e ao governo democrático de 1951-1954, com destaque para o trabalhismo, a industrialização e o autoritarismo.',
      secoes: [
        {
          titulo: 'A crise da Primeira República e a Revolução de 1930',
          texto: 'Na Primeira República, São Paulo e Minas Gerais costumavam se alternar no controle da presidência, arranjo conhecido como **política do café com leite**. Em 1929, dois abalos romperam esse equilíbrio. A **crise de 1929** derrubou o preço do café, principal produto de exportação. E o presidente Washington Luís, representante da oligarquia paulista (PRP), indicou um paulista, **Júlio Prestes**, para sucedê-lo, em vez de um mineiro.\n\nMinas Gerais se aliou ao Rio Grande do Sul e à Paraíba na **Aliança Liberal**, que lançou o gaúcho **Getúlio Vargas** para presidente e o paraibano **João Pessoa** para vice. Júlio Prestes venceu a eleição de 1930, marcada pelas fraudes típicas do período. O assassinato de João Pessoa, em julho, por motivos em parte pessoais e locais, foi explorado politicamente e acelerou a conspiração. Em outubro, um movimento armado, com apoio dos **tenentes** (jovens oficiais que contestavam as oligarquias desde os anos 1920), derrubou Washington Luís. Vargas assumiu o governo em **3 de novembro de 1930**.'
        },
        {
          titulo: 'Governo Provisório e governo constitucional (1930-1937)',
          texto: 'Vargas governou primeiro por decreto: dissolveu o Congresso e nomeou **interventores** para os estados, muitos deles tenentes. A centralização desagradou às elites paulistas, que pegaram em armas na **Revolução Constitucionalista de 1932**, exigindo uma nova Constituição. Os paulistas foram derrotados militarmente, mas a reivindicação foi atendida.\n\nNo mesmo ano, o **Código Eleitoral de 1932** criou o **voto secreto**, o **voto feminino** e a **Justiça Eleitoral**. A **Constituição de 1934** incorporou essas conquistas e direitos trabalhistas, e Vargas foi eleito presidente pela Assembleia Constituinte.\n\nO período foi de forte **polarização**:\n- a **Ação Integralista Brasileira (AIB)**, liderada por Plínio Salgado, defendia um nacionalismo autoritário inspirado no fascismo;\n- a **Aliança Nacional Libertadora (ANL)**, frente de esquerda que tinha Luís Carlos Prestes como presidente de honra, foi fechada pelo governo em 1935.\n\nO levante comunista de novembro de 1935 deu ao governo o argumento para endurecer a repressão, com estado de sítio e prisões em massa.'
        },
        {
          titulo: 'O Estado Novo (1937-1945)',
          texto: 'Em setembro de 1937 foi divulgado o **Plano Cohen**, um suposto plano comunista que depois se provou **forjado**. Em **10 de novembro de 1937**, Vargas deu o golpe: fechou o Congresso, cancelou as eleições de 1938 e outorgou a **Constituição de 1937**, apelidada de "Polaca".\n\nCaracterísticas do regime:\n- **centralização**: interventores nos estados e queima simbólica das bandeiras estaduais;\n- **repressão**: polícia política, censura e prisão de opositores, de comunistas a integralistas (estes tentaram um levante em 1938);\n- **propaganda**: o **DIP** (1939) controlava imprensa, rádio e cinema e construía a imagem de Vargas como líder da nação;\n- **modernização administrativa**: o **DASP** (1938) racionalizou o serviço público e organizou concursos.\n\nO Estado Novo foi uma ditadura, mas não se limitou à força: buscou apoio popular por meio do trabalhismo e do nacionalismo.'
        },
        {
          titulo: 'Trabalhismo e industrialização',
          texto: 'Logo em 1930 foi criado o **Ministério do Trabalho, Indústria e Comércio**. Seguiram-se a **carteira de trabalho** (1932), a regulamentação da jornada de oito horas e das férias, o **salário mínimo**, que passou a vigorar em 1940, e a **CLT**, de 1943. Em contrapartida, os sindicatos foram **atrelados ao Estado**: precisavam de reconhecimento oficial, havia um só sindicato por categoria em cada base territorial e o imposto sindical os financiava. É a dupla face do **trabalhismo**: direitos concedidos e controle político.\n\nNa economia, o governo apostou na **industrialização** e no papel do Estado em setores estratégicos, num contexto em que a crise do café e as dificuldades de importação estimulavam a produção interna (a **substituição de importações**). Marcos do período:\n- **Conselho Nacional do Petróleo** (1938);\n- **Companhia Siderúrgica Nacional** (1941), em Volta Redonda (RJ), financiada em parte com recursos dos Estados Unidos;\n- **Companhia Vale do Rio Doce** (1942).\n\nEssa política de Estado indutor do desenvolvimento seria retomada por governos posteriores, como o de Juscelino Kubitschek e o da própria ditadura militar.'
        },
        {
          titulo: 'Segunda Guerra Mundial e queda do Estado Novo',
          texto: 'No início da Segunda Guerra, Vargas negociou com os dois lados. Em 1942, após o afundamento de navios brasileiros por submarinos alemães e acordos com os Estados Unidos (que incluíram o financiamento da siderurgia e o uso de bases no Nordeste), o Brasil declarou guerra ao Eixo. A **Força Expedicionária Brasileira (FEB)** lutou na Itália em 1944 e 1945.\n\nIsso expôs uma contradição: o Brasil combatia regimes autoritários na Europa enquanto vivia uma ditadura. Cresceram as pressões pela redemocratização, como o **Manifesto dos Mineiros** (1943). Vargas anunciou eleições, permitiu a criação de partidos (**PSD**, **PTB**, **UDN**) e contou com o apoio do movimento **queremista** ("Queremos Getúlio"). Desconfiados de que ele tentaria permanecer no poder, os militares o depuseram em **29 de outubro de 1945**.'
        },
        {
          titulo: 'O retorno pelo voto (1951-1954)',
          texto: 'Vargas voltou à presidência **eleito pelo voto direto** em 1950. Seu segundo governo teve forte marca **nacionalista**: a campanha "O petróleo é nosso" resultou na criação da **Petrobras** (1953), com monopólio estatal da exploração. A inflação e as disputas salariais, porém, acirraram os conflitos. O aumento de 100% do salário mínimo em 1954 desagradou a empresários e a setores militares, e a oposição, liderada pela UDN e pelo jornalista Carlos Lacerda, intensificou os ataques.\n\nEm agosto de 1954, um atentado contra Lacerda, na Rua Tonelero, no Rio de Janeiro, matou o major da Aeronáutica Rubens Vaz. As investigações chegaram à guarda pessoal do presidente, e a pressão pela renúncia se tornou enorme. Em **24 de agosto de 1954**, Vargas se suicidou no Palácio do Catete, deixando uma **carta-testamento** em que se apresentava como vítima de interesses contrários ao povo. A comoção popular adiou por dez anos o golpe que seus adversários desejavam, e o varguismo continuou a influenciar a política brasileira por décadas.'
        }
      ],
      pontosChave: [
        'A Revolução de 1930 resultou da crise do café com leite, da crise de 1929 e da derrota da Aliança Liberal nas eleições.',
        'O Código Eleitoral de 1932 criou o voto secreto, o voto feminino e a Justiça Eleitoral.',
        'A Constituição de 1934 foi democrática; a de 1937, outorgada e autoritária ("Polaca").',
        'O Estado Novo (1937-1945) foi implantado com o pretexto do falso Plano Cohen; o DIP fazia propaganda e censura.',
        'Trabalhismo: direitos para trabalhadores urbanos (CLT, 1943) com sindicatos atrelados ao Estado.',
        'O Estado investiu em setores estratégicos: CSN (1941), Vale do Rio Doce (1942) e, no segundo governo, Petrobras (1953).',
        'Vargas foi deposto em 1945, voltou eleito em 1950 e se suicidou em 24 de agosto de 1954.'
      ],
      fontes: [CPDOC, { titulo: 'Era Vargas (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Era_Vargas' }, { titulo: 'Revolução de 1930 (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Revolu%C3%A7%C3%A3o_de_1930' }]
    }
  ];

  /* ======================= GEOGRAFIA ======================= */
  var IBGE_EDUCA = { titulo: 'IBGE Educa', url: 'https://educa.ibge.gov.br/' };
  var MMA = { titulo: 'Ministério do Meio Ambiente e Mudança do Clima', url: 'https://www.gov.br/mma/pt-br' };

  var geografia = [
    {
      id: 'geo-001',
      materia: 'geografia',
      assunto: 'Climatologia',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'Em uma manhã de julho, moradores de Rio Branco (AC) e de Porto Velho (RO) acordaram com temperaturas próximas de 10 °C, muito abaixo das habituais na região, onde as máximas costumam passar de 30 °C. O fenômeno, que pode durar alguns dias, é conhecido localmente como "friagem" e costuma vir acompanhado de ventos de sul e de queda na umidade do ar.',
      enunciado: 'O fenômeno descrito é explicado pelo(a)',
      alternativas: [
        'avanço da massa equatorial continental, que se forma sobre a própria Amazônia e é quente e úmida.',
        'atuação da massa tropical atlântica, que traz umidade do oceano para o interior do continente.',
        'avanço da massa polar atlântica, que, no inverno, pode atravessar o interior do continente e alcançar a porção ocidental da Amazônia.',
        'efeito da maritimidade, que reduz a amplitude térmica nas áreas próximas ao litoral.',
        'ocorrência do El Niño, que provoca o resfriamento das águas do oceano Pacífico equatorial.'
      ],
      resposta: 2,
      explicacao: {
        resumo: 'Letra C. A friagem ocorre quando a massa polar atlântica, fria e seca, avança no inverno pelo interior da América do Sul e chega à Amazônia ocidental.',
        detalhada: 'O clima do Brasil é fortemente influenciado por **massas de ar**, grandes porções de ar que adquirem temperatura e umidade da região onde se formam. A **massa polar atlântica (mPa)** se origina nas latitudes altas do Atlântico Sul, próximo ao extremo sul do continente, e é **fria**. No inverno, ela ganha força e avança para o norte.\n\nO relevo explica por que ela chega tão longe. A **Cordilheira dos Andes**, a oeste, funciona como uma parede que canaliza o ar frio, e as planícies do interior do continente (como as do Chaco e do Pantanal) formam um corredor sem grandes barreiras. Assim, a mPa pode atravessar o Centro-Oeste e alcançar Rondônia, Acre e o sul do Amazonas, derrubando as temperaturas por alguns dias. É a **friagem**. A frente fria que antecede a massa traz ventos de sul, e o ar polar, mais seco, reduz a umidade.\n\nA mesma massa é responsável pelas **geadas** no Sul e em áreas do Sudeste e, ocasionalmente, por quedas de neve nas serras do Sul. Ela também interessa à agricultura: geadas fortes já destruíram cafezais inteiros no Paraná e em São Paulo, com impacto no preço internacional do café.\n\nPor que as outras alternativas falham: a massa equatorial continental é **quente e úmida**, o oposto do que se observa; a massa tropical atlântica atua sobretudo no litoral leste; a maritimidade é um fator ligado ao litoral; e o El Niño corresponde ao **aquecimento** anormal das águas do Pacífico equatorial, não ao resfriamento.',
        alternativas: [
          'Errada. A mEc é quente e úmida; ela predomina na Amazônia na maior parte do ano, mas não provoca queda de temperatura.',
          'Errada. A mTa é quente e úmida e atua principalmente no litoral leste e sudeste.',
          'Correta. A massa polar atlântica, canalizada entre os Andes e as planícies centrais, chega à Amazônia ocidental no inverno.',
          'Errada. A maritimidade explica a menor amplitude térmica no litoral; Rio Branco e Porto Velho estão no interior do continente.',
          'Errada. O El Niño é o aquecimento das águas do Pacífico equatorial; o resfriamento é chamado de La Niña, e nenhum dos dois explica a friagem.'
        ],
        dica: 'Frio no Brasil quase sempre tem a mesma resposta: massa polar atlântica. Ar frio no inverno + Amazônia ocidental = friagem.'
      },
      fontes: [{ titulo: 'Friagem (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Friagem' }, { titulo: 'Massa de ar (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Massa_de_ar' }]
    },
    {
      id: 'geo-002',
      materia: 'geografia',
      assunto: 'Climatologia',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 1,
      objetivos: ['enem', 'livre'],
      textoBase: 'Medições feitas ao longo de um dia de verão em uma grande metrópole brasileira mostraram que o centro da cidade, com muitos edifícios, avenidas asfaltadas e pouca vegetação, registrou temperaturas vários graus mais altas do que um grande parque arborizado e do que áreas rurais situadas a poucos quilômetros dali.',
      enunciado: 'A diferença de temperatura observada está associada principalmente',
      alternativas: [
        'à maior altitude do centro urbano em relação às áreas rurais vizinhas.',
        'à inversão térmica, que ocorre com mais frequência nas tardes de verão.',
        'à maior quantidade de chuvas nas áreas rurais, que impede o aquecimento do solo.',
        'à destruição da camada de ozônio sobre as áreas mais urbanizadas.',
        'à substituição da vegetação por materiais como concreto e asfalto, que absorvem e armazenam calor, somada à menor evaporação e ao calor liberado por veículos e indústrias.'
      ],
      resposta: 4,
      explicacao: {
        resumo: 'Letra E. É a ilha de calor urbana: superfícies escuras e impermeáveis acumulam calor, a pouca vegetação reduz o resfriamento por evaporação, e as atividades humanas liberam calor adicional.',
        detalhada: 'A **ilha de calor** é um fenômeno típico das grandes cidades: a temperatura no centro urbano fica mais alta do que nas áreas arborizadas e rurais do entorno. Várias causas se somam:\n- **materiais urbanos**: asfalto, concreto e telhados escuros absorvem muita radiação solar (têm baixo **albedo**, isto é, refletem pouco) e liberam esse calor lentamente, inclusive à noite;\n- **pouca vegetação e solo impermeabilizado**: as plantas e o solo úmido perdem água por evaporação e transpiração (**evapotranspiração**), processo que consome energia e resfria o ambiente. Sem eles, esse "ar-condicionado natural" desaparece;\n- **calor das atividades humanas**: motores de veículos, indústrias e aparelhos de ar-condicionado;\n- **forma da cidade**: prédios altos e próximos dificultam a circulação do vento e a dispersão do calor.\n\nA conexão com a Física é direta. A evaporação da água exige energia (o **calor latente**), retirada do ambiente; é o mesmo princípio que nos refresca quando o suor evapora. Já os materiais urbanos funcionam como reservatórios de calor.\n\nNão confunda com a **inversão térmica**: nela, uma camada de ar mais quente fica acima de uma camada fria junto ao solo, impedindo a subida do ar e concentrando poluentes. Ela é mais comum em **manhãs de inverno**, não em tardes de verão. As medidas para reduzir as ilhas de calor incluem arborização, parques, telhados verdes, pavimentos permeáveis e superfícies de cores claras, que também ajudam a diminuir enchentes, outro problema ligado à impermeabilização do solo.',
        alternativas: [
          'Errada. Maior altitude tende a reduzir a temperatura, e não a aumentá-la; além disso, o texto não menciona diferença de relevo.',
          'Errada. A inversão térmica é mais frequente em manhãs frias de inverno e está ligada à concentração de poluentes, não ao aquecimento do centro.',
          'Errada. O texto não trata de diferença de chuvas, e a vegetação, não a chuva, explica o contraste com o parque vizinho.',
          'Errada. A camada de ozônio filtra radiação ultravioleta em escala global; sua redução não explica diferenças de temperatura entre bairros.',
          'Correta. É a combinação de materiais que acumulam calor, menos evapotranspiração e calor das atividades humanas.'
        ],
        dica: 'Ilha de calor = verão, centro da cidade, asfalto. Inversão térmica = inverno, manhã, poluição presa perto do solo.'
      },
      fontes: [{ titulo: 'Ilha de calor (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Ilha_de_calor' }, IBGE_EDUCA]
    },
    {
      id: 'geo-003',
      materia: 'geografia',
      assunto: 'Biomas brasileiros',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 1,
      objetivos: ['enem', 'livre'],
      textoBase: 'Durante a estação seca, que pode durar mais de seis meses, a paisagem fica acinzentada: a maior parte das árvores e dos arbustos perde as folhas, e as plantas parecem mortas. Bastam, porém, as primeiras chuvas para que a vegetação volte a ficar verde em poucos dias. Cactáceas como o mandacaru e o xique-xique armazenam água em seus caules, e muitas espécies apresentam espinhos no lugar de folhas largas.',
      enunciado: 'O bioma descrito e o papel adaptativo da queda das folhas na estação seca são, respectivamente,',
      alternativas: [
        'Caatinga; reduzir a perda de água por transpiração em um ambiente semiárido.',
        'Cerrado; proteger a planta contra o fogo, que só ocorre na estação chuvosa.',
        'Pampa; resistir às geadas frequentes do inverno subtropical.',
        'Mata Atlântica; aumentar a captação de luz no sub-bosque sombreado.',
        'Pantanal; evitar o apodrecimento das folhas durante as cheias.'
      ],
      resposta: 0,
      explicacao: {
        resumo: 'Letra A. A vegetação caducifólia, as cactáceas e os espinhos caracterizam a Caatinga; perder as folhas reduz a transpiração e economiza água durante a longa estiagem.',
        detalhada: 'A **Caatinga** ocupa a maior parte do Nordeste e o norte de Minas Gerais, sob **clima semiárido**: chuvas baixas, concentradas em poucos meses e muito irregulares de um ano para outro, e temperaturas elevadas o ano todo. É o único bioma **exclusivamente brasileiro**. O nome vem do tupi e costuma ser traduzido como "mata branca", justamente pelo aspecto acinzentado da vegetação sem folhas na seca.\n\nA vegetação é **xerófila** (adaptada à falta de água) e, em grande parte, **caducifólia** (perde as folhas). A conexão com a Biologia explica a vantagem: é pelas folhas, através dos **estômatos**, que as plantas perdem a maior parte da água por **transpiração**. Sem folhas, a perda cai drasticamente, e a planta entra em uma espécie de repouso até as chuvas voltarem. Outras adaptações aparecem no texto: caules que **armazenam água** (cactos), **espinhos** (folhas modificadas, com superfície mínima) e, em muitas espécies, raízes extensas.\n\nApesar da aparência, a Caatinga tem **alta biodiversidade**, com muitas espécies que só existem ali. Ela enfrenta desmatamento para lenha e pecuária e processos de **desertificação** em algumas áreas. Políticas de **convivência com o semiárido**, como cisternas para guardar a água da chuva, mostram que o problema não é só a seca, mas a forma como o território e a água são usados.',
        alternativas: [
          'Correta. Caatinga, semiárido e queda das folhas para reduzir a transpiração.',
          'Errada. O Cerrado também tem estação seca e plantas adaptadas ao fogo, mas o fogo ocorre principalmente na seca, e cactos e espinhos dominantes são marcas da Caatinga.',
          'Errada. O Pampa é formado principalmente por campos de gramíneas, em clima subtropical com chuvas bem distribuídas.',
          'Errada. A Mata Atlântica é uma floresta úmida, sempre verde na maior parte de sua extensão.',
          'Errada. O Pantanal é uma planície inundável; o texto descreve escassez, e não excesso, de água.'
        ],
        dica: 'Caatinga = caducifólia + xerófila + semiárido + exclusivamente brasileira. Essas quatro expressões resolvem a maioria das questões sobre o bioma.'
      },
      fontes: [{ titulo: 'Caatinga (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Caatinga' }, MMA]
    },
    {
      id: 'geo-004',
      materia: 'geografia',
      assunto: 'Biomas brasileiros',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'Chamado por pesquisadores de "berço das águas", o bioma ocupa sobretudo o Planalto Central e abriga nascentes de rios que formam algumas das principais bacias hidrográficas do país, como as do São Francisco, do Tocantins-Araguaia e do Paraná. Sua vegetação inclui árvores de troncos tortuosos e casca grossa e um estrato de gramíneas; muitas plantas têm raízes profundas, que alcançam a água do subsolo, e grande parte de sua biomassa está abaixo da superfície. Nas últimas décadas, extensas áreas desse bioma foram convertidas em lavouras de grãos e pastagens.',
      enunciado: 'Considerando as características do bioma descrito, a substituição em larga escala de sua vegetação nativa por cultivos de raízes rasas tende a',
      alternativas: [
        'aumentar a infiltração da água da chuva no solo, elevando o volume dos aquíferos.',
        'reduzir a recarga dos aquíferos e a vazão de nascentes, com reflexos em bacias hidrográficas de outras regiões do país.',
        'transformar o clima da região em equatorial, com chuvas abundantes o ano todo.',
        'eliminar o período de seca, característico do clima tropical da região.',
        'ampliar a biodiversidade local, já que os cultivos agrícolas abrigam mais espécies que a vegetação nativa.'
      ],
      resposta: 1,
      explicacao: {
        resumo: 'Letra B. A vegetação do Cerrado, com raízes profundas, favorece a infiltração e a recarga dos aquíferos que alimentam nascentes; substituí-la reduz essa recarga e afeta rios que correm para outras regiões.',
        detalhada: 'O bioma descrito é o **Cerrado**, o segundo maior do país, que ocupa principalmente o Brasil Central. Seu clima é **tropical**, com duas estações bem marcadas: verão chuvoso e inverno seco. A vegetação é uma **savana** muito diversa, que vai de campos abertos a formações florestais. As árvores de tronco retorcido e casca grossa (que protege contra o fogo, comum na estação seca) e as **raízes profundas** fazem com que se diga que o Cerrado é uma "floresta de cabeça para baixo": boa parte da biomassa está no subsolo.\n\nEssas raízes e a cobertura vegetal ajudam a água da chuva a **infiltrar** no solo e a recarregar os **aquíferos**, que liberam água lentamente para as nascentes ao longo do ano, inclusive na seca. Como o Cerrado ocupa áreas elevadas do Planalto Central, de onde partem rios para várias direções, ele é chamado de "berço das águas" ou "caixa-d’água do Brasil". Quando a vegetação nativa é retirada, a infiltração diminui, o **escoamento superficial** aumenta, cresce a **erosão** e o **assoreamento** dos rios, e as nascentes podem perder vazão. O efeito se espalha por bacias que abastecem cidades, irrigam lavouras e geram energia em outras regiões, como o São Francisco no Nordeste e o Paraná no Sudeste e no Sul.\n\nHá também uma conexão com a Química e a história da agricultura: os solos do Cerrado são naturalmente **ácidos** e pobres em nutrientes. Técnicas de correção da acidez com calcário (**calagem**) e de adubação, desenvolvidas em boa parte por pesquisas da Embrapa, transformaram a região em grande produtora de grãos, mas também aceleraram a conversão da vegetação nativa.',
        alternativas: [
          'Errada. A retirada da vegetação nativa reduz a infiltração e aumenta o escoamento superficial.',
          'Correta. Menos infiltração significa menor recarga dos aquíferos e menos água para nascentes de bacias que drenam várias regiões.',
          'Errada. Mudanças no uso do solo não transformam um clima tropical em equatorial; os efeitos sobre as chuvas, quando ocorrem, tendem a ser de redução.',
          'Errada. A estação seca decorre da dinâmica das massas de ar e não desaparece com a agricultura.',
          'Errada. Monoculturas e pastagens abrigam muito menos espécies do que a vegetação nativa, uma das savanas mais ricas do mundo.'
        ],
        dica: 'Cerrado: "floresta de cabeça para baixo" e "berço das águas". Questões que relacionam desmatamento e água costumam envolver infiltração, recarga de aquíferos e nascentes.'
      },
      fontes: [{ titulo: 'Cerrado (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Cerrado' }, { titulo: 'Embrapa', url: 'https://www.embrapa.br/' }, MMA]
    },
    {
      id: 'geo-005',
      materia: 'geografia',
      assunto: 'Urbanização',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'Segundo os recenseamentos do IBGE, a população urbana brasileira, que era minoria em meados do século XX, ultrapassou a população rural entre os censos de 1960 e de 1970. Em poucas décadas, milhões de pessoas deixaram o campo, sobretudo em direção às capitais e às grandes cidades do Sudeste, que cresceram rapidamente e, em muitos casos, sem planejamento.',
      enunciado: 'Entre os fatores que explicam a intensidade desse processo, destaca-se',
      alternativas: [
        'a ampla reforma agrária realizada nos anos 1950, que fixou as famílias camponesas em pequenas propriedades.',
        'a desconcentração industrial, que levou as fábricas a se instalarem prioritariamente nas pequenas cidades do interior do Nordeste.',
        'a redução da natalidade no campo, que esvaziou as áreas rurais sem que houvesse migração.',
        'a modernização da agricultura combinada à concentração fundiária, que expulsou trabalhadores do campo, aliada à concentração da industrialização em poucos centros urbanos.',
        'a política de incentivo à migração das cidades para o campo, iniciada com a construção de Brasília.'
      ],
      resposta: 3,
      explicacao: {
        resumo: 'Letra D. O êxodo rural combinou fatores de expulsão no campo (mecanização e concentração de terras) e de atração nas cidades (indústria e serviços concentrados no Sudeste).',
        detalhada: 'A urbanização brasileira foi **tardia e acelerada**. Países como a Inglaterra levaram mais de um século para se tornar majoritariamente urbanos; o Brasil fez essa transição em poucas décadas, na segunda metade do século XX. Para entender a velocidade, é útil separar dois tipos de fatores.\n\n**Fatores de repulsão (no campo)**: a **modernização da agricultura**, com máquinas e insumos, reduziu a necessidade de mão de obra; a **concentração fundiária**, herdada da colonização e reforçada por leis como a Lei de Terras de 1850, deixava muitos trabalhadores sem terra própria; e as secas no semiárido nordestino agravavam a falta de condições de vida. **Fatores de atração (nas cidades)**: a **industrialização**, impulsionada desde a Era Vargas e acelerada no governo JK, concentrou-se no Sudeste, sobretudo em São Paulo, oferecendo empregos na indústria, na construção civil e nos serviços.\n\nO resultado foi um crescimento urbano **sem planejamento** suficiente. Muitos migrantes se instalaram em **periferias** distantes e em **favelas**, com carência de saneamento, transporte e moradia. As metrópoles se expandiram e se uniram às cidades vizinhas (**conurbação**), dando origem às **regiões metropolitanas**. Como a indústria não absorveu todos os migrantes, cresceu também o trabalho informal no setor de serviços.\n\nEsse processo conecta Geografia e História: a estrutura fundiária concentrada da época colonial e imperial, a industrialização varguista e o desenvolvimentismo de JK ajudam a explicar as cidades brasileiras de hoje.',
        alternativas: [
          'Errada. Não houve reforma agrária ampla no Brasil; a concentração de terras foi justamente um dos motores do êxodo.',
          'Errada. A industrialização do período foi concentrada no Sudeste, sobretudo em São Paulo; a desconcentração industrial é um processo posterior.',
          'Errada. A urbanização ocorreu principalmente pela migração campo-cidade; a natalidade, aliás, era alta no campo.',
          'Correta. Expulsão no campo e atração nas cidades industriais explicam a intensidade do êxodo rural.',
          'Errada. Brasília atraiu migrantes para uma nova cidade; não houve política de levar a população urbana para o campo.'
        ],
        dica: 'Êxodo rural no ENEM = fatores de repulsão (mecanização, concentração de terras, seca) + fatores de atração (indústria e serviços urbanos).'
      },
      fontes: [IBGE_EDUCA, { titulo: 'Êxodo rural (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/%C3%8Axodo_rural' }, { titulo: 'Urbanização (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Urbaniza%C3%A7%C3%A3o' }]
    },
    {
      id: 'geo-006',
      materia: 'geografia',
      assunto: 'Geopolítica',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'Em 1947, os Estados Unidos anunciaram um amplo programa de ajuda econômica para a reconstrução dos países europeus devastados pela Segunda Guerra Mundial. Oficialmente chamado de Programa de Recuperação Europeia e conhecido como Plano Marshall, ele transferiu bilhões de dólares em créditos, alimentos e equipamentos para a Europa Ocidental entre 1948 e 1952. A União Soviética recusou a ajuda e pressionou os países sob sua influência a fazerem o mesmo; em 1949, criou o Conselho para Assistência Econômica Mútua (Comecon).',
      enunciado: 'Do ponto de vista geopolítico, o Plano Marshall pode ser compreendido como',
      alternativas: [
        'parte da estratégia de contenção do socialismo, ao fortalecer economicamente aliados dos Estados Unidos e ampliar sua área de influência na Europa.',
        'uma iniciativa da Organização das Nações Unidas para unificar as economias capitalistas e socialistas.',
        'o marco do fim da Guerra Fria e da ordem bipolar.',
        'um acordo militar que deu origem ao Pacto de Varsóvia.',
        'uma política de isolamento dos Estados Unidos em relação aos assuntos europeus.'
      ],
      resposta: 0,
      explicacao: {
        resumo: 'Letra A. O Plano Marshall foi o braço econômico da política de contenção: reconstruir a Europa Ocidental reduzia o apelo do socialismo e consolidava a influência estadunidense.',
        detalhada: 'Ao fim da Segunda Guerra Mundial, o mundo se reorganizou em torno de duas superpotências: os **Estados Unidos**, capitalistas, e a **União Soviética**, socialista. Começava a **Guerra Fria**, uma disputa por poder e influência que não chegou ao confronto direto entre as duas, mas se manifestou em corrida armamentista, alianças militares, propaganda e guerras em outras regiões. É a chamada **ordem bipolar**.\n\nEm março de 1947, a **Doutrina Truman** anunciou que os EUA apoiariam países ameaçados pelo avanço comunista: era a política de **contenção**. A Europa Ocidental, arruinada pela guerra, com desemprego e escassez, era vista como terreno fértil para partidos comunistas. O **Plano Marshall** foi a face econômica dessa estratégia: ao financiar a reconstrução, os EUA estabilizavam aliados, abriam mercados para seus produtos e reduziam o apelo do socialismo. A recusa soviética e a criação do **Comecon** aprofundaram a divisão da Europa, que Churchill já havia descrito com a imagem de uma "cortina de ferro".\n\nNo plano militar, a divisão se completou com a **OTAN** (1949), liderada pelos EUA, e o **Pacto de Varsóvia** (1955), liderado pela URSS. A Alemanha foi dividida em dois Estados em 1949, e Berlim se tornou o símbolo do conflito. A Guerra Fria só terminou com a queda do Muro de Berlim (1989) e o fim da União Soviética (1991). Uma consequência duradoura do plano foi o estímulo à cooperação econômica entre os países da Europa Ocidental, um dos caminhos que levaram à integração europeia.',
        alternativas: [
          'Correta. A ajuda econômica fortalecia aliados e funcionava como instrumento da política de contenção.',
          'Errada. O plano era uma iniciativa dos EUA e aprofundou, em vez de unificar, a divisão entre os blocos.',
          'Errada. O plano é do início da Guerra Fria; o fim veio entre 1989 e 1991.',
          'Errada. O plano era econômico; o Pacto de Varsóvia foi a aliança militar soviética, criada em 1955 em resposta à OTAN.',
          'Errada. Ao contrário, o plano marcou o envolvimento direto e duradouro dos EUA na Europa.'
        ],
        dica: 'Doutrina Truman = contenção (política). Plano Marshall = contenção (economia). OTAN = contenção (militar). Do lado soviético: Comecon e Pacto de Varsóvia.'
      },
      fontes: [{ titulo: 'Plano Marshall (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Plano_Marshall' }, { titulo: 'Doutrina Truman (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Doutrina_Truman' }]
    },
    {
      id: 'geo-007',
      materia: 'geografia',
      assunto: 'Cartografia',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 3,
      objetivos: ['enem', 'livre'],
      textoBase: 'Uma empresa com escritórios em duas cidades organiza videoconferências diárias. A cidade X localiza-se a 45° de longitude oeste, e a cidade Y, a 75° de longitude leste. Considere que cada cidade adota a hora correspondente ao fuso teórico de sua longitude, sem horário de verão.',
      enunciado: 'Se uma reunião começa às 10h na cidade X, nesse momento serão, na cidade Y,',
      alternativas: ['2h do mesmo dia.', '8h do mesmo dia.', '12h do mesmo dia.', '16h do mesmo dia.', '18h do mesmo dia.'],
      resposta: 4,
      explicacao: {
        resumo: 'Letra E. Entre 45° O e 75° L há 120° de diferença, o que equivale a 8 horas; como Y fica a leste, está adiantada: 10h + 8h = 18h.',
        detalhada: 'Os fusos horários resultam do movimento de **rotação** da Terra: o planeta gira 360° em cerca de 24 horas, ou seja, **15° por hora**. Por isso, cada fuso horário teórico tem 15° de longitude. E, como a Terra gira de **oeste para leste**, o Sol "nasce" antes nos lugares mais a leste: **quem está a leste tem as horas adiantadas**; quem está a oeste, atrasadas.\n\nO cálculo se faz em três passos:\n- **diferença de longitude**: as cidades estão em hemisférios diferentes (uma a oeste e outra a leste de Greenwich), então as longitudes se **somam**: 45° + 75° = **120°**. Se estivessem no mesmo hemisfério, subtrairíamos;\n- **conversão em horas**: 120° ÷ 15° = **8 horas**;\n- **sentido**: Y está a leste de X, portanto está **adiantada**: 10h + 8h = **18h** do mesmo dia.\n\nUma conferência rápida: X está no fuso de −3 horas em relação a Greenwich (45 ÷ 15), e Y no fuso de +5 horas (75 ÷ 15). Quando são 10h em X, são 13h em Greenwich e 18h em Y.\n\nNa prática, os fusos **legais** seguem fronteiras políticas e não apenas os meridianos. O território brasileiro, por exemplo, por sua grande extensão leste-oeste, é dividido em quatro fusos horários. E a **Linha Internacional de Data**, próxima ao meridiano de 180°, marca onde o calendário muda de um dia para o outro.',
        alternativas: [
          'Errada. Subtraiu as 8 horas, como se Y estivesse a oeste de X.',
          'Errada. Usou a diferença 75° − 45° = 30° (2 horas) e ainda aplicou o sentido errado; longitudes em hemisférios opostos se somam.',
          'Errada. Aplicou o sentido certo, mas com a diferença errada de 30° (2 horas).',
          'Errada. Dividiu 120° por 20°, e não por 15°, obtendo 6 horas.',
          'Correta. 120° ÷ 15° = 8 horas; Y está a leste e, portanto, adiantada: 18h.'
        ],
        dica: 'Hemisférios diferentes: some as longitudes. Mesmo hemisfério: subtraia. Depois divida por 15 e lembre: leste adianta, oeste atrasa.'
      },
      fontes: [{ titulo: 'Fuso horário (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Fuso_hor%C3%A1rio' }, IBGE_EDUCA]
    },
    {
      id: 'geo-008',
      materia: 'geografia',
      assunto: 'Cartografia',
      tipo: 'certo-errado',
      estilo: 'CEBRASPE',
      dificuldade: 2,
      objetivos: ['enem', 'livre', 'concursos-gerais'],
      enunciado: 'Um mapa elaborado na escala 1:50.000 tem escala maior que um mapa elaborado na escala 1:250.000; por esse motivo, considerando folhas de mesmo tamanho, o primeiro representa uma área mais extensa do terreno, com menor nível de detalhamento.',
      resposta: false,
      explicacao: {
        resumo: 'Errado. A primeira parte está certa (1:50.000 é escala maior), mas a conclusão está invertida: escala maior representa área menor, com mais detalhes.',
        detalhada: 'A **escala** indica quantas vezes a realidade foi reduzida para caber no mapa. Na escala **1:50.000**, 1 cm no mapa equivale a 50.000 cm no terreno, isto é, **500 m**. Na escala **1:250.000**, 1 cm equivale a 250.000 cm, ou **2,5 km**.\n\nA escala é uma **fração**: 1/50.000 é maior do que 1/250.000, assim como 1/2 é maior do que 1/10. Por isso se diz que o mapa 1:50.000 tem **escala maior**. E aqui está o ponto que o item inverteu: quanto **maior a escala**, **menor a redução** da realidade. Numa mesma folha de papel, o mapa de escala grande mostra uma **área menor**, mas com **mais detalhes** (ruas, construções, pequenos rios). O mapa de escala pequena mostra uma **área maior**, com **menos detalhes**.\n\nExemplos práticos:\n- **escala grande** (como 1:2.000 ou 1:10.000): plantas de bairros, projetos urbanos, cadastro de lotes;\n- **escala média** (como 1:50.000 ou 1:100.000): cartas topográficas de municípios;\n- **escala pequena** (como 1:1.000.000 ou menores): mapas de estados, países e mapas-múndi.\n\nUm cálculo típico: numa carta 1:50.000, uma estrada de 6 cm no mapa mede 6 × 500 m = 3 km na realidade. Vale lembrar também a vantagem da **escala gráfica** (uma barra dividida em distâncias): se o mapa for ampliado ou reduzido numa fotocópia, ela continua válida, enquanto a escala numérica deixa de corresponder ao novo tamanho.',
        dica: 'Escala grande = denominador pequeno = área pequena = muitos detalhes. Decore a sequência inteira; as bancas sempre invertem um dos elos.'
      },
      fontes: [{ titulo: 'Escala cartográfica (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Escala_cartogr%C3%A1fica' }, IBGE_EDUCA]
    }
  ];

  var aulasGeografia = [
    {
      id: 'aula-geo-biomas',
      materia: 'geografia',
      assunto: 'Biomas brasileiros',
      titulo: 'Biomas brasileiros: características, distribuição e ameaças',
      duracaoMin: 20,
      resumo: 'Os seis biomas reconhecidos pelo IBGE, suas relações com clima, relevo e solo, as adaptações da vegetação e os principais desafios de conservação.',
      secoes: [
        {
          titulo: 'O que é um bioma e quais são os biomas do Brasil',
          texto: 'Um **bioma** é um conjunto de vida vegetal e animal formado por tipos de vegetação vizinhos e identificáveis em escala regional, com condições semelhantes de clima, relevo e solo e uma história comum de formação. Isso resulta em uma biodiversidade própria.\n\nO IBGE reconhece **seis biomas continentais** no Brasil. Em ordem aproximada de extensão:\n- **Amazônia**: cerca de metade do território;\n- **Cerrado**: perto de um quarto;\n- **Mata Atlântica**: em torno de 13%;\n- **Caatinga**: cerca de 10%;\n- **Pampa**: pouco mais de 2%;\n- **Pantanal**: perto de 2%.\n\nAlém da classificação em biomas, é comum encontrar nos livros os **domínios morfoclimáticos** propostos pelo geógrafo Aziz Ab’Sáber, que combinam relevo, clima, solo e vegetação: amazônico, dos cerrados, dos mares de morros, das caatingas, das araucárias e das pradarias, separados por **faixas de transição**. As duas classificações se parecem, mas não são idênticas: por exemplo, o domínio das araucárias corresponde, na classificação do IBGE, a uma parte da Mata Atlântica.'
        },
        {
          titulo: 'Amazônia',
          texto: 'O maior bioma brasileiro é dominado pela **floresta ombrófila** (que depende de muita chuva), sob **clima equatorial**: quente e úmido o ano todo, com chuvas abundantes. É atravessado pela maior bacia hidrográfica do planeta.\n\nUm ponto que cai muito em prova: apesar da floresta exuberante, os **solos** amazônicos são, em geral, **pobres** em nutrientes. A floresta se mantém por uma **ciclagem** rápida: folhas, galhos e animais mortos se decompõem depressa, e os nutrientes voltam logo para as plantas. Por isso, quando a floresta é derrubada, o solo exposto perde fertilidade em poucos anos.\n\nA vegetação varia conforme a relação com os rios: matas de **terra firme** (nunca alagadas), de **várzea** (alagadas periodicamente por rios de água barrenta) e de **igapó** (alagadas por longos períodos, geralmente por rios de água escura). A floresta também devolve à atmosfera enorme quantidade de vapor pela transpiração, que forma os chamados **"rios voadores"**, levando umidade para o Centro-Sul do país. As principais ameaças são o desmatamento, as queimadas, o garimpo ilegal e a abertura de estradas sem controle.'
        },
        {
          titulo: 'Cerrado e Pantanal',
          texto: 'O **Cerrado** ocupa sobretudo o Brasil Central, com **clima tropical** de verão chuvoso e inverno seco. É uma **savana** muito diversa, de campos abertos a matas. Suas plantas têm troncos tortuosos, casca grossa (proteção contra o fogo, que faz parte da dinâmica natural do bioma) e **raízes profundas**, motivo pelo qual é chamado de "floresta de cabeça para baixo". Por abrigar nascentes de grandes bacias, é o **"berço das águas"**. Os solos são ácidos, mas a correção com calcário e a mecanização o transformaram na principal fronteira agrícola do país, o que acelerou seu desmatamento.\n\nO **Pantanal** é uma das maiores **planícies alagáveis** do mundo, em Mato Grosso e Mato Grosso do Sul. Sua dinâmica é o **pulso de inundação**: na estação chuvosa, os rios transbordam e alagam grandes áreas; na seca, as águas recuam. Esse ciclo sustenta enorme concentração de fauna (aves, peixes, jacarés, onças). O Pantanal depende do que acontece no planalto ao redor, onde nascem seus rios: o desmatamento no Cerrado do entorno aumenta o **assoreamento**, e as secas severas favorecem grandes incêndios.'
        },
        {
          titulo: 'Mata Atlântica e Pampa',
          texto: 'A **Mata Atlântica** se estende ao longo do litoral, das encostas do Nordeste ao Sul, e avança para o interior. Inclui florestas úmidas de encosta, matas de **araucária** no planalto meridional, restingas e manguezais. Tem altíssima **biodiversidade** e muitas espécies **endêmicas** (que só existem ali), como o mico-leão-dourado.\n\nÉ o bioma **mais devastado** do país, porque foi o primeiro a ser ocupado: extração do pau-brasil, lavouras de cana e de café, industrialização e crescimento das grandes cidades. Restam fragmentos que somam apenas uma pequena fração da cobertura original, e é nessa área que vive a maior parte da população brasileira, que depende de seus rios e mananciais para o abastecimento.\n\nO **Pampa** ocorre, no Brasil, apenas no **Rio Grande do Sul**, estendendo-se ao Uruguai e à Argentina. É dominado por **campos** de gramíneas, sob **clima subtropical**, com chuvas bem distribuídas e invernos frios. A pecuária extensiva convive com o bioma há séculos; já a expansão de lavouras e da silvicultura reduziu muito os campos nativos. No sudoeste gaúcho ocorre a **arenização**, formação de areais em solos arenosos frágeis, processo diferente da desertificação, pois acontece em área de clima úmido.'
        },
        {
          titulo: 'Caatinga',
          texto: 'A **Caatinga** ocupa a maior parte do Nordeste e o norte de Minas Gerais, sob **clima semiárido**: chuvas baixas, concentradas em poucos meses e irregulares de um ano para outro. É o único bioma **exclusivamente brasileiro**.\n\nA vegetação é **xerófila** (adaptada à seca) e, em grande parte, **caducifólia** (perde as folhas na estiagem para reduzir a transpiração). Há cactáceas que armazenam água, como o mandacaru e o xique-xique, plantas com espinhos e árvores como o juazeiro, que permanece verde mesmo na seca. Depois das primeiras chuvas, a paisagem fica verde em poucos dias.\n\nAo contrário da imagem de "terra sem vida", a Caatinga tem grande biodiversidade e muitas espécies endêmicas. Os problemas incluem o desmatamento para lenha e carvão, o sobrepastoreio e a **desertificação** em algumas áreas. A ideia de **convivência com o semiárido**, com cisternas, barragens subterrâneas e manejo adequado da vegetação, substituiu a antiga lógica de "combate à seca", reconhecendo que a escassez de chuva é uma característica natural da região.'
        },
        {
          titulo: 'Ameaças e instrumentos de conservação',
          texto: 'As principais ameaças aos biomas brasileiros se repetem com intensidades diferentes:\n- **desmatamento** para agropecuária, mineração e expansão urbana;\n- **queimadas** e incêndios, agravados por secas mais intensas;\n- **fragmentação** dos ambientes, que isola populações de animais e plantas;\n- **espécies invasoras** e poluição dos rios.\n\nO país conta com instrumentos legais de proteção. O **Código Florestal** (Lei nº 12.651/2012) define as **Áreas de Preservação Permanente** (como margens de rios, nascentes e topos de morro) e a **Reserva Legal**, a parcela de cada imóvel rural que deve manter vegetação nativa: 80% em áreas de floresta na Amazônia Legal, 35% em áreas de cerrado na Amazônia Legal e 20% nos demais casos, inclusive em todo o restante do país. O **Sistema Nacional de Unidades de Conservação** (Lei nº 9.985/2000) organiza parques, reservas e outras áreas protegidas, e as **terras indígenas** também desempenham papel importante na manutenção da vegetação.\n\nConservar os biomas não é só proteger espécies: é garantir **serviços ecossistêmicos** como água para abastecimento e irrigação, regulação do clima, polinização das lavouras e proteção do solo contra a erosão.'
        }
      ],
      pontosChave: [
        'O IBGE reconhece seis biomas: Amazônia, Cerrado, Mata Atlântica, Caatinga, Pampa e Pantanal.',
        'Amazônia: clima equatorial, floresta exuberante sobre solos pobres, mantida pela ciclagem rápida de nutrientes.',
        'Cerrado: savana de clima tropical com estação seca, raízes profundas e nascentes de grandes bacias ("berço das águas").',
        'Mata Atlântica: altíssima biodiversidade e endemismo; é o bioma mais devastado.',
        'Caatinga: semiárido, vegetação xerófila e caducifólia; único bioma exclusivamente brasileiro.',
        'Pantanal: planície alagável regida pelo pulso de inundação; Pampa: campos do Rio Grande do Sul, com arenização no sudoeste.',
        'Código Florestal (APP e Reserva Legal) e unidades de conservação são os principais instrumentos de proteção.'
      ],
      fontes: [{ titulo: 'Biomas do Brasil (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Biomas_do_Brasil' }, IBGE_EDUCA, MMA]
    }
  ];

  /* ======================= BIOLOGIA ======================= */
  var KHAN = { titulo: 'Khan Academy em português', url: 'https://pt.khanacademy.org/' };

  var biologia = [
    {
      id: 'bio-001',
      materia: 'biologia',
      assunto: 'Citologia',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'Em um experimento didático, amostras de sangue foram colocadas em três tubos: no tubo 1, com solução de cloreto de sódio a 0,9% (o soro fisiológico); no tubo 2, com água destilada; e no tubo 3, com solução de cloreto de sódio a 3%. Após alguns minutos, a observação ao microscópio mostrou que as hemácias do tubo 1 mantinham a forma normal, as do tubo 3 estavam murchas e enrugadas e, no tubo 2, grande parte delas havia se rompido.',
      enunciado: 'O rompimento das hemácias no tubo 2 ocorreu porque',
      alternativas: [
        'o sal da água destilada entrou nas células por transporte ativo, aumentando sua pressão interna.',
        'a água saiu das hemácias por osmose, pois o meio era hipertônico em relação ao citoplasma.',
        'a parede celular das hemácias foi dissolvida pela água destilada.',
        'a água entrou nas hemácias por osmose, pois o meio era hipotônico em relação ao interior das células, que não têm parede celular para resistir ao aumento de volume.',
        'as hemácias perderam a membrana plasmática por difusão facilitada.'
      ],
      resposta: 3,
      explicacao: {
        resumo: 'Letra D. A água destilada é hipotônica: a água entra nas hemácias por osmose, elas incham e, sem parede celular, se rompem (hemólise).',
        detalhada: '**Osmose** é a passagem de **água** através de uma membrana semipermeável, do meio **menos concentrado** em solutos (hipotônico) para o **mais concentrado** (hipertônico). A membrana plasmática deixa a água passar com facilidade, mas controla a passagem de muitos solutos, como os íons de sódio.\n\nO experimento mostra as três situações possíveis:\n- **tubo 1 (0,9%)**: solução **isotônica**, com concentração equivalente à do interior da hemácia. A água entra e sai na mesma proporção, e a célula mantém a forma. É por isso que o soro fisiológico pode ser injetado na veia;\n- **tubo 3 (3%)**: solução **hipertônica**. A água sai das hemácias, que murcham e ficam enrugadas (processo chamado de **crenação**);\n- **tubo 2 (água destilada)**: meio **hipotônico**. A água entra nas hemácias, que incham até se romper. O rompimento das hemácias é a **hemólise**.\n\nO detalhe decisivo é que células animais **não têm parede celular**. Uma célula vegetal colocada em água pura também recebe água, mas a parede de celulose resiste à pressão, e a célula fica apenas **túrgida**. Em meio hipertônico, a célula vegetal perde água e a membrana se descola da parede: é a **plasmólise**.\n\nA conexão com a Química aparece na **pressão osmótica**, uma propriedade coligativa que depende da concentração de partículas dissolvidas. E o mesmo princípio explica a conservação de alimentos com sal ou açúcar: em meio muito concentrado, os microrganismos perdem água e não conseguem se multiplicar.',
        alternativas: [
          'Errada. A água destilada não contém sal, e o fenômeno é a entrada de água por osmose, um transporte passivo.',
          'Errada. Isso ocorreu no tubo 3, onde o meio era hipertônico e as hemácias murcharam.',
          'Errada. Hemácias, como as demais células animais, não possuem parede celular.',
          'Correta. Em meio hipotônico, a água entra por osmose e, sem parede celular, a hemácia se rompe.',
          'Errada. Difusão facilitada é um tipo de transporte de solutos por proteínas; não remove a membrana.'
        ],
        dica: 'A água vai para onde há "mais sal" (meio hipertônico). Célula animal em água pura estoura; célula vegetal fica túrgida graças à parede celular.'
      },
      fontes: [{ titulo: 'Osmose (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Osmose' }, KHAN]
    },
    {
      id: 'bio-002',
      materia: 'biologia',
      assunto: 'Citologia',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 3,
      objetivos: ['enem', 'livre'],
      textoBase: 'Alguns antibióticos, como as tetraciclinas e os aminoglicosídeos, agem impedindo a síntese de proteínas nas bactérias. Esses medicamentos se ligam a estruturas presentes no citoplasma bacteriano e interrompem a tradução do RNA mensageiro, sem afetar da mesma forma as células do paciente.',
      enunciado: 'A ação seletiva desses antibióticos é possível porque',
      alternativas: [
        'os ribossomos bacterianos têm estrutura e tamanho diferentes dos ribossomos do citoplasma das células humanas.',
        'as bactérias não possuem ribossomos e produzem proteínas diretamente no núcleo.',
        'as células humanas produzem proteínas apenas no complexo golgiense, que não é afetado pelo medicamento.',
        'as bactérias usam o DNA como molde direto para a síntese de proteínas, sem RNA mensageiro.',
        'os antibióticos destroem a parede celular, estrutura em que ocorre a tradução nas bactérias.'
      ],
      resposta: 0,
      explicacao: {
        resumo: 'Letra A. Os ribossomos de bactérias (70S) diferem dos ribossomos citoplasmáticos humanos (80S); o antibiótico se liga aos bacterianos e poupa, em grande parte, os do paciente.',
        detalhada: 'Os **ribossomos** são as estruturas que fazem a **tradução**: leem o RNA mensageiro e unem os aminoácidos na ordem correta para formar proteínas. Todas as células têm ribossomos, mas eles não são iguais. Nas bactérias (procariontes), os ribossomos são do tipo **70S**, formados por subunidades de 50S e 30S. No citoplasma das células eucarióticas, como as humanas, são do tipo **80S**, com subunidades de 60S e 40S. O "S" (unidade Svedberg) mede a velocidade de sedimentação na centrífuga, que reflete tamanho e forma.\n\nEssas diferenças de estrutura permitem que certos antibióticos se encaixem nos ribossomos bacterianos e bloqueiem a tradução, sem afetar da mesma maneira os ribossomos humanos. É um exemplo de **toxicidade seletiva**, princípio central da farmacologia: atingir uma estrutura que o patógeno tem e o hospedeiro não tem (ou tem de forma diferente). Outros antibióticos usam a mesma lógica com outros alvos; as penicilinas, por exemplo, impedem a formação da **parede celular** bacteriana, estrutura que nossas células não possuem.\n\nHá uma conexão interessante com a **Evolução**: as **mitocôndrias** têm ribossomos semelhantes aos bacterianos e DNA próprio e circular. Isso é uma das evidências da **teoria endossimbiótica**, segundo a qual as mitocôndrias descendem de bactérias que passaram a viver dentro de células ancestrais. Também ajuda a explicar alguns efeitos colaterais de antibióticos. E vale lembrar: antibióticos não agem contra **vírus**, que não têm ribossomos próprios nem parede celular, e o uso indevido favorece a seleção de bactérias resistentes.',
        alternativas: [
          'Correta. A diferença entre ribossomos 70S (bactérias) e 80S (citoplasma eucariótico) permite a ação seletiva.',
          'Errada. Bactérias têm ribossomos e não possuem núcleo organizado; seu material genético fica no citoplasma, no nucleoide.',
          'Errada. Nas células humanas, as proteínas são sintetizadas nos ribossomos; o complexo golgiense modifica e empacota proteínas já produzidas.',
          'Errada. Bactérias também transcrevem o DNA em RNA mensageiro e traduzem esse RNA nos ribossomos.',
          'Errada. A tradução ocorre nos ribossomos, no citoplasma; a parede é o alvo de outros antibióticos, como as penicilinas.'
        ],
        dica: 'Procariontes: ribossomos 70S, sem núcleo, sem organelas membranosas. Eucariontes: 80S no citoplasma. Mitocôndrias e cloroplastos lembram bactérias, pista da endossimbiose.'
      },
      fontes: [{ titulo: 'Ribossomo (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Ribossomo' }, { titulo: 'Resistência antimicrobiana (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Resist%C3%AAncia_antimicrobiana' }]
    },
    {
      id: 'bio-003',
      materia: 'biologia',
      assunto: 'Genética',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'A fibrose cística é uma doença hereditária que afeta principalmente os pulmões e o sistema digestório. Ela tem herança autossômica recessiva: só se manifesta em pessoas que herdam dois alelos alterados do gene CFTR, um de cada genitor. Um casal em que nenhum dos dois tem a doença teve um primeiro filho com fibrose cística e procurou um serviço de aconselhamento genético antes de planejar uma nova gravidez.',
      enunciado: 'A probabilidade de que o próximo filho desse casal seja uma menina com fibrose cística é de',
      alternativas: ['1/2', '1/4', '1/8', '1/16', '3/4'],
      resposta: 2,
      explicacao: {
        resumo: 'Letra C. Os pais são obrigatoriamente heterozigotos (Aa). A chance de um filho afetado (aa) é 1/4, e a de ser menina é 1/2; como são eventos independentes, 1/4 × 1/2 = 1/8.',
        detalhada: 'O primeiro passo é descobrir o **genótipo dos pais**. A doença é **autossômica recessiva**: quem a manifesta é **aa**. O filho afetado recebeu um alelo **a** de cada genitor. Como os pais **não têm** a doença, cada um tem também um alelo **A**. Logo, ambos são **heterozigotos (Aa)**, ou seja, portadores.\n\nO cruzamento **Aa × Aa** gera, pelo quadro de Punnett: 1/4 **AA**, 2/4 **Aa** e 1/4 **aa**. Portanto, a probabilidade de um filho com fibrose cística é **1/4**. A questão, porém, pede **menina E afetada**. O sexo do bebê é independente do gene CFTR, que está em um cromossomo autossômico, e a chance de ser menina é 1/2. Pela **regra do "e"** (eventos independentes, multiplicam-se as probabilidades): 1/4 × 1/2 = **1/8**.\n\nObserve que o fato de o primeiro filho já ter a doença **não altera** a chance do segundo: cada gestação é um evento independente, como cada lançamento de uma moeda. O primeiro filho serviu apenas para revelar que os pais são portadores.\n\nConexão com saúde pública: a fibrose cística está entre as doenças rastreadas pelo **teste do pezinho** na triagem neonatal do SUS, e o diagnóstico precoce melhora muito o tratamento. O aconselhamento genético, citado no texto, usa exatamente esse tipo de cálculo para informar os casais sobre riscos.',
        alternativas: [
          'Errada. 1/2 seria a probabilidade de um filho ser portador (Aa), ou de ser menina, mas não de ser menina afetada.',
          'Errada. 1/4 é a chance de um filho afetado, de qualquer sexo; faltou multiplicar pela chance de ser menina.',
          'Correta. 1/4 (afetado) × 1/2 (menina) = 1/8.',
          'Errada. Multiplicou por 1/2 uma vez a mais, possivelmente considerando de novo a chance de cada genitor transmitir o alelo.',
          'Errada. 3/4 é a probabilidade de um filho não ter a doença (AA ou Aa).'
        ],
        dica: 'Sempre leia se a questão pede "filho afetado" (1/4) ou "menina afetada"/"menino afetado" (1/4 × 1/2). E lembre: filhos anteriores não mudam a chance dos próximos.'
      },
      fontes: [{ titulo: 'Fibrose cística (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Fibrose_c%C3%ADstica' }, { titulo: 'Leis de Mendel (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Leis_de_Mendel' }, KHAN]
    },
    {
      id: 'bio-004',
      materia: 'biologia',
      assunto: 'Genética',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 3,
      objetivos: ['enem', 'livre'],
      textoBase: 'Em uma investigação de paternidade realizada antes da popularização dos testes de DNA, foram determinados os grupos sanguíneos do sistema ABO de três pessoas: a mãe, do grupo A; a criança, do grupo O; e o suposto pai, do grupo AB.',
      enunciado: 'Com base apenas nesses dados, conclui-se que',
      alternativas: [
        'o suposto pai é necessariamente o pai biológico, pois possui os dois alelos dominantes do sistema.',
        'a mãe não pode ser a mãe biológica, pois uma mulher do grupo A não pode ter filho do grupo O.',
        'a criança recebeu o alelo para o grupo A da mãe e o alelo recessivo do pai.',
        'não é possível tirar nenhuma conclusão, pois o grupo sanguíneo não é uma característica hereditária.',
        'o suposto pai pode ser excluído como pai biológico, pois uma pessoa do grupo AB transmite obrigatoriamente o alelo para A ou o alelo para B, e a criança do grupo O é homozigota recessiva.'
      ],
      resposta: 4,
      explicacao: {
        resumo: 'Letra E. A criança do grupo O é ii e precisa receber um alelo i de cada genitor. Um homem AB (genótipo IᴬIᴮ) não tem alelo i, logo não pode ser o pai biológico.',
        detalhada: 'O sistema **ABO** é um exemplo de **polialelia** (alelos múltiplos): existem três alelos para o mesmo gene, **Iᴬ**, **Iᴮ** e **i**. As relações entre eles são: Iᴬ e Iᴮ são **codominantes** entre si (quando estão juntos, os dois se manifestam) e ambos são **dominantes** sobre i. Assim:\n- grupo **A**: IᴬIᴬ ou Iᴬi;\n- grupo **B**: IᴮIᴮ ou Iᴮi;\n- grupo **AB**: IᴬIᴮ;\n- grupo **O**: ii.\n\nA criança é do grupo O, portanto **ii**: recebeu um alelo i da mãe e um alelo i do pai. A mãe, do grupo A, pode perfeitamente ser **Iᴬi**, então não há contradição do lado dela. Já o suposto pai, do grupo **AB**, tem genótipo **IᴬIᴮ**: qualquer gameta dele leva Iᴬ ou Iᴮ, nunca i. Ele, portanto, **não pode** ser o pai biológico de uma criança do grupo O.\n\nRepare na lógica: o tipo sanguíneo pode **excluir** uma paternidade, mas nunca **confirmá-la**, porque milhões de homens têm o mesmo grupo sanguíneo. Por isso, hoje se usam testes de DNA, que comparam muitas regiões variáveis do genoma e chegam a probabilidades altíssimas de confirmação.\n\nO sistema ABO também é a base das **transfusões**: as hemácias carregam antígenos (A, B, ambos ou nenhum), e o plasma contém anticorpos contra os antígenos ausentes. Por isso o grupo O, sem antígenos A e B nas hemácias, é chamado de doador universal de hemácias, e o AB, sem anticorpos anti-A e anti-B, de receptor universal. Na prática, os serviços de saúde também consideram o fator Rh e fazem testes de compatibilidade antes de cada transfusão.',
        alternativas: [
          'Errada. Ter os alelos Iᴬ e Iᴮ é justamente o que exclui esse homem: ele não tem o alelo i que a criança precisaria receber.',
          'Errada. Uma mulher do grupo A pode ser Iᴬi e ter filho ii com um parceiro que também transmita i.',
          'Errada. A criança é ii; recebeu i da mãe e i do pai, e não o alelo Iᴬ.',
          'Errada. O grupo sanguíneo é hereditário e segue padrões previsíveis, como mostra a análise.',
          'Correta. Um homem IᴬIᴮ não transmite o alelo i e, portanto, não pode ser pai de uma criança ii.'
        ],
        dica: 'Grupo sanguíneo exclui, mas não confirma paternidade. E pai ou mãe AB nunca tem filho O.'
      },
      fontes: [{ titulo: 'Sistema ABO (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Sistema_ABO' }, KHAN]
    },
    {
      id: 'bio-005',
      materia: 'biologia',
      assunto: 'Ecologia',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'Uma lagoa urbana passou a receber esgoto doméstico sem tratamento e a água de escoamento de áreas agrícolas próximas, ricas em fertilizantes. Meses depois, a superfície da água ficou coberta por uma camada esverdeada de algas e cianobactérias, a água tornou-se turva e com mau cheiro, e moradores relataram a morte de muitos peixes.',
      enunciado: 'A mortandade de peixes está relacionada principalmente',
      alternativas: [
        'ao aumento da concentração de gás oxigênio produzido pela fotossíntese das algas, que se torna tóxico para os peixes.',
        'à redução do oxigênio dissolvido, consumido em grande quantidade por microrganismos aeróbios que decompõem a matéria orgânica, incluindo as algas mortas.',
        'à diminuição da temperatura da água causada pela sombra da camada de algas.',
        'ao aumento da luminosidade no fundo da lagoa, que favorece os predadores dos peixes.',
        'à falta de nutrientes minerais na água, que impede o crescimento do fitoplâncton.'
      ],
      resposta: 1,
      explicacao: {
        resumo: 'Letra B. É a eutrofização: o excesso de nutrientes provoca a proliferação de algas; quando elas morrem, a decomposição aeróbia consome o oxigênio da água, e os peixes morrem por falta de O₂.',
        detalhada: 'A **eutrofização** começa com o **excesso de nutrientes**, sobretudo **nitrogênio e fósforo**, que chegam à água por esgoto doméstico (rico em matéria orgânica e em fosfatos de detergentes) e por fertilizantes carregados das lavouras pela chuva. Esses nutrientes costumam ser os fatores que limitam o crescimento das algas. Com eles em abundância, ocorre uma explosão populacional de algas e cianobactérias (a chamada **floração**).\n\nA sequência de eventos é encadeada:\n- a camada superficial de algas **bloqueia a luz**, e os organismos fotossintetizantes das camadas mais profundas morrem;\n- as próprias algas têm vida curta e morrem em massa;\n- toda essa matéria orgânica serve de alimento para **bactérias decompositoras aeróbias**, que se multiplicam e **consomem o oxigênio dissolvido** na água;\n- sem oxigênio suficiente, peixes e outros animais aquáticos morrem, o que gera ainda mais matéria orgânica para decompor;\n- em condições sem oxigênio, entram em ação bactérias **anaeróbias**, que liberam gases como o sulfeto de hidrogênio (H₂S), de cheiro de ovo podre.\n\nAlgumas cianobactérias produzem **toxinas** perigosas para a saúde humana; um caso marcante ocorreu em 1996, em Caruaru (PE), quando pacientes de uma clínica de hemodiálise morreram após o uso de água contaminada por cianotoxinas. A conexão com a Química também é útil: a solubilidade do oxigênio na água **diminui com o aumento da temperatura**, o que agrava o problema no verão. As soluções passam por **tratamento de esgoto**, uso racional de fertilizantes e preservação da **mata ciliar**, que filtra o escoamento.',
        alternativas: [
          'Errada. Durante o dia as algas produzem oxigênio, mas o problema é a falta de O₂ causada pela decomposição, e não o excesso.',
          'Correta. A decomposição aeróbia da grande quantidade de matéria orgânica esgota o oxigênio dissolvido.',
          'Errada. A sombra reduz a luz nas camadas profundas, mas o resfriamento não é a causa da mortandade.',
          'Errada. A camada de algas diminui, e não aumenta, a luminosidade no fundo.',
          'Errada. Ocorre o oposto: há excesso de nutrientes, que provoca a proliferação do fitoplâncton.'
        ],
        dica: 'Eutrofização tem uma ordem certa: nutrientes, explosão de algas, morte das algas, decompositores aeróbios, falta de O₂, morte dos peixes. Bancas costumam dizer que os peixes morrem por "excesso de oxigênio" ou "falta de nutrientes".'
      },
      fontes: [{ titulo: 'Eutrofização (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Eutrofiza%C3%A7%C3%A3o' }, KHAN]
    },
    {
      id: 'bio-006',
      materia: 'biologia',
      assunto: 'Ecologia',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'O Brasil está entre os maiores produtores de soja do mundo e, ainda assim, usa pouco adubo nitrogenado nessa cultura. Isso é possível porque as sementes são inoculadas com bactérias do gênero Bradyrhizobium, que se instalam em nódulos nas raízes da planta. Pesquisas da Embrapa apontam que essa tecnologia gera grande economia para os produtores e reduz impactos ambientais associados à fabricação e ao uso de fertilizantes.',
      enunciado: 'O benefício obtido com a inoculação deve-se ao fato de essas bactérias',
      alternativas: [
        'realizarem fotossíntese nas raízes, fornecendo glicose à planta.',
        'decomporem a matéria orgânica do solo, liberando gás nitrogênio para a atmosfera.',
        'converterem o nitrogênio atmosférico (N₂) em formas assimiláveis, como a amônia, que a planta utiliza para produzir proteínas e ácidos nucleicos.',
        'absorverem o fósforo do solo e o transformarem em nitrato.',
        'parasitarem as raízes, estimulando a planta a produzir mais grãos como resposta ao estresse.'
      ],
      resposta: 2,
      explicacao: {
        resumo: 'Letra C. As bactérias dos nódulos fazem a fixação biológica do nitrogênio: transformam o N₂ do ar, que a planta não consegue usar, em amônia, matéria-prima para proteínas e ácidos nucleicos.',
        detalhada: 'O **nitrogênio** é essencial para os seres vivos: faz parte dos **aminoácidos** (e, portanto, das proteínas) e das bases nitrogenadas do **DNA** e do **RNA**. O ar é composto por cerca de 78% de gás nitrogênio (N₂), mas plantas e animais não conseguem aproveitá-lo nessa forma, porque os dois átomos estão unidos por uma **ligação tripla**, muito estável. Quebrá-la exige muita energia.\n\nAlgumas bactérias têm uma enzima, a **nitrogenase**, capaz de fazer essa conversão: é a **fixação biológica do nitrogênio**. As bactérias dos gêneros **Rhizobium** e **Bradyrhizobium** vivem em **nódulos** nas raízes de **leguminosas** (soja, feijão, ervilha) numa relação de **mutualismo**: a planta fornece açúcares produzidos na fotossíntese, e as bactérias fornecem nitrogênio em forma assimilável. Por isso a soja brasileira dispensa, em grande parte, o adubo nitrogenado.\n\nO ciclo do nitrogênio tem outras etapas que costumam cair na prova:\n- **amonificação**: decompositores transformam o nitrogênio de restos orgânicos em amônia;\n- **nitrificação**: bactérias como Nitrosomonas e Nitrobacter transformam amônia em nitrito e depois em nitrato, forma muito absorvida pelas plantas;\n- **desnitrificação**: outras bactérias devolvem o nitrogênio à atmosfera como N₂.\n\nA conexão com a Química é o **processo Haber-Bosch**, que fixa o nitrogênio industrialmente para produzir amônia e fertilizantes, com alto consumo de energia, geralmente de origem fóssil. Daí a vantagem econômica e ambiental da fixação biológica, e também de práticas como a **rotação de culturas** e a **adubação verde** com leguminosas.',
        alternativas: [
          'Errada. Bactérias dos nódulos não fazem fotossíntese; quem fornece açúcares é a planta.',
          'Errada. Liberar N₂ para a atmosfera é a desnitrificação, que faz o nitrogênio sair do solo, o oposto do benefício descrito.',
          'Correta. A fixação biológica transforma N₂ em amônia, aproveitada pela planta.',
          'Errada. Fósforo e nitrogênio são elementos diferentes; nenhum organismo transforma um no outro.',
          'Errada. A relação é de mutualismo, com benefício para os dois lados, e não de parasitismo.'
        ],
        dica: 'Leguminosa + bactéria em nódulos = fixação de N₂ = mutualismo. Não confunda fixação (N₂ vira amônia) com nitrificação (amônia vira nitrato) e desnitrificação (volta ao N₂).'
      },
      fontes: [{ titulo: 'Fixação de nitrogênio (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Fixa%C3%A7%C3%A3o_de_nitrog%C3%AAnio' }, { titulo: 'Embrapa', url: 'https://www.embrapa.br/' }]
    },
    {
      id: 'bio-007',
      materia: 'biologia',
      assunto: 'Fisiologia humana',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 1,
      objetivos: ['enem', 'livre'],
      textoBase: 'Um trabalhador rural foi picado por uma jararaca e levado a um hospital, onde recebeu soro antibotrópico. Semanas depois, na mesma unidade de saúde, seu filho recebeu uma dose da vacina contra o tétano, conforme o calendário de vacinação.',
      enunciado: 'A diferença entre os dois procedimentos é que',
      alternativas: [
        'o soro fornece anticorpos prontos, produzidos em outro animal, conferindo proteção imediata e temporária, enquanto a vacina estimula o próprio organismo a produzir anticorpos e células de memória.',
        'o soro contém antígenos atenuados que estimulam a memória imunológica, enquanto a vacina contém anticorpos prontos.',
        'ambos conferem imunidade ativa e duradoura, diferindo apenas na via de aplicação.',
        'a vacina é usada no tratamento de quem já está doente, e o soro serve apenas para prevenção.',
        'o soro age destruindo o veneno por meio de enzimas digestivas, sem envolver componentes do sistema imunológico.'
      ],
      resposta: 0,
      explicacao: {
        resumo: 'Letra A. O soro dá imunidade passiva: anticorpos prontos, ação imediata e curta. A vacina dá imunidade ativa: o corpo produz os próprios anticorpos e guarda memória.',
        detalhada: 'O veneno de uma serpente age em minutos ou horas. Não dá tempo de o corpo da vítima "aprender" a combatê-lo. Por isso se usa o **soro**, que contém **anticorpos prontos** contra as toxinas. Esses anticorpos são produzidos em outro animal, tradicionalmente **cavalos**, que recebem pequenas doses do veneno, produzem anticorpos, e o plasma deles é purificado. É a **imunidade passiva artificial**: o efeito é **imediato**, mas **temporário**, porque os anticorpos recebidos são degradados com o tempo e o organismo não forma memória. O soro tem uso **terapêutico**, aplicado depois do acidente. O soro deve ser específico: o antibotrópico, por exemplo, serve para acidentes com jararacas (gênero Bothrops).\n\nA **vacina** funciona de outro modo. Ela contém **antígenos** (microrganismos mortos ou atenuados, partes deles ou toxinas inativadas; no caso do tétano, o **toxoide** tetânico) que estimulam o **próprio sistema imunológico** a produzir anticorpos e **células de memória**. É a **imunidade ativa artificial**: demora alguns dias ou semanas para se estabelecer, mas é **duradoura**, e por isso a vacina tem uso **preventivo**. As doses de reforço mantêm a memória ativa.\n\nOutros exemplos ajudam a fixar: a passagem de anticorpos da mãe para o bebê pela **placenta** e pelo **leite materno** é imunidade passiva natural; ter uma doença e se recuperar gera imunidade ativa natural. A conexão com a História do Brasil também é rica: o Instituto Butantan, em São Paulo, desenvolveu soros contra venenos de serpentes no início do século XX, com os trabalhos de Vital Brazil, e as campanhas de vacinação, desde a Revolta da Vacina, em 1904, fazem parte da história da saúde pública no país.',
        alternativas: [
          'Correta. Soro = anticorpos prontos (passiva, imediata, temporária); vacina = antígenos que induzem resposta própria e memória (ativa, duradoura).',
          'Errada. Inverteu os conceitos: quem contém antígenos é a vacina, e quem contém anticorpos prontos é o soro.',
          'Errada. Apenas a vacina gera imunidade ativa e duradoura; o soro confere imunidade passiva e temporária.',
          'Errada. Também inverte: o soro é terapêutico (usado após o acidente ou a doença), e a vacina é preventiva.',
          'Errada. O soro age por meio de anticorpos, que são componentes do sistema imunológico, e não de enzimas digestivas.'
        ],
        dica: 'Soro = Socorro (rápido, já com anticorpos). Vacina = preVenção (o corpo aprende e guarda memória).'
      },
      fontes: [{ titulo: 'Soro antiofídico (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Soro_antiof%C3%ADdico' }, { titulo: 'Vacina (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Vacina' }, { titulo: 'Imunidade passiva (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Imunidade_passiva' }]
    },
    {
      id: 'bio-008',
      materia: 'biologia',
      assunto: 'Evolução',
      tipo: 'multipla',
      estilo: 'ENEM',
      dificuldade: 2,
      objetivos: ['enem', 'livre'],
      textoBase: 'O uso frequente e muitas vezes desnecessário de antibióticos, em pessoas e na criação de animais, é apontado por organismos de saúde como uma das causas do aumento de infecções por bactérias resistentes, que já não respondem aos tratamentos convencionais. Interromper o tratamento antes do prazo indicado também é desaconselhado.',
      enunciado: 'Do ponto de vista evolutivo, o aumento da frequência de bactérias resistentes explica-se porque',
      alternativas: [
        'o antibiótico induz as bactérias a produzirem as mutações de que precisam para se tornarem resistentes.',
        'as bactérias se acostumam ao medicamento ao longo do tratamento, e essa característica adquirida passa aos descendentes.',
        'o organismo do paciente se torna imune ao antibiótico, que deixa de ser absorvido.',
        'variantes resistentes, já existentes na população por mutação ou obtidas por transferência de genes, sobrevivem ao antibiótico e se reproduzem, aumentando sua proporção nas gerações seguintes.',
        'o antibiótico elimina apenas as bactérias resistentes, favorecendo as sensíveis.'
      ],
      resposta: 3,
      explicacao: {
        resumo: 'Letra D. É seleção natural: o antibiótico não cria a resistência, ele elimina as bactérias sensíveis e deixa as resistentes, que já existiam, se multiplicarem.',
        detalhada: 'Em qualquer grande população de bactérias existe **variabilidade genética**. Ela surge por **mutações**, que ocorrem ao acaso durante a replicação do DNA, e por **transferência de genes** entre bactérias, por exemplo pela troca de **plasmídeos** na conjugação. Por acaso, algumas bactérias podem carregar genes que as tornam resistentes a determinado antibiótico.\n\nQuando o antibiótico é usado, ele funciona como um **agente seletivo**: as bactérias sensíveis morrem, e as resistentes sobrevivem e se reproduzem. Como as bactérias se multiplicam muito rápido, em pouco tempo a população passa a ser dominada pelas resistentes. Esse é o mecanismo de **seleção natural** proposto por Darwin: o ambiente não cria as variações, apenas **seleciona** as que já existem.\n\nIsso explica as recomendações de saúde: usar antibiótico sem necessidade (por exemplo, contra viroses, nas quais ele não age) multiplica as ocasiões de seleção; e **interromper o tratamento** antes da hora pode deixar vivas justamente as bactérias menos sensíveis, que voltam a se multiplicar. Um experimento clássico de Joshua e Esther Lederberg, nos anos 1950, usando a técnica de réplica em placa, mostrou que bactérias resistentes já existiam **antes** do contato com o agente seletivo.\n\nAs alternativas A e B trazem as duas confusões mais cobradas. A ideia de que o ambiente "provoca" a mutação necessária, ou de que a bactéria "se acostuma" e transmite essa característica adquirida, lembra a **teoria de Lamarck** (uso e desuso e herança dos caracteres adquiridos), que não é aceita para explicar esse fenômeno. A mesma lógica da seleção natural explica insetos resistentes a inseticidas e plantas daninhas resistentes a herbicidas.',
        alternativas: [
          'Errada. As mutações são aleatórias e não surgem "sob encomenda"; o antibiótico seleciona, mas não cria a resistência.',
          'Errada. "Acostumar-se" e transmitir a característica adquirida é uma explicação de tipo lamarckista.',
          'Errada. A resistência é das bactérias, e não do organismo do paciente.',
          'Correta. É seleção natural: sobrevivem e se reproduzem as variantes resistentes que já existiam.',
          'Errada. Ocorre o inverso: o antibiótico elimina as sensíveis e favorece as resistentes.'
        ],
        dica: 'Se a alternativa diz que o ambiente "induz", "provoca" ou "ensina" a adaptação, é lamarckismo. Darwin: a variação vem antes, o ambiente seleciona.'
      },
      fontes: [{ titulo: 'Resistência antimicrobiana (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Resist%C3%AAncia_antimicrobiana' }, { titulo: 'Seleção natural (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Sele%C3%A7%C3%A3o_natural' }, KHAN]
    }
  ];

  var aulasBiologia = [
    {
      id: 'aula-bio-genetica',
      materia: 'biologia',
      assunto: 'Genética',
      titulo: 'Genética mendeliana: dos conceitos básicos aos heredogramas',
      duracaoMin: 25,
      resumo: 'Vocabulário da genética, as leis de Mendel, o cálculo de probabilidades, a leitura de heredogramas, os grupos sanguíneos e a herança ligada ao sexo, com o raciocínio que o ENEM cobra.',
      secoes: [
        {
          titulo: 'Vocabulário essencial',
          texto: 'Antes de resolver qualquer cruzamento, é preciso dominar os termos:\n- **Gene**: trecho de DNA que contém a informação para uma característica (em geral, para produzir uma proteína).\n- **Locus**: posição do gene no cromossomo.\n- **Alelos**: versões diferentes de um mesmo gene, que ocupam o mesmo locus em **cromossomos homólogos**. Como herdamos um cromossomo de cada par do pai e outro da mãe, temos dois alelos para cada gene autossômico.\n- **Genótipo**: a combinação de alelos (AA, Aa, aa).\n- **Fenótipo**: a característica observável, que resulta do genótipo em interação com o **ambiente**.\n- **Homozigoto**: tem dois alelos iguais (AA ou aa). **Heterozigoto**: tem alelos diferentes (Aa).\n- **Dominante**: alelo que se manifesta mesmo em dose única (A). **Recessivo**: só se manifesta em homozigose (aa).\n\nExemplo: em uma doença recessiva, a pessoa Aa não tem a doença, mas é **portadora** e pode transmitir o alelo a aos filhos.'
        },
        {
          titulo: 'As leis de Mendel',
          texto: 'No século XIX, o monge **Gregor Mendel** cruzou linhagens puras de ervilhas (Pisum sativum) e analisou os descendentes por várias gerações. Ao cruzar plantas de sementes amarelas puras (AA) com plantas de sementes verdes puras (aa), obteve na primeira geração (F1) **100% de sementes amarelas** (Aa). Ao cruzar as plantas da F1 entre si, a segunda geração (F2) mostrou a proporção de **3 amarelas para 1 verde**.\n\nA **Primeira Lei de Mendel** (lei da segregação) explica esse resultado: cada indivíduo tem dois fatores (hoje, alelos) para cada característica, que se **separam na formação dos gametas**; cada gameta leva apenas um deles. Hoje sabemos que essa separação ocorre na **meiose**, com a separação dos cromossomos homólogos.\n\nO quadro de Punnett de **Aa × Aa** dá: 1/4 AA, 2/4 Aa e 1/4 aa, isto é, proporção **genotípica 1:2:1** e **fenotípica 3:1**. Para descobrir se um indivíduo dominante é AA ou Aa, faz-se o **cruzamento-teste** com um recessivo (aa): se aparecer algum descendente recessivo, o indivíduo testado era Aa.\n\nA **Segunda Lei** (segregação independente) trata de dois ou mais genes em cromossomos diferentes: no cruzamento de dois di-híbridos (AaBb × AaBb), a proporção fenotípica esperada é **9:3:3:1**.'
        },
        {
          titulo: 'Probabilidade aplicada à genética',
          texto: 'Quase toda questão de genética termina em um cálculo de probabilidade. Duas regras resolvem a maioria dos casos:\n- **Regra do "e"** (eventos independentes que devem ocorrer juntos): **multiplicam-se** as probabilidades. Ex.: chance de um filho de pais Aa ser aa **e** menino = 1/4 × 1/2 = 1/8.\n- **Regra do "ou"** (eventos que se excluem): **somam-se** as probabilidades. Ex.: chance de um filho de pais Aa ser AA **ou** aa = 1/4 + 1/4 = 1/2.\n\nTrês cuidados frequentes:\n- **Cada gestação é independente**: ter tido um filho afetado não muda a chance do próximo.\n- **Probabilidade condicional**: se o enunciado já informa que um filho de pais Aa **não é afetado**, a chance de ele ser portador é **2/3**, e não 1/2, porque os afetados (aa) saem do universo de possibilidades, restando AA, Aa e Aa.\n- **Ordem**: "dois filhos, um afetado e um normal" admite duas ordens (primeiro afetado ou primeiro normal), e a probabilidade deve ser multiplicada por 2.'
        },
        {
          titulo: 'Lendo heredogramas',
          texto: 'O **heredograma** (genealogia) representa a família com símbolos padronizados: **quadrado** para homem, **círculo** para mulher, símbolo **preenchido** para quem tem a característica, traço horizontal unindo o casal e traço vertical levando aos filhos.\n\nPara descobrir o tipo de herança, procure os **casos-chave**:\n- **pais sem a característica com um filho que a tem**: a característica é **recessiva** (os pais são portadores, Aa). Se uma filha afetada tem pai não afetado, a herança é **autossômica** recessiva;\n- **pais com a característica e um filho sem ela**: a característica é **dominante** (os pais são Aa);\n- na herança dominante, todo afetado tem **ao menos um genitor afetado**, e a característica não "pula" gerações.\n\nDepois de definir o padrão, preencha os genótipos que são **certos** (todo recessivo é aa; todo filho aa tem pais com pelo menos um a) e só então calcule as probabilidades pedidas.'
        },
        {
          titulo: 'Alelos múltiplos e grupos sanguíneos',
          texto: 'Quando um gene tem mais de dois alelos na população, falamos em **polialelia**. O exemplo clássico é o sistema **ABO**, com os alelos **Iᴬ**, **Iᴮ** e **i**. Iᴬ e Iᴮ são **codominantes** entre si e dominantes sobre i:\n- grupo A: IᴬIᴬ ou Iᴬi;\n- grupo B: IᴮIᴮ ou Iᴮi;\n- grupo AB: IᴬIᴮ;\n- grupo O: ii.\n\nConsequências úteis: pais A e B podem ter filhos de qualquer grupo (se forem Iᴬi e Iᴮi); pais O só têm filhos O; quem é AB não tem filho O. Por isso o tipo sanguíneo pode **excluir** uma paternidade, mas não confirmá-la.\n\nO **fator Rh** é outra característica: Rh positivo é dominante sobre Rh negativo. Ele explica a **eritroblastose fetal**: uma mãe Rh negativo que gera um filho Rh positivo pode produzir anticorpos anti-Rh após o contato com o sangue do bebê, geralmente no parto; numa gestação seguinte de bebê Rh positivo, esses anticorpos podem atravessar a placenta e destruir as hemácias do feto. A prevenção é feita com a aplicação de imunoglobulina anti-D na mãe Rh negativo, em geral por volta da 28ª semana de gestação e até 72 horas após o parto de um bebê Rh positivo.'
        },
        {
          titulo: 'Herança ligada ao sexo',
          texto: 'Na espécie humana, mulheres têm cromossomos sexuais **XX**, e homens, **XY**. Genes localizados na porção do cromossomo **X** sem correspondência no Y seguem a **herança ligada ao sexo**. Os exemplos clássicos são o **daltonismo** e a **hemofilia A**, ambos recessivos.\n\nComo o homem tem um único X, basta **um alelo recessivo** para que ele manifeste a característica (ele é **hemizigoto**). A mulher precisa de dois alelos recessivos, por isso essas condições são **mais frequentes em homens**. Duas regras práticas:\n- o pai transmite seu X a **todas as filhas** e o Y a **todos os filhos**; portanto, um pai daltônico não transmite o daltonismo aos filhos homens;\n- o filho homem recebe o X **sempre da mãe**.\n\nExemplo: mulher portadora (XᴰXᵈ) com homem de visão normal (XᴰY). As filhas recebem o Xᴰ do pai e não serão daltônicas (metade será portadora). Entre os filhos homens, **metade** receberá o Xᵈ da mãe e será daltônica. Repare na diferença de pergunta: "probabilidade de um filho homem ser daltônico" é 1/2; "probabilidade de o próximo filho ser um menino daltônico" é 1/4.'
        }
      ],
      pontosChave: [
        'Genótipo é a combinação de alelos; fenótipo é a característica observável, que depende também do ambiente.',
        'Primeira Lei de Mendel: os alelos se separam na formação dos gametas; Aa × Aa dá 1:2:1 de genótipos e 3:1 de fenótipos.',
        'Regra do "e" multiplica; regra do "ou" soma; cada gestação é um evento independente.',
        'Filho de pais Aa que não é afetado tem 2/3 de chance de ser portador.',
        'Pais normais com filho afetado indicam herança recessiva; pais afetados com filho normal indicam herança dominante.',
        'ABO: Iᴬ e Iᴮ codominantes, i recessivo; AB não tem filho O; tipo sanguíneo exclui, mas não confirma paternidade.',
        'Daltonismo e hemofilia são ligados ao X e mais comuns em homens; o filho homem recebe o X da mãe.'
      ],
      fontes: [{ titulo: 'Leis de Mendel (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Leis_de_Mendel' }, { titulo: 'Herança ligada ao sexo (Wikipédia)', url: 'https://pt.wikipedia.org/wiki/Heran%C3%A7a_ligada_ao_sexo' }, KHAN]
    }
  ];

  Banco.registrar({
    questoes: [].concat(informatica, historia, geografia, biologia),
    aulas: [].concat(aulasInformatica, aulasHistoria, aulasGeografia, aulasBiologia)
  });
})();
