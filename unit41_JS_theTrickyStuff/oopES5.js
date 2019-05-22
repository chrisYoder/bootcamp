/*jslint node: true */
"use strict";

// function House(bedrooms, bathrooms, numSqft) {
//   this.bedrooms = bedrooms;
//   this.bathrooms = bathrooms;
//   this.numSqft = numSqft;
// }

// const firstHouse = new House(2, 2, 1000);

// // console.log(firstHouse);

// function Dog(name, age) {
//   this.name = name;
//   this.age = age;
  
//   this.bark = function() {
//     console.log(`${this.name} just barked`);
//   };
// }

// const rusty = new Dog('Rusty', 3);
// const fido = new Dog('Fido', 1);

// // rusty.bark();
// // fido.bark();




// // multiple constructors

// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   // we can also set properties on the keyword else that are preset values
//   this.numWheels = 4;
// }

// // NOT DRY
// // function Motorcycle(make, model, year) {
// //   this.make = make;
// //   this.model = model;
// //   this.year = year;
// //   this.numWheels = 2;
// // }

// function Motorcycle() {
//   Car.apply(this, arguments);
//   this.numWheels = 2;
// }

// const indian = new Motorcycle('Indian', 'X1', 2020);

// // console.log(indian.model);

// function Person(name){
//   this.name = name;
// }

// Person.prototype.sayHi = function(){
//   return `Hi ${this.name}`;
// };

// const emily = new Person('Emily');
// console.log(emily.sayHi());

function Vehicle(make, model, year, isRunning) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = isRunning;
}

Vehicle.prototype.turnOn = function () {
    this.isRunning = true;
    return `${this.model} is running`;
};

Vehicle.prototype.turnOff = function() {
    this.isRunning = false;
    return `${this.model} is off`;
  
};

Vehicle.prototype.honk = function () {
  if(this.isRunning === true){
    return `BEEEEEEEEPPPPPPP!!!!!!!`;
  } else {
    return `Cannot honk if car is off`;
  }
  
};

const corolla = new Vehicle('Ford', 'Focus', 2010, false);

console.log(corolla.turnOn(), corolla.honk(), corolla.turnOff(), corolla.honk());

