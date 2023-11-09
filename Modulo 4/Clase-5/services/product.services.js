const Product = require('../models/product.model');

const createProdService = async (payload) => {
  const newProduct = new Product(payload);
  return await newProduct.save();
};

const getAllProdService = async () => {
  return Product.find({});
};

const getProdByIdService = async (id) => {
  return Product.findById(id);
};

module.exports = {
  createProdService,
  getAllProdService,
  getProdByIdService,
};
