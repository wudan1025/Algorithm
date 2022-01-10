/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
/*
     4
   /   \
  2     7
 / \   / \
1   3 6   9
输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1
 */

// 开始5:12 结束 5:23 用时 11分钟

var root = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
    },
    right: {
      val: 3,
    },
  },
  right: {
    val: 7,
    left: {
      val: 6,
    },
    right: {
      val: 9,
    },
  },
};

function overturnTree(node) {
  var l = node.left,
    r = node.right;
  if (l) {
    overturnTree(node.left);
    node.left = r;
  }
  if (r) {
    overturnTree(node.right);
    node.right = l;
  }

  return node;
}

console.log(overturnTree(root));

// 作者的写法
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function (root) {
  // 定义递归边界
  if (!root) {
    return root;
  }
  // 递归交换右孩子的子结点
  let right = invertTree(root.right);
  // 递归交换左孩子的子结点
  let left = invertTree(root.left);
  // 交换当前遍历到的两个左右孩子结点
  root.left = right;
  root.right = left;
  return root;
};
