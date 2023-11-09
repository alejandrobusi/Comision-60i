import React from 'react';
import { Col } from 'react-bootstrap';
import spinnerLogo from '../../assets/spinnerLogo.png';
import { spinner, spinnerContainer } from './loadingScreen.module.css';
const LoadingScreen = () => {
  return (
    <Col className={spinnerContainer}>
      <img className={spinner} src={spinnerLogo} alt="spinner" />
    </Col>
  )
}

export default LoadingScreen;
