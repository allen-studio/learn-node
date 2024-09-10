class Car {
    engine;

    constructor(engine) {
        this.engine = engine;
        console.log('一辆崭新的汽车');
    }

    drive() {
        console.log('正常行驶');
    }
}

class pickupTruck extends Car {}

const p1 = new pickupTruck('v8');
p1.drive();
console.log(p1);