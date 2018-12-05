const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
    unique: 1,
    maxlength: 100
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = { Product };
