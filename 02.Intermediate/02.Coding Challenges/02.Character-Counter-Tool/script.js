//!====Coding Challenge: Character Counter Tool===

// Build a small application where users can input text,
// and the tool displays the length of the text, 
// converts it to uppercase and lowercase, 
// and slices or replaces parts of the text.

//SOLUTION

// CountCharacter
const characterCount = (text) => {
    if (typeof text !== "string") {
        return "Invalid input: Text must be a string.";
    }
    let length = text.length;
    return length;
}
// const results = characterCount("Javascript");


// UpperCase
const txtToUpperCase = (text) => {
    if (typeof text !== "string") {
        return "Invalid input: Text must be a string.";
    }
    let uppercase = text.toUpperCase();
    return uppercase;
};
// console.log(txtToUpperCase("nodejs"));


// LowerCase
const txtToLowerCase = (text) => {
    if (typeof text !== "string") {
        return "Invalid input: Text must be a string.";
    }
    let lowercase = text.toLowerCase();
    return lowercase;
};
// console.log(txtToLowerCase("NODEJS"));


const slicedTxt = function (txt, start=0, end=txt.length) {
    if (typeof text !== "string") {
        return "Invalid input: Text must be a string.";
    }
    let sliced = txt.slice(start, end);
    return sliced;
};
// console.log(slicedTxt("NextJS",0,2));