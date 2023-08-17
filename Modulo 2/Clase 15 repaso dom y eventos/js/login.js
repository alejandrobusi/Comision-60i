import { usuarios, alerta } from './users.js';

const loginUser = (e) => {
  e.preventDefault();
  document.getElementById('message').textContent = '';
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const userExist = usuarios.find((user) => user.email === email);
  if (!userExist) {
    return (document.getElementById('message').textContent =
      'El usuario no existe');
  }
  if (userExist.email === email && userExist.password === password) {
    window.location.href = './index.html';
  } else {
    document.getElementById('message').textContent =
      'El email o el password son incorrectos';
  }
};

document
  .getElementById('loginForm')
  .addEventListener('submit', loginUser, false);
