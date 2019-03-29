'use strict';
const squareColor = [];
const squares = document.querySelectorAll('.square');



const paint = () => {
  squares.forEach( square => {
    square.style.background = colorGenerator(255);
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

// functionality to randomly pick a square from the display
// then add the rgb value to UI

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));


// console.log(squareColor);
// console.log(squareColor.length);
// console.log(getRandomInt(squareColor.length)) ;
  

window.onLoad(paint());  //I NEED TO FIGURE OUT HOW TO DO PAGE LOAD


// GAME LOGIC

//incorrect guess turns background of the square clicked to background color
//correct guess:
  // background of all squares
  // header to the correct color
  // .new.innerText = 'play again'.
  
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
        document.querySelector('.correct').style.opacity = '1';
        document.querySelector('.new').innerText = 'Play again?';
      }
      else{
        square.classList.add('fadeOut');
      }
    });
  });
};
  
gameLogic();

//button functionality
document.querySelector('.new').addEventListener('click', () => window.location.reload());
document.querySelector('.hard').addEventListener('click', () => {
  document.querySelector('.s4').classList.add('hardSetting');
  document.querySelector('.s5').classList.add('hardSetting');
  document.querySelector('.s6').classList.add('hardSetting');
});

//   squares.forEach( square => {
//     square.style.background = colorGenerator(150);
//     squareColor.push(square.style.background);
//   });
//   let color = squareColor[getRandomInt(squareColor.length)];
//   document.querySelector('#color').innerText = color;
  
//   gameLogic();
// });

// document.querySelector('.easy').addEventListener('click', () => {
//   document.querySelector('.s4').classList.remove('hardSetting');
//   document.querySelector('.s5').classList.remove('hardSetting');
//   document.querySelector('.s6').classList.remove('hardSetting');
// });
