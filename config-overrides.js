
/**
 * @description 重新配置react-app 项目webpack配置
 */
const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addWebpackAlias,
  addWebpackResolve,
  addLessLoader,
  addWebpackPlugin,
  
} = require("customize-cra");
const path = require("path");
const addCustommize = () => config => {
  // console.log(config, 18);
  // config.output.path = __dirname + '/docs';

  return config;
}
module.exports = {
  webpack: override(
    // 启用装饰器模式
    // addDecoratorsLegacy(),
    
    // 禁用eslint
    disableEsLint(),
    // 配置alias
    addWebpackAlias({
      "@": path.resolve(__dirname, "src")
    }),
    addWebpackResolve({
      extensions: ['.tsx', '.ts', '.js', '.jsx', '.json']
    }),
    addCustommize()
  ),
 /*  devServer: function(configFunction) {
    return function(proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      return config;
    }
  } */
}


