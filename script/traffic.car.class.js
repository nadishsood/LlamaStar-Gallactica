export default class TrafficCar{
    constructor(game){
        this.game = game;
        this.context = this.game.context;
        this.car = new Image();
        this.car.src = "/images/laTa.png";

    }

    update(){
        this.context.drawImage(this.car, 120, 500, 85, 85);
    }
}