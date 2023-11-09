const { Router } = require('express');
const {
  getAllUsers,
  createUser,
  editUser,
} = require('../controllers/users.controllers');
const route = Router();

route.get('/getUsers', getAllUsers);

route.post('/createUser', createUser);

route.patch('/editUser', editUser);

module.exports = route;
