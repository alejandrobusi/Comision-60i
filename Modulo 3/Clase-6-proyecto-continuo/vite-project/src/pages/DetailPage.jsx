import React from 'react';
import { Container, Row } from 'react-bootstrap';
import GameDetail from '../components/gameDetail/GameDetail';

const DetailPage = () => {
  return (
    <Container>
      <Row>
        <GameDetail />
      </Row>
    </Container>
  )
}

export default DetailPage
