

window.onload = function(e) {





// 1. Cambiar el título del segundo h2        ok
console.log('primer ejercicio')
let obj1 = document.querySelectorAll('article h2');
obj1[1].innerHTML = 'título h2 cambiado'
console.log(obj1[1]);





//2.  Seleccionar el elemento con id == username           ok
console.log('segundo ejercicio')
let obj2 = document.querySelector('#username')
console.log(obj2);





//3 Cambiar el color de todos los .first que estén dentro de un artículo          ok
console.log('tercer ejercicio')
let obj3 = document.querySelectorAll('article .first');
console.log(obj3);


obj3.forEach(x => x.style.color = 'red');





//4  Seleccionar todos lo elementos li con class == item           ok
console.log('cuarto ejercicio')
let obj4 = this.document.querySelectorAll('li.item')
console.log(obj4);





// 5. Seleccionar todos lo buttons dentro de class == buttons           ok
console.log('quinto ejercicio')
let obj5 = this.document.querySelectorAll('.buttons button');
console.log(obj5);



//6.  Cambiar el color de fondo del primer párrafo            ok
console.log('sexto ejercicio')
let obj6 = this.document.querySelector('p')
console.log(obj6);
obj6.style.backgroundColor = 'orange';









//7. Cambiar el color de frente (forecolor) de los elementos buttons dentro de class == buttons            ok
console.log('septimo ejercicio')
let obj7 = this.document.querySelectorAll('.buttons button');
obj7.style.color = 'blue';







}

