const webpack = require('webpack');
const FileSizeReporter = require('react-dev-utils/FileSizeReporter');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const measureFileSizesBeforeBuild = FileSizeReporter.measureFileSizesBeforeBuild;
const { dirs } = require('./webpack/base');
const config = require('./webpack/webpack.prod');

const define = require(dirs.root + `/.greatrc.${process.env.RUN_ENV}`);
config.plugins.push(
  new webpack.DefinePlugin({
    ...Object.entries(define).reduce(
      (result, [key, value]) => ({ ...result, [key]: JSON.stringify(value) }),
      {}
    )
  })
);

measureFileSizesBeforeBuild(dirs.dist)
  .then((res) => {
    return build(res);
  })
  .catch((err) => {
    if (err && err.message) {
      console.log(err.message);
    }
    process.exit(1);
  });

function build(previousFileSizes) {
  console.log('开始构建...\n');

  const compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      let messages;
      if (err) {
        if (!err.message) {
          return reject(err);
        }

        let errMessage = err.message;

        if (Object.prototype.hasOwnProperty.call(err, 'postcssNode')) {
          errMessage += '\n打包失败 ' + err['postcssNode'].selector;
        }

        messages = formatWebpackMessages({
          errors: [errMessage],
          warnings: []
        });
      } else {
        messages = formatWebpackMessages(
          stats.toJson({ all: false, warnings: true, errors: true })
        );
      }
      if (messages.errors.length) {
        if (messages.errors.length > 1) {
          messages.errors.length = 1;
        }
        return reject(new Error(messages.errors.join('\n\n')));
      }

      if (
        process.env.CI &&
        (typeof process.env.CI !== 'string' || process.env.CI.toLowerCase() !== 'false') &&
        messages.warnings.length
      ) {
        return reject(new Error(messages.warnings.join('\n\n')));
      }

      return resolve({
        stats,
        previousFileSizes,
        warnings: messages.warnings
      });
    });
  });
}
