const getData = async () => {
  console.log('entra en la funcion');
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const { results } = await response.json();
  results.map((personaje) => {
    let contenedor = document.createElement('div');
    contenedor.classList = '';
    let card = `<div class="card" style="width: 18rem; margin: 15px;">
      <img src="${personaje.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Nombre: ${personaje.name}</h5>
      </div>
    </div>`;
    contenedor.innerHTML = card;
    document.querySelector('#container').appendChild(contenedor);
  });
};

// console.log(window.screen);

// if (window.location.protocol === 'https') {
//   alert('Todo bien con esta paginna bro');
// } else {
//   alert('NTodo mal aqui, deberias zafar');
//   window.location.href = 'https://google.com.ar';
// }

//------ Funciones para manejar tiempo--------//
/*
const interval = window.setInterval(() => {
  console.log('estamos en el interval');
}, 1000);

const stopInterval = () => {
  window.clearInterval(interval);
  console.log('Se ha detenido el interval');
};

window.setTimeout(getData, 5000);
*/

//-------DOM--------//
// console.log(document);
// document.body.innerHTML = '<h1> example </h1>';
// console.log(document.getElementById('title'));
// console.log(document.querySelector('.theButton'));
// console.log(document.querySelector('h1'));
// console.log(document.querySelector('#title'));
// console.log(document.getElementsByClassName('theButton'));
// console.log(document.getElementsByTagName('h1'));

// const body = document.querySelector('body');
// body.style = 'color: red';
// body.classList = 'bgBody';
// document.querySelector('html').appendChild(body);

const isLogin = false;
if (isLogin) {
  const button = document.getElementsByClassName('loginButton')[0];
  button.classList = 'd-none';
}

let newP = document.createElement('p');
newP.innerHTML = 'hola como estas';
newP.classList = 'm-5';
document.getElementById('container2').appendChild(newP);

const divConTexto = document.getElementById('container2');
document.body.appendChild(divConTexto.cloneNode(true));

const startGame = () => {
  const randomNumber = Math.round(Math.random() * 10);
  const inputUser = parseInt(document.getElementById('inputNumber').value);
  if (randomNumber === inputUser) {
    alert('Adivinanste el numero magico');
  } else {
    alert(
      `Perdiste :(... tu numero es ${inputUser} y el numero random fue ${randomNumber}`
    );
  }
};
