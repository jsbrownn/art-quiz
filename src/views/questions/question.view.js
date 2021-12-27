import { Game } from "../../controllers/game-contoller/game.controller.js";
import { helper } from "../../helpers/app-helper.js";



function questionsView() {
  console.log('questionView is ready')
  let visibleQuestionId = 'question_1'
  let activeItemId = 'slider-item_1'



  let game = Game.instance
  game.options = []
  game.questions.forEach(elem => {
    game.options.push(elem[game.typeGame])
  });




  function createQuestions() {
    const game = Game.instance
    const questionWrap = document.querySelector('.questions-wrap')
    let textQuestion = '';
    if (game.typeGame === 'author') {
      textQuestion = 'Кто автор этой картины?'
    }

    if (game.typeGame === 'name') {
      textQuestion = 'Как называется эта картина?'
    }



    function getWrongAnswer(num, rightAnswer) {
      let nums = []
      if (num < 0) {
        num = game.questions.length
      }

      // в условии делаем проверку на уникальность чисел
      //(сверяем с числами, которые уже выпадали)
      if (game.options[num] !== rightAnswer && !nums.includes(num)) {
        nums.push(num)
        let option = game.options[num]
        return option
      } else {
        getWrongAnswer(num - 1, rightAnswer)
      }
    }



    for (let i = 1; i <= 10; i++) {

      const question = document.createElement('div')
      question.style.display = 'none'

      // if (!game.questionNowNum) {

      //   if (i === 1) {
      //     question.style.display = ''
      //     game.questionNowNum = 1
      //   }
      // } else {
      //   if (i == game.questionNowNum) {
      //     question.style.display = ""
      //     const sliderItem = document.querySelector(`#slider-item_${game.questionNowNum}`)
      //     sliderItem.classList.add('active')
      //   }
      // }


      if (i === 1) {
            question.style.display = ''
            game.questionNowNum = 1
          }




      question.id = `question_${i}`
      question.classList.add('question')
      const title = document.createElement('h5')
      title.classList.add('game-slider__title')
      title.textContent = `Вопрос ${i} из 10`
      const imgWrap = document.createElement('div')
      imgWrap.classList.add('game-picture__wrap')
      const image = document.createElement('img')
      image.classList.add('game-picture')
      image.id = `game-picture_${i}`
      image.alt = 'picture'
      const num = game.questions[i - 1].imageNum
      const src = `../../assets/images/image-data-master/img/${num}.webp`
      image.src = src
      imgWrap.appendChild(image)

      const textTitle = document.createElement('div')
      textTitle.classList.add('game-question')
      textTitle.textContent = textQuestion



      const btnsWrap = document.createElement('div')
      btnsWrap.classList.add('game-answers')
      btnsWrap.id = `answers_${i}-btns`

      let rightAnswer = game.questions[i - 1][game.typeGame]
      for (let j = 1; j <= 4; j++) {

        const button = document.createElement('button')
        button.id = `game-btn_${j}`
        button.classList.add('game-btn')
        btnsWrap.appendChild(button)



        if (j === 1) {
          button.textContent = rightAnswer
        } else {
          let randomNum = helper.getRandomInt(game.options.length)
          button.textContent = getWrongAnswer(randomNum, rightAnswer)
        }



      }
      question.appendChild(title)
      question.appendChild(imgWrap)
      question.appendChild(textTitle)
      question.appendChild(btnsWrap)

      questionWrap.insertAdjacentElement('beforeend', question)
      
    }

  }


  createQuestions();


  function toQuestion() {

    const elem = event.target
    const num = elem.id.split('_')[1]
    game.questionNowNum = +num
    const previousActiveElem = document.getElementById(activeItemId)
    previousActiveElem.classList.remove('active')


    elem.classList.add('active')
    activeItemId = elem.id



    const visibleElem = document.querySelector(`#${visibleQuestionId}`)
    visibleElem.style.display = 'none'
    const visibleQuestion = document.getElementById(`question_${num}`)
    visibleQuestionId = visibleQuestion.id
    visibleQuestion.style.display = ""

  }


  const sliderItems = document.querySelectorAll('.slider-item')
  sliderItems.forEach(item => item.addEventListener('click', toQuestion))


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
  //
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