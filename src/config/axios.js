/*
 * @Descripttion: 
 * @Author: 李征
 * @Date: 2020-10-23 13:54:06
 * @LastEditors: 李征
 * @LastEditTime: 2020-10-23 14:10:54
 * @FilePath: /react-project/src/config/axios.js
 */
import axios from 'axios';
import qs from 'qs';

axios.defaults.baseURL = process.env.BASE_API;
axios.defaults.timeout = 5 * 20 * 1000;
axios.defaults.withCredentials = true;

// request拦截器
axios.interceptors.request.use(
  config => {

    return config;
  },
  error => {
    console.log(error);
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// response 拦截器
axios.interceptors.response.use(
  res => {
    console.log(res.data.code);
    return res;
  },
  error => {
    console.log(error);
    // 对请求错误做些什么
    return Promise.reject(error);
  }
)

export default axios;