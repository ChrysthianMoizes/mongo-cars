const express = require('express');

const routes = express.Router();

routes.get('/cars*', require('./CarRouter'));

module.exports = routes;