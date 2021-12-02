import { helper } from "../helpers/app-helper.js";



function getData() {


  const url = './assets/images/image-data-master/data.json';
  async function loadData(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }


  const data = loadData(url)
    .then((data) => {
      fiteredDataCategories(data);
    });


  function fiteredDataCategories(data) {
    const filteredData = {};
    const categoriesArr = [
      'surrealism',
      'romanticism',
      'religion',
      'expressionism',
      'impressionism',
      'landscape',
      'marine',
      'painting',
      'portrait',
      'realism',
      'renaissance',
      'avant-garde'
    ];

    for (let i in data) {
      filteredData[categoriesArr[i]] = data.filter((elem) => elem.category === categoriesArr[i]);
      helper.setLocalStorage('data', JSON.stringify(filteredData));
    };
  }


  const settingsDefault = {
    "gameplay-timer" : true,
    "interval" : "30",
    "mute": false ,
    "timer-sound" : true,
    "volume" : "1",
    "fanfars": true
}

if( !localStorage.getItem('settings') ){
  helper.setLocalStorage('settings',JSON.stringify( settingsDefault ))
}


}


export { getData };