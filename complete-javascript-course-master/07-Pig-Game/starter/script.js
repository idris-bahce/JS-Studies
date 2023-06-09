'use strict';
var rollDiceButton = document.querySelector('.btn--roll');
var holdButton = document.querySelector('.btn--hold');
var newGameButton = document.querySelector('.btn--new');
var player1 = true;
var currentScore1 = 0;
var currentScore2 = 0;
var player1Score = 0;
var player2Score = 0;
function setCurrentScore0() {
  currentScore1 = 0;
  currentScore2 = 0;
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
}
function startingFunction() {
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  document.querySelector('.dice').style.display = 'none';
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  player1Score = 0;
  player2Score = 0;
}
startingFunction();

rollDiceButton.addEventListener('click', function () {
  let randomDice = Math.floor(Math.random() * 6) + 1;
  document.querySelector('img').src = 'dice-' + randomDice + '.png';
  document.querySelector('.dice').removeAttribute('style');
  if (randomDice !== 1) {
    if (player1) {
      currentScore1 += randomDice;
      document.querySelector('#current--0').textContent = currentScore1;
    } else {
      currentScore2 += randomDice;
      document.querySelector('#current--1').textContent = currentScore2;
    }
  } else {
    setCurrentScore0();
    player1 = !player1;
  }
});
newGameButton.addEventListener('click', function () {
  startingFunction();
  setCurrentScore0();
  player1 = true;
});
holdButton.addEventListener('click', function () {
  if (player1) {
    player1Score += currentScore1;
    document.querySelector('#score--0').textContent = player1Score;
  } else {
    player2Score += currentScore2;
    document.querySelector('#score--1').textContent = player2Score;
  }
  setCurrentScore0();
  player1 = !player1;
});
