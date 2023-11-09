import React from 'react';
import { Card } from 'react-bootstrap';

const CardCustom = ({data}) => {
  const { name, image, species } = data;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title> 
        <h3>Especie {species}</h3>
      </Card.Body>
    </Card>
  )
}

export default CardCustom;
