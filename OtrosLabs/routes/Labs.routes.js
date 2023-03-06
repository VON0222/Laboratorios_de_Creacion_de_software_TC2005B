const express = require('express');

const router = express.Router();

router.use('/select', (request, response, next) => {
    let html = `
    <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Acceso a Labs</h1>
                <p> 
                Bienvenido al almacen de laboratorios<br>
                </p>
                <a href="/acceso/Lab1">Acceder Laboratorio 1</a><br>
                <a href="/acceso/Lab3">Acceder Laboratorio 3</a><br>
                <a href="/acceso/Lab4">Acceder Laboratorio 4</a><br>
            </body>
        </html>
    `;

    response.send(html);
});

router.use('/Lab1', (request, response, next) => {
    let html1 = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Laboratorio 1</title>
    </head>

    <body>
        <header>
            <h1>
                Soy José Diego Llaca Castro.
            </h1>
        </header>
        <nav>
            <p>
                Tengo 20 años y estoy estudiando en el Instituto Tecnologico de Estudios Superiores de Monterrey.<br>
                Mi matricula es A01704793 y actualmente me encuentro en mi cuarto semestre de la carrera de Ingenieráa en Tecnologías Computacionales.<br>
            </p>
        </nav>
        <p>
            Tengo varios hobbies:
            <ul>
                <li>
                    Jugar <strong>videojuegos</strong> 
                </li>
                <li>
                    Tocar la guitarra
                </li>
                <li>
                    <em>Dibujar</em> 
                </li>
                <li>
                    Leer
                </li>
                <li>
                    Jugar tenis
                </li>
                <li>
                    Etc.
                </li>
            </ul> 
            <a href="/encuesta/Favorito">Encuesta</a><br>
        </p>
    </body>
    </html>
    `;

    response.send(html1);
});

router.use('/Lab3', (request, response, next) => {
    let html3 = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Laboratorio 1</title>
    </head>

    <body>
        <header>
            <h1>
                Soy José Diego Llaca Castro.
            </h1>
        </header>
        <nav>
            <p>
                Tengo 20 años y estoy estudiando en el Instituto Tecnologico de Estudios Superiores de Monterrey.<br>
                Mi matricula es A01704793 y actualmente me encuentro en mi cuarto semestre de la carrera de Ingenieráa en Tecnologías Computacionales.<br>
            </p>
        </nav>
        <p>
            Tengo varios hobbies:
            <ul>
                <li>
                    Jugar <strong>videojuegos</strong> 
                </li>
                <li>
                    Tocar la guitarra
                </li>
                <li>
                    <em>Dibujar</em> 
                </li>
                <li>
                    Leer
                </li>
                <li>
                    Jugar tenis
                </li>
                <li>
                    Etc.
                </li>
            </ul> 
            <a href="/encuesta/Favorito">Encuesta</a><br>
        </p>
        <footer>
        <img src="https://media.licdn.com/dms/image/C4D12AQGDOOyHZm7ggQ/article-cover_image-shrink_600_2000/0/1624893322758?e=2147483647&v=beta&t=rxr_2gfYyCOaj-pTPauAW-USDMDz960iV4RwxVy0m3I" alt="We need designers :c">
        <p>
            Editor de HTML usado:<br>
            <a href="https://code.visualstudio.com/">Visual Studio Code</a><br>
            Mi correo:<br>
            <a href="mailto:A01704793@tec.mx">A01704793@tec.mx</a>
        </p>
        </footer>
    </body>
    </html>
    `;

    response.send(html3);
});

router.use('/Lab4', (request, response, next) => {

    let html4 = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Laboratorio 4</title>
    </head>
    <body style="text-align: center">
        <section>
            <h1>Ejercicio 1</h1>
            <input type="button" value="Genera una tabla" onclick="generar_tabla()">
        </section>
    
        <section>
            <h1>Ejercicio 2</h1>
            <input type="button" value="Suma aleatoria" onclick="suma_aleatoria()">
        </section>
    
        <section>
            <h1>Ejercicio 3</h1>
            <input type="button" value="Contador de array" onclick="contador(arreglo1)">
        </section>
    
        <section>
            <h1>Ejercicio 4</h1>
            <input type="button" value="Promedio matriz" onclick="promedios(matriz1)">
        </section>
    
        <section>
            <h1>Ejercicio 5</h1>
            <input type="button" value="Numero inverso" onclick="inverso(valor)">
        </section>
    
        <section>
            <h1>Presihatitator:</h1>
            <p>
                El clima puede probar ser una gran molestia y a veces nos gustaria ir preparados para las condiciones climatica que habra en el dia, por ello los informes del clima son utilies para muchas personas.<br>
                Este es un invento que permite saber como esta el dia, si la temperatura o el clima cambia solo se debe presionar un boton y el presihatitator mostrara la información correcta.<br><br>
            </p>
            <input type="button" value="Hace calor" onclick="presihatitator.hot()">
            <input type="button" value="Hace frio" onclick="presihatitator.cold()">
            <input type="button" value="No hay nubes" onclick="presihatitator.sun()">
            <input type="button" value="Va a llover" onclick="presihatitator.rain()"><br>
            <input type="button" value="¿Como esta el clima?" onclick="presihatitator.show()"><br>
            <a href="/encuesta/Favorito">Encuesta</a><br>
        </section>
    </body>
    </html>
    `;

    response.send(html4);
});

router.post('/pedir', (request, response, next) => {
    console.log(request.body);

    response.send("Pediste " + request.body.hot_cakes + " hot cakes");
});


module.exports = router;