import { Settings } from "../../components/settings/settings.js";
import { helper } from "../../helpers/app-helper.js";
import { settingsView } from "../../views/settings/settings.js";

function settingController() {
  settingsView();
  console.log("settings controller is ready")

  document.querySelector('.close-menu').addEventListener('click', () => {
    history.back();
  })

  const settings = document.querySelector('.settings-block')
  const inputs = settings.querySelectorAll('input')

  function initHandlers(items) {
    items.forEach(element => {
      element.addEventListener('change', getValue)
    });

  }

  function addValue(element, value) {
    // конфиг настроек хранится в localStorage как обьект 
    // 'settings'в формате json. в модели лежит обькт с дефолтными настройками,
    // при загрузке приложения, если в localStorage нет сохраненных данных  - сетается дефолт.
    // при обновлении настроек, загружается JSON  из localStorage, обновляется
    // свойство и записывается обратно

    let settingsData = localStorage.getItem('settings')
    settingsData = JSON.parse(settingsData)
    settingsData[element] = value
    helper.setLocalStorage('settings', JSON.stringify(settingsData))
  }


  function getValue() {
    if (event.target.type === 'checkbox') {
      addValue(event.target.id, event.target.checked)
    }

      if (event.target.id === 'input-interval') {
        addValue('interval', event.target.value)
      }

      if (event.target.id === 'volume') {
        const mute = settings.querySelector('#mute')
        if (event.target.value === "0") {
          addValue('mute', true)
          mute.checked = true
        } else {
          addValue('mute', true);
          mute.checked = false
        }if (event.target.value !== "0") {
          addValue('mute', false)
          addValue('volume', event.target.value)
        }
      }
      

      


    }


    initHandlers(inputs)

  }








  export { settingController };