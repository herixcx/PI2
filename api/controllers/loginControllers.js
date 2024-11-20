const loginModel = require('../models/loginModels');

module.exports = {
    loginForm,
    login,
    logout
};

function loginForm(req, res) {
    res.render('login');
}

function login(req, res) {
    const { email, senha } = req.body;

    loginModel.validarPSW(email, senha, (err, results) => {
       console.log(email, senha)
        if (err) {
            return res.status(500).send('Erro ao verificar usuário no banco de dados' + ':' + err);
        }

        console.log(results)
        if (results.length > 0) {
            req.session.user = results[0];
            return res.redirect('/reserva');
        } else {
            return res.render('login', { error: 'E-mail ou senha inválidos' });
        }
    });
}

function logout(req, res) {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send("Erro ao deslogar.");
        }
        res.redirect('/login');
    });
}