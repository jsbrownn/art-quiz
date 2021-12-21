import { helper } from "../../helpers/app-helper.js";
import { questionsView } from "../../views/questions/question.view.js";
import { Game } from "../game-contoller/game.controller.js";

function questionsController() {
  console.log( 'Question controller is ready')
  questionsView();

  const game = Game.instance
  const questionsBlocks = document.querySelectorAll('.question')
  

  function nextQuestion(questionNum) {
    let num =  +questionNum + 1 
    if(num > 10){
      num = 1
    }
    window.location.hash = `#question_${num}`
  }


  function saveAnswer (num) {
    let numQuestion = + num;



  }



function checkAnswer () {
  
  const questionNum = (event.currentTarget.id.split('_'))[1]
  const elem = event.target


  if(game.answers[ questionNum - 1 ] === event.target.textContent){
     //правильный ответ
    elem.classList.add('success')
    helper.playSound('sucess')
    nextQuestion(questionNum)
    saveAnswer(questionNum - 1)
  } 

  else {
    //неправильный ответ
    if( elem.classList.contains('game-btn') ){

      elem.classList.add('wrong')
      helper.playSound('error')
    }
    
  }

}

  questionsBlocks.forEach(question => {

    question.addEventListener('click', checkAnswer)
})



}

export { questionsController };