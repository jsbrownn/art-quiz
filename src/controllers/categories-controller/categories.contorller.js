import { helper } from "../../helpers/app-helper.js"
import { Game } from "../game-contoller/game.controller.js"
import { router } from "../../router/router.js"

function categoriesController() {

  console.log('categories controller is ready')
  const data = JSON.parse(helper.getlocalStorage('data'))
 
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
  //в данном случае не использую делегирование, меньше кода и проще получается
  const categoriesItems = document.querySelectorAll('.categories-list__item')
  categoriesItems.forEach(item => item.addEventListener('click', selectCategory))

  function selectCategory() {
    helper.playSound('click')
    const categoryClassNameArr = event.currentTarget.className.split('--');
    const category = categoryClassNameArr[(categoryClassNameArr.length) - 1]
    const game = Game.instance
    game.category = category ;
    game.start()
    game.getQuestions()

    router.onNavigate('/questions')
  }
}


export { categoriesController};