'use strict';

const VehicleConstructor = (function(){
    const vehiclePrototype = {
        accelerate: function(velChg = 1) {
            this.speed += velChg;
            return this.speed;
        }
    }

    return function VehicleConstructor(name, numWheels, numPass, speed=0){
        const vehicle = Object.create(vehiclePrototype);
        vehicle.name = name;
        vehicle.speed = speed;
        
        return vehicle;
    }

})();