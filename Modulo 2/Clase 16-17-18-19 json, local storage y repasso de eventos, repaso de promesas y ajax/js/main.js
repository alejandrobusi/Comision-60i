import navBar from '../components/navBar.js';

const user = JSON.parse(localStorage.getItem('userLog'));

if (user) {
  document.getElementById(
    'messageHome'
  ).textContent = `Bienvenido ${user.userName}.`;
}

navBar();
