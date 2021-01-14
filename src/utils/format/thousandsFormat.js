import isEmpty from '../isEmptys';

/**
 * 格式化添加千分位，并保留小数
 * @param  {String|Number} val 要格式化的值
 * @param  {Number} num  保留小数位
 * @return {String}   格式化后的值
 */
export default function thousandsFormat(val, num = 2) {
  return isEmpty(val) ? '-' : toThousands(val, num);
}

/**
 * 格式化金额千分位
 * number：要格式化的数字
 * decimals：保留几位小数
 * dec_point：小数点符号
 * thousands_sep：千分位符号
 */
function toThousands(number, decimals, dec_point, thousands_sep) {
  if (number === 'N\\A' || number === '-' || number === null) {
    return '-';
  }
  number = (number + '').replace(/[^0-9+-Ee.]/g, '');
  let n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep,
    dec = typeof dec_point === 'undefined' ? '.' : dec_point,
    s = '',
    toFixedFix = function (ns, precs) {
      let k = Math.pow(10, precs);
      return '' + Math.round(n * k) / k;
    };
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  let re = /(-?\d+)(\d{3})/;
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, '$1' + sep + '$2');
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}
