/**
 * 将一个数组旋转 k 次
 * @param nums
 * @param k
 * @returns
 */
export function rotate(nums: number[], k: number): number[] {
    const length = nums.length;
    if (!k || !length) return nums;
    const step = Math.abs(k % length); // 考虑 k 是负数

    const part1 = nums.slice(-step); // 从数组尾部截取 step 个
    const part2 = nums.slice(0, length - step);
    return part1.concat(part2);
}
