let firstName = null;
// console.log(firstName);

firstName = 'Ale';

const lastName = 'Busi';

// console.log(lastName);


// if (booleanTest) {
//   console.log('es true');
// }
// operadores aritmeticcos
// console.log(4 %2);
// console.log(4 + 2);
// console.log(4 - 2);
// console.log(4 * 2);
// console.log(4 / 2);

//operadores unitarios
// num1++
// num1--
// console.log(num1);
// console.log(!booleanTest);

// let num1 = 3;
// let num2 = '3';
// let num3 = 4;
// console.log(typeof(num1 + num2));
let booleanTest = false;
// operadores relacionales
// console.log(num1 == num2);
// console.log(num1 === num2);
// console.log(num1 != num2);
// console.log(num1 !== num2);
// console.log(num1 > num3);
// console.log(num1 < num3);
// console.log(num1 >= num2);
// console.log(num1 <= num3);

// operadores logicos

// console.log( num1 === num2 && num1 > num3);
// console.log( num1 == num2 || num1 < num3);
// console.log(num1 == num2 && !(num1 > num3));

// metodos yo propiedades para numeros (number)

let num1 = 3.5;
let num2 = '154.58';
const numeroFixeado = num1.toFixed(2);

// console.log(typeof(Number(numeroFixeado)));

// console.log(parseInt(num2));
// console.log(parseFloat(num2));

// console.log(Math.abs(-5));
// console.log(Math.round(num1));
// console.log(Math.round(Math.random() * 99));
const numeroMayor = Math.max(87, 54, 94);
const numArray = [15, -58, '91'];
// console.log(Math.max(...numArray));

// console.log(Math.min(...numArray));

// console.log(Number.isInteger(num1));

// console.log(Math.floor(num1));

// console.log(Math.ceil(num1));

// metodos para string oo cadenas de texto

const textoEjemplo = 'Hola Mundo. como estan?';
let texto2 = 'Como estas?'
// console.log(textoEjemplo.length);

// console.log(textoEjemplo.toLowerCase());
// console.log(textoEjemplo.toUpperCase());
// console.log(textoEjemplo.concat(texto2));
// console.log(textoEjemplo.slice(5, 10));
// console.log(textoEjemplo.indexOf('Mundo'));
// console.log(textoEjemplo.includes('Mundo'));
// console.log(textoEjemplo.replace('Mundo', 'Chicos'));
// console.log(textoEjemplo.trim());
// console.log(textoEjemplo.split(' '));
// console.log(textoEjemplo.charAt(3));

// Estructuras condicionales
// let consulta = confirm('Selecciona una opcion');
const valor1 = parseFloat(prompt('ingrese el primer numero'));
const valor2 = parseFloat(prompt('ingrese el segundo numero'));

console.log(valor1, valor2);

// if (isNaN(valor1) || isNaN(valor2)) {
//   alert('no se permiten letras');
// }

// if (valor1 < valor2) {
//   console.log('entra por el if');
// }

//if else

if (isNaN(valor1) || isNaN(valor2)) {
  alert('no se permiten letras');
} else {
  if (valor1 < valor2) {
    console.log('entra por el if');
  }
}
