/*
 * @Descripttion: 
 * @Author: 李征
 * @Date: 2020-10-22 14:42:41
 * @LastEditors: 李征
 * @LastEditTime: 2020-10-22 14:42:56
 * @FilePath: /react-project/config/dev.env.js
 */
'use strict'
const { merge } = require('webpack-merge');
const prodEnv = require('./prod.env');


module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // 开发环境地址
  BASE_API: '"http://development.com"'
})