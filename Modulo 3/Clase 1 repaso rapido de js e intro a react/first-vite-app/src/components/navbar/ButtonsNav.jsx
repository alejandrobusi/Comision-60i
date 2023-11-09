

const ButtonsNav = ({ message, nameButton, data, functionNew }) => {
  const {name, lastName} = data;
  console.log(functionNew);
  return(
    <div>
      <button onClick={() => functionNew(message)}>{nameButton}</button>
      <h3>Info persona</h3>
      <h4>Nombre: {name}</h4>
      <h4>Apellido: {lastName}</h4>
    </div>
  )
};

export default ButtonsNav;
