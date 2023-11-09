import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Col, Row, Carousel } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingScreen from '../loadingScreen/LoadingScreen';

const GameDetail = () => {
  const { id } = useParams();
  const [game, setGame] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const URL_BASE = import.meta.env.VITE_URL_BASE;
  const navigate = useNavigate();

  const getGame = async() => {
    try {
      setIsLoading(true)
      const { data } = await axios.get(`${URL_BASE}/products/getById/${id}`);
      setGame(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getGame();
  }, []);

  return (
    
    <Row className='justify-content-center'>
      {isLoading 
        ? <LoadingScreen />
        : game && (
          <>
            <h1 className='mt-3'>{game.name}</h1>
            <Col xs={12} lg={6} className='mt-3'>
              <Carousel>
                {game.images.map((image, i) => {
                  if (i === 0) return;
                  return (
                    <Carousel.Item>
                      <img src={image} className='img-fluid' alt="" />
                    </Carousel.Item>
                  )
                })}
              </Carousel>
            </Col>
            <Col xs={12} lg={6} className='mt-3'>
              <h2>Descripción: {game.description}</h2>
              <h3>Requirimientos minimos:</h3>
              <ul>
                <li>SO: {game.requirementsMin.so}</li>
                <li>Procesador: {game.requirementsMin.processor}</li>
                <li>Grafica: {game.requirementsMin.graphics}</li>
              </ul>
              <Col className='d-flex justify-content-end'>
                <Button onClick={() => navigate('/carrito')}>Comprar $:{game.price}</Button>
              </Col>
            </Col>
          </>
        )
      }
    </Row>
 
  )
}

export default GameDetail;
