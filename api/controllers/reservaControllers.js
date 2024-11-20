const conexao = require('../config/conexao');

module.exports = {
  reserva,
  reservar,
};

// Renderiza a página de reserva
function reserva(req, res) {
  res.render('reserva', { error: null });
}

// Realiza a reserva
function reservar(req, res) {
  const { usu_email, numero_pessoas, data_ag, hora_ag, nome_ag, observacoes } = req.body;

  // Verifica se já existe um agendamento pendente para o usuário
  const m_sql = 'SELECT COUNT(*) AS total FROM agendamentos WHERE usu_email = ? AND status = "PENDENTE"';
  conexao.query(m_sql, [usu_email], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erro ao verificar usuário no banco de dados.');
    }
    console.log(results[0].total > 0)
    // Se já houver um agendamento pendente
    if (results[0].total > 0) {
      return res.render('cadastro', { error: 'Usuário já possui um agendamento pendente!' });
    }

    // Insere o novo agendamento no banco de dados
    const insert_sql = `INSERT INTO agendamentos (numero_pessoas, data_ag, hora_ag, nome_ag, usu_email, observacoes) 
                        VALUES (?, ?, ?, ?, ?, ?)`;

    conexao.query(insert_sql, [numero_pessoas, data_ag, hora_ag, nome_ag, usu_email, observacoes || null], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Erro ao cadastrar o agendamento.');
      }

      res.redirect('/reserva');
    });
  });
}


