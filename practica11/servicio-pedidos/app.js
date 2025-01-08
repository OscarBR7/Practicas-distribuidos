const express = require('express');
const axios = require('axios'); // Para llamar al servicio de productos
const app = express();
const port = process.env.PORT || 4000;
app.get('/pedidos', async (req, res) => {
// Simula la obtención de productos del otro microservicio
// const productos = await axios.get('http://localhost:3000/productos');
const productos = await axios.get('http://servicio-productos:3000/productos');

const pedidos = [
{ id: 1, productoId: 1, cantidad: 2 },
{ id: 2, productoId: 3, cantidad: 1 },
];
// Combina info de pedidos con el nombre del producto
const pedidosConNombre = pedidos.map(p => {
const producto = productos.data.find(prod => prod.id === p.productoId);
return { ...p, productoNombre: producto ? producto.nombre :
'Desconocido' };
});
res.json(pedidosConNombre);
});
app.listen(port, () => {
console.log(`Servicio de pedidos escuchando en el puerto ${port}`);
});