// file here is full of helper functions, main js is in html file.

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
  //helper function which removes entries from an array that contain words included in a word string with any non-alphanumeric separator
  const wordSet = new Set(words.split(/[^a-zA-Z]+/).map(word => word.trim()));

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

function stringToPhoneNumber(input) {
  // Phone number mapping
  const phoneMapping = {
    'a': '2', 'b': '2', 'c': '2',
    'd': '3', 'e': '3', 'f': '3',
    'g': '4', 'h': '4', 'i': '4',
    'j': '5', 'k': '5', 'l': '5',
    'm': '6', 'n': '6', 'o': '6',
    'p': '7', 'q': '7', 'r': '7', 's': '7',
    't': '8', 'u': '8', 'v': '8',
    'w': '9', 'x': '9', 'y': '9', 'z': '9'
  };

  // Remove non-alphanumeric characters
  const alphanumericOnly = input.replace(/[^a-z0-9]/gi, '');

  // Convert letters to their phone number equivalent
  const phoneNumber = alphanumericOnly.split('').map(char => {
    const lowerChar = char.toLowerCase();
    return phoneMapping[lowerChar] || char;
  }).join('');

  return phoneNumber;
}

//helper function returns number of possible variations per phone number digit
function getNumLetters(digit) {
  if (digit === '7' || digit === '9') {
    return 4;
  } else if (digit >= '2' && digit <= '9') {
    return 3;
  } else {
    return 1;
  }
}

//calculate number of permutations of phone words in a phone number
function phoneWordPermutations(phoneNumber) {
  let permutations = 1;
  for (let i = 0; i < phoneNumber.length; i++) {
    const numLetters = getNumLetters(phoneNumber[i]);
    if (numLetters > 0) {
      permutations *= numLetters;
    }
  }
  return permutations;
}


