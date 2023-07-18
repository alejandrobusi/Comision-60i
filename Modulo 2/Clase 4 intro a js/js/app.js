const saludo = 'Heey';
function test () {
  alert(saludo);
};
// este es un comentario
/* este es
un 
comentario
multilinea */

// console.log(saludo);
// console.error('Ha ocurrido un error.');
// console.warn('Esa libreria esta por deprecar');
console.log( 50 + "50");

// function getDataForm () {
//   const nameInput = document.getElementById('name').value;
//   console.log(nameInput);
// }

let firstNameUser = 'Alejandro';
const lastNameUser = 'Busi';



firstNameUser = 'Maxi';


console.log(firstNameUser, lastNameUser);

let cadenaDeTexto = 'un texto';
let numero = 54;
let boolean = true;
let noDefinido = undefined;
let valorNulo = null;

let frutas = ['manzana', 'pera', 'frutilla'];
let personona = {
  nombre: 'Ale',
  edad: 21,
  apellido: 'Busi'
};

console.log(typeof(boolean));
console.log(personona);

// if (boolean) {
//   console.log('el boolean es verdadero');
// } else {
//   console.log('el booleano es falso');
// }


function testFunction () {
  let testScope = 'test test test';
  return testScope;
}
testFunction();

const testScope = testFunction();
console.log(testScope);
 
