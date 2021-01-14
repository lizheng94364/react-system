//截取数字 字符串
export function overflowNumber(data, number) {
  return data.replace(/\D/g, '').substring(0, number);
}
/**
 * @Description: 获取字符串实际长度
 * @param {str 字符串}
 * @return {length 长度}
 */
export function getStrLength(str = '') {
  var realLength = 0,
    len = str.length,
    charCode = -1;
  for (var i = 0; i < len; i++) {
    charCode = str.charCodeAt(i);
    if (charCode >= 0 && charCode <= 128) {
      realLength += 1;
    } else {
      realLength += 2;
    }
  }
  return realLength;
}