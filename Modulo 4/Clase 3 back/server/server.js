const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const morgan = require('morgan');
const cors = require('cors');
require('../dbConnection/dbConnection');
//routes
const userRoutes = require('../routes/users.routes');
const productsRoutes = require('../routes/products.routes');

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// use routes
app.use('/api/users', userRoutes);
app.use('/api/products', productsRoutes);

app.listen(port, () => {
  console.log(`Estamos escuchando el puerto ${port}`);
});
