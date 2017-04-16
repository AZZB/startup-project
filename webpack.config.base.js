'use strict';

var path = require('path');
var WriteFilePlugin = require('write-file-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: [
    './src/index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(sass|scss|css)$/,
        use:{
          // it depends on mod development or production,
        },
        exclude: /node_modules/
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[hash:12].[ext]',
        },
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'url-loader',
        options: {
          name: 'fonts/[name].[ext]',
        }
      },
    ]
  },
  plugins: [
    new WriteFilePlugin(),
    new HtmlWebpackPlugin({template: './index.html'}),
  ]
};

module.exports = config;
