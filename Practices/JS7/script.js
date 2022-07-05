import {people} from './people.js';

let selectDiv = document.getElementById('select');
let results = document.getElementById('results');
let callBtn = document.getElementById('callBtn');
callBtn.addEventListener('click', callMethod);
let applyBtn = document.getElementById('applyBtn');
applyBtn.addEventListener('click', applyMethod);
let years = document.getElementById('years');
let select = document.createElement('select');
select.setAttribute('id', 'myList');

function print(){
    console.log(people);
}

//print();

function createDropDownMenu(){
    let option1 = document.createElement('option');
    option1.innerHTML = '--Choose person--';
    select.appendChild(option1);

   // console.log('depois de criar select');

    for(let i = 0; i < people.length; i++){
        let option = document.createElement('option');
        option.innerHTML = `${people[i].name} - ${people[i].age} years`;
        select.appendChild(option);
    }

    selectDiv.appendChild(select);
}

function calculateAge(years) {
	return `In ${years} years, ${this.name} will be ${
		this.age + years
	} years old.`;
}

function callMethod(){
    let selection = select.options[select.selectedIndex].text;
    // if(selection == '--Choose person--'){
    //     console.log(selection);
    //     alert('Please select a person');
    //     return;
    // }

    let name = selection.split(' - ')[0];
    console.log(name);
    selection = Number(selection.split('- ')[1].split(' ')[0]);
    console.log(selection);
    console.log(typeof(selection));
    let newObj = {
        name: name,
        age: selection
    };

    let selectedYears = Number(document.getElementById('years').value);
    console.log(selectedYears);
    console.log(typeof(selectedYears));

   results.innerHTML = calculateAge.call(newObj, selectedYears);
}

function applyMethod(){
    let selection = select.options[select.selectedIndex].text;
    

    let name = selection.split(' - ')[0];
    console.log(name);
    selection = Number(selection.split('- ')[1].split(' ')[0]);
    console.log(selection);
    console.log(typeof(selection));

    let newObj = {
        name: name,
        age: selection
    };

    let selectedYears = Number(document.getElementById('years').value);
    console.log(selectedYears);
    console.log(typeof(selectedYears));

   results.innerHTML = calculateAge.apply(newObj,[selectedYears]);

}

createDropDownMenu();