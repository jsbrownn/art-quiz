import { answerController } from "../../controllers/answer-controller/answer.controller.js";
import { Component } from "./../component.js";


const elem = document.querySelector('.modal-place')

const Answer =  new Component(
  'answer',
  `<div id="modal" class="modal bounceIn">
  <div class="answer">
    <div class="modal-picture__wrap">
      <img src="" alt="Картина" class="modal-picture">
    </div>
    <div class="modal-author"></div>
    <div class="modal-name"></div>
    <div class="modal-year"></div>
    <button class="modal-button button">Продолжить</button>
  </div>
</div>`,
answerController,
elem
)


export { Answer }