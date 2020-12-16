const path = require("path");
const { sourcePath, buildPath } = require("./webpath.js");

module.exports = {
  entry: path.resolve(sourcePath, "index.js"),
  output: {
    filename: "bundle.js",
    path: buildPath,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: sourcePath,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
          },
        },
      },
      {
        test: /(.*~$|^#.*#$)/,
        exclude: /node_modules/,
        include: sourcePath,
        use: {
          loader: "ignore-loader",
        },
      },
      {
        test: /.(png|svg|jpg|jpeg|gif)$/,
        exclude: /node_modules/,
        include: sourcePath,
        type: "asset/resource",
      },
    ],
  },
};
