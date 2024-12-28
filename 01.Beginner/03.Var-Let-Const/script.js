//!----- Using `var`----
var myAge = 30; //declared
console.log(myAge);
myAge = 20; //Re-assign
console.log(myAge);


//!-----Using `let`----
let myScore = 10;
console.log(myScore);
myScore = 50; //Re-assign
console.log(myScore);


//!-----Using `const`----
const myGrade = "A";
//Re-assign
// myGrade = "B";
// it will give error
// script.js:14 Uncaught TypeError: Assignment to constant variable.at script.js:14:9
console.log(myGrade);