// Function to generate all possible letter combinations of a given phone number
function getLetterCombinations(digits) {
  // Map of digits to their corresponding letters on a phone keypad
  const digitToLetters = {
    0: "0",
    1: "1",
    2: "ABC",
    3: "DEF",
    4: "GHI",
    5: "JKL",
    6: "MNO",
    7: "PQRS",
    8: "TUV",
    9: "WXYZ",
  };

  let result = [""];

  // Iterate through the input digits
  for (const digit of digits) {
    const letters = digitToLetters[digit];
    const newResult = [];

    // Generate all possible combinations with the previous results
    for (const prev of result) {
      for (const letter of letters) {
        newResult.push(prev + letter);
      }
    }

    result = newResult;
  }

  return result;
}

// Helper function to check if a given word can be composed entirely of words from the wordsSet
function isWordComposedOfWords(word, wordsSet) {
  const wordLength = word.length;

  // Base case: if the word length is 0, return an array containing an empty array
  if (wordLength === 0) {
    return [[]];
  }

  const validCombinations = [];

  // Iterate through the word and check if the left part is in the wordsSet and the right part can be composed of words from the wordsSet
  for (let i = 1; i <= wordLength; i++) {
    const left = word.slice(0, i);
    const right = word.slice(i);

    if (wordsSet.has(left)) {
      const remainingCombinations = isWordComposedOfWords(right, wordsSet);
      for (const remainingWords of remainingCombinations) {
        validCombinations.push([left, ...remainingWords]);
      }
    }
  }

  return validCombinations;
}

function findComposedStringsFromPhoneNumber(phoneNumber, words) {
  const wordsSet = new Set(words);
  const letterCombinations = getLetterCombinations(phoneNumber);
  const composedStrings = [];

  for (const str of letterCombinations) {
    const validCombinations = isWordComposedOfWords(str, wordsSet);
    for (const wordsInStr of validCombinations) {
      composedStrings.push(wordsInStr.join(' '));
    }
  }

  return composedStrings;
}

function sortStringsBySpaces(arr) {
  // Helper function to count spaces in a string
  function countSpaces(str) {
    return (str.match(/ /g) || []).length;
  }

  // Sort the input array based on the number of spaces in each string
  arr.sort(function(a, b) {
    return countSpaces(a) - countSpaces(b);
  });

  return arr;
}

function removeSentencesWithWords(sentences, words) {
  //helper function which removes entries from an array that contain words included in a comma-separated word string
  const wordSet = new Set(words.split(',').map(word => word.trim()));

  return sentences.filter(sentence => {
    const sentenceWords = new Set(sentence.split(' ').map(word => word.trim()));
    for (const word of wordSet) {
      if (sentenceWords.has(word)) {
        return false;
      }
    }
    return true;
  });
}

function wrapWordsInSpan(inputString) {
  //helper function which puts span tags around every word in a string
  if (typeof inputString !== 'string') {
    throw new Error('Input must be a string');
  }

  const words = inputString.split(' ');
  const wrappedWords = words.map(word => `<span>${word}</span>`);

  return wrappedWords.join(' ');
}

function capitalizeFirstLetterOfEachWord(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Example usage
/* const phoneNumber = "2255632"; // Example: "CALLMEA"

const composedStrings = findComposedStringsFromPhoneNumber(phoneNumber, englishWords);
console.log(composedStrings);
 */

