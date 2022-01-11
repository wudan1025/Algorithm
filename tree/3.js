/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
// 删除指定二叉树节点
var root = {
  val: 6,
  left: {
    val: 3,
    left: {
      val: 1,
    },
    right: {
      val: 4,
      left: {
        val: 2,
      },
      right: {
        val: 5,
      },
    },
  },
  right: {
    val: 8,
    left: {
      val: 7,
    },
    right: {
      val: 9,
    },
  },
};

// 没有节点不删除
// 是叶子节点直接删除
// 有左右节点，左边选 做大值，右边选最小值 覆盖删除节点

// 开始 6:28 结束 6:39 有问题

// 我的
function del_bstTree(root, val) {
  if (!root) return;
  if (root.val && root.val == val) {
    debugger;
    // 有左子树
    if (root.left) {
      // 左子树找最大的值
      var bigRoot = root.left;
      while (bigRoot.right) {
        bigRoot = bigRoot.right;
      }
      root.val = bigRoot.val;
      bigRoot = {};
    } else if (root.right) {
      // 右子树找最小的
      var small = root.right;
      while (small.left) {
        small = small.left;
      }
      root.val = small.val;
      small = {};
    } else if (!root.left && !root.right) {
      // 没有左右节点，直接删除
      root = null;
    }
  } else if (root.val > val) {
    del_bstTree(root.left, val);
  } else {
    del_bstTree(root.right, val);
  }
  return root;
}

console.log(del_bstTree(root, 1));

// 作者的
function deleteNode(root, n) {
  // 如果没找到目标结点，则直接返回
  if (!root) {
    return root;
  }
  // 定位到目标结点，开始分情况处理删除动作
  if (root.val === n) {
    // 若是叶子结点，则不需要想太多，直接删除
    if (!root.left && !root.right) {
      root = null;
    } else if (root.left) {
      // 寻找左子树里值最大的结点
      const maxLeft = findMax(root.left);
      // 用这个 maxLeft 覆盖掉需要删除的当前结点
      root.val = maxLeft.val;
      // 覆盖动作会消耗掉原有的 maxLeft 结点
      root.left = deleteNode(root.left, maxLeft.val);
    } else {
      // 寻找右子树里值最小的结点
      const minRight = findMin(root.right);
      // 用这个 minRight 覆盖掉需要删除的当前结点
      root.val = minRight.val;
      // 覆盖动作会消耗掉原有的 minRight 结点
      root.right = deleteNode(root.right, minRight.val);
    }
  } else if (root.val > n) {
    // 若当前结点的值比 n 大，则在左子树中继续寻找目标结点
    root.left = deleteNode(root.left, n);
  } else {
    // 若当前结点的值比 n 小，则在右子树中继续寻找目标结点
    root.right = deleteNode(root.right, n);
  }
  return root;
}

// 寻找左子树最大值
function findMax(root) {
  while (root.right) {
    root = root.right;
  }
  return root;
}

// 寻找右子树的最小值
function findMin(root) {
  while (root.left) {
    root = root.left;
  }
  return root;
}

// console.log(deleteNode(root, 1));
