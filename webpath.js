const path = require("path");

const sourceFolder = "src/";
const sourcePath = path.resolve(__dirname, sourceFolder);

const buildFolder = "dist/";
const buildPath = path.resolve(__dirname, buildFolder);

module.exports = { sourcePath, buildPath };
