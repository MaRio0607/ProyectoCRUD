const router = require('express').Router();

const homeController = require('../controllers/cantidadController');

router.get('/cantidad/:id_instructor', homeController.list);

module.exports = router;