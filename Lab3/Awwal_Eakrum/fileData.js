const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));

const providePath = path => {
  if (!path || typeof path === "undefined") {
    throw "You must provide a path";
  }
};

const checkString = value => {
  if (typeof value === "undefined") {
    throw "string is undefined";
  } else if (typeof value !== "string") {
    throw "This is not a valid string";
  } else if (!value) {
    throw "You must provide a string";
  }
};

const checkObject = value => {
  if (!value || typeof value === "undefined") {
    throw "No object was provided";
  } else if (typeof value !== "object") {
    throw "A valid object was not provided";
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
    const stringFile = await fs.readFileAsync(path, "utf8");
    const asObject = JSON.parse(stringFile);
    return asObject;
  } catch (error) {
    throw error;
  }
};
const saveStringToFile = async (path, text) => {
  providePath(path);
  checkString(text);
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
  checkObject(obj);

  try {
    const newJson = JSON.stringify(obj);
    await fs.writeFileAsync(path, newJson, "utf8");
    return true;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getFileAsString,
  getFileAsString,
  saveStringToFile,
  saveJSONToFile,
  checkString
};
