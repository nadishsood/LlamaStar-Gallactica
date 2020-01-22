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

//navbar responsive toggle code
$(function() {
    $(".toggle").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
            $(this).find("a").html("<i class='fas fa-bars'></i>");
        } else {
            $(".item").addClass("active");
            $(this).find("a").html("<i class='fas fa-times'></i>");
        }
    });
});

