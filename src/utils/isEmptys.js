// 判断值是否为空
import { isNumber } from 'lodash';

// 注意：'-'也当做空来处理
export default function isEmptys(val) {
  if (
    val === '' ||
    val === null ||
    val === undefined ||
    val === 'N\\A' ||
    val === '-' ||
    (isNumber(val) && isNaN(val))
  ) {
    return true;
  }
  return false;
}