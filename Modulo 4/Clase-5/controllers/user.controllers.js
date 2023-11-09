const { validationResult } = require('express-validator');
const { hashingPasword } = require('../helpers/hashPassword');
const {
  getAllUsersService,
  getUserByIdService,
  createUserService,
  editUserService,
  deleteUserService,
  getUserByEmail,
} = require('../services/user.services');

const getAllUsers = async (req, res) => {
  try {
    const response = await getAllUsersService();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

const checkEmailExist = async (req, res) => {
  try {
    const { email } = req.query;
    const response = await getUserByEmail(email);
    if (response) {
      return res.status(200).json(false);
    }
    res.status(200).json(true);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getUserByIdService(id);
    if (!response)
      return res.status(404).json('No se ha encontrado el usuario.');
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const payload = req.body;
    const userWithPassHash = await hashingPasword(payload);
    await createUserService(userWithPassHash);
    res.status(201).json('Usuario creado con exito.');
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const response = await editUserService(id, payload);
    if (!response)
      return res.status(404).json('No se ha encontrado el usuario.');
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await deleteUserService(id);
    if (!response)
      return res.status(404).json('No se ha encontrado el usuario.');
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  editUser,
  deleteUser,
  checkEmailExist,
};
