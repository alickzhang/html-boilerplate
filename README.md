# HTML Boilerplate

## Features

* Webpack
* ES6
* jQuery
* Autoprefixer
* Normalize CSS
* Bootstrap

## Start

``` bash

$ cd html-boilerplate && npm install
$ npm run dev

```

## Build Steps

### initialize project

``` bash

$ npm init -y
$ npm install --save-dev autoprefixer babel-core babel-loader babel-preset-es2015 css-loader jquery postcss-loader style-loader webpack webpack-dev-server
$ mkdir js
$ mkdir css

```

### create .editorconfig

```

root = true

[*]
charset = utf-8
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false

```

### create webpack.config.js

``` js

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

```

### create postcss.config.js

``` js

module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}

```

### create index.html

``` html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <script src="build/bundle.js"></script>
</body>
</html>

```

### edit package.json

``` json

"scripts": {
  "start": "webpack --watch",
  "build": "webpack",
  "dev": "webpack-dev-server --output-public-path=/build/"
}

```
