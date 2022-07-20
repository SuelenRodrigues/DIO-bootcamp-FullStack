"use strict";
var botaoAtualizar = document.getElementById('update-balance');
var botaoLimpar = document.getElementById('clear-balance');
var soma = document.getElementById('sum');
var balance = document.getElementById('balance');
balance.innerHTML = "0";
function somarAoSaldo(soma) {
    var sum = Number(balance.innerHTML) + soma;
    balance.innerHTML = sum.toString();
}
function limparSaldo() {
    balance.innerHTML = '0';
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });
}
if (botaoLimpar) {
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
//# sourceMappingURL=challenge3.js.map