const closeSession = () => {
  alert('cerrando sesion');
};

const buttonsNav = () => {
  return <button onclick='closeSession()'>cerrar sesion</button>;
};

export default buttonsNav;
