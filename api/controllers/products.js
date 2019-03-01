const mongoose = require('mongoose');
const Product = require('../models/product');

exports.addProduct = (req, res, next) => {
  const product = new Product({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity || 0
  });
  product.save()
    .then(result => {
      console.log('Product saved. Id: ', result._id);
      return res.status(201).json({
        message: 'Product created.',
        product
      });
    })
    .catch(error => {
      console.error('Error: ', error.errmsg);
      next(error);
    });
};
