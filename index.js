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

  // Base case: if the word length is 0, return an empty array
  if (wordLength === 0) {
    return [];
  }

  // Iterate through the word and check if the left part is in the wordsSet and the right part can be composed of words from the wordsSet
  for (let i = 1; i <= wordLength; i++) {
    const left = word.slice(0, i);
    const right = word.slice(i);

    if (wordsSet.has(left)) {
      const remainingWords = isWordComposedOfWords(right, wordsSet);
      if (remainingWords !== false) {
        return [left, ...remainingWords];
      }
    }
  }

  return false;
}

function findComposedStringsFromPhoneNumber(phoneNumber, words) {
  const wordsSet = new Set(words);
  const letterCombinations = getLetterCombinations(phoneNumber);
  const composedStrings = [];

  for (const str of letterCombinations) {
    const wordsInStr = isWordComposedOfWords(str, wordsSet);
    if (wordsInStr !== false) {
      composedStrings.push(wordsInStr.join(' '));
    }
  }

  return composedStrings;
}

// Example usage
const phoneNumber = "2255632"; // Example: "CALLMEA"
const englishWords = ["CALL", "ME", "A", "BAT", "CAT", "BE", "CAKE", "OAT", "WORK", "BELL", "LORD"];

const composedStrings = findComposedStringsFromPhoneNumber(phoneNumber, englishWords);
console.log(composedStrings);
