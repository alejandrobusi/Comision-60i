const numbers = [1, 2, 3, 4, 5];
/*

// foreach

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 2);
}

numbers.forEach((x) => {
  console.log(x);
});
// Map

const newArr = numbers.map((num) => {
  return num * 2;
});
console.log(newArr, numbers);

// filter

const arrFilter = numbers.filter((num) => num % 2 === 0);

console.log(arrFilter);

// Reduce

const suma = numbers.reduce((acc, num) => {
  return acc + num;
});

console.log(suma);

// Find

const arrFind = numbers.find((num) => {
  return num > 3;
});

console.log(arrFind);

// Some

const booleanTest = numbers.some((num) => {
  return num % 2 === 0;
});

console.log(booleanTest);

*/
/*
// Objetos

const auto = {
  color: 'negro',
  marca: 'Fiat',
  modelo: 2023,
};

//console.log(auto.color);
//auto.tocarBocina();
// console.log(auto['color']);

// const llaves = Object.keys(auto);

// for (let i = 0; i < llaves.length; i++) {
//   const llave = llaves[i];
//   console.log(auto[llave]);
// }

const personas = [
  {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid',
    ocupacion: 'Ingeniero',
  },
  {
    nombre: 'María',
    edad: 28,
    ciudad: 'Barcelona',
    ocupacion: 'Abogada',
  },
  {
    nombre: 'Carlos',
    edad: 25,
    ciudad: 'Valencia',
    ocupacion: 'Estudiante',
  },
  {
    nombre: 'Ana',
    edad: 35,
    ciudad: 'Sevilla',
    ocupacion: 'Médico',
  },
];
// spred op
const nuevoArr = personas.map((persona, i) => {
  return {
    ...persona,
    id: i + 1,
  };
});

console.log(nuevoArr);

// Formas de crear objetos

// funcion constructora

function Persona(nombre = 'test', edad, apellido) {
  this.name = nombre;
  this.age = edad;
  this.lastName = apellido;
  this.address = null;
}

const persona1 = new Persona('Ale', 27, 'Busi');
console.log(persona1);

// obj constructor
// const persona2 = {};
// const persona3 = new Object();

// object.create
// const persona2 = Object.create(persona1);
const persona2 = { ...persona1 };

console.log(persona2);
*/

// Comparando objetos
const persona1 = { nombre: 'juan', apellido: 'juarez' };
const persona2 = { ...persona1, nombre: 'Max' };

console.log(persona1.nombre, persona2.nombre);
