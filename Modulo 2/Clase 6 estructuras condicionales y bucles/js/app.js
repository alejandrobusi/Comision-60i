// const nombre = 'Tamara';
// const saludo = "Hola, mi nombre es";

// console.log(saludo + ' ' + nombre);
// console.log(`${saludo} ${nombre}, y estudio programacion`);

//----------------//

// const num1 = parseFloat(prompt('Ingresa el primer numero'));
// const num2 = parseFloat(prompt('Ingresa el segundo numero'));

// if (isNaN(num1) || isNaN(num2)) {
//   console.log('Solo se puede ingresar numeros.');
// } else if (num1 > num2) {
//   console.log(`Numero 1 (${num1}), es mayor a numero 2 (${num2})`);
// } else {
//   console.log(`Numero 2 (${num2}), es mayor a numero 1 (${num1})`);
// }
  
//-----Switch
//const pregunta = prompt('Ingresa una estacion de el año');
//const inputUser = pregunta == null ? '' : pregunta.toLowerCase();
// switch (inputUser) {
//   case 'primavera':
//     console.log('Claaaro rey, la primavera es lo mejor');
//     break;
//   case 'verano':
//     console.log('no, mucha humedad');
//     break;
//   default:
//     console.log('Bueno, yo tampoco tengo una estaciono favorita');
//     break;
// }
// console.log(1 > 0 && 'si');
//let test = pregunta || 'No ingreso nada';
//console.log(test);
//-----

// let num3 = 20;

// if (num3 >= 10) {
//   if (num3 <= 20) {
//     console.log('El numero esta entre 10 y 20');
//   }
// }

// if (num3 >= 10 && num3 <= 20) {
//   console.log('El numero esta entre 10 y 20');
// }

//----------loops

 let i = 120;

// while (i <= 100) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log(i);
//   i++;
// } while (i <= 100);
// const frutas = ['manzana', 'plátano', 'naranja', 'uva', 'sandía', 'kiwi', 'mango', 'piña', 'fresa', 'pera'];


// for (let index = 1; index <= 100; index++) {
//   if (frutas[index] === 'piña') {
//     console.log(`Se ha encontrado la fruta ${frutas[index]}`);
//     index = 101;
//   }
// }

// const frutas = ['manzana', 'plátano', 'naranja', 'uva', 'sandía', 'kiwi', 'mango', 'piña', 'fresa', 'pera'];


// for (let index = 1; index <= 100; index = index + 2) {
//   console.log(index);
// }

//----Array

const newArr = [true, 3, 'hola', null, ['hola', 'como', 'estas']];

console.log(newArr[5]);

console.log(newArr.length)

for(let i = 0; i <= newArr.length; i++) {
  console.log(newArr[i]);
  console.log({i:i})
}
