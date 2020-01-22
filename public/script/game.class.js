import Road from './road.class.js';
import PlayerCar from './player.car.class.js';
import CarController from './car.controller.class.js';
import TrafficCar from './traffic.car.class.js';
import { isCollide } from './util.js'; 

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

      setInterval(()=> this.populateTraffic(), 2000);

      
  }  

    populateTraffic(){
        if(this._paused) return; //if game is paused, don't create traffic cars. 
        let trafficCar = new TrafficCar(this);
        this.traffic.push(trafficCar);
    }

    tryAgain(e){
        if(e.keyCode!== 32){
            return;
        }


        this.traffic = [];
        this.playerCar.resetPosition();
        this.playerCar.speed = 10;
        this._paused = false;
        let screentryAgain = document.querySelector(".try-again");
        screentryAgain.style.display = "none";
        document.onkeydown = null;

        let body = document.querySelector("canvas");
        body.style.opacity = 1;


    }

  update(){
    if(this._paused) return;
    this.road.update();
    this.playerCar.update();
    // this.trafficCar.update();

    this.traffic.forEach((trafficCar) => {
        trafficCar.update();
    });

    if(isCollide(this.playerCar, this.traffic)){
        this._paused = true;

        let screenTryAgain = document.querySelector(".try-again");
        screenTryAgain.style.display = "block";

        let body = document.querySelector("canvas");
        body.style.opacity = 0.5;
        screenTryAgain.style.opacity = 1;
        document.onkeydown = e => this.tryAgain(e);

        

    }
  }
}