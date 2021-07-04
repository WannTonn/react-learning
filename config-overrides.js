/*
 * @Author: WannTonn
 * @Date: 2021-07-04 11:06:58
 * @Description: 重新配置react-app 项目webpack配置
 * @FilePath: /net-music/config-overrides.js
 */
const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addWebpackAlias,
  addLessLoader,
  addWebpackPlugin
} = require("customize-cra");
const path = require("path");
module.exports = {
  webpack: override(
    // 启用装饰器模式
    // addDecoratorsLegacy(),
    
    // 禁用eslint
    disableEsLint(),
    // 配置alias
    addWebpackAlias({
      ["@"]: path.resolve(__dirname, "src")
    })
  ),
  devServer: function(configFunction) {
    return function(proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);


      return config;
    }
  }
}


