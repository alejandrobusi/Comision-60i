const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Este campo es requerido.'],
    },
    lastName: {
      type: String,
      required: [true, 'Este campo es requerido.'],
    },
    email: {
      type: String,
      required: [true, 'Este campo es requerido.'],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Este campo es requerido.'],
    },
    role: {
      type: String,
      required: [false, 'Este campo es requerido.'],
      enum: ['admin', 'client'],
      default: 'client',
    },
    age: {
      type: Number,
      min: [1, 'La edad minima requerida es de 1 año'],
      max: [99, 'La edad maxima requerida es de 99 año'],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = model('user', userSchema);
