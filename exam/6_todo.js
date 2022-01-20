/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
/*
“合并区间”问题
题目描述：给出一个区间的集合，请合并所有重叠的区间。

示例 1:

输入: [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

示例 2:

输入: [[1,4],[4,5]]
输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
*/

// 我的写法
// 缺少排序
function getRange(arr) {
  let targetLeft,
    targetRight,
    curLeft,
    curRight,
    result = [];
  // 从小到大排序
  arr.sort(function (a, b) {
    return a[0] - b[0];
  });
  for (let i = 0; i < arr.length - 1; i++) {
    j = i + 1;
    targetLeft = arr[i][0];
    targetRight = arr[i][1];
    curLeft = arr[j][0];
    curRight = arr[j][1];
    // 有交集
    if (targetRight >= curLeft) {
      newLeft = Math.min(targetLeft, curLeft);
      newRight = Math.max(targetRight, curRight);
      result.push([newLeft, newRight]);
    } else {
      result.push([curLeft, curRight]);
    }
  }
  console.log(result);
  return result;
}

getRange([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]);

getRange([
  [1, 4],
  [4, 5],
]);

// 作者的写法 todo 没看懂
const merge = function (intervals) {
  // 定义结果数组
  const res = [];
  // 缓存区间个数
  const len = intervals.length;
  // 将所有区间按照第一个元素大小排序
  intervals.sort(function (a, b) {
    return a[0] - b[0];
  });
  // 处理区间的边界情况
  if (!intervals || !intervals.length) {
    return [];
  }
  // 将第一个区间（起始元素最小的区间）推入结果数组（初始化）
  res.push(intervals[0]);
  // 按照顺序，逐个遍历所有区间
  for (let i = 1; i < len; i++) {
    // 取结果数组中的最后一个元素，作为当前对比的参考
    prev = res[res.length - 1];
    // 若满足交错关系（前一个的尾部 >= 下一个的头部）
    if (prev[1] >= intervals[i][0]) {
      prev[1] = Math.max(prev[1], intervals[i][1]);
    } else {
      res.push(intervals[i]);
    }
  }
  return res;
};
