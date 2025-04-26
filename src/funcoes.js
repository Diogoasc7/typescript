"use strict";
// Função tradicional: calcula a área de um retângulo
function calculaArea(base, altura) {
    // base e altura são obrigatoriamente números
    // Retorna um número (base * altura)
    return base * altura;
}
// Mesma função, agora com sintaxe de arrow function (função de seta)
const calculaArea2 = (base, altura) => base * altura;
// Tipagem continua igual: dois parâmetros number e retorno number
// Função com parâmetro rest e retorno void (sem retorno)
function somar(...numeros) {
    // "...numeros" permite passar vários valores numéricos
    // O tipo number[] garante que todos os itens do array sejam números
    // void indica que essa função não retorna nada, só executa uma ação
    console.log(numeros);
}
// Função que retorna dois tipos possíveis: string OU number
function teste() {
    if (10 > 5) {
        // Se a condição for verdadeira, retorna uma string
        return 'dez maior que cinco';
    }
    else {
        // Se for falsa, retorna um número
        return 5;
    }
}
// Aqui armazenamos o retorno da função teste()
// O tipo da variável resultadoDeTeste é automaticamente inferido como "string | number"
const resultadoDeTeste = teste();
