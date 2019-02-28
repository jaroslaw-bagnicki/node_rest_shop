const router = require('express').Router();
const ordersController = require('../controllers/orders');

// Orders routes
router.get('/', (req, res, next) => res.status(200).send('GET for /orders'));
router.get('/:id', (req, res, next) => res.status(200).send('GET for /orders/:id'));
router.post('/', ordersController.createOrder);
router.patch('/:id', (req, res, next) => res.status(200).send('POST for /orders/:id'));

module.exports = router;
