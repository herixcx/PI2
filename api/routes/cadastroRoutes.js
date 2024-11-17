const express = require('express');
const router = express.Router();
const cadastroController = require('../controllers/cadastroControllers');

router.get('/', cadastroController.cadastroForm);
router.post('/', cadastroController.cadastrar);

module.exports = router;
