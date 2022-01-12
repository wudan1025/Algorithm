/*
对定义的考察：二叉搜索树的验证
题目描述：给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：
节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。

示例 1:

输入:

2
/ \
1   3
输出: true

示例 2:

输入:

5
/ \
1   4
/ \
3   6
输出: false

解释: 输入为: [5, 1, 4, null, null, 3, 6]。
根节点的值为 5 ，但是其右子节点值为 4 。
*/

var root1 = {
  val: 2,
  left: {
    val: 1,
  },
  right: {
    val: 3,
  },
};

var root2 = {
  val: 5,
  left: {
    val: 1,
    left: 3,
    right: 6,
  },
  right: {
    val: 4,
  },
};

// 验证BST
// 我的做法
function verify_BST(root) {
  if (!root) {
    return true;
  }

  if (root.left) {
    // 根节点大于等于左边节点 正确
    // 继续验证左子树
    if (root.val >= root.left.val) {
      return verify_BST(root.left);
    } else {
      // 根节点小于左边节点 错误
      return false;
    }
  }

  if (root.right) {
    // 根节点小于等于右边节点 正确
    // 继续验证右子树
    if (root.val <= root.right.val) {
      return verify_BST(root.right);
    } else {
      // 根节点大于右边节点 错误
      return false;
    }
  }

  return true;
}

// console.log(verify_BST(root1))
// console.log(verify_BST(root2))

// 作者写法
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function (root) {
  // 定义递归函数
  function dfs(root, minValue, maxValue) {
    // 若是空树，则合法
    if (!root) {
      return true;
    }
    // 若右孩子不大于根结点值，或者左孩子不小于根结点值，则不合法
    if (root.val <= minValue || root.val >= maxValue) return false;
    // 左右子树必须都符合二叉搜索树的数据域大小关系
    return (
      dfs(root.left, minValue, root.val) && dfs(root.right, root.val, maxValue)
    );
  }
  // 初始化最小值和最大值为极小或极大
  return dfs(root, -Infinity, Infinity);
};

// console.log(isValidBST(root1))
// console.log(isValidBST(root2))
