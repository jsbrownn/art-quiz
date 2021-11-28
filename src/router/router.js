import { StartPage } from "../components/start-page/start-page.js";
import { Settings } from "../components/settings/settings.js";
import { Categories } from "../components/categories/categories.js";
import { Question } from "../components/question/question.js";


const router = {
  routes: {
    '/': StartPage,
    '/settings': Settings,
    '/categories': Categories,
    '/question': Question
},

onNavigate(pathname) {
  const currentUrl = window.location.href
  let path =  currentUrl.split('/')[currentUrl.length]
  if(!path){
    path = "/"
  }
  // this.routes[path].unrender()
  this.routes[path].isRender = false;
  console.log( path)

  this.routes[pathname].isRender = true

  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  
  root.innerHTML = this.routes[pathname].render();
}

}
export {router};

