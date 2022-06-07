const router = require('express').Router();
const express = require('express')
const pacienteController = require('../controllers/busquedaController');

// router.get('/buscarpaciente', pacienteController.search);
router.get('/submit_form_with_post', pacienteController.post);
router.get('/submit_form_with_get', pacienteController.submit);
router.post('/submit_form_with_post', pacienteController.submit_post);
//router.get('/', pacienteController.get);
module.exports = router;