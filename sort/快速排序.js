/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
/*
快速排序
 */

var arr = [5, 1, 3, 6, 2, 0, 7];

// 时间复杂度 O(nlog(n))
// 我的写法
// 注意点：
// 1. left,rigth 是与基准值进行比较，而不是基准值在的idx
// 2. 每次找到左边比基准值大的，右边比基准值小的，左右两边的值进行交换
// 3. 每次交换时，只有值进行交换，左右指针不交换，而是各往中间走一步(走一步是因为，当前的值是交换过来的值，已经对比过了)
// 4. 当 right < left 时 结束此次排序
// 5. 根据基准值切分下一次左右数组，如果一边数组为空，表示当前已是全部有序状态，不需要再次排序，直接返回
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (!arr || arr.length <= 1) return arr;
  var middle = parseInt(arr.length / 2);
  var middleValue = arr[middle];
  while (left <= right) {
    while (arr[left] < middleValue) {
      left++;
    }
    while (arr[right] > middleValue) {
      right--;
    }

    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }

  console.log('本次排序结果: ');
  console.log(arr);

  var leftArr = arr.splice(0, left),
    rightArr = arr;

  console.log('下一次排序leftArr');
  console.log(leftArr);
  console.log('下一次排序rightarr');
  console.log(rightArr);

  if (rightArr.length == 0) {
    return leftArr;
  } else if (leftArr.length == 0) {
    return rightArr;
  }

  if (leftArr.length > 1) {
    leftArr = quickSort(leftArr);
  }

  if (rightArr.length > 1) {
    rightArr = quickSort(rightArr);
  }

  function swap(arr, key1, key2) {
    [arr[key1], arr[key2]] = [arr[key2], arr[key1]];
    return key1;
  }

  return leftArr.concat(rightArr);
}

console.log(quickSort(arr));

// 快速排序入口
// function quickSort(arr, left = 0, right = arr.length - 1) {
//   // 定义递归边界，若数组只有一个元素，则没有排序必要
//   if (arr.length > 1) {
//     // lineIndex表示下一次划分左右子数组的索引位
//     const lineIndex = partition(arr, left, right);
//     // var leftArr = arr.splice(0, left);
//     // var rightArr = arr;

//     // 错误
//     // if (leftArr.length > 1) {
//     //   resultLeft = quickSort(leftArr);
//     // }

//     // if (rightArr.length > 1) {
//     //   resultRight = quickSort(rightArr);
//     // }

//     // return resultLeft.concat(resultRight);

//     if (left < lineIndex - 1) {
//       // 如果左边子数组的长度不小于1，则递归快排这个子数组
//       // 左子数组以 lineIndex-1 为右边界
//       quickSort(arr, left, lineIndex - 1);
//     }
//     // 如果右边子数组的长度不小于1，则递归快排这个子数组
//     if (lineIndex < right) {
//       // 右子数组以 lineIndex 为左边界
//       quickSort(arr, lineIndex, right);
//     }
//   }
//   return arr;
// }
// // 以基准值为轴心，划分左右子数组的过程
// function partition(arr, left, right) {
//   // 基准值默认取中间位置的元素
//   let pivotValue = arr[Math.floor(left + (right - left) / 2)];
//   // 初始化左右指针
//   let i = left;
//   let j = right;
//   // 当左右指针不越界时，循环执行以下逻辑
//   while (i <= j) {
//     // 左指针所指元素若小于基准值，则右移左指针
//     while (arr[i] < pivotValue) {
//       i++;
//     }
//     // 右指针所指元素大于基准值，则左移右指针
//     while (arr[j] > pivotValue) {
//       j--;
//     }

//     // 若i<=j，则意味着基准值左边存在较大元素或右边存在较小元素，交换两个元素确保左右两侧有序
//     if (i <= j) {
//       swap(arr, i, j);
//       i++;
//       j--;
//     }
//   }
//   // 返回左指针索引作为下一次划分左右子数组的依据
//   return i;
// }

// // 快速排序中使用 swap 的地方比较多，我们提取成一个独立的函数
// function swap(arr, i, j) {
//   [arr[i], arr[j]] = [arr[j], arr[i]];
// }
// console.log(quickSort(arr));
