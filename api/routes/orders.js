const router = require('express').Router();
const ordersController = require('../controllers/orders');

// Orders routes
router.get('/', ordersController.getAllOrders);
router.get('/:id', ordersController.getOrderById);
router.post('/', ordersController.createOrder);

module.exports = router;
