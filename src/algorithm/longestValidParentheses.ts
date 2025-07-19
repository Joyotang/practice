/**
 * 最长有效括号
 * @param s
 * @returns
 */
function longestValidParentheses(s: string): number {
    const stack: number[] = [-1]; // 初始化栈，放入虚拟元素 -1
    let maxLen = 0; // 最长有效括号的长度

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i); // 将 '(' 的索引入栈
        } else {
            stack.pop(); // 弹出栈顶元素
            if (stack.length === 0) {
                stack.push(i); // 如果栈为空，将当前索引入栈
            } else {
                maxLen = Math.max(maxLen, i - stack[stack.length - 1]); // 更新最长有效括号的长度
            }
        }
    }

    return maxLen;
}

/**
 * 如果栈不为空，为什么计算当前有效括号的长度是：i - stack[stack.length - 1]
 * 在计算最长有效括号长度时，栈中存储的是未匹配括号的索引。当遇到一个右括号 ')' 并且栈不为空时：
    1. 栈顶元素的含义：栈顶元素要么是最近一个未匹配的左括号 '(' 的索引，要么是最近一个未匹配的右括号 ')' 的索引（当栈为空时压入当前索引）。
    2. 计算有效长度：i 是当前右括号的索引，stack[stack.length - 1] 是最近一个未匹配括号的索引。两者的差值 i - stack[stack.length - 1] 就是当前有效括号子串的长度。
    这个公式之所以有效，是因为栈记录了最近未匹配括号的位置，从而可以快速计算出当前有效括号子串的长度。
 */

// 示例
console.log(longestValidParentheses('(()')); // 输出：2
console.log(longestValidParentheses(')()())')); // 输出：4
console.log(longestValidParentheses('')); // 输出：0
