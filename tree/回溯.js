/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
/*
题目描述：给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

示例: 输入: n = 4, k = 2
输出:
[
[2,4],
[3,4],
[2,3],
[1,2],
[1,3],
[1,4],
]
*/

/*
// 我的答案 用时 20min
function getResult(n, k) {
  var arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  let visited = {},
    curResult = [];

  function dfs(arr, k, layer) {
    if (layer == k) {
      console.log(curResult);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (!visited[arr[i]]) {
        visited[arr[i]] = true;
        // 去除比当前小的值，防止重复
        if (curResult[curResult.length - 1]) {
          if (curResult[curResult.length - 1] > arr[i]) continue;
        }
        curResult.push(arr[i]);
        dfs(arr, k, layer + 1);
        visited[arr[i]] = false;
        curResult.pop();
      }
    }
  }
  dfs(arr, k, 0);
}

let n = 4,
  k = 2;
getResult(n, k);

*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
  // 初始化结果数组
  const res = [];
  // 初始化组合数组
  const subset = [];
  // 进入 dfs，起始数字是1
  dfs(1);

  // 定义 dfs 函数，入参是当前遍历到的数字
  function dfs(index) {
    if (subset.length === k) {
      res.push(subset.slice());
      return;
    }
    // 从当前数字的值开始，遍历 index-n 之间的所有数字
    for (let i = index; i <= n; i++) {
      // 这是当前数字存在于组合中的情况
      subset.push(i);
      // 基于当前数字存在于组合中的情况，进一步 dfs
      dfs(i + 1);
      // 这是当前数字不存在与组合中的情况
      subset.pop();
    }
  }
  // 返回结果数组
  return res;
};

console.log(combine(4, 2));
