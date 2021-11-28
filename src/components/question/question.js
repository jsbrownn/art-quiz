import { Component }  from './../component.js';

const Question  =  new Component('question',`
    <div class="game-block">
      <div class="game-slider">
        <h5 class="game-slider__title">Вопрос 1 из 10</h5>
        <ul class="game-slider__list">
          <li class="game-slider__item">
            <a href="" class="slider-link"></a>
          </li>
      </div>
      <div class="game-picture__wrap">
        <img src="" class="game-picture" alt="picture">
      </div>
      <div class="game-question">Кто автор этой картины?</div>
      <div class="game-answers">
        <button class="game-btn">inner Text</button>
        <button class="game-btn"></button>
        <button class="game-btn"></button>
        <button class="game-btn"></button>
      </div>
    </div>
`)

export { Question };