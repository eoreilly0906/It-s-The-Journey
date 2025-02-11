// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
// The Motorbike class extends the Vehicle class
class Motorbike extends Vehicle {
    constructor(vin, color, make, model, year, weight, topSpeed, wheels) {
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
    printDetails() {
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
