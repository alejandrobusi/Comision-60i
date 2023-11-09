import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const GameCard = ({data}) => {
  const { name, _id, images } = data;
  const navigate = useNavigate();

  return (
    <Card className='col-12 col-lg-3 mx-3 my-3 g-0'>
      <Card.Img variant="top" src={images[0]}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button variant="primary" onClick={() => navigate(`/detailgame/${_id}`)} >Show more</Button>
      </Card.Body>
    </Card>
  )
}

export default GameCard
