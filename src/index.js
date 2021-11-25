import { StartPage } from './components/start-page/startPage'
import { Settings } from './components/settings/settings.js'
import { Categories } from './components/categories/category.js'

// import { Routers }  from './js/routes.js'






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
      if (category === elem) {
        card.style.backgroundImage = src

      }

    })
  })
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




const categoriesData = JSON.parse(localStorage.getItem('data'))



// const settingBtn = document.querySelector('.settings')

// let isRender = false;

// settingBtn.addEventListener('click', () => {
//   onNavigate('/settings')

//   if (isRender) {
//     isRender = false;
//     // Settings.unrender();
//     history.back()

//   } else {
//     isRender = true;
//     Settings.render()
//     const closeBtn = document.querySelector('.close-menu')
//     closeBtn.onclick = () => {
//       isRender = false;
//       //  Settings.unrender();
//       history.back()
//     }
//   }

//   return false;
// }
// )




const routes = {
  '/': StartPage,
  '/settings': Settings,
  '/categories': Categories
}

const root = document.querySelector('#root')
root.innerHTML = routes['/'].render()

function onNavigate(pathname) {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  )
    root.innerHTML = routes[pathname].render()

}

window.onpopstate = () => {

  root.innerHTML = routes[window.location.pathname].render()
  console.log(routes[window.location.pathname])

}








function startGame(event) {

  const typeGame = event.target.closest('li').className.split('--')[1]
  const game = new Game(typeGame)
  console.log(game)
  onNavigate('/categories')
  Categories.render()
  setBackgroundsToCategories(categoriesData)

}




document.body.addEventListener('click', navigate)

function navigate(event) {
  console.log(event.target)

  // logo
  if (event.target.className === "logo-img") {
    onNavigate('/')
  }

  if (event.target.className === 'settings-logo icon') {
    onNavigate('/settings')

  }
  
  if (event.target.className === "home-types-list__item") {
    onNavigate('/categories')
  }
  
  if (event.target.className === "close-menu") {
    history.back()
  }
}