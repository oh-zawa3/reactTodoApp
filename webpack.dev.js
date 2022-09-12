const { merge } = require("webpack-merge");
const webpackConfig = require("./webpack.config.js");
const writeFilePlugin = require("write-file-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = merge(webpackConfig, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    port: 3000,
    historyApiFallback: true,
    open: true,
    host: "localhost",
    hot: true,
  },
  plugins: [new writeFilePlugin()],
});
