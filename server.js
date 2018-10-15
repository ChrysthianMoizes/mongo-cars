const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mongocars', {useNewUrlParser: true});

requireDir('./src/models');

const Car = mongoose.model('Car');

app.use('/', require('./src/routes/routes'));

app.listen(3001);