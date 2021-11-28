import { router } from "./../../router/router.js"
function categoriesController() {
  console.log('categories controller is ready')

  // в данном случае не использую делегирование, меньше кода получится
  const categoriesItems = document.querySelectorAll('.categories-list__item')
  categoriesItems.forEach(item => item.addEventListener('click', selectCategory))

  function selectCategory() {
    const categoryClassNameArr = event.currentTarget.className.split('--');
    const category = categoryClassNameArr[(categoryClassNameArr.length) - 1]
    console.log(router)
    router.onNavigate('/question')
  }












}


export { categoriesController };