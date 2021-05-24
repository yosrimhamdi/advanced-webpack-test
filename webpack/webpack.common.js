const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [
    path.resolve('src/javascripts/index.js'),
    path.resolve('src/styles/index.sass'),
  ],
  output: {
    path: path.resolve('dist'),
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src/index.html'),
    }),
  ],
};
