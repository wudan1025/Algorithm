/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
/*
归并排序 - 分治法
时间复杂度是 O(nlog(n))
1. 分解子问题：将需要被排序的数组从中间分割为两半，
然后再将分割出来的每个子数组各分割为两半，
重复以上操作，直到单个子数组只有一个元素为止。
2. 求解每个子问题：从粒度最小的子数组开始，
两两合并、确保每次合并出来的数组都是有序的。
（这里的“子问题”指的就是对每个子数组进行排序）。
3. 合并子问题的解，得出大问题的解：当数组被合并至原有的规模时，
就得到了一个完全排序的数组
 */

var arr = [8, 7, 6, 5, 4, 3, 2, 1];

// 我的写法
function mergerSort(arr) {
  var result = split(arr);
  function split(arr) {
    if (arr.length == 1) return arr;
    let middle = parseInt(arr.length / 2);
    let arrLeft = split(arr.splice(0, middle));
    let arrRight = split(arr);
    let result = sortResult(arrLeft, arrRight);
    return result;
  }

  function sortResult(arr1, arr2) {
    let newArr = [],
      i = 0,
      j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        newArr.push(arr1[i]);
        i++;
      } else {
        newArr.push(arr2[j]);
        j++;
      }
    }
    if (i != arr1.length) {
      newArr.push(...arr1.splice(i));
    }

    if (j != arr2.length) {
      newArr.push(...arr2.splice(j));
    }
    // console.log(newArr);
    return newArr;
  }

  console.log(result);
  return result;
}

mergerSort(arr);

// 作者的写法
// function mergeSort(arr) {
//   const len = arr.length;
//   // 处理边界情况
//   if (len <= 1) {
//     return arr;
//   }
//   // 计算分割点
//   const mid = Math.floor(len / 2);
//   // 递归分割左子数组，然后合并为有序数组
//   const leftArr = mergeSort(arr.slice(0, mid));
//   // 递归分割右子数组，然后合并为有序数组
//   const rightArr = mergeSort(arr.slice(mid, len));
//   // 合并左右两个有序数组
//   arr = mergeArr(leftArr, rightArr);
//   // 返回合并后的结果
//   return arr;
// }

// function mergeArr(arr1, arr2) {
//   // 初始化两个指针，分别指向 arr1 和 arr2
//   let i = 0,
//     j = 0;
//   // 初始化结果数组
//   const res = [];
//   // 缓存arr1的长度
//   const len1 = arr1.length;
//   // 缓存arr2的长度
//   const len2 = arr2.length;
//   // 合并两个子数组
//   while (i < len1 && j < len2) {
//     if (arr1[i] < arr2[j]) {
//       res.push(arr1[i]);
//       i++;
//     } else {
//       res.push(arr2[j]);
//       j++;
//     }
//   }
//   // 若其中一个子数组首先被合并完全，则直接拼接另一个子数组的剩余部分
//   if (i < len1) {
//     return res.concat(arr1.slice(i));
//   } else {
//     return res.concat(arr2.slice(j));
//   }
// }

// console.log(mergeSort(arr));
