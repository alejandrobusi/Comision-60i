const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors({}));

const users = [
  {
    email: 'aws@gmail.com.ar',
    name: 'jeff ',
    lastName: 'bezos',
    password: 'Asd12345',
    passwordCheck: 'Asd12345',
    termsAndConditions: false,
    date: '2023-10-05T22:57:38.863Z',
    id: 1,
    disabled: false,
  },
  {
    email: 'test@gmail.com.ar',
    name: 'Cami craaack',
    lastName: 'Gonella',
    password: 'Asd12345',
    passwordCheck: 'Asd12345',
    termsAndConditions: false,
    date: '2023-10-05T22:57:38.863Z',
    id: 2,
    disabled: false,
  },
];

app.get('/api/users', (req, res) => {
  try {
    if (users.length >= 1) {
      return res.status(200).json(users);
    }
    res.status(404).json('No hay usuarios en la db');
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.get('/api/usersByEmail', (req, res) => {
  const { email } = req.query;
  try {
    const findUSer = users.find((user) => user.email == email);
    if (findUSer) {
      return res.status(200).json(findUSer);
    }
    res.status(404).json('No se encuentra el usuario');
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.post('/api/users', (req, res) => {
  const payload = req.body;

  try {
    users.push(payload);
    res.status(201).json('Usuario creado con exito');
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.patch('/api/users/:id', (req, res) => {
  const payload = req.body;
  const { id } = req.params;
  try {
    const findUser = users.find((user) => user.id == id);
    if (findUser) {
      return res.status(200).json('usuario editado con exito');
    }
    res.status(404).json('El usuario no se encuentra');
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  try {
    const findUser = users.find((user) => user.id == id);
    if (findUser) {
      return res.status(200).json('usuario eliminado con exito');
    }
    res.status(404).json('El usuario no se encuentra');
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.listen(port, () => {
  console.log(`Estamos escuchando el puerto ${port}`);
});
