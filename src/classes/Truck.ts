// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// The Truck class extends the Vehicle class and implements the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
//  Declare properties of the Truck class
vin: string;
color: string;
make: string;
model: string;
  year: number;
  override weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // Constructor for the Truck class
  constructor (
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;
// Check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  // TODO: Implement the tow method from the AbleToTow interface
   // TODO: Get the make an model of the vehicle if it exists
    
    // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity

    // TODO: If it is, log that the vehicle is being towed

    // TODO: If it is not, log that the vehicle is too heavy to be towed
  tow(vehicle: Truck | Motorbike | Car): void {
    const vehicleDetails = 'make' in vehicle && 'model' in vehicle 
      ? `${vehicle.make} ${vehicle.model}`
      : 'Vehicle';
    
    const vehicleWeight = (vehicle as Vehicle).weight;
    
    if (vehicleWeight <= this.towingCapacity) {
      console.log(`${vehicleDetails} is being towed`);
    } else {
      console.log(`${vehicleDetails} is too heavy to be towed`);
    }
  }

  override printDetails() {
    super.printDetails();
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
    console.log(`Wheels: ${this.wheels}`);
  }
}

// Export the Truck class as the default export
export default Truck;

