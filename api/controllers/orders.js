exports.createOrder = (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity
  };
  return res.status(201).json({
    message: 'Order created.',
    order
  });
};
