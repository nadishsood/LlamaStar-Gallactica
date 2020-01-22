export default class CarController{
    constructor(options){
        this.road = options.road;
        this.playerCar = options.playerCar;
        this.init();
    }
    init(){
        document.addEventListener('keydown', (e)=>{
            switch(e.keyCode){
                case 37: 
                    this.playerCar.moveLeft();
                    break;
                case 38:
                    this.playerCar.speed += 1;
                    break;
                case 39: 
                    this.playerCar.moveRight();
                    break;
                case 40:
                    this.playerCar.speed -= 5;
                    break;
                default: 
                    break;
            
            }
        });
    }

}