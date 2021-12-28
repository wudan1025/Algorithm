/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
/*
题目描述：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true

示例 2:

输入: "()[]{}"
输出: true

示例 3:

输入: "(]"
输出: false

示例 4:

输入: "([)]"
输出: false
示例 5:
输入: "{[]}"
输出: true
 */

/*
// 我的做法
// 设置新数组。判断当前出栈与下一个是否匹配
// 不匹配继续，匹配了一起出栈
function judge(str) {
  var arr = str.split('');
  console.log(arr);
  var tmp = [];
  var judgeMap = {
    '{': '}',
    '}': '{',
    '[': ']',
    ']': '[',
    '(': ')',
    ')': '(',
  };
  while (arr.length != 0) {
    // debugger;
    if (arr.length > 1) {
      var cur = arr.pop();
      // 跳过非空字符串
      while (cur == '') {
        cur = arr.pop();
      }
      tmp.push(cur);
    }

    // 当前出栈的是否 与最后一个匹配
    if (judgeMap[tmp[tmp.length - 1]] == arr[arr.length - 1]) {
      arr.pop();
      tmp.pop();
    } else if (arr.length == 1) {
      // 最后一个已经比较过，不匹配
      break;
    }
  }

  if (arr.length == 0 && tmp.length == 0) {
    return 'match';
  } else {
    return 'nomatch';
  }
}

console.log(judge('([])'));
console.log(judge('()'));
console.log(judge('()[]{}'));
console.log(judge('(]'));
console.log(judge('([)]'));

*/

// 用一个 map 来维护左括号和右括号的对应关系
const leftToRight = {
  '(': ')',
  '[': ']',
  '{': '}',
};

/**
 * @param {string} s
 * @return {boolean}
 */
// 例题做法
// 将所有左括号转为右括号
// 遇到 有括号 与 左括号转化的匹配
const isValid = function (s) {
  // 结合题意，空字符串无条件判断为 true
  if (!s) {
    return true;
  }
  // 初始化 stack 数组
  const stack = [];
  // 缓存字符串长度
  const len = s.length;
  // 遍历字符串
  for (let i = 0; i < len; i++) {
    // 缓存单个字符
    const ch = s[i];
    // 判断是否是左括号，这里我为了实现加速，没有用数组的 includes 方法，直接手写判断逻辑
    if (ch === '(' || ch === '{' || ch === '[') {
      stack.push(leftToRight[ch]);
      console.log(stack);
    }
    // 若不是左括号，则必须是和栈顶的左括号相配对的右括号
    else {
      // console.log()
      // 若栈不为空，且栈顶的左括号没有和当前字符匹配上，那么判为无效
      if (!stack.length || stack.pop() !== ch) {
        return false;
      }
    }
  }
  // 若所有的括号都能配对成功，那么最后栈应该是空的
  return !stack.length;
};

console.log(isValid('([])'));

// console.log(isValid('()'));
// console.log(isValid('()[]{}'));
// console.log(isValid('(]'));
// console.log(isValid('([)]'));
