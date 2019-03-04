const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const orderItemSchema = new Schema(
  {
    _id: { type: ObjectId, select: false },
    product: { type: ObjectId,  ref: 'Product' },
    quantity: { type: Number, default: 0 }
  },
  { versionKey: false }
);

const orderSchema = new Schema(
  { 
    createAt: { type: Date, default: Date.now },
    items: [orderItemSchema] 
  },
  { versionKey: false }
);

module.exports = mongoose.model('Order', orderSchema, 'orders');
