import { helper } from "../../helpers/app-helper.js";
import { questionsView } from "./../../views/questions/question.view.js";
import { Game } from "../game-contoller/game.controller.js";
import { router } from "../../router/router.js";
import { questionHelper } from "../../helpers/queston.helper.js";

function questionsController() {
  console.log('question controlle is ready')
  questionsView()

  const game = Game.instance
  const questionsBlocks = document.querySelectorAll('.question')


  


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
      questionHelper.nextQuestion(+questionNum)
      saveAnswer(questionNum - 1)
    }

    else {
      //неправильный ответ
      if (elem.classList.contains('game-btn')) {
        sliderItem.classList.add('wrong')
        elem.classList.add('wrong')
        helper.playSound('error')
        questionHelper.nextQuestion(+questionNum)
      }

    }

  }

  questionsBlocks.forEach(question => {

    question.addEventListener('click', checkAnswer)
  })



}

export { questionsController };