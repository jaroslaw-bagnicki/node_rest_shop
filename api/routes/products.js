const router = require('express').Router();
const productsController = require('../controllers/products');

// Products routes
router.get('/', (req, res, next) => res.status(200).send('GET for /products'));
router.get('/:id', (req, res, next) => res.status(200).send('GET for /products/:id'));
router.post('/', productsController.addProduct);
router.patch('/:id', (req, res, next) => res.status(200).send('POST for /products/:id'));
router.delete('/:id', (req, res, next) => res.status(200).send('DELETE for /products/:id'));

module.exports = router;
