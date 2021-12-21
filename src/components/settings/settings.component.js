import { settingController } from "../../controllers/settings-controller/settings.controller.js";
import { Component } from "../component.js";

const Settings = new Component ('settings', `
<div class="settings-block">
  <div class="settings_header">
    <h2 class="settings-title">Настройки</h2>
    <div class="close-menu"></div>
  </div>
  <div class="settings-scroll__wrap">
    <div class="gameplay-block">
      <h3 class="settings-block__title">Игровой процесс</h3>
      <div class="gameplay__row">
        <input type="checkbox" class="settings-checkbox" name="gameplay_timer" id="gameplay_timer" />
        <label class="ios-switch" for="gameplay_timer">Игра на время</label>
      </div>
      <div class="gameplay__row gameplay__row--interval">
        <label for="input-interval">Выберите интервал</label>
        <input type="number" name="interval" id="input-interval" min="15" max="30" step="5" />
      </div>
    </div>
    <div class="sound-block">
      <h3 class="settings-block__title">Настройки звука</h3>
      <div class="sounds__row">
        <label class="ios-switch" for="volume">Громкость</label>
        <input type="range" class="range-slider" name="volume" id="volume" min="0" max="1" step="0.01" />
      </div>
      <div class="sounds__row">
        <input type="checkbox" class="settings-checkbox" name="mute" id="mute" />
        <label class="ios-switch" for="mute">Без звука</label>
      </div>
      <div class="sounds__row">
        <input type="checkbox" class="settings-checkbox" name="timer_sound" id="timer_sound" />
        <label class="ios-switch" for="timer_sound">Звук таймера</label>
      </div>
      <div class="sounds__row">
        <input type="checkbox" class="settings-checkbox" name="fanfars" id="fanfars" />
        <label class="ios-switch" for="fanfars">Фанфары</label>
      </div>
    </div>
  </div>
</div>
`,
settingController)


export  { Settings };

