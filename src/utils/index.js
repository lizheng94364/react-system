export { default as localMessage } from './localMessage';
export { _ } from './lodash'; //对象操作
export { default as isEmptys } from './isEmptys'; //是否为空值

// 数据格式化
export { default as emptyFormat } from './format/emptyFormat'; //格式化空值
export { default as fixedFormat } from './format/fixedFormat'; //保留化小数位
export { default as percentFormat } from './format/percentFormat'; //格式化百分比
export { default as thousandsFormat } from './format/thousandsFormat'; //格式化千分位并保留小数位
export { default as objectFormat } from './format/objectFormat'; //对象数据格式化
export { getStrLength, overflowNumber } from './string'; //字符串操作
export { default as getUrlParams } from './getUrlParams'; //获取URL参数
export { moment, formatPhone, trimGlobal, phoneDesensitization } from './format'; //格式化