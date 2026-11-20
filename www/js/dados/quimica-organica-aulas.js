/* Aulas de Química Orgânica, escritas para o app. */
Banco.registrar({
  aulas: [
    {
      id: 'aula-qui-funcoes',
      materia: 'quimica',
      assunto: 'Funções orgânicas',
      titulo: 'Funções orgânicas: reconhecer o grupo funcional em qualquer molécula',
      duracaoMin: 22,
      resumo: 'Aprenda a identificar as principais funções orgânicas pelo grupo característico e a relacioná-las com polaridade, ponto de ebulição e acidez, como o ENEM cobra em fármacos, alimentos e combustíveis.',
      secoes: [
        {
          titulo: 'Função orgânica e grupo funcional',
          texto: 'Uma **função orgânica** é um conjunto de compostos com propriedades parecidas, que têm em comum um **grupo funcional**: um átomo ou conjunto de átomos que define o comportamento da molécula. Reconhecer o grupo funcional é a base para resolver a maioria das questões de Química Orgânica.\n\nO esqueleto é feito de carbono e hidrogênio; o grupo funcional costuma trazer **oxigênio** ou **nitrogênio** (ou halogênio) e é nele que a reação acontece. Por isso, CH3–CH2–OH (etanol) e CH3–CH2–CH3 (propano) se comportam de forma muito diferente, embora tenham cadeias parecidas.\n\n**Regra de ouro:** nunca decida pela cadeia de carbonos, e sim pelo **átomo de carbono e os átomos ligados a ele no grupo**. Pergunte sempre: onde está o oxigênio e a que ele está ligado?'
        },
        {
          titulo: 'Hidrocarbonetos',
          texto: 'Só têm C e H. Classificam-se pelas ligações entre carbonos:\n- **Alcano:** só ligações simples. CH3–CH2–CH3 (propano). Fórmula geral CnH2n+2.\n- **Alceno (alqueno):** uma dupla ligação. CH2=CH–CH3 (propeno). CnH2n.\n- **Alcino (alquino):** uma tripla ligação. HC≡CH (etino, acetileno). CnH2n−2.\n- **Alcadieno:** duas duplas. CH2=CH–CH=CH2 (buta-1,3-dieno).\n- **Cicloalcano (ciclano):** cadeia fechada, só simples. C6H12 (ciclo-hexano).\n- **Aromático:** contém o anel do **benzeno**, C6H6 (seis carbonos com ligações duplas alternadas, deslocalizadas). Tolueno: C6H5–CH3.\n\nSão apolares, insolúveis em água e a base dos combustíveis (gás natural, gasolina, diesel).'
        },
        {
          titulo: 'Funções oxigenadas',
          texto: 'Todas têm oxigênio. O segredo é **onde** ele está:\n- **Álcool:** –OH ligado a carbono **saturado** (só ligações simples). CH3–CH2–OH (etanol).\n- **Fenol:** –OH ligado diretamente a carbono do **anel aromático**. C6H5–OH (fenol comum).\n- **Éter:** oxigênio entre dois carbonos, R–O–R. CH3–O–CH2–CH3.\n- **Aldeído:** carbonila na **ponta** da cadeia, –CHO. CH3–CHO (etanal).\n- **Cetona:** carbonila **no meio** da cadeia, entre dois carbonos, R–CO–R. CH3–CO–CH3 (propanona, acetona).\n- **Ácido carboxílico:** –COOH. CH3–COOH (ácido etanoico, acético, do vinagre).\n- **Éster:** –COO– entre dois carbonos, R–COO–R. CH3–COO–CH2–CH3 (etanoato de etila, aroma de frutas).\n\n**Truque:** o ácido tem **H** ligado ao oxigênio (–COOH); o éster tem outro **carbono** no lugar desse H (–COOR). O aldeído tem H na carbonila; a cetona tem carbono dos dois lados.'
        },
        {
          titulo: 'Funções nitrogenadas e halogenadas',
          texto: '- **Amina:** nitrogênio ligado só a carbonos e/ou hidrogênios, sem carbonila. CH3–CH2–NH2 (etanamina). Algumas aminas têm cheiro de peixe (ex.: trimetilamina, liberada na decomposição do peixe); têm caráter básico.\n- **Amida:** nitrogênio ligado à **carbonila**, –CO–NH2. CH3–CO–NH2 (etanamida). É a ligação das proteínas (ligação peptídica).\n- **Nitrila:** –C≡N. CH3–CN.\n- **Nitrocomposto:** –NO2. CH3–NO2.\n- **Haleto orgânico:** halogênio (F, Cl, Br, I) ligado a carbono. CH3–CH2–Cl (cloroetano).\n\n**Compostos com mais de uma função** são comuns no ENEM, em estruturas de remédios. A aspirina (ácido acetilsalicílico) tem um grupo **ácido carboxílico** e um **éster** ligados a um anel aromático. O paracetamol tem um **fenol** e uma **amida**. A estratégia é percorrer a molécula grupo por grupo, sem se prender ao anel.'
        },
        {
          titulo: 'Propriedades ligadas à função',
          texto: 'As **forças intermoleculares** mudam com a função e explicam ponto de ebulição e solubilidade:\n- **Ligação de hidrogênio** (O–H ou N–H): álcoois, fenóis, ácidos carboxílicos, aminas e amidas. É a mais forte.\n- **Dipolo-dipolo:** aldeídos, cetonas, ésteres, éteres, haletos.\n- **Dispersão de London:** hidrocarbonetos (só ela).\n\nPara massas molares parecidas, o ponto de ebulição cresce nesta ordem: hidrocarboneto < éter < aldeído/cetona < álcool < ácido carboxílico. O etanol (46 g/mol) ferve a 78 °C; o éter metoxi-metano, CH3–O–CH3, de mesma massa, é gás à temperatura ambiente.\n\n**Solubilidade em água:** compostos com –OH, –COOH ou –NH2 e cadeia curta dissolvem bem. Quanto maior a parte apolar (cadeia de carbonos), menor a solubilidade, por isso os ácidos graxos e os óleos não se misturam com a água.\n\n**Acidez:** ácido carboxílico > fenol > água > álcool. Ácidos carboxílicos reagem com NaOH e NaHCO3; álcoois não.'
        },
        {
          titulo: 'Erros comuns e como o ENEM cobra',
          texto: '- Chamar de **álcool** o composto com –OH no anel aromático (é **fenol**).\n- Confundir **aldeído** com **cetona**: olhe se a carbonila está na ponta (aldeído) ou no meio (cetona).\n- Confundir **éster** com **ácido** e **éter** com **éster** (o éster tem C=O).\n- Confundir **amina** com **amida**: amida tem carbonila ligada ao N.\n- Achar que o grupo está na posição errada por causa do desenho: reescreva em fórmula condensada.\n\n**No ENEM:** costuma aparecer a estrutura de um fármaco, aromatizante ou feromônio e a pergunta é qual conjunto de funções ele contém, ou por que uma substância é mais solúvel/volátil que outra (ligação de hidrogênio). Também cobra a relação entre função e uso: ésteres como aromas, ácidos carboxílicos em conservantes e acidulantes, cetonas em solventes, aminas em decomposição de peixe.'
        }
      ],
      pontosChave: [
        'A função é decidida pelo grupo funcional, não pelo tamanho da cadeia.',
        'Álcool: OH em carbono saturado; fenol: OH direto no anel aromático.',
        'Aldeído tem carbonila na ponta (–CHO); cetona tem carbonila no meio (R–CO–R).',
        'Ácido carboxílico é –COOH; éster é –COO– com carbono no lugar do H do ácido.',
        'Amina não tem carbonila; amida tem N ligado à carbonila (–CO–N).',
        'Ligação de hidrogênio (O–H, N–H) eleva o ponto de ebulição e a solubilidade em água.',
        'Ordem de acidez: ácido carboxílico > fenol > água > álcool.',
        'Em moléculas de fármacos, percorra os grupos um a um e anote todas as funções.'
      ],
      fontes: [
        { titulo: 'Wikipédia: Função orgânica', url: 'https://pt.wikipedia.org/wiki/Fun%C3%A7%C3%A3o_org%C3%A2nica' },
        { titulo: 'Wikipédia: Grupo funcional', url: 'https://pt.wikipedia.org/wiki/Grupo_funcional' },
        { titulo: 'OpenStax: Organic Chemistry', url: 'https://openstax.org/details/books/organic-chemistry' }
      ]
    },
    {
      id: 'aula-qui-nomenclatura',
      materia: 'quimica',
      assunto: 'Nomenclatura orgânica',
      titulo: 'Nomenclatura IUPAC: prefixo, infixo, sufixo e ramificações',
      duracaoMin: 22,
      resumo: 'Monte e interprete nomes de compostos orgânicos com o método IUPAC: escolha da cadeia principal, numeração, ordem alfabética das ramificações e sufixos de cada função.',
      secoes: [
        {
          titulo: 'A lógica do nome: prefixo + infixo + sufixo',
          texto: 'O nome IUPAC é uma fórmula em palavras:\n\n**prefixo** (quantos carbonos) + **infixo** (tipo de ligação) + **sufixo** (função).\n\n**Prefixos:** 1 met · 2 et · 3 prop · 4 but · 5 pent · 6 hex · 7 hept · 8 oct · 9 non · 10 dec.\n\n**Infixos:** **an** (só simples), **en** (uma dupla), **in** (uma tripla). Duas duplas: **dien**.\n\n**Sufixos:** **o** hidrocarboneto · **ol** álcool · **al** aldeído · **ona** cetona · **óico** ácido carboxílico (ácido ...óico) · **amina** · **amida**.\n\n**Exemplos:** CH3–CH2–CH3 → prop + an + o = **propano**. CH3–CH2–OH → et + an + ol = **etanol**. CH3–CH2–CHO → prop + an + al = **propanal**. CH3–COOH → **ácido etanoico** (nome usual: ácido acético). CH3–CO–CH3 → **propanona** (acetona).'
        },
        {
          titulo: 'Cadeia principal e numeração',
          texto: 'Quando há ramificações, siga o roteiro:\n1. **Cadeia principal:** a sequência mais longa de carbonos que **contém o grupo funcional** e as insaturações (duplas/triplas). As demais viram **ramificações** (radicais). *Atenção:* nas recomendações da IUPAC de 2013, o comprimento da cadeia vem antes das insaturações (a cadeia mais longa é a principal mesmo que a dupla fique de fora). Livros e vestibulares ainda usam a regra tradicional, e na maioria dos compostos cobrados as duas dão o mesmo nome.\n2. **Numeração:** comece pela extremidade que dê o **menor número** primeiro ao grupo funcional, depois às insaturações, depois às ramificações.\n3. **Radicais:** CH3– metil · CH3–CH2– etil · CH3–CH2–CH2– propil · CH3–CH(CH3)– isopropil.\n4. **Montagem:** ramificações em **ordem alfabética** (sem contar di, tri), cada uma com seu número, e depois o nome da cadeia principal.\n\n**Exemplo resolvido:** CH3–CH(CH3)–CH2–CH3. A cadeia mais longa tem 4 carbonos (butano) e há um metil no carbono 2. Nome: **2-metilbutano**. Numerar do outro lado daria 3 (maior), então vale o 2.'
        },
        {
          titulo: 'Exemplos resolvidos com mais de um radical e função',
          texto: '**a) CH3–CH(CH3)–CH(CH3)–CH2–CH3.** Cadeia de 5 carbonos (pentano), metil nos carbonos 2 e 3 (da esquerda para a direita; da direita seriam 3 e 4). Nome: **2,3-dimetilpentano**. "Di" indica que há dois metis iguais.\n\n**b) CH3–CH(CH3)–CH(CH2–CH3)–CH2–CH3.** Pentano com metil em 2 e etil em 3. Ordem alfabética: **e**til antes de **m**etil. Nome: **3-etil-2-metilpentano**.\n\n**c) CH3–CH=CH–CH3.** Quatro carbonos, uma dupla entre o 2 e o 3: **but-2-eno** (o número vai antes do sufixo que ele localiza, como na recomendação IUPAC atual; é comum ver 2-buteno também).\n\n**d) CH3–CH(OH)–CH3.** O grupo –OH está no carbono 2: **propan-2-ol**.\n\n**e) CH3–CO–CH2–CH3.** A carbonila está no carbono 2: **butan-2-ona**.\n\n**f) CH3–COO–CH2–CH3.** Éster: o nome tem duas partes. Parte do ácido (etanoato) + parte do álcool (de etila): **etanoato de etila**. Regra: ácido ...óico vira ...oato; o grupo do álcool vira "de ...ila".'
        },
        {
          titulo: 'Anéis, benzeno, éteres, aminas e haletos',
          texto: '- **Cíclicos:** prefixo **ciclo-** antes do nome. C6H12 → **ciclo-hexano**; ciclo-hexanol tem –OH no anel.\n- **Benzeno derivados:** C6H5–CH3 é **metilbenzeno** (tolueno); C6H5–OH é **fenol** (hidroxibenzeno). Com dois grupos no anel usam-se posições 1,2 (**orto**), 1,3 (**meta**) e 1,4 (**para**).\n- **Éter:** **alcóxi + alcano.** CH3–O–CH2–CH3 → **metoxietano** (a menor cadeia, com o oxigênio, vira o prefixo "metoxi"; a maior é a cadeia principal).\n- **Amina:** CH3–CH2–NH2 → **etanamina**. **Amida:** CH3–CO–NH2 → **etanamida**.\n- **Haleto:** o halogênio é ramificação: CH3–CH2–Cl → **cloroetano**; CH3–CHBr–CH3 → **2-bromopropano**.\n\nNomes usuais ainda aparecem muito em prova: ácido acético (etanoico), ácido fórmico (metanoico), formol/formaldeído (metanal), acetona (propanona), glicerina (propano-1,2,3-triol).'
        },
        {
          titulo: 'Erros comuns e como o ENEM cobra',
          texto: '- Escolher a cadeia **como foi desenhada** em vez da **mais longa** (a cadeia pode "dobrar" no desenho).\n- Numerar pelo lado errado: o grupo funcional tem prioridade sobre as ramificações.\n- Esquecer o número do grupo funcional (propan-**2**-ol, não só propanol, pois propan-1-ol é outro composto).\n- Ordenar os radicais pelo "di/tri" em vez da inicial do radical.\n- Contar os carbonos da carbonila e do grupo –COOH fora da cadeia (eles fazem parte dela).\n\n**No ENEM:** raramente cobra nomear de cabeça um composto enorme. O comum é dar o nome (ou o nome usual) e pedir a função, a fórmula, a massa molar ou o tipo de isomeria, ou ler o rótulo de um produto (acetona, etanol, ácido cítrico) e relacionar o nome ao grupo funcional. Domine bem os sufixos: eles entregam a função.'
        }
      ],
      pontosChave: [
        'Nome = prefixo (nº de carbonos) + infixo (an/en/in) + sufixo (função).',
        'Prefixos: met, et, prop, but, pent, hex, hept, oct, non, dec.',
        'Cadeia principal é a mais longa que contém o grupo funcional e as insaturações.',
        'Numere pela extremidade que dá o menor localizador ao grupo funcional, depois à insaturação, depois aos radicais.',
        'Radicais em ordem alfabética; di, tri e tetra não entram na ordenação.',
        'Sufixos: ol (álcool), al (aldeído), ona (cetona), óico (ácido), amina, amida.',
        'Éster: etanoato de etila = parte do ácido (...oato) + de + parte do álcool (...ila).',
        'Aprenda também os nomes usuais mais cobrados: ácido acético, acetona, formol, glicerina.'
      ],
      fontes: [
        { titulo: 'IUPAC: Nomenclature of Organic Chemistry (Blue Book)', url: 'https://iupac.qmul.ac.uk/BlueBook/' },
        { titulo: 'Wikipédia: Nomenclatura IUPAC', url: 'https://pt.wikipedia.org/wiki/Nomenclatura_IUPAC' },
        { titulo: 'OpenStax: Organic Chemistry', url: 'https://openstax.org/details/books/organic-chemistry' }
      ]
    },
    {
      id: 'aula-qui-isomeria',
      materia: 'quimica',
      assunto: 'Isomeria',
      titulo: 'Isomeria plana e espacial: mesma fórmula, substâncias diferentes',
      duracaoMin: 22,
      resumo: 'Distinga isomeria de cadeia, posição, função, geométrica (cis-trans) e óptica, aprenda a achar o carbono quiral e a contar estereoisômeros, e veja por que isso importa em remédios e alimentos.',
      secoes: [
        {
          titulo: 'O que é isomeria e como organizar o estudo',
          texto: '**Isômeros** são compostos diferentes com a **mesma fórmula molecular**. Como a estrutura muda, mudam também as propriedades (ponto de ebulição, reatividade, efeito biológico).\n\nOrganize assim:\n- **Isomeria plana (constitucional):** a diferença aparece já na fórmula estrutural plana. Tipos: cadeia, posição, função, compensação (metameria) e tautomeria.\n- **Isomeria espacial (estereoisomeria):** a fórmula plana é a mesma; só muda a **disposição no espaço**. Tipos: geométrica (cis-trans) e óptica.\n\nPrimeiro passo em qualquer questão: **confirme a fórmula molecular** de cada composto (conte C, H, O...). Se for diferente, não são isômeros.'
        },
        {
          titulo: 'Isomeria plana',
          texto: '- **De cadeia:** mudam o tipo de cadeia. C4H10: CH3–CH2–CH2–CH3 (butano, normal) e CH3–CH(CH3)–CH3 (metilpropano, ramificada).\n- **De posição:** mesma função e cadeia, mas o grupo ou a insaturação muda de posição. C3H8O: CH3–CH2–CH2–OH (propan-1-ol) e CH3–CH(OH)–CH3 (propan-2-ol).\n- **De função:** funções diferentes. C2H6O: CH3–CH2–OH (etanol, álcool) e CH3–O–CH3 (metoxi-metano, éter). C3H6O: CH3–CH2–CHO (propanal, aldeído) e CH3–CO–CH3 (propanona, cetona).\n- **De compensação (metameria):** muda a posição do heteroátomo (O ou N) entre os carbonos. C4H10O: CH3–O–CH2–CH2–CH3 (1-metoxipropano) e CH3–CH2–O–CH2–CH3 (etoxietano).\n- **Tautomeria:** dois isômeros de função em **equilíbrio dinâmico**, como o par aldeído/enol ou cetona/enol. É o caso mais raro nas provas.\n\n**Dica de ouro:** se as funções são diferentes, é de **função**; se a função é a mesma e só o grupo mudou de lugar, é de **posição**; se a função é a mesma e a cadeia muda, é de **cadeia**.'
        },
        {
          titulo: 'Isomeria geométrica (cis-trans)',
          texto: 'Ocorre quando há **rotação impedida** na molécula e cada um dos dois carbonos da ligação rígida tem **dois ligantes diferentes**. A rotação é impedida por uma **dupla ligação** ou por um **ciclo**.\n\n**Exemplo:** CH3–CH=CH–CH3 (but-2-eno). Em cada carbono da dupla há H e CH3 (diferentes), então existem duas formas: **cis** (os dois CH3 do mesmo lado do plano da dupla) e **trans** (de lados opostos). Têm pontos de ebulição e densidades diferentes. Na notação IUPAC atual, Z e E seguem a prioridade CIP dos grupos em cada carbono: Z quando os grupos de maior prioridade estão do mesmo lado, E quando estão em lados opostos. Para ligantes só de cadeia, como em but-2-eno, Z corresponde a cis e E a trans.\n\n**Não há isomeria geométrica** em CH2=CH–CH3 (o carbono da ponta tem dois H iguais) nem em CH3–CH2–CH3 (rotação livre).\n\n**Aplicação no ENEM:** nos óleos vegetais, os ácidos graxos insaturados naturais são **cis** (cadeia dobrada, líquido). A hidrogenação parcial industrial pode gerar ácidos graxos **trans** (cadeia mais reta, empacota como as gorduras saturadas), associados a maior risco cardiovascular, por isso a **gordura trans** vem destacada nos rótulos.'
        },
        {
          titulo: 'Isomeria óptica',
          texto: 'Aparece em moléculas com **carbono quiral** (assimétrico): carbono ligado a **quatro grupos diferentes**. Essas moléculas existem em duas formas que são **imagens especulares não sobreponíveis**, como a mão direita e a esquerda: os **enantiômeros**.\n\n**Exemplo:** o ácido lático, CH3–CH(OH)–COOH. O carbono do meio liga H, OH, CH3 e COOH, quatro grupos diferentes, então é quiral. Já em CH3–CH2–OH nenhum carbono é quiral (o CH2 tem dois H iguais).\n\nOs enantiômeros têm as **mesmas propriedades físicas**, exceto que **desviam o plano da luz polarizada em sentidos opostos**: um é **dextrogiro** (+, para a direita) e o outro **levogiro** (−). Uma mistura em partes iguais dos dois é a **mistura racêmica**, **opticamente inativa** (os desvios se cancelam).\n\n**Contagem:** com n carbonos quirais e **nenhuma forma meso**, há no máximo 2ⁿ estereoisômeros, todos ópticos ativos, que formam 2ⁿ⁻¹ pares de enantiômeros (cada par, em partes iguais, é uma mistura racêmica). Com 2 carbonos quirais e sem meso: 4 isômeros ópticos (2 pares). **Cuidado com a forma meso:** se a molécula tem simetria interna, algumas combinações coincidem e o total cai. O ácido tartárico tem 2 carbonos quirais, mas só **3** estereoisômeros: (2R,3R) e (2S,3S), ativos, e a forma meso (2R,3S), inativa; as combinações (2R,3S) e (2S,3R) são a mesma substância.\n\n**Importância:** o organismo é quiral (enzimas e receptores). Um enantiômero pode ser o remédio e o outro, ineficaz ou nocivo (caso histórico da talidomida). A carvona tem uma forma com cheiro de hortelã e outra com cheiro de alcaravia (Carum carvi).'
        },
        {
          titulo: 'Erros comuns e como o ENEM cobra',
          texto: '- Dizer que são isômeros sem conferir a **fórmula molecular**.\n- Contar como quiral um carbono com **dupla ligação** (tem só três ligantes) ou com **dois grupos iguais**.\n- Esperar isomeria geométrica em dupla com um carbono de ligantes iguais.\n- Achar que enantiômeros têm pontos de fusão diferentes: não têm.\n- Esquecer que o par aldeído/cetona (mesmo C3H6O) é de **função**, não de posição.\n- Confundir **cis/trans** com **dextro/levo**: o primeiro é geométrica, o segundo é óptica.\n\n**No ENEM:** o enunciado costuma trazer um fármaco ou aroma e perguntar por que um enantiômero age diferente do outro, ou mostra uma estrutura para você achar o carbono quiral. Também aparece o contexto da **gordura trans** e dos isômeros de função (álcool/éter, aldeído/cetona) com propriedades diferentes.'
        }
      ],
      pontosChave: [
        'Isômeros têm a mesma fórmula molecular e estruturas diferentes.',
        'Plana: cadeia, posição, função, compensação e tautomeria. Espacial: geométrica e óptica.',
        'Isomeria geométrica exige dupla ligação (ou ciclo) com ligantes diferentes em cada carbono.',
        'Cis = ligantes iguais do mesmo lado; trans = lados opostos (Z e E na notação IUPAC).',
        'Carbono quiral tem quatro ligantes diferentes e dá isomeria óptica.',
        'Com n carbonos quirais e sem forma meso, há 2ⁿ estereoisômeros ópticos; a forma meso reduz esse total (ácido tartárico: 2 carbonos quirais, 3 estereoisômeros).',
        'Enantiômeros desviam a luz polarizada em sentidos opostos; a mistura racêmica é inativa.',
        'Gordura trans e fármacos quirais são contextos frequentes em questões de isomeria.'
      ],
      fontes: [
        { titulo: 'Wikipédia: Isomeria', url: 'https://pt.wikipedia.org/wiki/Isomeria' },
        { titulo: 'Wikipédia: Quiralidade (química)', url: 'https://pt.wikipedia.org/wiki/Quiralidade_(qu%C3%ADmica)' },
        { titulo: 'OpenStax: Organic Chemistry', url: 'https://openstax.org/details/books/organic-chemistry' }
      ]
    },
    {
      id: 'aula-qui-reacoes',
      materia: 'quimica',
      assunto: 'Reações orgânicas',
      titulo: 'Reações orgânicas: substituição, adição, eliminação, oxidação e esterificação',
      duracaoMin: 24,
      resumo: 'Reconheça os grandes tipos de reação orgânica, preveja os produtos com a regra de Markovnikov e a oxidação de álcoois, e entenda sabão, biodiesel e combustão como o ENEM os apresenta.',
      secoes: [
        {
          titulo: 'Os tipos de reação pela mudança na molécula',
          texto: 'Em vez de decorar dezenas de reações, classifique pelo que acontece com a ligação:\n- **Substituição:** um átomo ou grupo sai e outro entra, sem mudar o tipo de ligação. R–H + Cl2 → R–Cl + HCl.\n- **Adição:** uma ligação **dupla ou tripla** se abre e recebe átomos. CH2=CH2 + H2 → CH3–CH3.\n- **Eliminação:** a molécula perde átomos e forma uma insaturação. É o inverso da adição.\n- **Oxidação/redução:** variação no número de oxidação do carbono (ganho de oxigênio, perda de hidrogênio).\n- **Esterificação e hidrólise:** formação e quebra de éster.\n\n**Pergunta-guia:** a molécula de partida tem dupla/tripla ligação? Se sim, o provável é **adição**. Se é saturada ou aromática, o provável é **substituição**.'
        },
        {
          titulo: 'Substituição e adição',
          texto: '**Substituição em alcanos (radicalar):** com luz ou calor, o halogênio troca um H. CH4 + Cl2 → CH3Cl + HCl. A reatividade do carbono é **terciário > secundário > primário**.\n\n**Substituição em aromáticos:** o benzeno **prefere substituir** a adicionar, para manter o anel estável. Exemplos: **nitração** (HNO3/H2SO4 → C6H5–NO2), **halogenação** (Cl2/FeCl3 → C6H5–Cl), **sulfonação** (H2SO4) e **alquilação**.\n\n**Adição em alcenos:**\n- **Hidrogenação** (H2, catalisador de Ni ou Pt): alceno → alcano. É assim que óleos líquidos viram gorduras sólidas (margarina).\n- **Halogenação** (Br2): CH2=CH2 + Br2 → CH2Br–CH2Br. A descoloração da água de bromo é teste de insaturação.\n- **Hidratação** (H2O, H⁺): alceno → álcool.\n- **Adição de HX:** vale a **regra de Markovnikov:** o hidrogênio vai para o carbono da dupla **mais hidrogenado**. **Exceção:** HBr na presença de peróxido (ROOR, efeito Kharasch) adiciona de forma **anti-Markovnikov**: o Br vai para o carbono **menos** hidrogenado. Ex.: CH3–CH=CH2 + HBr (com ROOR) → CH3–CH2–CH2–Br, 1-bromopropano. Sem peróxido, HBr segue Markovnikov; HCl e HI não mostram esse efeito.\n\n**Exemplo resolvido:** CH3–CH=CH2 + HCl. O carbono 1 (CH2) tem 2 H; o 2 (CH) tem 1 H. O H vai para o carbono 1 e o Cl para o 2. Produto: CH3–CHCl–CH3, **2-cloropropano**. Com H2O: propan-2-ol (não propan-1-ol).'
        },
        {
          titulo: 'Eliminação e oxidação de álcoois',
          texto: '**Desidratação de álcool** (ácido sulfúrico, aquecimento):\n- **Intramolecular** (cerca de 170 °C): CH3–CH2–OH → CH2=CH2 + H2O (forma alceno).\n- **Intermolecular** (cerca de 140 °C): 2 CH3–CH2–OH → CH3–CH2–O–CH2–CH3 + H2O (forma éter).\n\n**Oxidação de álcoois** (KMnO4 ou K2Cr2O7 em meio ácido). Depende de quantos carbonos estão ligados ao carbono do –OH:\n- **Primário** (CH3–CH2–OH): oxida a **aldeído** (CH3–CHO) e, com excesso de oxidante, a **ácido carboxílico** (CH3–COOH). É o que acontece quando o vinho vira vinagre (oxidação do etanol a ácido acético).\n- **Secundário** (CH3–CH(OH)–CH3): oxida a **cetona** (CH3–CO–CH3).\n- **Terciário:** **não** oxida nas condições comuns, pois o carbono do –OH não tem H.\n\nAldeídos são oxidados por reagentes brandos (Tollens: espelho de prata; Fehling: precipitado vermelho), cetonas não. Essa diferença é o teste clássico entre elas.'
        },
        {
          titulo: 'Esterificação, saponificação, biodiesel e combustão',
          texto: '**Esterificação de Fischer:** ácido carboxílico + álcool ⇌ éster + água (catalisador ácido). CH3–COOH + CH3–CH2–OH ⇌ CH3–COO–CH2–CH3 + H2O. É **reversível**; o inverso é a **hidrólise** do éster.\n\n**Saponificação:** hidrólise **básica** de um éster (ou de uma gordura/óleo, que é triglicerídeo). Gordura + 3 NaOH → 3 **sais de ácidos graxos (sabão)** + **glicerol**. É **irreversível**, porque forma sal.\n\n**Transesterificação (biodiesel):** óleo ou gordura + álcool curto (metanol ou etanol) + catalisador (NaOH ou KOH) → **ésteres de ácidos graxos (biodiesel)** + **glicerol**. O glicerol é o subproduto.\n\n**Combustão completa** de hidrocarbonetos e álcoois: gera CO2 + H2O. Em falta de oxigênio, forma CO (tóxico) ou fuligem (C).\n\n**Exemplo resolvido:** C2H6O + 3 O2 → 2 CO2 + 3 H2O. Quantos gramas de CO2 saem da queima de 23 g de etanol (46 g/mol)? 23 ÷ 46 = 0,5 mol de etanol → 1 mol de CO2 → **44 g**.'
        },
        {
          titulo: 'Erros comuns e como o ENEM cobra',
          texto: '- Aplicar **adição** ao benzeno (ele faz substituição).\n- Esquecer **Markovnikov** e colocar o H no carbono errado.\n- Dizer que o álcool **terciário** oxida.\n- Esquecer a **água** na esterificação ou confundir o produto da saponificação (é **sal**, não ácido).\n- Esquecer que o biodiesel é **éster**, e não hidrocarboneto, e que sobra glicerol.\n- Achar que a hidrogenação só "tira" a insaturação: ela também muda o estado físico, deixando o óleo mais sólido.\n\n**No ENEM:** o enunciado conta uma situação (fabricação de sabão, produção de biodiesel, hidrogenação de óleos, vinho que azeda, reação da água de bromo) e pede o tipo de reação ou o produto. Quase sempre há também uma conta de estequiometria (mol, massa, rendimento) em cima da equação.'
        }
      ],
      pontosChave: [
        'Substituição troca átomos; adição abre dupla/tripla; eliminação forma insaturação.',
        'Benzeno faz substituição (nitração, halogenação, sulfonação) em condições normais, e não adição; a adição só ocorre sob condições drásticas (ex.: hidrogenação a alta pressão e temperatura).',
        'Markovnikov: o H da adição de HX ou H2O vai para o carbono da dupla mais hidrogenado (exceção: HBr com peróxido, anti-Markovnikov).',
        'Álcool primário → aldeído → ácido; secundário → cetona; terciário não oxida.',
        'Desidratação do etanol: 170 °C dá eteno; 140 °C dá éter.',
        'Esterificação: ácido + álcool ⇌ éster + água (reversível).',
        'Saponificação: gordura + base → sabão (sal) + glicerol (irreversível).',
        'Biodiesel: transesterificação de óleo com álcool curto, gerando ésteres e glicerol.'
      ],
      fontes: [
        { titulo: 'Wikipédia: Reação orgânica', url: 'https://pt.wikipedia.org/wiki/Rea%C3%A7%C3%A3o_org%C3%A2nica' },
        { titulo: 'Wikipédia: Regra de Markovnikov', url: 'https://pt.wikipedia.org/wiki/Regra_de_Markovnikov' },
        { titulo: 'OpenStax: Organic Chemistry', url: 'https://openstax.org/details/books/organic-chemistry' }
      ]
    },
    {
      id: 'aula-qui-polimeros',
      materia: 'quimica',
      assunto: 'Polímeros',
      titulo: 'Polímeros: de monômero a plástico, borracha e fibra',
      duracaoMin: 20,
      resumo: 'Entenda polimerização por adição e por condensação, reconheça os plásticos mais cobrados (PE, PVC, PET, náilon, teflon), calcule o grau de polimerização e discuta reciclagem e impacto ambiental.',
      secoes: [
        {
          titulo: 'Monômero, polímero e grau de polimerização',
          texto: '**Polímero** (poli = muitos, mero = parte) é uma macromolécula formada pela repetição de unidades pequenas, os **monômeros**, ligadas por ligação covalente. A unidade que se repete é o **mero**. O número de meros é o **grau de polimerização (n)**.\n\n**Massa molar do polímero ≈ n × massa molar do mero.** Exemplo: o polietileno vem do eteno, CH2=CH2 (28 g/mol), e o mero é –CH2–CH2–. Com n = 1000, a massa molar é cerca de 28 000 g/mol.\n\nOs polímeros podem ser **naturais** (celulose, amido, proteínas, borracha natural, DNA) ou **sintéticos** (plásticos, náilon, PET). Por serem mistura de cadeias de tamanhos diferentes, usa-se massa molar **média**.'
        },
        {
          titulo: 'Polimerização por adição',
          texto: 'Ocorre com monômeros que têm **dupla ligação C=C**. A dupla se abre e as moléculas se encadeiam, **sem sobrar nada**: o polímero tem a mesma composição do monômero.\n\n**n CH2=CH2 → –(CH2–CH2)n–**\n\nPrincipais polímeros de adição (monômero → polímero):\n- eteno → **polietileno (PE)**: sacolas, filmes, garrafas de leite.\n- propeno → **polipropileno (PP)**: tampas, embalagens, seringas.\n- cloroeteno (cloreto de vinila), CH2=CHCl → **PVC**: tubos, conexões, forros.\n- fenileteno (estireno), CH2=CH–C6H5 → **poliestireno (PS)**: copos descartáveis, isopor (expandido).\n- tetrafluoroeteno, CF2=CF2 → **teflon (PTFE)**: antiaderente.\n- metacrilato de metila → **PMMA (acrílico)**.\n\nPara identificar o monômero de um polímero de adição, "feche" a dupla: a cadeia principal –CH2–CHX– vem de CH2=CHX.'
        },
        {
          titulo: 'Polimerização por condensação',
          texto: 'Ocorre entre monômeros que têm **dois grupos funcionais reativos** (um em cada ponta). Cada ligação formada **libera uma molécula pequena**, geralmente **água** (às vezes HCl). Por isso a massa do polímero é menor que a soma dos monômeros.\n\n- **Poliéster (PET):** ácido tereftálico (ácido com dois –COOH) + etilenoglicol (etano-1,2-diol, dois –OH). A ligação formada é **éster**. Garrafas de refrigerante, fibras de tecido.\n- **Poliamida (náilon 6,6):** ácido adípico (hexanodioico) + hexano-1,6-diamina (duas –NH2). A ligação formada é **amida**. Fibras, cordas, engrenagens. Proteínas e seda são poliamidas naturais.\n- **Baquelite:** fenol + formaldeído, termorrígido.\n\n**Teste rápido:** se o monômero tem C=C e o polímero é a soma dos monômeros, foi **adição**. Se há dois grupos funcionais (–OH, –COOH, –NH2) e sai água, foi **condensação**.'
        },
        {
          titulo: 'Propriedades, borracha e reciclagem',
          texto: '- **Termoplásticos:** amolecem com aquecimento e podem ser **refundidos e reciclados** (PE, PP, PVC, PET, PS). As cadeias são lineares ou pouco ramificadas.\n- **Termorrígidos (termofixos):** têm **ligações cruzadas** entre as cadeias, não amolecem de novo e não são refundidos (baquelite, resinas epóxi).\n- **Elastômeros:** voltam à forma depois de esticados (borracha). A **borracha natural** é o poli-isopreno, do látex. A **vulcanização** liga as cadeias por pontes de **enxofre**, e a borracha fica mais resistente e elástica (pneus).\n\n**Reciclagem:** os plásticos têm código numérico: 1 PET, 2 PEAD, 3 PVC, 4 PEBD, 5 PP, 6 PS, 7 outros. Só os termoplásticos se reciclam por fusão; a coleta seletiva e a separação por tipo são essenciais.\n\n**Biodegradabilidade:** polímeros de cadeia carbonada longa e inerte (PE, PP) podem levar décadas ou séculos para se degradar, e as estimativas variam muito conforme o ambiente. Polímeros com ligação éster hidrolisável (PLA, PHA) podem ser quebrados por microrganismos e água; plásticos de amido também são degradados por microrganismos, mas o amido tem ligações glicosídicas, não éster nem amida. O PLA se degrada bem sobretudo em compostagem industrial, e muito lentamente no ambiente natural, e os de fonte renovável (cana, milho) reduzem a dependência do petróleo. Nem todo plástico "de origem vegetal" é biodegradável, e nem todo biodegradável vem de fonte renovável.'
        },
        {
          titulo: 'Erros comuns e como o ENEM cobra',
          texto: '- Dizer que o polímero de adição libera subproduto (não libera).\n- Esquecer que a condensação precisa de **dois grupos funcionais** em cada monômero.\n- Calcular a massa molar do polímero somando os monômeros e esquecendo a água perdida na condensação.\n- Confundir **termoplástico** (reciclável por fusão) com **termorrígido**.\n- Achar que "reciclar" e "biodegradar" são a mesma coisa.\n\n**No ENEM:** o tema vem em situações-problema sobre **descarte e reciclagem**, microplásticos, sacolas biodegradáveis, escolha do material por suas propriedades (leve, resistente, isolante, transparente) e identificação do tipo de polimerização a partir da estrutura. Às vezes pede o monômero a partir de um trecho da cadeia ou compara a massa de polímero e a de monômero consumido.'
        }
      ],
      pontosChave: [
        'Polímero é formado por muitos meros; massa molar ≈ n × massa molar do mero.',
        'Adição: monômero com C=C, sem subproduto (PE, PP, PVC, PS, teflon).',
        'Condensação: monômeros com dois grupos funcionais, liberando água ou HCl (PET, náilon, baquelite).',
        'PET é poliéster (ligação éster); náilon é poliamida (ligação amida).',
        'Termoplásticos são refundidos e reciclados; termorrígidos têm ligações cruzadas e não.',
        'Vulcanização cria pontes de enxofre na borracha, deixando-a mais resistente.',
        'Plásticos de cadeia carbonada inerte (PE, PP) levam séculos para se degradar.',
        'Biodegradável não é sinônimo de renovável, nem de reciclável.'
      ],
      fontes: [
        { titulo: 'Wikipédia: Polímero', url: 'https://pt.wikipedia.org/wiki/Pol%C3%ADmero' },
        { titulo: 'Wikipédia: Polimerização', url: 'https://pt.wikipedia.org/wiki/Polimeriza%C3%A7%C3%A3o' },
        { titulo: 'Química Nova na Escola (SBQ)', url: 'https://qnesc.sbq.org.br/' }
      ]
    },
    {
      id: 'aula-qui-petroleo',
      materia: 'quimica',
      assunto: 'Petróleo e combustíveis',
      titulo: 'Petróleo e combustíveis: do poço ao tanque, e o que sai pelo escapamento',
      duracaoMin: 22,
      resumo: 'Veja como o petróleo se origina e é refinado (destilação fracionada, craqueamento, reforma), o que é octanagem, como se comparam gasolina, etanol, biodiesel e gás, e quais impactos ambientais a combustão causa.',
      secoes: [
        {
          titulo: 'O que é petróleo e como se forma',
          texto: 'O **petróleo** é uma **mistura** de centenas de compostos, principalmente **hidrocarbonetos** (alcanos, cicloalcanos e aromáticos), com pequenas quantidades de compostos de enxofre, nitrogênio e oxigênio. É um líquido oleoso, menos denso que a água.\n\nOrigem: restos de organismos aquáticos (plâncton) soterrados em **bacias sedimentares**, sob pressão e temperatura, ao longo de **milhões de anos**, sem oxigênio. Por isso é um recurso **não renovável** e **fóssil**. O petróleo fica retido em rochas porosas (reservatório) sob uma rocha impermeável. O **pré-sal** brasileiro são reservatórios sob uma espessa camada de sal, no mar, a grandes profundidades.\n\nO **gás natural** (principalmente **metano**, CH4) costuma estar associado ao petróleo.'
        },
        {
          titulo: 'Refino: destilação fracionada, craqueamento e reforma',
          texto: 'O petróleo bruto não serve de combustível. O **refino** separa e transforma suas partes.\n\n**1. Destilação fracionada:** o óleo é aquecido e entra numa torre. Cada fração se condensa em uma altura, de acordo com o **ponto de ebulição**, que cresce com o tamanho da cadeia (mais carbonos, mais forças de dispersão de London). Do topo (mais leve) para o fundo:\n- gases (metano, etano; GLP: propano e butano, cerca de C1–C4);\n- gasolina (cerca de C5–C10);\n- querosene (cerca de C10–C16, combustível de aviação);\n- óleo diesel (cerca de C12–C20);\n- óleos lubrificantes, parafinas;\n- resíduo da destilação a vácuo: **asfalto** (betume). O **coque** é obtido depois, no coqueamento, um processo de conversão do resíduo pesado.\n\n**2. Craqueamento (térmico ou catalítico):** quebra moléculas grandes, pouco úteis, em menores, como as da gasolina, e produz **alcenos** (matéria-prima de polímeros). Aumenta o rendimento de gasolina por barril.\n\n**3. Reforma catalítica:** reorganiza cadeias (ramifica, cicliza, aromatiza) e **aumenta a octanagem**.'
        },
        {
          titulo: 'Octanagem, cetanagem e poder calorífico',
          texto: '**Octanagem** mede a resistência da gasolina à **detonação** (batida de pino) por compressão. Escala: **isoctano** (2,2,4-trimetilpentano) = 100; **heptano** normal = 0. Cadeias **ramificadas** e **aromáticos** dão maior octanagem; cadeias longas e retas, menor. Uma gasolina de octanagem 90 comporta-se como uma mistura de 90% de isoctano e 10% de heptano.\n\nNo diesel, a medida inversa é o **índice de cetano**, que mede a facilidade de ignição por compressão.\n\n**Poder calorífico** é a energia liberada por massa (ou volume) queimada. Hidrocarbonetos têm poder calorífico maior por massa que o etanol (que já contém oxigênio). Por litro a diferença é parecida: um litro de etanol tem cerca de 2/3 da energia de um litro de gasolina, e por isso o carro faz menos quilômetros por litro com etanol. Compare sempre **energia por massa**, **energia por volume** e **preço**.\n\n**Combustão completa:** gera CO2 e H2O. **Incompleta**: gera também **CO** (tóxico) e fuligem. Exemplo: C8H18 + 25/2 O2 → 8 CO2 + 9 H2O. Para 114 g (1 mol) de octano saem 8 × 44 = 352 g de CO2; ou seja, **1 kg de octano gera cerca de 3,1 kg de CO2**.'
        },
        {
          titulo: 'Combustíveis renováveis e gasosos',
          texto: '- **Etanol:** C2H5OH, da **fermentação** da sacarose da cana (ou do amido do milho). Queima mais limpo que a gasolina e o CO2 emitido é em grande parte reabsorvido no crescimento da cana, **balanço de carbono** próximo de neutro (mas há emissões no cultivo, transporte e colheita). No Brasil a gasolina comum leva etanol anidro misturado (E30, ou 30%, desde agosto de 2025; o percentual é definido por decisão oficial e pode mudar).\n- **Biodiesel:** ésteres de óleos vegetais ou gordura animal (transesterificação), misturado ao diesel (B15, ou 15%, desde agosto de 2025; também sujeito a mudança). Tem pouco enxofre.\n- **Biogás:** metano de decomposição anaeróbica de lixo, esgoto e dejetos. Aproveita resíduos.\n- **Gás natural (GNV):** principalmente metano, queima mais limpa que gasolina ou diesel.\n- **GLP (gás de cozinha):** mistura de propano e butano.\n- **Hidrogênio:** a combustão não gera CO2 (produz água), mas, com ar em alta temperatura, forma também pequenas quantidades de NOx; é preciso produzi-lo (com energia) e armazená-lo.\n\n**Impactos da queima:** o **CO2** intensifica o efeito estufa; os **óxidos de enxofre (SO2)** e de nitrogênio (NOx) formam **chuva ácida**; o CO é tóxico; o material particulado agrava doenças respiratórias. Por isso se reduz o teor de enxofre do diesel (S10 e S500) e se usam catalisadores nos escapamentos.'
        },
        {
          titulo: 'Erros comuns e como o ENEM cobra',
          texto: '- Dizer que o refino **cria** os hidrocarbonetos: a destilação só **separa** frações; craqueamento e reforma é que transformam.\n- Achar que o petróleo é **substância pura** ou que cada fração é pura (cada fração é ainda uma mistura).\n- Concluir que um combustível "renovável" tem **emissão zero** de CO2.\n- Confundir **octanagem** (gasolina, resistência à detonação) com **cetanagem** (diesel).\n- Esquecer que o gás natural é principalmente metano, e que o GLP é propano e butano.\n- Mudar a ordem das frações: maior cadeia, **maior** ponto de ebulição, mais perto do **fundo** da torre.\n\n**No ENEM:** comparação de combustíveis (energia por real, emissão de CO2 por energia gerada), matriz energética brasileira, ordem de saída das frações do petróleo, justificativa para adicionar etanol à gasolina, e consequências da combustão (chuva ácida, efeito estufa, CO). Muitas vezes há uma conta de estequiometria de combustão para estimar a massa de CO2.'
        }
      ],
      pontosChave: [
        'Petróleo é mistura de hidrocarbonetos, de origem fóssil e não renovável.',
        'Destilação fracionada separa por ponto de ebulição; maior cadeia, maior ponto de ebulição.',
        'Ordem de saída: gases, gasolina, querosene, diesel, lubrificantes, resíduo (asfalto).',
        'Craqueamento quebra moléculas grandes e gera alcenos; reforma aumenta a octanagem.',
        'Octanagem 100 = isoctano; 0 = heptano; ramificação aumenta a octanagem.',
        'Etanol (fermentação) e biodiesel (transesterificação) são renováveis, com balanço de carbono favorável, mas não zero.',
        'Combustão incompleta produz CO e fuligem; SO2 e NOx causam chuva ácida; CO2 reforça o efeito estufa.',
        'Gás natural é principalmente metano; GLP é propano e butano.'
      ],
      fontes: [
        { titulo: 'Agência Nacional do Petróleo, Gás Natural e Biocombustíveis (ANP)', url: 'https://www.gov.br/anp/pt-br' },
        { titulo: 'Wikipédia: Petróleo', url: 'https://pt.wikipedia.org/wiki/Petr%C3%B3leo' },
        { titulo: 'Wikipédia: Octanagem', url: 'https://pt.wikipedia.org/wiki/Octanagem' }
      ]
    },
    {
      id: 'aula-qui-bioquimica',
      materia: 'quimica',
      assunto: 'Bioquímica',
      titulo: 'Bioquímica: carboidratos, lipídios, proteínas e ácidos nucleicos',
      duracaoMin: 24,
      resumo: 'Conheça a estrutura química das quatro grandes biomoléculas, as ligações que as formam (glicosídica, éster, peptídica, fosfodiéster), o papel das enzimas e o valor energético dos alimentos.',
      secoes: [
        {
          titulo: 'Carboidratos',
          texto: 'São poliálcoois com grupo carbonila (aldeído ou cetona), com fórmula geral próxima de Cn(H2O)n. Dividem-se por tamanho:\n- **Monossacarídeos:** glicose e frutose (C6H12O6, 180 g/mol), galactose. Não sofrem hidrólise.\n- **Dissacarídeos:** dois monossacarídeos unidos por **ligação glicosídica**, com perda de água. **Sacarose** = glicose + frutose (C12H22O11, 342 g/mol); **lactose** = glicose + galactose; **maltose** = glicose + glicose.\n- **Polissacarídeos:** milhares de monossacarídeos. **Amido** (reserva das plantas), **glicogênio** (reserva dos animais, fígado e músculos) e **celulose** (parede celular das plantas) são todos polímeros da glicose.\n\n**Conta:** glicose + frutose → sacarose + H2O: 180 + 180 − 18 = **342 g/mol**.\n\n**Amido × celulose:** ambos são polímeros da glicose, mas as ligações diferem (α no amido, β na celulose). Nossas enzimas digerem a ligação α do amido, mas **não** a β da celulose, que atua como **fibra alimentar**. Ruminantes digerem celulose graças a microrganismos que têm a enzima celulase. A **intolerância à lactose** é falta da enzima **lactase**, que hidrolisa a lactose.'
        },
        {
          titulo: 'Lipídios',
          texto: 'São compostos **pouco solúveis em água** (parte apolar grande), solúveis em solventes orgânicos.\n\n**Triglicerídeos (óleos e gorduras):** ésteres do **glicerol** (propano-1,2,3-triol, com 3 –OH) com **três ácidos graxos** (ácidos carboxílicos de cadeia longa). Cada –OH forma uma ligação éster, liberando 3 H2O.\n- **Gorduras** (animais; sólidas): ácidos graxos **saturados**, cadeias retas, empacotam bem.\n- **Óleos** (em geral líquidos): ácidos graxos predominantemente **insaturados** (duplas **cis**), cadeias dobradas. Exceções: óleo de coco e de palma são ricos em saturados (sólidos ou pastosos à temperatura ambiente); óleos de peixe, de origem animal, são insaturados.\n- **Gordura trans:** insaturação em configuração trans, gerada por hidrogenação parcial. Comporta-se como saturada no organismo.\n\n**Outros lipídios:** **fosfolipídios** (membranas celulares; cabeça polar e caudas apolares), **esteroides** (colesterol, hormônios sexuais), **ceras**.\n\nAs **vitaminas A, D, E e K** são **lipossolúveis** (acumulam no tecido adiposo); a C e as do complexo B são **hidrossolúveis** (excesso é eliminado na urina).\n\nA hidrólise básica de um triglicerídeo é a **saponificação**.'
        },
        {
          titulo: 'Proteínas e enzimas',
          texto: '**Aminoácidos** têm um carbono central ligado a –NH2 (amina), –COOH (ácido), H e um grupo **R** que varia: **H2N–CH(R)–COOH**. Existem 20 principais; os **essenciais** não são produzidos pelo organismo e vêm da dieta.\n\n**Ligação peptídica** é uma **amida**, formada pela reação do –COOH de um com o –NH2 de outro, liberando água. **Glicina + alanina → dipeptídeo + H2O.** Uma cadeia de **n aminoácidos** tem **n − 1 ligações peptídicas** e libera n − 1 moléculas de água (100 aminoácidos → 99 ligações).\n\n**Níveis de estrutura:**\n- **primária:** sequência de aminoácidos;\n- **secundária:** hélice ou folha, por ligações de hidrogênio;\n- **terciária:** dobramento 3D;\n- **quaternária:** união de mais de uma cadeia.\n\n**Desnaturação:** temperatura alta, pH extremo ou solventes **desfazem a forma 3D** (ligações de hidrogênio e interações) sem quebrar a ligação peptídica, e a proteína perde a função. Exemplo: clara de ovo cozida.\n\n**Enzimas** são, em geral, proteínas (há também ribozimas, RNAs catalíticos) que atuam como **catalisadores biológicos**: aceleram a reação **sem serem consumidas**, são **específicas** (modelo chave-fechadura) e dependem de **temperatura e pH** ótimos. Diminuem a energia de ativação e não alteram o equilíbrio.'
        },
        {
          titulo: 'Ácidos nucleicos e energia dos alimentos',
          texto: '**Nucleotídeo** = **fosfato** + **pentose** (desoxirribose no DNA, ribose no RNA) + **base nitrogenada**. Os nucleotídeos se ligam por **ligação fosfodiéster** e formam a cadeia.\n- **DNA:** bases **A, T, C, G**; fita dupla em hélice. As fitas se pareiam por ligações de hidrogênio: **A–T** (duas) e **C–G** (três). Armazena a informação genética.\n- **RNA:** bases **A, U, C, G** (uracila no lugar da timina); fita simples; participa da síntese de proteínas.\n\n**Exemplo:** se um trecho de DNA tem 20% de adenina, terá 20% de timina, e C + G = 60% (30% cada).\n\n**Energia dos alimentos (valores usuais de rótulo):** carboidratos e proteínas, cerca de **4 kcal/g**; lipídios, cerca de **9 kcal/g**; álcool etílico, 7 kcal/g.\n\n**Exemplo resolvido:** porção com 30 g de carboidrato, 10 g de proteína e 5 g de lipídio: 30 × 4 + 10 × 4 + 5 × 9 = 120 + 40 + 45 = **205 kcal**. Lipídios têm mais que o dobro de energia por grama (9 contra 4 kcal/g, cerca de 2,25 vezes), porque são mais reduzidos (mais C–H, menos oxigênio).'
        },
        {
          titulo: 'Erros comuns e como o ENEM cobra',
          texto: '- Dizer que **celulose** e amido são digeridos do mesmo jeito (ligação β não é quebrada por humanos).\n- Confundir **desnaturação** (perda da forma 3D) com **quebra da ligação peptídica** (hidrólise).\n- Achar que a enzima **é consumida** ou muda o equilíbrio.\n- Contar errado as ligações peptídicas: n aminoácidos, n − 1 ligações.\n- Dizer que óleos têm só ácidos graxos saturados (em geral são predominantemente insaturados, cis; óleo de coco é exceção).\n- Trocar valores energéticos: lipídio ≈ 9 kcal/g, os outros 4.\n\n**No ENEM:** relaciona estrutura e função (por que o ovo cozido não volta ao estado cru; por que o leite faz mal a quem tem intolerância; por que óleo e água não se misturam (lipídio apolar, água polar)), calcula **valor energético** a partir do rótulo, interpreta **ação de enzimas** em gráficos de temperatura ou pH, e cobra o papel do **DNA/RNA**. Também é comum o contexto de dieta, fibras, gordura trans e vitaminas.'
        }
      ],
      pontosChave: [
        'Carboidratos: mono (glicose), di (sacarose = glicose + frutose) e polissacarídeos (amido, glicogênio, celulose).',
        'Ligação glicosídica e ligação éster formam-se com perda de água; a hidrólise as quebra.',
        'Triglicerídeo é glicerol + três ácidos graxos (ligação éster); óleos são predominantemente insaturados (cis) e gorduras predominantemente saturadas; óleo de coco é exceção.',
        'Aminoácido: H2N–CH(R)–COOH; ligação peptídica é amida; n aminoácidos formam n − 1 ligações.',
        'Desnaturação desfaz a estrutura 3D sem quebrar a ligação peptídica.',
        'Enzimas são catalisadores específicos, não consumidos, dependentes de temperatura e pH.',
        'DNA: A–T e C–G; RNA tem uracila no lugar da timina.',
        'Valor energético: carboidrato e proteína 4 kcal/g; lipídio 9 kcal/g.'
      ],
      fontes: [
        { titulo: 'Wikipédia: Bioquímica', url: 'https://pt.wikipedia.org/wiki/Bioqu%C3%ADmica' },
        { titulo: 'Wikipédia: Ligação peptídica', url: 'https://pt.wikipedia.org/wiki/Liga%C3%A7%C3%A3o_pept%C3%ADdica' },
        { titulo: 'OpenStax: Biology 2e', url: 'https://openstax.org/details/books/biology-2e' }
      ]
    }
  ]
});
