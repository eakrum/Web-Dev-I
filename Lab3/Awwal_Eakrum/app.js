var {
  getFileAsString,
  getFileAsString,
  saveStringToFile,
  saveJSONToFile
} = require("./fileData");
var { createMetrics } = require("./textMetrics");

var fs = require("fs");

const chapter1 = "./chapter1.txt";
const chapter2 = "./chapter2.txt";
const chapter3 = "./chapter3.txt";

function main(file) {
  const result = file
    .split("/")
    .pop()
    .split(".");
  const resultJson = result[0] + ".result.json";
  // Check if the file exists in the current directory.
  fs.access(resultJson, fs.constants.F_OK, async err => {
    if (!err === false) {
      console.log("Results file doesn't exist yet, processing requests...");
      let string = await getFileAsString(file).catch(err => {
        console.log("Something went wrong: ", err);
      });
      let obj = await createMetrics(string).catch(err => {
        console.log("Something went wrong: ", err);
      });
      let saveJSON = await saveJSONToFile(resultJson, obj).catch(err => {
        console.log("Something went wrong: ", err);
      });
      console.log("done");
    } else {
      console.log("Results file already exists, check directory");
    }
  });
}

main(chapter1);
