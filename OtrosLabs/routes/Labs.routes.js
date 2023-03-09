const express = require('express');
const path = require('path');

const router = express.Router();

const labsready = [
    "Lab1",
    "Lab3",
    "Lab4",
    "Lab5",
    "Lab6",
    "Lab8",
    "Lab10",
    "Lab11"
];

router.get('/available', (request, response, next) => {
    response.render('labs', {labsava: labsready});
});

router.get('/select', (request, response, next) => {
    response.render('select');
});

router.get('/Lab1', (request, response, next) => {
    response.render('Lab1');
});

router.get('/Lab3', (request, response, next) => {
    response.render('Lab3');
});

router.get('/Lab4', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'Lab4.html'));
});


module.exports = router;