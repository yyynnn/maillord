const express = require('express');
const app = express();

app.get('/api/data', function(req, res) {
  console.log(req, res);
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
