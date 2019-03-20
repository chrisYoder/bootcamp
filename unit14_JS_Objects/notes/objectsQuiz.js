// OBJECTS QUIZ

// EXERCISE 1

// PRE-CODING ANSWERS
  // someObject._name = 'Hedwig' :: I don't think that this will cause an error but there is a convention regarding the underscore
  // someObject.age = 6 :: no issue here
  // var prop = 'color'; someObject[prop] = 'red'; :: the variable is going to have no impact on the object property. 
    // However, you will have to put prop in quote for it to work. ie someObject['prop'] = 'red';
    // disregard what I said above. when you pass a variable as a key name then it will use the value.
  // someObject.123 = true; this will cause an error. You can do this: someObject['123']. If I remember correctly object keys need to be str


var someObject = {};

someObject._name = 'Hedwig';

someObject.age = 6;

var prop = 'color';
  console.log(prop);
someObject[prop] = 'white';
  console.log(someObject); //I wonder if this is going to use 'color' as the value name; -- it does
  
// someObject.123 = true; 
// the obove needs to be: 
someObject['123'] = true;

console.log(someObject);


// EXERCISE 2
  
// GIVEN
var someObject2 = {
  friends: [
    {name: 'Malfoy'}, 
    {name: 'Crabbe'}, 
    {name: 'Goyle'}
  ],
  color: 'baby blue', 
  isEvil: true
}

// RETRIEVE 'MALFOY' GOING ONE LAYER AT A TIME

console.log(someObject2.friends[0].name);