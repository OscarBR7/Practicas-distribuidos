const express = require('express');
const app = express();
const masterRoutes = require('./routes/master');
const slaveRoutes = require('./routes/slave');

const PORT = 3000;

// Configuración de middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de motor de vistas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Rutas
app.use('/master', masterRoutes);
app.use('/slave', slaveRoutes);

// Ruta inicial
app.get('/', (req, res) => {
    res.redirect('/slave');
});

// Inicio del servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
