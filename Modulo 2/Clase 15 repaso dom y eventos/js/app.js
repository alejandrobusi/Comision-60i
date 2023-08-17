let button = document.getElementById('button1');
//-------agregar evento
const hacerClick = () => {
  console.log('hiciste click');
};

button.addEventListener('click', hacerClick, false);
//-------remover evento
setTimeout(() => {
  button.removeEventListener('click', hacerClick, false);
}, 5000);

//------eventos del mouse

const div = document.getElementById('miDiv');

div.addEventListener(
  'mouseenter',
  () => {
    div.style.backgroundColor = 'red';
  },
  false
);

div.addEventListener(
  'mouseleave',
  () => {
    div.style.backgroundColor = 'blue';
  },
  false
);

// confirmar antes de cerrar ventana

// window.addEventListener(
//   'beforeunload',
//   (e) => {
//     e.preventDefault();
//     e.returnValue = '';
//   },
//   false
// );

//---- eventos para teclado

const input = document.getElementById('inputUser');
const text = document.getElementById('message');

input.addEventListener(
  'keyup',
  (e) => {
    text.textContent = `Tecleaste: ${e.target.value}`;
  },
  false
);

//-----
