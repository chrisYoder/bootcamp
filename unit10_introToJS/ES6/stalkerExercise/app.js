'use strict'

let firstName = prompt("What is your first name?");
let lastName = prompt('What is your last name?');
let age = prompt('What is your age?');

console.log(`Your full name is ${firstName} ${lastName}`);
console.log(`Your age is ${age}`);

document.querySelector('#name').innerHTML = `Your full name is ${firstName} ${lastName}`;
document.querySelector('#age').innerHTML = `Your age is ${age}`;