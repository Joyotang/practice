function findMaxConsecutiveChar(str: string) {
    let maxChar = '';
    let maxCount = 0;
    let currentChar = '';
    let currentCount = 0;

    for (const char of str) {
        if (char === currentChar) {
            currentCount++;
        } else {
            // 更新最大值
            if (currentCount > maxCount) {
                maxChar = currentChar;
                maxCount = currentCount;
            }
            // 重置当前统计
            currentChar = char;
            currentCount = 1;
        }
    }
    // 检查最后一组字符
    if (currentCount > maxCount) {
        maxChar = currentChar;
        maxCount = currentCount;
    }

    return { maxChar, maxCount };
}

console.log(findMaxConsecutiveChar('aabbbcc'));
