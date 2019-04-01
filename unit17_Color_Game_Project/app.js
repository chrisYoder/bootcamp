'use strict';
let squareColor = [];
let squares = document.querySelectorAll('.square');
let max = 255;

// functionality to randomly pick a square from the display
// then add the rgb value to UI
const paint = () => {
  squares.forEach( square => {
    square.style.background = colorGenerator(max);
    squareColor.push(square.style.background);
  });
  let color = squareColor[getRandomInt(squareColor.length)];
  document.querySelector('#color').innerText = color;
};

// functionality to set colors for squares
const colorGenerator = (max) => {
  let red = getRandomInt(max); 
  let blue = getRandomInt(max);
  let green = getRandomInt(max);
   
  return `rgb(${red}, ${blue}, ${green})`;
};

// random number generator for selecting colors and a box
const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

window.addEventListener('load', paint());  

// GAME LOGIC
const gameLogic = () => {
  squares.forEach(square => {
    square.addEventListener('click', () =>{
      let answer = document.querySelector("#color").innerText.toLowerCase();
      if(square.style.background === answer){
        squares.forEach(square => {
          square.classList.remove('fadeOut');
          square.style.background = answer;
        });
        document.querySelector('.container-header').style.background = answer;
        document.querySelector('.correct').innerText = 'Correct!';
        document.querySelector('.new').innerText = 'Play again?';
      }else{
        square.classList.add('fadeOut');
        document.querySelector('.correct').innerText = 'Try Again';
      }
    });
  });
};
  
gameLogic();

//button functionality
document.querySelector('.new').addEventListener('click', () => window.location.reload());

document.querySelector('.easy').addEventListener('click', () => {
  document.querySelector('.easy').classList.add('selected');
  document.querySelector('.hard').classList.remove('selected');
  document.querySelector('.s4').classList.remove('hardSetting');
  document.querySelector('.s5').classList.remove('hardSetting');
  document.querySelector('.s6').classList.remove('hardSetting');
  squareColor = [];
  max = 255;
  squares = document.querySelectorAll('.square');
  paint();
  gameLogic();
});

document.querySelector('.hard').addEventListener('click', () => {
  document.querySelector('.s4').classList.add('hardSetting');
  document.querySelector('.s5').classList.add('hardSetting');
  document.querySelector('.s6').classList.add('hardSetting');
  document.querySelector('.hard').classList.add('selected');
  document.querySelector('.easy').classList.remove('selected');
  squareColor = [];
  squares = document.querySelectorAll('.hardGame');
  max = 150;
  paint();
  gameLogic();
});


