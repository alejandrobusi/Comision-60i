const getAllProducts = (req, res) => {
  try {
    res.status(200).json('aqui tenes los productos capo');
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllProducts,
};
