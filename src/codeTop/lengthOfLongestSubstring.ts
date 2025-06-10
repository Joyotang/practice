/**
 * 无重复字符的最长子串
 * @param s
 * @returns
 */
function lengthOfLongestSubstring(s: string): number {
    let left = 0; // 左指针
    let right = 0; // 右指针
    let maxLen = 0; // 无重复字符的最长子串的长度
    const charSet = new Set<string>(); // 用于记录当前子串中出现的字符

    while (right < s.length) {
        if (!charSet.has(s[right])) {
            charSet.add(s[right]); // 添加当前字符到集合
            maxLen = Math.max(maxLen, right - left + 1); // 更新最大长度
            right++; // 移动右指针
        } else {
            charSet.delete(s[left]); // 移除左指针指向的字符
            left++; // 移动左指针
        }
    }

    return maxLen; // 返回无重复字符的最长子串的长度
}
