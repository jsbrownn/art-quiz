
const helper = {

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  },

  getUniqueItems(arr) {
    return Array.from(new Set(arr));
  },

  setLocalStorage(key, value) {
    localStorage.setItem(key, value);
  }
  ,
  getlocalStorage(key) {
    return localStorage.getItem(key);
  }

}

export { helper }