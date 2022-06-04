const router = require('express').Router();

const instructorController = require('../controllers/instructorController');

router.get('/instructor', instructorController.list);
router.post('/add/instructor', instructorController.save);
router.get('/update/instructor/:id_instructor', instructorController.edit);
router.post('/update/instructor/:id_instructor', instructorController.update);
router.get('/delete/instructor/:id_instructor', instructorController.delete);

module.exports = router;