import isEmptys from '../isEmptys';

/**
 * 格式化保留小数
 * @param  {String|Number} val 要格式化的值
 * @param  {Number} num  保留小数位
 * @return {String}   格式化后的值
 */
Number.prototype.toFixed = function (s) {
  const isMinus = String(this).indexOf('-') > -1 ? true : false; //是否为负数
  let num = Math.abs(this);
  let changenum = (
    parseInt(num * Math.pow(10, s) + 0.5, 10) / Math.pow(10, s)
  ).toString();
  let index = changenum.indexOf('.');
  if (index < 0 && s > 0) {
    changenum = changenum + '.';
    for (let i = 0; i < s; i++) {
      changenum = changenum + '0';
    }
  } else {
    index = changenum.length - index;
    for (let i = 0; i < s - index + 1; i++) {
      changenum = changenum + '0';
    }
  }
  if (String(this) === '-1.335') {
    console.log('999999999999', num, String(this), changenum);
  }
  return changenum.indexOf('NaN') === -1
    ? isMinus
      ? `-${changenum}`
      : changenum
    : NaN;
};
export default function fixedFormat(val, num = 2) {
  return isEmptys(val) ? '-' : Number(val).toFixed(num);
}
