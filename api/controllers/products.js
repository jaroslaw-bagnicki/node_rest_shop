const mongoose = require('mongoose');
const Product = require('../models/product');
const customErrors = require('../utils/customErrors');

const isValid = mongoose.Types.ObjectId.isValid;

exports.getAllProducts = (req, res, next) => {
  Product.find()
    .then(docs => {
      console.log('All products returned.');
      return res.status(200).json(docs);
    })
    .catch(error => {
      console.error('Error: ', error.errmsg);
      next(error);
    });
};

exports.getProductById = (req, res, next) => {
  const id = req.params.id;
  if (!isValid(id)) next(customErrors.invalidId());
  Product.findById(req.params.id)
    .then(doc => {
      if (doc) {
        console.log(`Product returned (id: ${doc._id})`);
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

exports.addProduct = (req, res, next) => {
  const product = new Product({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity || 0
  });
  product.save()
    .then(doc => {
      console.log(`Product saved (id: ${doc._id})`);
      return res.status(201).json({
        message: 'Product created.',
        product: doc
      });
    })
    .catch(error => {
      console.error('Error: ', error.errmsg);
      next(error);
    });
};

exports.updateProduct = (req, res, next) => {
  const id = req.params.id;
  if (!isValid(id)) next(customErrors.invalidId());
  const update = req.body;
  Product.findByIdAndUpdate(id, update, {new: true})
    .then(doc => {
      if (!doc) next(customErrors.docNotExist());
      console.log(`Product updated (id: ${doc._id})`);
      return res.status(200).json({
        message: 'Product updated.',
        product: doc
      });
    })
    .catch(error => {
      console.error('Error: ', error.errmsg);
      next(error);
    });
};

exports.deleteProduct = (req, res, next) => {
  const id = req.params.id;
  if (!isValid(id)) next(customErrors.invalidId());
  Product.findByIdAndDelete(id)
    .then(doc => {
      if (!doc) next(customErrors.docNotExist());
      console.log(`Product deleted (id: ${doc._id})`);
      return res.status(200).json({
        message: 'Product deleted.',
        product: doc
      });
    })
    .catch(error => {
      console.error('Error: ', error);
      next(error);
    });
};
