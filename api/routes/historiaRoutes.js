const express = require('express');
const router = express.Router();
const controllerHistoria = require('../controllers/historiaControllers');

router.get('/', controllerHistoria.historia);

module.exports = router;