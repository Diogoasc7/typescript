/*
type permite que você defina estruturas de dados personalizadas, para reutilizar em variáveis, funções, objetos, etc.

Aqui você define um tipo chamado aluno.
O campo cursos é opcional, ou seja, um objeto do tipo aluno pode ou não ter esse campo.
Isso permite criar alunos com ou sem cursos.
*/
type aluno = {
    nome: string;
    cursos?: string[]; // O "?" indica que esse campo é opcional
    idade: number;
}

const alunos: aluno[] = [  //Cria um array tipado: aluno[], ou seja, só pode conter objetos do tipo aluno.
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
]

alunos.push({ // Adiciona mais um aluno ao array. Também segue corretamente a estrutura do tipo aluno.
    nome: 'Julia',
    cursos: ['Arquitetura'],
    idade: 29
})

const novoAluno: aluno = { // Cria um novo aluno sem cursos, o que é permitido porque cursos é opcional.
    nome: 'Lucas',
    idade: 32,
}

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome);
}
/*
Função que recebe um parâmetro do tipo aluno.
Ela só imprime o nome do aluno.
Aqui o TypeScript garante que aluno.nome sempre estará disponível, pois é um campo obrigatório.
*/
