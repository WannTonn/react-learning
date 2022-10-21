const fs = require('fs');
const path = require('path');
const crypto= require('crypto');
/**
 * @description 遍历重命名图片名
 * @param
 */
const renameFiles = () => {
  const imgDirPath = path.join(__dirname, '/files');
  console.log(imgDirPath);
  let md5Arr = [];
  fs.readdir(imgDirPath, (err, files) => {
    if (err) {
      return new Error(err)
    }
    console.log(files, 15);
    files.forEach((e, idx) => {
      /* let oldPath = imgDirPath + '/' + e;
      let newPath = imgDirPath + '/' + idx + '.png';
      fs.rename(oldPath, newPath, () => {}); */
      console.log(e, 18);
      let filePath = path.join(imgDirPath, `/${e}`);
      const stream = fs.createReadStream(filePath);
      const hash = crypto.createHash('md5');
      let md5 = '';
      stream.on('data', (chunk) => {
        hash.update(chunk, 'utf-8');
      });
    
      stream.on('end', () => {
        md5 = hash.digest('hex');
        console.log(md5);
        md5Arr.push({
          name: e,
          md5
        })

        console.log(md5Arr);
      })
    })
  });
}
renameFiles();