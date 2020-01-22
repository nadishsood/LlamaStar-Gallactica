export default class TrafficCar{
    constructor(game){
        this.game = game;
        this.context = this.game.context;
        this.car = new Image();
        this.car.src = "/images/laTa.png";

        this._positionY = (Math.random() * 500) * -1; //start of the enemy car behind 0 or outside the screen 
        this.speed = Math.floor(Math.random() * (7 - 6 + 1)) + 6//for variable speed of incoming traffic/enemy car between 3 to 10 
        this.lane = Math.floor(Math.random() * 3);
        this.lanePosX = [150, 225, 300, 150];

    }

    update(){
        this._positionY += this.speed + this.game.playerCar.speed / 5; ; //to move the enemy car down and add the road speed to that variable
        this.context.drawImage(this.car, this.lanePosX[this.lane], this._positionY, 85, 85);
    
        //remove traffic from screen at bottom
        if(this._positionY >= 850){
            this.game.traffic.splice(this.game.traffic.indexOf(this), 1);
        }
    
    }
    //both getters added for collision detection
    get positionX(){
        return this.lanePosX[this.lane];
    }

    get positionY(){
        return this._positionY;
    }
    

    
}


//trafffic car has to have start at the top of the page where it 
// will enter and it will disappear once it passes our llama below

//in update this.positionY we have to add road class speed to the enemy car speed. 