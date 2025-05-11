const express = require('express');
require('./config/env');
const connectDB = require('./config/db');
const routes = require('./routes');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();
connectDB();

app.use(express.json());
app.use('/api', routes);
app.use(errorMiddleware);

module.exports = app;
