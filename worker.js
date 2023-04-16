// worker.js
self.onmessage = async (event) => {
    const { phoneNumber, words } = event.data;
    const composedStrings = await findComposedStringsFromPhoneNumber(phoneNumber, words, updateProgress);
    self.postMessage({ composedStrings });
};

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
  
    // Iterate through the word and recursively check if the left part is in the wordsSet and the right part can be composed of words from the wordsSet
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
  
  // function that takes in word list and input phone number to spit out array of word combinations
  // progressCallback powers progress bar
  async function findComposedStringsFromPhoneNumber(phoneNumber, words, progressCallback) {
    const wordsSet = new Set(words);
    const letterCombinations = getLetterCombinations(phoneNumber);
    const composedStrings = [];
  
    const totalCombinations = letterCombinations.length;
    
    let combinationsProcessed = 0;
  
    for (const str of letterCombinations) {
      const validCombinations = isWordComposedOfWords(str, wordsSet);
      //adds spaces between words in output
      for (const wordsInStr of validCombinations) {
        composedStrings.push(wordsInStr.join(' '));
      }
  
      combinationsProcessed++;
      const progress = (combinationsProcessed / totalCombinations);
      progressCallback(progress);
    }
  
    return composedStrings;
  }

  function updateProgress(progress) {
    self.postMessage({ progress });
  }