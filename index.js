// Function to add two numbers
const add = (a, b) => a + b;

// Function to subtract two numbers
const subtract = (a, b) => a - b;

// Function to multiply two numbers
const multiply = (a, b) => a * b;

// Function to divide two numbers
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero!");

// Function to check if a number is positive
const isPositive = num => num > 0;

// Function to check if a number is negative
const isNegative = num => num < 0;

// Function to concatenate a word to a string
const addWord = (str, word) => `${str} ${word}`;

// Example usage:
console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6
console.log(multiply(3, 7)); // Output: 21
console.log(divide(20, 5)); // Output: 4
console.log(isPositive(10)); // Output: true
console.log(isNegative(-7)); // Output: true
console.log(addWord("Welcome", "to mercedes!")); // Output: Welcome to mercedes!

// Adding the 'mercedes' variable
const mercedes = "mercedes";

// Now you can use the 'mercedes' variable in your code
console.log(mercedes); // Output: mercedes
