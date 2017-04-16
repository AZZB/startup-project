'use strict';

var webpack = require('webpack');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var baseConfig = require('./webpack.config.base');

// clone of  base config
var config = Object.assign({}, baseConfig);

config.entry.push("webpack-hot-middleware/client?http://localhost:3000");

config['devtool'] = 'source-map';


// css loaders
config['module'].rules[1].use = [
 {
   loader: 'style-loader',
 },
 {
   loader: 'css-loader',
   options: {
     localIdentName: '[path][name]__[local]--[hash:base64:5]',
     importLoaders: 1,
     sourceMap: true
   }
 },
 'postcss-loader',
 {
   loader: 'sass-loader',
   options: {
     sourceMap: true
   }
 }
];


// development plugins

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),

  new webpack.NoEmitOnErrorsPlugin(),

  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),

  //new BundleAnalyzerPlugin()
);



module.exports = config;
