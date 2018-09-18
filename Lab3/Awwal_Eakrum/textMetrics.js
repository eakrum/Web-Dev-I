const { saveJSONToFile, checkString } = require("./fileData");

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
  let consenentsVal = 0;
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

    vowels.forEach(value => {
      if (textLetter === value) {
        vowelsVal = vowelsVal + 1;
      }
    });

    consonants.forEach(value => {
      if (textLetter === value) {
        consenentsVal = consenentsVal + 1;
      }
    });
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
    wordsVal.forEach(value => {
      sum = sum + value.length;
    });

    return sum / wordsVal.length;
  };

  const wordsObject = () => {
    const placerObject = {};
    uniqueWords.forEach(uniqueValue => {
      let sum = 0;
      wordsVal.forEach(totalValue => {
        if (totalValue === uniqueValue) {
          sum = sum + 1;
        }
      });
      placerObject[uniqueValue] = sum;
    });

    return placerObject;
  };

  resultsObj["totalLetters"] = letters;
  resultsObj["totalNonLetters"] = nonLetters - 1;
  resultsObj["totalVowels"] = vowelsVal;
  resultsObj["totalConsonants"] = consenentsVal;
  resultsObj["totalWords"] = wordsVal.length;
  resultsObj["uniqueWords"] = uniqueWords.length;
  resultsObj["longWords"] = longWords.length;
  resultsObj["averageWordLength"] = averageWordLength();
  resultsObj["wordOccurrences"] = wordsObject();

  return resultsObj;
};

module.exports = {
  createMetrics
};
