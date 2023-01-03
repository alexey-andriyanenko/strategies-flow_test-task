const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "..", "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    filename: "[contenthash].bundle.js",
    publicPath: "/",
  },
  devServer: {
    port: 9000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              module: true,
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Strategies Flow DEV",
      template: path.resolve(__dirname, "..", "public", "index.html")
    }),
  ]
};
