const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('index.html');
});

routes.all('/cars*', require('./CarRouter'));

module.exports = routes;