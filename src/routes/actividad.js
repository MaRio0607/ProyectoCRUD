const router = require('express').Router();

const actividadController = require('../controllers/actividadController');

router.get('/actividad', actividadController.list);
router.post('/add/actividad', actividadController.save);
router.get('/update/actividad/:id_actividad', actividadController.edit);
router.post('/update/actividad/:id_actividad', actividadController.update);
router.get('/delete/actividad/:id_actividad', actividadController.delete);

module.exports = router;