const path = require('path');
// const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const SafePostCssParser = require('postcss-safe-parser');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const basic = require('./webpack.base');
const { dirs, pages } = require('./base');

const plugins = [].concat(pages);
const appName = require(dirs.package).name;
const isCDN = process.env.CDN === '1';
const isANAL = process.env.ANAL === '1';
const isDev = process.env.NODE_ENV === 'development';

const config = {
  ...basic,

  mode: 'production',

  devtool: false,

  output: {
    path: dirs.dist,
    filename: 'js/bundle_[name].[chunkhash:8].min.js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
    publicPath: !isCDN ? '/' : 'https://cdn.quickfox.com.cn/xxx',
    jsonpFunction: `webpackJsonp${appName}`,
    globalObject: 'this'
  },

  performance: {
    hints: false,
  },

  optimization: {
    minimize: !isDev,
    // 自动分割公共部分代码
    splitChunks: {
      chunks: 'all',
      name: false,
      cacheGroups: {
        vendors: {
          chunks: 'all',
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        commons: { // 其他同步加载公共包
          chunks: 'all',
          name: 'commons',
          minChunks: 2,
          priority: 80,
        },
      },
    },
    runtimeChunk: {
      name: (entrypoint) => {
        return `runtime-${entrypoint.name}`;
      }
    },
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            // terser官方推荐，如果不想兼容ie11的话，最好是配置为最新的
            ecma: 8
          },
          compress: {
            ecma: 3,
            warnings: false,
            // true的时候有bug，官方有介绍
            // https://github.com/mishoo/UglifyJS2/issues/2011
            comparisons: false,
            inline: 2
          },
          mangle: {
            // 支持safari
            safari10: true
          },
          keep_classnames: false,
          keep_fnames: false,
          output: {
            ecma: 5,
            comments: false,
            // 关闭的时候对emoji有影响
            ascii_only: true
          }
        },
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          parse: SafePostCssParser,
          // eslint-disable-next-line indent
          map: false,
          cssProcessorPluginOptions: {
            preset: ['default', { minifyFontValues: { removeQuotes: false } }]
          }
        }
      })
    ]
  },

  plugins: plugins.concat(
    [
      new MiniCssExtractPlugin({
        ignoreOrder: true,
        filename: 'css/[name].[chunkhash:8].css',
        chunkFilename: 'css/[name].[chunkhash:8].chunk.css'
      }),
      // new CompressionPlugin({
      //   algorithm: 'gzip',
      //   test: /\.(js|css)$/,
      //   threshold: 10240,
      //   minRatio: 0.8
      // }),
      isANAL &&
        new BundleAnalyzerPlugin({
          analyzerPort: 8088,
          openAnalyzer: false
        })
      // new CopyPlugin({
      //   patterns: [{ from: path.resolve(dirs.src, '.public/'), to: 'static/' }]
      // })
    ].filter(Boolean)
  )
};

module.exports = config;
