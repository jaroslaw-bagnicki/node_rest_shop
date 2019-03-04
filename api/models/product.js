const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: String,
    price: Number,
    quantity: Number
  },
  { versionKey: false  }
);

module.exports = mongoose.model('Product', productSchema, 'products');
