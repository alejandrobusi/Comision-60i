const { Schema, model } = require('mongoose');

const useSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  termsAndConditions: {
    type: Boolean,
    required: true
  },
  date: {
    type: Date,
    required: false
  },
  disabled
})






{
  "email": "test@gmail.com.ar",
  "name": "Nuevo usuario2",
  "lastName": "bezos",
  "password": "Asd12345",
  "termsAndConditions": false,
  "date": "2023-10-05T22:57:38.863Z",
  "id": 3,
  "disabled": false
}