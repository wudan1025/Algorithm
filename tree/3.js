/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
/*
插入新结点
*/

var root = {
  val: 6,
  left: {
    val: 3,
    left: {
      val: 1,
    },
    right: {
      val: 4,
    },
  },
  right: {
    val: 8,
    right: {
      val: 9,
    },
  },
};

// 插入7
function insert_bstTree(root, val) {
  if (!root) return;
  if (root.val && root.val == val) {
    console.log('result: ' + JSON.stringify(root));
    return root;
  } else if (root.val > val) {
    find_bstTree(root.left, val);
  } else {
    find_bstTree(root.right, val);
  }
}

console.log(insert_bstTree(root, val));
