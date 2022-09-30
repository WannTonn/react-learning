const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const { createCompiler, prepareUrls } = require('react-dev-utils/WebpackDevServerUtils');
const ignoredFiles = require('react-dev-utils/ignoredFiles');

const { dirs } = require('./webpack/base');
const config = require('./webpack/webpack.dev');

const define = require(dirs.root + `/.greatrc.${process.env.RUN_ENV}`);
config.plugins.push(
  new webpack.DefinePlugin({
    ...Object.entries(define).reduce(
      (result, [key, value]) => ({ ...result, [key]: JSON.stringify(value) }),
      {}
    )
  })
);

const PORT = '8095';
const HOST = '0.0.0.0';

try {
  const devServerConfigs = {
    hot: true,
    overlay: false,
    quiet: true,
    host: HOST,
    port: PORT,
    historyApiFallback: true,
    contentBase: dirs.dist,
    watchContentBase: true,
    transportMode: 'ws',
    injectClient: false,
    disableHostCheck: true,
    watchOptions: {
      ignored: ignoredFiles(dirs.src)
    }
  };

  const appName = require(dirs.package).name;
  const urls = prepareUrls('http', HOST, PORT, '');
  const devSocket = {
    warnings: (warnings) => devServer.sockWrite(devServer.sockets, 'warnings', warnings),
    errors: (errors) => devServer.sockWrite(devServer.sockets, 'errors', errors)
  };

  const compiler = createCompiler({
    appName,
    config,
    webpack,
    urls,
    devSocket
  });
  const devServer = new WebpackDevServer(compiler, devServerConfigs);
  devServer.listen(PORT, '0.0.0.0', (err) => {
    if (err) {
      return console.log(err);
    }
  });
} catch (err) {
  if (err && err.message) {
    console.log(err.message);
  }
  process.exit(1);
}
