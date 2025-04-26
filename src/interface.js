"use strict";
/*
O que é uma interface em TypeScript?
Uma interface é um contrato que define a estrutura de um objeto ou classe — ou seja, ela especifica quais propriedades e métodos um objeto deve ter, sem implementar a lógica.

O implements é uma palavra-chave usada em TypeScript para indicar que uma classe está seguindo o contrato de uma interface.
Ou seja:
Quando uma classe implementa uma interface, ela é obrigada a ter todas as propriedades e métodos definidos nessa interface, com os mesmos tipos.
*/
class Conta {
    constructor(numeroDaConta) {
        this.saldo = 0;
        this.numeroDaConta = numeroDaConta;
    }
}
/*
Classe base com:
numeroDaConta (número da conta).
saldo, iniciado com 0.
O constructor define o número da conta ao criar uma instância.
*/
class ContaSalario extends Conta {
    depostiar(valor) {
        this.saldo += valor;
    }
}
class ContaCorrente extends Conta {
    constructor() {
        super(...arguments);
        this.taxaTransferencia = 0;
    }
    transferir(valor, destinatario) {
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true;
    }
    ;
}
/*
Herda de Conta.
Implementa a interface ITransacional, ou seja, é obrigada a ter o método transferir e a propriedade taxaTransferencia.
*/ 
