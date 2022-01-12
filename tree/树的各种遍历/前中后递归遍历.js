/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
/*
// 递归
// 递归的本质是栈
// 先序遍历 DLR
// 根结点 -> 左子树 -> 右子树
// 中序遍历 LDR
// 左子树 -> 根结点 -> 右子树
// 后序遍历 LRD
// 左子树 -> 右子树 -> 根结点 
 */

const tree = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'D',
    },
    right: {
      val: 'E',
    },
  },
  right: {
    val: 'C',
    right: {
      val: 'F',
    },
  },
};

// 递归前序 -> 深度遍历(dfs)
// 我的 方法1 需要传递result
function recursive_DLR(node, result) {
  if (node.val) result.push(node.val);
  if (node.left) {
    recursive_DLR(node.left, result);
  }
  if (node.right) {
    recursive_DLR(node.right, result);
  }
  // console.log(node.val);
  // 不加也可以
  // return;
}
var result = [];
recursive_DLR(tree, result);
console.log(`递归前序：${result}`); // ABDECF

// 作者的
// 所有遍历函数的入参都是树的根结点对象
function preorder(root) {
  // 递归边界，root 为空
  if (!root) {
    return;
  }

  // 输出当前遍历的结点值
  console.log('当前遍历的结点值是：', root.val);
  // 递归遍历左子树
  preorder(root.left);
  // 递归遍历右子树
  preorder(root.right);
}

// console.log(preorder(tree));

// 我的
// 递归中序
function recursive_LDR(node, result) {
  if (node.left) {
    recursive_LDR(node.left, result);
  }
  if (node.val) result.push(node.val);
  if (node.right) {
    recursive_LDR(node.right, result);
  }

  return;
}
var result = [];
recursive_LDR(tree, result);
console.log(`递归中序：${result}`); // DBEACF

// 我的
// 递归后序
function recursive_LRD(node, result) {
  if (node.left) {
    recursive_LRD(node.left, result);
  }
  if (node.right) {
    recursive_LRD(node.right, result);
  }
  if (node.val) result.push(node.val);
  return;
}
var result = [];
recursive_LRD(tree, result);
console.log(`递归后序：${result}`); // DEBFCA
