/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
/*
真题描述：请你来实现一个 atoi 函数，使其能将字符串转换成整数。

首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。
当我们寻找到的第一个非空字符为正或者负号时，
则将该符号与之后面尽可能多的连续数字组合起来，作为该整数的正负号；
假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数。
该字符串除了有效的整数部分之后也可能会存在多余的字符，这些字符可以被忽略，它们对于函数不应该造成影响。
注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，
则你的函数不需要进行转换。
在任何情况下，若函数不能进行有效的转换时，请返回 0。

说明：

假设我们的环境只能存储 32 位大小的有符号整数，
那么其数值范围为 [−2^31,  2^31 − 1]。
如果数值超过这个范围，请返回  INT_MAX (2^31 − 1) 或 INT_MIN (−2^31) 。

示例 1:

输入: "42"
输出: 42

示例 2:

输入: " -42"
输出: -42
解释: 第一个非空白字符为 '-', 它是一个负号。
我们尽可能将负号与后面所有连续出现的数字组合起来，最后得到 -42 。
示例 3:

输入: "4193 with words"
输出: 4193
解释: 转换截止于数字 '3' ，因为它的下一个字符不为数字。

示例 4:

输入: "words and 987"
输出: 0
解释: 第一个非空字符是 'w', 但它不是数字或正、负号。 因此无法执行有效的转换。

示例 5:

输入: "-91283472332"
输出: -2147483648
解释: 数字 "-91283472332" 超过 32 位有符号整数范围。因此返回 INT_MIN(−2 ^ 31) 。
*/

/*
// 我的代码
不足： 
1.匹配头空格，可以使用 /s 正则
2. [+] 不转义也可以


function revert(str) {
  // 去掉两端空格
  str = str.trim();
  if (str == '') return 0;

  // var reg = /^[0-9+-][0-9];
  var reg = /^[+-]?[0-9]+/;
  var result = str.match(reg);
  if (!result) return 0;
  result = result[0] * 1;
  if (result < Math.pow(-2, 31)) return Math.pow(-2, 31);
  if (result > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
  return result;
}

console.log(revert('42'));
console.log(revert('+42'));
console.log(revert(' -42'));
console.log(revert('4193 with words'));
console.log(revert('words and 987'));
console.log(revert('-91283472332'));
*/

// 作者写法
// 入参是一个字符串
const myAtoi = function (str) {
  // 编写正则表达式
  const reg = /\s*([-\+]?[0-9]*).*/;
  // 得到捕获组
  const groups = str.match(reg);
  // 计算最大值
  const max = Math.pow(2, 31) - 1;
  // 计算最小值
  const min = -max - 1;
  // targetNum 用于存储转化出来的数字
  let targetNum = 0;
  // 如果匹配成功
  if (groups) {
    // 尝试转化捕获到的结构
    targetNum = +groups[1];
    // 注意，即便成功，也可能出现非数字的情况，比如单一个'+'
    if (isNaN(targetNum)) {
      // 不能进行有效的转换时，请返回 0
      targetNum = 0;
    }
  }
  // 卡口判断
  if (targetNum > max) {
    return max;
  } else if (targetNum < min) {
    return min;
  }
  // 返回转换结果
  return targetNum;
};

console.log(myAtoi('42'));
console.log(myAtoi('+42'));
console.log(myAtoi(' -42'));
console.log(myAtoi('4193 with words'));
console.log(myAtoi('words and 987'));
console.log(myAtoi('-91283472332'));
