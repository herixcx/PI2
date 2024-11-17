const reservaModels = require("../models/reservaModels");

module.exports = {
  reserva,
};

function reserva(req, res) {
  res.render('reserva');
}