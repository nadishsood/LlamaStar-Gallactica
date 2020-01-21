export default class Road{
    constructor(game){
        this.game = game;
        this.context = this.game.context;
        this.yOffset = -500;
        this.road = new Image();
        this.road.src = "./images/skyroad.jpg";
    }
    update(){
        if(this.yOffset >= 0) this.yOffset = -500;

        this.context.drawImage(this.road, 0, this.yOffset);
        this.context.drawImage(this.road, 0, this.yOffset + 500);
        this.context.drawImage(this.road, 0, this.yOffset + 900);
    
    
    
        this.yOffset += this.game.playerCar.speed / 5; 
    }
}