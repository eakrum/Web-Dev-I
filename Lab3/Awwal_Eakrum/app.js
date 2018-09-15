var {
  getFileAsString,
  getFileAsString,
  saveStringToFile,
  saveJSONToFile
} = require("./fileData");
var { createMetrics } = require("./textMetrics");

var fs = require("fs");
var path = require("path");

const chapter1 = "./chapter1.txt";
const chapter2 = "./chapter2.txt";
const chapter3 = "./chapter3.txt";

async function main(file) {
  // Check if the file exists in the current directory.
  fs.access("test.result.json", fs.constants.F_OK, async err => {
    if (!err === false) {
      console.log("doesnt exist");
      let string = await getFileAsString(file);
      let obj = await createMetrics(string);
      let saveJSON = await saveJSONToFile("./test1.result.json", obj);
    } else {
      console.log("exists");
      
    }
  });
}

main(chapter1);
