/**
 * 计算两个单词之间的最小【编辑距离】
 * @param word1
 * @param word2
 * @returns
 */
function minDistance(word1: string, word2: string): number {
    const m = word1.length;
    const n = word2.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // 初始化第一行
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }
    // 初始化第一列
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] =
                    Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
            }
        }
    }

    return dp[m][n];
}

// 示例
console.log(minDistance('horse', 'ros')); // 输出：3
// console.log(minDistance('intention', 'execution')); // 输出：5
