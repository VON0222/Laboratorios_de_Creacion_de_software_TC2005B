const http = require("http");

const server = http.createServer((request, response) => {
    console.log(request.url);
    response.setHeader("Content-Type", "text/html");
    response.write("Hola desde Node!");
    response.end();
})

server.listen(3000);