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

console.log(someObject['1blah']);
console.log(someObject['fav color']);
