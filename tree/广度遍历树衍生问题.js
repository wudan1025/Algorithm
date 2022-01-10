/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */

/*
题目描述：给你一个二叉树，
请你返回其按 层序遍历 得到的节点值。 
（即逐层地，从左到右访问所有节点）。

示例：

二叉树：[3,9,20,null,null,15,7],

  3
 / \
9  20
  /  \
 15   7
返回其层次遍历结果：

[
[3],
[9,20],
[15,7]
]
 */

// 开始4:32 结束 4:39 用时 7 min
var root = {
  val: 3,
  left: {
    val: 9,
    left: {
      val: 10,
    },
  },
  right: {
    val: 20,
    left: {
      val: 15,
    },
    right: {
      val: 7,
    },
  },
};

// 我的做法
function bfs_getNode(root) {
  let queue = [],
    result = [],
    curResult = [],
    curRoot = root,
    // 当前层 有几个子元素
    curLayNodeLen = 1;
  queue.push(curRoot);
  curResult.push(curRoot.val);
  while (queue.length) {
    result.push(curResult);
    curResult = [];
    curLayNodeLen = queue.length;
    for (let i = 0; i < curLayNodeLen; i++) {
      curRoot = queue.shift();
      if (curRoot.left) {
        queue.push(curRoot.left);
        curResult.push(curRoot.left.val);
      }
      if (curRoot.right) {
        queue.push(curRoot.right);
        curResult.push(curRoot.right.val);
      }
    }
  }
  return result;
}

// console.log(bfs_getNode(root));

// 作者写法
const levelOrder = function (root) {
  // 初始化结果数组
  const res = [];
  // 处理边界条件
  if (!root) {
    return res;
  }
  // 初始化队列
  const queue = [];
  // 队列第一个元素是根结点
  queue.push(root);
  // 当队列不为空时，反复执行以下逻辑
  while (queue.length) {
    // level 用来存储当前层的结点
    const level = [];
    // 缓存刚进入循环时的队列长度，这一步很关键，因为队列长度后面会发生改变
    const len = queue.length;
    // 循环遍历当前层级的结点
    for (let i = 0; i < len; i++) {
      // 取出队列的头部元素
      const top = queue.shift();
      // 将头部元素的值推入 level 数组
      level.push(top.val);
      // 如果当前结点有左孩子，则推入下一层级
      if (top.left) {
        queue.push(top.left);
      }
      // 如果当前结点有右孩子，则推入下一层级
      if (top.right) {
        queue.push(top.right);
      }
    }
    // 将 level 推入结果数组
    res.push(level);
  }
  // 返回结果数组
  return res;
};

console.log(levelOrder(root));
