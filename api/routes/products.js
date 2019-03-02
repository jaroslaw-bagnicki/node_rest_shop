const router = require('express').Router();
const productsController = require('../controllers/products');

// Products routes
router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductById);
router.post('/', productsController.addProduct);
router.patch('/:id', (req, res, next) => res.status(200).send('POST for /products/:id'));
router.delete('/:id', productsController.deleteProduct);

module.exports = router;
