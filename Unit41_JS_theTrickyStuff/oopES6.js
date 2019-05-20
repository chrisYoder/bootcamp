// /*jslint node: true */
// "use strict";


// class Baby {
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }
  
//   cry() {
//     return `${this.name} is crying`;
//   }
// }

// const arya = new Baby('Arya', 0.25);
// // console.log(arya.cry());

// // multiple constructors

// class Vehicle {
//   constructor (make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
  
//   brake() {
//     console.log(`${this.model} is great when it comes to breaking`);
//   }
// }

// class Car extends Vehicle {
//   constructor(make, model, year) {
//     super(make, model, year);
//     this.numWheels = 4;
//   }
  
// }

// class Motorcycle extends Vehicle {
//   constructor(make, model, year){
//     super(make, model, year);
//     this.numWheels = 2;
//   }
  
//   testBrakes() {
//     return `${super.brake()}`;
//   }
// }

// const indian = new Motorcycle('Indian', 'X2', '2020');



// // console.log(indian);
// // console.log(indian.testBrakes());

// class Person {
//   constructor(name){
//     this.name = name;
//   }
  
//   name() {
//     return this.name;
//   }
// }

// const emily = new Person('Emily');
// console.log(emily.name);

// Person.prototype.sayHi = function() {
//   return `Hi, ${this.name}`;
// };

// console.dir(emily.sayHi());

// class Athlete extends Person {
//   constructor(name, sport) {
//     super(name);
//     this.sport = sport;
//   }
// }

// Person.prototype.introduction = function() {
//   return `Hi, my name is ${this.name}`;
// };

// const chris = new Athlete('Chris', 'Rugby');
// console.log(chris.introduction());

// Athlete.prototype.fullIntro = function() {
//   return `Hi, my name is ${this.name} and I play ${this.sport}`;
// };

// console.log(chris.fullIntro());

class Vehicle{
  constructor(make, model, year, isRunning){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = isRunning;
  }
  
  turnOn() {    
      this.isRunning = true;
      return `${this.model} is running.`;    
  }
  
  turnOff() {    
      this.isRunning = false;
      return `${this.model} is off.`;    
  }
  
  honk() {
    if(this.isRunning === true){
      return 'BEEEEEEPPPPP!!!!!';
    } else {
      return 'Cannot honk when car is off.';
    }
    
  }
}

const corolla = new Vehicle('Toyota', 'Corolla', 2016, false);
const focus  = new Vehicle('Ford', 'Focus', 2017, false);

console.log(corolla.turnOn(), corolla.honk(), corolla.turnOff(), corolla.honk());



