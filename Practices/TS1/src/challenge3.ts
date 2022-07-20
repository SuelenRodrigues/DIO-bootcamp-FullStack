let botaoAtualizar = document.getElementById('update-balance');
let botaoLimpar = document.getElementById('clear-balance');
let soma = document.getElementById('sum') as HTMLInputElement;
let balance = document.getElementById('balance') as HTMLElement;

balance.innerHTML = "0";

function somarAoSaldo(soma: number) {
    let sum = Number(balance.innerHTML) + soma;

    balance.innerHTML = sum.toString();
}

function limparSaldo() {
    balance.innerHTML = '0';
}

if(botaoAtualizar){
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });
}

if(botaoLimpar){
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}


/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */