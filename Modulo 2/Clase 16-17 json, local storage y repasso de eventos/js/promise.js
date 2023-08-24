/*
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    
  }, 3000);
});

let resultado = 'no hay nada';

promesa
  .then((result) => {
    resultado = result;
    document.body.textContent = result;
  })
  .catch((result) => {
    resultado = result;
    document.body.textContent = result;
  })
  .finally(() => {
    console.log('se ejecuta el finally');
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

const searchMoto = (id) => {
  return (promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const resultMoto = motos.find((moto) => moto.id === id);
      if (resultMoto) {
        return resolve(resultMoto);
      }
      reject(new Error(`Not result for id ${id}.`));
    }, 3000);
  }));
};

searchMoto(3)
.then((result) => {
  document.body.innerHTML = `<h1> Marca: ${result.marca}, id ${result.id}`;
})
.catch((error) => console.error(error.message));

//------fetch
const rickAndMorty = fetch('https://rickandmortyapi.com/api/character');

rickAndMorty
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  })
  
  .catch((error) => console.log(error));
  */

//-----async await
const getAllCharacters = async () => {
  try {
    //throw new Error('Ha ocurrido un error');
    const rickAndMorty = await fetch(
      'https://rickandmortyapi.com/api/character'
    );
    const { results } = await rickAndMorty.json();
    return results;
  } catch (error) {
    return error.message;
  }
};

const printCards = async () => {
  const characters = await getAllCharacters();
  characters.map((personaje) => {
    let contenedor = document.getElementById('container');
    let card = document.createElement('div');
    card.classList = 'card col-3 m-3 g-0';
    card.innerHTML = ` <img src="${personaje.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Nombre: ${personaje.name}</h5>
      </div>`;
    contenedor.appendChild(card);
  });
};

const button = document.getElementById('getChatactersButton');
button.addEventListener('click', printCards, false);
