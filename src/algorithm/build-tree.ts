export interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    // 如果前序序列为空，直接返回 null（空树）
    if (!preorder.length) return null;

    // 1. 前序的第一个节点是根节点，创建根节点并压入栈
    const root: TreeNode = { val: preorder[0], left: null, right: null };
    const stack: TreeNode[] = [root]; // 用栈模拟递归过程

    // 2. 初始化中序指针，指向第一个待匹配的节点
    let inorderIndex = 0;

    // 3. 遍历前序序列（从第 2 个元素开始）
    for (let i = 1; i < preorder.length; i++) {
        // 当前前序节点
        const currentNode: TreeNode = {
            val: preorder[i],
            left: null,
            right: null,
        };
        // 栈顶节点（当前子树的父节点）
        let parentNode = stack[stack.length - 1];

        // 情况 1：栈顶节点的值 ≠ 中序当前值
        // 说明当前节点是栈顶节点的左孩子
        if (parentNode.val !== inorder[inorderIndex]) {
            parentNode.left = currentNode; // 连接左孩子
        }
        // 情况 2：栈顶节点的值 == 中序当前值
        // 说明栈顶节点的左子树已经遍历完，需要找右孩子
        else {
            // 不断弹出栈顶节点，直到栈顶节点的值 ≠ 中序当前值
            // 同时移动中序指针，表示这些节点已经处理完毕
            while (
                stack.length &&
                stack[stack.length - 1].val === inorder[inorderIndex]
            ) {
                parentNode = stack.pop()!; // 弹出栈顶节点
                inorderIndex++; // 移动中序指针
            }
            // 此时的当前节点是最后一个弹出节点的右孩子
            parentNode.right = currentNode; // 连接右孩子
        }

        // 将当前节点压入栈中，继续处理它的子树
        stack.push(currentNode);
    }

    // 返回根节点
    return root;
}

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];
buildTree(preorder, inorder);
