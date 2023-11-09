const { passMatch } = require('../helpers/hashPassword');
const { getUserByEmail } = require('../services/user.services');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await getUserByEmail(email);
    if (!response)
      return res.status(200).json('El usuario no se encuentra registrado.');

    const passwordMatchResult = await passMatch(password, response.password);
    if (!passwordMatchResult)
      return res.status(200).json('El email o el password son incorrectos.');

    const user = {
      name: response.name,
      lastName: response.lastName,
      email: response.email,
      role: response.role,
      _id: response._id,
    };

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  login,
};
