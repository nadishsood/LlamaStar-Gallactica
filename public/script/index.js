
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
document.querySelectorAll('*'),
function(el) {
    if (el.offsetWidth > docWidth) {
    console.log(el);
    }
}
);



import Game from './game.class.js';

let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');

let game = new Game(context);

requestAnimationFrame(gameLoop);


let yOffset = -500;

function gameLoop(){
   
    game.update();

    requestAnimationFrame(gameLoop);
}


