import express from 'express';
import path from 'path';
import fs from 'fs';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';
import bodyParser from 'body-parser';
import Handlebars from 'handlebars';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
// var Routes = require('../client/routes.js').default;

let app = express();
const port = 8080;
const compiler = webpack(webpackConfig);

app.use(bodyParser.json());
app.post('/api/data', update);
app.use('/mail', express.static('/mail'));
// app.use(express.static(path.join(__dirname, '/public')));

function update(req, res) {
  var source = fs.readFile('./templates/template.html', 'utf8', function(err, data) {
    if (err) throw err;

    var data = data.toString();
    var compile = Handlebars.compile(data);
    var result = compile(req.body);
    fs.writeFile('./mail/email.html', result, function(err) {
      if (err) {
        return console.log(err);
      }
    });
    res.download('/mail/email.html', 'email.pdf', function(err) {
      if (err) {
        console.log(err);
      } else {
        // decrement a download credit, etc.
      }
    });
    res.sendStatus(200);
  });
}

app.use(
  webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath
  })
);
app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(process.env.PORT || port, () => console.log('Running on localhost:8080'));
