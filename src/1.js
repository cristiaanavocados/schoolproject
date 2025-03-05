const express = require('express');
const app = express();
app.get('/', function(req, res) {
  const name = req.query.name;
  res.send(`Hello, ${name}!`);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
