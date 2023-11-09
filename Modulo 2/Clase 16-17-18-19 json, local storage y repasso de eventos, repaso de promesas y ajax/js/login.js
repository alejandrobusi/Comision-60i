import { messages, getFormData } from './utils.js';

const checkUserLog = () => {
  const user = localStorage.getItem('userLog');
  if (user) {
    Swal.fire({
      title: 'Ya se encuentra un usuario logueado',
      text: '¿Quieres cerrar sesion e iniciar con otro usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Cerrar sesion',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('userLog');
        window.location.reload();
      } else {
        window.location.href = './index.html';
      }
    });
  }
};

checkUserLog();

const loginUser = async (e) => {
  e.preventDefault();
  const messageForm = document.getElementById('message');
  messageForm.textContent = '';

  const formData = getFormData(e);

  try {
    const resp = await fetch(
      `http://localhost:3000/users/?email=${formData.email}`
    );
    const response = await resp.json();
    const userExist = response[0];

    if (userExist.length === 0) {
      return (messageForm.textContent = messages.userNotExist);
    }
    if (
      userExist.email === formData.email &&
      userExist.password === formData.password
    ) {
      delete userExist.password;
      const userToJson = JSON.stringify(userExist);
      localStorage.setItem('userLog', userToJson);
      window.location.href = './index.html';
    } else {
      messageForm.textContent = messages.emailOrPasswordBad;
    }
  } catch (error) {
    console.error(error);
  }
};

document
  .getElementById('loginForm')
  .addEventListener('submit', loginUser, false);
