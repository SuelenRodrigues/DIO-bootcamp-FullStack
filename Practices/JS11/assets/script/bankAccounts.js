class BankAccount{
    constructor(branch = '0145', accNumber = 'IE6750', type = 'SAVING'){
        this._branch = branch;
        this._accNumber = accNumber;
        this._type = type;
        this._balance = 0;
        this._creditCard = 'no';
        
    }

    get balance(){
        return this._balance;
    }

    get branch(){
        return this._branch;
    }

    get accNumber(){
        return this._accNumber;
    }

    get type(){
        return this._type;
    }

    get creditCard(){
        return this._creditCard;
    }

    set balance(value){
        this._balance = value;
    }

    set branch(value){
        this._branch = value;
    }

    set accNumber(value){
        this._accNumber = value;
    }

    set type(value){
        this._type = value;
    }

    set creditCard(value){
        this._creditCard = value;
    }

    withdraw(value){
        if(value > this._balance){
            return 'Operation Denied';
        }

        this._balance = this._balance - value;
        return this._balance;
    }

    deposit(value){
        this._balance = _balance + value;
        return this._balance;
    }
}

class CheckingAccount extends BankAccount{
    constructor(branch, number, creditCard){
        super(branch, number, creditCard);
        this.type = 'CHECKING';
    }
}

class SavingAccount extends BankAccount{
    constructor(branch, number){
        super(branch, number);
        this.type = 'SAVING';
    }
}

class StudentAccount extends BankAccount{
    constructor(branch, number,){
        super(branch, number);
        this.type = 'STUDENT';
    }

    withdraw(value){
        if(value > 500){
            return 'Not allowed: over 500!';
        } else{
            this._balance = this._balance - value;
            return this._balance;
        }
    }
}

export {BankAccount, CheckingAccount, SavingAccount, StudentAccount};

// class BankAccount {
// 	constructor(agencia, numero, tipo) {
// 		this.agencia = agencia;
// 		this.numero = numero;
// 		this.tipo = tipo;
// 		this._saldo = 0;

        
// 	}

// 	sacar(valor) {
// 		if (valor > this._saldo) {
// 			return console.log('Saque negado; saldo insuficiente!');
// 		}

// 		this._saldo = this._saldo - valor;
// 		return this._saldo;
// 	}

// 	depositar(valor) {
// 		this._saldo = this._saldo + valor;
// 		return this._saldo;
// 	}

// 	set saldo(valor) {
// 		this._saldo = valor;
// 	}

// 	get saldo() {
// 		return this._saldo;
// 	}
// }

// class ContaCorrente extends ContaBancaria {
// 	constructor(agencia, numero, cartaoCredito) {
// 		super(agencia, numero);
// 		this.tipo = 'corrente';
// 		this._cartaoCredito = cartaoCredito;
// 	}

// 	set cartaoCredito(valor) {
// 		this._cartaoCredito = valor;
// 	}

// 	get cartaoCredito() {
// 		return this._cartaoCredito;
// 	}
// }

// class ContaPoupanca extends ContaBancaria {
// 	constructor(agencia, numero) {
// 		super(agencia, numero);
// 		this.tipo = 'poupança';
// 	}
// }

// class ContaUniversitaria extends ContaBancaria {
// 	constructor(agencia, numero) {
// 		super(agencia, numero);
// 		this.tipo = 'universitária';
// 	}

// 	sacar(valor) {
// 		if (valor > 500) {
// 			return 'Operação negada.';
// 		}

// 		this._saldo = this._saldo - valor;
// 		return this._saldo;
// 	}
// }

// const minhaConta = new ContaCorrente(1, 211, true);
// const contaUni = new ContaUniversitaria(2, 333);

//export {BankAccount}