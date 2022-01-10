/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
/*
插入新结点
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
    right: {
      val: 9,
    },
  },
};

// 我的做法
function insert_bstTree(root, val) {
  if (!root) return;
  if (root.val && root.val == val) {
    console.log('当前值已存在')
  } else if (root.val > val) {
    // 根节点大于当前值
    // 当前没有左子树，直接插入
    if (!root.left) {
      root.left = {
        val: val
      }
    } else {
      // 继续再左子树查找合适位置
      insert_bstTree(root.left, val);
    }
  } else {
    // 根节点小于当前值
    // 右子树为空，直接插入
    if (!root.right) {
      root.right = {
        val: val
      }
    } else {
      // 在右子树继续查找
      insert_bstTree(root.right, val);
    }

  }

  return root
}

// 插入值为7的节点
// console.log(insert_bstTree(root, 7));

// 作者的写法
function insertIntoBST(root, n) {
  // 若 root 为空，说明当前是一个可以插入的空位
  if (!root) {
    // 用一个值为n的结点占据这个空位
    // root = new TreeNode(n)
    root = {
      val: n
    }
    return root
  }

  if (root.val > n) {
    // 当前结点数据域大于n，向左查找
    root.left = insertIntoBST(root.left, n)
  } else {
    // 当前结点数据域小于n，向右查找
    root.right = insertIntoBST(root.right, n)
  }

  // 返回插入后二叉搜索树的根结点
  return root
}

console.log(insertIntoBST(root, 7));


