import { helper } from "../../helpers/app-helper.js"
import { router } from "./../../router/router.js"



function categoriesController() {
  console.log('categories controller is ready')

  const data = JSON.parse(helper.getlocalStorage('data'))
  console.log(data)

  function setBackgroundsToCategories(data) {
    const categoriesCards = document.querySelectorAll('.categories-list__item')




    categoriesCards.forEach(elem => {
      let classes = elem.className.split('--')
      let category = classes[1]
      let objCategory = data[category]
      let random = helper.getRandomInt(objCategory.length)
      let imgNum = objCategory[random].imageNum
      const src = `url(./../../assets/images/image-data-master/img/${imgNum}.webp)`
      elem.style.backgroundImage = src
    })

  }
  setBackgroundsToCategories(data)

  //в данном случае не использую делегирование, меньше кода получится
  const categoriesItems = document.querySelectorAll('.categories-list__item')
  categoriesItems.forEach(item => item.addEventListener('click', selectCategory))

  function selectCategory() {
    const categoryClassNameArr = event.currentTarget.className.split('--');
    const category = categoryClassNameArr[(categoryClassNameArr.length) - 1]
    router.onNavigate('/question')
  }














}


export { categoriesController };