const dirs = require('./dirs');
const cssModule = require('./style');
const isDev = process.env.NODE_ENV === 'development';

const rules = [
  {
    test: /\.tsx?$/,
    include: dirs.src,
    use: [
      {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          cacheCompression: false,
          compact: !isDev
        }
      }
    ]
  },
  {
    test: /\.(json|conf)$/,
    include: dirs.src,
    exclude: /node_modules/,
    loader: 'json-loader'
  },
  {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 5 * 1000,
          include: dirs.src,
          name: 'images/[path][name].[ext]'
        }
      }
    ]
  },
  {
    test: /\.(docx)|\.(xlsx?)$/i,
    loader: 'file-loader'
  },
  {
    test: /\.ejs$/,
    loader: 'ejs-loader',
    options: {
      esModule: false
    }
  }
];

module.exports = {
  strictExportPresence: true,
  rules: rules.concat(cssModule)
};
