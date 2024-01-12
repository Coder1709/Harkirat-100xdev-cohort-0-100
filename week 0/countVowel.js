/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {

    let vowels = ['a','e','i','o','u' , 'A' , 'E' , 'I' , 'O' , 'U'];
    let vowelsCount = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        vowelsCount++;
      }
    }
    return vowelsCount;
      // Your code here
  }
  
  module.exports = countVowels;