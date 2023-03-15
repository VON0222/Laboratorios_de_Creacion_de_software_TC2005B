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
            isLoggedIn: request.session.isLoggedIn || false,
            nombre: request.session.nombre || '',
            privilegios: request.session.privilegios || [],
        });
    })

    .catch(error => {
        console.log(error);
    });

};

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo', {
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || '',
        csrfToken: request.csrfToken(),
    });
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
            <input type="hidden" name="_csrf" value="` + request.csrfToken() + `" >
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
    let descripcion = `Lab18:
    -¿Qué otras formas de autentificación existen?
    Hay varias formas de autentificación, como por ejemplo identificador y contraseña, 
    identificador y contraseña OTP, verificación biometrica, identificador y 
    contraseña sobre tarjeta inteligente, etc.

    Lab19:
    -¿En qué consiste el control de acceso basado en roles?
    El control de acceso basado en roles consiste en asignarles a cada usuario uno o 
    más roles, los cuales tienen ciertos privilegios que les permiten realizar 
    ciertas acciones en el software. De esta manera manejando diversos niveles de 
    autorización dependiendo del rol del usuario.
    -Sistema con RBAC
        *Ventajas: Permiten un mejor manejo de autorización, se maneja la seguridad a
        un nivel más granular, no es necesario modificar las politicas cuando algun 
        usuario deja de formar parte sel sistema, los nuevos usuarios pueden activar
        autorizaciones rapida y facilmente y permite a las empresas que implementan 
        este sistema de acceso ahorrar grandes sumas de dinero ya que no se invierte 
        en modificar las politicas.
        *Desventajas: No tiene la capacidad de manejar permisos de manera individual.
    -Sistema con ACL
        *Ventajas: Permite el manejo de seguridad a nivel de usuario individual, 
        permite el manejo del flujo de trafico en una red lo que provoca un mejor 
        desmpeño del sistema, permite especificar que areas de un servidor, red, o 
        servicio se puede acceder por que usuario.
        *Desventajas: Debido a su manejo tan especifico de la seguridad y 
        autorizaciones se debe modificar las politicas para asi dar acceso a nuevos 
        usuarios o remover el acceso de usuarios fuera de uso, esto puede elebar los 
        costos de soporte. En general RBAC es más efectivo que ACL en cuanto a 
        administración y seguridad se refiere.`;
    let texto = 'Lab favorito: ' + request.body.Labs + descripcion;
    filesystem.writeFileSync('encuesta.txt', texto);
    ans = request.body.Labs;
    response.render('Resultados', {
        res: ans, 
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || '',
    });
};

exports.get_lab4 = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'Lab4.html'));
};
