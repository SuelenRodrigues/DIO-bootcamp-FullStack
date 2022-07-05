
const form = document.getElementById('form1');

form.onsubmit = function (e) {
    console.log(`DENTRO DA FUNCAO1`);
    e.preventDefault();
    var number1 = Number(document.getElementById('numberOne').value);
    var number2 = Number(document.getElementById('numberTwo').value);

    console.log(`NUMBER 1 ${number1} NUMBER2 ${number2}`);
    form.reset();
    checkNumbers(number1, number2);
    
}

function checkNumbers(number1, number2){
    var equality = number1 == number2;
    console.log(typeof(number1));
    var sum = number1+number2;
    var str = `The numbers ${number1} and ${number2} are ${(equality)? '' : 'not'} equal. Their sum is ${sum}, which is ${(sum>10)? 'bigger': 'smaller'} than 10 and ${(sum>20)? 'bigger': 'smaller'} than 20.`;

    var par = document.getElementById('result');
    par.innerHTML = str;
}