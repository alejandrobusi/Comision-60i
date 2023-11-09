const { getUserByEmail } = require('../services/user.services');

const emailCheckExistValidation = async (email) => {
  const response = await getUserByEmail(email);

  if (response)
    throw new Error(`El email ${email}, ya se encuentra registrado`);

  return false;
};

module.exports = {
  emailCheckExistValidation,
};
