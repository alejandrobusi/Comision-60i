import React, { useState, useEffect } from 'react';
import NavbarV1 from './components/navbar/Navbar';
import { Container, Row, Button, Col } from 'react-bootstrap';
import axios from 'axios';

const App = () => {
  const userName = 'Ale';
  const [posts, setPosts] = useState();
  const [user, setUser] = useState('Bienvenido');

  const handleButton = (x) => {
    setUser(Math.random())
    console.log(x);
  }

  const getData = async () => {
    try {
      const { data }= await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [])
  

  return (
    <>
      <NavbarV1 name={userName} />
      <Container>
        <Button onClick={() => handleButton('test')} variant='danger' size='sm'>test</Button>
        <Row>
          <Col>
            <ul>
              {posts.map((post) => {
                return (
                  <li>
                    {post.title}
                  </li>
                )
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default App;
