/*
nesta atividade, vamos testar os conceitos de POO simulando a criação de diversos tipos de contas bancárias
e operações disponíveis em cada uma:
1 crie a classe contaBancaria com os parâmetros agencia, numero, tipo e saldo.
2 dentro da contaBancaria, construa o getter e setter de saldo.
3 dentro da contaBancaria, crie os métodos depositar e sacar.
4 crie uma classe filha chamada contaCorrente que herda todos os parâmetros e possua o parâmetro cartaoCredito.
5 ainda em contaCorrente, construa o getter e o setter de cartaoCredito.
6 ainda em contaCorrente, faça com que o tipo seja 'conta corrente' por padrão.
7 crie uma classe filha contaPoupanca, que herda todos os parâmetros da contaBancaria.
8 crie uma classe filha contaUniversitaria que herda todos os parâmetros da contaBancaria.
9 faça com que o método saque da contaUniversitaria apenas seja capaz de sacar valores menores de 500 reais.
*/

class contaBancaria { //conta bancária
    constructor(agencia,numero,tipo,saldo){ //construtor definindo as características da class pai.
        this.agencia= agencia;
        this.numero= numero;
        this.tipo= tipo;
        this._saldo= 0; //como é necessário ter um getter e um setter, não pode-se repetir o nome como os outros, então é dado um nome diferente.
    }

    get saldo(){return this._saldo;} 
    set saldo(valor){this._saldo = valor;}

    sacar(valor){                           //função sacar
        if (valor>this._saldo){
            return "Operação negada, saldo indisponível na conta."
        }
        this._saldo=this._saldo - valor
        return this._saldo;
    }                                       
    depositar(valor){                       //função depositar
        this._saldo=this._saldo+valor;
        return this._saldo;
    }
} 

class ContaCorrente extends contaBancaria { //conta corrente
    constructor(agencia,numero,cartaoCredito){
        super(agencia,numero);
        this.tipo= 'conta Corrente';
        this._cartaoCredito=cartaoCredito;    
    }


    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito=valor;
    }
}

class ContaPoupanca extends contaBancaria { //conta poupança
    constructor(agencia,numero){
        super(agencia,numero);
        this.tipo= 'conta Poupança';
    }

}

class contaUniversitaria extends contaBancaria { //conta universitaria
    constructor(agencia,numero){
        super(agencia,numero);
        this.tipo= 'conta universitária';
    }
    
    sacar(valor){
        if (valor>500){
            return "operação negada: Limite de saque inferior a valor requisitado."
        } else if(valor>this._saldo){
            return "operação negada: saldo insuficiente."
        }
        this._saldo=this._saldo-valor;
    }
}
