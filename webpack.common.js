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
        test: /(.*~$|^#.*#$)/,
        exclude: /node_modules/,
        include: sourcePath,
        use: ["ignore-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: sourcePath,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  corejs: {
                    version: "3",
                    proposals: true,
                  },
                },
              ],
              ["@babel/preset-react"],
            ],
            plugins: ["react-hot-loader/babel"],
          },
        },
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        include: sourcePath,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        exclude: /node_modules/,
        include: sourcePath,
        type: "asset/resource",
      },
    ],
  },
};
