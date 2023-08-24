export const messages = {
  passwordRequirement:
    'La contraseña debe tener entre 4 y 8 dígitos e incluir al menos un dígito numérico.',
  emailFormatFail: 'El formato de email es incorrecto.',
  userIsRegister: 'El usuario ya se encuentra registrado.',
  passwordMatchFail: 'Las contraseñas no coinciden.',
  userNameExist: 'El nombre de usuario ya esta en uso.',
  userNotExist: 'El usuario no existe.',
  emailOrPasswordBad: 'El email o el password son incorrectos.',
};

/**
 *
 * @param {Event} e recibe el evento
 * @returns un objeto con las pripiedades (atributo name del elemento) y sus respectivos valores.
 */
export const getFormData = (e) => {
  const formData = new FormData(e.target);
  const formObject = {};
  for (const [key, value] of formData.entries()) {
    formObject[key] = value;
  }
  return formObject;
};
