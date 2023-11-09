const express = require('express');
const morgan = require('morgan');
const app = express();
require('dotenv').config();
require('../dataBase/deConnection');
const port = process.env.PORT || 3000;
const cors = require('cors');

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({}));

//routes
const userRoutes = require('../routes/user.routes');
const productRoutes = require('../routes/product.routes');
const loginRoutes = require('../routes/login.routes');
//useRoutes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/login', loginRoutes);

app.listen(port, () => {
  console.log(`Estamos esuchando el puerto ${port}`);
});
