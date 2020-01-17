export default class PlayerCar{
    constructor(game){
        this.game = game;
        this.context = this.game.context;
        this._positionX = 225; //starting position
        this._positionY = 680; //starting position

        this._speed = 0;
        this.maxSpeed = 120;

        this.car = new Image;
        this.car.src = './../images/llama.png';
        }

        moveLeft(){
            this._positionX -=5;
            if(this._positionX <= 150) this._positionX = 150; //constraint 

        }

        moveRight(){
            this._positionX += 5;
            if(this._positionX >= 300) this._positionX = 300; //constraint
        }

        set speed(speed){
            if(speed > this.maxSpeed){
                this._speed = this.maxSpeed;
            }else if(speed <= 0){
                this._speed = 0;
            }else{
                this._speed = speed;
            }

            document.querySelector(".speedo-meter .speed").innerHTML = this._speed;
     }

        get speed(){
            return this._speed;
        }

        update(){
           this. context.drawImage(this.car, this._positionX, this._positionY, 70, 70);

        }
}