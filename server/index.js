import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';
import bodyParser from 'body-parser';

let app = express();
const port = 8080;
const compiler = webpack(webpackConfig);

app.use(bodyParser.json());

app.post('/api/data', update);

function update(req, res) {
  console.log(req.body);
  res.sendStatus(200);
}

app.use(
  webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath
  })
);
app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(process.env.PORT || port, () => console.log('Running on localhost:8080'));
