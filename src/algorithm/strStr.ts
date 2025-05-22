/**
 * 找出字符串中第一个匹配的下标（实现 indexOf）
 * @param haystack
 * @param needle
 * @returns
 */
function strStr(haystack: string, needle: string): number {
    const n = haystack.length;
    const m = needle.length;

    if (m === 0) return 0; // 空字符串直接返回 0
    // 只需遍历到 n - m 即可
    for (let i = 0; i < n - m; i++) {
        let j = 0;
        while (j < m && haystack[i + j] === needle[j]) {
            j++;
        }
        if (j === m) {
            return i; // 完全匹配，返回起始下标
        }
    }

    return -1; // 未找到
}

console.log(strStr('hello', 'll'));
