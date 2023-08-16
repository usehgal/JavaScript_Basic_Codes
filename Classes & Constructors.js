class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    console.log("Engine started.");
  }
}

let myCar = new Car("Toyota", "Corolla");
myCar.start(); // Output: "Engine started."
