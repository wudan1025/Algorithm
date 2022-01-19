/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
/*
从前序（先序）与中序遍历序列构造二叉树
题目描述：根据一棵树的前序遍历与中序遍历构造二叉树。

注意: 你可以假设树中没有重复的元素。

例如，给出
前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7
*/

// 开始 6:11 结束 6:26

// 我的写法
function createTree(preArr, midArr) {
  let curRoot = preArr.shift();
  let leftIdx = midArr.indexOf(curRoot);
  let leftArr = midArr.splice(0, leftIdx);
  let root = {
    val: curRoot,
  };
  let rightArr = midArr.splice(1);
  if (leftArr.length >= 1) {
    if (leftArr.length == 1) {
      root.left = {
        val: leftArr[0],
      };
      preArr.shift();
    } else {
      root.left = createTree(preArr, leftArr);
    }
  }
  if (rightArr.length >= 1) {
    if (rightArr.length == 1) {
      root.right = {
        val: rightArr[0],
      };
      preArr.shift();
    } else {
      root.right = createTree(preArr, rightArr);
    }
  }
  // console.log(root);
  return root;
}

let preArr = [3, 9, 20, 15, 7];
let midArr = [9, 3, 15, 20, 7];
console.log(createTree(preArr, midArr));

// 作者的写法 todo
const buildTree = function (preorder, inorder) {
  // 缓存结点总个数（遍历序列的长度）
  const len = preorder.length;
  // 定义构造二叉树结点的递归函数
  function build(preL, preR, inL, inR) {
    // 处理越界情况
    if (preL > preR) {
      return null;
    }
    // 初始化目标结点
    const root = new TreeNode();
    // 目标结点映射的是当前前序遍历序列的头部结点（也就是当前范围的根结点）
    root.val = preorder[preL];
    // 定位到根结点在中序遍历序列中的位置
    const k = inorder.indexOf(root.val);
    // 计算出左子树中结点的个数
    const numLeft = k - inL;
    // 构造左子树
    root.left = build(preL + 1, preL + numLeft, inL, k - 1);
    // 构造右子树
    root.right = build(preL + numLeft + 1, preR, k + 1, inR);
    // 返回当前结点
    return root;
  }
  // 递归构造二叉树
  return build(0, len - 1, 0, len - 1);
};
