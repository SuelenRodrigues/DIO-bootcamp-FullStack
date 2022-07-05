const controller = new AbortController();

const decrementV = document.getElementById('decrement');
decrementV.addEventListener("click", decrement, {signal: controller.signal});
const incrementV = document.getElementById('increment');
incrementV.addEventListener("click", increment, { signal: controller.signal});



var counter = 0;
var counterNumber = document.getElementById('currentNumber');

function increment(){
    if(counter >= 10){
        //controller.abort();
    return;
    }else{
        counter++;
        counterNumber.innerHTML = counter;
        if(counter >= 5){
            counterNumber.style.color = 'darkGreen';
        }
    }
    
}

function decrement(){
    if(counter <= -10 ){
       // controller.abort();
       return;
    } else{
        counter--;
        counterNumber.innerHTML = counter;
        if(counter <= -1){
            counterNumber.style.color = "red";
        }
    }
    
}
