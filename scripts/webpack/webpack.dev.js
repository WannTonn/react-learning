const webpack = require('webpack');
const basic = require('./webpack.base');
const { dirs, pages } = require('./base');

const plugins = [].concat(pages);

const config = {
  ...basic,

  mode: 'development',

  output: {
    path: dirs.dist,
    publicPath: '/',
    filename: 'js/bundle_[name].js'
  },

  devtool: '#cheap-module-eval-source-map',

  plugins: plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
  ]),
};

module.exports = config;
