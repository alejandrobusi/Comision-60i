const { Router } = require('express');
const { getAllProducts } = require('../controllers/products.controllers');
const route = Router();

route.get('/getProducts', getAllProducts);

module.exports = route;
