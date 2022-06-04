const router = require('express').Router();

const homeController = require('../controllers/homeController');

router.get('/', homeController.list);

module.exports = router;