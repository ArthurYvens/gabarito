/* Questões inéditas sobre Linux, no estilo das bancas de TI, escritas para o app. */
(function () {
  'use strict';

  var HIER = { titulo: 'hier(7): hierarquia do sistema de arquivos (man-pages)', url: 'https://man7.org/linux/man-pages/man7/hier.7.html' };
  var CHMOD = { titulo: 'GNU Coreutils: chmod', url: 'https://www.gnu.org/software/coreutils/manual/html_node/chmod-invocation.html' };
  var UMASK = { titulo: 'umask(2) (man-pages)', url: 'https://man7.org/linux/man-pages/man2/umask.2.html' };
  var REDIR = { titulo: 'Bash: Redirections', url: 'https://www.gnu.org/software/bash/manual/html_node/Redirections.html' };
  var FIND = { titulo: 'GNU Findutils: find', url: 'https://www.gnu.org/software/findutils/manual/html_mono/find.html' };
  var GREP = { titulo: 'GNU Grep: manual', url: 'https://www.gnu.org/software/grep/manual/grep.html' };
  var GAWK = { titulo: 'GNU Awk: manual', url: 'https://www.gnu.org/software/gawk/manual/gawk.html' };
  var PASSWD = { titulo: 'passwd(5) (man-pages)', url: 'https://man7.org/linux/man-pages/man5/passwd.5.html' };
  var SHADOW = { titulo: 'shadow(5) (man-pages)', url: 'https://man7.org/linux/man-pages/man5/shadow.5.html' };
  var TAR = { titulo: 'GNU tar: manual', url: 'https://www.gnu.org/software/tar/manual/tar.html' };
  var SIGNAL = { titulo: 'signal(7) (man-pages)', url: 'https://man7.org/linux/man-pages/man7/signal.7.html' };
  var SYSTEMCTL = { titulo: 'systemctl(1) (man-pages)', url: 'https://man7.org/linux/man-pages/man1/systemctl.1.html' };
  var JOURNALCTL = { titulo: 'journalctl(1) (man-pages)', url: 'https://man7.org/linux/man-pages/man1/journalctl.1.html' };
  var APT = { titulo: 'Debian Wiki: Apt', url: 'https://wiki.debian.org/Apt' };
  var CRON = { titulo: 'crontab(5) (man-pages)', url: 'https://man7.org/linux/man-pages/man5/crontab.5.html' };
  var SSH = { titulo: 'Ubuntu Server: OpenSSH', url: 'https://documentation.ubuntu.com/server/how-to/security/openssh-server/' };
  var SS = { titulo: 'ss(8) (man-pages)', url: 'https://man7.org/linux/man-pages/man8/ss.8.html' };
  var IP = { titulo: 'ip(8) (man-pages)', url: 'https://man7.org/linux/man-pages/man8/ip.8.html' };
  var BASHSP = { titulo: 'Bash: Special Parameters', url: 'https://www.gnu.org/software/bash/manual/html_node/Special-Parameters.html' };
  var SETGID = { titulo: 'GNU Coreutils: Directory Setuid and Setgid', url: 'https://www.gnu.org/software/coreutils/manual/html_node/Directory-Setuid-and-Setgid.html' };
  var PROC = { titulo: 'proc(5) (man-pages)', url: 'https://man7.org/linux/man-pages/man5/proc.5.html' };
  var TILDE = { titulo: 'Bash: Tilde Expansion', url: 'https://www.gnu.org/software/bash/manual/html_node/Tilde-Expansion.html' };
  var JOBS = { titulo: 'Bash: Job Control Builtins (kill)', url: 'https://www.gnu.org/software/bash/manual/html_node/Job-Control-Builtins.html' };
  var PIPES = { titulo: 'Bash: Pipelines', url: 'https://www.gnu.org/software/bash/manual/html_node/Pipelines.html' };
  var SUDO = { titulo: 'Debian Wiki: sudo', url: 'https://wiki.debian.org/sudo' };
  var PING = { titulo: 'ping(8) (man-pages)', url: 'https://man7.org/linux/man-pages/man8/ping.8.html' };
  var RFC792 = { titulo: 'RFC 792: Internet Control Message Protocol', url: 'https://www.rfc-editor.org/rfc/rfc792' };
  var LN = { titulo: 'GNU Coreutils: ln', url: 'https://www.gnu.org/software/coreutils/manual/html_node/ln-invocation.html' };

  var TI = ['concursos-gerais', 'tribunais', 'policial'];
  var BANC = ['bancarios', 'estatais', 'concursos-gerais'];

  Banco.registrar({ questoes: [
    {
      id: 'inf-801', materia: 'informatica', assunto: 'Linux', tipo: 'multipla', estilo: 'FGV', dificuldade: 1,
      objetivos: TI,
      enunciado: 'Pela hierarquia padrão de diretórios dos sistemas Linux, os arquivos de registro (logs) do sistema e dos serviços ficam, por convenção, em',
      alternativas: ['/etc.', '/usr/share.', '/var/log.', '/proc.', '/boot.'],
      resposta: 2,
      explicacao: {
        resumo: 'Os logs ficam em /var/log, pois /var guarda dados que mudam durante a operação do sistema.',
        detalhada: 'O diretório **/var** concentra dados variáveis: filas de impressão e de e-mail, caches e, em **/var/log**, os registros do sistema e dos serviços (por exemplo, `syslog`, `auth.log` ou `messages`, conforme a distribuição).\n\nJá o **/etc** guarda configuração, o **/usr** guarda programas e bibliotecas, o **/proc** é um sistema de arquivos virtual com informações do kernel e dos processos, e o **/boot** guarda o kernel e os arquivos do carregador de inicialização.',
        alternativas: [
          'Errada. /etc guarda arquivos de configuração do sistema, não os registros.',
          'Errada. /usr/share guarda dados independentes de arquitetura, como documentação e ícones.',
          'Certa. /var/log é o local convencional dos logs.',
          'Errada. /proc é virtual e expõe o estado do kernel e dos processos.',
          'Errada. /boot guarda o kernel, o initramfs e arquivos do carregador de boot.'
        ],
        dica: 'V de /var lembra "variável": o que cresce e muda com o uso, como logs, vai para lá.'
      },
      fontes: [HIER]
    },
    {
      id: 'inf-802', materia: 'informatica', assunto: 'Sistemas operacionais', tipo: 'multipla', estilo: 'FCC', dificuldade: 1,
      objetivos: TI.concat(['estatais']),
      enunciado: 'Em um sistema Linux, o administrador executou o comando chmod 754 relatorio.sh. Na listagem longa (ls -l), as permissões desse arquivo passam a ser exibidas como',
      alternativas: ['-rwxr-xr--', '-rwxr-xr-x', '-rw-r-xr--', '-r-xr-xr--', '-rwxrwxr--'],
      resposta: 0,
      explicacao: {
        resumo: 'Em 754, o dono tem 7 (rwx), o grupo tem 5 (r-x) e os demais têm 4 (r--).',
        detalhada: 'Na notação octal, cada dígito soma **r = 4**, **w = 2** e **x = 1**, na ordem dono, grupo e outros.\n\n- **7** = 4 + 2 + 1 = rwx (dono);\n- **5** = 4 + 1 = r-x (grupo);\n- **4** = r-- (outros).\n\nLogo, o resultado é `rwxr-xr--`, precedido pelo caractere `-` que indica arquivo comum.',
        alternativas: [
          'Certa. 7, 5 e 4 correspondem a rwx, r-x e r--.',
          'Errada. Seria o resultado de 755: os outros teriam r-x.',
          'Errada. O dono perderia o w; isso corresponderia a 654.',
          'Errada. O dono perderia o w; isso corresponderia a 554.',
          'Errada. O grupo teria rwx; isso corresponderia a 774.'
        ],
        dica: 'Decore 4-2-1 e monte dígito por dígito. Mudar uma única letra em cada alternativa é a marca das provas.'
      },
      fontes: [CHMOD]
    },
    {
      id: 'inf-803', materia: 'informatica', assunto: 'Linux', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 2,
      objetivos: BANC,
      enunciado: 'Um usuário define umask 027 no shell e, em seguida, cria um arquivo comum novo com o comando touch ata.txt. Considerando o comportamento padrão, as permissões em octal desse arquivo serão',
      alternativas: ['755.', '750.', '644.', '027.', '640.'],
      resposta: 4,
      explicacao: {
        resumo: 'Arquivos novos partem de 666 e a umask remove bits: 666 sem 027 resulta em 640.',
        detalhada: 'A **umask** indica quais permissões **não** serão concedidas a algo recém-criado. Programas como o `touch` pedem 666 para arquivos comuns (sem bit de execução); diretórios partem de 777.\n\nCom umask 027: dono (0) não perde nada, grupo (2) perde o w e outros (7) perdem tudo. Portanto: arquivo = 6, 4, 0, ou seja **640**; diretório = 7, 5, 0, ou seja 750.\n\nAtenção: não é uma subtração aritmética, e sim um mascaramento de bits (666 E NÃO 027).',
        alternativas: [
          'Errada. 755 seria o resultado de um diretório com umask 022, e arquivos comuns nascem sem x.',
          'Errada. 750 é o resultado para um diretório com umask 027; arquivo comum não ganha x.',
          'Errada. 644 seria o resultado com umask 022.',
          'Errada. 027 é a própria máscara, não as permissões.',
          'Certa. 666 mascarado por 027 resulta em 640.'
        ],
        dica: 'Arquivo parte de 666; diretório parte de 777. Aplique a umask dígito a dígito.'
      },
      fontes: [UMASK]
    },
    {
      id: 'inf-804', materia: 'informatica', assunto: 'Linux', tipo: 'multipla', estilo: 'Vunesp', dificuldade: 2,
      objetivos: TI,
      enunciado: 'No shell Bash, o comando\n\nbackup.sh > saida.txt 2>&1\n\ncausa o seguinte efeito:',
      alternativas: [
        'a saída padrão vai para saida.txt e as mensagens de erro continuam sendo exibidas no terminal.',
        'a saída padrão e a saída de erro vão para saida.txt, e o conteúdo anterior do arquivo é sobrescrito.',
        'a saída padrão e a saída de erro são acrescentadas ao final de saida.txt, preservando o conteúdo anterior.',
        'a saída de erro vai para saida.txt e a saída padrão continua sendo exibida no terminal.',
        'a saída padrão e a saída de erro são descartadas, sem gerar nenhum registro.'
      ],
      resposta: 1,
      explicacao: {
        resumo: 'O > redireciona a saída padrão (descritor 1) para o arquivo, truncando-o, e 2>&1 faz o descritor 2 apontar para o mesmo destino.',
        detalhada: 'O operador `>` abre o arquivo para escrita e **apaga o conteúdo anterior**. Depois, `2>&1` duplica o descritor 1 (stdout) no descritor 2 (stderr); como o stdout já aponta para saida.txt, os erros também vão para lá.\n\nA **ordem importa**: `comando 2>&1 > arquivo` faz o erro apontar para o terminal (destino atual do stdout naquele momento) e só depois o stdout vai ao arquivo. Para acrescentar em vez de sobrescrever, usa-se `>>`.',
        alternativas: [
          'Errada. Isso ocorreria sem o 2>&1.',
          'Certa. Ambos os fluxos vão ao arquivo, que é truncado.',
          'Errada. Para acrescentar seria necessário o operador >>.',
          'Errada. Isso exigiria 2> saida.txt, sem redirecionar o stdout.',
          'Errada. Para descartar, o destino seria /dev/null.'
        ],
        dica: 'Leia da esquerda para a direita: primeiro > arquivo, depois 2>&1 ("o erro vai para onde o stdout está indo").'
      },
      fontes: [REDIR]
    },
    {
      id: 'inf-805', materia: 'informatica', assunto: 'Linux', tipo: 'multipla', estilo: 'FGV', dificuldade: 2,
      objetivos: TI,
      enunciado: 'Observe o comando executado por um administrador.\n\nfind /var/log -type f -name "*.log" -mtime +7\n\nEsse comando',
      alternativas: [
        'apaga os arquivos e diretórios terminados em .log que não são usados há mais de sete dias.',
        'lista os arquivos regulares terminados em .log modificados nos últimos sete dias.',
        'lista os arquivos regulares terminados em .log que foram acessados há mais de sete dias, ainda que modificados ontem.',
        'lista os arquivos regulares, a partir de /var/log, cujo nome termina em .log e cuja última modificação ocorreu há mais de sete dias.',
        'lista somente os arquivos .log do diretório /var/log, sem examinar subdiretórios, criados há mais de sete dias.'
      ],
      resposta: 3,
      explicacao: {
        resumo: 'O find lista, recursivamente, arquivos regulares .log cuja modificação é mais antiga que sete dias.',
        detalhada: 'Cada teste do `find` tem um papel: **-type f** restringe a arquivos regulares; **-name "\\*.log"** casa o nome; **-mtime +7** compara a data de **modificação** (mtime), e o sinal `+` significa "mais antigo que". O tempo é contado em períodos inteiros de 24 horas, de modo que, na prática, o arquivo tem 8 dias ou mais.\n\nO `find` percorre os subdiretórios por padrão e **não apaga nada** sem a ação `-delete` (ou `-exec rm`). Sem ação, ele só imprime os nomes.',
        alternativas: [
          'Errada. Não há ação de remoção, e -type f exclui diretórios.',
          'Errada. Nos últimos sete dias seria -mtime -7.',
          'Errada. Acesso seria -atime; -mtime trata de modificação.',
          'Certa. Descreve fielmente os três testes.',
          'Errada. O find desce nos subdiretórios (sem -maxdepth) e mtime não é data de criação.'
        ],
        dica: '+n = mais antigo que n; -n = mais recente que n. E mtime = modificação, atime = acesso, ctime = mudança de metadados.'
      },
      fontes: [FIND]
    },
    {
      id: 'inf-806', materia: 'informatica', assunto: 'Linux', tipo: 'multipla', estilo: 'FCC', dificuldade: 1,
      objetivos: TI.concat(['estatais']),
      enunciado: 'Para exibir todas as linhas do arquivo access.log que NÃO contêm o texto GET, deve-se utilizar o comando',
      alternativas: [
        'grep -c GET access.log',
        'grep -i GET access.log',
        'grep -v GET access.log',
        'grep -l GET access.log',
        'grep -w GET access.log'
      ],
      resposta: 2,
      explicacao: {
        resumo: 'A opção -v inverte a seleção do grep, mostrando as linhas que não casam com o padrão.',
        detalhada: 'No `grep`, **-v** (invert-match) seleciona as linhas que **não** contêm o padrão.\n\nAs demais opções: **-c** apenas conta as linhas que casam; **-i** ignora diferença entre maiúsculas e minúsculas; **-l** mostra só os nomes dos arquivos que têm correspondência; **-w** exige que o padrão seja uma palavra inteira.',
        alternativas: [
          'Errada. -c imprime a contagem de linhas que contêm GET.',
          'Errada. -i mostra as linhas com GET, em qualquer caixa.',
          'Certa. -v inverte a seleção.',
          'Errada. -l imprime o nome do arquivo se houver correspondência.',
          'Errada. -w seleciona linhas com GET como palavra inteira, ainda positivamente.'
        ],
        dica: 'v de "versus": o grep -v mostra tudo, menos o que casa.'
      },
      fontes: [GREP]
    },
    {
      id: 'inf-807', materia: 'informatica', assunto: 'Linux', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 2,
      objetivos: BANC.concat(['policial']),
      enunciado: 'O comando awk -F: \'{print $1}\' /etc/passwd',
      alternativas: [
        'exibe o primeiro campo de cada linha, ou seja, o nome de login de cada conta cadastrada.',
        'exibe o UID de cada conta, pois o primeiro campo do /etc/passwd é numérico.',
        'exibe o shell de login de cada conta, que é o primeiro campo lido da direita para a esquerda.',
        'exibe a quantidade de linhas do arquivo, uma vez que $1 representa o total de registros.',
        'exibe o hash da senha de cada conta, o que explica o acesso restrito ao /etc/passwd.'
      ],
      resposta: 0,
      explicacao: {
        resumo: 'Com -F: o separador de campos é dois-pontos, e $1 é o primeiro campo, que no /etc/passwd é o nome de login.',
        detalhada: 'Cada linha de `/etc/passwd` tem sete campos separados por dois-pontos: **login:senha:UID:GID:comentário:diretório-home:shell**. A opção `-F:` define `:` como separador, e `{print $1}` imprime o primeiro campo de cada linha.\n\nPara o UID seria `$3`; para o shell, `$7`; o total de linhas é a variável `NR` no bloco `END`. O arquivo `/etc/passwd` é legível por todos, e o campo de senha, em geral, traz apenas um `x` (o hash fica em `/etc/shadow`).',
        alternativas: [
          'Certa. $1 é o login.',
          'Errada. O UID é o terceiro campo ($3).',
          'Errada. O shell é o sétimo campo ($7); os campos são numerados da esquerda para a direita.',
          'Errada. $1 é um campo, não um contador; para contar linhas usa-se NR.',
          'Errada. O /etc/passwd não guarda o hash (fica em /etc/shadow), e o arquivo é legível por todos.'
        ],
        dica: 'Memorize a ordem: login, senha(x), UID, GID, comentário, home, shell.'
      },
      fontes: [GAWK, PASSWD]
    },
    {
      id: 'inf-808', materia: 'informatica', assunto: 'Linux', tipo: 'multipla', estilo: 'Vunesp', dificuldade: 2,
      objetivos: TI,
      enunciado: 'Um técnico possui o arquivo backup.tar.gz, compactado com gzip, e precisa extrair seu conteúdo no diretório já existente /tmp/restaura. O comando adequado é',
      alternativas: [
        'tar -czf backup.tar.gz -C /tmp/restaura',
        'tar -tzf backup.tar.gz /tmp/restaura',
        'tar -xzf backup.tar.gz /tmp/restaura',
        'tar -cf /tmp/restaura backup.tar.gz',
        'tar -xzf backup.tar.gz -C /tmp/restaura'
      ],
      resposta: 4,
      explicacao: {
        resumo: 'Para extrair usa-se -x; -z trata o gzip, -f indica o arquivo e -C muda o diretório de destino.',
        detalhada: 'As opções do `tar`: **-x** extrai, **-c** cria, **-t** lista, **-z** filtra por gzip, **-f** indica o arquivo e **-C dir** muda para o diretório antes da operação, que serve de destino na extração.\n\nSem o `-C`, o que vem depois do nome do arquivo é interpretado como **nome de membro** a extrair, e `/tmp/restaura` não é um membro do pacote.',
        alternativas: [
          'Errada. -c cria um pacote, não extrai.',
          'Errada. -t apenas lista o conteúdo.',
          'Errada. Sem -C, /tmp/restaura é tratado como nome de arquivo dentro do pacote e a extração falha por não encontrá-lo.',
          'Errada. -c cria um pacote, e a ordem de argumentos inverte origem e destino.',
          'Certa. Extrai o gzip e coloca os arquivos em /tmp/restaura.'
        ],
        dica: 'x = extrair, c = criar, t = listar. Destino de extração é sempre -C.'
      },
      fontes: [TAR]
    },
    {
      id: 'inf-809', materia: 'informatica', assunto: 'Linux', tipo: 'multipla', estilo: 'FGV', dificuldade: 2,
      objetivos: TI,
      enunciado: 'Um processo de PID 1234 não responde a pedidos comuns de encerramento, porque trata e ignora o sinal SIGTERM. O administrador precisa encerrá-lo de forma forçada, com um sinal que não pode ser capturado nem ignorado. O comando adequado é',
      alternativas: ['kill -HUP 1234', 'kill -KILL 1234', 'kill -TERM 1234', 'kill -0 1234', 'kill -CONT 1234'],
      resposta: 1,
      explicacao: {
        resumo: 'SIGKILL (9) não pode ser capturado, bloqueado nem ignorado: o kernel encerra o processo.',
        detalhada: 'O sinal padrão do `kill` é **SIGTERM (15)**, um pedido educado que o processo pode tratar. **SIGKILL (9)** e **SIGSTOP** são os dois sinais que não podem ser capturados, bloqueados ou ignorados.\n\nPor isso o SIGKILL deve ser o último recurso: o processo não executa limpeza (não fecha arquivos temporários, não libera bloqueios).',
        alternativas: [
          'Errada. SIGHUP pode ser tratado ou ignorado; muitos serviços o usam para reler a configuração.',
          'Certa. SIGKILL não é capturável.',
          'Errada. SIGTERM é justamente o sinal que o processo está ignorando.',
          'Errada. O sinal 0 não é entregue: apenas testa se o processo existe e se há permissão.',
          'Errada. SIGCONT retoma um processo parado.'
        ],
        dica: 'Só dois sinais não se pode tratar: SIGKILL e SIGSTOP.'
      },
      fontes: [SIGNAL]
    },
    {
      id: 'inf-810', materia: 'informatica', assunto: 'Linux', tipo: 'multipla', estilo: 'FCC', dificuldade: 2,
      objetivos: TI.concat(['estatais']),
      enunciado: 'Em uma distribuição que usa systemd, um administrador deseja que o serviço nginx seja iniciado agora e também a cada inicialização do sistema. O comando que cumpre os dois objetivos é',
      alternativas: [
        'systemctl start nginx',
        'systemctl enable nginx',
        'systemctl daemon-reload',
        'systemctl enable --now nginx',
        'systemctl mask nginx'
      ],
      resposta: 3,
      explicacao: {
        resumo: 'O enable cuida da inicialização automática e a opção --now também inicia o serviço imediatamente.',
        detalhada: '**start** inicia o serviço só na sessão atual, e **enable** apenas cria os vínculos para que ele suba nas próximas inicializações, sem iniciá-lo agora. Juntos, `enable --now` faz as duas coisas.\n\nO `daemon-reload` relê os arquivos de unit depois de alterados, e o `mask` impede totalmente que a unit seja iniciada, até manualmente.',
        alternativas: [
          'Errada. Inicia agora, mas não habilita no boot.',
          'Errada. Habilita no boot, mas não inicia agora.',
          'Errada. Apenas recarrega a configuração do systemd.',
          'Certa. Habilita e inicia.',
          'Errada. Mascarar bloqueia a unit.'
        ],
        dica: 'start/stop = agora; enable/disable = no boot. O --now junta os dois mundos.'
      },
      fontes: [SYSTEMCTL]
    },
    {
      id: 'inf-811', materia: 'informatica', assunto: 'Linux', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 2,
      objetivos: BANC.concat(['policial']),
      enunciado: 'Em um servidor com systemd, o analista precisa consultar as mensagens registradas pela unidade sshd.service desde a inicialização atual do sistema. O comando adequado é',
      alternativas: [
        'journalctl -k',
        'journalctl -f -u sshd.service',
        'journalctl -u sshd.service -b',
        'journalctl --disk-usage',
        'journalctl --vacuum-time=7d'
      ],
      resposta: 2,
      explicacao: {
        resumo: 'A opção -u filtra por unidade e -b limita às mensagens do boot atual.',
        detalhada: 'No `journalctl`, **-u** seleciona a unidade, e **-b** restringe ao boot atual (`-b -1` seria o anterior). Outras opções comuns: **-k** (mensagens do kernel), **-f** (acompanha em tempo real), **-p err** (filtra por prioridade) e **--since**/**--until** (intervalo de datas).\n\nO `--vacuum-time` **apaga** entradas antigas do journal, e `--disk-usage` só informa o espaço ocupado.',
        alternativas: [
          'Errada. -k mostra mensagens do kernel, de todas as origens.',
          'Errada. -f segue as novas mensagens em tempo real, sem se limitar ao boot atual.',
          'Certa. Unidade sshd.service e boot atual.',
          'Errada. Apenas informa o espaço em disco usado pelo journal.',
          'Errada. Remove registros com mais de sete dias.'
        ],
        dica: '-u = unit, -b = boot, -k = kernel, -f = follow.'
      },
      fontes: [JOURNALCTL]
    },
    {
      id: 'inf-812', materia: 'informatica', assunto: 'Sistemas operacionais', tipo: 'multipla', estilo: 'Vunesp', dificuldade: 1,
      objetivos: TI,
      enunciado: 'Em sistemas baseados em Debian e Ubuntu, a diferença entre os comandos "apt update" e "apt upgrade" é:',
      alternativas: [
        'o update atualiza a lista local de pacotes disponíveis nos repositórios; o upgrade instala as versões mais novas dos pacotes já instalados.',
        'o update instala as versões mais novas dos pacotes; o upgrade atualiza a lista de repositórios.',
        'o update atualiza o kernel; o upgrade atualiza somente os programas gráficos.',
        'o update remove pacotes obsoletos; o upgrade apenas lista os pacotes desatualizados.',
        'ambos fazem a mesma tarefa, e o upgrade só difere por exigir privilégios de administrador.'
      ],
      resposta: 0,
      explicacao: {
        resumo: 'O update só sincroniza o índice de pacotes; o upgrade é que instala as versões novas.',
        detalhada: 'O **apt update** baixa dos repositórios configurados as listas de pacotes e versões disponíveis, mas **não altera** nenhum programa instalado.\n\nO **apt upgrade** usa essa lista para instalar versões mais novas dos pacotes instalados (sem remover pacotes). O **apt full-upgrade** pode também remover pacotes para resolver dependências, e o **apt autoremove** remove dependências que não são mais necessárias.\n\nNas distribuições da família Red Hat, o equivalente é o `dnf upgrade`, que já atualiza os metadados quando necessário.',
        alternativas: [
          'Certa. Índice no update, instalação no upgrade.',
          'Errada. Inverte os papéis.',
          'Errada. Nenhum dos dois é específico do kernel ou de programas gráficos.',
          'Errada. A remoção de pacotes sem uso é do autoremove.',
          'Errada. São etapas distintas, e ambos exigem privilégios de administrador.'
        ],
        dica: 'update = atualiza o catálogo; upgrade = atualiza os programas.'
      },
      fontes: [APT]
    },
    {
      id: 'inf-813', materia: 'informatica', assunto: 'Linux', tipo: 'multipla', estilo: 'FGV', dificuldade: 3,
      objetivos: TI,
      enunciado: 'Em um servidor com systemd, deseja-se que, a partir da próxima inicialização, o sistema suba em modo texto, multiusuário e com rede, sem ambiente gráfico, e que isso se mantenha nas inicializações seguintes. O comando que realiza essa configuração é',
      alternativas: [
        'systemctl isolate multi-user.target',
        'systemctl set-default graphical.target',
        'systemctl mask graphical.target',
        'systemctl isolate rescue.target',
        'systemctl set-default multi-user.target'
      ],
      resposta: 4,
      explicacao: {
        resumo: 'O set-default define o target de inicialização persistente, e multi-user.target corresponde ao antigo runlevel 3.',
        detalhada: 'No systemd, os **targets** substituem os runlevels do SysV: `multi-user.target` equivale ao runlevel 3 (texto, multiusuário, com rede) e `graphical.target` ao runlevel 5.\n\nO `systemctl set-default` cria o vínculo `default.target`, que vale para os próximos boots. Já o `systemctl isolate` troca de target **na sessão em andamento**, sem persistir após reiniciar.',
        alternativas: [
          'Errada. Muda o sistema agora, mas não altera o target padrão do próximo boot.',
          'Errada. Faz o oposto: sobe com interface gráfica.',
          'Errada. Mascarar a unit a torna impossível de iniciar, mas não define o target padrão e pode causar efeitos colaterais.',
          'Errada. O rescue.target é o modo de recuperação, monousuário, e não é persistente.',
          'Certa. Define multi-user.target como padrão.'
        ],
        dica: 'isolate = agora; set-default = próximos boots.'
      },
      fontes: [SYSTEMCTL]
    },
    {
      id: 'inf-814', materia: 'informatica', assunto: 'Linux', tipo: 'multipla', estilo: 'FCC', dificuldade: 2,
      objetivos: TI.concat(['estatais']),
      enunciado: 'Considere a linha abaixo, inserida na crontab de um usuário.\n\n30 2 * * 1-5 /usr/local/bin/backup.sh\n\nO script backup.sh será executado',
      alternativas: [
        'às 2h30 dos dias 1 a 5 de cada mês.',
        'às 2h30, de segunda a sexta-feira.',
        'às 2h30, apenas aos sábados e domingos.',
        'a cada 2 horas e 30 minutos, de segunda a sexta-feira.',
        'às 2h30, somente nas segundas e sextas-feiras.'
      ],
      resposta: 1,
      explicacao: {
        resumo: 'Os campos são minuto, hora, dia do mês, mês e dia da semana: 30 2 * * 1-5 significa 02h30, de segunda a sexta.',
        detalhada: 'A ordem dos cinco primeiros campos de uma linha de crontab é: **minuto (0-59), hora (0-23), dia do mês (1-31), mês (1-12) e dia da semana (0-7)**, seguidos do comando.\n\nNo dia da semana, 0 e 7 são domingo, 1 é segunda e 5 é sexta; **1-5** é um intervalo, de segunda a sexta. O `*` em dia do mês e mês significa "todos". O intervalo 1-5 está no quinto campo, e não no terceiro.',
        alternativas: [
          'Errada. Confunde o campo de dia da semana com o de dia do mês.',
          'Certa. Minuto 30, hora 2, qualquer dia e mês, dias da semana 1 a 5.',
          'Errada. Sábado é 6 e domingo é 0 ou 7.',
          'Errada. Para repetir a cada intervalo seria usada a forma de passo (por exemplo, */2), e isso não ocorre aqui.',
          'Errada. O hífen indica intervalo contínuo; segunda e sexta apenas seria 1,5.'
        ],
        dica: 'Vírgula lista valores (1,5); hífen define intervalo (1-5); barra define passo (*/15).'
      },
      fontes: [CRON]
    },
    {
      id: 'inf-815', materia: 'informatica', assunto: 'Linux', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 2,
      objetivos: BANC.concat(['policial']),
      enunciado: 'Para que o usuário ana se autentique por SSH em um servidor usando um par de chaves, em vez de senha, a chave pública gerada em seu computador deve ser registrada no servidor, no arquivo',
      alternativas: [
        '/etc/ssh/ssh_host_ed25519_key, do servidor.',
        '~/.ssh/id_ed25519, do usuário ana no servidor.',
        '/etc/passwd, na linha da conta ana.',
        '~/.ssh/authorized_keys, do usuário ana no servidor.',
        '~/.ssh/known_hosts, do usuário ana no servidor.'
      ],
      resposta: 3,
      explicacao: {
        resumo: 'O servidor consulta o ~/.ssh/authorized_keys da conta de destino para decidir quais chaves públicas podem entrar.',
        detalhada: 'Na autenticação por chave, a chave **privada** permanece apenas com o cliente (protegida por senha e com permissão restrita, como 600), e a **pública** é adicionada ao arquivo **~/.ssh/authorized_keys** da conta no servidor. O comando `ssh-copy-id` automatiza essa cópia.\n\nO `known_hosts`, no cliente, guarda as chaves dos servidores já conhecidos para evitar ataques de falsificação do servidor; e as chaves em /etc/ssh/ssh_host_* identificam o próprio servidor.',
        alternativas: [
          'Errada. É a chave privada de identidade do servidor e fica só nele; o cliente valida o servidor com a chave pública correspondente, guardada em known_hosts.',
          'Errada. É o nome padrão da chave privada do cliente, que não deve ser copiada para o servidor.',
          'Errada. O /etc/passwd não armazena chaves SSH.',
          'Certa. É o arquivo consultado na autenticação por chave pública.',
          'Errada. O known_hosts registra servidores já visitados pelo cliente.'
        ],
        dica: 'Pública no servidor (authorized_keys), privada com você. O known_hosts é de quem se conecta.'
      },
      fontes: [SSH]
    },
    {
      id: 'inf-816', materia: 'informatica', assunto: 'Redes e internet', tipo: 'multipla', estilo: 'Vunesp', dificuldade: 2,
      objetivos: TI,
      enunciado: 'Um analista precisa listar, em um servidor Linux, as portas TCP em escuta, com os números exibidos de forma numérica e com o processo associado a cada uma. O comando adequado é',
      alternativas: [
        'ip route show',
        'ping -c 1 localhost',
        'ss -tlnp',
        'ip address show',
        'ss -s'
      ],
      resposta: 2,
      explicacao: {
        resumo: 'O ss -tlnp lista sockets TCP (-t) em escuta (-l), com números (-n) e processos (-p).',
        detalhada: 'O **ss** (iproute2) substituiu o antigo `netstat`. Em `ss -tlnp`: **-t** seleciona TCP, **-l** mostra apenas sockets em escuta, **-n** evita resolver nomes de serviços e hosts e **-p** exibe o processo dono do socket (ver processos de outros usuários exige privilégios de administrador).\n\nO `ip route` mostra a tabela de rotas, `ip address` mostra os endereços das interfaces, e `ss -s` apenas resume o total de sockets por tipo.',
        alternativas: [
          'Errada. Mostra a tabela de roteamento.',
          'Errada. Testa a conectividade ICMP com a própria máquina.',
          'Certa. TCP, em escuta, numérico, com processos.',
          'Errada. Mostra os endereços configurados nas interfaces.',
          'Errada. Exibe apenas estatísticas resumidas, sem listar portas.'
        ],
        dica: 'Decore o "tlnp": TCP, Listening, Numeric, Process. Troque o t por u para UDP.'
      },
      fontes: [SS]
    },
    {
      id: 'inf-817', materia: 'informatica', assunto: 'Redes e internet', tipo: 'multipla', estilo: 'FGV', dificuldade: 1,
      objetivos: TI,
      enunciado: 'No pacote iproute2, que substituiu ferramentas antigas como o ifconfig, o comando que exibe os endereços IP (IPv4 e IPv6) atribuídos às interfaces de rede é',
      alternativas: [
        'ip address show',
        'ip route show',
        'ip neighbor show',
        'ip link show',
        'ping -c 1 127.0.0.1'
      ],
      resposta: 0,
      explicacao: {
        resumo: 'O ip address show (abreviável para ip a) lista as interfaces com seus endereços IPv4 e IPv6.',
        detalhada: 'O comando `ip` é organizado em objetos: **address** (endereços), **route** (rotas), **neighbor** (tabela de vizinhos, ARP/NDP) e **link** (interfaces no nível de enlace). Todos aceitam abreviações, como `ip a`, `ip r`, `ip n` e `ip l`.\n\nO `ip link show` mostra estado e endereço MAC, mas não os endereços IP; o `ping` apenas testa alcance.',
        alternativas: [
          'Certa. Lista os endereços atribuídos.',
          'Errada. Mostra a tabela de rotas, incluindo o gateway padrão.',
          'Errada. Mostra os vizinhos da camada de enlace (equivalente ao ARP no IPv4).',
          'Errada. Mostra o estado das interfaces e o MAC, sem os IPs.',
          'Errada. É um teste de conectividade ICMP, e não uma listagem de endereços.'
        ],
        dica: 'address = IPs; route = rotas; link = interface e MAC; neighbor = ARP.'
      },
      fontes: [IP]
    },
    {
      id: 'inf-818', materia: 'informatica', assunto: 'Sistemas operacionais', tipo: 'multipla', estilo: 'FCC', dificuldade: 3,
      objetivos: TI.concat(['estatais']),
      enunciado: 'Quanto aos arquivos de contas de usuário em sistemas Linux, é correto afirmar que',
      alternativas: [
        'o /etc/passwd guarda os hashes das senhas e só o root pode lê-lo, enquanto o /etc/shadow é legível por todos.',
        'o campo "x" no /etc/passwd indica que a conta está bloqueada e que o usuário não pode fazer login.',
        'o /etc/shadow guarda o UID, o GID e o shell de cada usuário.',
        'o /etc/passwd deve ter leitura restrita ao root, pois guarda as senhas em texto claro.',
        'o /etc/shadow guarda os hashes das senhas e dados de validade, com acesso restrito a administradores, enquanto o /etc/passwd é legível por todos.'
      ],
      resposta: 4,
      explicacao: {
        resumo: 'Os hashes ficam no /etc/shadow, de acesso restrito; o /etc/passwd é legível por todos e traz um "x" no campo de senha.',
        detalhada: 'O **/etc/passwd** precisa ser legível por todos, pois programas comuns (como o `ls -l`) convertem UID em nome de usuário consultando o cadastro via NSS, que normalmente lê o /etc/passwd (e o /etc/group), mas pode usar também LDAP e outras fontes. Seus sete campos são: login, senha, UID, GID, comentário, diretório home e shell. O campo de senha traz normalmente um **x**, que significa "a senha está no /etc/shadow".\n\nO **/etc/shadow** guarda o **hash** da senha (nunca texto claro) e informações de validade (data da última troca, prazo mínimo e máximo, aviso, inatividade). Seu acesso é restrito a administradores (e, em algumas distribuições, ao grupo shadow). Para bloquear uma conta, usa-se `passwd -l`, que antepõe um `!` ao hash.',
        alternativas: [
          'Errada. Inverte os arquivos: o hash está no shadow, de acesso restrito.',
          'Errada. O "x" remete à senha no shadow, e não ao bloqueio da conta.',
          'Errada. UID, GID e shell estão no /etc/passwd.',
          'Errada. Senhas não ficam em texto claro, e o /etc/passwd é legível por todos.',
          'Certa. Descreve corretamente a função e o acesso de cada arquivo.'
        ],
        dica: 'passwd = quem existe (aberto); shadow = a senha (fechado). O "x" é só um aviso: "olhe no shadow".'
      },
      fontes: [PASSWD, SHADOW]
    },
    {
      id: 'inf-819', materia: 'informatica', assunto: 'Linux', tipo: 'multipla', estilo: 'Cesgranrio', dificuldade: 2,
      objetivos: BANC,
      enunciado: 'Em um script Bash, imediatamente após a execução de um comando, a variável especial $? contém',
      alternativas: [
        'o PID do próprio shell que executa o script.',
        'o código de saída do último comando executado em primeiro plano, sendo 0 o valor que indica sucesso.',
        'o número de argumentos passados ao script.',
        'o PID do último processo colocado em segundo plano.',
        'o nome do script em execução.'
      ],
      resposta: 1,
      explicacao: {
        resumo: 'O $? guarda o status de saída do último comando; zero significa sucesso e qualquer outro valor indica falha.',
        detalhada: 'Por convenção, todo comando devolve um **código de saída**: **0** para sucesso e valores de 1 a 255 para diferentes erros. O `$?` permite testar isso, como em `if [ $? -ne 0 ]; then ...`.\n\nOutras variáveis especiais: **$$** (PID do shell), **$#** (número de argumentos), **$!** (PID do último processo em segundo plano) e **$0** (nome do script).',
        alternativas: [
          'Errada. É o conteúdo de $$.',
          'Certa. Conteúdo de $?.',
          'Errada. É o conteúdo de $#.',
          'Errada. É o conteúdo de $!.',
          'Errada. É o conteúdo de $0.'
        ],
        dica: 'Em shell, sucesso é 0 (o contrário do "verdadeiro = 1" de outras linguagens).'
      },
      fontes: [BASHSP]
    },
    {
      id: 'inf-820', materia: 'informatica', assunto: 'Linux', tipo: 'multipla', estilo: 'Vunesp', dificuldade: 3,
      objetivos: TI,
      enunciado: 'Um administrador executou chgrp equipe /srv/projeto e, em seguida, chmod 2775 /srv/projeto, sendo /srv/projeto um diretório. O dígito 2, no início do modo octal, ativa o bit setgid, cujo efeito em diretórios é',
      alternativas: [
        'impedir que usuários removam ou renomeiem arquivos que pertencem a outros usuários.',
        'fazer com que os arquivos executáveis do diretório rodem com os privilégios do dono.',
        'tornar o diretório imutável, impedindo a criação de novos arquivos.',
        'fazer com que os arquivos e subdiretórios criados nele herdem o grupo do diretório, e não o grupo principal do criador.',
        'ocultar o diretório de usuários que não pertençam ao grupo, sem alterar a permissão de leitura.'
      ],
      resposta: 3,
      explicacao: {
        resumo: 'O setgid em diretório faz os novos itens herdarem o grupo do diretório, o que facilita o trabalho colaborativo.',
        detalhada: 'O primeiro dígito do modo de quatro algarismos soma os bits especiais: **4 = setuid**, **2 = setgid** e **1 = sticky**. Em um **diretório**, o setgid faz com que arquivos e subdiretórios novos recebam o grupo do diretório (`equipe`), e não o grupo principal de quem os criou. Subdiretórios também herdam o próprio bit setgid.\n\nO efeito descrito na primeira alternativa é do **sticky bit** (como no /tmp), e o da segunda é do **setuid** em arquivos executáveis.',
        alternativas: [
          'Errada. Esse é o efeito do sticky bit.',
          'Errada. Esse é o efeito do setuid em um arquivo executável (e o setgid em arquivo executável roda com o grupo do próprio arquivo, e não com o do usuário que o executa).',
          'Errada. Imutabilidade é atributo do sistema de arquivos (chattr +i), não um bit de permissão.',
          'Certa. Herança de grupo.',
          'Errada. Visibilidade é controlada pelas permissões r e x, e não pelo setgid.'
        ],
        dica: 'setuid = 4, setgid = 2, sticky = 1. Em diretório: setgid herda o grupo; sticky protege contra remoção alheia.'
      },
      fontes: [SETGID, CHMOD]
    },

    /* ---------- Certo ou errado (CEBRASPE) ---------- */
    {
      id: 'inf-821', materia: 'informatica', assunto: 'Linux', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 2,
      objetivos: TI,
      enunciado: 'No Linux, o diretório /proc é um sistema de arquivos virtual, mantido pelo kernel, por meio do qual se consultam informações sobre os processos em execução e sobre o próprio sistema, sem que esses dados estejam armazenados em disco.',
      resposta: true,
      explicacao: {
        resumo: 'Certo: /proc é uma interface do kernel em forma de arquivos, gerada em memória.',
        detalhada: 'O **/proc** é um pseudo-sistema de arquivos: seus "arquivos" são gerados pelo kernel no momento da leitura. Cada processo tem um diretório `/proc/<PID>` (com informações como linha de comando, descritores abertos e uso de memória) e há arquivos gerais como `/proc/cpuinfo` e `/proc/meminfo`.\n\nFerramentas como `ps` e `top` leem dados desse diretório.',
        dica: 'Se o arquivo "pesa" zero bytes mas tem conteúdo ao ser lido, é virtual: /proc e /sys.'
      },
      fontes: [PROC]
    },
    {
      id: 'inf-822', materia: 'informatica', assunto: 'Linux', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 1,
      objetivos: TI,
      enunciado: 'Em um terminal Bash, o caractere til (~) representa o diretório raiz do sistema, ao passo que a barra (/) representa o diretório pessoal do usuário corrente.',
      resposta: false,
      explicacao: {
        resumo: 'Errado: os papéis estão trocados. O ~ é o diretório pessoal (home) e a / é a raiz.',
        detalhada: 'No Bash, o **til** é expandido para o valor da variável HOME, ou seja, o diretório pessoal do usuário (por exemplo, `/home/ana`). A **barra** (`/`) isolada é o diretório **raiz**, ponto inicial de toda a hierarquia de diretórios.\n\nPor isso, `cd ~` leva ao diretório pessoal, e `cd /` leva à raiz.',
        dica: 'Til = "casa"; barra = "raiz". Trocar os dois é a pegadinha clássica.'
      },
      fontes: [TILDE]
    },
    {
      id: 'inf-823', materia: 'informatica', assunto: 'Linux', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 2,
      objetivos: TI,
      enunciado: 'O comando chmod u+x script.sh adiciona a permissão de execução para o dono do arquivo, preservando as demais permissões já existentes para o dono, o grupo e os outros usuários.',
      resposta: true,
      explicacao: {
        resumo: 'Certo: na notação simbólica, o + acrescenta o bit indicado apenas à classe selecionada, sem alterar o resto.',
        detalhada: 'Na notação simbólica do `chmod`, as classes são **u** (dono), **g** (grupo), **o** (outros) e **a** (todos); os operadores são **+** (acrescenta), **-** (remove) e **=** (define exatamente); e as permissões são **r**, **w** e **x**.\n\nO `u+x` apenas liga o bit x do dono. Já o `chmod 700`, em octal, **substituiria** todo o modo.',
        dica: '+ e - alteram apenas o que foi citado; = e o octal redefinem tudo.'
      },
      fontes: [CHMOD]
    },
    {
      id: 'inf-824', materia: 'informatica', assunto: 'Linux', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 2,
      objetivos: TI,
      enunciado: 'Quando o comando kill é executado sem a indicação de um sinal, como em kill 4321, ele envia o sinal SIGKILL (9) ao processo, que o encerra de imediato e sem possibilidade de executar rotinas de limpeza.',
      resposta: false,
      explicacao: {
        resumo: 'Errado: o sinal padrão do kill é SIGTERM (15), que o processo pode capturar e tratar para encerrar de forma ordenada.',
        detalhada: 'Sem indicação de sinal, o `kill` envia **SIGTERM (15)**, que solicita o encerramento. O processo pode capturá-lo, liberar recursos e sair normalmente, ou até ignorá-lo.\n\nSomente com `kill -9` (ou `kill -KILL`) se envia SIGKILL, que não pode ser capturado nem ignorado, e que por isso fica para o caso em que o SIGTERM não funciona.',
        dica: 'Padrão = 15 (TERM). O 9 precisa ser pedido explicitamente.'
      },
      fontes: [JOBS, SIGNAL]
    },
    {
      id: 'inf-825', materia: 'informatica', assunto: 'Linux', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 3,
      objetivos: TI,
      enunciado: 'No Bash, em um pipeline como cmd1 | cmd2, apenas a saída padrão de cmd1 é conectada à entrada padrão de cmd2; a saída de erro de cmd1, se nada for redirecionado, continua sendo enviada ao terminal.',
      resposta: true,
      explicacao: {
        resumo: 'Certo: o pipe liga stdout à stdin; o stderr não passa pelo pipe, a menos que seja redirecionado.',
        detalhada: 'O operador `|` conecta o descritor 1 (stdout) do primeiro comando ao descritor 0 (stdin) do segundo. O descritor 2 (stderr) segue para o terminal, o que permite ver erros mesmo quando a saída é filtrada.\n\nPara enviar também os erros ao pipe, usa-se `cmd1 2>&1 | cmd2` ou, no Bash, a forma abreviada `cmd1 |& cmd2`.',
        dica: 'O pipe só carrega o stdout. Para levar o stderr junto, é preciso 2>&1 ou |&.'
      },
      fontes: [PIPES, REDIR]
    },
    {
      id: 'inf-826', materia: 'informatica', assunto: 'Linux', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 2,
      objetivos: TI,
      enunciado: 'Em sistemas com systemd, o comando systemctl disable nginx.service interrompe imediatamente o serviço, caso ele esteja em execução, e também impede que seja iniciado na próxima inicialização do sistema.',
      resposta: false,
      explicacao: {
        resumo: 'Errado: o disable apenas remove a inicialização automática; o serviço em execução continua rodando até que se use stop.',
        detalhada: 'No systemd, **enable/disable** controlam a inicialização no boot, e **start/stop** controlam o estado atual. Assim, `disable` não encerra o serviço em execução; para isso é preciso `systemctl stop` ou usar `systemctl disable --now`, que faz as duas operações.\n\nO `mask`, por sua vez, impede a unit de ser iniciada de qualquer forma.',
        dica: 'disable não é stop. Só o --now junta as duas ações.'
      },
      fontes: [SYSTEMCTL]
    },
    {
      id: 'inf-827', materia: 'informatica', assunto: 'Linux', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 2,
      objetivos: TI.concat(['bancarios']),
      enunciado: 'Cada linha do arquivo /etc/passwd descreve uma conta de usuário e é composta por sete campos separados por dois-pontos: nome de login, senha (ou marcador), UID, GID principal, comentário, diretório pessoal e shell de login.',
      resposta: true,
      explicacao: {
        resumo: 'Certo: é exatamente esse o formato de uma linha do /etc/passwd.',
        detalhada: 'Exemplo ilustrativo: `ana:x:1001:1001:Ana Souza:/home/ana:/bin/bash`. O "x" indica que o hash da senha está no `/etc/shadow`. O UID 0 é o do superusuário, e o shell indica o programa iniciado no login (uma conta de serviço costuma usar `/usr/sbin/nologin`).',
        dica: 'Ordem: login, senha, UID, GID, comentário, home, shell (7 campos).'
      },
      fontes: [PASSWD]
    },
    {
      id: 'inf-828', materia: 'informatica', assunto: 'Linux', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 3,
      objetivos: TI,
      enunciado: 'Na configuração padrão do sudo na maioria das distribuições, o usuário autorizado, ao executar sudo comando, precisa informar a senha do usuário root, e não a sua própria senha, para que o comando seja executado com privilégios elevados.',
      resposta: false,
      explicacao: {
        resumo: 'Errado: por padrão, o sudo pede a senha do próprio usuário que o invoca, e não a do root.',
        detalhada: 'O **sudo** verifica, no arquivo sudoers, se o usuário pode executar o comando como outro usuário (em geral, root) e, por padrão, pede **a senha do usuário que o invocou**, o que permite auditar quem executou cada ação e dispensa o compartilhamento da senha do root.\n\nPedir a senha do usuário de destino é um comportamento que precisa ser habilitado explicitamente (opções como `targetpw` e `rootpw`). Já o `su`, ao contrário, pede a senha do usuário de destino.',
        dica: 'sudo = minha senha; su = a senha do outro usuário.'
      },
      fontes: [SUDO]
    },
    {
      id: 'inf-829', materia: 'informatica', assunto: 'Redes e internet', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 1,
      objetivos: TI.concat(['bancarios']),
      enunciado: 'No Linux, o comando ping -c 4 example.org envia quatro requisições ICMP do tipo echo ao destino e, em seguida, encerra, exibindo um resumo com a quantidade de pacotes perdidos e os tempos de resposta.',
      resposta: true,
      explicacao: {
        resumo: 'Certo: a opção -c limita o número de requisições; ao final, o ping exibe estatísticas de perda e de tempo.',
        detalhada: 'O `ping` usa mensagens **ICMP Echo Request** e aguarda **Echo Reply** (definidas na RFC 792) para testar a conectividade e medir o tempo de ida e volta (RTT). No Linux, sem a opção `-c`, ele continua indefinidamente até ser interrompido com Ctrl+C.\n\nO resumo final mostra pacotes transmitidos, recebidos, percentual de perda e tempos mínimo, médio e máximo.',
        dica: 'No Linux, o ping não para sozinho; o -c N faz parar após N requisições.'
      },
      fontes: [PING, RFC792]
    },
    {
      id: 'inf-830', materia: 'informatica', assunto: 'Linux', tipo: 'certo-errado', estilo: 'CEBRASPE', dificuldade: 3,
      objetivos: TI,
      enunciado: 'Um link simbólico criado com ln -s continua permitindo o acesso ao conteúdo do arquivo original mesmo após a remoção deste, pois ele aponta diretamente para o mesmo inode do arquivo original.',
      resposta: false,
      explicacao: {
        resumo: 'Errado: o link simbólico guarda apenas o caminho do alvo; se o original for removido, o link fica quebrado. Quem compartilha o inode é o link físico.',
        detalhada: 'Um **link simbólico** (ln -s) é um arquivo especial com seu próprio inode, que contém o **caminho** do alvo. Se o alvo é removido ou movido, o link passa a apontar para o nada ("link quebrado"). Ele pode apontar para diretórios e atravessar sistemas de arquivos.\n\nUm **link físico** (ln, sem -s) é outro nome para o **mesmo inode**: o conteúdo só é liberado quando o último nome é removido. Ele não pode apontar para diretórios (em uso comum) nem cruzar sistemas de arquivos.',
        dica: 'Simbólico = atalho por caminho (quebra). Físico = mesmo inode (sobrevive).'
      },
      fontes: [LN]
    }
  ] });
})();
