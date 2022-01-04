/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
// breadth-first search 广度优先搜索
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

// 我的写法
// 使用队列实现 广度遍历
function bfs(node) {
  let queue = [],
    result = [];
  if (node.val) {
    queue.push(node);
    result.push(node.val);
  }

  while (queue.length != 0) {
    var curNode = queue.shift();
    if (curNode.left) {
      queue.push(curNode.left);
      result.push(curNode.left.val);
    }
    if (curNode.right) {
      queue.push(curNode.right);
      result.push(curNode.right.val);
    }
  }

  return result;
}

console.log(bfs(tree)); // ['A', 'B', 'C', 'D', 'E', 'F']

// 作者的写法
function BFS(root) {
  const queue = []; // 初始化队列queue
  // 根结点首先入队
  queue.push(root);
  // 队列不为空，说明没有遍历完全
  while (queue.length) {
    const top = queue[0]; // 取出队头元素
    // 访问 top
    console.log(top.val);
    // 如果左子树存在，左子树入队
    if (top.left) {
      queue.push(top.left);
    }
    // 如果右子树存在，右子树入队
    if (top.right) {
      queue.push(top.right);
    }
    queue.shift(); // 访问完毕，队头元素出队
  }
}
