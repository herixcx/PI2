const conexao = require('../config/conexao');

module.exports = {
  reserva, 
  reservar,
};

function reserva(req, res) {
  res.render('reserva', { error: null });
}

function reservar(req, res) {
  const { usu_email, numero_pessoas, data_ag, hora_ag, nome_ag, observacoes} = req.body;
    const m_sql = `SELECT * FROM agendamentos WHERE usu_email = "${usu_email}" and status = "PENDENTE"`;
    
    if (m_sql.length > 0) {
      return res.render('cadastro', { error: 'Usuário já possui um agendamento pendente!' });}
  
  conexao.query(m_sql, (err, results) => { 
      if (err) {
          return res.status(500).send('Erro ao verificar usuário no banco de dados');
      }

      if (results.length > 0) {
          return res.render('cadastro', { error: 'Usuário já existe!' });
      }

      const insert_sql = `INSERT INTO agendamentos (numero_pessoas, data_ag, hora_ag , nome_ag, usu_email, observacoes) VALUES ("${numero_pessoas}", "${data_ag}", "${hora_ag}", "${nome_ag}", ${usu_email}, ${observacoes})`;

      conexao.query(insert_sql, (err, result) => {
          if (err) {
              return res.status(500).send('Erro ao cadastrar usuário');
          }

          res.redirect('/reserva');
      });
  });
}