/* Questões inéditas de hardware e informática geral para concursos, escritas para o app. */
Banco.registrar({ questoes: [
  {
    id: 'inf-891', materia: 'informatica', assunto: 'Hardware e manutenção', tipo: 'multipla', estilo: 'FGV', dificuldade: 1,
    objetivos: ['concursos-gerais', 'estatais', 'bancarios'],
    enunciado: 'Na hierarquia de memória de um computador, os componentes de armazenamento são organizados conforme velocidade de acesso e capacidade. Considerando apenas os itens registrador, cache L1, memória RAM e SSD, a ordem do MAIS rápido para o MAIS lento é:',
    alternativas: [
      'RAM, cache L1, registrador, SSD.',
      'Cache L1, registrador, RAM, SSD.',
      'Registrador, cache L1, RAM, SSD.',
      'Registrador, RAM, cache L1, SSD.',
      'Cache L1, RAM, registrador, SSD.'
    ],
    resposta: 2,
    explicacao: {
      resumo: 'Os registradores ficam dentro do núcleo do processador e são o nível mais rápido; depois vêm o cache, a RAM e o armazenamento persistente.',
      detalhada: 'A hierarquia de memória existe porque memória rápida é cara e pequena, e memória barata é lenta e grande. Quanto mais perto da unidade de execução, menor a latência e menor a capacidade.\n\n- **Registradores:** poucas dezenas de posições dentro do núcleo; acesso em um ciclo.\n- **Cache (L1, L2, L3):** SRAM integrada ao processador; L1 é a menor e mais rápida.\n- **RAM:** DRAM volátil; muito maior, porém dezenas de vezes mais lenta que o cache.\n- **SSD/HDD:** armazenamento persistente; o mais lento da lista.\n\nO mesmo princípio aparece no sistema operacional: dados lidos do disco ficam em memória para evitar novo acesso lento.',
      alternativas: [
        'Errada: coloca a RAM acima de cache e registrador, o que inverte a hierarquia.',
        'Errada: o registrador é mais rápido que o cache L1.',
        'Certa: registrador, cache, RAM e SSD, do mais rápido ao mais lento.',
        'Errada: a RAM é mais lenta que o cache L1.',
        'Errada: coloca o registrador depois da RAM.'
      ],
      dica: 'Decore a pirâmide: quanto mais perto do processador, mais rápido, menor e mais caro por byte.'
    },
    fontes: [ { titulo: 'Wikipedia: hierarquia de memória', url: 'https://en.wikipedia.org/wiki/Memory_hierarchy' } ] },
  {
    id: 'inf-892', materia: 'informatica', assunto: 'Hardware e manutenção', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 1,
    objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'A memória cache, normalmente construída com SRAM e localizada no próprio processador ou muito próxima dele, armazena cópias de dados e instruções da memória principal usados com frequência, reduzindo o tempo médio de acesso; por ser volátil, perde seu conteúdo quando o computador é desligado.',
    resposta: true,
    explicacao: {
      resumo: 'Certo. O cache é SRAM volátil que guarda cópias do que é mais usado, acelerando o acesso à RAM.',
      detalhada: 'A cache aproveita o princípio da localidade: dados usados agora tendem a ser usados de novo em breve (localidade temporal) e dados vizinhos também (localidade espacial). Por isso guardar cópias em uma memória pequena e muito rápida reduz o tempo médio de acesso.\n\nO cache é feito de **SRAM** (estática), mais rápida e mais cara que a DRAM da memória principal, e é **volátil**: sem energia, o conteúdo se perde. A memória não volátil de firmware é a ROM e seus derivados (flash).',
      dica: 'Cache = SRAM, rápida, pequena, volátil. ROM = não volátil. RAM principal = DRAM, volátil.'
    },
    fontes: [ { titulo: 'Wikipedia: cache de CPU (SRAM)', url: 'https://en.wikipedia.org/wiki/CPU_cache' } ] },
  {
    id: 'inf-893', materia: 'informatica', assunto: 'Hardware e manutenção', tipo: 'multipla', estilo: 'FCC', dificuldade: 2,
    objetivos: ['concursos-gerais', 'estatais', 'tribunais'],
    enunciado: 'Um técnico instalou um disco rígido anunciado pelo fabricante como "1 TB", com 1 TB = 10^12 bytes. Ao abrir o Explorador de Arquivos do Windows, que calcula o tamanho dividindo por 1024 a cada nível (1 GB = 2^30 bytes), a capacidade exibida é, aproximadamente:',
    alternativas: [
      '931 GB.',
      '1.000 GB.',
      '1.024 GB.',
      '976 GB.',
      '900 GB.'
    ],
    resposta: 0,
    explicacao: {
      resumo: 'Fabricantes usam prefixos decimais (10^12 bytes); o Windows divide por 2^30 e mostra cerca de 931 GB (na verdade GiB).',
      detalhada: 'Fabricantes de discos usam o sistema decimal (SI): 1 TB = 1.000.000.000.000 bytes. O Windows usa base 1024 mas escreve "GB" no lugar de "GiB".\n\n**Conta:** 10^12 / 2^30 = 10^12 / 1.073.741.824 ≈ **931,3**.\n\nPor isso todo disco "perde" cerca de 7% na tela. Não é defeito nem espaço usado pelo formato: é diferença de unidade. O padrão correto para base 1024 são os prefixos binários (KiB, MiB, GiB, TiB).',
      alternativas: [
        'Certa: 10^12 / 2^30 ≈ 931.',
        'Errada: seria o valor se o Windows usasse base decimal.',
        'Errada: 1.024 GB equivaleria a 1 TiB, que tem mais bytes que o disco.',
        'Errada: resulta de misturar divisão por 1000 com divisão por 1024, o que não é a conta do sistema.',
        'Errada: 900 GB não sai de nenhuma das conversões possíveis; é um valor arbitrário, sem relação com a confusão entre GB (10^9) e GiB (2^30).'
      ],
      dica: 'Disco "de 500 GB" mostra ~465 GB; "de 1 TB" mostra ~931 GB. Sempre divida por 1,0737 por nível.'
    },
    fontes: [ { titulo: 'NIST: prefixos para múltiplos binários', url: 'https://physics.nist.gov/cuu/Units/binary.html' } ]
  },
  {
    id: 'inf-894', materia: 'informatica', assunto: 'Hardware e manutenção', tipo: 'multipla', estilo: 'Vunesp', dificuldade: 2,
    objetivos: ['concursos-gerais', 'estatais', 'bancarios'],
    enunciado: 'Um computador está ligado a um link de 100 Mbps (megabits por segundo). Desprezando overhead de protocolos e variações de rede, e considerando 1 MB = 10^6 bytes, o tempo mínimo teórico para baixar um arquivo de 750 MB é de:',
    alternativas: [
      '7,5 segundos.',
      '15 segundos.',
      '30 segundos.',
      '60 segundos.',
      '600 segundos.'
    ],
    resposta: 3,
    explicacao: {
      resumo: '750 MB x 8 = 6.000 Mb; dividido por 100 Mb/s dá 60 s.',
      detalhada: 'Velocidade de rede é medida em **bits** por segundo (b minúsculo); tamanho de arquivo, em **bytes** (B maiúsculo). 1 byte = 8 bits.\n\n- 100 Mbps = 100 / 8 = **12,5 MB/s**.\n- 750 MB / 12,5 MB/s = **60 s**.\n\nA conta direta dá o mesmo: 750 x 8 = 6.000 Mb; 6.000 / 100 = 60 s. A banca costuma trocar b por B para induzir o erro.',
      alternativas: [
        'Errada: seria o resultado de dividir 750 por 100 e ignorar a conversão de bits em bytes.',
        'Errada: 15 s corresponderia a um link de 400 Mbps; não é a conta 750 x 8 / 100.',
        'Errada: corresponde a um link de 200 Mbps.',
        'Certa: 750 x 8 / 100 = 60 s.',
        'Errada: multiplicaria por 8 e dividiria por 10, como se o link fosse de 10 Mbps.'
      ],
      dica: 'Dividir Mbps por 8 dá MB/s. b minúsculo é bit; B maiúsculo é byte.'
    },
    fontes: [ { titulo: 'NIST: prefixos SI e binários', url: 'https://physics.nist.gov/cuu/Units/binary.html' } ]
  },
  {
    id: 'inf-895', materia: 'informatica', assunto: 'Hardware e manutenção', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 2,
    objetivos: ['concursos-gerais', 'estatais', 'bancarios'],
    enunciado: 'Sobre SSDs que utilizam o protocolo NVMe, geralmente no formato M.2, é correto afirmar que:',
    alternativas: [
      'comunicam-se obrigatoriamente pelo barramento SATA III, pois o NVMe é apenas um novo formato de conector.',
      'comunicam-se com o processador pelo barramento PCI Express, sem a camada de controlador SATA, o que reduz a latência e eleva a taxa de transferência.',
      'exigem desfragmentação semanal para manter o desempenho, como os discos rígidos mecânicos.',
      'guardam os dados em DRAM e os perdem quando o computador é desligado.',
      'só funcionam em computadores com BIOS legado e disco particionado em MBR.'
    ],
    resposta: 1,
    explicacao: {
      resumo: 'NVMe é um protocolo feito para memória flash que trafega pelo barramento PCIe, sem passar pela interface SATA.',
      detalhada: 'O SATA foi desenhado para discos mecânicos e tem teto de 6 Gbps. O **NVMe** foi criado para memória flash: usa linhas **PCI Express** diretamente ligadas ao processador/chipset e suporta muitas filas de comandos em paralelo, com latência bem menor.\n\nCuidado: **M.2 é o formato físico**. Um slot M.2 pode carregar SSD SATA ou SSD NVMe, e o mesmo encaixe não garante o mesmo protocolo.\n\nSSD não tem partes móveis; o Windows não precisa "desfragmentar" no sentido tradicional, e a memória flash NAND é **não volátil**.',
      alternativas: [
        'Errada: isso descreve o SSD SATA; NVMe usa PCIe.',
        'Certa: NVMe sobre PCIe.',
        'Errada: SSD não depende de desfragmentação frequente; o sistema faz otimização própria (retrim).',
        'Errada: SSD usa memória flash NAND, não volátil.',
        'Errada: NVMe não exige BIOS legado nem MBR; funciona com GPT e, para iniciar o sistema nele, costuma-se usar UEFI.'
      ],
      dica: 'M.2 = formato; NVMe = protocolo sobre PCIe; SATA = interface mais antiga e mais lenta.'
    },
    fontes: [ { titulo: 'Wikipedia: NVM Express (usa o barramento PCI Express)', url: 'https://en.wikipedia.org/wiki/NVM_Express' }, { titulo: 'Microsoft Learn: unidades NVMe', url: 'https://learn.microsoft.com/en-us/windows/win32/fileio/working-with-nvme-devices' } ] },
  {
    id: 'inf-896', materia: 'informatica', assunto: 'Hardware e manutenção', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 2,
    objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'USB Type-C refere-se ao formato do conector, que é reversível; a velocidade de transferência de uma porta com esse conector depende do padrão USB que ela implementa, podendo o mesmo conector transportar, conforme o caso, USB 2.0, USB 3.x ou USB4, além de modos alternativos como DisplayPort e fornecimento de energia.',
    resposta: true,
    explicacao: {
      resumo: 'Certo. Type-C é conector; velocidade, vídeo e potência dependem do que a porta e o cabo suportam.',
      detalhada: 'É confusão comum tratar "USB-C" como sinônimo de "USB rápido". O **Type-C** só define o conector físico reversível. Por trás dele pode haver USB 2.0 (480 Mbps), USB 3.2 Gen 1 (5 Gbps), Gen 2 (10 Gbps) ou USB4 (até 40 Gbps).\n\nO conector também permite **Power Delivery** (carregamento com potência elevada) e **Alternate Modes**, que transportam sinais não USB, como o DisplayPort. Por isso duas portas de aparência idêntica podem ter capacidades muito diferentes.',
      dica: 'Conector (Type-A, Type-C) e padrão de velocidade (2.0, 3.2, USB4) são coisas diferentes.'
    },
    fontes: [ { titulo: 'Microsoft Learn: USB e USB Type-C', url: 'https://learn.microsoft.com/en-us/windows-hardware/design/component-guidelines/universal-serial-bus--usb-' }, { titulo: 'Wikipedia: USB-C (inclui USB4)', url: 'https://en.wikipedia.org/wiki/USB-C' } ] },
  {
    id: 'inf-897', materia: 'informatica', assunto: 'Hardware e manutenção', tipo: 'multipla', estilo: 'FGV', dificuldade: 2,
    objetivos: ['concursos-gerais', 'estatais', 'tribunais'],
    enunciado: 'Em relação aos barramentos de expansão de uma placa-mãe, a principal diferença entre o PCI convencional e o PCI Express (PCIe) é que o PCIe:',
    alternativas: [
      'é um barramento paralelo compartilhado por todos os dispositivos, o que explica sua maior velocidade.',
      'usa slots cujo número (x1, x4, x16) indica a quantidade de gigabytes de memória da placa instalada.',
      'é exclusivo de placas de vídeo e não pode ser usado por SSDs ou placas de rede.',
      'dispensa a placa-mãe, pois liga os dispositivos diretamente à fonte de alimentação.',
      'usa conexões seriais ponto a ponto, formadas por pares de linhas (lanes) dedicadas a cada dispositivo, com o slot x16 oferecendo 16 lanes.'
    ],
    resposta: 4,
    explicacao: {
      resumo: 'PCIe é serial e ponto a ponto, com lanes dedicadas; o número depois do x indica as lanes.',
      detalhada: 'O PCI antigo era um barramento **paralelo e compartilhado**: todos os dispositivos dividiam a mesma largura de banda. O **PCIe** trocou isso por enlaces **seriais ponto a ponto**, cada dispositivo com suas lanes.\n\nO sufixo **x1, x4, x8, x16** indica quantas lanes o slot tem; mais lanes, mais largura de banda. Cada geração (3.0, 4.0, 5.0) praticamente dobra a taxa por lane em relação à anterior.\n\nO PCIe não é só para vídeo: SSDs NVMe, placas de rede, placas de captura e controladoras também o usam.',
      alternativas: [
        'Errada: isso descreve o PCI convencional.',
        'Errada: x16 refere-se às lanes, não à memória.',
        'Errada: SSD NVMe e placas de rede usam PCIe.',
        'Errada: o PCIe é parte da placa-mãe e da CPU; a fonte só alimenta.',
        'Certa: serial, ponto a ponto, com lanes.'
      ],
      dica: 'PCI = paralelo e compartilhado; PCIe = serial e ponto a ponto. x16 = 16 lanes.'
    },
    fontes: [ { titulo: 'Wikipedia: PCI Express (ponto a ponto, lanes)', url: 'https://en.wikipedia.org/wiki/PCI_Express' } ] },
  {
    id: 'inf-898', materia: 'informatica', assunto: 'Hardware e manutenção', tipo: 'multipla', estilo: 'FCC', dificuldade: 2,
    objetivos: ['concursos-gerais', 'estatais', 'tribunais'],
    enunciado: 'Um computador possui um processador com 6 núcleos físicos, cada um com suporte a 2 threads simultâneas (SMT, como o Hyper-Threading), e a tecnologia está habilitada. O número de processadores lógicos que o sistema operacional exibe no Gerenciador de Tarefas é:',
    alternativas: [
      '6.',
      '8.',
      '12.',
      '18.',
      '24.'
    ],
    resposta: 2,
    explicacao: {
      resumo: 'Processadores lógicos = núcleos x threads por núcleo = 6 x 2 = 12.',
      detalhada: 'Com **SMT** habilitado, cada núcleo físico se apresenta ao sistema operacional como mais de um processador lógico, que compartilham as unidades de execução do núcleo.\n\n**6 núcleos x 2 threads = 12 processadores lógicos.**\n\nIsso não dobra o desempenho: as duas threads disputam os mesmos recursos do núcleo, e o ganho típico é bem menor que 100%. Desabilitar o SMT na BIOS/UEFI faz o sistema ver só 6.',
      alternativas: [
        'Errada: seria o número de núcleos físicos, com SMT desligado.',
        'Errada: 8 seria 4 núcleos com 2 threads cada, e o processador do enunciado tem 6 núcleos.',
        'Certa: 6 x 2 = 12.',
        'Errada: seria 3 threads por núcleo.',
        'Errada: seria 4 threads por núcleo.'
      ],
      dica: 'Núcleo físico não é o mesmo que processador lógico. Lógicos = núcleos x threads por núcleo.'
    },
    fontes: [ { titulo: 'Wikipedia: multithreading simultâneo (SMT)', url: 'https://en.wikipedia.org/wiki/Simultaneous_multithreading' } ] },
  {
    id: 'inf-899', materia: 'informatica', assunto: 'Hardware e manutenção', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 2,
    objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'No Windows, a otimização periódica aplicada a unidades SSD consiste exclusivamente em desfragmentação tradicional, sem qualquer operação de retrim (TRIM), uma vez que esta última só se aplica a discos rígidos mecânicos.',
    resposta: false,
    explicacao: {
      resumo: 'Errado. O retrim é justamente uma operação voltada a SSD; discos mecânicos não usam TRIM.',
      detalhada: 'O comando **defrag** do Windows tem o parâmetro **/L**, que executa **retrim**, e o **/O**, que aplica a otimização adequada a cada tipo de mídia. Na tarefa agendada, o SSD recebe retrim e análise, e a desfragmentação tradicional, em regra, ocorre só uma vez por mês.\n\nO **TRIM** informa ao SSD quais blocos não estão mais em uso, para que ele os apague e gerencie melhor o desgaste. Isso não faz sentido em HDD, que simplesmente sobrescreve setores.\n\nA afirmação inverte tudo: o retrim é exclusivo de mídia flash.',
      dica: 'SSD: retrim (TRIM). HDD: desfragmentação. O Windows escolhe pelo tipo de mídia.'
    },
    fontes: [ { titulo: 'Microsoft Learn: comando defrag', url: 'https://learn.microsoft.com/windows-server/administration/windows-commands/defrag' } ]
  },
  {
    id: 'inf-900', materia: 'informatica', assunto: 'Sistemas operacionais', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 2,
    objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'No Windows, o atalho Windows+D mostra e oculta a área de trabalho, e o atalho Windows+L encerra a sessão do usuário (logoff), fechando todos os programas abertos.',
    resposta: false,
    explicacao: {
      resumo: 'Errado. Windows+L bloqueia o computador; não encerra a sessão nem fecha programas.',
      detalhada: 'Segundo a documentação da Microsoft, **Windows+D** mostra e oculta a área de trabalho, e **Windows+L** bloqueia o computador (ou permite trocar de conta). Bloquear mantém a sessão e os programas em execução, exigindo a senha para voltar.\n\nO encerramento de sessão (logoff) é feito pelo menu de usuário no Iniciar ou por Ctrl+Alt+Del.\n\nOutros atalhos cobrados: **Ctrl+Shift+Esc** abre o Gerenciador de Tarefas; **Windows+E** abre o Explorador de Arquivos; **Alt+F4** fecha a janela ativa.',
      dica: 'Bloquear (Win+L) é diferente de encerrar sessão: nada é fechado ao bloquear.'
    },
    fontes: [ { titulo: 'Microsoft: atalhos de teclado do Windows', url: 'https://support.microsoft.com/pt-BR/help/12445/windows-keyboard-shortcuts' } ]
  },
  {
    id: 'inf-901', materia: 'informatica', assunto: 'Hardware e manutenção', tipo: 'multipla', estilo: 'Vunesp', dificuldade: 2,
    objetivos: ['concursos-gerais', 'estatais', 'policial'],
    enunciado: 'Na configuração do firmware UEFI de um computador há a opção Secure Boot. Essa funcionalidade tem como objetivo:',
    alternativas: [
      'criptografar todo o conteúdo do disco rígido, protegendo os dados em caso de furto do equipamento.',
      'verificar a assinatura digital dos componentes de inicialização (drivers UEFI, aplicativos EFI e carregador do sistema) antes de executá-los, impedindo o carregamento de software não confiável.',
      'acelerar a inicialização ao pular o teste de hardware realizado na partida.',
      'substituir o antivírus, bloqueando qualquer malware que seja executado depois que o sistema estiver aberto.',
      'permitir que o computador inicialize por meio de BIOS legado e discos MBR.'
    ],
    resposta: 1,
    explicacao: {
      resumo: 'Secure Boot confere as assinaturas do software de boot e só executa o que for confiável.',
      detalhada: 'Quando o PC liga, o firmware UEFI com **Secure Boot** verifica a assinatura de cada componente de inicialização (drivers de firmware, aplicativos EFI e o carregador do sistema). Se a assinatura for válida e confiável, o código roda; senão, é bloqueado. Isso dificulta **bootkits** e **rootkits** que se instalam antes do sistema.\n\nNão é criptografia de disco (isso é BitLocker), não é Fast Boot, não protege contra malware já em execução e **exige UEFI**: não existe Secure Boot com BIOS legado. Por isso o Windows 11 pede UEFI com Secure Boot habilitável.',
      alternativas: [
        'Errada: criptografia de disco é função de BitLocker e similares.',
        'Certa: validação de assinaturas no boot.',
        'Errada: seria o Fast Boot, outra opção.',
        'Errada: Secure Boot atua só na inicialização.',
        'Errada: o modo legado (CSM) é incompatível com Secure Boot.'
      ],
      dica: 'Secure Boot protege a cadeia de inicialização. BitLocker protege os dados em repouso.'
    },
    fontes: [ { titulo: 'Microsoft Learn: Secure Boot', url: 'https://learn.microsoft.com/windows-hardware/design/device-experiences/oem-secure-boot' } ]
  },
  {
    id: 'inf-902', materia: 'informatica', assunto: 'Sistemas operacionais', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 2,
    objetivos: ['concursos-gerais', 'tribunais', 'estatais'],
    enunciado: 'Entre os requisitos mínimos de sistema do Windows 11 estão firmware UEFI com capacidade de Secure Boot, TPM (Trusted Platform Module) versão 2.0, 4 GB de memória RAM e 64 GB ou mais de armazenamento.',
    resposta: true,
    explicacao: {
      resumo: 'Certo. São requisitos mínimos documentados pela Microsoft para o Windows 11.',
      detalhada: 'A documentação oficial lista, entre outros requisitos: processador de 1 GHz ou mais, 2 ou mais núcleos, 64 bits ou SoC compatível; **4 GB de RAM**; **64 GB** ou mais de armazenamento; **UEFI com Secure Boot**; **TPM 2.0**; placa gráfica compatível com DirectX 12 e driver WDDM 2.0.\n\nMuitos PCs têm TPM e Secure Boot mas os trazem desativados na configuração do firmware. Para usar um disco que o Windows consiga iniciar em UEFI, ele precisa estar em formato **GPT**.',
      dica: 'Windows 11: UEFI + Secure Boot + TPM 2.0 + 4 GB + 64 GB.'
    },
    fontes: [ { titulo: 'Microsoft Learn: requisitos do Windows 11', url: 'https://learn.microsoft.com/windows/whats-new/windows-11-requirements' } ]
  },
  {
    id: 'inf-903', materia: 'informatica', assunto: 'Hardware e manutenção', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 1,
    objetivos: ['concursos-gerais', 'estatais', 'bancarios'],
    enunciado: 'Ao ligar um computador, o firmware (BIOS ou UEFI) executa uma sequência de etapas até o sistema operacional ficar pronto. A ordem correta é:',
    alternativas: [
      'POST (teste e inicialização do hardware), localização do dispositivo de boot, carga do gerenciador de inicialização, carga do kernel do sistema operacional.',
      'carga do kernel do sistema operacional, POST, localização do dispositivo de boot, carga do gerenciador de inicialização.',
      'carga do gerenciador de inicialização, carga do kernel, POST, localização do dispositivo de boot.',
      'logon do usuário, POST, carga do kernel, localização do dispositivo de boot.',
      'localização do dispositivo de boot, carga do kernel, logon do usuário, POST.'
    ],
    resposta: 0,
    explicacao: {
      resumo: 'Primeiro o firmware testa o hardware (POST); depois acha o disco de boot, carrega o gerenciador e este carrega o kernel.',
      detalhada: 'Sequência típica:\n\n- **POST (Power-On Self Test):** o firmware testa e inicializa processador, memória e dispositivos básicos. Falhas geram bipes ou códigos.\n- **Busca do dispositivo de boot:** conforme a ordem de inicialização configurada (disco, USB, rede).\n- **Gerenciador de inicialização:** em UEFI, ele vem da partição de sistema EFI (ESP); em BIOS legado, do MBR do disco.\n- **Kernel e serviços:** o gerenciador carrega o kernel do sistema, que inicia drivers e serviços.\n- **Logon:** o usuário se autentica por último.',
      alternativas: [
        'Certa: ordem lógica do boot.',
        'Errada: o kernel não pode carregar antes do teste de hardware e do gerenciador.',
        'Errada: o gerenciador depende de o firmware achar o dispositivo.',
        'Errada: o logon é a última etapa.',
        'Errada: o POST é a primeira etapa.'
      ],
      dica: 'POST sempre vem primeiro; logon sempre vem por último.'
    },
    fontes: [ { titulo: 'Wikipedia: POST (Power-On Self-Test)', url: 'https://en.wikipedia.org/wiki/Power-on_self-test' }, { titulo: 'Microsoft Learn: inicialização e UEFI', url: 'https://learn.microsoft.com/windows-hardware/drivers/bringup/boot-and-uefi' } ] },
  {
    id: 'inf-904', materia: 'informatica', assunto: 'Hardware e manutenção', tipo: 'multipla', estilo: 'FGV', dificuldade: 3,
    objetivos: ['concursos-gerais', 'tribunais', 'estatais'],
    enunciado: 'Um analista vai instalar o Windows 11 em um computador cujo firmware opera em modo UEFI nativo, sem modo de compatibilidade (CSM). Quanto ao disco de instalação e seu particionamento, é correto afirmar que:',
    alternativas: [
      'o disco deve ser MBR, porque o UEFI não reconhece tabelas de partição GPT.',
      'o disco deve ser MBR com partição estendida, único formato aceito pelo Windows em UEFI.',
      'o disco deve ser dinâmico e sem tabela de partição, para que o UEFI o reconheça.',
      'o disco deve usar GPT, com partição de sistema EFI (ESP), partição MSR e partição de dados básica com o Windows.',
      'qualquer esquema serve, pois o UEFI dispensa a partição de sistema EFI.'
    ],
    resposta: 3,
    explicacao: {
      resumo: 'Em UEFI, o Windows inicia a partir de disco GPT, que contém a ESP, a MSR e a partição de dados.',
      detalhada: 'O GPT nasceu junto da iniciativa UEFI. Segundo a Microsoft, os sistemas UEFI exigem que a partição de inicialização esteja em disco GPT, e o Windows **não** inicia em UEFI a partir de disco MBR. Para sistemas UEFI, o disco de boot precisa conter **ESP** (sistema EFI, em FAT32), **MSR** (reservada) e pelo menos uma partição de dados básica com o sistema.\n\nO **MBR** é limitado a quatro entradas de partição (mais a estendida) e, com setores de 512 bytes e endereçamento de 32 bits, enxerga no máximo **2 TiB** por disco (2^32 x 512 B). O GPT permite até 128 partições no Windows e discos muito maiores.',
      alternativas: [
        'Errada: o UEFI nativo reconhece GPT; por isso o MBR não é exigido (o Windows nem inicia em UEFI por MBR).',
        'Errada: Windows em UEFI não inicia por MBR.',
        'Errada: disco dinâmico não é esquema de boot; GPT/MBR é tabela de partição.',
        'Certa: GPT com ESP, MSR e dados.',
        'Errada: a ESP é obrigatória para iniciar em UEFI.'
      ],
      dica: 'UEFI + Windows = GPT + ESP. BIOS legado (CSM) = MBR, com limite de 2 TiB e 4 partições primárias.'
    },
    fontes: [ { titulo: 'Microsoft Learn: Windows e GPT (perguntas frequentes)', url: 'https://learn.microsoft.com/pt-br/windows-hardware/manufacture/desktop/windows-and-gpt-faq' }, { titulo: 'Microsoft Learn: partições UEFI/GPT (ESP, MSR)', url: 'https://learn.microsoft.com/windows-hardware/manufacture/desktop/configure-uefigpt-based-hard-drive-partitions' } ] },
  {
    id: 'inf-905', materia: 'informatica', assunto: 'Hardware e manutenção', tipo: 'multipla', estilo: 'Vunesp', dificuldade: 1,
    objetivos: ['concursos-gerais', 'estatais', 'bancarios'],
    enunciado: 'Considerando a classificação dos periféricos em dispositivos de entrada, de saída e de entrada e saída, o dispositivo que se classifica como de entrada E saída é:',
    alternativas: [
      'o scanner de mesa.',
      'o teclado.',
      'o plotter.',
      'a caixa de som.',
      'o monitor com tela sensível ao toque (touchscreen).'
    ],
    resposta: 4,
    explicacao: {
      resumo: 'A tela sensível ao toque exibe imagens (saída) e recebe toques (entrada).',
      detalhada: 'A classificação é pelo sentido do fluxo de dados em relação ao computador:\n\n- **Entrada:** teclado, mouse, scanner, webcam, microfone.\n- **Saída:** monitor comum, impressora, plotter, caixa de som.\n- **Entrada e saída (mistos):** touchscreen, pendrive, HD/SSD, placa de rede, modem.\n\nO touchscreen mostra a imagem do computador e também envia ao computador a posição do toque, logo faz as duas funções.',
      alternativas: [
        'Errada: scanner só envia imagens ao computador (entrada).',
        'Errada: o teclado só envia dados (entrada).',
        'Errada: o plotter só recebe dados para imprimir (saída).',
        'Errada: a caixa de som só reproduz sinais (saída).',
        'Certa: o touchscreen faz entrada e saída.'
      ],
      dica: 'Dispositivos de armazenamento e de rede também são mistos: gravam e leem.'
    },
    fontes: [ { titulo: 'Wikipedia: tela sensível ao toque (dispositivo de entrada e saída)', url: 'https://en.wikipedia.org/wiki/Touchscreen' } ] },
  {
    id: 'inf-906', materia: 'informatica', assunto: 'Sistemas operacionais', tipo: 'multipla', estilo: 'FCC', dificuldade: 1,
    objetivos: ['concursos-gerais', 'tribunais', 'estatais'],
    enunciado: 'No Windows 10 e no Windows 11, o atalho de teclado que permite selecionar uma região da tela e capturá-la para a área de transferência é:',
    alternativas: [
      'Windows + D.',
      'Windows + V.',
      'Windows + Shift + S.',
      'Windows + L.',
      'Ctrl + Shift + Esc.'
    ],
    resposta: 2,
    explicacao: {
      resumo: 'Windows+Shift+S abre a captura de uma região da tela, que vai para a área de transferência.',
      detalhada: 'De acordo com a Microsoft, **Windows+Shift+S** permite selecionar uma região da tela e capturá-la para a área de transferência (Ferramenta de Captura).\n\nOs outros atalhos da questão:\n\n- **Windows+D:** mostra ou oculta a área de trabalho.\n- **Windows+V:** abre o histórico da área de transferência.\n- **Windows+L:** bloqueia o computador.\n- **Ctrl+Shift+Esc:** abre o Gerenciador de Tarefas.',
      alternativas: [
        'Errada: mostra a área de trabalho.',
        'Errada: abre o histórico da área de transferência (colar itens copiados).',
        'Certa: captura de região da tela.',
        'Errada: bloqueia o computador.',
        'Errada: abre o Gerenciador de Tarefas.'
      ],
      dica: 'S de Screenshot e Shift: região da tela. Windows+V é o histórico do que foi copiado.'
    },
    fontes: [ { titulo: 'Microsoft: atalhos de teclado do Windows', url: 'https://support.microsoft.com/pt-BR/help/12445/windows-keyboard-shortcuts' } ]
  },
  {
    id: 'inf-907', materia: 'informatica', assunto: 'Sistemas operacionais', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 2,
    objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'No Explorador de Arquivos do Windows, ao selecionar um arquivo e pressionar Shift+Delete, o item é excluído permanentemente, sem ser movido para a Lixeira.',
    resposta: true,
    explicacao: {
      resumo: 'Certo. Shift+Delete elimina o item sem passar pela Lixeira.',
      detalhada: 'A documentação da Microsoft descreve **Shift+Delete** como excluir o item selecionado sem movê-lo antes para a Lixeira. Por isso o Windows costuma pedir confirmação.\n\nJá o **Delete** simples envia o item à Lixeira (de onde pode ser restaurado, enquanto não for esvaziada ou ultrapassar o limite de tamanho). Itens excluídos de forma permanente só podem ser recuperados por backup ou programas de recuperação, e sem garantia.',
      dica: 'Delete = Lixeira. Shift+Delete = exclusão direta.'
    },
    fontes: [ { titulo: 'Microsoft: atalhos de teclado no Windows', url: 'https://support.microsoft.com/pt-br/windows/atalhos-de-teclado-no-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec' } ] },
  {
    id: 'inf-908', materia: 'informatica', assunto: 'Sistemas operacionais', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 2,
    objetivos: ['concursos-gerais', 'estatais', 'bancarios'],
    enunciado: 'Um servidor público tenta copiar um arquivo de vídeo de 6 GiB para um pendrive de 64 GB, que veio formatado em FAT32 de fábrica, e recebe a mensagem de que o arquivo é grande demais para o sistema de arquivos de destino, embora haja espaço livre suficiente. A causa mais provável é que o pendrive está formatado em:',
    alternativas: [
      'NTFS, que não admite arquivos acima de 4 GiB.',
      'FAT32, que limita o tamanho de um arquivo individual a 4 GiB.',
      'exFAT, que limita cada arquivo a 2 GiB.',
      'ReFS, que só trabalha com arquivos de texto.',
      'ext4, único sistema de arquivos que o Windows não consegue gravar.'
    ],
    resposta: 1,
    explicacao: {
      resumo: 'O FAT32 não aceita arquivo individual maior que 4 GiB; a solução é formatar em exFAT ou NTFS.',
      detalhada: 'Segundo a tabela de comparação da Microsoft, o tamanho máximo de arquivo é **4 GiB no FAT32**, e **2^64 - 1 bytes** no NTFS e no exFAT.\n\nPara pendrives, o **exFAT** é uma boa escolha: grandes arquivos, leitura em Windows e macOS, sem o peso de recursos de segurança do NTFS. O **NTFS** acrescenta permissões (ACL), criptografia, compressão e journaling, que o FAT32 e o exFAT não têm.\n\nO espaço livre total não importa: o limite é por arquivo.',
      alternativas: [
        'Errada: o NTFS suporta arquivos enormes.',
        'Certa: limite de 4 GiB por arquivo no FAT32.',
        'Errada: o exFAT suporta arquivos de até 2^64 - 1 bytes.',
        'Errada: ReFS não tem essa restrição de tipo.',
        'Errada: o Windows não grava ext4 nativamente, mas isso não tem relação com o limite de 4 GiB por arquivo.'
      ],
      dica: 'FAT32: arquivo máximo de 4 GiB. exFAT e NTFS resolvem.'
    },
    fontes: [ { titulo: 'Microsoft Learn: comparação de funcionalidades de sistemas de arquivos', url: 'https://learn.microsoft.com/pt-br/windows/win32/fileio/filesystem-functionality-comparison' } ]
  },
  {
    id: 'inf-909', materia: 'informatica', assunto: 'Sistemas operacionais', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 2,
    objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'No Windows, é possível salvar um arquivo com o nome "Plano 2026: versão final.docx", pois o caractere dois-pontos é aceito em nomes de arquivos, ao contrário do asterisco e do ponto de interrogação.',
    resposta: false,
    explicacao: {
      resumo: 'Errado. O dois-pontos também é caractere reservado e não pode ser usado em nomes de arquivos.',
      detalhada: 'Os caracteres reservados que não podem aparecer em nomes de arquivos e pastas no Windows são o sinal de menor, o de maior, dois-pontos, aspas duplas, barra, barra invertida, barra vertical, interrogação e asterisco.\n\nO dois-pontos é reservado porque separa a letra da unidade (C:). O nome do exemplo seria rejeitado, bastando trocar por um hífen.\n\nOutras regras úteis: o nome não pode terminar com espaço ou ponto, e nomes de dispositivo como CON, PRN, AUX e NUL são reservados.',
      dica: 'Decore os nove proibidos: < > : " / \\ | ? *.'
    },
    fontes: [ { titulo: 'Microsoft Learn: nomeação de arquivos, diretórios e namespaces', url: 'https://learn.microsoft.com/pt-br/windows/win32/fileio/naming-a-file' } ]
  },
  {
    id: 'inf-910', materia: 'informatica', assunto: 'Sistemas operacionais', tipo: 'multipla', estilo: 'FGV', dificuldade: 2,
    objetivos: ['concursos-gerais', 'tribunais', 'estatais'],
    enunciado: 'Quando a memória RAM física de um computador com Windows está quase totalmente ocupada, o sistema pode continuar abrindo programas. Isso é possível porque o sistema operacional usa o conceito de memória virtual, que consiste em:',
    alternativas: [
      'usar parte do espaço do disco (arquivo de paginação) como extensão da RAM, movendo para lá páginas de memória pouco usadas.',
      'aumentar a frequência do processador para processar os dados mais rápido.',
      'ativar a memória cache L3 como se fosse RAM adicional.',
      'copiar a memória ROM do firmware para a RAM.',
      'usar a memória dedicada da placa de vídeo como memória principal em todos os casos.'
    ],
    resposta: 0,
    explicacao: {
      resumo: 'A memória virtual usa o disco (arquivo de paginação) para complementar a RAM, movendo páginas pouco usadas.',
      detalhada: 'No Windows, as páginas de memória retiradas da RAM ficam em um ou mais arquivos de paginação (**pagefile.sys**), em geral na raiz da unidade. Cada processo enxerga um espaço de endereços próprio e contínuo, e o sistema decide o que mantém na RAM e o que vai ao disco.\n\nO preço é o desempenho: o disco, mesmo um SSD, é muito mais lento que a RAM. Se o sistema paginar o tempo todo, ocorre a **degradação por paginação** (thrashing): a máquina fica lenta e o disco trabalha sem parar. A solução real é instalar mais RAM.',
      alternativas: [
        'Certa: arquivo de paginação como extensão da RAM.',
        'Errada: frequência não tem relação com memória virtual.',
        'Errada: o cache não substitui a RAM.',
        'Errada: a ROM guarda o firmware e não é cópia de RAM.',
        'Errada: a memória da GPU não substitui a RAM do sistema.'
      ],
      dica: 'Memória virtual = RAM + disco. Se paginar demais, falta RAM.'
    },
    fontes: [ { titulo: 'Microsoft Learn: RAM, memória virtual, pagefile e gerenciamento de memória no Windows', url: 'https://learn.microsoft.com/troubleshoot/windows-server/performance/ram-virtual-memory-pagefile-management' } ]
  },
  {
    id: 'inf-911', materia: 'informatica', assunto: 'Editores de texto', tipo: 'multipla', estilo: 'FCC', dificuldade: 2,
    objetivos: ['concursos-gerais', 'tribunais', 'estatais'],
    enunciado: 'Uma servidora está redigindo um relatório extenso no Microsoft Word e deseja um sumário que se atualize automaticamente quando títulos, ordem ou páginas mudarem. O procedimento correto é:',
    alternativas: [
      'digitar manualmente os títulos e os números de página, usando tabulação com pontilhado.',
      'aplicar negrito e fonte maior nos títulos e usar a guia Revisão para gerar o sumário.',
      'inserir quebras de seção entre os capítulos e usar a opção Controlar Alterações.',
      'aplicar estilos de título (Título 1, Título 2 etc.) nas seções e inserir o sumário pela guia Referências.',
      'converter o documento para texto simples e inserir um índice remissivo.'
    ],
    resposta: 3,
    explicacao: {
      resumo: 'O sumário automático do Word é montado a partir dos estilos de título e inserido pela guia Referências.',
      detalhada: 'Segundo a Microsoft, antes de inserir o sumário é preciso aplicar **estilos de título** às seções. O Word cria a tabela com base nesses títulos e pode **atualizá-la** quando o texto, a ordem ou o nível mudarem (botão Atualizar Tabela).\n\nFormatação manual (negrito, tamanho) não cria estrutura, e o Word não reconhece como título. **Controlar Alterações** é da guia Revisão e registra edições. Já o **índice remissivo** (palavras-chave com páginas) é outra ferramenta.',
      alternativas: [
        'Errada: seria manual e não se atualiza.',
        'Errada: negrito não é estilo de título, e o sumário fica em Referências.',
        'Errada: quebras de seção e controle de alterações não geram sumário.',
        'Certa: estilos de título e Referências.',
        'Errada: texto simples perde os estilos, e o índice remissivo é outra coisa.'
      ],
      dica: 'Sumário automático = estilos de título + guia Referências.'
    },
    fontes: [ { titulo: 'Microsoft: criar um sumário no Word', url: 'https://support.microsoft.com/pt-br/office/criar-um-sum%C3%A1rio-882e8564-0edb-435e-84b5-1d8552ccf0c0' } ]
  },
  {
    id: 'inf-912', materia: 'informatica', assunto: 'Editores de texto', tipo: 'multipla', estilo: 'Vunesp', dificuldade: 1,
    objetivos: ['concursos-gerais', 'estatais', 'bancarios'],
    enunciado: 'O formato de arquivo nativo (padrão) do editor de textos Writer, do pacote LibreOffice, é o formato aberto OpenDocument, cuja extensão é:',
    alternativas: [
      '.docx',
      '.xlsx',
      '.pptx',
      '.pdf',
      '.odt'
    ],
    resposta: 4,
    explicacao: {
      resumo: 'O Writer usa o OpenDocument Text, com extensão .odt.',
      detalhada: 'O LibreOffice usa o padrão aberto **OpenDocument (ODF)**:\n\n- **.odt:** texto (Writer).\n- **.ods:** planilha (Calc).\n- **.odp:** apresentação (Impress).\n\nAs extensões **.docx, .xlsx e .pptx** são do Microsoft Office (Office Open XML). O Writer abre e salva em .docx, mas isso é opção de compatibilidade; o formato padrão é o .odt. O PDF é um formato de documento portátil, e o Writer o exporta.',
      alternativas: [
        'Errada: é o formato do Word.',
        'Errada: é o formato de planilha do Excel.',
        'Errada: é o formato de apresentação do PowerPoint.',
        'Errada: PDF é formato de exportação, não o nativo.',
        'Certa: OpenDocument Text.'
      ],
      dica: 'Writer .odt, Calc .ods, Impress .odp. Word .docx, Excel .xlsx, PowerPoint .pptx.'
    },
    fontes: [ { titulo: 'LibreOffice: salvar documentos (.odt)', url: 'https://help.libreoffice.org/latest/pt-BR/text/shared/guide/doc_save.html' }, { titulo: 'Wikipedia: OpenDocument', url: 'https://en.wikipedia.org/wiki/OpenDocument' } ] },
  {
    id: 'inf-913', materia: 'informatica', assunto: 'Editores de texto', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 2,
    objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'No Microsoft Word, o atalho Shift+Enter insere uma quebra de página, enquanto o atalho Ctrl+Enter insere uma quebra de linha dentro do mesmo parágrafo.',
    resposta: false,
    explicacao: {
      resumo: 'Errado. É o contrário: Ctrl+Enter insere quebra de página e Shift+Enter insere quebra de linha.',
      detalhada: 'Segundo a documentação do Word, **Ctrl+Enter** insere uma **quebra de página** (o texto seguinte começa em nova página) e **Shift+Enter** insere uma **quebra de linha**, que muda de linha sem criar novo parágrafo.\n\nO **Enter** sozinho cria um novo parágrafo. A diferença importa na formatação: recuos e espaçamentos são aplicados por parágrafo, e a quebra de linha mantém o mesmo parágrafo.',
      dica: 'Ctrl+Enter vira a página; Shift+Enter só quebra a linha.'
    },
    fontes: [ { titulo: 'Microsoft: atalhos de teclado do Word', url: 'https://support.microsoft.com/pt-BR/Accessibility/word/keyboard-shortcuts-in-word' } ]
  },
  {
    id: 'inf-914', materia: 'informatica', assunto: 'Planilhas (Excel e Calc)', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 2,
    objetivos: ['concursos-gerais', 'estatais', 'bancarios'],
    textoBase: 'Intervalo A2:B6 de uma planilha (coluna A = região; coluna B = vendas):\nA2: Norte | B2: 120\nA3: Sul | B3: 80\nA4: Norte | B4: 50\nA5: Leste | B5: 200\nA6: Norte | B6: 30',
    enunciado: 'Na célula D1 foi digitada a fórmula =SOMASE(A2:A6;"Norte";B2:B6). O valor exibido em D1 é:',
    alternativas: [
      '3.',
      '130.',
      '200.',
      '250.',
      '480.'
    ],
    resposta: 2,
    explicacao: {
      resumo: 'SOMASE soma as vendas das linhas em que a região é "Norte": 120 + 50 + 30 = 200.',
      detalhada: 'A sintaxe é **SOMASE(intervalo; critério; [intervalo_soma])**. A função testa cada célula de A2:A6 contra o critério "Norte" e soma os valores correspondentes de B2:B6.\n\n- A2 (Norte): 120.\n- A4 (Norte): 50.\n- A6 (Norte): 30.\n\nTotal: **200**. O total geral da coluna B seria 480, e a contagem de linhas "Norte" (CONT.SE) seria 3.',
      alternativas: [
        'Errada: é o resultado de contar quantas vezes "Norte" aparece (CONT.SE).',
        'Errada: 130 = 80 (Sul) + 50 (Norte); soma uma linha de outra região.',
        'Certa: 120 + 50 + 30.',
        'Errada: 250 = 50 (Norte) + 200 (Leste); soma uma linha de outra região.',
        'Errada: é a soma de todas as vendas, sem aplicar o critério.'
      ],
      dica: 'Confira qual argumento é o critério e qual é o intervalo de soma. Contagem é CONT.SE; soma é SOMASE.'
    },
    fontes: [ { titulo: 'Microsoft: função SOMASE', url: 'https://support.microsoft.com/pt-br/office/fun%C3%A7%C3%A3o-somase-169b8c99-c05c-4483-a712-1697a653039b' } ]
  },
  {
    id: 'inf-915', materia: 'informatica', assunto: 'Planilhas (Excel e Calc)', tipo: 'multipla', estilo: 'FGV', dificuldade: 3,
    objetivos: ['concursos-gerais', 'tribunais', 'estatais'],
    textoBase: 'Intervalo A2:C4 de uma planilha, em ordem crescente na coluna A:\nA2: 101 | B2: Caneta | C2: 2,50\nA3: 102 | B3: Caderno | C3: 18,00\nA4: 103 | B4: Mochila | C4: 95,00',
    enunciado: 'Na célula E1 foi digitada a fórmula =PROCV(104;A2:C4;3;VERDADEIRO). O resultado exibido em E1 é:',
    alternativas: [
      '#N/D.',
      '95,00.',
      '18,00.',
      'Mochila.',
      '104.'
    ],
    resposta: 1,
    explicacao: {
      resumo: 'Com correspondência aproximada (VERDADEIRO), o PROCV usa o maior valor menor ou igual a 104, que é 103, e devolve a coluna 3: 95,00.',
      detalhada: 'Sintaxe: **PROCV(valor_procurado; matriz; núm_índice_coluna; [procurar_intervalo])**.\n\nCom o quarto argumento **VERDADEIRO** (ou 1, ou omitido), a busca é **aproximada** e exige que a primeira coluna esteja em ordem crescente. Como 104 não existe, o Excel considera o maior valor menor ou igual a ele: **103**. A coluna 3 dessa linha é **95,00**.\n\nCom **FALSO** (ou 0) a busca seria **exata** e o resultado seria **#N/D**. "Mochila" seria o retorno se o índice da coluna fosse 2.',
      alternativas: [
        'Errada: #N/D ocorreria com FALSO (busca exata).',
        'Certa: 103 é o maior valor ≤ 104; coluna 3 = 95,00.',
        'Errada: é o preço da linha do 102.',
        'Errada: seria o retorno do índice de coluna 2.',
        'Errada: o PROCV devolve o conteúdo da coluna indicada, não o valor procurado.'
      ],
      dica: 'Último argumento omitido ou VERDADEIRO = aproximado. Para código exato, use sempre FALSO (ou 0).'
    },
    fontes: [ { titulo: 'Microsoft: função PROCV', url: 'https://support.microsoft.com/pt-br/office/fun%C3%A7%C3%A3o-procv-0bbc8083-26fe-4963-8ab8-93a18ad188a1' } ]
  },
  {
    id: 'inf-916', materia: 'informatica', assunto: 'Planilhas (Excel e Calc)', tipo: 'multipla', estilo: 'FCC', dificuldade: 3,
    objetivos: ['concursos-gerais', 'tribunais', 'estatais'],
    textoBase: 'Notas de um aluno nas células B2 a B6: B2 = 8; B3 = 6; B4 = 4; B5 = (célula vazia); B6 = 6.',
    enunciado: 'Na célula C2 foi digitada a fórmula =SE(MÉDIA(B2:B6)>=7;"Aprovado";SE(MÉDIA(B2:B6)>=5;"Recuperação";"Reprovado")). O texto exibido em C2 é:',
    alternativas: [
      'Aprovado.',
      'Reprovado.',
      '#DIV/0!.',
      'Recuperação.',
      '#VALOR!.'
    ],
    resposta: 3,
    explicacao: {
      resumo: 'A MÉDIA ignora a célula vazia: (8 + 6 + 4 + 6) / 4 = 6, que é menor que 7 e maior ou igual a 5, resultando em "Recuperação".',
      detalhada: 'A função MÉDIA **ignora células vazias** (e texto e valores lógicos), mas **inclui células com zero**. A média é, portanto, 24 / 4 = **6**.\n\nO SE é avaliado de fora para dentro:\n\n- 6 >= 7? Falso: vai para o SE interno.\n- 6 >= 5? Verdadeiro: devolve **"Recuperação"**.\n\nSe a célula vazia contasse como zero, a média seria 24 / 5 = 4,8 e o resultado seria "Reprovado", que é a armadilha da questão.',
      alternativas: [
        'Errada: a média 6 é menor que 7.',
        'Errada: seria o resultado se a célula vazia valesse zero (média 4,8).',
        'Errada: há valores numéricos no intervalo, então não há divisão por zero.',
        'Certa: média 6, entre 5 e 7.',
        'Errada: células vazias não geram erro de valor.'
      ],
      dica: 'Célula vazia é ignorada na MÉDIA; zero digitado entra na conta.'
    },
    fontes: [
      { titulo: 'Microsoft: função MÉDIA', url: 'https://support.microsoft.com/pt-br/office/fun%C3%A7%C3%A3o-m%C3%A9dia-047bac88-d466-426c-a32b-8f33eb960cf6' },
      { titulo: 'Microsoft: função SE', url: 'https://support.microsoft.com/pt-br/office/fun%C3%A7%C3%A3o-se-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2' }
    ]
  },
  {
    id: 'inf-917', materia: 'informatica', assunto: 'Planilhas (Excel e Calc)', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 3,
    objetivos: ['concursos-gerais', 'tribunais', 'policial'],
    enunciado: 'Se a fórmula =$A2*B$1 digitada na célula D2 de uma planilha for copiada para a célula F4, a fórmula resultante em F4 será =$C4*D$1.',
    resposta: false,
    explicacao: {
      resumo: 'Errado. A coluna A está fixada em $A, então a fórmula em F4 fica =$A4*D$1.',
      detalhada: 'Na referência **$A2**, a coluna é absoluta (cifrão antes da letra) e a linha é relativa. Na referência **B$1**, a coluna é relativa e a linha é absoluta.\n\nCopiar de D2 para F4 desloca **2 colunas à direita** e **2 linhas abaixo**:\n\n- **$A2**: a coluna não muda e a linha sobe de 2 para 4: **$A4**.\n- **B$1**: a coluna avança duas (B para D) e a linha não muda: **D$1**.\n\nResultado: **=$A4*D$1**. Trocar $A por $C seria deslocar a coluna fixa, o que o cifrão impede.',
      dica: 'Cifrão trava o que vem logo depois dele. A tecla F4 alterna os tipos de referência.'
    },
    fontes: [ { titulo: 'Microsoft: alternar entre referências relativas, absolutas e mistas', url: 'https://support.microsoft.com/pt-br/office/alternar-entre-refer%C3%AAncias-relativas-absolutas-e-mistas-dfec08cd-ae65-4f56-839e-5f0d8d0baca9' } ]
  },
  {
    id: 'inf-918', materia: 'informatica', assunto: 'Computação em nuvem', tipo: 'multipla', estilo: 'Vunesp', dificuldade: 2,
    objetivos: ['concursos-gerais', 'tribunais', 'estatais', 'bancarios'],
    enunciado: 'Uma empresa contratou de um provedor máquinas virtuais, armazenamento e redes virtuais, e ela mesma instala e administra o sistema operacional e os aplicativos nesses recursos. De acordo com a classificação do NIST, esse modelo de serviço de nuvem é:',
    alternativas: [
      'IaaS (Infraestrutura como Serviço).',
      'PaaS (Plataforma como Serviço).',
      'SaaS (Software como Serviço).',
      'nuvem privada.',
      'nuvem híbrida.'
    ],
    resposta: 0,
    explicacao: {
      resumo: 'Quando o cliente recebe recursos básicos (processamento, armazenamento, rede) e controla o SO e as aplicações, o modelo é IaaS.',
      detalhada: 'O NIST define três modelos de serviço:\n\n- **IaaS:** o cliente provisiona processamento, armazenamento e rede, e controla sistemas operacionais, armazenamento e aplicações implantados. Não gerencia a infraestrutura física da nuvem.\n- **PaaS:** o cliente implanta suas aplicações em uma plataforma (runtime, banco de dados, ferramentas) e não gerencia o SO nem a infraestrutura.\n- **SaaS:** o cliente usa a aplicação do provedor, normalmente pelo navegador.\n\nNuvem privada e híbrida são **modelos de implantação**, não de serviço.',
      alternativas: [
        'Certa: o cliente administra SO e aplicativos sobre infraestrutura virtual.',
        'Errada: no PaaS o cliente não administra o sistema operacional.',
        'Errada: no SaaS o cliente apenas consome o software.',
        'Errada: nuvem privada é modelo de implantação, não de serviço.',
        'Errada: nuvem híbrida também é modelo de implantação.'
      ],
      dica: 'Quanto mais o cliente controla, mais próximo de IaaS: IaaS (infra), PaaS (plataforma), SaaS (software).'
    },
    fontes: [ { titulo: 'NIST SP 800-145: a definição de computação em nuvem do NIST', url: 'https://csrc.nist.gov/pubs/sp/800/145/final' } ]
  },
  {
    id: 'inf-919', materia: 'informatica', assunto: 'Computação em nuvem', tipo: 'multipla', estilo: 'FCC', dificuldade: 2,
    objetivos: ['concursos-gerais', 'tribunais', 'estatais', 'bancarios'],
    enunciado: 'A definição de computação em nuvem do NIST (SP 800-145) lista cinco características essenciais. NÃO é uma delas:',
    alternativas: [
      'autosserviço sob demanda (on-demand self-service).',
      'amplo acesso à rede (broad network access).',
      'agrupamento de recursos (resource pooling).',
      'serviço medido (measured service).',
      'licenciamento perpétuo com instalação obrigatória dos programas em servidores locais.'
    ],
    resposta: 4,
    explicacao: {
      resumo: 'As cinco características são autosserviço sob demanda, amplo acesso à rede, agrupamento de recursos, elasticidade rápida e serviço medido.',
      detalhada: 'O NIST define cinco características essenciais:\n\n- **Autosserviço sob demanda:** o cliente provisiona recursos sem interação humana com o provedor.\n- **Amplo acesso à rede:** recursos disponíveis pela rede, por clientes variados (celular, notebook, estação).\n- **Agrupamento de recursos:** recursos compartilhados entre vários clientes (multilocação).\n- **Elasticidade rápida:** recursos aumentam e diminuem rapidamente conforme a demanda.\n- **Serviço medido:** uso monitorado e cobrado conforme o consumo.\n\nLicença perpétua com instalação em servidores locais é o oposto do modelo: é software tradicional (on-premises).',
      alternativas: [
        'Errada: autosserviço sob demanda é característica essencial: o cliente provisiona recursos sem intervenção humana do provedor.',
        'Errada: amplo acesso à rede é característica essencial: os recursos são acessados pela rede por clientes variados.',
        'Errada: agrupamento de recursos é característica essencial: os recursos do provedor atendem vários clientes (multilocação).',
        'Errada: serviço medido é característica essencial: o uso é monitorado e cobrado conforme o consumo.',
        'Certa: não é característica da nuvem; é modelo tradicional.'
      ],
      dica: 'Pagar pelo que usa (serviço medido) e crescer ou encolher rápido (elasticidade) são marcas da nuvem.'
    },
    fontes: [ { titulo: 'NIST SP 800-145: a definição de computação em nuvem do NIST', url: 'https://csrc.nist.gov/pubs/sp/800/145/final' } ]
  },
  {
    id: 'inf-920', materia: 'informatica', assunto: 'Computação em nuvem', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 2,
    objetivos: ['concursos-gerais', 'tribunais', 'estatais', 'bancarios'],
    enunciado: 'Na classificação do NIST, a nuvem híbrida é composta por duas ou mais infraestruturas de nuvem distintas (privada, comunitária ou pública) que continuam sendo entidades independentes, mas são unidas por tecnologia padronizada ou proprietária que permite a portabilidade de dados e aplicações.',
    resposta: true,
    explicacao: {
      resumo: 'Certo. Essa é a definição de nuvem híbrida do NIST.',
      detalhada: 'O NIST define quatro modelos de implantação:\n\n- **Privada:** infraestrutura para uso exclusivo de uma organização; pode ser operada por ela ou por terceiros, dentro ou fora das instalações.\n- **Comunitária:** para uma comunidade de organizações com interesses comuns.\n- **Pública:** aberta ao público em geral, localizada nas instalações do provedor.\n- **Híbrida:** combinação de duas ou mais das anteriores, unidas por tecnologia que permite portabilidade de dados e aplicações.\n\nExemplo clássico: dados sensíveis em nuvem privada e picos de demanda atendidos pela nuvem pública.',
      dica: 'Híbrida = duas ou mais nuvens distintas ligadas entre si.'
    },
    fontes: [ { titulo: 'NIST SP 800-145: a definição de computação em nuvem do NIST', url: 'https://csrc.nist.gov/pubs/sp/800/145/final' } ]
  }
] });
