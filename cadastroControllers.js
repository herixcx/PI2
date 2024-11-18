const conexao = require('../config/conexao');

module.exports = {
    cadastroForm,
    cadastrar
};

function cadastroForm(req, res) {
    res.render('cadastro', { error: null });
}

function cadastrar(req, res) {
    const { nome, email, senha,} = req.body;

    const m_sql = `SELECT * FROM usuarios WHERE usu_email = "${email}"`;
    conexao.query(m_sql, (err, results) => {
        if (err) {
            return res.status(500).send('Erro ao verificar usuário no banco de dados');
        }

        if (results.length > 0) {
            return res.render('cadastro', { error: 'Usuário já existe!' });
        }

        const insert_sql = `INSERT INTO usuarios (usu_nome, usu_email, usu_password) VALUES ("${nome}", "${email}", "${senha}")`;
        conexao.query(insert_sql, (err, result) => {
            if (err) {
                return res.status(500).send('Erro ao cadastrar usuário: ' + err);
            }

            res.redirect('/reserva');
        });
    });
}
