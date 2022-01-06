/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */

/*
// 开始 3:22 结束 37结束
题目描述：给定一个二叉树，返回它的前序（先序）遍历序列。

示例:

// 需要将输入转为一颗树
输入: [1,null,2,3]

1   
 \   
  2   
 /  
3 
输出: [1,2,3]
进阶: 递归算法很简单，你可以通过迭代算法完成吗？
*/

// 1. 将输入示例转化为一棵树
// 2. 使用栈实现，栈先入后出，所以需要先右后左遍历
const root = {
  val: '1',
  left: {
    val: '2',
    left: {
      val: '4',
    },
    right: {
      val: '5',
    },
  },
  right: {
    val: '3',
    left: {
      val: '6',
    },
  },
};

// 我的写法
// 先序遍历
function iteration_DLR(root) {
  let result = [];
  let curRoot = [];
  curRoot.push(root);
  while (curRoot.length) {
    root = curRoot.pop();
    result.push(root.val);
    if (root.right) {
      curRoot.push(root.right);
    }
    if (root.left) {
      curRoot.push(root.left);
    }
  }
  return result;
}

// console.log(iteration_DLR(root));

// 中序遍历
function iteration_LDR(root) {
  let result = [];
  let curRoot = [];
  curRoot.push(root);
  while (curRoot.length) {
    if (root.right) {
      curRoot.push(root.right);
    }
    if (root.val) {
      curRoot.push(root);
    }
    if (root.left) {
      curRoot.push(root.left);
    }

    if (!root.left && !root.right) {
      result.push(root.val);
      root = curRoot.pop();
    }
  }
  return result;
}
// console.log(iteration_LDR(root));

// 后序
function iteration_LRD(root) {
  let result = [];
  let curRoot = [];
  curRoot.push(root);
  while (curRoot.length) {
    root = curRoot.pop();
    result.unshift(root.val);

    if (root.right) {
      curRoot.push(root.right);
    }
    if (root.left) {
      curRoot.push(root.left);
    }
  }
  return result;
}

console.log(iteration_LRD(root));

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 作者的写法
const preorderTraversal = function (root) {
  // 定义结果数组
  const res = [];
  // 处理边界条件
  if (!root) {
    return res;
  }
  // 初始化栈结构
  const stack = [];
  // 首先将根结点入栈
  stack.push(root);
  // 若栈不为空，则重复出栈、入栈操作
  while (stack.length) {
    // 将栈顶结点记为当前结点
    const cur = stack.pop();
    // 当前结点就是当前子树的根结点，把这个结点放在结果数组的尾部
    res.push(cur.val);
    // 若当前子树根结点有右孩子，则将右孩子入栈
    if (cur.right) {
      stack.push(cur.right);
    }
    // 若当前子树根结点有左孩子，则将左孩子入栈
    if (cur.left) {
      stack.push(cur.left);
    }
  }
  // 返回结果数组
  // console.log(res);
  return res;
};

// console.log(preorderTraversal(root));
