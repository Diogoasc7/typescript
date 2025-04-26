class Pessoa {
    nome: string;
    renda?: number;
/*
nome: string; → A propriedade nome é obrigatória e será acessível por qualquer parte do código (por padrão, public).
renda?: number; → A propriedade renda é opcional, ou seja, pode ou não ser definida ao criar a instância.
*/

    constructor(nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda;
    }
/*
O constructor define o que será executado ao instanciar um objeto da classe. Atribui nome e renda às propriedades da instância.
*/

    dizOla(): string {
        return `${this.nome} disse bi`
    }
}
/*
O método dizOla retorna uma string com o nome da pessoa. É um método público (por padrão).
*/

class ContaBancaria {
    protected saldo: number = 0;
    public numeroConta: number;
/*
protected saldo: number = 0 -> protected significa que apenas a própria classe e suas subclasses podem acessar essa propriedade.
Inicializado com 0.
public numeroConta: number -> public é redundante aqui (é o padrão). Pode ser acessado de qualquer lugar.
*/

    constructor(numeroDaConta: number) { // O constructor define o número da conta ao criar a instância.
        this.numeroConta = numeroDaConta;
    }

    static retornaNumeroDoBanco() {
        return 125;
    }
/*
static define um método da classe, e não da instância.
Pode ser chamado como ContaBancaria.retornaNumeroDoBanco() (sem precisar criar um objeto).
*/

    private getSaldo() {
        return this.saldo;
    }
/*
private significa que esse método só pode ser acessado dentro da própria classe. Nem subclasses nem objetos conseguem acessá-lo.
*/

    depositar(valor: number) { // Método público para adicionar valor ao saldo.
        this.saldo += valor;
    }
}

class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}
/*
Usa extends para herdar todas as propriedades e métodos da classe ContaBancaria.
Sobrescreve o método depositar. Aqui, ao invés de somar ao saldo, define o saldo como o dobro do valor depositado.
Isso só é possível porque saldo é protected. Se fosse private, a subclasse não teria acesso.
*/

const contaDoPedro = new ContaBancariaPessoaFisica(123456) // Cria uma nova instância da subclasse, com o número da conta 123456.
ContaBancaria.retornaNumeroDoBanco(); // Chamada ao método estático diretamente na classe ContaBancaria.