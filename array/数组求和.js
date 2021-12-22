/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
/*
给定一个整数数组 nums 和一个目标值 target，
请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
示例
给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]
*/

// 方法一
/* 
开始指针 0 开始 / 结束指针 末尾开始
当前值 <target 停留，> target 移动
都小于，判断相加是否等于，不相等
复杂度 
*/

/*
// var nums = [1, 2, 7, 9, 10, 11, 15],
var nums = [2, 7, 1, 9, 15, 11, 10],
  target = 11;
var first = 0,
  last = nums.length - 1,
  last2 = last,
  forLength;
let result = [];

// 如果字符串无序先排序
nums = nums.sort(function (a, b) {
  return a - b;
});

console.log(nums);

// 方法1 两层循环
// 获取新的 last 值
while (nums[last] >= target) {
  last--;
}
forLength = last2 = last;

console.log(last);
for (let i = 0; i < forLength; i++) {
  last = last2;
  while (i < last) {
    if (nums[i] + nums[last] == target) {
      result.push({
        iIndex: i,
        last: last,
        iValue: nums[i],
        lastValue: nums[last],
      });
      last = i;
      break;
    } else {
      last--;
    }
  }
}

console.log(result);

// 时间复杂度 O(n*2)
*/

/*
方法二 空间换时间
使用map 存差值
*/

// var nums = [2, 7, 1, 15, 11, 10, 9],
//   target = 11;
// var first = 0,
//   last = nums.length - 1,
//   last2 = last,
//   forLength,
//   diffs = {};

// let result = [];

// // 不需要排序

// // 储存差值
// // for (let i = 0; i < nums.length; i++) {
// //   // 存在差值
// //   // 需要判断 undefined ,不然下标0 会判断错误
// //   if (diffs[nums[i]] != undefined) {
// //     result.push([diffs[nums[i]], i]);
// //   }
// //   // 差值
// //   diffs[target - nums[i]] = i;
// // }

// // 或者

// for (let i = 0; i < nums.length; i++) {
//   // 存在差值
//   // 需要判断 undefined ,不然下标0 会判断错误
//   if (diffs[target - nums[i]] != undefined) {
//     result.push([diffs[target - nums[i]], i]);
//   }
//   // 差值
//   diffs[nums[i]] = i;
// }

// console.log(result);

const twoSum = function (nums, target) {
  // 这里我用对象来模拟 map 的能力
  var diffs = {},
    result = [];
  // 缓存数组长度
  const len = nums.length;
  // 遍历数组
  for (let i = 0; i < len; i++) {
    // 判断当前值对应的 target 差值是否存在（是否已遍历过）
    if (diffs[target - nums[i]] !== undefined) {
      // 若有对应差值，那么答案get！
      // return [diffs[target - nums[i]], i];
      result.push([diffs[target - nums[i]], i]);
    }
    // 若没有对应差值，则记录当前值
    diffs[nums[i]] = i;
  }
  return result;
};

console.log(twoSum([2, 7, 1, 15, 11, 10, 9], 11));

// important
// 几乎所有的求和问题，都可以转化为求差问题
