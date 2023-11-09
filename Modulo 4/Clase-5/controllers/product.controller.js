const {
  createProdService,
  getAllProdService,
  getProdByIdService,
} = require('../services/product.services');

const createProduct = async (req, res) => {
  try {
    const payload = req.body;
    await createProdService(payload);
    res.status(201).json('Prod created successfully');
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const response = await getAllProdService();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getProdByIdService(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
};
