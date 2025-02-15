// Wheel class that defines the properties of a wheel
class Wheel {
    // Constructor for the Wheel class
    constructor(diameter = 18, tireBrand = "GoodYear") {
        this.diameter = diameter;
        this.tireBrand = tireBrand;
    }
    // Getter methods for the properties of the Wheel class
    get getDiameter() {
        return this.diameter;
    }
    // Setter method for the diameter property
    get getTireBrand() {
        return this.tireBrand;
    }
    // Add toString method to properly display wheel information
    toString() {
        return `${this.diameter}" ${this.tireBrand} wheel`;
    }
}
// Export the Wheel class
export default Wheel;
