/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
/*
平衡二叉树的判定
题目描述：给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为： 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。

示例 1:

给定二叉树 [3,9,20,null,null,15,7]

    3
   / \
  9  20
    /  \
   15   7
返回 true 。

示例 2:

给定二叉树 [1,2,2,3,3,null,null,4,4]

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
返回 false 。
*/

// 开始 3:30 结束 3:42 用时12分钟

var root1 = {
  val: 3,
  left: {
    val: 9,
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

var root2 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      right: {
        val: 4,
      },
      left: {
        val: 4,
        // left: {
        //   val: 5,
        // },
      },
    },
    right: {
      val: 3,
    },
  },
  right: {
    val: 2,
  },
};

// 我的做法
// 分别找到左边最高和右边最高 做差值
function judge_AVLTree(root) {
  let flag = true;
  function recursion(root, levels) {
    if (!root || !flag) return levels;
    var rootLeftLevels = recursion(root.left, levels + 1);
    var rootRightLevels = recursion(root.right, levels + 1);

    // 废弃 需要区分层级
    // if (levels == 0) {
    //   // 计算出左右子树最高高度
    //   // console.log(rootLeftLevels);
    //   // console.log(rootRightLevels);
    //   // 返回差值
    //   // if (Math.abs(rootLeftLevels - rootRightLevels) > 1) flag = false;
    // } else {
    //   // console.log('rootLeftLevels' + rootLeftLevels);
    //   // console.log('rootRightLevels' + rootRightLevels);
    //   // 返回每一个子树的最大高度
    //   // return Math.max(rootLeftLevels, rootRightLevels);
    // }

    // 中途已经发现左右子树不平衡 设置flag 停止后面的比较
    if (Math.abs(rootLeftLevels - rootRightLevels) > 1) {
      flag = false;
    } else {
      return Math.max(rootLeftLevels, rootRightLevels);
    }
  }
  recursion(root, 0);
  return flag;
}
console.log(judge_AVLTree(root1));
console.log(judge_AVLTree(root2));

// 作者的做法
const isBalanced = function (root) {
  // 立一个flag，只要有一个高度差绝对值大于1，这个flag就会被置为false
  let flag = true;
  // 定义递归逻辑
  function dfs(root) {
    // debugger;
    // 如果是空树，高度记为0；如果flag已经false了，那么就没必要往下走了，直接return
    if (!root || !flag) {
      return 0;
    }
    // console.log('start---');
    // console.log('root.left' + JSON.stringify(root.left));
    // console.log('root.right' + JSON.stringify(root.right));

    // 计算左子树的高度
    const left = dfs(root.left);
    // 计算右子树的高度
    const right = dfs(root.right);
    // console.log('left' + left);
    // console.log('right' + right);
    // console.log('end---');
    // 如果左右子树的高度差绝对值大于1，flag就破功了
    if (Math.abs(left - right) > 1) {
      // debugger;
      flag = false;
      // 后面再发生什么已经不重要了，返回一个不影响回溯计算的值
      return 0;
    }
    // 返回当前子树的高度
    return Math.max(left, right) + 1;
  }

  // 递归入口
  dfs(root);
  // 返回flag的值
  return flag;
};

// console.log(isBalanced(root1));
// console.log(isBalanced(root2));
