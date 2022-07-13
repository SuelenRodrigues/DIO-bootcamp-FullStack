export default function Modal(){

    const modalWrapper = document.querySelector('.modal-wrapper');
    const cancelButton = document.querySelector('#cancel');
    const checkingRadio = document.querySelector('#checking');
    const savingRadio = document.querySelector('#saving');
    const studentRadio = document.querySelector('#student');
    const creditCard = document.querySelector('.credit-card');

    cancelButton.addEventListener('click', close);
    checkingRadio.addEventListener('click', addCreditCard);
    savingRadio.addEventListener('click', removeCreditCard);
    studentRadio.addEventListener('click', removeCreditCard);

    function open(){
        modalWrapper.classList.add('active');
    }

    function close(){
        modalWrapper.classList.remove('active');
    }

    function addCreditCard(){
        creditCard.classList.add('active');
    }

    function removeCreditCard(){
        creditCard.classList.remove('active');
    }

    return{
        open, close
    }
}