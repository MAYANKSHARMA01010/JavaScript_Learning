//!====Coding Challenge: String Formatter===

//Design a tool that takes user input for a string 
// and applies various transformations, like converting it to lowercase or uppercase, 
// counting characters, finding a word’s index, and concatenating it with another string.

//! SOLUTION
function formatString(str1, str2) {
    let uppercaseStr1 = str1.toUpperCase();
    let lowercaseStr2 = str2.toLowerCase();
    let totalCharacters = str1.length + str2.length;
    let combined = uppercaseStr1 + " " + lowercaseStr2;
    return {
        uppercaseStr1,
        lowercaseStr2,
        totalCharacters,
        combined,
    };
}
console.log(formatString("hello", "WORLD"));