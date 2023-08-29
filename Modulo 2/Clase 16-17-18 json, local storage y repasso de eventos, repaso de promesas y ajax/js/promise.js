/*
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('error');
  }, 3000);
});

let resultado = 'no hay nada';

promesa
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('Soy el finally');
  });


const motos = [
  {
    id: 1,
    marca: 'Acme',
  },

  {
    id: 2,
    marca: 'KTM',
  },

  {
    id: 3,
    marca: 'Yamaha',
  },

  {
    id: 4,
    marca: 'Honda',
  },
];
let respuesta;

const searchMoto = (id) => {
  return (promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const resultMoto = motos.find((moto) => moto.id === id);
      if (resultMoto) {
        return resolve(resultMoto);
      }
      reject(`Not result for id ${id}.`);
    }, 3000);
  }));
};

// searchMoto(2)
//   .then((result) => {
//     respuesta = result.marca;
//     document.body.innerHTML = `<h1> Marca: ${result.marca}`;
//   })
//   .catch((error) => console.error(error))
//   .finally();

const asincronica = async () => {
  try {
    const respuesta = await searchMoto(3);
    document.body.innerHTML = `<h1> Marca: ${respuesta.marca}`;
  } catch (error) {
    console.log(error);
  } finally {
    console.log('Se resuelve la promesa');
  }
  console.log('estoy dentro de la funcion asincrona');
};

asincronica();

*/
//------fetch
// const rickAndMorty = fetch('https://rickandmortyapi.com/api/character');

const getCharacters = async () => {
  try {
    const resp = await fetch('https://rickandmortyapi.com/api/character');
    const { results } = await resp.json();
    return results;
  } catch (error) {}
};

//-----async await
// const getAllCharacters = async () => {
//   try {
//     //throw new Error('Ha ocurrido un error');
//     const rickAndMorty = await fetch(
//       'https://rickandmortyapi.com/api/character'
//     );
//     const { results } = await rickAndMorty.json();
//     return results;
//   } catch (error) {
//     return error.message;
//   }
// };

const printCards = async () => {
  const characters = await getCharacters();
  let contenedor = document.getElementById('container');
  characters.map((personaje) => {
    let card = document.createElement('div');
    card.classList = 'card col-3 m-3 g-0';
    card.innerHTML = `<img src="${personaje.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Nombre: ${personaje.name}</h5>
      </div>`;
    contenedor.appendChild(card);
  });
};

const button = document.getElementById('getChatactersButton');
button.addEventListener('click', printCards, false);

// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = myCallback;
// xhr.open('GET', 'https://rickandmortyapi.com/api/character', true);
// xhr.send('');

// function myCallback() {
//   if (xhr.readyState < 4) {
//     return; // not ready yet
//   }
//   if (xhr.status !== 200) {
//     alert('Error!'); // the HTTP status code is not OK
//     return;
//   }
//   // all is fine, do the work
//   console.log(JSON.parse(xhr.responseText));
// }
