namespace casting {
    let idade: any = 25;
    (idade as number).toFixed();
    (idade as string).length;
    (idade as string[]).forEach(x => {
        console.log(x);
    })

    let nome: string = 35 as unknown as string;
    nome.length;
}

/*
O que é o 'as' em TypeScript?
Em TypeScript, as é usado para fazer type assertion, ou seja, dizer ao compilador que você tem certeza do tipo de uma variável naquele ponto do código.

Quando usar o 'as'?
O as é útil quando:
Você recebe dados de fora (ex: API, formulário, localStorage).
O compilador não consegue inferir o tipo sozinho.
Você tem certeza que o valor é de um tipo específico.
*/