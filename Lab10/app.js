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
        response.write('<a href="/menu">Acceder</a>');
        response.write("</body></html>");
        response.end();
    }
    else if (request.url === "/menu" && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>Acceso a Labs</h1>");
        response.write('<form action="/menu" method="POST">');
    
    let form = `
            <fieldset>
                <legend>Laboratorios disponibles:</legend>
                <div>
                    <input type="radio" id="Lab1" name="Labs" value="Lab1">
                    <label for="Lab1">Laboratorio 1</label>
                </div>
                <div>
                    <input type="radio" id="Lab2" name="Labs" value="Lab2">
                    <label for="Lab2">Laboratorio 2</label>
                </div>
                <div>
                    <input type="radio" id="Lab3" name="Labs" value="Lab3">
                    <label for="Lab3">Laboratorio 3</label>
                </div>
            </fieldset>
            <br>
            <input type="submit" value="menu">
        `;
        response.write(form);
        response.write("</form>");
        response.write("</body></html>");
        response.end();
    }
    else if(request.url === "/menu" && request.method === "POST") {

        const datos = [];
        
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
        })
    }
})



server.listen(3000);