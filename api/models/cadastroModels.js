const conexao = require('../config/conexao');

module.exports = {
    validarPSW
};

function validarPSW(email, senha, callback) {
    const m_sql = `SELECT * FROM usuarios WHERE usu_email = "${email}" AND usu_password = "${senha}"`;

    conexao.query(m_sql, callback);
}