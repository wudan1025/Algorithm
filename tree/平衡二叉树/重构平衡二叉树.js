/*
平衡二叉树的构造
题目描述：给你一棵二叉搜索树，请你返回一棵平衡后的二叉搜索树，新生成的树应该与原来的树有着相同的节点值。

如果一棵二叉搜索树中，每个节点的两棵子树高度差不超过 1 ，我们就称这棵二叉搜索树是平衡的。
如果有多种构造方法，请你返回任意一种。

示例：

 

输入：root = [1,null,2,null,3,null,4,null,null]

输出：[2,1,3,null,null,null,4]
解释：这不是唯一的正确答案，[3,1,4,null,2,null,null] 也是一个可行的构造方案。
提示：

树节点的数目在 1 到 10^4 之间。 树节点的值互不相同，且在 1 到 10^5 之间。
*/

var root1 = {
  val: 1,
  right: {
    val: 2,
    right: {
      val: 3,
      right: {
        val: 4,
      },
    },
  },
};

var root2 = {
  val: 3,
  left: {
    val: 0,
  },
  right: {
    val: 5,
    left: {
      val: 4,
    },
    right: {
      val: 8,
      left: {
        val: 7,
      },
      right: {
        val: 10,
        right: {
          val: 12,
          right: {
            val: 14,
          },
        },
      },
    },
  },
};

// 开始 5:14 结束 5:48 用时 34min
// 解法一 算出需要移动根的个数
function createValTree(root) {
  let leftLevel = getLevel(root.left, 2);
  let rightLevel = getLevel(root.right, 2);
  console.log(leftLevel);
  console.log(rightLevel);

  // 移动根的个数
  let moveRootLen = parseInt(Math.abs(leftLevel - rightLevel) / 2);
  console.log(moveRootLen);
  let result;
  if (rightLevel > leftLevel) {
    result = moveRootRight(root, moveRootLen);
  } else {
    result = moveRootLeft(root, moveRootLen);
  }

  function moveRootRight(root, moveRootLen) {
    let oldRoot, newRoot;
    for (let i = 0; i < moveRootLen; i++) {
      // 保存原始根的值
      oldRoot = {
        val: root.val,
        left: root.left,
      };
      // 新的根为 右子树第一个节点
      newRoot = root.right;
      // 新根的左节点合并到原来左子树的右节点上
      oldRoot.right = newRoot.left;
      newRoot.left = oldRoot;
      root = newRoot;
    }
    return newRoot;
  }

  //待验证
  function moveRootLeft(root, moveRootLen) {
    let oldRoot, newRoot;
    for (let i = 0; i < moveRootLen; i++) {
      // 保存原始根的值
      oldRoot = {
        val: root.val,
        left: root.right,
      };
      // 新的根为 左子树第一个节点
      newRoot = root.left;
      // 新根的左节点合并到原来右子树的右节点上
      oldRoot.left = newRoot.right;
      newRoot.right = oldRoot;
      root = newRoot;
    }
    return newRoot;
  }

  function getLevel(root, curLevel) {
    if (!root) return curLevel - 1;
    var leftValue = curLevel;
    var rightValue = curLevel;
    if (root.left) {
      leftValue = getLevel(root.left, curLevel + 1);
    }
    if (root.right) {
      rightValue = getLevel(root.right, curLevel + 1);
    }
    return Math.max(leftValue, rightValue);
  }

  console.log(result);
  return result;
}

// createValTree(JSON.parse(JSON.stringify(root1)));
// createValTree(JSON.parse(JSON.stringify(root2)));

// 作者提示后我的写法 方法二
//中序遍历求出有序数组
//逐个将二分出来的数组子序列“提”起来变成二叉搜索树

// 开始 5:51 结束 5:56
function createValTree2(root) {
  let rootArr = [];
  // 获取有序数组
  LDRtree(root);
  console.log(rootArr);

  // 根据数组构建平衡二叉树
  let result = create_BST(rootArr);

  function LDRtree(root) {
    if (!root) return;

    if (root.left) {
      LDRtree(root.left);
    }
    if (root.val != undefined) {
      rootArr.push(root.val);
    }
    if (root.right) {
      LDRtree(root.right);
    }
  }

  // 参见 创建BST
  function create_BST(arr) {
    if (!arr.length) return null;
    var root;
    if (arr.length == 1) {
      // 叶子节点
      root = {
        val: arr[0],
      };
      return root;
    } else {
      // 中间根节点
      var rootIdx = Math.floor(arr.length / 2);
      root = {
        val: arr[rootIdx],
      };
      // 递归创建左右子树
      // 左右子树取值截取原数组，取根左右的值
      root.left = create_BST(arr.slice(0, rootIdx));
      root.right = create_BST(arr.slice(rootIdx + 1));
      return root;
    }
  }

  console.log(result);
  return result;
}

// createValTree2(JSON.parse(JSON.stringify(root1)));
createValTree2(JSON.parse(JSON.stringify(root2)));

// 作者写法
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const balanceBST = function (root) {
  // 初始化中序遍历序列数组
  const nums = [];
  // 定义中序遍历二叉树，得到有序数组
  function inorder(root) {
    if (!root) {
      return;
    }
    inorder(root.left);
    nums.push(root.val);
    inorder(root.right);
  }

  // 这坨代码的逻辑和上一节最后一题的代码一模一样
  function buildAVL(low, high) {
    // 若 low > high，则越界，说明当前索引范围对应的子树已经构建完毕
    if (low > high) {
      return null;
    }
    // 取数组的中间值作为根结点值
    const mid = Math.floor(low + (high - low) / 2);
    // 创造当前树的根结点
    const cur = new TreeNode(nums[mid]);
    // 构建左子树
    cur.left = buildAVL(low, mid - 1);
    // 构建右子树
    cur.right = buildAVL(mid + 1, high);
    // 返回当前树的根结点
    return cur;
  }
  // 调用中序遍历方法，求出 nums
  inorder(root);
  // 基于 nums，构造平衡二叉树
  return buildAVL(0, nums.length - 1);
};
