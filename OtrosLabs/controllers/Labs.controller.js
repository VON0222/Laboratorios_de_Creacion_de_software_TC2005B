const path = require('path');

const Labo = require('../models/labs.model');

exports.get_available = (request, response, next) => {
    response.render('labs', {labsava: Labo.fetchAll()});
};

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo');
};

exports.post_nuevo = (request, response, next) => {
    
    const laboratorio = new Labo({
        nombre: request.body.nombre,
        fecha: request.body.fecha,
    });

    laboratorio.save();

    response.status(300).redirect('/acceso/available');
};

exports.get_Favorito = (request, response, next) => {

let html = `
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

response.send(html);
};

exports.post_Favorito = (request, response, next) => {
    const filesystem = require('fs');
    let descripcion = `\nEl estilo MVC es de gran utilidad ya que reduce las responsabilidades que carga 
    cada segmento del codigo aplicando el principio SRP lo que reduce la deuda tecnica
    Dicho esto, no veo ninguna desventaja, más que el tiempo necesario para establecer 
    este estilo arquitectonico durante el desarrollo.`;
    let texto = 'Lab favorito: ' + request.body.Labs + descripcion;
    filesystem.writeFileSync('encuesta.txt', texto);
    ans = request.body.Labs;
    response.render('Resultados', {res: ans});
};

exports.get_lab4 = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'Lab4.html'));
};