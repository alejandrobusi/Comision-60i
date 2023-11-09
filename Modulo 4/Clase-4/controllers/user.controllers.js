const getAllUsers = (req, res) => {
  try {
    res.status(200).json('Estos son los usuarios capo...[]');
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUsersByIdParams = (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json('test');
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUsersByIdQuery = (req, res) => {
  try {
    const { name, age } = req.query;
    res.status(200).json('query');
  } catch (error) {
    res.status(500).json(error);
  }
};

const createUser = (req, res) => {
  try {
    const user = req.body;
    res.status(200).json('Usuario creado con exito');
  } catch (error) {
    res.status(500).json(error);
  }
};

const editUser = (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    res.status(200).json('Usuario editado con exito');
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteUser = (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json('Usuario eliminado con exito');
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllUsers,
  getUsersByIdParams,
  getUsersByIdQuery,
  createUser,
  deleteUser,
  editUser,
};
