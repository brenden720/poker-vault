const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.join(__dirname, './public'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, './public'),
    compress: true,
    port: 3000,
    stats: {
      children: false,
      maxModules: 0,
    },
  },
  devtool: 'source-map',
});
