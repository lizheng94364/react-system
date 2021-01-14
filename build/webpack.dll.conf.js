/*
 * @Descripttion: 
 * @Author: 李征
 * @Date: 2020-10-22 14:31:30
 * @LastEditors: 李征
 * @LastEditTime: 2020-10-22 14:36:51
 * @FilePath: /react-project/build/webpack.dll.conf.js
 */
'use strict'
const path = require('path');
const webpack = require('webpack');
const vendors = [
  'react',
  'react-dom',
  'react-router-dom',
  'mobx',
  'mobx-react',
  'axios'
]

module.exports = {
  entry: {
    vendor: vendors
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, '../dist'),
    library: '[name]_library' // 防止全局变量冲突
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_library',
      path: path.join(__dirname, '../dist', '/[name]-manifest.json'),
      context: __dirname
    })
  ]
}