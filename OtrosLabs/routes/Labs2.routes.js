const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/Favorito', (request, response, next) => {
    response.render('Favorito');
});

router.post('/Favorito', (request, response, next) => {
    const filesystem = require('fs');
    let descripcion = "\nExisten otros templating engines para node, como por ejemplo Pug, Haml.js, hbs, Eta, whiskers, entre otros."
    let texto = 'Lab favorito: ' + request.body.Labs + descripcion;
    filesystem.writeFileSync('encuesta.txt', texto)
    ans = request.body.Labs;
    response.render('Resultados', {res: ans});
});


module.exports = router;