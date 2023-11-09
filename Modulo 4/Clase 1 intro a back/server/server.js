// importamos express
const express = require('express');
const app = express();

// Creamos un endpoint
app.get('/api/users', (req, res) => {
  res.status(200).send('Hello World');
});

app.post('/api/users', (req, res) => {
  res.status(201).send('Usuario creado con exito');
});

app.put('/api/users', (req, res) => {
  res.status(201).send('Usuario editado con exito. PUT');
});

app.patch('/api/users', (req, res) => {
  res.status(200).send('Usuario editado con exito. PATCH');
});

app.delete('/api/users', (req, res) => {
  res.status(200).send('Usuario eliminado con exito');
});

// Iniciamos el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Estamos escuchando el puerto 3000');
});
