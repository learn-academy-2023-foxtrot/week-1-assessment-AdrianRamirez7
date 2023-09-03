// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"


// Pseudo code:
//Requires a function expression with a variable decleration.
//Input: two string placeholder variables.
//Process: function will use condition logic that returns a boolean statement.
//Output: the largest string out of the two. 


const compareString = (str1, str2) => {
    if(str1.length > str2.length) {
        return `${str1} is greater than ${str2}`;
    } else if (str1 < str2) {
        return `${str2} is greater than ${str1}.`;
    } else {
        return "Both strings have the equal amount of characters."
    }
};
console.log(compareString(fruit1, fruit2));
console.log(compareString(fruit3, fruit4));

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

// Pseudo code:
    //Requires function expression.
    //input: The function will take in number determined by the invocation argument.
    //process: Conditional logic will be used to determine the variables temperature
    //output: The level of temperature the argument equals too.

const determineTemp = (temp) => {
    if (temp < 212) {
        return `${temp} is below boiling point.`;
    } else if (temp > 212) {
        return `${temp} is above boiling point.`;
    } else {
        return `${temp} is at boiling point.`;
    }
}
console.log(determineTemp(temperature1));
console.log(determineTemp(temperature2));
console.log(determineTemp(temperature3));

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:

    //Requires the two variables to merge with each other.
    //input: two arrays can be assigned in seperate variable;
    //process: The two variables must merged and counted as a single array using a built-in method.
    //output: The result of the merging arrays will print the length of new array.


    const combineBothArr = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length;
    console.log(combineBothArr);


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "Foxtrot 2023"
// Expected output: "3202 tortxoF"

// Pseudo code:
//Requires built-in javascript methods encapsulated in a function.
//input: The variable can be passed into a placeholder
//process:The string must be converted into an array and then back to a string using series of built-in array methods.
//output: The string will be reversed.

const reverseStr = str => {
    let convertArr = str.split("").reverse().join(""); 
    return convertArr;
}
console.log(reverseStr(currentCohort));

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// Pseudo code:
//Required: array variable and two number variables.
//input: log array with a variable.
//process: array method will take a built-in method that that finds final duplicate of a number.
//output: The final index of the duplicated number.

console.log(numberOfConnections.lastIndexOf(givenValue1));
console.log(numberOfConnections.lastIndexOf(givenValue2));

