const { merge } = require("webpack-merge");
const webpackConfig = require("./webpack.config.js");
const writeFilePlugin = require("write-file-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

process.env.NODE_ENV = "production";

module.exports = merge(webpackConfig, {
  mode: "production",
  optimization: {
  minimize: true,
  minimizer: [
    new TerserPlugin({
      terserOptions: {
        compress: {
          drop_console: true, // console.log を出力するかどうか
        },
      },
    }),
  ],
},
  plugins: [new writeFilePlugin()],
});
