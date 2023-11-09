const { Router } = require('express');
const {
  createProduct,
  getAllProducts,
  getProductById,
} = require('../controllers/product.controller');
const route = Router();

route.get('/', getAllProducts);

route.get('/getById/:id', getProductById);

route.post('/create', createProduct);

module.exports = route;
