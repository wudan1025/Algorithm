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

function bfs_getNode(root) {
  let queue = [],
    result = [],
    curResult = [],
    curRoot = root,
    layNodeLen = queue.length;
  queue.push(curRoot);
  curResult.push(curRoot.val);
  while (queue.length) {
    
    curRoot = queue.shift();
    if (curResult.length) {
      result.push(curResult);
      curResult = [];
    }

    if (curRoot.left) {
      queue.push(curRoot.left);
      curResult.push(curRoot.left.val);
    }
    if (curRoot.right) {
      queue.push(curRoot.right);
      curResult.push(curRoot.right.val);
    }
  }
  return result;
}

console.log(bfs_getNode(root));
