/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */

// 每一次选一个最小的和当前顺序位置上的值交换
// 时间复杂度  O(n^2)。
// 开始 5:03 结束5:16
// 我的写法
function selectSort(arr) {
  let len = arr.length,
    minIdx,
    tmp;
  for (let i = 0; i < len; i++) {
    minIdx = i;
    for (let j = i; j < len; j++) {
      // 每一趟选出最小值
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    // 交换
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  console.log(arr);
  return arr;
}

var arr = [5, 3, 2, 4, 1];
selectSort(arr);

// // 作者的写法
// function selectSort(arr) {
//   // 缓存数组长度
//   const len = arr.length;
//   // 定义 minIndex，缓存当前区间最小值的索引，注意是索引
//   let minIndex;
//   // i 是当前排序区间的起点
//   for (let i = 0; i < len - 1; i++) {
//     // 初始化 minIndex 为当前区间第一个元素
//     minIndex = i;
//     // i、j分别定义当前区间的上下界，i是左边界，j是右边界
//     for (let j = i; j < len; j++) {
//       // 若 j 处的数据项比当前最小值还要小，则更新最小值索引为 j
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     // 如果 minIndex 对应元素不是目前的头部元素，则交换两者
//     if (minIndex !== i) {
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
//   }
//   return arr;
// }
