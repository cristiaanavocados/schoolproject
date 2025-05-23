const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Define routes here

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
