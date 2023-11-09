const User = require('../models/user.model');

const getAllUsersService = async () => {
  return await User.find({});
};

const getUserByIdService = async (id) => {
  return await User.findById(id);
};

const createUserService = async (payload) => {
  const newUser = new User(payload);
  return await newUser.save();
};

const editUserService = async (id, payload) => {
  const options = {
    new: true,
  };
  return await User.findByIdAndUpdate(id, payload, options);
};

const deleteUserService = async (id) => {
  return await User.findByIdAndDelete(id);
};

const getUserByEmail = async (email) => {
  return await User.findOne({ email });
};

module.exports = {
  getAllUsersService,
  getUserByIdService,
  createUserService,
  editUserService,
  deleteUserService,
  getUserByEmail,
};
