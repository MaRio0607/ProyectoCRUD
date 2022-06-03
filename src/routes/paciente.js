const router = require('express').Router();

const pacienteController = require('../controllers/pacienteController');

router.get('/paciente', pacienteController.list);
router.post('/add/paciente', pacienteController.save);
router.get('/update/paciente/:id_paciente', pacienteController.edit);
router.post('/update/paciente/:id_paciente', pacienteController.update);
router.get('/delete/paciente/:id_paciente', pacienteController.delete);

module.exports = router;