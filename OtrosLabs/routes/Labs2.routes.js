const express = require('express');

const router = express.Router();

router.get('/Favorito', (request, response, next) => {

    let html5 = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Encuesta</title>
    </head>
    <body>
        <h1>Encuesta</h1>
        <form action="/encuesta/Favorito" method="POST">
        <fieldset>
                <legend>¿Cuál fue tu lab favorito?:</legend>
                <div>
                    <input type="radio" id="Lab1" name="Labs" value="Lab 1">
                    <label for="Lab1">Laboratorio 1</label>
                </div>
                <div>
                    <input type="radio" id="Lab3" name="Labs" value="Lab 3">
                    <label for="Lab2">Laboratorio 3</label>
                </div>
                <div>
                    <input type="radio" id="Lab4" name="Labs" value="Lab 4">
                    <label for="Lab3">Laboratorio 4</label>
                </div>
            </fieldset>
            <br>
            <input type="submit" value="Elegir">
        </form>
    </body>
    </html>
    `;

    response.send(html5);
});

router.post('/Favorito', (request, response, next) => {
    const filesystem = require('fs');
    let descripcion = "\nEl archivo package.json "
    let texto = 'Lab favorito: ' + request.body.Labs + descripcion;
    filesystem.writeFileSync('encuesta.txt', texto)
    response.send("Mi lab favorito tambien es el " + request.body.Labs);
});

module.exports = router;