const path = require('path')

module.exports = {
  entry: "./js/main.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: "babel-loader",
        options: {
          presets: ["es2015"]
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  }
}
