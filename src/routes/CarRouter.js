const express = require('express');
const routes = express.Router();

const CarController = require('./../controllers/CarController');

routes.get('/cars', CarController.index);

routes.post('/cars/create', CarController.create);

module.exports = routes;