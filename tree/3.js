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
        left: {
            val: 7,
        },
        right: {
            val: 9,
        },
    },
};

// todo 画图思考
function del_bstTree(root, val) {
    if (!root) return;
    if (root.val && root.val == val) {

        return root;
    } else if (root.val > val) {
        del_bstTree(root.left, val);
    } else {
        del_bstTree(root.right, val);
    }
}

find_bstTree(root, 4);