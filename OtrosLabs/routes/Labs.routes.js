const express = require('express');

const router = express.Router();

const labsController = require('../controllers/Labs.controller');

router.get('/available/:id', labsController.get_available);

router.get('/available', labsController.get_available);

router.get('/nuevo', labsController.get_nuevo);

router.post('/nuevo', labsController.post_nuevo);

router.get('/select', (request, response, next) => {
    response.render('select');
});

router.get('/Lab1', (request, response, next) => {
    response.render('Lab1');
});

router.get('/Lab3', (request, response, next) => {
    response.render('Lab3');
});

router.get('/Lab4', labsController.get_lab4);


module.exports = router;