var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var age = prompt('What is your age?');
var nameSentence = "Your full name is " + firstName + " " + lastName;
var ageSentence = "Your age is " + age;
console.log(nameSentence);
console.log(ageSentence);
document.querySelector('#name').innerHTML = nameSentence;
document.querySelector('#age').innerHTML = ageSentence;
