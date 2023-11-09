import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardEdit = (props) => {
  const { name, desc, img } = props.data;
  const [classList, setClassList] = useState({
    bg: '',
  });

  const changeState = () => {
    setClassList({bg: 'bg-dark text-white'});
  }

  useEffect(() => {
    console.log('Se ejecuta el useEffect');
  }, [classList])
  

  return (
    <Card className={`${classList.bg} m-3`} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Button variant="primary" onClick={() => changeState()}>Cambiar bg</Button>
      </Card.Body>
    </Card>
  )
}

export default CardEdit
