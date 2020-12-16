const path = require("path");

const sourceFolder = "src/";
const sourcePath = path.resolve(__dirname, sourcesFolder);

const buildFolder = "dist/";
const buildPath = path.resolve(__dirname, buildFolder);

export { sourcePath, buildPath };
