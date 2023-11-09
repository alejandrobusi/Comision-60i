const { Router } = require('express');
const {
  getAllUsers,
  createUser,
  getUserById,
  editUser,
  deleteUser,
  checkEmailExist,
} = require('../controllers/user.controllers');
const route = Router();
const { body } = require('express-validator');
const { emailCheckExistValidation } = require('../helpers/validations');

route.get('/', getAllUsers);

route.get('/byId/:id', getUserById);

route.get('/checkEmailExist', checkEmailExist);

route.post(
  '/create',

  body('email')
    .isEmail()
    .withMessage('El campo email no es un email valido')
    .not()
    .isEmpty()
    .withMessage('El campo es obligatorio.')
    .custom(emailCheckExistValidation),

  body('password')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
    .withMessage('La contraseña no cumple los requisitos'),

  createUser
);

route.patch('/edit/:id', editUser);

route.delete('/delete/:id', deleteUser);

module.exports = route;
