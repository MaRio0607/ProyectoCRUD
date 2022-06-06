const router = require('express').Router();

const pacienteController = require('../controllers/busquedaController');

router.get('/buscarpaciente', pacienteController.search);
module.exports = router;