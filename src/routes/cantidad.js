const router = require('express').Router();

const homeController = require('../controllers/cantidadController');

router.get('/cantidad', homeController.list);

module.exports = router;