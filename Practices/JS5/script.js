var form = document.getElementById('form');

form.onsubmit = function(e){
    e.preventDefault();

    let input = document.getElementById('input').value;

    form.reset();
    
    let result = changeArray(input);
    let p = document.getElementById('result');
    p.innerHTML = result;
}

function changeArray(input){
    input = input.trim();
    if(!input) return `-1`;

    input = input.split(',');
    for(let i = 0; i<input.length; i++){
        if(input[i]%2 === 0) input[i] = 0;
    }

    return input;
}