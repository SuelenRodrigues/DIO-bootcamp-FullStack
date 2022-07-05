var list = document.getElementById('inputList');
var button = document.getElementById('submit');


button.addEventListener('click', addToList);

function addToList(){
   
    console.log(list);
    var input = document.getElementById('to-do');
    var inputValue = input.value;
    if(inputValue == null || inputValue.trim() == ''){
        alert('Please enter a valid task');
    } else{
        var div = document.createElement('div');
        var inputCheck = document.createElement('input');
        inputCheck.type = 'checkbox';
        const taskLabel = document.createElement('label');
	    const taskDescriptionNode = document.createTextNode(inputValue);
        taskLabel.setAttribute('for', inputValue);
	    taskLabel.appendChild(taskDescriptionNode);
    
        div.appendChild(inputCheck);
        div.appendChild(taskLabel);
    
        list.appendChild(div);

        inputCheck.addEventListener('click', completeTask);
        
    }
    input.value = ''
    
}

function completeTask(){

}