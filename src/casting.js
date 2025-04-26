"use strict";
var casting;
(function (casting) {
    let idade = 25;
    idade.toFixed();
    idade.length;
    idade.forEach(x => {
        console.log(x);
    });
    let nome = 35;
    nome.length;
})(casting || (casting = {}));
/*
O que é o 'as' em TypeScript?
Em TypeScript, as é usado para fazer type assertion, ou seja, dizer ao compilador que você tem certeza do tipo de uma variável naquele ponto do código.

Quando usar o 'as'?
O as é útil quando:
Você recebe dados de fora (ex: API, formulário, localStorage).
O compilador não consegue inferir o tipo sozinho.
Você tem certeza que o valor é de um tipo específico.
*/ 
