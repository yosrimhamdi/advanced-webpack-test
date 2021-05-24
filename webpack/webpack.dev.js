const common = require('./webpack.common');
const { merge } = require('webpack-merge');

const config = {
  mode: 'development',
  output: {
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    port: 3000,
    open: true,
  },
};

module.exports = merge(common, config);
