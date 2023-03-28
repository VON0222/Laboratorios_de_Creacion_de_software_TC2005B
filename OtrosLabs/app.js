const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const csrf = require('csurf');
const isAuth = require('./util/is-auth');
const multer = require('multer')


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
app.use(bodyParser.json());

const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, 'public/uploads');
    },
    filename: (request, file, callback) => {
        callback(null, new Date().getMilliseconds() + '-' + file.originalname
        );
    },
});

app.use(multer({ storage: fileStorage }).single('imagen'));

const csrfProtection = csrf();

app.use(csrfProtection);

const rutasUsers = require('./routes/users.routes');

app.use('/users', rutasUsers);

const LabRutas = require('./routes/Labs.routes');
const LabRutas2 = require('./routes/Labs2.routes');

app.use('/acceso', isAuth, LabRutas);

app.use('/encuesta', isAuth, LabRutas2);

app.use((request, response, next) => {
    response.status(404);
    response.send('Error: Laboratorio no disponible'); 
});

app.listen(3000);