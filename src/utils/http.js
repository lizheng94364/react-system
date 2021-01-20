import request, { CancelToken } from './request';

let cancelAxios;
const http = {

  /**
   * method: 请求
   * @param url 请求地址
   * @param params
   */

  get(url, params) {
    const config = {
      method: 'get',
      url,
      cancelToken: new CancelToken(function executor(c) {
        // executor 函数接收一个 cancel 函数作为参数
        cancelAxios = c;
      }),
    };
    if (params) {
      config.params = params;
    }
    return request(config);
  },
  post(url, params) {
    const config = {
      method: 'post',
      url,
      cancelToken: new CancelToken(function executor(c) {
        // executor 函数接收一个 cancel 函数作为参数
        cancelAxios = c;
      }),
    };
    if (params) {
      config.data = params
    }
    return request(config);
  }
}
export const cancel = () => {
  cancelAxios && cancelAxios('请求被取消！');
};

// 导出
export default http;