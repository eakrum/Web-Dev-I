const checkObj = (val, name) => {
  switch (typeof val) {
    case "string":
      throw `${name || "provided argument"} is a string and not a object`;
    case "undefined":
      throw `${name || "provided argument"} is undefined and not a object`;
    case "boolean":
      throw `${name || "provided argument"} is a boolean and not a object`;
    case "symbol":
      throw `${name || "provided argument"} is a symbol and not a object`;
    case "function":
      throw `${name || "provided argument"} is a function and not a object`;
    case "number":
      throw `${name || "provided argument"} is a number and not a object`;
    default:
      "object";
  }
};

const checkString = val => {
  switch (typeof val) {
    case "object":
      throw "provided argument is an object and not a string";
    case "undefined":
      throw "provided argument is undefined and not a string";
    case "boolean":
      throw "provided argument is a boolean and not a string";
    case "symbol":
      throw "provided argument is a symbol and not a string";
    case "function":
      throw "provided argument is a function and not a string";
    case "number":
      throw "provided argument is a number and not a string";
    default:
      "string";
  }
};

const deepEquality = (obj1, obj2) => {
  checkObj(obj1);
  checkObj(obj2);
  // create an array of property Names
  let obj1Props = Object.getOwnPropertyNames(obj1);
  let obj2Props = Object.getOwnPropertyNames(obj2);

  //if number of property names are different, not equal
  if (obj1Props.length != obj2Props.length) {
    return console.log(true);
  }

  for (let i = 0; i < obj1Props.length; i++) {
    let propName = obj1Props[i];

    //if values of obj1 property not equal to obj2 property, not equal
    if (obj1[propName] !== obj2[propName]) {
      return console.log(false);
    }
  }

  //if we get here then the objects are equal
  return console.log(true);
};

const uniqueElements = arr => {
  if (Array.isArray(arr)) {
    let uniqueList = [];
    for (let i = 0, l = arr.length; i < l; i++)
      if (uniqueList.indexOf(arr[i]) === -1 && arr[i] !== "")
        uniqueList.push(arr[i]);
    return console.log(uniqueList);
  }
  return console.log("not an array");
};

const countOfEachCharacterInString = str => {
  checkString(str);
  let charMap = {};
  let char, i, count;

  for (i = 0; i < str.length; ++i) {
    char = str[i]; //get a character store as char

    //get the count value for the specific char, if there is one avail. If not then it'll be undefined
    count = charMap[char];

    //if we have dont have a count set the value of the key equal to 1
    if (typeof charMap[char] === "undefined") {
      charMap[char] = 1;

      //if there is a count, add 1 to the count
    } else {
      charMap[char] = count + 1;
    }
  }
  return console.log(charMap);
};

module.exports = {
  deepEquality,
  uniqueElements,
  countOfEachCharacterInString
};
