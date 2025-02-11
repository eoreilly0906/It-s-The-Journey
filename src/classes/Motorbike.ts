// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// The Motorbike class extends the Vehicle class
class Motorbike extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  override weight: number;
  topSpeed: number;
  wheels: Wheel[];

  constructor(vin: string,
     color: string,
     make: string, 
     model: string, 
     year: number, 
     weight: number, 
     topSpeed: number, 
     wheels: Wheel[]) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
     }


  // Implement the wheelie method
  wheelie() {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }
  // The method logs the message "Motorbike [make] [model] is doing a wheelie!"
override printDetails() {
  super.printDetails();

  console.log(`VIN: ${this.vin}`);
  console.log(`Make: ${this.make}`);
  console.log(`Model: ${this.model}`);
  console.log(`Year: ${this.year}`);
  console.log(`Weight: ${this.weight} lbs`);
  console.log(`Top Speed: ${this.topSpeed} mph`);
  console.log(`Color: ${this.color}`);
  console.log(`Wheels: ${this.wheels}`);
  // Override the printDetails method from the Vehicle class
  // The method should call the printDetails method of the parent class
  // The method logs the details of the Motorbike
  // The details include the VIN, make, model, year, weight, top speed, color, and wheels
}
}
// Export the Motorbike class as the default export
export default Motorbike;
