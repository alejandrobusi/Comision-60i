const getAllUsers = (req, res) => {
  try {
    res.status(200).json('aqui tenes los usuarios');
  } catch (error) {
    res.status(500).json(error);
  }
};

const createUser = (req, res) => {
  try {
    res.status(200).json('Creado con exito');
  } catch (error) {
    res.status(500).json(error);
  }
};

const editUser = (req, res) => {
  try {
    res.status(200).json('Editado con exito');
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  editUser,
};
