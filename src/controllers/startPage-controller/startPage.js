import { router } from "./../../router/router.js"
import { Game } from "../game-contoller/game.js";
import { helper } from "../../helpers/app-helper.js";

function startPageController() {
  const items = document.querySelector('.home-types__list')
  items.addEventListener('click',selectTypeGame)

  function changeTypeGame(event, element, type) {
    const el = element;
    const elems = event.path.splice(0, 4);
    if (elems.includes(el)) {
      const game = new Game(type);
      router.onNavigate('/categories');
    }

  }


  function selectTypeGame() {
    helper.playClick()
    if (event.target.closest('li')) {
      const element = document.querySelector('.home-types-list__item--artist');
      const type = 'artist';
      changeTypeGame(event, element, type)
    }

    if (event.target.closest('li')) {
      const element = document.querySelector('.home-types-list__item--pictures');
      const type = 'pictures';
      changeTypeGame(event, element, type)
    }

  }





}






export { startPageController };