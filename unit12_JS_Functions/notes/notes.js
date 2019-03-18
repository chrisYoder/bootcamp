'use strict';
/*
OBJECTIVES: 
  1. WRITE FUNCTION DECLARATIONS AND EXPRESSIONS
  2. DIFFERENCE BETWEEN CONSOLE.LOG AND RETURN (THE LATTER RETURNS A VALUE TO BE USED BY ANOTHER FUNCTION)
  3. DEFINE MY OWN FUNCTIONS
*/

// INTRO TO FUNCTIONS
  // allow us to bundle bits of code into reusable packaages.
  
function sayHi(){
  console.log("Hello");
}

sayHi();

// Arguments
function squareNum(num){
  return num * num; 
}

console.log(squareNum(2)); //4

function sayHello(name) {
  console.log('Hello there ' + name + '!');
}

sayHello("chris");

function area(length, width) {
  console.log(length * width);
}

area(2, 2);

function greet(person1, person2, person3){
  console.log('Hi ' + person1);
  console.log('Hi ' + person2);
  console.log('Hi ' + person3);
}

greet('Dany', 'Sansa', 'Margery');

// Function Declarations v Function Expressions.

function capitalize(str) {
  if(typeof str === 'number'){
    return "That's not a string";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris";
var capital = capitalize(city);

console.log(capital);

var num = 37; 
var capital1 = capitalize(num);
console.log(capital1);

/*
  WHEN A FUNCTION IS DECLRAED IN THE FORMAT: 
    FUNCTION FUNCNAME() { };
  IT IS A FUNCTION DECLARATION.
  
  WHEN A FUNCTION IS DECLARED IN THE FORMAT: 
    VAR X = FUNCTION(){};
  IT IS A FUNCTION EXPRESSION
*/

/*SCOPE 
  Scope is the context that code is executed in JS
    var is function blocked. So, if the variable is declared in a function then it will only be available 
    in that function. However, that does not hold true for other block elements (if, loops, etc);
    
    let/const are block level variables which means if they are declared in any block (functions, loops, if/else, etc) 
    then they are only visible in that block
*/

/*HIGH ORDER FUNCTIONS

  WE CAN PASS FUNCTION TO OTHER FUNCTIONS
  
*/

function sing(){
  console.log('twinkle, twinkle,');
  console.log('how I woder what ou are');
}

// setInterval(sing, 1000);
// clearInterval(2)

setInterval(function() {
  console.log('I am an anonymous function');
  console.log('this is awesome');
}, 2000);

clearInterval();