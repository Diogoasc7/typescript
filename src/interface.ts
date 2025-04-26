/*
O que é uma interface em TypeScript?
Uma interface é um contrato que define a estrutura de um objeto ou classe — ou seja, ela especifica quais propriedades e métodos um objeto deve ter, sem implementar a lógica.

O implements é uma palavra-chave usada em TypeScript para indicar que uma classe está seguindo o contrato de uma interface.
Ou seja:
Quando uma classe implementa uma interface, ela é obrigada a ter todas as propriedades e métodos definidos nessa interface, com os mesmos tipos.
*/

class Conta {
    numeroDaConta: number;
    saldo: number = 0;

    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta;
    }
}
/*
Classe base com:
numeroDaConta (número da conta).
saldo, iniciado com 0.
O constructor define o número da conta ao criar uma instância.
*/

class ContaSalario extends Conta  {
    depostiar(valor: number) {
        this.saldo += valor;
    }
}
/*
Herdeira da classe Conta usando extends.
Tem um método chamado depostiar, que parece um erro de digitação — o correto seria depositar.
*/

interface ITransacional {
    transferir: (valor: number, destinatario: Conta) => boolean;
    taxaTransferencia: number;
}
/*
Define um contrato para objetos que:
Tenham um método transferir, que recebe valor e destinatario e retorna um boolean.
Tenham a propriedade taxaTransferencia (número).
*/

interface IExemplo2 {
    cnpj: number;
}

interface IExemplo3 extends IExemplo2 {
    telefone: number;
}

class ContaCorrente extends Conta implements ITransacional {
    transferir(valor: number, destinatario: Conta) {
        destinatario.saldo += (valor - this.taxaTransferencia)
        return true;
    };
    taxaTransferencia: number = 0;
}
/*
Herda de Conta.
Implementa a interface ITransacional, ou seja, é obrigada a ter o método transferir e a propriedade taxaTransferencia.
*/