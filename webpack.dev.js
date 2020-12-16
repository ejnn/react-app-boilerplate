const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const { buildPath } = require("./webpath.js");

module.exports = merge(common, {
  mode: "development",
  entry: ["react-hot-loader/patch", "./src/index.js"],

  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },

  devtool: "inline-source-map",
  devServer: {
    contentBase: buildPath,
    port: 9000,
    hot: true,
    open: true,
  },
});
