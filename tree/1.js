/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */

/* 
树的层次计算规则：
根结点所在的那一层记为第一层，
其子结点所在的就是第二层，以此类推。

结点和树的“高度”计算规则：
叶子结点高度记为1，
每向上一层高度就加1，
逐层向上累加至目标结点时，
所得到的的值就是目标结点的高度。
树中结点的最大高度，称为“树的高度”。

“度”的概念：
一个结点开叉出去多少个子树，被记为结点的“度”。
“叶子结点”：叶子结点就是度为0的结点。
*/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const node = new TreeNode(1);

console.log(node);
