import { helper } from "../../helpers/app-helper.js"
import { getData } from "../../models/appModel.js";
import { router } from "../../router/router.js";

class Game {
  constructor(props) {
    if (Game.exist) {
      return Game.instance;
    }
    Game.instance = this,
      Game.exist = true,
      this.typeGame = undefined,
      this.category = undefined,
      this.timer = false,
      this.timerInterval = undefined,
      this.questions = [],
      this.answers = [],
      this.answeredQuestion = {},
      this.questionNowNum =''
  }

  start() {
    const settings = JSON.parse(localStorage.getItem('settings'))
    this.timer = settings.gameplay_timer
    this.timerInterval = settings.interval
  }


  pause() {
    console.log(this, 'pause')
  }


  stop() {
    router.onNavigate('/result')
    
  }


  getQuestions() {
    let data = helper.getlocalStorage('data')
    data = JSON.parse(data)
    let categoryObj = data[this.category]

    while (this.questions.length < 10) {
      let num = helper.getRandomInt(categoryObj.length);
      let obj = categoryObj[num]
      if (!this.questions.includes(obj)) {
        this.questions.push(obj)
      }
    }
    this.getAnswers()
  }

  getAnswers() {
    let type = this.typeGame
    if (type === "artist"){
      type = "author"
    }
    const questions = this.questions;
    for (let i = 0; i < questions.length; i++){
      this.answers.push( questions[i][type] )
    }
  
  }


  saveAnswersToLocalStorage() {
  
  
  }


}
export { Game };