'use strict';
var rollDiceButton = document.querySelector('.btn--roll');
var holdButton = document.querySelector('.btn--hold');
var newGameButton = document.querySelector('.btn--new');
var player1 = true;
var currentScore1 = 0;
var currentScore2 = 0;
var player1Score = 0;
var player2Score = 0;

function changePlayer() {
  if (player1) {
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
  } else {
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
  }
}

function disactivateButtons() {
  rollDiceButton.disabled = true;
  holdButton.disabled = true;
}

function activateButtons() {
  rollDiceButton.disabled = false;
  holdButton.disabled = false;
}

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
    changePlayer();
    setCurrentScore0();
    player1 = !player1;
  }
});

newGameButton.addEventListener('click', function () {
  startingFunction();
  setCurrentScore0();
  if (!player1) {
    changePlayer();
    document.querySelector('.player--0').classList.remove('player--winner');
  } else {
    document.querySelector('.player--1').classList.remove('player--winner');
  }
  player1 = true;
  activateButtons();
});

holdButton.addEventListener('click', function () {
  if (player1) {
    player1Score += currentScore1;
    document.querySelector('#score--0').textContent = player1Score;
    if (player1Score >= 100) {
      document.querySelector('.player--0').classList.add('player--winner');
      disactivateButtons();
    }
  } else {
    player2Score += currentScore2;
    document.querySelector('#score--1').textContent = player2Score;
    if (player2Score >= 100) {
      document.querySelector('.player--1').classList.add('player--winner');
      disactivateButtons();
    }
  }
  changePlayer();
  setCurrentScore0();
  player1 = !player1;
});
