// app.js

// Importar módulos necesarios
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Conectar a la base de datos
connectDB();

// Configurar middleware
app.use(cors());
app.use(bodyParser.json());

// Definir rutas
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 8080;

// Iniciar el servidor
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
