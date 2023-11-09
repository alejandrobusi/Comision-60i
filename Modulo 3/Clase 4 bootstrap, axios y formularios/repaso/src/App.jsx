import { useState, useEffect } from 'react';
import NavbarCustom from './components/navbar/NavbarCustom';
import axios from 'axios';
import CardCustom from './components/cardCustom/CardCustom';
import FormV1 from './components/forms/FormV1';
import FormV2 from './components/forms/FormV2';

function App() {
  const [personajes, setPersonajes] = useState([]);
  
  const getCharacters = async () => {
    try {
      const {data} = await axios.get('https://rickandmortyapi.com/api/character');
      setPersonajes(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharacters();
  }, [])
  
  return (
    <>
      <NavbarCustom/>
      <FormV2 />
      {/* <FormV1 /> */}
      {personajes.map((personaje, i) => <CardCustom key={i} data={personaje} />)}
    </>
  )
}

export default App
