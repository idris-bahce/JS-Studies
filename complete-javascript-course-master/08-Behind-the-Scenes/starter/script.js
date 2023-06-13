'use strict';

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    const output = `${firtName}, you are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  return age;
}

const firtName = 'idris';
calcAge(1996);
