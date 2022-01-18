/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */

var arr = [5, 3, 2, 4, 1];
var arr2 = [5, 2, 4, 1, 3];
// 算法 复杂度 O(n^2)
// 我的写法
// 方法1
function insertSort(arr) {
  // 第0个默认有序不需要比较,所以 i 从 1开始
  for (let i = 1; i < arr.length; i++) {
    // i 是当前要插入元素
    // i 与 0 - (i-1) 比较
    let j = i - 1;
    while (j >= 0) {
      // 当 j > 0 时，插入的位置 是占用的具体的位置。所以 当值大于时需要++才正确
      // 写法1
      if (arr[i] < arr[j] && j > 0) {
        j--;
      } else if (arr[i] > arr[j] && j > 0) {
        j++;
        break;
      } else if (j <= 0) {
        break;
      }
    }
    var item = arr.splice(i, 1);
    arr.splice(j, 0, item[0]);
  }
  console.log(arr);
  return arr;
}

// 我的写法
// 方法2
function insertSort2(arr) {
  // 第0个默认有序不需要比较,所以 i 从 1开始
  for (let i = 1; i < arr.length; i++) {
    let j = i,
      tmp = arr[i];
    while (j >= 0) {
      // tmp 是当前要插入元素
      // tmp 与 0 - (i-1)/(j-1) 比较
      if (tmp < arr[j - 1] && j > 0) {
        // 插入元素比前一个元素小时，这个元素后移一位，
        // 给这个元素让出位置
        arr[j] = arr[j - 1];
        j--;
      } else {
        // 找到最终位置，替换
        arr[j] = tmp;
        break;
      }
    }
  }
  console.log(arr);
  return arr;
}

insertSort2(arr2);

// 作者的
// function insertSort(arr) {
//   // 缓存数组长度
//   const len = arr.length;
//   // temp 用来保存当前需要插入的元素
//   let temp;
//   // i用于标识每次被插入的元素的索引
//   for (let i = 1; i < len; i++) {
//     // j用于帮助 temp 寻找自己应该有的定位
//     let j = i;
//     temp = arr[i];
//     // 判断 j 前面一个元素是否比 temp 大
//     while (j > 0 && arr[j - 1] > temp) {
//       // 移动值，而不是插入
//       // 如果是，则将 j 前面的一个元素后移一位，为 temp 让出位置
//       arr[j] = arr[j - 1];
//       j--;
//     }
//     // 循环让位，最后得到的 j 就是 temp 的正确索引
//     arr[j] = temp;
//   }
//   return arr;
// }
