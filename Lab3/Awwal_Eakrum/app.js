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
  fs.stat("test1.result.json", async function(err) {
    if (!err) {
      console.log("results are already available");
    } else if (err.code === "ENOENT") {
      console.log("file or directory does not exist");
      let string = await getFileAsString(file);
      let obj = await createMetrics(string);
      let saveJSON = await saveJSONToFile("./test1.result.json", obj);
    }
  });
}

main(chapter1);
