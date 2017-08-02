# HTML Boilerplate

## Features

* Webpack
* ES6
* jQuery
* Autoprefixer
* Normalize CSS
* Bootstrap
* SCSS

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
const webpack = require('webpack')

module.exports = {
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery',
      jQuery:'jquery'
    })
  ]
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
