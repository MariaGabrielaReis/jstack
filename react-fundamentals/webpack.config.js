const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // path to root
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    // path to generate build
    path: path.resolve(__dirname, "build"),
    // random name because of browser cache
    filename: "bundle[hash].js",
  },
  plugins: [
    // lib to handle random build name
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    // lib to clean older builds files
    new CleanWebpackPlugin(),
  ],
};
