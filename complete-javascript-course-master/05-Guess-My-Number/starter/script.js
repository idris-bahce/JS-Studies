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
console.log(number);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (number < guess) {
    document.querySelector('.message').textContent = '☝ too high...';
    document.querySelector('.score').textContent = --score;
  } else if (number > guess) {
    document.querySelector('.message').textContent = '👇 too low...';
    document.querySelector('.score').textContent = --score;
  } else {
    document.querySelector('.message').textContent = '👍 You got it!';
    if (document.querySelector('.highscore').textContent < score) {
      document.querySelector('.highscore').textContent = score;
    }
  }
});
