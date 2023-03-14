const express = require('express');
const hasCreate = require('../util/has-create');

const router = express.Router();

const labsController = require('../controllers/Labs.controller');

router.get('/available/:id', labsController.get_available);

router.get('/available', labsController.get_available);

router.get('/nuevo', hasCreate, labsController.get_nuevo);

router.post('/nuevo', hasCreate, labsController.post_nuevo);

router.get('/select', (request, response, next) => {
    response.render('select', {
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || '',
    });
});

router.get('/Lab1', (request, response, next) => {
    response.render('Lab1', {
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || '',
    });
});

router.get('/Lab3', (request, response, next) => {
    response.render('Lab3', {
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || '',
    });
});

router.get('/Lab4', labsController.get_lab4);


module.exports = router;