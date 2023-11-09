import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import GameCard from '../gameCard/GameCard';
import LoadingScreen from '../loadingScreen/LoadingScreen';
import { alertGeneric } from '../../utils/alertCustom';
import { messages } from '../../utils/messages';

const GameGallery = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const URL_BASE = import.meta.env.VITE_URL_BASE;

  const getAllGames = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${URL_BASE}/products`);
      setGames(data);
    } catch (error) {
      alertGeneric(messages.failGetProduct, 'Uppss...', 'error')
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    getAllGames();
  }, []);

  return (
    <Col>
      <h1>Lo jueguito</h1>
      <Row className='justify-content-center mt-5'>
        {isLoading 
          ? <LoadingScreen />
          : <>
              {games.map((game, i) => {
                return (
                  <GameCard key={i} data={game}/>
                )
              })}
            </>
        }
      </Row>
    </Col>
  )
}

export default GameGallery;
