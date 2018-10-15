const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const Connect = require('./src/database/connect');

const app = express();
app.use(express.json());

Connect.connect();

requireDir('./src/models');

app.use('/', require('./src/routes/routes'));

app.listen(3001);