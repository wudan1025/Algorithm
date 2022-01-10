/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */

/*
//  BST（Binary Search Tree） 二叉搜索树 排序二叉树 二叉查找树

定义
1. 是一棵空树
2. 是一棵由根结点、左子树、右子树组成的树，
同时左子树和右子树都是二叉搜索树，
且左子树上所有结点的数据域都小于等于根结点的数据域，
右子树上所有结点的数据域都大于等于根结点的数据域
3. 满足以上两个条件之一的二叉树，就是二叉搜索树。
*/

/*
握好它的限制条件和特性，就足以应对大部分的考题。
常见考点
1. 查找数据域为某一特定值的结点;
2. 插入新结点;
3. 删除指定结点;
 */

var root = {
  val: 6,
  left: {
    val: 3,
    left: {
      val: 1,
    },
    right: {
      val: 4,
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

/*
查找数据域为某一特定值的结点
假设这个目标结点的数据域值为 n，
我们借助二叉搜索树数据域的有序性，可以有以下查找思路：

递归遍历二叉树，若当前遍历到的结点为空，就意味着没找到目标结点，直接返回。
若当前遍历到的结点对应的数据域值刚好等于n，则查找成功，返回。
若当前遍历到的结点对应的数据域值大于目标值n，
则应该在左子树里进一步查找，设置下一步的遍历范围为 root.left 后，继续递归。
若当前遍历到的结点对应的数据域值小于目标值n，
则应该在右子树里进一步查找，设置下一步的遍历范围为 root.right 后，继续递归。
 */

// 开始 5：47 结束 5：57 用时 10min
// 我的
function find_bstTree(root, val) {
  if (!root) return;
  if (root.val && root.val == val) {
    console.log('result: ' + JSON.stringify(root));
    return root;
  } else if (root.val > val) {
    find_bstTree(root.left, val);
  } else {
    find_bstTree(root.right, val);
  }
}

find_bstTree(root, 4);

// 作者的
function search(root, n) {
  // 若 root 为空，查找失败，直接返回
  if (!root) {
    return;
  }
  // 找到目标结点，输出结点对象
  if (root.val === n) {
    console.log('目标结点是：', root);
  } else if (root.val > n) {
    // 当前结点数据域大于n，向左查找
    search(root.left, n);
  } else {
    // 当前结点数据域小于n，向右查找
    search(root.right, n);
  }
}

console.log(search(root, 4));
