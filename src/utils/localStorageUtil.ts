
const setLocalStorageMap = (map) => {
  try {
    for (let i in map) {
      let item = map[i];
      setLocalStorageItem(i, item);
    }
  } catch (e) {
    console.error(e)
  }
}

const setLocalStorageItem = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}
const getLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key));
}

const removeLocalStorage = (key: string) => {
  try {
    localStorage.removeItem(key)
  } catch (e) {
    console.error(e);
  }
}
const removeAllLocalStorage = () => {
  localStorage.clear()
}

export default {
  setLocalStorageMap,
  setLocalStorageItem,
  getLocalStorage,
  removeLocalStorage,
  removeAllLocalStorage
}