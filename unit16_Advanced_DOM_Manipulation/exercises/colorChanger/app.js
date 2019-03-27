// I NEED A WAY TO TRACK WHAT CLICK I AM ON. ODD FOR WHITE, EVEN FOR PURPLE
let clickCounter = 0;
const btn = document.querySelector('button');
const body = document.querySelector('body');
const counter = document.querySelector('#counter')

counter.innerText = clickCounter;
btn.addEventListener('click', () => {
  clickCounter++;
  (clickCounter % 4 === 0) ? body.style.background = 'blue' : (clickCounter % 3 === 0) ? body.style.background = 'red' : (clickCounter % 2 !== 0) ? body.style.background = 'white': body.style.background = 'purple'; 
  
  counter.innerText = clickCounter;
})