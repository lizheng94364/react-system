//手机号码格式化
export function formatPhone(data = '') {
  let text = data.replace(/\D/g, '').substring(0, 11);
  const valueLen = text.length;
  if (valueLen > 3 && valueLen < 8) {
    text = text.substr(0, 3) + ' ' + text.substr(3);
  } else if (valueLen >= 8) {
    text = text.substr(0, 3) + ' ' + text.substr(3, 4) + ' ' + text.substr(7);
  }
  return text;
}

//去空格
export function trimGlobal(data = '') {
  let text = data.replace(/\s/g, '');
  return text;
}

//手机号脱敏
export function phoneDesensitization(phone) {
  const reg = /(\d{3})(\d{4})(\d{4})/g;
  return phone.replace(reg, '$1****$3');
}
export { default as moment } from 'moment'; //日期格式化
