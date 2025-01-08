const express = require('express');
const { db } = require('../db');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM test');
        res.render('index', { rows });
    } catch (error) {
        console.error('Error al obtener datos de la base de datos:', error);
        res.status(500).send('Error al obtener datos de la base de datos.');
    }
});

module.exports = router;
