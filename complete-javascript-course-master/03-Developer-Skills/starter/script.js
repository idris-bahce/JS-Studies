// Remember, we're gonna use strict mode in all scripts now!
"use strict";

var array = [17, 21, 23];

function printForecast(arr) {
  for (let i = 0; i < array.length; i++) {
    var days = i === 0 ? "day" : "days";
    console.log(`...${arr[i]}℃ in ${i + 1} ${days}...`);
  }
}

printForecast(array);
