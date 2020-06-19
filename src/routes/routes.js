const express = require('express');

const routes = express.Router();

const empresasController = require('../controllers/empresasController.js');

routes.post('/empresas', empresasController.insert);

module.exports = routes;