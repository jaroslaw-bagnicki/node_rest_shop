exports.addProduct = (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity || 0
  };
  return res.status(201).json({
    message: 'Product created.',
    product
  });
};
