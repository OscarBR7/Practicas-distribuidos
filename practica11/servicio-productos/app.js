const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/productos', (req, res) => {
const productos = [
{ id: 1, nombre: 'Laptop', precio: 1000 },
{ id: 2, nombre: 'Smartphone', precio: 500 },
{ id: 3, nombre: 'Tablet', precio: 300 }
];
res.json(productos);
});
app.listen(port, () => {
console.log(`Servicio de productos escuchando en el puerto ${port}`);
});