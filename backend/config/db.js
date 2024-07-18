// config/db.js

// Importar mongoose
const mongoose = require('mongoose');

// Función para conectar a la base de datos MongoDB
const connectDB = async () => {
  try {
    // Conectar a MongoDB usando la URL
    await mongoose.connect('mongodb://localhost:27017/beautyproducts', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...'); // Mensaje de éxito en la conexión
  } catch (err) {
    console.error(err.message); // Mostrar error en caso de fallo
    process.exit(1); // Salir del proceso con error
  }
};

// Exportar la función de conexión
module.exports = connectDB;
