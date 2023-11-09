import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { messages } from '../../utils/messages';
import { alertGeneric } from '../../utils/alertCustom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    lastName: '',
    password: '',
    passwordCheck: '',
  });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const URL_BASE = import.meta.env.VITE_URL_BASE;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const validationEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const validationPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    try {
      if(!validationEmail.test(formData.email)) return alertGeneric(messages.failEmailFormat,'Uppss...', 'error'), setMessage(messages.failEmailFormat);
      if(!validationPass.test(formData.password)) return alertGeneric(messages.failPasswordFormat,'Uppss...', 'error'), setMessage(messages.failPasswordFormat);
      if(formData.password !== formData.passwordCheck) return alertGeneric(messages.failPasswordCheck,'Uppss...', 'error'), setMessage(messages.failPasswordCheck);
      setIsLoading(true);

      const { data } = await axios.get(`${URL_BASE}/users/checkEmailExist/?email=${formData.email}`)
     

      if (data) return alertGeneric(messages.userAlreadyExist, 'Uppss...', 'error');
      
      await axios.post(`${URL_BASE}/users/create`, formData);
      alertGeneric(messages.registerSuccess, 'Genial', 'success', () => navigate('/login'));

    } catch (error) {
      alertGeneric(messages.serverErrorGeneric, 'Uppss...', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeFormData = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Container>
      <Row className='justify-content-center my-5'>
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" placeholder="Enter email" name='email' required onChange={handleChangeFormData}/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" name='name' required onChange={handleChangeFormData}/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Lastname</Form.Label>
              <Form.Control type="text" placeholder="Enter lastname" name='lastName' required onChange={handleChangeFormData}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name='password' required onChange={handleChangeFormData}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Repeat password</Form.Label>
              <Form.Control type="password" name='passwordCheck' placeholder="Repeat password" required onChange={handleChangeFormData}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Acept terms and conditions" name='termsAndConditions' required onChange={handleChangeFormData}/>
            </Form.Group>
            <Col className='text-danger my-3'>
              <strong>{message}</strong>
            </Col>
            <Button variant="primary" type="submit" disabled={isLoading}>
              {isLoading ? 'Cargando...' : 'Registrarme'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
};

export default Register;
