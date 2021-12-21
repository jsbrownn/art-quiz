import { questionsController } from '../../controllers/questions-contorller/questions-controller.js';
import { Component } from '../component.js';

const Question = new Component('question', `

<div class="questions-block">
<div class="game-slider">
  <ul class="game-slider__list">
    <li class="slider-item" id="slider-item_1">
      <a class="slider-item__link" href="#question_1" id="slider-item__link-1"></a>
    </li>

  </ul>
</div>
<div class="questions-wrap">
  <div class="question"  id="question_1" >
        <h5 class="game-slider__title">Вопрос 1 из 10</h5>
        <div class="game-picture__wrap">
          <img src="" class="game-picture" alt="picture">
        </div>
        <div class="game-question"></div>
        <div class="game-answers">
          <button class="game-btn"></button>
          <button class="game-btn"></button>
          <button class="game-btn"></button>
          <button class="game-btn"></button>
        </div>
  </div>

</div>


`,
  questionsController)

export { Question };