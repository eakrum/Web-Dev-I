const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));

const providePath = path => {
  if (!path || typeof path === "undefined") {
    throw "You must provide a path";
  }
};

const getFileAsString = async path => {
  providePath(path);
  try {
    const fileString = await fs.readFileAsync(path, "utf8");
    return fileString;
  } catch (error) {
    throw ("Something went wrong: ", error);
  }
};

const getFileAsJSON = async path => {
  providePath(path);

  try {
    const stringFile = await fs.readFileAsync(path, "utf-8");
    const asObject = JSON.parse(stringFile);
    return asObject;
  } catch (error) {
    throw error;
  }
};
const saveStringToFile = async (path, text) => {
  providePath(path);
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
  providePath(path);
  if (!obj || typeof obj === "undefined") {
    throw "No object was provided";
  }

  if (typeof obj !== "object") {
    throw "A valid object was not provided";
  }

  try {
    const textConverted = JSON.stringify(obj);
    await fs.writeFileAsync(path, textConverted, "utf-8");
    return true;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getFileAsString,
  getFileAsString,
  saveStringToFile,
  saveJSONToFile
};
