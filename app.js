const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const setupHeaders = require('./api/middlewares/setupHeaders');
const notFoundError = require('./api/middlewares/notFoundError');
const errorHandler = require('./api/middlewares/errorHandler');

const productsRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');

// Setup app
const app = express();

// Setup logger middleware
app.use(morgan('dev'));

// Setup body parsing
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.DB_URL, { 
  user: process.env.DB_USERNAME,
  pass: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  useNewUrlParser: true 
});
mongoose.connection.once('connected', () => console.log('Connected to: ' + process.env.DB_URL + process.env.DB_NAME));
mongoose.connection.on('error', (err) => console.error('MongoDB connection error: ', err.errmsg || err.name));

// Setup respons headers
app.use(setupHeaders);

// Setup routers
app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);

app.use(notFoundError);
app.use(errorHandler);

module.exports = app;
