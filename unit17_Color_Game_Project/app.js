'use strict';

let squares = document.querySelectorAll('.square');

squares.forEach( square => {
  square.style.background = colorGenerator();
});


// Random color generation
function colorGenerator(){
  let red = getRandomInt(); 
  let blue = getRandomInt();
  let green = getRandomInt();
   
  return `rgb(${red}, ${blue}, ${green})`;
}


function getRandomInt(){
  let max = 255;
  return Math.floor(Math.random() * Math.floor(max));
}

// I need to pick a random square to get the correct answer
const correctColor = () => Math.floor(Math.random() * Math.floor(squares.length));
const colorToGuess = () => {
  let colorField = document.querySelector('#color');
  let color = document.getElementById(correctColor());
  let background = color.getAttribute('style')
  
  // background returns a string need to isolate the rgb part and then plug it into the html
  
}
console.log(correctColor());