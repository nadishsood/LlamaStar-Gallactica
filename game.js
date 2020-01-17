// let canvas = $('#canvas');
let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');

let skyroad = new Image();
skyroad.src = "./images/skyroad.jpg";

skyroad.onload =()=>{
    requestAnimationFrame(gameLoop);
}

let car = new Image;
car.src = './images/llama.png';

let yOffset = -500;

function gameLoop(){
    if(yOffset >= 0) yOffset = -500;

    context.drawImage(skyroad, 0, yOffset);
    context.drawImage(skyroad, 0, yOffset + 500);
    context.drawImage(skyroad, 0, yOffset + 1024);



    yOffset +=10;
    context.drawImage(car, 225, 400);
    requestAnimationFrame(gameLoop);
}


