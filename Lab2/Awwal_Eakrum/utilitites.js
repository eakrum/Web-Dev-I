const first = { a: 2, b: 3 };
const second = { a: 2, b: 4 };
const third = { a: 2, b: 3 };

const deepEquality = (obj1, obj2) => {
  // create an array of property Names
  let obj1Props = Object.getOwnPropertyNames(obj1);
  let obj2Props = Object.getOwnPropertyNames(obj2);

  //if number of property names are different, not equal
  if (obj1Props.length != obj2Props.length) {
    return true;
  }

  for (let i = 0; i < obj1Props.length; i++) {
    let propName = obj1Props[i];

    //if values of obj1 property not equal to obj2 property, not equal
    if (obj1[propName] !== obj2[propName]) {
      return false;
    }
  }

  //if we get here then the objects are equal
  return true;
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
  let indices = [];
  for (let i = 0; i < str.length; i++) {
    indices.push(str[i]);
  }
};

countOfEachCharacterInString("cat");
