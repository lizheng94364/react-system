import axios from 'axios';
import { SYSTEM_API_BASE } from '@config/host';
import RootStores from '@config/stores';
import { throwErr } from './status';

// 创建新的axios实例
const service = axios.create({
  // 公共接口host
  baseURL: SYSTEM_API_BASE,
  // 超时时间 单位ms 
  timeout: 60 * 1000
});

// 请求拦截器
service.interceptors.request.use(
  async config => {
    const userToken = RootStores.getUserToken();
    const { authorization } = userToken === null ? {} : userToken;

    config.headers = {
      'Content-Type': 'application/json',
      Anthorization: authorization
    };
    //启用默认loading
    // let data = config.data || {};
    // const { params = {} } = config;
    // const dataLoading = config.data ? data.loading === 'false' || data.loading === false ? false : true : false,
    //   paramsLoading = params.loading === 'fasle' || !params.loading ? false : true;
    // if (dataLoading || paramsLoading) {
    //   console.log('loading请稍等');
    // }
    return config;
  },
  error => {
    console.log(error, 'request error');
    Promise.reject(error);
  }
);

let showAlert = false;
// 添加响应拦截器
service.interceptors.response.use(
  response => {
    console.log(response, '---response');
    const { removeUserToken } = RootStores;
    if (response.data.code == 200 || response.data.success) {
      // 服务器定义的响应code码为0时为请求成功
      return Promise.resolve(response.data); // Promise.resolve 正常响应
    } else if (response.data.code === 400) {
      return Promise.reject(response.data);  // 使用Promise.reject 抛出错误和异常
    } else if (response.data.code === 401) {
      if (!showAlert) {
        showAlert = true;
        alert(response.data.info)
        showAlert = false;
        removeUserToken();
      }
    } else {
      if (response.data.hasOwnProperty('info')) {
        console.log('info');
      } else if (response.data.hasOwnProperty('msg')) {
        console.log('msg');
      } else if (response.data.hasOwnProperty('message')) {
        console.log('message');
      }
      return Promise.reject(response.data)
    }
  },
  error => {
    let ajaxError = JSON.parse(JSON.stringify(error));
    let { message } = ajaxError;
    if (error && error.response) {
      let res = {};
      res.code = error.response.status;
      res.msg = throwErr(error.response.status, error.response); // throwErr 捕捉服务器http状态码
      return PromiseRejectionEvent.reject(res);
    } else if (message) {
      let messageInfo = '';
      if (message.indexOf('请求被取消') > -1) {
        return false;
      } else if (message.indexOf('Netword Error') > -1) {
        messageInfo = '网络异常';
      } else if (message.indexOf('timeout') > -1 || message.indexOf('请求超时。') > -1) {
        messageInfo = '请求超时';
      } else {
        messageInfo = '未知错误';
      }
      return Promise.reject({ info: messageInfo })
    }
    return Promise.reject(error);
  }
)

export const CancelToken = axios.CancelToken;
//导出
export default service;
