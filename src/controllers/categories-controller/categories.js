import { helper } from "../../helpers/app-helper.js"
import { router } from "./../../router/router.js"
function categoriesController() {
  console.log('categories controller is ready')
  const data = helper.getlocalStorage('data')
  
  function setBackgroundsToCategories(data) {
    const arr  = Array.from (data)
    arr.forEach(elem => {
      console.log(elem)
    })
  
    const categoriesCards = document.querySelectorAll('.categories-list__item')
    const src = "url('./images/image-data-master/img/1.webp')"
    categoriesCards.forEach(elem => {
      elem.style.backgroundImage = src
    })
  
  }
  setBackgroundsToCategories(data)

  // в данном случае не использую делегирование, меньше кода получится
  const categoriesItems = document.querySelectorAll('.categories-list__item')
  categoriesItems.forEach(item => item.addEventListener('click', selectCategory))

  function selectCategory() {
    const categoryClassNameArr = event.currentTarget.className.split('--');
    const category = categoryClassNameArr[(categoryClassNameArr.length) - 1]
    router.onNavigate('/question')
  }












}


export { categoriesController };