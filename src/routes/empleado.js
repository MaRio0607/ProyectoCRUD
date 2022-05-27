const router = require('express').Router();

const empleadoController = require('../controllers/empleadoController');

router.get('/', empleadoController.list);
router.post('/add', empleadoController.save);
router.get('/update/:id', empleadoController.edit);
router.post('/update/:id', empleadoController.update);
router.get('/delete/:id', empleadoController.delete);

module.exports = router;