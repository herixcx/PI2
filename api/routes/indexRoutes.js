const express = require('express');
const router = express.Router();
const controllerIndex = require('../controllers/indexControllers');

router.get('/', controllerIndex.index);

router.get('*', controllerIndex.indexNotFound);

module.exports = router;
