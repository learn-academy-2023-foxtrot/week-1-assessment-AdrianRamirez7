// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
 //console.log(colors.push("indigo"))


// a) Your answer: Since the push method adds new strings to the end of an array, the new result of the colors array will be: ["tangerine", "magenta", "lilac", "daffodil", "indigo"];
    
// b) Verify and explain: My initial answer was incorrect because when an array only logs a push method alongside its variable, the code will treat it like a .length method and only count the amount of elements
//in the array. To view the new element that was pushed to the array, you would would have to log the array variable individually.

// --------------------1) What will this log?

const cohort = "LEARN 2023"
//console.log(cohort.length)

// a) Your answer: The .length method that connects to the variable will log 10. The reason being is because this method counts every string character in standard numerical format. In addition, It also includes any spaceing inside of the string as an iteration count. 
// b) Verify and explain: My answer was correct because strings are known to count in standard numerical format. In addition, there is no bracket notation used on the string so there will be no zero index counting.

// --------------------2) What will this log?

const greeting = "Hello World!"
//console.log(greeting[4])

// a) Your answer: The variable will log the string "o." The reason for this is because the variable is passed into the log method with bracket notation. With bracket notation, a string or array is expected to count in 
//zero based index format. In addition, the desired index that the bracket notation is referencing is the fourth character in the string which counts to the letter "o".
// b) Verify and explain:

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
 console.log(languages[index])

// a) Your answer: The code will log "Ruby." The reason is because arrays use zero based indexing in their itarations. In addition, variables can be passed into an arrays bracket notation 
//as long as the passed in variable holds a valid number data type. This can be shown as the variable "index" hold the value 1 which will count to the second element in the array when passed into langauges bracket.
// b) Verify and explain: My answer was correct because the index variable holds a valid number data type that can be applied to languages array count.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: I believe the output will capitalize each array element since the .toUpperCase() method is an array and string built-in method.
// b) Verify and explain: My answer was incorrect because the .toUpperCase() method only works on string variables. However, if we
//wanted this method to work on an array we would have to use a built-in high order method known as "map" to return those elements capitalized.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
 //console.log(typeof dataTypes.length)

// a) Your answer: This variable will log "Number" because .length properties log integers. In addition, the typeof operator that determines what data type name is stored will read the integer count from .length 
//method and determine it is a number. 
// b) Verify and explain: My answer was correct because .length instantly returns a number data type and this is read by the typeof operator as a number.
