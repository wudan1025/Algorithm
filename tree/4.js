/*
对定义的考察：二叉搜索树的验证
题目描述：给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：
节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。

示例 1:

输入:

2
/ \
1   3
输出: true

示例 2:

输入:

5
/ \
1   4
/ \
3   6
输出: false

解释: 输入为: [5, 1, 4, null, null, 3, 6]。
根节点的值为 5 ，但是其右子节点值为 4 。
*/

var root1 = {
    val: 2,
    left: {
        val: 1
    },
    right: {
        val: 3
    }
}

var root2 = {
    val: 5,
    left: {
        val: 1,
        left: 3,
        right: 6
    },
    right: {
        val: 4
    }
}

// 验证BST
// 边界条件设置？
var result = true
function verify_BST(root) {
    if (!root) {
        // return true
        return true
    }

    if (root.left) {
        if (root.val >= root.left.val) {
            return verify_BST(root.left)
        }
        else {
            // return false
            // console.log(false)
            // break
            result = false
            return false

        }
    }

    if (root.right) {
        if (root.val <= root.right.val) {
            return verify_BST(root.right)
        }
        else {
            // return false
            // console.log(false)
            // break
            result = false
            return false
        }
    }

    return result
}

// console.log(verify_BST(root1))
console.log(verify_BST(root2))