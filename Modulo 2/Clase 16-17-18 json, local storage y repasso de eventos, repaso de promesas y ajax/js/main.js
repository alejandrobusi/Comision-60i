const user = JSON.parse(localStorage.getItem('userLog'));

if (user) {
  document.getElementById(
    'messageHome'
  ).textContent = `Bienvenido ${user.userName}.`;
}

const closeSession = () => {
  localStorage.clear();
  window.location.reload();
};

const buttonClose = document.getElementById('closeSession');
buttonClose.addEventListener('click', closeSession, false);
