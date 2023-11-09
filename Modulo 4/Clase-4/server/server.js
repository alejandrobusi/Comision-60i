const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const morgan = require('morgan');
const cors = require('cors');
require('../dbConnection/dbConnection');

//middlewares
app.use(cors({}));
app.use(morgan('dev'));
app.use(express.json());

//routes
const userRoutes = require('../routes/user.routes');
//useRoutes

app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Estamos escuchando el puerto ${port}`);
});
