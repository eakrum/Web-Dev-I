const checkVal = (val, name) => {
  switch (typeof val) {
    case "string":
      throw `Got '${val}' for ${name} which is a string and not a number`;
    case "undefined":
      throw `${name} requires a number, got '${val}'`;
    case "boolean":
      throw `Got '${val}' for ${name} which is a boolean and not a number`;
    case "symbol":
      throw `Got '${val}' for ${name} which is a symbol and not a number`;
    case "function":
      throw `Got '${val}' for ${name} which is a function and not a number`;
    case "object":
      throw `Got '${val}' for ${name} which is an object and not a number`;
    default:
      "number";
  }
};

const checkSign = (val, name) => {
  switch (Math.sign(val)) {
    case -1:
      throw `Got ${val} for ${name} which is a negative number, please use positive numbers only.`;
    case 0:
      throw `Got ${val} for ${name}, please enter a non-zero number.`;
  }
};

const volumeOfRectangularPrism = (length, width, height) => {
  checkSign(length, "length");
  checkSign(width, "width");
  checkSign(height, "height");
  checkVal(length, "length");
  checkVal(width, "width");
  checkVal(height, "height");

  return console.log(`volume of prism is: ${length * width * height} \n \n `);
};

const surfaceAreaOfRectangularPrism = (length, width, height) => {
  checkSign(length, "length");
  checkSign(width, "width");
  checkSign(height, "height");
  checkVal(length, "length");
  checkVal(width, "width");
  checkVal(height, "height");

  return console.log(
    `Surface area of Rectangular Prism is:
    ${2 * (width * height + length * width + length * height)} \n\n `
  );
};

const volumeOfSphere = radius => {
  checkSign(radius, "radius");
  checkVal(radius, "radius");
  radiusCubed = radius * radius * radius;
  return console.log(
    `Volume of sphere is:
    ${(4 / 3) * Math.PI * radiusCubed} \n\n `
  );
};

const surfaceAreaOfSphere = radius => {
  checkSign(radius, "radius");
  checkVal(radius, "radius");
  radiusSquared = radius * radius;
  return console.log(
    `Surface area of sphere is: 
    ${4 * Math.PI * radiusSquared} \n\n`
  );
};

module.exports = {
  volumeOfRectangularPrism,
  surfaceAreaOfRectangularPrism,
  volumeOfSphere,
  surfaceAreaOfSphere
};
