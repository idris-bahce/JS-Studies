"use strict";
// dolpSCore1 = 44;
// dolpSCore2 = 23;
// dolpSCore3 = 71;

// coalaSCore1 = 65;
// coalaSCore2 = 54;
// coalaSCore3 = 49;

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const person1 = {
//     name: "Mark",
//     surName: "Miller",
//     weight: 78,
//     height: 1.69,
//     bmi: function () {
//         return this.weight / this.height ** 2;
//     }
// }

// const person2 = {
//     name: "John",
//     surName: "Smith",
//     weight: 92,
//     height: 1.95,
//     bmi: function () {
//         return this.weight / this.height ** 2;
//     }
// }
// console.log(person1.bmi(), person2.bmi())
// function print(person1, person2) {
//     var havyPerson;
//     var lightPerson;
//     if (person1.bmi() > person2.bmi()) {
//         havyPerson = person1;
//         lightPerson = person2;
//     } else {
//         havyPerson = person2;
//         lightPerson = person1;
//     }
//     return `${havyPerson.name}'s  BMI (${havyPerson.bmi()}) is higher than ${lightPerson.name}'s (${lightPerson.bmi()})`
// }
// console.log(print(person1, person2));

// var dice = 0;
// while (dice !== 6) {
//     dice = Math.floor(Math.random() * 6) + 1;
//     console.log(dice);
// }

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];


for (let i = 0; i < bills.length; i++) {
    let tipAmount = 0;
    if (50 <= bills[i] && bills[i] <= 300) {
        tipAmount = bills[i] * 0.15;
    } else {
        tipAmount = bills[i] * 0.2;
    }
    tips.push(tipAmount);
    totals.push(tipAmount + bills[i]);
}



function calcAverage(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}

console.log(`This is tips: ${tips},
This is totals: ${totals}
This is average of totals: ${calcAverage(totals)}`)