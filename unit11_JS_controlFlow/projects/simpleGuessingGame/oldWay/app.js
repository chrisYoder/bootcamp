var answer = 7;
var guess = parseInt(prompt('Please guess a number'));

if (answer === guess) {
  alert('You guessed the correct answer of ' + guess);
}
else if( answer > guess ){
  alert('Your guess of ' + guess + ' was too small');
}
else {
  alert('Your guess of ' + guess + ' was too big');
}