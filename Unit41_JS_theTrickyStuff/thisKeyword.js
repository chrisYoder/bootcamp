/*jslint node: true */

"use strict";
// Global context

// console.log(this);

// function whatIsThis(){
// 	return this;
// }

// const variablesInThis = () => {
// // 	since the value of this is the window
// // 	all we are doing here is creating a global variable
// 	this.person = 'Ayra';
// 	// let person = 'Ayra';
// 	// return person;
	
// };

// // this returns and error because it is outside the function
// console.log(person); 
// // console.log(whatIsThis());

// Implicit/Object

// const person = {
// 	firstName: 'Ayra', 
// 	sayHi() {
// 		return `Hi ${this.firstName}`; // so the closes parent object is person so this.firstName = person.firstName
// 	}, 
	
// 	determineContext() {
// 		return this === person;
// 	}, 
  
//   dog: {
//     sayHello() {
//       return `Hello ${this.firstName}`; // I was right in thinking that this would return undefined without first supplying it with a native firstName 
//     }, 
    
//     determineContext() {
//       return this === person; // because the first method returned undefined then this will return false.
//     }
//   }
// };

// console.log(person.sayHi());
// console.log(person.determineContext());

// console.log(person.dog.sayHello());
// console.log(person.dog.determineContext());

// Explicit 

// Call

const person = {
	firstName: 'Ayra', 
	sayHi() {
		return `Hi ${this.firstName}`; // so the closes parent object is person so this.firstName = person.firstName
	}, 
	
	determineContext() {
		return this === person;
	}, 
  
  dog: {
    sayHello() {
      return `Hello ${this.firstName}`; // I was right in thinking that this would return undefined without first supplying it with a native firstName 
    }, 
    
    determineContext() {
      return this === person; // because the first method returned undefined then this will return false.
    }
  }
};

// console.log(person.dog.sayHello.call(person), person.dog.determineContext.call(person));

const colt = {
  firstName: "Colt", 
  sayHi: function() {
    // return `Hi ${this.firstName}`;
    setTimeout(function(){
      console.log(`Hi ${this.firstName}`);  //we would think that 'this' refers to colt but because it is inside setTimeout it is attached to the global object
    }, 1000);
  },
  
  sayHello: function() {
     setTimeout(function(){
      console.log(`Hello ${this.firstName}`); // when we add .bind() to the setTimout method we are binding this to the object colt
    }.bind(this), 1000);
  },
  
  addNumbers(a, b, c, d){
    return `${this.firstName} just calculated ${a + b + c + d}`;
  }
};

const elie = {
  firstName: 'Elie'
};

// console.log(colt.sayHi());
// console.log(colt.sayHi.call(elie));

// Apply

// console.log(colt.addNumbers(1, 2, 3, 4));
// console.log(colt.sayHi.apply(elie));
// console.log(colt.addNumbers.apply(elie, [1, 2, 3, 4]));

// Bind

const elieCalc2 = colt.addNumbers.bind(elie, 1, 2);
// console.log(elieCalc2(3, 4));
// console.log(elieCalc2(5, 6));

const elieSayHi = colt.sayHi.bind(elie);
const elieSayHello = colt.sayHello.bind(elie);

// elieSayHello(); // this should return 'hello elie'
// elieSayHi(); //returns undefined or an error

// new

function Person(firstName, lastName) {
  //
  this.firstName = firstName;
  this.lastName = lastName;
}

const Arya = new Person('Arya', 'Yoder');  //attaches 'this' to a newly created object
console.log(Arya.firstName, Arya.lastName);
