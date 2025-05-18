let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());

// Your server-side logic here

module.exports = app;
