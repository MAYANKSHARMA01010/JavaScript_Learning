//!====Coding Challenge: Simple Calculator===

/*Create a calculator that performs basic operations like 
addition, subtraction, multiplication, and division. 
Use different types of functions, such as 
function expressions and arrow functions, for each operation */


//Solution

// 1.Addition
const add = (m,n) => {
    let result = m + n;
    return result;
}
// console.log(add(10,2));


// 2.Subtraction
const subtract = (m,n) => {
    let result = m - n;
    return result;
}
// console.log(subtract(20,10));


// Multiply
const multiply = (m, n) => {
    let results = m * n;
    return results;
}
// console.log(multiply(20, 10));


// Division
const division = (m, n) => {
    if (n === 0) {
        return "Division by zero is not allowed!";
    }
    let results = m / n;
    return results;
}
// console.log(division(20, 10));