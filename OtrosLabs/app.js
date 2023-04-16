const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const csrf = require('csurf');
const isAuth = require('./util/is-auth');
const multer = require('multer');
const request = require('request');
require("dotenv").config();

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

app.get('/', (req, res) => {
    request(`http://api.openweathermap.org/geo/1.0/direct?q=Mexico&limit=5&appid=${process.env.API_KEY}`, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const respuesta = JSON.parse(body);
            const latitud = respuesta[0].lat;
            const longitud = respuesta[0].lon;
            request(`https://api.openweathermap.org/data/2.5/weather?lat=` + latitud + `&lon=` + longitud + `&appid=${process.env.API_KEY}`, (error, response, body) => {
                if (!error && response.statusCode === 200) {
                    const weather = JSON.parse(body);
                    res.render('clima.ejs', { weather });
                } else {
                    console.error(error);
                    res.send('Error al obtener la información del clima');
                }
            });
        } else {
            console.error(error)
            res.send('Error al obtener la información de la localización')
        }
    });
});

app.use((request, response, next) => {
    response.status(404);
    response.send('Error: Laboratorio no disponible'); 
});

app.listen(3000);