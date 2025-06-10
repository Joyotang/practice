/**
 * 两数之和
 * @param nums
 * @param target
 * @returns
 */
function twoSum(nums: number[], target: number): number[] {
    const numMap = new Map(); // 用于存储数组中每个元素的值和索引
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // 计算补数

        // 检查补数是否已经在哈希表中
        if (numMap.has(complement)) {
            return [numMap.get(complement), i]; // 找到答案，返回两个索引
        }
        numMap.set(nums[i], i); // 将当前元素及其索引存入哈希表
    }
    return []; // 没有找到答案（题目保证有值，不会执行这里）
}

// 示例
console.log(twoSum([2, 7, 11, 15], 9)); // 输出：[0, 1]
console.log(twoSum([3, 2, 4], 6)); // 输出：[1, 2]
console.log(twoSum([3, 3], 6)); // 输出：[0, 1]
