const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));

const getFileAsString = async path => {
  if (!path) {
    throw "You must provide a path";
  }
  try {
    const fileString = await fs.readFileAsync(path, "utf8");
    return fileString;
  } catch (error) {
    throw ("there was an error: ", error);
  }
};

const getFileAsJSON = async path => {
  if (!path) {
    throw "You must provide a path";
  }

  try {
    const stringFile = await fs.readFileAsync(path, "utf-8");
    const asObject = JSON.parse(stringFile);
    return asObject;
  } catch (error) {
    throw error;
  }
};
const saveStringToFile = async (path, text) => {
  if (!path) throw "You must provide a path";
  if (!text) throw "You must provide a text to insert";
  if (typeof text !== "string") throw "You must provide a valid string";
  let data = new Uint8Array(Buffer.from(text));
  try {
    writtenFile = await fs.writeFileAsync(path, text);

    return writtenFile;
  } catch (error) {
    throw ("Something went wrong: ", error);
  }
};

async function saveJSONToFile(path, obj) {
  if (!path || typeof path === "undefined") {
    throw "You must provide a path";
  }
  if (!obj || typeof obj === "undefined") {
    throw "You must provide an object";
  }

  if (typeof obj !== "object") {
    throw "You must provide a valid object";
  }

  try {
    const textConverted = JSON.stringify(obj);
    await fs.writeFileAsync(path, textConverted, "utf-8");
    return console.log("true");
  } catch (error) {
    throw error;
  }
}

const main = async () => {
  const reader = await getFileAsString("test.txt").catch(err =>
    console.log(err)
  );
  const obj = await getFileAsJSON("package.json");
  const writer = await saveStringToFile("./message.txt", "test").catch(err =>
    console.log(err)
  );
};


module.exports = {
  getFileAsString,
  getFileAsString,
  saveStringToFile,
  saveJSONToFile,
  
}
