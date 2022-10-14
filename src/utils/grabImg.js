const axios = require('axios');
const path = require('path');

const fs = require('fs');
/**
 * @description 爬取式神图
 * @param
 */
const getImg = async () => {
  for (let i = 0, len = 500; i < len; i++) {
    try {
      await axios.get(`https://cbg-yys.res.netease.com/game_res/hero/${i}/${i}.png`, {
        responseType: "stream"
      }).then((res) => {
        if (res.data) {
          const writer = fs.createWriteStream(__dirname + `/${i}.png`);
          res.data.pipe(writer)
        }
      });
    } catch (e) {
      // console.log(e);
    }
  }
}

getImg()