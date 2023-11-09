import React from 'react';
import ButtonsNav from './ButtonsNav';


const Navbar = () => {
  const persona = {
    name: 'Ale',
    lastName: 'Busi',
  };

  const despedirse = () => {
    alert('adios');
  };

  return (
    <div>
      <ol>
        <li>Menu</li>
        <li>Contacto</li>
        <li>Login</li>
        <ButtonsNav nameButton={'saludar'} message={'Hola, como estas?'} data={persona} functionNew={despedirse}/>
      </ol>
    </div>
  )
}

export default Navbar;
