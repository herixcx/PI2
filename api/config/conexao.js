var mysql = require("mysql2");
var database = "PI";

var conexao = mysql.createConnection({
    user: 'root',
    password: 'Gui1501',
    host: 'localhost',
    port: 3306
})

conexao.connect((err) => {
    if(err){
        console.log("Erro ao conectar no Mysql: " + err);
        return
    }
    conexao.query('USE ' + database);
    console.log("\nConexao Estabelecida com Sucesso!!!");
})

module.exports = conexao;
