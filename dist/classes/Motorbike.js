// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
// TODO: The Motorbike class should extend the Vehicle class
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
}
// Export the Motorbike class as the default export
export default Motorbike;
