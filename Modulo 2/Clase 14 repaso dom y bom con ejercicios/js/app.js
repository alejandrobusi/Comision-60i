/*
const TYME_IN_ML = 1000;

const log = () => {
  console.log('Hey');
};

// setInterval(log, TYME_IN_ML);
const interval = setInterval(log, TYME_IN_ML);

const stopInterval = () => {
  clearInterval(interval);
};
// setTimeout(stopInterval, 3000);

//-------DOM--------//
// document.body.innerText = '<h1>Hola</h1>';
// document.body.innerHTML = '<h1 class="display-1">Hola</h1>';

console.log(document.getElementById('theH1')); // Este metodo trae el elemeto directamente.
console.log(document.querySelector('h1')); // este metodo trae el elemennto directamente.
console.log(document.querySelectorAll('h1')); // este metodo trae un array de elemetos.
console.log(document.getElementsByClassName('theP')); // este metodo trae u narray de elementos.
console.log(document.getElementsByTagName('h1')); // este metodo trae un array de elementnos.

//------crear elementos en js------//

const pElement = document.createElement('p');
pElement.innerHTML = 'Soy el p';
pElement.style = 'color: red;';
console.log(pElement);
document.getElementById('containerP').appendChild(pElement);

const isLogin = true;

if (isLogin) {
  const loginButton = document.getElementById('loginButton');
  // loginButton.classList = 'd-none';
  loginButton.setAttribute('disabled', '');
}

//----cloar nodos-----//

const divContainer = document.getElementById('containerP');
document.body.appendChild(divContainer.cloneNode(false));

//----eliminar nodos----//

const img = document.getElementById('imagen');
const imagenEliminanda = document.body.removeChild(img);

const getData = () => {
  const input = document.getElementById('numberUser').value;
  console.log(input);
};
*/
const startGame = () => {
  const randomNumber = Math.round(Math.random() * 10);
  const userInput = parseInt(document.getElementById('inputUser').value);
  if (randomNumber === userInput) {
    alert('Ganaste!!!');
  } else {
    alert(`Perdiste. el numero magico es ${randomNumber}`);
  }
};

/*3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin.
 */

let tastList = [];
let auxIndex;

const addTask = () => {
  const newTask = document.getElementById('task').value;
  if (newTask.length === 0) {
    return alert('No ingresaste nada');
  }
  tastList.push(newTask);
  printListTaskAndOptionsToDocumet(tastList);
};

const printListTaskAndOptionsToDocumet = (list) => {
  let listToDelete = document.getElementById('taskListElement');
  listToDelete.innerHTML = '';
  if (list.length !== 0) {
    list.map((task, i) => {
      const li = document.createElement('li');
      li.innerHTML = `<div class="d-flex my-2 justify-content-between">${task} <div><button type="button" class="btn btn-primary btn-sm" onclick="saveIndexAux(${i})" data-bs-toggle="modal" data-bs-target="#editTask">
        Editar
        </button> <button onclick="deleteItemOfList(${i})" class="btn btn-danger btn-sm">Elimiar</button></div></div>`;
      document.getElementById('taskListElement').appendChild(li);
    });
  }
};

const saveIndexAux = (i) => (auxIndex = i);

const deleteItemOfList = (index) => {
  tastList.splice(index, 1);
  printListTaskAndOptionsToDocumet(tastList);
};

const editTask = () => {
  const userInput = document.getElementById('newTask').value;
  if (userInput.length === 0) {
    return alert('No ingresaste nada');
  }
  tastList[auxIndex] = userInput;
  printListTaskAndOptionsToDocumet(tastList);
};
