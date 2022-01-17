/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
/**
 * 取出堆顶元素（删除操作）
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

// 删除堆顶元素并保持堆有序
/*错误;
function delete_heap(root) {
  let oldRoot = root,
    rootLeft = root.left,
    rootRight = root.right;
  let newRoot;
  if (rootLeft && rootRight) {
    debugger;
    if (rootLeft.val > rootRight.val) {
      newRoot = rootLeft;
      rootLeft = newRoot.left;
      rootRight = newRoot.right;
      // newRoot.right = oldRoot.right;
    } else {
      newRoot = rootRight;
      rootLeft = newRoot.left;
      rootRight = newRoot.right;
      newRoot.left = oldRoot.left;
    }

    newRoot = delete_heap(newRoot);
    console.log(newRoot);
    return newRoot;
  } else if (!rootLeft && rootRight) {
    root.left = rootRight;
    return root;
  } else {
    return root;
  }
  console.log(newRoot);
}

delete_heap(root);
*/

/*
对于索引为 n 的结点来说：
索引为 (n-1)/2 的结点是它的父结点
索引 2*n+1 的结点是它的左孩子结点
索为引 2*n+2 的结点是它的右孩子结点
*/

// 入参是堆元素在数组里的索引范围，low表示下界，high表示上界
function downHeap(low, high) {
  // 初始化 i 为当前结点，j 为当前结点的左孩子
  let i = low,
    j = i * 2 + 1;
  // 当 j 不超过上界时，重复向下对比+交换的操作
  while (j <= high) {
    // 如果右孩子比左孩子更大，则用右孩子和根结点比较
    if (j + 1 <= high && heap[j + 1] > heap[j]) {
      j = j + 1;
    }

    // 若当前结点比孩子结点小，则交换两者的位置，把较大的结点“拱上去”
    if (heap[i] < heap[j]) {
      // 交换位置
      const temp = heap[j];
      heap[j] = heap[i];
      heap[i] = temp;

      // i 更新为被交换的孩子结点的索引
      i = j;
      // j 更新为孩子结点的左孩子的索引
      j = j * 2 + 1;
    } else {
      break;
    }
  }
}

var heap = [9, 8, 6, 3, 1];
