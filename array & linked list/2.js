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

/*
方法二 空间换时间
使用map 存差值
*/

var nums = [2, 7, 1, 9, 15, 11, 10],
  target = 11;
var first = 0,
  last = nums.length - 1,
  last2 = last,
  forLength,
  map = {};

let result = [];

// 如果字符串无序先排序
nums = nums.sort(function (a, b) {
  return a - b;
});
console.log(nums);

// 储存差值
for (let i = 0; i < nums.length; i++) {
  // 差值
  let diff = target - nums[i];
  // if (key)
  if (diff > 0) map[diff] = i;
  // if (map[nums[i]]) {
  //   result.push([map[nums[i]], nums[i]]);
  // }
  // if (map[nums[i]]) {
  //   result.push([map[nums[i]], i]);
  // }
}

for (let i = 0; i < nums.length; i++) {
  if (map[nums[i]]) {
    result.push([map[nums[i]], i]);
    map[nums[i]] = null;
    map[target - nums[i]] = null;
  }
}

console.log(result);
