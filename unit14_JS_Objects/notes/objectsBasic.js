// OBJECTIVES
// 1. UNDERSTAND OBJECTS CONCEPTUALLY
// 2. WRITE CODE USING JS OBJECTS

// USED TO MODEL REAL WORLD OBJECTS

var person = {
  name: 'Chris', 
  age: 33, 
  city: 'San Antonio', 
  state: 'Tx'
}

console.log(person['name']);
console.log(person.name);

var dog = {
  name: 'rusty',
  breed: 'mutt', 
  age: '3'
}

console.log(dog);
console.log(dog.age);

// YOU CANNOT USE DOT NOTATION IN ALL CIRCUMSTANCES. IF KEY STARTS WITH NUMBER OR IS MORE THAN ONE WORD

var someObject = {
  '1blah': 'blah',
  'fav color': 'red'
}
someObject.1blah
console.log(someObject['1blah']);
console.log(someObject['fav color']);

dog.age = 4;
console.log(dog);
dog.age += 1;
console.log(dog);

// WE HAVE BEEN WORKING WITH OBJECT LITERALS THUS FAR.

// COMPAISON OF STRINGS AND OBJECTS
  // ARRAYS ARE ORDERED (0, 1, 2,...) OBJECTS HAVE KEY:VALUE PAIRS
  
var dogs = ["Rusty", "Lucky", "Bubba"];

var dog = {
  name: "Bubba", 
  breed: "Lab"
}

console.log(dogs);
console.log(dog);

// getting data
console.log(dogs[1]);
console.log(dog.name);

// adding data
dogs.push('Wyatt');
dog['age'] = 6;

console.log(dogs);
console.log(dog);

// updating data
dogs[1] = "Lucy";
dog.breed = "Black Lab";

console.log(dogs);
console.log(dog);


