// output.pathに指定するパスがOSによって異なることを
// 防ぐためにpathモジュールを読み込んでおく
const webpack = require("webpack");
const path = require("path");
const dotenv = require("dotenv");
const env = dotenv.config().parsed;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // モードの設定（モードを指定しないとwebpack実行時に警告が出る）
  mode: "development",
  // エントリーポイントの設定
  entry: { index: path.resolve(__dirname, "./src/index.jsx") },
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: "[name].js",
    // 出力先のパス（絶対パスを指定しないとエラーが出るので注意）
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.jpeg|png$/,
        exclude: /node_modules/,
        use: ["url-loader", "file-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
      extensions: ['.js', '.jsx']
    },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(env),
    }),
    new HtmlWebpackPlugin({
      chunks: ["index"],
      template: path.resolve(__dirname, "./public/index.html"),
      filename: "index.html",
    }),
  ],
};
