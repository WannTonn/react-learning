
const fs = require('fs');

const init = () => {
  fs.copyFile('src/utils/files/abc_old copy 2.txt', 'src/utils/files/abc_old copy 2.txt', (err) => {
    if (err) console.log(err);
    console.log('abc');
  })
  /* fs.rename('src/utils/files/abc_old copy.txt', 'src/utils/files/bcxzc.txt', (err) => {
    if (err) console.log(err);
  }) */
  /* let isExists = fs.existsSync('src/utils/files/abc_old copy 2.txt');
  console.log('isExists', isExists);
  isExists && fs.unlink('src/utils/files/abc_old copy 222.txt', (err) => {
    if (err) console.log(err);
  }) */

}
init();