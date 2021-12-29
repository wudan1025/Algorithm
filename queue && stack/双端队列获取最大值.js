/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
/*
// 双端队列衍生出的滑动窗口问题
// 双端队列就是允许在队列的两端进行插入和删除的队列。
const queue = [1,2,3,4] // 定义一个双端队列   
queue.push(1) // 双端队列尾部入队 
queue.pop() // 双端队列尾部出队   
queue.shift() // 双端队列头部出队 
queue.unshift(1) // 双端队列头部入队
*/

// 开始3:24 结束 3:30 总计 6 min 非最优解法

/*
题目描述：给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

示例:

输入: nums = [1,3,-1,-3,5,3,6,7], 
和 k = 3 输出: [3,3,5,5,6,7]

解释: 滑动窗口的位置

---------------

[1 3 -1] -3 5 3 6 7
1 [3 -1 -3] 5 3 6 7
1 3 [-1 -3 5] 3 6 7
1 3 -1 [-3 5 3] 6 7
1 3 -1 -3 [5 3 6] 7
1 3 -1 -3 5 [3 6 7]

最大值分别对应：

3 3 5 5 6 7

提示：你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。
 */

/*
// 我的做法
function getResult(arr, k) {
  let i = 0,
    j = i + k - 1,
    max = arr[i],
    maxArr = [];
  while (j < arr.length) {
    max = arr[i];
    for (let idx = i + 1; idx <= j; idx++) {
      if (arr[idx] > max) max = arr[idx];
    }
    maxArr.push(max);
    i++;
    j++;
  }
  return maxArr;
}

var nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
console.log(getResult(nums, k)); // 3 3 5 5 6 7
*/

/*
// 作者解法1
// 与我的解法一致

const maxSlidingWindow = function (nums, k) {
  // 缓存数组的长度
  const len = nums.length;
  // 定义结果数组
  const res = [];
  // 初始化左指针
  let left = 0;
  // 初始化右指针
  let right = k - 1;
  // 当数组没有被遍历完时，执行循环体内的逻辑
  while (right < len) {
    // 计算当前窗口内的最大值
    const max = calMax(nums, left, right);
    // 将最大值推入结果数组
    res.push(max);
    // 左指针前进一步
    left++;
    // 右指针前进一步
    right++;
  }
  // 返回结果数组
  return res;
};

// 这个函数用来计算最大值
function calMax(arr, left, right) {
  // 处理数组为空的边界情况
  if (!arr || !arr.length) {
    return;
  }
  // 初始化 maxNum 的值为窗口内第一个元素
  let maxNum = arr[left];
  // 遍历窗口内所有元素，更新 maxNum 的值
  for (let i = left; i <= right; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  // 返回最大值
  return maxNum;
}

*/

// 优化解法2
// 使用双端队列

// [1, 3, -1, -3, 5, 3, 6, 7],
// 相同重复值不保留
// 队头最大值 不在双端队列情况
// 1, 3, -1 =>  3,-1 => 3
// 3, -1, -3, => 3,-3 => 3
// -1, -3, 5 => 5 => 5
// -3, 5, 3 => 5,3 = > 5
// 5, 3, 6 => 6 => 6
// 3, 6, 7 => 7 => 7

// [4, 3, -1, -3, 5, 3, 6, 7],
// 相同重复值不保留
// 队头最大值 在双端队列情况,需要比较剔除
// 4, 3, -1 => 4,3,-1 => 4
// 3, -1, -3, => 4,3,-1 => 队列最大值 等于 arr[0]
// , 即已经移走不在范围内数据, 删除这个数据 => 3,-3 => 3
// -1, -3, 5 => 5 => 5
// -3, 5, 3 => 5,3 = > 5
// 5, 3, 6 => 6 => 6
// 3, 6, 7 => 7 => 7

// 看完答案思路后我的写法
// queue 存储的是值

function getResult(nums, k) {
  // 递减双端队列
  let queue = [];
  let i = 0,
    j = i + k - 1,
    curIdx = 0,
    result = [];
  while (curIdx < nums.length) {
    // 当前最大值 和 超出范围的左边一致，则出队列
    if (result.length > 0 && queue[0] == nums[i - 1]) {
      // 从队头出队列
      queue.shift();
    }
    while (queue[queue.length - 1] < nums[curIdx]) {
      queue.pop();
    }
    queue.push(nums[curIdx]);
    curIdx++;
    // 当前一次滑动窗口已经结束
    if (curIdx > j) {
      i++;
      j++;
      // 将当前最大值最为结果
      result.push(queue[0]);
    }
  }
  return result;
}

var nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
console.log(getResult(nums, k)); // 3 3 5 5 6 7

var nums = [4, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
console.log(getResult(nums, k)); // 4 3 5 5 6 7


// 作者优化写法
// deque 双端队列存储的是索引
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
  // 缓存数组的长度
  const len = nums.length;
  // 初始化结果数组
  const res = [];
  // 初始化双端队列
  const deque = [];
  // 开始遍历数组
  for (let i = 0; i < len; i++) {
    // 当队尾元素小于当前元素时
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      // 将队尾元素（索引）不断出队，直至队尾元素大于等于当前元素
      deque.pop();
    }
    // 入队当前元素索引（注意是索引）
    deque.push(i);
    // 当队头元素的索引已经被排除在滑动窗口之外时
    while (deque.length && deque[0] <= i - k) {
      // 将队头元素索引出队
      deque.shift();
    }
    // 判断滑动窗口的状态，只有在被遍历的元素个数大于 k 的时候，才更新结果数组
    if (i >= k - 1) {
      res.push(nums[deque[0]]);
    }
  }
  // 返回结果数组
  return res;
};

var nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
console.log(maxSlidingWindow(nums, k)); // 3 3 5 5 6 7

var nums = [4, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
console.log(maxSlidingWindow(nums, k)); // 4 3 5 5 6 7
