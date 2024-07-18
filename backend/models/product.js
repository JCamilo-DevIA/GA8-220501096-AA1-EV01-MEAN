// models/product.js

// Importar mongoose
const mongoose = require('mongoose');

// Definir el esquema de Producto
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  inventory: {
    type: Number,
    required: true,
  },
});

// Exportar el modelo de Producto
module.exports = mongoose.model('Product', ProductSchema);
