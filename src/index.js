import { router } from './router/router.js';
import { getData } from './models/appModel.js'



const root = document.querySelector('#root');
router.onNavigate('/')




getData();


//  const configMutation = {
//   childList: true,
//   subtree: true
// };

// const callback = function (mutationsList, observer) {
//   const elem = mutationsList[0].addedNodes[1].className
//   if (elem === 'home-block') {
//     startPageController();
//   }

//   if (elem === 'settings-block') {
//     settingController();
//   }

//   if (elem === 'categories__block') {
//     categoriesController()
//   }
//   if (elem === 'questions-block') {
//     questionsController()
//   }


// }

// const observer = new MutationObserver(callback);
// observer.observe(root, configMutation);




window.onpopstate = () => {
  root.innerHTML = router.routes[window.location.pathname].markup;
};


document.querySelector('.logo-img').addEventListener('click', () => {
  router.onNavigate('/');
});

document.querySelector('.settings-logo').addEventListener('click', () => {
  router.onNavigate('/settings');
});
