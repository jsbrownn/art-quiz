import { helper } from "../../helpers/app-helper.js";
import { questionsView } from "./../../views/questions/question.view.js";
import { Game } from "../game-contoller/game.controller.js";
import { router } from "../../router/router.js";

function questionsController() {
  console.log('question controlle is ready')
  questionsView()

  const game = Game.instance
  const questionsBlocks = document.querySelectorAll('.question')


  function nextQuestion(questionNum) {

    let num = +questionNum + 1

    if (num >= 10) {
      let sliderItems = document.querySelectorAll('.slider-item')
    }
    const nextItem = document.getElementById(`slider-item_${num}`)
    setTimeout( ()=>{
      nextItem.click()
    },1500)
    
  }


  function saveAnswer(num) {
    let numQuestion = + num;



  }



  function checkAnswer() {

    const questionNum = (event.currentTarget.id.split('_'))[1]
    const elem = event.target
    const sliderItem = document.getElementById(`slider-item_${questionNum}`)


    if (game.answers[questionNum - 1] === event.target.textContent) {
      //правильный ответ

      sliderItem.classList.add('success')
      elem.classList.add('success')
      helper.playSound('sucess')
      router.onNavigate('/answer')
      // nextQuestion(questionNum)
      saveAnswer(questionNum - 1)
    }

    else {
      //неправильный ответ
      if (elem.classList.contains('game-btn')) {
        sliderItem.classList.add('wrong')
        elem.classList.add('wrong')
        helper.playSound('error')
        nextQuestion(questionNum)
      }

    }

  }

  questionsBlocks.forEach(question => {

    question.addEventListener('click', checkAnswer)
  })



}

export { questionsController };