import http from '../utils/http';

export function loginData(params) {
  return http.get('/api/list', params);
}