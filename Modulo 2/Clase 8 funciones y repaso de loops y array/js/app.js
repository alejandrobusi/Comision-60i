// let i;
// let j;
// const rows = Number(prompt('Ingresa el numero de filas'));
// const columns = Number(prompt('Ingresa el numero de columnas'));
// let result = rows * columns;

// document.write('<table border>');

// for (i = 0; i < rows; i++) {
//   document.write('<tr>');
//   for (j = 0; j < columns; j++) {
//     document.write('<td>');
//     document.write(result);
//     result--
//     document.write('</td>');
//   }
//   document.write('</tr>');
// }

// document.write('</table>');

// const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junino', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

// document.write('<h3>Lista de meses</h3>');
// document.write('<ul>');
// for (let i = 0; i < meses.length; i++) {
//   document.write('<li>');
//   document.write(meses[i]);
//   document.write('</li>');
// }
// document.write('</ul>');

//-----Funciones

//--declarativas

// function suma (num1 = 2, num2 = 2) {
//   console.log(num1, num2);
//   const result = num1 + num2;
//   return result;
// };

// const resultado = suma(8, 9);
// console.log(resultado);
// const saludoNuevo = saludar(undefined,'Hola, como estas? soy');
// console.log(saludoNuevo);

// function saludar (nombre = 'jose', saludo = 'Hola, soy') {
//   const saludito = `${saludo} ${nombre}`;
//   return saludito;
// };

// saludar = 'hey';
// console.log(typeof(saludar));
// const numero = parseInt('3');

//--anonimas

// const resta = function (num1, num2) {
//   return (num1 + num2)
// };

// console.log(resta(4, 5));

//--Funciones flechas 

const multiplicacion = (a, b) => a + b;
// const multiplicacion = (a, b) => {
//   return a + b;
// };

const devolverTexto = a => {
  return a;
};

// console.log(multiplicacion(2, 2));
// console.log(devolverTexto('que onda'));

// const edad = prompt('Ingresa tu edad');

// const verificacion = (edad < 18) 
//   ? () => alert('No podes pasar')
//   : () => alert('Si podes pasar');

//--scope global

const nombre = 'Maxi';

// if (1 == 1) {
//   console.log(nombre);
// }

//--scope local

function mostrarNombre () {
  const name = 'Ale';
  return name;
}

console.log(mostrarNombre());

