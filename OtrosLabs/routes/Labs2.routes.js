const express = require('express');
const path = require('path');

const router = express.Router();

const labs2Controller = require('../controllers/Labs.controller');

router.get('/Favorito', labs2Controller.get_Favorito);

router.post('/Favorito', labs2Controller.post_Favorito);

module.exports = router;