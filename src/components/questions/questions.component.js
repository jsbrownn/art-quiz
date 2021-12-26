import { questionsController } from '../../controllers/questions-contorller/questions-controller.js';
import { Component } from '../component.js';

const Question = new Component('question', `

<div class="questions-block">
<div class="game-slider">
<ul class="game-slider__list">
<li class="slider-item" id="slider-item_1">
  
</li>
<li class="slider-item" id="slider-item_2">

</li>
<li class="slider-item" id="slider-item_3">
  
</li>
<li class="slider-item" id="slider-item_4">
  
</li>
<li class="slider-item" id="slider-item_5">
  
</li>
<li class="slider-item" id="slider-item_6">
  
</li>
<li class="slider-item" id="slider-item_7">
  
</li>
<li class="slider-item" id="slider-item_8">
  
</li>
<li class="slider-item" id="slider-item_9">
  
</li>
<li class="slider-item" id="slider-item_10">
  
</li>
</ul>
</div>
<div class="questions-wrap">


</div>


`,
  questionsController)

export { Question };