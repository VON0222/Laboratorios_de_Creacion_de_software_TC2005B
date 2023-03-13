const path = require('path');

const Labo = require('../models/labs.model');

exports.get_available = (request, response, next) => {

    const cookies = request.get('Cookie') || '';

    let consultas = cookies.split('=')[1] || 0;

    consultas++;

    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');
    
    const id = request.params.id || 0;

    Labo.fetch(id)
    .then(([rows, fieldData]) => {
        console.log(rows);
        
        response.render('labs', { 
            labsava: rows,
            ultimo_laboratorio: request.session.ultimo_laboratorio || '',
        });
    })

    .catch(error => {
        console.log(error);
    });

};

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo');
};

exports.post_nuevo = (request, response, next) => {
    
    const laboratorio = new Labo({
        nombre: request.body.nombre,
        fecha: request.body.fecha,
    });

    laboratorio.save()
    .then(([rows, fieldData]) => {
        request.session.ultimo_laboratorio = laboratorio.nombre;

        response.status(300).redirect('/acceso/available');
    })
    .catch(error => console.log(error));

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
    let descripcion = `La ventaja de escribir el codigo SQL en la capa del modelo es que 
    se puede proteger la base de datos de ataques de SQL injection ya que de esta manera 
    se evita que el codigo llegue directo a la bse de datos ademas de poder limpiar los 
    inputs antes de ser mandados a la base de datos.
    El SQL injection es un metodo para tratar de burlar la seguridad de una base de datos, 
    de esta manera siendo capas de extraer o insertar datos a la base de datos dando como }
    input para la pagina parte de un codigo.`;
    let texto = 'Lab favorito: ' + request.body.Labs + descripcion;
    filesystem.writeFileSync('encuesta.txt', texto);
    ans = request.body.Labs;
    response.render('Resultados', {res: ans});
};

exports.get_lab4 = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'Lab4.html'));
};
