import Road from './road.class.js';
import PlayerCar from './player.car.class.js';
import CarController from './car.controller.class.js';
import TrafficCar from './traffic.car.class.js';

export default class Game{
  constructor(context){
      this.context = context; 
      this.road = new Road(this);
      this.playerCar = new PlayerCar(this);
      new CarController({
          road: this.road,
          playerCar: this.playerCar

      });


      this.traffic = [];

      setInterval(()=> this.populateTraffic(), 5000);

      
  }  

    populateTraffic(){
        let trafficCar = new TrafficCar(this);
        this.traffic.push(trafficCar);
    }

  update(){
    this.road.update();
    this.playerCar.update();
    // this.trafficCar.update();

    this.traffic.forEach((trafficCar) => {
        trafficCar.update();
    })
  }
}