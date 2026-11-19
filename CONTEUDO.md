# Formato do conteúdo

Cada arquivo em `js/dados/` chama `Banco.registrar({ questoes: [...], aulas: [...] })`.
Matérias e objetivos válidos estão em `js/dados/base.js`. As regras de validação estão em
`js/banco.js` (`validarQuestao`, `validarAula`). Rode `node tools/validar.js` depois de escrever.

## Questão

```js
{
  id: 'dco-001',                      // prefixo da matéria + número, único
  materia: 'direito-constitucional',  // id de base.js
  assunto: 'Direitos e garantias fundamentais', // grafia idêntica em todas as questões do mesmo assunto
  tipo: 'multipla',                   // 'multipla' (4 ou 5 alternativas) ou 'certo-errado'
  estilo: 'FCC',                      // CEBRASPE | FGV | FCC | Cesgranrio | Vunesp | ENEM | OAB/FGV | Outra
  dificuldade: 2,                     // 1 fácil, 2 média, 3 difícil
  objetivos: ['concursos-gerais', 'tribunais', 'oab'],
  textoBase: '...',                   // opcional: texto de apoio
  enunciado: '...',
  alternativas: ['...', '...', '...', '...', '...'], // só em 'multipla', sem a letra na frente
  resposta: 2,                        // índice (0 = A) em 'multipla'; true (Certo) / false (Errado) em 'certo-errado'
  explicacao: {
    resumo: 'Uma ou duas frases com a resposta e o porquê.',
    detalhada: 'Explicação profunda, didática, em parágrafos separados por \\n\\n. Pode usar **negrito** e listas com linhas começando por "- ".',
    alternativas: ['Por que A está errada', '...'], // opcional em 'multipla': um comentário por alternativa
    dica: 'Macete ou pegadinha típica da banca.'      // opcional
  },
  fontes: [ { titulo: 'Constituição Federal, art. 5º', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm' } ]
}
```

Questão de prova real importada pode ter `prova: { banca: 'FGV', ano: 2022, orgao: 'TJ-XX', cargo: '...' }`.
As questões deste repositório são **inéditas**, escritas no estilo da banca, e não têm `prova`.

## Aula

```js
{
  id: 'aula-dco-direitos',
  materia: 'direito-constitucional',
  assunto: 'Direitos e garantias fundamentais', // igual ao assunto das questões, para o botão "Praticar"
  titulo: '...',
  duracaoMin: 15,
  resumo: 'Duas linhas sobre o que a aula ensina.',
  secoes: [ { titulo: '...', texto: 'Parágrafos com \\n\\n, **negrito**, linhas "- " viram lista.' } ],
  pontosChave: ['...', '...', '...'],
  fontes: [ { titulo: '...', url: 'https://...' } ]
}
```
