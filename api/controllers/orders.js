const mongoose = require('mongoose');
const Order = require('../models/order');
const customErrors = require('../utils/customErrors');

const isValid = mongoose.Types.ObjectId.isValid;

exports.getAllOrders = (req, res, next) => {
  Order.find()
    .populate({
      path: 'items.product',
      select: 'name price'
    })
    .then(docs => {
      console.log('All orders returned.');
      return res.status(200).json(docs);
    })
    .catch(error => {
      console.error('Error: ', error.errmsg);
      next(error);
    });
};

exports.getOrderById = (req, res, next) => {
  const id = req.params.id;
  if (!isValid(id)) next(customErrors.invalidId());
  Order.findById(req.params.id)
    .populate({
      path: 'items.product',
      select: 'name price'
    })
    .then(doc => {
      if (doc) {
        console.log(`Order returned (id: ${doc._id})`);
        return res.status(200).json(doc);
      } else {
        next();       
      }
    })
    .catch(error => {
      console.error('Error: ', error);
      next(error);
    });
};

exports.createOrder = (req, res, next) => {
  const order = new Order({
    _id: mongoose.Types.ObjectId(),
    items: req.body
  });
  order.save()
    .then(doc => {
      console.log(`Order saved (id: ${doc._id})`);
      return res.status(201).json({
        message: 'Order created.',
        order: doc
      });
    })
    .catch(error => {
      console.error('Error: ', error.errmsg);
      next(error);
    });
};
