'use strict';
//a place to keep score
//The play to limit
//an input???
//buttons for player one, player two and reset
const p1ScoreArea = document.querySelector('#p1Score');
const p2ScoreArea = document.querySelector('#p2Score');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const changeScoreLimit = document.querySelector('input');

let p1Score = 0;
let p2Score = 0;
let maxScore = document.querySelector('#playTo');

//Player event listeners
p1.addEventListener('click', () => {
    p1ScoreArea.innerHTML = ++p1Score;
    checkScore();
});



p2.addEventListener('click', () => {
  p2ScoreArea.innerText = ++p2Score;
  checkScore();
});

//reset control
const reset = document.querySelector('#reset').addEventListener('click', () => {
  p1Score = 0;
  p2Score = 0;
  p1ScoreArea.innerText = 0;
  p2ScoreArea.innerText = 0;
  p1.disabled = false;
  p2.disabled = false;
  p1ScoreArea.style.color = 'black';
  p2ScoreArea.style.color = 'black';
  changeScoreLimit.value = '';
  maxScore.innerHTML = 5;
});

//score
const checkScore = () => {
  if(p1Score === parseInt(maxScore.innerHTML)){
    p1ScoreArea.style.color = 'green';
    document.querySelector('#p1').disabled = true;
    document.querySelector('#p2').disabled = true;
  }
  
  if(p2Score === parseInt(maxScore.innerHTML)){
    p2ScoreArea.style.color = 'green';
    document.querySelector('#p1').disabled = true;
    document.querySelector('#p2').disabled = true;
  }
};

changeScoreLimit.addEventListener('change', () => {
  maxScore.innerText = changeScoreLimit.value;
})

