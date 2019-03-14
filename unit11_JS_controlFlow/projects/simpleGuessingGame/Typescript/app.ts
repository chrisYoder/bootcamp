const answer: number = 7;
let guess: number = parseInt(prompt('Please guess a number'));

if (answer === guess) {
  alert(`You guessed the correct answer of ${answer}`);
}
else if( answer > guess ){
  alert(`Sorry but your guess of ${guess} was too small`);
}
else {
  alert(`Sorry but your guess of ${guess} was too big`);
}