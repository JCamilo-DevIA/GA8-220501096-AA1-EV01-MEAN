// controllers/productController.js

// Importar el modelo de Producto
const Product = require('../models/product');

// Obtener todos los productos
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Obtener productos de la BD
    res.json(products); // Enviar productos en formato JSON
  } catch (err) {
    res.status(500).json({ message: err.message }); // Enviar error en caso de fallo
  }
};

// Obtener producto por ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); // Obtener producto por ID
    if (product == null) {
      return res.status(404).json({ message: 'Cannot find product' }); // Producto no encontrado
    }
    res.json(product); // Enviar producto en formato JSON
  } catch (err) {
    res.status(500).json({ message: err.message }); // Enviar error en caso de fallo
  }
};

// Crear un nuevo producto
exports.createProduct = async (req, res) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    inventory: req.body.inventory,
  });
  try {
    const newProduct = await product.save(); // Guardar producto en la BD
    res.status(201).json(newProduct); // Enviar producto creado en formato JSON
  } catch (err) {
    res.status(400).json({ message: err.message }); // Enviar error en caso de fallo
  }
};

// Actualizar un producto
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); // Obtener producto por ID
    if (product == null) {
      return res.status(404).json({ message: 'Cannot find product' }); // Producto no encontrado
    }

    // Actualizar campos del producto
    if (req.body.name != null) {
      product.name = req.body.name;
    }
    if (req.body.description != null) {
      product.description = req.body.description;
    }
    if (req.body.price != null) {
      product.price = req.body.price;
    }
    if (req.body.inventory != null) {
      product.inventory = req.body.inventory;
    }

    const updatedProduct = await product.save(); // Guardar producto actualizado
    res.json(updatedProduct); // Enviar producto actualizado en formato JSON
  } catch (err) {
    res.status(400).json({ message: err.message }); // Enviar error en caso de fallo
  }
};

// Eliminar un producto
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); // Obtener producto por ID
    if (product == null) {
      return res.status(404).json({ message: 'Cannot find product' }); // Producto no encontrado
    }

    await product.remove(); // Eliminar producto
    res.json({ message: 'Deleted product' }); // Enviar mensaje de éxito
  } catch (err) {
    res.status(500).json({ message: err.message }); // Enviar error en caso de fallo
  }
};
