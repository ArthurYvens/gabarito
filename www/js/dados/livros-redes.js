/* Questões inéditas sobre redes de computadores (assunto "Redes e internet"), escritas para o app. */
Banco.registrar({ questoes: [
  {
    id: 'inf-861', materia: 'informatica', assunto: 'Redes e internet', tipo: 'multipla', estilo: 'FCC', dificuldade: 1,
    objetivos: ['concursos-gerais', 'tribunais', 'estatais'],
    enunciado: 'Em uma rede, um roteador recebe um pacote e decide por qual interface encaminhá-lo consultando sua tabela de rotas e o endereço IP de destino. Essa decisão de encaminhamento pertence, no modelo OSI, à camada de',
    alternativas: ['enlace de dados.', 'transporte.', 'rede.', 'sessão.', 'física.'],
    resposta: 2,
    explicacao: {
      resumo: 'O endereçamento lógico (IP) e o roteamento entre redes são funções da camada 3 do modelo OSI, a camada de rede.',
      detalhada: 'No modelo OSI de sete camadas, a **camada de rede (3)** cuida do endereçamento lógico e do **roteamento** dos pacotes entre redes diferentes. O roteador é o equipamento típico dessa camada.\n\n- **Enlace (2)**: quadros e endereços MAC dentro de um mesmo enlace (switch).\n- **Transporte (4)**: comunicação entre processos, com portas (TCP e UDP).\n- **Sessão (5)**: controle de diálogo entre aplicações.\n- **Física (1)**: bits no meio de transmissão.',
      alternativas: [
        'Errada. A camada de enlace usa o endereço MAC e atua dentro do mesmo enlace, sem escolher rotas entre redes.',
        'Errada. O transporte identifica processos por portas e não escolhe o caminho dos pacotes.',
        'Correta. O IP de destino e a tabela de rotas pertencem à camada de rede.',
        'Errada. A sessão gerencia o diálogo entre aplicações, não o encaminhamento.',
        'Errada. A camada física trata sinais e bits, sem interpretar endereços.'
      ],
      dica: 'IP e roteador: camada 3 (rede). MAC e switch: camada 2 (enlace). Porta: camada 4 (transporte).'
    },
    fontes: [{ titulo: 'RFC 1812 - Requirements for IP Version 4 Routers (encaminhamento pela camada IP)', url: 'https://www.rfc-editor.org/rfc/rfc1812' }]
  },
  {
    id: 'inf-862', materia: 'informatica', assunto: 'Redes e internet', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 2,
    objetivos: ['concursos-gerais', 'bancarios', 'estatais'],
    enunciado: 'A arquitetura TCP/IP é descrita em quatro camadas: enlace, internet, transporte e aplicação. Quando se compara essa arquitetura ao modelo OSI, a camada de aplicação do TCP/IP reúne as funções das camadas OSI de',
    alternativas: [
      'sessão, apresentação e aplicação.',
      'rede, sessão e aplicação.',
      'transporte, sessão e apresentação.',
      'enlace de dados, rede e transporte.',
      'apresentação e aplicação, somente.'
    ],
    resposta: 0,
    explicacao: {
      resumo: 'No TCP/IP, a camada de aplicação concentra o que o OSI divide em sessão (5), apresentação (6) e aplicação (7).',
      detalhada: 'A correspondência usual entre os modelos é:\n\n- **Aplicação (TCP/IP)** = aplicação + apresentação + sessão (OSI 7, 6 e 5);\n- **Transporte** = transporte (OSI 4);\n- **Internet** = rede (OSI 3);\n- **Enlace/acesso à rede** = enlace + física (OSI 2 e 1).\n\nProtocolos como HTTP, DNS, SMTP e DHCP são tratados, no TCP/IP, como protocolos da camada de aplicação, inclusive quando cuidam de formatação ou de sessão.',
      alternativas: [
        'Correta. É a correspondência clássica: OSI 5, 6 e 7.',
        'Errada. A camada de rede corresponde à camada internet do TCP/IP.',
        'Errada. O transporte tem camada própria no TCP/IP.',
        'Errada. Enlace de dados e rede (OSI 2 e 3) ficam nas camadas inferiores do TCP/IP, e o transporte (OSI 4) tem camada própria; nenhuma delas pertence à aplicação.',
        'Errada. Falta a camada de sessão, que também é absorvida pela aplicação.'
      ],
      dica: 'TCP/IP tem 4 camadas: 7+6+5 do OSI viram uma só (aplicação); 2+1 viram outra (enlace).'
    },
    fontes: [{ titulo: 'RFC 1122, seção 1.1.3 - as quatro camadas da arquitetura TCP/IP (a comparação com o OSI é convenção didática)', url: 'https://www.rfc-editor.org/rfc/rfc1122' }]
  },
  {
    id: 'inf-863', materia: 'informatica', assunto: 'Redes e internet', tipo: 'multipla', estilo: 'Vunesp', dificuldade: 2,
    objetivos: ['concursos-gerais', 'tribunais', 'estatais'],
    enunciado: 'Um switch Ethernet de camada 2 acabou de ser ligado e sua tabela de endereços está vazia. O computador P1 envia um quadro ao computador P2, cujo endereço MAC o switch ainda não conhece. Nessa situação, o comportamento esperado do switch é',
    alternativas: [
      'descartar o quadro, pois só encaminha após consultar um servidor DHCP.',
      'enviar o quadro apenas ao roteador padrão, que resolve o destino.',
      'consultar um servidor DNS para descobrir a porta de P2.',
      'devolver o quadro a P1 com uma mensagem de erro ICMP.',
      'registrar o MAC de origem na porta de P1 e inundar o quadro pelas demais portas.'
    ],
    resposta: 4,
    explicacao: {
      resumo: 'O switch aprende o MAC de origem na porta de entrada e, se o destino é desconhecido, replica o quadro por todas as outras portas (flooding).',
      detalhada: 'Um switch aprende **observando o endereço MAC de origem** de cada quadro e associando-o à porta por onde chegou. Quando o MAC de **destino** ainda não está na tabela (ou é broadcast), o quadro é **inundado** por todas as portas, exceto a de entrada, na mesma VLAN.\n\nQuando P2 responder, o switch aprende a porta dele, e os quadros seguintes passam a ser enviados somente a ela (encaminhamento unicast).\n\nDHCP, DNS e ICMP são protocolos de camadas superiores e não participam desse aprendizado.',
      alternativas: [
        'Errada. O switch não depende de DHCP para encaminhar quadros.',
        'Errada. O quadro não é enviado só ao roteador; o destino pode estar no próprio enlace.',
        'Errada. DNS traduz nomes em IP e não ajuda o switch.',
        'Errada. O switch não gera ICMP para esse caso.',
        'Correta. Aprendizado pelo MAC de origem e flooding para destino desconhecido.'
      ],
      dica: 'Switch aprende pela origem e decide pelo destino; destino desconhecido = flooding.'
    },
    fontes: [{ titulo: 'RFC 4541 - IGMP/MLD Snooping Switches (descreve o encaminhamento por switches L2, incluindo flooding)', url: 'https://www.rfc-editor.org/rfc/rfc4541' }]
  },
  {
    id: 'inf-864', materia: 'informatica', assunto: 'Redes e internet', tipo: 'multipla', estilo: 'FGV', dificuldade: 2,
    objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'O computador de um técnico foi configurado com o endereço IPv4 192.168.10.77 e a máscara de sub-rede 255.255.255.192 (/26). O endereço de broadcast dessa sub-rede é',
    alternativas: ['192.168.10.63', '192.168.10.127', '192.168.10.128', '192.168.10.255', '192.168.10.79'],
    resposta: 1,
    explicacao: {
      resumo: 'Com /26, os blocos têm 64 endereços (0-63, 64-127, ...). O 77 está no bloco 64-127, cujo broadcast é 192.168.10.127.',
      detalhada: 'A máscara 255.255.255.192 tem 26 bits de rede e 6 bits de host, ou seja, blocos de 2^6 = **64 endereços** no último octeto: 0-63, 64-127, 128-191, 192-255.\n\nO final 77 cai no bloco **64-127**:\n\n- endereço de rede: 192.168.10.64;\n- hosts válidos: 192.168.10.65 a 192.168.10.126 (62 hosts);\n- **broadcast: 192.168.10.127** (todos os bits de host em 1).',
      alternativas: [
        'Errada. É o broadcast do bloco anterior (0-63).',
        'Correta. Último endereço do bloco 64-127.',
        'Errada. É o endereço de rede do bloco seguinte.',
        'Errada. Seria o broadcast de uma sub-rede /24 inteira.',
        'Errada. É apenas um endereço de host comum no meio do bloco.'
      ],
      dica: 'Tamanho do bloco = 256 - último octeto da máscara (256 - 192 = 64). Broadcast = próximo bloco menos 1.'
    },
    fontes: [{ titulo: 'RFC 4632 - Classless Inter-domain Routing (CIDR)', url: 'https://www.rfc-editor.org/rfc/rfc4632' }]
  },
  {
    id: 'inf-865', materia: 'informatica', assunto: 'Redes e internet', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 3,
    objetivos: ['concursos-gerais', 'bancarios', 'estatais'],
    enunciado: 'Uma agência precisa de uma sub-rede IPv4 capaz de acomodar 500 computadores, desperdiçando o mínimo possível de endereços. Dentre as máscaras abaixo, a que atende a esse requisito é',
    alternativas: ['255.255.255.0', '255.255.252.0', '255.255.255.128', '255.255.254.0', '255.255.248.0'],
    resposta: 3,
    explicacao: {
      resumo: 'Para 500 hosts são necessários 9 bits de host (2^9 - 2 = 510), o que dá prefixo /23, ou seja, 255.255.254.0.',
      detalhada: 'Em cada sub-rede, dois endereços não servem a hosts (rede e broadcast). Assim, hosts úteis = 2^n - 2.\n\n- 8 bits: 2^8 - 2 = 254 (insuficiente);\n- **9 bits: 2^9 - 2 = 510** (suficiente);\n- 10 bits: 1022 (serve, mas desperdiça mais).\n\nCom 9 bits de host sobram 32 - 9 = **23 bits de rede**: /23 = **255.255.254.0** (os dois primeiros octetos em 255; o terceiro, 11111110 = 254).',
      alternativas: [
        'Errada. /24 oferece só 254 hosts.',
        'Errada. /22 comporta 1022 hosts: atende, mas desperdiça endereços.',
        'Errada. /25 oferece só 126 hosts.',
        'Correta. /23, com 510 hosts úteis.',
        'Errada. /21 comporta 2046 hosts, desperdício grande.'
      ],
      dica: 'Descubra a potência de 2 imediatamente acima de hosts + 2 (500 + 2 = 502, logo 512 = 2^9).'
    },
    fontes: [{ titulo: 'RFC 4632 - Classless Inter-domain Routing (CIDR)', url: 'https://www.rfc-editor.org/rfc/rfc4632' }]
  },
  {
    id: 'inf-866', materia: 'informatica', assunto: 'Redes e internet', tipo: 'multipla', estilo: 'FGV', dificuldade: 3,
    objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'Um administrador deseja anunciar, em uma única rota, as quatro redes contíguas 10.1.0.0/24, 10.1.1.0/24, 10.1.2.0/24 e 10.1.3.0/24, sem incluir endereços que não pertençam a elas. O prefixo agregado correto é',
    alternativas: ['10.1.0.0/22', '10.1.0.0/23', '10.1.0.0/21', '10.1.0.0/16', '10.1.0.0/25'],
    resposta: 0,
    explicacao: {
      resumo: 'Os terceiros octetos 0 a 3 variam em 2 bits (00000000 a 00000011), então o resumo é /24 - 2 = /22.',
      detalhada: 'Para agregar (sumarizar), procure os bits em comum. Os três primeiros octetos de cada rota diferem apenas no terceiro, que vai de 0 a 3:\n\n- 0 = 00000000\n- 1 = 00000001\n- 2 = 00000010\n- 3 = 00000011\n\nOs 6 primeiros bits do terceiro octeto são comuns; os 2 últimos variam. Logo o prefixo comum tem 16 + 6 = **22 bits**: **10.1.0.0/22** (máscara 255.255.252.0), que cobre exatamente 10.1.0.0 a 10.1.3.255.',
      alternativas: [
        'Correta. Cobre exatamente as quatro redes /24.',
        'Errada. /23 cobre apenas duas redes /24 (10.1.0.0 e 10.1.1.0).',
        'Errada. /21 cobriria oito redes /24, incluindo endereços fora do pedido.',
        'Errada. /16 é um agregado grande demais, com 256 redes /24.',
        'Errada. /25 é mais específico que as redes originais.'
      ],
      dica: 'Quatro blocos iguais e contíguos = 2 bits a menos no prefixo (2^2 = 4).'
    },
    fontes: [{ titulo: 'RFC 4632 - CIDR e agregação de rotas', url: 'https://www.rfc-editor.org/rfc/rfc4632' }]
  },
  {
    id: 'inf-867', materia: 'informatica', assunto: 'Redes e internet', tipo: 'multipla', estilo: 'FCC', dificuldade: 2,
    objetivos: ['concursos-gerais', 'tribunais', 'estatais'],
    enunciado: 'A RFC 1918 reserva faixas de endereços IPv4 para uso em redes privadas, que não são roteadas na internet pública. Entre os endereços abaixo, o que pertence a uma dessas faixas é',
    alternativas: ['172.32.10.5', '192.169.1.1', '172.31.255.254', '100.64.0.1', '169.254.10.1'],
    resposta: 2,
    explicacao: {
      resumo: 'As faixas da RFC 1918 são 10.0.0.0/8, 172.16.0.0/12 (172.16.0.0 a 172.31.255.255) e 192.168.0.0/16. Só 172.31.255.254 está em uma delas.',
      detalhada: 'Faixas privadas da **RFC 1918**:\n\n- **10.0.0.0/8** (10.0.0.0 a 10.255.255.255);\n- **172.16.0.0/12** (172.16.0.0 a 172.31.255.255);\n- **192.168.0.0/16** (192.168.0.0 a 192.168.255.255).\n\nA pegadinha está no bloco 172: o /12 termina em 172.31, de modo que 172.32.x.x é endereço **público**. Também 192.169.x.x é público. O 100.64.0.0/10 é o espaço compartilhado de CGNAT (RFC 6598) e o 169.254.0.0/16 é de enlace local (autoconfiguração), nenhum dos dois é RFC 1918.',
      alternativas: [
        'Errada. Fora do /12: o bloco privado termina em 172.31.255.255.',
        'Errada. O bloco privado é 192.168.x.x, e não 192.169.x.x.',
        'Correta. Está dentro de 172.16.0.0/12.',
        'Errada. Espaço de CGNAT (RFC 6598), não RFC 1918.',
        'Errada. Endereço de enlace local (APIPA/link-local), não RFC 1918.'
      ],
      dica: 'Decore os limites: 10/8, 172.16 a 172.31, 192.168. Pegadinhas clássicas: 172.32 e 192.169.'
    },
    fontes: [{ titulo: 'RFC 1918 - Address Allocation for Private Internets', url: 'https://www.rfc-editor.org/rfc/rfc1918' }]
  },
  {
    id: 'inf-868', materia: 'informatica', assunto: 'Redes e internet', tipo: 'multipla', estilo: 'FGV', dificuldade: 3,
    objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'O endereço IPv6 2001:0db8:0000:0000:0008:0000:0000:0001 pode ser escrito de forma abreviada. Seguindo a representação textual recomendada pela RFC 5952, a forma correta é',
    alternativas: [
      '2001:db8::8::1',
      '2001:db8:0:0:8::1',
      '2001:DB8::8:0:0:1',
      '2001:0db8::8:0:0:1',
      '2001:db8::8:0:0:1'
    ],
    resposta: 4,
    explicacao: {
      resumo: 'Removem-se os zeros à esquerda de cada grupo, usa-se "::" uma única vez na maior sequência de grupos zero (a primeira, em caso de empate) e as letras ficam minúsculas.',
      detalhada: 'Os grupos são: 2001, db8, 0, 0, 8, 0, 0, 1. Aplicando a RFC 5952:\n\n- **zeros à esquerda** de cada grupo são suprimidos (0db8 vira db8);\n- o "::" substitui a **maior** sequência de grupos zerados; havendo **empate**, vale a **primeira** (aqui há duas sequências de dois grupos, e a primeira é a que vira "::");\n- o "::" aparece **no máximo uma vez** no endereço;\n- hexadecimais em **minúsculas**.\n\nResultado: **2001:db8::8:0:0:1**.',
      alternativas: [
        'Errada. Usa "::" duas vezes, o que torna o endereço ambíguo e inválido.',
        'Errada. Comprime a segunda sequência de zeros, e não a primeira, contrariando o critério de desempate.',
        'Errada. Letras maiúsculas contrariam a recomendação da RFC 5952.',
        'Errada. Mantém o zero à esquerda em 0db8.',
        'Correta. Atende a todas as regras de representação.'
      ],
      dica: '"::" só uma vez; em empate de sequências de zeros, comprime a primeira; um único grupo 0 isolado não se comprime.'
    },
    fontes: [
      { titulo: 'RFC 5952 - A Recommendation for IPv6 Address Text Representation', url: 'https://www.rfc-editor.org/rfc/rfc5952' },
      { titulo: 'RFC 4291 - IPv6 Addressing Architecture', url: 'https://www.rfc-editor.org/rfc/rfc4291' }
    ]
  },
  {
    id: 'inf-869', materia: 'informatica', assunto: 'Redes e internet', tipo: 'multipla', estilo: 'Vunesp', dificuldade: 2,
    objetivos: ['concursos-gerais', 'tribunais', 'estatais'],
    enunciado: 'No IPv6, existem faixas de endereços destinadas a usos específicos. O prefixo reservado aos endereços locais únicos (ULA - Unique Local Address), análogos funcionais aos endereços privados do IPv4 e não roteáveis na internet global, é',
    alternativas: ['fe80::/10', 'fc00::/7', 'ff00::/8', '2000::/3', '::1/128'],
    resposta: 1,
    explicacao: {
      resumo: 'Os endereços ULA ficam em fc00::/7 (na prática, fd00::/8 é o que se usa com prefixo gerado aleatoriamente).',
      detalhada: 'Principais faixas IPv6:\n\n- **2000::/3**: unicast global (roteável na internet);\n- **fc00::/7**: **ULA**, uso interno, não roteado globalmente;\n- **fe80::/10**: unicast de **enlace local** (link-local), válido apenas no enlace;\n- **ff00::/8**: **multicast**;\n- **::1/128**: loopback.\n\nNa RFC 4193, o bit L define se o prefixo é gerado localmente; na prática, usa-se **fd00::/8**.',
      alternativas: [
        'Errada. fe80::/10 é de enlace local.',
        'Correta. Prefixo ULA da RFC 4193.',
        'Errada. ff00::/8 é multicast.',
        'Errada. 2000::/3 é unicast global.',
        'Errada. ::1 é o endereço de loopback.'
      ],
      dica: 'fe80 = link-local; fc/fd = ULA; ff = multicast; 2xxx/3xxx = global.'
    },
    fontes: [
      { titulo: 'RFC 4193 - Unique Local IPv6 Unicast Addresses', url: 'https://www.rfc-editor.org/rfc/rfc4193' },
      { titulo: 'NIC.br - IPv6.br', url: 'https://ipv6.br/' }
    ]
  },
  {
    id: 'inf-870', materia: 'informatica', assunto: 'Redes e internet', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 1,
    objetivos: ['concursos-gerais', 'bancarios', 'estatais'],
    enunciado: 'Ao ser conectado a uma rede com servidor DHCP, um computador obtém automaticamente seu endereço IP por meio de uma troca de mensagens. A sequência correta dessas mensagens, no processo de concessão de um endereço, é',
    alternativas: [
      'Request, Offer, Discover, Acknowledge.',
      'Discover, Request, Offer, Acknowledge.',
      'Offer, Discover, Acknowledge, Request.',
      'Discover, Offer, Request, Acknowledge.',
      'Discover, Acknowledge, Offer, Request.'
    ],
    resposta: 3,
    explicacao: {
      resumo: 'O processo é conhecido pela sigla DORA: Discover, Offer, Request e Acknowledge.',
      detalhada: '1. **DHCPDISCOVER**: o cliente, ainda sem IP, envia um broadcast procurando servidores.\n2. **DHCPOFFER**: o servidor oferece um endereço e parâmetros (máscara, gateway, DNS).\n3. **DHCPREQUEST**: o cliente escolhe uma oferta e a requisita.\n4. **DHCPACK**: o servidor confirma a concessão (lease).\n\nO DHCP usa **UDP**, portas **67** (servidor) e **68** (cliente).',
      alternativas: [
        'Errada. O Request não pode abrir o processo.',
        'Errada. O Request vem depois do Offer.',
        'Errada. O cliente é quem inicia, com o Discover.',
        'Correta. DORA.',
        'Errada. O Acknowledge é a última etapa, não a segunda.'
      ],
      dica: 'DORA: Discover, Offer, Request, Acknowledge. Portas UDP 67 e 68.'
    },
    fontes: [{ titulo: 'RFC 2131 - Dynamic Host Configuration Protocol', url: 'https://www.rfc-editor.org/rfc/rfc2131' }]
  },
  {
    id: 'inf-871', materia: 'informatica', assunto: 'Redes e internet', tipo: 'multipla', estilo: 'FCC', dificuldade: 2,
    objetivos: ['concursos-gerais', 'tribunais', 'estatais'],
    enunciado: 'Para que as mensagens enviadas a usuarios@orgao.gov.br sejam entregues ao servidor de correio correto, o administrador do domínio deve publicar no DNS um registro do tipo',
    alternativas: ['MX.', 'PTR.', 'AAAA.', 'CNAME.', 'SOA.'],
    resposta: 0,
    explicacao: {
      resumo: 'O registro MX (Mail Exchanger) indica os servidores responsáveis por receber o e-mail de um domínio.',
      detalhada: 'Tipos de registro DNS mais cobrados:\n\n- **A**: nome para endereço IPv4;\n- **AAAA**: nome para endereço IPv6;\n- **CNAME**: nome canônico (apelido para outro nome);\n- **MX**: servidores de e-mail do domínio, com prioridade;\n- **NS**: servidores de nomes autoritativos;\n- **PTR**: resolução reversa (IP para nome);\n- **SOA**: dados administrativos da zona;\n- **TXT**: texto livre (SPF, DKIM, DMARC e verificações).\n\nO servidor SMTP remetente consulta o MX do domínio de destino para saber a quem entregar.',
      alternativas: [
        'Correta. O MX aponta os servidores de e-mail do domínio.',
        'Errada. O PTR faz a resolução reversa.',
        'Errada. O AAAA associa nome a endereço IPv6.',
        'Errada. O CNAME cria apelidos entre nomes.',
        'Errada. O SOA descreve a zona (serial, tempos), não o correio.'
      ],
      dica: 'MX = Mail eXchanger. SPF/DKIM/DMARC ficam em registros TXT.'
    },
    fontes: [
      { titulo: 'RFC 1035 - Domain Names: implementation and specification', url: 'https://www.rfc-editor.org/rfc/rfc1035' },
      { titulo: 'RFC 5321 - SMTP, seção 5 (Address Resolution)', url: 'https://www.rfc-editor.org/rfc/rfc5321' }
    ]
  },
  {
    id: 'inf-872', materia: 'informatica', assunto: 'Redes e internet', tipo: 'multipla', estilo: 'Vunesp', dificuldade: 1,
    objetivos: ['concursos-gerais', 'policial', 'estatais'],
    enunciado: 'Um dos fatores que distinguem o TCP do UDP é que o TCP estabelece uma conexão antes de transferir dados. Essa conexão é aberta por um procedimento chamado three-way handshake, no qual os segmentos trocados, em ordem, são',
    alternativas: [
      'ACK, SYN e FIN.',
      'SYN, ACK e RST.',
      'SYN, SYN+ACK e ACK.',
      'FIN, FIN+ACK e ACK.',
      'SYN, ACK e SYN+ACK.'
    ],
    resposta: 2,
    explicacao: {
      resumo: 'O cliente envia SYN, o servidor responde SYN+ACK e o cliente confirma com ACK.',
      detalhada: 'O **TCP** é orientado a conexão, confiável (confirmações, retransmissão, controle de fluxo e de congestionamento) e entrega os dados em ordem. O **UDP** é sem conexão, sem garantia de entrega e com cabeçalho mínimo, indicado para consultas rápidas (DNS) e tempo real.\n\nAbertura da conexão TCP:\n\n1. cliente: **SYN**;\n2. servidor: **SYN+ACK**;\n3. cliente: **ACK**.\n\nO encerramento usa segmentos FIN, e o RST aborta a conexão.',
      alternativas: [
        'Errada. O FIN pertence ao encerramento.',
        'Errada. O RST aborta conexões e não faz parte da abertura normal.',
        'Correta. SYN, SYN+ACK, ACK.',
        'Errada. Remete ao encerramento da conexão, não à abertura.',
        'Errada. Traz os mesmos três segmentos, mas fora de ordem: o ACK vem antes do SYN+ACK. O correto é o servidor responder ao SYN com um único segmento SYN+ACK e só então o cliente enviar o ACK.'
      ],
      dica: 'Abrir = SYN; fechar = FIN; abortar = RST.'
    },
    fontes: [{ titulo: 'RFC 9293 - Transmission Control Protocol (TCP)', url: 'https://www.rfc-editor.org/rfc/rfc9293' }]
  },
  {
    id: 'inf-873', materia: 'informatica', assunto: 'Redes e internet', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 1,
    objetivos: ['concursos-gerais', 'bancarios', 'estatais'],
    enunciado: 'As portas de serviços bem conhecidas são numeradas de 0 a 1023 e registradas pela IANA. Dentre as associações entre porta e protocolo a seguir, a correta é',
    alternativas: [
      '21 - SSH',
      '23 - SFTP',
      '110 - IMAP',
      '25 - HTTPS',
      '143 - IMAP'
    ],
    resposta: 4,
    explicacao: {
      resumo: 'IMAP usa a porta 143 (993 quando protegido por TLS implícito). As demais associações estão trocadas.',
      detalhada: 'Portas clássicas:\n\n- **20/21**: FTP (dados/controle);\n- **22**: SSH (e SFTP, que roda sobre SSH);\n- **23**: Telnet;\n- **25**: SMTP (entre servidores);\n- **53**: DNS (UDP e TCP);\n- **67/68**: DHCP;\n- **80**: HTTP; **443**: HTTPS;\n- **110**: POP3; **995**: POP3S;\n- **143**: IMAP; **993**: IMAPS.',
      alternativas: [
        'Errada. A porta 21 é do FTP; o SSH usa a 22.',
        'Errada. A porta 23 é do Telnet; o SFTP trafega pela porta 22, sobre SSH.',
        'Errada. A porta 110 é do POP3.',
        'Errada. A porta 25 é do SMTP; HTTPS usa a 443.',
        'Correta. IMAP na porta 143.'
      ],
      dica: 'Guarde os pares de e-mail: 25 SMTP, 110 POP3, 143 IMAP. E 22 SSH, 23 Telnet, 21 FTP.'
    },
    fontes: [{ titulo: 'IANA - Service Name and Transport Protocol Port Number Registry', url: 'https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml' }]
  },
  {
    id: 'inf-874', materia: 'informatica', assunto: 'Redes e internet', tipo: 'multipla', estilo: 'FGV', dificuldade: 2,
    objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'Um usuário acessa https://portal.exemplo.gov.br e o navegador exibe um alerta informando que o nome do site não corresponde ao certificado apresentado. Em relação ao funcionamento do TLS, esse alerta ocorre porque o navegador',
    alternativas: [
      'não conseguiu cifrar a conexão, pois o TLS só funciona com a porta 80.',
      'verificou que o nome acessado não consta no certificado do servidor (campo SAN) e, por isso, não pode confirmar a identidade do site.',
      'detectou que o servidor usa IPv6, o que é incompatível com certificados digitais.',
      'identificou que o DNS devolveu um registro MX no lugar de um A.',
      'constatou que a chave privada do usuário expirou.'
    ],
    resposta: 1,
    explicacao: {
      resumo: 'No TLS, o navegador confere se o nome do host acessado consta no certificado (Subject Alternative Name) e se ele é válido e emitido por uma autoridade confiável. Divergência de nome gera alerta.',
      detalhada: 'O TLS oferece **confidencialidade** (cifragem), **integridade** e **autenticação** do servidor por meio de certificado X.509. Ao conectar, o navegador verifica:\n\n- se a cadeia leva a uma **autoridade certificadora** confiável;\n- se o certificado está **dentro do prazo** e não foi revogado;\n- se o **nome acessado** consta no certificado (campo **SAN**).\n\nSem a correspondência de nome, qualquer um poderia se passar pelo site com um certificado válido de outro domínio; por isso o alerta.',
      alternativas: [
        'Errada. O HTTPS usa a porta 443 e o TLS funciona em qualquer porta.',
        'Correta. É a verificação de identidade do servidor.',
        'Errada. O TLS funciona com IPv4 e IPv6.',
        'Errada. O registro MX não participa da validação do certificado.',
        'Errada. O alerta trata do certificado do servidor, não de chave do usuário.'
      ],
      dica: 'Alerta de certificado: pense em três pontos - quem emitiu (CA), prazo e nome do site (SAN).'
    },
    fontes: [
      { titulo: 'RFC 9525 - Service Identity in TLS', url: 'https://www.rfc-editor.org/rfc/rfc9525' },
      { titulo: 'RFC 8446 - TLS 1.3', url: 'https://www.rfc-editor.org/rfc/rfc8446' }
    ]
  },
  {
    id: 'inf-875', materia: 'informatica', assunto: 'Redes e internet', tipo: 'multipla', estilo: 'FCC', dificuldade: 2,
    objetivos: ['concursos-gerais', 'tribunais', 'estatais'],
    enunciado: 'Um cliente de e-mail precisa enviar uma mensagem ao servidor do provedor, autenticando-se como usuário. A porta tradicionalmente registrada para essa submissão de mensagens, em oposição à transferência entre servidores (porta 25), é a',
    alternativas: ['110.', '143.', '53.', '587.', '995.'],
    resposta: 3,
    explicacao: {
      resumo: 'A porta 587 é a de submissão de mensagens (RFC 6409), normalmente com autenticação e STARTTLS.',
      detalhada: 'No correio eletrônico:\n\n- **Submissão** (MUA para MSA): porta **587**, com autenticação e, em geral, STARTTLS;\n- **Transferência** entre servidores (MTA para MTA): SMTP na porta **25**;\n- **Recebimento**: POP3 (110/995) ou IMAP (143/993).\n\nSepará-las reduz o abuso do servidor como retransmissor aberto (open relay), pois a submissão exige autenticação.',
      alternativas: [
        'Errada. É a porta do POP3 (recebimento).',
        'Errada. É a porta do IMAP (recebimento).',
        'Errada. É a porta do DNS.',
        'Correta. Submissão de mensagens (RFC 6409).',
        'Errada. É a porta do POP3 sobre TLS.'
      ],
      dica: 'Enviar do cliente ao servidor: 587. Entre servidores: 25. Ler a caixa: 110 (POP3) ou 143 (IMAP).'
    },
    fontes: [
      { titulo: 'RFC 6409 - Message Submission for Mail', url: 'https://www.rfc-editor.org/rfc/rfc6409' },
      { titulo: 'RFC 5321 - Simple Mail Transfer Protocol', url: 'https://www.rfc-editor.org/rfc/rfc5321' }
    ]
  },
  {
    id: 'inf-876', materia: 'informatica', assunto: 'Redes e internet', tipo: 'multipla', estilo: 'Vunesp', dificuldade: 2,
    objetivos: ['concursos-gerais', 'tribunais', 'policial', 'estatais'],
    enunciado: 'Para proteger uma rede sem fio doméstica, um técnico compara os padrões de segurança Wi-Fi. A respeito do WPA3-Personal, em relação ao WPA2-Personal, é correto afirmar que',
    alternativas: [
      'substitui a troca de chaves baseada em senha pelo SAE, o que dificulta ataques de dicionário offline sobre o handshake capturado.',
      'usa o algoritmo RC4 com vetor de inicialização de 24 bits.',
      'dispensa qualquer senha, pois a rede é sempre aberta e cifrada automaticamente.',
      'funciona apenas na faixa de 5 GHz e não admite dispositivos mais antigos.',
      'é o mesmo que o WEP, com chaves maiores.'
    ],
    resposta: 0,
    explicacao: {
      resumo: 'O WPA3-Personal usa o SAE (Simultaneous Authentication of Equals), baseado em troca de chaves tipo Dragonfly, que resiste a ataques de dicionário offline contra o handshake capturado.',
      detalhada: 'Evolução da segurança Wi-Fi:\n\n- **WEP**: obsoleto e quebrável em minutos (RC4 com IV curto);\n- **WPA**: transição, com TKIP;\n- **WPA2**: AES-CCMP; no modo pessoal, usa PSK, e o handshake capturado permite **tentar senhas offline**;\n- **WPA3**: no modo pessoal, o **SAE** impede a verificação offline de senhas e dá sigilo futuro (forward secrecy); no modo corporativo, reforça o 802.1X com suítes de 192 bits.\n\nO WPA3 funciona em 2,4 e 5 GHz (e 6 GHz), e muitos roteadores oferecem modo misto WPA2/WPA3 para compatibilidade.',
      alternativas: [
        'Correta. O SAE é a grande mudança do WPA3-Personal.',
        'Errada. RC4 e IV de 24 bits caracterizam o WEP.',
        'Errada. O WPA3-Personal continua exigindo senha; o modo sem senha é o OWE (Enhanced Open).',
        'Errada. Não há restrição de faixa.',
        'Errada. O WEP é obsoleto e inseguro; o WPA3 é um padrão totalmente diferente.'
      ],
      dica: 'WEP = RC4 (inseguro); WPA2 = AES-CCMP + PSK; WPA3-Personal = SAE.'
    },
    fontes: [
      { titulo: 'RFC 7664 - Dragonfly Key Exchange (base do SAE)', url: 'https://www.rfc-editor.org/rfc/rfc7664' },
      { titulo: 'Cartilha de Segurança para Internet (CERT.br) - recomendações para redes sem fio', url: 'https://cartilha.cert.br/livro/cartilha-seguranca-internet.pdf' }
    ]
  },
  {
    id: 'inf-877', materia: 'informatica', assunto: 'Redes e internet', tipo: 'multipla', estilo: 'FGV', dificuldade: 3,
    objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    textoBase: 'A tabela de roteamento de um roteador contém as rotas: 10.0.0.0/8 via R1; 10.1.0.0/16 via R2; 10.1.2.0/24 via R3; 0.0.0.0/0 via R4.',
    enunciado: 'Um pacote destinado ao endereço 10.1.3.9 chega a esse roteador. De acordo com o critério de correspondência do prefixo mais longo, o próximo salto escolhido será',
    alternativas: ['R1.', 'R4.', 'R2.', 'R3.', 'nenhum, pois o pacote é descartado.'],
    resposta: 2,
    explicacao: {
      resumo: 'Entre as rotas que contêm 10.1.3.9 (10.0.0.0/8, 10.1.0.0/16 e 0.0.0.0/0), a de prefixo mais longo é 10.1.0.0/16, via R2.',
      detalhada: 'O roteador escolhe, entre as rotas que **contêm** o destino, a de **maior prefixo** (mais específica).\n\n- 10.0.0.0/8: contém 10.1.3.9 (prefixo 8);\n- **10.1.0.0/16**: contém 10.1.3.9 (prefixo 16);\n- 10.1.2.0/24: cobre 10.1.2.0 a 10.1.2.255, **não** contém 10.1.3.9;\n- 0.0.0.0/0: rota padrão, contém tudo (prefixo 0).\n\nO prefixo mais longo que contém o destino é /16, logo o próximo salto é **R2**. A pegadinha é escolher R3 por "parecer" mais específico, sem conferir o terceiro octeto.',
      alternativas: [
        'Errada. O /8 contém o destino, mas há rota mais específica.',
        'Errada. A rota padrão só é usada quando nenhuma outra casa.',
        'Correta. /16 é o prefixo mais longo que contém 10.1.3.9.',
        'Errada. 10.1.2.0/24 não contém 10.1.3.9.',
        'Errada. Existe rota correspondente; além disso, a rota padrão evitaria descarte.'
      ],
      dica: 'Primeiro descarte as rotas que não contêm o destino; depois escolha o maior prefixo.'
    },
    fontes: [{ titulo: 'RFC 4632 - CIDR (prefixo mais longo)', url: 'https://www.rfc-editor.org/rfc/rfc4632' }]
  },
  {
    id: 'inf-878', materia: 'informatica', assunto: 'Redes e internet', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 2,
    objetivos: ['concursos-gerais', 'bancarios', 'estatais'],
    enunciado: 'Os provedores de internet trocam informações de roteamento entre si, em sistemas autônomos distintos, por meio de um protocolo de roteamento exterior. O protocolo usado para esse fim na internet é o',
    alternativas: ['RIP.', 'OSPF.', 'ICMP.', 'ARP.', 'BGP.'],
    resposta: 4,
    explicacao: {
      resumo: 'O BGP (Border Gateway Protocol) troca rotas entre sistemas autônomos e sustenta o roteamento da internet.',
      detalhada: 'Protocolos de roteamento:\n\n- **RIP**: vetor de distâncias, métrica em saltos (máximo 15), uso interno em redes pequenas;\n- **OSPF**: estado de enlace, uso **interno** (IGP) dentro de um sistema autônomo;\n- **BGP**: vetor de caminhos, protocolo **externo** (EGP) entre sistemas autônomos, roda sobre TCP porta 179.\n\nICMP é de diagnóstico e controle, e ARP resolve IPv4 em endereço MAC na rede local; nenhum dos dois é protocolo de roteamento.',
      alternativas: [
        'Errada. RIP é protocolo interno simples.',
        'Errada. OSPF é interno a um sistema autônomo.',
        'Errada. ICMP faz diagnóstico e relato de erros.',
        'Errada. ARP resolve endereços na rede local.',
        'Correta. BGP é o protocolo entre sistemas autônomos.'
      ],
      dica: 'IGP (dentro do AS): RIP, OSPF. EGP (entre ASes): BGP, sobre TCP/179.'
    },
    fontes: [{ titulo: 'RFC 4271 - A Border Gateway Protocol 4 (BGP-4)', url: 'https://www.rfc-editor.org/rfc/rfc4271' }]
  },
  {
    id: 'inf-879', materia: 'informatica', assunto: 'Redes e internet', tipo: 'multipla', estilo: 'FCC', dificuldade: 3,
    objetivos: ['concursos-gerais', 'tribunais', 'estatais'],
    enunciado: 'O computador A tem o endereço 192.168.5.18/28. Entre os endereços a seguir, aquele que é um endereço de host válido e pertence à mesma sub-rede de A é',
    alternativas: ['192.168.5.31', '192.168.5.30', '192.168.5.16', '192.168.5.15', '192.168.5.34'],
    resposta: 1,
    explicacao: {
      resumo: 'Com /28, os blocos têm 16 endereços. O 18 está no bloco 16-31; hosts válidos vão de .17 a .30, e o .30 é o único válido nessa lista.',
      detalhada: 'A máscara /28 é 255.255.255.240; 4 bits de host dão blocos de 2^4 = **16 endereços**: 0-15, 16-31, 32-47, ...\n\nO final 18 está no bloco **16-31**:\n\n- endereço de rede: 192.168.5.16 (não usado em hosts);\n- hosts válidos: 192.168.5.17 a 192.168.5.30 (14 hosts);\n- broadcast: 192.168.5.31 (não usado em hosts).\n\nAnálise das opções: .31 é broadcast; .30 é host válido; .16 é o endereço de rede; .15 pertence ao bloco anterior (0-15); .34 pertence ao bloco seguinte (32-47).',
      alternativas: [
        'Errada. É o endereço de broadcast da sub-rede.',
        'Correta. Último host válido do bloco 16-31.',
        'Errada. É o endereço da própria rede.',
        'Errada. Pertence à sub-rede anterior (0-15).',
        'Errada. Pertence à sub-rede seguinte (32-47).'
      ],
      dica: 'Dois cuidados: o primeiro e o último endereço do bloco não são de host; e confira em qual bloco o número cai.'
    },
    fontes: [{ titulo: 'RFC 4632 - Classless Inter-domain Routing (CIDR)', url: 'https://www.rfc-editor.org/rfc/rfc4632' }]
  },
  {
    id: 'inf-880', materia: 'informatica', assunto: 'Redes e internet', tipo: 'multipla', estilo: 'Vunesp', dificuldade: 3,
    objetivos: ['concursos-gerais', 'tribunais', 'estatais'],
    enunciado: 'O administrador de um domínio alterou no servidor DNS autoritativo o registro A de www.exemplo.org, que tinha TTL de 86400 segundos, para um novo endereço IP. Horas depois, parte dos usuários ainda acessa o servidor antigo. A causa mais provável é que',
    alternativas: [
      'o protocolo DNS usa apenas TCP, o que atrasa a propagação.',
      'o registro MX do domínio sobrescreve o registro A.',
      'o navegador converte o nome para IPv6, ignorando o registro A.',
      'resolvedores recursivos e caches locais ainda guardam a resposta antiga até que o TTL expire.',
      'o servidor autoritativo só publica alterações às segundas-feiras.'
    ],
    resposta: 3,
    explicacao: {
      resumo: 'O TTL determina por quanto tempo uma resposta DNS pode ser guardada em cache; com TTL de 24 horas, resolvedores podem continuar entregando o IP antigo por até esse período.',
      detalhada: 'Resolvedores recursivos (do provedor, da empresa) e sistemas operacionais **guardam em cache** as respostas pelo tempo do **TTL** (aqui, 86400 s = 24 h). Enquanto o cache não expira, nada consulta de novo o servidor autoritativo.\n\nBoa prática: **reduzir o TTL** (por exemplo, para 300 s) com antecedência antes de uma migração planejada, e só depois trocar o IP.\n\nO DNS usa principalmente UDP (e TCP para respostas grandes e transferências de zona); o MX trata de e-mail e não interfere no A.',
      alternativas: [
        'Errada. O DNS usa UDP e TCP, e isso não explica o atraso.',
        'Errada. MX e A são registros independentes.',
        'Errada. Mesmo no IPv6 haveria um registro AAAA; o problema descrito é o cache.',
        'Correta. Cache dos resolvedores até o fim do TTL.',
        'Errada. Não existe essa regra; a publicação é imediata no autoritativo.'
      ],
      dica: 'Propagação do DNS é, na verdade, expiração de cache: o TTL manda.'
    },
    fontes: [{ titulo: 'RFC 1035 - Domain Names: implementation and specification', url: 'https://www.rfc-editor.org/rfc/rfc1035' }]
  },
  {
    id: 'inf-881', materia: 'informatica', assunto: 'Redes e internet', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 2,
    objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'Na tradução de endereços de portas (PAT, também chamada de NAT overload), um roteador permite que vários computadores de uma rede privada acessem a internet compartilhando um único endereço IPv4 público, distinguindo as conexões pelos números de porta.',
    resposta: true,
    explicacao: {
      resumo: 'Certo. No PAT/NAPT, o roteador traduz IP e porta de origem e mantém uma tabela de conexões, o que permite compartilhar um IP público.',
      detalhada: 'No NAT tradicional (**NAPT**, ou PAT), cada conexão de saída recebe uma **porta de origem** no IP público; a tabela de tradução associa (IP privado, porta) a (IP público, porta). Assim, milhares de hosts podem usar um só endereço público.\n\nConsequência: conexões **iniciadas de fora** não encontram entrada na tabela; para expor um serviço interno é preciso **encaminhamento de portas** (port forwarding). O NAT não é um mecanismo de segurança por si só.',
      dica: 'NAT overload/PAT = muitos IPs privados, um IP público, distinção por porta.'
    },
    fontes: [{ titulo: 'RFC 3022 - Traditional IP Network Address Translator', url: 'https://www.rfc-editor.org/rfc/rfc3022' }]
  },
  {
    id: 'inf-882', materia: 'informatica', assunto: 'Redes e internet', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 2,
    objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'No IPv6, a descoberta do endereço da camada de enlace de um vizinho na mesma rede local é feita pelo protocolo ARP, que continua sendo usado, agora encapsulado em ICMPv6.',
    resposta: false,
    explicacao: {
      resumo: 'Errado. O IPv6 não usa ARP; a função é do Neighbor Discovery Protocol (NDP), que usa mensagens ICMPv6 Neighbor Solicitation e Neighbor Advertisement.',
      detalhada: 'O **ARP** pertence ao IPv4. No IPv6, o **NDP** (Neighbor Discovery Protocol, RFC 4861), implementado sobre **ICMPv6**, cobre:\n\n- resolução de endereço: a Neighbor Solicitation é enviada ao endereço multicast de nó solicitado do destino (em vez de broadcast) e o alvo responde com uma Neighbor Advertisement em unicast ao remetente;\n- descoberta de roteadores e prefixos (Router Solicitation e Router Advertisement), base da autoconfiguração **SLAAC**;\n- detecção de endereço duplicado (DAD) e detecção de inacessibilidade de vizinhos.\n\nA afirmação erra ao manter o nome ARP.',
      dica: 'IPv4 tem ARP; IPv6 tem NDP (ICMPv6). Não há broadcast no IPv6.'
    },
    fontes: [
      { titulo: 'RFC 4861 - Neighbor Discovery for IP version 6', url: 'https://www.rfc-editor.org/rfc/rfc4861' },
      { titulo: 'RFC 4862 - IPv6 Stateless Address Autoconfiguration', url: 'https://www.rfc-editor.org/rfc/rfc4862' }
    ]
  },
  {
    id: 'inf-883', materia: 'informatica', assunto: 'Redes e internet', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 2,
    objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'Um servidor web que responde a uma requisição com o código de status 403 (Forbidden) indica que entendeu a requisição, mas se recusa a atendê-la por falta de autorização, ao passo que o código 404 indica que o recurso não foi encontrado.',
    resposta: true,
    explicacao: {
      resumo: 'Certo. O 403 significa que o servidor compreendeu o pedido e o recusa; o 404, que não encontrou o recurso solicitado.',
      detalhada: 'Classes de status HTTP:\n\n- **1xx**: informativos;\n- **2xx**: sucesso (200 OK, 201 Created);\n- **3xx**: redirecionamento (301 permanente, 302 temporário);\n- **4xx**: erro do cliente (400, **401** não autenticado, **403** proibido, **404** não encontrado);\n- **5xx**: erro do servidor (500, 502, 503).\n\nA distinção entre 401 e 403: no 401, faltam credenciais válidas; no 403, o servidor entende o pedido e, mesmo assim, recusa-se a atendê-lo.',
      dica: '401 = identifique-se; 403 = sem permissão; 404 = não existe; 503 = servidor indisponível.'
    },
    fontes: [{ titulo: 'RFC 9110 - HTTP Semantics, seção 15 (Status Codes)', url: 'https://www.rfc-editor.org/rfc/rfc9110' }]
  },
  {
    id: 'inf-884', materia: 'informatica', assunto: 'Redes e internet', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 3,
    objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'Em uma VPN com IPsec, o modo túnel cifra somente a carga útil do pacote original e mantém o cabeçalho IP original inalterado e visível na rede pública, enquanto o modo transporte encapsula e protege o pacote IP inteiro em um novo pacote.',
    resposta: false,
    explicacao: {
      resumo: 'Errado. Os conceitos estão invertidos: no modo túnel, o pacote IP original inteiro é protegido e encapsulado em um novo pacote; no modo transporte, protege-se só a carga útil.',
      detalhada: 'O IPsec opera em dois modos:\n\n- **Modo transporte**: protege apenas a **carga útil** (segmento TCP/UDP) e mantém o **cabeçalho IP original**. Usado em comunicação fim a fim entre dois hosts.\n- **Modo túnel**: o **pacote IP inteiro** (cabeçalho e dados) é protegido e encapsulado em um **novo pacote IP**. É o modo típico de VPN entre gateways (site a site) e de acesso remoto.\n\nNo modo túnel, os endereços reais internos ficam ocultos na rede pública.',
      dica: 'Túnel = encapsula tudo e põe cabeçalho novo; transporte = só o conteúdo.'
    },
    fontes: [
      { titulo: 'RFC 4301 - Security Architecture for the Internet Protocol', url: 'https://www.rfc-editor.org/rfc/rfc4301' },
      { titulo: 'NIST SP 800-77 Rev. 1 - Guide to IPsec VPNs', url: 'https://csrc.nist.gov/pubs/sp/800/77/r1/final' }
    ]
  },
  {
    id: 'inf-885', materia: 'informatica', assunto: 'Redes e internet', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 2,
    objetivos: ['concursos-gerais', 'tribunais', 'policial', 'estatais'],
    enunciado: 'No gerenciamento de redes com SNMP, o gerente consulta os agentes instalados nos dispositivos, que expõem seus dados em uma MIB; além disso, um agente pode enviar mensagens espontâneas de alerta (traps) ao gerente, usualmente à porta UDP 162.',
    resposta: true,
    explicacao: {
      resumo: 'Certo. O SNMP usa agentes e uma MIB, consultas na porta UDP 161 e notificações (traps) enviadas ao gerente na porta UDP 162.',
      detalhada: 'No **SNMP** (Simple Network Management Protocol):\n\n- o **gerente** (NMS) consulta e configura;\n- o **agente** roda no dispositivo (roteador, switch, servidor, impressora) e responde às consultas na **UDP 161**;\n- a **MIB** é a base de informações, organizada em árvore de objetos identificados por **OID**;\n- operações como **GET**, **SET** e **GETNEXT**/**GETBULK**;\n- **traps** e **informs** são notificações assíncronas do agente ao gerente, na **UDP 162**.\n\nPor segurança, prefira o **SNMPv3** (autenticação e cifragem); as comunidades em texto claro de v1 e v2c são fracas.',
      dica: 'SNMP: 161 consulta, 162 trap. Use v3 quando a questão falar em segurança.'
    },
    fontes: [
      { titulo: 'RFC 3411 - An Architecture for SNMP Management Frameworks', url: 'https://www.rfc-editor.org/rfc/rfc3411' },
      { titulo: 'RFC 3417 - Transport Mappings for SNMP', url: 'https://www.rfc-editor.org/rfc/rfc3417' }
    ]
  },
  {
    id: 'inf-886', materia: 'informatica', assunto: 'Redes e internet', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 2,
    objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'O traceroute mapeia os roteadores de um caminho enviando pacotes com valores de TTL crescentes, de modo que cada roteador intermediário, ao descartar o pacote cujo TTL chega a zero, devolve uma mensagem ICMP Time Exceeded que revela seu endereço.',
    resposta: true,
    explicacao: {
      resumo: 'Certo. É exatamente o princípio do traceroute: TTL 1, 2, 3... e leitura das mensagens ICMP Time Exceeded de cada salto.',
      detalhada: 'Cada roteador **decrementa o TTL** (Time To Live, "Hop Limit" no IPv6). Quando chega a 0, o pacote é descartado e o roteador responde com **ICMP Time Exceeded**.\n\nO traceroute (tracert no Windows) começa com TTL 1 e o aumenta a cada rodada, descobrindo os saltos em ordem. Ao chegar ao destino, a resposta é diferente (Echo Reply ou Port Unreachable, conforme o método).\n\nJá o **ping** usa ICMP Echo Request e Echo Reply para testar a alcançabilidade e medir o tempo de ida e volta. Firewalls podem bloquear ICMP e produzir saltos "* * *" sem que haja falha real.',
      dica: 'ping = Echo Request/Reply; traceroute = TTL crescente + Time Exceeded.'
    },
    fontes: [{ titulo: 'RFC 792 - Internet Control Message Protocol', url: 'https://www.rfc-editor.org/rfc/rfc792' }]
  },
  {
    id: 'inf-887', materia: 'informatica', assunto: 'Redes e internet', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 2,
    objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'Em uma rede Ethernet com IPv4, o ARP request é enviado diretamente, em unicast, ao computador cujo endereço IP se deseja resolver, pois o remetente já conhece o endereço MAC de destino.',
    resposta: false,
    explicacao: {
      resumo: 'Errado. O ARP request é enviado em broadcast (MAC de destino ff:ff:ff:ff:ff:ff) justamente porque o remetente não conhece o MAC. Só a resposta (ARP reply) segue em unicast.',
      detalhada: 'O **ARP** associa um endereço **IPv4** ao **endereço MAC** de um host na mesma rede local. Se o host A quer falar com B e só conhece o IP de B:\n\n1. A envia um **ARP request em broadcast** ("quem tem o IP x.x.x.x?");\n2. todos os hosts do domínio de broadcast recebem; apenas B responde;\n3. B envia a resposta (**ARP reply**) diretamente a A, em unicast, informando seu MAC;\n4. A guarda o resultado no **cache ARP** por algum tempo.\n\nA premissa da questão ("o remetente já conhece o MAC") torna o ARP desnecessário.',
      dica: 'Pergunta em broadcast, resposta em unicast. Para destinos fora da rede, o ARP resolve o MAC do gateway.'
    },
    fontes: [{ titulo: 'RFC 826 - An Ethernet Address Resolution Protocol', url: 'https://www.rfc-editor.org/rfc/rfc826' }]
  },
  {
    id: 'inf-888', materia: 'informatica', assunto: 'Redes e internet', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 3,
    objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'A técnica de pilha dupla (dual stack) para a transição ao IPv6 consiste em converter, em cada equipamento da rede, todos os pacotes IPv4 em pacotes IPv6 por meio de tradução de cabeçalhos, de modo que os dispositivos deixem de usar o IPv4.',
    resposta: false,
    explicacao: {
      resumo: 'Errado. No dual stack, os nós executam IPv4 e IPv6 simultaneamente, cada um com seu endereço, sem converter um protocolo no outro.',
      detalhada: 'Mecanismos de transição para o IPv6:\n\n- **Pilha dupla (dual stack)**: o dispositivo tem **os dois protocolos ativos ao mesmo tempo**, com endereço IPv4 e IPv6, e usa o que o destino oferecer. É a abordagem mais recomendada, pois não exige tradução.\n- **Tunelamento**: encapsula pacotes de um protocolo dentro do outro para atravessar redes que só falam um deles.\n- **Tradução** (como NAT64 e DNS64): converte pacotes entre IPv4 e IPv6 para comunicação entre redes só-IPv6 e sistemas só-IPv4.\n\nA questão confunde dual stack com tradução, e ainda diz que o IPv4 deixa de ser usado.',
      dica: 'Dual stack = os dois juntos. Tradução (NAT64) e tunelamento são outras técnicas.'
    },
    fontes: [
      { titulo: 'RFC 4213 - Basic Transition Mechanisms for IPv6 Hosts and Routers', url: 'https://www.rfc-editor.org/rfc/rfc4213' },
      { titulo: 'NIC.br - IPv6.br', url: 'https://ipv6.br/' }
    ]
  },
  {
    id: 'inf-889', materia: 'informatica', assunto: 'Redes e internet', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 2,
    objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'O IPv6 não possui endereços de broadcast; as comunicações que, no IPv4, usariam broadcast passam a utilizar multicast, como o endereço ff02::1, que alcança todos os nós do enlace local.',
    resposta: true,
    explicacao: {
      resumo: 'Certo. A arquitetura de endereçamento do IPv6 não define broadcast; o multicast (ff00::/8) o substitui, e ff02::1 é o grupo de todos os nós no escopo de enlace.',
      detalhada: 'Tipos de endereço no IPv6: **unicast**, **multicast** e **anycast**. Não há broadcast.\n\nExemplos de multicast de escopo de enlace (ff02::/16):\n\n- **ff02::1**: todos os nós;\n- **ff02::2**: todos os roteadores;\n- **ff02::1:ffXX:XXXX**: multicast de nó solicitado (solicited-node), usado pelo NDP na resolução de endereços.\n\nIsso reduz o tratamento inútil de pacotes por hosts que não participam do grupo.',
      dica: 'IPv6: unicast, multicast e anycast. Broadcast foi extinto.'
    },
    fontes: [
      { titulo: 'RFC 4291 - IP Version 6 Addressing Architecture', url: 'https://www.rfc-editor.org/rfc/rfc4291' },
      { titulo: 'NIC.br - IPv6.br', url: 'https://ipv6.br/' }
    ]
  },
  {
    id: 'inf-890', materia: 'informatica', assunto: 'Redes e internet', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 2,
    objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'No DNS, o registro CNAME é o responsável por associar diretamente um nome de domínio a um endereço IPv4, ao passo que o registro A serve para criar um nome alternativo (apelido) para outro nome de domínio.',
    resposta: false,
    explicacao: {
      resumo: 'Errado. As funções estão trocadas: o registro A associa nome a endereço IPv4, e o CNAME cria um apelido para outro nome.',
      detalhada: 'Funções corretas:\n\n- **A**: nome para endereço **IPv4** (o equivalente para IPv6 é o **AAAA**);\n- **CNAME**: nome **canônico**, isto é, faz de um nome um **apelido de outro nome**, que então é resolvido normalmente. Por exemplo, www.exemplo.org pode ser apelido de exemplo.org;\n- **PTR**: resolução **reversa** (do IP para o nome).\n\nUma regra clássica: um nome que tem CNAME não pode ter outros registros com o mesmo nome (como MX ou NS), e por isso o CNAME não se usa no ápice da zona.',
      dica: 'A = endereço; CNAME = apelido. Lembre: CNAME = Canonical NAME.'
    },
    fontes: [
      { titulo: 'RFC 1035 - Domain Names, seção 3.3.1 (CNAME) e 3.4.1 (A)', url: 'https://www.rfc-editor.org/rfc/rfc1035' },
      { titulo: 'RFC 1034 - Domain Names: concepts, seção 3.6.2 (CNAME e exclusividade)', url: 'https://www.rfc-editor.org/rfc/rfc1034' }
    ]
  }
] });
