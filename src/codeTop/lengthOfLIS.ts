/**
 * 最长递增子序列（不需要连续）
 * @param nums
 * @returns
 */
function lengthOfLIS(nums: number[]): number {
    if (!nums.length) return 0; // 如果数组为空，直接返回 0
    const dp = new Array(nums.length).fill(1); // 初始化数组，每个元素本身可以构成一个长度为1的递增子序列。
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1); // 状态转移
            }
        }
    }

    return Math.max(...dp);
}

// 示例
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 输出：4
// console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); // 输出：4
// console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])); // 输出：1
