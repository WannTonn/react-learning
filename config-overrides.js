
/**
 * @description 重新配置react-app 项目webpack配置
 */
const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addWebpackAlias,
  addWebpackResolve,
  addWebpackModuleRule,
  adjustStyleLoaders,
  addPostcssPlugins,
  addWebpackPlugin,

} = require("customize-cra");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.env.NODE_ENV === 'development';

const loader = isDev ? 'style-loader' : MiniCssExtractPlugin.loader;

const path = require("path");
const addCustommize = () => config => {
  // console.log(config, 18);
  // config.output.path = __dirname + '/docs';

  return config;
}
// 关闭mapSource
const rewiredMap = () => config => {
  config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
  return config;
};
module.exports = {
  webpack: override(
    rewiredMap(),
    // 启用装饰器模式
    // addDecoratorsLegacy(),

    // 禁用eslint
    disableEsLint(),
    // 配置alias
    addWebpackAlias({
      "@": path.resolve(__dirname, "src"),
    }),
    // 导入文件的时候可以不用添加文件后缀名
    addWebpackResolve({
      extensions: ['.tsx', '.ts', '.js', '.jsx', '.json', '.scss', '.css']
    }),
    addWebpackModuleRule(
      {
        test: /\.css$/,
        use: [loader, 'css-loader']
      },
      {
        test: /\.(sa|sc)ss$/,
        use: adjustStyleLoaders([
          loader,
          {
            loader: 'css-loader',
            options: {
              // importLoaders: true,
              modules: true,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              modules: {
                localIdentName: '[local]__[name]-[hash:base64:4]'
              }
            },
          },
        ])
      }
    )
    // addCustommize(),
    /* addPostcssPlugins(
      [
        require('postcss-px-to-viewport')({
          viewportWidth: 375, // (Number) The width of the viewport.
          viewportHeight: 667, // (Number) The height of the viewport.
          unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
          viewportUnit: 'vw', // (String) Expected units.
          selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
          minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
          mediaQuery: true // (Boolean) Allow px to be converted in media queries.
        })
      ]
    ), */
  )
  /*  devServer: function(configFunction) {
     return function(proxy, allowedHost) {
       const config = configFunction(proxy, allowedHost);
       return config;
     }
   } */
}


