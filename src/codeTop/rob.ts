function rob(nums: number[]): number {
    if (nums.length === 0) return 0; // 如果没有房子，返回0
    if (nums.length === 1) return nums[0]; // 如果只有一个房子，返回该房子的金额

    const dp = [];
    dp[0] = nums[0]; // 第一个房子的金额
    dp[1] = Math.max(nums[0], nums[1]); // 比较第一个和第二个房子的金额，选取最大的开始偷

    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]); // 状态转移
    }

    return dp[nums.length - 1]; // 返回最后一个房子的最高金额
}
