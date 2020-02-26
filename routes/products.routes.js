const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');

router.get('/products', async (req, res) => {
  try {
    const result = await Product
    .find()
    if(!result) res.status(404).json({ post: 'Not found...'});
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/products/:name', async (req, res) => {
  try {
    const result = await Product
    .findOne({name: req.params.name})
    if(!result) res.status(404).json({ post: 'Not found...'});
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router
