function verifyTreeOrder(postorder: number[]): boolean {
    const stack: number[] = [];
    let root = Infinity; // 初始化为最大值

    // 倒序遍历（根 → 右 → 左）
    for (let i = postorder.length - 1; i >= 0; i--) {
        const curr = postorder[i];
        // 如果当前节点大于根，说明不是BST
        if (curr > root) return false;

        // 如果遇到比栈顶小的元素，说明进入了左子树，弹出栈顶并更新根节点。
        while (stack.length && curr < stack[stack.length - 1]) {
            root = stack.pop()!; // 出栈
        }

        stack.push(curr); // 压栈
    }

    return true;
}

verifyTreeOrder([1, 3, 2, 6, 5]);
