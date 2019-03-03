const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const orderItem = new Schema({
  product: { type: ObjectId,  ref: 'Product' },
  quantity: { type: Number, default: 1 }
},
{
  versionKey: false
});

const orderSchema = new Schema(
  {
    _id: ObjectId,
    items: [orderItem]
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model('Order', orderSchema, 'orders');
