const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  optimization: {
    minimize: true,
  },
  entry: path.resolve(__dirname, "..", "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    filename: "[contenthash].bundle.js",
    publicPath: "/",
    clean: true,
  },
  devServer: {
    port: 9000,
    open: false,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".css"],
    modules: ["node_modules", "src"],
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
              modules: {
                localIdentName: "[name]__[local]",
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Strategies Flow DEV",
      template: path.resolve(__dirname, "..", "public", "index.html"),
    }),
  ],
};
