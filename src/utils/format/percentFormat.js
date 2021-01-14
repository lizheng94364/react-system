import isEmptys from '../isEmptys';

/**
 * 百分比格式化，默认val乘以100，再保留两位小数
 * @param  {String|Number} val 要格式化的值
 * @param  {Number} num  保留小数位
 * @param  {Boolean} isHundred 是否要乘以100再格式化
 * @return {String}   格式化后的值
 */
export default function percentFormat(val, num = 2, isHundred = true) {
  return !isEmptys(val)
    ? isHundred
      ? (Number(val) * 100).toFixed(num) + '%'
      : Number(val).toFixed(num) + '%'
    : '-';
}
