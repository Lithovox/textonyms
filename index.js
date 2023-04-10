function getLetterCombinations(digits) {
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
  
    for (const digit of digits) {
      const letters = digitToLetters[digit];
      const newResult = [];
  
      for (const prev of result) {
        for (const letter of letters) {
          newResult.push(prev + letter);
        }
      }
  
      result = newResult;
    }
  
    return result;
  }
  
  function isWordComposedOfWords(word, wordsSet) {
    const wordLength = word.length;
  
    if (wordLength === 0) {
      return true;
    }
  
    for (let i = 1; i <= wordLength; i++) {
      const left = word.slice(0, i);
      const right = word.slice(i);
  
      if (wordsSet.has(left) && isWordComposedOfWords(right, wordsSet)) {
        return true;
      }
    }
  
    return false;
  }
  
  function findComposedStringsFromPhoneNumber(phoneNumber, words) {
    const wordsSet = new Set(words);
    const letterCombinations = getLetterCombinations(phoneNumber);
    const composedStrings = [];
  
    for (const str of letterCombinations) {
      if (isWordComposedOfWords(str, wordsSet)) {
        composedStrings.push(str);
      }
    }
  
    return composedStrings;
  }
  
  // Example usage
  const phoneNumber = "2255632"; // Example: "CALLMEA"
  const englishWords = ["CALL", "ME", "A", "BAT", "CAT", "BE", "CAKE", "OAT", "WORK", "BELL", "LORD"];
  
  const composedStrings = findComposedStringsFromPhoneNumber(phoneNumber, englishWords);
  console.log(composedStrings);
  