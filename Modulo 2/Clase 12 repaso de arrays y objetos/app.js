const numbers = [1, 2, 3, 4, 5];

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
    nombre: 'Jose',
    edad: 28,
    ciudad: 'Valencia',
    ocupacion: 'Estudiante',
  },
  {
    nombre: 'test',
    edad: 35,
    ciudad: 'Sevilla',
    ocupacion: 'Médico',
  },
];

const recorrerArray = (listaDePersonas) => {
  listaDePersonas.forEach((persona) => {
    console.group(
      `Nombre: ${persona.nombre ? persona.nombre.toUpperCase() : 'Sin data'}`
    );
    console.log(`Edad: ${persona.edad}`);
    console.log(`Ciudad: ${persona.ciudad}`);
    console.log(`Ocupación: ${persona.ocupacion}`);
    console.groupEnd();
  });
};

// numbers.map(number => {
//   console.log(number);
// });

// Objetos

const auto = {
  marca: 'Fiat',
  modelo: 2023,
  color: 'negro',
  tocarBocina: function (params = 'Bocina por defecto') {
    alert(params);
  },
};

const cuentaBancaria = {
  saldo: 1000,
  extraer: function (x) {
    this.saldo = this.saldo - x;
  },
  depositar: function (x) {
    this.saldo = this.saldo + x;
  },
  estadoDeCuenta: function () {
    console.log(`El saldo actual de su cuenta es: $${this.saldo}`);
  },
};
