import React from 'react'
import GameGallery from '../components/gameGallery/GameGallery';
import { Container, Row } from 'react-bootstrap';

const HomePage = () => {
  
  return (
    <Container>
      <Row>
        <GameGallery />
      </Row>
    </Container>
  )
}

export default HomePage
