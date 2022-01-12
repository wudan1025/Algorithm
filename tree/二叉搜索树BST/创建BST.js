/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
/*
对特性的考察：将排序数组转化为二叉搜索树
题目描述：将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:

给定有序数组: [-10,-3,0,5,9],
一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5
 */
// 开始 2:39 结束

// root = {
//   val: 0,
//   left: {
//     val: -3,
//     left: {
//       val: -10,
//     },
//   },
//   right: {
//     val: 9,
//     left: {
//       val: 5,
//     },
//   },
// };

var arr1 = [-10, -3, 0, 5, 9];
var arr2 = [-10, -8, -3, 0, 5, 7, 9, 10];

// 我的做法
// 开始 2:38 结束 2:52 用时 14min
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

console.log(create_BST(arr1));
console.log(create_BST(arr2));

// 作者的写法

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function (nums) {
  // 处理边界条件
  if (!nums.length) {
    return null;
  }

  // root 结点是递归“提”起数组的结果
  const root = buildBST(0, nums.length - 1);

  // 定义二叉树构建函数，入参是子序列的索引范围
  function buildBST(low, high) {
    // 当 low > high 时，意味着当前范围的数字已经被递归处理完全了
    if (low > high) {
      return null;
    }
    // 二分一下，取出当前子序列的中间元素
    const mid = Math.floor(low + (high - low) / 2);
    // 将中间元素的值作为当前子树的根结点值
    const cur = new TreeNode(nums[mid]);
    // 递归构建左子树，范围二分为[low,mid)
    cur.left = buildBST(low, mid - 1);
    // 递归构建左子树，范围二分为为(mid,high]
    cur.right = buildBST(mid + 1, high);
    // 返回当前结点
    return cur;
  }
  // 返回根结点
  return root;
};
