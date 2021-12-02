import { settingController } from "../../controllers/settings-controller/settings-controller.js"
import { helper } from "../../helpers/app-helper.js"


function settingsView() {
  console.log('settingsView is ready')

  function setSettingsValues() {

    const settings = document.querySelector('.settings-block')
    const inputs = settings.querySelectorAll('input')
    const settingsJSON = localStorage.getItem('settings')
    const options = JSON.parse(settingsJSON)
    inputs.forEach( elem => {
      
      if(elem.type === 'checkbox'){
        elem.checked = options[elem.id]
      }
      if ( elem.type === 'number') {
        elem.value = options["interval"]
      }
      if(elem.type === 'range'){
        const a = options[elem.id]
        elem.value = a;
        elem.style.background = `linear-gradient(to right,#4BD663,#4BD663 ${a * 100}%,#eee ${a * 100}%)`;
      }
    })

  }

  function refreshRangeColor() {
    const rangeVolume = document.querySelector('.range-slider')
    rangeVolume.addEventListener('change', valueChanged)
    function valueChanged(e) {
      let a = e.target.value;
      e.target.style.background = `linear-gradient(to right,#4BD663,#4BD663 ${a * 100}%,#eee ${a * 100}%)`;
      rangeVolume.removeEventListener('click', valueChanged)
    }
  }
  setSettingsValues();
  refreshRangeColor()
}


export { settingsView }