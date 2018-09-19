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

    for (let i = 0; i < vowels.length; i++) {
      if (textLetter === vowels[i]) {
        vowelsVal = vowelsVal + 1;
      }
    }

    for (let i = 0; i < consonants.length; i++) {
      if (textLetter === consonants[i]) {
        consenentsVal = consenentsVal + 1;
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
    const theObject = {};
    //test this
    for (let i = 0; i < uniqueWords.length; i++) {
      let sum = 0;
      for (let j = 0; j < uniqueWords.length; j++) {
        if (totalValue === uniqueWords[i].length) {
          sum = sum + 1;
        }
      }
    }

    // uniqueWords.forEach(uniqueValue => {
    //   let sum = 0;
    //   wordsVal.forEach(totalValue => {
    //     if (totalValue === uniqueValue) {
    //       sum = sum + 1;
    //     }
    //   });
    //   theObject[uniqueValue] = sum;
    // });

    return theObject;
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

async function main() {
  const reader = await createMetrics("aeiou, b, c,d,e");
  console.log(reader);
}
main();

module.exports = {
  createMetrics
};
