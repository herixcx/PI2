const express = require('express');
const router = express.Router();
const controllerEventos = require('../controllers/eventosControllers');

router.get('/', controllerEventos.eventos);

module.exports = router;