/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
/**
 * 插入元素，保持大碓顶
 */

var root = {
  val: 9,
  left: {
    val: 8,
    left: {
      val: 3,
    },
    right: {
      val: 1,
    },
  },
  right: {
    val: 6,
  },
};
// 入参是堆元素在数组里的索引范围，low表示下界，high表示上界
function upHeap(low, high) {
  // 初始化 i（当前结点索引）为上界
  let i = high;
  // 初始化 j 为 i 的父结点
  let j = Math.floor((i - 1) / 2);
  // 当 j 不逾越下界时，重复向上对比+交换的过程
  while (j >= low) {
    // 若当前结点比父结点大
    if (heap[j] < heap[i]) {
      // 交换当前结点与父结点，保持父结点是较大的一个
      const temp = heap[j];
      heap[j] = heap[i];
      heap[i] = temp;

      // i更新为被交换父结点的位置
      i = j;
      // j更新为父结点的父结点
      j = Math.floor((i - 1) / 2);
    } else {
      break;
    }
  }
}
