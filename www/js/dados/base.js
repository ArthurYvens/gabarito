/* Matérias e objetivos. Os pesos dizem quanto cada matéria pesa no simulado montado para o objetivo. */
Banco.registrar({
  materias: [
    { id: 'portugues', nome: 'Língua Portuguesa', sigla: 'POR', area: 'Linguagens' },
    { id: 'ingles', nome: 'Língua Inglesa', sigla: 'ING', area: 'Linguagens' },
    { id: 'matematica', nome: 'Matemática', sigla: 'MAT', area: 'Exatas' },
    { id: 'raciocinio-logico', nome: 'Raciocínio Lógico', sigla: 'RLM', area: 'Exatas' },
    { id: 'fisica', nome: 'Física', sigla: 'FIS', area: 'Ciências da Natureza' },
    { id: 'quimica', nome: 'Química', sigla: 'QUI', area: 'Ciências da Natureza' },
    { id: 'biologia', nome: 'Biologia', sigla: 'BIO', area: 'Ciências da Natureza' },
    { id: 'historia', nome: 'História', sigla: 'HIS', area: 'Ciências Humanas' },
    { id: 'geografia', nome: 'Geografia', sigla: 'GEO', area: 'Ciências Humanas' },
    { id: 'informatica', nome: 'Informática', sigla: 'INF', area: 'Tecnologia' },
    { id: 'direito-constitucional', nome: 'Direito Constitucional', sigla: 'DCO', area: 'Direito' },
    { id: 'direito-administrativo', nome: 'Direito Administrativo', sigla: 'DAD', area: 'Direito' },
    { id: 'direito-penal', nome: 'Direito Penal', sigla: 'DPE', area: 'Direito' },
    { id: 'conhecimentos-bancarios', nome: 'Conhecimentos Bancários', sigla: 'CBA', area: 'Finanças' },
    // Questões oficiais do INEP (ENEM e ENCCEJA) vêm classificadas por área, como o INEP faz.
    { id: 'enem-linguagens', nome: 'Linguagens (provas oficiais)', sigla: 'LC', area: 'Provas oficiais do INEP' },
    { id: 'enem-natureza', nome: 'Ciências da Natureza (provas oficiais)', sigla: 'CN', area: 'Provas oficiais do INEP' },
    { id: 'enem-humanas', nome: 'Ciências Humanas (provas oficiais)', sigla: 'CH', area: 'Provas oficiais do INEP' }
  ],

  objetivos: [
    {
      id: 'enem', nome: 'ENEM e vestibulares',
      descricao: 'Prova de 180 questões objetivas em quatro áreas, mais a redação dissertativo-argumentativa.',
      pesos: { portugues: 3, ingles: 1, matematica: 3, fisica: 1.2, quimica: 1.2, biologia: 1.2, historia: 1.5, geografia: 1.5, 'enem-linguagens': 1, 'enem-natureza': 2, 'enem-humanas': 1 },
      estilos: ['ENEM'], redacao: 'enem', minutosPorQuestao: 3
    },
    {
      id: 'concursos-gerais', nome: 'Concursos administrativos',
      descricao: 'Técnico e analista de órgãos federais, estaduais e municipais: base comum de Português, RLM, Informática e Direito.',
      pesos: { portugues: 3, 'raciocinio-logico': 2, informatica: 1.5, 'direito-constitucional': 1.5, 'direito-administrativo': 1.5, matematica: 1 },
      estilos: ['CEBRASPE', 'FGV', 'FCC', 'Vunesp'], redacao: 'concurso', minutosPorQuestao: 2.5
    },
    {
      id: 'tribunais', nome: 'Tribunais',
      descricao: 'TRT, TRE, TRF, TJ e tribunais superiores: peso forte em Direito Constitucional e Administrativo.',
      pesos: { portugues: 2.5, 'direito-constitucional': 2.5, 'direito-administrativo': 2.5, 'raciocinio-logico': 1, informatica: 1, 'direito-penal': 1 },
      estilos: ['FCC', 'FGV', 'CEBRASPE'], redacao: 'concurso', minutosPorQuestao: 2.5
    },
    {
      id: 'policial', nome: 'Carreiras policiais',
      descricao: 'PF, PRF, Polícia Civil e Militar: Direito Penal, Constitucional e prova no estilo certo ou errado.',
      pesos: { portugues: 2, 'direito-penal': 3, 'direito-constitucional': 2, 'direito-administrativo': 1.5, 'raciocinio-logico': 1.5, informatica: 1 },
      estilos: ['CEBRASPE', 'FGV', 'Vunesp'], redacao: 'concurso', minutosPorQuestao: 2
    },
    {
      id: 'bancarios', nome: 'Bancários',
      descricao: 'Banco do Brasil, Caixa e bancos estaduais: conhecimentos bancários, matemática financeira e vendas.',
      pesos: { portugues: 2, matematica: 2, 'conhecimentos-bancarios': 3, informatica: 1.5, ingles: 1, 'raciocinio-logico': 1 },
      estilos: ['Cesgranrio', 'CEBRASPE'], redacao: 'concurso', minutosPorQuestao: 2.5
    },
    {
      id: 'estatais', nome: 'Estatais',
      descricao: 'Petrobras, Correios, Eletrobras e afins: base de Português, Matemática e conhecimentos gerais.',
      pesos: { portugues: 2.5, matematica: 2, 'raciocinio-logico': 1.5, informatica: 1.5, ingles: 1 },
      estilos: ['Cesgranrio', 'CEBRASPE', 'FGV'], redacao: 'concurso', minutosPorQuestao: 2.5
    },
    {
      id: 'oab', nome: 'Exame da OAB',
      descricao: '1ª fase com 80 questões objetivas; aqui focamos nas disciplinas públicas e penais.',
      pesos: { 'direito-constitucional': 3, 'direito-administrativo': 2, 'direito-penal': 2.5 },
      estilos: ['OAB/FGV'], redacao: 'concurso', minutosPorQuestao: 3
    },
    {
      id: 'livre', nome: 'Estudo livre',
      descricao: 'Sem prova marcada: aprenda e revise qualquer matéria no seu ritmo.',
      pesos: {}, estilos: [], redacao: 'enem', minutosPorQuestao: 3
    }
  ]
});
