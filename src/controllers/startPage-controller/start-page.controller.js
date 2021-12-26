import { router } from "../../router/router.js"
import { Game } from "../game-contoller/game.controller.js";
import { helper } from "../../helpers/app-helper.js";

function startPageController() {
  console.log('startPage controller is ready')
  const items = document.querySelector('.home-types__list')
  items.addEventListener('click', selectTypeGame)

  function changeTypeGame(event, element, type) {
    const el = element;
    const elems = event.path.splice(0, 4);
    if (elems.includes(el)) {
      const game = new Game;
      game.typeGame = type;
      router.onNavigate('/categories');
    }
  }


  function selectTypeGame() {
    helper.playSound('click') //должно передаватся имя аудиофайла без указания расширения
    if (event.target.closest('li')) {
      const element = document.querySelector('.home-types-list__item--artist');
      const type = 'author';
      changeTypeGame(event, element, type)
    }

    if (event.target.closest('li')) {
      const element = document.querySelector('.home-types-list__item--pictures');
      const type = 'name';
      changeTypeGame(event, element, type)
    }
  }

}


export { startPageController }