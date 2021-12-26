const questionHelper = {


  toQuestion() {
    console.log( this)
    
      const elem = event.target
      const num = elem.id.split('_')[1]
      const previousActiveElem = document.getElementById(activeItemId)
      debugger
      previousActiveElem.classList.remove('active')


      elem.classList.add('active')
      activeItemId = elem.id



      const visibleElem = document.querySelector(`#${visibleQuestionId}`)
      visibleElem.style.display = 'none'
      const visibleQuestion = document.getElementById(`question_${num}`)
      visibleQuestionId = visibleQuestion.id
      visibleQuestion.style.display = ""


  }



}

export { questionHelper }


