function Vehicle(name, numOfWheels, numOfPassengers, speed) {
    const vehicle = {
        name,
        numOfWheels,
        numOfPassengers,
        speed
    };
    return vehicle;
}

const v1 = Vehicle('sedan', 4);
const v2 = Vehicle('big rig', 16);
const v3 = Vehicle('school bus', 24);
