const router = require('express').Router();

const empleadoController = require('../controllers/empleadoController');

router.get('/empleado', empleadoController.list);
router.post('/add/empleado', empleadoController.save);
router.get('/update/empleado/:id', empleadoController.edit);
router.post('/update/empleado/:id', empleadoController.update);
router.get('/delete/empleado/:id', empleadoController.delete);

module.exports = router;