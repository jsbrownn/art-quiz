class Game {
  constructor(typeGame,category,timer,timerCount){
    this.typeGame = typeGame,
    this.category = category,
    this.timer = timer,
    this.timerCount = timerCount
  }

start() {
  console.log(this,'start')
}
pause() {
  console.log(this,'pause')
}
stop() {
  console.log(this,'stop')
}
getQuestions () {
  console.log(this,'getQuestions')
}

showResult(){
  console.log(this,'showResult')
}




  }





export { Game };