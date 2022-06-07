const router = require('express').Router();

const pacienteController = require('../controllers/pacienteViejoController');

router.get('/pacienteViejo', pacienteController.list);

module.exports = router;