import {students} from './students.js';

var btnAll = document.getElementById('btnAll');
var btnPass = document.getElementById('btnPass');
var results = document.getElementById('results');

btnAll.addEventListener('click', showAll);
btnPass.addEventListener('click', showPass);

function showAll(){
  createTable(students, 'All Students');  

}

function showPass(){
    let passed = {};
    let size = Object.keys(students).length;
    for (let i = 1; i <= size; i++){
        let grade = Number(students[i].grade);
           // console.log(typeof(grade));
        if(grade >= 7){
            let num = i.toString();
            //console.log(typeof(num));
           passed[num] = students[i];
        }
    }

    console.log(passed);

    createTable(passed, 'Only passed');

}

function createTable(obj, type){
    results.innerHTML = "";
    let heading = document.createElement('h2');
    heading.innerHTML = type;
    results.appendChild(heading);
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = 'Student Number';
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = 'Name';
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = 'Grade';

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    thead.appendChild(row_1);

    let size = Object.keys(students).length;
    console.log(size);
    for(let i = 1; i <= size; i++){

        if(!obj[i]) continue;
        let column1 = document.createElement('tr');
        let column1_data = document.createElement('td');
        column1_data.innerHTML = i;
        let column2_data = document.createElement('td');
        console.log(obj[i]);
        column2_data.innerHTML = `${obj[i].firstName} ${obj[i].lastName}`;
        let column3_data = document.createElement('td');
        column3_data.innerHTML = obj[i].grade; 

        column1.appendChild(column1_data);
        column1.appendChild(column2_data);
        column1.appendChild(column3_data);
        tbody.appendChild(column1);
        console.log('passou');
        
        
    }


    table.appendChild(thead);
    table.appendChild(tbody);
    results.appendChild(table);
}