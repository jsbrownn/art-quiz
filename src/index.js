import { router } from './router/router.js';
import { settingController } from './controllers/settings-controller/settings-controller.js';
import { categoriesController } from './controllers/categories-controller/categories.js';
import { startPageController } from './controllers/startPage-controller/startPage.js';
import { getData} from './models/appModel.js'



const root = document.querySelector('#root');

root.innerHTML = router.routes['/'].render();

getData();

const configMutation = {
  childList: true,
  subtree: true
};

const callback = function (mutationsList, observer) {
  const elem = mutationsList[0].addedNodes[1].className

  if (elem === 'home-block') {
    startPageController();
  }

  if (elem === 'settings-block') {
    settingController();
  }

  if (elem === 'categories__block') {
    categoriesController()
  }
}

const observer = new MutationObserver(callback);
observer.observe(root, configMutation);

window.onpopstate = () => {
  root.innerHTML = router.routes[window.location.pathname].markup;
};

document.querySelector('.logo-img').addEventListener('click', () => {
  router.onNavigate('/');
});

document.querySelector('.settings-logo').addEventListener('click', () => {
  router.onNavigate('/settings');
});
