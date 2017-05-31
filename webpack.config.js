process.env.NODE_ENV = 'production';
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [path.join(__dirname, '/client/index.js')],
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    libraryTarget: 'umd',
    publicPath: ''
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Maillord',
      favicon: path.join(__dirname, 'favicon.ico'),
      template: path.join(__dirname, 'templates/index-template.html')
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('bundle.css')
  ],
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              pngquant: {
                quality: '65-90',
                speed: 4
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader?importLoaders=1!postcss-loader'
            }
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'client'),
        exclude: path.join(__dirname, 'node_modules')
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};
