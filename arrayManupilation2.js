// arrayManipulation.js

/**
 * Function to process an array of numbers
 * - Squares each even number
 * - Triples each odd number
 * @param {Array<number>} array - The array of numbers to be processed
 * @returns {Array<number>} - The new array with processed numbers
 */
function processArray(array) {
    return array.map(number => {
        if (number % 2 === 0) {
            return number * number; // Square the even number
        } else {
            return number * 3; // Triple the odd number
        }
    });
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];
const processedArray = processArray(myArray);
console.log('Original Array:', myArray);
console.log('Processed Array:', processedArray);

// Output should be:
// Original Array: [1, 2, 3, 4, 5]
// Processed Array: [3, 4, 9, 16, 15]
// arrayManipulation.js

/**
 * Function to process an array of numbers
 * - Squares each even number
 * - Triples each odd number
 * @param {Array<number>} array - The array of numbers to be processed
 * @returns {Array<number>} - The new array with processed numbers
 */
function processArray(array) {
    return array.map(number => {
        if (number % 2 === 0) {
            return number * number; // Square the even number
        } else {
            return number * 3; // Triple the odd number
        }
    });
}

/**
 * Function to format an array of strings based on an array of numbers
 * - Capitalize the entire string if the corresponding number is even
 * - Convert the string to lowercase if the corresponding number is odd
 * @param {Array<string>} stringArray - The array of strings to be formatted
 * @param {Array<number>} numberArray - The array of numbers processed by processArray
 * @returns {Array<string>} - The new array with formatted strings
 */
function formatArrayStrings(stringArray, numberArray) {
    if (stringArray.length !== numberArray.length) {
        throw new Error('The length of the string array and the number array must be the same.');
    }

    return stringArray.map((str, index) => {
        if (numberArray[index] % 2 === 0) {
            return str.toUpperCase(); // Capitalize the string if the number is even
        } else {
            return str.toLowerCase(); // Convert the string to lowercase if the number is odd
        }
    });
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];
const processedArray = processArray(myArray);
console.log('Original Array:', myArray);
console.log('Processed Array:', processedArray);

const stringArray = ['Hello', 'World', 'JavaScript', 'is', 'Awesome'];
const formattedArray = formatArrayStrings(stringArray, processedArray);
console.log('Original String Array:', stringArray);
console.log('Formatted String Array:', formattedArray);

// Output should be:
// Original Array: [1, 2, 3, 4, 5]
// Processed Array: [3, 4, 9, 16, 15]
// Original String Array: ['Hello', 'World', 'JavaScript', 'is', 'Awesome']
// Formatted String Array: ['hello', 'WORLD', 'javascript', 'IS', 'awesome']
