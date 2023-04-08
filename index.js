/* eslint-disable no-console */
require('module-alias/register');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const baseRoute = require('@root/routes/base.route');
const musicRoute = require('@root/routes/music.route');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const { errorHandler } = require('./middlewares/errorHandler');

const app = express();
app.use(morgan('tiny'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

mongoose.connect(
  `mongodb+srv://${username}:${password}@cluster0.6gjgf.mongodb.net/music?authSource=admin&replicaSet=atlas-kz1osm-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`,
);

app.use('/base', baseRoute);
app.use('/music', musicRoute);

app.use(errorHandler);

const port = process.env.PORT || 3006;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

module.exports = app;
