'use strict';
/*
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 10;
//For input tag we use value not textContent
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 12;
console.log(document.querySelector('.guess').value);
*/

var number = Math.floor(Math.random() * 20) + 1;
var score = document.querySelector('.score').textContent;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess || guess < 0) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        number < guess ? '☝ too high...' : '👇 too low...';
      document.querySelector('.score').textContent = --score;
    } else {
      document.querySelector('.message').textContent = 'Game over!';
      document.querySelector('.score').textContent = 0;
    }
  } else {
    document.querySelector('.message').textContent = '👍 You got it!';
    document.querySelector('.number').textContent = number;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = 'green';
    if (document.querySelector('.highscore').textContent < score) {
      document.querySelector('.highscore').textContent = score;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  score = 20;
  number = Math.floor(Math.random() * 20) + 1;
});
