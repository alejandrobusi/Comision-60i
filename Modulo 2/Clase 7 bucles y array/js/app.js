// const inputUser = parseFloat(prompt('Ingresa una nota del 0 al 10.'));
// let resultado = '';

// switch (true) {
//   case (inputUser >= 0 && inputUser <=2):
//     resultado = 'Muy deficiente'
//     break;
//   case (inputUser >= 3 && inputUser <= 4):
//     resultado = 'Insuficiente'
//   break;
//   case (inputUser >= 5 && inputUser <= 6):
//     resultado = 'Suficiente'
//     break;
//   case (inputUser === 7):
//     resultado = 'Bien'
//   break;
//   case (inputUser >= 8 && inputUser <= 9):
//     resultado = 'Notable'
//     break;
//   case (inputUser === 10):
//     resultado = 'Sobresaliente'
//     break;
  
//   default:
//     resultado = 'Corroboora los datos de entrada'
//     break;
// }

// document.write(resultado);
let i;
let e;
for (i = 0; i <= 30; i++) {
  for (let e = 0; e < i; e++) {
    document.write(i)
  }
  document.write('<br/>')
}

//---------- Arrays
const nuevoArray = [185, 1578, 12, 'hola', false, ['a', 'b', 'c'], true, {name: 'Ale'}];
// console.log(nuevoArray.length);
// console.log(nuevoArray[nuevoArray.length -1]);

for (let i = 0; i < nuevoArray.length; i++) {
  if (Array.isArray(nuevoArray[i])) {
    for (let e = 0; e < nuevoArray[i].length; e++) {
      console.log(nuevoArray[i][e]);
    }
  }
}
//añadir un elemento al final
// nuevoArray.push('adios');
// //reemplazar un elemento con el indice
// nuevoArray[0] = 10
// //Agregar un elemento en la posicion que quieras
// nuevoArray.splice(1,0,900);
//agregar un nuevo elemento y eliminar el actual
//nuevoArray.splice(1,2,'bye');
//eliminar elementos
// nuevoArray.splice(1,2);
//nuevoArray.splice(2);


//eliminar el ultimo elemento
// nuevoArray.pop();
// //eliminar primer item
// nuevoArray.shift();
// //añadior un nuevo item al principio
// nuevoArray.unshift('jeje');
// console.log(nuevoArray);

// retornar el indice de un elemento (si no encuentra el valor este retorna -1)
console.log(nuevoArray.indexOf('as'));
// determinar si un array contiene un valor especifico (retorna boolean)
console.log(nuevoArray.includes('hola'));
//Invertir orden en un array
// console.log(nuevoArray.reverse());

//ordenar en orden alfabetico o numerico
let numbers = [10, 120, 21 ,14];
let nombres = ['Ale', 'xavier', 'el8quesos'];
console.log(numbers.sort())
console.log(nombres.sort());
//Concatener arrays
console.log(numbers.concat(nombres))
// retornar los datos de un array separados por un caracter especifico
console.log(numbers.join('*'));
// extraer una parte especifica de un array
const newArrSlice = nuevoArray.slice(1,4);
console.log(newArrSlice);
