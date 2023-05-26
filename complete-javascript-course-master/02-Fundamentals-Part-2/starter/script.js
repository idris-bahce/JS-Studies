"use strict";
// dolpSCore1 = 44;
// dolpSCore2 = 23;
// dolpSCore3 = 71;

// coalaSCore1 = 65;
// coalaSCore2 = 54;
// coalaSCore3 = 49;

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;


// function checkWinner(avgColalas, avgDolphins) {
//     if (avgColalas > avgDolphins) {
//         console.log(`Winner is ${avgColalas}!`)
//     } else if (avgDolphins > avgColalas) {
//         console.log(`Winner is ${avgDolphins}!`)
//     } else {
//         console.log("It is a Draw!")
//     }
// }

const idris = {
    firstName: "idris",
    lastName: "bahce",
    birthYear: 1996,
    job: "sdet",
    caculateAge: function (birthYear) {
        return 2023 - birthYear;
    }
};

console.log(idris.caculateAge(idris.birthYear));