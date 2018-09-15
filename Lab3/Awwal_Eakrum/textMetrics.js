const { saveJSONToFile } = require("./fileData");
const errorChecking = value => {
  if (typeof value === "undefined") {
    throw "string is undefined";
  } else if (typeof value !== "string") {
    throw "This is not a valid string";
  }
};

const createMetrics = async text => {
  errorChecking(text); //error checking before we continue with rest of code

  const objectMetrics = {}; //total object we are returning
  const words = [];

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
  let vowelsNumber = 0;
  let consenentsNumber = 0;
  let wordString = "";

  for (let i = 0; i <= text.length; i++) {
    const textLetter = text.charAt(i).toLowerCase();

    if (alphabet.includes(textLetter)) {
      //sees if its a letter
      letters = letters + 1;
      wordString += textLetter; //concatinates the string with the current letter
    } else {
      nonLetters = nonLetters + 1; //if its not a letter it adds to non letter
      words.push(wordString); //pushes the real word to the array because it found a non letter
      wordString = ""; //after pushing the real word, it resets the string to find next letter
    }

    vowels.forEach(value => {
      // loops through vowels and adds 1 if its a value
      if (textLetter === value) {
        vowelsNumber = vowelsNumber + 1;
      }
    });

    consonants.forEach(value => {
      // loops through constents and if its a consonant adds 1
      if (textLetter === value) {
        consenentsNumber = consenentsNumber + 1;
      }
    });
  }

  const totalWords = words.filter(value => {
    //filters the words array for just words
    return value !== "";
  });

  const uniqueWords = totalWords.filter((value, index) => {
    return index === totalWords.indexOf(value); //this checks the new filtered totalwords for the correct index of each word, if duplicate, it doesnt find it
  });

  const longWords = totalWords.filter(value => {
    return value.length >= 6;
  });

  const averageWordLength = () => {
    //function that takes all the total words, and just counts the value of each one and gets average length
    let sum = 0;
    totalWords.forEach(value => {
      sum = sum + value.length;
    });

    return sum / totalWords.length;
  };

  const wordsObject = () => {
    const placerObject = {}; //dictionary we are using to store
    uniqueWords.forEach(uniqueValue => {
      let sum = 0; //this will go through each unique value and compare to every word possible and add if duplicate found
      totalWords.forEach(totalValue => {
        if (totalValue === uniqueValue) {
          sum = sum + 1;
        }
      });
      placerObject[uniqueValue] = sum;
    });

    return placerObject;
  };

  objectMetrics["totalLetters"] = letters; //adding all the object values to be exported
  objectMetrics["totalNonLetters"] = nonLetters - 1;
  objectMetrics["totalVowels"] = vowelsNumber;
  objectMetrics["totalConsonants"] = consenentsNumber;
  objectMetrics["totalWords"] = totalWords.length;
  objectMetrics["uniqueWords"] = uniqueWords.length;
  objectMetrics["longWords"] = longWords.length;
  objectMetrics["averageWordLength"] = averageWordLength();
  objectMetrics["wordOccurrences"] = wordsObject();

  saveJSONToFile(`./test.result.json`, objectMetrics);

  return objectMetrics;
};

createMetrics("./chapter1.txt"); //createMetrics("\nI! saw Susie 17384 sitting $$in a shoe shine \n \n \n \nshop. Where she\t sits she shines, 1and where she\t shines 456she sits&^&%$#\n.");

module.exports = {
  createMetrics
};
