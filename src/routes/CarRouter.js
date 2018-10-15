const express = require('express');
const routes = express.Router();

const CarController = require('./../controllers/CarController');

routes.get('/cars', CarController.index);
routes.post('/cars/create', CarController.create);
routes.put('/cars/:id', CarController.update);
routes.get('/cars/:id', CarController.show);
routes.delete('/cars/:id', CarController.destroy);

module.exports = routes;