const express = require('express');
const morgan = require('morgan');
const productsRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');

// Setup app
const app = express();

// Setup logger middleware
app.use(morgan('dev'));

// Setup routers
app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);

// Handling resource not found
app.use((req, res, next) => {
  const error = new Error('Not found.');
  error.status = 404;
  next(error);
});

// Handling errors
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({error : {
    message: error.message
  }});
});

module.exports = app;
