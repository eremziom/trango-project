const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  cart: [
    {
    name: {type: String},
    color: {type: String},
    paint: {type: String},
    graver: {type: String},
    length: {type: String},
    wish: {type: String},
    count: {type: Number},
    price: {type: Number},
    fullPrice: {type: Number},
    categogry: {type: String},
    }
  ],
  customerData: {
    firstName: {type: String},
    lastName: {type: String},
    phone: {type: String},
    email: {type: String},
    addressStreet: {type: String},
    addressCode: {type: String},
    addressTown: {type: String},
    addressCountry: {type: String},
    deliveryStreet: {type: String},
    deliveryCode: {type: String},
    deliveryTown: {type: String},
    deliveryCountry: {type: String},
  },
  details: {
    orderDate: {type: String},
    totalPrice: {type: Number},
    orderNumber: {type: String},
  },
});

module.exports = mongoose.model('Order', orderSchema);
