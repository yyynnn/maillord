import path from "path";
import webpack from "webpack";
import ExtractTextPlugin from "extract-text-webpack-plugin";

module.exports = {
  devtool: "source-map",
  entry: ["webpack-hot-middleware/client", path.join(__dirname, "/client/index.js")],
  output: {
    path: "/",
    filename: "bundle.js",
    publicPath: "/"
  },
  plugins: [new ExtractTextPlugin("bundle.css"), new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            query: {
              progressive: true,
              pngquant: {
                quality: "65-90",
                speed: 4
              }
            }
          }
        ]
      },
      {
        test: /\.css$/, // files ending with .scss
        use: ["css-hot-loader"].concat(
          ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", "postcss-loader"]
          })
        )
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        exclude: /node_modules/,
        loader: "file-loader"
      },
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        include: [path.join(__dirname, "client"), path.join(__dirname, "server/shared")],
        loaders: ["react-hot-loader", "babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  }
};
