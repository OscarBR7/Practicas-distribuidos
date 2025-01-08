const express = require('express');
const { db } = require('../db');
const router = express.Router();

router.post('/create', async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).send('El campo "name" es obligatorio.');
    }

    try {
        await db.query('INSERT INTO test (name) VALUES (?)', [name]);
        res.redirect('/slave');
    } catch (error) {
        console.error('Error al insertar en la base de datos:', error);
        res.status(500).send('Error al insertar en la base de datos.');
    }
});

module.exports = router;
