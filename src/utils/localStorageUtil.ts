/**
 * @description LocalStorage库 (占用 1M 字节空间 | 带时效性)
 */

type ITimeUnit = 'm' | 'min' | 'h' | 'd' | 'day' | 'M' | 'month' | 'w' | 'week' | 'y' | 'year';
const LimitSize = 1 * 1024 * 1024; // 1M utf-16编码单元（字符串长度值)
/**
 * @description 判断数据类型
 * @param value {any}
 * @return type {string}
 */
const getType = (value) => {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}

/** 

 * @param key {string} key值
 * @param value {any} value值
 * @param expire {array} 失效时长配置，以数组的形式传入 [数字, 日期格式代号]
 */
const unitTimeStamp = {
  m: 60,
  min: 60,
  h: 60 * 60,
  d: 60 * 60 * 24,
  day: 60 * 60 * 24,
  w: 60 * 60 * 24 * 7,
  week: 60 * 60 * 24 * 7,
  M: 60 * 60 * 24 * 30,
  month: 60 * 60 * 24 * 30,
  y: 60 * 60 * 24 * 365,
  year: 60 * 60 * 24 * 365,
}
const setLocalStorageItem = (key: string, value: any, expire?: [number, ITimeUnit]) => {
  /** 如果值为以下值，则默认置空 */
  if (['undefined', 'string', 'null'].includes(getType(value)) && !value) {
    value = null;
  }
  let data = {};
  let timestamp = 0;
  /** 判断数据值是否小于限制 */
  if (JSON.stringify(value).length > LimitSize) {
    throw new Error('存储内容长度超出限制，请重新检查后重试')
  }
  /** 判断失效时间格式是否符合配置要求 */
  /** 如果失效时间格式不正确，则报错 */
  let time = expire?.[0];
  let unit = expire?.[1];
  const secondTime = 1000; // 1秒 = 1000毫秒
  if (expire && (Array.isArray(expire) ? false : Number(expire) < 0)) {
    throw new Error("请输入正确的失效时间配置，eg: [1, 'day']")
  }
  /** 如果失效时间不是数字，则报错 */
  if (time <= 0) {
    throw new Error('失效时长必须为数字')
  }
  /** 如果unit不符合map中的值 */
  if (unit && !unitTimeStamp[unit]) {
    throw new Error('请输入正确的时间格式')
  } else {
    timestamp = unitTimeStamp[unit] * secondTime;
  }
  data = {
    value, // 存储数据
    time: Date.now(), // 存储当前时间戳
    expire: timestamp, // 存储过期时间
  }
  localStorage.setItem(key, JSON.stringify(data))
}
/**
 * @description 根据传入的对象进行循环赋值
 * @param map {object}
 */
const setLocalStorageMap = (map, expire?: [number, ITimeUnit]) => {
  try {
    let keys = Object.keys(map);
    keys.forEach((key) => {
      let item = map[key];
      setLocalStorageItem(key, item, expire)
    })
  } catch (e) {
    console.error(e)
  }
}
/**
 * @description 获取字段值，首先对key值是否存在进行判断，再对失效日期进行校验，在有效期内就续期，否则删除该值并返回null
 * @param  key {string}
 * @return value {any}
 */
const getLocalStorage = (key: string) => {
  /** 判断是否存在该key值 */
  if (!localStorage.getItem(key) || JSON.stringify(localStorage.getItem(key)) === 'null') {
    return null;
  }

  const storageVal = JSON.parse(localStorage.getItem(key));
  let nowTime = Date.now();
  // 不在有效期内 - 删除并返回null
  if (storageVal.expire && storageVal.expire < (nowTime - storageVal.time)) {
    removeLocalStorage(key);
    return null;
  } else {
    // 在有效期内 - 续期并返回对应的value
    setLocalStorageItem(key, storageVal.value, storageVal.expire);
    return storageVal.value;
  }
}
/**
 * @description 获取所有字段值
 * @return arr
 */
const getAllStorage = () => {
  let keys = Object.keys(localStorage); // 获取localStorage的长度
  let arr = []; // 初始化数组
  keys.forEach((e) => {
    arr.push({key: e, val:getLocalStorage(e)});
  });
  return arr;
}
/**
 * @description 删除单个数据
 * @param key {string}
 */
const removeLocalStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.error(e);
  }
}
/**
 * @description 清空所有数据
 */
const removeAllLocalStorage = () => {
  localStorage.clear()
}

export default {
  setLocalStorageMap,
  setLocalStorageItem,
  getLocalStorage,
  removeLocalStorage,
  removeAllLocalStorage,
  getAllStorage
}