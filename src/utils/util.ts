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
  }
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
  }
} 