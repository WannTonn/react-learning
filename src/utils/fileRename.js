const fs = require('fs');
const path = require('path');

/**
 * @description 遍历重命名图片名
 * @param
 */
const renameFiles = () => {
  const imgDirPath = path.resolve(__dirname, './imgs');
  fs.readdir(imgDirPath, (err, files) => {
    if (err) {
      return new Error(err)
    }
    files.forEach((e, idx) => {
      let oldPath = imgDirPath + '/' + e;
      let newPath = imgDirPath + '/' + idx + '.png';
      fs.rename(oldPath, newPath, () => {});
    })
  });
}
renameFiles();