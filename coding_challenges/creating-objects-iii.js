'use strict';

// using new
function VehicleConstructor(name, numWheels, numPass, speed = 0) {
    this.name = name;
    this.speed = speed;
}

VehicleConstructor.prototype.accelerate = function (velChg = 1) {
    this.speed += velChg;
    return this.speed;
}

/*
using Object.create
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
*/