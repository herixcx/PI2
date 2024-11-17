const express = require('express');
const router = express.Router();
const controllerCardapio = require('../controllers/cardapioControllers');


router.get('/', controllerCardapio.cardapio);


module.exports = router;
