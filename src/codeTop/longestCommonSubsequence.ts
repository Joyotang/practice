/**
 * 最长公共子序列
 * 讲解视频：https://www.bilibili.com/video/BV1ey4y1d7oD/?spm_id_from=333.1387.upload.video_card.click&vd_source=f5e38c3254b4c617936ba29f1d3ceda2
 * @param text1
 * @param text2
 * @returns
 */
function longestCommonSubsequence(text1: string, text2: string): number {
    const m = text1.length;
    const n = text2.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1; // 假设最后一个字符相等，那么当前的值就是左上角的值 + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // 取上方和左方的最大值
            }
        }
    }

    return dp[m][n];
}

// 示例
console.log(longestCommonSubsequence('abcde', 'ace')); // 输出：3
console.log(longestCommonSubsequence('abc', 'abc')); // 输出：3
console.log(longestCommonSubsequence('abc', 'def')); // 输出：0
