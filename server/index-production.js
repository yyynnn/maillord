'use strict';

var express = require('express');
var path = require('path');
var fs = require('fs');
var uuid = require('uuid');
var bodyParser = require('body-parser');
var handlebar = require('handlebars');
var serveStatic = require('serve-static');

var app = express();
var port = process.env.PORT || 8080;
var router = express.Router();
var uuidv4 = uuid.v4();

app.use(bodyParser.json());
app.post('/api/data', update);

function update(req, res) {
  var source = fs.readFile('./templates/email-template1.html', 'utf8', function(err, data) {
    if (err) throw err;
    var dataFront = data.toString();
    var compile = handlebar.compile(dataFront);
    var result = compile(req.body);
    fs.writeFile(`./download/email${uuidv4}.html`, result, function(err) {
      if (err) throw err;
      res.sendStatus(200);
    });
  });
}

router.get('/download', function(req, res) {
  var file = path.join(__dirname, `../download/email${uuidv4}.html`);
  res.download(file, uuid.v4() + file);
});
app.use('/', router);
app.use(serveStatic(path.join(__dirname, '../public/')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port);
