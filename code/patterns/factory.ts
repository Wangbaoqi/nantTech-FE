// factory pattern

class Car {
  door: number = 4;
  color: string = 'red';
  constructor({ door, color }: { door: number; color: string }) {
    this.door = door;
    this.color = color;
  }
  drive() {
    console.log(`car having driven ${this.door} doors`);
  }
}

class Truck {
  door: number = 2;
  color: string = 'blue';
  constructor({ door, color }: { door: number; color: string }) {
    this.door = door;
    this.color = color;
  }
  drive() {
    console.log(`truck having driven ${this.door} doors`);
  }
}

class Vehicle {
  createVehicle(type: string, options: { door: number; color: string }) {
    switch (type) {
      case 'truck':
        return new Truck(options);
      case 'car':
        return new Car(options);
      default:
        throw new Error('Invalid vehicle type');
    }
  }
}

const factory = new Vehicle();
const car = factory.createVehicle('car', { door: 4, color: 'red' });
const truck = factory.createVehicle('truck', { door: 2, color: 'blue' });
car.drive();
truck.drive();
