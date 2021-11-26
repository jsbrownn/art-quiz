import { Component } from "../component";

const StartPage = new Component(
  'startPage',`
  <div class="home-block">
    <h3 class="home__title title">Пожалуйста, выберете квиз:</h3>
    <ul class="home-types__list">
      <li class="home-types-list__item home-types-list__item--artist">
        <h5 class="type-item__title">Art-quiz по художникам</h5>
        <div class="type-item-logo__wrap type-item-logo__wrap--monolisa">
          <img
            src="./assets/images/categories/dali-removebg-preview.png"
            alt="logo"
            class="type__logo type__logo--dali"
          />
        </div>
      </li>
      <li class="home-types-list__item  home-types-list__item--pictures">
        <h5 class="type-item__title">Art-quiz по картинам</h5>
        <div class="type-item-logo__wrap">
          <img
            src="./assets/images/categories/monalisa.png"
            alt="logo"
            class="type__logo type__logo--monalisa"
          />
        </div>
      </li>
    </ul>
  </div>`
)
export { StartPage };