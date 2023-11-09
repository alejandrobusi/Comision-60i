import { users } from './users.js';
import { messages, getFormData } from './utils.js';

const userRegister = async (e) => {
  e.preventDefault();

  const messageForm = document.getElementById('message');
  messageForm.textContent = '';
  //----obtener valores de los input

  const formData = getFormData(e);

  //------- regex
  const validationEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const validationPassword = /^(?=.*\d).{4,8}$/;
  //------ validaciones
  if (!validationEmail.test(formData.email))
    return (messageForm.textContent = messages.emailFormatFail);

  const emailExist = users.some((user) => user.email === formData.email);
  if (emailExist) return (messageForm.textContent = messages.userIsRegister);

  const userNameExist = users.some(
    (user) => user.userName === formData.userName
  );
  if (userNameExist) return (messageForm.textContent = messages.userNameExist);

  const userExist = users.some((user) => user.userName === formData.email);
  if (userExist) return (messageForm.textContent = messages.userIsRegister);

  if (formData.password !== formData.passwordCheck)
    return (messageForm.textContent = messages.passwordMatchFail);

  if (!validationPassword.test(formData.password)) {
    messageForm.textContent = messages.passwordRequirement;
  }

  const newUser = {
    ...formData,
    role: 'USER',
    date: new Date(),
  };
  delete newUser.passwordCheck;
  try {
    const resp = await fetch('http://localhost:3000/users', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    await resp.json();
    window.location.href = './login.html';
  } catch (error) {
    console.error(error);
  }
};

const form = document.getElementById('registerForm');
form.addEventListener('submit', userRegister, false);

//------------json
/*
const personaje = {
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a',
  homeworld: 'https://swapi.dev/api/planets/1/',
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/4/',
    'https://swapi.dev/api/films/5/',
    'https://swapi.dev/api/films/6/',
  ],
  species: ['https://swapi.dev/api/species/2/'],
  vehicles: [],
  starships: [],
  created: '2014-12-10T15:10:51.357000Z',
  edited: '2014-12-20T21:17:50.309000Z',
  url: 'https://swapi.dev/api/people/2/',
};

console.log(personaje);

const personajeJson = JSON.stringify(personaje);
console.log(personajeJson);

const personajeNormal = JSON.parse(personajeJson);
console.log(personajeNormal);

//---------localStorage

//----- guardar un valor en el localStorage

localStorage.setItem('nombre', 'Ale');

//-------obtener un valor del localStorage

console.log(localStorage.getItem('nombre'));

//------- borrar todo el localStorage

// localStorage.clear();

//------ eliminar un item del localStorage

localStorage.removeItem('nombre');
*/
