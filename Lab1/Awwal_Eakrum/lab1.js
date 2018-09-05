const questionOne = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let square = arr[i] * arr[i];
    sum = sum + square;
  }
  return sum;
};

const questionTwo = num => {
  let a = 0,
    b = 1,
    temp,
    i;

  for (let i = 2; i <= num; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
};

const questionThree = text => {
  let vowelsCount = 0;

  let string = text.toString();

  for (let i = 0; i <= string.length - 1; i++) {
    if (
      string.charAt(i) == "a" ||
      string.charAt(i) == "e" ||
      string.charAt(i) == "i" ||
      string.charAt(i) == "o" ||
      string.charAt(i) == "u"
    ) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
};

const questionFour = num => {
  if (num < 0) return NaN;
  let total = 1;
  for (i = num; i >= 1; i--) {
    total = total * i;
  }

  return total;
};

module.exports = {
  firstName: "Eakrum",
  lastName: "Awwal",
  studentId: "10393806",
  questionOne,
  questionTwo,
  questionThree,
  questionFour
};
