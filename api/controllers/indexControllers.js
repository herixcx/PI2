module.exports = {
  index,
  indexNotFound
};


function index(req, res) {
  res.render('index'); 
}

function indexNotFound(req, res) {
  res.status(404).send('<h3>Página Não Encontrada!</h3><p>Erro 404</p>');
}