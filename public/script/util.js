export function isCollide(playerCar, traffic){
    //check every traffic car'slocation wrt player car
     for(let i = 0; i< traffic.length; i++){
        let trafficCar = traffic[i];
        if(trafficCar.positionY > 620 && trafficCar.positionY < 740 ){
           //check if this result is less than 60, return true. Means collision happened. 
            if(Math.abs(trafficCar.positionX - playerCar.positionX) <= 50){
                return true;
            }; 
            
        }
     }
     return false;
}