'use strict';

let squares = document.querySelectorAll('.square');

squares.forEach( square => {
  square.style.background = colorGenerator();
});



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

console.log(colorGenerator());