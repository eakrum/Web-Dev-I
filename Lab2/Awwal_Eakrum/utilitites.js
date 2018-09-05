const deepEquality = (obj1, obj2) => {
  // Create arrays of property names
  var obj1Props = Object.getOwnPropertyNames(obj1);
  var obj2Props = Object.getOwnPropertyNames(obj2);

  // If number of properties is different,
  // objects are not equivalent
  if (obj1Props.length != obj2Props.length) {
    return false;
  }

  for (var i = 0; i < obj1Props.length; i++) {
    var propName = obj1Props[i];

    // If values of same property are not equal,
    // objects are not equivalent
    if (obj1[propName] !== obj2[propName]) {
      return false;
    }
  }

  // If we made it this far, objects
  // are considered equivalent
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

const countOfEachCharacterInString = str => {};
