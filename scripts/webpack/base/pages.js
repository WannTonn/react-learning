const fs = require('fs');
const path = require('path');
const glob = require('glob');
const dirs = require('./dirs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

// 压缩、混淆、去掉日志
const minifyOptions =
  isDev
    ? {}
    : {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      };

const entries = {};
const pages = [];

glob.sync(path.resolve(dirs.src, './pages/*/index.tsx')).forEach((item) => {
  const name = item.match(/([\w-]+)(?=\/index.tsx)/)[1];

  // 选择模板
  let template = path.resolve(dirs.src, `./pages/${name}/index.ejs`);
  if (!fs.existsSync(template)) {
    template = path.resolve(dirs.src, `./pages/common.ejs`);
  }

  // 载入热更新
  entries[name] = [isDev && require.resolve('react-dev-utils/webpackHotDevClient'), item].filter(
    Boolean
  );

  // 配置
  pages.push(
    new HtmlWebpackPlugin({
      inject: true,
      chunks: [name],
      template: template,
      filename: `${name}.html`,
      title: '紫讯业务支撑系统',
      favicon: path.resolve(dirs.src, './public/favicon.ico'),
      minify: minifyOptions
    })
  );
});

module.exports = { entries, pages };
