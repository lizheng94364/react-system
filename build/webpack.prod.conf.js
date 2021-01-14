/*
 * @Descripttion: 
 * @Author: 李征
 * @Date: 2020-10-22 10:55:31
 * @LastEditors: 李征
 * @LastEditTime: 2020-10-22 15:24:42
 * @FilePath: /react-project/build/webpack.prod.conf.js
 */
'use strict'
const path = require('path');
const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const prod = require('../config/prod.env');
const webpack = require('webpack');

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react',
      template: './public/index.html',
      filename: './index.html',
      inject: true,
      hash: false,
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': prod
    })
  ]
})