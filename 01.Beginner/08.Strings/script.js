// 1.WAY OF CREATING

// A.single
let singleQuoteString = 'Hello, this is a string with single quotes.';

// B.double
let doubleQuoteString = "Hello, this is a string with double quotes.";

// C.template
let templateLiteralString = `Hello, this is a string with template literals.`;
// Template is you to write multiple lines or string



// 2.How to Length of a STR(strName.length)
let strLength = doubleQuoteString.length
console.log(strLength);


// 3.Accessing Characters
let firstCharacter = doubleQuoteString[0]
console.log(firstCharacter);


// 4.toLowerCase() and toUpperCase()
let toLowerCaseStr = doubleQuoteString.toLowerCase();
console.log(toLowerCaseStr);
let toUpperCaseStr = doubleQuoteString.toUpperCase();
console.log(toUpperCaseStr);


// 5.Indexof() finds the particular index of a str
let positionOfSubstring = doubleQuoteString.indexOf('double');
console.log(positionOfSubstring);


// 6.Slice(Start,End)
let sliceString = singleQuoteString.slice(7,11)
console.log(sliceString);


// 7.Replace(kisko,Kisse)
let replaceStr = singleQuoteString.replace('Hello','Welcome')
console.log(replaceStr);


// 8.Concat(Combine Strings)
let firstName = 'Mayank'
let lastName = 'Sharma'

let fullName = firstName.concat(' ',lastName)// ' ' or " " is use to add space between the combine str
console.log(fullName);

let fullName2 = firstName + ' ' + lastName
console.log(fullName2);


// 9.Template Literals
let name = 'Mayank';
let age = 19;
let greeting = `Hello, ${name}, yours age is ${age} years,Good Morning`
console.log(greeting);