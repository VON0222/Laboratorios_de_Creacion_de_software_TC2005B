const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

const LabRutas = require('./routes/Labs.routes');
const LabRutas2 = require('./routes/Labs2.routes');

app.use('/acceso', LabRutas);

app.use('/encuesta', LabRutas2);

app.use((request, response, next) => {
    response.status(404);
    response.send('Error: Laboratorio no disponible'); 
});

app.listen(3000);