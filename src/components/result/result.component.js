import { Component } from "../component";

const result = new Component(
  'result',
  `<div class="result">
  <div class="result-text">
    <h2 class="result-title">Поздравляем!</h2>
    <h3 class="result-subtitle">Ваш результат:</h3>
    <div class="result-answers">Ответы: 10/10</div>
    <div class="result-time">Время квиза: 20 секунд</div>
  </div>
  <input type="text" name="name" id="result-name" placeholder="Введите имя">
  <button class="button">Coхранить</button>
</div>`,
)