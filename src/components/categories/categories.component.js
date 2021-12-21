import { categoriesController } from '../../controllers/categories-controller/categories.contorller.js';
import { Component }  from '../component.js';


const Categories = new Component('categories', `
  <div class= "categories__block" >
  <ul class="categories__list">
    <li class="categories-list__item categories-list__item--impressionism">
      <h4 class="category-title">Импрессионизм</h4>
    </li>
    <li class="categories-list__item categories-list__item--surrealism">
      <h4 class="category-title">Cюрреализм</h4>
    </li>
    <li class="categories-list__item categories-list__item--romanticism">
      <h4 class="category-title">романтизм</h4>
    </li>
    <li class="categories-list__item categories-list__item--religion">
      <h4 class="category-title">религия</h4>
    </li>
    <li class="categories-list__item categories-list__item--expressionism">
      <h4 class="category-title">экспрессионизм</h4>
    </li>
    <li class="categories-list__item categories-list__item--landscape">
      <h4 class="category-title">пейзаж</h4>
    </li>
    <li class="categories-list__item categories-list__item--marine">
      <h4 class="category-title">марина</h4>
    </li>
    <li class="categories-list__item categories-list__item--painting">
      <h4 class="category-title">живопись</h4>
    </li>
    <li class="categories-list__item categories-list__item--portrait">
      <h4 class="category-title">портрет</h4>
    </li>
    <li class="categories-list__item categories-list__item--avant-garde">
      <h4 class="category-title">авангард</h4>
    </li>
    <li class="categories-list__item categories-list__item--renaissance">
      <h4 class="category-title">Ренессанс</h4>
    </li>
    <li class="categories-list__item categories-list__item--realism">
      <h4 class="category-title">реализм</h4>
    </li>
  </ul>
          </div > `, categoriesController)


export { Categories };

