/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */

// todo
var arr = [5, 3, 2, 4, 1];
// 开始 5:47 结束
// 算法 复杂度 O(n^2)
function insertSort(arr) {
  let cur;
  // 第0个默认有序不需要比较,所以 i 从 1开始
  for (let i = 1; i < arr.length; i++) {
    // i 是当前要插入元素
    // i 与 0 - (i-1) 比较
    // debugger;
    let j = i - 1;
    while (j >= 0) {
      if (i == 3) {
        debugger;
      }
      if (arr[i] < arr[j] && j > 0) {
        j--;
      } else {
        console.log(j);
        break;
      }
    }
    // 插入有问题 todo
    console.log(j);
    var item = arr.splice(i, 1);
    console.log('插入前' + arr);
    arr.splice(j, 0, item[0]);
    console.log('插入后' + arr);
    // for (let j = i - 1; j >= 0; j--) {
    //   // debugger;
    //   if (arr[j] > arr[cur]) {
    //     // debugger;
    //   }
    // }
  }
  console.log(arr);
  return arr;
}

insertSort(arr);

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
//       // 如果是，则将 j 前面的一个元素后移一位，为 temp 让出位置
//       arr[j] = arr[j - 1];
//       j--;
//     }
//     // 循环让位，最后得到的 j 就是 temp 的正确索引
//     arr[j] = temp;
//   }
//   return arr;
// }
