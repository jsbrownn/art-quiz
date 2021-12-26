import { questionsController } from '../../controllers/questions-contorller/questions-controller.js';
import { Component } from '../component.js';

const Question = new Component('question', `

<div class="questions-block">
<div class="game-slider">
  <ul class="game-slider__list">
    <li class="slider-item" id="slider-item_1">
      <a class="slider-item__link" href="#question_1" id="slider-item__link-1"></a>
    </li>
    <li class="slider-item" id="slider-item_2">
    <a class="slider-item__link" href="#question_2" id="slider-item__link-2"></a>
    </li>
    <li class="slider-item" id="slider-item_3">
      <a class="slider-item__link" href="#question_3" id="slider-item__link-3"></a>
    </li>
    <li class="slider-item" id="slider-item_4">
      <a class="slider-item__link" href="#question_4" id="slider-item__link-4"></a>
    </li>
    <li class="slider-item" id="slider-item_5">
      <a class="slider-item__link" href="#question_5" id="slider-item__link-5"></a>
    </li>
    <li class="slider-item" id="slider-item_6">
      <a class="slider-item__link" href="#question_6" id="slider-item__link-6"></a>
    </li>
    <li class="slider-item" id="slider-item_7">
      <a class="slider-item__link" href="#question_7" id="slider-item__link-7"></a>
    </li>
    <li class="slider-item" id="slider-item_8">
      <a class="slider-item__link" href="#question_8" id="slider-item__link-8"></a>
    </li>
    <li class="slider-item" id="slider-item_9">
      <a class="slider-item__link" href="#question_9" id="slider-item__link-9"></a>
    </li>
    <li class="slider-item" id="slider-item_10">
      <a class="slider-item__link" href="#question_10" id="slider-item__link-10"></a>
    </li>
  </ul>
</div>
<div class="questions-wrap">
  <div class="question"  id="question_1" >
        <h5 class="game-slider__title">Вопрос 1 из 10</h5>
        <div class="game-picture__wrap">
          <img src=""  id ="picture_1" class="game-picture" alt="picture">
        </div>
        <div class="game-question"></div>
        <div class="game-answers">
          <button class="game-btn"></button>
          <button class="game-btn"></button>
          <button class="game-btn"></button>
          <button class="game-btn"></button>
        </div>
  </div>
  <div class="question"  id="question_2" >
        <h5 class="game-slider__title">Вопрос 2 из 10</h5>
        <div class="game-picture__wrap">
          <img src="" id ="picture_2" class="game-picture" alt="picture">
        </div>
        <div class="game-question"></div>
        <div class="game-answers">
          <button class="game-btn"></button>
          <button class="game-btn"></button>
          <button class="game-btn"></button>
          <button class="game-btn"></button>
        </div>
  </div>
  <div class="question"  id="question_3" >
        <h5 class="game-slider__title">Вопрос 3 из 10</h5>
        <div class="game-picture__wrap">
          <img src="" id ="picture_3" class="game-picture" alt="picture">
        </div>
        <div class="game-question"></div>
        <div class="game-answers">
          <button class="game-btn"></button>
          <button class="game-btn"></button>
          <button class="game-btn"></button>
          <button class="game-btn"></button>
        </div>
  </div>
  <div class="question"  id="question_4" >
        <h5 class="game-slider__title">Вопрос 4 из 10</h5>
        <div class="game-picture__wrap">
          <img src="" id ="picture_4" class="game-picture" alt="picture">
        </div>
        <div class="game-question"></div>
        <div class="game-answers">
          <button class="game-btn"></button>
          <button class="game-btn"></button>
          <button class="game-btn"></button>
          <button class="game-btn"></button>
        </div>
  </div>
  <div class="question"  id="question_5" >
        <h5 class="game-slider__title">Вопрос 5 из 10</h5>
        <div class="game-picture__wrap">
          <img src="" id="picture_5" class="game-picture" alt="picture">
        </div>
        <div class="game-question"></div>
        <div class="game-answers">
          <button class="game-btn"></button>
          <button class="game-btn"></button>
          <button class="game-btn"></button>
          <button class="game-btn"></button>
        </div>
  </div>
  
  <div class="question"  id="question_6" >
        <h5 class="game-slider__title">Вопрос 6 из 10</h5>
        <div class="game-picture__wrap">
          <img src="" id="picture_6" class="game-picture" alt="picture">
        </div>
        <div class="game-question"></div>
        <div class="game-answers">
          <button class="game-btn"></button>
          <button class="game-btn"></button>
          <button class="game-btn"></button>
          <button class="game-btn"></button>
        </div>
  </div>
  <div class="question"  id="question_7" >
        <h5 class="game-slider__title">Вопрос 7 из 10</h5>
        <div class="game-picture__wrap">
          <img src="" id="picture_7" class="game-picture" alt="picture">
        </div>
        <div class="game-question"></div>
        <div class="game-answers">
          <button class="game-btn"></button>
          <button class="game-btn"></button>
          <button class="game-btn"></button>
          <button class="game-btn"></button>
        </div>
  </div>
  <div class="question"  id="question_8" >
        <h5 class="game-slider__title">Вопрос 8 из 10</h5>
        <div class="game-picture__wrap">
          <img src="" id="picture_8" class="game-picture" alt="picture">
        </div>
        <div class="game-question"></div>
        <div class="game-answers">
          <button class="game-btn"></button>
          <button class="game-btn"></button>
          <button class="game-btn"></button>
          <button class="game-btn"></button>
        </div>
  </div>
  <div class="question"  id="question_9" >
        <h5 class="game-slider__title">Вопрос 9 из 10</h5>
        <div class="game-picture__wrap">
          <img src="" id="picture_9" class="game-picture" alt="picture">
        </div>
        <div class="game-question"></div>
        <div class="game-answers">
          <button class="game-btn"></button>
          <button class="game-btn"></button>
          <button class="game-btn"></button>
          <button class="game-btn"></button>
        </div>
  </div>
  <div class="question"  id="question_10" >
        <h5 class="game-slider__title">Вопрос 10 из 10</h5>
        <div class="game-picture__wrap">
          <img src="" id="picture_10" class="game-picture" alt="picture">
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
  questionsController,
  )

export { Question };