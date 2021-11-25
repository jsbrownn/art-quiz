// import routes from './js/routes.js'
import { Settings } from './js/components/settings/settings'

import { Game } from './js/game'

function setBackgroundsToCategories(data) {

  const arr = Object.keys(data)
  const categoriesCards = document.querySelectorAll('.categories-list__item')

  arr.forEach(elem => {
    const imageNumArr = data[elem].map(item => item.imageNum);
    const random = getRandomInt(imageNumArr.length)
    let num = imageNumArr[random]
    let src = `url('./images/image-data-master/img/${num}.webp')`;

    categoriesCards.forEach(card => {
      let category = card.className.split('--')[1]
      console.log(card)
      if (category === elem) {
        card.style.backgroundImage = src
        card.addEventListener('click', startGame)
      }

    })
  })
}


function startGame() {
  const category = (this.className.split('categories-list__item--'))[1]
  console.log(category)
}



function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getUniqueItems(arr) {
  return Array.from(new Set(arr));
}


function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function getlocalStorage(key) {
  return localStorage.getItem(key)
}


async function loadData() {
  const url = './images/image-data-master/data.json';
  const res = await fetch(url);
  const data = await res.json();
  return data;

}
const data = loadData()
  .then(data => {
    fiteredDataCategories(data)
  }
  )


function fiteredDataCategories(data) {
  let filteredData = new Object;
  const categoriesArr = ['surrealism', 'romanticism', 'religion', 'expressionism', 'impressionism', 'landscape', 'marine', 'painting', 'portrait', 'realism', 'renaissance', 'avant-garde'];
  // создавал этот массив динамически, но для этого нужно было пробежатся по всему обьекту. Решил что для 12-ти категорий предпочтительнее сделать это руками, так будет быстрее работать приложение. Но с точки зрения расширяемости, лучше использовать первый способ.

  for (let i in data) {
    filteredData[categoriesArr[i]] = data.filter(elem => elem.category === categoriesArr[i])
  }
  setLocalStorage("data", JSON.stringify(filteredData))
}
function checkRender(target) {

}



const categoriesData = JSON.parse(localStorage.getItem('data'))

setBackgroundsToCategories(categoriesData)

const settingBtn = document.querySelector('.settings')
let isRender = false;
settingBtn.addEventListener('click', () => {
  if (isRender) {
    isRender = false;
    Settings.unrender();

    
  } else {
    isRender = true;
    Settings.render()
    const closeBtn = document.querySelector('.close-menu')
    closeBtn.onclick = ()=>{
      console.log('click')
      isRender = false;
      Settings.unrender();
    }
  }
}
)



console.log(
  "Уважаемый проверяющий! Очень прошу проверить работу еще раз перед дедлайном кросс-чека, не успел реализовать даже базовые вещи. Спасибо!"
)

console.log('discord: Сергей Борейко(jsbrownn)#5257')
// const settings = document.querySelector('.settings-logo')
// settings.addEventListener('click',showCattegories)







// const rangeVolume = document.querySelector('.range-slider')
// rangeVolume.addEventListener('change',valueChanged)
// function valueChanged(e){
// 	let a = e.target.value;

//   console.log(a)
//   e.target.style.background = `linear-gradient(to right,#4BD663,#4BD663 ${a * 100}%,#eee ${a * 100}%)`;



console.log(Game)
const game = new Game;
console.log(game.start())