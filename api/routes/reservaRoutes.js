const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const controllerReserva = require('../controllers/reservaControllers');

router.get('/', authMiddleware, controllerReserva.reserva);

module.exports = router;


