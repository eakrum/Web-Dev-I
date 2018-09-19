const { saveJSONToFile, checkString } = require("./fileData");

function sortObj(obj) {
  var ordered = {};
  Object.keys(obj)
    .sort()
    .forEach(function(key) {
      ordered[key] = obj[key];
    });
  return ordered;
}

const createMetrics = async text => {
  checkString(text);

  const resultsObj = {};
  const actualWords = [];

  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  const vowels = ["a", "e", "i", "o", "u"];
  const consonants = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  let letters = 0;
  let nonLetters = 0;
  let vowelsVal = 0;
  let consonantsVal = 0;
  let space = "";

  for (let i = 0; i <= text.length; i++) {
    const textLetter = text.charAt(i).toLowerCase();

    if (alphabet.includes(textLetter)) {
      letters = letters + 1;
      space += textLetter;
    } else {
      nonLetters = nonLetters + 1;
      actualWords.push(space);
      space = "";
    }

    for (let i = 0; i < vowels.length; i++) {
      if (textLetter === vowels[i]) {
        vowelsVal = vowelsVal + 1;
      }
    }

    for (let i = 0; i < consonants.length; i++) {
      if (textLetter === consonants[i]) {
        consonantsVal = consonantsVal + 1;
      }
    }
  }

  const wordsVal = actualWords.filter(value => {
    return value !== "";
  });

  const uniqueWords = wordsVal.filter((value, index) => {
    return index === wordsVal.indexOf(value);
  });

  const longWords = wordsVal.filter(value => {
    return value.length >= 6;
  });

  const averageWordLength = () => {
    let sum = 0;
    for (let i = 0; i < wordsVal.length; i++) {
      sum = sum + wordsVal[i].length;
    }

    return sum / wordsVal.length;
  };

  const wordsObject = () => {
    let nonAlphaDictionary = {};
    let dictionary;
    for (let i = 0; i < uniqueWords.length; i++) {
      let sum = 0;
      for (let j = 0; j < wordsVal.length; j++) {
        if (wordsVal[j] === uniqueWords[i]) {
          sum = sum + 1;
        }
      }
      nonAlphaDictionary[uniqueWords[i]] = sum;
      dictionary = sortObj(nonAlphaDictionary);
    }

    return dictionary;
  };

  resultsObj["totalLetters"] = letters;
  resultsObj["totalNonLetters"] = nonLetters - 1;
  resultsObj["totalWords"] = wordsVal.length;
  resultsObj["totalVowels"] = vowelsVal;
  resultsObj["totalConsonants"] = consonantsVal;
  resultsObj["uniqueWords"] = uniqueWords.length;
  resultsObj["longWords"] = longWords.length;
  resultsObj["averageWordLength"] = averageWordLength();
  resultsObj["wordOccurrences"] = wordsObject();

  return resultsObj;
};

module.exports = {
  createMetrics
};
