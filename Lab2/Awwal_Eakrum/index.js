var {
  volumeOfRectangularPrism,
  surfaceAreaOfRectangularPrism,
  volumeOfSphere,
  surfaceAreaOfSphere
} = require("./geometry");

var {
  deepEquality,
  uniqueElements,
  countOfEachCharacterInString
} = require("./utilitites");

//cases for volume of a rectangular prism

try {
  volumeOfRectangularPrism(4, 5, "testErr");
} catch (e) {
  console.log("Something went wrong:", e);
}

try {
  volumeOfRectangularPrism(5, 1);
} catch (e) {
  console.log("Something went wrong:", e);
}

try {
  volumeOfRectangularPrism(4, true, 1);
} catch (e) {
  console.log("Something went wrong:", e);
}

try {
  volumeOfRectangularPrism(4, 4, function test() {});
} catch (e) {
  console.log("Something went wrong:", e);
}

try {
  volumeOfRectangularPrism(10, 20, 30);
} catch (e) {
  console.log("Something went wrong:", e);
}

//cases for surface area of rectangular prism

try {
  surfaceAreaOfRectangularPrism("tester", 5, 7);
} catch (e) {
  console.log("Something went wrong:", e);
}

try {
  surfaceAreaOfRectangularPrism(5, 1);
} catch (e) {
  console.log("Something went wrong:", e);
}

try {
  surfaceAreaOfRectangularPrism(4, true, 1);
} catch (e) {
  console.log("Something went wrong:", e);
}

try {
  surfaceAreaOfRectangularPrism(4, function test() {}, 1);
} catch (e) {
  console.log("Something went wrong:", e);
}

try {
  surfaceAreaOfRectangularPrism(10, 20, 30);
} catch (e) {
  console.log("Something went wrong:", e);
}

//5 cases for Volume of Sphere

try {
  volumeOfSphere("testing");
} catch (e) {
  console.log("Something went wrong:", e);
}
try {
  volumeOfSphere();
} catch (e) {
  console.log("Something went wrong:", e);
}

try {
  volumeOfSphere(true);
} catch (e) {
  console.log("Something went wrong:", e);
}

try {
  volumeOfSphere({});
} catch (e) {
  console.log("Something went wrong:", e);
}

try {
  volumeOfSphere(5);
} catch (e) {
  console.log("Something went wrong:", e);
}

//5 cases for Volume of Sphere

try {
  surfaceAreaOfSphere("testing");
} catch (e) {
  console.log("Something went wrong:", e);
}
try {
  surfaceAreaOfSphere();
} catch (e) {
  console.log("Something went wrong:", e);
}

try {
  surfaceAreaOfSphere(true);
} catch (e) {
  console.log("Something went wrong:", e);
}

try {
  surfaceAreaOfSphere({});
} catch (e) {
  console.log("Something went wrong:", e);
}

try {
  surfaceAreaOfSphere(5);
} catch (e) {
  console.log("Something went wrong:", e);
}

//test cases for deep equality

try {
  deepEquality("testing", { a: 1 });
} catch (e) {
  console.log("Something went wrong:", e);
}

try {
  deepEquality({ a: 1 }, true);
} catch (e) {
  console.log("Something went wrong:", e);
}

try {
  deepEquality({ a: 1 });
} catch (e) {
  console.log("Something went wrong:", e);
}

try {
  deepEquality({ a: 1 }, function test() {});
} catch (e) {
  console.log("Something went wrong:", e);
}

try {
  deepEquality({ a: 1 }, { a: 1 });
} catch (e) {
  console.log("Something went wrong:", e);
}

//5 test cases for unique list

try {
  uniqueElements(1);
} catch (e) {
  console.log("Something went wrong:", e);
}
try {
  uniqueElements();
} catch (e) {
  console.log("Something went wrong:", e);
}
try {
  uniqueElements("test");
} catch (e) {
  console.log("Something went wrong:", e);
}
try {
  uniqueElements({});
} catch (e) {
  console.log("Something went wrong:", e);
}
try {
  uniqueElements([1,1,3,4,4,5,6,7,7,3]);
} catch (e) {
  console.log("Something went wrong:", e);
}


//5 test cases for char map
try {
  countOfEachCharacterInString(1);
} catch (e) {
  console.log("Something went wrong:", e);
}

try {
  countOfEachCharacterInString({ a: 1 });
} catch (e) {
  console.log("Something went wrong:", e);
}

try {
  countOfEachCharacterInString();
} catch (e) {
  console.log("Something went wrong:", e);
}

try {
  countOfEachCharacterInString(function test() {});
} catch (e) {
  console.log("Something went wrong:", e);
}

try {
  countOfEachCharacterInString("Eakrum Awwal");
} catch (e) {
  console.log("Something went wrong:", e);
}
