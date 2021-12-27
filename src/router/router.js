import { StartPage } from "../components/start-page/start-page.compnent.js";
import { Settings } from "../components/settings/settings.component.js";
import { Categories } from "../components/categories/categories.component.js";
import { Question } from "../components/questions/questions.component.js";
import { Score } from "../components/score/score.component.js";
import { Answer } from "../components/answer/answer.component.js";
import { Result } from "../components/result/result.component.js";


const router = {
  routes: {
    '/': StartPage,
    '/settings': Settings,
    '/categories': Categories,
    '/questions': Question,
    '/score': Score,
    '/answer': Answer,
    '/result': Result
  },

  onNavigate(pathname) {
    const currentUrl = window.location.href
    const modalPlace = document.querySelector('.modal-place')
    let path = currentUrl.split('/')[currentUrl.length]
    if (!path) {
      path = "/"
    }
    if (path != "/") {
      this.routes[path].unrender()
    }
    this.routes[path].isRender = false;

    this.routes[pathname].isRender = true

    window.history.pushState(

      {},
      pathname,
      window.location.origin + pathname,
    );


    /* 
    в случае рендера модального окна не было времени нормально 
    разобраться с тем,
    чтобы сохнранять каким-то образом состояние страницы 
    при перерендере,
    поэтому сделал костыль с еще одним блоком в index.html , 
    при рендере компонента
    answer - корневому элементу задается  display: none, а сам
    компонент answer рендерится в блоке 'modal-place' */


    if (pathname === "/answer") {
      modalPlace.innerHTML = this.routes[pathname].render();
      this.routes[pathname].controller() //init controller
      root.style.display = 'none'
    } else {
      root.innerHTML = this.routes[pathname].render();
      this.routes[pathname].controller() //init controller
    }



  }

}
export { router };

