import lodash from 'lodash';
import emptyFormat from './emptyFormat';
import fixedFormat from './fixedFormat';
import percentFormat from './percentFormat';
import thousandsFormat from './thousandsFormat';

// 对象数据格式化
// 注意：未配置字段的值，会对进行为空格式化（为空值时返回'-'，不为空返回原始值）
export default function objectFormat(obj = {}, fieldConfig) {
  let newObj = {};
  const {
    fixed0 = [], //保留0位小数
    fixed2 = [], //保留2位小数
    fixed4 = [], //保留4位小数
    thousands0 = [], //添加千分位，并保留0位小数
    thousands2 = [], //添加千分位，并保留2位小数
    thousands4 = [], //添加千分位，并保留4位小数
    percent0 = [], //乘100后保留0位小数，并添加%
    percent2 = [], //乘100后保留2位小数，并添加%
    originPercent0 = [], //保留0位小数，并添加%
    originPercent2 = [], //保留0位小数，并添加%
  } = fieldConfig;
  let key;
  for (key in obj) {
    if (lodash.isObject(obj[key])) {
      // 值为对象时不进行格式化处理
      newObj[key] = lodash.cloneDeep(obj[key]);
    } else {
      if (fixed0.includes(key)) {
        newObj[key] = fixedFormat(obj[key], 0);
      } else if (fixed2.includes(key)) {
        newObj[key] = fixedFormat(obj[key], 2);
      } else if (fixed4.includes(key)) {
        newObj[key] = fixedFormat(obj[key], 4);
      } else if (thousands0.includes(key)) {
        newObj[key] = thousandsFormat(obj[key], 0);
      } else if (thousands2.includes(key)) {
        newObj[key] = thousandsFormat(obj[key], 2);
      } else if (thousands4.includes(key)) {
        newObj[key] = thousandsFormat(obj[key], 4);
      } else if (percent0.includes(key)) {
        newObj[key] = percentFormat(obj[key], 0);
      } else if (percent2.includes(key)) {
        newObj[key] = percentFormat(obj[key], 2);
      } else if (originPercent0.includes(key)) {
        newObj[key] = percentFormat(obj[key], 0, false);
      } else if (originPercent2.includes(key)) {
        newObj[key] = percentFormat(obj[key], 2, false);
      } else {
        newObj[key] = emptyFormat(obj[key]);
      }
    }
  }
  return newObj;
}
