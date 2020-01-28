const vm = require("vm");
const fetch = require("node-fetch");

module.exports = location => {
  if (!location) throw new Error("Argument \"Location\" is required");
  if (typeof location === "string") location = new URL(location);
  else if (typeof location === "object") {
    if (!(location instanceof URL)) {
      try {
        location = new URL(`https://https://raw.githubusercontent.com/${location.}`)
      }
      catch (err) {
        throw new Error("\"location\" does not have required properties");
      }
    }
  }
  else throw new Error("Expected type string or object for argument\"location\", but received type " + typeof location);
};