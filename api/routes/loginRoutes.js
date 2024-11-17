const express = require('express');
const router = express.Router();
const controllerLogin = require('../controllers/loginControllers');

router.get('/', controllerLogin.loginForm);

router.post('/', controllerLogin.login);

module.exports = router;

