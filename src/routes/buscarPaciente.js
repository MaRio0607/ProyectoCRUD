const router = require('express').Router();

const pacienteController = require('../controllers/busquedaController');

router.post('/buscarpaciente/', pacienteController.search);
router.get('/buscarpaciente/:nombre_busqueda', pacienteController.get);
module.exports = router;