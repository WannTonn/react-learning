const path = require('path');
const root = path.resolve(__dirname, '../../../');

const dirs = {
  // 根目录
  root: root,
  // 源码目录
  src: path.resolve(root, './src'),
  // 第三方库
  lib: path.resolve(root, './lib'),
  // 构建脚本目录
  build: path.resolve(root, './webpack'),
  // 输出目录
  dist: path.resolve(root, './dist'),
  // modules
  modules: path.resolve(root, './node_modules'),
  // package
  package: path.resolve(root, './package.json')
};

module.exports = dirs;
