import { StartPage } from "../components/start-page/start-page.compnent.js";
import { Settings } from "../components/settings/settings.component.js";
import { Categories } from "../components/categories/categories.component.js";
import { Question } from "../components/questions/questions.component.js";


const router = {
  routes: {
    '/': StartPage,
    '/settings': Settings,
    '/categories': Categories,
    '/questions': Question
  },

  onNavigate(pathname) {
    const currentUrl = window.location.href
    let path = currentUrl.split('/')[currentUrl.length]
    if (!path) {
      path = "/"
    }
    if(path != "/"){
      this.routes[path].unrender()
    }
    this.routes[path].isRender = false;

    this.routes[pathname].isRender = true
  
    window.history.pushState(
      
      {},
      pathname,
      window.location.origin + pathname,
    );
      
      root.innerHTML = this.routes[pathname].render();
      this.routes[pathname].controller() //init controller
  
    
  }

}
export { router };

