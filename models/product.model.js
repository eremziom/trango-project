const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {type: Number},
  name: {type: String},
  category: {type: String},
  price: {type: Number},
  weight: {type: String},
  photo: {type: String},
  option: {type: Object},
});

module.exports = mongoose.model('Product', productSchema);
