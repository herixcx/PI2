var mysql = require("mysql2");
var database = "PI";

var conexao = mysql.createConnection({
    user: 'root',
    password: 'Herixcx02@',
    host: 'localhost',
    port: 3306
});

conexao.connect((err) => {
    if (err) {
        console.log("Erro ao conectar no MySQL: " + err.message);
        return;
    }

    // Certifique-se de usar espaço entre 'USE' e o nome do banco
    conexao.query(`USE ${database}`, (err) => {
        if (err) {
            console.log("Erro ao selecionar banco de dados: " + err.message);
            return;
        }
        console.log("\nConexão estabelecida com sucesso e banco selecionado!");
    });
});

module.exports = conexao;
