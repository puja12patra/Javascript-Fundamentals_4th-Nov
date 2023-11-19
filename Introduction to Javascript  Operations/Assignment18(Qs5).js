// Q5. Write a JavaScript program that calculates the simple interest using the formula Simple interest =
// (principal * rate * time) / 100.

function calculates_Simple_Interest(principal, rate, time)
{

  return (principal * rate * time) / 100;
}


let principal=2000;
let rate=5;
let time=9;

console.log(calculates_Simple_Interest(principal, rate, time));