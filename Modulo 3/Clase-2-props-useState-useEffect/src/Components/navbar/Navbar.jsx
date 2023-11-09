import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { nav } from './navbar.module.css';

const Navbar = ({user, setUser}) => {
  const { name, lastName } = user;
  const [changeMenu, setchangeMenu] = useState('Menu')
  const updateUserName = () => {
    setUser({...user, name: 'Ale'})
  }

  console.log('este es el navbar');
  return (
   <nav className={nav}>
      <ul>
        <li>{changeMenu}</li>
        <li>Contacto</li>
        <li>Login</li>
        <button onClick={() => updateUserName()}>Actualizar nombre</button>
        
        <button onClick={() => setchangeMenu('El n uevo Menu')}>Cambiar nombre de menu</button>
        <Button variant="primary">Primary</Button>
      </ul>
      <h3>{name} {lastName}</h3>
   </nav>
  )
}

export default Navbar
