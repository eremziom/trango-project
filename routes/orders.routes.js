const express = require('express');
const router = express.Router();
const Order = require('../models/order.model');

router.get('/order', async (req, res) => {
  try {
    const result = await Order
    .find()
    if(!result) res.status(404).json({ post: 'Not found...'});
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/order', async (req, res) => {
  try {

    const { cart, customerData, details} = req.body;

    const newOrder = new Order({cart: cart, customerData: customerData, details: details})
    await newOrder.save();
    res.json({message: 'Order Sent'});
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router
