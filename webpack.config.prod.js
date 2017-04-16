'use strict';

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");

var baseConfig = require('./webpack.config.base');

// clone of  base config
var config = Object.assign({}, baseConfig);


//config['devtool'] = 'eval-source-map';

config['output'].filename = 'bundle.[hash:12].min.js';

// css loaders
config['module'].rules[1].use = ExtractTextPlugin.extract({
  use: [
    {
      loader: 'css-loader',
      options: {
        localIdentName: '[hash:base64:10]',
        importLoaders: 1,
      }
    },
    'postcss-loader',
    'sass-loader'
  ]
});


// production plugins
config.plugins.push(

  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),

  new ExtractTextPlugin('style-[contenthash:10].css'),

  new webpack.optimize.UglifyJsPlugin({
    compress: {
      sourcemap: true,
      warnings: false,
      screw_ie8: true,
      conditionals: true,
      unused: true,
      comparisons: true,
      sequences: true,
      dead_code: true,
      evaluate: true,
      if_return: true,
      join_vars: true,
    },
    output: {
      comments: false,
    },
    exclude: [/\.min\.js$/gi]
  }),

  new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),

  new webpack.NoEmitOnErrorsPlugin(),

  new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0
    })
);

module.exports = config;
