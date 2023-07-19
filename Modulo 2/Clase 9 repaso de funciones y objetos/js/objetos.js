const controlRemoto = {
  color: 'negro',
  cantidadDeBotones: 9,
  tipoDeBaterias: 'aaa',
  marca: 'samsung'
}

// console.log(controlRemoto["marca"]);
// console.log(controlRemoto.marca);
// // agrear propiedades
// controlRemoto.precio = 15;
// // editar una propiedad
// controlRemoto.cantidadDeBotones = 11;
// // eliminar una propiedad
// delete controlRemoto.color;
// console.log(controlRemoto);

// for (const key in controlRemoto) {
//   if (controlRemoto.hasOwnProperty(key)) {
//     console.log(controlRemoto[key])
//   }
// }

// let llaves = Object.keys(controlRemoto);
// console.log(llaves);

// for (let i = 0; i < llaves.length; i++) {
//   let llave = llaves[i]
//   console.log(controlRemoto[llave]);
// }

const products = [
  {
    id: 1,
    name: 'Leche',
    price: 120,
    categories: ['familiar', 'comida'],
  },
  {
    id: 2,
    name: 'Arroz',
    price: 90,
    categories: ['familiar', 'comida'],
  },
  {
    id: 3,
    name: 'Lavadora',
    price: 7800,
    categories: ['electrodomesticos'],
  }
];

for (let i = 0; i < products.length; i++) {
  console.group(products[i].name)
  console.log(`id: ${products[i].id}`)
  console.log(`Precio: ${products[i].price}`)
  console.log(`Categorias: ${products[i].categories}`)
  console.groupEnd()
}
