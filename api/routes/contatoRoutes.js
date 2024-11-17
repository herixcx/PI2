const express = require('express');
const router = express.Router();
const controllerContato = require('../controllers/contatoControllers');


router.get('/', controllerContato.contato);


module.exports = router;
