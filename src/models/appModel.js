function getData () {
  

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



}


export  { getData };