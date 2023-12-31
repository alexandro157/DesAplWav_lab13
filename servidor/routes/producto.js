//Rutas producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

//api/productos
router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.put('/:id', productoController.actualizarProducto);
router.get('/:id', productoController.verProducto);
router.get('/reporte/pdf', productoController.reportePdfProductos);
router.delete('/:id', productoController.eliminarProducto);

module.exports = router;