'use strict';

import Koa from 'koa';
import path from 'path';
import html from './index.html.js';
import serve from 'koa-static';
import webpack from 'webpack';
import middleware from 'koa-webpack';
import webpackConfig from '../webpack.config.dev';

const app = new Koa();
const compiler = webpack(webpackConfig);
const port = process.env.PORT || 8080;
app.use(serve(path.join(__dirname + '/')));

app.use(
  middleware({
    compiler: compiler,
    dev: { publicPath: webpackConfig.output.publicPath },
    config: webpackConfig,
    hot: true
  })
);

// set the initial content
app.use((ctx, next) => {
  ctx.body = html;
});

// start server at port 3000
app.listen(port, () => console.log('Running on localhost:' + port));

// publicPath: webpackConfig.output.publicPath
