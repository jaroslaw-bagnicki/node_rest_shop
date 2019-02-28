const router = require('express').Router();

// Orders routes
router.get('/', (req, res, next) => res.status(200).send('GET for /orders'));
router.get('/:id', (req, res, next) => res.status(200).send('GET for /orders/:id'));
router.post('/', (req, res, next) => res.status(201).send('POST for /orders'));
router.patch('/:id', (req, res, next) => res.status(200).send('POST for /orders/:id'));

module.exports = router;
