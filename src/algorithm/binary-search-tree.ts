export interface ITreeNode {
    value: number;
    left: ITreeNode | null;
    right: ITreeNode | null;
}

const bst: ITreeNode = {
    value: 5,
    left: {
        value: 3,
        left: {
            value: 2,
            left: null,
            right: null,
        },
        right: {
            value: 4,
            left: null,
            right: null,
        },
    },
    right: {
        value: 7,
        left: {
            value: 6,
            left: null,
            right: null,
        },
        right: {
            value: 8,
            left: null,
            right: null,
        },
    },
};

/**
 * 二叉树前序遍历（使用栈）
 * @param root
 * @returns
 */
function preorderTraversal(root: ITreeNode | null): number[] {
    if (!root) return [];
    const result: number[] = [];
    const stack: ITreeNode[] = [];
    stack.push(root);

    while (stack.length) {
        const curNode = stack.pop()!;
        result.push(curNode.value);
        if (curNode.right) stack.push(curNode.right);
        if (curNode.left) stack.push(curNode.left);
    }
    return result;
}

// console.log(preorderTraversal(bst));

/**
 * 二叉树中序遍历（使用栈）
 * @param root
 * @returns
 */
function inorderTraversal(root: ITreeNode | null): number[] {
    const result: number[] = [];
    const stack: ITreeNode[] = [];
    let curNode: ITreeNode | null = root;

    while (curNode || stack.length) {
        while (curNode) {
            stack.push(curNode); // 压入当前节点
            curNode = curNode.left; // 进入左子树
        }
        curNode = stack.pop()!; // 弹出栈顶节点
        result.push(curNode.value); // 访问当前节点
        curNode = curNode.right; // 进入右子树
    }

    return result;
}

// console.log(inorderTraversal(bst));

/**
 * [230] 二叉搜索树的第 K 小的元素（中序遍历法）
 * @param root
 * @param k
 * @returns
 */
function kthSmallest(root: ITreeNode | null, k: number): number {
    const stack: ITreeNode[] = [];
    let node: ITreeNode | null = root;
    let count = 0;

    while (node || stack.length) {
        while (node) {
            stack.push(node);
            node = node.left;
        }
        node = stack.pop()!;
        count++;
        if (count === k) return node.value;
        node = node.right;
    }

    return -1; // 未找到（题目保证 k 有效）
}

console.log(kthSmallest(bst, 3));
