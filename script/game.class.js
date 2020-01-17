import Road from './road.class.js';
import PlayerCar from './player.car.class.js';
import CarController from './car.controller.class.js'

export default class Game{
  constructor(context){
      this.context = context; 
      this.road = new Road(this);
      this.playerCar = new PlayerCar(this);
      new CarController({
          road: this.road,
          playerCar: this.playerCar

      });
  }  
  update(){
    this.road.update();
    this.playerCar.update();
  }
}