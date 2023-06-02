// 1. Write a function that takes an array of numbers and returns the largest number in the array.
function largestNumber(array) {
  return Math.max(...array);
}

console.log(largestNumber([0, 1, 2, 3, 6, 78, 451, 10, 152]));

// 2. Write a function that takes a string and returns the number of vowels in the string.
const vowels = ["a", "e", "i", "o", "u"];

function numberOfVowels(string) {
  let vowelCount = 0;
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === "a" ||
      string[i] === "e" ||
      string[i] === "i" ||
      string[i] === "o" ||
      string[i] === "u"
    ) {
      vowelCount++;
    }
  }
  console.log(vowelCount);
  return vowelCount;
}

numberOfVowels("Overpopulation");

function combineArrays(array1, array2) {
  const combinedArray = array1.concat(array2); 
  const uniqueArray = [...new Set(combinedArray)]; 
  return uniqueArray;
}

// 4. Write a function that takes an array of numbers and returns a new array with all the odd numbers in the original array.
function oddNumbers(array) {
    const oddArray = [];
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 1) {
        oddArray.push(array[i]);
      }
    }
  
    return oddArray;
  }

// 5. Write a function that takes an array of numbers and returns an array with all the even numbers in the original array.
function evenNumbers(array) {
    const evenArray = [];
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        evenArray.push(array[i]);
      }
    }
  
    return evenArray;
  }
  

// 6. Write a function that takes two strings and returns a string that contains the characters that appear in both strings.
function commonCharacters(string1, string2) {
    let commonChars = '';
  
    for (let i = 0; i < string1.length; i++) {
      const char = string1[i];
  
      if (string2.includes(char) && !commonChars.includes(char)) {
        commonChars += char;
      }
    }
  
    return commonChars;
  }
  

// 7. Write a function that takes an object and returns a new object with all the keys and values reversed (BONUS)
function reverseObject(object) {
    const reversedObject = {};
  
    for (let key in object) {
      const value = object[key];
      reversedObject[value] = key;
    }
  
    return reversedObject;
  }
  
/* Bonuses */

// Palindrome checker: Write a program that takes in a string and returns true if the string is a palindrome (reads the same forwards and backwards).
function palindrome(string) {}
//Word count: Write a program that takes in a string and returns the number of words in the string.
function wordCount(string) {}
// Character count: Write a program that takes in a string and returns the frequency count of each character in the string.
function characterCount(string) {}
// Reverse string: Write a program that takes in a string and returns the string reversed.
function reverseString(string) {}
// Replace vowels: Write a program that takes in a string and replaces all vowels with a specified character.
function replaceVowels(string, character) {}
// Longest word: Write a program that takes in a string and returns the longest word in the string.
function longestWord(string) {}
// Text analyzer: Write a program that takes in a string and returns the number of characters, words, and sentences in the string.
function textAnalyzer(string) {}
// Letter change: Write a program that takes in a string and changes each letter to the next letter in the alphabet.
function letterChange(string) {}
