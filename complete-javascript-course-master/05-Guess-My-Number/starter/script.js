'use strict';

document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 10;
//For input tag we use value not textContent
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 12;
console.log(document.querySelector('.guess').value);
