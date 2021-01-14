/*
 * @Descripttion:
 * @Author: 李征
 * @Date: 2020-10-22 10:55:22
 * @LastEditors: 李征
 * @LastEditTime: 2020-10-22 15:33:26
 * @FilePath: /react-project/build/webpack.dev.conf.js
 */
'use strict'
const path = require('path');
const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const env = require('../config/dev.env');


module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: '8082',
    hot: true,
    open: true,
    contentBase: path.join(__dirname, '../dist'),
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react',
      template: './public/index.html',
      filename: 'index.html',
      inject: true,
    }),
    new webpack.DefinePlugin({ // 允许在编译时配置全局变量
      'process.env': env
    })
  ]
})
