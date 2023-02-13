// My Mnemonic
// Write a function myMnemonic that accepts up to four strings. myMnemonic should return a new string of the first characters for each string argument.

// Note that the user may not pass in all four strings!

// Example:
// myMnemonic('Must', 'Accept', 'Sugar', 'Happiness'); // => MASH
// myMnemonic('We', 'Eat', 'Eggs'); // => WEE

// YOUR CODE BELOW
const myMnemonic = function () {
 let result = '';
 for (let index = 0; index < arguments.length; index++) {
    const word = arguments[index]
    const letter = word[0]
 }
    }


// Do not change the code below this line
module.exports = { myMnemonic };
