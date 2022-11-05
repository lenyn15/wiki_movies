export const RegisterValidationsMessages = {
  firstName: [{ type: 'required', message: 'Los nombres son requeridos.' }],
  lastName: [{ type: 'required', message: 'Los apellidos son requeridos.' }],
  email: [
    { type: 'required', message: 'El correo es requerido.' },
    { type: 'pattern', message: 'El correo no es valido.' },
  ],
  password: [
    { type: 'required', message: 'La contraseña es requerida.' },
    {
      type: 'minlegth',
      message: 'La constraseña debe tener un minimo de 6 caracteres.',
    },
  ],
};
