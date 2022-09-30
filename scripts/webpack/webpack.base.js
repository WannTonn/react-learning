const path = require('path');
const { dirs, modules, entries } = require('./base');

module.exports = {
  context: dirs.src,

  entry: entries,

  resolve: {
    // modules: [dirs.src, dirs.modules],
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@': dirs.src,
    }
  },

  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM',
  //   'react-router-dom': 'ReactRouterDOM',
  // },

  module: modules
};
