import axios from 'axios';

/*
 * @Author: WannTonn
 * @Date: 2021-07-11 09:42:07
 * @Description:
 * @FilePath: /net-music/src/utils/util.js
 */
export function debounce(func: Function, wait: number, immediate?: boolean) {
  let timeout, args, context, timestamp, result;
  const later = function () {
    // 距离上次触发时间间隔
    const last = +new Date() - timestamp;

    // 上次被包装函数被调用时间间隔last 小于设定时间间隔wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };
  return function (...args) {
    let context;
    timestamp = +new Date();
    const callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }
    return result;
  };
}
/**
 * @description 配置样式
 * @param
 */
export function setStyle(elm, styles) {
  for (const key in styles) {
    elm['style'][key] = styles[key];
  }
  elm['style']['transition'] = '.225s';
}

/**
 * @description 生成随机坐标
 * @param
 */
export function getRandomPosition(min, max) {
  return getRandomKey(min, max);
}

/**
 * @description 生成随机数字
 * @param
 */
export function getRandomKey(min, max) {
  return parseInt(Math.random() * (max - min + 1) + min);
}

/**
 * @description 打乱数组
 * @param
 */
export function setRandomSort(a, b) {
  return Math.random() > 0.5 ? -1 : 1;
}

/**
 * @description 下载文件
 * @param
 */
export function downloadFile(url) {
  axios({
    method: 'get',
    url,
    responseType: 'blob',
    headers: {
      'content-type': 'application/octet-stream',
    },
  }).then((res) => {
    if (!res) {
      return;
    }
    let blobUrl = window.URL.createObjectURL(res.data);
    let link = document.createElement('a');
    document.body.appendChild(link);
    link.style.display = 'none';
    link.href = blobUrl;
    // link.download = '文件名.mp3'
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);
  });
}
