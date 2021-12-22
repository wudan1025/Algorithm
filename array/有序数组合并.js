/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
/* 合并两个有序数组
真题描述：给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

说明: 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

示例:

输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6], n = 3
输出: [1, 2, 2, 3, 5, 6]
*/

// 方法一 使用新数组 双指针

/*
var nums1 = [1, 2, 3];
var nums2 = [2, 5, 6];

var nums3 = [];
var index1 = 0,
  index2 = 0;

while (index1 < nums1.length || index2 < nums2.length) {
  if (nums1[index1] <= nums2[index2]) {
    nums3.push(nums1[index1]);
    index1++;
  } else {
    nums3.push(nums2[index2]);
    index2++;
  }
}

console.log(nums3);
*/

// 方法二 不使用新数组，双指针，从尾部开始向前倒序
var nums1 = [1, 2, 3];
var nums2 = [2, 5, 6];
// debugger;
var index1 = nums1.length - 1,
  index2 = nums2.length - 1,
  total = nums1.length + nums2.length - 1;

while (index1 > 0 && index2 > 0) {
  if (nums1[index1] <= nums2[index2]) {
    nums1[total] = nums2[index2];
    total--;
    index2--;
  } else {
    nums1[total] = nums1[index1];
    total--;
    index1--;
  }
  // console.log(total);
  // console.log(nums1);
}

// 处理一个数组已经全部插入，另一个 没有处理完的情况
if (index1 > 0) {
  while (index1 > 0) {
    nums1[total] = nums1[index1];
    total--;
    index1--;
  }
}
if (index2 > 0) {
  while (index2 > 0) {
    nums1[total] = nums2[index2];
    total--;
    index2--;
  }
}

console.log(nums1);
