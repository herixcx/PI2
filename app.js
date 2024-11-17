const express = require('express');
const session = require('express-session');
const app = express();

const indexRoutes = require('./api/routes/indexRoutes');
const loginRoutes = require('./api/routes/loginRoutes');
const contatoRoutes = require('./api/routes/contatoRoutes');
const eventosRoutes = require('./api/routes/eventosRoutes');
const historiaRoutes = require('./api/routes/historiaRoutes');
const cardapioRoutes = require('./api/routes/cardapioRoutes');
const cadastroRoutes = require('./api/routes/cadastroRoutes');
const reservaRoutes = require('./api/routes/reservaRoutes');
const controllerLogin = require('./api/controllers/loginControllers');

app.use(session({
    secret: 'seuSegredoAqui', 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use((req, res, next) => {
    res.locals.user = req.session.user;
    next();
});

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'ejs');
app.set('views', './api/views'); 

const port = 3000;

app.use('/static', express.static(__dirname + '/public'));
app.use(express.static('public'));
app.use(express.static('estilos'));
app.use(express.static('imagens'));
app.use(express.static('js'));

app.use("/login", loginRoutes);
app.use("/contato", contatoRoutes);
app.use("/eventos", eventosRoutes);
app.use("/historia", historiaRoutes);
app.use("/cardapio", cardapioRoutes);
app.use("/cadastro", cadastroRoutes);
app.use("/reserva", reservaRoutes);
app.get('/logout', controllerLogin.logout);
app.use("/", indexRoutes);


app.listen(port, () => {
    console.log(`Aplicativo Rodando na Porta ${port}`);
})


module.exports = app;
