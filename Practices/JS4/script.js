var form = document.getElementById('form-palindrome');

form.onsubmit = function(e){
    e.preventDefault();

    let input = document.getElementById('input').value;

    form.reset();
    var result = checkPalindrome(input);
    var p = document.getElementById('result');
    p.innerHTML = result;
}

function checkPalindrome(input){

    input = input.trim();
    /*To check if the var is null, empty or undefined*/
    if(!input) return 'Please enter a valid string';

    for(var i=0; i<input.length/2; i++){
        

        
        if(input[i] !== input[input.length -1 -i]){
            return(`${input} is not a Palindrome`);
        }

       

        /*return string.split("").reverse().join("") === string*/

    }
    return `${input} is a Palindrome`;

}