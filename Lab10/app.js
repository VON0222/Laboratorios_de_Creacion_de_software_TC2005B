const http = require("http");

const server = http.createServer((request, response) => {
    console.log(request.url);
    if (request.url === "/"){
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>Acceso a Labs</h1>")
        response.write("Bienvenido al almacen de laboratorios<br>")
        response.write('<a href="/Lab1">Acceder Laboratorio 1</a><br>');
        response.write('<a href="/Lab3">Acceder Laboratorio 3</a><br>');
        response.write('<a href="/Lab4">Acceder Laboratorio 4</a><br>');
        response.write("</body></html>");
        response.end();
    }
    else if (request.url === "/Lab1") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write('<head><meta charset="utf-8"></head>');
        response.write(`
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
            </p>`);
        response.write('<a href="/Favorito">Encuesta</a><br>');
        response.write("</body></html>");
        response.end();
    }

    else if (request.url === "/Lab3") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write('<head><meta charset="utf-8"></head>');
        response.write(`
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
            </p>
            <section>
            <h2>
                Preguntas css:
            </h2>
            <p>
                <ol>
                    <li><strong>Como ingeniero de software ¿cuál es tu recomendación sobre el uso de !important en un CSS?</strong></li>
                    <p>
                        Ya que !important es usado para darle más importancia a un valor o propiedad de lo normal e ignora el valor anterior se le debe dar un uso moderado y especifico, por lo que solo se deberá usar para excepciones en las que se quiere que tenga un formato especifico. Si se sobre usa, es más probable que la organización de las etiquetas en un css haya sido incorrecta.
                    </p>
                    <li><strong>Si se pone una imagen de fondo en una página HTML, ¿por qué debe escogerse con cuidado?</strong></li>
                    <p>
                        Debido a que la imagen podria dificultar la lectura de los contenidos de la pagina, ademas que en un esfuerzo para hacer legible la pagina se podría requerir multiples cambios de color del texto, por lo que para evitar este problema es mejor elegir cuidadosamente l imagen colocada e fondo para no tener estos problemas.
                    </p>
                    <li><strong>Como ingeniero de software, ¿cuál es tu recomendación al elegir las unidades de un propiedad de estilo entre %, px y pt?</strong></li>
                    <p>
                        Mi recomendación es usar % debido a que se trata de una medida de unidad relativa, mientras que px y pt son medidas de unidad absolutas. Lo que esto significa es que % a diferencia de las otras dos se escala permitiendo la adaptación flexible de los elementos de acuerdo a los tamaños de pantalla.
                    </p>
                    <li><strong>¿Por qué el uso de una versión minimizada del CSS mejora el rendimiento del sitio?</strong></li>
                    <p>
                        Debido a que el navegador requiere descargar la hoja de estilos, por lo que al comprimirlo o minimizarlo reduce el tamaño de bytes que el navegador requiere descargar, de esta manera agilizando la carga de la pagina.
                    </p>
                </ol>
            </p>
        </section>
        `);
        response.write('<a href="/Favorito">Encuesta</a><br>');
        response.write("</body></html>");
        response.end();
    }

    else if (request.url === "/Lab4") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write('<head><meta charset="utf-8"></head>');
        response.write(`
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
                <input type="button" value="¿Como esta el clima?" onclick="presihatitator.show()">
            </section>    
        `);
        response.write('<a href="/Favorito">Encuesta</a><br>');
        response.write("</body></html>");
        response.end();
    }

    else if (request.url === "/Favorito" && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>Encuesta</h1>");
        response.write('<form action="/Favorito" method="POST">');
    let form = `
            <fieldset>
                <legend>¿Cuál fue tu lab favorito?:</legend>
                <div>
                    <input type="radio" id="Lab1" name="Labs" value="Lab1">
                    <label for="Lab1">Laboratorio 1</label>
                </div>
                <div>
                    <input type="radio" id="Lab3" name="Labs" value="Lab3">
                    <label for="Lab2">Laboratorio 3</label>
                </div>
                <div>
                    <input type="radio" id="Lab4" name="Labs" value="Lab4">
                    <label for="Lab3">Laboratorio 4</label>
                </div>
            </fieldset>
            <br>
            <input type="submit" value="Elegir">
        `;
        response.write(form);
        response.write("</form>");
        response.write("</body></html>");
        response.end();
    }
    else if(request.url === "/Favorito" && request.method === "POST") {

        const datos = [];
        
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);

            response.setHeader('Content-Type', 'text/html');
            response.write("<!DOCTYPE html>");
            response.write("<html>");
            response.write('<head><meta charset="utf-8"></head><body>');
            response.write('<h1>Resultados</h1>');

            const lab = datos_completos.split('=')[1];
            if (lab === "Lab1") {
                response.write('Mi lab favorito tambien es el Lab1');
            }
            else if (lab === "Lab3") {
                response.write('Mi lab favorito tambien es el Lab3');
            }
            else if (lab === "Lab4") {
                response.write('Mi lab favorito tambien es el Lab4');
            }

            response.write("</body></html>");
            return response.end();
        })
    }
    else {

        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>Error: 404</h1>");
        response.write("<h3>La pagina que esta tratando de alcanzar no existe</h3>");
        response.write("</body></html>");
        response.end();
    }
})



server.listen(3000);