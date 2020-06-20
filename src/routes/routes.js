const express = require('express');

const routes = express.Router();

const empresasController = require('../controllers/empresasController.js');
const funcionariosController = require('../controllers/funcionariosController.js');

routes.post('/empresa', empresasController.insert);
routes.post('/funcionario', funcionariosController.insert);

module.exports = routes;