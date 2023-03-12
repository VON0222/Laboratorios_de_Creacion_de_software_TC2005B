const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false,
    saveUninitialized: false,
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

const rutasUsers = require('./routes/users.routes');

app.use('/users', rutasUsers);

const LabRutas = require('./routes/Labs.routes');
const LabRutas2 = require('./routes/Labs2.routes');

app.use('/acceso', LabRutas);

app.use('/encuesta', LabRutas2);

app.use((request, response, next) => {
    response.status(404);
    response.send('Error: Laboratorio no disponible'); 
});

app.listen(3000);