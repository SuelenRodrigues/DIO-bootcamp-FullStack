/* Practicing errors*/

function checkArray(array, number){
    
try{
    if(!array && !number) throw new ReferenceError('Please send the parameters');

    if(typeof(arr) !== 'object') throw new TypeError('Please send array of type object');

    if(typeof(number) !== 'number') throw new TypeError('Please send a number');

    let size = array.length === number;
    //console.log(typeof(number));

    if(!size) throw new RangeError('Number is not the size of array');
}
catch(e){
    if( e instanceof ReferenceError){
        console.log('Reference Error');
        console.log(e.message);
    } else if( e instanceof TypeError){
        console.log('Type Error');
        console.log(e.message);
    } else if(e instanceof RangeError){
        console.log('Range Error');
        console.log(e.message);
    } else{
        console.log('Another error');
        console.log(e.message);
    }
}
}

function print(){
    console.log(Number(4) instanceof Number);
}

let arr = [3, 4,1 ,4 , 23, 56];

checkArray('s', 8 );
