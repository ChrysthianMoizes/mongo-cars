const express = require('express');
const requireDir = require('require-dir');
const Connect = require('./src/database/connect');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

Connect.connect();

requireDir('./src/models');

app.use('/', require('./src/routes/routes'));

app.listen(3001);