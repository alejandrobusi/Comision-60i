/*
// functions declarativas
function suma (num1 = 0, num2 = 0) {
  const result = num1 + num2;
  return result;
};

// funciones anonimas

const resta = function (num1 = 0, num2 = 0) {
  const result = num1 - num2;
  return result;
};

const resultado = (resta(9,7));
// console.log(resultado);

// arrow function o funcion flecha

// const multiplicar = (num1, num2) => {
//   const result = num1 * num2;
//   return result;
// };


// const multiplicar = (num1, num2) => num1 * num2;

const multiplicarPor5 = num1 => num1 * 5;

const resultadoProd = multiplicarPor5(5);
console.log(resultadoProd);

const saludar = (saludo, nombre) => {
  console.log(`${saludo} ${nombre}`)
};
*/

const opciones = ['Piedra', 'Papel', 'Tijeras'];
let jugador = null;
let bot = null;

const aleatorioBot = () => {
  return bot = Math.round(Math.random() * 2);
};

const seleccionDelUsuarioYComparacion = () => {
  jugador = parseInt(prompt('Ingresa un valor de el 0 al 2, piedra = 0, papel = 1, tijeras = 2 '));
  if (!isNaN(jugador) && jugador >= 0 && jugador <= 2) {
    switch (true) {
      case (jugador === bot):
        alert('Empate');
        break;
  
      case (jugador === 0 && bot === 2):
        alert('Ganaste');
        break;
  
      case (jugador === 1 && bot === 0):
        alert('Ganaste');
        break;
  
      case (jugador === 2 && bot === 1):
        alert('Ganaste');
        break;
  
      default:
        alert('Perdiste');
        break;
    }
    document.write(`<h1 Class="resultado">El bot elije ${opciones[bot]}, y vos elegiste ${opciones[jugador]}</h1>`)
  } else {
    document.write('<h1 class="error">Solo puedes ingresar numeros y del 0 al 2</h1>');
  }
};

const jugarAhora = () => {
  aleatorioBot();
  seleccionDelUsuarioYComparacion();
}

jugarAhora();


