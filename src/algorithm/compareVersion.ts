/**
 * 比较版本号
 * @param version1
 * @param version2
 * @returns
 */
function compareVersion(version1: string, version2: string): number {
    // 将版本号按点分割成数组，使用 map(Number) 将每个部分转换为数字
    const v1 = version1.split('.').map(Number);
    const v2 = version2.split('.').map(Number);
    // 获取两个版本号的长度
    const maxLen = Math.max(v1.length, v2.length);

    for (let i = 0; i < maxLen; i++) {
        const num1 = i < v1.length ? v1[i] : 0; // 如果 v1[i] 不存在，默认为 0
        const num2 = i < v2.length ? v2[i] : 0; // 如果 v2[i] 不存在，默认为 0

        if (num1 > num2) return 1;
        if (num1 < num2) return -1;
    }

    return 0; // 全部相等
}
// console.log(compareVersion('1.01', '1.001')); // // 输出：0
// console.log(compareVersion('1.2', '1.10')); // 输出：-1
// console.log(compareVersion('1.3', '1.1')); // 输出：1
console.log(compareVersion('1.0', '1.0.0.0')); // 输出：0
