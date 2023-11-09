const { Router } = require('express');
const {
  getAllUsers,
  deleteUser,
  editUser,
  createUser,
  getUsersByIdQuery,
  getUsersByIdParams,
} = require('../controllers/user.controllers');
const route = Router();

// get users by id with url params
route.get('/getById/:id', getUsersByIdParams);

route.get('/getByIdWithQuery', getUsersByIdQuery);

route.post('/createUser', createUser);

route.patch('/editUser/:id', editUser);

route.delete('/delete/:id', deleteUser);

route.get('/', getAllUsers);

module.exports = route;
