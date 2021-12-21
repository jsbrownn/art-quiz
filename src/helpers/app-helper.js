
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
  },

  playSound(name) {
    const settings = JSON.parse(localStorage.getItem('settings'))
    const volume = settings.volume
    const mute  = settings.mute
    
    let url = `./../assets/sounds/${name}.mp3`;
    const audio = new Audio(url);
    audio.volume = volume
    if ( mute ) {
      audio.volume = 0
    }
    
  
    const play = audio.play()
    

  },

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  },



  addElementToObject(object, element) {
    let newList = Object.assign(object, element)
    return newList
  }

}

export { helper }