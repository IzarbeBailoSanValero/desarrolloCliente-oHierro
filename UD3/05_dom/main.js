
window.onload = () => {
    
    
let divs = document.getElementsByTagName('div');
console.log(`div ${divs.length}`);

// Listar todos los elementos con style == 'buttons'
//opcion 1
let buttons = document.getElementsByClassName('buttons');
console.log(`butons ${buttons.length}`);
//opcion 2
let buttonsConQuery = document.querySelectorAll('.buttons');
console.log(`butons ${buttonsConQuery.length}`);

// Listar 1 div con class == buttons
let firstDivWithClass = document.querySelector('div.buttons');
console.log(`buttons ${firstDivWithClass}`);



// Listar TODOS los divs con class == buttons
let divsButtons = document.querySelectorAll('div.buttons');
console.log(`butons ${divsButtons.length}`);



}