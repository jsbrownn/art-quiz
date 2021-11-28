import { Settings } from "../../components/settings/settings.js";

function settingController() {
  console.log("settings controller is ready")

  document.querySelector('.close-menu').addEventListener('click', ()=> {
    history.back();
  })

  
}




export { settingController };