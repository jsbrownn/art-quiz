import { Game } from "../../controllers/game-contoller/game.controller.js";
function answerView (){
  const game = Game.instance
  
  const question = game.questions[game.questionNowNum - 1]

  const image = document.querySelector('.modal-picture')
  const author = document.querySelector('.modal-author')
  const name = document.querySelector('.modal-name')
  const year = document.querySelector('.modal-year')

  const imageNum = question.imageNum

  image.src = `../../assets/images/image-data-master/full/${imageNum}full.webp`
  author.textContent = question.author
  name.textContent = question.name
  year.textContent = question.year


}

export { answerView};