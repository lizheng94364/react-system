import isEmptys from '../isEmptys';

// 格式化空值，为空值时返回'-'
export default function emptyFormat(val) {
  return isEmptys(val) ? '-' : val;
}