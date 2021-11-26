import { StartPage } from './components/start-page/startPage';
import { Settings } from './components/settings/settings';
import { Categories } from './components/categories/category';
// import { Question } from './components/question/question.'
import { Game } from './controllers/game-contoller/game';
import { helper } from './helpers/app-helper';

// import { Routers }  from './js/routes.js'

function setBackgroundsToCategories(data) {
  const arr = Object.keys(data);
  const categoriesCards = document.querySelectorAll('.categories-list__item');

  arr.forEach((elem) => {
    const imageNumArr = data[elem].map((item) => item.imageNum);
    const random = helper.getRandomInt(imageNumArr.length);
    const num = imageNumArr[random];
    const src = `url('./assets/images/image-data-master/img/${num}.webp')`;

    categoriesCards.forEach((item) => {
      const card = item;
      const category = card.className.split('--')[1];
      if (category === elem) {
        card.style.backgroundImage = src;
      }
    });
  });
}

async function loadData() {
  const url = './assets/images/image-data-master/data.json';
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
const data = loadData()
  .then((data) => {
    fiteredDataCategories(data);
  });

function fiteredDataCategories(data) {
  const filteredData = {};
  const categoriesArr = ['surrealism', 'romanticism', 'religion', 'expressionism', 'impressionism', 'landscape', 'marine', 'painting', 'portrait', 'realism', 'renaissance', 'avant-garde'];

  Object.keys(data).forEach((i) => {
    if ({}.hasOwnProperty.call(data, i)) {
      filteredData[categoriesArr[i]] = data.filter((elem) => elem.category === categoriesArr[i]);
    }
    helper.setLocalStorage('data', JSON.stringify(filteredData));
  });
  const categoriesData = JSON.parse(localStorage.getItem('data'));
}

const routes = {
  '/': StartPage,
  '/settings': Settings,
  '/categories': Categories,
};

const root = document.querySelector('#root');
root.innerHTML = routes['/'].render();

function onNavigate(pathname) {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.innerHTML = routes[pathname].render();
}

window.onpopstate = () => {
  root.innerHTML = routes[window.location.pathname].render();
};

function navigate(event) {
  // logo
  if (event.target.className === 'logo-img') {
    onNavigate('/');
  }

  if (event.target.className === 'settings-logo icon') {
    onNavigate('/settings');
  }

  if (event.target.closest('li')) {
    // onNavigate('/categories')
    const elems = event.path.splice(0, 4);
    const artistLi = document.querySelector('.home-types-list__item--artist');
    if (elems.includes(artistLi)) {
      const game = new Game('artist');
      onNavigate('/categories');
      setBackgroundsToCategories(categoriesData);
    }
  }

  if (event.target.closest('li')) {
    // onNavigate('/categories')
    const elems = event.path.splice(0, 4);
    const picturesLi = document.querySelector('.home-types-list__item--pictures');
    if (elems.includes(picturesLi)) {
      const game = new Game('pictures');
      onNavigate('/categories');
      setBackgroundsToCategories(categoriesData);
    }
  }

  if (event.target.className === 'close-menu') {
    history.back();
  }
}

document.body.addEventListener('click', navigate);
