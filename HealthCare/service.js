const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Service name is required'],
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, 'Service price is required'],
    min: [0, 'Price must be positive']
  }
});

module.exports = mongoose.model('Service', ServiceSchema);
