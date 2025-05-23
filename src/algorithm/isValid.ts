/**
 * 有效的括号
 * @param s
 * @returns
 */
function isValid(s: string): boolean {
    const stack = [];
    const map: Record<string, string> = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    for (const char of s) {
        if (char in map) {
            stack.push(char); // 左括号入栈
        } else {
            // 如果栈为空或者栈顶不匹配，返回false
            if (stack.length === 0 || map[stack.pop()!] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0; // 栈为空则匹配
}

// console.log(isValid('()[]{}'));
// console.log(isValid('(]'));
// console.log(isValid('([)]'));
console.log(isValid('{[]}'));
