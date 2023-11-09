const { Schema, model } = require('mongoose');

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: false,
    },
    categories: {
      type: Array,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    requirementsMin: {
      type: Object,
      required: true,
    },
    requirementsMax: {
      type: Object,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = model('product', productSchema);
