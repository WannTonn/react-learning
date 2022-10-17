const  fs = require('fs');
const path =  require('path');
const axios = require('axios');
const updatePlugin = async (res) => {
  let folderPath = path.resolve(__dirname);
  let fileName = folderPath + '/abc.txt';
  console.log(folderPath);
  /** 比对res中的md5值与本地存放的md5值是否一致 */
  let localMd5 = 'abc';
  let isMathMd5 = localMd5 === res?.md5;
  /** 如果md5值不匹配，则采用res的URL下载,否则就不执行操作 */
  if (!isMathMd5) {
    /** 将旧插件重命名为带old的新名称 */
    fs.rename(fileName, folderPath + '/abc_old.txt', function(err) {
      if (err) return new Error(err);
      console.log('rename success');
    })
    /** 开始下载新插件 */
    const file = await axios.get('https://img.alicdn.com/i2/4290997764/O1CN01K6Yo2C27DxndsUQRa_!!0-item_pic.jpg', {
      responseType: 'stream'
    });
    // console.log(file, 20);
    fs.writeFile(folderPath+'/123.jpg', file?.data, function(err) {
      if (err) return new Error(err);
      console.log('download file', );
      /** 删除旧文件 */
      fs.unlink(folderPath + '/abc_old.txt', function(err) {
        if (err) return new Error(err);
        console.log('file deleted');
        
      })
    })
  }

}

updatePlugin();
// module.exports = updatePlugin;
// export default updatePlugin;