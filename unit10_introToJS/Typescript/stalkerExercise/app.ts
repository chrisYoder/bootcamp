interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

let firstName = prompt("What is your first name?");
let lastName = prompt("What is your last name?");
let age = prompt('What is your age?');

let nameSentence: string = `Your full name is ${firstName} ${lastName}`;
let ageSentence: string = `Your age is ${age}`;

console.log(nameSentence);
console.log(ageSentence);

document.querySelector('#name').innerHTML = nameSentence;
document.querySelector('#age').innerHTML = ageSentence;