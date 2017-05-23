import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

let router = require('express').Router();
let bodyParser = require('body-parser');

let app = express();
let port = 8080;

const compiler = webpack(webpackConfig);

router.use(bodyParser.json());
router.put('/', update);

function update(req, res) {
  console.log('updating-', req.body);
  res.sendStatus(200);
}

app.use(
  webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    historyApiFallback: true,
    noInfo: true
  })
);
app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(process.env.PORT || port, () => console.log('Running on localhost:8080'));
