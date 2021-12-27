/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
/*
真题描述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
示例 1:
输入: "aba"
输出: True
示例 2:
输入: "abca"
输出: True
解释: 你可以删除c字符。
注意: 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
 */

// 方法1
/*
拆成数组, for 循环 删除一项 判断是否为回文
*/
/*
var str = 'abca';
var arr = str.split('');

// arr.slice(0, 1);
arr.forEach((item, index) => {
  // 需要每次对原始数据进行操作
  let tmpArr = new Array(...arr);
  // 删除掉这个元素
  tmpArr.splice(index, 1);

  console.log(tmpArr);

  // reverse 需要放在等号右边
  if (tmpArr.join('') === tmpArr.reverse().join('')) {
    console.log(`删除的字符是 ${item},index 为 ${index}`);
  }
});
*/

// 方法2
/* 字符串题干中若有“回文”关键字，
那么做题时脑海中一定要冒出两个关键字——对称性 和 双指针。
这两个工具一起上，足以解决大部分的回文字符串衍生问题。
*/

// 问题 判断不严谨
/*
var str = 'abca';
var arr = str.split('');
let i = 0,
  j = arr.length - 1;
let result = [];

while (i < j) {
  // debugger;
  // 相同 是回文，继续
  if (arr[i] == arr[j]) {
    i++;
    j--;
  } else {
    // 不严谨，只删除后判断相同，后续没有继续判断
    // 不相同,
    if (arr[i + 1] == arr[j]) {
      console.log(`删除的字符是 ${arr[i]},index 为 ${i}`);
    }
    if (arr[i] == arr[j - 1]) {
      console.log(`删除的字符是 ${arr[j]},index 为 ${j}`);
    }
    break;
  }
}*/

// 方法3 正确性能高解法
// 双指针，跳过不对称的以后，剩余的都是对称的

const validPalindrome = function (s) {
  // 缓存字符串的长度
  const len = s.length;

  // i、j分别为左右指针
  let i = 0,
    j = len - 1;

  // 当左右指针均满足对称时，一起向中间前进
  while (i < j && s[i] === s[j]) {
    i++;
    j--;
  }

  // 尝试判断跳过左指针元素后字符串是否回文
  if (isPalindrome(i + 1, j)) {
    return true;
  }
  // 尝试判断跳过右指针元素后字符串是否回文
  if (isPalindrome(i, j - 1)) {
    return true;
  }

  // 工具方法，用于判断字符串是否回文
  function isPalindrome(st, ed) {
    while (st < ed) {
      if (s[st] !== s[ed]) {
        return false;
      }
      st++;
      ed--;
    }
    return true;
  }

  // 默认返回 false
  return false;
};
