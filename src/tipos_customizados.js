"use strict";
const alunos = [
    {
        nome: 'Carlos',
        cursos: ['Front-end', 'UX/UI'],
        idade: 27,
    },
    {
        nome: 'Ana',
        cursos: ['Front-end', 'Python'],
        idade: 27,
    },
];
alunos.push({
    nome: 'Julia',
    cursos: ['Arquitetura'],
    idade: 29
});
const novoAluno = {
    nome: 'Lucas',
    idade: 32,
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
/*
Função que recebe um parâmetro do tipo aluno.
Ela só imprime o nome do aluno.
Aqui o TypeScript garante que aluno.nome sempre estará disponível, pois é um campo obrigatório.
*/
