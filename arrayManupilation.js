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
