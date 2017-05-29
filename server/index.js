import express from 'express';
import path from 'path';
import fs from 'fs';
import uuid from 'uuid';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';
import bodyParser from 'body-parser';
import Handlebars from 'handlebars';

let app = express();
const port = 8080;
const compiler = webpack(webpackConfig);
let router = express.Router();
let uuidv4 = uuid.v4();

app.use(bodyParser.json());
app.post('/api/data', update);

function update(req, res) {
  console.log(res);
  let source = fs.readFile('./templates/template.html', 'utf8', function(err, data) {
    if (err) throw err;
    let dataFront = data.toString();
    let compile = Handlebars.compile(dataFront);
    let result = compile(req.body);
    fs.writeFile(`./download/email${uuidv4}.html`, result, function(err) {
      if (err) throw err;
      res.sendStatus(200);
    });
  });
}

app.use(
  webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath
  })
);
app.use(webpackHotMiddleware(compiler));

router.get('/download', function(req, res) {
  let file = path.join(__dirname, `../download/email${uuidv4}.html`);
  console.log(file);
  res.download(file, uuid.v4() + file);
});
app.use('/', router);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(process.env.PORT || port, () => console.log('Running on localhost:' + port));
