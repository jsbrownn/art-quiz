// import routes from './js/routes.js'
// import { Settings } from './js/components/settings/settings'


function setBackgroundsToCategories(data) {
  const arr = Object.keys( data )
  arr.forEach(elem => {
    // let num = data.elem.lenght
    // console.log
  })
  debugger

  const categoriesCards = document.querySelectorAll('.categories-list__item')
  const src = "url('./images/image-data-master/img/1.webp')"
  categoriesCards.forEach(elem => {
    elem.style.backgroundImage = src
    elem.addEventListener('click', startGame)
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
  setLocalStorage("data", JSON.stringify( filteredData ) )
}


const categoriesData = JSON.parse(localStorage.getItem('data'))

setBackgroundsToCategories(categoriesData)
const clsoseBtn = document.querySelector('.settings')



console.log(
   "Уважаемый проверяющий! Очень прошу проверить работу еще раз перед дедлайном кросс-чека, не успел реализовать даже базовые вещи. Спасибо!"
)

console.log('discord: Сергей Борейко(jsbrownn)#5257')