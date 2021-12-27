import { Game } from "../controllers/game-contoller/game.controller.js"

const questionHelper = {


  nextQuestion(questionNum) {
    const game = Game.instance
    console.log(questionNum, typeof questionNum)
    let num = questionNum +1
    let sliderItems = document.querySelectorAll('.slider-item')
    let arr = Array.from(sliderItems)
    const nextItem = document.getElementById(`slider-item_${num }`)


    function findNotAnsweredQuestion() {
      function checkClass(el){
        if( !el.classList.contains('wrong') && !el.classList.contains('success') ){
          return el;
        } else {
          game.stop()
        }
      }



      let notAnsweredElem = arr.find( checkClass );
        return notAnsweredElem;
    }

    function delay( elem ) {
      setTimeout( () => {
        elem.click()}), 1000
      }
  


    if (num > 9 || nextItem.classList.contains("wrong") && nextItem.classList.contains('success')) {
      delay( findNotAnsweredQuestion() );
    } else {
      delay( nextItem )
    }



    // if (notAnsweredElem === undefined) {
    //   game.stop()
    // } else {
    //   setTimeout(() => {
    //     notAnsweredElem.click()
    //   }), 1000
    // }

    }


  }



export { questionHelper };