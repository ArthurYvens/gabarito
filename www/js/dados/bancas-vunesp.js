/* Questões inéditas no estilo Vunesp, escritas para o app. */
(function () {
  'use strict';

  var U = {
    cf: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm',
    cp: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm',
    vol: 'https://www.academia.org.br',
    khan: 'https://pt.khanacademy.org/',
    cert: 'https://cartilha.cert.br',
    xl: 'https://support.microsoft.com/pt-br/excel',
    tv: 'https://pt.wikipedia.org/wiki/Tabela-verdade'
  };
  function f(titulo, url) { return { titulo: titulo, url: url }; }
  var GER = ['concursos-gerais'];
  var TJ = ['concursos-gerais', 'tribunais'];
  var POL = ['policial', 'concursos-gerais'];

  var questoes = [

    /* ===================== LÍNGUA PORTUGUESA ===================== */

    {
      id: 'por-501', materia: 'portugues', assunto: 'Interpretação de texto', tipo: 'multipla', estilo: 'Vunesp',
      dificuldade: 1, objetivos: GER,
      textoBase: 'A biblioteca do bairro abre às oito, mas a fila de crianças começa a se formar antes disso. Elas não vêm atrás de livros apenas: vêm atrás de silêncio, de uma mesa que seja só delas e de alguém que as escute sem pressa. A bibliotecária, que já viu muita moda passar, diz que o segredo é não competir com a tela, e sim oferecer o que ela não oferece: tempo.',
      enunciado: 'De acordo com o texto, a bibliotecária considera que a biblioteca atrai as crianças porque',
      alternativas: [
        'imita os recursos das telas para disputar a atenção do público infantil.',
        'oferece algo que as telas não oferecem: tempo e escuta.',
        'abre mais cedo do que os demais serviços públicos do bairro.',
        'reúne uma quantidade de livros maior do que a das escolas da região.',
        'garante que as crianças fiquem longe de qualquer aparelho eletrônico.'
      ],
      resposta: 1,
      explicacao: {
        resumo: 'O texto diz que o segredo é "não competir com a tela" e oferecer "o que ela não oferece: tempo". Logo, a alternativa B.',
        detalhada: 'Em questões de interpretação da Vunesp, a resposta costuma estar **apoiada em um trecho**, apenas reescrito com outras palavras. Aqui o trecho é: "o segredo é não competir com a tela, e sim oferecer o que ela não oferece: tempo". A alternativa B é a paráfrase dessa ideia, somada ao que vem antes ("alguém que as escute sem pressa"), que o texto resume como tempo e escuta.\n\nA alternativa A afirma o contrário do que a bibliotecária defende (imitar a tela). A C usa um dado do texto (abre às oito) para inventar uma comparação que ele não faz. A D cria uma comparação com escolas que não existe no texto. A E exagera: o texto não diz que a biblioteca afasta as crianças das telas, só que não compete com elas.',
        alternativas: [
          'Errada: o texto diz que a biblioteca não deve competir com a tela, e não imitá-la.',
          'Correta: parafraseia "oferecer o que ela não oferece: tempo" e "alguém que as escute"; o texto nomeia tempo e escuta, e não "atenção".',
          'Errada: o horário de abertura é só um dado de ambientação; não há comparação com outros serviços.',
          'Errada: o texto não compara acervos nem menciona escolas.',
          'Errada: extrapolação; o texto não fala em afastar as crianças dos aparelhos.'
        ],
        dica: 'Desconfie de alternativas que trazem comparações ("mais do que"), exageros ("qualquer", "sempre") ou ideias que o texto não menciona.'
      },
      fontes: [f('Academia Brasileira de Letras', U.vol)]
    },

    {
      id: 'por-502', materia: 'portugues', assunto: 'Concordância verbal e nominal', tipo: 'multipla', estilo: 'Vunesp',
      dificuldade: 2, objetivos: GER,
      enunciado: 'Assinale a alternativa em que a concordância verbal está de acordo com a norma-padrão da língua portuguesa.',
      alternativas: [
        'Fazem dois anos que o fórum mudou de endereço.',
        'Haviam muitos processos aguardando distribuição.',
        'Cerca de duzentos candidatos compareceram ao local de prova.',
        'Vendem-se casa de veraneio no litoral paulista.',
        'Existe, nos autos, provas suficientes da autoria.'
      ],
      resposta: 2,
      explicacao: {
        resumo: 'Com "cerca de duzentos candidatos", o verbo concorda com o núcleo "candidatos" (plural): "compareceram".',
        detalhada: '- **A**: "fazer" indicando tempo decorrido é impessoal e fica na 3ª pessoa do singular: "Faz dois anos".\n- **B**: "haver" no sentido de existir é impessoal e não vai ao plural: "Havia muitos processos".\n- **C**: correta. A expressão "cerca de" não altera a concordância, que se dá com o núcleo do sujeito, "candidatos".\n- **D**: na voz passiva sintética, o verbo concorda com o sujeito paciente. Como "casa" é singular, o certo é "Vende-se casa".\n- **E**: o sujeito é "provas" (posposto); o verbo deve ir ao plural: "Existem provas".',
        alternativas: [
          'Errada: "fazer" (tempo) é impessoal: "Faz dois anos".',
          'Errada: "haver" (existir) é impessoal: "Havia".',
          'Correta: o verbo concorda com "candidatos".',
          'Errada: o sujeito "casa" é singular: "Vende-se casa".',
          'Errada: o sujeito "provas" é plural: "Existem provas".'
        ],
        dica: 'Fazer (tempo) e haver (existir) são impessoais: não vão ao plural em oração simples. A Vunesp adora "Haviam" e "Fazem".'
      },
      fontes: [f('Academia Brasileira de Letras', U.vol)]
    },

    {
      id: 'por-503', materia: 'portugues', assunto: 'Crase', tipo: 'multipla', estilo: 'Vunesp',
      dificuldade: 2, objetivos: GER,
      enunciado: 'Assinale a alternativa em que o emprego do sinal indicativo de crase está correto.',
      alternativas: [
        'Os formulários foram entregues à todos os inscritos.',
        'A sessão começará à partir das 9 horas.',
        'O atendente dirigiu-se à pessoas que aguardavam na fila.',
        'Fizemos referência à decisão proferida na semana passada.',
        'Depois do expediente, passou a andar à pé pelo centro.'
      ],
      resposta: 3,
      explicacao: {
        resumo: '"Fazer referência" pede a preposição "a", e "decisão" aceita o artigo "a": a + a = à.',
        detalhada: 'A crase exige **preposição "a" + artigo "a"** (ou pronome demonstrativo). Teste prático: troque a palavra feminina por uma masculina; se aparecer "ao", há crase.\n\n- **A**: "todos" não admite artigo feminino: "a todos".\n- **B**: antes de verbo não há artigo: "a partir de".\n- **C**: "pessoas" está no plural e sem artigo; não há crase: "a pessoas".\n- **D**: correta. "Referência a" (preposição) + "a decisão" (artigo) = "à decisão".\n- **E**: "a pé" é expressão de modo com palavra masculina, sem crase.',
        alternativas: [
          'Errada: antes de pronome indefinido masculino não há crase.',
          'Errada: "a partir de" nunca leva crase.',
          'Errada: palavra plural sem artigo ("pessoas") não admite crase.',
          'Correta: a (preposição) + a (artigo) diante de "decisão".',
          'Errada: "a pé" não leva crase.'
        ],
        dica: 'Não há crase antes de masculino, verbo, pronome indefinido e expressões como "a partir de", "a pé", "a cavalo".'
      },
      fontes: [f('Academia Brasileira de Letras', U.vol)]
    },

    {
      id: 'por-504', materia: 'portugues', assunto: 'Pontuação', tipo: 'multipla', estilo: 'Vunesp',
      dificuldade: 2, objetivos: GER,
      enunciado: 'Assinale a alternativa em que a pontuação está de acordo com a norma-padrão.',
      alternativas: [
        'Senhores vereadores, a votação da proposta, como já se previa, foi adiada.',
        'O prefeito, anunciou ontem, as obras do novo hospital.',
        'Chegou a hora, de decidir o futuro da cidade.',
        'Maria, e João saíram mais cedo do trabalho.',
        'Não sei, se o prazo será prorrogado.'
      ],
      resposta: 0,
      explicacao: {
        resumo: 'Na A, a vírgula isola o vocativo e a expressão intercalada "como já se previa". Nas demais, a vírgula separa termos que não podem ser separados.',
        detalhada: '- **A**: correta. "Senhores vereadores" é vocativo e vem seguido de vírgula; "como já se previa" é expressão intercalada, entre vírgulas.\n- **B**: a vírgula separa o sujeito do verbo e isola o verbo ("anunciou") sem necessidade.\n- **C**: separa o verbo "chegou" e o seu sujeito "a hora" do complemento "de decidir", que é termo integrante.\n- **D**: a vírgula separa as partes do sujeito composto ("Maria e João"), unidas por "e".\n- **E**: a vírgula separa o verbo "sei" da oração que é seu objeto direto ("se o prazo...").',
        alternativas: [
          'Correta: vocativo e expressão intercalada isolados.',
          'Errada: vírgula separa o sujeito do verbo.',
          'Errada: vírgula separa o substantivo do seu complemento.',
          'Errada: vírgula separa as partes do sujeito composto.',
          'Errada: vírgula separa o verbo de seu objeto direto.'
        ],
        dica: 'Não se separa sujeito de verbo, nem verbo de complemento. Vírgula só em pares, para intercalações, ou para vocativo.'
      },
      fontes: [f('Academia Brasileira de Letras', U.vol)]
    },

    {
      id: 'por-505', materia: 'portugues', assunto: 'Regência', tipo: 'multipla', estilo: 'Vunesp',
      dificuldade: 2, objetivos: GER,
      enunciado: 'Assinale a alternativa em que a regência verbal está de acordo com a norma-padrão.',
      alternativas: [
        'Todos os candidatos devem obedecer às normas do edital.',
        'Prefiro mais o café do que o chá.',
        'Os servidores aspiram o cargo de chefia.',
        'O filme que assistimos ontem foi premiado.',
        'Os candidatos obedeceram as normas do edital.'
      ],
      resposta: 0,
      explicacao: {
        resumo: '"Obedecer" é transitivo indireto e pede a preposição "a": "obedecer às normas".',
        detalhada: '- **A**: correta. Quem obedece, obedece **a** algo ou alguém.\n- **B**: "preferir" pede "a" e dispensa "mais" e "do que": "Prefiro o café ao chá".\n- **C**: "aspirar", no sentido de desejar, é transitivo indireto: "aspiram ao cargo".\n- **D**: "assistir" (ver) pede "a": "o filme a que assistimos".\n- **E**: "obedecer" pede a preposição "a", que se funde ao artigo: "obedeceram às normas". Sem ela, a regência fica errada.',
        alternativas: [
          'Correta: obedecer a.',
          'Errada: preferir a, sem "mais" nem "do que".',
          'Errada: aspirar a (desejar).',
          'Errada: o certo é "o filme a que assistimos".',
          'Errada: falta a preposição "a" depois de "obedecer" ("às normas").'
        ],
        dica: 'Decore: obedecer a, preferir a, aspirar a, assistir a (ver), visar a. Com pronome relativo, a preposição vem antes: "a que".'
      },
      fontes: [f('Academia Brasileira de Letras', U.vol)]
    },

    {
      id: 'por-506', materia: 'portugues', assunto: 'Coesão e coerência', tipo: 'multipla', estilo: 'Vunesp',
      dificuldade: 2, objetivos: GER,
      textoBase: 'O sistema de abastecimento da cidade foi modernizado no ano passado. (1) ____, ainda há bairros que recebem água de forma intermitente, (2) ____ a rede antiga não foi totalmente substituída.',
      enunciado: 'Assinale a alternativa cujas expressões preenchem, correta e respectivamente, as lacunas (1) e (2) do texto, de modo a manter a coerência entre as ideias.',
      alternativas: [
        'Portanto ... porque',
        'Contudo ... portanto',
        'Assim ... embora',
        'Além disso ... conquanto',
        'Contudo ... pois'
      ],
      resposta: 4,
      explicacao: {
        resumo: 'A lacuna 1 pede uma oposição ("contudo"), e a 2 pede uma explicação da persistência do problema ("pois").',
        detalhada: 'A segunda frase contraria a expectativa criada pela primeira (houve modernização, mas ainda falta água): relação de **oposição**, expressa por "contudo". Em seguida, a oração "a rede antiga não foi totalmente substituída" apresenta a **causa** do problema, o que exige conjunção explicativa, como "pois".\n\n- A: "portanto" indica conclusão, e não oposição.\n- B: "portanto" indica conclusão, e não causa.\n- C: "assim" é conclusivo; "embora" é concessiva e exigiria subjuntivo ("tenha sido").\n- D: "além disso" soma ideias, mas aqui há oposição; "conquanto" é concessiva.',
        alternativas: [
          'Errada: "portanto" é conclusiva.',
          'Errada: a segunda lacuna pede causa, não conclusão.',
          'Errada: "assim" é conclusivo e não marca a oposição que a primeira lacuna exige.',
          'Errada: "além disso" adiciona, mas há oposição.',
          'Correta: oposição + explicação.'
        ],
        dica: 'Antes de olhar as alternativas, descubra a relação lógica de cada lacuna: oposição, causa, conclusão ou adição.'
      },
      fontes: [f('Academia Brasileira de Letras', U.vol)]
    },

    /* ===================== MATEMÁTICA ===================== */

    {
      id: 'mat-501', materia: 'matematica', assunto: 'Porcentagem', tipo: 'multipla', estilo: 'Vunesp',
      dificuldade: 1, objetivos: GER,
      enunciado: 'Uma prefeitura reajustou em 20% a tarifa de um serviço, que custava R$ 50,00. Meses depois, concedeu um desconto de 20% sobre a nova tarifa. Após o desconto, a tarifa passou a ser de',
      alternativas: ['R$ 50,00.', 'R$ 48,00.', 'R$ 60,00.', 'R$ 72,00.', 'R$ 40,00.'],
      resposta: 1,
      explicacao: {
        resumo: 'Fatores sucessivos: 50 x 1,20 x 0,80 = 48. Aumento e desconto de mesmo percentual não se anulam.',
        detalhada: 'Após o reajuste: 50 x 1,20 = **R$ 60,00**. O desconto de 20% incide sobre os **R$ 60,00**, e não sobre os R$ 50,00: 60 x 0,80 = **R$ 48,00**.\n\nA armadilha é achar que +20% e -20% se cancelam. Os percentuais incidem sobre bases diferentes; o fator total é 1,20 x 0,80 = 0,96, uma redução de 4%.',
        alternativas: [
          'Errada: ignora que a base do desconto é R$ 60,00.',
          'Correta: 50 x 1,2 x 0,8 = 48.',
          'Errada: é o valor após o reajuste; esquece o desconto (50 x 1,2 = 60).',
          'Errada: aplica novo aumento de 20% em vez de desconto (60 x 1,2 = 72).',
          'Errada: ignora o reajuste e aplica o desconto sobre R$ 50,00 (50 x 0,8 = 40).'
        ],
        dica: 'Em percentuais sucessivos, multiplique os fatores. Nunca some e subtraia percentuais.'
      },
      fontes: [f('Khan Academy: porcentagem', U.khan)]
    },

    {
      id: 'mat-502', materia: 'matematica', assunto: 'Razão e proporção', tipo: 'multipla', estilo: 'Vunesp',
      dificuldade: 1, objetivos: GER,
      enunciado: 'Em uma repartição pública, a razão entre o número de servidores homens e o de servidoras mulheres é 3/5. Sabendo que, no total, há 96 servidores, o número de mulheres é',
      alternativas: ['36.', '48.', '60.', '64.', '72.'],
      resposta: 2,
      explicacao: {
        resumo: 'H/M = 3/5, logo as mulheres correspondem a 5 das 8 partes do total: 96 x 5/8 = 60.',
        detalhada: 'Se a razão é 3 para 5, o total é dividido em 3 + 5 = **8 partes**. Cada parte vale 96 / 8 = 12. Os homens são 3 x 12 = 36 e as mulheres são **5 x 12 = 60**. Confirmação: 36 + 60 = 96 e 36/60 = 3/5.',
        alternativas: [
          'Errada: é o número de homens.',
          'Errada: 48 seria metade do total, razão 1/1.',
          'Correta: 5 x 12 = 60.',
          'Errada: corresponderia à razão 1/2.',
          'Errada: corresponderia à razão 1/3.'
        ],
        dica: 'Razão "a/b" entre partes: some a + b para achar o total de partes e divida.'
      },
      fontes: [f('Khan Academy: razões e proporções', U.khan)]
    },

    {
      id: 'mat-503', materia: 'matematica', assunto: 'Matemática financeira', tipo: 'multipla', estilo: 'Vunesp',
      dificuldade: 2, objetivos: GER,
      enunciado: 'Uma servidora aplicou R$ 4.000,00 a juros simples, à taxa de 1,5% ao mês, durante 8 meses. O montante ao final da aplicação foi de',
      alternativas: ['R$ 4.120,00.', 'R$ 4.240,00.', 'R$ 4.360,00.', 'R$ 4.480,00.', 'R$ 4.800,00.'],
      resposta: 3,
      explicacao: {
        resumo: 'J = 4.000 x 0,015 x 8 = 480; M = 4.000 + 480 = 4.480.',
        detalhada: 'Em juros simples, J = C x i x t. Com C = 4.000, i = 1,5% = 0,015 e t = 8: J = 4.000 x 0,015 x 8 = **R$ 480,00**. O montante é M = C + J = **R$ 4.480,00**.\n\nCuidado com a pergunta: a banca pede o **montante**, e não os juros. O valor R$ 480,00 não aparece entre as opções, mas quem esquece de somar o capital ou erra o prazo cai nos outros distratores.',
        alternativas: [
          'Errada: corresponde a apenas 2 meses de aplicação.',
          'Errada: corresponde a apenas 4 meses de aplicação.',
          'Errada: corresponde a apenas 6 meses de aplicação.',
          'Correta: 4.000 + 480.',
          'Errada: corresponderia a uma taxa de 2,5% ao mês.'
        ],
        dica: 'Leia o que a questão pede: juros ou montante. Montante = capital + juros.'
      },
      fontes: [f('Banco Central do Brasil', 'https://www.bcb.gov.br/'), f('Khan Academy', U.khan)]
    },

    {
      id: 'mat-504', materia: 'matematica', assunto: 'Estatística básica', tipo: 'multipla', estilo: 'Vunesp',
      dificuldade: 2, objetivos: GER,
      enunciado: 'A média das idades de quatro servidores de uma seção é 30 anos. Quando um quinto servidor passa a integrar a seção, a média das idades do grupo passa a ser 32 anos. A idade do quinto servidor é',
      alternativas: ['32 anos.', '34 anos.', '36 anos.', '38 anos.', '40 anos.'],
      resposta: 4,
      explicacao: {
        resumo: 'Soma anterior: 4 x 30 = 120; soma nova: 5 x 32 = 160; idade do novo servidor: 160 - 120 = 40.',
        detalhada: 'Média = soma / quantidade, então soma = média x quantidade. Antes: 4 x 30 = 120. Depois: 5 x 32 = 160. A diferença entre as somas é a idade do novo integrante: 160 - 120 = **40 anos**.\n\nErro comum: concluir que, como a média subiu 2 anos, o novo servidor tem 32 anos. A média subiu 2 anos para **cinco** pessoas.',
        alternativas: [
          'Errada: confunde a nova média com a idade do novo servidor.',
          'Errada: com 34 anos a média seria 30,8.',
          'Errada: com 36 anos a média seria 31,2.',
          'Errada: com 38 anos a média seria 31,6.',
          'Correta: 160 - 120 = 40.'
        ],
        dica: 'Em problemas de média, trabalhe com somas: soma = média x quantidade.'
      },
      fontes: [f('Khan Academy: média', U.khan)]
    },

    /* ===================== RACIOCÍNIO LÓGICO ===================== */

    {
      id: 'rlm-501', materia: 'raciocinio-logico', assunto: 'Equivalências e negações', tipo: 'multipla', estilo: 'Vunesp',
      dificuldade: 2, objetivos: TJ,
      enunciado: 'Considere a afirmação: "Se o processo está concluído, então o servidor foi notificado." A negação lógica dessa afirmação é:',
      alternativas: [
        'O processo está concluído e o servidor não foi notificado.',
        'Se o processo não está concluído, então o servidor não foi notificado.',
        'O processo não está concluído e o servidor foi notificado.',
        'O processo não está concluído ou o servidor foi notificado.',
        'Se o servidor não foi notificado, então o processo não está concluído.'
      ],
      resposta: 0,
      explicacao: {
        resumo: '~(p -> q) equivale a p ^ ~q: "o processo está concluído e o servidor não foi notificado".',
        detalhada: 'A condicional p -> q só é falsa quando p é verdadeira e q é falsa. Portanto, sua negação é **p e não-q**: ~(p -> q) = p ^ ~q ("mantém a primeira, E nega a segunda").\n\n- **D** é a forma **equivalente** da condicional (~p v q), e não a negação.\n- **E** é a **contrapositiva** (~q -> ~p), também equivalente.\n- **B** é a inversa (~p -> ~q), que não é nem equivalente nem negação.\n- **C** nega a primeira parte e mantém a segunda, o que não corresponde à negação.',
        alternativas: [
          'Correta: p e ~q.',
          'Errada: é a inversa, não a negação.',
          'Errada: nega a primeira parte e mantém a segunda.',
          'Errada: é a forma equivalente (~p ou q).',
          'Errada: é a contrapositiva, equivalente à original.'
        ],
        dica: 'Negação de "se p, então q" = "p e não q". A Vunesp põe a equivalente e a contrapositiva como distratores.'
      },
      fontes: [f('Tabela-verdade', U.tv)]
    },

    {
      id: 'rlm-502', materia: 'raciocinio-logico', assunto: 'Proposições e conectivos', tipo: 'multipla', estilo: 'Vunesp',
      dificuldade: 2, objetivos: TJ,
      enunciado: 'Sabe-se que a proposição "A empresa foi multada" é falsa e que a proposição "O alvará está vencido" é verdadeira. Nessas condições, é verdadeira a proposição:',
      alternativas: [
        'A empresa foi multada e o alvará está vencido.',
        'Se a empresa foi multada, então o alvará está vencido.',
        'Se o alvará está vencido, então a empresa foi multada.',
        'A empresa foi multada se, e somente se, o alvará está vencido.',
        'A empresa não foi multada e o alvará não está vencido.'
      ],
      resposta: 1,
      explicacao: {
        resumo: 'Com p = F e q = V, só p -> q é verdadeira (F -> V = V).',
        detalhada: 'Seja p = "a empresa foi multada" (F) e q = "o alvará está vencido" (V).\n\n- A: p ^ q = F ^ V = **F**.\n- B: p -> q = F -> V = **V**. (Condicional com antecedente falso é sempre verdadeira.)\n- C: q -> p = V -> F = **F**.\n- D: p <-> q = F <-> V = **F**.\n- E: ~p ^ ~q = V ^ F = **F**.',
        alternativas: [
          'Errada: conjunção com uma parte falsa.',
          'Correta: F -> V = V.',
          'Errada: V -> F = F.',
          'Errada: bicondicional com valores diferentes é falsa.',
          'Errada: ~q é falsa, logo a conjunção é falsa.'
        ],
        dica: 'A condicional só é falsa em V -> F. Antecedente falso torna a condicional verdadeira.'
      },
      fontes: [f('Tabela-verdade', U.tv)]
    },

    {
      id: 'rlm-503', materia: 'raciocinio-logico', assunto: 'Análise combinatória', tipo: 'multipla', estilo: 'Vunesp',
      dificuldade: 2, objetivos: GER,
      enunciado: 'Seis servidores de um departamento são candidatos a ocupar, respectivamente, os cargos de presidente, secretário e tesoureiro de uma comissão. Cada servidor pode ocupar, no máximo, um cargo. O número de maneiras diferentes de preencher os três cargos é',
      alternativas: ['20.', '60.', '120.', '216.', '720.'],
      resposta: 2,
      explicacao: {
        resumo: 'A ordem importa (cargos diferentes): 6 x 5 x 4 = 120 (arranjo).',
        detalhada: 'Para presidente há 6 opções; para secretário, 5 (já saiu um); para tesoureiro, 4. Pelo princípio multiplicativo: 6 x 5 x 4 = **120**. É um arranjo A(6,3) = 6!/3!.\n\n- 20 é a combinação C(6,3), usada quando a ordem **não** importa.\n- 216 seria 6 x 6 x 6, permitindo repetição, o que o enunciado proíbe.\n- 720 é 6!, ordenando todos os seis.',
        alternativas: [
          'Errada: é C(6,3); aqui os cargos distinguem as escolhas.',
          'Errada: não corresponde a nenhum raciocínio válido.',
          'Correta: 6 x 5 x 4 = 120.',
          'Errada: 6^3 admite o mesmo servidor em mais de um cargo.',
          'Errada: 6! ordenaria os seis servidores.'
        ],
        dica: 'Pergunte-se: trocar a ordem muda o resultado? Se sim (cargos distintos), é arranjo; se não, combinação.'
      },
      fontes: [f('Khan Academy: análise combinatória', U.khan)]
    },

    {
      id: 'rlm-504', materia: 'raciocinio-logico', assunto: 'Sequências lógicas', tipo: 'multipla', estilo: 'Vunesp',
      dificuldade: 2, objetivos: GER,
      enunciado: 'Um arquivo numera suas pastas segundo uma regra: 3, 8, 18, 38, 78, ... Mantida a regra, a pasta que vem imediatamente depois da de número 78 recebe o número',
      alternativas: ['148.', '154.', '156.', '158.', '162.'],
      resposta: 3,
      explicacao: {
        resumo: 'Cada termo é o dobro do anterior mais 2: 78 x 2 + 2 = 158.',
        detalhada: 'Verifique a regra nos termos dados: 3 x 2 + 2 = 8; 8 x 2 + 2 = 18; 18 x 2 + 2 = 38; 38 x 2 + 2 = 78. Logo o próximo é 78 x 2 + 2 = **158**.\n\nOutra leitura: as diferenças entre termos são 5, 10, 20, 40, e a próxima é 80: 78 + 80 = 158. As duas leituras confirmam.',
        alternativas: [
          'Errada: exigiria diferença de 70, que não segue o padrão.',
          'Errada: exigiria diferença de 76, que não segue o padrão.',
          'Errada: seria 78 x 2, sem somar 2.',
          'Correta: 78 x 2 + 2.',
          'Errada: exigiria diferença de 84, que não segue o padrão.'
        ],
        dica: 'Teste a regra em todos os termos dados, e não apenas nos dois primeiros. Olhar as diferenças ajuda a conferir.'
      },
      fontes: [f('Khan Academy: sequências', U.khan)]
    },

    /* ===================== DIREITO PENAL ===================== */

    {
      id: 'dpe-501', materia: 'direito-penal', assunto: 'Teoria do crime', tipo: 'multipla', estilo: 'Vunesp',
      dificuldade: 2, objetivos: POL,
      enunciado: 'Pedro sabia que o freio do seu caminhão estava com defeito, mas, indiferente ao que pudesse acontecer, saiu em alta velocidade por uma rua movimentada. Ao tentar frear, não conseguiu e atropelou um pedestre, que morreu. Segundo o Código Penal, Pedro agiu com',
      alternativas: [
        'culpa consciente.',
        'dolo eventual.',
        'culpa inconsciente.',
        'dolo direto de segundo grau.',
        'preterdolo.'
      ],
      resposta: 1,
      explicacao: {
        resumo: 'Previu a possibilidade do resultado e, indiferente, assumiu o risco de produzi-lo: dolo eventual (art. 18, I, CP).',
        detalhada: 'O art. 18, I, do CP diz que o crime é doloso quando o agente **quis o resultado ou assumiu o risco de produzi-lo**. Pedro previu o risco (sabia do freio defeituoso) e foi **indiferente** ao resultado: dolo eventual.\n\nNa **culpa consciente**, o agente também prevê o resultado, mas acredita sinceramente que ele não ocorrerá ou que poderá evitá-lo. A diferença está na atitude psíquica: indiferença (dolo eventual) versus confiança (culpa consciente). A culpa inconsciente não prevê o resultado, que era previsível. O dolo de segundo grau trata de consequências necessárias dos meios escolhidos, e o preterdolo combina dolo na conduta antecedente com culpa no resultado mais grave.',
        alternativas: [
          'Errada: na culpa consciente o agente confia em evitar o resultado; aqui ele foi indiferente.',
          'Correta: previu e assumiu o risco.',
          'Errada: aqui o agente previu o risco.',
          'Errada: o resultado não era consequência necessária da conduta.',
          'Errada: não há conduta dolosa antecedente que gere resultado mais grave culposo.'
        ],
        dica: 'Indiferença ao resultado = dolo eventual. Confiança em evitá-lo = culpa consciente.'
      },
      fontes: [f('Código Penal, art. 18', U.cp)]
    },

    {
      id: 'dpe-502', materia: 'direito-penal', assunto: 'Excludentes de ilicitude', tipo: 'multipla', estilo: 'Vunesp',
      dificuldade: 1, objetivos: POL,
      enunciado: 'Nos termos do art. 23 do Código Penal, não há crime quando o agente pratica o fato em determinadas situações. Não se inclui entre essas situações:',
      alternativas: [
        'o estado de necessidade.',
        'a legítima defesa.',
        'a coação moral irresistível.',
        'o estrito cumprimento de dever legal.',
        'o exercício regular de direito.'
      ],
      resposta: 2,
      explicacao: {
        resumo: 'A coação moral irresistível (art. 22) exclui a culpabilidade, e não a ilicitude; não consta do art. 23.',
        detalhada: 'O art. 23 lista as **excludentes de ilicitude**: estado de necessidade, legítima defesa, estrito cumprimento de dever legal e exercício regular de direito.\n\nA **coação moral irresistível** está no art. 22 e exclui a **culpabilidade** (inexigibilidade de conduta diversa): o fato continua ilícito, mas só o coator responde. O mesmo vale para a obediência hierárquica a ordem não manifestamente ilegal.',
        alternativas: [
          'Está no art. 23, I.',
          'Está no art. 23, II.',
          'Correta: é excludente de culpabilidade (art. 22).',
          'Está no art. 23, III.',
          'Está no art. 23, III.'
        ],
        dica: 'Ilicitude (art. 23): estado de necessidade, legítima defesa, dever legal e direito. Culpabilidade (art. 22): coação e obediência hierárquica.'
      },
      fontes: [f('Código Penal, arts. 22 e 23', U.cp)]
    },

    {
      id: 'dpe-503', materia: 'direito-penal', assunto: 'Crimes contra a Administração Pública', tipo: 'multipla', estilo: 'Vunesp',
      dificuldade: 2, objetivos: POL,
      enunciado: 'Marcos, servidor de uma prefeitura, é responsável pela guarda dos notebooks do almoxarifado municipal. Aproveitando-se dessa posição, levou um dos equipamentos para casa e o vendeu a terceiro, ficando com o dinheiro. A conduta de Marcos configura o crime de',
      alternativas: [
        'concussão.',
        'corrupção passiva.',
        'prevaricação.',
        'peculato.',
        'advocacia administrativa.'
      ],
      resposta: 3,
      explicacao: {
        resumo: 'Apropriar-se, em proveito próprio, de bem público de que tem a posse em razão do cargo é peculato (art. 312, CP).',
        detalhada: 'No **peculato** (art. 312), o funcionário público se **apropria** de dinheiro, valor ou bem móvel, público ou particular, de que tem a **posse em razão do cargo**, ou o desvia em proveito próprio ou alheio. Marcos guardava os notebooks e os vendeu: apropriação.\n\n- **Concussão** (art. 316): exigir vantagem indevida em razão da função.\n- **Corrupção passiva** (art. 317): solicitar ou receber vantagem indevida.\n- **Prevaricação** (art. 319): retardar ou deixar de praticar ato de ofício para satisfazer interesse pessoal.\n- **Advocacia administrativa** (art. 321): patrocinar interesse privado perante a administração, valendo-se da qualidade de funcionário.',
        alternativas: [
          'Errada: não houve exigência de vantagem.',
          'Errada: não houve solicitação ou recebimento de vantagem para a prática de ato.',
          'Errada: não houve retardo ou omissão de ato de ofício.',
          'Correta: apropriou-se de bem público que tinha em posse.',
          'Errada: não patrocinou interesse privado perante a administração.'
        ],
        dica: 'Peculato = o servidor mexe no bem que já está em sua posse. Corrupção e concussão envolvem vantagem indevida.'
      },
      fontes: [f('Código Penal, art. 312', U.cp)]
    },

    {
      id: 'dpe-504', materia: 'direito-penal', assunto: 'Aplicação da lei penal', tipo: 'multipla', estilo: 'Vunesp',
      dificuldade: 3, objetivos: POL,
      enunciado: 'Em 10 de março, Lucas, então com 17 anos e 11 meses, feriu gravemente um desafeto com uma faca. A vítima faleceu em decorrência dos ferimentos em 20 de abril, quando Lucas já havia completado 18 anos. Em relação à imputabilidade de Lucas, é correto afirmar que ele',
      alternativas: [
        'responderá como imputável, pois o Código Penal adotou a teoria do resultado.',
        'responderá como imputável, pois o Código Penal adotou a teoria da ubiquidade.',
        'responderá como imputável, pois a morte ocorreu quando já era maior de idade.',
        'responderá pelo Código Penal, mas com a pena reduzida em razão de semi-imputabilidade.',
        'é inimputável, pois, quanto ao tempo do crime, o Código Penal adotou a teoria da atividade.'
      ],
      resposta: 4,
      explicacao: {
        resumo: 'Considera-se praticado o crime no momento da ação, ainda que outro seja o do resultado (art. 4º, teoria da atividade). Na ação, Lucas tinha menos de 18 anos: inimputável (art. 27).',
        detalhada: 'O art. 4º do CP diz: "Considera-se praticado o crime no momento da ação ou omissão, ainda que outro seja o momento do resultado". É a **teoria da atividade**, adotada quanto ao **tempo do crime**. A idade se verifica no momento da conduta (10 de março), em que Lucas tinha menos de 18 anos; portanto, é **inimputável** (art. 27 do CP), sujeito às normas do ECA.\n\nA **teoria da ubiquidade** é a adotada para o **lugar do crime** (art. 6º), e não para o tempo. A semi-imputabilidade (art. 26, parágrafo único) trata de perturbação mental, e não de idade.',
        alternativas: [
          'Errada: para o tempo do crime vale a teoria da atividade.',
          'Errada: a ubiquidade vale para o lugar do crime.',
          'Errada: o momento do resultado é irrelevante para a idade.',
          'Errada: semi-imputabilidade decorre de perturbação mental.',
          'Correta: arts. 4º e 27 do CP.'
        ],
        dica: 'Tempo do crime = atividade (art. 4º). Lugar do crime = ubiquidade (art. 6º). Não troque.'
      },
      fontes: [f('Código Penal, arts. 4º, 6º e 27', U.cp)]
    },

    /* ===================== INFORMÁTICA ===================== */

    {
      id: 'inf-501', materia: 'informatica', assunto: 'Segurança da informação', tipo: 'multipla', estilo: 'Vunesp',
      dificuldade: 2, objetivos: GER,
      enunciado: 'A assinatura digital aplicada a um documento eletrônico tem por finalidade garantir, simultaneamente:',
      alternativas: [
        'autenticidade, integridade e não repúdio.',
        'confidencialidade, disponibilidade e anonimato.',
        'disponibilidade, anonimato e compressão do arquivo.',
        'confidencialidade do conteúdo, sem garantia de autoria.',
        'sigilo do conteúdo e velocidade de transmissão.'
      ],
      resposta: 0,
      explicacao: {
        resumo: 'A assinatura digital comprova quem assinou (autenticidade), que o documento não foi alterado (integridade) e impede o signatário de negar a autoria (não repúdio).',
        detalhada: 'A assinatura digital usa criptografia de chave pública: o resumo (hash) do documento é cifrado com a **chave privada** do signatário e verificado com a **chave pública**. Isso garante **autenticidade**, **integridade** e **não repúdio**.\n\nEla **não** garante, por si só, **confidencialidade**: o documento assinado pode continuar legível. Sigilo exige cifrar o conteúdo, o que é outra operação. Tampouco tem relação com compressão ou velocidade.',
        alternativas: [
          'Correta: garante autenticidade (quem assinou), integridade (o documento não foi alterado) e não repúdio (o signatário não pode negar a autoria).',
          'Errada: assinatura não garante sigilo nem anonimato.',
          'Errada: assinatura não comprime arquivos nem garante anonimato.',
          'Errada: garante autoria, e não confidencialidade.',
          'Errada: não trata de velocidade nem, por si só, de sigilo.'
        ],
        dica: 'Assinatura digital = autenticidade + integridade + não repúdio. Confidencialidade vem da criptografia do conteúdo.'
      },
      fontes: [f('Cartilha de Segurança para Internet (CERT.br)', U.cert)]
    },

    {
      id: 'inf-502', materia: 'informatica', assunto: 'Planilhas (Excel e Calc)', tipo: 'multipla', estilo: 'Vunesp',
      dificuldade: 2, objetivos: GER,
      textoBase: 'Em uma planilha do Microsoft Excel, em português, as células A1:A5 contêm 2, 4, 6, 8 e 10, e as células B1:B5 contêm 10, 20, 15, 30 e 5, nessa ordem (A1=2, B1=10; A2=4, B2=20; e assim por diante).',
      enunciado: 'Na célula C1 foi digitada a fórmula =SOMASE(B1:B5;">=15";A1:A5). O valor exibido em C1 será',
      alternativas: ['12.', '14.', '80.', '30.', '18.'],
      resposta: 4,
      explicacao: {
        resumo: 'SOMASE soma os valores de A1:A5 cujas células correspondentes em B atendem ao critério ">=15": 4 + 6 + 8 = 18.',
        detalhada: 'A sintaxe é SOMASE(intervalo_critério; critério; intervalo_soma). Os valores de B que atendem a ">=15" são B2=20, B3=15 e B4=30. Somam-se os correspondentes em A: A2=4, A3=6, A4=8, total **18**.\n\nSe o critério fosse ">15", B3=15 ficaria de fora e o resultado seria 12 (a alternativa A, a pegadinha clássica do ">=").',
        alternativas: [
          'Errada: seria o resultado com ">15" (4 + 8).',
          'Errada: 6 + 8, que deixa de fora a linha 2 (B2=20 também atende ao critério).',
          'Errada: é a soma de todos os valores de B.',
          'Errada: é a soma de todos os valores de A.',
          'Correta: 4 + 6 + 8.'
        ],
        dica: 'Em SOMASE, o critério olha o 1º intervalo e a soma vem do 3º. Repare em ">=" versus ">".'
      },
      fontes: [f('Microsoft Excel: suporte', U.xl)]
    },

    {
      id: 'inf-503', materia: 'informatica', assunto: 'Redes e internet', tipo: 'multipla', estilo: 'Vunesp',
      dificuldade: 2, objetivos: GER,
      enunciado: 'Ao acessar um site cujo endereço começa por https:// e que exibe o ícone de cadeado no navegador, o usuário pode concluir que',
      alternativas: [
        'o site é isento de qualquer tipo de malware.',
        'o site pertence necessariamente a um órgão do governo.',
        'os dados trafegam cifrados entre o navegador e o servidor, o que não garante a idoneidade do conteúdo do site.',
        'os arquivos baixados do site estão livres de vírus.',
        'o computador do usuário está protegido contra ataques de phishing.'
      ],
      resposta: 2,
      explicacao: {
        resumo: 'HTTPS cifra a comunicação (TLS) entre navegador e servidor, mas não atesta que o site seja confiável nem seguro.',
        detalhada: 'O **HTTPS** é o HTTP sobre **TLS** (porta 443 por padrão). Ele protege a comunicação contra interceptação e adulteração no caminho e, por meio de certificado, identifica o domínio acessado.\n\nIsso **não** significa que o conteúdo seja legítimo: sites fraudulentos também podem ter certificado e cadeado. Por isso o cadeado não elimina malware, phishing nem garante que o arquivo baixado seja seguro.',
        alternativas: [
          'Errada: cadeado não garante ausência de malware.',
          'Errada: qualquer site pode ter certificado.',
          'Correta: cifra o tráfego, mas não atesta idoneidade.',
          'Errada: arquivos baixados podem estar infectados.',
          'Errada: sites de phishing também usam HTTPS.'
        ],
        dica: 'Cadeado = conexão cifrada, e não "site confiável". Desconfie de alternativas que prometem segurança total.'
      },
      fontes: [f('Cartilha de Segurança para Internet (CERT.br)', U.cert)]
    },

    /* ===================== DIREITO CONSTITUCIONAL ===================== */

    {
      id: 'dco-501', materia: 'direito-constitucional', assunto: 'Direitos e garantias fundamentais', tipo: 'multipla', estilo: 'Vunesp',
      dificuldade: 2, objetivos: POL,
      enunciado: 'Nos termos da Constituição Federal, a casa é asilo inviolável do indivíduo. Durante a noite, agentes de segurança pública podem nela penetrar sem o consentimento do morador nas hipóteses de',
      alternativas: [
        'flagrante delito, desastre ou para prestar socorro.',
        'cumprimento de mandado judicial de busca e apreensão, em qualquer horário.',
        'determinação de delegado de polícia, desde que fundamentada.',
        'ordem do Ministério Público, nos casos de crime hediondo.',
        'suspeita fundada de crime permanente, ainda que sem flagrante.'
      ],
      resposta: 0,
      explicacao: {
        resumo: 'Sem consentimento, de noite, só em flagrante delito, desastre ou para prestar socorro (art. 5º, XI). Ordem judicial só durante o dia.',
        detalhada: 'O art. 5º, XI, determina que "a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de **flagrante delito ou desastre, ou para prestar socorro**, ou, **durante o dia, por determinação judicial**".\n\nAssim, a **ordem judicial** só autoriza o ingresso **durante o dia**, e as três primeiras hipóteses valem a **qualquer hora**. Delegado e Ministério Público não podem autorizar o ingresso forçado em domicílio, e a mera suspeita não substitui o flagrante.',
        alternativas: [
          'Correta: hipóteses válidas a qualquer hora.',
          'Errada: o mandado só vale durante o dia.',
          'Errada: só autoridade judicial determina o ingresso.',
          'Errada: o Ministério Público não tem essa competência.',
          'Errada: é preciso flagrante efetivo, e não mera suspeita.'
        ],
        dica: 'Memorize: flagrante, desastre e socorro = a qualquer hora; ordem judicial = só de dia.'
      },
      fontes: [f('Constituição Federal, art. 5º, XI', U.cf)]
    },

    {
      id: 'dco-502', materia: 'direito-constitucional', assunto: 'Remédios constitucionais', tipo: 'multipla', estilo: 'Vunesp',
      dificuldade: 2, objetivos: TJ,
      enunciado: 'Ana foi aprovada e nomeada em concurso público, mas o secretário municipal responsável se recusa a dar-lhe posse, sem fundamento legal, apesar de ela ter cumprido todos os requisitos. Para proteger direito líquido e certo, o instrumento processual adequado é o',
      alternativas: [
        'habeas corpus.',
        'mandado de segurança.',
        'habeas data.',
        'mandado de injunção.',
        'ação popular.'
      ],
      resposta: 1,
      explicacao: {
        resumo: 'Ato ilegal de autoridade pública que viola direito líquido e certo, não amparado por HC ou HD, é combatido por mandado de segurança (art. 5º, LXIX).',
        detalhada: 'O **mandado de segurança** protege direito líquido e certo, não amparado por habeas corpus nem habeas data, contra ilegalidade ou abuso de poder de autoridade pública (art. 5º, LXIX).\n\n- **Habeas corpus**: liberdade de locomoção.\n- **Habeas data**: acesso ou retificação de informações pessoais.\n- **Mandado de injunção**: falta de norma regulamentadora que inviabilize direitos constitucionais; aqui a norma existe.\n- **Ação popular**: anular ato lesivo ao patrimônio público, à moralidade etc., proposta por cidadão.',
        alternativas: [
          'Errada: não há restrição à locomoção.',
          'Correta: direito líquido e certo contra ato de autoridade.',
          'Errada: não se trata de informações pessoais.',
          'Errada: não falta norma regulamentadora.',
          'Errada: o objetivo é proteger direito individual de Ana, e não anular ato lesivo ao patrimônio público.'
        ],
        dica: 'Direito líquido e certo + autoridade pública ilegal = mandado de segurança. É o remédio "residual".'
      },
      fontes: [f('Constituição Federal, art. 5º, LXIX', U.cf)]
    },

    {
      id: 'dco-503', materia: 'direito-constitucional', assunto: 'Administração Pública na Constituição', tipo: 'multipla', estilo: 'Vunesp',
      dificuldade: 1, objetivos: GER,
      enunciado: 'De acordo com o art. 37 da Constituição Federal, o prazo de validade do concurso público será de',
      alternativas: [
        'um ano, prorrogável duas vezes, por igual período.',
        'dois anos, improrrogável.',
        'três anos, prorrogável uma vez, por igual período.',
        'até dois anos, prorrogável uma vez, por igual período.',
        'quatro anos, improrrogável.'
      ],
      resposta: 3,
      explicacao: {
        resumo: 'Art. 37, III: validade de até dois anos, prorrogável uma vez, por igual período.',
        detalhada: 'O art. 37, III, da CF: "o prazo de validade do concurso público será de **até dois anos**, **prorrogável uma vez**, por igual período". Assim, o edital pode fixar prazo menor que dois anos, mas, se prorrogar, a prorrogação é **única** e de mesma duração que a validade inicial.\n\nA prorrogação é decisão discricionária da Administração, e não direito dos aprovados.',
        alternativas: [
          'Errada: só há uma prorrogação.',
          'Errada: o prazo é prorrogável.',
          'Errada: o prazo máximo inicial é de dois anos.',
          'Correta: art. 37, III.',
          'Errada: quatro anos ultrapassa o limite de até dois anos do art. 37, III, da CF.'
        ],
        dica: 'Decore o "até dois anos" e a "prorrogação única, por igual período".'
      },
      fontes: [f('Constituição Federal, art. 37', U.cf)]
    }
  ];

  Banco.registrar({ questoes: questoes });
})();
