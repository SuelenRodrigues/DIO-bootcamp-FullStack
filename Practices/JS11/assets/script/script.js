import * as accounts from './bankAccounts.js';
import Modal from './modal.js';

// let acc = new accounts.SavingAccount;

// console.log(acc.balance);

const modal = Modal();

const BTN_ADD_ACCOUNT = document.getElementById('btn');
BTN_ADD_ACCOUNT.addEventListener('click', modal.open);

const BTN_CONFIRM = document.getElementById('confirm');
BTN_CONFIRM.addEventListener('click', modal.close);

const ACCOUNTS_DIV = document.querySelector('#accounts');

let bankAccounts = [];

let form = document.getElementById('add-acc-form');

form.onsubmit = function(e){
    e.preventDefault();

    console.log('dentro de on submit');
    modal.close;    
    addAccount();
    form.reset();
    
    
}

function addAccount(){
    /* 
    1 - Pegar os dados
    2 - salvar em uma array
    3 - Passar array para createTable */

    console.log('entrou em add account');

    let branch = document.querySelector('#branch').value;
    let accountNumber = document.querySelector('#account').value;
    let type = document.querySelector('input[type=radio][name=type]:checked').value;
    let newAccount;

    if(type === 'checking'){
        let creditCard = document.querySelector('input[type=radio][name=credit]:checked').value;
        console.log(creditCard);
        newAccount = new accounts.CheckingAccount(branch,accountNumber, creditCard);
        console.log('criando checking');
    } else if(type === 'student'){
        newAccount = new accounts.StudentAccount(branch,accountNumber);
        console.log('criando student');

    } else if(type === 'saving'){
        newAccount = new accounts.SavingAccount(branch,accountNumber);
        console.log('criando savings');

    }
    // console.log(`Branch: ${branch} \n Account: ${accountNumber}`);
    // console.log(`\nType: ${type}`);

    bankAccounts.push(newAccount);
    console.log('dentro de add acc');
    console.log(bankAccounts);
    
    console.log(newAccount);
    createTable();

}

function createTable(){
    ACCOUNTS_DIV.innerHTML = "";

    let btnWithdraw = '<button id="btnWithdraw" class="btns">Withdraw</button>'; 
    let btnDeposit = '<button id="btnDeposit" class="btns">Deposit</button>';

    let table = document.createElement('table');
    let tbody = document.createElement('tbody');
    let heading = document.createElement('h2');
    heading.innerHTML = "Bank Accounts";
    ACCOUNTS_DIV.appendChild(heading);
    let thead = document.createElement('thead');
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = 'Branch';
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = 'Account Number';
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = 'Type';
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = 'Credit Card';
    let heading_5 = document.createElement('th');
    heading_5.innerHTML = 'Deposit';
    let heading_6 = document.createElement('th');
    heading_6.innerHTML = 'Withdraw';
    let heading_7 = document.createElement('th');
    heading_7.innerHTML = 'Balance';

        row_1.appendChild(heading_1);
        row_1.appendChild(heading_2);
        row_1.appendChild(heading_3);
        row_1.appendChild(heading_4);
        row_1.appendChild(heading_5);
        row_1.appendChild(heading_6);
        row_1.appendChild(heading_7);
        thead.appendChild(row_1);
        table.appendChild(thead);

    for(let acc in bankAccounts){
        console.log('dentro do loop');
        console.log(bankAccounts[acc]);
        let column1 = document.createElement('tr');
        let column1_data = document.createElement('td');
        column1_data.innerHTML = bankAccounts[acc].branch;
        let column2_data = document.createElement('td');
        column2_data.innerHTML = bankAccounts[acc].accNumber;
        let column3_data = document.createElement('td');
        column3_data.innerHTML = bankAccounts[acc].type;
        let column4_data = document.createElement('td');
        column4_data.innerHTML = bankAccounts[acc].creditCard;
        let column5_data = document.createElement('td');
        column5_data.innerHTML = btnWithdraw; 
        let column6_data = document.createElement('td');
        column6_data.innerHTML = btnDeposit; 
        let column7_data = document.createElement('td');
        column7_data.innerHTML = bankAccounts[acc].balance; 

        column1.appendChild(column1_data);
        column1.appendChild(column2_data);
        column1.appendChild(column3_data);
        column1.appendChild(column4_data);
        column1.appendChild(column5_data);
        column1.appendChild(column6_data);
        column1.appendChild(column7_data);
        tbody.appendChild(column1);
        console.log('passou');
        
    }


    
    table.appendChild(tbody);
    ACCOUNTS_DIV.appendChild(table);
}