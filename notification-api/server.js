require('dotenv').config()
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
require('./src/models/notification');
const bodyParser = require('body-parser');
const runCron = require('./src/services/cron');
const routes = require('./router');

const port = process.env.PORT || 3000;
// const testEmail = require('./src/services/email');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongodb:27017/testt', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

runCron();

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

app.listen(port);
app.use((req, res) => {
  res.status(404).send({
    message: `Not found  (-_-)  | 404 | route: ${req.originalUrl}`,
  });
});

// eslint-disable-next-line no-console
console.log(`API server started on ${port}`);
