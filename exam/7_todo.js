/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
/*
寻找二叉树的最近公共祖先
题目描述： 给定一个二叉树, 
找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：
“对于有根树 T 的两个结点 p、q，
最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大
（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉树:  
root = [3,5,1,6,2,0,8,null,null,7,4]
示例 1:

输入: root = [3,5,1,6,2,0,8,null,null,7,4], 
p = 5, q = 1
输出: 3
解释: 节点 5 和节点 1 的最近公共祖先是节点 3。

示例 2:

输入: root = [3,5,1,6,2,0,8,null,null,7,4],
 p = 5, q = 4
输出: 5
解释: 节点 5 和节点 4 的最近公共祖先是节点 5。
因为根据定义最近公共祖先节点可以为节点本身。
*/

var root = {
  val: 3,
  left: {
    val: 5,
    left: {
      val: 6,
    },
    right: {
      val: 2,
      left: {
        val: 7,
      },
      right: {
        val: 4,
      },
    },
  },
  right: {
    val: 1,
    left: {
      val: 0,
    },
    right: {
      val: 8,
    },
  },
};
// 我的写法修改后正确，需要 重新默写

function findParent(root, val1, val2) {
  function find(root) {
    // debugger
    if (!root || root.val == undefined) {
      // 只有此时，返回的是 false
      return root;
    }
    // console.log(root.val)
    if (root.val == val1) {
      // debugger
      return root
    }
    if (root.val == val2) {
      // debugger
      return root
    }

    let leftResult = find(root.left);
    let rightResult = find(root.right);

    // 两个节点都为true
    if (leftResult && rightResult) {
      return root
    }
    return leftResult || rightResult
  }
  return find(root)
}

// 问题 如果是父子节点，可能会出现，另一个节点不存在的情况
// 需要出题限制
result = findParent(root, 2, 9);
console.log(result)

// 作者的做法
/**
 * 二叉树结点的结构定义如下
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
  // 编写 dfs 逻辑
  function dfs(root) {
    // 若当前结点不存在（意味着无效）或者等于p/q（意味着找到目标），则直接返回
    if (!root || root.val === p || root.val === q) {
      return root;
    }
    // 向左子树去寻找p和q
    const leftNode = dfs(root.left);
    // 向右子树去寻找p和q
    const rightNode = dfs(root.right);
    // 如果左子树和右子树同时包含了p和q，那么这个结点一定是最近公共祖先
    if (leftNode && rightNode) {
      return root;
    }
    // 如果左子树和右子树其中一个包含了p或者q，则把对应的有效子树汇报上去，等待进一步的判断；否则返回空
    return leftNode || rightNode;
  }

  // 调用 dfs 方法
  return dfs(root);
};

// console.log(lowestCommonAncestor(root, 2, 6));
