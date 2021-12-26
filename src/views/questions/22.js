import { Game } from "../../controllers/game-contoller/game.controller.js";
import { helper } from "../../helpers/app-helper.js";



 async function questionsView() {
  console.log('questionView is ready')
  const game = Game.instance
  const questioinsContainer = document.querySelector('.questions-wrap')
  const sliderList = document.querySelector('.game-slider__list')
  const sliderItem = document.querySelector('.slider-item')




  //get 
  if (game.typeGame === 'artist') {
    game.answerOptions = []
    game.questions.forEach(elem => {
      game.answerOptions.push(elem.author)
    });
  }


  function setDataOnElems() {

    
    
  for (let i = 0; i <= 10; i++){
    



  }








    // for (let i = 0; i < questionElems.length; i++ ) {
    //     let question = questionElems[i]

    //   //  let btns = question.querySelectorAll('.game-btn')
    //   // let rightBtn = btns[0]

    //   let image = question.querySelector('.game-picture')
    //   image.id = `picture-${i+1}`
    //   console.log( image )

    //   let imgNum = game.questions[i].imageNum
    //   let src = `./assets/images/image-data-master/img/${imgNum}.webp`
    //   image.src = src
    //   // let rightAnswer = game.questions[i][game.typeGame]
    //   // rightBtn.textContent = rightAnswer
    // }


  }


  setDataOnElems()

}


export { questionsView };














// function setDataOnElems() {
//   const questionsblock = document.querySelector('.questions-block')
//   const questionElem = questionsblock.querySelector('.question')
//   const questionTitleElem = questionsblock.querySelector('.game-question')
//   const slider = questionsblock.querySelector('.game-slider__list')
//   const sliderItem = questionsblock.querySelector('.slider-item')
//   const questionsWrap = questionsblock.querySelector('.questions-wrap')
//   const game = Game.instance

//   if (game.typeGame === 'artist') {
//     questionTitleElem.textContent = "Кто автор данной картины?"
//   }

//   if (game.typeGame === 'pictures') {
//     questionTitleElem.textContent = "Какая картина здесь изображена?"
//   }


  //get authors
  // if (game.typeGame === 'artist') {
  //   game.authors = []
  //   game.questions.forEach(elem => {
  //     game.authors.push(elem.author)
  //   });
  // }

  // function getWrongAnswer(num, rightAnswer) {
  //   let nums =[]
  //   if (num < 0) {
  //     num = game.questions.length
  //   }

    // в условии делаем проверку на уникальность чисел
    //(сверяем с числами, которые уже выпадали)

  //   if (game.authors[num] !== rightAnswer && !nums.includes(num)) {
  //     nums.push(num)
  //     return game.authors[num]
  //   } else {
  //     getWrongAnswer(num - 1, rightAnswer)
  //   }
  // }


  // function handlerClick() {
  //   event.preventDefault()
  //   helper.playSound('click')
  //   let hash = event.target.hash
  //   debugger
  //     window.location.hash = hash
  // }




  // for (let i = 1; i <= 10; i++) {

  //   if (i === 1) {
      // const picture = questionElem.querySelector('.game-picture')
      // const imgNum = game.questions[0].imageNum
      // picture.src = `./assets/images/image-data-master/full/${imgNum}full.webp`
      // const btnsFirstQuestion = questionElem.querySelectorAll('.game-btn')
      // const btnsFirstQuestionArr = Array.from(btnsFirstQuestion)
      // btnsFirstQuestionArr[0].textContent = game.answers[0]
      // const otherBtns = btnsFirstQuestionArr.slice(1)

      // otherBtns.forEach(btn => {
      //   let num = helper.getRandomInt(game.authors.length)
      //   btn.textContent = getWrongAnswer(num, game.answers[0])
      // })

   // } else {
      //   //add new questions blocks
      // const newQuestion = questionElem.cloneNode(true)
      // questionsWrap.appendChild(newQuestion)
      // const anchor = newQuestion.querySelector('.question-anchor')
      // newQuestion.id = `question_${i}`
      // anchor.id = `anchor_${i}`

      // //add new slider items
      // const newSliderItem = sliderItem.cloneNode(true)
      // slider.appendChild(newSliderItem)
      // newSliderItem.id = `slider-item_${i}`
      // const sliderLink = newSliderItem.querySelector('.slider-item__link')
      // sliderLink.setAttribute('href',`#anchor_${i}`)
      // // sliderLink.addEventListener('click',handlerClick)

      // //add title
      // const title = newQuestion.querySelector('.game-slider__title')
      // title.textContent = `Вопрос ${i} из 10`

      //add images
      // const newImage = newQuestion.querySelector('.game-picture')
      // const imgNum = game.questions[i - 1].imageNum
      // newImage.src = `./assets/images/image-data-master/full/${imgNum}full.webp`

      //add buttons


      // let rightAnswer = game.questions[i - 1].author
      // const answersBtns = newQuestion.querySelectorAll('.game-btn')
      // const answersBtnsArr = Array.from(answersBtns)
      // answersBtnsArr[0].textContent = rightAnswer
      // const otherBtns = answersBtnsArr.slice(1)

      // otherBtns.forEach(btn => {
      //   let num = helper.getRandomInt(game.authors.length)
      //   btn.textContent = getWrongAnswer(num, rightAnswer)
      // })


//     }

//   }



// }