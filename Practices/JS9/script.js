const BODY = document.getElementsByTagName('body')[0];
const BUTTON = document.getElementById('select-mode');
const FOOTER = document.getElementsByTagName('footer')[0];
const H1 = document.getElementsByTagName('h1')[0];


BUTTON.addEventListener('click', toggleMode);

function toggleMode(){
    // console.log(body);
    // console.log(button);
    // console.log(footer);
    BODY.classList.toggle('dark-mode');
    BUTTON.classList.toggle('dark-mode');
    FOOTER.classList.toggle('dark-mode');
    if(BODY.classList.contains('dark-mode')){
        H1.innerHTML = 'Dark Mode ON';
        BUTTON.innerHTML = 'Light Mode'
    } else{
        H1.innerHTML = 'Light Mode ON';
        BUTTON.innerHTML = 'Dark Mode';
    }
}