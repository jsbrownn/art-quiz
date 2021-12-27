import { questionHelper } from "../../helpers/queston.helper.js";
import { router } from "../../router/router.js";
import { answerView } from "../../views/answer/answer.view.js"
import { Game } from "../game-contoller/game.controller.js";

function answerController() {
  answerView()

  const button = document.querySelector('.modal-button');
  const root = document.getElementById('root')
  button.addEventListener('click',()=>{

    const game = Game.instance
    const modal = document.querySelector('.modal-place')
    modal.innerHTML = ""
    root.style.display = ""
    // questionHelper.nextQuestion(game.questionNowNum)
    
  })

}


export { answerController }